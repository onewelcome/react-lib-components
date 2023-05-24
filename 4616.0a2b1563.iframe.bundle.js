"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4616],{

/***/ "./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ BaseModalActions; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss
var BaseModalActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalActions_module/* default */.Z, options);




       /* harmony default export */ var BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.Z && BaseModalActions_module/* default.locals */.Z.locals ? BaseModalActions_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
var _excluded = ["children", "className"];
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



var BaseModalActionsComponent = function BaseModalActionsComponent(_ref, ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(BaseModalActions_BaseModalActions_module.actions, " ").concat(className)
  }), children);
};
var BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
try {
    // @ts-ignore
    BaseModalActions.displayName = "BaseModalActions";
    // @ts-ignore
    BaseModalActions.__docgenInfo = { "description": "", "displayName": "BaseModalActions", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions"] = { docgenInfo: BaseModalActions.__docgenInfo, name: "BaseModalActions", path: "src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/Dialog/Dialog.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": function() { return /* binding */ Dialog; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 1 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss
var DialogActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DialogActions_module/* default */.Z, options);




       /* harmony default export */ var DialogActions_DialogActions_module = (DialogActions_module/* default */.Z && DialogActions_module/* default.locals */.Z.locals ? DialogActions_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogActions/DialogActions.tsx
var _excluded = ["children", "align"];
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




var DialogActionsComponent = function DialogActionsComponent(_ref, ref) {
  var children = _ref.children,
    align = _ref.align,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.u, _extends({}, rest, {
    ref: ref,
    className: "".concat(DialogActions_DialogActions_module.actions).concat(align === "left" ? " " + DialogActions_DialogActions_module.left : "")
  }), children);
};
var DialogActions = /*#__PURE__*/react.forwardRef(DialogActionsComponent);
try {
    // @ts-ignore
    DialogActions.displayName = "DialogActions";
    // @ts-ignore
    DialogActions.__docgenInfo = { "description": "", "displayName": "DialogActions", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Dialog/DialogActions/DialogActions.tsx#DialogActions"] = { docgenInfo: DialogActions.__docgenInfo, name: "DialogActions", path: "src/components/Notifications/Dialog/DialogActions/DialogActions.tsx#DialogActions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/Dialog.module.scss
var Dialog_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/Dialog.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/Dialog.module.scss

      
      
      
      
      
      
      
      
      

var Dialog_module_options = {};

Dialog_module_options.styleTagTransform = (styleTagTransform_default());
Dialog_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Dialog_module_options.insert = insertBySelector_default().bind(null, "head");
    
Dialog_module_options.domAPI = (styleDomAPI_default());
Dialog_module_options.insertStyleElement = (insertStyleElement_default());

var Dialog_module_update = injectStylesIntoStyleTag_default()(Dialog_module/* default */.Z, Dialog_module_options);




       /* harmony default export */ var Dialog_Dialog_module = (Dialog_module/* default */.Z && Dialog_module/* default.locals */.Z.locals ? Dialog_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss
var DialogTitle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss

      
      
      
      
      
      
      
      
      

var DialogTitle_module_options = {};

DialogTitle_module_options.styleTagTransform = (styleTagTransform_default());
DialogTitle_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DialogTitle_module_options.insert = insertBySelector_default().bind(null, "head");
    
DialogTitle_module_options.domAPI = (styleDomAPI_default());
DialogTitle_module_options.insertStyleElement = (insertStyleElement_default());

var DialogTitle_module_update = injectStylesIntoStyleTag_default()(DialogTitle_module/* default */.Z, DialogTitle_module_options);




       /* harmony default export */ var DialogTitle_DialogTitle_module = (DialogTitle_module/* default */.Z && DialogTitle_module/* default.locals */.Z.locals ? DialogTitle_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogTitle/DialogTitle.tsx
var DialogTitle_excluded = ["id", "title"];
function DialogTitle_extends() {
  DialogTitle_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DialogTitle_extends.apply(this, arguments);
}
function DialogTitle_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DialogTitle_objectWithoutPropertiesLoose(source, excluded);
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
function DialogTitle_objectWithoutPropertiesLoose(source, excluded) {
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




var DialogTitleComponent = function DialogTitleComponent(_ref, ref) {
  var id = _ref.id,
    title = _ref.title,
    rest = DialogTitle_objectWithoutProperties(_ref, DialogTitle_excluded);
  return /*#__PURE__*/react.createElement("div", DialogTitle_extends({}, rest, {
    ref: ref,
    className: DialogTitle_DialogTitle_module.header
  }), /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: id,
    className: DialogTitle_DialogTitle_module.title,
    tag: "h1",
    variant: "h4"
  }, title));
};
var DialogTitle = /*#__PURE__*/react.forwardRef(DialogTitleComponent);
try {
    // @ts-ignore
    DialogTitle.displayName = "DialogTitle";
    // @ts-ignore
    DialogTitle.__docgenInfo = { "description": "", "displayName": "DialogTitle", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Dialog/DialogTitle/DialogTitle.tsx#DialogTitle"] = { docgenInfo: DialogTitle.__docgenInfo, name: "DialogTitle", path: "src/components/Notifications/Dialog/DialogTitle/DialogTitle.tsx#DialogTitle" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContext.ts
var BaseModalContext = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContext.ts");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/Dialog.tsx
var Dialog_excluded = ["id", "open", "children", "alignActions", "onClose", "title", "primaryAction", "secondaryAction", "zIndex", "disableEscapeKeyDown"],
  _excluded2 = ["label"],
  _excluded3 = ["label"];
function Dialog_extends() {
  Dialog_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Dialog_extends.apply(this, arguments);
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
function Dialog_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Dialog_objectWithoutPropertiesLoose(source, excluded);
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
function Dialog_objectWithoutPropertiesLoose(source, excluded) {
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










var DialogComponent = function DialogComponent(_ref, ref) {
  var id = _ref.id,
    open = _ref.open,
    children = _ref.children,
    alignActions = _ref.alignActions,
    onClose = _ref.onClose,
    title = _ref.title,
    primaryAction = _ref.primaryAction,
    secondaryAction = _ref.secondaryAction,
    zIndex = _ref.zIndex,
    _ref$disableEscapeKey = _ref.disableEscapeKeyDown,
    disableEscapeKeyDown = _ref$disableEscapeKey === void 0 ? true : _ref$disableEscapeKey,
    rest = Dialog_objectWithoutProperties(_ref, Dialog_excluded);
  var _useState = (0,react.useState)(id !== null && id !== void 0 ? id : (0,helper/* generateID */.y)(20)),
    _useState2 = _slicedToArray(_useState, 1),
    dialogId = _useState2[0];
  var primaryLabel = primaryAction.label,
    restOfPrimaryAction = Dialog_objectWithoutProperties(primaryAction, _excluded2);
  var PrimaryButton = /*#__PURE__*/react.createElement(Button/* Button */.z, Dialog_extends({
    key: "primary"
  }, restOfPrimaryAction), primaryLabel);
  var TertiaryButton = secondaryAction && function () {
    var secondaryLabel = secondaryAction.label,
      restOfSecondaryAction = Dialog_objectWithoutProperties(secondaryAction, _excluded3);
    return /*#__PURE__*/react.createElement(Button/* Button */.z, Dialog_extends({
      key: "tertiary",
      variant: "text"
    }, restOfSecondaryAction), secondaryLabel);
  }();
  var onHiddenInputKeyPress = function onHiddenInputKeyPress(event) {
    /** It has to be here because then we will need to check if user doesn't click tab to select action button and want to do another action then primary one? */
    if (event.key === "Enter") {
      primaryAction.onClick();
    }
  };
  return /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, Dialog_extends({}, rest, {
    ref: ref,
    id: dialogId,
    className: Dialog_Dialog_module.dialog,
    containerProps: {
      className: Dialog_Dialog_module.container
    },
    open: open,
    disableBackdrop: true,
    onClose: onClose,
    zIndex: zIndex,
    disableEscapeKeyDown: disableEscapeKeyDown
  }), /*#__PURE__*/react.createElement(DialogTitle, {
    id: (0,BaseModalContext/* labelId */.j)(dialogId),
    title: title
  }), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */.v, {
    id: (0,BaseModalContext/* descriptionId */.S)(dialogId),
    className: Dialog_Dialog_module.content,
    disableAutoFocus: true
  }, children), /*#__PURE__*/react.createElement(DialogActions, {
    align: alignActions
  }, alignActions === "left" ? [PrimaryButton, TertiaryButton] : [TertiaryButton, PrimaryButton]), /*#__PURE__*/react.createElement("input", {
    autoFocus: true,
    "aria-hidden": true,
    style: {
      position: "absolute",
      width: 0,
      height: 0,
      opacity: 0
    },
    maxLength: 0,
    tabIndex: -1,
    onKeyPress: onHiddenInputKeyPress
  }));
};
var Dialog = /*#__PURE__*/react.forwardRef(DialogComponent);
try {
    // @ts-ignore
    Dialog.displayName = "Dialog";
    // @ts-ignore
    Dialog.__docgenInfo = { "description": "", "displayName": "Dialog", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "() => void" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "disableEscapeKeyDown": { "defaultValue": { value: "true" }, "description": "", "name": "disableEscapeKeyDown", "required": false, "type": { "name": "boolean" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } }, "alignActions": { "defaultValue": null, "description": "", "name": "alignActions", "required": true, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "primaryAction": { "defaultValue": null, "description": "", "name": "primaryAction", "required": true, "type": { "name": "Action" } }, "secondaryAction": { "defaultValue": null, "description": "", "name": "secondaryAction", "required": false, "type": { "name": "Action" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Dialog/Dialog.tsx#Dialog"] = { docgenInfo: Dialog.__docgenInfo, name: "Dialog", path: "src/components/Notifications/Dialog/Dialog.tsx#Dialog" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalActions-module__actions--A4L3O{margin:1.875rem 1.25rem 1.875rem 1.25rem;display:flex;justify-content:flex-end}.BaseModalActions-module__actions--A4L3O>*{margin-left:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": "BaseModalActions-module__actions--A4L3O"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/Dialog.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Dialog-module__dialog--faaWB{align-items:center}@media only screen and (min-width: 50em){.Dialog-module__container--ZuvaX{width:auto;max-width:440px;margin-top:0;max-height:90%}}.Dialog-module__content--hPfM_{padding-top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"dialog": "Dialog-module__dialog--faaWB",
	"container": "Dialog-module__container--ZuvaX",
	"content": "Dialog-module__content--hPfM_"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DialogActions-module__actions--AtqlN{margin:1.5rem 1.25rem 1.25rem}.DialogActions-module__actions--AtqlN.DialogActions-module__left--ySqis{justify-content:flex-start}.DialogActions-module__actions--AtqlN *+*{margin-left:1.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": "DialogActions-module__actions--AtqlN",
	"left": "DialogActions-module__left--ySqis"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DialogTitle-module__header--Y1sRh{margin:1.5rem 1.25rem 1.25rem}.DialogTitle-module__title--suZdL{margin:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "DialogTitle-module__header--Y1sRh",
	"title": "DialogTitle-module__title--suZdL"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);