(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7113],{

/***/ "./stories/Notifications/Alert/Alert.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Alert: () => (/* binding */ Alert_stories_Alert),
  AlertVariants: () => (/* binding */ AlertVariants),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Alert_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/Alert/Alert.mdx



/*@jsxRuntime automatic @jsxImportSource react*/



function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h3: "h3",
    pre: "pre",
    ul: "ul",
    li: "li"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Alert"
      }), " components and hook are there for you to make it easy to notify a user with different type of messages. The components, the Alert component, provider and hooks are designed to be used together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You need to wrap your application with the AlertProvider to ensure the alerts appear below the content on your page."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wrapping-your-code-with-alertprovider",
      children: "Wrapping your code with AlertProvider"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "createRoot(root).render(\n  <AlertProvider closeButtonTitle=\"Close\">\n    <RouterProvider router={router} />\n  </AlertProvider>\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const { enqueueAlert } = useAlert();\n\nenqueueAlert(\"Message\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "queue-functions",
      children: "Queue functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueAlert(string | AlertQueue)"
        }), " - The base alert hook. Enqueues a new alert. By default a total of 3 can be visible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueInfoAlert(string | AlertQueue)"
        }), " - The variant is fixed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "informative"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueSuccessAlert(string | AlertQueue)"
        }), " - The variant is fixed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "success"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueWarningAlert(string | AlertQueue)"
        }), " - The variant is fixed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "warning"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueErrorAlert(string | AlertQueue)"
        }), " - The variant is fixed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alertitem-props",
      children: "AlertItem props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      story: dist/* PRIMARY_STORY */.h1
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alertprovider-props",
      children: "AlertProvider props"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "closeButtonTitle: string (required)"
        }), " - The default title for the close button on the alerts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "placement?: {vertical: \"top\" | \"bottom\", horizontal: \"start\" | \"center\" | \"end\"}"
        }), " - The placement of the alerts relative to domRoot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "stackSize?: number"
        }), " - The number of alerts that can ve visible at any given time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "domRoot?: HTMLElement"
        }), " - Used if custom dom root is required. Default body."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "autoHideDuration?: { long: number, short: number }"
        }), " - The amount of time it takes for an alert to hide itself automatically if not focused. Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ long: 8000, short: 4000 }"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "className?: string"
        }), " - Css class extension for the main div container."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Alert = (MDXContent);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Alert/AlertContainer/AlertContainer.module.scss
