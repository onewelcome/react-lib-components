"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[6705],{

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

/***/ "./stories/Form/Elements/FormControl.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Users_michal_gorski_Projects_react_lib_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _FormControl_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Elements/FormControl.stories.tsx");







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
      of: _FormControl_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FormControl"
      }), " component is used to position form elements within a container. This is useful for when you want for example multiple ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Input"
      }), " fields next to each other (say a first name and last name). The maximum grid you can create is 3 and it's already responsive so you don't have to worry about mobile."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We also give you the option to vertically ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "align"
      }), " the components you put inside of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FormControl"
      }), ". This is done through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "align"
      }), " prop. See the examples and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Props"
      }), " table for the options."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FormControl"
      }), " story you see below can be controlled using the Props table at the bottom. You can select the grid you want and how to vertically align all elements."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _FormControl_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.FormControl,
        id: "components-layout-formcontrol--form-control"
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

/***/ "./stories/Form/Elements/FormControl.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormControl: () => (/* binding */ FormControl),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/FormControl/FormControl.tsx");
/* harmony import */ var _src_components_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Form.tsx");
/* harmony import */ var _src_components_Form_Wrapper_RadioWrapper_RadioWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx");
/* harmony import */ var _src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
/* harmony import */ var _src_components_Form_Wrapper_CheckboxWrapper_CheckboxWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx");
/* harmony import */ var _src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
/* harmony import */ var _src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
/* harmony import */ var _src_components_Form_Fieldset_Fieldset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
/* harmony import */ var _FormControl_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./stories/Form/Elements/FormControl.mdx");
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
  title: "components/Layout/FormControl",
  component: _src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .M,
  parameters: {
    docs: {
      page: _FormControl_mdx__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      },
      control: false
    },
    grid: {
      options: [1, 2, 3],
      control: "radio"
    },
    align: {
      options: ["start", "center", "end", "stretch"],
      control: "radio"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("option1");
  const [prefix, setPrefix] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("mr");
  const [preferredMobileDevice, setPreferredMobileDevice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("mobile");
  const [newsletter, setNewsletter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [electronics, setElectronics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    indeterminate: false,
    checked: false,
    tv: false,
    mobile: false,
    laptop: false
  });
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const onSelectChange = event => {
    setSelectValue(event.target.value);
  };
  const prefixChangeHandler = event => {
    setPrefix(event.target.value);
  };
  const prefixClearHandler = () => {
    setPrefix("");
  };
  const onNewsletterChangeHandler = () => {
    setNewsletter(!newsletter);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!electronics.tv && !electronics.mobile && !electronics.laptop) {
      setElectronics(prevState => {
        return {
          ...prevState,
          indeterminate: false,
          checked: false
        };
      });
    }
    if (electronics.tv || electronics.mobile || electronics.laptop && !(electronics.tv && electronics.mobile && electronics.laptop)) {
      setElectronics(prevState => {
        return {
          ...prevState,
          indeterminate: true
        };
      });
    }
    if (electronics.tv && electronics.mobile && electronics.laptop) {
      setElectronics(prevState => {
        return {
          ...prevState,
          indeterminate: false,
          checked: true
        };
      });
    }
  }, [electronics.tv, electronics.laptop, electronics.mobile]);
  const handleElectronicsOnChange = () => {
    setElectronics(prevState => {
      return {
        ...prevState,
        mobile: !prevState.checked,
        tv: !prevState.checked,
        laptop: !prevState.checked
      };
    });
  };
  const handleTVOnChange = () => {
    setElectronics(prevState => {
      return {
        ...prevState,
        tv: !prevState.tv
      };
    });
  };
  const handleMobileOnChange = () => {
    setElectronics(prevState => {
      return {
        ...prevState,
        mobile: !prevState.mobile
      };
    });
  };
  const handleLaptopOnChange = () => {
    setElectronics(prevState => {
      return {
        ...prevState,
        laptop: !prevState.laptop
      };
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
    style: {
      padding: "20px",
      backgroundColor: "#F5F8F8"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .M, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_RadioWrapper_RadioWrapper__WEBPACK_IMPORTED_MODULE_4__/* .RadioWrapper */ .j, {
    error: false,
    errorMessage: "Error message",
    value: preferredMobileDevice,
    name: "electronics",
    onChange: e => setPreferredMobileDevice(e.target.value),
    helperText: "This is helper text",
    fieldsetProps: {
      legend: "Radio legend",
      legendStyle: "body-bold"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_5__/* .Radio */ .s, {
    value: "mobile"
  }, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_5__/* .Radio */ .s, {
    value: "tv"
  }, "TV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_5__/* .Radio */ .s, {
    value: "pc"
  }, "PC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_CheckboxWrapper_CheckboxWrapper__WEBPACK_IMPORTED_MODULE_6__/* .CheckboxWrapper */ .F, {
    error: false,
    errorMessage: "Error message",
    name: "electronics",
    helperText: "This is helper text",
    fieldsetProps: {
      legend: "Electronics legend",
      legendStyle: "body-bold"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__/* .Checkbox */ .S, {
    onChange: handleElectronicsOnChange,
    checked: electronics.checked,
    indeterminate: electronics.indeterminate,
    name: "electronics",
    label: "Electronics"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__/* .Checkbox */ .S, {
    onChange: handleTVOnChange,
    checked: electronics.tv,
    name: "tv"
  }, "TV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__/* .Checkbox */ .S, {
    onChange: handleMobileOnChange,
    checked: electronics.mobile,
    name: "mobile"
  }, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__/* .Checkbox */ .S, {
    onChange: handleLaptopOnChange,
    checked: electronics.laptop,
    name: "laptop"
  }, "Laptop"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Fieldset_Fieldset__WEBPACK_IMPORTED_MODULE_8__/* .Fieldset */ .L, {
    legend: "Arbitrary input",
    legendStyle: "body-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_9__/* .InputWrapper */ .o, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input1",
    errorMessage: "This is an error",
    type: "text",
    value: inputValue,
    onChange: e => setInputValue(e.target.value),
    error: false,
    label: "Label for this inputfield"
  }))));
};
const FormControl = Template.bind({});
FormControl.args = {
  grid: 3,
  align: "center"
};
FormControl.parameters = {
  ...FormControl.parameters,
  docs: {
    ...FormControl.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [selectValue, setSelectValue] = useState(\"option1\");\n  const [prefix, setPrefix] = useState(\"mr\");\n  const [preferredMobileDevice, setPreferredMobileDevice] = useState(\"mobile\");\n  const [newsletter, setNewsletter] = useState(true);\n  const [electronics, setElectronics] = useState({\n    indeterminate: false,\n    checked: false,\n    tv: false,\n    mobile: false,\n    laptop: false\n  });\n  const [inputValue, setInputValue] = useState(\"\");\n  const onSelectChange = event => {\n    setSelectValue(event.target.value);\n  };\n  const prefixChangeHandler = event => {\n    setPrefix(event.target.value);\n  };\n  const prefixClearHandler = () => {\n    setPrefix(\"\");\n  };\n  const onNewsletterChangeHandler = () => {\n    setNewsletter(!newsletter);\n  };\n  useEffect(() => {\n    if (!electronics.tv && !electronics.mobile && !electronics.laptop) {\n      setElectronics(prevState => {\n        return {\n          ...prevState,\n          indeterminate: false,\n          checked: false\n        };\n      });\n    }\n    if (electronics.tv || electronics.mobile || electronics.laptop && !(electronics.tv && electronics.mobile && electronics.laptop)) {\n      setElectronics(prevState => {\n        return {\n          ...prevState,\n          indeterminate: true\n        };\n      });\n    }\n    if (electronics.tv && electronics.mobile && electronics.laptop) {\n      setElectronics(prevState => {\n        return {\n          ...prevState,\n          indeterminate: false,\n          checked: true\n        };\n      });\n    }\n  }, [electronics.tv, electronics.laptop, electronics.mobile]);\n  const handleElectronicsOnChange = () => {\n    setElectronics(prevState => {\n      return {\n        ...prevState,\n        mobile: !prevState.checked,\n        tv: !prevState.checked,\n        laptop: !prevState.checked\n      };\n    });\n  };\n  const handleTVOnChange = () => {\n    setElectronics(prevState => {\n      return {\n        ...prevState,\n        tv: !prevState.tv\n      };\n    });\n  };\n  const handleMobileOnChange = () => {\n    setElectronics(prevState => {\n      return {\n        ...prevState,\n        mobile: !prevState.mobile\n      };\n    });\n  };\n  const handleLaptopOnChange = () => {\n    setElectronics(prevState => {\n      return {\n        ...prevState,\n        laptop: !prevState.laptop\n      };\n    });\n  };\n  return <Form style={{\n    padding: \"20px\",\n    backgroundColor: \"#F5F8F8\"\n  }}>\n      <FormControlComponent {...args}>\n        <RadioWrapper error={false} errorMessage=\"Error message\" value={preferredMobileDevice} name=\"electronics\" onChange={e => setPreferredMobileDevice(e.target.value)} helperText=\"This is helper text\" fieldsetProps={{\n        legend: \"Radio legend\",\n        legendStyle: \"body-bold\"\n      }}>\n          <Radio value=\"mobile\">Mobile</Radio>\n          <Radio value=\"tv\">TV</Radio>\n          <Radio value=\"pc\">PC</Radio>\n        </RadioWrapper>\n        <CheckboxWrapper error={false} errorMessage=\"Error message\" name=\"electronics\" helperText=\"This is helper text\" fieldsetProps={{\n        legend: \"Electronics legend\",\n        legendStyle: \"body-bold\"\n      }}>\n          <Checkbox onChange={handleElectronicsOnChange} checked={electronics.checked} indeterminate={electronics.indeterminate} name=\"electronics\" label=\"Electronics\">\n            <Checkbox onChange={handleTVOnChange} checked={electronics.tv} name=\"tv\">\n              TV\n            </Checkbox>\n            <Checkbox onChange={handleMobileOnChange} checked={electronics.mobile} name=\"mobile\">\n              Mobile\n            </Checkbox>\n            <Checkbox onChange={handleLaptopOnChange} checked={electronics.laptop} name=\"laptop\">\n              Laptop\n            </Checkbox>\n          </Checkbox>\n        </CheckboxWrapper>\n        <Fieldset legend=\"Arbitrary input\" legendStyle=\"body-bold\">\n          <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input1\" errorMessage={\"This is an error\"} type=\"text\" value={inputValue} onChange={e => setInputValue(e.target.value)} error={false} label=\"Label for this inputfield\" />\n        </Fieldset>\n      </FormControlComponent>\n    </Form>;\n}",
      ...FormControl.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["FormControl"];

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss
var Form_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss");
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

/***/ "./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ CheckboxWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss
var CheckboxWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CheckboxWrapper_module/* default */.A, options);




       /* harmony default export */ const CheckboxWrapper_CheckboxWrapper_module = (CheckboxWrapper_module/* default */.A && CheckboxWrapper_module/* default */.A.locals ? CheckboxWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx
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







const CheckboxWrapperComponent = (_ref, ref) => {
  var _helperProps$classNam;
  let {
    children,
    error = false,
    helperText,
    helperProps,
    fieldsetProps,
    ...rest
  } = _ref;
  const {
    errorId,
    helperId
  } = (0,useWrapper/* useWrapper */.r)();
  (0,react.useEffect)(() => {
    if (fieldsetProps.legend === undefined) {
      console.error("You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: \"legend here\" }})");
    }
  }, []);
  const renderChildren = () => react.Children.map(children, child => /*#__PURE__*/react.cloneElement(child, {
    parentErrorId: errorId,
    error: error,
    parentHelperId: helperText ? helperId : false,
    disabled: rest.disabled
  }));
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.L, _extends({}, fieldsetProps, {
    required: rest.required
  }), /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
    ref: ref,
    label: "",
    helperId: helperId,
    helperText: helperText,
    helperProps: {
      ...helperProps,
      className: "".concat(CheckboxWrapper_CheckboxWrapper_module["checkbox-wrapper-helper"], " ").concat(error ? CheckboxWrapper_CheckboxWrapper_module["checkbox-wrapper-error"] : "", " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    },
    error: error,
    errorMessageIcon: Icon/* Icons */.F.Error,
    errorId: errorId
  }), renderChildren()));
};

/**
 * @deprecated
 */
const CheckboxWrapper = /*#__PURE__*/react.forwardRef(CheckboxWrapperComponent);
try {
    // @ts-ignore
    CheckboxWrapper.displayName = "CheckboxWrapper";
    // @ts-ignore
    CheckboxWrapper.__docgenInfo = { "description": "", "displayName": "CheckboxWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "fieldsetProps": { "defaultValue": null, "description": "", "name": "fieldsetProps", "required": true, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx#CheckboxWrapper"] = { docgenInfo: CheckboxWrapper.__docgenInfo, name: "CheckboxWrapper", path: "src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx#CheckboxWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ RadioWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss
var RadioWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(RadioWrapper_module/* default */.A, options);




       /* harmony default export */ const RadioWrapper_RadioWrapper_module = (RadioWrapper_module/* default */.A && RadioWrapper_module/* default */.A.locals ? RadioWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx
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







const RadioWrapperComponent = (_ref, ref) => {
  var _helperProps$classNam;
  let {
    children,
    error,
    name,
    helperText,
    helperProps,
    fieldsetProps,
    value,
    onChange,
    disabled,
    ...rest
  } = _ref;
  const {
    errorId,
    helperId
  } = (0,useWrapper/* useWrapper */.r)();
  (0,react.useEffect)(() => {
    if (fieldsetProps.legend === undefined) {
      console.error("You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in RadioWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: \"legend here\" }})");
    }
  }, []);
  const renderChildren = () => react.Children.map(children, child => /*#__PURE__*/react.cloneElement(child, {
    parentErrorId: errorId,
    error: error,
    checked: child.props.value === value,
    name: name,
    parentHelperId: helperText ? helperId : false,
    onChange: onChange,
    disabled: child.props.disabled !== undefined ? child.props.disabled : disabled
  }));
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.L, _extends({}, fieldsetProps, {
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    name: name,
    helperId: helperId,
    helperText: helperText,
    helperProps: {
      ...helperProps,
      className: "".concat(RadioWrapper_RadioWrapper_module["radio-wrapper-helper"], " ").concat(error ? RadioWrapper_RadioWrapper_module["radio-wrapper-error"] : "", " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    },
    error: error,
    errorId: errorId,
    errorMessageIcon: Icon/* Icons */.F.Error
  }), renderChildren()));
};
const RadioWrapper = /*#__PURE__*/react.forwardRef(RadioWrapperComponent);
try {
    // @ts-ignore
    RadioWrapper.displayName = "RadioWrapper";
    // @ts-ignore
    RadioWrapper.__docgenInfo = { "description": "", "displayName": "RadioWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "fieldsetProps": { "defaultValue": null, "description": "", "name": "fieldsetProps", "required": true, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx#RadioWrapper"] = { docgenInfo: RadioWrapper.__docgenInfo, name: "RadioWrapper", path: "src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx#RadioWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss":
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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss":
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
 */.CheckboxWrapper-module__checkbox-wrapper-helper--pK6o6{margin-top:1.25rem}.CheckboxWrapper-module__checkbox-wrapper-error--jgZns span{font-size:1rem}.CheckboxWrapper-module__checkbox-wrapper-error--jgZns [data-icon]{font-size:1.375rem;vertical-align:bottom}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkbox-wrapper-helper": `CheckboxWrapper-module__checkbox-wrapper-helper--pK6o6`,
	"checkbox-wrapper-error": `CheckboxWrapper-module__checkbox-wrapper-error--jgZns`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss":
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
 */.RadioWrapper-module__radio-wrapper-helper--VScFS{margin-top:1.25rem}.RadioWrapper-module__radio-wrapper-error--OuqdP span{font-size:1rem}.RadioWrapper-module__radio-wrapper-error--OuqdP [data-icon]{font-size:1.25rem;vertical-align:text-bottom}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"radio-wrapper-helper": `RadioWrapper-module__radio-wrapper-helper--VScFS`,
	"radio-wrapper-error": `RadioWrapper-module__radio-wrapper-error--OuqdP`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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