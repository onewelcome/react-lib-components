(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[179],{

/***/ "./.storybook/addon/dist/esm/preset/preview.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__namedExportsOrder": function() { return /* binding */ preview_namedExportsOrder; },
  "decorators": function() { return /* binding */ decorators; },
  "globalTypes": function() { return /* binding */ globalTypes; }
});

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_ADDONS__"
var external_STORYBOOK_MODULE_ADDONS_ = __webpack_require__("@storybook/addons");
;// CONCATENATED MODULE: ./.storybook/addon/dist/esm/utils/helpers.js
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

var cssPropertyToObjectKey = function cssPropertyToObjectKey(CSSProperty) {
  var matchesKeyValue = CSSProperty.match(/--(.+)(?=:):?(.+)?/);
  var matchesKeyOnly = CSSProperty.match(/var\(--(.+)\)/);
  var objectKeyValue = {
    key: null,
    value: null
  };
  var generateObjectKey = function generateObjectKey(CSSPropertyString) {
    return CSSPropertyString.replace(/-(.+?)/g, function (_v, a) {
      if (a) {
        return a.toUpperCase();
      }
    });
  };
  if (!matchesKeyValue && matchesKeyOnly && matchesKeyOnly[1]) {
    objectKeyValue.key = generateObjectKey(matchesKeyOnly[1]);
  }
  if (matchesKeyValue && matchesKeyValue[1]) {
    objectKeyValue.key = generateObjectKey(matchesKeyValue[1]);
  }
  if (matchesKeyValue && matchesKeyValue[2]) {
    objectKeyValue.value = matchesKeyValue[2];
  }
  if (objectKeyValue.key === null && objectKeyValue.value === null) {
    console.error("Could not properly parse CSS Property ".concat(CSSProperty, " to an Object Key"));
  }
  return objectKeyValue;
};
var objectKeyToCSSProperty = function objectKeyToCSSProperty(_ref) {
  var key = _ref.key,
    value = _ref.value;
  var formattedPropertyName = key.replace(/([A-Z])/g, function (val) {
    return "-".concat(val.toLowerCase());
  });
  return "--".concat(formattedPropertyName, ": ").concat(value);
};
const __namedExportsOrder = (/* unused pure expression or super */ null && (["cssPropertyToObjectKey", "objectKeyToCSSProperty"]));
;// CONCATENATED MODULE: ./.storybook/addon/dist/esm/withBaseStyling.js
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



var withBaseStyling = function withBaseStyling(StoryFn, context) {
  var _useGlobals = (0,external_STORYBOOK_MODULE_ADDONS_.useGlobals)(),
    _useGlobals2 = _slicedToArray(_useGlobals, 2),
    baseStyling = _useGlobals2[0].baseStyling,
    updateGlobals = _useGlobals2[1];
  var waitForMs = 1; // See README.md technical explanation for why a timeout is necessary.

  var updateGlobalsFn = function updateGlobalsFn(context) {
    var _context$canvasElemen;
    var baseStylingElement = (_context$canvasElemen = context.canvasElement) === null || _context$canvasElemen === void 0 ? void 0 : _context$canvasElemen.querySelector(".basestyling-wrapper");
    if (baseStylingElement) {
      var _context$globals;
      var stylesObject = parseStylesToObject(baseStylingElement.getAttribute("style"));
      if (!((_context$globals = context.globals) !== null && _context$globals !== void 0 && _context$globals.baseStyling)) {
        updateGlobals({
          baseStyling: stylesObject
        });
      }
    }
  };
  (0,external_STORYBOOK_MODULE_ADDONS_.useEffect)(function () {
    setTimeout(function () {
      return updateGlobalsFn(context);
    }, waitForMs);
  }, [window.location.search]);
  (0,external_STORYBOOK_MODULE_ADDONS_.useEffect)(function () {
    setSessionStorageAndDispatchUpdateStylingEvent(baseStyling);
  }, [baseStyling]);
  var parseStylesToObject = function parseStylesToObject(styleString) {
    var propertiesArray = styleString.split(";");
    var propertiesObject = propertiesArray.reduce(function (propertiesObj, currentProperty) {
      if (currentProperty) {
        return _objectSpread(_objectSpread({}, propertiesObj), {}, _defineProperty({}, cssPropertyToObjectKey(currentProperty).key, cssPropertyToObjectKey(currentProperty).value));
      }
      return propertiesObj;
    }, {});
    return propertiesObject;
  };
  var setSessionStorageAndDispatchUpdateStylingEvent = function setSessionStorageAndDispatchUpdateStylingEvent(stylingObject) {
    if (!stylingObject) return;
    window.sessionStorage.setItem("basestyling", JSON.stringify(stylingObject));
    var updatedStyling = new Event("updated-styling");
    window.dispatchEvent(updatedStyling);
  };
  return StoryFn();
};
const withBaseStyling_namedExportsOrder = (/* unused pure expression or super */ null && (["withBaseStyling"]));
;// CONCATENATED MODULE: ./.storybook/addon/dist/esm/preset/preview.js
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

