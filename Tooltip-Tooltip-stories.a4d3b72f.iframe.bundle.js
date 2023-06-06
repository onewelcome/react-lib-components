"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2724],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF": function() { return /* binding */ withMDXComponents; },
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "ah": function() { return /* binding */ useMDXComponents; },
/* harmony export */   "pC": function() { return /* binding */ MDXContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./stories/Tooltip/Tooltip.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tooltip": function() { return /* binding */ Tooltip_stories_Tooltip; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
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




       /* harmony default export */ var Tooltip_Tooltip_module = (Tooltip_module/* default */.Z && Tooltip_module/* default.locals */.Z.locals ? Tooltip_module/* default.locals */.Z.locals : undefined);

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
var _excluded = ["children", "className", "placement", "offset", "transformOrigin", "domRoot", "label"];
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








var defaultPosition = {
  placement: {
    horizontal: "right",
    vertical: "center"
  },
  offset: {
    left: 16,
    right: 0,
    top: 0,
    bottom: 0
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "center"
  }
};
var TooltipComponent = function TooltipComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? defaultPosition.placement : _ref$placement,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? defaultPosition.offset : _ref$offset,
    _ref$transformOrigin = _ref.transformOrigin,
    transformOrigin = _ref$transformOrigin === void 0 ? defaultPosition.transformOrigin : _ref$transformOrigin,
    domRoot = _ref.domRoot,
    label = _ref.label,
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
  var _usePosition = (0,usePosition/* usePosition */.K)({
      relativeElement: relativeElement,
      elementToBePositioned: elementToBePositioned,
      placement: placement,
      offset: offset,
      transformOrigin: transformOrigin
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
        className: Tooltip_Tooltip_module.label
      });
    }
    return /*#__PURE__*/react.createElement("span", {
      className: Tooltip_Tooltip_module.label,
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
    icon: Icon/* Icons.InfoCircle */.P.InfoCircle,
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
    className: "".concat(Tooltip_Tooltip_module.tooltip, " ").concat(visible ? Tooltip_Tooltip_module.visible : "")
  }, children), root)));
};
var Tooltip = /*#__PURE__*/react.forwardRef(TooltipComponent);
try {
    // @ts-ignore
    Tooltip.displayName = "Tooltip";
    // @ts-ignore
    Tooltip.__docgenInfo = { "description": "", "displayName": "Tooltip", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "ReactNode" } }, "placement": { "defaultValue": { value: "defaultPosition.placement" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": { value: "defaultPosition.offset" }, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "transformOrigin": { "defaultValue": { value: "defaultPosition.transformOrigin" }, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } } } };
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
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Tooltip/Tooltip.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      a: "a",
      h1: "h1"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tooltip"
        }), " component is used to give the end user information related to an element on the page. For instance, it might be used to give information about an input field in a form. It uses the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/hooks-useposition--page",
          children: "usePosition hook"
        }), " under the hood\nand therefor also accepts the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "placement"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transformOrigin"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "offset"
        }), " props."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can define a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "label"
        }), " prop which displays text, followed by an ", (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
          icon: Icon/* Icons.InfoCircle */.P.InfoCircle
        }), " icon. The contents in between the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Tooltip></Tooltip>"
        }), " tags becomes the content of the popup that appears when you hover over the icon."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
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
}
/* harmony default export */ var Tooltip_Tooltip = (MDXContent);

