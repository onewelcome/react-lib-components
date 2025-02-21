(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5801],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "./stories/miscellaneous/IdentityProviderButton.mdx":
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
/* harmony import */ var _IdentityProviderButton_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/miscellaneous/IdentityProviderButton.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _IdentityProviderButton_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<DefaultIdentityProviderButton/>"
      }), " component is a special variant of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<Button/>"
      }), ". It was created to simplify adding Identity Provider\nbuttons. It's designed to be used in conjunction with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "react-lib-components-theme-adapter"
      }), " that is capable of generating a full\ncustomization palette for a specific IdP type."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["When ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "iconUrl"
      }), " is not provided, the component automatically fallbacks to a default one that is set up in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "theme-common-content-service"
      }), ".\nFor this to work the correct ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "idpType"
      }), " must be passed. It's currently a simple string to avoid extra work when adding new IdP types."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-not-reuse-button",
      children: "Why not reuse Button?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Buttons API is slightly different. It allows the use of only a predefined list of icons where we need to support passing a URL to the icon resource."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _IdentityProviderButton_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.DefaultIdentityProviderButton
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

/***/ "./stories/miscellaneous/IdentityProviderButton.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomIdentityProviderButton: () => (/* binding */ CustomIdentityProviderButton),
  DefaultIdentityProviderButton: () => (/* binding */ DefaultIdentityProviderButton),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ IdentityProviderButton_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./stories/miscellaneous/IdentityProviderButton.mdx
