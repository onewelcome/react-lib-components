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

module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
    node: true,
    "cypress/globals": true
  },
  extends: ["@onewelcome/eslint-config-shared-codestyle", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "jest", "cypress", "react-hooks", "license-header"],
  ignorePatterns: ["dist/", "stories/types.d.ts", "setupTests.ts", "vite.config.ts"],
  rules: { "license-header/header": ["error", "copyright.txt"] },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-unused-vars": "off", //we have "@typescript-eslint/no-unused-vars"
        "react/display-name": "error",
        "react/no-children-prop": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "no-useless-escape": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "react/prop-types": "off"
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};