;// CONCATENATED MODULE: ./stories/Tooltip/Tooltip.stories.tsx
var _Tooltip$parameters, _Tooltip$parameters2, _Tooltip$parameters2$;
function Tooltip_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return Tooltip_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Tooltip_stories_typeof(obj);
}
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
  return /*#__PURE__*/react.createElement(Tooltip, args);
};
var Tooltip_stories_Tooltip = Template.bind({});
Tooltip_stories_Tooltip.args = {
  children: "This is an example tooltip message.",
  label: "Example label",
  placement: {
    horizontal: "right",
    vertical: "center"
  },
  offset: {
    left: 16,
    right: 0,
    bottom: 0,
    top: 0
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "center"
  }
};
Tooltip_stories_Tooltip.parameters = Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, Tooltip_stories_Tooltip.parameters), {}, {
  docs: Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, (_Tooltip$parameters = Tooltip_stories_Tooltip.parameters) === null || _Tooltip$parameters === void 0 ? void 0 : _Tooltip$parameters.docs), {}, {
    source: Tooltip_stories_objectSpread({
      originalSource: "args => <TooltipComponent {...args} />"
    }, (_Tooltip$parameters2 = Tooltip_stories_Tooltip.parameters) === null || _Tooltip$parameters2 === void 0 ? void 0 : (_Tooltip$parameters2$ = _Tooltip$parameters2.docs) === null || _Tooltip$parameters2$ === void 0 ? void 0 : _Tooltip$parameters2$.source)
  })
});
var __namedExportsOrder = ["Tooltip"];