/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators#gatsby-focus-wrapper
 */

var globalTypes = {
  baseStyling: {}
};
var decorators = [withBaseStyling];
const preview_namedExportsOrder = ["globalTypes", "decorators"];

/***/ }),

/***/ "./.storybook/preview.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "decorators": function() { return /* binding */ decorators; },
  "parameters": function() { return /* binding */ parameters; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/base.scss
var base = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/base.scss");
;// CONCATENATED MODULE: ./.storybook/base.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(base/* default */.Z, options);




       /* harmony default export */ var _storybook_base = (base/* default */.Z && base/* default.locals */.Z.locals ? base/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/_BaseStyling_/BaseStyling.tsx
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

/**
 * If you add more CSS variables, and they are a color, make sure to go into /.storybook/addon/src/components/PanelContent.tsx
 * and make sure to add it to the shouldBeColorPicker array!
 */


var BaseStyling = function BaseStyling(_ref) {
  var children = _ref.children,
    _ref$properties = _ref.properties,
    properties = _ref$properties === void 0 ? {} : _ref$properties;
  var defaultProperties = {
    colorBlack10: "#0000001a",
    colorPrimary300: "#6871BF",
    colorPrimary500: "#041295",
    colorPrimary600: "#030F77",
    colorPrimary700: "#020B59",
    colorPrimary900: "#01041E",
    colorBlueGrey25: "#F7F7F9",
    colorBlueGrey25Transparent: "#F7F7F980",
    colorBlueGrey50: "#EEEFF3",
    colorBlueGrey100: "#DEDEE6",
    colorBlueGrey200: "#BCBECE",
    colorBlueGrey400: "#797D9C",
    colorBlueGrey500: "#5D607E",
    colorBlueGrey700: "#383A4B",
    colorBlueGrey800: "#252733",
    colorBlueGrey900: "#131319",
    colorGreen500: "#178244",
    colorGreen600: "#126836",
    colorGreen700: "#0E4E29",
    colorLightBlue500: "#00BCDD",
    colorLightBlue600: "#0096B1",
    colorOrange500: "#E07900",
    colorOrange600: "#B36100",
    colorOrange700: "#864900",
    colorRed500: "#E01E00",
    colorRed600: "#B31800",
    colorRed700: "#861200",
    colorBlack100: "rgba(0, 0, 0, 1)",
    colorBlack20: "rgba(0, 0, 0, 0.2)",
    colorShadowBlue: "#7078C3",
    colorWhite: "#FFFFFF",
    colorFocus: "var(--color-primary300)",
    colorPrimary: "var(--color-primary500)",
    colorSecondary: "var(--color-green500)",
    colorTertiary: "var(--color-light-blue600)",
    defaultLineHeight: "1.5",
    buttonBorderRadius: "2px",
    buttonBorderWidth: "2px",
    buttonFontSize: "1rem",
    buttonBorderStyle: "solid",
    buttonFillTextColor: "var(--light)",
    buttonPrimaryDefaultColor: "var(--color-primary500)",
    buttonPrimaryHoverColor: "var(--color-primary600)",
    buttonPrimaryFocusedColor: "var(--color-primary500)",
    buttonPrimaryPressedColor: "var(--color-primary700)",
    buttonSecondaryDefaultColor: "var(--color-green500)",
    buttonSecondaryHoverColor: "var(--color-green600)",
    buttonSecondaryFocusedColor: "var(--color-green500)",
    buttonSecondaryPressedColor: "var(--color-green700)",
    buttonWarningDefaultColor: "var(--color-orange500)",
    buttonWarningHoverColor: "var(--color-orange600)",
    buttonWarningFocusedColor: "var(--color-orange500)",
    buttonWarningPressedColor: "var(--color-orange700)",
    buttonDangerDefaultColor: "var(--color-red500)",
    buttonDangerHoverColor: "var(--color-red600)",
    buttonDangerFocusedColor: "var(--color-red500)",
    buttonDangerPressedColor: "var(--color-red700)",
    buttonDefaultColor: "var(--color-blue-grey700)",
    buttonDefaultHoverColor: "var(--color-blue-grey800)",
    buttonDefaultFocusedColor: "var(--color-blue-grey700)",
    buttonDefaultPressedColor: "var(--color-blue-grey800)",
    buttonOutlineHoverTextColor: "var(--color-primary600)",
    inputBorderRadius: "2px",
    inputBorderWidth: "1px",
    inputBorderWidthFocus: "2px",
    inputBorderStyle: "solid",
    inputBackgroundColor: "var(--light)",
    dragBackgroundColor: "var(--color-blue-grey25-transparent)",
    dragBorderStyle: "solid",
    modalShadowColor: "rgba(0, 0, 0, 0.16)",
    modalBackgroundColor: "var(--color-blue-grey25)",
    modalHeaderBackgroundColor: "var(--light)",
    skeletonBackgroundColor: "var(--disabled)",
    skeletonAnimationColorRgb: "255, 255, 255",
    snackbarTextColor: "var(--light)",
    snackbarInfoBackgroundColor: "var(--color-primary500)",
    snackbarSuccessBackgroundColor: "var(--color-green500)",
    snackbarErrorBackgroundColor: "var(--color-red500)",
    snackbarBorderRadius: "2px",
    bannerBorderRadius: "2px",
    bannerBorderWidth: "0 0 0 4px",
    dataGridRowBackgroundColor: "transparent",
    dataGridRowHoverBackgroundColor: "var(--color-blue-grey25)",
    tabsBackgroundColor: "var(--light)",
    tabActiveBorderHeight: "4px",
    tabActiveBorderColor: "var(--color-primary)",
    tablistBorderWidth: "1px",
    tablistBorderStyle: "solid",
    tablistBorderColor: "var(--color-blue-grey100)",
    tabTextColor: "var(--color-blue-grey900)",
    wizardStepIndicatorFutureColor: "var(--color-blue-grey200)",
    default: "var(--color-blue-grey900)",
    success: "var(--color-green500)",
    error: "var(--color-red500)",
    info: "var(--color-primary500)",
    disabled: "var(--color-blue-grey100)",
    greyedOut: "var(--color-blue-grey400)",
    lightGreyBorder: "var(--color-blue-grey100)",
    warning: "var(--color-orange500)",
    light: "var(--color-white)",
    fontFamily: "Roboto, sans-serif",
    fontFamilyCode: "'Roboto Mono', monospace",
    fontSize: "1rem",
    fontSizeH1: "2.5rem",
    fontSizeH2: "1.625rem",
    fontSizeH3: "1.5rem",
    fontSizeH4: "1.25rem",
    fontSizeSub: ".75rem",
    fontSizeCode: "1rem",
    formControlFontSize: "14px"
  };

  /** We need a loading state, because otherwise you see the colors flash from the default to the possible overridden ones. */
  var _useState = (0,react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var baseStylingWrapper = (0,react.useRef)(null);
  var setCSSProperties = function setCSSProperties(CSSPropertiesObject) {
    for (var _i2 = 0, _Object$entries = Object.entries(CSSPropertiesObject); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var formattedPropertyName = key.replace(/([A-Z])/g, function (val) {
        return "-".concat(val.toLowerCase());
      });
      baseStylingWrapper.current.style.setProperty("--".concat(formattedPropertyName), value);
    }
  };
  (0,react.useEffect)(function () {
    if (Object.keys(properties).length !== 0 && baseStylingWrapper.current) {
      var mergedState = _objectSpread(_objectSpread({}, defaultProperties), properties);
      setCSSProperties(mergedState);
    } else if (baseStylingWrapper.current) {
      setCSSProperties(defaultProperties);
    }
    setIsLoading(false);
  }, [properties, baseStylingWrapper.current]);
  return /*#__PURE__*/react.createElement("div", {
    className: "basestyling-wrapper",
    ref: baseStylingWrapper
  }, !isLoading ? children : null);
};
try {
    // @ts-ignore
    BaseStyling.displayName = "BaseStyling";
    // @ts-ignore
    BaseStyling.__docgenInfo = { "description": "", "displayName": "BaseStyling", "props": { "properties": { "defaultValue": { value: "{}" }, "description": "", "name": "properties", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/_BaseStyling_/BaseStyling.tsx#BaseStyling"] = { docgenInfo: BaseStyling.__docgenInfo, name: "BaseStyling", path: "src/components/_BaseStyling_/BaseStyling.tsx#BaseStyling" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./.storybook/preview.tsx
function preview_slicedToArray(arr, i) {
  return preview_arrayWithHoles(arr) || preview_iterableToArrayLimit(arr, i) || preview_unsupportedIterableToArray(arr, i) || preview_nonIterableRest();
}
function preview_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function preview_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return preview_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return preview_arrayLikeToArray(o, minLen);
}
function preview_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function preview_iterableToArrayLimit(arr, i) {
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
function preview_arrayWithHoles(arr) {
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






// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
var parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: {
    argTypesRegex: "^on.*"
  }
};
var Preview = function Preview(story) {
  var _useState = (0,react.useState)({}),
    _useState2 = preview_slicedToArray(_useState, 2),
    properties = _useState2[0],
    setProperties = _useState2[1];
  (0,react.useEffect)(function () {
    parseBaseStylingStorage();
  }, []);
  (0,react.useEffect)(function () {
    window.addEventListener("updated-styling", parseBaseStylingStorage);
    return function () {
      window.removeEventListener("updated-styling", parseBaseStylingStorage);
    };
  }, []);
  var parseBaseStylingStorage = function parseBaseStylingStorage() {
    var baseStylingSessionStorage = window.sessionStorage.getItem("basestyling");
    if (baseStylingSessionStorage && baseStylingSessionStorage !== "undefined") {
      setProperties(JSON.parse(baseStylingSessionStorage));
    }
  };
  return /*#__PURE__*/react.createElement(BaseStyling, {
    properties: properties
  }, story());
};
var decorators = [function (story) {
  return Preview(story);
}];
var __namedExportsOrder = ["parameters", "decorators"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/base.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */body{font-family:Roboto,sans-serif}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx%7Cjs%7Cjsx%7Cmdx))$":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./BaseStyling/BaseStyling.stories.mdx": [
		"./stories/BaseStyling/BaseStyling.stories.mdx",
		1582,
		9346
	],
	"./Breadcrumbs/Breadcrumbs.stories": [
		"./stories/Breadcrumbs/Breadcrumbs.stories.tsx",
		1582,
		4662,
		4540,
		2263,
		9018
	],
	"./Breadcrumbs/Breadcrumbs.stories.tsx": [
		"./stories/Breadcrumbs/Breadcrumbs.stories.tsx",
		1582,
		4662,
		4540,
		2263,
		9018
	],
	"./Button/Button.stories": [
		"./stories/Button/Button.stories.tsx",
		1582,
		4540,
		4937,
		5507,
		9228
	],
	"./Button/Button.stories.tsx": [
		"./stories/Button/Button.stories.tsx",
		1582,
		4540,
		4937,
		5507,
		9228
	],
	"./Button/IconButton.stories": [
		"./stories/Button/IconButton.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		7519
	],
	"./Button/IconButton.stories.tsx": [
		"./stories/Button/IconButton.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		7519
	],
	"./ContextMenu/ContextMenu.stories": [
		"./stories/ContextMenu/ContextMenu.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		9264,
		898,
		9239
	],
	"./ContextMenu/ContextMenu.stories.tsx": [
		"./stories/ContextMenu/ContextMenu.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		9264,
		898,
		9239
	],
	"./DataGrid/DataGrid.stories": [
		"./stories/DataGrid/DataGrid.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		6246,
		5507,
		9685,
		2310,
		9264,
		898,
		1034,
		3123
	],
	"./DataGrid/DataGrid.stories.tsx": [
		"./stories/DataGrid/DataGrid.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		6246,
		5507,
		9685,
		2310,
		9264,
		898,
		1034,
		3123
	],
	"./Form/Elements/Checkbox.stories": [
		"./stories/Form/Elements/Checkbox.stories.tsx",
		1582,
		4540,
		2310,
		2263,
		504
	],
	"./Form/Elements/Checkbox.stories.tsx": [
		"./stories/Form/Elements/Checkbox.stories.tsx",
		1582,
		4540,
		2310,
		2263,
		504
	],
	"./Form/Elements/Fieldset.stories": [
		"./stories/Form/Elements/Fieldset.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		5507,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		9373
	],
	"./Form/Elements/Fieldset.stories.tsx": [
		"./stories/Form/Elements/Fieldset.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		5507,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		9373
	],
	"./Form/Elements/FileItem.stories": [
		"./stories/Form/Elements/FileItem.stories.tsx",
		1582,
		4540,
		8624,
		7392,
		7953
	],
	"./Form/Elements/FileItem.stories.tsx": [
		"./stories/Form/Elements/FileItem.stories.tsx",
		1582,
		4540,
		8624,
		7392,
		7953
	],
	"./Form/Elements/FileUpload.stories": [
		"./stories/Form/Elements/FileUpload.stories.tsx",
		1582,
		4540,
		4937,
		5507,
		8624,
		7392,
		7039
	],
	"./Form/Elements/FileUpload.stories.tsx": [
		"./stories/Form/Elements/FileUpload.stories.tsx",
		1582,
		4540,
		4937,
		5507,
		8624,
		7392,
		7039
	],
	"./Form/Elements/FormControl.stories": [
		"./stories/Form/Elements/FormControl.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		6264
	],
	"./Form/Elements/FormControl.stories.tsx": [
		"./stories/Form/Elements/FormControl.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		6264
	],
	"./Form/Elements/FormHelperText.stories": [
		"./stories/Form/Elements/FormHelperText.stories.tsx",
		1582,
		8060
	],
	"./Form/Elements/FormHelperText.stories.tsx": [
		"./stories/Form/Elements/FormHelperText.stories.tsx",
		1582,
		8060
	],
	"./Form/Elements/Input.stories": [
		"./stories/Form/Elements/Input.stories.tsx",
		1582,
		4540,
		2807,
		1531
	],
	"./Form/Elements/Input.stories.tsx": [
		"./stories/Form/Elements/Input.stories.tsx",
		1582,
		4540,
		2807,
		1531
	],
	"./Form/Elements/Radio.stories": [
		"./stories/Form/Elements/Radio.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		5044
	],
	"./Form/Elements/Radio.stories.tsx": [
		"./stories/Form/Elements/Radio.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		5044
	],
	"./Form/Elements/Select.stories": [
		"./stories/Form/Elements/Select.stories.tsx",
		1582,
		4540,
		2807,
		9685,
		1057
	],
	"./Form/Elements/Select.stories.tsx": [
		"./stories/Form/Elements/Select.stories.tsx",
		1582,
		4540,
		2807,
		9685,
		1057
	],
	"./Form/Elements/Textarea.stories": [
		"./stories/Form/Elements/Textarea.stories.tsx",
		1582,
		4540,
		5329,
		674
	],
	"./Form/Elements/Textarea.stories.tsx": [
		"./stories/Form/Elements/Textarea.stories.tsx",
		1582,
		4540,
		5329,
		674
	],
	"./Form/Elements/Toggle.stories": [
		"./stories/Form/Elements/Toggle.stories.tsx",
		1582,
		4540,
		2310,
		8442
	],
	"./Form/Elements/Toggle.stories.tsx": [
		"./stories/Form/Elements/Toggle.stories.tsx",
		1582,
		4540,
		2310,
		8442
	],
	"./Form/Form.stories": [
		"./stories/Form/Form.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		5507,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		5189
	],
	"./Form/Form.stories.tsx": [
		"./stories/Form/Form.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		5507,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		5189
	],
	"./Form/Wrapper/CheckboxWrapper.stories": [
		"./stories/Form/Wrapper/CheckboxWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		3969
	],
	"./Form/Wrapper/CheckboxWrapper.stories.tsx": [
		"./stories/Form/Wrapper/CheckboxWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		3969
	],
	"./Form/Wrapper/InputWrapper.stories": [
		"./stories/Form/Wrapper/InputWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		928
	],
	"./Form/Wrapper/InputWrapper.stories.tsx": [
		"./stories/Form/Wrapper/InputWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		928
	],
	"./Form/Wrapper/RadioWrapper.stories": [
		"./stories/Form/Wrapper/RadioWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		2770
	],
	"./Form/Wrapper/RadioWrapper.stories.tsx": [
		"./stories/Form/Wrapper/RadioWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		4261,
		9685,
		2310,
		5329,
		1690,
		8068,
		2770
	],
	"./Form/Wrapper/SelectWrapper.stories": [
		"./stories/Form/Wrapper/SelectWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		9685,
		1092
	],
	"./Form/Wrapper/SelectWrapper.stories.tsx": [
		"./stories/Form/Wrapper/SelectWrapper.stories.tsx",
		1582,
		4540,
		2807,
		9718,
		9685,
		1092
	],
	"./Form/Wrapper/TextareaWrapper.stories": [
		"./stories/Form/Wrapper/TextareaWrapper.stories.tsx",
		1582,
		4540,
		9718,
		5329,
		1690,
		7512
	],
	"./Form/Wrapper/TextareaWrapper.stories.tsx": [
		"./stories/Form/Wrapper/TextareaWrapper.stories.tsx",
		1582,
		4540,
		9718,
		5329,
		1690,
		7512
	],
	"./Icon/Icon.stories": [
		"./stories/Icon/Icon.stories.tsx",
		1582,
		4540,
		2686
	],
	"./Icon/Icon.stories.tsx": [
		"./stories/Icon/Icon.stories.tsx",
		1582,
		4540,
		2686
	],
	"./Link/Link.stories": [
		"./stories/Link/Link.stories.tsx",
		1582,
		2263,
		8000
	],
	"./Link/Link.stories.tsx": [
		"./stories/Link/Link.stories.tsx",
		1582,
		2263,
		8000
	],
	"./Notifications/Banner/Banner.stories": [
		"./stories/Notifications/Banner/Banner.stories.tsx",
		1582,
		4540,
		9427
	],
	"./Notifications/Banner/Banner.stories.tsx": [
		"./stories/Notifications/Banner/Banner.stories.tsx",
		1582,
		4540,
		9427
	],
	"./Notifications/Dialog/Dialog.stories": [
		"./stories/Notifications/Dialog/Dialog.stories.tsx",
		1582,
		4937,
		5507,
		1734,
		4616,
		7152
	],
	"./Notifications/Dialog/Dialog.stories.tsx": [
		"./stories/Notifications/Dialog/Dialog.stories.tsx",
		1582,
		4937,
		5507,
		1734,
		4616,
		7152
	],
	"./Notifications/DiscardChangesModal/DiscardChangesModal.stories": [
		"./stories/Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		1734,
		4616,
		7847
	],
	"./Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx": [
		"./stories/Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		1734,
		4616,
		7847
	],
	"./Notifications/Modal/Modal.stories": [
		"./stories/Notifications/Modal/Modal.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		1734,
		9497
	],
	"./Notifications/Modal/Modal.stories.tsx": [
		"./stories/Notifications/Modal/Modal.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		1734,
		9497
	],
	"./Notifications/SlideInModal/SlideInModal.stories": [
		"./stories/Notifications/SlideInModal/SlideInModal.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		1734,
		5788
	],
	"./Notifications/SlideInModal/SlideInModal.stories.tsx": [
		"./stories/Notifications/SlideInModal/SlideInModal.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		1734,
		5788
	],
	"./Notifications/Snackbar/Snackbar.stories": [
		"./stories/Notifications/Snackbar/Snackbar.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		5507,
		1627
	],
	"./Notifications/Snackbar/Snackbar.stories.tsx": [
		"./stories/Notifications/Snackbar/Snackbar.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		5507,
		1627
	],
	"./Pagination/Pagination.stories": [
		"./stories/Pagination/Pagination.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		6246,
		9685,
		1034,
		4066
	],
	"./Pagination/Pagination.stories.tsx": [
		"./stories/Pagination/Pagination.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		6246,
		9685,
		1034,
		4066
	],
	"./ProgressBar/ProgressBar.stories": [
		"./stories/ProgressBar/ProgressBar.stories.tsx",
		1582,
		8624,
		594
	],
	"./ProgressBar/ProgressBar.stories.tsx": [
		"./stories/ProgressBar/ProgressBar.stories.tsx",
		1582,
		8624,
		594
	],
	"./Skeleton/Skeleton.stories": [
		"./stories/Skeleton/Skeleton.stories.tsx",
		1582,
		1713
	],
	"./Skeleton/Skeleton.stories.tsx": [
		"./stories/Skeleton/Skeleton.stories.tsx",
		1582,
		1713
	],
	"./StatusIndicator/StatusIndicator.stories": [
		"./stories/StatusIndicator/StatusIndicator.stories.tsx",
		1582,
		4144
	],
	"./StatusIndicator/StatusIndicator.stories.tsx": [
		"./stories/StatusIndicator/StatusIndicator.stories.tsx",
		1582,
		4144
	],
	"./Tabs/Tabs.stories": [
		"./stories/Tabs/Tabs.stories.tsx",
		1582,
		3947
	],
	"./Tabs/Tabs.stories.tsx": [
		"./stories/Tabs/Tabs.stories.tsx",
		1582,
		3947
	],
	"./TextEllipsis/TextEllipsis.stories": [
		"./stories/TextEllipsis/TextEllipsis.stories.tsx",
		1582,
		9264,
		3112
	],
	"./TextEllipsis/TextEllipsis.stories.tsx": [
		"./stories/TextEllipsis/TextEllipsis.stories.tsx",
		1582,
		9264,
		3112
	],
	"./Tiles/Tile.stories": [
		"./stories/Tiles/Tile.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		9264,
		898,
		2858,
		1095
	],
	"./Tiles/Tile.stories.tsx": [
		"./stories/Tiles/Tile.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		9264,
		898,
		2858,
		1095
	],
	"./Tiles/Tiles.stories": [
		"./stories/Tiles/Tiles.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		9264,
		898,
		2858,
		2342
	],
	"./Tiles/Tiles.stories.tsx": [
		"./stories/Tiles/Tiles.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		9264,
		898,
		2858,
		2342
	],
	"./Tooltip/Tooltip.stories": [
		"./stories/Tooltip/Tooltip.stories.tsx",
		1582,
		4540,
		2724
	],
	"./Tooltip/Tooltip.stories.tsx": [
		"./stories/Tooltip/Tooltip.stories.tsx",
		1582,
		4540,
		2724
	],
	"./Typography/Typography.stories": [
		"./stories/Typography/Typography.stories.tsx",
		1582,
		1635
	],
	"./Typography/Typography.stories.tsx": [
		"./stories/Typography/Typography.stories.tsx",
		1582,
		1635
	],
	"./Wizard/BaseWizardSteps.stories": [
		"./stories/Wizard/BaseWizardSteps.stories.tsx",
		1582,
		4540,
		9555,
		7972
	],
	"./Wizard/BaseWizardSteps.stories.tsx": [
		"./stories/Wizard/BaseWizardSteps.stories.tsx",
		1582,
		4540,
		9555,
		7972
	],
	"./Wizard/Wizard.stories": [
		"./stories/Wizard/Wizard.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		5507,
		1734,
		9555,
		2360
	],
	"./Wizard/Wizard.stories.tsx": [
		"./stories/Wizard/Wizard.stories.tsx",
		1582,
		4540,
		4937,
		6246,
		5507,
		1734,
		9555,
		2360
	],
	"./hooks/useBodyClick.stories.mdx": [
		"./stories/hooks/useBodyClick.stories.mdx",
		1582,
		8007
	],
	"./hooks/usePosition.stories.mdx": [
		"./stories/hooks/usePosition.stories.mdx",
		1582,
		8370
	],
	"./hooks/useRepeater.stories": [
		"./stories/hooks/useRepeater.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		9100
	],
	"./hooks/useRepeater.stories.tsx": [
		"./stories/hooks/useRepeater.stories.tsx",
		1582,
		4540,
		4937,
		2807,
		9718,
		6246,
		5507,
		4261,
		9100
	],
	"./hooks/useSpacing.stories.mdx": [
		"./stories/hooks/useSpacing.stories.mdx",
		1582,
		7873
	],
	"./intro.stories.mdx": [
		"./stories/intro.stories.mdx",
		1582,
		6036
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx%7Cjs%7Cjsx%7Cmdx))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories\\/intro\\.stories\\.mdx)$":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./intro.stories.mdx": [
		"./stories/intro.stories.mdx",
		1582,
		6036
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories\\/intro\\.stories\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./storybook-config-entry.js":
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@storybook/global/dist/index.mjs
var dist = __webpack_require__("./node_modules/@storybook/global/dist/index.mjs");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
;// CONCATENATED MODULE: external "__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__"
var external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__;
;// CONCATENATED MODULE: external "__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__"
var external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__;
;// CONCATENATED MODULE: ./storybook-stories.js
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:stories\/intro\.stories\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories\\/intro\\.stories\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(ts|tsx|js|jsx|mdx))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx%7Cjs%7Cjsx%7Cmdx))$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}
;// CONCATENATED MODULE: ./storybook-config-entry.js








const { SERVER_CHANNEL_URL } = dist.global;

const getProjectAnnotations = () =>
  (0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./.storybook/addon/dist/esm/preset/preview.js"),__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx"),]);

const channel = (0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({ page: 'preview' });
external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel);

if (SERVER_CHANNEL_URL) {
  const serverChannel = (0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({ url: SERVER_CHANNEL_URL, });
  external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}

const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb();

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
window.__STORYBOOK_CLIENT_API__ = new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({ storyStore: preview.storyStore });

preview.initialize({ importFn: importFn, getProjectAnnotations });

if (false) {}

/***/ }),

/***/ "@storybook/addons":
/***/ (function(module) {

"use strict";
module.exports = __STORYBOOK_MODULE_ADDONS__;

/***/ }),

/***/ "@storybook/channels":
/***/ (function(module) {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "@storybook/client-logger":
/***/ (function(module) {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "@storybook/core-events":
/***/ (function(module) {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "@storybook/preview-api":
/***/ (function(module) {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1594], function() { return __webpack_exec__("./storybook-config-entry.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);