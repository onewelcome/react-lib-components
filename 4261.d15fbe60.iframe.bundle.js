"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4261],{

/***/ "./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": function() { return /* binding */ InputWrapper; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.Z, options);




       /* harmony default export */ var InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.Z && InputWrapper_module/* default.locals */.Z.locals ? InputWrapper_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["type", "name", "inputProps", "helperText", "helperProps", "value", "className", "error", "success", "onChange", "onBlur", "onFocus", "disabled"];
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






var InputWrapperComponent = function InputWrapperComponent(_ref, ref) {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  var type = _ref.type,
    name = _ref.name,
    inputProps = _ref.inputProps,
    helperText = _ref.helperText,
    helperProps = _ref.helperProps,
    value = _ref.value,
    className = _ref.className,
    error = _ref.error,
    success = _ref.success,
    onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    _onFocus = _ref.onFocus,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useWrapper = (0,useWrapper/* useWrapper */.s)(),
    errorId = _useWrapper.errorId,
    hasFocus = _useWrapper.hasFocus,
    setHasFocus = _useWrapper.setHasFocus,
    helperId = _useWrapper.helperId,
    labelId = _useWrapper.labelId;
  var _ref2 = inputProps !== null && inputProps !== void 0 ? inputProps : {},
    prefix = _ref2.prefix,
    suffix = _ref2.suffix;
  var input = (0,react.useRef)(null);
  var labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module.focus);
  var inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 ? void 0 : (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 ? void 0 : (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module.disabled);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    name: name,
    className: "".concat(InputWrapper_InputWrapper_module["input-wrapper"], " ").concat(className !== null && className !== void 0 ? className : ""),
    labelProps: {
      id: labelId,
      className: labelClasses.join(" ")
    },
    errorId: errorId,
    error: error,
    helperId: helperId,
    helperText: helperText,
    helperProps: _objectSpread(_objectSpread({}, helperProps), {}, {
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    }),
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: function onFocus(e) {
      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
      setHasFocus(true);
    },
    onBlur: function onBlur(e) {
      _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
      setHasFocus(false);
    },
    className: "\n         ".concat((_inputProps$className = inputProps === null || inputProps === void 0 ? void 0 : inputProps.className) !== null && _inputProps$className !== void 0 ? _inputProps$className : ""),
    name: name,
    success: success,
    error: error,
    id: name,
    value: value,
    type: type
  })));
};
var InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
try {
    // @ts-ignore
    InputWrapper.displayName = "InputWrapper";
    // @ts-ignore
    InputWrapper.__docgenInfo = { "description": "", "displayName": "InputWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"number\"" }, { "value": "\"time\"" }, { "value": "\"text\"" }, { "value": "\"hidden\"" }, { "value": "\"search\"" }, { "value": "\"tel\"" }, { "value": "\"url\"" }, { "value": "\"email\"" }, { "value": "\"date\"" }, { "value": "\"file\"" }, { "value": "\"password\"" }, { "value": "\"datetime-local\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "inputProps": { "defaultValue": null, "description": "", "name": "inputProps", "required": false, "type": { "name": "PartialInputProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper"] = { docgenInfo: InputWrapper.__docgenInfo, name: "InputWrapper", path: "src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.InputWrapper-module__w-6--Tmzsd{width:6%}.InputWrapper-module__w-7--dw1U5{width:7%}.InputWrapper-module__w-8--f_IrK{width:8%}.InputWrapper-module__w-9--wuIZg{width:9%}.InputWrapper-module__w-10--MP8qZ{width:10%}.InputWrapper-module__w-11--ClIVe{width:11%}.InputWrapper-module__w-12--pw6tk{width:12%}.InputWrapper-module__w-13--cUoW6{width:13%}.InputWrapper-module__w-14--EOP7E{width:14%}.InputWrapper-module__w-15--JoOeK{width:15%}.InputWrapper-module__w-16--in3wr{width:16%}.InputWrapper-module__w-17--iPds6{width:17%}.InputWrapper-module__w-18--Baxac{width:18%}.InputWrapper-module__w-19--f42oz{width:19%}.InputWrapper-module__w-20--ciQIQ{width:20%}.InputWrapper-module__w-21--PH2vO{width:21%}.InputWrapper-module__w-22--MKGfJ{width:22%}.InputWrapper-module__w-23--zo_Mn{width:23%}.InputWrapper-module__w-24--VOJ0A{width:24%}.InputWrapper-module__w-25--H3w4w{width:25%}.InputWrapper-module__w-26--hhGZk{width:26%}.InputWrapper-module__w-27--HyCc4{width:27%}.InputWrapper-module__w-28--i9ISU{width:28%}.InputWrapper-module__w-29--cBemb{width:29%}.InputWrapper-module__w-30--oWGrV{width:30%}.InputWrapper-module__w-31--EIC9D{width:31%}.InputWrapper-module__w-32--IKgSF{width:32%}.InputWrapper-module__w-33--wH3jm{width:33%}.InputWrapper-module__w-34--TlsAn{width:34%}.InputWrapper-module__w-35--nvrNE{width:35%}.InputWrapper-module__w-36--Wp0UD{width:36%}.InputWrapper-module__w-37--HeQkF{width:37%}.InputWrapper-module__w-38--qkogA{width:38%}.InputWrapper-module__w-39--yNdb4{width:39%}.InputWrapper-module__w-40--ks2Cf{width:40%}.InputWrapper-module__w-41--_Fd6A{width:41%}.InputWrapper-module__w-42--Lj9sK{width:42%}.InputWrapper-module__w-43--Lxml_{width:43%}.InputWrapper-module__w-44--Dgm8l{width:44%}.InputWrapper-module__w-45--gO5lr{width:45%}.InputWrapper-module__w-46--wRqNm{width:46%}.InputWrapper-module__w-47--jUNBY{width:47%}.InputWrapper-module__w-48--ee4X7{width:48%}.InputWrapper-module__w-49--bIQR5{width:49%}.InputWrapper-module__w-50--PrmYK{width:50%}.InputWrapper-module__w-51--vY7qf{width:51%}.InputWrapper-module__w-52--fHVS2{width:52%}.InputWrapper-module__w-53--nyoe7{width:53%}.InputWrapper-module__w-54--Bmtvw{width:54%}.InputWrapper-module__w-55--V0i7o{width:55%}.InputWrapper-module__w-56--bwfcU{width:56%}.InputWrapper-module__w-57--WHg63{width:57%}.InputWrapper-module__w-58--p_qIK{width:58%}.InputWrapper-module__w-59--g_mEz{width:59%}.InputWrapper-module__w-60--m9xan{width:60%}.InputWrapper-module__w-61--jUR4g{width:61%}.InputWrapper-module__w-62--zUHgX{width:62%}.InputWrapper-module__w-63--Eine3{width:63%}.InputWrapper-module__w-64--vHDYI{width:64%}.InputWrapper-module__w-65--fdGCZ{width:65%}.InputWrapper-module__w-66--jveoH{width:66%}.InputWrapper-module__w-67--Zl741{width:67%}.InputWrapper-module__w-68--NKP4R{width:68%}.InputWrapper-module__w-69--DamKj{width:69%}.InputWrapper-module__w-70--gYbRk{width:70%}.InputWrapper-module__w-71--VZx7f{width:71%}.InputWrapper-module__w-72--Yrly9{width:72%}.InputWrapper-module__w-73--AviZg{width:73%}.InputWrapper-module__w-74--Z4d9E{width:74%}.InputWrapper-module__w-75--D2stu{width:75%}.InputWrapper-module__w-76--OuWNN{width:76%}.InputWrapper-module__w-77--t8i8a{width:77%}.InputWrapper-module__w-78--HyEuC{width:78%}.InputWrapper-module__w-79--EPtfk{width:79%}.InputWrapper-module__w-80--_3gX0{width:80%}.InputWrapper-module__w-81--R5pV7{width:81%}.InputWrapper-module__w-82--vVXaX{width:82%}.InputWrapper-module__w-83--TFoLJ{width:83%}.InputWrapper-module__w-84--jH5qe{width:84%}.InputWrapper-module__w-85--kfHCc{width:85%}.InputWrapper-module__w-86--RFLi4{width:86%}.InputWrapper-module__w-87--NJLAR{width:87%}.InputWrapper-module__w-88--M4Inv{width:88%}.InputWrapper-module__w-89--wZeHw{width:89%}.InputWrapper-module__w-90--uHW6l{width:90%}.InputWrapper-module__w-91--gGikz{width:91%}.InputWrapper-module__w-92--y04VX{width:92%}.InputWrapper-module__w-93--pgQNk{width:93%}.InputWrapper-module__w-94--TGkgf{width:94%}.InputWrapper-module__w-95--tLzpn{width:95%}.InputWrapper-module__w-96--Zalgt{width:96%}.InputWrapper-module__w-97--tY5EL{width:97%}.InputWrapper-module__w-98--p9Y_2{width:98%}.InputWrapper-module__w-99--nLA9M{width:99%}.InputWrapper-module__w-100--I_mJc{width:100%}.InputWrapper-module__w-101--u5_x0{width:101%}.InputWrapper-module__w-102--tiFwi{width:102%}.InputWrapper-module__w-103--gERKV{width:103%}.InputWrapper-module__w-104--ALVTF{width:104%}.InputWrapper-module__w-105--xTRGx{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */label.InputWrapper-module__input-label--FrLRR.InputWrapper-module__focus--ES8kx.InputWrapper-module__focus--ES8kx{color:var(--color-primary)}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__floating-label-active--GU6su [data-icon]:before{transform:translateY(5px)}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed}.InputWrapper-module__floating-label-active--GU6su [data-prefix],.InputWrapper-module__floating-label-active--GU6su [data-suffix]{padding-top:1rem;transform:translateY(0)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "InputWrapper-module__sr-only--_BGLV",
	"hidden": "InputWrapper-module__hidden--j7j0R",
	"slide-in": "InputWrapper-module__slide-in--PMOZy",
	"slide-out": "InputWrapper-module__slide-out--ghrlP",
	"w-6": "InputWrapper-module__w-6--Tmzsd",
	"w-7": "InputWrapper-module__w-7--dw1U5",
	"w-8": "InputWrapper-module__w-8--f_IrK",
	"w-9": "InputWrapper-module__w-9--wuIZg",
	"w-10": "InputWrapper-module__w-10--MP8qZ",
	"w-11": "InputWrapper-module__w-11--ClIVe",
	"w-12": "InputWrapper-module__w-12--pw6tk",
	"w-13": "InputWrapper-module__w-13--cUoW6",
	"w-14": "InputWrapper-module__w-14--EOP7E",
	"w-15": "InputWrapper-module__w-15--JoOeK",
	"w-16": "InputWrapper-module__w-16--in3wr",
	"w-17": "InputWrapper-module__w-17--iPds6",
	"w-18": "InputWrapper-module__w-18--Baxac",
	"w-19": "InputWrapper-module__w-19--f42oz",
	"w-20": "InputWrapper-module__w-20--ciQIQ",
	"w-21": "InputWrapper-module__w-21--PH2vO",
	"w-22": "InputWrapper-module__w-22--MKGfJ",
	"w-23": "InputWrapper-module__w-23--zo_Mn",
	"w-24": "InputWrapper-module__w-24--VOJ0A",
	"w-25": "InputWrapper-module__w-25--H3w4w",
	"w-26": "InputWrapper-module__w-26--hhGZk",
	"w-27": "InputWrapper-module__w-27--HyCc4",
	"w-28": "InputWrapper-module__w-28--i9ISU",
	"w-29": "InputWrapper-module__w-29--cBemb",
	"w-30": "InputWrapper-module__w-30--oWGrV",
	"w-31": "InputWrapper-module__w-31--EIC9D",
	"w-32": "InputWrapper-module__w-32--IKgSF",
	"w-33": "InputWrapper-module__w-33--wH3jm",
	"w-34": "InputWrapper-module__w-34--TlsAn",
	"w-35": "InputWrapper-module__w-35--nvrNE",
	"w-36": "InputWrapper-module__w-36--Wp0UD",
	"w-37": "InputWrapper-module__w-37--HeQkF",
	"w-38": "InputWrapper-module__w-38--qkogA",
	"w-39": "InputWrapper-module__w-39--yNdb4",
	"w-40": "InputWrapper-module__w-40--ks2Cf",
	"w-41": "InputWrapper-module__w-41--_Fd6A",
	"w-42": "InputWrapper-module__w-42--Lj9sK",
	"w-43": "InputWrapper-module__w-43--Lxml_",
	"w-44": "InputWrapper-module__w-44--Dgm8l",
	"w-45": "InputWrapper-module__w-45--gO5lr",
	"w-46": "InputWrapper-module__w-46--wRqNm",
	"w-47": "InputWrapper-module__w-47--jUNBY",
	"w-48": "InputWrapper-module__w-48--ee4X7",
	"w-49": "InputWrapper-module__w-49--bIQR5",
	"w-50": "InputWrapper-module__w-50--PrmYK",
	"w-51": "InputWrapper-module__w-51--vY7qf",
	"w-52": "InputWrapper-module__w-52--fHVS2",
	"w-53": "InputWrapper-module__w-53--nyoe7",
	"w-54": "InputWrapper-module__w-54--Bmtvw",
	"w-55": "InputWrapper-module__w-55--V0i7o",
	"w-56": "InputWrapper-module__w-56--bwfcU",
	"w-57": "InputWrapper-module__w-57--WHg63",
	"w-58": "InputWrapper-module__w-58--p_qIK",
	"w-59": "InputWrapper-module__w-59--g_mEz",
	"w-60": "InputWrapper-module__w-60--m9xan",
	"w-61": "InputWrapper-module__w-61--jUR4g",
	"w-62": "InputWrapper-module__w-62--zUHgX",
	"w-63": "InputWrapper-module__w-63--Eine3",
	"w-64": "InputWrapper-module__w-64--vHDYI",
	"w-65": "InputWrapper-module__w-65--fdGCZ",
	"w-66": "InputWrapper-module__w-66--jveoH",
	"w-67": "InputWrapper-module__w-67--Zl741",
	"w-68": "InputWrapper-module__w-68--NKP4R",
	"w-69": "InputWrapper-module__w-69--DamKj",
	"w-70": "InputWrapper-module__w-70--gYbRk",
	"w-71": "InputWrapper-module__w-71--VZx7f",
	"w-72": "InputWrapper-module__w-72--Yrly9",
	"w-73": "InputWrapper-module__w-73--AviZg",
	"w-74": "InputWrapper-module__w-74--Z4d9E",
	"w-75": "InputWrapper-module__w-75--D2stu",
	"w-76": "InputWrapper-module__w-76--OuWNN",
	"w-77": "InputWrapper-module__w-77--t8i8a",
	"w-78": "InputWrapper-module__w-78--HyEuC",
	"w-79": "InputWrapper-module__w-79--EPtfk",
	"w-80": "InputWrapper-module__w-80--_3gX0",
	"w-81": "InputWrapper-module__w-81--R5pV7",
	"w-82": "InputWrapper-module__w-82--vVXaX",
	"w-83": "InputWrapper-module__w-83--TFoLJ",
	"w-84": "InputWrapper-module__w-84--jH5qe",
	"w-85": "InputWrapper-module__w-85--kfHCc",
	"w-86": "InputWrapper-module__w-86--RFLi4",
	"w-87": "InputWrapper-module__w-87--NJLAR",
	"w-88": "InputWrapper-module__w-88--M4Inv",
	"w-89": "InputWrapper-module__w-89--wZeHw",
	"w-90": "InputWrapper-module__w-90--uHW6l",
	"w-91": "InputWrapper-module__w-91--gGikz",
	"w-92": "InputWrapper-module__w-92--y04VX",
	"w-93": "InputWrapper-module__w-93--pgQNk",
	"w-94": "InputWrapper-module__w-94--TGkgf",
	"w-95": "InputWrapper-module__w-95--tLzpn",
	"w-96": "InputWrapper-module__w-96--Zalgt",
	"w-97": "InputWrapper-module__w-97--tY5EL",
	"w-98": "InputWrapper-module__w-98--p9Y_2",
	"w-99": "InputWrapper-module__w-99--nLA9M",
	"w-100": "InputWrapper-module__w-100--I_mJc",
	"w-101": "InputWrapper-module__w-101--u5_x0",
	"w-102": "InputWrapper-module__w-102--tiFwi",
	"w-103": "InputWrapper-module__w-103--gERKV",
	"w-104": "InputWrapper-module__w-104--ALVTF",
	"w-105": "InputWrapper-module__w-105--xTRGx",
	"input-label": "InputWrapper-module__input-label--FrLRR",
	"focus": "InputWrapper-module__focus--ES8kx",
	"floating-label": "InputWrapper-module__floating-label--aGgwG",
	"input-wrapper-helper": "InputWrapper-module__input-wrapper-helper--GKzdc",
	"input-wrapper": "InputWrapper-module__input-wrapper--x9INE",
	"floating-label-active": "InputWrapper-module__floating-label-active--GU6su",
	"disabled": "InputWrapper-module__disabled--TE5Ui"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);