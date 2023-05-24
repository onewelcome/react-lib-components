"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1690],{

/***/ "./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": function() { return /* binding */ TextareaWrapper; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss
var TextareaWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextareaWrapper_module/* default */.Z, options);




       /* harmony default export */ var TextareaWrapper_TextareaWrapper_module = (TextareaWrapper_module/* default */.Z && TextareaWrapper_module/* default.locals */.Z.locals ? TextareaWrapper_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Textarea/Textarea.tsx + 1 modules
var Textarea = __webpack_require__("./src/components/Form/Textarea/Textarea.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["name", "error", "success", "value", "label", "placeholder", "textareaProps", "helperProps", "onChange", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave", "disabled"];
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






var TextareaWrapperComponent = function TextareaWrapperComponent(_ref, ref) {
  var name = _ref.name,
    error = _ref.error,
    success = _ref.success,
    value = _ref.value,
    label = _ref.label,
    placeholder = _ref.placeholder,
    textareaProps = _ref.textareaProps,
    helperProps = _ref.helperProps,
    onChange = _ref.onChange,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur,
    _onMouseEnter = _ref.onMouseEnter,
    _onMouseLeave = _ref.onMouseLeave,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useWrapper = (0,useWrapper/* useWrapper */.s)(),
    errorId = _useWrapper.errorId,
    hasFocus = _useWrapper.hasFocus,
    setHasFocus = _useWrapper.setHasFocus,
    helperId = _useWrapper.helperId,
    labelId = _useWrapper.labelId;
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var wrapperClasses = [];
  hasFocus && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module.focus);
  hover && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module.hover);
  disabled && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module.disabled);
  error && wrapperClasses.push(TextareaWrapper_TextareaWrapper_module.error);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    labelProps: {
      id: labelId,
      className: "".concat(TextareaWrapper_TextareaWrapper_module["textarea-label"], " ").concat(wrapperClasses.join(" "))
    },
    name: name,
    label: label,
    helperId: helperId,
    helperProps: _objectSpread(_objectSpread({}, helperProps), {}, {
      className: TextareaWrapper_TextareaWrapper_module["textarea-helper-text"]
    }),
    error: error,
    errorId: errorId
  }), /*#__PURE__*/react.createElement(Textarea/* Textarea */.g, _extends({}, textareaProps, {
    error: error,
    "aria-labelledby": label && labelId,
    "aria-describedby": error ? errorId : helperId,
    placeholder: placeholder,
    name: name,
    id: name,
    value: value,
    success: success,
    onChange: onChange,
    onFocus: function onFocus(e) {
      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
      setHasFocus(true);
    },
    onBlur: function onBlur(e) {
      _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
      setHasFocus(false);
    },
    onMouseEnter: function onMouseEnter(e) {
      _onMouseEnter === null || _onMouseEnter === void 0 ? void 0 : _onMouseEnter(e);
      setHover(true);
    },
    onMouseLeave: function onMouseLeave(e) {
      _onMouseLeave === null || _onMouseLeave === void 0 ? void 0 : _onMouseLeave(e);
      setHover(false);
    },
    className: "".concat(TextareaWrapper_TextareaWrapper_module.textarea, " ").concat(error ? TextareaWrapper_TextareaWrapper_module.error : ""),
    wrapperProps: {
      className: "".concat(wrapperClasses.join(" "), " ").concat(TextareaWrapper_TextareaWrapper_module["textarea-wrapper"])
    }
  })));
};
var TextareaWrapper = /*#__PURE__*/react.forwardRef(TextareaWrapperComponent);
try {
    // @ts-ignore
    TextareaWrapper.displayName = "TextareaWrapper";
    // @ts-ignore
    TextareaWrapper.__docgenInfo = { "description": "", "displayName": "TextareaWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLTextAreaElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLTextAreaElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLTextAreaElement>) => void)" } }, "onMouseEnter": { "defaultValue": null, "description": "", "name": "onMouseEnter", "required": false, "type": { "name": "((event: MouseEvent<HTMLTextAreaElement, MouseEvent>) => void)" } }, "onMouseLeave": { "defaultValue": null, "description": "", "name": "onMouseLeave", "required": false, "type": { "name": "((event: MouseEvent<HTMLTextAreaElement, MouseEvent>) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "textareaProps": { "defaultValue": null, "description": "", "name": "textareaProps", "required": false, "type": { "name": "Props" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx#TextareaWrapper"] = { docgenInfo: TextareaWrapper.__docgenInfo, name: "TextareaWrapper", path: "src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx#TextareaWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.TextareaWrapper-module__sr-only--AUiiC{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.TextareaWrapper-module__hidden--XIIIV{display:none}.TextareaWrapper-module__slide-in--fEpUb{animation:TextareaWrapper-module__slide-in--fEpUb .5s forwards}@media(prefers-reduced-motion: reduce){.TextareaWrapper-module__slide-in--fEpUb{animation-duration:.1ms}}.TextareaWrapper-module__slide-out--RDWTy{animation:TextareaWrapper-module__slide-out--RDWTy .5s forwards}@media(prefers-reduced-motion: reduce){.TextareaWrapper-module__slide-out--RDWTy{animation-duration:.1ms}}@keyframes TextareaWrapper-module__slide-in--fEpUb{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes TextareaWrapper-module__slide-out--RDWTy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.TextareaWrapper-module__w-6--Q5ig_{width:6%}.TextareaWrapper-module__w-7--ZvyBG{width:7%}.TextareaWrapper-module__w-8--iYSIE{width:8%}.TextareaWrapper-module__w-9--HcSL4{width:9%}.TextareaWrapper-module__w-10--HeNrR{width:10%}.TextareaWrapper-module__w-11--PRExq{width:11%}.TextareaWrapper-module__w-12--v2crM{width:12%}.TextareaWrapper-module__w-13--bJZtl{width:13%}.TextareaWrapper-module__w-14--mxqNN{width:14%}.TextareaWrapper-module__w-15--awfU3{width:15%}.TextareaWrapper-module__w-16--QMvOJ{width:16%}.TextareaWrapper-module__w-17--gDDcO{width:17%}.TextareaWrapper-module__w-18--RExU3{width:18%}.TextareaWrapper-module__w-19--tCiLz{width:19%}.TextareaWrapper-module__w-20--LCifl{width:20%}.TextareaWrapper-module__w-21--hJbiU{width:21%}.TextareaWrapper-module__w-22--PcECr{width:22%}.TextareaWrapper-module__w-23--jPPd3{width:23%}.TextareaWrapper-module__w-24--wC1Sr{width:24%}.TextareaWrapper-module__w-25--jQF31{width:25%}.TextareaWrapper-module__w-26--Zevby{width:26%}.TextareaWrapper-module__w-27--lD7lW{width:27%}.TextareaWrapper-module__w-28--Isxzs{width:28%}.TextareaWrapper-module__w-29--QoVUd{width:29%}.TextareaWrapper-module__w-30--VDuuV{width:30%}.TextareaWrapper-module__w-31--lWNGF{width:31%}.TextareaWrapper-module__w-32--gLEAo{width:32%}.TextareaWrapper-module__w-33--x7M_p{width:33%}.TextareaWrapper-module__w-34--oRDZD{width:34%}.TextareaWrapper-module__w-35--MOYTU{width:35%}.TextareaWrapper-module__w-36--qJtmP{width:36%}.TextareaWrapper-module__w-37--blaJ8{width:37%}.TextareaWrapper-module__w-38--I_mf4{width:38%}.TextareaWrapper-module__w-39--T996r{width:39%}.TextareaWrapper-module__w-40--sT_yI{width:40%}.TextareaWrapper-module__w-41--RBQdt{width:41%}.TextareaWrapper-module__w-42--XAYM2{width:42%}.TextareaWrapper-module__w-43--lXg_i{width:43%}.TextareaWrapper-module__w-44--na0hJ{width:44%}.TextareaWrapper-module__w-45--sFcMB{width:45%}.TextareaWrapper-module__w-46--jFyEy{width:46%}.TextareaWrapper-module__w-47--BaMp7{width:47%}.TextareaWrapper-module__w-48--eUGIe{width:48%}.TextareaWrapper-module__w-49--IMOQ9{width:49%}.TextareaWrapper-module__w-50--Ozw6c{width:50%}.TextareaWrapper-module__w-51--PBvnD{width:51%}.TextareaWrapper-module__w-52--k25Bp{width:52%}.TextareaWrapper-module__w-53--jDCue{width:53%}.TextareaWrapper-module__w-54--IBsgD{width:54%}.TextareaWrapper-module__w-55--P2S6I{width:55%}.TextareaWrapper-module__w-56--cNxK2{width:56%}.TextareaWrapper-module__w-57--DUnt6{width:57%}.TextareaWrapper-module__w-58--WMV5W{width:58%}.TextareaWrapper-module__w-59--WXDs_{width:59%}.TextareaWrapper-module__w-60--UgNo4{width:60%}.TextareaWrapper-module__w-61--FF0pk{width:61%}.TextareaWrapper-module__w-62--nvvJh{width:62%}.TextareaWrapper-module__w-63--Jrgjr{width:63%}.TextareaWrapper-module__w-64--ssAkB{width:64%}.TextareaWrapper-module__w-65--Qs0ln{width:65%}.TextareaWrapper-module__w-66--tIQWT{width:66%}.TextareaWrapper-module__w-67--Yv9g2{width:67%}.TextareaWrapper-module__w-68--PZzQJ{width:68%}.TextareaWrapper-module__w-69--lmFeu{width:69%}.TextareaWrapper-module__w-70--PxHP1{width:70%}.TextareaWrapper-module__w-71--mYmr_{width:71%}.TextareaWrapper-module__w-72--vooDr{width:72%}.TextareaWrapper-module__w-73--St0j4{width:73%}.TextareaWrapper-module__w-74--pYnoa{width:74%}.TextareaWrapper-module__w-75--KJFdb{width:75%}.TextareaWrapper-module__w-76--fS11f{width:76%}.TextareaWrapper-module__w-77--gyfqB{width:77%}.TextareaWrapper-module__w-78--clojG{width:78%}.TextareaWrapper-module__w-79--DRtH4{width:79%}.TextareaWrapper-module__w-80--wPy2u{width:80%}.TextareaWrapper-module__w-81--vxCyz{width:81%}.TextareaWrapper-module__w-82--Jrzzt{width:82%}.TextareaWrapper-module__w-83--yevLI{width:83%}.TextareaWrapper-module__w-84--idptM{width:84%}.TextareaWrapper-module__w-85--RBWmk{width:85%}.TextareaWrapper-module__w-86--WbxeN{width:86%}.TextareaWrapper-module__w-87--pXr_Z{width:87%}.TextareaWrapper-module__w-88--T6yYW{width:88%}.TextareaWrapper-module__w-89--Duc16{width:89%}.TextareaWrapper-module__w-90--Uu6zu{width:90%}.TextareaWrapper-module__w-91--NuCo1{width:91%}.TextareaWrapper-module__w-92--wtr5p{width:92%}.TextareaWrapper-module__w-93--IujSr{width:93%}.TextareaWrapper-module__w-94--dqdGj{width:94%}.TextareaWrapper-module__w-95--WSdWz{width:95%}.TextareaWrapper-module__w-96--RoQZz{width:96%}.TextareaWrapper-module__w-97--GCROp{width:97%}.TextareaWrapper-module__w-98--Ffv1L{width:98%}.TextareaWrapper-module__w-99--QvI5Y{width:99%}.TextareaWrapper-module__w-100--SEXXO{width:100%}.TextareaWrapper-module__w-101--Qk2Ic{width:101%}.TextareaWrapper-module__w-102--cmsSI{width:102%}.TextareaWrapper-module__w-103--IxDBt{width:103%}.TextareaWrapper-module__w-104--J4V8E{width:104%}.TextareaWrapper-module__w-105--LGrhb{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */label.TextareaWrapper-module__textarea-label--hOxu1.TextareaWrapper-module__focus--Spgc_{color:var(--color-primary)}.TextareaWrapper-module__textarea-wrapper--KnRsR:after{content:\"\";transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;display:block;width:95%;background-color:var(--light);position:absolute;z-index:0;left:1px;top:1px;border-radius:var(--input-border-radius) var(--input-border-radius) 0 0}@media(prefers-reduced-motion: reduce){.TextareaWrapper-module__textarea-wrapper--KnRsR:after{transition-duration:.1ms}}.TextareaWrapper-module__textarea-wrapper--KnRsR.TextareaWrapper-module__disabled--uBVQ5:after{background-color:var(--disabled)}.TextareaWrapper-module__textarea-wrapper--KnRsR.TextareaWrapper-module__focus--Spgc_:after{left:2px;top:2px}.TextareaWrapper-module__textarea-wrapper--KnRsR .TextareaWrapper-module__textarea--Ch7F1:active:not(:disabled){border-color:var(--color-primary)}.TextareaWrapper-module__textarea-wrapper--KnRsR .TextareaWrapper-module__textarea--Ch7F1:focus:not(:disabled){outline:none}.TextareaWrapper-module__textarea-helper-text--ec4be{margin-top:.14rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "TextareaWrapper-module__sr-only--AUiiC",
	"hidden": "TextareaWrapper-module__hidden--XIIIV",
	"slide-in": "TextareaWrapper-module__slide-in--fEpUb",
	"slide-out": "TextareaWrapper-module__slide-out--RDWTy",
	"w-6": "TextareaWrapper-module__w-6--Q5ig_",
	"w-7": "TextareaWrapper-module__w-7--ZvyBG",
	"w-8": "TextareaWrapper-module__w-8--iYSIE",
	"w-9": "TextareaWrapper-module__w-9--HcSL4",
	"w-10": "TextareaWrapper-module__w-10--HeNrR",
	"w-11": "TextareaWrapper-module__w-11--PRExq",
	"w-12": "TextareaWrapper-module__w-12--v2crM",
	"w-13": "TextareaWrapper-module__w-13--bJZtl",
	"w-14": "TextareaWrapper-module__w-14--mxqNN",
	"w-15": "TextareaWrapper-module__w-15--awfU3",
	"w-16": "TextareaWrapper-module__w-16--QMvOJ",
	"w-17": "TextareaWrapper-module__w-17--gDDcO",
	"w-18": "TextareaWrapper-module__w-18--RExU3",
	"w-19": "TextareaWrapper-module__w-19--tCiLz",
	"w-20": "TextareaWrapper-module__w-20--LCifl",
	"w-21": "TextareaWrapper-module__w-21--hJbiU",
	"w-22": "TextareaWrapper-module__w-22--PcECr",
	"w-23": "TextareaWrapper-module__w-23--jPPd3",
	"w-24": "TextareaWrapper-module__w-24--wC1Sr",
	"w-25": "TextareaWrapper-module__w-25--jQF31",
	"w-26": "TextareaWrapper-module__w-26--Zevby",
	"w-27": "TextareaWrapper-module__w-27--lD7lW",
	"w-28": "TextareaWrapper-module__w-28--Isxzs",
	"w-29": "TextareaWrapper-module__w-29--QoVUd",
	"w-30": "TextareaWrapper-module__w-30--VDuuV",
	"w-31": "TextareaWrapper-module__w-31--lWNGF",
	"w-32": "TextareaWrapper-module__w-32--gLEAo",
	"w-33": "TextareaWrapper-module__w-33--x7M_p",
	"w-34": "TextareaWrapper-module__w-34--oRDZD",
	"w-35": "TextareaWrapper-module__w-35--MOYTU",
	"w-36": "TextareaWrapper-module__w-36--qJtmP",
	"w-37": "TextareaWrapper-module__w-37--blaJ8",
	"w-38": "TextareaWrapper-module__w-38--I_mf4",
	"w-39": "TextareaWrapper-module__w-39--T996r",
	"w-40": "TextareaWrapper-module__w-40--sT_yI",
	"w-41": "TextareaWrapper-module__w-41--RBQdt",
	"w-42": "TextareaWrapper-module__w-42--XAYM2",
	"w-43": "TextareaWrapper-module__w-43--lXg_i",
	"w-44": "TextareaWrapper-module__w-44--na0hJ",
	"w-45": "TextareaWrapper-module__w-45--sFcMB",
	"w-46": "TextareaWrapper-module__w-46--jFyEy",
	"w-47": "TextareaWrapper-module__w-47--BaMp7",
	"w-48": "TextareaWrapper-module__w-48--eUGIe",
	"w-49": "TextareaWrapper-module__w-49--IMOQ9",
	"w-50": "TextareaWrapper-module__w-50--Ozw6c",
	"w-51": "TextareaWrapper-module__w-51--PBvnD",
	"w-52": "TextareaWrapper-module__w-52--k25Bp",
	"w-53": "TextareaWrapper-module__w-53--jDCue",
	"w-54": "TextareaWrapper-module__w-54--IBsgD",
	"w-55": "TextareaWrapper-module__w-55--P2S6I",
	"w-56": "TextareaWrapper-module__w-56--cNxK2",
	"w-57": "TextareaWrapper-module__w-57--DUnt6",
	"w-58": "TextareaWrapper-module__w-58--WMV5W",
	"w-59": "TextareaWrapper-module__w-59--WXDs_",
	"w-60": "TextareaWrapper-module__w-60--UgNo4",
	"w-61": "TextareaWrapper-module__w-61--FF0pk",
	"w-62": "TextareaWrapper-module__w-62--nvvJh",
	"w-63": "TextareaWrapper-module__w-63--Jrgjr",
	"w-64": "TextareaWrapper-module__w-64--ssAkB",
	"w-65": "TextareaWrapper-module__w-65--Qs0ln",
	"w-66": "TextareaWrapper-module__w-66--tIQWT",
	"w-67": "TextareaWrapper-module__w-67--Yv9g2",
	"w-68": "TextareaWrapper-module__w-68--PZzQJ",
	"w-69": "TextareaWrapper-module__w-69--lmFeu",
	"w-70": "TextareaWrapper-module__w-70--PxHP1",
	"w-71": "TextareaWrapper-module__w-71--mYmr_",
	"w-72": "TextareaWrapper-module__w-72--vooDr",
	"w-73": "TextareaWrapper-module__w-73--St0j4",
	"w-74": "TextareaWrapper-module__w-74--pYnoa",
	"w-75": "TextareaWrapper-module__w-75--KJFdb",
	"w-76": "TextareaWrapper-module__w-76--fS11f",
	"w-77": "TextareaWrapper-module__w-77--gyfqB",
	"w-78": "TextareaWrapper-module__w-78--clojG",
	"w-79": "TextareaWrapper-module__w-79--DRtH4",
	"w-80": "TextareaWrapper-module__w-80--wPy2u",
	"w-81": "TextareaWrapper-module__w-81--vxCyz",
	"w-82": "TextareaWrapper-module__w-82--Jrzzt",
	"w-83": "TextareaWrapper-module__w-83--yevLI",
	"w-84": "TextareaWrapper-module__w-84--idptM",
	"w-85": "TextareaWrapper-module__w-85--RBWmk",
	"w-86": "TextareaWrapper-module__w-86--WbxeN",
	"w-87": "TextareaWrapper-module__w-87--pXr_Z",
	"w-88": "TextareaWrapper-module__w-88--T6yYW",
	"w-89": "TextareaWrapper-module__w-89--Duc16",
	"w-90": "TextareaWrapper-module__w-90--Uu6zu",
	"w-91": "TextareaWrapper-module__w-91--NuCo1",
	"w-92": "TextareaWrapper-module__w-92--wtr5p",
	"w-93": "TextareaWrapper-module__w-93--IujSr",
	"w-94": "TextareaWrapper-module__w-94--dqdGj",
	"w-95": "TextareaWrapper-module__w-95--WSdWz",
	"w-96": "TextareaWrapper-module__w-96--RoQZz",
	"w-97": "TextareaWrapper-module__w-97--GCROp",
	"w-98": "TextareaWrapper-module__w-98--Ffv1L",
	"w-99": "TextareaWrapper-module__w-99--QvI5Y",
	"w-100": "TextareaWrapper-module__w-100--SEXXO",
	"w-101": "TextareaWrapper-module__w-101--Qk2Ic",
	"w-102": "TextareaWrapper-module__w-102--cmsSI",
	"w-103": "TextareaWrapper-module__w-103--IxDBt",
	"w-104": "TextareaWrapper-module__w-104--J4V8E",
	"w-105": "TextareaWrapper-module__w-105--LGrhb",
	"textarea-label": "TextareaWrapper-module__textarea-label--hOxu1",
	"focus": "TextareaWrapper-module__focus--Spgc_",
	"textarea-wrapper": "TextareaWrapper-module__textarea-wrapper--KnRsR",
	"disabled": "TextareaWrapper-module__disabled--uBVQ5",
	"textarea": "TextareaWrapper-module__textarea--Ch7F1",
	"textarea-helper-text": "TextareaWrapper-module__textarea-helper-text--ec4be"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);