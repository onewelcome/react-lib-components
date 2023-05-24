"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9264],{

/***/ "./src/components/Popover/Popover.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": function() { return /* binding */ Popover; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/hooks/usePosition.ts + 1 modules
var usePosition = __webpack_require__("./src/hooks/usePosition.ts");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss
var Popover_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss");
;// CONCATENATED MODULE: ./src/components/Popover/Popover.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Popover_module/* default */.Z, options);




       /* harmony default export */ var Popover_Popover_module = (Popover_module/* default */.Z && Popover_module/* default.locals */.Z.locals ? Popover_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Popover/Popover.tsx
var _excluded = ["children", "className", "show", "placement", "offset", "debounceAmount", "transformOrigin", "anchorEl", "onAnchorOutOfView"];
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




var PopoverComponent = function PopoverComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    show = _ref.show,
    placement = _ref.placement,
    offset = _ref.offset,
    debounceAmount = _ref.debounceAmount,
    transformOrigin = _ref.transformOrigin,
    anchorEl = _ref.anchorEl,
    onAnchorOutOfView = _ref.onAnchorOutOfView,
    rest = _objectWithoutProperties(_ref, _excluded);
  var elToBePositioned = (0,react.useRef)(null);
  var _usePosition = (0,usePosition/* usePosition */.K)({
      elementToBePositioned: elToBePositioned,
      relativeElement: anchorEl,
      offset: offset,
      placement: placement,
      transformOrigin: transformOrigin,
      debounceAmount: debounceAmount !== null && debounceAmount !== void 0 ? debounceAmount : undefined
    }),
    top = _usePosition.top,
    left = _usePosition.left,
    right = _usePosition.right,
    bottom = _usePosition.bottom,
    calculatePosition = _usePosition.calculatePosition;
  (0,react.useEffect)(function () {
    if (!show) {
      return;
    }
    window.addEventListener("resize", calculatePosition);
    window.addEventListener("scroll", calculatePosition);
    return function () {
      window.removeEventListener("resize", calculatePosition);
      window.removeEventListener("scroll", calculatePosition);
    };
  }, [show]);
  (0,react.useEffect)(function () {
    calculatePosition();
  }, [show]);
  (0,react.useEffect)(function () {
    var isAnchorOffscreen = show && (top === 0 || left === 0 || right === 0 || bottom === 0 || window.innerHeight - elToBePositioned.current.offsetHeight === top);
    if (isAnchorOffscreen) {
      onAnchorOutOfView === null || onAnchorOutOfView === void 0 ? void 0 : onAnchorOutOfView();
    }
  }, [top, left, right, bottom]);
  return /*#__PURE__*/react.createElement("div", _extends({
    ref: ref
  }, rest), /*#__PURE__*/react.createElement("div", {
    ref: elToBePositioned,
    className: "".concat(Popover_Popover_module.popover, " ").concat(className !== null && className !== void 0 ? className : "", " ").concat(show ? Popover_Popover_module.show : ""),
    style: {
      top: top,
      left: left,
      right: right,
      bottom: bottom
    }
  }, children));
};
var Popover = /*#__PURE__*/react.forwardRef(PopoverComponent);
try {
    // @ts-ignore
    Popover.displayName = "Popover";
    // @ts-ignore
    Popover.__docgenInfo = { "description": "", "displayName": "Popover", "props": { "placement": { "defaultValue": null, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "transformOrigin": { "defaultValue": null, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": null, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "anchorEl": { "defaultValue": null, "description": "", "name": "anchorEl", "required": false, "type": { "name": "RefObject<HTMLOrSVGElement>" } }, "onAnchorOutOfView": { "defaultValue": null, "description": "", "name": "onAnchorOutOfView", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"] = { docgenInfo: Popover.__docgenInfo, name: "Popover", path: "src/components/Popover/Popover.tsx#Popover" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/usePosition.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ usePosition; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/hooks/useDebouncedCallback.tsx
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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


var useDebouncedCallback = function useDebouncedCallback(callback, delay, dependencies) {
  var timeout = react.useRef();
  var comboDeps = dependencies ? [callback, delay].concat(_toConsumableArray(dependencies)) : [callback, delay];
  return react.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeout.current != null) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(function () {
      callback.apply(void 0, args);
    }, delay);
  }, comboDeps);
};
;// CONCATENATED MODULE: ./src/hooks/usePosition.ts
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || usePosition_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function usePosition_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return usePosition_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return usePosition_arrayLikeToArray(o, minLen);
}
function usePosition_arrayLikeToArray(arr, len) {
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



var defaultConfigObject = {
  relativeElement: undefined,
  elementToBePositioned: undefined,
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  },
  placement: {
    horizontal: "left",
    vertical: "top"
  },
  offset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  debounceAmount: 20
};

/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain*/
var usePosition = function usePosition() {
  var _configObject$debounc;
  var providedConfigObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfigObject;
  var configObject = _objectSpread(_objectSpread({}, defaultConfigObject), providedConfigObject);
  if (configObject.transformOrigin === undefined) {
    configObject.transformOrigin = defaultConfigObject.transformOrigin;
  }
  if (configObject.placement === undefined) {
    configObject.placement = defaultConfigObject.placement;
  }
  if (configObject.offset === undefined) {
    configObject.offset = defaultConfigObject.offset;
  }
  var _useState = (0,react.useState)({
      left: 0,
      top: 0,
      right: "initial",
      bottom: "initial"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var _fixPossibleViewportOverflow = function _fixPossibleViewportOverflow(value, transformOrigin, requestedReturnValue, elDimensions) {
    var returnValue = value;
    if (transformOrigin[requestedReturnValue] === "left" && returnValue < 0 || transformOrigin[requestedReturnValue] === "top" && returnValue < 0 || transformOrigin[requestedReturnValue] === "center" && returnValue < 0 || transformOrigin[requestedReturnValue] === "bottom" && returnValue < 0) {
      returnValue = 0;
    }
    if (transformOrigin[requestedReturnValue] === "left" && returnValue > window.innerWidth - elDimensions.width || transformOrigin[requestedReturnValue] === "center" && requestedReturnValue === "horizontal" && returnValue > window.innerWidth - elDimensions.width) {
      returnValue = window.innerWidth - elDimensions.width;
    }
    if (transformOrigin[requestedReturnValue] === "top" && returnValue > window.innerHeight - elDimensions.height || transformOrigin[requestedReturnValue] === "center" && requestedReturnValue === "vertical" && returnValue > window.innerHeight - elDimensions.height) {
      returnValue = window.innerHeight - elDimensions.height;
    }
    if (transformOrigin[requestedReturnValue] === "right" && returnValue > window.innerWidth - elDimensions.width) {
      returnValue = window.innerWidth - elDimensions.width;
    }
    if (transformOrigin[requestedReturnValue] === "bottom" && returnValue > window.innerHeight - elDimensions.height) {
      returnValue = window.innerHeight - elDimensions.height;
    }
    return returnValue;
  };
  var _applyOffsetToPlacementValue = function _applyOffsetToPlacementValue(value, requestedReturnValue, transformOrigin) {
    var _configObject$offset, _configObject$offset2, _configObject$offset7, _configObject$offset8;
    var returnValue = value;
    if (requestedReturnValue === "horizontal" && ((_configObject$offset = configObject.offset) === null || _configObject$offset === void 0 ? void 0 : _configObject$offset.left) !== 0 || requestedReturnValue === "horizontal" && ((_configObject$offset2 = configObject.offset) === null || _configObject$offset2 === void 0 ? void 0 : _configObject$offset2.right) !== 0) {
      if (transformOrigin[requestedReturnValue] === "left" || transformOrigin[requestedReturnValue] === "center") {
        var _configObject$offset3, _configObject$offset4;
        returnValue += (_configObject$offset3 = configObject.offset) === null || _configObject$offset3 === void 0 ? void 0 : _configObject$offset3.left;
        returnValue -= (_configObject$offset4 = configObject.offset) === null || _configObject$offset4 === void 0 ? void 0 : _configObject$offset4.right;
      }
      if (transformOrigin[requestedReturnValue] === "right") {
        var _configObject$offset5, _configObject$offset6;
        returnValue -= (_configObject$offset5 = configObject.offset) === null || _configObject$offset5 === void 0 ? void 0 : _configObject$offset5.left;
        returnValue += (_configObject$offset6 = configObject.offset) === null || _configObject$offset6 === void 0 ? void 0 : _configObject$offset6.right;
      }
    }
    if (requestedReturnValue === "vertical" && ((_configObject$offset7 = configObject.offset) === null || _configObject$offset7 === void 0 ? void 0 : _configObject$offset7.top) !== 0 || requestedReturnValue === "vertical" && ((_configObject$offset8 = configObject.offset) === null || _configObject$offset8 === void 0 ? void 0 : _configObject$offset8.bottom) !== 0) {
      if (transformOrigin[requestedReturnValue] === "top" || transformOrigin[requestedReturnValue] === "center") {
        var _configObject$offset9, _configObject$offset10;
        returnValue += (_configObject$offset9 = configObject.offset) === null || _configObject$offset9 === void 0 ? void 0 : _configObject$offset9.top;
        returnValue -= (_configObject$offset10 = configObject.offset) === null || _configObject$offset10 === void 0 ? void 0 : _configObject$offset10.bottom;
      }
      if (transformOrigin[requestedReturnValue] === "bottom") {
        var _configObject$offset11, _configObject$offset12;
        returnValue -= (_configObject$offset11 = configObject.offset) === null || _configObject$offset11 === void 0 ? void 0 : _configObject$offset11.top;
        returnValue += (_configObject$offset12 = configObject.offset) === null || _configObject$offset12 === void 0 ? void 0 : _configObject$offset12.bottom;
      }
    }
    return returnValue;
  };
  var _calculateInitialPlacementValue = function _calculateInitialPlacementValue(transformOrigin, requestedReturnValue, relEl, placementOriginDefinition, elDimensions) {
    var value = 0;
    if (transformOrigin[requestedReturnValue] === "left" || transformOrigin[requestedReturnValue] === "top") {
      value = relEl[placementOriginDefinition];
    } else if (transformOrigin[requestedReturnValue] === "center") {
      value = relEl[placementOriginDefinition] - elDimensions[requestedReturnValue === "horizontal" ? "width" : "height"] / 2;
    } else if (transformOrigin[requestedReturnValue] === "right" || transformOrigin[requestedReturnValue] === "bottom") {
      value = window[requestedReturnValue === "horizontal" ? "innerWidth" : "innerHeight"] - relEl[placementOriginDefinition];
    }
    return value;
  };

  /**
   *
   * @param requestedReturnValue whether the requested return value is for the horizontal or vertical axis
   * @returns either the horizontally centered placement definition (centerh) or the vertically centered one (centerv)
   */
  var _determineCenteredPlacementOrigin = function _determineCenteredPlacementOrigin(requestedReturnValue) {
    if (requestedReturnValue === "horizontal") {
      return "centerh";
    } else if (requestedReturnValue === "vertical") {
      return "centerv";
    }
    throw new Error("the requested return value isn't \"vertical\" or \"horizontal\" ".concat(requestedReturnValue, " was given."));
  };
  var _calculatePlacementValue = function _calculatePlacementValue(transformOrigin, placement, requestedReturnValue, relEl, elDimensions) {
    var placementOriginDefinition = placement === "center" ? _determineCenteredPlacementOrigin(requestedReturnValue) : placement;
    var value = _calculateInitialPlacementValue(transformOrigin, requestedReturnValue, relEl, placementOriginDefinition, elDimensions);
    var valueWithOffset = _applyOffsetToPlacementValue(value, requestedReturnValue, transformOrigin);
    var valueCorrectionForViewportOverflow = _fixPossibleViewportOverflow(valueWithOffset, transformOrigin, requestedReturnValue, elDimensions);
    return valueCorrectionForViewportOverflow;
  };
  var _calculatePlacement = function _calculatePlacement(relEl, elDimensions, axis) {
    var _configObject$transfo, _configObject$transfo2;
    var placementValue = _calculatePlacementValue(configObject.transformOrigin, configObject.placement[axis], axis, relEl, elDimensions);
    var direction = "left";
    var oppositeDirection = "right";
    if (axis === "horizontal" && ((_configObject$transfo = configObject.transformOrigin) === null || _configObject$transfo === void 0 ? void 0 : _configObject$transfo.horizontal) === "right") {
      direction = "right";
      oppositeDirection = "left";
    } else if (axis === "horizontal") {
      direction = "left";
      oppositeDirection = "right";
    }
    if (axis === "vertical" && ((_configObject$transfo2 = configObject.transformOrigin) === null || _configObject$transfo2 === void 0 ? void 0 : _configObject$transfo2.vertical) === "bottom") {
      direction = "bottom";
      oppositeDirection = "top";
    } else if (axis === "vertical") {
      direction = "top";
      oppositeDirection = "bottom";
    }
    setPosition(function (prevState) {
      var _objectSpread2;
      return _objectSpread(_objectSpread({}, prevState), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, direction, placementValue), _defineProperty(_objectSpread2, oppositeDirection, "initial"), _objectSpread2));
    });
  };
  var calculatePosition = useDebouncedCallback(function () {
    var _configObject$relativ, _configObject$element;
    if (!((_configObject$relativ = configObject.relativeElement) !== null && _configObject$relativ !== void 0 && _configObject$relativ.current) || !((_configObject$element = configObject.elementToBePositioned) !== null && _configObject$element !== void 0 && _configObject$element.current)) return;
    var relativeElRect = configObject.relativeElement.current.getBoundingClientRect();
    var elementToBePositionedDimensions = {
      height: configObject.elementToBePositioned.current.offsetHeight,
      width: configObject.elementToBePositioned.current.offsetWidth
    };

    /** We want to add a center (horizontal and vertical) property to the DOMRect object. Since it's a special object we can't modify so we clone it and add it. */
    var clonedRelEl = {
      top: relativeElRect.top,
      right: relativeElRect.right,
      bottom: relativeElRect.bottom,
      center: 0,
      centerv: relativeElRect.top + relativeElRect.height / 2,
      centerh: relativeElRect.left + relativeElRect.width / 2,
      left: relativeElRect.left,
      width: relativeElRect.width,
      height: relativeElRect.height,
      x: relativeElRect.x,
      y: relativeElRect.y
    };
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "horizontal");
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "vertical");
  }, (_configObject$debounc = configObject.debounceAmount) !== null && _configObject$debounc !== void 0 ? _configObject$debounc : 20);
  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    calculatePosition: calculatePosition
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Popover-module__sr-only--NXDMO{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Popover-module__hidden--N85ZW{display:none}.Popover-module__slide-in--wCdIn{animation:Popover-module__slide-in--wCdIn .5s forwards}@media(prefers-reduced-motion: reduce){.Popover-module__slide-in--wCdIn{animation-duration:.1ms}}.Popover-module__slide-out--ruTBN{animation:Popover-module__slide-out--ruTBN .5s forwards}@media(prefers-reduced-motion: reduce){.Popover-module__slide-out--ruTBN{animation-duration:.1ms}}@keyframes Popover-module__slide-in--wCdIn{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Popover-module__slide-out--ruTBN{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Popover-module__w-6--_DB0a{width:6%}.Popover-module__w-7--l3pq8{width:7%}.Popover-module__w-8--gT4qW{width:8%}.Popover-module__w-9--viJSF{width:9%}.Popover-module__w-10--Jw16k{width:10%}.Popover-module__w-11--ts2fT{width:11%}.Popover-module__w-12--trrRq{width:12%}.Popover-module__w-13--WkBvg{width:13%}.Popover-module__w-14--WyeiG{width:14%}.Popover-module__w-15--YTWnK{width:15%}.Popover-module__w-16--_Qy7X{width:16%}.Popover-module__w-17--DDnca{width:17%}.Popover-module__w-18--D9wSd{width:18%}.Popover-module__w-19--ZaKv7{width:19%}.Popover-module__w-20--o8DUt{width:20%}.Popover-module__w-21--UKKVO{width:21%}.Popover-module__w-22--eGzk2{width:22%}.Popover-module__w-23--oRJvR{width:23%}.Popover-module__w-24--fiIeS{width:24%}.Popover-module__w-25--UbRTA{width:25%}.Popover-module__w-26--f9vBZ{width:26%}.Popover-module__w-27--ds2B4{width:27%}.Popover-module__w-28--nTH6E{width:28%}.Popover-module__w-29--ZdRw5{width:29%}.Popover-module__w-30--VMaRW{width:30%}.Popover-module__w-31--DlJwu{width:31%}.Popover-module__w-32--r9Fxw{width:32%}.Popover-module__w-33--FFLFI{width:33%}.Popover-module__w-34--HKxay{width:34%}.Popover-module__w-35--s0ofi{width:35%}.Popover-module__w-36--XMai7{width:36%}.Popover-module__w-37--FBspe{width:37%}.Popover-module__w-38--NJW6b{width:38%}.Popover-module__w-39--OYLYp{width:39%}.Popover-module__w-40--LEFbp{width:40%}.Popover-module__w-41--X2wWB{width:41%}.Popover-module__w-42--xmfZ4{width:42%}.Popover-module__w-43--ncdLN{width:43%}.Popover-module__w-44--iccZu{width:44%}.Popover-module__w-45--D6mTA{width:45%}.Popover-module__w-46--_tskb{width:46%}.Popover-module__w-47--Kqdkh{width:47%}.Popover-module__w-48--qhS2x{width:48%}.Popover-module__w-49--txs4d{width:49%}.Popover-module__w-50--FHCwB{width:50%}.Popover-module__w-51--kexct{width:51%}.Popover-module__w-52--KYZoe{width:52%}.Popover-module__w-53--w9jSA{width:53%}.Popover-module__w-54--Uv1CU{width:54%}.Popover-module__w-55--LbGlF{width:55%}.Popover-module__w-56--VOB0E{width:56%}.Popover-module__w-57--StFPY{width:57%}.Popover-module__w-58--oVCBB{width:58%}.Popover-module__w-59--ki_iZ{width:59%}.Popover-module__w-60--_w9Jr{width:60%}.Popover-module__w-61--We9LN{width:61%}.Popover-module__w-62--jGTlf{width:62%}.Popover-module__w-63--YeMFf{width:63%}.Popover-module__w-64--E1zcw{width:64%}.Popover-module__w-65--QICLo{width:65%}.Popover-module__w-66--Ut755{width:66%}.Popover-module__w-67--WjOaJ{width:67%}.Popover-module__w-68--C87ki{width:68%}.Popover-module__w-69--Jv4kJ{width:69%}.Popover-module__w-70--PWG4p{width:70%}.Popover-module__w-71--nfABm{width:71%}.Popover-module__w-72--K7Z1u{width:72%}.Popover-module__w-73--awhGc{width:73%}.Popover-module__w-74--CcoPq{width:74%}.Popover-module__w-75--BKPoE{width:75%}.Popover-module__w-76--I8pvD{width:76%}.Popover-module__w-77--MSAY8{width:77%}.Popover-module__w-78--Uc2zj{width:78%}.Popover-module__w-79--XSk1C{width:79%}.Popover-module__w-80--dV1BJ{width:80%}.Popover-module__w-81--zZBtG{width:81%}.Popover-module__w-82--OuX6X{width:82%}.Popover-module__w-83--f1UNH{width:83%}.Popover-module__w-84--X_Da0{width:84%}.Popover-module__w-85--X48lD{width:85%}.Popover-module__w-86--gjRY7{width:86%}.Popover-module__w-87--rzTun{width:87%}.Popover-module__w-88--qtQUg{width:88%}.Popover-module__w-89--NCzvo{width:89%}.Popover-module__w-90--FUU2t{width:90%}.Popover-module__w-91--TVpP8{width:91%}.Popover-module__w-92--H3_aP{width:92%}.Popover-module__w-93--ybWwR{width:93%}.Popover-module__w-94--S2RE5{width:94%}.Popover-module__w-95--C7Jij{width:95%}.Popover-module__w-96--Umgml{width:96%}.Popover-module__w-97--j8uXz{width:97%}.Popover-module__w-98--ao0xz{width:98%}.Popover-module__w-99--PfBXA{width:99%}.Popover-module__w-100--ZVc4Z{width:100%}.Popover-module__w-101--bHPcU{width:101%}.Popover-module__w-102--_RGmU{width:102%}.Popover-module__w-103--nn9gG{width:103%}.Popover-module__w-104--fAbyd{width:104%}.Popover-module__w-105--mhTpH{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Popover-module__popover--PmG6o{position:fixed;z-index:1;pointer-events:none;background-color:var(--light);border-radius:8px;box-shadow:0 30px 50px rgba(0,0,0,.29);opacity:0;transform:scale(0.5);transition-property:transform,opacity;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Popover-module__popover--PmG6o{transition-duration:.1ms}}.Popover-module__popover--PmG6o.Popover-module__show--ZKX5k{transform:scale(1);pointer-events:auto;opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Popover-module__sr-only--NXDMO",
	"hidden": "Popover-module__hidden--N85ZW",
	"slide-in": "Popover-module__slide-in--wCdIn",
	"slide-out": "Popover-module__slide-out--ruTBN",
	"w-6": "Popover-module__w-6--_DB0a",
	"w-7": "Popover-module__w-7--l3pq8",
	"w-8": "Popover-module__w-8--gT4qW",
	"w-9": "Popover-module__w-9--viJSF",
	"w-10": "Popover-module__w-10--Jw16k",
	"w-11": "Popover-module__w-11--ts2fT",
	"w-12": "Popover-module__w-12--trrRq",
	"w-13": "Popover-module__w-13--WkBvg",
	"w-14": "Popover-module__w-14--WyeiG",
	"w-15": "Popover-module__w-15--YTWnK",
	"w-16": "Popover-module__w-16--_Qy7X",
	"w-17": "Popover-module__w-17--DDnca",
	"w-18": "Popover-module__w-18--D9wSd",
	"w-19": "Popover-module__w-19--ZaKv7",
	"w-20": "Popover-module__w-20--o8DUt",
	"w-21": "Popover-module__w-21--UKKVO",
	"w-22": "Popover-module__w-22--eGzk2",
	"w-23": "Popover-module__w-23--oRJvR",
	"w-24": "Popover-module__w-24--fiIeS",
	"w-25": "Popover-module__w-25--UbRTA",
	"w-26": "Popover-module__w-26--f9vBZ",
	"w-27": "Popover-module__w-27--ds2B4",
	"w-28": "Popover-module__w-28--nTH6E",
	"w-29": "Popover-module__w-29--ZdRw5",
	"w-30": "Popover-module__w-30--VMaRW",
	"w-31": "Popover-module__w-31--DlJwu",
	"w-32": "Popover-module__w-32--r9Fxw",
	"w-33": "Popover-module__w-33--FFLFI",
	"w-34": "Popover-module__w-34--HKxay",
	"w-35": "Popover-module__w-35--s0ofi",
	"w-36": "Popover-module__w-36--XMai7",
	"w-37": "Popover-module__w-37--FBspe",
	"w-38": "Popover-module__w-38--NJW6b",
	"w-39": "Popover-module__w-39--OYLYp",
	"w-40": "Popover-module__w-40--LEFbp",
	"w-41": "Popover-module__w-41--X2wWB",
	"w-42": "Popover-module__w-42--xmfZ4",
	"w-43": "Popover-module__w-43--ncdLN",
	"w-44": "Popover-module__w-44--iccZu",
	"w-45": "Popover-module__w-45--D6mTA",
	"w-46": "Popover-module__w-46--_tskb",
	"w-47": "Popover-module__w-47--Kqdkh",
	"w-48": "Popover-module__w-48--qhS2x",
	"w-49": "Popover-module__w-49--txs4d",
	"w-50": "Popover-module__w-50--FHCwB",
	"w-51": "Popover-module__w-51--kexct",
	"w-52": "Popover-module__w-52--KYZoe",
	"w-53": "Popover-module__w-53--w9jSA",
	"w-54": "Popover-module__w-54--Uv1CU",
	"w-55": "Popover-module__w-55--LbGlF",
	"w-56": "Popover-module__w-56--VOB0E",
	"w-57": "Popover-module__w-57--StFPY",
	"w-58": "Popover-module__w-58--oVCBB",
	"w-59": "Popover-module__w-59--ki_iZ",
	"w-60": "Popover-module__w-60--_w9Jr",
	"w-61": "Popover-module__w-61--We9LN",
	"w-62": "Popover-module__w-62--jGTlf",
	"w-63": "Popover-module__w-63--YeMFf",
	"w-64": "Popover-module__w-64--E1zcw",
	"w-65": "Popover-module__w-65--QICLo",
	"w-66": "Popover-module__w-66--Ut755",
	"w-67": "Popover-module__w-67--WjOaJ",
	"w-68": "Popover-module__w-68--C87ki",
	"w-69": "Popover-module__w-69--Jv4kJ",
	"w-70": "Popover-module__w-70--PWG4p",
	"w-71": "Popover-module__w-71--nfABm",
	"w-72": "Popover-module__w-72--K7Z1u",
	"w-73": "Popover-module__w-73--awhGc",
	"w-74": "Popover-module__w-74--CcoPq",
	"w-75": "Popover-module__w-75--BKPoE",
	"w-76": "Popover-module__w-76--I8pvD",
	"w-77": "Popover-module__w-77--MSAY8",
	"w-78": "Popover-module__w-78--Uc2zj",
	"w-79": "Popover-module__w-79--XSk1C",
	"w-80": "Popover-module__w-80--dV1BJ",
	"w-81": "Popover-module__w-81--zZBtG",
	"w-82": "Popover-module__w-82--OuX6X",
	"w-83": "Popover-module__w-83--f1UNH",
	"w-84": "Popover-module__w-84--X_Da0",
	"w-85": "Popover-module__w-85--X48lD",
	"w-86": "Popover-module__w-86--gjRY7",
	"w-87": "Popover-module__w-87--rzTun",
	"w-88": "Popover-module__w-88--qtQUg",
	"w-89": "Popover-module__w-89--NCzvo",
	"w-90": "Popover-module__w-90--FUU2t",
	"w-91": "Popover-module__w-91--TVpP8",
	"w-92": "Popover-module__w-92--H3_aP",
	"w-93": "Popover-module__w-93--ybWwR",
	"w-94": "Popover-module__w-94--S2RE5",
	"w-95": "Popover-module__w-95--C7Jij",
	"w-96": "Popover-module__w-96--Umgml",
	"w-97": "Popover-module__w-97--j8uXz",
	"w-98": "Popover-module__w-98--ao0xz",
	"w-99": "Popover-module__w-99--PfBXA",
	"w-100": "Popover-module__w-100--ZVc4Z",
	"w-101": "Popover-module__w-101--bHPcU",
	"w-102": "Popover-module__w-102--_RGmU",
	"w-103": "Popover-module__w-103--nn9gG",
	"w-104": "Popover-module__w-104--fAbyd",
	"w-105": "Popover-module__w-105--mhTpH",
	"popover": "Popover-module__popover--PmG6o",
	"show": "Popover-module__show--ZKX5k"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);