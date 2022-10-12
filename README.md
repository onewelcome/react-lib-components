# OneWelcome React Component Library

# VERSION 1.0: AQUAMAN

<p align="center">
 <img src="https://media.tenor.com/nGWukNYUMdUAAAAC/king-aquaman-strong-man.gif" alt="Aquaman" />
</p>

This project provides React components built according to the [UI Component Library design](https://xd.adobe.com/view/1f7161d7-5ade-4e54-bb3d-6e4aa3a1d1a0-4a22/grid/). It uses the [DTS tool](https://weiran-zsd.github.io/dts-cli/) which provides for a consistent setup and configuration.

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

See [adding icons to font manual](font/README.md)

## Code quality

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. This is to ensure that formatting is the same in every file of the component library. If you would like to suggest a change, please let the `SASSy` team know.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visualise it with `npm run analyze`.

### Rollup

[DTS](https://weiran-zsd.github.io/dts-cli/) uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Release

The publishing process is fired by git tag creation. CircleCI builds a package and publishes it to the public npmjs.com registry.
Release notes should be provided via GitHub UI.
After a successful release, the release notes are published on `#releases` slack channel.

### Creating release

Follow these steps to create a release:

- note all changes introduced from the last release
- create a release on the GitHub repository page:
  - determine new version (bugfix/minor/major)
  - put proper release notes based on previous releases
  - click on the `CREATE RELEASE` button
- check if the release is published on `https://www.npmjs.com/package/@onewelcome/react-lib-components`
