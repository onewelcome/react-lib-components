"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8624],{

/***/ "./src/components/ProgressBar/ProgressBar.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": function() { return /* binding */ ProgressBar; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProgressBar/ProgressBar.module.scss
var ProgressBar_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProgressBar/ProgressBar.module.scss");
;// CONCATENATED MODULE: ./src/components/ProgressBar/ProgressBar.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ProgressBar_module/* default */.Z, options);




       /* harmony default export */ var ProgressBar_ProgressBar_module = (ProgressBar_module/* default */.Z && ProgressBar_module/* default.locals */.Z.locals ? ProgressBar_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/ProgressBar/ProgressBar.tsx
var _excluded = ["placeholderText", "completed"];
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




var ProgressBarComponent = function ProgressBarComponent(_ref, ref) {
  var placeholderText = _ref.placeholderText,
    completed = _ref.completed,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("span", _extends({}, rest, {
    ref: ref,
    role: "progressbar"
  }), /*#__PURE__*/react.createElement("span", {
    className: ProgressBar_ProgressBar_module["progress-bar"]
  }, /*#__PURE__*/react.createElement("span", {
    className: "".concat(ProgressBar_ProgressBar_module.bar, " ").concat(completed ? ProgressBar_ProgressBar_module["w-".concat(5 * Math.round(completed / 5))] : ProgressBar_ProgressBar_module["loading-state"])
  })), /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    className: ProgressBar_ProgressBar_module.placeholder,
    spacing: {
      marginBottom: 0
    },
    variant: "body"
  }, placeholderText));
};
var ProgressBar = /*#__PURE__*/react.forwardRef(ProgressBarComponent);
try {
    // @ts-ignore
    ProgressBar.displayName = "ProgressBar";
    // @ts-ignore
    ProgressBar.__docgenInfo = { "description": "", "displayName": "ProgressBar", "props": { "placeholderText": { "defaultValue": null, "description": "", "name": "placeholderText", "required": true, "type": { "name": "string" } }, "completed": { "defaultValue": null, "description": "", "name": "completed", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"] = { docgenInfo: ProgressBar.__docgenInfo, name: "ProgressBar", path: "src/components/ProgressBar/ProgressBar.tsx#ProgressBar" };
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProgressBar/ProgressBar.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ProgressBar-module__sr-only--rgkxK{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.ProgressBar-module__hidden--oaf1R{display:none}.ProgressBar-module__slide-in--CPuGA{animation:ProgressBar-module__slide-in--CPuGA .5s forwards}@media(prefers-reduced-motion: reduce){.ProgressBar-module__slide-in--CPuGA{animation-duration:.1ms}}.ProgressBar-module__slide-out--aeWqg{animation:ProgressBar-module__slide-out--aeWqg .5s forwards}@media(prefers-reduced-motion: reduce){.ProgressBar-module__slide-out--aeWqg{animation-duration:.1ms}}@keyframes ProgressBar-module__slide-in--CPuGA{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes ProgressBar-module__slide-out--aeWqg{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ProgressBar-module__w-6--TAhbr{width:6%}.ProgressBar-module__w-7--gaFNO{width:7%}.ProgressBar-module__w-8--MRVih{width:8%}.ProgressBar-module__w-9--j8WxC{width:9%}.ProgressBar-module__w-10--m2vje{width:10%}.ProgressBar-module__w-11--OVzMu{width:11%}.ProgressBar-module__w-12--GdOo4{width:12%}.ProgressBar-module__w-13--Trwto{width:13%}.ProgressBar-module__w-14--SHHRO{width:14%}.ProgressBar-module__w-15--TRfF_{width:15%}.ProgressBar-module__w-16--O0hHd{width:16%}.ProgressBar-module__w-17--VGqTM{width:17%}.ProgressBar-module__w-18--u3_Gd{width:18%}.ProgressBar-module__w-19--E_IZV{width:19%}.ProgressBar-module__w-20--pp64o{width:20%}.ProgressBar-module__w-21--iZz3c{width:21%}.ProgressBar-module__w-22--EiarW{width:22%}.ProgressBar-module__w-23--aZGR2{width:23%}.ProgressBar-module__w-24--gWs5Z{width:24%}.ProgressBar-module__w-25--EHhZ3{width:25%}.ProgressBar-module__w-26--vYA8_{width:26%}.ProgressBar-module__w-27--S24L0{width:27%}.ProgressBar-module__w-28--ibiKZ{width:28%}.ProgressBar-module__w-29--85vAM{width:29%}.ProgressBar-module__w-30--Aecb9{width:30%}.ProgressBar-module__w-31--OyxBx{width:31%}.ProgressBar-module__w-32--Bxk43{width:32%}.ProgressBar-module__w-33--jMVVB{width:33%}.ProgressBar-module__w-34--moAQI{width:34%}.ProgressBar-module__w-35--hHJcW{width:35%}.ProgressBar-module__w-36--n1V8C{width:36%}.ProgressBar-module__w-37--nHxud{width:37%}.ProgressBar-module__w-38--y8pGD{width:38%}.ProgressBar-module__w-39--Lx2Hd{width:39%}.ProgressBar-module__w-40--N_y5w{width:40%}.ProgressBar-module__w-41--zHYSB{width:41%}.ProgressBar-module__w-42--xvVMM{width:42%}.ProgressBar-module__w-43--eQsEI{width:43%}.ProgressBar-module__w-44--IURXy{width:44%}.ProgressBar-module__w-45--FdeZj{width:45%}.ProgressBar-module__w-46--yArRj{width:46%}.ProgressBar-module__w-47--s5TvS{width:47%}.ProgressBar-module__w-48--tAqLW{width:48%}.ProgressBar-module__w-49--aMZgZ{width:49%}.ProgressBar-module__w-50--hmlpL{width:50%}.ProgressBar-module__w-51--hJyi1{width:51%}.ProgressBar-module__w-52--t5lJO{width:52%}.ProgressBar-module__w-53--G815B{width:53%}.ProgressBar-module__w-54--VaqnK{width:54%}.ProgressBar-module__w-55--GIH6l{width:55%}.ProgressBar-module__w-56--ze_UA{width:56%}.ProgressBar-module__w-57--A5UIi{width:57%}.ProgressBar-module__w-58--ze6k7{width:58%}.ProgressBar-module__w-59--pmi_E{width:59%}.ProgressBar-module__w-60--HNKos{width:60%}.ProgressBar-module__w-61--X_b8w{width:61%}.ProgressBar-module__w-62--aiZmJ{width:62%}.ProgressBar-module__w-63--litrT{width:63%}.ProgressBar-module__w-64--HfUnc{width:64%}.ProgressBar-module__w-65--zgVpt{width:65%}.ProgressBar-module__w-66--oHyik{width:66%}.ProgressBar-module__w-67--wpCPA{width:67%}.ProgressBar-module__w-68--h3HCF{width:68%}.ProgressBar-module__w-69--v_6vk{width:69%}.ProgressBar-module__w-70--qihZe{width:70%}.ProgressBar-module__w-71--wXynW{width:71%}.ProgressBar-module__w-72--fL_wX{width:72%}.ProgressBar-module__w-73--Xe_xV{width:73%}.ProgressBar-module__w-74--aJxCk{width:74%}.ProgressBar-module__w-75--cBzEi{width:75%}.ProgressBar-module__w-76--uxmeK{width:76%}.ProgressBar-module__w-77--ngR4q{width:77%}.ProgressBar-module__w-78--QPN43{width:78%}.ProgressBar-module__w-79--uYdlF{width:79%}.ProgressBar-module__w-80--K1aW_{width:80%}.ProgressBar-module__w-81--nW7xJ{width:81%}.ProgressBar-module__w-82--jkhnC{width:82%}.ProgressBar-module__w-83--i0Pw4{width:83%}.ProgressBar-module__w-84--iHUs0{width:84%}.ProgressBar-module__w-85--egudI{width:85%}.ProgressBar-module__w-86--bi7YQ{width:86%}.ProgressBar-module__w-87--bQOz7{width:87%}.ProgressBar-module__w-88--kixzV{width:88%}.ProgressBar-module__w-89--HdC5m{width:89%}.ProgressBar-module__w-90--TSuDR{width:90%}.ProgressBar-module__w-91--d8oqh{width:91%}.ProgressBar-module__w-92--gsL7h{width:92%}.ProgressBar-module__w-93--j_dDw{width:93%}.ProgressBar-module__w-94--RcnqF{width:94%}.ProgressBar-module__w-95--mYzmx{width:95%}.ProgressBar-module__w-96--b8Y_t{width:96%}.ProgressBar-module__w-97--aKK2u{width:97%}.ProgressBar-module__w-98--dSqNy{width:98%}.ProgressBar-module__w-99--wfGMo{width:99%}.ProgressBar-module__w-100--NR81q{width:100%}.ProgressBar-module__w-101--ykvkM{width:101%}.ProgressBar-module__w-102--e9kNT{width:102%}.ProgressBar-module__w-103--IxqTV{width:103%}.ProgressBar-module__w-104--a1hlC{width:104%}.ProgressBar-module__w-105--jyvcR{width:105%}.ProgressBar-module__progress-bar--kq_2y{position:relative;display:block;height:.5rem;width:100%;border-radius:.25rem;background-color:var(--progress-bar-background-color);overflow:hidden}@media(prefers-reduced-motion: reduce){.ProgressBar-module__progress-bar--kq_2y{display:none}}.ProgressBar-module__progress-bar--kq_2y .ProgressBar-module__bar--jv7ix{position:absolute;height:.5rem;border-radius:.25rem;background-color:var(--color-primary)}.ProgressBar-module__progress-bar--kq_2y .ProgressBar-module__bar--jv7ix.ProgressBar-module__loading-state--yJxCC{width:50%;animation:cubic-bezier(0.23, 0.78, 0.78, 0.23) 1s ProgressBar-module__slide-in--CPuGA infinite}@keyframes ProgressBar-module__slide-in--CPuGA{0%{left:-50%}100%{left:100%}}.ProgressBar-module__placeholder--igo4g{display:none}@media(prefers-reduced-motion: reduce){.ProgressBar-module__placeholder--igo4g{display:unset}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "ProgressBar-module__sr-only--rgkxK",
	"hidden": "ProgressBar-module__hidden--oaf1R",
	"slide-in": "ProgressBar-module__slide-in--CPuGA",
	"slide-out": "ProgressBar-module__slide-out--aeWqg",
	"w-6": "ProgressBar-module__w-6--TAhbr",
	"w-7": "ProgressBar-module__w-7--gaFNO",
	"w-8": "ProgressBar-module__w-8--MRVih",
	"w-9": "ProgressBar-module__w-9--j8WxC",
	"w-10": "ProgressBar-module__w-10--m2vje",
	"w-11": "ProgressBar-module__w-11--OVzMu",
	"w-12": "ProgressBar-module__w-12--GdOo4",
	"w-13": "ProgressBar-module__w-13--Trwto",
	"w-14": "ProgressBar-module__w-14--SHHRO",
	"w-15": "ProgressBar-module__w-15--TRfF_",
	"w-16": "ProgressBar-module__w-16--O0hHd",
	"w-17": "ProgressBar-module__w-17--VGqTM",
	"w-18": "ProgressBar-module__w-18--u3_Gd",
	"w-19": "ProgressBar-module__w-19--E_IZV",
	"w-20": "ProgressBar-module__w-20--pp64o",
	"w-21": "ProgressBar-module__w-21--iZz3c",
	"w-22": "ProgressBar-module__w-22--EiarW",
	"w-23": "ProgressBar-module__w-23--aZGR2",
	"w-24": "ProgressBar-module__w-24--gWs5Z",
	"w-25": "ProgressBar-module__w-25--EHhZ3",
	"w-26": "ProgressBar-module__w-26--vYA8_",
	"w-27": "ProgressBar-module__w-27--S24L0",
	"w-28": "ProgressBar-module__w-28--ibiKZ",
	"w-29": "ProgressBar-module__w-29--85vAM",
	"w-30": "ProgressBar-module__w-30--Aecb9",
	"w-31": "ProgressBar-module__w-31--OyxBx",
	"w-32": "ProgressBar-module__w-32--Bxk43",
	"w-33": "ProgressBar-module__w-33--jMVVB",
	"w-34": "ProgressBar-module__w-34--moAQI",
	"w-35": "ProgressBar-module__w-35--hHJcW",
	"w-36": "ProgressBar-module__w-36--n1V8C",
	"w-37": "ProgressBar-module__w-37--nHxud",
	"w-38": "ProgressBar-module__w-38--y8pGD",
	"w-39": "ProgressBar-module__w-39--Lx2Hd",
	"w-40": "ProgressBar-module__w-40--N_y5w",
	"w-41": "ProgressBar-module__w-41--zHYSB",
	"w-42": "ProgressBar-module__w-42--xvVMM",
	"w-43": "ProgressBar-module__w-43--eQsEI",
	"w-44": "ProgressBar-module__w-44--IURXy",
	"w-45": "ProgressBar-module__w-45--FdeZj",
	"w-46": "ProgressBar-module__w-46--yArRj",
	"w-47": "ProgressBar-module__w-47--s5TvS",
	"w-48": "ProgressBar-module__w-48--tAqLW",
	"w-49": "ProgressBar-module__w-49--aMZgZ",
	"w-50": "ProgressBar-module__w-50--hmlpL",
	"w-51": "ProgressBar-module__w-51--hJyi1",
	"w-52": "ProgressBar-module__w-52--t5lJO",
	"w-53": "ProgressBar-module__w-53--G815B",
	"w-54": "ProgressBar-module__w-54--VaqnK",
	"w-55": "ProgressBar-module__w-55--GIH6l",
	"w-56": "ProgressBar-module__w-56--ze_UA",
	"w-57": "ProgressBar-module__w-57--A5UIi",
	"w-58": "ProgressBar-module__w-58--ze6k7",
	"w-59": "ProgressBar-module__w-59--pmi_E",
	"w-60": "ProgressBar-module__w-60--HNKos",
	"w-61": "ProgressBar-module__w-61--X_b8w",
	"w-62": "ProgressBar-module__w-62--aiZmJ",
	"w-63": "ProgressBar-module__w-63--litrT",
	"w-64": "ProgressBar-module__w-64--HfUnc",
	"w-65": "ProgressBar-module__w-65--zgVpt",
	"w-66": "ProgressBar-module__w-66--oHyik",
	"w-67": "ProgressBar-module__w-67--wpCPA",
	"w-68": "ProgressBar-module__w-68--h3HCF",
	"w-69": "ProgressBar-module__w-69--v_6vk",
	"w-70": "ProgressBar-module__w-70--qihZe",
	"w-71": "ProgressBar-module__w-71--wXynW",
	"w-72": "ProgressBar-module__w-72--fL_wX",
	"w-73": "ProgressBar-module__w-73--Xe_xV",
	"w-74": "ProgressBar-module__w-74--aJxCk",
	"w-75": "ProgressBar-module__w-75--cBzEi",
	"w-76": "ProgressBar-module__w-76--uxmeK",
	"w-77": "ProgressBar-module__w-77--ngR4q",
	"w-78": "ProgressBar-module__w-78--QPN43",
	"w-79": "ProgressBar-module__w-79--uYdlF",
	"w-80": "ProgressBar-module__w-80--K1aW_",
	"w-81": "ProgressBar-module__w-81--nW7xJ",
	"w-82": "ProgressBar-module__w-82--jkhnC",
	"w-83": "ProgressBar-module__w-83--i0Pw4",
	"w-84": "ProgressBar-module__w-84--iHUs0",
	"w-85": "ProgressBar-module__w-85--egudI",
	"w-86": "ProgressBar-module__w-86--bi7YQ",
	"w-87": "ProgressBar-module__w-87--bQOz7",
	"w-88": "ProgressBar-module__w-88--kixzV",
	"w-89": "ProgressBar-module__w-89--HdC5m",
	"w-90": "ProgressBar-module__w-90--TSuDR",
	"w-91": "ProgressBar-module__w-91--d8oqh",
	"w-92": "ProgressBar-module__w-92--gsL7h",
	"w-93": "ProgressBar-module__w-93--j_dDw",
	"w-94": "ProgressBar-module__w-94--RcnqF",
	"w-95": "ProgressBar-module__w-95--mYzmx",
	"w-96": "ProgressBar-module__w-96--b8Y_t",
	"w-97": "ProgressBar-module__w-97--aKK2u",
	"w-98": "ProgressBar-module__w-98--dSqNy",
	"w-99": "ProgressBar-module__w-99--wfGMo",
	"w-100": "ProgressBar-module__w-100--NR81q",
	"w-101": "ProgressBar-module__w-101--ykvkM",
	"w-102": "ProgressBar-module__w-102--e9kNT",
	"w-103": "ProgressBar-module__w-103--IxqTV",
	"w-104": "ProgressBar-module__w-104--a1hlC",
	"w-105": "ProgressBar-module__w-105--jyvcR",
	"progress-bar": "ProgressBar-module__progress-bar--kq_2y",
	"bar": "ProgressBar-module__bar--jv7ix",
	"loading-state": "ProgressBar-module__loading-state--yJxCC",
	"placeholder": "ProgressBar-module__placeholder--igo4g"
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