var AlertContainer_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Alert/AlertContainer/AlertContainer.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertContainer/AlertContainer.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(AlertContainer_module/* default */.A, options);




       /* harmony default export */ const AlertContainer_AlertContainer_module = (AlertContainer_module/* default */.A && AlertContainer_module/* default */.A.locals ? AlertContainer_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertProvider/AlertContext.ts
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


const AlertContext = /*#__PURE__*/(0,react.createContext)({
  enqueueAlert: entry => null,
  enqueueInfoAlert: entry => null,
  enqueueSuccessAlert: entry => null,
  enqueueErrorAlert: entry => null,
  enqueueWarningAlert: entry => null,
  setAlertHeight: (id, height) => null,
  alerts: []
});
/* harmony default export */ const AlertProvider_AlertContext = (AlertContext);
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertContainer/useAlertContainerHeightAnimation.ts
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



function useAlertContainerHeightAnimation() {
  const {
    alerts
  } = (0,react.useContext)(AlertProvider_AlertContext);
  const [height, setHeight] = (0,react.useState)(0);
  const [justifyContent, setJustifyContent] = (0,react.useState)("flex-start");
  const spaceBetweenAlerts = 8;
  const exceedsMaximumVisibleAlerts = alerts.length >= 3;
  (0,react.useEffect)(() => {
    const allHeights = alerts.map(alert => {
      var _alert$height;
      return (_alert$height = alert.height) !== null && _alert$height !== void 0 ? _alert$height : 0;
    });
    let totalHeight = allHeights.reduce((prev, curr) => prev + curr, 0);
    totalHeight += (Math.min(alerts.length, 3) - 1) * spaceBetweenAlerts;
    if (exceedsMaximumVisibleAlerts) {
      setTimeout(() => {
        setJustifyContent("flex-end");
      }, 500);
    }
    if (height > totalHeight && justifyContent !== "flex-end") {
      setJustifyContent("flex-end");
    } else if (height < totalHeight && justifyContent !== "flex-start") {
      setJustifyContent("flex-start");
    }
    setHeight(totalHeight);
  }, [alerts]);
  return {
    height,
    justifyContent
  };
}
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertContainer/AlertContainer.tsx
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




const AlertContainer = _ref => {
  let {
    placement,
    children,
    zIndex,
    className,
    ...rest
  } = _ref;
  const {
    height,
    justifyContent
  } = useAlertContainerHeightAnimation();
  const containerClasses = [AlertContainer_AlertContainer_module["alerts"], AlertContainer_AlertContainer_module[placement.horizontal], AlertContainer_AlertContainer_module[placement.vertical], className !== null && className !== void 0 ? className : ""];
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    style: {
      zIndex,
      height,
      justifyContent
    },
    className: containerClasses.join(" ")
  }), children);
};
try {
    // @ts-ignore
    AlertContainer.displayName = "AlertContainer";
    // @ts-ignore
    AlertContainer.__docgenInfo = { "description": "", "displayName": "AlertContainer", "props": { "placement": { "defaultValue": null, "description": "", "name": "placement", "required": true, "type": { "name": "Placement" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Alert/AlertContainer/AlertContainer.tsx#AlertContainer"] = { docgenInfo: AlertContainer.__docgenInfo, name: "AlertContainer", path: "src/components/Notifications/Alert/AlertContainer/AlertContainer.tsx#AlertContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Alert/AlertItem/AlertItem.module.scss
var AlertItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Alert/AlertItem/AlertItem.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertItem/AlertItem.module.scss

      
      
      
      
      
      
      
      
      

var AlertItem_module_options = {};

AlertItem_module_options.styleTagTransform = (styleTagTransform_default());
AlertItem_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      AlertItem_module_options.insert = insertBySelector_default().bind(null, "head");
    
AlertItem_module_options.domAPI = (styleDomAPI_default());
AlertItem_module_options.insertStyleElement = (insertStyleElement_default());

var AlertItem_module_update = injectStylesIntoStyleTag_default()(AlertItem_module/* default */.A, AlertItem_module_options);




       /* harmony default export */ const AlertItem_AlertItem_module = (AlertItem_module/* default */.A && AlertItem_module/* default */.A.locals ? AlertItem_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/hooks/useAnimation.ts
var useAnimation = __webpack_require__("./src/hooks/useAnimation.ts");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertItem/AlertItem.tsx
function AlertItem_extends() {
  AlertItem_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return AlertItem_extends.apply(this, arguments);
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









const EMPHASES = ["low", "medium", "high"];
const VARIANTS = ["neutral", "informative", "success", "warning", "error"];
const useRegisterAlertHeight = (singleAlertRef, alertId) => {
  const ctx = (0,react.useContext)(AlertProvider_AlertContext);
  (0,react.useEffect)(() => {
    if (singleAlertRef.current) {
      ctx.setAlertHeight(alertId, singleAlertRef.current.getBoundingClientRect().height);
    }
  }, [singleAlertRef.current]);
};
let actionButtonKeyCounter = 1;
const AlertItem = _ref => {
  let {
    id,
    title,
    duration,
    variant = "neutral",
    emphasis = "low",
    content,
    className,
    actions = [],
    onClose,
    closeButtonTitle,
    wasShown
  } = _ref;
  const timerHandler = (0,react.useRef)();
  const onAnimationEnd = () => {
    onClose === null || onClose === void 0 || onClose();
  };
  const {
    ref,
    animationStarted,
    startAnimation
  } = (0,useAnimation/* useAnimation */.s)(onAnimationEnd);
  useRegisterAlertHeight(ref, id);
  (0,react.useEffect)(() => {
    if (duration && duration > 0) {
      timerHandler.current = setTimeout(() => startAnimation(), duration);
    }
    if (ref) {
      var _ref$current, _ref$current2, _ref$current3, _ref$current4;
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.addEventListener("focus", onItemFocus);
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 || _ref$current2.addEventListener("blur", onItemBlur);
      (_ref$current3 = ref.current) === null || _ref$current3 === void 0 || _ref$current3.addEventListener("mouseenter", onItemFocus);
      (_ref$current4 = ref.current) === null || _ref$current4 === void 0 || _ref$current4.addEventListener("mouseleave", onItemBlur);
    }
    return () => {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);
  const onItemFocus = () => {
    timerHandler.current && clearTimeout(timerHandler.current);
  };
  const onItemBlur = () => {
    if (duration && duration > 0) {
      timerHandler.current = setTimeout(() => startAnimation(), duration);
    }
  };
  const getVariantIcon = () => {
    if (variant === "error") {
      return Icon/* Icons */.F.ErrorAlt;
    }
    if (variant === "warning") {
      return Icon/* Icons */.F.Warning;
    }
    return variant === "success" ? Icon/* Icons */.F.CheckmarkCircleAlt : Icon/* Icons */.F.InfoCircle;
  };
  const actionButtons = actions.map(actionProp => /*#__PURE__*/react.createElement("button", AlertItem_extends({
    key: "alert-action-button-".concat((actionButtonKeyCounter++).toString())
  }, actionProp, {
    onClick: e => {
      var _actionProp$onClick;
      onClose === null || onClose === void 0 || onClose();
      (_actionProp$onClick = actionProp.onClick) === null || _actionProp$onClick === void 0 || _actionProp$onClick.call(actionProp, e);
    },
    className: AlertItem_AlertItem_module["action-button"]
  }), actionProp.label));
  const getAlertClasses = () => {
    const alertClasses = [AlertItem_AlertItem_module["alert"], AlertItem_AlertItem_module["".concat(variant)], AlertItem_AlertItem_module["emph-".concat(emphasis)]];
    if (animationStarted) {
      alertClasses.push(readyclasses_module/* default */.A["slide-out"]);
    }
    if (!animationStarted && !wasShown) {
      alertClasses.push(readyclasses_module/* default */.A["slide-in"]);
    }
    if (className) {
      alertClasses.push(className);
    }
    return alertClasses.join(" ");
  };
  const getAria = () => {
    if (variant === "error" && (emphasis === "medium" || emphasis === "high")) {
      return "assertive";
    }
    return "polite";
  };
  const getContentOrTitle = () => {
    if (content) {
      return content;
    }
    return title;
  };
  return /*#__PURE__*/react.createElement("div", {
    ["data-testid"]: "alert-container",
    ref: ref,
    "aria-live": getAria(),
    className: getAlertClasses(),
    role: "alert"
  }, /*#__PURE__*/react.createElement("div", {
    className: AlertItem_AlertItem_module["outer-content-wrapper"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: getVariantIcon(),
    className: AlertItem_AlertItem_module["icon"]
  }), /*#__PURE__*/react.createElement("div", {
    className: AlertItem_AlertItem_module["content-wrapper"],
    role: "log"
  }, !!title && !!content && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    ["data-testid"]: "alert-title",
    className: AlertItem_AlertItem_module["title"],
    variant: "body-bold",
    tag: "span"
  }, title), (!!content || !!title) && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    ["data-testid"]: "alert-content",
    className: AlertItem_AlertItem_module["content"],
    variant: "body"
  }, getContentOrTitle()))), actionButtons.length > 0 && /*#__PURE__*/react.createElement("div", {
    ["data-testid"]: "alert-actions",
    className: AlertItem_AlertItem_module["actions"]
  }, actionButtons), onClose && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    className: AlertItem_AlertItem_module["close-btn"],
    onClick: e => {
      e.stopPropagation();
      startAnimation();
    },
    title: closeButtonTitle,
    ["data-testid"]: "alert-close"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.Times
  })));
};
try {
    // @ts-ignore
    AlertItem.displayName = "AlertItem";
    // @ts-ignore
    AlertItem.__docgenInfo = { "description": "", "displayName": "AlertItem", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": false, "type": { "name": "string" } }, "duration": { "defaultValue": null, "description": "", "name": "duration", "required": false, "type": { "name": "number" } }, "emphasis": { "defaultValue": { value: "low" }, "description": "", "name": "emphasis", "required": false, "type": { "name": "Emphasis" } }, "variant": { "defaultValue": { value: "neutral" }, "description": "", "name": "variant", "required": false, "type": { "name": "Variant" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "closeButtonTitle": { "defaultValue": null, "description": "", "name": "closeButtonTitle", "required": false, "type": { "name": "string" } }, "actions": { "defaultValue": { value: "[]" }, "description": "", "name": "actions", "required": false, "type": { "name": "Actions" } }, "wasShown": { "defaultValue": null, "description": "", "name": "wasShown", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Alert/AlertItem/AlertItem.tsx#AlertItem"] = { docgenInfo: AlertItem.__docgenInfo, name: "AlertItem", path: "src/components/Notifications/Alert/AlertItem/AlertItem.tsx#AlertItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/AlertProvider/AlertProvider.tsx
function AlertProvider_extends() {
  AlertProvider_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return AlertProvider_extends.apply(this, arguments);
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

const AlertProvider = _ref => {
  let {
    closeButtonTitle,
    placement = {
      vertical: "bottom",
      horizontal: "center"
    },
    autoHideDuration = {
      long: 8000,
      short: 4000
    },
    stackSize = 3,
    domRoot,
    children,
    className
  } = _ref;
  const [alertEntries, setAlertEntries] = (0,react.useState)([]);
  const wrappingDivRef = (0,react.useRef)(null);
  const {
    root
  } = (0,useGetDomRoot/* useGetDomRoot */.i)(domRoot, wrappingDivRef);
  const getDuration = entry => {
    var _entry$actions;
    if (entry.variant === "error") {
      return autoHideDuration.long;
    }
    if ((_entry$actions = entry.actions) !== null && _entry$actions !== void 0 && _entry$actions.length) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };
  const buildEntryWithVariant = (arg, variant) => {
    var _arg$content, _arg$duration;
    let closeTitle = closeButtonTitle;
    if (arg.closeButtonTitle) {
      closeTitle = arg.closeButtonTitle;
    }
    return {
      ...arg,
      variant: variant !== null && variant !== void 0 ? variant : arg.variant,
      id: (0,helper/* generateID */.ni)(15, (_arg$content = arg.content) !== null && _arg$content !== void 0 ? _arg$content : arg.title),
      duration: (_arg$duration = arg.duration) !== null && _arg$duration !== void 0 ? _arg$duration : getDuration(arg),
      closeButtonTitle: closeTitle
    };
  };
  const enqueueAlert = arg => {
    const newEntry = buildEntryWithVariant(arg);
    setAlertEntries(entries => [...entries, newEntry]);
  };
  const enqueueInfoAlert = arg => {
    const newEntry = buildEntryWithVariant(arg, "informative");
    setAlertEntries(entries => [...entries, newEntry]);
  };
  const enqueueSuccessAlert = arg => {
    const newEntry = buildEntryWithVariant(arg, "success");
    setAlertEntries(entries => [...entries, newEntry]);
  };
  const enqueueWarningAlert = arg => {
    const newEntry = buildEntryWithVariant(arg, "warning");
    setAlertEntries(entries => [...entries, newEntry]);
  };
  const enqueueErrorAlert = arg => {
    const newEntry = buildEntryWithVariant(arg, "error");
    setAlertEntries(entries => [...entries, newEntry]);
  };
  const setAlertHeight = (id, height) => {
    const newAlertsState = alertEntries.map(alertEntry => {
      if (alertEntry.id !== id) {
        return alertEntry;
      }
      return {
        ...alertEntry,
        height
      };
    });
    setAlertEntries(newAlertsState);
  };
  const removeEntry = entryId => {
    setAlertEntries(entries => {
      return entries.filter((entry, idx) => {
        if (idx < stackSize) {
          entries[idx] = {
            ...entries[idx],
            wasShown: true
          };
        }
        return entry.id !== entryId;
      });
    });
  };
  const renderAlertList = () => {
    return alertEntries.slice(0, stackSize).map(entry => /*#__PURE__*/react.createElement(AlertItem, AlertProvider_extends({}, entry, {
      key: "".concat(entry.id),
      onClose: () => {
        var _entry$onClose;
        removeEntry(entry.id);
        (_entry$onClose = entry.onClose) === null || _entry$onClose === void 0 || _entry$onClose.call(entry);
      }
    })));
  };
  const contextValue = (0,react.useMemo)(() => ({
    enqueueAlert,
    enqueueInfoAlert,
    enqueueSuccessAlert,
    enqueueErrorAlert,
    enqueueWarningAlert,
    setAlertHeight,
    alerts: alertEntries
  }), [enqueueAlert, enqueueInfoAlert, enqueueSuccessAlert, enqueueErrorAlert, enqueueWarningAlert, setAlertHeight, alertEntries]);
  return /*#__PURE__*/react.createElement(AlertProvider_AlertContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/react.createElement("div", {
    ref: wrappingDivRef
  }, /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(AlertContainer, {
    placement: placement,
    className: className
  }, renderAlertList()), root)));
};
try {
    // @ts-ignore
    AlertProvider.displayName = "AlertProvider";
    // @ts-ignore
    AlertProvider.__docgenInfo = { "description": "", "displayName": "AlertProvider", "props": { "closeButtonTitle": { "defaultValue": null, "description": "", "name": "closeButtonTitle", "required": true, "type": { "name": "string" } }, "placement": { "defaultValue": { value: "{ vertical: \"bottom\", horizontal: \"center\" }" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "stackSize": { "defaultValue": { value: "3" }, "description": "", "name": "stackSize", "required": false, "type": { "name": "number" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "autoHideDuration": { "defaultValue": { value: "{ long: 8000, short: 4000 }" }, "description": "", "name": "autoHideDuration", "required": false, "type": { "name": "Duration" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Alert/AlertProvider/AlertProvider.tsx#AlertProvider"] = { docgenInfo: AlertProvider.__docgenInfo, name: "AlertProvider", path: "src/components/Notifications/Alert/AlertProvider/AlertProvider.tsx#AlertProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Notifications/Alert/useAlert.ts
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



const useAlert = () => {
  const ctx = (0,react.useContext)(AlertProvider_AlertContext);
  return {
    enqueueAlert: ctx.enqueueAlert,
    enqueueInfoAlert: ctx.enqueueInfoAlert,
    enqueueSuccessAlert: ctx.enqueueSuccessAlert,
    enqueueWarningAlert: ctx.enqueueWarningAlert,
    enqueueErrorAlert: ctx.enqueueErrorAlert
  };
};
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/Alert/Alert.stories.tsx
function Alert_stories_extends() {
  Alert_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Alert_stories_extends.apply(this, arguments);
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
  title: "components/Feedback/Alert",
  component: AlertItem,
  parameters: {
    docs: {
      page: Alert
    }
  },
  argTypes: {
    emphasis: {
      options: EMPHASES,
      control: {
        type: "radio"
      }
    },
    variant: {
      options: VARIANTS,
      control: {
        type: "radio"
      }
    }
  }
};
const Content = args => {
  const {
    enqueueAlert
  } = useAlert();
  const handleTriggerAlert = () => {
    enqueueAlert({
      ...args
    });
  };
  return /*#__PURE__*/react.createElement(Button/* Button */.$, {
    "data-testid": "trigger-alert",
    onClick: handleTriggerAlert
  }, "Trigger alert");
};
const Template = args => {
  return /*#__PURE__*/react.createElement(AlertProvider, {
    closeButtonTitle: "close"
  }, /*#__PURE__*/react.createElement(Content, Alert_stories_extends({
    title: "Alert!"
  }, args)));
};
const Alert_stories_Alert = Template.bind({});
const renderAlerts = (title, variant) => /*#__PURE__*/react.createElement("div", {
  style: {
    margin: "1rem"
  }
}, /*#__PURE__*/react.createElement(AlertItem, {
  title: title,
  content: "Low emphasis",
  variant: variant,
  emphasis: "low",
  id: "".concat(variant, "-low")
}), /*#__PURE__*/react.createElement(AlertItem, {
  title: title,
  content: "Medium emphasis (default)",
  variant: variant,
  emphasis: "medium",
  id: "".concat(variant, "-medium")
}), /*#__PURE__*/react.createElement(AlertItem, {
  title: title,
  content: "High emphasis",
  variant: variant,
  emphasis: "high",
  id: "".concat(variant, "-high")
}));
const renderNeutrals = () => renderAlerts("Neutral", "neutral");
const renderInformative = () => renderAlerts("Informative", "informative");
const renderSuccesses = () => renderAlerts("Success", "success");
const renderWarnings = () => renderAlerts("Warning", "warning");
const renderErrors = () => renderAlerts("Error", "error");
const MultipleStatesTemplate = () => {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: "2rem"
    }
  }, renderNeutrals(), renderInformative(), renderErrors(), renderSuccesses(), renderWarnings());
};
const AlertVariants = MultipleStatesTemplate.bind({});
AlertVariants.parameters = {
  controls: {
    disable: true
  }
};
Alert_stories_Alert.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.ux)(canvasElement);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getByTestId("trigger-alert")).toBeInTheDocument());
  await testing_library_dist/* userEvent */.Q4.click(canvas.getByTestId("trigger-alert"));
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getByTestId("alert-container")).toBeVisible());
});
/* harmony default export */ const Alert_stories = (meta);
Alert_stories_Alert.parameters = {
  ...Alert_stories_Alert.parameters,
  docs: {
    ...Alert_stories_Alert.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <AlertProvider closeButtonTitle={\"close\"}>\n      <Content title={\"Alert!\"} {...args} />\n    </AlertProvider>;\n}",
      ...Alert_stories_Alert.parameters?.docs?.source
    }
  }
};
AlertVariants.parameters = {
  ...AlertVariants.parameters,
  docs: {
    ...AlertVariants.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <div style={{\n    display: \"flex\",\n    flexWrap: \"wrap\",\n    marginBottom: \"2rem\"\n  }}>\n      {renderNeutrals()}\n      {renderInformative()}\n      {renderErrors()}\n      {renderSuccesses()}\n      {renderWarnings()}\n    </div>;\n}",
      ...AlertVariants.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Alert","AlertVariants"];

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


const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Alert/AlertContainer/AlertContainer.module.scss":
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
 */.AlertContainer-module__sr-only--OsErc{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.AlertContainer-module__hidden--fmAbu{display:none}.AlertContainer-module__slide-in--ZHhmy{animation:AlertContainer-module__slide-in--ZHhmy .5s forwards}@media(prefers-reduced-motion: reduce){.AlertContainer-module__slide-in--ZHhmy{animation-duration:.1ms}}.AlertContainer-module__slide-out--ySWWa{animation:AlertContainer-module__slide-out--ySWWa .5s forwards}@media(prefers-reduced-motion: reduce){.AlertContainer-module__slide-out--ySWWa{animation-duration:.1ms}}@keyframes AlertContainer-module__slide-in--ZHhmy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes AlertContainer-module__slide-out--ySWWa{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.AlertContainer-module__alerts--pZlBq{position:fixed;z-index:20;width:100%;display:flex;flex-direction:column;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.AlertContainer-module__alerts--pZlBq{transition-duration:.1ms}}.AlertContainer-module__alerts--pZlBq.AlertContainer-module__bottom--a5l1f{bottom:3.5rem}.AlertContainer-module__alerts--pZlBq.AlertContainer-module__top--YBNzh{top:3.5rem}.AlertContainer-module__alerts--pZlBq.AlertContainer-module__start--GbOtD{left:0}.AlertContainer-module__alerts--pZlBq.AlertContainer-module__center--o927I{left:0}.AlertContainer-module__alerts--pZlBq.AlertContainer-module__end--OQvmH{right:0}@media only screen and (min-width: 37.5em){.AlertContainer-module__alerts--pZlBq{width:initial}.AlertContainer-module__alerts--pZlBq.AlertContainer-module__center--o927I{left:calc(50% - 18.75rem)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `AlertContainer-module__sr-only--OsErc`,
	"hidden": `AlertContainer-module__hidden--fmAbu`,
	"slide-in": `AlertContainer-module__slide-in--ZHhmy`,
	"slide-out": `AlertContainer-module__slide-out--ySWWa`,
	"alerts": `AlertContainer-module__alerts--pZlBq`,
	"bottom": `AlertContainer-module__bottom--a5l1f`,
	"top": `AlertContainer-module__top--YBNzh`,
	"start": `AlertContainer-module__start--GbOtD`,
	"center": `AlertContainer-module__center--o927I`,
	"end": `AlertContainer-module__end--OQvmH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Alert/AlertItem/AlertItem.module.scss":
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
 */.AlertItem-module__sr-only--pEyee{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.AlertItem-module__hidden--SP0sb{display:none}.AlertItem-module__slide-in--HXxDr{animation:AlertItem-module__slide-in--HXxDr .5s forwards}@media(prefers-reduced-motion: reduce){.AlertItem-module__slide-in--HXxDr{animation-duration:.1ms}}.AlertItem-module__slide-out--Cxout{animation:AlertItem-module__slide-out--Cxout .5s forwards}@media(prefers-reduced-motion: reduce){.AlertItem-module__slide-out--Cxout{animation-duration:.1ms}}@keyframes AlertItem-module__slide-in--HXxDr{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes AlertItem-module__slide-out--Cxout{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.AlertItem-module__alert--Dh2HA{padding:1rem .875rem;border-radius:var(--alert-border-radius);display:flex;gap:.5rem;align-items:center;width:100%;box-sizing:border-box;flex-grow:0}.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE{background-color:var(--alert-neutral-background-color);border-radius:var(--alert-border-radius)}.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-low--uM7Jw{color:unset}.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-medium--uAMMz{border-style:none none none solid;border-width:var(--alert-border-width);border-color:var(--alert-neutral-inverted-color);padding-left:calc(1rem - var(--alert-border-width))}.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-high--LkaEm{background-color:var(--alert-neutral-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-high--LkaEm .AlertItem-module__content--T2vdb,.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-high--LkaEm .AlertItem-module__title--dk42Q,.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-high--LkaEm .AlertItem-module__close-btn--ajaHo,.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-high--LkaEm .AlertItem-module__icon--ZAGpt,.AlertItem-module__alert--Dh2HA.AlertItem-module__neutral--B6vPE.AlertItem-module__emph-high--LkaEm .AlertItem-module__action-button--OjsYU{color:var(--alert-text-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx{background-color:var(--alert-info-background-color);border-radius:var(--alert-border-radius)}.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-low--uM7Jw{color:unset}.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-medium--uAMMz{border-style:none none none solid;border-width:var(--alert-border-width);border-color:var(--alert-info-inverted-color);padding-left:calc(1rem - var(--alert-border-width))}.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-high--LkaEm{background-color:var(--alert-info-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-high--LkaEm .AlertItem-module__content--T2vdb,.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-high--LkaEm .AlertItem-module__title--dk42Q,.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-high--LkaEm .AlertItem-module__close-btn--ajaHo,.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-high--LkaEm .AlertItem-module__icon--ZAGpt,.AlertItem-module__alert--Dh2HA.AlertItem-module__informative--w8Ihx.AlertItem-module__emph-high--LkaEm .AlertItem-module__action-button--OjsYU{color:var(--alert-text-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB{background-color:var(--alert-success-background-color);border-radius:var(--alert-border-radius)}.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-low--uM7Jw .AlertItem-module__icon--ZAGpt{color:var(--alert-success-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-medium--uAMMz{border-style:none none none solid;border-width:var(--alert-border-width);border-color:var(--alert-success-inverted-color);padding-left:calc(1rem - var(--alert-border-width))}.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-medium--uAMMz .AlertItem-module__icon--ZAGpt{color:var(--alert-success-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-high--LkaEm{background-color:var(--alert-success-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-high--LkaEm .AlertItem-module__content--T2vdb,.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-high--LkaEm .AlertItem-module__title--dk42Q,.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-high--LkaEm .AlertItem-module__close-btn--ajaHo,.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-high--LkaEm .AlertItem-module__icon--ZAGpt,.AlertItem-module__alert--Dh2HA.AlertItem-module__success--QsnuB.AlertItem-module__emph-high--LkaEm .AlertItem-module__action-button--OjsYU{color:var(--alert-text-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9{background-color:var(--alert-warning-background-color);border-radius:var(--alert-border-radius)}.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-low--uM7Jw .AlertItem-module__icon--ZAGpt{color:var(--alert-warning-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-medium--uAMMz{border-style:none none none solid;border-width:var(--alert-border-width);border-color:var(--alert-warning-inverted-color);padding-left:calc(1rem - var(--alert-border-width))}.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-medium--uAMMz .AlertItem-module__icon--ZAGpt{color:var(--alert-warning-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-high--LkaEm{background-color:var(--alert-warning-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-high--LkaEm .AlertItem-module__content--T2vdb,.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-high--LkaEm .AlertItem-module__title--dk42Q,.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-high--LkaEm .AlertItem-module__close-btn--ajaHo,.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-high--LkaEm .AlertItem-module__icon--ZAGpt,.AlertItem-module__alert--Dh2HA.AlertItem-module__warning--drhf9.AlertItem-module__emph-high--LkaEm .AlertItem-module__action-button--OjsYU{color:var(--alert-text-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2{background-color:var(--alert-error-background-color);border-radius:var(--alert-border-radius)}.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-low--uM7Jw .AlertItem-module__icon--ZAGpt{color:var(--alert-error-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-medium--uAMMz{border-style:none none none solid;border-width:var(--alert-border-width);border-color:var(--alert-error-inverted-color);padding-left:calc(1rem - var(--alert-border-width))}.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-medium--uAMMz .AlertItem-module__icon--ZAGpt{color:var(--alert-error-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-high--LkaEm{background-color:var(--alert-error-inverted-color)}.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-high--LkaEm .AlertItem-module__content--T2vdb,.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-high--LkaEm .AlertItem-module__title--dk42Q,.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-high--LkaEm .AlertItem-module__close-btn--ajaHo,.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-high--LkaEm .AlertItem-module__icon--ZAGpt,.AlertItem-module__alert--Dh2HA.AlertItem-module__error--YEmn2.AlertItem-module__emph-high--LkaEm .AlertItem-module__action-button--OjsYU{color:var(--alert-text-inverted-color)}.AlertItem-module__alert--Dh2HA+.AlertItem-module__alert--Dh2HA{margin-top:.5rem}.AlertItem-module__alert--Dh2HA .AlertItem-module__close-btn--ajaHo{color:var(--alert-text-color);align-self:center;width:2.5rem;height:2.5rem;margin:-0.5rem 0;flex-shrink:0;border:0}.AlertItem-module__alert--Dh2HA .AlertItem-module__close-btn--ajaHo span{font-size:.875rem}.AlertItem-module__alert--Dh2HA .AlertItem-module__close-btn--ajaHo:not(:disabled):hover,.AlertItem-module__alert--Dh2HA .AlertItem-module__close-btn--ajaHo:not(:disabled):focus{background-color:var(--color-black10)}.AlertItem-module__alert--Dh2HA .AlertItem-module__close-btn--ajaHo:not(:disabled):active{background-color:var(--color-black20)}.AlertItem-module__alert--Dh2HA .AlertItem-module__icon--ZAGpt{color:var(--alert-text-color);font-size:1rem;height:1.25rem;display:inline-flex;align-items:center;align-self:flex-start}.AlertItem-module__alert--Dh2HA .AlertItem-module__title--dk42Q{color:var(--alert-text-color);flex:1;font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:block}.AlertItem-module__alert--Dh2HA .AlertItem-module__outer-content-wrapper--otTT7{display:flex;gap:.5rem;flex-grow:1}.AlertItem-module__alert--Dh2HA .AlertItem-module__content-wrapper--CYO4X{flex-grow:1;padding-left:.125rem}.AlertItem-module__alert--Dh2HA .AlertItem-module__content--T2vdb{color:var(--alert-text-color);font-size:.875rem;line-height:1.25rem;margin-bottom:0}.AlertItem-module__alert--Dh2HA .AlertItem-module__actions--Xuaxn{text-align:right;align-self:center}.AlertItem-module__alert--Dh2HA .AlertItem-module__action-button--OjsYU{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);white-space:nowrap;font-size:.875rem;line-height:var(--button-font-size);font-weight:400;margin:-0.5rem 0;padding:.625rem 1.25rem;cursor:pointer;transition:color,background-color,border-color .2s ease-in-out;font-family:var(--font-family);color:var(--alert-text-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.AlertItem-module__alert--Dh2HA .AlertItem-module__action-button--OjsYU:disabled{color:var(--greyed-out);cursor:not-allowed}.AlertItem-module__alert--Dh2HA .AlertItem-module__action-button--OjsYU:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:.125rem;border-radius:var(--focus-border-radius)}.AlertItem-module__alert--Dh2HA .AlertItem-module__action-button--OjsYU:not(:disabled):hover,.AlertItem-module__alert--Dh2HA .AlertItem-module__action-button--OjsYU:not(:disabled):focus{background-color:var(--color-black10)}.AlertItem-module__alert--Dh2HA .AlertItem-module__action-button--OjsYU:not(:disabled):active{background-color:var(--color-black20)}@media only screen and (min-width: 37.5em){.AlertItem-module__alert--Dh2HA{width:min-content;min-width:25rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `AlertItem-module__sr-only--pEyee`,
	"hidden": `AlertItem-module__hidden--SP0sb`,
	"slide-in": `AlertItem-module__slide-in--HXxDr`,
	"slide-out": `AlertItem-module__slide-out--Cxout`,
	"alert": `AlertItem-module__alert--Dh2HA`,
	"neutral": `AlertItem-module__neutral--B6vPE`,
	"emph-low": `AlertItem-module__emph-low--uM7Jw`,
	"emph-medium": `AlertItem-module__emph-medium--uAMMz`,
	"emph-high": `AlertItem-module__emph-high--LkaEm`,
	"content": `AlertItem-module__content--T2vdb`,
	"title": `AlertItem-module__title--dk42Q`,
	"close-btn": `AlertItem-module__close-btn--ajaHo`,
	"icon": `AlertItem-module__icon--ZAGpt`,
	"action-button": `AlertItem-module__action-button--OjsYU`,
	"informative": `AlertItem-module__informative--w8Ihx`,
	"success": `AlertItem-module__success--QsnuB`,
	"warning": `AlertItem-module__warning--drhf9`,
	"error": `AlertItem-module__error--YEmn2`,
	"outer-content-wrapper": `AlertItem-module__outer-content-wrapper--otTT7`,
	"content-wrapper": `AlertItem-module__content-wrapper--CYO4X`,
	"actions": `AlertItem-module__actions--Xuaxn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);