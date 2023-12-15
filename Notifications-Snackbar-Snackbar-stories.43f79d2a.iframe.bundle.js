"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1627],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: function() { return /* binding */ withMDXComponents; },
/* harmony export */   Zo: function() { return /* binding */ MDXProvider; },
/* harmony export */   ah: function() { return /* binding */ useMDXComponents; },
/* harmony export */   pC: function() { return /* binding */ MDXContext; }
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

/***/ "./stories/Notifications/Snackbar/Snackbar.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorSnackbar: function() { return /* binding */ ErrorSnackbar; },
  Snackbar: function() { return /* binding */ Snackbar_stories_Snackbar; },
  SnackbarWithTitle: function() { return /* binding */ SnackbarWithTitle; },
  SuccessSnackbar: function() { return /* binding */ SuccessSnackbar; },
  WarningSnackbar: function() { return /* binding */ WarningSnackbar; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Snackbar_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx
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


var SnackbarContext = /*#__PURE__*/(0,react.createContext)({
  enqueueSnackbar: function enqueueSnackbar() {
    return null;
  },
  enqueueSuccessSnackbar: function enqueueSuccessSnackbar() {
    return null;
  },
  enqueueErrorSnackbar: function enqueueErrorSnackbar() {
    return null;
  },
  enqueueWarningSnackbar: function enqueueWarningSnackbar() {
    return null;
  },
  setSnackbarHeight: function setSnackbarHeight() {
    return null;
  },
  snackbars: []
});
var SnackbarContextProvider = function SnackbarContextProvider(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState;
  return /*#__PURE__*/react.createElement(SnackbarContext.Provider, {
    value: initialState
  }, children);
};

try {
    // @ts-ignore
    SnackbarContextProvider.displayName = "SnackbarContextProvider";
    // @ts-ignore
    SnackbarContextProvider.__docgenInfo = { "description": "", "displayName": "SnackbarContextProvider", "props": { "initialState": { "defaultValue": null, "description": "", "name": "initialState", "required": true, "type": { "name": "SnackbarContextProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx#SnackbarContextProvider"] = { docgenInfo: SnackbarContextProvider.__docgenInfo, name: "SnackbarContextProvider", path: "src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx#SnackbarContextProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/interfaces.ts
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

function isNewEnqueueSnackbarInterface(args) {
  return args !== null && _typeof(args) === "object" && ("title" in args || "content" in args);
}
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss
var SnackbarContainer_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SnackbarContainer_module/* default */.Z, options);




       /* harmony default export */ var SnackbarContainer_SnackbarContainer_module = (SnackbarContainer_module/* default */.Z && SnackbarContainer_module/* default */.Z.locals ? SnackbarContainer_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx
var _excluded = ["placement", "children", "zIndex", "className"];
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




var useSnackbarContainerHeightAnimation = function useSnackbarContainerHeightAnimation() {
  var _useContext = (0,react.useContext)(SnackbarContext),
    snackbars = _useContext.snackbars;
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = (0,react.useState)("flex-start"),
    _useState4 = _slicedToArray(_useState3, 2),
    justifyContent = _useState4[0],
    setJustifyContent = _useState4[1];
  var spaceBetweenSnackbars = 8;
  var exceedsMaximumVisibleSnackbars = snackbars.length >= 3;
  (0,react.useEffect)(function () {
    var allHeights = snackbars.map(function (snackbar) {
      return snackbar.height;
    });
    var totalHeight = allHeights.reduce(function (prev, curr) {
      return prev + curr;
    }, 0);
    totalHeight += (Math.min(snackbars.length, 3) - 1) * spaceBetweenSnackbars;

    /**
     * Once we reach the maximum amount of snackbars, they will start to disappear. We have to wait with reversing the justify-content until the last snackbar
     * has completed their animationIn. This is around 500ms. Then we want to reverse it, because otherwise whenever a snackbar disappears they shift up
     * and then down again, which looks really bad.
     * */
    if (exceedsMaximumVisibleSnackbars) setTimeout(function () {
      setJustifyContent("flex-end");
    }, 500);
    if (height > totalHeight && justifyContent !== "flex-end") {
      setJustifyContent("flex-end");
    } else if (height < totalHeight && justifyContent !== "flex-start") {
      setJustifyContent("flex-start");
    }
    setHeight(totalHeight);
  }, [snackbars]);
  return {
    height: height,
    justifyContent: justifyContent
  };
};
var SnackbarContainer = function SnackbarContainer(_ref) {
  var placement = _ref.placement,
    children = _ref.children,
    zIndex = _ref.zIndex,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useSnackbarContainer = useSnackbarContainerHeightAnimation(),
    height = _useSnackbarContainer.height,
    justifyContent = _useSnackbarContainer.justifyContent;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    style: {
      zIndex: zIndex,
      height: height,
      justifyContent: justifyContent
    },
    className: "".concat(SnackbarContainer_SnackbarContainer_module["snackbars"], " ").concat(SnackbarContainer_SnackbarContainer_module[placement.horizontal], " ").concat(SnackbarContainer_SnackbarContainer_module[placement.vertical], " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
try {
    // @ts-ignore
    SnackbarContainer.displayName = "SnackbarContainer";
    // @ts-ignore
    SnackbarContainer.__docgenInfo = { "description": "", "displayName": "SnackbarContainer", "props": { "placement": { "defaultValue": null, "description": "", "name": "placement", "required": true, "type": { "name": "Placement" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx#SnackbarContainer"] = { docgenInfo: SnackbarContainer.__docgenInfo, name: "SnackbarContainer", path: "src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx#SnackbarContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss
var SnackbarItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss

      
      
      
      
      
      
      
      
      

var SnackbarItem_module_options = {};

SnackbarItem_module_options.styleTagTransform = (styleTagTransform_default());
SnackbarItem_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SnackbarItem_module_options.insert = insertBySelector_default().bind(null, "head");
    
SnackbarItem_module_options.domAPI = (styleDomAPI_default());
SnackbarItem_module_options.insertStyleElement = (insertStyleElement_default());

var SnackbarItem_module_update = injectStylesIntoStyleTag_default()(SnackbarItem_module/* default */.Z, SnackbarItem_module_options);




       /* harmony default export */ var SnackbarItem_SnackbarItem_module = (SnackbarItem_module/* default */.Z && SnackbarItem_module/* default */.Z.locals ? SnackbarItem_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/hooks/useAnimation.ts
function useAnimation_slicedToArray(arr, i) {
  return useAnimation_arrayWithHoles(arr) || useAnimation_iterableToArrayLimit(arr, i) || useAnimation_unsupportedIterableToArray(arr, i) || useAnimation_nonIterableRest();
}
function useAnimation_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useAnimation_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useAnimation_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAnimation_arrayLikeToArray(o, minLen);
}
function useAnimation_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function useAnimation_iterableToArrayLimit(r, l) {
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
function useAnimation_arrayWithHoles(arr) {
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


var useAnimation = function useAnimation(callback) {
  var animatedObjectRef = (0,react.useRef)(null);
  /** We need to store flag that says us when to call the callback */
  var _useState = (0,react.useState)(false),
    _useState2 = useAnimation_slicedToArray(_useState, 2),
    animationStarted = _useState2[0],
    setAnimationStarted = _useState2[1];
  var onAnimationEnd = function onAnimationEnd() {
    return animationStarted && callback();
  };
  (0,react.useEffect)(function () {
    var _animatedObjectRef$cu;
    (_animatedObjectRef$cu = animatedObjectRef.current) === null || _animatedObjectRef$cu === void 0 || _animatedObjectRef$cu.addEventListener("animationend", onAnimationEnd);
    return function () {
      var _animatedObjectRef$cu2;
      return (_animatedObjectRef$cu2 = animatedObjectRef.current) === null || _animatedObjectRef$cu2 === void 0 ? void 0 : _animatedObjectRef$cu2.removeEventListener("animationend", onAnimationEnd);
    };
  }, [animationStarted]);
  return {
    ref: animatedObjectRef,
    animationStarted: animationStarted,
    startAnimation: function startAnimation() {
      return setAnimationStarted(true);
    }
  };
};
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.tsx
function SnackbarItem_extends() {
  SnackbarItem_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return SnackbarItem_extends.apply(this, arguments);
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









var textColor = "var(--snackbar-text-color)";
var useRegisterSnackbarHeight = function useRegisterSnackbarHeight(singleSnackbarRef, snackbarId) {
  var ctx = (0,react.useContext)(SnackbarContext);
  (0,react.useEffect)(function () {
    if (singleSnackbarRef.current) {
      ctx.setSnackbarHeight(snackbarId, singleSnackbarRef.current.getBoundingClientRect().height);
    }
  }, [singleSnackbarRef.current]);
};
var SnackbarItem = function SnackbarItem(_ref) {
  var id = _ref.id,
    title = _ref.title,
    duration = _ref.duration,
    variant = _ref.variant,
    content = _ref.content,
    className = _ref.className,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    onClose = _ref.onClose,
    closeButtonTitle = _ref.closeButtonTitle;
  var timerHandler = (0,react.useRef)();
  var onAnimationEnd = function onAnimationEnd() {
    return onClose(id);
  };
  var _useAnimation = useAnimation(onAnimationEnd),
    ref = _useAnimation.ref,
    animationStarted = _useAnimation.animationStarted,
    startAnimation = _useAnimation.startAnimation;
  var hasOnlyTitle = !content && !!title;
  var renderTitle = title && !hasOnlyTitle;
  var renderContentOrTitleOnly = content || hasOnlyTitle;
  useRegisterSnackbarHeight(ref, id);
  (0,react.useEffect)(function () {
    timerHandler.current = setTimeout(function () {
      return startAnimation();
    }, duration);
    return function () {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);
  var onMouseEnter = function onMouseEnter() {
    timerHandler.current && clearTimeout(timerHandler.current);
  };
  var onMouseLeave = function onMouseLeave() {
    timerHandler.current = setTimeout(function () {
      return startAnimation();
    }, duration);
  };
  var getVariantIcon = function getVariantIcon() {
    if (variant === "error") {
      return Icon/* Icons */.P.Error;
    }
    if (variant === "warning") {
      return Icon/* Icons */.P.Warning;
    }
    return variant === "success" ? Icon/* Icons */.P.CheckmarkCircleAlt : Icon/* Icons */.P.InfoCircle;
  };
  var actionButtons = actions.map(function (actionProp, index) {
    return /*#__PURE__*/react.createElement("button", SnackbarItem_extends({
      key: index
    }, actionProp, {
      onClick: function onClick(e) {
        var _actionProp$onClick;
        onClose(id);
        (_actionProp$onClick = actionProp.onClick) === null || _actionProp$onClick === void 0 || _actionProp$onClick.call(actionProp, e);
      },
      className: SnackbarItem_SnackbarItem_module["action-button"]
    }), actionProp.label);
  });
  var snackbarClasses = [SnackbarItem_SnackbarItem_module["snackbar"], SnackbarItem_SnackbarItem_module[variant], animationStarted ? readyclasses_module/* default */.Z["slide-out"] : readyclasses_module/* default */.Z["slide-in"], className !== null && className !== void 0 ? className : ""].join(" ");
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    "aria-live": "polite",
    className: snackbarClasses,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module["outer-content-wrapper"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: getVariantIcon(),
    className: SnackbarItem_SnackbarItem_module["icon"]
  }), /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module["content-wrapper"]
  }, renderTitle && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    className: SnackbarItem_SnackbarItem_module["title"],
    variant: "body-bold",
    tag: "span"
  }, title), renderContentOrTitleOnly && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    className: SnackbarItem_SnackbarItem_module["content"],
    variant: "body"
  }, hasOnlyTitle ? title : content))), actionButtons.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module["actions"]
  }, actionButtons), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    id: SnackbarItem_SnackbarItem_module["close-btn"],
    onClick: function onClick() {
      return startAnimation();
    },
    title: closeButtonTitle
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Times,
    color: textColor
  })));
};
try {
    // @ts-ignore
    SnackbarItem.displayName = "SnackbarItem";
    // @ts-ignore
    SnackbarItem.__docgenInfo = { "description": "", "displayName": "SnackbarItem", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "duration": { "defaultValue": null, "description": "", "name": "duration", "required": true, "type": { "name": "number" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": true, "type": { "name": "enum", "value": [{ "value": "\"error\"" }, { "value": "\"warning\"" }, { "value": "\"success\"" }, { "value": "\"info\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "(key: string) => void" } }, "closeButtonTitle": { "defaultValue": null, "description": "", "name": "closeButtonTitle", "required": true, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": false, "type": { "name": "string" } }, "actions": { "defaultValue": { value: "[]" }, "description": "", "name": "actions", "required": false, "type": { "name": "Actions" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.tsx#SnackbarItem"] = { docgenInfo: SnackbarItem.__docgenInfo, name: "SnackbarItem", path: "src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.tsx#SnackbarItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx
function SnackbarProvider_typeof(o) {
  "@babel/helpers - typeof";

  return SnackbarProvider_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, SnackbarProvider_typeof(o);
}
function SnackbarProvider_extends() {
  SnackbarProvider_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return SnackbarProvider_extends.apply(this, arguments);
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
  return SnackbarProvider_typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (SnackbarProvider_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (SnackbarProvider_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || SnackbarProvider_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return SnackbarProvider_arrayLikeToArray(arr);
}
function SnackbarProvider_slicedToArray(arr, i) {
  return SnackbarProvider_arrayWithHoles(arr) || SnackbarProvider_iterableToArrayLimit(arr, i) || SnackbarProvider_unsupportedIterableToArray(arr, i) || SnackbarProvider_nonIterableRest();
}
function SnackbarProvider_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function SnackbarProvider_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return SnackbarProvider_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SnackbarProvider_arrayLikeToArray(o, minLen);
}
function SnackbarProvider_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function SnackbarProvider_iterableToArrayLimit(r, l) {
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
function SnackbarProvider_arrayWithHoles(arr) {
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










/** Short msg is when only title is provided. Long one when content or/and actions are provided (or type is error). */

var SnackbarProvider = function SnackbarProvider() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      closeButtonTitle: ""
    },
    closeButtonTitle = _ref.closeButtonTitle,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? {
      vertical: "bottom",
      horizontal: "center"
    } : _ref$placement,
    _ref$autoHideDuration = _ref.autoHideDuration,
    autoHideDuration = _ref$autoHideDuration === void 0 ? {
      long: 8000,
      short: 4000
    } : _ref$autoHideDuration,
    _ref$stackSize = _ref.stackSize,
    stackSize = _ref$stackSize === void 0 ? 3 : _ref$stackSize,
    domRoot = _ref.domRoot,
    children = _ref.children,
    className = _ref.className;
  var _useState = (0,react.useState)([]),
    _useState2 = SnackbarProvider_slicedToArray(_useState, 2),
    snackbars = _useState2[0],
    setSnackbars = _useState2[1];
  var wrappingDivRef = (0,react.useRef)(null);
  var _useGetDomRoot = (0,useGetDomRoot/* useGetDomRoot */.X)(domRoot, wrappingDivRef),
    root = _useGetDomRoot.root;
  var addSnackbar = function addSnackbar(item) {
    setSnackbars(function (items) {
      return [].concat(_toConsumableArray(items), [item]);
    });
  };
  var setSnackbarHeight = function setSnackbarHeight(id, height) {
    var newSnackbarsState = snackbars.map(function (snackbar) {
      if (snackbar.id !== id) {
        return snackbar;
      }
      return _objectSpread(_objectSpread({}, snackbar), {}, {
        height: height
      });
    });
    setSnackbars(newSnackbarsState);
  };
  var getDuration = function getDuration(variant, actions, content) {
    var hasError = variant === "error";
    var hasContentOrActions = content !== null && content !== void 0 ? content : actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };
  var enqueueSnackbar = function enqueueSnackbar(propsOrTitle, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    var props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    var _props$variant = props.variant,
      variant = _props$variant === void 0 ? "info" : _props$variant,
      actions = props.actions,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? getDuration(variant, actions, props.content) : _props$duration,
      onClose = props.onClose;
    var item = {
      title: props.title,
      content: props.content,
      variant: variant,
      className: props.className,
      actions: actions,
      duration: duration,
      height: 0,
      id: (0,helper/* generateID */.y)(15, props.title),
      onClose: onClose
    };
    addSnackbar(item);
  };
  var mapToNewInterface = function mapToNewInterface(title, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _objectSpread({
      title: title,
      content: content
    }, options);
  };
  var enqueueSuccessSnackbar = function enqueueSuccessSnackbar(propsOrTitle, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    var props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar(_objectSpread(_objectSpread({}, props), {}, {
      variant: "success"
    }));
  };
  var enqueueErrorSnackbar = function enqueueErrorSnackbar(propsOrTitle, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    var props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar(_objectSpread(_objectSpread({}, props), {}, {
      variant: "error"
    }));
  };
  var enqueueWarningSnackbar = function enqueueWarningSnackbar(propsOrTitle, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    var props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar(_objectSpread(_objectSpread({}, props), {}, {
      variant: "warning"
    }));
  };
  var onItemClosed = function onItemClosed(id) {
    setSnackbars(function (items) {
      return _toConsumableArray(items).filter(function (item) {
        return item.id !== id;
      });
    });
  };
  var snackbarList = snackbars.map(function (item, index) {
    return index < stackSize ? /*#__PURE__*/react.createElement(SnackbarItem, SnackbarProvider_extends({}, item, {
      key: item.id,
      className: item.className,
      onClose: function onClose() {
        var _item$onClose;
        onItemClosed(item.id);
        (_item$onClose = item.onClose) === null || _item$onClose === void 0 || _item$onClose.call(item);
      },
      closeButtonTitle: closeButtonTitle
    })) : null;
  });
  var snackbarPortal = /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(SnackbarContainer, {
    placement: placement,
    className: className
  }, snackbarList), root);
  return /*#__PURE__*/react.createElement(SnackbarContextProvider, {
    initialState: {
      enqueueSnackbar: enqueueSnackbar,
      enqueueSuccessSnackbar: enqueueSuccessSnackbar,
      enqueueErrorSnackbar: enqueueErrorSnackbar,
      enqueueWarningSnackbar: enqueueWarningSnackbar,
      setSnackbarHeight: setSnackbarHeight,
      snackbars: snackbars
    }
  }, children, /*#__PURE__*/react.createElement("div", {
    ref: wrappingDivRef
  }, snackbarPortal));
};
try {
    // @ts-ignore
    SnackbarProvider.displayName = "SnackbarProvider";
    // @ts-ignore
    SnackbarProvider.__docgenInfo = { "description": "", "displayName": "SnackbarProvider", "props": { "closeButtonTitle": { "defaultValue": null, "description": "", "name": "closeButtonTitle", "required": true, "type": { "name": "string" } }, "placement": { "defaultValue": { value: "{ vertical: \"bottom\", horizontal: \"center\" }" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "stackSize": { "defaultValue": { value: "3" }, "description": "", "name": "stackSize", "required": false, "type": { "name": "number" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "autoHideDuration": { "defaultValue": { value: "{ long: 8000, short: 4000 }" }, "description": "", "name": "autoHideDuration", "required": false, "type": { "name": "Duration" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx#SnackbarProvider"] = { docgenInfo: SnackbarProvider.__docgenInfo, name: "SnackbarProvider", path: "src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx#SnackbarProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/useSnackbar.ts
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



var useSnackbar = function useSnackbar() {
  var ctx = (0,react.useContext)(SnackbarContext);
  return {
    enqueueWarningSnackbar: ctx.enqueueWarningSnackbar,
    enqueueErrorSnackbar: ctx.enqueueErrorSnackbar,
    enqueueSuccessSnackbar: ctx.enqueueSuccessSnackbar,
    enqueueSnackbar: ctx.enqueueSnackbar
  };
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Snackbar.mdx



/*@jsxRuntime automatic @jsxImportSource react*/



function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    strong: "strong",
    pre: "pre",
    h2: "h2",
    h3: "h3"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.h_, {
      title: "components/Feedback/Snackbar/Snackbar",
      parameters: {
        viewMode: "docs",
        previewTabs: {
          canvas: {
            hidden: true
          }
        }
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "snackbar-component",
      children: "Snackbar component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Snackbar"
      }), " components and hook are there for you to make it easy to notify a user. You have the option of displaying an error, success or information ", (0,jsx_runtime.jsx)(_components.code, {
        children: "snackbar"
      }), ". In order to use all of these different ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Snackbar"
      }), "s, you'll have to wrap your entire application\nin the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SnackbarProvider"
      }), " component. This will enable to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Snackbar"
      }), " component to be portaled and displayed in the top levels of the DOM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you've wrapped your application with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SnackbarProvider"
      }), " component, you are free to use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useSnackbar"
      }), " hook to create any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Snackbar"
      }), " you like. This hook does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " accept any arguments, but it returns 4 different functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following functions will all accept an object when called, which looks as follows:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "{\n  title?: string;\n  content?: string;\n  actions?: (ButtonHTMLAttributes<HTMLButtonElement> & { label: string })[];\n  className?: string;\n  variant?: \"info\" | \"success\" | \"error\" | \"warning\";\n  duration?: number;\n  onClose?: () => void;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " is displayed at the top of the snackbar. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "content"
      }), " is displayed inside of the snackbar.\nIf no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "content"
      }), " is provided, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " will be displayed in place of the content to ensure correct usage of the snackbar component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "actions"
      }), " parameter might seem confusing, but this is simply an array of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), " props. In the example down below, the \"Show long snackbar\" has this ", (0,jsx_runtime.jsx)(_components.code, {
        children: "actions"
      }), " prop filled to make it more clear as to how this would look like."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "className"
      }), " adds the provided CSS class to Snackbar Item components."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An additional callback for closing the snackbar can be provided via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onClose"
      }), " property. It is called when the snackbar is closed automatically or manually by clicking the close button."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "duration"
      }), " property is set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "4000"
      }), " (4 seconds), except for the error variant Snackbar, where the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "duration"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "8000"
      }), " (8 seconds). You can increase or decrease this as you like."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "methods",
      children: "Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "useSnackbar"
      }), " hook returns following methods:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enqueuesnackbar",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueSnackbar"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This function will allow you to create a regular info ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Snackbar"
      }), ". You could use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant"
      }), " prop to specify a variant, but using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueSuccessSnackbar"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueWarningSnackbar"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueErrorSnackbar"
      }), " is an easier way of doing this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enqueueerrorsnackbar",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueErrorSnackbar"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It will allow you to easily and quickly create an error ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Snackbar"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant"
      }), " prop is already set to be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enqueuesuccesssnackbar",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueSuccessSnackbar"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Creates a success snackbar with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant"
      }), " prop already set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "success"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enqueuewarningsnackbar",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enqueueWarningSnackbar"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Creates a warning snackbar with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant"
      }), " prop already set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "warning"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["First, wrap your entire application inside the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SnackbarProvider"
      }), " component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<SnackbarProvider>\n  <AppContent />\n</SnackbarProvider>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useSnackbar()"
      }), " hook inside your application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const AppContent = () => {\n  const { enqueueSuccessSnackbar, enqueueErrorSnackbar, enqueueWarningSnackbar, enqueueSnackbar } =\n    useSnackbar();\n\n  return (\n    <Fragment>\n      <Button\n        onClick={() =>\n          enqueueSuccessSnackbar({\n            content: \"Main message of the snackbar\",\n            duration: 10000,\n            onClose: () => console.log(\"onClose handler\")\n          })\n        }\n      >\n        Show success snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueErrorSnackbar({\n            content: \"Social account unlink failed\",\n            onClose: () => console.log(\"onClose handler\")\n          })\n        }\n      >\n        Show error snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueSnackbar({\n            content: \"Copy of your data is requested\",\n            onClose: () => console.log(\"onClose handler\")\n          })\n        }\n      >\n        Show info snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueWarningSnackbar({ content: \"You request is being processed with a delay\" })\n        }\n      >\n        Show warning snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueSnackbar({\n            title: \"Copy of your data is requested\",\n            content:\n              \"Body text of the snackbar. Keep it short. Users only have a few seconds to read it. Try to keep the text within the limit of 1 text message: 160 ch.\",\n            actions: [\n              { label: \"Contact support\", onClick: () => alert(\"Clicked support\") },\n              { label: \"Contact OneWelcome\", onClick: () => alert(\"Clicked OneWelcome\") }\n            ]\n          })\n        }\n      >\n        Show long snackbar\n      </Button>\n    </Fragment>\n  );\n};\n"
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
/* harmony default export */ var Snackbar = (MDXContent);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/Notifications/Snackbar/Stories.module.scss
var Stories_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/Notifications/Snackbar/Stories.module.scss");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Stories.module.scss

      
      
      
      
      
      
      
      
      

