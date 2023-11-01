"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[928],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: function() { return /* binding */ withMDXComponents; },
/* harmony export */   Zo: function() { return /* binding */ MDXProvider; },
/* harmony export */   ah: function() { return /* binding */ useMDXComponents; },
/* harmony export */   pC: function() { return /* binding */ MDXContext; }
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
  InputWrapper: function() { return /* binding */ InputWrapper_stories_InputWrapper; },
  InputWrapperRequired: function() { return /* binding */ InputWrapperRequired; },
  InputWrapperWithError: function() { return /* binding */ InputWrapperWithError; },
  InputWrapperWithIconPrefix: function() { return /* binding */ InputWrapperWithIconPrefix; },
  InputWrapperWithIconPrefixAndSuffix: function() { return /* binding */ InputWrapperWithIconPrefixAndSuffix; },
  InputWrapperWithIconSuffix: function() { return /* binding */ InputWrapperWithIconSuffix; },
  InputWrapperWithSuccess: function() { return /* binding */ InputWrapperWithSuccess; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ InputWrapper_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/InputWrapper.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
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
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var Wrapper_InputWrapper = (MDXContent);

// EXTERNAL MODULE: ./stories/Icon/Icon.stories.tsx + 2 modules
var Icon_stories = __webpack_require__("./stories/Icon/Icon.stories.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/InputWrapper.stories.tsx
var _InputWrapper$paramet, _InputWrapper$paramet2, _InputWrapperWithErro, _InputWrapperWithErro2, _InputWrapperWithSucc, _InputWrapperWithSucc2, _InputWrapperWithIcon, _InputWrapperWithIcon2, _InputWrapperWithIcon3, _InputWrapperWithIcon4, _InputWrapperWithIcon5, _InputWrapperWithIcon6, _InputWrapperRequired, _InputWrapperRequired2;
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
var InputWrapperWithError = Template.bind({});
InputWrapperWithError.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: true,
  value: "www.example.com",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: {
      className: "wrapper-classname"
    }
  }
};
var InputWrapperWithSuccess = Template.bind({});
InputWrapperWithSuccess.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: false,
  success: true,
  value: "www.example.com",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: {
      className: "wrapper-classname"
    }
  }
};
var InputWrapperWithIconPrefix = Template.bind({});
InputWrapperWithIconPrefix.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  inputProps: {
    prefix: /*#__PURE__*/react.createElement(Icon_stories.Icon, {
      icon: Icon/* Icons */.P.Bell
    }),
    suffix: "",
    className: "input-classname",
    wrapperProps: {
      className: "wrapper-classname"
    }
  }
};
var InputWrapperWithIconSuffix = Template.bind({});
InputWrapperWithIconSuffix.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: false,
  value: "www.example.com",
  inputProps: {
    prefix: "https://",
    suffix: /*#__PURE__*/react.createElement(Icon_stories.Icon, {
      icon: Icon/* Icons */.P.Bell
    }),
    className: "input-classname",
    wrapperProps: {
      className: "wrapper-classname"
    }
  }
};
var InputWrapperWithIconPrefixAndSuffix = Template.bind({});
InputWrapperWithIconPrefixAndSuffix.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  inputProps: {
    prefix: /*#__PURE__*/react.createElement(Icon_stories.Icon, {
      icon: Icon/* Icons */.P.Bell
    }),
    suffix: /*#__PURE__*/react.createElement(Icon_stories.Icon, {
      icon: Icon/* Icons */.P.Bell
    }),
    className: "input-classname",
    wrapperProps: {
      className: "wrapper-classname"
    }
  }
};
var InputWrapperRequired = Template.bind({});
InputWrapperRequired.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: function onChange() {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  required: true
};
InputWrapper_stories_InputWrapper.parameters = _objectSpread(_objectSpread({}, InputWrapper_stories_InputWrapper.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapper$paramet = InputWrapper_stories_InputWrapper.parameters) === null || _InputWrapper$paramet === void 0 ? void 0 : _InputWrapper$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapper$paramet2 = InputWrapper_stories_InputWrapper.parameters) === null || _InputWrapper$paramet2 === void 0 || (_InputWrapper$paramet2 = _InputWrapper$paramet2.docs) === null || _InputWrapper$paramet2 === void 0 ? void 0 : _InputWrapper$paramet2.source)
  })
});
InputWrapperWithError.parameters = _objectSpread(_objectSpread({}, InputWrapperWithError.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapperWithErro = InputWrapperWithError.parameters) === null || _InputWrapperWithErro === void 0 ? void 0 : _InputWrapperWithErro.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapperWithErro2 = InputWrapperWithError.parameters) === null || _InputWrapperWithErro2 === void 0 || (_InputWrapperWithErro2 = _InputWrapperWithErro2.docs) === null || _InputWrapperWithErro2 === void 0 ? void 0 : _InputWrapperWithErro2.source)
  })
});
InputWrapperWithSuccess.parameters = _objectSpread(_objectSpread({}, InputWrapperWithSuccess.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapperWithSucc = InputWrapperWithSuccess.parameters) === null || _InputWrapperWithSucc === void 0 ? void 0 : _InputWrapperWithSucc.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapperWithSucc2 = InputWrapperWithSuccess.parameters) === null || _InputWrapperWithSucc2 === void 0 || (_InputWrapperWithSucc2 = _InputWrapperWithSucc2.docs) === null || _InputWrapperWithSucc2 === void 0 ? void 0 : _InputWrapperWithSucc2.source)
  })
});
InputWrapperWithIconPrefix.parameters = _objectSpread(_objectSpread({}, InputWrapperWithIconPrefix.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapperWithIcon = InputWrapperWithIconPrefix.parameters) === null || _InputWrapperWithIcon === void 0 ? void 0 : _InputWrapperWithIcon.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapperWithIcon2 = InputWrapperWithIconPrefix.parameters) === null || _InputWrapperWithIcon2 === void 0 || (_InputWrapperWithIcon2 = _InputWrapperWithIcon2.docs) === null || _InputWrapperWithIcon2 === void 0 ? void 0 : _InputWrapperWithIcon2.source)
  })
});
InputWrapperWithIconSuffix.parameters = _objectSpread(_objectSpread({}, InputWrapperWithIconSuffix.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapperWithIcon3 = InputWrapperWithIconSuffix.parameters) === null || _InputWrapperWithIcon3 === void 0 ? void 0 : _InputWrapperWithIcon3.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapperWithIcon4 = InputWrapperWithIconSuffix.parameters) === null || _InputWrapperWithIcon4 === void 0 || (_InputWrapperWithIcon4 = _InputWrapperWithIcon4.docs) === null || _InputWrapperWithIcon4 === void 0 ? void 0 : _InputWrapperWithIcon4.source)
  })
});
InputWrapperWithIconPrefixAndSuffix.parameters = _objectSpread(_objectSpread({}, InputWrapperWithIconPrefixAndSuffix.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapperWithIcon5 = InputWrapperWithIconPrefixAndSuffix.parameters) === null || _InputWrapperWithIcon5 === void 0 ? void 0 : _InputWrapperWithIcon5.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapperWithIcon6 = InputWrapperWithIconPrefixAndSuffix.parameters) === null || _InputWrapperWithIcon6 === void 0 || (_InputWrapperWithIcon6 = _InputWrapperWithIcon6.docs) === null || _InputWrapperWithIcon6 === void 0 ? void 0 : _InputWrapperWithIcon6.source)
  })
});
InputWrapperRequired.parameters = _objectSpread(_objectSpread({}, InputWrapperRequired.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_InputWrapperRequired = InputWrapperRequired.parameters) === null || _InputWrapperRequired === void 0 ? void 0 : _InputWrapperRequired.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <InputWrapperComponent {...args} />;\n}"
    }, (_InputWrapperRequired2 = InputWrapperRequired.parameters) === null || _InputWrapperRequired2 === void 0 || (_InputWrapperRequired2 = _InputWrapperRequired2.docs) === null || _InputWrapperRequired2 === void 0 ? void 0 : _InputWrapperRequired2.source)
  })
});
var __namedExportsOrder = ["InputWrapper", "InputWrapperWithError", "InputWrapperWithSuccess", "InputWrapperWithIconPrefix", "InputWrapperWithIconSuffix", "InputWrapperWithIconPrefixAndSuffix", "InputWrapperRequired"];

