/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import terser from "@rollup/plugin-terser";
import path from "path";

const packageJson = require("./package.json");

const generateRandomSalt = (length = 5) => {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let salt = "";
  for (let i = 0; i < length; i++) {
    salt += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return salt;
};
const randomSalt = generateRandomSalt();

const baseConfig = {
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      modules: {
        generateScopedName: (name, filename) => {
          const filenameWithoutExt = path.basename(filename).split(".")[0];
          return `${filenameWithoutExt}_${name}_${randomSalt}`;
        }
      },
      inject: true,
      minimize: true,
      sourceMap: true,
      plugins: [
        postcssUrl({
          url: "inline",
          encodeType: "base64",
          maxSize: Infinity
        })
      ]
    }),
    {
      name: "Replace node_modules with dependency",
      generateBundle: (options, bundle) => {
        Object.entries(bundle).forEach(([fileName, file]) => {
          // Target specific files (e.g., .scss.js or module.esm.js)
          if (fileName.match(/.*(.module.esm.js)$/)) {
            // Replace style-inject import with a custom resolution or code snippet
            const relativePath = path.relative(
              path.dirname(path.resolve("dist", fileName)),
              path.resolve("lib/style-inject.js")
            );
            file.code = file.code.replace(
              /import\s?(\w+)?\s?from\s?["'](\.\.\/|\.\/){1,5}node_modules\/style-inject\/dist\/style-inject.es.(esm).?js["'];?/,
              `import $1 from "${relativePath}";`
            );
          } else if (fileName.match(/.*(.module.cjs.js)$/)) {
            // Replace tslib import with a custom resolution or code snippet
            const relativePath = path.relative(
              path.dirname(path.resolve("dist", fileName)),
              path.resolve("lib/style-inject.js")
            );
            file.code = file.code.replace(
              /require\(["'](\.\.\/|\.\/){1,5}node_modules\/style-inject\/dist\/style-inject.es.(cjs).?js["']\);?/,
              `require("${relativePath}");`
            );
          }
        });
      }
    }
  ],
  external: Object.keys(packageJson.peerDependencies || {})
};

const libsConfig = {
  input: {
    "style-inject": require.resolve("style-inject")
  },
  output: {
    dir: "dist/lib",
    format: "cjs",
    sourcemap: true,
    exports: "named"
  },
  plugins: [resolve(), commonjs()]
};

const esmConfig = {
  ...baseConfig,
  input: "src/index.ts",
  output: {
    dir: "dist/esm",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: "[name].esm.js",
    exports: "named"
  },
  plugins: [...baseConfig.plugins, typescript({ tsconfig: "tsconfig.esm.json" })]
};

const cjsConfig = {
  ...baseConfig,
  input: "src/index.ts",
  output: {
    dir: "dist/cjs",
    format: "cjs",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: "[name].cjs.js",
    exports: "named"
  },
  plugins: [...baseConfig.plugins, typescript({ tsconfig: "tsconfig.cjs.json" }), terser()]
};

export default [esmConfig, cjsConfig, libsConfig];
