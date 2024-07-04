"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1115],{

/***/ "./src/components/Form/Textarea/Textarea.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ Textarea)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Textarea/Textarea.module.scss
var Textarea_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Textarea/Textarea.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Textarea/Textarea.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Textarea_module/* default */.A, options);




       /* harmony default export */ const Textarea_Textarea_module = (Textarea_module/* default */.A && Textarea_module/* default */.A.locals ? Textarea_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Textarea/Textarea.tsx
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




const TextareaComponent = (_ref, ref) => {
  let {
    error = false,
    success = false,
    disabled = false,
    className,
    rows = 4,
    wrapperProps,
    onFocus,
    onBlur,
    ...rest
  } = _ref;
  const [focus, setFocus] = (0,react.useState)(false);
  const wrapperClasses = [Textarea_Textarea_module["textarea-wrapper"]];
  const outlineClasses = [Textarea_Textarea_module["outline"]];
  (wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.className) && wrapperClasses.push(wrapperProps.className);
  disabled && wrapperClasses.push(Textarea_Textarea_module["disabled"]) && outlineClasses.push(Textarea_Textarea_module["disabled"]);
  error && wrapperClasses.push(Textarea_Textarea_module["error"]) && outlineClasses.push(Textarea_Textarea_module["error"]);
  focus && wrapperClasses.push(Textarea_Textarea_module["focus"]) && outlineClasses.push(Textarea_Textarea_module["focus"]);
  success && wrapperClasses.push("success");
  const icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.q)({
    success,
    error
  });
  return /*#__PURE__*/react.createElement("div", _extends({}, wrapperProps, {
    className: wrapperClasses.join(" ")
  }), /*#__PURE__*/react.createElement("textarea", _extends({}, rest, {
    ref: ref,
    rows: rows,
    className: "".concat(error ? Textarea_Textarea_module["error"] : "", " ").concat(Textarea_Textarea_module["textarea"], " ").concat(className !== null && className !== void 0 ? className : ""),
    disabled: disabled,
    onFocus: event => {
      setFocus(true);
      onFocus === null || onFocus === void 0 || onFocus(event);
    },
    onBlur: event => {
      setFocus(false);
      onBlur === null || onBlur === void 0 || onBlur(event);
    }
  })), icon, /*#__PURE__*/react.createElement("span", {
    className: outlineClasses.join(" ")
  }));
};
const Textarea = /*#__PURE__*/react.forwardRef(TextareaComponent);
try {
    // @ts-ignore
    Textarea.displayName = "Textarea";
    // @ts-ignore
    Textarea.__docgenInfo = { "description": "", "displayName": "Textarea", "props": { "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "wrapperProps": { "defaultValue": null, "description": "", "name": "wrapperProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Textarea/Textarea.tsx#Textarea"] = { docgenInfo: Textarea.__docgenInfo, name: "Textarea", path: "src/components/Form/Textarea/Textarea.tsx#Textarea" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ TextareaWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss
var TextareaWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextareaWrapper_module/* default */.A, options);




       /* harmony default export */ const TextareaWrapper_TextareaWrapper_module = (TextareaWrapper_module/* default */.A && TextareaWrapper_module/* default */.A.locals ? TextareaWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Textarea/Textarea.tsx + 1 modules
var Textarea = __webpack_require__("./src/components/Form/Textarea/Textarea.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx
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






const TextareaWrapperComponent = (_ref, ref) => {
  let {
    name,
    error,
    value,
    label,
    placeholder,
    textareaProps,
    helperProps,
    onChange,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    disabled,
    success,
    ...rest
  } = _ref;
  const {
    errorId,
    hasFocus,
    setHasFocus,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.r)();
  const [hover, setHover] = (0,react.useState)(false);
  const wrapperClasses = [];
  hasFocus && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module["focus"]);
  hover && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module["hover"]);
  disabled && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module["disabled"]);
  error && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module["error"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    labelProps: {
      id: labelId,
      className: "".concat(TextareaWrapper_TextareaWrapper_module["textarea-label"], " ").concat(wrapperClasses.join(" "))
    },
    name: name,
    label: label,
    helperId: helperId,
    helperProps: {
      ...helperProps,
      className: TextareaWrapper_TextareaWrapper_module["textarea-helper-text"]
    },
    error: error,
    errorId: errorId
  }), /*#__PURE__*/react.createElement(Textarea/* Textarea */.T, _extends({}, textareaProps, {
    error: error,
    "aria-labelledby": label && labelId,
    "aria-describedby": error ? errorId : helperId,
    placeholder: placeholder,
    name: name,
    id: name,
    value: value,
    success: success,
    onChange: onChange,
    onFocus: e => {
      onFocus === null || onFocus === void 0 || onFocus(e);
      setHasFocus(true);
    },
    onBlur: e => {
      onBlur === null || onBlur === void 0 || onBlur(e);
      setHasFocus(false);
    },
    onMouseEnter: e => {
      onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(e);
      setHover(true);
    },
    onMouseLeave: e => {
      onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(e);
      setHover(false);
    },
    className: "".concat(TextareaWrapper_TextareaWrapper_module["textarea"], " ").concat(error ? TextareaWrapper_TextareaWrapper_module["error"] : ""),
    wrapperProps: {
      className: "".concat(wrapperClasses.join(" "), " ").concat(TextareaWrapper_TextareaWrapper_module["textarea-wrapper"])
    }
  })));
};
const TextareaWrapper = /*#__PURE__*/react.forwardRef(TextareaWrapperComponent);
try {
    // @ts-ignore
    TextareaWrapper.displayName = "TextareaWrapper";
    // @ts-ignore
    TextareaWrapper.__docgenInfo = { "description": "", "displayName": "TextareaWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLTextAreaElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLTextAreaElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLTextAreaElement>) => void)" } }, "onMouseEnter": { "defaultValue": null, "description": "", "name": "onMouseEnter", "required": false, "type": { "name": "((event: MouseEvent<HTMLTextAreaElement, MouseEvent>) => void)" } }, "onMouseLeave": { "defaultValue": null, "description": "", "name": "onMouseLeave", "required": false, "type": { "name": "((event: MouseEvent<HTMLTextAreaElement, MouseEvent>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "textareaProps": { "defaultValue": null, "description": "", "name": "textareaProps", "required": false, "type": { "name": "Props" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx#TextareaWrapper"] = { docgenInfo: TextareaWrapper.__docgenInfo, name: "TextareaWrapper", path: "src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx#TextareaWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Textarea/Textarea.module.scss":
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
 */.Textarea-module__sr-only--nIRiE{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Textarea-module__hidden--Hl4Nb{display:none}.Textarea-module__slide-in--Qfmo8{animation:Textarea-module__slide-in--Qfmo8 .5s forwards}@media(prefers-reduced-motion: reduce){.Textarea-module__slide-in--Qfmo8{animation-duration:.1ms}}.Textarea-module__slide-out--KeLp9{animation:Textarea-module__slide-out--KeLp9 .5s forwards}@media(prefers-reduced-motion: reduce){.Textarea-module__slide-out--KeLp9{animation-duration:.1ms}}@keyframes Textarea-module__slide-in--Qfmo8{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Textarea-module__slide-out--KeLp9{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Textarea-module__textarea-wrapper--Ofczb{position:relative;box-sizing:border-box;width:100%}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=success],.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=error]{position:absolute;right:1.25rem;z-index:1;top:.85rem;font-size:1.25rem}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=success]:before,.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=error]:before{font-size:1.125rem;height:1.25rem;width:1.25rem;display:flex;align-items:center;justify-content:center}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=success]{color:var(--success)}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=error]{color:var(--error)}.Textarea-module__textarea-wrapper--Ofczb:hover .Textarea-module__outline--xb6j9{border-color:var(--default);background-color:var(--input-hover-background-color)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__disabled--dJzi8{border-color:var(--disabled);background-color:var(--input-disabled-background-color)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__error--w5n_i{border-color:var(--error)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__focus--_FJAT{border-width:var(--input-border-width-focus)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__focus--_FJAT:not(.Textarea-module__error--w5n_i){border-color:var(--color-focus)}.Textarea-module__textarea--6IQAD{padding:.625rem .5rem;box-sizing:border-box;border:0;border-radius:var(--input-border-radius);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);font-size:var(--form-control-font-size);color:var(--color-blue-grey900);vertical-align:top;resize:vertical;position:relative;background-color:rgba(0,0,0,0);z-index:1;width:calc(100% - var(--input-border-width));margin:var(--input-border-width) 0}@media(prefers-reduced-motion: reduce){.Textarea-module__textarea--6IQAD{transition-duration:.1ms}}.Textarea-module__textarea--6IQAD:disabled{cursor:not-allowed;color:var(--greyed-out)}.Textarea-module__textarea--6IQAD:focus:not(:disabled){outline:none}.Textarea-module__outline--xb6j9{pointer-events:none;position:absolute;margin:0;padding:0;inset:0;border-color:var(--light-border-color);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Textarea-module__outline--xb6j9{transition-duration:.1ms}}.Textarea-module__error--w5n_i{border-color:var(--error)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Textarea-module__sr-only--nIRiE`,
	"hidden": `Textarea-module__hidden--Hl4Nb`,
	"slide-in": `Textarea-module__slide-in--Qfmo8`,
	"slide-out": `Textarea-module__slide-out--KeLp9`,
	"textarea-wrapper": `Textarea-module__textarea-wrapper--Ofczb`,
	"outline": `Textarea-module__outline--xb6j9`,
	"disabled": `Textarea-module__disabled--dJzi8`,
	"error": `Textarea-module__error--w5n_i`,
	"focus": `Textarea-module__focus--_FJAT`,
	"textarea": `Textarea-module__textarea--6IQAD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss":
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
 */.TextareaWrapper-module__sr-only--AUiiC{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.TextareaWrapper-module__hidden--XIIIV{display:none}.TextareaWrapper-module__slide-in--fEpUb{animation:TextareaWrapper-module__slide-in--fEpUb .5s forwards}@media(prefers-reduced-motion: reduce){.TextareaWrapper-module__slide-in--fEpUb{animation-duration:.1ms}}.TextareaWrapper-module__slide-out--RDWTy{animation:TextareaWrapper-module__slide-out--RDWTy .5s forwards}@media(prefers-reduced-motion: reduce){.TextareaWrapper-module__slide-out--RDWTy{animation-duration:.1ms}}@keyframes TextareaWrapper-module__slide-in--fEpUb{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes TextareaWrapper-module__slide-out--RDWTy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.TextareaWrapper-module__textarea-wrapper--KnRsR:after{content:"";transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;display:block;width:95%;background-color:var(--light);position:absolute;z-index:0;left:1px;top:1px;border-radius:var(--input-border-radius) var(--input-border-radius) 0 0}@media(prefers-reduced-motion: reduce){.TextareaWrapper-module__textarea-wrapper--KnRsR:after{transition-duration:.1ms}}.TextareaWrapper-module__textarea-wrapper--KnRsR.TextareaWrapper-module__disabled--uBVQ5:after{background-color:var(--disabled)}.TextareaWrapper-module__textarea-wrapper--KnRsR.TextareaWrapper-module__focus--Spgc_:after{left:2px;top:2px}.TextareaWrapper-module__textarea-wrapper--KnRsR .TextareaWrapper-module__textarea--Ch7F1:active:not(:disabled){border-color:var(--color-primary)}.TextareaWrapper-module__textarea-wrapper--KnRsR .TextareaWrapper-module__textarea--Ch7F1:focus:not(:disabled){outline:none}.TextareaWrapper-module__textarea-helper-text--ec4be{margin-top:.14rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `TextareaWrapper-module__sr-only--AUiiC`,
	"hidden": `TextareaWrapper-module__hidden--XIIIV`,
	"slide-in": `TextareaWrapper-module__slide-in--fEpUb`,
	"slide-out": `TextareaWrapper-module__slide-out--RDWTy`,
	"textarea-wrapper": `TextareaWrapper-module__textarea-wrapper--KnRsR`,
	"disabled": `TextareaWrapper-module__disabled--uBVQ5`,
	"focus": `TextareaWrapper-module__focus--Spgc_`,
	"textarea": `TextareaWrapper-module__textarea--Ch7F1`,
	"textarea-helper-text": `TextareaWrapper-module__textarea-helper-text--ec4be`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);