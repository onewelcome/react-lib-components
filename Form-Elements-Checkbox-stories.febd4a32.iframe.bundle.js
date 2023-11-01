"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[504],{

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

/***/ "./stories/Form/Elements/Checkbox.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CheckboxLabelOverflow: function() { return /* binding */ CheckboxLabelOverflow; },
  CheckboxStates: function() { return /* binding */ CheckboxStates; },
  NestedCheckbox: function() { return /* binding */ NestedCheckbox; },
  SingleCheckbox: function() { return /* binding */ SingleCheckbox; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Checkbox_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Checkbox/Checkbox.tsx + 1 modules
var Checkbox = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Checkbox.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h1: "h1",
    strong: "strong",
    h2: "h2",
    pre: "pre",
    a: "a"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " component is a native HTML ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input"
      }), " element. And just like the native elements, it should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), ".\nIt can be done by either nesting the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " component inside a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Form"
      }), " component or linking to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), " by using the appropriate form attribute."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Checkboxes can be either singular or nested and should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "state"
      }), " variable to control the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checked"
      }), " state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The examples below are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " interactive, since they are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " linked to any state variable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "singular-checkbox",
      children: "Singular Checkbox"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: SingleCheckbox
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here is a code example that shows what it would look like if you linked the above ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " component to a state variable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleForm = () => {\n  const [checkboxState, setCheckboxState] = useState(false);\n\n  return (\n    <Form>\n      <Checkbox\n        checked={checkboxState}\n        onChange={setCheckboxState(!checkboxState)}\n        name=\"Example checkbox component\"\n      />\n    </Form>\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As you can see we link the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checked"
      }), " prop to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checkboxState"
      }), " state variable. After that, we link the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " event to set the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checkboxState"
      }), " to what it was previously not."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nested-checkbox",
      children: "Nested Checkbox"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components, you have to make sure to pass the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " prop and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "indeterminate"
      }), " prop to the parent checkbox! Otherwise, it throws an error."]
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: NestedCheckbox
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you would like to see this component in action ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/story/stories-form-wrapper-checkboxwrapper--nested-checkboxes",
        children: "check the CheckboxWrapper component"
      }), " where we linked all the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components to state variables."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here is a code example that shows what it would look like if you linked the above nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components to state variables:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleForm = () => {\n  const [indeterminate, setIndeterminate] = useState(false);\n  const [electronics, setElectronics] = useState(false);\n  const [checkedLaptop, setCheckedLaptop] = useState(false);\n  const [checkedTV, setCheckedTV] = useState(false);\n  const [checkedMicrophone, setCheckedMicrophone] = useState(false);\n\n  useEffect(() => {\n    if (checkedLaptop && checkedTV && checkedMicrophone) {\n      setElectronics(true);\n      setIndeterminate(false);\n    } else if (checkedLaptop || checkedTV || checkedMicrophone) {\n      setElectronics(false);\n      setIndeterminate(true);\n    } else {\n      setElectronics(false);\n      setIndeterminate(false);\n    }\n  }, [checkedLaptop, checkedTV, checkedMicrophone]);\n\n  const handleElectronicsOnChange = () => {\n    setElectronics(!electronics);\n    setCheckedLaptop(!electronics);\n    setCheckedTV(!electronics);\n    setCheckedMicrophone(!electronics);\n  };\n\n  return (\n    <Form>\n      <Checkbox\n        indeterminate={indeterminate}\n        checked={electronics}\n        name=\"electronics\"\n        label=\"Electronics\"\n        onChange={handleElectronicsOnChange}\n      >\n        <Checkbox\n          onChange={setCheckedLaptop(!checkedLaptop);}\n          checked={checkedLaptop}\n          helperText=\"More examples\"\n          name=\"laptop\"\n        >\n          Laptop\n        </Checkbox>\n        <Checkbox\n          onChange={setCheckedTV(!checkedTV);}\n          checked={checkedTV}\n          name=\"tv\"\n        >\n          TVs\n        </Checkbox>\n        <Checkbox\n          onChange={setCheckedMicrophone(!checkedMicrophone);}\n          checked={checkedMicrophone}\n          name=\"microphones\"\n        >\n          Microphones\n        </Checkbox>\n      </Checkbox>\n    </Form>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There are multiple ways to keep track of all of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " states (whether they are checked or not). In this example we chose for 5 separate state variables, but you can also choose to use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useReducer"
      }), " to manage all of the state variables. Alternatively you could also use a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      }), " with an object that manages all the state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We manage the indeterminate and checkbox state in the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " with two different functions. Whenever the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "laptop"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tv"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "microphones"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components change, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useEffect"
      }), " will be executed and will set the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), "' ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checked"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "indeterminate"
      }), " values based on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checked"
      }), " state of its children ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), "es. Alternatively, whenever the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " is clicked, we execute the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handleElectronicsOnChange"
      }), " function which either sets all the child ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checked"
      }), " values to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), "."]
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
/* harmony default export */ var Elements_Checkbox = (MDXContent);

