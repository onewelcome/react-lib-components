"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5507],{

/***/ "./src/components/Button/Button.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: function() { return /* binding */ Button; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss
var Button_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/Button.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Button_module/* default */.Z, options);




       /* harmony default export */ var Button_Button_module = (Button_module/* default */.Z && Button_module/* default */.Z.locals ? Button_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Button.tsx
var _excluded = ["children", "variant", "color", "startIcon", "endIcon", "className"];
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




var ButtonComponent = function ButtonComponent(_ref, ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "fill" : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    _ref$startIcon = _ref.startIcon,
    startIcon = _ref$startIcon === void 0 ? false : _ref$startIcon,
    _ref$endIcon = _ref.endIcon,
    endIcon = _ref$endIcon === void 0 ? false : _ref$endIcon,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var additionalClasses = [];
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
  return /*#__PURE__*/react.createElement(BaseButton/* BaseButton */.Y, _extends({}, rest, {
    ref: ref,
    className: "".concat(Button_Button_module[color], " ").concat(Button_Button_module[variant], " ").concat(additionalClasses.join(" "))
  }), startIcon && /*#__PURE__*/react.createElement("i", null, startIcon), /*#__PURE__*/react.createElement("span", null, children), endIcon && /*#__PURE__*/react.createElement("i", null, "\xA0", endIcon));
};
var Button = /*#__PURE__*/react.forwardRef(ButtonComponent);
try {
    // @ts-ignore
    Button.displayName = "Button";
    // @ts-ignore
    Button.__docgenInfo = { "description": "", "displayName": "Button", "props": { "variant": { "defaultValue": { value: "fill" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } }, "startIcon": { "defaultValue": { value: "false" }, "description": "", "name": "startIcon", "required": false, "type": { "name": "ReactNode" } }, "endIcon": { "defaultValue": { value: "false" }, "description": "", "name": "endIcon", "required": false, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"] = { docgenInfo: Button.__docgenInfo, name: "Button", path: "src/components/Button/Button.tsx#Button" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Button-module__sr-only--Ve0xu{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Button-module__hidden--n7uOZ{display:none}.Button-module__slide-in--QG3VI{animation:Button-module__slide-in--QG3VI .5s forwards}@media(prefers-reduced-motion: reduce){.Button-module__slide-in--QG3VI{animation-duration:.1ms}}.Button-module__slide-out--b4crk{animation:Button-module__slide-out--b4crk .5s forwards}@media(prefers-reduced-motion: reduce){.Button-module__slide-out--b4crk{animation-duration:.1ms}}@keyframes Button-module__slide-in--QG3VI{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Button-module__slide-out--b4crk{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Button-module__fill--qig8O{font-weight:500}.Button-module__fill--qig8O:not(:disabled){color:var(--button-fill-text-color);background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.Button-module__fill--qig8O:not(:disabled):hover:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-hover-color)}.Button-module__fill--qig8O:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__fill--qig8O:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__fill--qig8O:not(:disabled):visited:not(.Button-module__disabled--HULEw){background-color:var(--button-primary-pressed-color)}.Button-module__outline--dK5VZ{background-color:var(--white);font-weight:500}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled){border-color:var(--button-primary-default-color);color:var(--button-primary-default-color)}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-primary-hover-color);background-color:var(--color-black10);border-color:var(--button-primary-hover-color)}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__primary--taWj2:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__secondary--sMAVa:not(:disabled){border-color:var(--button-secondary-default-color);color:var(--button-secondary-default-color)}.Button-module__outline--dK5VZ.Button-module__secondary--sMAVa:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-secondary-hover-color);background-color:var(--color-black10);border-color:var(--button-secondary-hover-color)}.Button-module__outline--dK5VZ.Button-module__secondary--sMAVa:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__secondary--sMAVa:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-secondary-focused-color);border-color:var(--button-secondary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__outline--dK5VZ.Button-module__secondary--sMAVa:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__secondary--sMAVa:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-secondary-pressed-color);border-color:var(--button-secondary-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled){border-color:var(--button-warning-default-color);color:var(--button-warning-default-color)}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-warning-hover-color);background-color:var(--color-black10);border-color:var(--button-warning-hover-color)}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__warning--NJ6at:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled){border-color:var(--button-default-color);color:var(--button-default-color)}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-default-hover-color);background-color:var(--color-black10);border-color:var(--button-default-hover-color)}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__default--Vgqen:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);background-color:var(--color-black20)}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled){border-color:var(--button-danger-default-color);color:var(--button-danger-default-color)}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-danger-hover-color);background-color:var(--color-black10);border-color:var(--button-danger-hover-color)}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__outline--dK5VZ.Button-module__danger--spYej:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE{border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled){color:var(--button-primary-default-color)}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-primary-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__primary--taWj2:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__secondary--sMAVa:not(:disabled){color:var(--button-secondary-default-color)}.Button-module__text--Kg7tE.Button-module__secondary--sMAVa:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-secondary-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__secondary--sMAVa:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__secondary--sMAVa:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-secondary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__text--Kg7tE.Button-module__secondary--sMAVa:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__secondary--sMAVa:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-secondary-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled){color:var(--button-warning-default-color)}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-warning-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__warning--NJ6at:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled){color:var(--button-default-color)}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-default-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__default--Vgqen:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-default-pressed-color);background-color:var(--color-black20)}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled){color:var(--button-danger-default-color)}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):hover:not(.Button-module__disabled--HULEw){color:var(--button-danger-hover-color);background-color:var(--color-black10)}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):focus:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):focus-visible:not(.Button-module__disabled--HULEw){color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):active:not(.Button-module__disabled--HULEw),.Button-module__text--Kg7tE.Button-module__danger--spYej:not(:disabled):visited:not(.Button-module__disabled--HULEw){color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.Button-module__has-icon--k1UF_{display:flex;align-items:center}.Button-module__has-icon--k1UF_.Button-module__start-icon--wPoHr{padding-left:.75rem;padding-right:1.25rem}.Button-module__has-icon--k1UF_.Button-module__end-icon--7L2_g{padding-left:1.25rem;padding-right:.75rem}.Button-module__has-icon--k1UF_ i{display:flex;align-items:center;justify-content:center;width:1.5rem;margin-right:.25rem}@media only screen and (min-width: 30em){.Button-module__has-icon--k1UF_.Button-module__start-icon--wPoHr{padding-left:1rem}.Button-module__has-icon--k1UF_.Button-module__end-icon--7L2_g{padding-right:1rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Button-module__sr-only--Ve0xu",
	"hidden": "Button-module__hidden--n7uOZ",
	"slide-in": "Button-module__slide-in--QG3VI",
	"slide-out": "Button-module__slide-out--b4crk",
	"fill": "Button-module__fill--qig8O",
	"disabled": "Button-module__disabled--HULEw",
	"outline": "Button-module__outline--dK5VZ",
	"primary": "Button-module__primary--taWj2",
	"secondary": "Button-module__secondary--sMAVa",
	"warning": "Button-module__warning--NJ6at",
	"default": "Button-module__default--Vgqen",
	"danger": "Button-module__danger--spYej",
	"text": "Button-module__text--Kg7tE",
	"has-icon": "Button-module__has-icon--k1UF_",
	"start-icon": "Button-module__start-icon--wPoHr",
	"end-icon": "Button-module__end-icon--7L2_g"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);