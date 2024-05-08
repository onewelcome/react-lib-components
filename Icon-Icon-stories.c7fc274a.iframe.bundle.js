"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7466],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
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

/***/ "./stories/Icon/Icon.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Icon: () => (/* binding */ Icon_stories_Icon),
  IconColor: () => (/* binding */ IconColor),
  IconSize: () => (/* binding */ IconSize),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Icon_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Icon/IconGrid.tsx
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



const IconGrid = _ref => {
  let {
    children
  } = _ref;
  const copyIconHandler = icon => {
    const toCopy = "<Icon icon={Icons.".concat(icon, "} />");
    navigator.clipboard.writeText(toCopy);
  };
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, Object.keys(Icon/* Icons */.F).map((icon, index) => /*#__PURE__*/react.createElement("article", {
    key: index,
    style: {
      flexBasis: "20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F[icon]
  }), /*#__PURE__*/react.createElement("button", {
    onClick: copyIconHandler.bind(null, icon),
    title: "Click here to copy React Component",
    style: {
      padding: "5px",
      cursor: "copy",
      marginTop: "5px"
    }
  }, /*#__PURE__*/react.createElement("pre", {
    style: {
      margin: "0"
    }
  }, /*#__PURE__*/react.createElement("code", null, Icon/* Icons */.F[icon]))))));
};
try {
    // @ts-ignore
    IconGrid.displayName = "IconGrid";
    // @ts-ignore
    IconGrid.__docgenInfo = { "description": "", "displayName": "IconGrid", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Icon/IconGrid.tsx#IconGrid"] = { docgenInfo: IconGrid.__docgenInfo, name: "IconGrid", path: "stories/Icon/IconGrid.tsx#IconGrid" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./stories/Icon/Icon.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    pre: "pre",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Icon component is used in order to display all of the icons from the OneWelcome design. If you miss a specific icon please contact the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SASSy"
      }), " team. The way the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Icon />"
      }), " component works is by providing a prop called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "icon"
      }), ", which accepts the icon's name. We have created an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enum"
      }), " within the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Icon />"
      }), " component that you can import in your React Component to get autocompletion. Consider the following import example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Icon, Icons } from '@onewelcome/react-lib-components';\n\n<Icon icon={Icons.Bell} />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It will give you autocompletion and show you what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "icons"
      }), " are available."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Please see the grid below. You can click on any of the buttons below the icon to copy it. Then simply paste it into your project! Make sure to have imported both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Icon"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Icons"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(IconGrid, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      story: dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Icon_Icon = (MDXContent);

;// CONCATENATED MODULE: ./stories/Icon/Icon.stories.tsx
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
  title: "components/Data Display/Icon",
  component: Icon/* Icon */.I,
  argTypes: {
    color: {
      control: "color",
      description: "Needs to be a valid `Hex`, `rgb()` or `hsl()` color."
    }
  },
  parameters: {
    docs: {
      page: Icon_Icon
    }
  }
};
/* harmony default export */ const Icon_stories = (meta);
const Template = args => /*#__PURE__*/react.createElement(Icon/* Icon */.I, args);
const Icon_stories_Icon = Template.bind({});
Icon_stories_Icon.args = {
  icon: Icon/* Icons */.F.Calendar,
  size: "6rem"
};
const IconColor = Template.bind({});
IconColor.args = {
  icon: Icon/* Icons */.F.Calendar,
  color: "#ff0000"
};
const IconSize = Template.bind({});
IconSize.args = {
  icon: Icon/* Icons */.F.Calendar,
  size: "3rem"
};
Icon_stories_Icon.parameters = {
  ...Icon_stories_Icon.parameters,
  docs: {
    ...Icon_stories_Icon.parameters?.docs,
    source: {
      originalSource: "args => <IconComponent {...args} />",
      ...Icon_stories_Icon.parameters?.docs?.source
    }
  }
};
IconColor.parameters = {
  ...IconColor.parameters,
  docs: {
    ...IconColor.parameters?.docs,
    source: {
      originalSource: "args => <IconComponent {...args} />",
      ...IconColor.parameters?.docs?.source
    }
  }
};
IconSize.parameters = {
  ...IconSize.parameters,
  docs: {
    ...IconSize.parameters?.docs,
    source: {
      originalSource: "args => <IconComponent {...args} />",
      ...IconSize.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Icon","IconColor","IconSize"];

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);