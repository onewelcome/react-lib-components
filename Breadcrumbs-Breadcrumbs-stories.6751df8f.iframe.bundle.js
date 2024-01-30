"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9018],{

/***/ "./stories/Breadcrumbs/Breadcrumbs.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Breadcrumbs: () => (/* binding */ Breadcrumbs_stories_Breadcrumbs),
  BreadcrumbsWithReactRouter: () => (/* binding */ BreadcrumbsWithReactRouter),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Breadcrumbs_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Breadcrumbs/Breadcrumbs.module.scss
var Breadcrumbs_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Breadcrumbs/Breadcrumbs.module.scss");
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Breadcrumbs_module/* default */.Z, options);




       /* harmony default export */ const Breadcrumbs_Breadcrumbs_module = (Breadcrumbs_module/* default */.Z && Breadcrumbs_module/* default */.Z.locals ? Breadcrumbs_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.tsx
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





const BreadcrumbsComponent = (_ref, ref) => {
  let {
    children,
    ariaLabel,
    className = "",
    ...rest
  } = _ref;
  const items = react.Children.map(children, (child, index) => {
    const isLastElement = Array.isArray(children) ? index === children.length - 1 : true;
    const isFirstElement = Array.isArray(children) && index === 0;
    let item = /*#__PURE__*/react.cloneElement(child, {
      className: Breadcrumbs_Breadcrumbs_module["breadcrumb-link"],
      ...(isFirstElement ? {
        prefixIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
          icon: Icon/* Icons */.P.HomeFilled,
          style: {
            marginRight: "0.35rem"
          }
        })
      } : {})
    });
    if (isLastElement) {
      return /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
        key: child.key,
        variant: "body",
        tag: "span",
        className: Breadcrumbs_Breadcrumbs_module["last"],
        "aria-current": "page"
      }, child.props.children);
    } else {
      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: child.key
      }, item, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.ChevronRight,
        className: Breadcrumbs_Breadcrumbs_module["icon"]
      }));
    }
  });
  return /*#__PURE__*/react.createElement("nav", _extends({}, rest, {
    ref: ref,
    "aria-label": ariaLabel,
    className: "".concat(Breadcrumbs_Breadcrumbs_module["breadcrumbs"], " ").concat(className)
  }), items);
};
const Breadcrumbs = /*#__PURE__*/react.forwardRef(BreadcrumbsComponent);
try {
    // @ts-ignore
    Breadcrumbs.displayName = "Breadcrumbs";
    // @ts-ignore
    Breadcrumbs.__docgenInfo = { "description": "", "displayName": "Breadcrumbs", "props": { "ariaLabel": { "defaultValue": null, "description": "", "name": "ariaLabel", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"] = { docgenInfo: Breadcrumbs.__docgenInfo, name: "Breadcrumbs", path: "src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Link/Link.tsx + 1 modules
var Link = __webpack_require__("./src/components/Link/Link.tsx");
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js + 2 modules
var dist = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var blocks_dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Breadcrumbs/Breadcrumbs.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(blocks_dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The breadcrumbs component exists to give you easily formatted navigation links to put in your application. It accepts\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "children"
      }), ", which should be only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " components. The last ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " component that you pass will automatically\nbe converted to a normal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Typography />"
      }), " element since we don't need the current page you're on to be clickable.\nBy default, the home link has an included icon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibility",
      children: "Accessibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For accessibility reasons, an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ariaLabel"
      }), " prop is mandatory. This is because, by default, screenreaders will not know if a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nav"
      }), " element\nis used as a menu or other purposes. You should pass the translation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "breadcrumbs"
      }), " in the active language to this prop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.oG, {
        of: Breadcrumbs_stories_Breadcrumbs
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Breadcrumbs ariaLabel=\"breadcrumbs\">\n  <Link key=\"1\" to=\"#\">\n    Home\n  </Link>\n  <Link key=\"2\" to=\"#invoice\">\n    Invoices\n  </Link>\n  <Link key=\"3\" to=\"#invoice/123-456-789\">\n    Invoice #01/02/1990\n  </Link>\n  <Link key=\"4\" to=\"#invoice/123-456-789/tax\">\n    Tax liabilities\n  </Link>\n</Breadcrumbs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* ArgTypes */.Ed, {
      story: blocks_dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (MDXContent);

