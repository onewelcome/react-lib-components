"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[6529],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorSnackbar: () => (/* binding */ ErrorSnackbar),
  Snackbar: () => (/* binding */ Snackbar_stories_Snackbar),
  SnackbarWithTitle: () => (/* binding */ SnackbarWithTitle),
  SuccessSnackbar: () => (/* binding */ SuccessSnackbar),
  WarningSnackbar: () => (/* binding */ WarningSnackbar),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Snackbar_stories)
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



/**
 * @deprecated
 */

/**
 * @deprecated
 */
const SnackbarContext = /*#__PURE__*/(0,react.createContext)({
  enqueueSnackbar: () => null,
  enqueueSuccessSnackbar: () => null,
  enqueueErrorSnackbar: () => null,
  enqueueWarningSnackbar: () => null,
  setSnackbarHeight: () => null,
  snackbars: []
});
/**
 * @deprecated
 */
const SnackbarContextProvider = _ref => {
  let {
    children,
    initialState
  } = _ref;
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
try {
    // @ts-ignore
    Context.displayName = "Context";
    // @ts-ignore
    Context.__docgenInfo = { "description": "Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}", "displayName": "Context", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx#Context"] = { docgenInfo: Context.__docgenInfo, name: "Context", path: "src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx#Context" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/interfaces.ts
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
 * @deprecated
 */

/**
 * @deprecated
 */

/**
 * @deprecated
 */

/**
 * @deprecated
 */

/**
 * @deprecated
 */

/**
 * @deprecated
 */
function isNewEnqueueSnackbarInterface(args) {
  return args !== null && typeof args === "object" && ("title" in args || "content" in args);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss
var SnackbarContainer_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SnackbarContainer_module/* default */.A, options);




       /* harmony default export */ const SnackbarContainer_SnackbarContainer_module = (SnackbarContainer_module/* default */.A && SnackbarContainer_module/* default */.A.locals ? SnackbarContainer_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx
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





/**
 * @deprecated
 */

/**
 * @deprecated
 */

const useSnackbarContainerHeightAnimation = () => {
  const {
    snackbars
  } = (0,react.useContext)(SnackbarContext);
  const [height, setHeight] = (0,react.useState)(0);
  const [justifyContent, setJustifyContent] = (0,react.useState)("flex-start");
  const spaceBetweenSnackbars = 8;
  const exceedsMaximumVisibleSnackbars = snackbars.length >= 3;
  (0,react.useEffect)(() => {
    const allHeights = snackbars.map(snackbar => snackbar.height);
    let totalHeight = allHeights.reduce((prev, curr) => prev + curr, 0);
    totalHeight += (Math.min(snackbars.length, 3) - 1) * spaceBetweenSnackbars;

    /**
     * Once we reach the maximum amount of snackbars, they will start to disappear. We have to wait with reversing the justify-content until the last snackbar
     * has completed their animationIn. This is around 500ms. Then we want to reverse it, because otherwise whenever a snackbar disappears they shift up
     * and then down again, which looks really bad.
     * */
    if (exceedsMaximumVisibleSnackbars) setTimeout(() => {
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
    height,
    justifyContent
  };
};

/**
 * @deprecated
 */
const SnackbarContainer = _ref => {
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
  } = useSnackbarContainerHeightAnimation();
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    style: {
      zIndex,
      height,
      justifyContent
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss
var SnackbarItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss

      
      
      
      
      
      
      
      
      

var SnackbarItem_module_options = {};

SnackbarItem_module_options.styleTagTransform = (styleTagTransform_default());
SnackbarItem_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SnackbarItem_module_options.insert = insertBySelector_default().bind(null, "head");
    
SnackbarItem_module_options.domAPI = (styleDomAPI_default());
SnackbarItem_module_options.insertStyleElement = (insertStyleElement_default());

var SnackbarItem_module_update = injectStylesIntoStyleTag_default()(SnackbarItem_module/* default */.A, SnackbarItem_module_options);




       /* harmony default export */ const SnackbarItem_SnackbarItem_module = (SnackbarItem_module/* default */.A && SnackbarItem_module/* default */.A.locals ? SnackbarItem_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/hooks/useAnimation.ts
var useAnimation = __webpack_require__("./src/hooks/useAnimation.ts");
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









const textColor = "var(--snackbar-text-color)";

/**
 * @deprecated
 */

const useRegisterSnackbarHeight = (singleSnackbarRef, snackbarId) => {
  const ctx = (0,react.useContext)(SnackbarContext);
  (0,react.useEffect)(() => {
    if (singleSnackbarRef.current) {
      ctx.setSnackbarHeight(snackbarId, singleSnackbarRef.current.getBoundingClientRect().height);
    }
  }, [singleSnackbarRef.current]);
};

/**
 * @deprecated
 */
const SnackbarItem = _ref => {
  let {
    id,
    title,
    duration,
    variant,
    content,
    className,
    actions = [],
    onClose,
    closeButtonTitle
  } = _ref;
  const timerHandler = (0,react.useRef)();
  const onAnimationEnd = () => onClose(id);
  const {
    ref,
    animationStarted,
    startAnimation
  } = (0,useAnimation/* useAnimation */.s)(onAnimationEnd);
  const hasOnlyTitle = !content && !!title;
  const renderTitle = title && !hasOnlyTitle;
  const renderContentOrTitleOnly = content || hasOnlyTitle;
  useRegisterSnackbarHeight(ref, id);
  (0,react.useEffect)(() => {
    timerHandler.current = setTimeout(() => startAnimation(), duration);
    return () => {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);
  const onMouseEnter = () => {
    timerHandler.current && clearTimeout(timerHandler.current);
  };
  const onMouseLeave = () => {
    timerHandler.current = setTimeout(() => startAnimation(), duration);
  };
  const getVariantIcon = () => {
    if (variant === "error") {
      return Icon/* Icons */.F.Error;
    }
    if (variant === "warning") {
      return Icon/* Icons */.F.Warning;
    }
    return variant === "success" ? Icon/* Icons */.F.CheckmarkCircleAlt : Icon/* Icons */.F.InfoCircle;
  };
  const actionButtons = actions.map((actionProp, index) => /*#__PURE__*/react.createElement("button", SnackbarItem_extends({
    key: index
  }, actionProp, {
    onClick: e => {
      var _actionProp$onClick;
      onClose(id);
      (_actionProp$onClick = actionProp.onClick) === null || _actionProp$onClick === void 0 || _actionProp$onClick.call(actionProp, e);
    },
    className: SnackbarItem_SnackbarItem_module["action-button"]
  }), actionProp.label));
  const snackbarClasses = [SnackbarItem_SnackbarItem_module["snackbar"], SnackbarItem_SnackbarItem_module[variant], animationStarted ? readyclasses_module/* default */.A["slide-out"] : readyclasses_module/* default */.A["slide-in"], className !== null && className !== void 0 ? className : ""].join(" ");
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    "aria-live": "polite",
    className: snackbarClasses,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module["outer-content-wrapper"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: getVariantIcon(),
    className: SnackbarItem_SnackbarItem_module["icon"]
  }), /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module["content-wrapper"]
  }, renderTitle && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: SnackbarItem_SnackbarItem_module["title"],
    variant: "body-bold",
    tag: "span"
  }, title), renderContentOrTitleOnly && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: SnackbarItem_SnackbarItem_module["content"],
    variant: "body"
  }, hasOnlyTitle ? title : content))), actionButtons.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module["actions"]
  }, actionButtons), /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    id: SnackbarItem_SnackbarItem_module["close-btn"],
    onClick: () => startAnimation(),
    title: closeButtonTitle
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.Times,
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

/**
 * @deprecated
 */

/**
 * @deprecated
 */

/**
 * @deprecated
 */
const SnackbarProvider = function () {
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
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    closeButtonTitle: ""
  };
  const [snackbars, setSnackbars] = (0,react.useState)([]);
  const wrappingDivRef = (0,react.useRef)(null);
  const {
    root
  } = (0,useGetDomRoot/* useGetDomRoot */.i)(domRoot, wrappingDivRef);
  const addSnackbar = item => {
    setSnackbars(items => [...items, item]);
  };
  const setSnackbarHeight = (id, height) => {
    const newSnackbarsState = snackbars.map(snackbar => {
      if (snackbar.id !== id) {
        return snackbar;
      }
      return {
        ...snackbar,
        height
      };
    });
    setSnackbars(newSnackbarsState);
  };
  const getDuration = (variant, actions, content) => {
    const hasError = variant === "error";
    const hasContentOrActions = content !== null && content !== void 0 ? content : actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };
  const enqueueSnackbar = function (propsOrTitle, content) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    const {
      variant = "info",
      actions,
      duration = getDuration(variant, actions, props.content),
      onClose
    } = props;
    const item = {
      title: props.title,
      content: props.content,
      variant,
      className: props.className,
      actions,
      duration,
      height: 0,
      id: (0,helper/* generateID */.ni)(15, props.title),
      onClose
    };
    addSnackbar(item);
  };
  const mapToNewInterface = function (title, content) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return {
      title,
      content,
      ...options
    };
  };
  const enqueueSuccessSnackbar = function (propsOrTitle, content) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar({
      ...props,
      variant: "success"
    });
  };
  const enqueueErrorSnackbar = function (propsOrTitle, content) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar({
      ...props,
      variant: "error"
    });
  };
  const enqueueWarningSnackbar = function (propsOrTitle, content) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar({
      ...props,
      variant: "warning"
    });
  };
  const onItemClosed = id => {
    setSnackbars(items => [...items].filter(item => item.id !== id));
  };
  const snackbarList = snackbars.map((item, index) => index < stackSize ? /*#__PURE__*/react.createElement(SnackbarItem, SnackbarProvider_extends({}, item, {
    key: item.id,
    className: item.className,
    onClose: () => {
      var _item$onClose;
      onItemClosed(item.id);
      (_item$onClose = item.onClose) === null || _item$onClose === void 0 || _item$onClose.call(item);
    },
    closeButtonTitle: closeButtonTitle
  })) : null);
  const snackbarPortal = /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(SnackbarContainer, {
    placement: placement,
    className: className
  }, snackbarList), root);
  return /*#__PURE__*/react.createElement(SnackbarContextProvider, {
    initialState: {
      enqueueSnackbar,
      enqueueSuccessSnackbar,
      enqueueErrorSnackbar,
      enqueueWarningSnackbar,
      setSnackbarHeight,
      snackbars
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




/**
 * @deprecated
 */
const useSnackbar = () => {
  const ctx = (0,react.useContext)(SnackbarContext);
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
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
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
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      story: dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Snackbar = (MDXContent);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/Notifications/Snackbar/Stories.module.scss
var Stories_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/Notifications/Snackbar/Stories.module.scss");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Stories.module.scss

      
      
      
      
      
      
      
      
      

var Stories_module_options = {};

Stories_module_options.styleTagTransform = (styleTagTransform_default());
Stories_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Stories_module_options.insert = insertBySelector_default().bind(null, "head");
    
Stories_module_options.domAPI = (styleDomAPI_default());
Stories_module_options.insertStyleElement = (insertStyleElement_default());

var Stories_module_update = injectStylesIntoStyleTag_default()(Stories_module/* default */.A, Stories_module_options);




       /* harmony default export */ const Snackbar_Stories_module = (Stories_module/* default */.A && Stories_module/* default */.A.locals ? Stories_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Snackbar.stories.tsx
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
const meta = {
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
/* harmony default export */ const Snackbar_stories = (meta);
const AppContent = () => {
  const {
    enqueueSnackbar
  } = useSnackbar();
  (0,react.useEffect)(() => {
    enqueueSnackbar({
      content: "Main message of the snackbar",
      actions: [{
        label: "Contact support",
        onClick: () => alert("Clicked support")
      }],
      onClose: () => console.warn("onClose handler"),
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
const Template = () => {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(AppContent, null));
};
const Snackbar_stories_Snackbar = Template.bind({});
const ErrorSnackbarAppContent = () => {
  const {
    enqueueErrorSnackbar
  } = useSnackbar();
  (0,react.useEffect)(() => {
    enqueueErrorSnackbar({
      content: "Alert message.",
      actions: [{
        label: "Action",
        onClick: () => alert("Clicked support")
      }],
      onClose: () => console.warn("onClose handler"),
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
const ErrorSnackbarTemplate = () => {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(ErrorSnackbarAppContent, null));
};
const ErrorSnackbar = ErrorSnackbarTemplate.bind({});
const SnackbarWithTitleAppContent = () => {
  const {
    enqueueSnackbar
  } = useSnackbar();
  (0,react.useEffect)(() => {
    enqueueSnackbar({
      title: "This is a title",
      content: "Phasellus eleifend cursus vehicula. Pellentesque ut sem in elit pulvinar luctus.",
      actions: [{
        label: "Action",
        onClick: () => alert("Clicked support")
      }],
      onClose: () => console.warn("onClose handler"),
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
const SnackbarWithTitleTemplate = () => {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(SnackbarWithTitleAppContent, null));
};
const SnackbarWithTitle = SnackbarWithTitleTemplate.bind({});
const SuccessSnackbarAppContent = () => {
  const {
    enqueueSuccessSnackbar
  } = useSnackbar();
  (0,react.useEffect)(() => {
    enqueueSuccessSnackbar({
      content: "Alert message.",
      actions: [{
        label: "Action",
        onClick: () => alert("Clicked support")
      }],
      onClose: () => console.warn("onClose handler"),
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
const SuccessSnackbarTemplate = () => {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(SuccessSnackbarAppContent, null));
};
const SuccessSnackbar = SuccessSnackbarTemplate.bind({});
const WarningSnackbarAppContent = () => {
  const {
    enqueueWarningSnackbar
  } = useSnackbar();
  (0,react.useEffect)(() => {
    enqueueWarningSnackbar({
      content: "Alert message.",
      actions: [{
        label: "Action",
        onClick: () => alert("Clicked support")
      }],
      onClose: () => console.warn("onClose handler"),
      duration: 200000,
      className: Snackbar_Stories_module["remove-animation"]
    });
  }, []);
  return null;
};
const WarningSnackbarTemplate = () => {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(WarningSnackbarAppContent, null));
};
const WarningSnackbar = WarningSnackbarTemplate.bind({});
Snackbar_stories_Snackbar.parameters = {
  ...Snackbar_stories_Snackbar.parameters,
  docs: {
    ...Snackbar_stories_Snackbar.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <AppContent />\n    </SnackbarProvider>;\n}",
      ...Snackbar_stories_Snackbar.parameters?.docs?.source
    }
  }
};
ErrorSnackbar.parameters = {
  ...ErrorSnackbar.parameters,
  docs: {
    ...ErrorSnackbar.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <ErrorSnackbarAppContent />\n    </SnackbarProvider>;\n}",
      ...ErrorSnackbar.parameters?.docs?.source
    }
  }
};
SnackbarWithTitle.parameters = {
  ...SnackbarWithTitle.parameters,
  docs: {
    ...SnackbarWithTitle.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <SnackbarWithTitleAppContent />\n    </SnackbarProvider>;\n}",
      ...SnackbarWithTitle.parameters?.docs?.source
    }
  }
};
SuccessSnackbar.parameters = {
  ...SuccessSnackbar.parameters,
  docs: {
    ...SuccessSnackbar.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <SuccessSnackbarAppContent />\n    </SnackbarProvider>;\n}",
      ...SuccessSnackbar.parameters?.docs?.source
    }
  }
};
WarningSnackbar.parameters = {
  ...WarningSnackbar.parameters,
  docs: {
    ...WarningSnackbar.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <WarningSnackbarAppContent />\n    </SnackbarProvider>;\n}",
      ...WarningSnackbar.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Snackbar","ErrorSnackbar","SnackbarWithTitle","SuccessSnackbar","WarningSnackbar"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
 */.SnackbarContainer-module__sr-only--iXUBF{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SnackbarContainer-module__hidden--azVvn{display:none}.SnackbarContainer-module__slide-in--zCzA9{animation:SnackbarContainer-module__slide-in--zCzA9 .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__slide-in--zCzA9{animation-duration:.1ms}}.SnackbarContainer-module__slide-out--QClYD{animation:SnackbarContainer-module__slide-out--QClYD .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__slide-out--QClYD{animation-duration:.1ms}}@keyframes SnackbarContainer-module__slide-in--zCzA9{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SnackbarContainer-module__slide-out--QClYD{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.SnackbarContainer-module__snackbars--tc0QC{position:fixed;z-index:20;width:100%;display:flex;flex-direction:column;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__snackbars--tc0QC{transition-duration:.1ms}}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__bottom--AGi7f{bottom:3.5rem}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__top--QRjr4{top:3.5rem}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__start--n7LOy{left:0}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__center--N7Azo{left:0}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__end--J5Asy{right:0}@media only screen and (min-width: 37.5em){.SnackbarContainer-module__snackbars--tc0QC{width:initial}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__center--N7Azo{left:calc(50% - 18.75rem)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `SnackbarContainer-module__sr-only--iXUBF`,
	"hidden": `SnackbarContainer-module__hidden--azVvn`,
	"slide-in": `SnackbarContainer-module__slide-in--zCzA9`,
	"slide-out": `SnackbarContainer-module__slide-out--QClYD`,
	"snackbars": `SnackbarContainer-module__snackbars--tc0QC`,
	"bottom": `SnackbarContainer-module__bottom--AGi7f`,
	"top": `SnackbarContainer-module__top--QRjr4`,
	"start": `SnackbarContainer-module__start--n7LOy`,
	"center": `SnackbarContainer-module__center--N7Azo`,
	"end": `SnackbarContainer-module__end--J5Asy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
 */.SnackbarItem-module__sr-only--eZ1bg{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SnackbarItem-module__hidden--V8va5{display:none}.SnackbarItem-module__slide-in--qUDHP{animation:SnackbarItem-module__slide-in--qUDHP .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__slide-in--qUDHP{animation-duration:.1ms}}.SnackbarItem-module__slide-out--c2p0v{animation:SnackbarItem-module__slide-out--c2p0v .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__slide-out--c2p0v{animation-duration:.1ms}}@keyframes SnackbarItem-module__slide-in--qUDHP{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SnackbarItem-module__slide-out--c2p0v{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.SnackbarItem-module__snackbar--dcufU{padding:1rem;border-radius:var(--snackbar-border-radius);display:flex;gap:.5rem;align-items:center;width:100%;box-sizing:border-box;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out;flex-grow:0}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__snackbar--dcufU{transition-duration:.1ms}}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__info--CSCWu{background-color:var(--snackbar-info-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__success--gEUUJ{background-color:var(--snackbar-success-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__error--T63Uq{background-color:var(--snackbar-error-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__warning--gKofO{background-color:var(--snackbar-warning-background-color)}.SnackbarItem-module__snackbar--dcufU+.SnackbarItem-module__snackbar--dcufU{margin-top:.5rem}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH{color:var(--snackbar-text-color);align-self:center;width:2.5rem;height:2.5rem;margin:-0.5rem 0;flex-shrink:0;border:0}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH span{font-size:.875rem}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:not(:disabled):hover,.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:not(:disabled):focus{background-color:var(--color-black10)}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:not(:disabled):active{background-color:var(--color-black20)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__icon--azl89{color:var(--snackbar-text-color);font-size:1rem;height:1.25rem;display:inline-flex;align-items:center;align-self:flex-start}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__title--BTBlp{color:var(--snackbar-text-color);flex:1;font-size:.875rem;line-height:1.25rem;margin-bottom:.25rem;display:block}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__outer-content-wrapper--AsbQD{display:flex;gap:.5rem;flex-grow:1}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__content-wrapper--lxYmX{flex-grow:1}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__content--_ubCv{color:var(--snackbar-text-color);font-size:.875rem;line-height:1.25rem;margin-bottom:0}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__actions--S1N_9{text-align:right;align-self:center}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);white-space:nowrap;font-size:.875rem;line-height:var(--button-font-size);font-weight:400;margin:-0.5rem 0;padding:.625rem 1.25rem;cursor:pointer;transition:color,background-color,border-color .2s ease-in-out;font-family:var(--font-family);color:var(--snackbar-text-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:disabled{color:var(--greyed-out);cursor:not-allowed}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:.125rem;border-radius:var(--focus-border-radius)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):hover,.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):focus{background-color:var(--color-black10)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):active{background-color:var(--color-black20)}@media only screen and (min-width: 37.5em){.SnackbarItem-module__snackbar--dcufU{width:min-content;min-width:25rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `SnackbarItem-module__sr-only--eZ1bg`,
	"hidden": `SnackbarItem-module__hidden--V8va5`,
	"slide-in": `SnackbarItem-module__slide-in--qUDHP`,
	"slide-out": `SnackbarItem-module__slide-out--c2p0v`,
	"snackbar": `SnackbarItem-module__snackbar--dcufU`,
	"info": `SnackbarItem-module__info--CSCWu`,
	"success": `SnackbarItem-module__success--gEUUJ`,
	"error": `SnackbarItem-module__error--T63Uq`,
	"warning": `SnackbarItem-module__warning--gKofO`,
	"close-btn": `SnackbarItem-module__close-btn--VlPbH`,
	"icon": `SnackbarItem-module__icon--azl89`,
	"title": `SnackbarItem-module__title--BTBlp`,
	"outer-content-wrapper": `SnackbarItem-module__outer-content-wrapper--AsbQD`,
	"content-wrapper": `SnackbarItem-module__content-wrapper--lxYmX`,
	"content": `SnackbarItem-module__content--_ubCv`,
	"actions": `SnackbarItem-module__actions--S1N_9`,
	"action-button": `SnackbarItem-module__action-button--FX3PH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/Notifications/Snackbar/Stories.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.Stories-module__remove-animation--deemW{animation-duration:0s}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"remove-animation": `Stories-module__remove-animation--deemW`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);