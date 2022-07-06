# Contributing to the Component Library

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How to contribute

When contributing to this repository, please follow the process described below.

For updating this project we have defined a process that ensures the contents of this project (e.g. the guidelines) are supported by all OneWelcome engineers.

There are a few steps involved in proposing a change:

1. Informally proposing the requested change on Slack
2. Formally proposing the change (via a Pull request [in this repository](https://github.com/onewelcome/react-lib-components))
3. Accepting the change
4. Releasing the change

All steps are further detailed below.

### Informally proposing a change

Everyone is allowed to extend or implement new components. However it's good to check with members of the `SASSy` team if there isn't any plan to do it, or to discuss the problem. In the end the `SASSy` team is responsible for code merged into the master branch of the repository.

In order to informally discuss your idea please use the [#dev-sassy-general](https://onewelcome.slack.com/app_redirect?channel=C038AH4TGDR) Slack channel for this purpose.

### Formally proposing a change

Once you have informally discussed the change on Slack you might be asked to create a Pull Request in this project. Please do so with care. Below are a few tips that might help you create the pull request:

- Use TypeScript to add component [using this snippet](#react-functional-component-typescript-snippet).
- Always add interactive stories to the Storybook showing the potential of the added / changed component [using this snippet](#storybook-story-snippet).
- Write documentation to the component in an `.mdx` file [using this snippet](#mdx-documentation-snippet).
- Write a unit test that covers as many different usages of a component as you added [using this snippet](#react-component-unit-test-snippet).
- Make sure to export your component through `index.tsx` so that it's publicly available after running `npm run build`. Don't forget to export `Props` as `<ComponentName>Props`.
- Align with all principles which are already in other components. There are many examples to look at. If you're unsure on how to do something, just message a member of the `SASSy` team.
- Please make sure to create [controlled components](https://reactjs.org/docs/uncontrolled-components.html).
- Code style & linter is configured to automatically format code & show problems with your changes. If `VSCode` is complaining that you can't commit something, just run `npm run lint` in your project and find the `errors` that prevent you from being able to commit your code.

#### Hooks

In case you have created a `hook` for your component. Please document the reason why it is needed. In addition, hooks need to be stored inside of `src/hooks` and need to be tested. Make sure to also document your hook. Create a `<hookName>.mdx` file inside of the `stories/hooks` folder. You can copy any existing hook's documentation to use as a template.

#### Folder structure

If you've done everything correctly, you should have somewhat of the following folder structure. `Component` and `useHook` would be the possible files you've created:

```
├── src
│   ├── Component
│   │   ├── Component.module.scss
│   │   ├── Component.test.tsx
│   │   ├── Component.tsx
│   ├── hooks
│   │   ├── useHook.ts
│   │   ├── useHook.test.ts
├── stories
│   ├── Component
│   │   ├── Component.stories.tsx
│   │   ├── Component.mdx
│   ├── hooks
│   │   ├── useHook.stories.tsx
│   │   ├── useHook.mdx
```

### Accepting the change

If you have submitted a pull request you're done...

![Work done](https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif)

... Unless of course there are review remarks :wink:.

The process will however not stop: the owners will vote (& place comments) in order to express their opinion on the pull request. Votes should be casted within 2 working days (not counting public holidays) after the pull request is created. Coverage needs to be above 80% (preferably above 90%).

### Releasing the change

The `SASSy` team is responsible for releasing `react-lib-components`. However if there is a need to do release quicker then planned you can do it. Please inform about it upfront on [#dev-sassy-general](https://onewelcome.slack.com/app_redirect?channel=C038AH4TGDR) Slack channel.

The release process is defined in [#README.md](README.md#release)

## Preparing the repository for development

See the [README.md](README.md) for further instructions on how to setup your local development environment.

## Code snippets for creating components, tests, stories and documentation

We'd love for you to contribute to the component library! In order to keep structure the same we've created snippets that should speed up your work by a significant amount. [If you've never used VSCode snippets before please see their documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets). We use placeholders, so make sure you read on how to use them.

### React Functional Component Typescript snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"Component Library Function Component Typescript": {
  "prefix": "clfc",
  "body": [
    "import React, { ComponentPropsWithRef, ForwardRefRenderFunction, ReactNode } from 'react';",
    "",
    "export interface Props extends ComponentPropsWithRef<\"div\"> {",
      "\tchildren?: ReactNode;",
    "}",
    "",
    "const ${1:componentName}Component: ForwardRefRenderFunction&lt;HTMLDivElement, Props> = ({ children, ...rest }: Props, ref) => {",
      "\treturn &lt;div ref={ref} {...rest}>{children}&lt;/div>;",
    "};",
    "",
    "export const ${1:componentName} = React.forwardRef(${1:componentName}Component);"
  ],
  "description": "Insert Component Library Functional Component snippet with Typescript"
},</code></pre>
</details>

### Storybook Story snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"Component Library Story": {
  "prefix": "clstory",
  "body": [
    "import React from 'react';",
    "import { Meta, Story } from '@storybook/react';",
    "import { ${1:componentName}, Props } from '../../src/${1:componentName}/${1:componentName}';",
    "import ${1:componentName}Documentation from './${1:componentName}.mdx';",
    "",
    "const meta: Meta = {",
    "\ttitle: '${1:componentName}',",
    "\tcomponent: ${1:componentName},",
    "parameters: {",
    "\tdocs: {",
    "\t\tpage: ${1:componentName}Documentation",
    "\t}",
    "}",
    "};",
    "",
    "export default meta;",
    "",
    "const Template: Story&lt;Props> = (args) => (",
    "\t<${1:componentName} {...args}>${2:content}</${1:componentName}>",
    ");",
    "",
    "export const ${1:componentName}El = Template.bind({});",
    "",
    "${1:componentName}El.args = {",
    "\t",
    "};"
  ],
  "description": "Insert Component Library story snippet"
},</code></pre>
</details>

<sub>
The path to your component might not be correct. Make sure to correct it if necessary and create the `COMPONENT_NAME.mdx` file with the snippet further down.
</sub>

### React Component Library unit test snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"Component Library Test": {
  "prefix": "cltest",
  "body": [
    "import React from 'react';",
    "import { ${1:component}, Props } from './${1:component}';",
    "import { render } from '@testing-library/react';",
    "",
    "const defaultParams: Props = {",
    "",
    "}",
    "",
    "const create${1:component} = (params?: (defaultParams: Props) => Props) => {",
    "\tlet parameters: Props = defaultParams;",
    "\tif(params) {",
    "\t\tparameters = params(defaultParams)",
    "\t}",
    "\tconst queries = render(<${1:component} {...parameters} data-testid='${1/(.)(.*)/${1:/downcase}$2/}'>${1/(.)(.*)/${1:/downcase}$2/} content</${1:component}>);",
    "\tconst ${1/(.)(.*)/${1:/downcase}$2/} = queries.getByTestId('${1/(.)(.*)/${1:/downcase}$2/}');",
    "",
    "return {",
    "\t...queries,",
    "\t${1/(.)(.*)/${1:/downcase}$2/}",
    "\t}",
    "}",
    "",
    "describe('${1:component} should render', () => {",
    "\tit('renders without crashing', () => {",
    "\tconst { ${1/(.)(.*)/${1:/downcase}$2/} } = create${1:component}()",
    "",
    "\t\texpect(${1/(.)(.*)/${1:/downcase}$2/}).toBeDefined();",
    "\t});",
    "});"
  ],
  "description": "Insert Component Library test snippet."
},</code></pre>
</details>

<sub>
Instructions: the defaultParams `const` is where you should enter all of the props your components needs to get rendered. You can override and add props by executing the function and returning an object with the defaultParams any additional props you want. See other tests for examples.
</sub>

```
const { component } = createComponent(defaultParams => ({ ...defaultParams, prop1: value, prop2: value }))
```

### MDX Documentation snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"Component Library MDX": {
  "prefix": "clmdx",
  "body": [
    "import { Story, Canvas, Title, Subtitle, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';",
    "",
    "&lt;Title />",
    "&lt;Subtitle />",
    "",
    "${1:Description of the component}",
    "",
    "# Examples",
    "",
    "${2:Any examples of the component you've created}",
    "",
    "# Props",
    "",
    "&lt;ArgsTable story={PRIMARY_STORY} />"
  ],
  "description": "Insert MDX documentation snippet."
},</code></pre>
</details>

### React useState snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"React Use State Snippet": {
  "prefix": "russ",
  "body": [
      "const [${1:stateName}, set${1/(.)/${1:/capitalize}/}] = useState(${2:initial value})"
  ],
  "description": "Insert React useState snippet."
},</code></pre>
</details>

### React scoped className

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"React scoped className": {
  "prefix": "resc",
  "body": ["className={classes[\"${1:class name}\"]}"],
  "description": "Insert scoped className snippet."
},</code></pre>
</details>

### React import scoped classes

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"import scoped classes": {
  "prefix": "impscoped",
  "body": ["import classes from \"./${1:filename}.module.${2:scss}\";"],
  "description": "Insert import scoped classes snippet."
},</code></pre>
</details>
