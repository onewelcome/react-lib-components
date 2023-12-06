"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[6246],{

/***/ "./src/components/Button/BaseButton.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: function() { return /* binding */ BaseButton; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseButton_module/* default */.Z, options);




       /* harmony default export */ var Button_BaseButton_module = (BaseButton_module/* default */.Z && BaseButton_module/* default */.Z.locals ? BaseButton_module/* default */.Z.locals : undefined);

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


var Spinner = function Spinner(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({}, props, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8323 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.2918 23.4127C6.49076 22.8275 4.85378 21.8243 3.51472 20.4853C2.17565 19.1462 1.17251 17.5092 0.587322 15.7082C0.00212849 13.9072 -0.148504 11.9932 0.14774 10.1228C0.443984 8.25238 1.17869 6.47863 2.2918 4.94658L3.91307 6.1245C2.98585 7.4007 2.37384 8.87823 2.12707 10.4363C1.8803 11.9943 2.00577 13.5887 2.49324 15.0889C2.9807 16.5892 3.81632 17.9528 4.93176 19.0682C6.0472 20.1837 7.4108 21.0193 8.91107 21.5068C10.4113 21.9942 12.0057 22.1197 13.5637 21.8729C15.1218 21.6262 16.5993 21.0141 17.8755 20.0869C19.1517 19.1597 20.1903 17.9436 20.9065 16.5381C21.6227 15.1326 21.996 13.5775 21.996 12H24Z",
    fill: "#5D607E"
  }));
};
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
var _excluded = ["children", "type", "className", "loading", "disabled"];
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




var BaseButtonComponent = function BaseButtonComponent(_ref, ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    className = _ref.className,
    loading = _ref.loading,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var validTypes = ["submit", "button", "reset"];
  var isDisabled = disabled !== null && disabled !== void 0 ? disabled : loading;
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
var BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Button/IconButton.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: function() { return /* binding */ IconButton; }
});

