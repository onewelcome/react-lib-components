"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3947],{

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

/***/ "./stories/Tabs/Tabs.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tabs": function() { return /* binding */ Tabs_stories_Tabs; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Tabs_stories; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/TabButton.module.scss
var TabButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/TabButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Tabs/TabButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TabButton_module/* default */.Z, options);




       /* harmony default export */ var Tabs_TabButton_module = (TabButton_module/* default */.Z && TabButton_module/* default.locals */.Z.locals ? TabButton_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tabs/TabButton.tsx
var _excluded = ["children", "tabActive", "focused", "title"];
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



var TabButtonComponent = function TabButtonComponent(_ref, ref) {
  var _rest$className;
  var children = _ref.children,
    tabActive = _ref.tabActive,
    focused = _ref.focused,
    title = _ref.title,
    rest = _objectWithoutProperties(_ref, _excluded);
  var buttonRef = ref || /*#__PURE__*/(0,react.createRef)();
  (0,react.useEffect)(function () {
    if (focused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef.current, focused]);
  return /*#__PURE__*/react.createElement("button", _extends({}, rest, {
    className: "".concat(Tabs_TabButton_module.tabbutton, " ").concat(tabActive ? Tabs_TabButton_module.selected : "", " ").concat((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : ""),
    ref: buttonRef,
    role: "tab",
    type: "button"
  }), /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true"
  }, children), children);
};
var TabButton = /*#__PURE__*/react.forwardRef(TabButtonComponent);
try {
    // @ts-ignore
    TabButton.displayName = "TabButton";
    // @ts-ignore
    TabButton.__docgenInfo = { "description": "", "displayName": "TabButton", "props": { "tabActive": { "defaultValue": null, "description": "", "name": "tabActive", "required": false, "type": { "name": "boolean" } }, "focused": { "defaultValue": null, "description": "", "name": "focused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tabs/TabButton.tsx#TabButton"] = { docgenInfo: TabButton.__docgenInfo, name: "TabButton", path: "src/components/Tabs/TabButton.tsx#TabButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tabs.module.scss
var Tabs_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tabs.module.scss");
;// CONCATENATED MODULE: ./src/components/Tabs/Tabs.module.scss

      
      
      
      
      
      
      
      
      

var Tabs_module_options = {};

Tabs_module_options.styleTagTransform = (styleTagTransform_default());
Tabs_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Tabs_module_options.insert = insertBySelector_default().bind(null, "head");
    
Tabs_module_options.domAPI = (styleDomAPI_default());
Tabs_module_options.insertStyleElement = (insertStyleElement_default());

var Tabs_module_update = injectStylesIntoStyleTag_default()(Tabs_module/* default */.Z, Tabs_module_options);




       /* harmony default export */ var Tabs_Tabs_module = (Tabs_module/* default */.Z && Tabs_module/* default.locals */.Z.locals ? Tabs_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tabs/Tabs.tsx
var Tabs_excluded = ["children", "selected", "onTabChange"];
function Tabs_extends() {
  Tabs_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Tabs_extends.apply(this, arguments);
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
function Tabs_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Tabs_objectWithoutPropertiesLoose(source, excluded);
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
function Tabs_objectWithoutPropertiesLoose(source, excluded) {
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




var TabsComponent = function TabsComponent(_ref, ref) {
  var _rest$className;
  var children = _ref.children,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? 0 : _ref$selected,
    onTabChange = _ref.onTabChange,
    rest = Tabs_objectWithoutProperties(_ref, Tabs_excluded);
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    renderedButtons = _useState2[0],
    setRenderedButtons = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    renderedTabs = _useState4[0],
    setRenderedTabs = _useState4[1];
  var _useState5 = (0,react.useState)(selected),
    _useState6 = _slicedToArray(_useState5, 2),
    activeTabIndex = _useState6[0],
    setActiveTabIndex = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    usingKeyboardNavigation = _useState8[0],
    setUsingKeyboardNavigation = _useState8[1];
  var _useState9 = (0,react.useState)({
      width: 0,
      left: 0,
      top: 0
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    indicatorStyles = _useState10[0],
    setIndicatorStyles = _useState10[1];
  var tabsRef = ref || /*#__PURE__*/(0,react.createRef)();
  var indicatorRef = (0,react.useRef)(null);
  var handleKeyDown = function handleKeyDown(e) {
    var totalAmountOfTabs = [children].flat().length;
    if (!usingKeyboardNavigation) setUsingKeyboardNavigation(true);
    if (totalAmountOfTabs === 1) return;
    switch (e.key) {
      case "ArrowRight":
        setActiveTabIndex(function (currentIndex) {
          return currentIndex + 1 > totalAmountOfTabs - 1 ? 0 : currentIndex + 1;
        });
        break;
      case "ArrowLeft":
        setActiveTabIndex(function (currentIndex) {
          return currentIndex - 1 < 0 ? totalAmountOfTabs - 1 : currentIndex - 1;
        });
        break;
      case "Home":
        setActiveTabIndex(0);
        break;
      case "End":
        setActiveTabIndex(totalAmountOfTabs - 1);
        break;
      default:
        return;
    }
  };
  var calculateIndicatorPosition = function calculateIndicatorPosition() {
    if (tabsRef.current) {
      var selectedButton = tabsRef.current.querySelectorAll('button[role="tab"]')[activeTabIndex];
      setIndicatorStyles({
        left: selectedButton.offsetLeft,
        top: selectedButton.offsetTop + selectedButton.offsetHeight - indicatorRef.current.offsetHeight,
        width: selectedButton.offsetWidth
      });
    }
  };
  (0,react.useEffect)(function () {
    if (tabsRef.current && renderedButtons.length) {
      calculateIndicatorPosition();
    }
  }, [tabsRef.current, activeTabIndex, renderedButtons]);
  (0,react.useEffect)(function () {
    onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(activeTabIndex);
  }, [activeTabIndex]);
  (0,react.useEffect)(function () {
    var buttons = react.Children.map(children, function (child, index) {
      if (Object.prototype.hasOwnProperty.call(child.props, "title")) {
        return /*#__PURE__*/react.createElement(TabButton, {
          key: "".concat(child.props.title.toLowerCase().replace(/\s/, "_"), "_button"),
          tabIndex: activeTabIndex === index ? 0 : -1,
          "aria-selected": activeTabIndex === index,
          focused: usingKeyboardNavigation && activeTabIndex === index,
          tabActive: activeTabIndex === index,
          "aria-controls": "tab_".concat(index),
          onClick: function onClick() {
            return setActiveTabIndex(index);
          }
        }, child.props.title);
      }
      return null;
    });
    setRenderedButtons(buttons);
  }, [activeTabIndex]);
  (0,react.useEffect)(function () {
    var tabs = react.Children.map(children, function (child, index) {
      if (Object.prototype.hasOwnProperty.call(child.props, "title")) {
        return /*#__PURE__*/react.cloneElement(child, {
          key: "".concat(child.props.title.toLowerCase().replace(/\s/, "_"), "_tab"),
          tabIndex: activeTabIndex === index ? 0 : -1,
          tabActive: activeTabIndex === index,
          id: "tab_".concat(index),
          children: child.props.children
        });
      }
      return null;
    });
    setRenderedTabs(tabs);
  }, [activeTabIndex]);
  return /*#__PURE__*/react.createElement("div", Tabs_extends({}, rest, {
    ref: tabsRef,
    className: "".concat(Tabs_Tabs_module.tabs, " ").concat((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : "")
  }), /*#__PURE__*/react.createElement("div", {
    role: "tablist",
    className: Tabs_Tabs_module.tablist,
    onKeyDown: handleKeyDown
  }, renderedButtons, /*#__PURE__*/react.createElement("div", {
    className: Tabs_Tabs_module.tabdivider
  }), /*#__PURE__*/react.createElement("div", {
    className: Tabs_Tabs_module.indicator,
    ref: indicatorRef,
    "aria-hidden": "true",
    tabIndex: -1,
    style: {
      width: indicatorStyles.width,
      left: indicatorStyles.left,
      top: indicatorStyles.top
    }
  })), /*#__PURE__*/react.createElement("div", null, renderedTabs));
};
var Tabs = /*#__PURE__*/react.forwardRef(TabsComponent);
try {
    // @ts-ignore
    Tabs.displayName = "Tabs";
    // @ts-ignore
    Tabs.__docgenInfo = { "description": "", "displayName": "Tabs", "props": { "selected": { "defaultValue": { value: "0" }, "description": "", "name": "selected", "required": false, "type": { "name": "number" } }, "onTabChange": { "defaultValue": null, "description": "", "name": "onTabChange", "required": false, "type": { "name": "((index: number) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"] = { docgenInfo: Tabs.__docgenInfo, name: "Tabs", path: "src/components/Tabs/Tabs.tsx#Tabs" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tab.module.scss
var Tab_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tab.module.scss");
;// CONCATENATED MODULE: ./src/components/Tabs/Tab.module.scss

      
      
      
      
      
      
      
      
      

var Tab_module_options = {};

Tab_module_options.styleTagTransform = (styleTagTransform_default());
Tab_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Tab_module_options.insert = insertBySelector_default().bind(null, "head");
    
Tab_module_options.domAPI = (styleDomAPI_default());
Tab_module_options.insertStyleElement = (insertStyleElement_default());

var Tab_module_update = injectStylesIntoStyleTag_default()(Tab_module/* default */.Z, Tab_module_options);




       /* harmony default export */ var Tabs_Tab_module = (Tab_module/* default */.Z && Tab_module/* default.locals */.Z.locals ? Tab_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tabs/Tab.tsx
var Tab_excluded = ["children", "tabActive"];
function Tab_extends() {
  Tab_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Tab_extends.apply(this, arguments);
}
function Tab_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Tab_objectWithoutPropertiesLoose(source, excluded);
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
function Tab_objectWithoutPropertiesLoose(source, excluded) {
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



var Tab = function Tab(_ref) {
  var _rest$className;
  var children = _ref.children,
    tabActive = _ref.tabActive,
    rest = Tab_objectWithoutProperties(_ref, Tab_excluded);
  return /*#__PURE__*/react.createElement("div", Tab_extends({}, rest, {
    "aria-hidden": !tabActive,
    role: "tabpanel",
    className: "".concat(Tabs_Tab_module.tab, " ").concat(tabActive ? Tabs_Tab_module.selected : "", " ").concat((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : "")
  }), children);
};
try {
    // @ts-ignore
    Tab.displayName = "Tab";
    // @ts-ignore
    Tab.__docgenInfo = { "description": "", "displayName": "Tab", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "tabActive": { "defaultValue": null, "description": "", "name": "tabActive", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"] = { docgenInfo: Tab.__docgenInfo, name: "Tab", path: "src/components/Tabs/Tab.tsx#Tab" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Tabs/Tabs.mdx



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
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tabs"
        }), " component is used to display tabs and accompanying tab panels.\nThe contents between the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Tab></Tab>"
        }), " tags can contain any content."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the below code snippet, you'll see how you can create the tabs component."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Tabs>\n  <Tab title=\"tab 1\">Tab content 1</Tab>\n  <Tab title=\"tab 2\">Tab content 2</Tab>\n  <Tab title=\"tab 3\">Tab content 3</Tab>\n</Tabs>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Tabs_stories_Tabs
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
/* harmony default export */ var Tabs_Tabs = (MDXContent);

;// CONCATENATED MODULE: ./stories/Tabs/Tabs.stories.tsx
var _Tabs$parameters, _Tabs$parameters2, _Tabs$parameters2$doc;
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
  title: "components/Navigation/Tabs",
  parameters: {
    docs: {
      page: Tabs_Tabs
    }
  },
  component: Tabs
};
/* harmony default export */ var Tabs_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Tabs, args, /*#__PURE__*/react.createElement(Tab, {
    title: "First tab"
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "h2"
  }, "Tabs"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Tabs are used for third level navigation."), /*#__PURE__*/react.createElement("li", null, "Tabs can split up large pieces of information or configuration."), /*#__PURE__*/react.createElement("li", null, "If there is configuration inside a tab, it should be possible to save it per tab."), /*#__PURE__*/react.createElement("li", null, "When the user needs guidance for a process, use a wizard, not tabs."))), /*#__PURE__*/react.createElement(Tab, {
    title: "Second tab"
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "h2"
  }, "Title of the second tab"), /*#__PURE__*/react.createElement("p", null, "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."), /*#__PURE__*/react.createElement("p", null, "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.")), /*#__PURE__*/react.createElement(Tab, {
    title: "Third tab"
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "h2"
  }, "The third tab"), /*#__PURE__*/react.createElement("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."), /*#__PURE__*/react.createElement("p", null, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."), /*#__PURE__*/react.createElement("p", null, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.")));
};
var Tabs_stories_Tabs = Template.bind({});
Tabs_stories_Tabs.args = {};
Tabs_stories_Tabs.parameters = _objectSpread(_objectSpread({}, Tabs_stories_Tabs.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Tabs$parameters = Tabs_stories_Tabs.parameters) === null || _Tabs$parameters === void 0 ? void 0 : _Tabs$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <TabsComponent {...args}>\n      <Tab title=\"First tab\">\n        <Typography variant=\"h2\">Tabs</Typography>\n        <ul>\n          <li>Tabs are used for third level navigation.</li>\n          <li>Tabs can split up large pieces of information or configuration.</li>\n          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>\n          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>\n        </ul>\n      </Tab>\n      <Tab title=\"Second tab\">\n        <Typography variant=\"h2\">Title of the second tab</Typography>\n        <p>\n          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,\n          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius\n          laoreet. Quisque rutrum.\n        </p>\n        <p>\n          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam\n          semper libero, sit amet adipiscing sem neque sed ipsum.\n        </p>\n      </Tab>\n      <Tab title=\"Third tab\">\n        <Typography variant=\"h2\">The third tab</Typography>\n        <p>\n          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n          architecto beatae vitae dicta sunt explicabo.\n        </p>\n        <p>\n          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n        </p>\n        <p>\n          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci\n          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n          quaerat voluptatem.\n        </p>\n      </Tab>\n    </TabsComponent>;\n}"
    }, (_Tabs$parameters2 = Tabs_stories_Tabs.parameters) === null || _Tabs$parameters2 === void 0 ? void 0 : (_Tabs$parameters2$doc = _Tabs$parameters2.docs) === null || _Tabs$parameters2$doc === void 0 ? void 0 : _Tabs$parameters2$doc.source)
  })
});
var __namedExportsOrder = ["Tabs"];

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tab.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tab-module__tab--rSeAj{display:none}.Tab-module__tab--rSeAj:focus-visible{outline-color:var(--color-focus)}.Tab-module__tab--rSeAj.Tab-module__selected--pOhLw{display:block}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tab": "Tab-module__tab--rSeAj",
	"selected": "Tab-module__selected--pOhLw"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/TabButton.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.TabButton-module__tabbutton--MljDQ{border:0;border-radius:0;font-size:var(--font-size);line-height:var(--default-line-height);margin:0;padding:.25rem 0 1rem 0;min-height:2.5rem;cursor:pointer;font-family:var(--font-family);background-color:rgba(0,0,0,0);white-space:nowrap;position:relative;font-weight:normal;color:rgba(0,0,0,0)}.TabButton-module__tabbutton--MljDQ:focus-visible{outline-color:var(--color-focus)}.TabButton-module__tabbutton--MljDQ span{color:var(--tab-text-color);font-weight:normal;position:absolute;left:0}.TabButton-module__tabbutton--MljDQ.TabButton-module__selected--Jks6A{color:var(--color-primary)}.TabButton-module__tabbutton--MljDQ.TabButton-module__selected--Jks6A span{color:rgba(0,0,0,0);visibility:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tabbutton": "TabButton-module__tabbutton--MljDQ",
	"selected": "TabButton-module__selected--Jks6A"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tabs.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tabs-module__sr-only--GM1UY{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Tabs-module__hidden--si8Ra{display:none}.Tabs-module__slide-in--kRwge{animation:Tabs-module__slide-in--kRwge .5s forwards}@media(prefers-reduced-motion: reduce){.Tabs-module__slide-in--kRwge{animation-duration:.1ms}}.Tabs-module__slide-out--xJ6x1{animation:Tabs-module__slide-out--xJ6x1 .5s forwards}@media(prefers-reduced-motion: reduce){.Tabs-module__slide-out--xJ6x1{animation-duration:.1ms}}@keyframes Tabs-module__slide-in--kRwge{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Tabs-module__slide-out--xJ6x1{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tabs-module__w-6--VL9fD{width:6%}.Tabs-module__w-7--Gb0h7{width:7%}.Tabs-module__w-8--DagCX{width:8%}.Tabs-module__w-9--z2tUq{width:9%}.Tabs-module__w-10--gjqvx{width:10%}.Tabs-module__w-11--A3YzN{width:11%}.Tabs-module__w-12--DwYet{width:12%}.Tabs-module__w-13--sufrT{width:13%}.Tabs-module__w-14--OiqYe{width:14%}.Tabs-module__w-15--Flh7O{width:15%}.Tabs-module__w-16--tTJLF{width:16%}.Tabs-module__w-17--me89G{width:17%}.Tabs-module__w-18--AdTI9{width:18%}.Tabs-module__w-19--uyH31{width:19%}.Tabs-module__w-20--K7va1{width:20%}.Tabs-module__w-21--MhMYy{width:21%}.Tabs-module__w-22--TZk1T{width:22%}.Tabs-module__w-23--hnkm9{width:23%}.Tabs-module__w-24--eEtSs{width:24%}.Tabs-module__w-25--Zg9La{width:25%}.Tabs-module__w-26--MZqx3{width:26%}.Tabs-module__w-27--3eh2f{width:27%}.Tabs-module__w-28--yCHVS{width:28%}.Tabs-module__w-29--JVM2t{width:29%}.Tabs-module__w-30--R3pm6{width:30%}.Tabs-module__w-31--y9UwV{width:31%}.Tabs-module__w-32--pQeiC{width:32%}.Tabs-module__w-33--_IBq4{width:33%}.Tabs-module__w-34--FDfyp{width:34%}.Tabs-module__w-35--V0pJP{width:35%}.Tabs-module__w-36--zcu8E{width:36%}.Tabs-module__w-37--MPykQ{width:37%}.Tabs-module__w-38--fB3Qr{width:38%}.Tabs-module__w-39--oFW8M{width:39%}.Tabs-module__w-40--D98RW{width:40%}.Tabs-module__w-41--XHRpS{width:41%}.Tabs-module__w-42--c51nZ{width:42%}.Tabs-module__w-43--yiK5h{width:43%}.Tabs-module__w-44--G82mV{width:44%}.Tabs-module__w-45--LrnNC{width:45%}.Tabs-module__w-46--ChX5P{width:46%}.Tabs-module__w-47--YqPMF{width:47%}.Tabs-module__w-48--kppmO{width:48%}.Tabs-module__w-49--oQfpk{width:49%}.Tabs-module__w-50--IPS8I{width:50%}.Tabs-module__w-51--u7OgR{width:51%}.Tabs-module__w-52--RnJS2{width:52%}.Tabs-module__w-53--tNa0o{width:53%}.Tabs-module__w-54--cFiUK{width:54%}.Tabs-module__w-55--eoc13{width:55%}.Tabs-module__w-56--zuq5L{width:56%}.Tabs-module__w-57--ic3ZV{width:57%}.Tabs-module__w-58--t4_qB{width:58%}.Tabs-module__w-59--h_nB6{width:59%}.Tabs-module__w-60--_2vy_{width:60%}.Tabs-module__w-61--f4qDx{width:61%}.Tabs-module__w-62--fvHpC{width:62%}.Tabs-module__w-63--aNepW{width:63%}.Tabs-module__w-64--hdLRx{width:64%}.Tabs-module__w-65--bXIno{width:65%}.Tabs-module__w-66--k12dh{width:66%}.Tabs-module__w-67--Q_DNm{width:67%}.Tabs-module__w-68--w4osB{width:68%}.Tabs-module__w-69--P5tbK{width:69%}.Tabs-module__w-70--k_mk8{width:70%}.Tabs-module__w-71--yLcpz{width:71%}.Tabs-module__w-72--cDZjD{width:72%}.Tabs-module__w-73--RX_w0{width:73%}.Tabs-module__w-74--Gyq8G{width:74%}.Tabs-module__w-75--a8P6z{width:75%}.Tabs-module__w-76--JtxPe{width:76%}.Tabs-module__w-77--HbIqD{width:77%}.Tabs-module__w-78--sLgt7{width:78%}.Tabs-module__w-79--ArbTE{width:79%}.Tabs-module__w-80--uTR6d{width:80%}.Tabs-module__w-81--CDo2p{width:81%}.Tabs-module__w-82--GCHVm{width:82%}.Tabs-module__w-83--O_Jur{width:83%}.Tabs-module__w-84--HJM8Z{width:84%}.Tabs-module__w-85--uBwLu{width:85%}.Tabs-module__w-86--vNezU{width:86%}.Tabs-module__w-87--NbObG{width:87%}.Tabs-module__w-88--lbS_Z{width:88%}.Tabs-module__w-89--HJWgp{width:89%}.Tabs-module__w-90--M0Evw{width:90%}.Tabs-module__w-91--k6rbp{width:91%}.Tabs-module__w-92--qTLqM{width:92%}.Tabs-module__w-93--lPzMM{width:93%}.Tabs-module__w-94--ShLz6{width:94%}.Tabs-module__w-95--HIlRl{width:95%}.Tabs-module__w-96--aWBKq{width:96%}.Tabs-module__w-97--JnvDi{width:97%}.Tabs-module__w-98--C7ht0{width:98%}.Tabs-module__w-99--SQf3e{width:99%}.Tabs-module__w-100--GQVie{width:100%}.Tabs-module__w-101--nCTlW{width:101%}.Tabs-module__w-102--rFTCF{width:102%}.Tabs-module__w-103--J60Ro{width:103%}.Tabs-module__w-104--VlskS{width:104%}.Tabs-module__w-105--LfUUc{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tabs-module__tabs--yPhAq{background-color:var(--tabs-background-color);padding:1rem 1.25rem;border-radius:.5rem;display:flex;flex-direction:column;gap:1rem}.Tabs-module__tablist--Tiz3p{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:2rem;position:relative;margin:-5px;padding:5px;z-index:0}.Tabs-module__indicator--jVtwX{position:absolute;height:var(--tab-active-border-height);border-radius:2px 2px 0 0;background-color:var(--tab-active-border-color);transition-property:left,width;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Tabs-module__indicator--jVtwX{transition-duration:.1ms}}.Tabs-module__tabdivider--VmhNH{border-bottom-style:var(--tablist-border-style);border-bottom-width:var(--tablist-border-width);border-bottom-color:var(--tablist-border-color);width:calc(100% - 10px);position:absolute;bottom:5px;left:5px;z-index:-1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Tabs-module__sr-only--GM1UY",
	"hidden": "Tabs-module__hidden--si8Ra",
	"slide-in": "Tabs-module__slide-in--kRwge",
	"slide-out": "Tabs-module__slide-out--xJ6x1",
	"w-6": "Tabs-module__w-6--VL9fD",
	"w-7": "Tabs-module__w-7--Gb0h7",
	"w-8": "Tabs-module__w-8--DagCX",
	"w-9": "Tabs-module__w-9--z2tUq",
	"w-10": "Tabs-module__w-10--gjqvx",
	"w-11": "Tabs-module__w-11--A3YzN",
	"w-12": "Tabs-module__w-12--DwYet",
	"w-13": "Tabs-module__w-13--sufrT",
	"w-14": "Tabs-module__w-14--OiqYe",
	"w-15": "Tabs-module__w-15--Flh7O",
	"w-16": "Tabs-module__w-16--tTJLF",
	"w-17": "Tabs-module__w-17--me89G",
	"w-18": "Tabs-module__w-18--AdTI9",
	"w-19": "Tabs-module__w-19--uyH31",
	"w-20": "Tabs-module__w-20--K7va1",
	"w-21": "Tabs-module__w-21--MhMYy",
	"w-22": "Tabs-module__w-22--TZk1T",
	"w-23": "Tabs-module__w-23--hnkm9",
	"w-24": "Tabs-module__w-24--eEtSs",
	"w-25": "Tabs-module__w-25--Zg9La",
	"w-26": "Tabs-module__w-26--MZqx3",
	"w-27": "Tabs-module__w-27--3eh2f",
	"w-28": "Tabs-module__w-28--yCHVS",
	"w-29": "Tabs-module__w-29--JVM2t",
	"w-30": "Tabs-module__w-30--R3pm6",
	"w-31": "Tabs-module__w-31--y9UwV",
	"w-32": "Tabs-module__w-32--pQeiC",
	"w-33": "Tabs-module__w-33--_IBq4",
	"w-34": "Tabs-module__w-34--FDfyp",
	"w-35": "Tabs-module__w-35--V0pJP",
	"w-36": "Tabs-module__w-36--zcu8E",
	"w-37": "Tabs-module__w-37--MPykQ",
	"w-38": "Tabs-module__w-38--fB3Qr",
	"w-39": "Tabs-module__w-39--oFW8M",
	"w-40": "Tabs-module__w-40--D98RW",
	"w-41": "Tabs-module__w-41--XHRpS",
	"w-42": "Tabs-module__w-42--c51nZ",
	"w-43": "Tabs-module__w-43--yiK5h",
	"w-44": "Tabs-module__w-44--G82mV",
	"w-45": "Tabs-module__w-45--LrnNC",
	"w-46": "Tabs-module__w-46--ChX5P",
	"w-47": "Tabs-module__w-47--YqPMF",
	"w-48": "Tabs-module__w-48--kppmO",
	"w-49": "Tabs-module__w-49--oQfpk",
	"w-50": "Tabs-module__w-50--IPS8I",
	"w-51": "Tabs-module__w-51--u7OgR",
	"w-52": "Tabs-module__w-52--RnJS2",
	"w-53": "Tabs-module__w-53--tNa0o",
	"w-54": "Tabs-module__w-54--cFiUK",
	"w-55": "Tabs-module__w-55--eoc13",
	"w-56": "Tabs-module__w-56--zuq5L",
	"w-57": "Tabs-module__w-57--ic3ZV",
	"w-58": "Tabs-module__w-58--t4_qB",
	"w-59": "Tabs-module__w-59--h_nB6",
	"w-60": "Tabs-module__w-60--_2vy_",
	"w-61": "Tabs-module__w-61--f4qDx",
	"w-62": "Tabs-module__w-62--fvHpC",
	"w-63": "Tabs-module__w-63--aNepW",
	"w-64": "Tabs-module__w-64--hdLRx",
	"w-65": "Tabs-module__w-65--bXIno",
	"w-66": "Tabs-module__w-66--k12dh",
	"w-67": "Tabs-module__w-67--Q_DNm",
	"w-68": "Tabs-module__w-68--w4osB",
	"w-69": "Tabs-module__w-69--P5tbK",
	"w-70": "Tabs-module__w-70--k_mk8",
	"w-71": "Tabs-module__w-71--yLcpz",
	"w-72": "Tabs-module__w-72--cDZjD",
	"w-73": "Tabs-module__w-73--RX_w0",
	"w-74": "Tabs-module__w-74--Gyq8G",
	"w-75": "Tabs-module__w-75--a8P6z",
	"w-76": "Tabs-module__w-76--JtxPe",
	"w-77": "Tabs-module__w-77--HbIqD",
	"w-78": "Tabs-module__w-78--sLgt7",
	"w-79": "Tabs-module__w-79--ArbTE",
	"w-80": "Tabs-module__w-80--uTR6d",
	"w-81": "Tabs-module__w-81--CDo2p",
	"w-82": "Tabs-module__w-82--GCHVm",
	"w-83": "Tabs-module__w-83--O_Jur",
	"w-84": "Tabs-module__w-84--HJM8Z",
	"w-85": "Tabs-module__w-85--uBwLu",
	"w-86": "Tabs-module__w-86--vNezU",
	"w-87": "Tabs-module__w-87--NbObG",
	"w-88": "Tabs-module__w-88--lbS_Z",
	"w-89": "Tabs-module__w-89--HJWgp",
	"w-90": "Tabs-module__w-90--M0Evw",
	"w-91": "Tabs-module__w-91--k6rbp",
	"w-92": "Tabs-module__w-92--qTLqM",
	"w-93": "Tabs-module__w-93--lPzMM",
	"w-94": "Tabs-module__w-94--ShLz6",
	"w-95": "Tabs-module__w-95--HIlRl",
	"w-96": "Tabs-module__w-96--aWBKq",
	"w-97": "Tabs-module__w-97--JnvDi",
	"w-98": "Tabs-module__w-98--C7ht0",
	"w-99": "Tabs-module__w-99--SQf3e",
	"w-100": "Tabs-module__w-100--GQVie",
	"w-101": "Tabs-module__w-101--nCTlW",
	"w-102": "Tabs-module__w-102--rFTCF",
	"w-103": "Tabs-module__w-103--J60Ro",
	"w-104": "Tabs-module__w-104--VlskS",
	"w-105": "Tabs-module__w-105--LfUUc",
	"tabs": "Tabs-module__tabs--yPhAq",
	"tablist": "Tabs-module__tablist--Tiz3p",
	"indicator": "Tabs-module__indicator--jVtwX",
	"tabdivider": "Tabs-module__tabdivider--VmhNH"
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