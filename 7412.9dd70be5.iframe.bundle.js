"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7412],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XI: () => (/* reexport */ action)
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_ = __webpack_require__("@storybook/core-events/preview-errors");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-MZXVCX43.mjs





var PARAM_KEY="actions",ADDON_ID="storybook/actions",PANEL_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/panel`)),EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/action-clear`)),CYCLIC_KEY="$___storybook.isCyclic";var config={depth:10,clearOnStoryChange:!0,limit:50},configureActions=(options={})=>{Object.assign(config,options);};var findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return !proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!(typeof e=="object"&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&typeof e.persist=="function"),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return typeof view=="object"&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,v4/* default */.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>render.phase==="playing"||render.phase==="rendering");if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),minDepth=5,serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:minDepth+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit);};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs



/***/ }),

/***/ "./stories/Form/Form.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Form_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Form.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Form_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Form"
      }), " component will be used as a wrapper component for all form elements. Its root element is the default HTML ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "form"
      }), " tag and thus also accepts all of its HTML attributes. You should use this component whenever you want to create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "form"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Form"
      }), " component is a wrapper element. That means you can wrap any ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FormElement"
      }), " inside of it. See the code snippet below that showcases how you can use it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Form>\n  onSubmit={onSubmitHandler}\n  <FormControl>\n    <InputWrapper {...args} />\n  </FormControl>\n  <FormControl grid={3}>\n    <InputWrapper {...args} />\n    <SelectWrapper {...args}>\n      <Option value=\"option1\">Option1</Option>\n      <Option value=\"option2\">Option2</Option>\n      <Option value=\"option3\">Option3</Option>\n    </SelectWrapper>\n    <RadioWrapper {...args}>\n      <Radio value=\"radio1\">Radio1</Radio>\n      <Radio value=\"radio2\">Radio2</Radio>\n      <Radio value=\"radio3\">Radio3</Radio>\n    </RadioWrapper>\n  </FormControl>\n</Form>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Form_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.Form
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

