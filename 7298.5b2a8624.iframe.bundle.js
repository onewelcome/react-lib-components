"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7298],{

/***/ "./src/components/Form/Checkbox/Checkbox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Checkbox)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Checkbox/Checkbox.module.scss
var Checkbox_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Checkbox/Checkbox.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Checkbox/Checkbox.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Checkbox_module/* default */.A, options);




       /* harmony default export */ const Checkbox_Checkbox_module = (Checkbox_module/* default */.A && Checkbox_module/* default */.A.locals ? Checkbox_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useFormSelector.ts
var useFormSelector = __webpack_require__("./src/hooks/useFormSelector.ts");
// EXTERNAL MODULE: ./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx + 1 modules
var FormSelectorWrapper = __webpack_require__("./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx");
// EXTERNAL MODULE: ./src/components/withReadOnly.tsx
var withReadOnly = __webpack_require__("./src/components/withReadOnly.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Checkbox/Checkbox.tsx
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







const isToggle = children => {
  var _props;
  return !!(children !== null && children !== void 0 && (_props = children.props) !== null && _props !== void 0 && _props["data-toggle"]);
};
const CheckboxComponent = (_ref, ref) => {
  let {
    children,
    name,
    helperText,
    helperProps,
    indeterminate,
    parentErrorId,
    errorMessage,
    disabled,
    label,
    parentHelperId,
    className,
    error,
    checked = false,
    formSelectorWrapperProps,
    onChange,
    ...rest
  } = _ref;
  const {
    errorId,
    identifier,
    describedBy
  } = (0,useFormSelector/* useFormSelector */.N)({
    name,
    helperText,
    parentErrorId,
    errorMessage,
    error,
    parentHelperId
  });
  (0,react.useEffect)(() => {
    if (!name) {
      throw new Error("Please pass a 'name' prop to your <Checkbox> component.");
    }
    if (typeof children === "object" && !isToggle(children) && indeterminate === undefined) {
      throw new Error("If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop.");
    }
  }, []);
  const determineLabel = () => {
    // this should be temporary, for backwards compatibility;
    // once the components implementing checkboxes in microfrontends are updated, only label should be returned
    if (label) {
      return label;
    } else if (typeof children === "string") {
      return children;
    }
  };
  const renderNestedCheckboxes = () => /*#__PURE__*/react.createElement("ul", {
    className: Checkbox_Checkbox_module["checkbox-list"]
  }, react.Children.map(children, child => {
    return /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(Checkbox, _extends({}, child.props, {
      parentHelperId: parentHelperId,
      parentErrorId: parentErrorId,
      error: error,
      disabled: child.props.disabled ? child.props.disabled : disabled
    }), child.props.children));
  }));
  const onChangeHandler = event => {
    if (disabled) {
      return;
    }
    onChange === null || onChange === void 0 || onChange(event);
  };
  const renderToggle = () => react.Children.toArray(children).filter(isToggle);
  const iconClasses = [Checkbox_Checkbox_module["input"]];
  const nativeInputClasses = [Checkbox_Checkbox_module["native-input"]];
  const wrapperClasses = [Checkbox_Checkbox_module["checkbox-wrapper"]];
  error && nativeInputClasses.push(Checkbox_Checkbox_module["error"]);
  disabled && nativeInputClasses.push(Checkbox_Checkbox_module["disabled"]) && iconClasses.push(Checkbox_Checkbox_module["disabled"]);
  className && wrapperClasses.push(className);
  return /*#__PURE__*/react.createElement(FormSelectorWrapper/* FormSelectorWrapper */.p, _extends({}, formSelectorWrapperProps, {
    className: wrapperClasses.join(" "),
    containerProps: {
      className: Checkbox_Checkbox_module["checkbox-container"]
    },
    helperText: helperText,
    helperProps: helperProps,
    parentErrorId: parentErrorId,
    errorId: errorId,
    errorMessage: errorMessage,
    error: error,
    disabled: disabled,
    identifier: identifier,
    nestedChildren: typeof children === "object" && !isToggle(children) && renderNestedCheckboxes()
  }), /*#__PURE__*/react.createElement("input", _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    className: nativeInputClasses.join(" "),
    checked: checked,
    onChange: onChangeHandler,
    "aria-invalid": error,
    "aria-checked": indeterminate ? "mixed" : checked,
    "aria-describedby": describedBy,
    id: "".concat(identifier, "-checkbox"),
    name: name,
    type: "checkbox"
  })), renderToggle(), indeterminate && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    className: "".concat(iconClasses.join(" "), " ").concat(Checkbox_Checkbox_module["indeterminate"]),
    icon: Icon/* Icons */.F.MinusSquare
  }), checked && !indeterminate && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    className: "".concat(iconClasses.join(" "), " ").concat(Checkbox_Checkbox_module["checkmark"]),
    icon: Icon/* Icons */.F.CheckmarkSquare
  }), !checked && !indeterminate && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    className: "".concat(iconClasses.join(" "), " ").concat(Checkbox_Checkbox_module["square"]),
    icon: Icon/* Icons */.F.Square
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "".concat(identifier, "-checkbox")
  }, determineLabel()));
};
const Checkbox = (0,withReadOnly/* withReadOnly */.R)( /*#__PURE__*/react.forwardRef(CheckboxComponent));
try {
    // @ts-ignore
    Checkbox.displayName = "Checkbox";
    // @ts-ignore
    Checkbox.__docgenInfo = { "description": "", "displayName": "Checkbox", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string | ReactElement<any, string | JSXElementConstructor<any>>" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "readOnlyView": { "defaultValue": null, "description": "", "name": "readOnlyView", "required": false, "type": { "name": "boolean" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } }, "indeterminate": { "defaultValue": null, "description": "", "name": "indeterminate", "required": false, "type": { "name": "boolean" } }, "formSelectorWrapperProps": { "defaultValue": null, "description": "", "name": "formSelectorWrapperProps", "required": false, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Checkbox/Checkbox.tsx#Checkbox"] = { docgenInfo: Checkbox.__docgenInfo, name: "Checkbox", path: "src/components/Form/Checkbox/Checkbox.tsx#Checkbox" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ FormSelectorWrapper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/FormHelperText/FormHelperText.tsx + 1 modules
var FormHelperText = __webpack_require__("./src/components/Form/FormHelperText/FormHelperText.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss
var FormSelectorWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormSelectorWrapper_module/* default */.A, options);




       /* harmony default export */ const FormSelectorWrapper_FormSelectorWrapper_module = (FormSelectorWrapper_module/* default */.A && FormSelectorWrapper_module/* default */.A.locals ? FormSelectorWrapper_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx
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




const FormSelectorWrapperComponent = (_ref, ref) => {
  var _helperProps$ref, _helperProps$classNam;
  let {
    children,
    className,
    nestedChildren,
    containerProps,
    helperProps,
    error,
    disabled,
    helperText,
    errorMessage,
    parentErrorId,
    errorId,
    identifier,
    ...rest
  } = _ref;
  const helperRef = (_helperProps$ref = helperProps === null || helperProps === void 0 ? void 0 : helperProps.ref) !== null && _helperProps$ref !== void 0 ? _helperProps$ref : /*#__PURE__*/(0,react.createRef)();
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(error ? FormSelectorWrapper_FormSelectorWrapper_module["error"] : "", " ").concat(disabled ? FormSelectorWrapper_FormSelectorWrapper_module["disabled"] : "", " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", containerProps, children), (errorMessage || helperText || (helperProps === null || helperProps === void 0 ? void 0 : helperProps.children)) && /*#__PURE__*/react.createElement(FormHelperText/* FormHelperText */.e, _extends({}, helperProps, {
    ref: helperRef,
    id: "".concat(identifier),
    className: "".concat(FormSelectorWrapper_FormSelectorWrapper_module["helper-text"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ").concat(error ? FormSelectorWrapper_FormSelectorWrapper_module["error"] : "")
  }), error && errorMessage ? /*#__PURE__*/react.createElement("span", {
    className: FormSelectorWrapper_FormSelectorWrapper_module["error-message"],
    id: errorId
  }, errorMessage) : (helperProps === null || helperProps === void 0 ? void 0 : helperProps.children) || helperText), nestedChildren);
};
const FormSelectorWrapper = /*#__PURE__*/react.forwardRef(FormSelectorWrapperComponent);
try {
    // @ts-ignore
    FormSelectorWrapper.displayName = "FormSelectorWrapper";
    // @ts-ignore
    FormSelectorWrapper.__docgenInfo = { "description": "", "displayName": "FormSelectorWrapper", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "containerProps": { "defaultValue": null, "description": "", "name": "containerProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; } & KeyValuePair)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } }, "errorId": { "defaultValue": null, "description": "", "name": "errorId", "required": false, "type": { "name": "string" } }, "nestedChildren": { "defaultValue": null, "description": "", "name": "nestedChildren", "required": false, "type": { "name": "ReactNode" } }, "identifier": { "defaultValue": null, "description": "", "name": "identifier", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx#FormSelectorWrapper"] = { docgenInfo: FormSelectorWrapper.__docgenInfo, name: "FormSelectorWrapper", path: "src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx#FormSelectorWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useFormSelector.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useFormSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/helper.tsx");
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



const useFormSelector = configObject => {
  const [identifier] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .ni)(15, configObject.name));
  const [describedBy, setDescribedBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [errorId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .ni)(15, configObject.errorMessage));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (configObject.error && configObject.parentErrorId) {
      setDescribedBy(configObject.parentErrorId);
    }
    if (!configObject.error && configObject.helperText || !configObject.parentErrorId && !configObject.errorMessage && configObject.helperText) {
      setDescribedBy("".concat(identifier));
    }
    if (!configObject.error && !configObject.helperText && configObject.parentHelperId || !configObject.parentErrorId && !configObject.errorMessage && configObject.parentHelperId) {
      setDescribedBy("".concat(configObject.parentHelperId));
    }
    if (configObject.errorMessage && !configObject.parentErrorId && configObject.error) {
      setDescribedBy(errorId);
    }
  }, [identifier, configObject.error, configObject.parentErrorId]);
  return {
    describedBy,
    errorId,
    identifier
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Checkbox/Checkbox.module.scss":
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
 */.Checkbox-module__sr-only--FiBjr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Checkbox-module__hidden--A1Yiy{display:none}.Checkbox-module__slide-in--MR6if{animation:Checkbox-module__slide-in--MR6if .5s forwards}@media(prefers-reduced-motion: reduce){.Checkbox-module__slide-in--MR6if{animation-duration:.1ms}}.Checkbox-module__slide-out--MVypZ{animation:Checkbox-module__slide-out--MVypZ .5s forwards}@media(prefers-reduced-motion: reduce){.Checkbox-module__slide-out--MVypZ{animation-duration:.1ms}}@keyframes Checkbox-module__slide-in--MR6if{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Checkbox-module__slide-out--MVypZ{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Checkbox-module__checkbox-wrapper--_6Zjq{position:relative}.Checkbox-module__checkbox-wrapper--_6Zjq+.Checkbox-module__checkbox-wrapper--_6Zjq{margin-top:.75rem}.Checkbox-module__checkbox-container--H4shH{display:flex}.Checkbox-module__checkbox-container--H4shH label{display:inline-block;margin-left:.5rem;user-select:none;font-size:var(--font-size-form-label);font-family:var(--font-family);margin-top:.1rem}.Checkbox-module__checkbox-list--WZ3mD{padding:0;margin:1rem 0 0 1.75rem;list-style:none}.Checkbox-module__checkbox-list--WZ3mD li+li{margin-top:.75rem}.Checkbox-module__native-input--sCuK6{position:absolute;top:0;left:0;opacity:0;margin:0;width:1.25rem;height:1.25rem;z-index:2}.Checkbox-module__native-input--sCuK6:checked:not(.Checkbox-module__disabled--ZcHFe)+*{color:var(--color-primary)}.Checkbox-module__native-input--sCuK6:focus-visible+*{border-radius:2px;outline:2px solid var(--color-focus);outline-offset:2px}.Checkbox-module__native-input--sCuK6:active:not(.Checkbox-module__disabled--ZcHFe)+span{background-color:var(--disabled)}.Checkbox-module__native-input--sCuK6.Checkbox-module__error--vVzp_:focus-visible+*{outline-color:var(--color-error)}.Checkbox-module__native-input--sCuK6+span[data-icon=true]:before{display:block;width:20px;height:20px}.Checkbox-module__native-input--sCuK6:hover+.Checkbox-module__square--njISR:not(.Checkbox-module__disabled--ZcHFe){background-color:var(--checkbox-unchecked-hover-color)}.Checkbox-module__native-input--sCuK6:active+.Checkbox-module__square--njISR:not(.Checkbox-module__disabled--ZcHFe){background-color:var(--checkbox-unchecked-pressed-color)}.Checkbox-module__native-input--sCuK6:hover+.Checkbox-module__checkmark--pFLzT:not(.Checkbox-module__disabled--ZcHFe),.Checkbox-module__native-input--sCuK6:active+.Checkbox-module__indeterminate--YmW4Y:not(.Checkbox-module__disabled--ZcHFe){color:var(--checkbox-checked-hover-color)}.Checkbox-module__native-input--sCuK6:active+.Checkbox-module__checkmark--pFLzT:not(.Checkbox-module__disabled--ZcHFe),.Checkbox-module__native-input--sCuK6:active+.Checkbox-module__indeterminate--YmW4Y:not(.Checkbox-module__disabled--ZcHFe){color:var(--checkbox-checked-pressed-color)}.Checkbox-module__input--GASf2{font-size:1.25rem;z-index:1}.Checkbox-module__disabled--ZcHFe{cursor:not-allowed}.Checkbox-module__disabled--ZcHFe+span{color:var(--disabled);pointer-events:none}.Checkbox-module__disabled--ZcHFe+label{color:var(--greyed-out)}.Checkbox-module__disabled--ZcHFe+.Checkbox-module__checkmark--pFLzT,.Checkbox-module__disabled--ZcHFe+.Checkbox-module__indeterminate--YmW4Y{color:var(--disabled);background-color:var(--greyed-out);border-radius:2px;outline:1px var(--disabled) solid;outline-offset:-1px}.Checkbox-module__indeterminate--YmW4Y{color:var(--color-primary)}[data-readonlyview=true] label{border-color:var(--read-only-border-color);color:var(--read-only-text-color);background-color:rgba(0,0,0,0);user-select:text}[data-readonlyview=true] .Checkbox-module__checkbox-wrapper--_6Zjq span{color:var(--color-blue-grey100)}[data-readonlyview=true] .Checkbox-module__checkbox-wrapper--_6Zjq span.Checkbox-module__checkmark--pFLzT{background-color:var(--color-blue-grey900);color:var(--color-white);border-radius:2px}[data-readonlyview=true] .Checkbox-module__checkbox-wrapper--_6Zjq span.Checkbox-module__checkmark--pFLzT:before{outline:1px solid var(--read-only-border-color);border-radius:2px;outline-offset:-1px}[data-readonlyview=true] input[type=checkbox]{pointer-events:none}input[type=checkbox][data-readonlyview=true]~span:before{color:var(--color-blue-grey100)}input[type=checkbox][data-readonlyview=true]~span.Checkbox-module__checkmark--pFLzT{background-color:var(--color-blue-grey900);color:var(--color-white);border:1px solid var(--read-only-border-color);border-radius:3px}input[type=checkbox][data-readonlyview=true]~span.Checkbox-module__checkmark--pFLzT:before{color:var(--color-white)}input[type=checkbox][data-readonlyview=true]~span[data-icon=true]{color:var(--color-blue-grey100)}input[type=checkbox][data-readonlyview=true]~span[data-icon=true].Checkbox-module__checkmark--pFLzT{background-color:var(--color-blue-grey900);color:var(--color-white);border:0}input[type=checkbox][data-readonlyview=true]~span[data-icon=true].Checkbox-module__checkmark--pFLzT:before{outline:1px solid var(--read-only-border-color);outline-offset:-1px;border-radius:2px}input[type=checkbox][data-readonlyview=true]~label{pointer-events:none;user-select:text}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Checkbox-module__sr-only--FiBjr`,
	"hidden": `Checkbox-module__hidden--A1Yiy`,
	"slide-in": `Checkbox-module__slide-in--MR6if`,
	"slide-out": `Checkbox-module__slide-out--MVypZ`,
	"checkbox-wrapper": `Checkbox-module__checkbox-wrapper--_6Zjq`,
	"checkbox-container": `Checkbox-module__checkbox-container--H4shH`,
	"checkbox-list": `Checkbox-module__checkbox-list--WZ3mD`,
	"native-input": `Checkbox-module__native-input--sCuK6`,
	"disabled": `Checkbox-module__disabled--ZcHFe`,
	"error": `Checkbox-module__error--vVzp_`,
	"square": `Checkbox-module__square--njISR`,
	"checkmark": `Checkbox-module__checkmark--pFLzT`,
	"indeterminate": `Checkbox-module__indeterminate--YmW4Y`,
	"input": `Checkbox-module__input--GASf2`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss":
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
 */.FormSelectorWrapper-module__error--pT3qn input+span{outline:var(--error) solid 1px;outline-offset:-1px;border-radius:2px;overflow:hidden}.FormSelectorWrapper-module__helper-text--rQDvI{margin-top:.25rem;margin-left:1.75rem}.FormSelectorWrapper-module__error-message--MjwnD{color:var(--error)}.FormSelectorWrapper-module__disabled--kRGk8 input{color:var(--disabled)}.FormSelectorWrapper-module__disabled--kRGk8 input:disabled{cursor:not-allowed}.FormSelectorWrapper-module__disabled--kRGk8 label{cursor:not-allowed}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"error": `FormSelectorWrapper-module__error--pT3qn`,
	"helper-text": `FormSelectorWrapper-module__helper-text--rQDvI`,
	"error-message": `FormSelectorWrapper-module__error-message--MjwnD`,
	"disabled": `FormSelectorWrapper-module__disabled--kRGk8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);