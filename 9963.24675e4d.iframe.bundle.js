"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9963],{

/***/ "./src/components/Button/IconButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ IconButton)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/IconButton.module.scss
var IconButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/IconButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/IconButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(IconButton_module/* default */.A, options);




       /* harmony default export */ const Button_IconButton_module = (IconButton_module/* default */.A && IconButton_module/* default */.A.locals ? IconButton_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/IconButton.tsx
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





const IconButtonComponent = (_ref, ref) => {
  let {
    children,
    color = "primary",
    variant = "text",
    iconSize = "m",
    title,
    className,
    ...rest
  } = _ref;
  if (!title) {
    console.error("Please make sure to specify a 'title' prop to your IconButton component! ");
  }
  const iconButtonClasses = [Button_IconButton_module["icon-button"], Button_IconButton_module[variant], Button_IconButton_module[color], Button_IconButton_module["button-" + iconSize]];
  if (className) {
    iconButtonClasses.push(className);
  }
  return /*#__PURE__*/react.createElement(BaseButton/* BaseButton */.S, _extends({}, rest, {
    ref: ref,
    title: title,
    className: iconButtonClasses.join(" ")
  }), /*#__PURE__*/react.createElement(react.Fragment, null, children, /*#__PURE__*/react.createElement("span", {
    className: readyclasses_module/* default */.A["sr-only"]
  }, title)));
};
const IconButton = /*#__PURE__*/react.forwardRef(IconButtonComponent);
try {
    // @ts-ignore
    IconButtonComponent.displayName = "IconButtonComponent";
    // @ts-ignore
    IconButtonComponent.__docgenInfo = { "description": "", "displayName": "IconButtonComponent", "props": { "iconSize": { "defaultValue": { value: "m" }, "description": "", "name": "iconSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"s\"" }, { "value": "\"m\"" }, { "value": "\"l\"" }] } }, "variant": { "defaultValue": { value: "text" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"submit\"" }, { "value": "\"reset\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null" } } } };
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
    IconButton.__docgenInfo = { "description": "", "displayName": "IconButton", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"submit\"" }, { "value": "\"reset\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "variant": { "defaultValue": { value: "text" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "iconSize": { "defaultValue": { value: "m" }, "description": "", "name": "iconSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"s\"" }, { "value": "\"m\"" }, { "value": "\"l\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/IconButton.tsx#IconButton"] = { docgenInfo: IconButton.__docgenInfo, name: "IconButton", path: "src/components/Button/IconButton.tsx#IconButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/IconButton.module.scss":
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
 */.IconButton-module__sr-only--eURU9{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.IconButton-module__hidden--qhXYR{display:none}.IconButton-module__slide-in--vHzq3{animation:IconButton-module__slide-in--vHzq3 .5s forwards}@media(prefers-reduced-motion: reduce){.IconButton-module__slide-in--vHzq3{animation-duration:.1ms}}.IconButton-module__slide-out--JNv2i{animation:IconButton-module__slide-out--JNv2i .5s forwards}@media(prefers-reduced-motion: reduce){.IconButton-module__slide-out--JNv2i{animation-duration:.1ms}}@keyframes IconButton-module__slide-in--vHzq3{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes IconButton-module__slide-out--JNv2i{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.IconButton-module__icon-button--R94L_{border:var(--button-border-width) var(--button-border-style) rgba(0,0,0,0);background-color:rgba(0,0,0,0);padding:0;border-radius:var(--button-border-radius);display:flex;align-items:center;justify-content:center;min-height:auto}.IconButton-module__icon-button--R94L_ span{vertical-align:top}.IconButton-module__icon-button--R94L_.IconButton-module__button-s--J14DB{width:1.875rem;height:1.875rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-s--J14DB span{font-size:.75rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-m--RFbm8{width:2.5rem;height:2.5rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-m--RFbm8 span{font-size:1rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-l--PsiPM{width:3.125rem;height:3.125rem}.IconButton-module__icon-button--R94L_.IconButton-module__button-l--PsiPM span{font-size:1.375rem}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ{font-weight:500}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled){color:var(--button-fill-text-color);background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ:not(:disabled):active:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__primary--EC6GN:not(:disabled){background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__primary--EC6GN:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color);border-color:var(--button-primary-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__primary--EC6GN:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__primary--EC6GN:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__primary--EC6GN:not(:disabled):active:not(.IconButton-module__disabled--TaebT){background-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__success--Z_824:not(:disabled){background-color:var(--button-success-default-color);border-color:var(--button-success-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__success--Z_824:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-success-hover-color);border-color:var(--button-success-hover-color);border-color:var(--button-success-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__success--Z_824:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__success--Z_824:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-success-focused-color);border-color:var(--button-success-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__success--Z_824:not(:disabled):active:not(.IconButton-module__disabled--TaebT){background-color:var(--button-success-pressed-color);border-color:var(--button-success-pressed-color);border-color:var(--button-success-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__danger--SFxFR:not(:disabled){background-color:var(--button-danger-default-color);border-color:var(--button-danger-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__danger--SFxFR:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-danger-hover-color);border-color:var(--button-danger-hover-color);border-color:var(--button-danger-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__danger--SFxFR:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__danger--SFxFR:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__danger--SFxFR:not(:disabled):active:not(.IconButton-module__disabled--TaebT){background-color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__default--SAB9h:not(:disabled){background-color:var(--button-default-color);border-color:var(--button-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__default--SAB9h:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-default-hover-color);border-color:var(--button-default-hover-color);border-color:var(--button-default-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__default--SAB9h:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__default--SAB9h:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__default--SAB9h:not(:disabled):active:not(.IconButton-module__disabled--TaebT){background-color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__warning--ex4Cg:not(:disabled){background-color:var(--button-warning-default-color);border-color:var(--button-warning-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__warning--ex4Cg:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){background-color:var(--button-warning-hover-color);border-color:var(--button-warning-hover-color);border-color:var(--button-warning-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__warning--ex4Cg:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__warning--ex4Cg:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){background-color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__fill--XaQMJ.IconButton-module__warning--ex4Cg:not(:disabled):active:not(.IconButton-module__disabled--TaebT){background-color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ{font-weight:500;border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled){color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__primary--EC6GN:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__success--Z_824:not(:disabled){color:var(--button-success-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__success--Z_824:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-success-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__success--Z_824:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__success--Z_824:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-success-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__success--Z_824:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-success-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled){color:var(--button-danger-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__danger--SFxFR:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled){color:var(--button-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-default-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__default--SAB9h:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-default-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled){color:var(--button-warning-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-hover-color);background-color:var(--color-black10)}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__text--YeXNZ.IconButton-module__warning--ex4Cg:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ{font-weight:500;background-color:var(--white)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled){border-color:var(--button-primary-default-color);color:var(--button-primary-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-hover-color);background-color:var(--color-black10);border-color:var(--button-primary-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__primary--EC6GN:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__success--Z_824:not(:disabled){border-color:var(--button-success-default-color);color:var(--button-success-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__success--Z_824:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-success-hover-color);background-color:var(--color-black10);border-color:var(--button-success-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__success--Z_824:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__success--Z_824:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-success-focused-color);border-color:var(--button-success-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__success--Z_824:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-success-pressed-color);border-color:var(--button-success-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled){border-color:var(--button-danger-default-color);color:var(--button-danger-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-hover-color);background-color:var(--color-black10);border-color:var(--button-danger-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__danger--SFxFR:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled){border-color:var(--button-default-color);color:var(--button-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-default-hover-color);background-color:var(--color-black10);border-color:var(--button-default-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__default--SAB9h:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);background-color:var(--color-black20)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled){border-color:var(--button-warning-default-color);color:var(--button-warning-default-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):hover:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-hover-color);background-color:var(--color-black10);border-color:var(--button-warning-hover-color)}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):focus:not(.IconButton-module__disabled--TaebT),.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):focus-visible:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;z-index:2}.IconButton-module__icon-button--R94L_.IconButton-module__outline--nvgXZ.IconButton-module__warning--ex4Cg:not(:disabled):active:not(.IconButton-module__disabled--TaebT){color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);background-color:var(--color-black20)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `IconButton-module__sr-only--eURU9`,
	"hidden": `IconButton-module__hidden--qhXYR`,
	"slide-in": `IconButton-module__slide-in--vHzq3`,
	"slide-out": `IconButton-module__slide-out--JNv2i`,
	"icon-button": `IconButton-module__icon-button--R94L_`,
	"button-s": `IconButton-module__button-s--J14DB`,
	"button-m": `IconButton-module__button-m--RFbm8`,
	"button-l": `IconButton-module__button-l--PsiPM`,
	"fill": `IconButton-module__fill--XaQMJ`,
	"disabled": `IconButton-module__disabled--TaebT`,
	"primary": `IconButton-module__primary--EC6GN`,
	"success": `IconButton-module__success--Z_824`,
	"danger": `IconButton-module__danger--SFxFR`,
	"default": `IconButton-module__default--SAB9h`,
	"warning": `IconButton-module__warning--ex4Cg`,
	"text": `IconButton-module__text--YeXNZ`,
	"outline": `IconButton-module__outline--nvgXZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);