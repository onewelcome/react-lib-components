"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[6850],{

/***/ "./stories/FormWithStepper/FormWithStepper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FormWithStepperComponent: () => (/* binding */ FormWithStepperComponent),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ FormWithStepper_stories)
});

// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx + 1 modules
var FormStepper = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx + 1 modules
var FormWithStepper = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx + 1 modules
var FormSection = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/FormWithStepper/FormWithStepper.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FormWithStepper"
      }), " component will be used as a wrapper component that contains FormHeader, FormStepper or Stepper and form. Its root element is the default HTML ", (0,jsx_runtime.jsx)(_components.code, {
        children: "div"
      }), " tag and thus also accepts all of its HTML attributes. You should use this component whenever you want to create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FormWithStepper"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FromTemplate"
      }), " component is a wrapper component for creating FormHeader, FormStepper or Stepper and form. See the code snippet below that showcases how you can use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "\nconst buttons: ReactElement<ButtonProps, typeof Button>[] = [\n  <Button key=\"1\" onClick={() => alert(\"Cancel button clicked.\")} variant=\"text\">\n    Cancel\n  </Button>,\n  <Button key=\"2\" disabled startIcon={<Icon icon={Icons.SaveOutline} />}>\n    Save Draft\n  </Button>,\n  <Button key=\"3\" onClick={() => alert(\"Submit button clicked.\")} startIcon={<Icon icon={Icons.ReplyOutline} />}>\n    Submit\n  </Button>\n];\n\n const formHeaderComponent =  <FormHeader\n  title= {\"Form Header Text\"}\n  buttons={buttons}>\n    Form Header children\n </FormHeader>\n\n\n const initialStepperState: FormStepProps[] = [\n  {\n    status: \"done\",\n    label: \"Step 1\",\n    targetScrollViewId: \"samlBaseInfo\"\n  },\n  {\n    status: \"error\",\n    label: \"Step 2\",\n    targetScrollViewId: \"samlConnectionDetail\"\n  },\n  {\n    status: \"current\",\n    label: \"Step 3\",\n    targetScrollViewId: \"samlFederationRequest\"\n  },\n  {\n    status: \"waiting\",\n    label: \"Step 4\",\n    targetScrollViewId: \"samlAttributeMapping\"\n  }\n];\n\nconst formStepperProps: Props = {\n  direction: \"vertical\",\n  textPosition: \"bottom\",\n  steps: initialStepperState\n};\n\nconst formStepperComponent = <FormStepper {...formStepperProps}></FormStepper>\n\n<FormWithStepper formHeader={formHeaderComponent} formStepper={formStepperComponent}>\n    Any form children\n</FormWithStepper>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: FormWithStepperComponent
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
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
/* harmony default export */ const FormWithStepper_FormWithStepper = (MDXContent);

// EXTERNAL MODULE: ./stories/Form/Examples/FormControlExample.tsx
var FormControlExample = __webpack_require__("./stories/Form/Examples/FormControlExample.tsx");
;// CONCATENATED MODULE: ./stories/FormWithStepper/FormWithStepper.stories.tsx






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
  component: FormWithStepper/* FormWithStepper */.g,
  parameters: {
    docs: {
      page: FormWithStepper_FormWithStepper
    }
  },
  args: formStepperProps
};
/* harmony default export */ const FormWithStepper_stories = (meta);
const Template = args => {
  const [steps, setSteps] = (0,react.useState)(initialStepperState);
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
  const formStepperComponent = /*#__PURE__*/react.createElement(FormStepper/* FormStepper */.I, formStepperState);
  return /*#__PURE__*/react.createElement(FormWithStepper/* FormWithStepper */.g, {
    stepper: formStepperComponent
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlBaseInfo",
    header: "Step 1 Form Section",
    subtext: "Form Section sub-header."
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 0,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlConnectionDetail",
    header: "Step 2 Form Section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 1,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlFederationRequest",
    header: "Step 3 Form section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 2,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlAttributeMapping",
    header: "Step 4 Form section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
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

/***/ "./src/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Form)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss
var Form_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Form.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Form_module/* default */.A, options);




       /* harmony default export */ const Form_Form_module = (Form_module/* default */.A && Form_module/* default */.A.locals ? Form_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
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



const FormComponent = (_ref, ref) => {
  let {
    children,
    className,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("form", _extends({
    ref: ref,
    className: "".concat(Form_Form_module.form, " ").concat(className !== null && className !== void 0 ? className : "")
  }, rest), children);
};
const Form = /*#__PURE__*/react.forwardRef(FormComponent);
try {
    // @ts-ignore
    Form.displayName = "Form";
    // @ts-ignore
    Form.__docgenInfo = { "description": "", "displayName": "Form", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Form.tsx#Form"] = { docgenInfo: Form.__docgenInfo, name: "Form", path: "src/components/Form/Form.tsx#Form" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 */.Form-module__form--Nl9sb{font-family:var(--font-family)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": `Form-module__form--Nl9sb`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);