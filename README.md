# OneWelcome React Component Library

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

TBD.