/***/ "./stories/Form/Form.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Form.tsx");
/* harmony import */ var _src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
/* harmony import */ var _src_components_Form_Fieldset_Fieldset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
/* harmony import */ var _src_components_Form_Wrapper_CheckboxWrapper_CheckboxWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx");
/* harmony import */ var _src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
/* harmony import */ var _src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/FormControl/FormControl.tsx");
/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/Button/Button.tsx");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
/* harmony import */ var _src_components_Form_Wrapper_RadioWrapper_RadioWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx");
/* harmony import */ var _src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
/* harmony import */ var _src_components_Form_Wrapper_SelectWrapper_SelectWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx");
/* harmony import */ var _src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
/* harmony import */ var _src_components_Form_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Form/Toggle/Toggle.tsx");
/* harmony import */ var _Form_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Form/Form.mdx");
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
  title: "Components/Layout/Form",
  component: _src_components_Form_Form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l,
  parameters: {
    docs: {
      page: _Form_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
  },
  argTypes: {
    method: {
      options: ["POST", "GET"],
      control: {
        type: "radio"
      }
    },
    onSubmit: {
      action: "onSubmit event fired!"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [input1, setInput1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    error: false,
    value: "",
    errorMessage: ""
  });
  const [subscribe, setSubscribe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    error: false,
    checked: false,
    errorMessage: ""
  });
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    street: {
      error: false,
      value: "",
      errorMessage: ""
    },
    housenumber: {
      error: false,
      value: "",
      errorMessage: ""
    },
    postcode: {
      error: false,
      value: "",
      errorMessage: ""
    }
  });
  const [checkbox, setCheckbox] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    error: false,
    errorMessage: "",
    checkbox1: {
      checked: false
    },
    checkbox2: {
      checked: false
    }
  });
  const [callBack, setCallBack] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    value: "no",
    error: false
  });
  const [callBackTime, setCallBackTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    time: "",
    error: false,
    errorMessage: "",
    helperText: "This should be a date after Date.now()"
  });
  const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const callBackTimeOnChangeHandler = event => {
    if (Number(event.target.valueAsNumber) < Date.now()) {
      setCallBackTime(prevState => ({
        ...prevState,
        time: event.target.value,
        error: true,
        errorMessage: "You can't select a time before right now!"
      }));
      return;
    }
    setCallBackTime(prevState => ({
      ...prevState,
      time: event.target.value,
      error: false,
      errorMessage: ""
    }));
  };
  const selectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (/onegini|iwelcome/i.test(input1.value)) {
      setInput1(prevState => ({
        ...prevState,
        error: true,
        errorMessage: "You're not allowed to use OneGini or iWelcome!"
      }));
    } else {
      setInput1(prevState => ({
        ...prevState,
        error: false,
        errorMessage: ""
      }));
    }
  }, [input1.value]);
  const actionWithPreventDefault = name => e => {
    e.preventDefault();
    (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)(name)(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
    onSubmit: actionWithPreventDefault("onSubmit event fired!"),
    style: {
      backgroundColor: "rgb(246, 248, 248)",
      padding: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_5__/* .InputWrapper */ .o, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input1",
    errorMessage: input1.errorMessage,
    type: "text",
    inputProps: {
      prefix: "PREFIX",
      suffix: "SUFFIX"
    },
    error: input1.error,
    value: input1.value,
    label: "Label for this inputfield",
    onChange: event => {
      setInput1(prevState => ({
        ...prevState,
        value: event.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_SelectWrapper_SelectWrapper__WEBPACK_IMPORTED_MODULE_6__/* .SelectWrapper */ .S, {
    selectProps: {
      ref: selectRef
    },
    label: "Example select wrapper",
    name: "Example select",
    helperText: "Example helper text",
    error: false,
    errorMessage: "This is an error message",
    value: selectValue,
    onChange: e => setSelectValue(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option1"
  }, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option5"
  }, "Option 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option6"
  }, "Option 6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option7"
  }, "Option 7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option8"
  }, "Option 8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option9"
  }, "Option 9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option10"
  }, "Option 10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option11"
  }, "Option 11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, {
    value: "option12"
  }, "Option 12"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Fieldset_Fieldset__WEBPACK_IMPORTED_MODULE_8__/* .Fieldset */ .L, {
    legend: "Subscribe to newsletter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_9__/* .Toggle */ .l, {
    onChange: () => setSubscribe(prevState => ({
      ...prevState,
      checked: !prevState.checked
    })),
    label: "Subscribe to our newsletter!",
    name: "Newsletter",
    checked: subscribe.checked
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Fieldset_Fieldset__WEBPACK_IMPORTED_MODULE_8__/* .Fieldset */ .L, {
    legend: "Address",
    noBackground: true,
    noPadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, {
    grid: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_5__/* .InputWrapper */ .o, {
    helperText: "Input your streetname",
    name: "streetname",
    errorMessage: address.street.errorMessage,
    type: "text",
    error: address.street.error,
    value: address.street.value,
    label: "Streetname",
    onChange: event => {
      setAddress(prevState => ({
        ...prevState,
        street: {
          error: false,
          errorMessage: "",
          value: event.target.value
        }
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_5__/* .InputWrapper */ .o, {
    helperText: "Input your housenumber",
    name: "housenumber",
    errorMessage: address.housenumber.errorMessage,
    type: "text",
    error: address.housenumber.error,
    value: address.housenumber.value,
    label: "House number",
    onChange: event => {
      setAddress(prevState => ({
        ...prevState,
        housenumber: {
          error: false,
          errorMessage: "",
          value: event.target.value
        }
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_5__/* .InputWrapper */ .o, {
    helperText: "Format should be 1234AB",
    name: "postalcode",
    errorMessage: address.postcode.errorMessage,
    type: "text",
    inputProps: {
      placeholder: "1234AB"
    },
    error: address.postcode.error,
    value: address.postcode.value,
    label: "Postal code",
    onBlur: event => {
      if (!/[0-9]{4}[a-zA-Z]{2}$/.test(event.target.value) && event.target.value.length) {
        setAddress(prevState => ({
          ...prevState,
          postcode: {
            error: true,
            errorMessage: "You have to use the correct format: e.g. 1234AB",
            value: event.target.value
          }
        }));
      }
    },
    onChange: event => {
      setAddress(prevState => ({
        ...prevState,
        postcode: {
          error: false,
          errorMessage: "",
          value: event.target.value
        }
      }));
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_CheckboxWrapper_CheckboxWrapper__WEBPACK_IMPORTED_MODULE_10__/* .CheckboxWrapper */ .F, {
    name: "checkbox-group",
    error: checkbox.error,
    errorMessage: "",
    fieldsetProps: {
      legend: "Would you like to make an appointment?"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__/* .Checkbox */ .S, {
    onChange: e => {
      setCheckbox(prevState => ({
        ...prevState,
        checkbox1: {
          checked: !prevState.checkbox1.checked
        }
      }));
    },
    name: "checkbox1",
    checked: checkbox.checkbox1.checked
  }, "Checkbox 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__/* .Checkbox */ .S, {
    onChange: e => setCheckbox(prevState => ({
      ...prevState,
      checkbox2: {
        checked: !prevState.checkbox2.checked
      }
    })),
    name: "checkbox2",
    checked: checkbox.checkbox2.checked
  }, "Checkbox 2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .M, {
    grid: callBack.value === "yes" ? 2 : 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_RadioWrapper_RadioWrapper__WEBPACK_IMPORTED_MODULE_12__/* .RadioWrapper */ .j, {
    name: "callback",
    onChange: e => setCallBack(prevState => ({
      ...prevState,
      value: e.target.value
    })),
    fieldsetProps: {
      legend: "Would you like us to call you back?"
    },
    value: callBack.value,
    error: callBack.error
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_13__/* .Radio */ .s, {
    value: "yes"
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Radio_Radio__WEBPACK_IMPORTED_MODULE_13__/* .Radio */ .s, {
    value: "no"
  }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, callBack.value === "yes" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Fieldset_Fieldset__WEBPACK_IMPORTED_MODULE_8__/* .Fieldset */ .L, {
    legend: "Callback time",
    hideLegend: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_InputWrapper_InputWrapper__WEBPACK_IMPORTED_MODULE_5__/* .InputWrapper */ .o, {
    onChange: callBackTimeOnChangeHandler,
    label: "Callback time",
    errorMessage: callBackTime.errorMessage,
    error: callBackTime.error,
    value: callBackTime.time,
    helperText: callBackTime.helperText,
    name: "callback-time",
    type: "datetime-local"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: "20px",
      textAlign: "right"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .$, {
    type: "submit"
  }, "Submit")));
};
const Form = Template.bind({});
Form.args = {};
Form.parameters = {
  chromatic: {
    viewports: [400, 1200]
  }
};
Form.parameters = {
  ...Form.parameters,
  docs: {
    ...Form.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [input1, setInput1] = useState({\n    error: false,\n    value: \"\",\n    errorMessage: \"\"\n  });\n  const [subscribe, setSubscribe] = useState({\n    error: false,\n    checked: false,\n    errorMessage: \"\"\n  });\n  const [address, setAddress] = useState({\n    street: {\n      error: false,\n      value: \"\",\n      errorMessage: \"\"\n    },\n    housenumber: {\n      error: false,\n      value: \"\",\n      errorMessage: \"\"\n    },\n    postcode: {\n      error: false,\n      value: \"\",\n      errorMessage: \"\"\n    }\n  });\n  const [checkbox, setCheckbox] = useState({\n    error: false,\n    errorMessage: \"\",\n    checkbox1: {\n      checked: false\n    },\n    checkbox2: {\n      checked: false\n    }\n  });\n  const [callBack, setCallBack] = useState({\n    value: \"no\",\n    error: false\n  });\n  const [callBackTime, setCallBackTime] = useState({\n    time: \"\",\n    error: false,\n    errorMessage: \"\",\n    helperText: \"This should be a date after Date.now()\"\n  });\n  const [selectValue, setSelectValue] = useState(\"\");\n  const callBackTimeOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {\n    if (Number(event.target.valueAsNumber) < Date.now()) {\n      setCallBackTime(prevState => ({\n        ...prevState,\n        time: event.target.value,\n        error: true,\n        errorMessage: \"You can't select a time before right now!\"\n      }));\n      return;\n    }\n    setCallBackTime(prevState => ({\n      ...prevState,\n      time: event.target.value,\n      error: false,\n      errorMessage: \"\"\n    }));\n  };\n  const selectRef = useRef<HTMLSelectElement | null>(null);\n  useEffect(() => {\n    if (/onegini|iwelcome/i.test(input1.value)) {\n      setInput1(prevState => ({\n        ...prevState,\n        error: true,\n        errorMessage: \"You're not allowed to use OneGini or iWelcome!\"\n      }));\n    } else {\n      setInput1(prevState => ({\n        ...prevState,\n        error: false,\n        errorMessage: \"\"\n      }));\n    }\n  }, [input1.value]);\n  const actionWithPreventDefault = name => e => {\n    e.preventDefault();\n    action(name)(e);\n  };\n  return <FormComponent onSubmit={actionWithPreventDefault(\"onSubmit event fired!\")} style={{\n    backgroundColor: \"rgb(246, 248, 248)\",\n    padding: \"20px\"\n  }}>\n      <FormControl>\n        <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input1\" errorMessage={input1.errorMessage} type=\"text\" inputProps={{\n        prefix: \"PREFIX\",\n        suffix: \"SUFFIX\"\n      }} error={input1.error} value={input1.value} label=\"Label for this inputfield\" onChange={event => {\n        setInput1(prevState => ({\n          ...prevState,\n          value: event.target.value\n        }));\n      }} />\n      </FormControl>\n      <FormControl>\n        <SelectWrapper selectProps={{\n        ref: selectRef\n      }} label=\"Example select wrapper\" name=\"Example select\" helperText=\"Example helper text\" error={false} errorMessage=\"This is an error message\" value={selectValue} onChange={e => setSelectValue(e.target.value)}>\n          <Option value=\"option1\">Option 1</Option>\n          <Option value=\"option2\">Option 2</Option>\n          <Option value=\"option3\">Option 3</Option>\n          <Option value=\"option4\">Option 4</Option>\n          <Option value=\"option5\">Option 5</Option>\n          <Option value=\"option6\">Option 6</Option>\n          <Option value=\"option7\">Option 7</Option>\n          <Option value=\"option8\">Option 8</Option>\n          <Option value=\"option9\">Option 9</Option>\n          <Option value=\"option10\">Option 10</Option>\n          <Option value=\"option11\">Option 11</Option>\n          <Option value=\"option12\">Option 12</Option>\n        </SelectWrapper>\n      </FormControl>\n      <FormControl>\n        <Fieldset legend=\"Subscribe to newsletter\">\n          <Toggle onChange={() => setSubscribe(prevState => ({\n          ...prevState,\n          checked: !prevState.checked\n        }))} label={\"Subscribe to our newsletter!\"} name=\"Newsletter\" checked={subscribe.checked}></Toggle>\n        </Fieldset>\n      </FormControl>\n      <FormControl>\n        <Fieldset legend=\"Address\" noBackground noPadding>\n          <FormControl grid={3}>\n            <InputWrapper helperText=\"Input your streetname\" name=\"streetname\" errorMessage={address.street.errorMessage} type=\"text\" error={address.street.error} value={address.street.value} label=\"Streetname\" onChange={event => {\n            setAddress(prevState => ({\n              ...prevState,\n              street: {\n                error: false,\n                errorMessage: \"\",\n                value: event.target.value\n              }\n            }));\n          }} />\n            <InputWrapper helperText=\"Input your housenumber\" name=\"housenumber\" errorMessage={address.housenumber.errorMessage} type=\"text\" error={address.housenumber.error} value={address.housenumber.value} label=\"House number\" onChange={event => {\n            setAddress(prevState => ({\n              ...prevState,\n              housenumber: {\n                error: false,\n                errorMessage: \"\",\n                value: event.target.value\n              }\n            }));\n          }} />\n            <InputWrapper helperText=\"Format should be 1234AB\" name=\"postalcode\" errorMessage={address.postcode.errorMessage} type=\"text\" inputProps={{\n            placeholder: \"1234AB\"\n          }} error={address.postcode.error} value={address.postcode.value} label=\"Postal code\" onBlur={event => {\n            if (!/[0-9]{4}[a-zA-Z]{2}$/.test(event.target.value) && event.target.value.length) {\n              setAddress(prevState => ({\n                ...prevState,\n                postcode: {\n                  error: true,\n                  errorMessage: \"You have to use the correct format: e.g. 1234AB\",\n                  value: event.target.value\n                }\n              }));\n            }\n          }} onChange={event => {\n            setAddress(prevState => ({\n              ...prevState,\n              postcode: {\n                error: false,\n                errorMessage: \"\",\n                value: event.target.value\n              }\n            }));\n          }} />\n          </FormControl>\n        </Fieldset>\n      </FormControl>\n      <FormControl>\n        <CheckboxWrapper name=\"checkbox-group\" error={checkbox.error} errorMessage=\"\" fieldsetProps={{\n        legend: \"Would you like to make an appointment?\"\n      }}>\n          <Checkbox onChange={e => {\n          setCheckbox(prevState => ({\n            ...prevState,\n            checkbox1: {\n              checked: !prevState.checkbox1.checked\n            }\n          }));\n        }} name=\"checkbox1\" checked={checkbox.checkbox1.checked}>\n            Checkbox 1\n          </Checkbox>\n          <Checkbox onChange={e => setCheckbox(prevState => ({\n          ...prevState,\n          checkbox2: {\n            checked: !prevState.checkbox2.checked\n          }\n        }))} name=\"checkbox2\" checked={checkbox.checkbox2.checked}>\n            Checkbox 2\n          </Checkbox>\n        </CheckboxWrapper>\n      </FormControl>\n      <FormControl grid={callBack.value === \"yes\" ? 2 : 1}>\n        <RadioWrapper name=\"callback\" onChange={e => setCallBack(prevState => ({\n        ...prevState,\n        value: e.target.value\n      }))} fieldsetProps={{\n        legend: \"Would you like us to call you back?\"\n      }} value={callBack.value} error={callBack.error}>\n          <Radio value=\"yes\">Yes</Radio>\n          <Radio value=\"no\">No</Radio>\n        </RadioWrapper>\n        <Fragment>\n          {callBack.value === \"yes\" && <Fieldset legend=\"Callback time\" hideLegend>\n              <InputWrapper onChange={callBackTimeOnChangeHandler} label=\"Callback time\" errorMessage={callBackTime.errorMessage} error={callBackTime.error} value={callBackTime.time} helperText={callBackTime.helperText} name=\"callback-time\" type=\"datetime-local\" />\n            </Fieldset>}\n        </Fragment>\n      </FormControl>\n      <div style={{\n      marginTop: \"20px\",\n      textAlign: \"right\"\n    }}>\n        <Button type=\"submit\">Submit</Button>\n      </div>\n    </FormComponent>;\n}",
      ...Form.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Form"];

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


/***/ })

}]);