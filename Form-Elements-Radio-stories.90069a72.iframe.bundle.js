"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5044],{

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

/***/ "./stories/Form/Elements/Radio.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Radio": function() { return /* binding */ Radio_stories_Radio; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Radio_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Radio/Radio.tsx + 1 modules
var Radio = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Radio.mdx



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
      a: "a",
      strong: "strong",
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component is a native HTML ", (0,jsx_runtime.jsx)(_components.code, {
          children: "input"
        }), " element. And just like the native elements, it should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "form"
        }), ". This can be done by either nesting the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component inside of a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Form"
        }), " component, or by linking to a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "form"
        }), " element by using the appropriate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "form"
        }), " attribute. As is default with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<input type=\"radio\"/>"
        }), " HTMLElements, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), "s are grouped together through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " attribute."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For proper accessibility, it is recommended to nest the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component, so it has a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "legend"
        }), " element that tells the end-user what they represent. ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/docs/stories-form-wrapper-radiowrapper--radio-wrapper",
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RadioWrapper"
          }), " component already does this for you."]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Each individual radio button can have its own ", (0,jsx_runtime.jsx)(_components.code, {
          children: "helperText"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorMessage"
        }), ". By default, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "helperText"
        }), " will be shown ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "if"
        }), " this prop is filled in. As soon as the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " prop is set to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errorMessage"
        }), " will be shown."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A code example of how you could use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Radio"
        }), " component with state:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const ExampleComponent = () => {\n  const [radioValue, setRadioValue] = useState(\"option1\");\n\n  return (\n    <Fieldset legend=\"Radio button group\">\n      <Radio\n        name=\"example-name\"\n        value=\"option1\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option1\"}\n      >\n        Option 1\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option2\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option2\"}\n      >\n        Option 2\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option3\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option3\"}\n      >\n        Option 3\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option4\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option4\"}\n      >\n        Option 4\n      </Radio>\n    </Fieldset>\n  );\n};\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Radio_stories_Radio
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
/* harmony default export */ var Elements_Radio = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/Radio.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _Radio$parameters, _Radio$parameters2, _Radio$parameters2$do;
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
  title: "components/Inputs/Raw/Radio",
  component: Radio/* Radio */.Y,
  parameters: {
    docs: {
      page: Elements_Radio
    }
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true
      },
      control: false
    },
    parentErrorId: {
      table: {
        disable: true
      },
      control: false
    },
    errorMessageId: {
      table: {
        disable: true
      },
      control: false
    },
    checked: {
      type: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};
/* harmony default export */ var Radio_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.p, {
    legend: "Radio button group",
    legendStyle: "body-bold"
  }, /*#__PURE__*/react.createElement(Radio/* Radio */.Y, _extends({}, args, {
    helperText: "Example helpertext",
    errorMessage: "Example error message",
    value: "example-radio"
  }), "Label"));
};
var Radio_stories_Radio = Template.bind({});
Radio_stories_Radio.args = {};
Radio_stories_Radio.parameters = _objectSpread(_objectSpread({}, Radio_stories_Radio.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Radio$parameters = Radio_stories_Radio.parameters) === null || _Radio$parameters === void 0 ? void 0 : _Radio$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <Fieldset legend=\"Radio button group\" legendStyle={\"body-bold\"}>\n    <RadioComponent {...args} helperText=\"Example helpertext\" errorMessage=\"Example error message\" value=\"example-radio\">\n      Label\n    </RadioComponent>\n  </Fieldset>"
    }, (_Radio$parameters2 = Radio_stories_Radio.parameters) === null || _Radio$parameters2 === void 0 ? void 0 : (_Radio$parameters2$do = _Radio$parameters2.docs) === null || _Radio$parameters2$do === void 0 ? void 0 : _Radio$parameters2$do.source)
  })
});
var __namedExportsOrder = ["Radio"];

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