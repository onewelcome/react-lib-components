"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9377],{

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
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


const ButtonSpinner = props => /*#__PURE__*/react.createElement("svg", _extends({}, props, {
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
    ButtonSpinner.displayName = "ButtonSpinner";
    // @ts-ignore
    ButtonSpinner.__docgenInfo = { "description": "", "displayName": "ButtonSpinner", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Spinner.tsx#ButtonSpinner"] = { docgenInfo: ButtonSpinner.__docgenInfo, name: "ButtonSpinner", path: "src/components/Button/Spinner.tsx#ButtonSpinner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.tsx
function BaseButton_extends() {
  return BaseButton_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, BaseButton_extends.apply(null, arguments);
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
    hidden,
    ...rest
  } = _ref;
  const validTypes = ["submit", "button", "reset"];
  const isDisabled = disabled ?? loading;
  if (!validTypes.includes(type)) {
    throw new Error(`You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ${type}`);
  }
  const buttonClasses = [Button_BaseButton_module.button];
  loading && buttonClasses.push(Button_BaseButton_module.loading);
  className && buttonClasses.push(className);
  return /*#__PURE__*/react.createElement("button", BaseButton_extends({}, rest, {
    disabled: isDisabled,
    ref: ref,
    type: type,
    hidden: hidden,
    className: hidden ? "" : buttonClasses.join(" ")
  }), loading ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Button_BaseButton_module["content-hidden"]
  }, children), /*#__PURE__*/react.createElement(ButtonSpinner, {
    className: Button_BaseButton_module["spinner"]
  })) : children);
};
const BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"submit\"" }, { "value": "\"reset\"" }] } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Button/Button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Button)
});

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss
var Button_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/Button.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Button_module/* default */.A, options);




       /* harmony default export */ const Button_Button_module = (Button_module/* default */.A && Button_module/* default */.A.locals ? Button_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Button.tsx
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




const ButtonComponent = (_ref, ref) => {
  let {
    children,
    variant = "fill",
    color = "primary",
    startIcon = false,
    endIcon = false,
    className,
    ...rest
  } = _ref;
  const additionalClasses = [];
  if (startIcon || endIcon) {
    additionalClasses.push(Button_Button_module["has-icon"]);
  }
  if (startIcon) {
    additionalClasses.push(Button_Button_module["start-icon"]);
  }
  if (endIcon) {
    additionalClasses.push(Button_Button_module["end-icon"]);
  }
  if (className) {
    additionalClasses.push(className);
  }
  return /*#__PURE__*/react.createElement(BaseButton/* BaseButton */.S, _extends({}, rest, {
    ref: ref,
    className: `${Button_Button_module[color]} ${Button_Button_module[variant]} ${additionalClasses.join(" ")}`
  }), startIcon && /*#__PURE__*/react.createElement("i", null, startIcon), /*#__PURE__*/react.createElement("span", null, children), endIcon && /*#__PURE__*/react.createElement("i", null, "\xA0", endIcon));
};
const Button = /*#__PURE__*/react.forwardRef(ButtonComponent);
try {
    // @ts-ignore
    Button.displayName = "Button";
    // @ts-ignore
    Button.__docgenInfo = { "description": "", "displayName": "Button", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"submit\"" }, { "value": "\"reset\"" }] } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "startIcon": { "defaultValue": { value: "false" }, "description": "", "name": "startIcon", "required": false, "type": { "name": "ReactNode" } }, "endIcon": { "defaultValue": { value: "false" }, "description": "", "name": "endIcon", "required": false, "type": { "name": "ReactNode" } }, "variant": { "defaultValue": { value: "fill" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"] = { docgenInfo: Button.__docgenInfo, name: "Button", path: "src/components/Button/Button.tsx#Button" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
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
 */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.BaseButton-module__button--q6T9A{position:relative}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:1;margin:0;padding:.5rem .75rem;min-height:2.5rem;cursor:pointer;font-family:var(--font-family);transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed;background-color:var(--disabled);border-color:var(--disabled)}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`, ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss":
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
 */.Button-module__sr-only--Ve0xu{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Button-module__hidden--n7uOZ{display:none}.Button-module__slide-in--QG3VI{animation:Button-module__slide-in--QG3VI .5s forwards}@media(prefers-reduced-motion: reduce){.Button-module__slide-in--QG3VI{animation-duration:.1ms}}.Button-module__slide-out--b4crk{animation:Button-module__slide-out--b4crk .5s forwards}@media(prefers-reduced-motion: reduce){.Button-module__slide-out--b4crk{animation-duration:.1ms}}@keyframes Button-module__slide-in--QG3VI{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Button-module__slide-out--b4crk{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Button-module__fill--qig8O{font-weight:500}.Button-module__fill--qig8O:not(:disabled){color:var(--button-fill-text-color);background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.Button-module__fill--qig8O:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color)}.Button-module__fill--qig8O:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__fill--qig8O:not(:disabled):active:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color)}.Button-module__fill--qig8O.Button-module__primary--taWj2:not(:disabled){background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.Button-module__fill--qig8O.Button-module__primary--taWj2:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color)}.Button-module__fill--qig8O.Button-module__primary--taWj2:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O.Button-module__primary--taWj2:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__fill--qig8O.Button-module__primary--taWj2:not(:disabled):active:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color)}.Button-module__fill--qig8O.Button-module__success--yqu5P:not(:disabled){background-color:var(--button-success-default-color);border-color:var(--button-success-default-color)}.Button-module__fill--qig8O.Button-module__success--yqu5P:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-success-hover-color);border-color:var(--button-success-hover-color);border-color:var(--button-success-hover-color)}.Button-module__fill--qig8O.Button-module__success--yqu5P:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O.Button-module__success--yqu5P:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-success-focused-color);border-color:var(--button-success-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__fill--qig8O.Button-module__success--yqu5P:not(:disabled):active:not(.Button-module__disabled--HULEw){background-color:var(--button-success-pressed-color);border-color:var(--button-success-pressed-color);border-color:var(--button-success-pressed-color)}.Button-module__fill--qig8O.Button-module__danger--spYej:not(:disabled){background-color:var(--button-danger-default-color);border-color:var(--button-danger-default-color)}.Button-module__fill--qig8O.Button-module__danger--spYej:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-danger-hover-color);border-color:var(--button-danger-hover-color);border-color:var(--button-danger-hover-color)}.Button-module__fill--qig8O.Button-module__danger--spYej:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O.Button-module__danger--spYej:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__fill--qig8O.Button-module__danger--spYej:not(:disabled):active:not(.Button-module__disabled--HULEw){background-color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color)}.Button-module__fill--qig8O.Button-module__default--Vgqen:not(:disabled){background-color:var(--button-default-color);border-color:var(--button-default-color)}.Button-module__fill--qig8O.Button-module__default--Vgqen:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-default-hover-color);border-color:var(--button-default-hover-color);border-color:var(--button-default-hover-color)}.Button-module__fill--qig8O.Button-module__default--Vgqen:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O.Button-module__default--Vgqen:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__fill--qig8O.Button-module__default--Vgqen:not(:disabled):active:not(.Button-module__disabled--HULEw){background-color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color)}.Button-module__fill--qig8O.Button-module__warning--NJ6at:not(:disabled){background-color:var(--button-warning-default-color);border-color:var(--button-warning-default-color)}.Button-module__fill--qig8O.Button-module__warning--NJ6at:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-warning-hover-color);border-color:var(--button-warning-hover-color);border-color:var(--button-warning-hover-color)}.Button-module__fill--qig8O.Button-module__warning--NJ6at:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O.Button-module__warning--NJ6at:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__fill--qig8O.Button-module__warning--NJ6at:not(:disabled):active:not(.Button-module__disabled--HULEw){background-color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color)}.Button-module__outline--dK5VZ{font-weight:500;background-color:var(--white)}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled){border-color:var(--button-primary-default-color);color:var(--button-primary-default-color)}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-primary-hover-color);background-color:var(--color-black10);border-color:var(--button-primary-hover-color)}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__success--yqu5P:not(:disabled){border-color:var(--button-success-default-color);color:var(--button-success-default-color)}.Button-module__outline--dK5VZ.Button-module__success--yqu5P:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-success-hover-color);background-color:var(--color-black10);border-color:var(--button-success-hover-color)}.Button-module__outline--dK5VZ.Button-module__success--yqu5P:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__success--yqu5P:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-success-focused-color);border-color:var(--button-success-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__outline--dK5VZ.Button-module__success--yqu5P:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-success-pressed-color);border-color:var(--button-success-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled){border-color:var(--button-danger-default-color);color:var(--button-danger-default-color)}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-danger-hover-color);background-color:var(--color-black10);border-color:var(--button-danger-hover-color)}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled){border-color:var(--button-default-color);color:var(--button-default-color)}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-default-hover-color);background-color:var(--color-black10);border-color:var(--button-default-hover-color)}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled){border-color:var(--button-warning-default-color);color:var(--button-warning-default-color)}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-warning-hover-color);background-color:var(--color-black10);border-color:var(--button-warning-hover-color)}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE{font-weight:500;border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled){color:var(--button-primary-default-color)}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-primary-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__success--yqu5P:not(:disabled){color:var(--button-success-default-color)}.Button-module__text--Kg7tE.Button-module__success--yqu5P:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-success-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__success--yqu5P:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__success--yqu5P:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-success-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__text--Kg7tE.Button-module__success--yqu5P:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-success-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled){color:var(--button-danger-default-color)}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-danger-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled){color:var(--button-default-color)}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-default-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-default-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled){color:var(--button-warning-default-color)}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-warning-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):active:not(.Button-module__disabled--HULEw){color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.Button-module__has-icon--k1UF_{display:flex;align-items:center}.Button-module__has-icon--k1UF_.Button-module__start-icon--wPoHr{padding-left:.75rem;padding-right:1.25rem}.Button-module__has-icon--k1UF_.Button-module__end-icon--7L2_g{padding-left:1.25rem;padding-right:.75rem}.Button-module__has-icon--k1UF_ i{display:flex;align-items:center;justify-content:center;width:calc(1.5*var(--font-size));margin-right:.25rem}.Button-module__has-icon--k1UF_ i span{font-size:var(--font-size)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Button-module__sr-only--Ve0xu`,
	"hidden": `Button-module__hidden--n7uOZ`,
	"slide-in": `Button-module__slide-in--QG3VI`,
	"slide-out": `Button-module__slide-out--b4crk`,
	"fill": `Button-module__fill--qig8O`,
	"disabled": `Button-module__disabled--HULEw`,
	"primary": `Button-module__primary--taWj2`,
	"success": `Button-module__success--yqu5P`,
	"danger": `Button-module__danger--spYej`,
	"default": `Button-module__default--Vgqen`,
	"warning": `Button-module__warning--NJ6at`,
	"outline": `Button-module__outline--dK5VZ`,
	"text": `Button-module__text--Kg7tE`,
	"has-icon": `Button-module__has-icon--k1UF_`,
	"start-icon": `Button-module__start-icon--wPoHr`,
	"end-icon": `Button-module__end-icon--7L2_g`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);