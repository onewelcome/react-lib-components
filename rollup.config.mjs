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
import postcss from "postcss";
import cssModules from "postcss-modules";
import postcssUrl from "postcss-url";
import autoprefixer from "autoprefixer";
import virtual from "@rollup/plugin-virtual";

const packageJson = require("./package.json");

const cssModulesMap = new Map();

const baseConfig = {
  plugins: [
    resolve(),
    commonjs(),

    /* rollup-plugin-sass with postcss */
    sass({
      api: "modern",
      options: {
        sourceMap: true
      },
      processor: async (css, filePath) => {
        let classMap = {};

        // Process with PostCSS
        const result = await postcss([
          // Handle CSS modules and export class names
          cssModules({
            getJSON: (cssFileName, json) => {
              classMap = json;
            },
            generateScopedName: "[name]_[local]_[hash:base64:5]"
          }),
          // Convert URLs to data URLs
          postcssUrl({
            url: "inline", // Convert to data URLs
            maxSize: 10, // Only inline files under 10kb
            fallback: "copy" // Copy larger files
          }),
          // Add vendor prefixes
          autoprefixer()
        ]).process(css, {
          from: filePath,
          to: path.basename(filePath).replace(".scss", ".css")
        });

        // // Generate a JS module exporting the CSS classes
        const jsFilename = filePath.replace(".scss", ".scss.js");

        // Generate JS module as a virtual Rollup module
        // const jsContent = `
        //   import styleInject from 'style-inject';
        //   const css = ${JSON.stringify(result.css)};
        //   styleInject(css);
        //   export default ${JSON.stringify(classMap)};
        // `;

        // fs.writeFileSync(jsFilename, jsContent, "utf-8");
        // console.log("xx a", jsFilename);
        // console.log("xx a1", result);

        const virtualModule = `/*xx 1*/
          import styleInject from 'style-inject';
          import cssText from '${filePath.replace(".scss", ".css")}';
          styleInject(cssText);
          export default ${JSON.stringify(classMap)};
        `;

        // Store the virtual module for Rollup to use
        cssModulesMap.set(filePath, virtualModule);

        return {
          css: "/*xx 0*/" + result.css,
          cssModules: classMap
          // Optional: write JS module file
          // map: result.map ? result.map.toString() : undefined
        };
      }
    }),
    // virtual(cssModulesMap),

    /* rollup-plugin-sass with hand made transformations */
    // sass({
    //   api: "modern",
    //   options: {
    //     sourceMap: true //TODO does not seem to produce source maps
    //   },
    //   processor: (css, filePath) => {
    //     const classMap = {};

    //     css = resolveFontUrls(css, filePath);
    //     css = resolveAssetUrls(css, filePath);
    //     css = transformClassNames(css, filePath, classMap);

    //     return {
    //       css: "/*xx 1*/" + css,
    //       cssModules: classMap
    //     };
    //   }
    // }),

    // /* rollup-plugin-styles - 3 years without updata */
    // styles({
    //   mode: "inject", // Enables automatic style injection
    //   modules: true, // Enables CSS Modules
    //   sourceMap: true, // Generates source maps
    //   minimize: true // Minifies CSS
    // }),

    // /* rollup-plugin-postcss - 4 years without updata */
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