// EXTERNAL MODULE: ./src/components/Link/Link.tsx + 1 modules
var Link = __webpack_require__("./src/components/Link/Link.tsx");
;// CONCATENATED MODULE: ./stories/Form/Elements/Checkbox.stories.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _SingleCheckbox$param, _SingleCheckbox$param2, _NestedCheckbox$param, _NestedCheckbox$param2, _CheckboxLabelOverflo, _CheckboxLabelOverflo2, _CheckboxStates$param, _CheckboxStates$param2;
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
  /* fixme: currently it's impossible to add conditional exclusions: https://github.com/storybookjs/storybook/issues/18233
   * when it's available we should include states only for chromatic
   * excludeStories: /.*CheckboxStates$/,
   * */
  title: "components/Inputs/Raw/Checkbox",
  component: Checkbox/* Checkbox */.X,
  parameters: {
    docs: {
      page: Elements_Checkbox
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
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: "boolean"
    },
    label: {
      control: "text"
    }
  }
};
/* harmony default export */ var Checkbox_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, _extends({
    name: "name"
  }, args));
};
var SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  children: "Example",
  helperProps: {
    children: /*#__PURE__*/react.createElement(Link/* Link */.r, {
      style: {
        fontSize: "inherit"
      },
      to: "#"
    }, "Go to our privacy policy")
  },
  name: "Checkbox"
};
var NestedCheckbox = Template.bind({});
NestedCheckbox.args = {
  indeterminate: false,
  label: "Electronics",
  name: "electronics",
  children: [/*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    name: "laptop",
    key: "1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    name: "tv",
    key: "2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    name: "microphones",
    key: "3"
  }, "Option 3")]
};
var CheckboxLabelOverflow = Template.bind({});
CheckboxLabelOverflow.decorators = [function () {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    style: {
      width: "200px"
    }
  }, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    errorMessage: "Oh no!",
    name: "checkbox",
    helperProps: {
      children: "It is always nice to see a good old helper text!"
    }
  }, "It seems to be a good idea to test the label and how it wraps if there is not enough space for it. What do you think?")));
}];
var CheckboxStates = Template.bind({});
var checkboxStates = [{
  checked: false,
  error: false,
  disabled: false,
  indeterminate: false
}, {
  checked: false,
  error: false,
  disabled: true,
  indeterminate: false
}, {
  checked: true,
  error: false,
  disabled: false,
  indeterminate: false
}, {
  checked: true,
  error: true,
  disabled: false,
  indeterminate: false
}, {
  checked: true,
  error: false,
  disabled: true,
  indeterminate: false
}, {
  checked: false,
  error: false,
  disabled: true,
  indeterminate: true
}, {
  checked: false,
  error: true,
  disabled: false,
  indeterminate: true
}, {
  checked: false,
  error: false,
  disabled: false,
  indeterminate: true
}];
CheckboxStates.decorators = [function () {
  return /*#__PURE__*/react.createElement(react.Fragment, null, checkboxStates.map(function (states, index) {
    return /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
      key: index,
      disabled: states.disabled,
      checked: states.checked,
      error: states.error,
      errorMessage: "Oh no!",
      indeterminate: states.indeterminate,
      name: "checkbox",
      helperProps: {
        children: "It is always nice to see a good old helper text!"
      }
    }, "Label");
  }));
}];
SingleCheckbox.parameters = _objectSpread(_objectSpread({}, SingleCheckbox.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SingleCheckbox$param = SingleCheckbox.parameters) === null || _SingleCheckbox$param === void 0 ? void 0 : _SingleCheckbox$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Checkbox name={\"name\"} {...args} />;\n}"
    }, (_SingleCheckbox$param2 = SingleCheckbox.parameters) === null || _SingleCheckbox$param2 === void 0 || (_SingleCheckbox$param2 = _SingleCheckbox$param2.docs) === null || _SingleCheckbox$param2 === void 0 ? void 0 : _SingleCheckbox$param2.source)
  })
});
NestedCheckbox.parameters = _objectSpread(_objectSpread({}, NestedCheckbox.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_NestedCheckbox$param = NestedCheckbox.parameters) === null || _NestedCheckbox$param === void 0 ? void 0 : _NestedCheckbox$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Checkbox name={\"name\"} {...args} />;\n}"
    }, (_NestedCheckbox$param2 = NestedCheckbox.parameters) === null || _NestedCheckbox$param2 === void 0 || (_NestedCheckbox$param2 = _NestedCheckbox$param2.docs) === null || _NestedCheckbox$param2 === void 0 ? void 0 : _NestedCheckbox$param2.source)
  })
});
CheckboxLabelOverflow.parameters = _objectSpread(_objectSpread({}, CheckboxLabelOverflow.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CheckboxLabelOverflo = CheckboxLabelOverflow.parameters) === null || _CheckboxLabelOverflo === void 0 ? void 0 : _CheckboxLabelOverflo.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Checkbox name={\"name\"} {...args} />;\n}"
    }, (_CheckboxLabelOverflo2 = CheckboxLabelOverflow.parameters) === null || _CheckboxLabelOverflo2 === void 0 || (_CheckboxLabelOverflo2 = _CheckboxLabelOverflo2.docs) === null || _CheckboxLabelOverflo2 === void 0 ? void 0 : _CheckboxLabelOverflo2.source)
  })
});
CheckboxStates.parameters = _objectSpread(_objectSpread({}, CheckboxStates.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CheckboxStates$param = CheckboxStates.parameters) === null || _CheckboxStates$param === void 0 ? void 0 : _CheckboxStates$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Checkbox name={\"name\"} {...args} />;\n}"
    }, (_CheckboxStates$param2 = CheckboxStates.parameters) === null || _CheckboxStates$param2 === void 0 || (_CheckboxStates$param2 = _CheckboxStates$param2.docs) === null || _CheckboxStates$param2 === void 0 ? void 0 : _CheckboxStates$param2.source)
  })
});
var __namedExportsOrder = ["SingleCheckbox", "NestedCheckbox", "CheckboxLabelOverflow", "CheckboxStates"];

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ filterProps; },
/* harmony export */   MU: function() { return /* binding */ getValueByPath; },
/* harmony export */   Pb: function() { return /* binding */ isJsonString; },
/* harmony export */   R3: function() { return /* binding */ areArraysDifferent; },
/* harmony export */   cv: function() { return /* binding */ remToPx; },
/* harmony export */   y: function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
var deepMerge = function deepMerge(obj1, obj2) {
  if (!obj2) return obj1;
  var result = _objectSpread({}, obj1);
  for (var _key2 in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, _key2)) {
      if (_typeof(obj2[_key2]) === "object" && obj2[_key2] !== null && Object.prototype.hasOwnProperty.call(obj1, _key2) && !Array.isArray(obj2[_key2])) {
        result[_key2] = deepMerge(obj1[_key2], obj2[_key2]);
      } else {
        result[_key2] = obj2[_key2];
      }
    }
  }
  return result;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
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