/***/ }),

/***/ "./stories/Icon/Icon.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Icon: function() { return /* binding */ Icon_stories_Icon; },
  IconColor: function() { return /* binding */ IconColor; },
  IconSize: function() { return /* binding */ IconSize; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Icon_stories; }
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



var IconGrid = function IconGrid(_ref) {
  var children = _ref.children;
  var copyIconHandler = function copyIconHandler(icon) {
    var toCopy = "<Icon icon={Icons.".concat(icon, "} />");
    navigator.clipboard.writeText(toCopy);
  };
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, Object.keys(Icon/* Icons */.P).map(function (icon, index) {
    return /*#__PURE__*/react.createElement("article", {
      key: index,
      style: {
        flexBasis: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px"
      }
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons */.P[icon]
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
    }, /*#__PURE__*/react.createElement("code", null, Icon/* Icons */.P[icon]))));
  }));
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
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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
/* harmony default export */ var Icon_Icon = (MDXContent);

;// CONCATENATED MODULE: ./stories/Icon/Icon.stories.tsx
var _Icon$parameters, _Icon$parameters2, _IconColor$parameters, _IconColor$parameters2, _IconSize$parameters, _IconSize$parameters2;
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
  title: "components/Data Display/Icon",
  component: Icon/* Icon */.J,
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
/* harmony default export */ var Icon_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Icon/* Icon */.J, args);
};
var Icon_stories_Icon = Template.bind({});
Icon_stories_Icon.args = {
  icon: Icon/* Icons */.P.Calendar,
  size: "6rem"
};
var IconColor = Template.bind({});
IconColor.args = {
  icon: Icon/* Icons */.P.Calendar,
  color: "#ff0000"
};
var IconSize = Template.bind({});
IconSize.args = {
  icon: Icon/* Icons */.P.Calendar,
  size: "3rem"
};
Icon_stories_Icon.parameters = _objectSpread(_objectSpread({}, Icon_stories_Icon.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Icon$parameters = Icon_stories_Icon.parameters) === null || _Icon$parameters === void 0 ? void 0 : _Icon$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <IconComponent {...args} />"
    }, (_Icon$parameters2 = Icon_stories_Icon.parameters) === null || _Icon$parameters2 === void 0 || (_Icon$parameters2 = _Icon$parameters2.docs) === null || _Icon$parameters2 === void 0 ? void 0 : _Icon$parameters2.source)
  })
});
IconColor.parameters = _objectSpread(_objectSpread({}, IconColor.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_IconColor$parameters = IconColor.parameters) === null || _IconColor$parameters === void 0 ? void 0 : _IconColor$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <IconComponent {...args} />"
    }, (_IconColor$parameters2 = IconColor.parameters) === null || _IconColor$parameters2 === void 0 || (_IconColor$parameters2 = _IconColor$parameters2.docs) === null || _IconColor$parameters2 === void 0 ? void 0 : _IconColor$parameters2.source)
  })
});
IconSize.parameters = _objectSpread(_objectSpread({}, IconSize.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_IconSize$parameters = IconSize.parameters) === null || _IconSize$parameters === void 0 ? void 0 : _IconSize$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <IconComponent {...args} />"
    }, (_IconSize$parameters2 = IconSize.parameters) === null || _IconSize$parameters2 === void 0 || (_IconSize$parameters2 = _IconSize$parameters2.docs) === null || _IconSize$parameters2 === void 0 ? void 0 : _IconSize$parameters2.source)
  })
});
var __namedExportsOrder = ["Icon", "IconColor", "IconSize"];