/***/ }),

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ useGetDomRoot; }
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

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": function() { return /* binding */ filterProps; },
/* harmony export */   "MU": function() { return /* binding */ getValueByPath; },
/* harmony export */   "Pb": function() { return /* binding */ isJsonString; },
/* harmony export */   "R3": function() { return /* binding */ areArraysDifferent; },
/* harmony export */   "y": function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx */
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tooltip-module__sr-only--RRKCe{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Tooltip-module__hidden--S1mG5{display:none}.Tooltip-module__slide-in--ia8fD{animation:Tooltip-module__slide-in--ia8fD .5s forwards}@media(prefers-reduced-motion: reduce){.Tooltip-module__slide-in--ia8fD{animation-duration:.1ms}}.Tooltip-module__slide-out--Jj9Iw{animation:Tooltip-module__slide-out--Jj9Iw .5s forwards}@media(prefers-reduced-motion: reduce){.Tooltip-module__slide-out--Jj9Iw{animation-duration:.1ms}}@keyframes Tooltip-module__slide-in--ia8fD{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Tooltip-module__slide-out--Jj9Iw{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tooltip-module__w-6--lOPNn{width:6%}.Tooltip-module__w-7--JPcDh{width:7%}.Tooltip-module__w-8--NPU3m{width:8%}.Tooltip-module__w-9--MVlYQ{width:9%}.Tooltip-module__w-10--bEF9P{width:10%}.Tooltip-module__w-11--NDpBc{width:11%}.Tooltip-module__w-12--nnkGq{width:12%}.Tooltip-module__w-13--LWRde{width:13%}.Tooltip-module__w-14--mCVCD{width:14%}.Tooltip-module__w-15--gLTsx{width:15%}.Tooltip-module__w-16--sMAN2{width:16%}.Tooltip-module__w-17--jnjSi{width:17%}.Tooltip-module__w-18--dkKMA{width:18%}.Tooltip-module__w-19--k1UPo{width:19%}.Tooltip-module__w-20--pZXxB{width:20%}.Tooltip-module__w-21--xZVTs{width:21%}.Tooltip-module__w-22--JfYTo{width:22%}.Tooltip-module__w-23--BPAcm{width:23%}.Tooltip-module__w-24--sDdz7{width:24%}.Tooltip-module__w-25--xqy3x{width:25%}.Tooltip-module__w-26--qqMul{width:26%}.Tooltip-module__w-27--eB2WA{width:27%}.Tooltip-module__w-28--Bk5CY{width:28%}.Tooltip-module__w-29--GKXi2{width:29%}.Tooltip-module__w-30--Oft4a{width:30%}.Tooltip-module__w-31--e_9Mh{width:31%}.Tooltip-module__w-32--EYvdM{width:32%}.Tooltip-module__w-33--c1Rc3{width:33%}.Tooltip-module__w-34--O23_n{width:34%}.Tooltip-module__w-35--t5PPW{width:35%}.Tooltip-module__w-36--bWcs7{width:36%}.Tooltip-module__w-37--yHBsC{width:37%}.Tooltip-module__w-38--mg5nb{width:38%}.Tooltip-module__w-39--kSFq4{width:39%}.Tooltip-module__w-40--kg4bj{width:40%}.Tooltip-module__w-41--xFb8W{width:41%}.Tooltip-module__w-42--jwG1f{width:42%}.Tooltip-module__w-43--xZKF_{width:43%}.Tooltip-module__w-44--bxOHL{width:44%}.Tooltip-module__w-45--Ff82L{width:45%}.Tooltip-module__w-46--azxhn{width:46%}.Tooltip-module__w-47--xVBTU{width:47%}.Tooltip-module__w-48--lLPT6{width:48%}.Tooltip-module__w-49--SGLgV{width:49%}.Tooltip-module__w-50--OyANo{width:50%}.Tooltip-module__w-51--NEjmh{width:51%}.Tooltip-module__w-52--TSqC5{width:52%}.Tooltip-module__w-53--YEK8l{width:53%}.Tooltip-module__w-54--isnv6{width:54%}.Tooltip-module__w-55--xdgTi{width:55%}.Tooltip-module__w-56--LTO9e{width:56%}.Tooltip-module__w-57--xTKgx{width:57%}.Tooltip-module__w-58--UXbs7{width:58%}.Tooltip-module__w-59--SK6YV{width:59%}.Tooltip-module__w-60--Lad5k{width:60%}.Tooltip-module__w-61--yA5Hu{width:61%}.Tooltip-module__w-62--l_r6l{width:62%}.Tooltip-module__w-63--aaDV7{width:63%}.Tooltip-module__w-64--WbomC{width:64%}.Tooltip-module__w-65--fsUPM{width:65%}.Tooltip-module__w-66--ZMn1F{width:66%}.Tooltip-module__w-67--IFhWa{width:67%}.Tooltip-module__w-68--nZQ0P{width:68%}.Tooltip-module__w-69--kM927{width:69%}.Tooltip-module__w-70--vlcuZ{width:70%}.Tooltip-module__w-71--J3Izc{width:71%}.Tooltip-module__w-72--jP6u5{width:72%}.Tooltip-module__w-73--fBv3s{width:73%}.Tooltip-module__w-74--vCkV1{width:74%}.Tooltip-module__w-75--Z9Pcj{width:75%}.Tooltip-module__w-76--nFO10{width:76%}.Tooltip-module__w-77--ZrR37{width:77%}.Tooltip-module__w-78--E8hCq{width:78%}.Tooltip-module__w-79--H_crR{width:79%}.Tooltip-module__w-80--TKZHF{width:80%}.Tooltip-module__w-81--O5YSg{width:81%}.Tooltip-module__w-82--WQ7xr{width:82%}.Tooltip-module__w-83--LZvnn{width:83%}.Tooltip-module__w-84--Vj_wJ{width:84%}.Tooltip-module__w-85--kltfm{width:85%}.Tooltip-module__w-86--I69kO{width:86%}.Tooltip-module__w-87--Xr0Ux{width:87%}.Tooltip-module__w-88--LNOqH{width:88%}.Tooltip-module__w-89--qrGVE{width:89%}.Tooltip-module__w-90--yGcqR{width:90%}.Tooltip-module__w-91--ppRuD{width:91%}.Tooltip-module__w-92--pa6Il{width:92%}.Tooltip-module__w-93--X1DxF{width:93%}.Tooltip-module__w-94--mNJQY{width:94%}.Tooltip-module__w-95--iMUzH{width:95%}.Tooltip-module__w-96--ct5jB{width:96%}.Tooltip-module__w-97--JjpdC{width:97%}.Tooltip-module__w-98--q7LHH{width:98%}.Tooltip-module__w-99--EAw3_{width:99%}.Tooltip-module__w-100--RREZb{width:100%}.Tooltip-module__w-101--_txtU{width:101%}.Tooltip-module__w-102--RZrvy{width:102%}.Tooltip-module__w-103--KGzEN{width:103%}.Tooltip-module__w-104--fFYiX{width:104%}.Tooltip-module__w-105--jOLGK{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tooltip-module__wrapper--rZQQf{display:flex;align-items:center}.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8{margin-left:.5rem;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;color:var(--greyed-out)}@media(prefers-reduced-motion: reduce){.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8{transition-duration:.1ms}}.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8:hover{color:var(--default)}.Tooltip-module__tooltip--oh0fm{position:fixed;background-color:var(--tooltip-background-color);padding:.1875rem .5rem;color:var(--light);max-width:330px;opacity:0;transform:scale(0);transform-origin:center left;pointer-events:none;transition-property:opacity,transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Tooltip-module__tooltip--oh0fm{transition-duration:.1ms}}.Tooltip-module__tooltip--oh0fm.Tooltip-module__visible--qAQt6{opacity:1;transform:scale(1)}.Tooltip-module__label--o5K01:focus-visible{outline:.5px dashed var(--color-primary)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Tooltip-module__sr-only--RRKCe",
	"hidden": "Tooltip-module__hidden--S1mG5",
	"slide-in": "Tooltip-module__slide-in--ia8fD",
	"slide-out": "Tooltip-module__slide-out--Jj9Iw",
	"w-6": "Tooltip-module__w-6--lOPNn",
	"w-7": "Tooltip-module__w-7--JPcDh",
	"w-8": "Tooltip-module__w-8--NPU3m",
	"w-9": "Tooltip-module__w-9--MVlYQ",
	"w-10": "Tooltip-module__w-10--bEF9P",
	"w-11": "Tooltip-module__w-11--NDpBc",
	"w-12": "Tooltip-module__w-12--nnkGq",
	"w-13": "Tooltip-module__w-13--LWRde",
	"w-14": "Tooltip-module__w-14--mCVCD",
	"w-15": "Tooltip-module__w-15--gLTsx",
	"w-16": "Tooltip-module__w-16--sMAN2",
	"w-17": "Tooltip-module__w-17--jnjSi",
	"w-18": "Tooltip-module__w-18--dkKMA",
	"w-19": "Tooltip-module__w-19--k1UPo",
	"w-20": "Tooltip-module__w-20--pZXxB",
	"w-21": "Tooltip-module__w-21--xZVTs",
	"w-22": "Tooltip-module__w-22--JfYTo",
	"w-23": "Tooltip-module__w-23--BPAcm",
	"w-24": "Tooltip-module__w-24--sDdz7",
	"w-25": "Tooltip-module__w-25--xqy3x",
	"w-26": "Tooltip-module__w-26--qqMul",
	"w-27": "Tooltip-module__w-27--eB2WA",
	"w-28": "Tooltip-module__w-28--Bk5CY",
	"w-29": "Tooltip-module__w-29--GKXi2",
	"w-30": "Tooltip-module__w-30--Oft4a",
	"w-31": "Tooltip-module__w-31--e_9Mh",
	"w-32": "Tooltip-module__w-32--EYvdM",
	"w-33": "Tooltip-module__w-33--c1Rc3",
	"w-34": "Tooltip-module__w-34--O23_n",
	"w-35": "Tooltip-module__w-35--t5PPW",
	"w-36": "Tooltip-module__w-36--bWcs7",
	"w-37": "Tooltip-module__w-37--yHBsC",
	"w-38": "Tooltip-module__w-38--mg5nb",
	"w-39": "Tooltip-module__w-39--kSFq4",
	"w-40": "Tooltip-module__w-40--kg4bj",
	"w-41": "Tooltip-module__w-41--xFb8W",
	"w-42": "Tooltip-module__w-42--jwG1f",
	"w-43": "Tooltip-module__w-43--xZKF_",
	"w-44": "Tooltip-module__w-44--bxOHL",
	"w-45": "Tooltip-module__w-45--Ff82L",
	"w-46": "Tooltip-module__w-46--azxhn",
	"w-47": "Tooltip-module__w-47--xVBTU",
	"w-48": "Tooltip-module__w-48--lLPT6",
	"w-49": "Tooltip-module__w-49--SGLgV",
	"w-50": "Tooltip-module__w-50--OyANo",
	"w-51": "Tooltip-module__w-51--NEjmh",
	"w-52": "Tooltip-module__w-52--TSqC5",
	"w-53": "Tooltip-module__w-53--YEK8l",
	"w-54": "Tooltip-module__w-54--isnv6",
	"w-55": "Tooltip-module__w-55--xdgTi",
	"w-56": "Tooltip-module__w-56--LTO9e",
	"w-57": "Tooltip-module__w-57--xTKgx",
	"w-58": "Tooltip-module__w-58--UXbs7",
	"w-59": "Tooltip-module__w-59--SK6YV",
	"w-60": "Tooltip-module__w-60--Lad5k",
	"w-61": "Tooltip-module__w-61--yA5Hu",
	"w-62": "Tooltip-module__w-62--l_r6l",
	"w-63": "Tooltip-module__w-63--aaDV7",
	"w-64": "Tooltip-module__w-64--WbomC",
	"w-65": "Tooltip-module__w-65--fsUPM",
	"w-66": "Tooltip-module__w-66--ZMn1F",
	"w-67": "Tooltip-module__w-67--IFhWa",
	"w-68": "Tooltip-module__w-68--nZQ0P",
	"w-69": "Tooltip-module__w-69--kM927",
	"w-70": "Tooltip-module__w-70--vlcuZ",
	"w-71": "Tooltip-module__w-71--J3Izc",
	"w-72": "Tooltip-module__w-72--jP6u5",
	"w-73": "Tooltip-module__w-73--fBv3s",
	"w-74": "Tooltip-module__w-74--vCkV1",
	"w-75": "Tooltip-module__w-75--Z9Pcj",
	"w-76": "Tooltip-module__w-76--nFO10",
	"w-77": "Tooltip-module__w-77--ZrR37",
	"w-78": "Tooltip-module__w-78--E8hCq",
	"w-79": "Tooltip-module__w-79--H_crR",
	"w-80": "Tooltip-module__w-80--TKZHF",
	"w-81": "Tooltip-module__w-81--O5YSg",
	"w-82": "Tooltip-module__w-82--WQ7xr",
	"w-83": "Tooltip-module__w-83--LZvnn",
	"w-84": "Tooltip-module__w-84--Vj_wJ",
	"w-85": "Tooltip-module__w-85--kltfm",
	"w-86": "Tooltip-module__w-86--I69kO",
	"w-87": "Tooltip-module__w-87--Xr0Ux",
	"w-88": "Tooltip-module__w-88--LNOqH",
	"w-89": "Tooltip-module__w-89--qrGVE",
	"w-90": "Tooltip-module__w-90--yGcqR",
	"w-91": "Tooltip-module__w-91--ppRuD",
	"w-92": "Tooltip-module__w-92--pa6Il",
	"w-93": "Tooltip-module__w-93--X1DxF",
	"w-94": "Tooltip-module__w-94--mNJQY",
	"w-95": "Tooltip-module__w-95--iMUzH",
	"w-96": "Tooltip-module__w-96--ct5jB",
	"w-97": "Tooltip-module__w-97--JjpdC",
	"w-98": "Tooltip-module__w-98--q7LHH",
	"w-99": "Tooltip-module__w-99--EAw3_",
	"w-100": "Tooltip-module__w-100--RREZb",
	"w-101": "Tooltip-module__w-101--_txtU",
	"w-102": "Tooltip-module__w-102--RZrvy",
	"w-103": "Tooltip-module__w-103--KGzEN",
	"w-104": "Tooltip-module__w-104--fFYiX",
	"w-105": "Tooltip-module__w-105--jOLGK",
	"wrapper": "Tooltip-module__wrapper--rZQQf",
	"tooltip-wrapper": "Tooltip-module__tooltip-wrapper--R0gaI",
	"icon": "Tooltip-module__icon--oy4M8",
	"tooltip": "Tooltip-module__tooltip--oh0fm",
	"visible": "Tooltip-module__visible--qAQt6",
	"label": "Tooltip-module__label--o5K01"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



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

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);