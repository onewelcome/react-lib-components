"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2770],{

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

/***/ "./stories/Form/Wrapper/RadioWrapper.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RadioWrapper": function() { return /* binding */ RadioWrapper_stories_RadioWrapper; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ RadioWrapper_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx + 1 modules
var RadioWrapper = __webpack_require__("./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Radio/Radio.tsx + 1 modules
var Radio = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/RadioWrapper.mdx



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
      a: "a",
      strong: "strong",
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component has been created to make your life easier, as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least four props: a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fieldsetProps.legend"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), " and an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onChange"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), " prop should be linked to a React ", (0,jsx_runtime.jsx)(_components.code, {
          children: "state"
        }), ", and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onChange"
        }), " prop should set this ", (0,jsx_runtime.jsx)(_components.code, {
          children: "state"
        }), " to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event.target.value"
        }), " it receives. You can set the initially checked radio if you set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "state"
        }), " to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component you want to be checked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["As the name implies, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component should be used as a wrapper around your ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " components. It has a few functions that help you with retaining proper accessibility and functionality:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "it-adds-a-fieldset-component",
        children: "It adds a Fieldset component"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["And this ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component requires a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "legend"
        }), " prop, which increases accessibility by telling screenreaders what your ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component is used for. You will also have access to the rest of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " props through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fieldsetProps"
        }), " prop on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component. For all of the props ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/docs/stories-form-elements-fieldset--fieldset",
          children: ["see the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Fieldset"
          }), " component documentation"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "it-enables-proper-accessibility-features",
        children: "It enables proper accessibility features"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component has an internal ID for its helper text and error message. The children ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " components will be linked to this helper text and error message through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-describedby"
        }), " accessibility feature automatically if needed. This works as follows: if a nested ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component has a helper text, the id of this helper text will be its ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-describedby"
        }), " value. In case the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " have a helper text, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-describedby"
        }), " value will be the ID of the helper text that its parent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component has. Whenever the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " has an error, and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorMessage"
        }), " prop is filled, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-describedby"
        }), " attribute of all child ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " components will be the ID of this ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorMessage"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "You will not have to do anything about these complicated accessibility features. It's all done internally for you."
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "it-gives-styling-on-error-or-disabled",
        children: "It gives styling on error or disabled"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The disabled state for all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " components within the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " can be controlled through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        }), " prop on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), ". The same goes for the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " prop."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A code example of how you can configure a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " within a React component:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const ExampleComponent = () => {\n  const [radioValue, setRadioValue] = useState(\"option1\");\n\n  return (\n    <RadioWrapper\n      name=\"radio group 1\"\n      fieldsetProps={{ legend: \"Radio group\" }}\n      value={radioValue}\n      onChange={event => setRadioValue(event.target.value)}\n    >\n      <Radio value=\"option1\">Option 1</Radio>\n      <Radio value=\"option2\">Option 2</Radio>\n      <Radio value=\"option3\">Option 3</Radio>\n      <Radio value=\"option4\">Option 4</Radio>\n    </RadioWrapper>\n  );\n};\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The story below is controlled by Storybook. You can configure it using the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#props",
          children: "Props table"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: RadioWrapper_stories_RadioWrapper
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
/* harmony default export */ var Wrapper_RadioWrapper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Wrapper/RadioWrapper.stories.tsx
var _RadioWrapper$paramet, _RadioWrapper$paramet2, _RadioWrapper$paramet3;
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
  title: "components/Inputs/Radio (Wrapper)",
  component: RadioWrapper/* RadioWrapper */.S,
  parameters: {
    docs: {
      page: Wrapper_RadioWrapper
    }
  },
  argTypes: {
    value: {
      options: ["option1", "option2", "option3"],
      control: {
        type: "radio"
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
/* harmony default export */ var RadioWrapper_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(RadioWrapper/* RadioWrapper */.S, args, /*#__PURE__*/react.createElement(Radio/* Radio */.Y, {
    helperText: "Individual helper",
    value: "option1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Radio/* Radio */.Y, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Radio/* Radio */.Y, {
    value: "option3"
  }, "Option 3")));
};
var RadioWrapper_stories_RadioWrapper = Template.bind({});
RadioWrapper_stories_RadioWrapper.args = {
  error: false,
  errorMessage: "Errormessage",
  fieldsetProps: {
    legend: "Radio buttons",
    hideLegend: false,
    legendStyle: "h1",
    noPadding: true,
    noBackground: true
  },
  helperText: "Helpertext",
  value: "option1",
  name: "my-group",
  onChange: function onChange() {}
};
RadioWrapper_stories_RadioWrapper.parameters = _objectSpread(_objectSpread({}, RadioWrapper_stories_RadioWrapper.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_RadioWrapper$paramet = RadioWrapper_stories_RadioWrapper.parameters) === null || _RadioWrapper$paramet === void 0 ? void 0 : _RadioWrapper$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <div>\n      <RadioWrapperComponent {...args}>\n        <Radio helperText=\"Individual helper\" value=\"option1\">\n          Option 1\n        </Radio>\n        <Radio value=\"option2\">Option 2</Radio>\n        <Radio value=\"option3\">Option 3</Radio>\n      </RadioWrapperComponent>\n    </div>;\n}"
    }, (_RadioWrapper$paramet2 = RadioWrapper_stories_RadioWrapper.parameters) === null || _RadioWrapper$paramet2 === void 0 ? void 0 : (_RadioWrapper$paramet3 = _RadioWrapper$paramet2.docs) === null || _RadioWrapper$paramet3 === void 0 ? void 0 : _RadioWrapper$paramet3.source)
  })
});
var __namedExportsOrder = ["RadioWrapper"];