var Stories_module_options = {};

Stories_module_options.styleTagTransform = (styleTagTransform_default());
Stories_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Stories_module_options.insert = insertBySelector_default().bind(null, "head");
    
Stories_module_options.domAPI = (styleDomAPI_default());
Stories_module_options.insertStyleElement = (insertStyleElement_default());

var Stories_module_update = injectStylesIntoStyleTag_default()(Stories_module/* default */.Z, Stories_module_options);




       /* harmony default export */ var Snackbar_Stories_module = (Stories_module/* default */.Z && Stories_module/* default */.Z.locals ? Stories_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Snackbar.stories.tsx
var _Snackbar$parameters, _Snackbar$parameters2, _ErrorSnackbar$parame, _ErrorSnackbar$parame2, _SnackbarWithTitle$pa, _SnackbarWithTitle$pa2, _SuccessSnackbar$para, _SuccessSnackbar$para2, _WarningSnackbar$para, _WarningSnackbar$para2;
function Snackbar_stories_typeof(o) {
  "@babel/helpers - typeof";

  return Snackbar_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Snackbar_stories_typeof(o);
}
function Snackbar_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Snackbar_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Snackbar_stories_ownKeys(Object(t), !0).forEach(function (r) {
      Snackbar_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Snackbar_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Snackbar_stories_defineProperty(obj, key, value) {
  key = Snackbar_stories_toPropertyKey(key);
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
function Snackbar_stories_toPropertyKey(arg) {
  var key = Snackbar_stories_toPrimitive(arg, "string");
  return Snackbar_stories_typeof(key) === "symbol" ? key : String(key);
}
function Snackbar_stories_toPrimitive(input, hint) {
  if (Snackbar_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Snackbar_stories_typeof(res) !== "object") return res;
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






/**
 * We want to disable autogenerated docs for a single story, but we can't currently... https://github.com/storybookjs/storybook/issues/21085
 */
var meta = {
  title: "components/Feedback/Snackbar",
  component: SnackbarProvider,
  parameters: {
    docs: {
      page: Snackbar,
      description: {
        component: "We want to disable autogenerated docs for a single story, but we can't currently... https://github.com/storybookjs/storybook/issues/21085"
      }
    }
  }
};
/* harmony default export */ var Snackbar_stories = (meta);
var AppContent = function AppContent() {
  var _useSnackbar = useSnackbar(),
    enqueueSnackbar = _useSnackbar.enqueueSnackbar;
  (0,react.useEffect)(function () {
    enqueueSnackbar({
      content: "Main message of the snackbar",
      actions: [{
        label: "Contact support",
        onClick: function onClick() {
          return alert("Clicked support");
        }
      }],
      onClose: function onClose() {
        return console.warn("onClose handler");
      },
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
var Template = function Template() {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(AppContent, null));
};
var Snackbar_stories_Snackbar = Template.bind({});
var ErrorSnackbarAppContent = function ErrorSnackbarAppContent() {
  var _useSnackbar2 = useSnackbar(),
    enqueueErrorSnackbar = _useSnackbar2.enqueueErrorSnackbar;
  (0,react.useEffect)(function () {
    enqueueErrorSnackbar({
      content: "Alert message.",
      actions: [{
        label: "Action",
        onClick: function onClick() {
          return alert("Clicked support");
        }
      }],
      onClose: function onClose() {
        return console.warn("onClose handler");
      },
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
var ErrorSnackbarTemplate = function ErrorSnackbarTemplate() {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(ErrorSnackbarAppContent, null));
};
var ErrorSnackbar = ErrorSnackbarTemplate.bind({});
var SnackbarWithTitleAppContent = function SnackbarWithTitleAppContent() {
  var _useSnackbar3 = useSnackbar(),
    enqueueSnackbar = _useSnackbar3.enqueueSnackbar;
  (0,react.useEffect)(function () {
    enqueueSnackbar({
      title: "This is a title",
      content: "Phasellus eleifend cursus vehicula. Pellentesque ut sem in elit pulvinar luctus.",
      actions: [{
        label: "Action",
        onClick: function onClick() {
          return alert("Clicked support");
        }
      }],
      onClose: function onClose() {
        return console.warn("onClose handler");
      },
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
var SnackbarWithTitleTemplate = function SnackbarWithTitleTemplate() {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(SnackbarWithTitleAppContent, null));
};
var SnackbarWithTitle = SnackbarWithTitleTemplate.bind({});
var SuccessSnackbarAppContent = function SuccessSnackbarAppContent() {
  var _useSnackbar4 = useSnackbar(),
    enqueueSuccessSnackbar = _useSnackbar4.enqueueSuccessSnackbar;
  (0,react.useEffect)(function () {
    enqueueSuccessSnackbar({
      content: "Alert message.",
      actions: [{
        label: "Action",
        onClick: function onClick() {
          return alert("Clicked support");
        }
      }],
      onClose: function onClose() {
        return console.warn("onClose handler");
      },
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
var SuccessSnackbarTemplate = function SuccessSnackbarTemplate() {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(SuccessSnackbarAppContent, null));
};
var SuccessSnackbar = SuccessSnackbarTemplate.bind({});
var WarningSnackbarAppContent = function WarningSnackbarAppContent() {
  var _useSnackbar5 = useSnackbar(),
    enqueueWarningSnackbar = _useSnackbar5.enqueueWarningSnackbar;
  (0,react.useEffect)(function () {
    enqueueWarningSnackbar({
      content: "Alert message.",
      actions: [{
        label: "Action",
        onClick: function onClick() {
          return alert("Clicked support");
        }
      }],
      onClose: function onClose() {
        return console.warn("onClose handler");
      },
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
var WarningSnackbarTemplate = function WarningSnackbarTemplate() {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(WarningSnackbarAppContent, null));
};
var WarningSnackbar = WarningSnackbarTemplate.bind({});
Snackbar_stories_Snackbar.parameters = Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, Snackbar_stories_Snackbar.parameters), {}, {
  docs: Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, (_Snackbar$parameters = Snackbar_stories_Snackbar.parameters) === null || _Snackbar$parameters === void 0 ? void 0 : _Snackbar$parameters.docs), {}, {
    source: Snackbar_stories_objectSpread({
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <AppContent />\n    </SnackbarProvider>;\n}"
    }, (_Snackbar$parameters2 = Snackbar_stories_Snackbar.parameters) === null || _Snackbar$parameters2 === void 0 || (_Snackbar$parameters2 = _Snackbar$parameters2.docs) === null || _Snackbar$parameters2 === void 0 ? void 0 : _Snackbar$parameters2.source)
  })
});
ErrorSnackbar.parameters = Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, ErrorSnackbar.parameters), {}, {
  docs: Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, (_ErrorSnackbar$parame = ErrorSnackbar.parameters) === null || _ErrorSnackbar$parame === void 0 ? void 0 : _ErrorSnackbar$parame.docs), {}, {
    source: Snackbar_stories_objectSpread({
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <ErrorSnackbarAppContent />\n    </SnackbarProvider>;\n}"
    }, (_ErrorSnackbar$parame2 = ErrorSnackbar.parameters) === null || _ErrorSnackbar$parame2 === void 0 || (_ErrorSnackbar$parame2 = _ErrorSnackbar$parame2.docs) === null || _ErrorSnackbar$parame2 === void 0 ? void 0 : _ErrorSnackbar$parame2.source)
  })
});
SnackbarWithTitle.parameters = Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, SnackbarWithTitle.parameters), {}, {
  docs: Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, (_SnackbarWithTitle$pa = SnackbarWithTitle.parameters) === null || _SnackbarWithTitle$pa === void 0 ? void 0 : _SnackbarWithTitle$pa.docs), {}, {
    source: Snackbar_stories_objectSpread({
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <SnackbarWithTitleAppContent />\n    </SnackbarProvider>;\n}"
    }, (_SnackbarWithTitle$pa2 = SnackbarWithTitle.parameters) === null || _SnackbarWithTitle$pa2 === void 0 || (_SnackbarWithTitle$pa2 = _SnackbarWithTitle$pa2.docs) === null || _SnackbarWithTitle$pa2 === void 0 ? void 0 : _SnackbarWithTitle$pa2.source)
  })
});
SuccessSnackbar.parameters = Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, SuccessSnackbar.parameters), {}, {
  docs: Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, (_SuccessSnackbar$para = SuccessSnackbar.parameters) === null || _SuccessSnackbar$para === void 0 ? void 0 : _SuccessSnackbar$para.docs), {}, {
    source: Snackbar_stories_objectSpread({
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <SuccessSnackbarAppContent />\n    </SnackbarProvider>;\n}"
    }, (_SuccessSnackbar$para2 = SuccessSnackbar.parameters) === null || _SuccessSnackbar$para2 === void 0 || (_SuccessSnackbar$para2 = _SuccessSnackbar$para2.docs) === null || _SuccessSnackbar$para2 === void 0 ? void 0 : _SuccessSnackbar$para2.source)
  })
});
WarningSnackbar.parameters = Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, WarningSnackbar.parameters), {}, {
  docs: Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, (_WarningSnackbar$para = WarningSnackbar.parameters) === null || _WarningSnackbar$para === void 0 ? void 0 : _WarningSnackbar$para.docs), {}, {
    source: Snackbar_stories_objectSpread({
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <WarningSnackbarAppContent />\n    </SnackbarProvider>;\n}"
    }, (_WarningSnackbar$para2 = WarningSnackbar.parameters) === null || _WarningSnackbar$para2 === void 0 || (_WarningSnackbar$para2 = _WarningSnackbar$para2.docs) === null || _WarningSnackbar$para2 === void 0 ? void 0 : _WarningSnackbar$para2.source)
  })
});
var __namedExportsOrder = ["Snackbar", "ErrorSnackbar", "SnackbarWithTitle", "SuccessSnackbar", "WarningSnackbar"];

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Typography; },
  p: function() { return /* binding */ validVariants; }
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




       /* harmony default export */ var Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default */.Z.locals ? Typography_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["children", "variant", "tag", "style", "spacing", "align", "className"];
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
    align = _ref.align,
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
    style: _objectSpread(_objectSpread({}, styleWithSpacing), {}, {
      textAlign: align
    }),
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

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/hooks/useSpacing.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ useSpacing; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ filterProps; },
/* harmony export */   MU: function() { return /* binding */ getValueByPath; },
/* harmony export */   Pb: function() { return /* binding */ isJsonString; },
/* harmony export */   R3: function() { return /* binding */ areArraysDifferent; },
/* harmony export */   cv: function() { return /* binding */ remToPx; },
/* harmony export */   y: function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarContainer-module__sr-only--iXUBF{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SnackbarContainer-module__hidden--azVvn{display:none}.SnackbarContainer-module__slide-in--zCzA9{animation:SnackbarContainer-module__slide-in--zCzA9 .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__slide-in--zCzA9{animation-duration:.1ms}}.SnackbarContainer-module__slide-out--QClYD{animation:SnackbarContainer-module__slide-out--QClYD .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__slide-out--QClYD{animation-duration:.1ms}}@keyframes SnackbarContainer-module__slide-in--zCzA9{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SnackbarContainer-module__slide-out--QClYD{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarContainer-module__snackbars--tc0QC{position:fixed;z-index:20;width:100%;display:flex;flex-direction:column;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__snackbars--tc0QC{transition-duration:.1ms}}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__bottom--AGi7f{bottom:3.5rem}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__top--QRjr4{top:3.5rem}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__start--n7LOy{left:0}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__center--N7Azo{left:0}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__end--J5Asy{right:0}@media only screen and (min-width: 37.5em){.SnackbarContainer-module__snackbars--tc0QC{width:initial}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__center--N7Azo{left:calc(50% - 18.75rem)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "SnackbarContainer-module__sr-only--iXUBF",
	"hidden": "SnackbarContainer-module__hidden--azVvn",
	"slide-in": "SnackbarContainer-module__slide-in--zCzA9",
	"slide-out": "SnackbarContainer-module__slide-out--QClYD",
	"snackbars": "SnackbarContainer-module__snackbars--tc0QC",
	"bottom": "SnackbarContainer-module__bottom--AGi7f",
	"top": "SnackbarContainer-module__top--QRjr4",
	"start": "SnackbarContainer-module__start--n7LOy",
	"center": "SnackbarContainer-module__center--N7Azo",
	"end": "SnackbarContainer-module__end--J5Asy"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarItem-module__sr-only--eZ1bg{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SnackbarItem-module__hidden--V8va5{display:none}.SnackbarItem-module__slide-in--qUDHP{animation:SnackbarItem-module__slide-in--qUDHP .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__slide-in--qUDHP{animation-duration:.1ms}}.SnackbarItem-module__slide-out--c2p0v{animation:SnackbarItem-module__slide-out--c2p0v .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__slide-out--c2p0v{animation-duration:.1ms}}@keyframes SnackbarItem-module__slide-in--qUDHP{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SnackbarItem-module__slide-out--c2p0v{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.SnackbarItem-module__snackbar--dcufU{padding:1rem;border-radius:var(--snackbar-border-radius);display:flex;gap:.5rem;align-items:center;width:100%;box-sizing:border-box;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out;flex-grow:0}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__snackbar--dcufU{transition-duration:.1ms}}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__info--CSCWu{background-color:var(--snackbar-info-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__success--gEUUJ{background-color:var(--snackbar-success-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__error--T63Uq{background-color:var(--snackbar-error-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__warning--gKofO{background-color:var(--snackbar-warning-background-color)}.SnackbarItem-module__snackbar--dcufU+.SnackbarItem-module__snackbar--dcufU{margin-top:.5rem}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH{color:var(--snackbar-text-color);align-self:center;width:2.5rem;height:2.5rem;margin:-0.5rem 0;flex-shrink:0;border:0}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH span{font-size:.875rem}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:not(:disabled):hover,.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:not(:disabled):focus{background-color:var(--color-black10)}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:not(:disabled):active{background-color:var(--color-black20)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__icon--azl89{color:var(--snackbar-text-color);font-size:1rem;height:1.25rem;display:inline-flex;align-items:center;align-self:flex-start}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__title--BTBlp{color:var(--snackbar-text-color);flex:1;font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:block}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__outer-content-wrapper--AsbQD{display:flex;gap:.5rem;flex-grow:1}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__content-wrapper--lxYmX{flex-grow:1}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__content--_ubCv{color:var(--snackbar-text-color);font-size:.875rem;line-height:1.25rem;margin-bottom:0}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__actions--S1N_9{text-align:right;align-self:center}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);white-space:nowrap;font-size:.875rem;line-height:var(--button-font-size);font-weight:400;margin:-0.5rem 0;padding:.625rem 1.25rem;cursor:pointer;transition:color,background-color,border-color .2s ease-in-out;font-family:var(--font-family);color:var(--snackbar-text-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:disabled{color:var(--greyed-out);cursor:not-allowed}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:.125rem;border-radius:var(--focus-border-radius)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):hover,.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):focus{background-color:var(--color-black10)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):active{background-color:var(--color-black20)}@media only screen and (min-width: 37.5em){.SnackbarItem-module__snackbar--dcufU{width:min-content;min-width:25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "SnackbarItem-module__sr-only--eZ1bg",
	"hidden": "SnackbarItem-module__hidden--V8va5",
	"slide-in": "SnackbarItem-module__slide-in--qUDHP",
	"slide-out": "SnackbarItem-module__slide-out--c2p0v",
	"snackbar": "SnackbarItem-module__snackbar--dcufU",
	"info": "SnackbarItem-module__info--CSCWu",
	"success": "SnackbarItem-module__success--gEUUJ",
	"error": "SnackbarItem-module__error--T63Uq",
	"warning": "SnackbarItem-module__warning--gKofO",
	"close-btn": "SnackbarItem-module__close-btn--VlPbH",
	"icon": "SnackbarItem-module__icon--azl89",
	"title": "SnackbarItem-module__title--BTBlp",
	"outer-content-wrapper": "SnackbarItem-module__outer-content-wrapper--AsbQD",
	"content-wrapper": "SnackbarItem-module__content-wrapper--lxYmX",
	"content": "SnackbarItem-module__content--_ubCv",
	"actions": "SnackbarItem-module__actions--S1N_9",
	"action-button": "SnackbarItem-module__action-button--FX3PH"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.readyclasses-module__sr-only--AaB3O{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.readyclasses-module__hidden--kciBr{display:none}.readyclasses-module__slide-in--_Xh2C{animation:readyclasses-module__slide-in--_Xh2C .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-in--_Xh2C{animation-duration:.1ms}}.readyclasses-module__slide-out--fOqOy{animation:readyclasses-module__slide-out--fOqOy .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-out--fOqOy{animation-duration:.1ms}}@keyframes readyclasses-module__slide-in--_Xh2C{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes readyclasses-module__slide-out--fOqOy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "readyclasses-module__sr-only--AaB3O",
	"hidden": "readyclasses-module__hidden--kciBr",
	"slide-in": "readyclasses-module__slide-in--_Xh2C",
	"slide-out": "readyclasses-module__slide-out--fOqOy"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/Notifications/Snackbar/Stories.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Stories-module__remove-animation--deemW{animation-duration:0s}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"remove-animation": "Stories-module__remove-animation--deemW"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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


/***/ }),

/***/ "./src/readyclasses.module.scss":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__.Z = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);