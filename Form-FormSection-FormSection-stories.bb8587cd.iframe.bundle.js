"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[65],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
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

/***/ "./stories/Form/FormSection/FormSection.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FormSection: () => (/* binding */ FormSection_stories_FormSection),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ FormSection_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx + 1 modules
var FormSection = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/FormSection/FormSection.mdx



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
        children: "FormSection"
      }), " component has been created to align specific section of the page with some header and sub header."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A code example of using form section component is as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<FormSection header=\"Form Section Header Text\" subtext=\"Form Section Subheader\">\n  <InputWrapper\n    helperText=\"Helper text for this field. Description should be short and not repeat the label\"\n    label=\"Label for this inputfield\"\n    name=\"input1\"\n    onChange={() => {}}\n    type=\"text\"\n    value=\"\"\n  />\n</FormSection>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: FormSection_stories_FormSection
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
/* harmony default export */ const FormSection_FormSection = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/FormSection/FormSection.stories.tsx
/*
 * Copyright 2024 OneWelcome B.V.
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
  title: "Components/Layout/FormSection",
  component: FormSection/* FormSection */.y,
  parameters: {
    docs: {
      page: FormSection_FormSection
    }
  },
  args: {
    header: "Form Section Header Text",
    children: /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
      errorMessage: "This is an error",
      helperText: "Helper text for this field. Description should be short and not repeat the label",
      label: "Label for this inputfield",
      name: "input1",
      onChange: () => {},
      type: "text",
      value: ""
    }),
    subtext: "Form Section Subheader"
  }
};
/* harmony default export */ const FormSection_stories = (meta);
const Template = args => /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, args);
const FormSection_stories_FormSection = Template.bind({});
FormSection_stories_FormSection.parameters = {
  ...FormSection_stories_FormSection.parameters,
  docs: {
    ...FormSection_stories_FormSection.parameters?.docs,
    source: {
      originalSource: "args => <FormSectionComponent {...args} />",
      ...FormSection_stories_FormSection.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["FormSection"];

/***/ }),

/***/ "./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ InputWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.A, options);




       /* harmony default export */ const InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.A && InputWrapper_module/* default */.A.locals ? InputWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
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






const InputWrapperComponent = (_ref, ref) => {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  let {
    type,
    name,
    inputProps,
    helperText,
    helperProps,
    value,
    className,
    error,
    success,
    onChange,
    onBlur,
    onFocus,
    disabled,
    ...rest
  } = _ref;
  const {
    errorId,
    hasFocus,
    setHasFocus,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.r)();
  const {
    prefix,
    suffix
  } = inputProps !== null && inputProps !== void 0 ? inputProps : {};
  const input = (0,react.useRef)(null);
  const labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module["focus"]);
  const inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
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
    helperProps: {
      ...helperProps,
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    },
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.p, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: e => {
      onFocus === null || onFocus === void 0 || onFocus(e);
      setHasFocus(true);
    },
    onBlur: e => {
      onBlur === null || onBlur === void 0 || onBlur(e);
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
const InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
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

/***/ "./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ FormSection)
});

// UNUSED EXPORTS: FormSectionComponent

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.module.scss
var FormSection_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.module.scss");
;// CONCATENATED MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormSection_module/* default */.A, options);




       /* harmony default export */ const FormSection_FormSection_module = (FormSection_module/* default */.A && FormSection_module/* default */.A.locals ? FormSection_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx
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




const FormSectionComponent = (_ref, ref) => {
  let {
    header,
    subtext,
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    className: FormSection_FormSection_module["section-wrapper"],
    ref: ref
  }), header && /*#__PURE__*/react.createElement("div", {
    className: FormSection_FormSection_module["section-header-wrapper"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "h4",
    className: FormSection_FormSection_module["section-header"],
    spacing: {
      marginBottom: 0
    }
  }, header), subtext && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "sub-text",
    spacing: {
      marginBottom: 0
    }
  }, subtext)), children);
};
const FormSection = /*#__PURE__*/react.forwardRef(FormSectionComponent);
try {
    // @ts-ignore
    FormSectionComponent.displayName = "FormSectionComponent";
    // @ts-ignore
    FormSectionComponent.__docgenInfo = { "description": "", "displayName": "FormSectionComponent", "props": { "header": { "defaultValue": null, "description": "", "name": "header", "required": false, "type": { "name": "string" } }, "subtext": { "defaultValue": null, "description": "", "name": "subtext", "required": false, "type": { "name": "string" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx#FormSectionComponent"] = { docgenInfo: FormSectionComponent.__docgenInfo, name: "FormSectionComponent", path: "src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx#FormSectionComponent" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    FormSection.displayName = "FormSection";
    // @ts-ignore
    FormSection.__docgenInfo = { "description": "", "displayName": "FormSection", "props": { "header": { "defaultValue": null, "description": "", "name": "header", "required": false, "type": { "name": "string" } }, "subtext": { "defaultValue": null, "description": "", "name": "subtext", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx#FormSection"] = { docgenInfo: FormSection.__docgenInfo, name: "FormSection", path: "src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx#FormSection" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
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
 */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem;display:flex;align-items:center;justify-content:center}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed;color:var(--greyed-out)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `InputWrapper-module__sr-only--_BGLV`,
	"hidden": `InputWrapper-module__hidden--j7j0R`,
	"slide-in": `InputWrapper-module__slide-in--PMOZy`,
	"slide-out": `InputWrapper-module__slide-out--ghrlP`,
	"floating-label": `InputWrapper-module__floating-label--aGgwG`,
	"input-wrapper-helper": `InputWrapper-module__input-wrapper-helper--GKzdc`,
	"input-wrapper": `InputWrapper-module__input-wrapper--x9INE`,
	"disabled": `InputWrapper-module__disabled--TE5Ui`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.module.scss":
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
___CSS_LOADER_EXPORT___.push([module.id, `.FormSection-module__section-wrapper--LwPKl{padding-bottom:4rem}.FormSection-module__section-header-wrapper--r03H4{margin-bottom:1rem}.FormSection-module__section-header--e3EA_{line-height:2rem;color:var(--color-primary500)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section-wrapper": `FormSection-module__section-wrapper--LwPKl`,
	"section-header-wrapper": `FormSection-module__section-header-wrapper--r03H4`,
	"section-header": `FormSection-module__section-header--e3EA_`
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