/***/ }),

/***/ "./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": function() { return /* binding */ RadioWrapper; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss
var RadioWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(RadioWrapper_module/* default */.Z, options);




       /* harmony default export */ var RadioWrapper_RadioWrapper_module = (RadioWrapper_module/* default */.Z && RadioWrapper_module/* default.locals */.Z.locals ? RadioWrapper_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["children", "error", "name", "helperText", "helperProps", "fieldsetProps", "value", "onChange", "disabled"];
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







var RadioWrapperComponent = function RadioWrapperComponent(_ref, ref) {
  var _helperProps$classNam;
  var children = _ref.children,
    error = _ref.error,
    name = _ref.name,
    helperText = _ref.helperText,
    helperProps = _ref.helperProps,
    fieldsetProps = _ref.fieldsetProps,
    value = _ref.value,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useWrapper = (0,useWrapper/* useWrapper */.s)(),
    errorId = _useWrapper.errorId,
    helperId = _useWrapper.helperId;
  (0,react.useEffect)(function () {
    if (fieldsetProps.legend === undefined) {
      console.error("You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in RadioWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: \"legend here\" }})");
    }
  }, []);
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      return /*#__PURE__*/react.cloneElement(child, {
        parentErrorId: errorId,
        error: error,
        checked: child.props.value === value,
        name: name,
        parentHelperId: helperText ? helperId : false,
        onChange: onChange,
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled
      });
    });
  };
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.p, _extends({}, fieldsetProps, {
    error: error,
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    name: name,
    helperId: helperId,
    helperText: helperText,
    helperProps: _objectSpread(_objectSpread({}, helperProps), {}, {
      className: "".concat(RadioWrapper_RadioWrapper_module["radio-wrapper-helper"], " ").concat(error ? RadioWrapper_RadioWrapper_module["radio-wrapper-error"] : "", " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    }),
    error: error,
    errorId: errorId,
    errorMessageIcon: Icon/* Icons.Error */.P.Error
  }), renderChildren()));
};
var RadioWrapper = /*#__PURE__*/react.forwardRef(RadioWrapperComponent);
try {
    // @ts-ignore
    RadioWrapper.displayName = "RadioWrapper";
    // @ts-ignore
    RadioWrapper.__docgenInfo = { "description": "", "displayName": "RadioWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "fieldsetProps": { "defaultValue": null, "description": "", "name": "fieldsetProps", "required": true, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx#RadioWrapper"] = { docgenInfo: RadioWrapper.__docgenInfo, name: "RadioWrapper", path: "src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx#RadioWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.RadioWrapper-module__radio-wrapper-helper--VScFS{margin-top:1.25rem}.RadioWrapper-module__radio-wrapper-error--OuqdP span{font-size:1rem}.RadioWrapper-module__radio-wrapper-error--OuqdP [data-icon]{font-size:1.25rem;vertical-align:bottom}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"radio-wrapper-helper": "RadioWrapper-module__radio-wrapper-helper--VScFS",
	"radio-wrapper-error": "RadioWrapper-module__radio-wrapper-error--OuqdP"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


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