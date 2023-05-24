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

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import postCssUrl from "postcss-url";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src/components",
      entryFileNames: "[name].esm.js",
      exports: "named"
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src/components",
      entryFileNames: "[name].cjs.js",
      exports: "named"
    }
  ],
  plugins: [
    peerDepsExternal(),
    styles({
      mode: ["inject"],
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
    {
      name: "Replace node_modules with dependency",
      // https://github.com/egoist/rollup-plugin-postcss/issues/381#issuecomment-862359662
      generateBundle: (options, bundle) => {
        Object.entries(bundle).forEach(entry => {
          // Replace the node_modules/style-inject reference with the style-inject package dependency.
          if (entry[0].match(/.*(.scss.js)$/)) {
            bundle[entry[0]].code = entry[1].code.replace(
              /import\s?(\w+)?\s?from\s?["'](\.\.\/|\.\/){1,5}node_modules\/rollup-plugin-styles\/dist\/runtime\/inject-css.js["'];?/,
              'var containers=[],styleTags=[];const $1 = function(e,t){if(e&&"undefined"!=typeof document){var n,s=!0===t.prepend?"prepend":"append",r=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(r){var i=containers.indexOf(a);-1===i&&(i=containers.push(a)-1,styleTags[i]={}),n=styleTags[i]&&styleTags[i][s]?styleTags[i][s]:styleTags[i][s]=c()}else n=c();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),r=0;r<n.length;r++)e.setAttribute(n[r],t.attributes[n[r]]);var i="prepend"===s?"afterbegin":"beforeend";return a.insertAdjacentElement(i,e),e}};'
            );
            return;
          }
        });
      }
    },
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    terser()
  ],
  external: ["react", "react-dom"]
};
