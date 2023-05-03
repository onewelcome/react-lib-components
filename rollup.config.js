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
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

const postcssOptions = () => ({
  extensions: [".scss", ".css"],
  use: ["sass"],
  modules: true
});

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/react-lib-components.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named"
    },
    {
      file: "dist/react-lib-components.esm.js",
      format: "esm",
      sourcemap: true,
      exports: "named"
    }
  ],
  plugins: [
    peerDepsExternal(),
    postcss(postcssOptions()),
    typescript(),
    commonjs(),
    resolve({ extensions: [".js", ".ts", ".tsx"] }),
    terser(),
    json()
  ]
};