// UNUSED EXPORTS: IconButtonComponent

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Button/BaseButton.tsx + 2 modules
var BaseButton = __webpack_require__("./src/components/Button/BaseButton.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/IconButton.module.scss
var IconButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/IconButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/IconButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(IconButton_module/* default */.Z, options);




       /* harmony default export */ var Button_IconButton_module = (IconButton_module/* default */.Z && IconButton_module/* default */.Z.locals ? IconButton_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/IconButton.tsx
var _excluded = ["children", "color", "variant", "iconSize", "title", "className"];
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





var IconButtonComponent = function IconButtonComponent(_ref, ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "text" : _ref$variant,
    _ref$iconSize = _ref.iconSize,
    iconSize = _ref$iconSize === void 0 ? "m" : _ref$iconSize,
    title = _ref.title,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!title) {
    console.error("Please make sure to specify a 'title' prop to your IconButton component! ");
  }
  var iconButtonClasses = [Button_IconButton_module["icon-button"], Button_IconButton_module[variant], Button_IconButton_module[color], Button_IconButton_module["button-" + iconSize]];
  if (className) {
    iconButtonClasses.push(className);
  }
  return /*#__PURE__*/react.createElement(BaseButton/* BaseButton */.Y, _extends({}, rest, {
    ref: ref,
    title: title,
    className: iconButtonClasses.join(" ")
  }), /*#__PURE__*/react.createElement(react.Fragment, null, children, /*#__PURE__*/react.createElement("span", {
    className: readyclasses_module/* default */.Z["sr-only"]
  }, title)));
};
var IconButton = /*#__PURE__*/react.forwardRef(IconButtonComponent);
try {
    // @ts-ignore
    IconButtonComponent.displayName = "IconButtonComponent";
    // @ts-ignore
    IconButtonComponent.__docgenInfo = { "description": "", "displayName": "IconButtonComponent", "props": { "iconSize": { "defaultValue": { value: "m" }, "description": "", "name": "iconSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"s\"" }, { "value": "\"m\"" }, { "value": "\"l\"" }] } }, "variant": { "defaultValue": { value: "text" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/IconButton.tsx#IconButtonComponent"] = { docgenInfo: IconButtonComponent.__docgenInfo, name: "IconButtonComponent", path: "src/components/Button/IconButton.tsx#IconButtonComponent" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    IconButton.displayName = "IconButton";
    // @ts-ignore
    IconButton.__docgenInfo = { "description": "", "displayName": "IconButton", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "variant": { "defaultValue": { value: "text" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } }, "iconSize": { "defaultValue": { value: "m" }, "description": "", "name": "iconSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"s\"" }, { "value": "\"m\"" }, { "value": "\"l\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/IconButton.tsx#IconButton"] = { docgenInfo: IconButton.__docgenInfo, name: "IconButton", path: "src/components/Button/IconButton.tsx#IconButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.5rem .75rem;min-height:2.5rem;cursor:pointer;transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);position:relative}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "BaseButton-module__sr-only--pIoQP",
	"hidden": "BaseButton-module__hidden--YXbft",
	"slide-in": "BaseButton-module__slide-in--f4Qq6",
	"slide-out": "BaseButton-module__slide-out--QlyO7",
	"button": "BaseButton-module__button--q6T9A",
	"content-hidden": "BaseButton-module__content-hidden--QNxtO",
	"spinner": "BaseButton-module__spinner--sHeyQ",
	"spin": "BaseButton-module__spin--KXAHp"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/IconButton.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.IconButton-module__sr-only--eURU9{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.IconButton-module__hidden--qhXYR{display:none}.IconButton-module__slide-in--vHzq3{animation:IconButton-module__slide-in--vHzq3 .5s forwards}@media(prefers-reduced-motion: reduce){.IconButton-module__slide-in--vHzq3{animation-duration:.1ms}}.IconButton-module__slide-out--JNv2i{animation:IconButton-module__slide-out--JNv2i .5s forwards}@media(prefers-reduced-motion: reduce){.IconButton-module__slide-out--JNv2i{animation-duration:.1ms}}@keyframes IconButton-module__slide-in--vHzq3{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes IconButton-module__slide-out--JNv2i{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.IconButton-module__icon-button--R94L_{border:var(--button-border-width) var(--button-border-style) rgba(0,0,0,0);background-color:rgba(0,0,0,0);padding:0;border-radius:var(--button-border-radius);display:flex;align-items:center;justify-content:center;min-height:auto}.IconButton-module__icon-button--R94L_ span{vertical-align:top}.IconButton-module__icon-button--R94L_.IconButton-module__button-s--J14DB{width:1.875rem;height:1.875rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-s--J14DB span{font-size:.75rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-m--RFbm8{width:2.5rem;height:2.5rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-m--RFbm8 span{font-size:1rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-l--PsiPM{width:3.125rem;height:3.125rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-l--PsiPM span{font-size:1.375rem}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ{font-weight:500}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled){color:var(--button-fill-text-color);background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ{border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled){color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__secondary--Z_vBZ:not(:disabled){color:var(--button-secondary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__secondary--Z_vBZ:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-secondary-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__secondary--Z_vBZ:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__secondary--Z_vBZ:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-secondary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__secondary--Z_vBZ:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__secondary--Z_vBZ:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-secondary-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled){color:var(--button-warning-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled){color:var(--button-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-default-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-default-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled){color:var(--button-danger-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ{background-color:var(--white);font-weight:500}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled){border-color:var(--button-primary-default-color);color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-hover-color);background-color:var(--color-black10);border-color:var(--button-primary-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__secondary--Z_vBZ:not(:disabled){border-color:var(--button-secondary-default-color);color:var(--button-secondary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__secondary--Z_vBZ:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-secondary-hover-color);background-color:var(--color-black10);border-color:var(--button-secondary-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__secondary--Z_vBZ:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__secondary--Z_vBZ:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-secondary-focused-color);border-color:var(--button-secondary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__secondary--Z_vBZ:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__secondary--Z_vBZ:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-secondary-pressed-color);border-color:var(--button-secondary-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled){border-color:var(--button-warning-default-color);color:var(--button-warning-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-hover-color);background-color:var(--color-black10);border-color:var(--button-warning-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled){border-color:var(--button-default-color);color:var(--button-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-default-hover-color);background-color:var(--color-black10);border-color:var(--button-default-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled){border-color:var(--button-danger-default-color);color:var(--button-danger-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-hover-color);background-color:var(--color-black10);border-color:var(--button-danger-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):active:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):visited:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);background-color:var(--color-black20)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "IconButton-module__sr-only--eURU9",
	"hidden": "IconButton-module__hidden--qhXYR",
	"slide-in": "IconButton-module__slide-in--vHzq3",
	"slide-out": "IconButton-module__slide-out--JNv2i",
	"icon-button": "IconButton-module__icon-button--R94L_",
	"button-s": "IconButton-module__button-s--J14DB",
	"button-m": "IconButton-module__button-m--RFbm8",
	"button-l": "IconButton-module__button-l--PsiPM",
	"fill": "IconButton-module__fill--XaQMJ",
	"disabled": "IconButton-module__disabled--TaebT",
	"text": "IconButton-module__text--YeXNZ",
	"primary": "IconButton-module__primary--EC6GN",
	"secondary": "IconButton-module__secondary--Z_vBZ",
	"warning": "IconButton-module__warning--ex4Cg",
	"default": "IconButton-module__default--SAB9h",
	"danger": "IconButton-module__danger--SFxFR",
	"outline": "IconButton-module__outline--nvgXZ"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);