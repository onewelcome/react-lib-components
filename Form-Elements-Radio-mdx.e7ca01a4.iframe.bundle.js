"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2857],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "./stories/Form/Elements/Radio.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Elements/Radio.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Radio"
      }), " component is a native HTML ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "input"
      }), " element. And just like the native elements, it should be linked to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "form"
      }), ". This can be done by either nesting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Radio"
      }), " component inside of a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Form"
      }), " component, or by linking to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "form"
      }), " element by using the appropriate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "form"
      }), " attribute. As is default with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<input type=\"radio\"/>"
      }), " HTMLElements, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Radio"
      }), "s are grouped together through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "name"
      }), " attribute."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For proper accessibility, it is recommended to nest the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Radio"
      }), " component inside a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Fieldset"
      }), " component, so it has a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "legend"
      }), " element that tells the end-user what they represent. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "/docs/stories-form-wrapper-radiowrapper--radio-wrapper",
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component already does this for you."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Each individual radio button can have its own ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "helperText"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "errorMessage"
      }), ". By default, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "helperText"
      }), " will be shown ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "if"
      }), " this prop is filled in. As soon as the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "error"
      }), " prop is set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "true"
      }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "errorMessage"
      }), " will be shown."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of how you could use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Radio"
      }), " component with state:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [radioValue, setRadioValue] = useState(\"option1\");\n\n  return (\n    <Fieldset legend=\"Radio button group\">\n      <Radio\n        name=\"example-name\"\n        value=\"option1\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option1\"}\n      >\n        Option 1\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option2\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option2\"}\n      >\n        Option 2\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option3\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option3\"}\n      >\n        Option 3\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option4\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option4\"}\n      >\n        Option 4\n      </Radio>\n    </Fieldset>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.Radio
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "./stories/Form/Elements/Radio.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Radio: () => (/* binding */ Radio),
/* harmony export */   RadioInReadOnlyMode: () => (/* binding */ RadioInReadOnlyMode),
/* harmony export */   RadioLabelOverflow: () => (/* binding */ RadioLabelOverflow),
/* harmony export */   RadioStates: () => (/* binding */ RadioStates),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
/* harmony import */ var _Radio_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./stories/Form/Elements/Radio.mdx");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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





const meta = {
  title: "components/Inputs/Raw/Radio",
  component: _src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_1__/* .Radio */ .s,
  parameters: {
    docs: {
      page: _Radio_mdx__WEBPACK_IMPORTED_MODULE_2__["default"]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__/* .Fieldset */ .L, {
  legend: "Radio button group",
  legendStyle: "body-bold"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_1__/* .Radio */ .s, _extends({}, args, {
  helperText: "Example helpertext",
  errorMessage: "Example error message",
  value: "example-radio"
}), "Label"));
const Radio = Template.bind({});
Radio.args = {};
const RadioLabelOverflow = Template.bind({});
RadioLabelOverflow.decorators = [() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: "200px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_1__/* .Radio */ .s, {
    helperText: "Example helper text",
    value: "example-radio",
    errorMessage: "Oh crap!"
  }, "It seems to be a good idea to test the label and how it wraps if there is not enough space for it. What do you think?"));
}];
const RadioStates = Template.bind({});
const radioStates = [{
  checked: false,
  error: false,
  disabled: false
}, {
  checked: false,
  error: true,
  disabled: false
}, {
  checked: true,
  error: false,
  disabled: false
}, {
  checked: true,
  error: true,
  disabled: false
}, {
  checked: true,
  error: false,
  disabled: true
}, {
  checked: false,
  error: false,
  disabled: true
}];
RadioStates.decorators = [() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, radioStates.map((states, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_1__/* .Radio */ .s, {
    key: index,
    helperText: "Example helper text",
    value: "example-radio",
    checked: states.checked,
    disabled: states.disabled,
    error: states.error,
    errorMessage: "Oh crap!"
  }, "Label")));
}];
const RadioInReadOnlyMode = Template.bind({});
RadioInReadOnlyMode.storyName = "Radio Component In Read-only Mode";
const readOnlyRadioStates = [{
  checked: false,
  error: false,
  disabled: false
}, {
  checked: true,
  error: false,
  disabled: false
}];
RadioInReadOnlyMode.decorators = [() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, readOnlyRadioStates.map((states, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_1__/* .Radio */ .s, {
    key: index,
    helperText: "Example helper text",
    value: "example-radio",
    checked: states.checked,
    disabled: states.disabled,
    error: states.error,
    errorMessage: "Oh crap!",
    readOnlyView: true
  }, "Label")));
}];
Radio.parameters = {
  ...Radio.parameters,
  docs: {
    ...Radio.parameters?.docs,
    source: {
      originalSource: "args => <Fieldset legend=\"Radio button group\" legendStyle={\"body-bold\"}>\n    <RadioComponent {...args} helperText=\"Example helpertext\" errorMessage=\"Example error message\" value=\"example-radio\">\n      Label\n    </RadioComponent>\n  </Fieldset>",
      ...Radio.parameters?.docs?.source
    }
  }
};
RadioLabelOverflow.parameters = {
  ...RadioLabelOverflow.parameters,
  docs: {
    ...RadioLabelOverflow.parameters?.docs,
    source: {
      originalSource: "args => <Fieldset legend=\"Radio button group\" legendStyle={\"body-bold\"}>\n    <RadioComponent {...args} helperText=\"Example helpertext\" errorMessage=\"Example error message\" value=\"example-radio\">\n      Label\n    </RadioComponent>\n  </Fieldset>",
      ...RadioLabelOverflow.parameters?.docs?.source
    }
  }
};
RadioStates.parameters = {
  ...RadioStates.parameters,
  docs: {
    ...RadioStates.parameters?.docs,
    source: {
      originalSource: "args => <Fieldset legend=\"Radio button group\" legendStyle={\"body-bold\"}>\n    <RadioComponent {...args} helperText=\"Example helpertext\" errorMessage=\"Example error message\" value=\"example-radio\">\n      Label\n    </RadioComponent>\n  </Fieldset>",
      ...RadioStates.parameters?.docs?.source
    }
  }
};
RadioInReadOnlyMode.parameters = {
  ...RadioInReadOnlyMode.parameters,
  docs: {
    ...RadioInReadOnlyMode.parameters?.docs,
    source: {
      originalSource: "args => <Fieldset legend=\"Radio button group\" legendStyle={\"body-bold\"}>\n    <RadioComponent {...args} helperText=\"Example helpertext\" errorMessage=\"Example error message\" value=\"example-radio\">\n      Label\n    </RadioComponent>\n  </Fieldset>",
      ...RadioInReadOnlyMode.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Radio","RadioLabelOverflow","RadioStates","RadioInReadOnlyMode"];

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