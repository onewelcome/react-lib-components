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
import terser from "@rollup/plugin-terser";
import path from "path";
import fs from "fs";
import sass from "rollup-plugin-sass";

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

const generateScopedName = (name, filename) => {
  const filenameWithoutExt = path.basename(filename).split(".")[0];
  return `${filenameWithoutExt}_${name}_${randomSalt}`;
};

function transformClassNames(css, filePath, classMap) {
  return css.replace(/\.([\w\-]+)/g, (_, className) => {
    const scopedName = generateScopedName(className, filePath);
    classMap[className] = scopedName;
    return `.${scopedName}`;
  });
}

const resolveFontUrls = (css, filePath) => {
  return css.replace(/url\(["']?(.*?)(\?.*?)?["']?\)/g, (match, fontPath, queryParams) => {
    if (fontPath.startsWith("http") || fontPath.startsWith("data:")) {
      return match;
    }

    const fontAbsolutePath = path.resolve(path.dirname(filePath), fontPath);
    if (fs.existsSync(fontAbsolutePath)) {
      const fontBase64 = fs.readFileSync(fontAbsolutePath).toString("base64");
      const mimeType = fontPath.endsWith(".eot")
        ? "application/vnd.ms-fontobject"
        : fontPath.endsWith(".woff2")
          ? "font/woff2"
          : fontPath.endsWith(".woff")
            ? "font/woff"
            : fontPath.endsWith(".ttf")
              ? "font/ttf"
              : fontPath.endsWith(".otf")
                ? "font/otf"
                : "application/octet-stream";

      const transformed = `url("data:${mimeType};base64,${fontBase64}")`;
      return transformed;
    }

    return `url('${fontPath}')`;
  });
};

const resolveAssetUrls = (css, filePath) => {
  return css.replace(/url\(["']?(.*?)["']?\)/g, (match, assetPath) => {
    if (assetPath.startsWith("http") || assetPath.startsWith("data:")) {
      return match;
    }

    const assetAbsolutePath = path.resolve(path.dirname(filePath), assetPath);
    if (fs.existsSync(assetAbsolutePath)) {
      const assetBase64 = fs.readFileSync(assetAbsolutePath).toString("base64");
      const mimeType = assetPath.endsWith(".svg")
        ? "image/svg+xml"
        : assetPath.endsWith(".png")
          ? "image/png"
          : assetPath.endsWith(".jpg") || assetPath.endsWith(".jpeg")
            ? "image/jpeg"
            : "application/octet-stream";

      const transformed = `url("data:${mimeType};base64,${assetBase64}")`;
      return transformed;
    }

    return match;
  });
};

const baseConfig = {
  plugins: [
    resolve(),
    commonjs(),
    sass({
      api: "modern",
      options: {
        sourceMap: true //TODO does not seem to produce source maps
      },
      processor: (css, filePath) => {
        const classMap = {};

        css = resolveFontUrls(css, filePath);
        css = resolveAssetUrls(css, filePath);
        css = transformClassNames(css, filePath, classMap);

        return {
          css,
          content: classMap
        };
      }
    }),
    // postcss({
    //   use: [
    //     [
    //       "sass",
    //       {
    //         implementation: sass
    //         // silenceDeprecations: ["legacy-js-api"] // TODO remove this silencer with fix of UCL-585
    //       }
    //     ]
    //   ],
    //   modules: {
    //     generateScopedName: (name, filename) => {
    //       const filenameWithoutExt = path.basename(filename).split(".")[0];
    //       return `${filenameWithoutExt}_${name}_${randomSalt}`;
    //     }
    //   },
    //   inject: true,
    //   minimize: true,
    //   sourceMap: true,
    //   plugins: [
    //     postcssUrl({
    //       url: "inline",
    //       encodeType: "base64",
    //       maxSize: Infinity
    //     })
    //   ]
    // }),
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
    preserveModulesRoot: "src/components",
    entryFileNames: "[name].esm.js",
    exports: "named"
  },
  plugins: [...baseConfig.plugins, typescript({ tsconfig: "./tsconfig.esm.json" })]
};

const cjsConfig = {
  ...baseConfig,
  input: "src/index.ts",
  output: {
    dir: "dist/cjs",
    format: "cjs",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src/components",
    entryFileNames: "[name].cjs.js",
    exports: "named"
  },
  plugins: [...baseConfig.plugins, typescript({ tsconfig: "./tsconfig.cjs.json" }), terser()]
};

export default [esmConfig, cjsConfig, libsConfig];