;// CONCATENATED MODULE: ./stories/Breadcrumbs/Breadcrumbs.stories.tsx
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
  title: "components/Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    docs: {
      page: Breadcrumbs_Breadcrumbs
    }
  }
};
/* harmony default export */ const Breadcrumbs_stories = (meta);
const Template = args => /*#__PURE__*/react.createElement(Breadcrumbs, args);
const Breadcrumbs_stories_Breadcrumbs = Template.bind({});
Breadcrumbs_stories_Breadcrumbs.args = {
  ariaLabel: "breadcrumbs",
  children: [/*#__PURE__*/react.createElement(Link/* Link */.r, {
    to: "#",
    key: "1"
  }, "Home"), /*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "2",
    to: "#invoice"
  }, "Invoices"), /*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "3",
    to: "#invoice/123-456-789"
  }, "Invoice #01/02/1990"), /*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "4",
    to: "#invoice/123-456-789/tax"
  }, "Tax liabilities")]
};
const TemplateWithReactRouter = args => /*#__PURE__*/react.createElement(dist/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(Breadcrumbs, args));
const BreadcrumbsWithReactRouter = TemplateWithReactRouter.bind({});
BreadcrumbsWithReactRouter.args = {
  ariaLabel: "breadcrumbs",
  children: [/*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "1",
    to: "#",
    component: dist/* Link */.rU
  }, "Home"), /*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "2",
    to: "#invoice",
    component: dist/* Link */.rU
  }, "Invoices"), /*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "3",
    to: "#invoice/123-456-789",
    component: dist/* Link */.rU
  }, "Invoice #01/02/1990"), /*#__PURE__*/react.createElement(Link/* Link */.r, {
    key: "4",
    to: "#invoice/123-456-789/tax",
    component: dist/* Link */.rU
  }, "Tax liabilities")]
};
Breadcrumbs_stories_Breadcrumbs.parameters = {
  ...Breadcrumbs_stories_Breadcrumbs.parameters,
  docs: {
    ...Breadcrumbs_stories_Breadcrumbs.parameters?.docs,
    source: {
      originalSource: "args => <BreadcrumbsComponent {...args} />",
      ...Breadcrumbs_stories_Breadcrumbs.parameters?.docs?.source
    }
  }
};
BreadcrumbsWithReactRouter.parameters = {
  ...BreadcrumbsWithReactRouter.parameters,
  docs: {
    ...BreadcrumbsWithReactRouter.parameters?.docs,
    source: {
      originalSource: "args => <BrowserRouter>\n    <BreadcrumbsComponent {...args} />\n  </BrowserRouter>",
      ...BreadcrumbsWithReactRouter.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Breadcrumbs","BreadcrumbsWithReactRouter"];

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Typography),
  p: () => (/* binding */ validVariants)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.Z, options);




       /* harmony default export */ const Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default */.Z.locals ? Typography_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
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
  const styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useSpacing)
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Breadcrumbs/Breadcrumbs.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
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
 */.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__last--rUsxe{color:var(--color-primary900);font-weight:700;margin:0}.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__icon--K8rIw{color:var(--color-primary);font-size:.625rem;line-height:var(--default-line-height);margin:0 .84rem}.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ{text-decoration:none}.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ:hover [data-underline],.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ.Breadcrumbs-module__visited--MW7Gx [data-underline]{text-decoration:underline}.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ:focus,.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ:focus-visible{outline:2px solid var(--color-focus);outline-offset:1px}.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ:visited{color:var(--color-primary700)}.Breadcrumbs-module__breadcrumbs--hZYYm .Breadcrumbs-module__breadcrumb-link--VEQxJ:active{color:var(--color-primary900);font-weight:700}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"breadcrumbs": `Breadcrumbs-module__breadcrumbs--hZYYm`,
	"last": `Breadcrumbs-module__last--rUsxe`,
	"icon": `Breadcrumbs-module__icon--K8rIw`,
	"breadcrumb-link": `Breadcrumbs-module__breadcrumb-link--VEQxJ`,
	"visited": `Breadcrumbs-module__visited--MW7Gx`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
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


/***/ })

}]);