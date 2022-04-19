# Contributing to the Engineering guide

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How to contribute

When contributing to this repository, please follow the process described below.

For updating this project we have defined a process that ensures the contents of this project (e.g. the guidelines) are supported by all OneWelcome engineers.

There are a few steps involved in proposing a change:

1. Informally proposing the requested change on Slack
2. Formally proposing the change (via a Pull request in this repository)
3. Accepting the change
4. Releasing the change

All steps are further detailed below.

### Informally proposing a change

Everyone is allowed to extend or implment new component. However it's good to check with members of the Frontend team if there isn't any plan to do it or to disscus the problem. In the end Fronend team is reponsibile for code meged into master branch of repository.

In order to informally discuss your idea please use the [#frontend-team](https://onewelcome.slack.com/app_redirect?channel=C02U7C0JBKJ) Slack channel for this purpose.

### Formally proposing a change

Once you have informally discussed the change on Slack you might be asked to create a Pull Request in this project. Please do so with care. Below are a few tips that might help you create the pull request:

- Use TypeScript to add component [using this snippet](#react-functional-component-typescript-snippet).
- Always add interactive stories to the Storybook showing the potential of the added / changed component [using this snippet](#storybook-story-snippet).
- Write documentation to the component in an `.mdx` file [using this snippet](#mdx-documentation-snippet).
- Write a unit test that covers as many different usages of a component as you added [using this snippet](#react-component-unit-test-snippet).
- Align with all principles which are already in other components.
- Keep in mind to do a controlled components.
- Code style & linter is configured to automatically format code & show problems with your changes.

#### Hooks
In case you have created a `hook` for your component. Please document the reason why it is needed. In addition, hooks need to be stored inside of `src/hooks` and needs to be tested. Make sure to also document your hook. Create a `stories.mdx` file inside of the `stories/hooks` folder. You can copy any existing hook's documentation to use as a template.

#### Folder structure
If you've done everything correctly, you should have somewhat of the following folder structure. `Component` and `useHook` would be the possible components you've created:

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
```

### Accepting the change

If you have submitted a pull request you're done......

![Work done](https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif)

..... Unless of course there are review remarks :wink:.

The process will however not stop: the owners will vote (& place comments) in order to express their opinion on the pull request. Votes should be casted within 2 working days (not counting public holidays) after the pull request is created. Coverage needs to be above 80% (preferably above 90%).

### Releasing the change

Frontend team is responsible for releasing `react-lib-components`. However if there is a need to do release quicker then planned you can do it. Please inform about it upfront on [#frontend-team](https://onewelcome.slack.com/app_redirect?channel=C02U7C0JBKJ) Slack channel.
Releasing process is defined in [#README.md](README.md#release)

## Preparing the repository for development

See the [README.md](README.md) for further instructions how to work on the Markdown files in this repository.

## Code snippets for creating components, tests, stories and documentation

We'd love for you to contribute to the component library! In order to keep structure the same we've created snippets which should speed up your work by a significant margin. [If you've never used VSCode snippets before please see their documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets). We use placeholders, so make sure you read on how to use them!

### React Functional Component Typescript snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"React Functional Component Typescript Component Library": {
  "prefix": "refcts",
  "body": [
      "import React, { ReactNode } from 'react';",
      "import { HTMLProps } from '../interfaces'",
      "",
      "export interface Props extends HTMLProps&lt;HTMLDivElement> {",
      "\tchildren?: ReactNode;",
      "\t\t",
      "\t}",
      "",
      "export const ${1:ComponentName} = ({children}: Props) => {",
      "",
      "\treturn (",
      "\t\t<${3:div}>{children}</${3:div}>",
      "\t)",
      "}"
  ],
  "description": "Insert react functional component for TypeScript"
},</code></pre>
</details>

<sub>
Note: in the snippet we import `HTMLProps` from `../interfaces.ts`. If you create a new component inside of `src/COMPONENT_NAME/COMPONENT_NAME.tsx` this path is correct. However if you nest it deeper, make sure to update the path!
</sub>

### React useState snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"React Use State Snippet": {
  "prefix": "reus",
  "body": [
      "const [${1:stateName}, set${1/(.)/${1:/capitalize}/}] = useState(${2:initial value})"
  ],
  "description": "Insert react functional component for TypeScript"
},</code></pre>
</details>

### Storybook story snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"Storybook story": {
  "prefix": "sbstory",
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
  "description": "Insert test boilerplate."
},</code></pre>
</details>

<sub>
The path to your component might not be correct. Make sure to correct it if necessary and create the `COMPONENT_NAME.mdx` file with the snippet further down.
</sub>

### React Component Unit test snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"React test with Jest & React Testing Library": {
  "prefix": "reacttest",
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
  "description": "Insert test boilerplate."
},</code></pre>
</details>

<sub>
Instructions: the defaultParams `const` is where you should enter all of the props your components needs to get rendered. You can override and add props by executing the function and returning an object with the defaultParams any additional props you want like so:  
</sub>  

```
const { component } = createComponent(defaultParams => ({ ...defaultParams, prop1: value, prop2: value }))
```

### MDX Documentation snippet

<details>
  <summary>Show me the snippet!</summary>
  <pre>
  <code>
"MDX snippet to make quick documentation": {
  "prefix": "sbmdx",
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
  "description": "Insert test boilerplate."
},</code></pre>
</details>