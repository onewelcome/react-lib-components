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
  plugins: ["react", "@typescript-eslint", "jest", "cypress", "react-hooks"],
  rules: {},
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-unused-vars": "warn",
        "react/display-name": "warn",
        "react/no-children-prop": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
        "no-useless-escape": "warn",
        "react/prop-types": 0
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};