/***/ }),

/***/ "./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: function() { return /* binding */ InputWrapper; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.Z, options);




       /* harmony default export */ var InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.Z && InputWrapper_module/* default */.Z.locals ? InputWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["type", "name", "inputProps", "helperText", "helperProps", "value", "className", "error", "success", "onChange", "onBlur", "onFocus", "disabled"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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






var InputWrapperComponent = function InputWrapperComponent(_ref, ref) {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  var type = _ref.type,
    name = _ref.name,
    inputProps = _ref.inputProps,
    helperText = _ref.helperText,
    helperProps = _ref.helperProps,
    value = _ref.value,
    className = _ref.className,
    error = _ref.error,
    success = _ref.success,
    onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    _onFocus = _ref.onFocus,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useWrapper = (0,useWrapper/* useWrapper */.s)(),
    errorId = _useWrapper.errorId,
    hasFocus = _useWrapper.hasFocus,
    setHasFocus = _useWrapper.setHasFocus,
    helperId = _useWrapper.helperId,
    labelId = _useWrapper.labelId;
  var _ref2 = inputProps !== null && inputProps !== void 0 ? inputProps : {},
    prefix = _ref2.prefix,
    suffix = _ref2.suffix;
  var input = (0,react.useRef)(null);
  var labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module["focus"]);
  var inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    name: name,
    className: "".concat(InputWrapper_InputWrapper_module["input-wrapper"], " ").concat(className !== null && className !== void 0 ? className : ""),
    labelProps: {
      id: labelId,
      className: labelClasses.join(" ")
    },
    errorId: errorId,
    error: error,
    helperId: helperId,
    helperText: helperText,
    helperProps: _objectSpread(_objectSpread({}, helperProps), {}, {
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    }),
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: function onFocus(e) {
      _onFocus === null || _onFocus === void 0 || _onFocus(e);
      setHasFocus(true);
    },
    onBlur: function onBlur(e) {
      _onBlur === null || _onBlur === void 0 || _onBlur(e);
      setHasFocus(false);
    },
    className: "\n         ".concat((_inputProps$className = inputProps === null || inputProps === void 0 ? void 0 : inputProps.className) !== null && _inputProps$className !== void 0 ? _inputProps$className : ""),
    name: name,
    success: success,
    error: error,
    id: name,
    value: value,
    type: type
  })));
};
var InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
try {
    // @ts-ignore
    InputWrapper.displayName = "InputWrapper";
    // @ts-ignore
    InputWrapper.__docgenInfo = { "description": "", "displayName": "InputWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"number\"" }, { "value": "\"search\"" }, { "value": "\"time\"" }, { "value": "\"text\"" }, { "value": "\"hidden\"" }, { "value": "\"tel\"" }, { "value": "\"url\"" }, { "value": "\"email\"" }, { "value": "\"date\"" }, { "value": "\"file\"" }, { "value": "\"password\"" }, { "value": "\"datetime-local\"" }] } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "inputProps": { "defaultValue": null, "description": "", "name": "inputProps", "required": false, "type": { "name": "PartialInputProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper"] = { docgenInfo: InputWrapper.__docgenInfo, name: "InputWrapper", path: "src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem;display:flex;align-items:center;justify-content:center}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__floating-label-active--GU6su [data-icon]:before{transform:translateY(5px)}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed;color:var(--greyed-out)}.InputWrapper-module__floating-label-active--GU6su [data-prefix],.InputWrapper-module__floating-label-active--GU6su [data-suffix]{padding-top:1rem;transform:translateY(0)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "InputWrapper-module__sr-only--_BGLV",
	"hidden": "InputWrapper-module__hidden--j7j0R",
	"slide-in": "InputWrapper-module__slide-in--PMOZy",
	"slide-out": "InputWrapper-module__slide-out--ghrlP",
	"floating-label": "InputWrapper-module__floating-label--aGgwG",
	"input-wrapper-helper": "InputWrapper-module__input-wrapper-helper--GKzdc",
	"input-wrapper": "InputWrapper-module__input-wrapper--x9INE",
	"floating-label-active": "InputWrapper-module__floating-label-active--GU6su",
	"disabled": "InputWrapper-module__disabled--TE5Ui"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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