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

const replace = require("@rollup/plugin-replace");
const styles = require("rollup-plugin-styles");
const cleanup = require("rollup-plugin-cleanup");

const STATIC_CSP_NONCE = "DsPHCoJqXm4vKCqFrm03y1";

module.exports = {
  rollup(config, opts) {
    config.plugins = config.plugins.map(p =>
      p.name === "replace"
        ? replace({
            "process.env.NODE_ENV": JSON.stringify(opts.env),
            preventAssignment: true
          })
        : p
    );

    config.plugins.push(cleanup({ extensions: ["js", "ts"] }));

    config.plugins.push(
      styles({
        mode: ["inject", { attributes: { nonce: STATIC_CSP_NONCE } }],
        modules: true,
        minimize: { preset: ["default", { discardComments: { removeAll: true } }] }
      })
    );

    return config;
  }
};
