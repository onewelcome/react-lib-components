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

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postCssUrl from "postcss-url";
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

const STATIC_CSP_NONCE = "DsPHCoJqXm4vKCqFrm03y1";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      exports: "named"
    }
  ],
  plugins: [
    styles({
      mode: ["inject", { attributes: { nonce: STATIC_CSP_NONCE } }],
      modules: true,
      minimize: { preset: ["default", { discardComments: { removeAll: true } }] },
      plugins: [
        postCssUrl({
          url: "inline",
          encodeType: "base64",
          maxSize: Infinity
        })
      ]
    }),
    typescript(),
    commonjs(),
    resolve({ extensions: [".js", ".ts", ".tsx"] }),
    terser(),
    json(),
    {
      name: "Replace node_modules with dependency",

      generateBundle: (options, bundle) => {
        Object.entries(bundle).forEach(entry => {
          // Replace the node_modules/inject-css reference with the inject-css package dependency.
          if (entry[0].match(/.*(.scss.js)$/)) {
            bundle[entry[0]].code = entry[1].code.replace(
              /(\.\.\/|\.\/){1,5}node_modules\/rollup-plugin-styles\/dist\/runtime\/inject-css.js/,
              "rollup-plugin-styles/dist/runtime/inject-css"
            );
            return;
          }

          if (entry[0].match(/.*(.js)$/)) {
            // Replace the node_modules/tslib reference with the tslib package dependency.
            bundle[entry[0]].code = entry[1].code.replace(
              /(\.\.\/|\.\/){1,5}node_modules\/tslib\/tslib.es6.js/,
              "tslib"
            );
            return;
          }
        });
      }
    }
  ],
  external: ["react", "react-dom"]
};
