(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8000],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: () => (/* binding */ withMDXComponents),
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   ah: () => (/* binding */ useMDXComponents),
/* harmony export */   pC: () => (/* binding */ MDXContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./stories/Link/Link.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Link: () => (/* binding */ Link_stories_Link),
  LinkStates: () => (/* binding */ LinkStates),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Link_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Link/Link.tsx + 1 modules
var Link = __webpack_require__("./src/components/Link/Link.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Link/Link.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    pre: "pre",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Link"
      }), " component is used to display a link to both internal and external resources. Its target can be specified using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to"
      }), " prop. Styling of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Link"
      }), " can be adjusted if needed - one can set its color using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "color"
      }), " prop, or change its appearance altogether by setting the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display"
      }), " prop to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"button\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { Link as RouterLink } from 'react-router-dom';\nimport { Link } from './Link';\n\n// Normal Link\n<Link to=\"https://example.com\">External Link</Link>\n\n// React Router Link\n<Link to=\"/internal/page\" component={RouterLink}>Internal Page</Link>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the above examples, the first usage shows a regular hyperlink. The second usage demonstrates how to pass a RouterLink component (from react-router-dom) as a prop to our custom Link component, making it work as a React Router Link."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example assumes you're wrapping your application with BrowserRouter or MemoryRouter from react-router-dom at a higher level in your app. If not, make sure to wrap these components with either BrowserRouter or MemoryRouter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { BrowserRouter as Router } from \"react-router-dom\";\nimport { Link as RouterLink } from \"react-router-dom\";\nimport { Link } from \"./Link\";\n\n// In your App component or any component that is a common parent of these Links\n<Router>\n  <Link to=\"https://example.com\">External Link</Link>\n  <Link to=\"/internal/page\" component={RouterLink}>\n    Internal Page\n  </Link>\n</Router>;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By doing this you ensure that the Link component has access to the Router context and works as expected when clicked on."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Link_stories_Link
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
      story: dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Link_Link = (MDXContent);

;// CONCATENATED MODULE: ./stories/Link/Link.stories.tsx
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




const meta = {
  title: "components/Navigation/Link",
  component: Link/* Link */.r,
  parameters: {
    docs: {
      page: Link_Link
    }
  },
  argTypes: {
    buttonVariant: {
      control: "radio",
      if: {
        arg: "display",
        eq: "button"
      }
    }
  },
  args: {
    to: "https://www.google.com",
    type: "external",
    color: "primary",
    display: "link",
    buttonVariant: "fill"
  }
};
/* harmony default export */ const Link_stories = (meta);
const Template = args => /*#__PURE__*/react.createElement(Link/* Link */.r, args, "content");
const Link_stories_Link = Template.bind({});
const LinkStates = Template.bind({});
const generateLinkStates = types => {
  return types.reduce((result, type) => {
    return result.flatMap(permutation => type.options.map(option => ({
      ...permutation,
      [type.name]: option
    })));
  }, [{}]);
};
const types = [{
  name: "color",
  options: ["primary", "danger", "success", "warning"]
}, {
  name: "buttonVariant",
  options: ["fill"]
}, {
  name: "display",
  options: ["button", "link"]
}, {
  name: "event",
  options: [undefined, "hover", "active", "focus"]
}];
const mainLinkStates = generateLinkStates(types);
LinkStates.decorators = [() => {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      marginLeft: "5px",
      marginTop: "5px",
      display: "grid",
      gridTemplateColumns: "auto auto auto auto",
      rowGap: "20px"
    }
  }, mainLinkStates.map((states, index) => /*#__PURE__*/react.createElement("div", {
    key: index
  }, /*#__PURE__*/react.createElement(Link/* Link */.r, {
    id: states.event,
    display: states.display,
    color: states.color,
    buttonVariant: states.buttonVariant,
    to: "https://google.com/search?q=onewelcome-react-lib-components"
  }, "".concat(states.color, " ").concat(states.display)))));
}];
LinkStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    focusVisible: "#focus"
  },
  controls: {
    disable: true
  }
};
Link_stories_Link.parameters = {
  ...Link_stories_Link.parameters,
  docs: {
    ...Link_stories_Link.parameters?.docs,
    source: {
      originalSource: "args => <LinkComponent {...args}>content</LinkComponent>",
      ...Link_stories_Link.parameters?.docs?.source
    }
  }
};
LinkStates.parameters = {
  ...LinkStates.parameters,
  docs: {
    ...LinkStates.parameters?.docs,
    source: {
      originalSource: "args => <LinkComponent {...args}>content</LinkComponent>",
      ...LinkStates.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Link","LinkStates"];

/***/ }),

/***/ "./node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);