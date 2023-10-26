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

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  stories: ["../stories/intro.stories.mdx", "../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@onewelcome/storybook-addon-basestyling",
    "storybook-addon-pseudo-states"
  ],
  webpackFinal: async (config, { configType }) => {
    config.devtool = configType === "PRODUCTION" ? false : "eval-source-map";
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
      }
    });
    if (configType === "PRODUCTION") {
      config.optimization.minimizer = config.optimization.minimizer.filter(plugin => {
        return plugin.constructor.name !== "TerserPlugin";
      });
    }
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        },
        "sass-loader"
      ],
      include: path.resolve(__dirname, "../")
    });
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  typescript: {
    check: true
  },

  staticDirs: ["../public"],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};
