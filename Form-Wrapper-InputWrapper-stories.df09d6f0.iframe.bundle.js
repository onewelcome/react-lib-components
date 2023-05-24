"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[928],{

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

/***/ "./stories/Form/Wrapper/InputWrapper.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "InputWrapper": function() { return /* binding */ InputWrapper_stories_InputWrapper; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ InputWrapper_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/InputWrapper.mdx



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
      h2: "h2",
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InputWrapper"
        }), " component has been created to make your life easier as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least 2 attributes - a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), " prop, which should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onChange"
        }), " event to update the linked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " variable whenever the user types something."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "it-takes-care-of-proper-accessibility",
        children: "It takes care of proper accessibility"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InputWrapper"
        }), " accepts a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "helperText"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorMessage"
        }), " prop. Based on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " prop (set to true or false) it will make sure to set its ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-describedby"
        }), " value to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorMessage"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "helperText"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), " prop should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), " variable that gets updated using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onChange"
        }), " event."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A code example of how you can configure a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InputWrapper"
        }), " within a React component:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const ExampleComponent = () => {\n  const [inputValue, setInputValue] = useState(\"\");\n\n  return (\n    <InputWrapper\n      label=\"Example label\"\n      type=\"text\"\n      name=\"Example name\"\n      helperText=\"This is helpertext\"\n      onChange={(event) => setInputValue(event.target.value)}\n      errorMessage=\"This is an error message\"\n      error={false}\n      value={inputValue}\n      inputProps= {\n        prefix: \"https://\",\n        suffix: \"\",\n        className: \"input-classname\",\n        wrapperProps: { className: \"wrapper-classname\" }\n      }\n    />\n  );\n};\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: InputWrapper_stories_InputWrapper
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
/* harmony default export */ var Wrapper_InputWrapper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Wrapper/InputWrapper.stories.tsx
var _InputWrapper$paramet, _InputWrapper$paramet2, _InputWrapper$paramet3;
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
  title: "components/Inputs/Input (Wrapper)",
  component: InputWrapper/* InputWrapper */.S,
  parameters: {
    docs: {
      page: Wrapper_InputWrapper
    }
  },
  argTypes: {
    onChange: {
      action: "onChange event fired",
      control: false
    },
    onBlur: {
      action: "onBlur event fired"
    },
    onFocus: {
      action: "onFocus event fired"
    },
    type: {
      options: ["text", "email", "file", "number", "password", "search", "tel", "time", "url", "datetime-local", "date"],
      control: {
        type: "select"
      }
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};
/* harmony default export */ var InputWrapper_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, args);
};
var InputWrapper_stories_InputWrapper = Template.bind({});
InputWrapper_stories_InputWrapper.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: false,
  value: "",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: {
      className: "wrapper-classname"
    }
  }
};
InputWrapper_stories_InputWrapper.parameters = _objectSpread(_objectSpread({}, InputWrapper_stories_InputWrapper.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapper$paramet = InputWrapper_stories_InputWrapper.parameters) === null || _InputWrapper$paramet === void 0 ? void 0 : _InputWrapper$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapper$paramet2 = InputWrapper_stories_InputWrapper.parameters) === null || _InputWrapper$paramet2 === void 0 ? void 0 : (_InputWrapper$paramet3 = _InputWrapper$paramet2.docs) === null || _InputWrapper$paramet3 === void 0 ? void 0 : _InputWrapper$paramet3.source)
  })
});
var __namedExportsOrder = ["InputWrapper"];

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