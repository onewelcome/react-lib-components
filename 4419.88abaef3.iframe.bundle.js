(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4419],{

/***/ "./.storybook/conditionalPlay.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: function() { return /* binding */ conditionalPlay; }
});

// UNUSED EXPORTS: __namedExportsOrder

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
}

;// CONCATENATED MODULE: ./.storybook/conditionalPlay.ts
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


var conditionalPlay = function conditionalPlay(playFunction) {
  var isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};
var __namedExportsOrder = (/* unused pure expression or super */ null && (["conditionalPlay"]));

/***/ }),

/***/ "./src/components/Tooltip/Tooltip.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: function() { return /* binding */ Tooltip; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss
var Tooltip_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss");
;// CONCATENATED MODULE: ./src/components/Tooltip/Tooltip.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tooltip_module/* default */.Z, options);




       /* harmony default export */ var Tooltip_Tooltip_module = (Tooltip_module/* default */.Z && Tooltip_module/* default */.Z.locals ? Tooltip_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/hooks/usePosition.ts + 1 modules
var usePosition = __webpack_require__("./src/hooks/usePosition.ts");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
;// CONCATENATED MODULE: ./src/components/Tooltip/Tooltip.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["title", "children", "className", "domRoot", "label", "location", "position", "color"];
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
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








var locations = {
  left: {
    placement: {
      horizontal: "left",
      vertical: "center"
    },
    offset: {
      left: 0,
      right: 12,
      top: 0,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "center"
    }
  },
  leftEnd: {
    placement: {
      horizontal: "left",
      vertical: "top"
    },
    offset: {
      left: 0,
      right: 12,
      top: -12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "top"
    }
  },
  leftStart: {
    placement: {
      horizontal: "left",
      vertical: "bottom"
    },
    offset: {
      left: 0,
      right: 12,
      top: 0,
      bottom: -12
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom"
    }
  },
  right: {
    placement: {
      horizontal: "right",
      vertical: "center"
    },
    offset: {
      left: 12,
      right: 0,
      top: 0,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "center"
    }
  },
  rightEnd: {
    placement: {
      horizontal: "right",
      vertical: "top"
    },
    offset: {
      left: 12,
      right: 0,
      top: -12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "top"
    }
  },
  rightStart: {
    placement: {
      horizontal: "right",
      vertical: "bottom"
    },
    offset: {
      left: 12,
      right: 0,
      top: 0,
      bottom: -12
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom"
    }
  },
  top: {
    placement: {
      horizontal: "center",
      vertical: "top"
    },
    offset: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 12
    },
    transformOrigin: {
      horizontal: "center",
      vertical: "bottom"
    }
  },
  topEnd: {
    placement: {
      horizontal: "left",
      vertical: "top"
    },
    offset: {
      left: -12,
      right: 0,
      top: 0,
      bottom: 12
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom"
    }
  },
  topStart: {
    placement: {
      horizontal: "right",
      vertical: "top"
    },
    offset: {
      left: 0,
      right: -12,
      top: 0,
      bottom: 12
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom"
    }
  },
  bottom: {
    placement: {
      horizontal: "center",
      vertical: "bottom"
    },
    offset: {
      left: 0,
      right: 0,
      top: 12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "center",
      vertical: "top"
    }
  },
  bottomEnd: {
    placement: {
      horizontal: "left",
      vertical: "bottom"
    },
    offset: {
      left: -12,
      right: 0,
      top: 12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "top"
    }
  },
  bottomStart: {
    placement: {
      horizontal: "right",
      vertical: "bottom"
    },
    offset: {
      left: 0,
      right: -12,
      top: 12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "top"
    }
  }
};
var TooltipComponent = function TooltipComponent(_ref, ref) {
  var title = _ref.title,
    children = _ref.children,
    className = _ref.className,
    domRoot = _ref.domRoot,
    label = _ref.label,
    _ref$location = _ref.location,
    location = _ref$location === void 0 ? "right" : _ref$location,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "center" : _ref$position,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "black" : _ref$color,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react.useState)((0,helper/* generateID */.y)()),
    _useState2 = _slicedToArray(_useState, 1),
    identifier = _useState2[0];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  var wrappingDivRef = ref || /*#__PURE__*/(0,react.createRef)();
  var _useGetDomRoot = (0,useGetDomRoot/* useGetDomRoot */.X)(domRoot, wrappingDivRef),
    root = _useGetDomRoot.root;
  var relativeElement = (0,react.useRef)(null);
  var elementToBePositioned = (0,react.useRef)(null);
  var determinedLocation = (0,react.useMemo)(function () {
    if (position === "center") {
      return location;
    }
    return "".concat(location).concat(position.charAt(0).toUpperCase() + position.slice(1));
  }, [location, position]);
  var _usePosition = (0,usePosition/* usePosition */.Ki)({
      relativeElement: relativeElement,
      elementToBePositioned: elementToBePositioned,
      placement: locations[determinedLocation].placement,
      offset: locations[determinedLocation].offset,
      transformOrigin: locations[determinedLocation].transformOrigin
    }),
    top = _usePosition.top,
    bottom = _usePosition.bottom,
    right = _usePosition.right,
    left = _usePosition.left,
    calculatePosition = _usePosition.calculatePosition;
  (0,react.useEffect)(function () {
    if (!visible) return;
    var escapePressHandler = function escapePressHandler(event) {
      if (event.key === "Escape") {
        setVisible(false);
      }
    };
    document.addEventListener("keyup", escapePressHandler);
    return function () {
      document.removeEventListener("keyup", escapePressHandler);
    };
  }, [visible]);
  (0,react.useLayoutEffect)(function () {
    calculatePosition();
  }, [visible]);
  var renderChildren = function renderChildren() {
    if ( /*#__PURE__*/react.isValidElement(label)) {
      return /*#__PURE__*/react.cloneElement(label, {
        onFocus: function onFocus() {
          return setVisible(true);
        },
        onBlur: function onBlur() {
          return setVisible(false);
        },
        "aria-describedby": identifier,
        tabIndex: 0,
        className: Tooltip_Tooltip_module["label"]
      });
    }
    return /*#__PURE__*/react.createElement("span", {
      className: Tooltip_Tooltip_module["label"],
      tabIndex: 0,
      onFocus: function onFocus() {
        return setVisible(true);
      },
      onBlur: function onBlur() {
        return setVisible(false);
      },
      "aria-describedby": identifier
    }, label);
  };
  var tooltipClasses = "".concat(Tooltip_Tooltip_module["tooltip"], " ").concat(Tooltip_Tooltip_module[color], " ").concat(visible ? Tooltip_Tooltip_module["visible"] : "", " ").concat(Tooltip_Tooltip_module[determinedLocation.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase()]);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: wrappingDivRef,
    className: "".concat(Tooltip_Tooltip_module.wrapper, " ").concat(className !== null && className !== void 0 ? className : "")
  }), renderChildren(), /*#__PURE__*/react.createElement("div", {
    className: "".concat(Tooltip_Tooltip_module["tooltip-wrapper"])
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    ref: relativeElement,
    tag: "div",
    onMouseEnter: function onMouseEnter() {
      return setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVisible(false);
    },
    icon: Icon/* Icons */.P.InfoCircle,
    className: Tooltip_Tooltip_module.icon
  }), /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", {
    ref: elementToBePositioned,
    style: _objectSpread(_objectSpread({}, rest.style), {}, {
      top: top,
      left: left,
      right: right,
      bottom: bottom
    }),
    "aria-hidden": !visible,
    id: identifier,
    className: tooltipClasses
  }, title && /*#__PURE__*/react.createElement("span", {
    className: Tooltip_Tooltip_module["tooltip-title"]
  }, title), children), root)));
};
var Tooltip = /*#__PURE__*/react.forwardRef(TooltipComponent);
try {
    // @ts-ignore
    Tooltip.displayName = "Tooltip";
    // @ts-ignore
    Tooltip.__docgenInfo = { "description": "", "displayName": "Tooltip", "props": { "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "ReactNode" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": { value: "black" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"black\"" }, { "value": "\"blue\"" }] } }, "location": { "defaultValue": { value: "right" }, "description": "", "name": "location", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }, { "value": "\"top\"" }, { "value": "\"bottom\"" }] } }, "position": { "defaultValue": { value: "center" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"start\"" }, { "value": "\"end\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"] = { docgenInfo: Tooltip.__docgenInfo, name: "Tooltip", path: "src/components/Tooltip/Tooltip.tsx#Tooltip" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./stories/utils/useStoryCentring.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ useStoryCentring; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
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


var useStoryCentring = function useStoryCentring() {
  var isStory = function isStory() {
    return window.location.search.includes("viewMode=story");
  };
  var centerStory = function centerStory() {
    /** In order to show off the positioning for the tooltip we need to center everything in the middle of the screen. */
    var root = document.querySelector("html");
    if (root && isStory()) {
      root.style.height = "100%";
      root.style.width = "100%";
      root.style.display = "flex";
      root.style.justifyContent = "center";
      root.style.alignItems = "center";
      root.style.overflow = "hidden";
    }
  };
  var resetStory = function resetStory() {
    /** We want to reset story positioning when we are unmounting story */
    var root = document.querySelector("html");
    if (root) {
      root.style.height = "";
      root.style.width = "";
      root.style.display = "";
      root.style.justifyContent = "";
      root.style.alignItems = "";
      root.style.overflow = "";
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    centerStory();
    return function () {
      resetStory();
    };
  }, []);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tooltip-module__sr-only--RRKCe{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Tooltip-module__hidden--S1mG5{display:none}.Tooltip-module__slide-in--ia8fD{animation:Tooltip-module__slide-in--ia8fD .5s forwards}@media(prefers-reduced-motion: reduce){.Tooltip-module__slide-in--ia8fD{animation-duration:.1ms}}.Tooltip-module__slide-out--Jj9Iw{animation:Tooltip-module__slide-out--Jj9Iw .5s forwards}@media(prefers-reduced-motion: reduce){.Tooltip-module__slide-out--Jj9Iw{animation-duration:.1ms}}@keyframes Tooltip-module__slide-in--ia8fD{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Tooltip-module__slide-out--Jj9Iw{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Tooltip-module__wrapper--rZQQf{display:flex;align-items:center}.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8{margin-left:.5rem;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;color:var(--greyed-out)}@media(prefers-reduced-motion: reduce){.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8{transition-duration:.1ms}}.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8:hover{color:var(--default)}.Tooltip-module__tooltip--oh0fm{position:fixed;font-size:.75rem;line-height:1rem;border-radius:.125rem;padding:.75rem;color:var(--light);max-width:20.625rem;opacity:0;transform:scale(0);transform-origin:center center;pointer-events:none;box-shadow:0 .0625rem .3125rem 0 rgba(1,5,50,.3);transition-property:opacity,transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Tooltip-module__tooltip--oh0fm{transition-duration:.1ms}}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh{background-color:var(--tooltip-background-color)}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__top--NM1dh:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--tooltip-background-color);position:absolute;left:50%;right:initial;transform:translateX(-50%);top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__top-start--LW4x3:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--tooltip-background-color);position:absolute;right:.75rem;left:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__top-end--i7g7Q:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--tooltip-background-color);position:absolute;left:1rem;right:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__bottom--_z0N4:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--tooltip-background-color);position:absolute;left:50%;right:initial;transform:translateX(-50%);bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__bottom-start--oRJUH:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--tooltip-background-color);position:absolute;right:.75rem;left:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__bottom-end--qfMK5:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--tooltip-background-color);position:absolute;left:1rem;right:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__left--UcBDU:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--tooltip-background-color);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__left-start--maL9p:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--tooltip-background-color);position:absolute;bottom:.9375rem;top:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__left-end--ttTlp:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--tooltip-background-color);position:absolute;top:.875rem;bottom:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__right--jVRgM:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--tooltip-background-color);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__right-start--rS6Tz:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--tooltip-background-color);position:absolute;bottom:.9375rem;top:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__right-end--CWacb:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--tooltip-background-color);position:absolute;top:.875rem;bottom:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag{background-color:var(--color-blue-grey500)}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__top--NM1dh:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--color-blue-grey500);position:absolute;left:50%;right:initial;transform:translateX(-50%);top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__top-start--LW4x3:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--color-blue-grey500);position:absolute;right:.75rem;left:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__top-end--i7g7Q:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--color-blue-grey500);position:absolute;left:1rem;right:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__bottom--_z0N4:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--color-blue-grey500);position:absolute;left:50%;right:initial;transform:translateX(-50%);bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__bottom-start--oRJUH:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--color-blue-grey500);position:absolute;right:.75rem;left:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__bottom-end--qfMK5:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--color-blue-grey500);position:absolute;left:1rem;right:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__left--UcBDU:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--color-blue-grey500);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__left-start--maL9p:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--color-blue-grey500);position:absolute;bottom:.9375rem;top:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__left-end--ttTlp:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--color-blue-grey500);position:absolute;top:.875rem;bottom:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__right--jVRgM:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--color-blue-grey500);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__right-start--rS6Tz:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--color-blue-grey500);position:absolute;bottom:.9375rem;top:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__right-end--CWacb:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--color-blue-grey500);position:absolute;top:.875rem;bottom:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm:after{content:\"\"}.Tooltip-module__tooltip--oh0fm.Tooltip-module__visible--qAQt6{opacity:1;transform:scale(1)}.Tooltip-module__label--o5K01:focus-visible{outline:.0313rem dashed var(--color-primary)}.Tooltip-module__tooltip-title--Nu2DQ{font-weight:500;font-size:.875rem;line-height:1.25rem;display:block;margin-bottom:.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Tooltip-module__sr-only--RRKCe",
	"hidden": "Tooltip-module__hidden--S1mG5",
	"slide-in": "Tooltip-module__slide-in--ia8fD",
	"slide-out": "Tooltip-module__slide-out--Jj9Iw",
	"wrapper": "Tooltip-module__wrapper--rZQQf",
	"tooltip-wrapper": "Tooltip-module__tooltip-wrapper--R0gaI",
	"icon": "Tooltip-module__icon--oy4M8",
	"tooltip": "Tooltip-module__tooltip--oh0fm",
	"black": "Tooltip-module__black--RmJwh",
	"top": "Tooltip-module__top--NM1dh",
	"top-start": "Tooltip-module__top-start--LW4x3",
	"top-end": "Tooltip-module__top-end--i7g7Q",
	"bottom": "Tooltip-module__bottom--_z0N4",
	"bottom-start": "Tooltip-module__bottom-start--oRJUH",
	"bottom-end": "Tooltip-module__bottom-end--qfMK5",
	"left": "Tooltip-module__left--UcBDU",
	"left-start": "Tooltip-module__left-start--maL9p",
	"left-end": "Tooltip-module__left-end--ttTlp",
	"right": "Tooltip-module__right--jVRgM",
	"right-start": "Tooltip-module__right-start--rS6Tz",
	"right-end": "Tooltip-module__right-end--CWacb",
	"blue": "Tooltip-module__blue--xEaag",
	"visible": "Tooltip-module__visible--qAQt6",
	"label": "Tooltip-module__label--o5K01",
	"tooltip-title": "Tooltip-module__tooltip-title--Nu2DQ"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "?4f7e":
/***/ (function() {

/* (ignored) */

/***/ })

}]);