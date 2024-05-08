"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1736],{

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
// EXTERNAL MODULE: ./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs + 1 modules
var preview_errors = __webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-WFFRPTHA.mjs





var PARAM_KEY="actions",ADDON_ID="storybook/actions",PANEL_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/panel`)),EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/action-clear`)),CYCLIC_KEY="$___storybook.isCyclic";var config={depth:10,clearOnStoryChange:!0,limit:50},configureActions=(options={})=>{Object.assign(config,options);};var findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return !proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!(typeof e=="object"&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&typeof e.persist=="function"),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return typeof view=="object"&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,v4/* default */.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>render.phase==="playing"||render.phase==="rendering");if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors/* ImplicitActionsDuringRendering */._U({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),minDepth=5,serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:minDepth+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit);};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs



/***/ }),

/***/ "./stories/Form/Form.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Form: () => (/* binding */ Form_stories_Form),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Form_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("./src/components/Form/Form.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx + 1 modules
var CheckboxWrapper = __webpack_require__("./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Checkbox/Checkbox.tsx + 1 modules
var Checkbox = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
// EXTERNAL MODULE: ./src/components/Form/FormControl/FormControl.tsx + 1 modules
var FormControl = __webpack_require__("./src/components/Form/FormControl/FormControl.tsx");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs + 1 modules
var dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx + 1 modules
var RadioWrapper = __webpack_require__("./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Radio/Radio.tsx + 1 modules
var Radio = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx + 1 modules
var SelectWrapper = __webpack_require__("./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
// EXTERNAL MODULE: ./src/components/Form/Toggle/Toggle.tsx + 1 modules
var Toggle = __webpack_require__("./src/components/Form/Toggle/Toggle.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var blocks_dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Form.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(blocks_dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Form"
      }), " component will be used as a wrapper component for all form elements. Its root element is the default HTML ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), " tag and thus also accepts all of its HTML attributes. You should use this component whenever you want to create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Form"
      }), " component is a wrapper element. That means you can wrap any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FormElement"
      }), " inside of it. See the code snippet below that showcases how you can use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Form>\n  onSubmit={onSubmitHandler}\n  <FormControl>\n    <InputWrapper {...args} />\n  </FormControl>\n  <FormControl grid={3}>\n    <InputWrapper {...args} />\n    <SelectWrapper {...args}>\n      <Option value=\"option1\">Option1</Option>\n      <Option value=\"option2\">Option2</Option>\n      <Option value=\"option3\">Option3</Option>\n    </SelectWrapper>\n    <RadioWrapper {...args}>\n      <Radio value=\"radio1\">Radio1</Radio>\n      <Radio value=\"radio2\">Radio2</Radio>\n      <Radio value=\"radio3\">Radio3</Radio>\n    </RadioWrapper>\n  </FormControl>\n</Form>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.gG, {
        of: Form_stories_Form
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* ArgTypes */.ov, {
      story: blocks_dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Form_Form = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Form.stories.tsx
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
  title: "Components/layout/Form",
  component: Form/* Form */.l,
  parameters: {
    docs: {
      page: Form_Form
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
/* harmony default export */ const Form_stories = (meta);
const Template = args => {
  const [input1, setInput1] = (0,react.useState)({
    error: false,
    value: "",
    errorMessage: ""
  });
  const [subscribe, setSubscribe] = (0,react.useState)({
    error: false,
    checked: false,
    errorMessage: ""
  });
  const [address, setAddress] = (0,react.useState)({
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
  const [checkbox, setCheckbox] = (0,react.useState)({
    error: false,
    errorMessage: "",
    checkbox1: {
      checked: false
    },
    checkbox2: {
      checked: false
    }
  });
  const [callBack, setCallBack] = (0,react.useState)({
    value: "no",
    error: false
  });
  const [callBackTime, setCallBackTime] = (0,react.useState)({
    time: "",
    error: false,
    errorMessage: "",
    helperText: "This should be a date after Date.now()"
  });
  const [selectValue, setSelectValue] = (0,react.useState)("");
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
  const selectRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
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
    (0,dist/* action */.XI)(name)(e);
  };
  return /*#__PURE__*/react.createElement(Form/* Form */.l, {
    onSubmit: actionWithPreventDefault("onSubmit event fired!"),
    style: {
      backgroundColor: "rgb(246, 248, 248)",
      padding: "20px"
    }
  }, /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, null, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
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
  })), /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, null, /*#__PURE__*/react.createElement(SelectWrapper/* SelectWrapper */.S, {
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
  }, /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option5"
  }, "Option 5"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option6"
  }, "Option 6"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option7"
  }, "Option 7"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option8"
  }, "Option 8"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option9"
  }, "Option 9"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option10"
  }, "Option 10"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option11"
  }, "Option 11"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option12"
  }, "Option 12"))), /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, null, /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.L, {
    legend: "Subscribe to newsletter"
  }, /*#__PURE__*/react.createElement(Toggle/* Toggle */.l, {
    onChange: () => setSubscribe(prevState => ({
      ...prevState,
      checked: !prevState.checked
    })),
    label: "Subscribe to our newsletter!",
    name: "Newsletter",
    checked: subscribe.checked
  }))), /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, null, /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.L, {
    legend: "Address",
    noBackground: true,
    noPadding: true
  }, /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, {
    grid: 3
  }, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
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
  }), /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
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
  }), /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
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
  })))), /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, null, /*#__PURE__*/react.createElement(CheckboxWrapper/* CheckboxWrapper */.F, {
    name: "checkbox-group",
    error: checkbox.error,
    errorMessage: "",
    fieldsetProps: {
      legend: "Would you like to make an appointment?"
    }
  }, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.S, {
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
  }, "Checkbox 1"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.S, {
    onChange: e => setCheckbox(prevState => ({
      ...prevState,
      checkbox2: {
        checked: !prevState.checkbox2.checked
      }
    })),
    name: "checkbox2",
    checked: checkbox.checkbox2.checked
  }, "Checkbox 2"))), /*#__PURE__*/react.createElement(FormControl/* FormControl */.M, {
    grid: callBack.value === "yes" ? 2 : 1
  }, /*#__PURE__*/react.createElement(RadioWrapper/* RadioWrapper */.j, {
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
  }, /*#__PURE__*/react.createElement(Radio/* Radio */.s, {
    value: "yes"
  }, "Yes"), /*#__PURE__*/react.createElement(Radio/* Radio */.s, {
    value: "no"
  }, "No")), /*#__PURE__*/react.createElement(react.Fragment, null, callBack.value === "yes" && /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.L, {
    legend: "Callback time",
    hideLegend: true
  }, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
    onChange: callBackTimeOnChangeHandler,
    label: "Callback time",
    errorMessage: callBackTime.errorMessage,
    error: callBackTime.error,
    value: callBackTime.time,
    helperText: callBackTime.helperText,
    name: "callback-time",
    type: "datetime-local"
  })))), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: "20px",
      textAlign: "right"
    }
  }, /*#__PURE__*/react.createElement(Button/* Button */.$, {
    type: "submit"
  }, "Submit")));
};
const Form_stories_Form = Template.bind({});
Form_stories_Form.args = {};
Form_stories_Form.parameters = {
  chromatic: {
    viewports: [400, 1200]
  }
};
Form_stories_Form.parameters = {
  ...Form_stories_Form.parameters,
  docs: {
    ...Form_stories_Form.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [input1, setInput1] = useState({\n    error: false,\n    value: \"\",\n    errorMessage: \"\"\n  });\n  const [subscribe, setSubscribe] = useState({\n    error: false,\n    checked: false,\n    errorMessage: \"\"\n  });\n  const [address, setAddress] = useState({\n    street: {\n      error: false,\n      value: \"\",\n      errorMessage: \"\"\n    },\n    housenumber: {\n      error: false,\n      value: \"\",\n      errorMessage: \"\"\n    },\n    postcode: {\n      error: false,\n      value: \"\",\n      errorMessage: \"\"\n    }\n  });\n  const [checkbox, setCheckbox] = useState({\n    error: false,\n    errorMessage: \"\",\n    checkbox1: {\n      checked: false\n    },\n    checkbox2: {\n      checked: false\n    }\n  });\n  const [callBack, setCallBack] = useState({\n    value: \"no\",\n    error: false\n  });\n  const [callBackTime, setCallBackTime] = useState({\n    time: \"\",\n    error: false,\n    errorMessage: \"\",\n    helperText: \"This should be a date after Date.now()\"\n  });\n  const [selectValue, setSelectValue] = useState(\"\");\n  const callBackTimeOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {\n    if (Number(event.target.valueAsNumber) < Date.now()) {\n      setCallBackTime(prevState => ({\n        ...prevState,\n        time: event.target.value,\n        error: true,\n        errorMessage: \"You can't select a time before right now!\"\n      }));\n      return;\n    }\n    setCallBackTime(prevState => ({\n      ...prevState,\n      time: event.target.value,\n      error: false,\n      errorMessage: \"\"\n    }));\n  };\n  const selectRef = useRef<HTMLSelectElement | null>(null);\n  useEffect(() => {\n    if (/onegini|iwelcome/i.test(input1.value)) {\n      setInput1(prevState => ({\n        ...prevState,\n        error: true,\n        errorMessage: \"You're not allowed to use OneGini or iWelcome!\"\n      }));\n    } else {\n      setInput1(prevState => ({\n        ...prevState,\n        error: false,\n        errorMessage: \"\"\n      }));\n    }\n  }, [input1.value]);\n  const actionWithPreventDefault = name => e => {\n    e.preventDefault();\n    action(name)(e);\n  };\n  return <FormComponent onSubmit={actionWithPreventDefault(\"onSubmit event fired!\")} style={{\n    backgroundColor: \"rgb(246, 248, 248)\",\n    padding: \"20px\"\n  }}>\n      <FormControl>\n        <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input1\" errorMessage={input1.errorMessage} type=\"text\" inputProps={{\n        prefix: \"PREFIX\",\n        suffix: \"SUFFIX\"\n      }} error={input1.error} value={input1.value} label=\"Label for this inputfield\" onChange={event => {\n        setInput1(prevState => ({\n          ...prevState,\n          value: event.target.value\n        }));\n      }} />\n      </FormControl>\n      <FormControl>\n        <SelectWrapper selectProps={{\n        ref: selectRef\n      }} label=\"Example select wrapper\" name=\"Example select\" helperText=\"Example helper text\" error={false} errorMessage=\"This is an error message\" value={selectValue} onChange={e => setSelectValue(e.target.value)}>\n          <Option value=\"option1\">Option 1</Option>\n          <Option value=\"option2\">Option 2</Option>\n          <Option value=\"option3\">Option 3</Option>\n          <Option value=\"option4\">Option 4</Option>\n          <Option value=\"option5\">Option 5</Option>\n          <Option value=\"option6\">Option 6</Option>\n          <Option value=\"option7\">Option 7</Option>\n          <Option value=\"option8\">Option 8</Option>\n          <Option value=\"option9\">Option 9</Option>\n          <Option value=\"option10\">Option 10</Option>\n          <Option value=\"option11\">Option 11</Option>\n          <Option value=\"option12\">Option 12</Option>\n        </SelectWrapper>\n      </FormControl>\n      <FormControl>\n        <Fieldset legend=\"Subscribe to newsletter\">\n          <Toggle onChange={() => setSubscribe(prevState => ({\n          ...prevState,\n          checked: !prevState.checked\n        }))} label={\"Subscribe to our newsletter!\"} name=\"Newsletter\" checked={subscribe.checked}></Toggle>\n        </Fieldset>\n      </FormControl>\n      <FormControl>\n        <Fieldset legend=\"Address\" noBackground noPadding>\n          <FormControl grid={3}>\n            <InputWrapper helperText=\"Input your streetname\" name=\"streetname\" errorMessage={address.street.errorMessage} type=\"text\" error={address.street.error} value={address.street.value} label=\"Streetname\" onChange={event => {\n            setAddress(prevState => ({\n              ...prevState,\n              street: {\n                error: false,\n                errorMessage: \"\",\n                value: event.target.value\n              }\n            }));\n          }} />\n            <InputWrapper helperText=\"Input your housenumber\" name=\"housenumber\" errorMessage={address.housenumber.errorMessage} type=\"text\" error={address.housenumber.error} value={address.housenumber.value} label=\"House number\" onChange={event => {\n            setAddress(prevState => ({\n              ...prevState,\n              housenumber: {\n                error: false,\n                errorMessage: \"\",\n                value: event.target.value\n              }\n            }));\n          }} />\n            <InputWrapper helperText=\"Format should be 1234AB\" name=\"postalcode\" errorMessage={address.postcode.errorMessage} type=\"text\" inputProps={{\n            placeholder: \"1234AB\"\n          }} error={address.postcode.error} value={address.postcode.value} label=\"Postal code\" onBlur={event => {\n            if (!/[0-9]{4}[a-zA-Z]{2}$/.test(event.target.value) && event.target.value.length) {\n              setAddress(prevState => ({\n                ...prevState,\n                postcode: {\n                  error: true,\n                  errorMessage: \"You have to use the correct format: e.g. 1234AB\",\n                  value: event.target.value\n                }\n              }));\n            }\n          }} onChange={event => {\n            setAddress(prevState => ({\n              ...prevState,\n              postcode: {\n                error: false,\n                errorMessage: \"\",\n                value: event.target.value\n              }\n            }));\n          }} />\n          </FormControl>\n        </Fieldset>\n      </FormControl>\n      <FormControl>\n        <CheckboxWrapper name=\"checkbox-group\" error={checkbox.error} errorMessage=\"\" fieldsetProps={{\n        legend: \"Would you like to make an appointment?\"\n      }}>\n          <Checkbox onChange={e => {\n          setCheckbox(prevState => ({\n            ...prevState,\n            checkbox1: {\n              checked: !prevState.checkbox1.checked\n            }\n          }));\n        }} name=\"checkbox1\" checked={checkbox.checkbox1.checked}>\n            Checkbox 1\n          </Checkbox>\n          <Checkbox onChange={e => setCheckbox(prevState => ({\n          ...prevState,\n          checkbox2: {\n            checked: !prevState.checkbox2.checked\n          }\n        }))} name=\"checkbox2\" checked={checkbox.checkbox2.checked}>\n            Checkbox 2\n          </Checkbox>\n        </CheckboxWrapper>\n      </FormControl>\n      <FormControl grid={callBack.value === \"yes\" ? 2 : 1}>\n        <RadioWrapper name=\"callback\" onChange={e => setCallBack(prevState => ({\n        ...prevState,\n        value: e.target.value\n      }))} fieldsetProps={{\n        legend: \"Would you like us to call you back?\"\n      }} value={callBack.value} error={callBack.error}>\n          <Radio value=\"yes\">Yes</Radio>\n          <Radio value=\"no\">No</Radio>\n        </RadioWrapper>\n        <Fragment>\n          {callBack.value === \"yes\" && <Fieldset legend=\"Callback time\" hideLegend>\n              <InputWrapper onChange={callBackTimeOnChangeHandler} label=\"Callback time\" errorMessage={callBackTime.errorMessage} error={callBackTime.error} value={callBackTime.time} helperText={callBackTime.helperText} name=\"callback-time\" type=\"datetime-local\" />\n            </Fieldset>}\n        </Fragment>\n      </FormControl>\n      <div style={{\n      marginTop: \"20px\",\n      textAlign: \"right\"\n    }}>\n        <Button type=\"submit\">Submit</Button>\n      </div>\n    </FormComponent>;\n}",
      ...Form_stories_Form.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Form"];

/***/ }),

/***/ "./src/components/Button/BaseButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ BaseButton)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseButton_module/* default */.A, options);




       /* harmony default export */ const Button_BaseButton_module = (BaseButton_module/* default */.A && BaseButton_module/* default */.A.locals ? BaseButton_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Spinner.tsx
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


const Spinner = props => /*#__PURE__*/react.createElement("svg", _extends({}, props, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/react.createElement("path", {
  d: "M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8323 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.2918 23.4127C6.49076 22.8275 4.85378 21.8243 3.51472 20.4853C2.17565 19.1462 1.17251 17.5092 0.587322 15.7082C0.00212849 13.9072 -0.148504 11.9932 0.14774 10.1228C0.443984 8.25238 1.17869 6.47863 2.2918 4.94658L3.91307 6.1245C2.98585 7.4007 2.37384 8.87823 2.12707 10.4363C1.8803 11.9943 2.00577 13.5887 2.49324 15.0889C2.9807 16.5892 3.81632 17.9528 4.93176 19.0682C6.0472 20.1837 7.4108 21.0193 8.91107 21.5068C10.4113 21.9942 12.0057 22.1197 13.5637 21.8729C15.1218 21.6262 16.5993 21.0141 17.8755 20.0869C19.1517 19.1597 20.1903 17.9436 20.9065 16.5381C21.6227 15.1326 21.996 13.5775 21.996 12H24Z",
  fill: "#5D607E"
}));
try {
    // @ts-ignore
    Spinner.displayName = "Spinner";
    // @ts-ignore
    Spinner.__docgenInfo = { "description": "", "displayName": "Spinner", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Spinner.tsx#Spinner"] = { docgenInfo: Spinner.__docgenInfo, name: "Spinner", path: "src/components/Button/Spinner.tsx#Spinner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.tsx
function BaseButton_extends() {
  BaseButton_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return BaseButton_extends.apply(this, arguments);
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




const BaseButtonComponent = (_ref, ref) => {
  let {
    children,
    type = "button",
    className,
    loading,
    disabled,
    ...rest
  } = _ref;
  const validTypes = ["submit", "button", "reset"];
  const isDisabled = disabled !== null && disabled !== void 0 ? disabled : loading;
  if (!validTypes.includes(type)) throw new Error("You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ".concat(type));
  return /*#__PURE__*/react.createElement("button", BaseButton_extends({}, rest, {
    disabled: isDisabled,
    ref: ref,
    type: type,
    className: "".concat(Button_BaseButton_module.button, " ").concat(loading ? Button_BaseButton_module.loading : "", " ").concat(className ? className : "")
  }), loading ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Button_BaseButton_module["content-hidden"]
  }, children), /*#__PURE__*/react.createElement(Spinner, {
    className: Button_BaseButton_module["spinner"]
  })) : children);
};
const BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"success\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
}
catch (__react_docgen_typescript_loader_error) { }

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

/***/ "./src/components/Form/Select/SingleSelect/Option.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/helper.tsx");
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




const OptionComponent = (_ref, ref) => {
  let {
    id,
    children,
    className,
    isSelected = false,
    disableDefaultSelectedStyle,
    shouldClick,
    hasFocus,
    selectOpened,
    isSearching,
    childIndex,
    onOptionSelect,
    onFocusChange,
    disabled,
    value,
    isAddBtnFocused,
    ...rest
  } = _ref;
  const defaultOptionId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_util_helper__WEBPACK_IMPORTED_MODULE_2__/* .generateID */ .ni)(20));
  const optionId = id !== null && id !== void 0 ? id : defaultOptionId.current;
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const additionalClasses = [];
  className && additionalClasses.push(className);
  isSelected && !disableDefaultSelectedStyle && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["selected-option"]);
  disabled && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["disabled"]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching && !isAddBtnFocused) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);
  const onSelectHandler = () => onOptionSelect === null || onOptionSelect === void 0 ? void 0 : onOptionSelect(innerOptionRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({}, rest, {
    id: optionId,
    ref: innerOptionRef,
    "data-value": value,
    className: additionalClasses.join(" "),
    onClick: onSelectHandler,
    onKeyDown: event => {
      if (event.code === "Enter") {
        event.stopPropagation();
        event.preventDefault();
        onSelectHandler();
      }
    },
    "aria-selected": isSelected,
    role: "option",
    tabIndex: disabled ? -1 : 0
  }), children);
};
const Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(OptionComponent);
try {
    // @ts-ignore
    Option.displayName = "Option";
    // @ts-ignore
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "disableDefaultSelectedStyle": { "defaultValue": null, "description": "", "name": "disableDefaultSelectedStyle", "required": false, "type": { "name": "boolean" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss
var CheckboxWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss
var RadioWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss");
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
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
 *//*!
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
 *//*!
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
 */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.5rem .75rem;min-height:2.5rem;cursor:pointer;transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);position:relative}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed;background-color:var(--disabled);border-color:var(--disabled)}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `BaseButton-module__sr-only--pIoQP`,
	"hidden": `BaseButton-module__hidden--YXbft`,
	"slide-in": `BaseButton-module__slide-in--f4Qq6`,
	"slide-out": `BaseButton-module__slide-out--QlyO7`,
	"button": `BaseButton-module__button--q6T9A`,
	"content-hidden": `BaseButton-module__content-hidden--QNxtO`,
	"spinner": `BaseButton-module__spinner--sHeyQ`,
	"spin": `BaseButton-module__spin--KXAHp`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss":
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/RadioWrapper/RadioWrapper.module.scss":
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