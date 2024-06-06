"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[988],{

/***/ "./src/components/Form/FormHelperText/FormHelperText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ FormHelperText)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss
var FormHelperText_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormHelperText/FormHelperText.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormHelperText_module/* default */.A, options);




       /* harmony default export */ const FormHelperText_FormHelperText_module = (FormHelperText_module/* default */.A && FormHelperText_module/* default */.A.locals ? FormHelperText_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FormHelperText/FormHelperText.tsx
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




const FormHelperTextComponent = (_ref, ref) => {
  let {
    children,
    error,
    disabled,
    className,
    ...rest
  } = _ref;
  const classNames = [FormHelperText_FormHelperText_module["form-helper-text"]];
  error && classNames.push(FormHelperText_FormHelperText_module["error"]);
  disabled && classNames.push(FormHelperText_FormHelperText_module["disabled"]);
  className && classNames.push(className);
  return /*#__PURE__*/react.createElement(Typography/* Typography */.o, _extends({}, rest, {
    ref: ref,
    variant: "sub-text",
    tag: "div",
    className: classNames.join(" ")
  }), children);
};
const FormHelperText = /*#__PURE__*/react.forwardRef(FormHelperTextComponent);
try {
    // @ts-ignore
    FormHelperText.displayName = "FormHelperText";
    // @ts-ignore
    FormHelperText.__docgenInfo = { "description": "", "displayName": "FormHelperText", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormHelperText/FormHelperText.tsx#FormHelperText"] = { docgenInfo: FormHelperText.__docgenInfo, name: "FormHelperText", path: "src/components/Form/FormHelperText/FormHelperText.tsx#FormHelperText" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Label/Label.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss
var Label_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Label_module/* default */.A, options);




       /* harmony default export */ const Label_Label_module = (Label_module/* default */.A && Label_module/* default */.A.locals ? Label_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.tsx
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




const LabelComponent = (_ref, ref) => {
  let {
    children,
    className,
    hidden = false,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("label", _extends({}, rest, {
    ref: ref,
    className: "".concat(hidden ? readyclasses_module/* default */.A["sr-only"] : "", " ").concat(Label_Label_module["label"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
const Label = /*#__PURE__*/react.forwardRef(LabelComponent);
try {
    // @ts-ignore
    Label.displayName = "Label";
    // @ts-ignore
    Label.__docgenInfo = { "description": "", "displayName": "Label", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Label/Label.tsx#Label"] = { docgenInfo: Label.__docgenInfo, name: "Label", path: "src/components/Form/Label/Label.tsx#Label" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/Wrapper/Wrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Wrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormGroup/FormGroup.module.scss
var FormGroup_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormGroup/FormGroup.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormGroup/FormGroup.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormGroup_module/* default */.A, options);




       /* harmony default export */ const FormGroup_FormGroup_module = (FormGroup_module/* default */.A && FormGroup_module/* default */.A.locals ? FormGroup_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/FormHelperText/FormHelperText.tsx + 1 modules
var FormHelperText = __webpack_require__("./src/components/Form/FormHelperText/FormHelperText.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FormGroup/FormGroup.tsx
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

/** The empty className property on FormHelperText is on purpose! We want to basically "filter" out the className from helperProps because we're adding this to the surrounding div. This makes it so also the errormessage receives this styling. */





const FormGroupComponent = (_ref, ref) => {
  let {
    children,
    className,
    error,
    errorMessage,
    errorId,
    errorMessageIcon,
    errorMessageIconPosition = "before",
    helperText,
    helperId,
    helperProps,
    disabled,
    ...rest
  } = _ref;
  const disableHelperText = (helperProps === null || helperProps === void 0 ? void 0 : helperProps.disabled) !== undefined ? helperProps === null || helperProps === void 0 ? void 0 : helperProps.disabled : disabled;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(FormGroup_FormGroup_module["form-group"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), children, (helperText || errorMessage && error) && /*#__PURE__*/react.createElement("div", {
    className: "".concat(FormGroup_FormGroup_module["default-helper"], " ").concat(helperProps !== null && helperProps !== void 0 && helperProps.className ? helperProps.className : "")
  }, (helperText && !error || helperText && error && !errorMessage) && /*#__PURE__*/react.createElement(FormHelperText/* FormHelperText */.e, _extends({}, helperProps, {
    className: "",
    id: helperId,
    disabled: disableHelperText
  }), (helperProps === null || helperProps === void 0 ? void 0 : helperProps.children) || helperText), error && errorMessage && /*#__PURE__*/react.createElement("span", {
    className: FormGroup_FormGroup_module["error-message"]
  }, /*#__PURE__*/react.createElement("span", {
    id: errorId,
    className: FormGroup_FormGroup_module.message
  }, errorMessageIcon && errorMessageIconPosition === "before" && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    className: "".concat(FormGroup_FormGroup_module["error-icon"], " ").concat(FormGroup_FormGroup_module["error-icon-before"]),
    icon: errorMessageIcon
  }), errorMessage, errorMessageIcon && errorMessageIconPosition === "after" && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    className: "".concat(FormGroup_FormGroup_module["error-icon"], " ").concat(FormGroup_FormGroup_module["error-icon-after"]),
    icon: errorMessageIcon
  })))));
};
const FormGroup = /*#__PURE__*/react.forwardRef(FormGroupComponent);
try {
    // @ts-ignore
    FormGroup.displayName = "FormGroup";
    // @ts-ignore
    FormGroup.__docgenInfo = { "description": "", "displayName": "FormGroup", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "errorId": { "defaultValue": null, "description": "", "name": "errorId", "required": false, "type": { "name": "string" } }, "errorMessageIcon": { "defaultValue": null, "description": "", "name": "errorMessageIcon", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"error-circle-alt\"" }, { "value": "\"eye\"" }, { "value": "\"eye-blocked\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"home-filled\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"warning-filled\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }, { "value": "\"upload-outline\"" }, { "value": "\"reply-outline\"" }, { "value": "\"save-outline\"" }, { "value": "\"download-file-outline\"" }, { "value": "\"retry\"" }, { "value": "\"cancel\"" }, { "value": "\"file-alt\"" }] } }, "errorMessageIconPosition": { "defaultValue": { value: "before" }, "description": "", "name": "errorMessageIconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"before\"" }, { "value": "\"after\"" }] } }, "helperId": { "defaultValue": null, "description": "", "name": "helperId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormGroup/FormGroup.tsx#FormGroup"] = { docgenInfo: FormGroup.__docgenInfo, name: "FormGroup", path: "src/components/Form/FormGroup/FormGroup.tsx#FormGroup" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Form/Label/Label.tsx + 1 modules
var Label = __webpack_require__("./src/components/Form/Label/Label.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss
var Wrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss

      
      
      
      
      
      
      
      
      

var Wrapper_module_options = {};

Wrapper_module_options.styleTagTransform = (styleTagTransform_default());
Wrapper_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Wrapper_module_options.insert = insertBySelector_default().bind(null, "head");
    
Wrapper_module_options.domAPI = (styleDomAPI_default());
Wrapper_module_options.insertStyleElement = (insertStyleElement_default());

var Wrapper_module_update = injectStylesIntoStyleTag_default()(Wrapper_module/* default */.A, Wrapper_module_options);




       /* harmony default export */ const Wrapper_Wrapper_module = (Wrapper_module/* default */.A && Wrapper_module/* default */.A.locals ? Wrapper_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx
function Wrapper_extends() {
  Wrapper_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Wrapper_extends.apply(this, arguments);
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






/** For components that extend this component we create an interface (InputWrapper, SelectWrapper, etc.) */

const WrapperComponent = (_ref, ref) => {
  let {
    children,
    className,
    error,
    errorMessage,
    errorId,
    errorMessageIcon,
    errorMessageIconPosition,
    helperText,
    helperId,
    required,
    helperProps,
    helperIndent,
    labelProps,
    label,
    disabled,
    name,
    innerClassName,
    ...rest
  } = _ref;
  const renderChildren = () => react.Children.map(children, child => /*#__PURE__*/react.cloneElement(child, {
    disabled
  }));
  const labelClasses = [Wrapper_Wrapper_module["form-input-label"]];
  (labelProps === null || labelProps === void 0 ? void 0 : labelProps.className) && labelClasses.push(labelProps.className);
  required && labelClasses.push(Wrapper_Wrapper_module["required"]);
  error && labelClasses.push(Wrapper_Wrapper_module["error"]);
  disabled && labelClasses.push(Wrapper_Wrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement("div", Wrapper_extends({}, rest, {
    ref: ref,
    className: "".concat(Wrapper_Wrapper_module.wrapper, " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement(FormGroup, {
    disabled: disabled,
    error: error,
    errorMessage: errorMessage,
    errorId: errorId,
    errorMessageIcon: errorMessageIcon,
    errorMessageIconPosition: errorMessageIconPosition,
    helperText: helperText,
    helperId: helperId,
    helperProps: helperProps
  }, /*#__PURE__*/react.createElement("div", {
    className: " ".concat(innerClassName ? innerClassName : "")
  }, label && /*#__PURE__*/react.createElement(Label/* Label */.J, Wrapper_extends({}, labelProps, {
    className: "".concat(Wrapper_Wrapper_module.label, " ").concat(labelClasses.join(" ")),
    htmlFor: name
  }), label), renderChildren())));
};
const Wrapper = /*#__PURE__*/react.forwardRef(WrapperComponent);
try {
    // @ts-ignore
    Wrapper.displayName = "Wrapper";
    // @ts-ignore
    Wrapper.__docgenInfo = { "description": "", "displayName": "Wrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "This does NOT add validation! It simply adds an asterix on the Label!", "name": "required", "required": false, "type": { "name": "boolean" } }, "errorId": { "defaultValue": null, "description": "", "name": "errorId", "required": false, "type": { "name": "string" } }, "helperIndent": { "defaultValue": null, "description": "", "name": "helperIndent", "required": false, "type": { "name": "number" } }, "labelProps": { "defaultValue": null, "description": "", "name": "labelProps", "required": false, "type": { "name": "Props" } }, "innerClassName": { "defaultValue": null, "description": "", "name": "innerClassName", "required": false, "type": { "name": "string" } }, "errorMessageIcon": { "defaultValue": null, "description": "", "name": "errorMessageIcon", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"error-circle-alt\"" }, { "value": "\"eye\"" }, { "value": "\"eye-blocked\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"home-filled\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"warning-filled\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }, { "value": "\"upload-outline\"" }, { "value": "\"reply-outline\"" }, { "value": "\"save-outline\"" }, { "value": "\"download-file-outline\"" }, { "value": "\"retry\"" }, { "value": "\"cancel\"" }, { "value": "\"file-alt\"" }] } }, "errorMessageIconPosition": { "defaultValue": null, "description": "", "name": "errorMessageIconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"before\"" }, { "value": "\"after\"" }] } }, "helperId": { "defaultValue": null, "description": "", "name": "helperId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/Wrapper/Wrapper.tsx#Wrapper"] = { docgenInfo: Wrapper.__docgenInfo, name: "Wrapper", path: "src/components/Form/Wrapper/Wrapper/Wrapper.tsx#Wrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Typography),
  v: () => (/* binding */ validVariants)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.A, options);




       /* harmony default export */ const Typography_Typography_module = (Typography_module/* default */.A && Typography_module/* default */.A.locals ? Typography_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
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




const validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
const TypographyComponent = (_ref, ref) => {
  let {
    children,
    variant,
    tag,
    style,
    spacing,
    align,
    className = "",
    ...rest
  } = _ref;
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  const styleWithSpacing = (0,useSpacing/* useSpacing */.T)(spacing, style);
  if (!tag) {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "code":
        tag = variant;
        break;
      case "body":
        tag = "p";
        break;
      case "body-bold":
        tag = "p";
        break;
      case "sub-text":
        tag = "span";
        break;
      default:
        tag = "div";
        break;
    }
  }
  let TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: {
      ...styleWithSpacing,
      textAlign: align
    },
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
const Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
try {
    // @ts-ignore
    Typography.displayName = "Typography";
    // @ts-ignore
    Typography.__docgenInfo = { "description": "", "displayName": "Typography", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"] = { docgenInfo: Typography.__docgenInfo, name: "Typography", path: "src/components/Typography/Typography.tsx#Typography" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useSpacing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useSpacing)
/* harmony export */ });
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

const defaultFactor = 0.25;
const defaultUnit = "rem";
const spacingNumberRegex = /(\d+\.?\d*)+/g;
const useSpacing = (spacingProps, style) => {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce((prev, _ref) => {
      let [spacing, multiplier] = _ref;
      const matches = String(multiplier).matchAll(spacingNumberRegex);
      const cssSpacingValue = Array.from(matches).map(_ref2 => {
        let [multiplierValue] = _ref2;
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return {
        ...prev,
        [spacing]: cssSpacingValue
      };
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./src/hooks/useWrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useWrapper)
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



const useWrapper = () => {
  const [helperId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .ni)(20));
  const [errorId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .ni)(20));
  const [labelId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .ni)(20));
  const [hasFocus, setHasFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return {
    helperId,
    errorId,
    labelId,
    hasFocus,
    setHasFocus
  };
};

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: () => (/* binding */ getValueByPath),
/* harmony export */   Eo: () => (/* binding */ isJsonString),
/* harmony export */   GK: () => (/* binding */ areArraysDifferent),
/* harmony export */   J9: () => (/* binding */ filterProps),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   ir: () => (/* binding */ remToPx),
/* harmony export */   ni: () => (/* binding */ generateID)
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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

const generateID = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  let stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
const filterProps = function (props, regexPattern) {
  let returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce((acc, key) => {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(_ref => {
      let [key] = _ref;
      return !regexPattern.test(key);
    }).reduce((prevObj, currKeyValPair) => ({
      ...prevObj,
      [currKeyValPair[0]]: currKeyValPair[1]
    }), {});
  }
};
const debounce = (fn, delay) => {
  let timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
const throttle = (fn, delay) => {
  let lastTime = 0;
  return function () {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
const isEqual = (x, y) => {
  const typesCoincide = x && y && typeof x === "object" && typeof y === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => isEqual(x[key], y[key])) : x === y;
};
const areArraysDifferent = (arr1, arr2, key) => {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    const firstFilteredArray = arr1.filter(arr1Item => arr2.some(arr2Item => !isEqual(arr1Item[key], arr2Item[key])));
    const secondFilteredArray = arr2.filter(arr2Item => arr1.some(arr1Item => !isEqual(arr1Item[key], arr2Item[key])));
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
const getValueByPath = (obj, path) => {
  return path.split(".").reduce((res, prop) => {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
const remToPx = rem => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
const deepMerge = (obj1, obj2) => {
  if (!obj2) return obj1;
  let result = {
    ...obj1
  };
  for (let key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null && Object.prototype.hasOwnProperty.call(obj1, key) && !Array.isArray(obj2[key])) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
try {
    // @ts-ignore
    escapeRegExp.displayName = "escapeRegExp";
    // @ts-ignore
    escapeRegExp.__docgenInfo = { "description": "", "displayName": "escapeRegExp", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#escapeRegExp"] = { docgenInfo: escapeRegExp.__docgenInfo, name: "escapeRegExp", path: "src/util/helper.tsx#escapeRegExp" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormGroup/FormGroup.module.scss":
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
 */.FormGroup-module__form-group--ljllJ{position:relative}.FormGroup-module__error-message--LglWN{color:var(--error);display:flex;align-items:flex-end}.FormGroup-module__error-icon--vb0N8{margin-right:.5rem;font-size:1.25rem}.FormGroup-module__error-icon-before--bQe06{margin-right:.5rem}.FormGroup-module__error-icon-after--Eg5Ix{margin-left:.5rem}.FormGroup-module__default-helper--KLKuc{font-size:.75rem;line-height:1.33333333}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-group": `FormGroup-module__form-group--ljllJ`,
	"error-message": `FormGroup-module__error-message--LglWN`,
	"error-icon": `FormGroup-module__error-icon--vb0N8`,
	"error-icon-before": `FormGroup-module__error-icon-before--bQe06`,
	"error-icon-after": `FormGroup-module__error-icon-after--Eg5Ix`,
	"default-helper": `FormGroup-module__default-helper--KLKuc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss":
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
 */div.FormHelperText-module__form-helper-text--CZrGs{color:var(--input-helper-text-color);margin-bottom:0}div.FormHelperText-module__disabled--kjh8t{color:var(--greyed-out)}div.FormHelperText-module__error--uFct6{color:var(--error)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-helper-text": `FormHelperText-module__form-helper-text--CZrGs`,
	"disabled": `FormHelperText-module__disabled--kjh8t`,
	"error": `FormHelperText-module__error--uFct6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss":
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
 */.Label-module__label--jg1cj{cursor:text;color:var(--greyed-out);font-size:var(--font-size)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"label": `Label-module__label--jg1cj`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss":
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
 */.Wrapper-module__sr-only--gan41{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Wrapper-module__hidden--Swgg5{display:none}.Wrapper-module__slide-in--aLlIp{animation:Wrapper-module__slide-in--aLlIp .5s forwards}@media(prefers-reduced-motion: reduce){.Wrapper-module__slide-in--aLlIp{animation-duration:.1ms}}.Wrapper-module__slide-out--IbDrR{animation:Wrapper-module__slide-out--IbDrR .5s forwards}@media(prefers-reduced-motion: reduce){.Wrapper-module__slide-out--IbDrR{animation-duration:.1ms}}@keyframes Wrapper-module__slide-in--aLlIp{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Wrapper-module__slide-out--IbDrR{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Wrapper-module__floating-wrapper--CCTlO{position:relative}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox{font-family:var(--font-family);font-size:1rem;position:absolute;z-index:2;top:1.3125rem;left:.5rem;transform-origin:left top;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;pointer-events:none}@media(prefers-reduced-motion: reduce){.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox{transition-duration:.1ms}}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox.Wrapper-module__error--lj2rr{color:var(--error)}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox.Wrapper-module__disabled--gK2eJ{color:var(--greyed-out)}.Wrapper-module__form-input-label--U58KZ{font-family:var(--font-family);font-size:var(--form-control-font-size);line-height:var(--default-line-height);color:var(--color-blue-grey900);margin-bottom:.25rem;display:inline-block}.Wrapper-module__form-input-label--U58KZ.Wrapper-module__disabled--gK2eJ{color:var(--greyed-out)}.Wrapper-module__wrapper--oGFMA+fieldset,.Wrapper-module__wrapper--oGFMA+.Wrapper-module__wrapper--oGFMA{margin-top:1rem}.Wrapper-module__required--DAxDk:after{content:" *";color:var(--error)}@media only screen and (min-width: 30em){.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox{left:.5rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Wrapper-module__sr-only--gan41`,
	"hidden": `Wrapper-module__hidden--Swgg5`,
	"slide-in": `Wrapper-module__slide-in--aLlIp`,
	"slide-out": `Wrapper-module__slide-out--IbDrR`,
	"floating-wrapper": `Wrapper-module__floating-wrapper--CCTlO`,
	"floating-label": `Wrapper-module__floating-label--klfox`,
	"error": `Wrapper-module__error--lj2rr`,
	"disabled": `Wrapper-module__disabled--gK2eJ`,
	"form-input-label": `Wrapper-module__form-input-label--U58KZ`,
	"wrapper": `Wrapper-module__wrapper--oGFMA`,
	"required": `Wrapper-module__required--DAxDk`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
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
 */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": `Typography-module__typography_style_h1--QRbCJ`,
	"typography_style_h2": `Typography-module__typography_style_h2--gst_1`,
	"typography_style_h3": `Typography-module__typography_style_h3--OMuiN`,
	"typography_style_h4": `Typography-module__typography_style_h4--AK8ry`,
	"typography_style_body": `Typography-module__typography_style_body--RZ14O`,
	"typography_style_body-bold": `Typography-module__typography_style_body-bold--yrfzC`,
	"typography_style_sub-text": `Typography-module__typography_style_sub-text--J284m`,
	"typography_style_code": `Typography-module__typography_style_code--aL5hm`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);