var IdentityProviderButton = __webpack_require__("./stories/miscellaneous/IdentityProviderButton.mdx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/miscellaneous/IdentityProviderButton.module.scss
var IdentityProviderButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/miscellaneous/IdentityProviderButton.module.scss");
;// CONCATENATED MODULE: ./src/components/miscellaneous/IdentityProviderButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(IdentityProviderButton_module/* default */.A, options);




       /* harmony default export */ const miscellaneous_IdentityProviderButton_module = (IdentityProviderButton_module/* default */.A && IdentityProviderButton_module/* default */.A.locals ? IdentityProviderButton_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/miscellaneous/IdentityProviderButton.tsx
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




const IdentityProviderButton_IdentityProviderButton = _ref => {
  let {
    children,
    iconUrl,
    imgAltText,
    idpType,
    customization,
    ...rest
  } = _ref;
  const DEFAULT_BACKGROUND_COLOR = "#FFFFFF";
  const DEFAULT_BORDER_COLOR = "#000000";
  const DEFAULT_TEXT_COLOR = "#000000";
  const DEFAULT_FOCUS_OUTLINE_COLOR = "var(--color-black50)";
  const DEFAULT_HOVER_COLOR = "var(--color-black10)";
  const DEFAULT_PRESSED_COLOR = "var(--color-black20)";
  const generateCSSProperties = () => {
    var _customization$backgr, _customization$border, _customization$textCo, _customization$focusB, _customization$focusB2, _customization$hoverB, _customization$presse;
    return {
      "--button-primary-default-color": (_customization$backgr = customization === null || customization === void 0 ? void 0 : customization.backgroundColor) !== null && _customization$backgr !== void 0 ? _customization$backgr : DEFAULT_BACKGROUND_COLOR,
      borderColor: (_customization$border = customization === null || customization === void 0 ? void 0 : customization.borderColor) !== null && _customization$border !== void 0 ? _customization$border : DEFAULT_BORDER_COLOR,
      "--button-fill-text-color": (_customization$textCo = customization === null || customization === void 0 ? void 0 : customization.textColor) !== null && _customization$textCo !== void 0 ? _customization$textCo : DEFAULT_TEXT_COLOR,
      "--color-focus": (_customization$focusB = customization === null || customization === void 0 ? void 0 : customization.focusBorderColor) !== null && _customization$focusB !== void 0 ? _customization$focusB : DEFAULT_FOCUS_OUTLINE_COLOR,
      "--button-primary-focused-color": (_customization$focusB2 = customization === null || customization === void 0 ? void 0 : customization.focusBackgroundColor) !== null && _customization$focusB2 !== void 0 ? _customization$focusB2 : DEFAULT_BACKGROUND_COLOR,
      "--button-primary-hover-color": (_customization$hoverB = customization === null || customization === void 0 ? void 0 : customization.hoverBackgroundColor) !== null && _customization$hoverB !== void 0 ? _customization$hoverB : DEFAULT_HOVER_COLOR,
      "--button-primary-pressed-color": (_customization$presse = customization === null || customization === void 0 ? void 0 : customization.pressedBackgroundColor) !== null && _customization$presse !== void 0 ? _customization$presse : DEFAULT_PRESSED_COLOR
    };
  };
  return /*#__PURE__*/react.createElement(Button/* Button */.$, _extends({
    style: generateCSSProperties(),
    color: "primary",
    variant: "fill",
    className: miscellaneous_IdentityProviderButton_module["idp-button"]
  }, rest), /*#__PURE__*/react.createElement("span", {
    className: miscellaneous_IdentityProviderButton_module["idp-button--with-icon"]
  }, /*#__PURE__*/react.createElement("img", {
    height: 24,
    width: 24,
    src: iconUrl || "/ui-resources-static/common/icons/".concat(idpType, ".svg"),
    alt: imgAltText || "Identity Provider icon"
  }), children));
};
try {
    // @ts-ignore
    IdentityProviderButton_IdentityProviderButton.displayName = "IdentityProviderButton";
    // @ts-ignore
    IdentityProviderButton_IdentityProviderButton.__docgenInfo = { "description": "", "displayName": "IdentityProviderButton", "props": { "iconUrl": { "defaultValue": null, "description": "", "name": "iconUrl", "required": false, "type": { "name": "string" } }, "imgAltText": { "defaultValue": null, "description": "", "name": "imgAltText", "required": false, "type": { "name": "string" } }, "idpType": { "defaultValue": null, "description": "", "name": "idpType", "required": true, "type": { "name": "string" } }, "customization": { "defaultValue": null, "description": "", "name": "customization", "required": false, "type": { "name": "SupportedCustomizationKeys" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/miscellaneous/IdentityProviderButton.tsx#IdentityProviderButton"] = { docgenInfo: IdentityProviderButton_IdentityProviderButton.__docgenInfo, name: "IdentityProviderButton", path: "src/components/miscellaneous/IdentityProviderButton.tsx#IdentityProviderButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./stories/miscellaneous/IdentityProviderButton.stories.tsx
function IdentityProviderButton_stories_extends() {
  return IdentityProviderButton_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, IdentityProviderButton_stories_extends.apply(null, arguments);
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
  title: "miscellaneous/Inputs/IdentityProviderButton",
  component: IdentityProviderButton_IdentityProviderButton,
  parameters: {
    docs: {
      page: IdentityProviderButton["default"]
    }
  }
};
/* harmony default export */ const IdentityProviderButton_stories = (meta);
const Template = args => {
  const idpType = "SAML";
  return /*#__PURE__*/react.createElement(IdentityProviderButton_IdentityProviderButton, IdentityProviderButton_stories_extends({}, args, {
    onClick: () => {
      alert("Invalid token");
    },
    iconUrl: "SAML.svg",
    idpType: "SAML"
  }), "Log in with ".concat(idpType));
};
const DefaultIdentityProviderButton = Template.bind({});
DefaultIdentityProviderButton.args = {};
const CustomIdentityProviderButton = Template.bind({});
CustomIdentityProviderButton.args = {
  customization: {
    backgroundColor: "#383A4B",
    textColor: "#FFFFFF",
    borderColor: "#383A4B",
    focusBackgroundColor: "#2E2F3D",
    pressedBackgroundColor: "#21222C",
    focusBorderColor: "#7C7F9D",
    hoverBackgroundColor: "#2E2F3D"
  }
};
DefaultIdentityProviderButton.parameters = {
  ...DefaultIdentityProviderButton.parameters,
  docs: {
    ...DefaultIdentityProviderButton.parameters?.docs,
    source: {
      originalSource: "args => {\n  const idpType = \"SAML\";\n  return <IdPButtonComponent {...args} onClick={() => {\n    alert(\"Invalid token\");\n  }} iconUrl={\"SAML.svg\"} idpType=\"SAML\">\n      {`Log in with ${idpType}`}\n    </IdPButtonComponent>;\n}",
      ...DefaultIdentityProviderButton.parameters?.docs?.source
    }
  }
};
CustomIdentityProviderButton.parameters = {
  ...CustomIdentityProviderButton.parameters,
  docs: {
    ...CustomIdentityProviderButton.parameters?.docs,
    source: {
      originalSource: "args => {\n  const idpType = \"SAML\";\n  return <IdPButtonComponent {...args} onClick={() => {\n    alert(\"Invalid token\");\n  }} iconUrl={\"SAML.svg\"} idpType=\"SAML\">\n      {`Log in with ${idpType}`}\n    </IdPButtonComponent>;\n}",
      ...CustomIdentityProviderButton.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["DefaultIdentityProviderButton","CustomIdentityProviderButton"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/miscellaneous/IdentityProviderButton.module.scss":
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
 */.IdentityProviderButton-module__sr-only--u2hOl{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.IdentityProviderButton-module__hidden--FV_2P{display:none}.IdentityProviderButton-module__slide-in--o_LX5{animation:IdentityProviderButton-module__slide-in--o_LX5 .5s forwards}@media(prefers-reduced-motion: reduce){.IdentityProviderButton-module__slide-in--o_LX5{animation-duration:.1ms}}.IdentityProviderButton-module__slide-out--Ik6M2{animation:IdentityProviderButton-module__slide-out--Ik6M2 .5s forwards}@media(prefers-reduced-motion: reduce){.IdentityProviderButton-module__slide-out--Ik6M2{animation-duration:.1ms}}@keyframes IdentityProviderButton-module__slide-in--o_LX5{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes IdentityProviderButton-module__slide-out--Ik6M2{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.IdentityProviderButton-module__idp-button--v4hWk{width:100%}.IdentityProviderButton-module__idp-button--with-icon--vWwtg{display:flex;align-items:center;justify-content:center;gap:.5rem;margin-top:-0.125rem;margin-bottom:-0.125rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `IdentityProviderButton-module__sr-only--u2hOl`,
	"hidden": `IdentityProviderButton-module__hidden--FV_2P`,
	"slide-in": `IdentityProviderButton-module__slide-in--o_LX5`,
	"slide-out": `IdentityProviderButton-module__slide-out--Ik6M2`,
	"idp-button": `IdentityProviderButton-module__idp-button--v4hWk`,
	"idp-button--with-icon": `IdentityProviderButton-module__idp-button--with-icon--vWwtg`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);