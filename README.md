# OneWelcome React Component Library

This project provides 

> Note: the package is publicly available.

## Commands

### Component library

Run lib locally:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To run tests, use `npm test` or `yarn test`.

```bash
npm test # or yarn test
```

### Storybook

Run Storybook locally:

```bash
npm run storybook # or yarn storybook
```

## Development
Development is done inside of `src`, `stories`.

```bash
- src
	- ComponentName <folder>
		- Component.tsx
		- Component.module.scss
		- ComponentName.test.tsx
- stories
	- ComponentName <folder>
	- ComponentName.stories.tsx
```

Whenever you are done developing a component and you want to include it in the production library, make sure to export it through `src/index.tsx`. This ensures that when you run `npm run build`, it will get included.

### Adding new icons

See [adding icons to font manual](font/README.md)

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

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