"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2310],{

/***/ "./src/components/Form/Checkbox/Checkbox.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": function() { return /* binding */ Checkbox; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Checkbox/Checkbox.module.scss
var Checkbox_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Checkbox/Checkbox.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Checkbox/Checkbox.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Checkbox_module/* default */.Z, options);




       /* harmony default export */ var Checkbox_Checkbox_module = (Checkbox_module/* default */.Z && Checkbox_module/* default.locals */.Z.locals ? Checkbox_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useFormSelector.ts
var useFormSelector = __webpack_require__("./src/hooks/useFormSelector.ts");
// EXTERNAL MODULE: ./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx + 1 modules
var FormSelectorWrapper = __webpack_require__("./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Checkbox/Checkbox.tsx
var _excluded = ["children", "name", "helperText", "helperProps", "indeterminate", "parentErrorId", "errorMessage", "disabled", "label", "parentHelperId", "className", "error", "checked", "formSelectorWrapperProps", "onChange"];
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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






var isToggle = function isToggle(children) {
  var _props;
  return !!(children !== null && children !== void 0 && (_props = children.props) !== null && _props !== void 0 && _props["data-toggle"]);
};
var CheckboxComponent = function CheckboxComponent(_ref, ref) {
  var children = _ref.children,
    name = _ref.name,
    helperText = _ref.helperText,
    helperProps = _ref.helperProps,
    indeterminate = _ref.indeterminate,
    parentErrorId = _ref.parentErrorId,
    errorMessage = _ref.errorMessage,
    disabled = _ref.disabled,
    label = _ref.label,
    parentHelperId = _ref.parentHelperId,
    className = _ref.className,
    error = _ref.error,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    formSelectorWrapperProps = _ref.formSelectorWrapperProps,
    onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useFormSelector = (0,useFormSelector/* useFormSelector */.H)({
      name: name,
      helperText: helperText,
      parentErrorId: parentErrorId,
      errorMessage: errorMessage,
      error: error,
      parentHelperId: parentHelperId
    }),
    errorId = _useFormSelector.errorId,
    identifier = _useFormSelector.identifier,
    describedBy = _useFormSelector.describedBy;
  (0,react.useEffect)(function () {
    if (!name) {
      throw new Error("Please pass a 'name' prop to your <Checkbox> component.");
    }
    if (_typeof(children) === "object" && !isToggle(children) && indeterminate === undefined) {
      throw new Error("If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop.");
    }
  }, []);
  var determineLabel = function determineLabel() {
    // this should be temporary, for backwards compatibility;
    // once the components implementing checkboxes in microfrontends are updated, only label should be returned
    if (label) {
      return label;
    } else if (typeof children === "string") {
      return children;
    }
  };
  var renderNestedCheckboxes = function renderNestedCheckboxes() {
    return /*#__PURE__*/react.createElement("ul", {
      className: Checkbox_Checkbox_module["checkbox-list"]
    }, react.Children.map(children, function (child) {
      return /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(Checkbox, _extends({}, child.props, {
        parentHelperId: parentHelperId,
        parentErrorId: parentErrorId,
        error: error,
        disabled: child.props.disabled ? child.props.disabled : disabled
      }), child.props.children));
    }));
  };
  var onChangeHandler = function onChangeHandler(event) {
    if (disabled) {
      return;
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  var renderToggle = function renderToggle() {
    return react.Children.toArray(children).filter(isToggle);
  };
  var iconClasses = [Checkbox_Checkbox_module.input, disabled ? Checkbox_Checkbox_module.disabled : ""];

  /** Default return value is the default checkbox */
  return /*#__PURE__*/react.createElement(FormSelectorWrapper/* FormSelectorWrapper */.y, _extends({}, formSelectorWrapperProps, {
    className: "".concat(Checkbox_Checkbox_module["checkbox-wrapper"], " ").concat(className ? className : ""),
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
    nestedChildren: _typeof(children) === "object" && !isToggle(children) && renderNestedCheckboxes()
  }), /*#__PURE__*/react.createElement("input", _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    className: "".concat(Checkbox_Checkbox_module["native-input"], " ").concat(error ? Checkbox_Checkbox_module.error : ""),
    checked: checked,
    onChange: onChangeHandler,
    "aria-invalid": error,
    "aria-checked": indeterminate ? "mixed" : checked,
    "aria-describedby": describedBy,
    id: "".concat(identifier, "-checkbox"),
    name: name,
    type: "checkbox"
  })), renderToggle(), indeterminate && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: iconClasses.join(" "),
    icon: Icon/* Icons.MinusSquare */.P.MinusSquare
  }), checked && !indeterminate && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: iconClasses.join(" "),
    icon: Icon/* Icons.CheckmarkSquare */.P.CheckmarkSquare
  }), !checked && !indeterminate && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: iconClasses.join(" "),
    icon: Icon/* Icons.Square */.P.Square
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "".concat(identifier, "-checkbox")
  }, determineLabel()));
};
var Checkbox = /*#__PURE__*/react.forwardRef(CheckboxComponent);
try {
    // @ts-ignore
    Checkbox.displayName = "Checkbox";
    // @ts-ignore
    Checkbox.__docgenInfo = { "description": "", "displayName": "Checkbox", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string | ReactElement<any, string | JSXElementConstructor<any>>" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "indeterminate": { "defaultValue": null, "description": "", "name": "indeterminate", "required": false, "type": { "name": "boolean" } }, "formSelectorWrapperProps": { "defaultValue": null, "description": "", "name": "formSelectorWrapperProps", "required": false, "type": { "name": "Props" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Checkbox/Checkbox.tsx#Checkbox"] = { docgenInfo: Checkbox.__docgenInfo, name: "Checkbox", path: "src/components/Form/Checkbox/Checkbox.tsx#Checkbox" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": function() { return /* binding */ FormSelectorWrapper; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss
var FormSelectorWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormSelectorWrapper_module/* default */.Z, options);




       /* harmony default export */ var FormSelectorWrapper_FormSelectorWrapper_module = (FormSelectorWrapper_module/* default */.Z && FormSelectorWrapper_module/* default.locals */.Z.locals ? FormSelectorWrapper_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx
var _excluded = ["children", "className", "nestedChildren", "containerProps", "helperProps", "error", "disabled", "helperText", "errorMessage", "parentErrorId", "errorId", "identifier"];
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





var FormSelectorWrapperComponent = function FormSelectorWrapperComponent(_ref, ref) {
  var _helperProps$ref, _helperProps$classNam;
  var children = _ref.children,
    className = _ref.className,
    nestedChildren = _ref.nestedChildren,
    containerProps = _ref.containerProps,
    helperProps = _ref.helperProps,
    error = _ref.error,
    disabled = _ref.disabled,
    helperText = _ref.helperText,
    errorMessage = _ref.errorMessage,
    parentErrorId = _ref.parentErrorId,
    errorId = _ref.errorId,
    identifier = _ref.identifier,
    rest = _objectWithoutProperties(_ref, _excluded);
  var helperRef = (_helperProps$ref = helperProps === null || helperProps === void 0 ? void 0 : helperProps.ref) !== null && _helperProps$ref !== void 0 ? _helperProps$ref : /*#__PURE__*/(0,react.createRef)();
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(error ? FormSelectorWrapper_FormSelectorWrapper_module.error : "", " ").concat(disabled ? FormSelectorWrapper_FormSelectorWrapper_module.disabled : "", " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", containerProps, children), (helperText || (helperProps === null || helperProps === void 0 ? void 0 : helperProps.children)) && (!error || parentErrorId || !errorMessage) && /*#__PURE__*/react.createElement(FormHelperText/* FormHelperText */.Q, _extends({}, helperProps, {
    ref: helperRef,
    id: "".concat(identifier),
    className: "".concat(FormSelectorWrapper_FormSelectorWrapper_module["helper-text"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ").concat(error ? FormSelectorWrapper_FormSelectorWrapper_module.error : "")
  }), (helperProps === null || helperProps === void 0 ? void 0 : helperProps.children) || helperText), errorMessage && !parentErrorId && error && /*#__PURE__*/react.createElement("span", {
    className: FormSelectorWrapper_FormSelectorWrapper_module["error-message"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: FormSelectorWrapper_FormSelectorWrapper_module["error-icon"],
    icon: Icon/* Icons.Error */.P.Error
  }), /*#__PURE__*/react.createElement("span", {
    id: errorId
  }, errorMessage)), nestedChildren);
};
var FormSelectorWrapper = /*#__PURE__*/react.forwardRef(FormSelectorWrapperComponent);
try {
    // @ts-ignore
    FormSelectorWrapper.displayName = "FormSelectorWrapper";
    // @ts-ignore
    FormSelectorWrapper.__docgenInfo = { "description": "", "displayName": "FormSelectorWrapper", "props": { "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } }, "containerProps": { "defaultValue": null, "description": "", "name": "containerProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; } & KeyValuePair)" } }, "nestedChildren": { "defaultValue": null, "description": "", "name": "nestedChildren", "required": false, "type": { "name": "ReactNode" } }, "errorId": { "defaultValue": null, "description": "", "name": "errorId", "required": false, "type": { "name": "string" } }, "identifier": { "defaultValue": null, "description": "", "name": "identifier", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx#FormSelectorWrapper"] = { docgenInfo: FormSelectorWrapper.__docgenInfo, name: "FormSelectorWrapper", path: "src/components/Form/FormSelectorWrapper/FormSelectorWrapper.tsx#FormSelectorWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useFormSelector.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ useFormSelector; }
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



var useFormSelector = function useFormSelector(configObject) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .y)(15, configObject.name)),
    _useState2 = _slicedToArray(_useState, 1),
    identifier = _useState2[0];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    describedBy = _useState4[0],
    setDescribedBy = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_util_helper__WEBPACK_IMPORTED_MODULE_1__/* .generateID */ .y)(15, configObject.errorMessage)),
    _useState6 = _slicedToArray(_useState5, 1),
    errorId = _useState6[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
    describedBy: describedBy,
    errorId: errorId,
    identifier: identifier
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Checkbox/Checkbox.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Checkbox-module__checkbox-wrapper--_6Zjq{position:relative}.Checkbox-module__checkbox-wrapper--_6Zjq+.Checkbox-module__checkbox-wrapper--_6Zjq{margin-top:1.25rem}.Checkbox-module__checkbox-container--H4shH{display:flex;align-items:center}.Checkbox-module__checkbox-container--H4shH label{display:inline-block;margin-left:.5rem;user-select:none;font-size:var(--font-size);font-family:var(--font-family)}.Checkbox-module__checkbox-list--WZ3mD{padding:0;margin:1.25rem 0 0 1.75rem;list-style:none}.Checkbox-module__checkbox-list--WZ3mD li+li{margin-top:1.25rem}.Checkbox-module__native-input--sCuK6{position:absolute;top:0;left:0;opacity:0;margin:0;width:1.25rem;height:1.25rem}.Checkbox-module__native-input--sCuK6:checked+*{color:var(--color-primary)}.Checkbox-module__native-input--sCuK6:focus-visible+*{border-radius:2px;outline:1px solid var(--color-focus);outline-offset:1px}.Checkbox-module__native-input--sCuK6.Checkbox-module__error--vVzp_:focus-visible+*{outline-color:var(--color-error)}.Checkbox-module__input--GASf2{font-size:1.25rem;pointer-events:none}.Checkbox-module__disabled--ZcHFe{color:var(--disabled)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkbox-wrapper": "Checkbox-module__checkbox-wrapper--_6Zjq",
	"checkbox-container": "Checkbox-module__checkbox-container--H4shH",
	"checkbox-list": "Checkbox-module__checkbox-list--WZ3mD",
	"native-input": "Checkbox-module__native-input--sCuK6",
	"error": "Checkbox-module__error--vVzp_",
	"input": "Checkbox-module__input--GASf2",
	"disabled": "Checkbox-module__disabled--ZcHFe"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormSelectorWrapper/FormSelectorWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FormSelectorWrapper-module__error--pT3qn{color:var(--error)}.FormSelectorWrapper-module__helper-text--rQDvI{margin-top:.25rem;margin-left:1.75rem}.FormSelectorWrapper-module__error-message--MjwnD{margin-top:1.25rem;display:flex;align-items:flex-end}.FormSelectorWrapper-module__error-icon--NXu8l{margin-right:.5rem;font-size:1.25rem}.FormSelectorWrapper-module__disabled--kRGk8 input{color:var(--disabled)}.FormSelectorWrapper-module__disabled--kRGk8 input:disabled{cursor:not-allowed}.FormSelectorWrapper-module__disabled--kRGk8 label{cursor:not-allowed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"error": "FormSelectorWrapper-module__error--pT3qn",
	"helper-text": "FormSelectorWrapper-module__helper-text--rQDvI",
	"error-message": "FormSelectorWrapper-module__error-message--MjwnD",
	"error-icon": "FormSelectorWrapper-module__error-icon--NXu8l",
	"disabled": "FormSelectorWrapper-module__disabled--kRGk8"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);