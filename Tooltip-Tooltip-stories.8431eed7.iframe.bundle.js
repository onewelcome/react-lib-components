(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2724],{

/***/ "./stories/Tooltip/Tooltip.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tooltip: function() { return /* binding */ Tooltip_stories_Tooltip; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Tooltip_stories; }
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
  var _usePosition = (0,usePosition/* usePosition */.K)({
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
    function escapePressHandler(event) {
      if (event.key === "Escape") {
        setVisible(false);
      }
    }
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
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Tooltip/Tooltip.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    a: "a",
    strong: "strong",
    h2: "h2",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tooltip"
      }), " component is used to give the end user information related to an element on the page. For instance, it might be used to give information about an input field in a form. It uses the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/hooks-useposition--page",
        children: "usePosition hook"
      }), " under the hood.\nIn order to place the tooltip according to how you would like, you can use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " props. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "where"
      }), " the tooltip should be placed. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " prop defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "how"
      }), " the tooltip should be placed. For instance, if you set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location=\"top\""
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position=\"center\""
      }), ", the tooltip will be placed above the element, and centered horizontally. If you set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location=\"top\""
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position=\"left\""
      }), ", the tooltip will be placed above the element, and aligned to the left of the element. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop can be one of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bottom"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "left"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "right"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " prop can be one of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "center"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start"
      }), " position is the top or left side of the element, depending on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end"
      }), " position is the bottom or right side of the element, depending on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "center"
      }), " position is the center of the element."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can define a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " prop which displays text, followed by an ", (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.InfoCircle
      }), " icon. The contents in between the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Tooltip></Tooltip>"
      }), " tags becomes the content of the popup that appears when you hover over the icon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tooltip-properties",
      children: "Tooltip properties"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            children: "Property"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Type"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Default"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "label"
          }), (0,jsx_runtime.jsx)("td", {
            children: "ReactNode"
          }), (0,jsx_runtime.jsx)("td", {}), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "The text that will be displayed next to the <Icon icon={Icons.InfoCircle} /> icon."
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "title"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {}), (0,jsx_runtime.jsx)("td", {
            children: "The title that will be displayed in the tooltip popup."
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "children"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {}), (0,jsx_runtime.jsx)("td", {
            children: "The content that will be displayed in the tooltip popup."
          }), (0,jsx_runtime.jsx)("td", {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "location"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {
            children: "top"
          }), (0,jsx_runtime.jsxs)("td", {
            children: ["The location of the tooltip popup. Can be one of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "top"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bottom"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "left"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "right"
            }), "."]
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "position"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {
            children: "center"
          }), (0,jsx_runtime.jsxs)("td", {
            children: ["The position of the tooltip popup. Can be one of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "start"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "center"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "end"
            }), "."]
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from \"react\";\nimport Tooltip from \"@onewelcome/react-lib-components\";\n\nconst Example = () => (\n  <Tooltip title=\"Example tooltip\" label=\"This is a tooltip\" location=\"top\" position=\"center\">\n    This is the content that will be displayed when you hover over the icon.\n  </Tooltip>\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Tooltip_stories_Tooltip
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
      story: dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var Tooltip_Tooltip = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/esm/index.js + 1 modules
var esm = __webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js");
// EXTERNAL MODULE: ./stories/utils/useStoryCentring.ts
var useStoryCentring = __webpack_require__("./stories/utils/useStoryCentring.ts");
;// CONCATENATED MODULE: ./stories/Tooltip/Tooltip.stories.tsx
function Tooltip_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return Tooltip_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Tooltip_stories_typeof(obj);
}
var _Tooltip$parameters, _Tooltip$parameters2;
function Tooltip_stories_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function Tooltip_stories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? Tooltip_stories_ownKeys(Object(source), !0).forEach(function (key) {
      Tooltip_stories_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Tooltip_stories_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function Tooltip_stories_defineProperty(obj, key, value) {
  key = Tooltip_stories_toPropertyKey(key);
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
function Tooltip_stories_toPropertyKey(arg) {
  var key = Tooltip_stories_toPrimitive(arg, "string");
  return Tooltip_stories_typeof(key) === "symbol" ? key : String(key);
}
function Tooltip_stories_toPrimitive(input, hint) {
  if (Tooltip_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Tooltip_stories_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == Tooltip_stories_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return {
          value: void 0,
          done: !0
        };
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable || "" === iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    throw new TypeError(Tooltip_stories_typeof(iterable) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
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







var meta = {
  title: "components/Data Display/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      page: Tooltip_Tooltip
    }
  }
};
/* harmony default export */ var Tooltip_stories = (meta);
var Template = function Template(args) {
  (0,useStoryCentring/* useStoryCentring */.g)();
  return /*#__PURE__*/react.createElement(Tooltip, args);
};
var Tooltip_stories_Tooltip = Template.bind({});
Tooltip_stories_Tooltip.play = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var _yield$canvas$findByT;
    var canvasElement, canvas, infoIcon;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,esm/* expect */.l)(canvas.queryByText("Example label")).not.toBeNull();
          });
        case 4:
          _context.next = 6;
          return canvas.findByText("Example label");
        case 6:
          _context.t1 = _yield$canvas$findByT = _context.sent.closest("div");
          _context.t0 = _context.t1 === null;
          if (_context.t0) {
            _context.next = 10;
            break;
          }
          _context.t0 = _yield$canvas$findByT === void 0;
        case 10:
          if (!_context.t0) {
            _context.next = 14;
            break;
          }
          _context.t2 = void 0;
          _context.next = 15;
          break;
        case 14:
          _context.t2 = _yield$canvas$findByT.querySelector("[data-icon]");
        case 15:
          infoIcon = _context.t2;
          (0,esm/* expect */.l)(infoIcon).not.toBeNull();
          _context.next = 19;
          return testing_library_dist/* userEvent */.mV.hover(infoIcon);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
Tooltip_stories_Tooltip.args = {
  title: "Tooltip title.",
  children: "Write the tooltip content here.",
  label: "Example label",
  location: "right",
  position: "center"
};
Tooltip_stories_Tooltip.parameters = Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, Tooltip_stories_Tooltip.parameters), {}, {
  docs: Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, (_Tooltip$parameters = Tooltip_stories_Tooltip.parameters) === null || _Tooltip$parameters === void 0 ? void 0 : _Tooltip$parameters.docs), {}, {
    source: Tooltip_stories_objectSpread({
      originalSource: "args => {\n  useStoryCentring();\n  return <TooltipComponent {...args} />;\n}"
    }, (_Tooltip$parameters2 = Tooltip_stories_Tooltip.parameters) === null || _Tooltip$parameters2 === void 0 || (_Tooltip$parameters2 = _Tooltip$parameters2.docs) === null || _Tooltip$parameters2 === void 0 ? void 0 : _Tooltip$parameters2.source)
  })
});
var __namedExportsOrder = ["Tooltip"];

