"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[674],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF": function() { return /* binding */ withMDXComponents; },
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "ah": function() { return /* binding */ useMDXComponents; },
/* harmony export */   "pC": function() { return /* binding */ MDXContext; }
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

/***/ "./stories/Form/Elements/Textarea.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Textarea": function() { return /* binding */ Textarea_stories_Textarea; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Textarea_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Textarea/Textarea.tsx + 1 modules
var Textarea = __webpack_require__("./src/components/Form/Textarea/Textarea.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Textarea.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      h1: "h1",
      pre: "pre",
      a: "a"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Textarea"
        }), " component is a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "form"
        }), " component based on the native ", (0,jsx_runtime.jsx)(_components.code, {
          children: "textarea"
        }), " HTML element. It is wrapped by a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "div"
        }), " element, which can be configured through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wrapperProps"
        }), " prop if necessary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It has a built-in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " state and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        }), " state. Both are a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        }), " and can be passed as a prop. Styling will be applied automatically."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Example code with state:"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const ExampleComponent = () => {\n  const [textareaValue, setTextareaValue] = useState('');\n  const [hasError, setHasError] = useState(false);\n\n  return (\n    <Textarea\n      value={textareaValue}\n      onChange={(event) => setTextareaValue(event.target.value)}\n      error={hasError}\n    />;\n  )\n};\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Below you'll find an example of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Textarea"
        }), " component. You can toggle states and props through the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#props",
          children: "Props table"
        }), " at the bottom."]
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Textarea_stories_Textarea
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var Elements_Textarea = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/Textarea.stories.tsx
var _Textarea$parameters, _Textarea$parameters2, _Textarea$parameters3;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
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




var meta = {
  title: "components/Inputs/Raw/TextArea",
  component: Textarea/* Textarea */.g,
  parameters: {
    docs: {
      page: Elements_Textarea
    }
  },
  argTypes: {
    value: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    },
    success: {
      control: "boolean"
    }
  }
};
/* harmony default export */ var Textarea_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Textarea/* Textarea */.g, args);
};
var Textarea_stories_Textarea = Template.bind({});
Textarea_stories_Textarea.args = {};
Textarea_stories_Textarea.parameters = _objectSpread(_objectSpread({}, Textarea_stories_Textarea.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Textarea$parameters = Textarea_stories_Textarea.parameters) === null || _Textarea$parameters === void 0 ? void 0 : _Textarea$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TextareaComponent {...args} />"
    }, (_Textarea$parameters2 = Textarea_stories_Textarea.parameters) === null || _Textarea$parameters2 === void 0 ? void 0 : (_Textarea$parameters3 = _Textarea$parameters2.docs) === null || _Textarea$parameters3 === void 0 ? void 0 : _Textarea$parameters3.source)
  })
});
var __namedExportsOrder = ["Textarea"];

/***/ }),

/***/ "./src/hooks/useDetermineStatusIcon.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ useDetermineStatusIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Icon/Icon.tsx");
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



var useDetermineStatusIcon = function useDetermineStatusIcon(params) {
  var _ref = params || false,
    error = _ref.error,
    success = _ref.success;
  var icon = null;
  var errorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var successRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (error) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: errorRef,
      "data-icon-status": "error",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons.Error */ .P.Error
    });
  } else if (success) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: successRef,
      "data-icon-status": "success",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons.CheckmarkCircleBreakout */ .P.CheckmarkCircleBreakout
    });
  }
  return icon;
};
try {
    // @ts-ignore
    useDetermineStatusIcon.displayName = "useDetermineStatusIcon";
    // @ts-ignore
    useDetermineStatusIcon.__docgenInfo = { "description": "", "displayName": "useDetermineStatusIcon", "props": { "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/hooks/useDetermineStatusIcon.tsx#useDetermineStatusIcon"] = { docgenInfo: useDetermineStatusIcon.__docgenInfo, name: "useDetermineStatusIcon", path: "src/hooks/useDetermineStatusIcon.tsx#useDetermineStatusIcon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);