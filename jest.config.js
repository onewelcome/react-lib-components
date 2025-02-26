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

/**
 * Identity obj proxy is needed for jest to be able to properly import scss files.
 */
module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  },
  modulePathIgnorePatterns: [".yalc"],
  testResultsProcessor: "jest-sonar-reporter",
  resetMocks: true,
  testEnvironment: "jest-environment-jsdom",
  transform: { "^.+\\.ts?$": "ts-jest", "^.+\\.(js|jsx)$": "babel-jest" },
  moduleDirectories: ["node_modules"]
};
