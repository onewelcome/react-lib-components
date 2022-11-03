# Storybook BaseStyling addon

This addon is written so that end-users can easily change global color variables without having to do into the browser' devtools.

## Technical explanation

The addon works by exporting the global decorator `withBaseStyling` inside of `src/preset/preview.ts`. This decorator export will be plugged into the `react-lib-component` Storybook instance by adding it to the `addons` array in  `main.js` file inside of `/.storybook/main.js`.

The `withBaseStyling` decorator creates a [global variable](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#consuming-globals-from-within-an-addon) called `baseStyling`. On initial render of the `withBaseStyling` decorator, the `html` element with all the `style` variables hasn't loaded yet, so we use a `setTimeout`, which waits `1ms`, to make sure everything is loaded. 

After everything is loaded we parse all of the `style` variables that are added to the `html` element. 

**This means, that this package WILL BREAK when we add anything else to the `style` attribute of the `html` element.**

Currently there's no other way to easily grab all of the CSS variables **dynamically**. We also cannot import the object from our `BaseStyling` component, because Storybook will complain that you're trying to access something **outside** of this addon. We would have to duplicate all of the properties and keep updating this package whenever we add a new variable. I wanted it to be dynamic, so for now we're parsing the `html` element's `style` attribute within the `Story`'s `iframe`.

After we've parsed all of the CSS properties into an object, we update the `baseStyling` global (which works just as state). This is when the addon `Panel` will get filled. If you go into `addon/src/Panel.tsx`, you'll see we import the same `useGlobals` hook. 

**No, importing it in `PanelContent` does not work, because it's not a direct child that gets rendered inside `manager.ts` perhaps this will change in future versions of Storybook**.

We therefor let `PanelContent.tsx` accept two props:
* All the actual `baseStyling` props
* An `updateProperties` function

Inside of the `PanelContenxt.tsx` file we simply have a React state variable that keeps track of all of our table rows. Whenever a property value changes, we execute the `renderContent` function to update all of our table rows. We only trigger a complete update of our `sessionStorage` variable if an `input` fires the `onBlur` event (for performance' sake).

As soon as an `onBlur` event gets fired, we fire the `propertyChanged` function that was passed as a prop to `PanelContent.tsx`. If you go back to `Panel.tsx` you see it actually updates the `baseStyling` global variable.

Going back to `withBaseStyling.ts` you'll see we have a `useEffect` which listens to any changes made to the `baseStyling` global. If anything changes, we fire the `updateCSSPropertiesOnHTMLElement` function, and pass this `baseStyling` global.

We convert the object back to a valid `style` tag value, `JSON.stringify` it, and set it as `sessionStorage`. After that, we fire a custom event called `updated-styling`. The file that actually listens to this event is `/.storybook/preview.js`.

There's a `Preview` component which has a `properties` state. This state variable gets used to force the inner `Story` to rerender whenever you change anything inside of the `BaseStyling` addon. This is needed, because otherwise the story will always be one step behind in rendering the correct values passed to the `BaseStyling` addon.

For example the initial value is `yellow`. If you change the value to `red`, the `sessionStorage` variable will be updated, but the actual story still rendered with the previous `sessionStorage`. So imagine you change the `red` to `blue` now, it'll render with the `red` variable intact. This makes sure the Story and `BaseStyling` addon are synced up properly.

## Development

Development for this plugin is quite easy. Either use `yarn` or `npm` for the following commands.

### Installation

Go into the `addon` folder and type:

```bash
npm install
```

### Active development

Go into the `addon` folder and type:

```bash
npm run build:watch
```

This will rebuild the entire addon whenever you make changes to any files in the `src` directory. You will have to completely **refresh** our `react-lib-components` storybook page. There is **no** hot reloading.

### Build for production

Go into the `addon` folder and type:

```bash
npm run build
```

The `dist` folder **must** be committed so do not add it to `.gitignore`!