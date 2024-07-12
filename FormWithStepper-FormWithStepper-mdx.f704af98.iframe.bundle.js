"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1056],{

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

/***/ "./stories/FormWithStepper/FormWithStepper.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Users_michal_gorski_Projects_react_lib_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _FormWithStepper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/FormWithStepper/FormWithStepper.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    ...(0,_Users_michal_gorski_Projects_react_lib_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _FormWithStepper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FormWithStepper"
      }), " component will be used as a wrapper component that contains FormHeader, FormStepper or Stepper and form. Its root element is the default HTML ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "div"
      }), " tag and thus also accepts all of its HTML attributes. You should use this component whenever you want to create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FormWithStepper"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "example",
      children: "Example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _FormWithStepper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.FormWithStepperComponent
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_Users_michal_gorski_Projects_react_lib_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ "./stories/FormWithStepper/FormWithStepper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormWithStepperComponent: () => (/* binding */ FormWithStepperComponent),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_Layout_FormPage_FormWithStepper_FormStepper_FormStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx");
/* harmony import */ var _src_components_Layout_FormPage_FormWithStepper_FormWithStepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx");
/* harmony import */ var _FormWithStepper_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./stories/FormWithStepper/FormWithStepper.mdx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Form_Examples_FormControlExample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./stories/Form/Examples/FormControlExample.tsx");






const initialStepperState = [{
  status: "current",
  label: "Step 1",
  targetScrollViewId: "samlBaseInfo"
}, {
  status: "waiting",
  label: "Step 2",
  targetScrollViewId: "samlConnectionDetail"
}, {
  status: "done",
  label: "Step 3",
  targetScrollViewId: "samlFederationRequest"
}, {
  status: "error",
  label: "Step 4",
  targetScrollViewId: "samlAttributeMapping"
}];
const formStepperProps = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};
const meta = {
  title: "Components/Layout/FormPage/FormWithStepper",
  component: _src_components_Layout_FormPage_FormWithStepper_FormWithStepper__WEBPACK_IMPORTED_MODULE_1__/* .FormWithStepper */ .g,
  parameters: {
    docs: {
      page: _FormWithStepper_mdx__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  },
  args: formStepperProps
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialStepperState);
  const updateStepStatus = (index, status) => {
    setSteps(prevState => {
      const props = prevState.concat();
      props[index].status = status;
      return props;
    });
  };
  const formStepperState = {
    ...formStepperProps,
    steps: steps
  };
  const formStepperComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Layout_FormPage_FormWithStepper_FormStepper_FormStepper__WEBPACK_IMPORTED_MODULE_3__/* .FormStepper */ .I, formStepperState);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Layout_FormPage_FormWithStepper_FormWithStepper__WEBPACK_IMPORTED_MODULE_1__/* .FormWithStepper */ .g, {
    stepper: formStepperComponent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .FormSection */ .y, {
    id: "samlBaseInfo",
    header: "Step 1 Form Section",
    subtext: "Form Section sub-header."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form_Examples_FormControlExample__WEBPACK_IMPORTED_MODULE_5__/* .FormControlExample */ .S, {
    index: 0,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .FormSection */ .y, {
    id: "samlConnectionDetail",
    header: "Step 2 Form Section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form_Examples_FormControlExample__WEBPACK_IMPORTED_MODULE_5__/* .FormControlExample */ .S, {
    index: 1,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .FormSection */ .y, {
    id: "samlFederationRequest",
    header: "Step 3 Form section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form_Examples_FormControlExample__WEBPACK_IMPORTED_MODULE_5__/* .FormControlExample */ .S, {
    index: 2,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .FormSection */ .y, {
    id: "samlAttributeMapping",
    header: "Step 4 Form section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form_Examples_FormControlExample__WEBPACK_IMPORTED_MODULE_5__/* .FormControlExample */ .S, {
    index: 3,
    updateStepStatus: updateStepStatus
  }))));
};
const FormWithStepperComponent = Template.bind({});
FormWithStepperComponent.parameters = {
  ...FormWithStepperComponent.parameters,
  docs: {
    ...FormWithStepperComponent.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [steps, setSteps] = useState(initialStepperState);\n  const updateStepStatus = (index: number, status: StepStatus) => {\n    setSteps(prevState => {\n      const props = prevState.concat();\n      props[index].status = status;\n      return props;\n    });\n  };\n  const formStepperState = {\n    ...formStepperProps,\n    steps: steps\n  };\n  const formStepperComponent = <FormStepper {...formStepperState}></FormStepper>;\n  return <FormWithStepper stepper={formStepperComponent}>\n      <div>\n        <FormSection id=\"samlBaseInfo\" header=\"Step 1 Form Section\" subtext=\"Form Section sub-header.\">\n          <FormControlExample index={0} updateStepStatus={updateStepStatus}></FormControlExample>\n        </FormSection>\n        <FormSection id=\"samlConnectionDetail\" header=\"Step 2 Form Section\" subtext=\"Form Section Subheader\">\n          <FormControlExample index={1} updateStepStatus={updateStepStatus}></FormControlExample>\n        </FormSection>\n        <FormSection id=\"samlFederationRequest\" header=\"Step 3 Form section\" subtext=\"Form Section Subheader\">\n          <FormControlExample index={2} updateStepStatus={updateStepStatus}></FormControlExample>\n        </FormSection>\n        <FormSection id=\"samlAttributeMapping\" header=\"Step 4 Form section\" subtext=\"Form Section Subheader\">\n          <FormControlExample index={3} updateStepStatus={updateStepStatus}></FormControlExample>\n        </FormSection>\n      </div>\n    </FormWithStepper>;\n}",
      ...FormWithStepperComponent.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["FormWithStepperComponent"];

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