# OneWelcome React Component Library

[![CircleCI status](https://circleci.com/gh/onewelcome/react-lib-components.svg?style=svg)](<https://circleci.com>)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=onewelcome_react-lib-components&metric=alert_status&token=bfd2f636f3bec9d8df5f67a3c2881238964a8d5a)](https://sonarcloud.io/summary/new_code?id=onewelcome_react-lib-components)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=onewelcome_react-lib-components&metric=vulnerabilities&token=bfd2f636f3bec9d8df5f67a3c2881238964a8d5a)](https://sonarcloud.io/summary/new_code?id=onewelcome_react-lib-components)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=onewelcome_react-lib-components&metric=coverage&token=bfd2f636f3bec9d8df5f67a3c2881238964a8d5a)](https://sonarcloud.io/summary/new_code?id=onewelcome_react-lib-components)


![NPM Version](https://img.shields.io/npm/v/%40onewelcome%2Freact-lib-components)
![NPM Downloads](https://img.shields.io/npm/dw/%40onewelcome%2Freact-lib-components)
[![NPM Outdated version download](https://img.shields.io/badge/dynamic/xml?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40onewelcome%2Freact-lib-components%3FactiveTab%3Dversions&query=sum(%2F%2F*%5B%40id%3D%22tabpanel-versions%22%5D%2F%2Fli%5Bnot(starts-with(.%2F%2Fa%2F%40aria-label%2C%20substring-before(substring-after((%2F%2F*%5B%40id%3D%22tabpanel-versions%22%5D%2F%2Fa%2F%40aria-label)%5B1%5D%2C%20%22%22)%2C%20%22.%22)))%20and%20position()%20%3E%202%5D%2F%2F*%5B%40class%3D%22downloads%22%5D%2Ftext())&suffix=%2Fweek&label=outdated%20versions%20downloads&color=red&cacheSeconds=600)](https://www.npmjs.com/package/@onewelcome/react-lib-components?activeTab=versions)


This project provides React components built according to the OneWelcome design.
We recommend visiting our [Storybook page](https://onewelcome.github.io/react-lib-components) to see the components in action.

> Note: the package is publicly available [on npm](https://www.npmjs.com/package/@onewelcome/react-lib-components).

## Commands

### Component library

When you are developing for the component library, you're going to want to run the Typescript compiler, test watcher and storybook. Please see the commands below for more information.

Run the Typescript compiler:

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To run tests, use `npm test`

```bash
npm test
```

For running and watching tests, use `npm test -- --watch`.

```bash
npm test -- --watch
```

### Storybook

Run Storybook locally:

```bash
npm run storybook
```

### All at once

When developing stories, components and tests at the same time, it may be easier to run the command `npm run dev`. This will run the commands `start`, `test:watch` and `storybook` in parallel.

```bash
npm run dev
```

## Development

Please see the [CONTRIBUTING.md](https://github.com/onewelcome/react-lib-components/blob/master/CONTRIBUTING.md) file for information on how to develop for the Component Library.

### Adding new icons

See [adding icons to font manual](src/font/README.md)

## Code quality

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. This is to ensure that formatting is the same in every file of the component library. If you would like to suggest a change, please let the `SASSy` team know.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visualise it with `npm run analyze`.

### Rollup

We use [Rollup](https://rollupjs.org) as a bundler and generate multiple rollup configs for various module formats and build settings. We output both `CommonJS` and `Ecmascript Modules` format. Treeshaking is supported and will work if your application is setup correctly and is built for production.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Release

The publishing process is fired by git tag creation. CircleCI builds a package and publishes it to the public npmjs.com registry.
Release notes should be provided via GitHub UI.
After a successful release, the release notes are published via Slack.

### Creating a release

Follow these steps to create a release:

- note all changes introduced from the last release
- create a release on the GitHub repository page:
  - determine new version (bugfix/minor/major)
  - put proper release notes based on previous releases
  - click on the `CREATE RELEASE` button
- check if the release is published on `https://www.npmjs.com/package/@onewelcome/react-lib-components`