/***/ }),

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ useGetDomRoot; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
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


var useGetDomRoot = function useGetDomRoot(passedDomRoot, relativeElement) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.body),
    _useState2 = _slicedToArray(_useState, 2),
    root = _useState2[0],
    setRoot = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (relativeElement !== null && relativeElement !== void 0 && relativeElement.current && !passedDomRoot) {
      var closestBaseStylingWrapper = relativeElement.current.closest(".basestyling-wrapper");
      if (closestBaseStylingWrapper) {
        setRoot(closestBaseStylingWrapper);
        return;
      }
    } else if (passedDomRoot) {
      setRoot(passedDomRoot);
      return;
    }
  }, [relativeElement]);
  return {
    root: root
  };
};

/***/ }),

/***/ "./src/hooks/usePosition.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: function() { return /* binding */ usePosition; }
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
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    initialCalculationDone = _useState2[0],
    setInitialCalculationDone = _useState2[1];
  if (configObject.transformOrigin === undefined) {
    configObject.transformOrigin = defaultConfigObject.transformOrigin;
  }
  if (configObject.placement === undefined) {
    configObject.placement = defaultConfigObject.placement;
  }
  if (configObject.offset === undefined) {
    configObject.offset = defaultConfigObject.offset;
  }
  var _useState3 = (0,react.useState)({
      left: 0,
      top: 0,
      right: "initial",
      bottom: "initial"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    position = _useState4[0],
    setPosition = _useState4[1];
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
    if (!initialCalculationDone) {
      setInitialCalculationDone(true);
    }
  }, (_configObject$debounc = configObject.debounceAmount) !== null && _configObject$debounc !== void 0 ? _configObject$debounc : 20);
  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    calculatePosition: calculatePosition,
    initialCalculationDone: initialCalculationDone
  };
};

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ filterProps; },
/* harmony export */   MU: function() { return /* binding */ getValueByPath; },
/* harmony export */   Pb: function() { return /* binding */ isJsonString; },
/* harmony export */   R3: function() { return /* binding */ areArraysDifferent; },
/* harmony export */   y: function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx, deepMerge */
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
var deepMerge = function deepMerge(obj1, obj2) {
  if (!obj2) return obj1;
  var result = _objectSpread({}, obj1);
  for (var _key2 in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, _key2)) {
      if (_typeof(obj2[_key2]) === "object" && obj2[_key2] !== null && Object.prototype.hasOwnProperty.call(obj1, _key2) && !Array.isArray(obj2[_key2])) {
        result[_key2] = deepMerge(obj1[_key2], obj2[_key2]);
      } else {
        result[_key2] = obj2[_key2];
      }
    }
  }
  return result;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
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