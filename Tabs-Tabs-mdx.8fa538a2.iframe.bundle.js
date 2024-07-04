(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[6826],{

/***/ "./stories/Tabs/Tabs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Tabs_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Tabs/Tabs.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Tabs_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tabs"
      }), " component is used to display tabs and accompanying tab panels.\nThe contents between the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<Tab></Tab>"
      }), " tags can contain any content."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the below code snippet, you'll see how you can create the tabs component."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Tabs>\n  <Tab title=\"tab 1\">Tab content 1</Tab>\n  <Tab title=\"tab 2\">Tab content 2</Tab>\n  <Tab title=\"tab 3\">Tab content 3</Tab>\n</Tabs>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Tabs_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.Tabs
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "./stories/Tabs/Tabs.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tabs: () => (/* binding */ Tabs_stories_Tabs),
  TabsWithFocusRing: () => (/* binding */ TabsWithFocusRing),
  TabsWithIcons: () => (/* binding */ TabsWithIcons),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Tabs_stories)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/TabButton.module.scss
var TabButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/TabButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Tabs/TabButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TabButton_module/* default */.A, options);




       /* harmony default export */ const Tabs_TabButton_module = (TabButton_module/* default */.A && TabButton_module/* default */.A.locals ? TabButton_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tabs/TabButton.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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



const TabButtonComponent = (_ref, ref) => {
  let {
    children,
    tabActive,
    focused,
    title,
    fluid,
    icon,
    iconPosition,
    className,
    ...rest
  } = _ref;
  let buttonRef = ref || /*#__PURE__*/(0,react.createRef)();
  (0,react.useEffect)(() => {
    if (focused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef.current, focused]);
  const tabButtonClasses = [Tabs_TabButton_module["tabbutton"]];
  tabActive && tabButtonClasses.push(Tabs_TabButton_module["selected"]);
  fluid && tabButtonClasses.push(Tabs_TabButton_module["fluid"]);
  className && tabButtonClasses.push(className);
  icon && tabButtonClasses.push(Tabs_TabButton_module["has-icon"], Tabs_TabButton_module["".concat(iconPosition, "-icon")]);
  return /*#__PURE__*/react.createElement("button", _extends({}, rest, {
    className: tabButtonClasses.join(" "),
    ref: buttonRef,
    role: "tab",
    type: "button"
  }), children, icon && /*#__PURE__*/react.createElement("i", null, icon));
};
const TabButton = /*#__PURE__*/react.forwardRef(TabButtonComponent);
try {
    // @ts-ignore
    TabButton.displayName = "TabButton";
    // @ts-ignore
    TabButton.__docgenInfo = { "description": "", "displayName": "TabButton", "props": { "icon": { "defaultValue": null, "description": "", "name": "icon", "required": false, "type": { "name": "ReactNode" } }, "fluid": { "defaultValue": null, "description": "", "name": "fluid", "required": false, "type": { "name": "boolean" } }, "tabActive": { "defaultValue": null, "description": "", "name": "tabActive", "required": false, "type": { "name": "boolean" } }, "focused": { "defaultValue": null, "description": "", "name": "focused", "required": false, "type": { "name": "boolean" } }, "iconPosition": { "defaultValue": null, "description": "", "name": "iconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }, { "value": "\"top\"" }, { "value": "\"bottom\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tabs/TabButton.tsx#TabButton"] = { docgenInfo: TabButton.__docgenInfo, name: "TabButton", path: "src/components/Tabs/TabButton.tsx#TabButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tabs.module.scss
var Tabs_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tabs.module.scss");
;// CONCATENATED MODULE: ./src/components/Tabs/Tabs.module.scss

      
      
      
      
      
      
      
      
      

var Tabs_module_options = {};

Tabs_module_options.styleTagTransform = (styleTagTransform_default());
Tabs_module_options.setAttributes = (setAttributesWithoutAttributes_default());
Tabs_module_options.insert = insertBySelector_default().bind(null, "head");
Tabs_module_options.domAPI = (styleDomAPI_default());
Tabs_module_options.insertStyleElement = (insertStyleElement_default());

var Tabs_module_update = injectStylesIntoStyleTag_default()(Tabs_module/* default */.A, Tabs_module_options);




       /* harmony default export */ const Tabs_Tabs_module = (Tabs_module/* default */.A && Tabs_module/* default */.A.locals ? Tabs_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tabs/Tabs.tsx
function Tabs_extends() {
  return Tabs_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Tabs_extends.apply(null, arguments);
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




const TabsComponent = (_ref, ref) => {
  let {
    children,
    selected = 0,
    onTabChange,
    className,
    fluid,
    tabListClassName,
    align,
    iconsPosition = "left",
    ...rest
  } = _ref;
  const [renderedButtons, setRenderedButtons] = (0,react.useState)([]);
  const [renderedTabs, setRenderedTabs] = (0,react.useState)([]);
  const [activeTabIndex, setActiveTabIndex] = (0,react.useState)(selected);
  const [usingKeyboardNavigation, setUsingKeyboardNavigation] = (0,react.useState)(false);
  const [indicatorStyles, setIndicatorStyles] = (0,react.useState)({
    width: 0,
    left: 0,
    top: 0
  });
  const tabsRef = ref || /*#__PURE__*/(0,react.createRef)();
  const indicatorRef = (0,react.useRef)(null);
  const handleKeyDown = e => {
    const totalAmountOfTabs = [children].flat().length;
    if (!usingKeyboardNavigation) setUsingKeyboardNavigation(true);
    if (totalAmountOfTabs === 1) return;
    switch (e.key) {
      case "ArrowRight":
        setActiveTabIndex(currentIndex => {
          return currentIndex + 1 > totalAmountOfTabs - 1 ? 0 : currentIndex + 1;
        });
        break;
      case "ArrowLeft":
        setActiveTabIndex(currentIndex => {
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
  const calculateIndicatorPosition = () => {
    if (tabsRef.current) {
      const selectedButton = tabsRef.current.querySelectorAll('button[role="tab"]')[activeTabIndex];
      setIndicatorStyles({
        left: selectedButton.offsetLeft,
        top: selectedButton.offsetTop + selectedButton.offsetHeight - indicatorRef.current.offsetHeight - parseInt(getComputedStyle(selectedButton).borderBottomWidth),
        width: selectedButton.offsetWidth
      });
    }
  };
  (0,react.useEffect)(() => {
    if (tabsRef.current && renderedButtons.length) {
      calculateIndicatorPosition();
    }
  }, [tabsRef.current, activeTabIndex, renderedButtons]);
  (0,react.useEffect)(() => {
    onTabChange === null || onTabChange === void 0 || onTabChange(activeTabIndex);
  }, [activeTabIndex]);
  (0,react.useEffect)(() => {
    const buttons = react.Children.map(children, (child, index) => {
      if (Object.prototype.hasOwnProperty.call(child.props, "title")) {
        return /*#__PURE__*/react.createElement(TabButton, {
          key: "".concat(child.props.title.toLowerCase().replace(/\s/, "_"), "_button"),
          tabIndex: activeTabIndex === index ? 0 : -1,
          "aria-selected": activeTabIndex === index,
          focused: usingKeyboardNavigation && activeTabIndex === index,
          tabActive: activeTabIndex === index,
          "aria-controls": "tab_".concat(index),
          onClick: () => setActiveTabIndex(index),
          disabled: child.props.disabled,
          fluid: fluid,
          iconPosition: iconsPosition,
          icon: child.props.icon
        }, child.props.title);
      }
      return null;
    });
    const tabs = react.Children.map(children, (child, index) => {
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
    setRenderedButtons(buttons);
  }, [activeTabIndex, fluid, align, iconsPosition]);
  const tabListClasses = [Tabs_Tabs_module["tablist"]];
  align && tabListClasses.push(Tabs_Tabs_module[align]);
  tabListClassName && tabListClasses.push(tabListClassName);
  return /*#__PURE__*/react.createElement("div", Tabs_extends({}, rest, {
    ref: tabsRef,
    className: "".concat(Tabs_Tabs_module["tabs"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", {
    role: "tablist",
    className: tabListClasses.join(" "),
    onKeyDown: handleKeyDown
  }, renderedButtons, /*#__PURE__*/react.createElement("div", {
    className: Tabs_Tabs_module["indicator"],
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
const Tabs = /*#__PURE__*/react.forwardRef(TabsComponent);
try {
    // @ts-ignore
    Tabs.displayName = "Tabs";
    // @ts-ignore
    Tabs.__docgenInfo = { "description": "", "displayName": "Tabs", "props": { "align": { "defaultValue": null, "description": "", "name": "align", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"left\"" }, { "value": "\"right\"" }] } }, "selected": { "defaultValue": { value: "0" }, "description": "", "name": "selected", "required": false, "type": { "name": "number" } }, "onTabChange": { "defaultValue": null, "description": "", "name": "onTabChange", "required": false, "type": { "name": "((index: number) => void)" } }, "fluid": { "defaultValue": null, "description": "", "name": "fluid", "required": false, "type": { "name": "boolean" } }, "tabListClassName": { "defaultValue": null, "description": "", "name": "tabListClassName", "required": false, "type": { "name": "string" } }, "iconsPosition": { "defaultValue": { value: "left" }, "description": "", "name": "iconsPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }, { "value": "\"top\"" }, { "value": "\"bottom\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"] = { docgenInfo: Tabs.__docgenInfo, name: "Tabs", path: "src/components/Tabs/Tabs.tsx#Tabs" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tab.module.scss
var Tab_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tab.module.scss");
;// CONCATENATED MODULE: ./src/components/Tabs/Tab.module.scss

      
      
      
      
      
      
      
      
      

var Tab_module_options = {};

Tab_module_options.styleTagTransform = (styleTagTransform_default());
Tab_module_options.setAttributes = (setAttributesWithoutAttributes_default());
Tab_module_options.insert = insertBySelector_default().bind(null, "head");
Tab_module_options.domAPI = (styleDomAPI_default());
Tab_module_options.insertStyleElement = (insertStyleElement_default());

var Tab_module_update = injectStylesIntoStyleTag_default()(Tab_module/* default */.A, Tab_module_options);




       /* harmony default export */ const Tabs_Tab_module = (Tab_module/* default */.A && Tab_module/* default */.A.locals ? Tab_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tabs/Tab.tsx
function Tab_extends() {
  return Tab_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Tab_extends.apply(null, arguments);
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



const Tab = _ref => {
  var _rest$className;
  let {
    children,
    tabActive,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", Tab_extends({}, rest, {
    "aria-hidden": !tabActive,
    role: "tabpanel",
    className: "".concat(Tabs_Tab_module["tab"], " ").concat(tabActive ? Tabs_Tab_module["selected"] : "", " ").concat((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : "")
  }), children);
};
try {
    // @ts-ignore
    Tab.displayName = "Tab";
    // @ts-ignore
    Tab.__docgenInfo = { "description": "", "displayName": "Tab", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "tabActive": { "defaultValue": null, "description": "", "name": "tabActive", "required": false, "type": { "name": "boolean" } }, "icon": { "defaultValue": null, "description": "", "name": "icon", "required": false, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"] = { docgenInfo: Tab.__docgenInfo, name: "Tab", path: "src/components/Tabs/Tab.tsx#Tab" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./stories/Tabs/Tabs.mdx
var Tabs_Tabs = __webpack_require__("./stories/Tabs/Tabs.mdx");
// EXTERNAL MODULE: ./node_modules/@storybook/test/dist/index.mjs
var dist = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./stories/Tabs/Tabs.stories.tsx
function Tabs_stories_extends() {
  return Tabs_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Tabs_stories_extends.apply(null, arguments);
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









const meta = {
  title: "components/Navigation/Tabs",
  parameters: {
    docs: {
      page: Tabs_Tabs["default"]
    }
  },
  component: Tabs,
  args: {
    fluid: false
  }
};
/* harmony default export */ const Tabs_stories = (meta);
const Template = args => {
  var _tabs, _tabs2, _tabs3;
  return /*#__PURE__*/react.createElement(Tabs, args, /*#__PURE__*/react.createElement(Tab, Tabs_stories_extends({
    title: "First tab"
  }, (_tabs = args.tabs) === null || _tabs === void 0 ? void 0 : _tabs[0]), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "h2"
  }, "Tabs"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "Tabs are used for third level navigation."), /*#__PURE__*/react.createElement("li", null, "Tabs can split up large pieces of information or configuration."), /*#__PURE__*/react.createElement("li", null, "If there is configuration inside a tab, it should be possible to save it per tab."), /*#__PURE__*/react.createElement("li", null, "When the user needs guidance for a process, use a wizard, not tabs."))), /*#__PURE__*/react.createElement(Tab, Tabs_stories_extends({
    title: "Second tab"
  }, (_tabs2 = args.tabs) === null || _tabs2 === void 0 ? void 0 : _tabs2[1]), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "h2"
  }, "Title of the second tab"), /*#__PURE__*/react.createElement("p", null, "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."), /*#__PURE__*/react.createElement("p", null, "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.")), /*#__PURE__*/react.createElement(Tab, Tabs_stories_extends({
    title: "Third tab"
  }, (_tabs3 = args.tabs) === null || _tabs3 === void 0 ? void 0 : _tabs3[2]), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "h2"
  }, "The third tab"), /*#__PURE__*/react.createElement("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."), /*#__PURE__*/react.createElement("p", null, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."), /*#__PURE__*/react.createElement("p", null, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.")));
};
const Tabs_stories_Tabs = Template.bind({});
const TabsWithFocusRing = Template.bind({});
TabsWithFocusRing.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,dist/* within */.ux)(canvasElement);
  await (0,dist/* waitFor */.fm)(() => canvas.getByRole("tab", {
    name: "First tab"
  }));
  const tab1 = await canvas.getByRole("tab", {
    name: "First tab"
  });
  const tab2 = await canvas.getByRole("tab", {
    name: "Second tab"
  });
  const tab3 = await canvas.getByRole("tab", {
    name: "Third tab"
  });
  (0,dist/* expect */.E3)(tab1).toHaveAttribute("aria-selected", "true");
  await dist/* userEvent */.Q4.click(tab2);
  (0,dist/* expect */.E3)(tab1).toHaveAttribute("aria-selected", "false");
  (0,dist/* expect */.E3)(tab2).toHaveAttribute("aria-selected", "true");
  await dist/* userEvent */.Q4.click(tab3);
  (0,dist/* expect */.E3)(tab2).toHaveAttribute("aria-selected", "false");
  (0,dist/* expect */.E3)(tab3).toHaveAttribute("aria-selected", "true");
  await dist/* userEvent */.Q4.click(tab1);
  (0,dist/* expect */.E3)(tab3).toHaveAttribute("aria-selected", "false");
});
Tabs_stories_Tabs.args = {};
const TabsWithIcons = Template.bind({});
TabsWithIcons.args = {
  iconsPosition: "left",
  tabs: [{
    icon: /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: Icon/* Icons */.F.HomeFilled
    })
  }, {
    icon: /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: Icon/* Icons */.F.Calendar
    })
  }, {
    icon: /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: Icon/* Icons */.F.Heart
    })
  }]
};
Tabs_stories_Tabs.parameters = {
  ...Tabs_stories_Tabs.parameters,
  docs: {
    ...Tabs_stories_Tabs.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <TabsComponent {...args}>\n      <Tab title=\"First tab\" {...(args as any).tabs?.[0]}>\n        <Typography variant=\"h2\">Tabs</Typography>\n        <ul>\n          <li>Tabs are used for third level navigation.</li>\n          <li>Tabs can split up large pieces of information or configuration.</li>\n          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>\n          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>\n        </ul>\n      </Tab>\n      <Tab title=\"Second tab\" {...(args as any).tabs?.[1]}>\n        <Typography variant=\"h2\">Title of the second tab</Typography>\n        <p>\n          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,\n          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius\n          laoreet. Quisque rutrum.\n        </p>\n        <p>\n          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam\n          semper libero, sit amet adipiscing sem neque sed ipsum.\n        </p>\n      </Tab>\n      <Tab title=\"Third tab\" {...(args as any).tabs?.[2]}>\n        <Typography variant=\"h2\">The third tab</Typography>\n        <p>\n          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n          architecto beatae vitae dicta sunt explicabo.\n        </p>\n        <p>\n          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n        </p>\n        <p>\n          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci\n          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n          quaerat voluptatem.\n        </p>\n      </Tab>\n    </TabsComponent>;\n}",
      ...Tabs_stories_Tabs.parameters?.docs?.source
    }
  }
};
TabsWithFocusRing.parameters = {
  ...TabsWithFocusRing.parameters,
  docs: {
    ...TabsWithFocusRing.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <TabsComponent {...args}>\n      <Tab title=\"First tab\" {...(args as any).tabs?.[0]}>\n        <Typography variant=\"h2\">Tabs</Typography>\n        <ul>\n          <li>Tabs are used for third level navigation.</li>\n          <li>Tabs can split up large pieces of information or configuration.</li>\n          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>\n          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>\n        </ul>\n      </Tab>\n      <Tab title=\"Second tab\" {...(args as any).tabs?.[1]}>\n        <Typography variant=\"h2\">Title of the second tab</Typography>\n        <p>\n          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,\n          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius\n          laoreet. Quisque rutrum.\n        </p>\n        <p>\n          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam\n          semper libero, sit amet adipiscing sem neque sed ipsum.\n        </p>\n      </Tab>\n      <Tab title=\"Third tab\" {...(args as any).tabs?.[2]}>\n        <Typography variant=\"h2\">The third tab</Typography>\n        <p>\n          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n          architecto beatae vitae dicta sunt explicabo.\n        </p>\n        <p>\n          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n        </p>\n        <p>\n          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci\n          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n          quaerat voluptatem.\n        </p>\n      </Tab>\n    </TabsComponent>;\n}",
      ...TabsWithFocusRing.parameters?.docs?.source
    }
  }
};
TabsWithIcons.parameters = {
  ...TabsWithIcons.parameters,
  docs: {
    ...TabsWithIcons.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <TabsComponent {...args}>\n      <Tab title=\"First tab\" {...(args as any).tabs?.[0]}>\n        <Typography variant=\"h2\">Tabs</Typography>\n        <ul>\n          <li>Tabs are used for third level navigation.</li>\n          <li>Tabs can split up large pieces of information or configuration.</li>\n          <li>If there is configuration inside a tab, it should be possible to save it per tab.</li>\n          <li>When the user needs guidance for a process, use a wizard, not tabs.</li>\n        </ul>\n      </Tab>\n      <Tab title=\"Second tab\" {...(args as any).tabs?.[1]}>\n        <Typography variant=\"h2\">Title of the second tab</Typography>\n        <p>\n          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,\n          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius\n          laoreet. Quisque rutrum.\n        </p>\n        <p>\n          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam\n          semper libero, sit amet adipiscing sem neque sed ipsum.\n        </p>\n      </Tab>\n      <Tab title=\"Third tab\" {...(args as any).tabs?.[2]}>\n        <Typography variant=\"h2\">The third tab</Typography>\n        <p>\n          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n          architecto beatae vitae dicta sunt explicabo.\n        </p>\n        <p>\n          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n        </p>\n        <p>\n          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci\n          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n          quaerat voluptatem.\n        </p>\n      </Tab>\n    </TabsComponent>;\n}",
      ...TabsWithIcons.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Tabs","TabsWithFocusRing","TabsWithIcons"];

/***/ }),

/***/ "./node_modules/@storybook/test/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/test/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ conditionalPlay)
});

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



/**
 * To improve our visual tests, we need to display various states of our components. This often requires simulating user actions.
 * In Storybook, visiting the desired component automatically triggers the play function, which can be confusing for those not familiar with the tool.
 * To address this, we've wrapped the original play function, so it only runs when Chromatic is active or when in development mode.
 * @param playFunction
 */
const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return async context => {
      await playFunction(context);
    };
  }
  return async () => {};
};

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Typography),
  v: () => (/* binding */ validVariants)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.A, options);




       /* harmony default export */ const Typography_Typography_module = (Typography_module/* default */.A && Typography_module/* default */.A.locals ? Typography_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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




const validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
const TypographyComponent = (_ref, ref) => {
  let {
    children,
    variant,
    tag,
    style,
    spacing,
    align,
    className = "",
    ...rest
  } = _ref;
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  const styleWithSpacing = (0,useSpacing/* useSpacing */.T)(spacing, style);
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
  let TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: {
      ...styleWithSpacing,
      textAlign: align
    },
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
const Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useSpacing)
/* harmony export */ });
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

const defaultFactor = 0.25;
const defaultUnit = "rem";
const spacingNumberRegex = /(\d+\.?\d*)+/g;
const useSpacing = (spacingProps, style) => {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce((prev, _ref) => {
      let [spacing, multiplier] = _ref;
      const matches = String(multiplier).matchAll(spacingNumberRegex);
      const cssSpacingValue = Array.from(matches).map(_ref2 => {
        let [multiplierValue] = _ref2;
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return {
        ...prev,
        [spacing]: cssSpacingValue
      };
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tab.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 */.Tab-module__tab--rSeAj{display:none}.Tab-module__tab--rSeAj:focus-visible{outline-color:var(--color-focus)}.Tab-module__tab--rSeAj.Tab-module__selected--pOhLw{display:block}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tab": `Tab-module__tab--rSeAj`,
	"selected": `Tab-module__selected--pOhLw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/TabButton.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 *//*!
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
 *//*!
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
 */.TabButton-module__sr-only--cE1n_{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.TabButton-module__hidden--S7QZZ{display:none}.TabButton-module__slide-in--K2vNi{animation:TabButton-module__slide-in--K2vNi .5s forwards}@media(prefers-reduced-motion: reduce){.TabButton-module__slide-in--K2vNi{animation-duration:.1ms}}.TabButton-module__slide-out--a0KzA{animation:TabButton-module__slide-out--a0KzA .5s forwards}@media(prefers-reduced-motion: reduce){.TabButton-module__slide-out--a0KzA{animation-duration:.1ms}}@keyframes TabButton-module__slide-in--K2vNi{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes TabButton-module__slide-out--a0KzA{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.TabButton-module__tabbutton--MljDQ{color:var(--tab-text-color);border:0;border-radius:0;font-size:var(--font-size);line-height:var(--default-line-height);margin:0;padding:.5rem 1rem;cursor:pointer;font-family:var(--font-family);background-color:rgba(0,0,0,0);white-space:nowrap;position:relative;font-weight:normal;border-bottom-style:var(--tablist-border-style);border-bottom-width:var(--tablist-border-width);border-bottom-color:var(--tablist-border-color)}.TabButton-module__tabbutton--MljDQ:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:0;border-radius:var(--focus-border-radius)}.TabButton-module__tabbutton--MljDQ:where(:focus-visible){z-index:1}.TabButton-module__tabbutton--MljDQ:hover{background-color:var(--tab-hover-color)}.TabButton-module__tabbutton--MljDQ:active{background-color:var(--tab-pressed-color)}.TabButton-module__tabbutton--MljDQ.TabButton-module__selected--Jks6A{color:var(--tab-active-text-color)}.TabButton-module__tabbutton--MljDQ.TabButton-module__fluid--DqWuL{flex:1}.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm{gap:.25rem;display:inline-flex;align-items:center}.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm i{display:flex}.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm span[data-icon]{display:inline-block;font-size:1.25rem;width:1.25rem}.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm.TabButton-module__top-icon--vhipm,.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm.TabButton-module__bottom-icon--YOtCF{flex-direction:column}.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm.TabButton-module__left-icon--hfjzD i{order:-1}.TabButton-module__tabbutton--MljDQ.TabButton-module__has-icon--fmnPm.TabButton-module__top-icon--vhipm i{order:-1}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `TabButton-module__sr-only--cE1n_`,
	"hidden": `TabButton-module__hidden--S7QZZ`,
	"slide-in": `TabButton-module__slide-in--K2vNi`,
	"slide-out": `TabButton-module__slide-out--a0KzA`,
	"tabbutton": `TabButton-module__tabbutton--MljDQ`,
	"selected": `TabButton-module__selected--Jks6A`,
	"fluid": `TabButton-module__fluid--DqWuL`,
	"has-icon": `TabButton-module__has-icon--fmnPm`,
	"top-icon": `TabButton-module__top-icon--vhipm`,
	"bottom-icon": `TabButton-module__bottom-icon--YOtCF`,
	"left-icon": `TabButton-module__left-icon--hfjzD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tabs/Tabs.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 *//*!
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
 *//*!
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
 */.Tabs-module__sr-only--GM1UY{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Tabs-module__hidden--si8Ra{display:none}.Tabs-module__slide-in--kRwge{animation:Tabs-module__slide-in--kRwge .5s forwards}@media(prefers-reduced-motion: reduce){.Tabs-module__slide-in--kRwge{animation-duration:.1ms}}.Tabs-module__slide-out--xJ6x1{animation:Tabs-module__slide-out--xJ6x1 .5s forwards}@media(prefers-reduced-motion: reduce){.Tabs-module__slide-out--xJ6x1{animation-duration:.1ms}}@keyframes Tabs-module__slide-in--kRwge{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Tabs-module__slide-out--xJ6x1{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Tabs-module__tabs--yPhAq{background-color:var(--tabs-background-color);padding:1rem 1.25rem;border-radius:.5rem;display:flex;flex-direction:column;gap:1rem}.Tabs-module__tablist--Tiz3p{display:flex;flex-wrap:nowrap;overflow-x:auto;position:relative;margin:-5px;padding:5px;z-index:0}.Tabs-module__tablist--Tiz3p.Tabs-module__center--xHzMW{justify-content:center}.Tabs-module__tablist--Tiz3p.Tabs-module__right--oDcAv{justify-content:flex-end}.Tabs-module__indicator--jVtwX{position:absolute;height:calc(var(--tab-active-border-height) - var(--tablist-border-width));border-radius:.125rem .125rem 0 0;background-color:var(--tab-active-border-color);z-index:2;transition-property:left,width;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Tabs-module__indicator--jVtwX{transition-duration:.1ms}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Tabs-module__sr-only--GM1UY`,
	"hidden": `Tabs-module__hidden--si8Ra`,
	"slide-in": `Tabs-module__slide-in--kRwge`,
	"slide-out": `Tabs-module__slide-out--xJ6x1`,
	"tabs": `Tabs-module__tabs--yPhAq`,
	"tablist": `Tabs-module__tablist--Tiz3p`,
	"center": `Tabs-module__center--xHzMW`,
	"right": `Tabs-module__right--oDcAv`,
	"indicator": `Tabs-module__indicator--jVtwX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": `Typography-module__typography_style_h1--QRbCJ`,
	"typography_style_h2": `Typography-module__typography_style_h2--gst_1`,
	"typography_style_h3": `Typography-module__typography_style_h3--OMuiN`,
	"typography_style_h4": `Typography-module__typography_style_h4--AK8ry`,
	"typography_style_body": `Typography-module__typography_style_body--RZ14O`,
	"typography_style_body-bold": `Typography-module__typography_style_body-bold--yrfzC`,
	"typography_style_sub-text": `Typography-module__typography_style_sub-text--J284m`,
	"typography_style_code": `Typography-module__typography_style_code--aL5hm`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {

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

/***/ })

}]);