"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9718],{

/***/ "./src/components/Form/FormHelperText/FormHelperText.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": function() { return /* binding */ FormHelperText; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss
var FormHelperText_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormHelperText/FormHelperText.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormHelperText_module/* default */.Z, options);




       /* harmony default export */ var FormHelperText_FormHelperText_module = (FormHelperText_module/* default */.Z && FormHelperText_module/* default.locals */.Z.locals ? FormHelperText_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FormHelperText/FormHelperText.tsx
var _excluded = ["children", "error", "className"];
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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




var FormHelperTextComponent = function FormHelperTextComponent(_ref, ref) {
  var children = _ref.children,
    error = _ref.error,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Typography/* Typography */.Z, _extends({}, rest, {
    ref: ref,
    variant: "sub-text",
    tag: "div",
    className: "".concat(FormHelperText_FormHelperText_module["form-helper-text"], " ").concat(error ? FormHelperText_FormHelperText_module.error : "", " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
var FormHelperText = /*#__PURE__*/react.forwardRef(FormHelperTextComponent);
try {
    // @ts-ignore
    FormHelperText.displayName = "FormHelperText";
    // @ts-ignore
    FormHelperText.__docgenInfo = { "description": "", "displayName": "FormHelperText", "props": { "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormHelperText/FormHelperText.tsx#FormHelperText"] = { docgenInfo: FormHelperText.__docgenInfo, name: "FormHelperText", path: "src/components/Form/FormHelperText/FormHelperText.tsx#FormHelperText" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Label/Label.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": function() { return /* binding */ Label; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss
var Label_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Label_module/* default */.Z, options);




       /* harmony default export */ var Label_Label_module = (Label_module/* default */.Z && Label_module/* default.locals */.Z.locals ? Label_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.tsx
var _excluded = ["children", "className", "hidden"];
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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




var LabelComponent = function LabelComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$hidden = _ref.hidden,
    hidden = _ref$hidden === void 0 ? false : _ref$hidden,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("label", _extends({}, rest, {
    ref: ref,
    className: "".concat(hidden ? readyclasses_module/* default.sr-only */.Z["sr-only"] : "", " ").concat(Label_Label_module.label, " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
var Label = /*#__PURE__*/react.forwardRef(LabelComponent);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": function() { return /* binding */ Wrapper; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormGroup/FormGroup.module.scss
var FormGroup_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormGroup/FormGroup.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormGroup/FormGroup.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormGroup_module/* default */.Z, options);




       /* harmony default export */ var FormGroup_FormGroup_module = (FormGroup_module/* default */.Z && FormGroup_module/* default.locals */.Z.locals ? FormGroup_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/FormHelperText/FormHelperText.tsx + 1 modules
var FormHelperText = __webpack_require__("./src/components/Form/FormHelperText/FormHelperText.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FormGroup/FormGroup.tsx
var _excluded = ["children", "className", "error", "errorMessage", "errorId", "errorMessageIcon", "errorMessageIconPosition", "helperText", "helperId", "helperProps"];
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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





var FormGroupComponent = function FormGroupComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    error = _ref.error,
    errorMessage = _ref.errorMessage,
    errorId = _ref.errorId,
    errorMessageIcon = _ref.errorMessageIcon,
    _ref$errorMessageIcon = _ref.errorMessageIconPosition,
    errorMessageIconPosition = _ref$errorMessageIcon === void 0 ? "before" : _ref$errorMessageIcon,
    helperText = _ref.helperText,
    helperId = _ref.helperId,
    helperProps = _ref.helperProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(FormGroup_FormGroup_module["form-group"], " ").concat(error ? FormGroup_FormGroup_module.error : "", " ").concat(className !== null && className !== void 0 ? className : "")
  }), children, (helperText || errorMessage && error) && /*#__PURE__*/react.createElement("div", {
    className: "".concat(FormGroup_FormGroup_module["default-helper"], " ").concat(helperProps !== null && helperProps !== void 0 && helperProps.className ? helperProps.className : "")
  }, (helperText && !error || helperText && error && !errorMessage) && /*#__PURE__*/react.createElement(FormHelperText/* FormHelperText */.Q, _extends({}, helperProps, {
    className: "",
    id: helperId
  }), (helperProps === null || helperProps === void 0 ? void 0 : helperProps.children) || helperText), error && errorMessage && /*#__PURE__*/react.createElement("span", {
    className: FormGroup_FormGroup_module["error-message"]
  }, /*#__PURE__*/react.createElement("span", {
    className: FormGroup_FormGroup_module.message,
    id: errorId
  }, errorMessageIcon && errorMessageIconPosition === "before" && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: "".concat(FormGroup_FormGroup_module["error-icon"], " ").concat(FormGroup_FormGroup_module["error-icon-before"]),
    icon: errorMessageIcon
  }), errorMessage, errorMessageIcon && errorMessageIconPosition === "after" && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: "".concat(FormGroup_FormGroup_module["error-icon"], " ").concat(FormGroup_FormGroup_module["error-icon-after"]),
    icon: errorMessageIcon
  })))));
};
var FormGroup = /*#__PURE__*/react.forwardRef(FormGroupComponent);
try {
    // @ts-ignore
    FormGroup.displayName = "FormGroup";
    // @ts-ignore
    FormGroup.__docgenInfo = { "description": "", "displayName": "FormGroup", "props": { "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "errorId": { "defaultValue": null, "description": "", "name": "errorId", "required": false, "type": { "name": "string" } }, "errorMessageIcon": { "defaultValue": null, "description": "", "name": "errorMessageIcon", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"eye\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }] } }, "errorMessageIconPosition": { "defaultValue": { value: "before" }, "description": "", "name": "errorMessageIconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"before\"" }, { "value": "\"after\"" }] } }, "helperId": { "defaultValue": null, "description": "", "name": "helperId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormGroup/FormGroup.tsx#FormGroup"] = { docgenInfo: FormGroup.__docgenInfo, name: "FormGroup", path: "src/components/Form/FormGroup/FormGroup.tsx#FormGroup" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Form/Label/Label.tsx + 1 modules
var Label = __webpack_require__("./src/components/Form/Label/Label.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss
var Wrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss

      
      
      
      
      
      
      
      
      

var Wrapper_module_options = {};

Wrapper_module_options.styleTagTransform = (styleTagTransform_default());
Wrapper_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Wrapper_module_options.insert = insertBySelector_default().bind(null, "head");
    
Wrapper_module_options.domAPI = (styleDomAPI_default());
Wrapper_module_options.insertStyleElement = (insertStyleElement_default());

var Wrapper_module_update = injectStylesIntoStyleTag_default()(Wrapper_module/* default */.Z, Wrapper_module_options);




       /* harmony default export */ var Wrapper_Wrapper_module = (Wrapper_module/* default */.Z && Wrapper_module/* default.locals */.Z.locals ? Wrapper_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx
var Wrapper_excluded = ["children", "className", "error", "errorMessage", "errorId", "errorMessageIcon", "errorMessageIconPosition", "helperText", "helperId", "required", "helperProps", "helperIndent", "labelProps", "label", "disabled", "name", "innerClassName"];
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
function Wrapper_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Wrapper_objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function Wrapper_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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

var WrapperComponent = function WrapperComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    error = _ref.error,
    errorMessage = _ref.errorMessage,
    errorId = _ref.errorId,
    errorMessageIcon = _ref.errorMessageIcon,
    errorMessageIconPosition = _ref.errorMessageIconPosition,
    helperText = _ref.helperText,
    helperId = _ref.helperId,
    required = _ref.required,
    helperProps = _ref.helperProps,
    helperIndent = _ref.helperIndent,
    labelProps = _ref.labelProps,
    label = _ref.label,
    disabled = _ref.disabled,
    name = _ref.name,
    innerClassName = _ref.innerClassName,
    rest = Wrapper_objectWithoutProperties(_ref, Wrapper_excluded);
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      return /*#__PURE__*/react.cloneElement(child, {
        disabled: disabled
      });
    });
  };
  var labelClasses = [Wrapper_Wrapper_module["form-input-label"]];
  (labelProps === null || labelProps === void 0 ? void 0 : labelProps.className) && labelClasses.push(labelProps.className);
  required && labelClasses.push(Wrapper_Wrapper_module.required);
  error && labelClasses.push(Wrapper_Wrapper_module.error);
  disabled && labelClasses.push(Wrapper_Wrapper_module.disabled);
  return /*#__PURE__*/react.createElement("div", Wrapper_extends({}, rest, {
    ref: ref,
    className: "".concat(Wrapper_Wrapper_module.wrapper, " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement(FormGroup, {
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
  }, label && /*#__PURE__*/react.createElement(Label/* Label */._, Wrapper_extends({}, labelProps, {
    className: "".concat(Wrapper_Wrapper_module.label, " ").concat(labelClasses.join(" ")),
    htmlFor: name
  }), label), renderChildren())));
};
var Wrapper = /*#__PURE__*/react.forwardRef(WrapperComponent);
try {
    // @ts-ignore
    Wrapper.displayName = "Wrapper";
    // @ts-ignore
    Wrapper.__docgenInfo = { "description": "", "displayName": "Wrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "This does NOT add validation! It simply adds an asterix on the Label!", "name": "required", "required": false, "type": { "name": "boolean" } }, "errorId": { "defaultValue": null, "description": "", "name": "errorId", "required": false, "type": { "name": "string" } }, "errorMessageIcon": { "defaultValue": null, "description": "", "name": "errorMessageIcon", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"eye\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }] } }, "errorMessageIconPosition": { "defaultValue": null, "description": "", "name": "errorMessageIconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"before\"" }, { "value": "\"after\"" }] } }, "helperId": { "defaultValue": null, "description": "", "name": "helperId", "required": false, "type": { "name": "string" } }, "helperIndent": { "defaultValue": null, "description": "", "name": "helperIndent", "required": false, "type": { "name": "number" } }, "labelProps": { "defaultValue": null, "description": "", "name": "labelProps", "required": false, "type": { "name": "Props" } }, "innerClassName": { "defaultValue": null, "description": "", "name": "innerClassName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/Wrapper/Wrapper.tsx#Wrapper"] = { docgenInfo: Wrapper.__docgenInfo, name: "Wrapper", path: "src/components/Form/Wrapper/Wrapper/Wrapper.tsx#Wrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Typography; },
  "p": function() { return /* binding */ validVariants; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.Z, options);




       /* harmony default export */ var Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default.locals */.Z.locals ? Typography_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
var _excluded = ["children", "variant", "tag", "style", "spacing", "className"];
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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




var validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
var TypographyComponent = function TypographyComponent(_ref, ref) {
  var children = _ref.children,
    variant = _ref.variant,
    tag = _ref.tag,
    style = _ref.style,
    spacing = _ref.spacing,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  var styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
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
  var TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: styleWithSpacing,
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
var Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useSpacing; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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

var defaultFactor = 0.25;
var defaultUnit = "rem";
var spacingNumberRegex = /(\d+\.?\d*)+/g;
var useSpacing = function useSpacing(spacingProps, style) {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce(function (prev, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        spacing = _ref2[0],
        multiplier = _ref2[1];
      var matches = String(multiplier).matchAll(spacingNumberRegex);
      var cssSpacingValue = Array.from(matches).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          multiplierValue = _ref4[0];
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, spacing, cssSpacingValue));
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./src/hooks/useWrapper.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ useWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/util/helper.tsx");
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
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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



var useWrapper = function useWrapper() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .y)(20)),
    _useState2 = _slicedToArray(_useState, 1),
    helperId = _useState2[0];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .y)(20)),
    _useState4 = _slicedToArray(_useState3, 1),
    errorId = _useState4[0];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .y)(20)),
    _useState6 = _slicedToArray(_useState5, 1),
    labelId = _useState6[0];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasFocus = _useState8[0],
    setHasFocus = _useState8[1];
  return {
    helperId: helperId,
    errorId: errorId,
    labelId: labelId,
    hasFocus: hasFocus,
    setHasFocus: setHasFocus
  };
};

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": function() { return /* binding */ filterProps; },
/* harmony export */   "MU": function() { return /* binding */ getValueByPath; },
/* harmony export */   "Pb": function() { return /* binding */ isJsonString; },
/* harmony export */   "R3": function() { return /* binding */ areArraysDifferent; },
/* harmony export */   "y": function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx */
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormGroup/FormGroup.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FormGroup-module__form-group--ljllJ{position:relative}.FormGroup-module__error--Zzy2p{color:var(--error)}.FormGroup-module__error-message--LglWN{display:flex;align-items:flex-end}.FormGroup-module__error-icon--vb0N8{margin-right:.5rem;font-size:1.25rem}.FormGroup-module__error-icon-before--bQe06{margin-right:.5rem}.FormGroup-module__error-icon-after--Eg5Ix{margin-left:.5rem}.FormGroup-module__default-helper--KLKuc{font-size:.75rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-group": "FormGroup-module__form-group--ljllJ",
	"error": "FormGroup-module__error--Zzy2p",
	"error-message": "FormGroup-module__error-message--LglWN",
	"error-icon": "FormGroup-module__error-icon--vb0N8",
	"error-icon-before": "FormGroup-module__error-icon-before--bQe06",
	"error-icon-after": "FormGroup-module__error-icon-after--Eg5Ix",
	"default-helper": "FormGroup-module__default-helper--KLKuc"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FormHelperText-module__form-helper-text--CZrGs{margin:0;color:var(--greyed-out)}.FormHelperText-module__error--uFct6{color:var(--error)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-helper-text": "FormHelperText-module__form-helper-text--CZrGs",
	"error": "FormHelperText-module__error--uFct6"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Label-module__label--jg1cj{cursor:text;color:var(--greyed-out);font-size:var(--font-size)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"label": "Label-module__label--jg1cj"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/Wrapper/Wrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Wrapper-module__sr-only--gan41{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Wrapper-module__hidden--Swgg5{display:none}.Wrapper-module__slide-in--aLlIp{animation:Wrapper-module__slide-in--aLlIp .5s forwards}@media(prefers-reduced-motion: reduce){.Wrapper-module__slide-in--aLlIp{animation-duration:.1ms}}.Wrapper-module__slide-out--IbDrR{animation:Wrapper-module__slide-out--IbDrR .5s forwards}@media(prefers-reduced-motion: reduce){.Wrapper-module__slide-out--IbDrR{animation-duration:.1ms}}@keyframes Wrapper-module__slide-in--aLlIp{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Wrapper-module__slide-out--IbDrR{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Wrapper-module__w-6--fXInT{width:6%}.Wrapper-module__w-7--jjsqj{width:7%}.Wrapper-module__w-8--GT13H{width:8%}.Wrapper-module__w-9--_rKrl{width:9%}.Wrapper-module__w-10--cu9f0{width:10%}.Wrapper-module__w-11--Y2JDD{width:11%}.Wrapper-module__w-12--MF64a{width:12%}.Wrapper-module__w-13--gnRSX{width:13%}.Wrapper-module__w-14--Cgk67{width:14%}.Wrapper-module__w-15--QBgMW{width:15%}.Wrapper-module__w-16--hSIwQ{width:16%}.Wrapper-module__w-17--eYFJ6{width:17%}.Wrapper-module__w-18--qwRfT{width:18%}.Wrapper-module__w-19--wYGPu{width:19%}.Wrapper-module__w-20--xSH2M{width:20%}.Wrapper-module__w-21--_6H5T{width:21%}.Wrapper-module__w-22--guuK6{width:22%}.Wrapper-module__w-23--rhzSu{width:23%}.Wrapper-module__w-24--LT_x7{width:24%}.Wrapper-module__w-25--oJEjn{width:25%}.Wrapper-module__w-26--d58C4{width:26%}.Wrapper-module__w-27--G2S8V{width:27%}.Wrapper-module__w-28--BEUpS{width:28%}.Wrapper-module__w-29--I6GYa{width:29%}.Wrapper-module__w-30--pYD9X{width:30%}.Wrapper-module__w-31--PwFFs{width:31%}.Wrapper-module__w-32--ryir6{width:32%}.Wrapper-module__w-33--s9AiB{width:33%}.Wrapper-module__w-34--szaJ9{width:34%}.Wrapper-module__w-35--VuGsK{width:35%}.Wrapper-module__w-36--jx_A7{width:36%}.Wrapper-module__w-37--yNrcl{width:37%}.Wrapper-module__w-38--ZpxFE{width:38%}.Wrapper-module__w-39--fp_KZ{width:39%}.Wrapper-module__w-40--h2FPO{width:40%}.Wrapper-module__w-41--TB9hk{width:41%}.Wrapper-module__w-42--dCiCy{width:42%}.Wrapper-module__w-43--mLZkT{width:43%}.Wrapper-module__w-44--co3E4{width:44%}.Wrapper-module__w-45--bduz4{width:45%}.Wrapper-module__w-46--tVQ6i{width:46%}.Wrapper-module__w-47--w3N2x{width:47%}.Wrapper-module__w-48--gNEjV{width:48%}.Wrapper-module__w-49--UpArb{width:49%}.Wrapper-module__w-50--qRU90{width:50%}.Wrapper-module__w-51--a26uS{width:51%}.Wrapper-module__w-52--umpVJ{width:52%}.Wrapper-module__w-53--bm7y1{width:53%}.Wrapper-module__w-54--GWC3T{width:54%}.Wrapper-module__w-55--VnGDR{width:55%}.Wrapper-module__w-56--AAIUa{width:56%}.Wrapper-module__w-57--gRNP7{width:57%}.Wrapper-module__w-58--OCpap{width:58%}.Wrapper-module__w-59--vd0OO{width:59%}.Wrapper-module__w-60--bvfCS{width:60%}.Wrapper-module__w-61--hTG3i{width:61%}.Wrapper-module__w-62--JvvLC{width:62%}.Wrapper-module__w-63--COH3d{width:63%}.Wrapper-module__w-64--MqEIR{width:64%}.Wrapper-module__w-65--gGSLe{width:65%}.Wrapper-module__w-66--RRaF6{width:66%}.Wrapper-module__w-67--fuTR6{width:67%}.Wrapper-module__w-68--NKw2U{width:68%}.Wrapper-module__w-69--Nc2yV{width:69%}.Wrapper-module__w-70--AdQAS{width:70%}.Wrapper-module__w-71--XYdaz{width:71%}.Wrapper-module__w-72--sjvtK{width:72%}.Wrapper-module__w-73--kYmoS{width:73%}.Wrapper-module__w-74--JNQVJ{width:74%}.Wrapper-module__w-75--LzkBD{width:75%}.Wrapper-module__w-76--MYUGO{width:76%}.Wrapper-module__w-77--GBzEM{width:77%}.Wrapper-module__w-78--P7kki{width:78%}.Wrapper-module__w-79--EIKEs{width:79%}.Wrapper-module__w-80--T1PD1{width:80%}.Wrapper-module__w-81--AyeJ5{width:81%}.Wrapper-module__w-82--q6Xa4{width:82%}.Wrapper-module__w-83--wm72q{width:83%}.Wrapper-module__w-84--T27UZ{width:84%}.Wrapper-module__w-85--R6jbM{width:85%}.Wrapper-module__w-86--VPmZH{width:86%}.Wrapper-module__w-87--EBnAG{width:87%}.Wrapper-module__w-88--Hh3Qu{width:88%}.Wrapper-module__w-89--lgE69{width:89%}.Wrapper-module__w-90--G9mZt{width:90%}.Wrapper-module__w-91--Seyn1{width:91%}.Wrapper-module__w-92--JCEQo{width:92%}.Wrapper-module__w-93--MwiwS{width:93%}.Wrapper-module__w-94--cH97D{width:94%}.Wrapper-module__w-95--Ipnhn{width:95%}.Wrapper-module__w-96--pqkaP{width:96%}.Wrapper-module__w-97--lzGL5{width:97%}.Wrapper-module__w-98--zDiec{width:98%}.Wrapper-module__w-99--zfX1M{width:99%}.Wrapper-module__w-100--cTWll{width:100%}.Wrapper-module__w-101--ZwEpn{width:101%}.Wrapper-module__w-102--BS3oZ{width:102%}.Wrapper-module__w-103--xXTQJ{width:103%}.Wrapper-module__w-104--Nc2A3{width:104%}.Wrapper-module__w-105--HZxko{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Wrapper-module__floating-wrapper--CCTlO{position:relative}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox{font-family:var(--font-family);font-size:1rem;position:absolute;z-index:2;top:1.3125rem;left:.833em;transform-origin:left top;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;pointer-events:none}@media(prefers-reduced-motion: reduce){.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox{transition-duration:.1ms}}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox.Wrapper-module__floating-label-active--z5Qt6{font-size:.75rem;transform:translateY(-0.8rem);color:var(--default)}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox.Wrapper-module__error--lj2rr{color:var(--error)}.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox.Wrapper-module__disabled--gK2eJ{color:var(--greyed-out)}.Wrapper-module__form-input-label--U58KZ{font-family:var(--font-family);font-size:var(--form-control-font-size);line-height:var(--default-line-height);color:var(--color-blue-grey900);margin-bottom:.25rem;display:inline-block}.Wrapper-module__form-input-label--U58KZ.Wrapper-module__disabled--gK2eJ{color:var(--greyed-out)}.Wrapper-module__wrapper--oGFMA+fieldset,.Wrapper-module__wrapper--oGFMA+.Wrapper-module__wrapper--oGFMA{margin-top:1rem}.Wrapper-module__required--DAxDk:after{content:\" *\";color:var(--error)}@media only screen and (min-width: 30em){.Wrapper-module__floating-wrapper--CCTlO .Wrapper-module__floating-label--klfox{left:.833em}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Wrapper-module__sr-only--gan41",
	"hidden": "Wrapper-module__hidden--Swgg5",
	"slide-in": "Wrapper-module__slide-in--aLlIp",
	"slide-out": "Wrapper-module__slide-out--IbDrR",
	"w-6": "Wrapper-module__w-6--fXInT",
	"w-7": "Wrapper-module__w-7--jjsqj",
	"w-8": "Wrapper-module__w-8--GT13H",
	"w-9": "Wrapper-module__w-9--_rKrl",
	"w-10": "Wrapper-module__w-10--cu9f0",
	"w-11": "Wrapper-module__w-11--Y2JDD",
	"w-12": "Wrapper-module__w-12--MF64a",
	"w-13": "Wrapper-module__w-13--gnRSX",
	"w-14": "Wrapper-module__w-14--Cgk67",
	"w-15": "Wrapper-module__w-15--QBgMW",
	"w-16": "Wrapper-module__w-16--hSIwQ",
	"w-17": "Wrapper-module__w-17--eYFJ6",
	"w-18": "Wrapper-module__w-18--qwRfT",
	"w-19": "Wrapper-module__w-19--wYGPu",
	"w-20": "Wrapper-module__w-20--xSH2M",
	"w-21": "Wrapper-module__w-21--_6H5T",
	"w-22": "Wrapper-module__w-22--guuK6",
	"w-23": "Wrapper-module__w-23--rhzSu",
	"w-24": "Wrapper-module__w-24--LT_x7",
	"w-25": "Wrapper-module__w-25--oJEjn",
	"w-26": "Wrapper-module__w-26--d58C4",
	"w-27": "Wrapper-module__w-27--G2S8V",
	"w-28": "Wrapper-module__w-28--BEUpS",
	"w-29": "Wrapper-module__w-29--I6GYa",
	"w-30": "Wrapper-module__w-30--pYD9X",
	"w-31": "Wrapper-module__w-31--PwFFs",
	"w-32": "Wrapper-module__w-32--ryir6",
	"w-33": "Wrapper-module__w-33--s9AiB",
	"w-34": "Wrapper-module__w-34--szaJ9",
	"w-35": "Wrapper-module__w-35--VuGsK",
	"w-36": "Wrapper-module__w-36--jx_A7",
	"w-37": "Wrapper-module__w-37--yNrcl",
	"w-38": "Wrapper-module__w-38--ZpxFE",
	"w-39": "Wrapper-module__w-39--fp_KZ",
	"w-40": "Wrapper-module__w-40--h2FPO",
	"w-41": "Wrapper-module__w-41--TB9hk",
	"w-42": "Wrapper-module__w-42--dCiCy",
	"w-43": "Wrapper-module__w-43--mLZkT",
	"w-44": "Wrapper-module__w-44--co3E4",
	"w-45": "Wrapper-module__w-45--bduz4",
	"w-46": "Wrapper-module__w-46--tVQ6i",
	"w-47": "Wrapper-module__w-47--w3N2x",
	"w-48": "Wrapper-module__w-48--gNEjV",
	"w-49": "Wrapper-module__w-49--UpArb",
	"w-50": "Wrapper-module__w-50--qRU90",
	"w-51": "Wrapper-module__w-51--a26uS",
	"w-52": "Wrapper-module__w-52--umpVJ",
	"w-53": "Wrapper-module__w-53--bm7y1",
	"w-54": "Wrapper-module__w-54--GWC3T",
	"w-55": "Wrapper-module__w-55--VnGDR",
	"w-56": "Wrapper-module__w-56--AAIUa",
	"w-57": "Wrapper-module__w-57--gRNP7",
	"w-58": "Wrapper-module__w-58--OCpap",
	"w-59": "Wrapper-module__w-59--vd0OO",
	"w-60": "Wrapper-module__w-60--bvfCS",
	"w-61": "Wrapper-module__w-61--hTG3i",
	"w-62": "Wrapper-module__w-62--JvvLC",
	"w-63": "Wrapper-module__w-63--COH3d",
	"w-64": "Wrapper-module__w-64--MqEIR",
	"w-65": "Wrapper-module__w-65--gGSLe",
	"w-66": "Wrapper-module__w-66--RRaF6",
	"w-67": "Wrapper-module__w-67--fuTR6",
	"w-68": "Wrapper-module__w-68--NKw2U",
	"w-69": "Wrapper-module__w-69--Nc2yV",
	"w-70": "Wrapper-module__w-70--AdQAS",
	"w-71": "Wrapper-module__w-71--XYdaz",
	"w-72": "Wrapper-module__w-72--sjvtK",
	"w-73": "Wrapper-module__w-73--kYmoS",
	"w-74": "Wrapper-module__w-74--JNQVJ",
	"w-75": "Wrapper-module__w-75--LzkBD",
	"w-76": "Wrapper-module__w-76--MYUGO",
	"w-77": "Wrapper-module__w-77--GBzEM",
	"w-78": "Wrapper-module__w-78--P7kki",
	"w-79": "Wrapper-module__w-79--EIKEs",
	"w-80": "Wrapper-module__w-80--T1PD1",
	"w-81": "Wrapper-module__w-81--AyeJ5",
	"w-82": "Wrapper-module__w-82--q6Xa4",
	"w-83": "Wrapper-module__w-83--wm72q",
	"w-84": "Wrapper-module__w-84--T27UZ",
	"w-85": "Wrapper-module__w-85--R6jbM",
	"w-86": "Wrapper-module__w-86--VPmZH",
	"w-87": "Wrapper-module__w-87--EBnAG",
	"w-88": "Wrapper-module__w-88--Hh3Qu",
	"w-89": "Wrapper-module__w-89--lgE69",
	"w-90": "Wrapper-module__w-90--G9mZt",
	"w-91": "Wrapper-module__w-91--Seyn1",
	"w-92": "Wrapper-module__w-92--JCEQo",
	"w-93": "Wrapper-module__w-93--MwiwS",
	"w-94": "Wrapper-module__w-94--cH97D",
	"w-95": "Wrapper-module__w-95--Ipnhn",
	"w-96": "Wrapper-module__w-96--pqkaP",
	"w-97": "Wrapper-module__w-97--lzGL5",
	"w-98": "Wrapper-module__w-98--zDiec",
	"w-99": "Wrapper-module__w-99--zfX1M",
	"w-100": "Wrapper-module__w-100--cTWll",
	"w-101": "Wrapper-module__w-101--ZwEpn",
	"w-102": "Wrapper-module__w-102--BS3oZ",
	"w-103": "Wrapper-module__w-103--xXTQJ",
	"w-104": "Wrapper-module__w-104--Nc2A3",
	"w-105": "Wrapper-module__w-105--HZxko",
	"floating-wrapper": "Wrapper-module__floating-wrapper--CCTlO",
	"floating-label": "Wrapper-module__floating-label--klfox",
	"floating-label-active": "Wrapper-module__floating-label-active--z5Qt6",
	"error": "Wrapper-module__error--lj2rr",
	"disabled": "Wrapper-module__disabled--gK2eJ",
	"form-input-label": "Wrapper-module__form-input-label--U58KZ",
	"wrapper": "Wrapper-module__wrapper--oGFMA",
	"required": "Wrapper-module__required--DAxDk"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": "Typography-module__typography_style_h1--QRbCJ",
	"typography_style_h2": "Typography-module__typography_style_h2--gst_1",
	"typography_style_h3": "Typography-module__typography_style_h3--OMuiN",
	"typography_style_h4": "Typography-module__typography_style_h4--AK8ry",
	"typography_style_body": "Typography-module__typography_style_body--RZ14O",
	"typography_style_body-bold": "Typography-module__typography_style_body-bold--yrfzC",
	"typography_style_sub-text": "Typography-module__typography_style_sub-text--J284m",
	"typography_style_code": "Typography-module__typography_style_code--aL5hm"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);