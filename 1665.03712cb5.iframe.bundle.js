(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1665],{

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ conditionalPlay)
/* harmony export */ });
/* harmony import */ var chromatic_isChromatic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/chromatic/isChromatic.mjs");
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
  if ((0,chromatic_isChromatic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() || isDevMode) {
    return async context => {
      await playFunction(context);
    };
  }
  return async () => {};
};

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ BaseModalActions)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss
var BaseModalActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalActions_module/* default */.A, options);




       /* harmony default export */ const BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.A && BaseModalActions_module/* default */.A.locals ? BaseModalActions_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
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




const BaseModalActionsComponent = (_ref, ref) => {
  let {
    children,
    cancelAction,
    cancelActionsClassName = "",
    onClose,
    className = "",
    ...rest
  } = _ref;
  const innerRef = /*#__PURE__*/react.createRef() || ref;
  const cancelButtonRef = (0,react.useRef)(null);
  const primaryActionsRef = (0,react.useRef)(null);
  const cancelButton = /*#__PURE__*/react.createElement(Button/* Button */.$, _extends({
    variant: "text",
    color: "default"
  }, cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.cancelButtonProps, {
    onClick: onClose
  }), cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.label);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: innerRef,
    className: "".concat(BaseModalActions_BaseModalActions_module["actions"], " ").concat(className)
  }), cancelAction && onClose && /*#__PURE__*/react.createElement("div", {
    className: "".concat(BaseModalActions_BaseModalActions_module["cancel-action"], " ").concat(cancelActionsClassName),
    ref: cancelButtonRef
  }, cancelButton), children && /*#__PURE__*/react.createElement("div", {
    ref: primaryActionsRef,
    className: BaseModalActions_BaseModalActions_module["primary-actions"]
  }, children));
};
const BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
try {
    // @ts-ignore
    BaseModalActions.displayName = "BaseModalActions";
    // @ts-ignore
    BaseModalActions.__docgenInfo = { "description": "", "displayName": "BaseModalActions", "props": { "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "cancelAction": { "defaultValue": null, "description": "", "name": "cancelAction", "required": false, "type": { "name": "CancelAction" } }, "cancelActionsClassName": { "defaultValue": { value: "" }, "description": "", "name": "cancelActionsClassName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions"] = { docgenInfo: BaseModalActions.__docgenInfo, name: "BaseModalActions", path: "src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/Dialog/Dialog.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Dialog)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 1 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss
var DialogActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DialogActions_module/* default */.A, options);




       /* harmony default export */ const DialogActions_DialogActions_module = (DialogActions_module/* default */.A && DialogActions_module/* default */.A.locals ? DialogActions_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogActions/DialogActions.tsx
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




const DialogActionsComponent = (_ref, ref) => {
  let {
    children,
    cancelAction,
    onClose,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.q, _extends({}, rest, {
    cancelAction: cancelAction,
    cancelActionsClassName: DialogActions_DialogActions_module["cancel-action"],
    onClose: onClose,
    ref: ref,
    className: DialogActions_DialogActions_module["actions"]
  }), children);
};
const DialogActions = /*#__PURE__*/react.forwardRef(DialogActionsComponent);
try {
    // @ts-ignore
    DialogActions.displayName = "DialogActions";
    // @ts-ignore
    DialogActions.__docgenInfo = { "description": "", "displayName": "DialogActions", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Dialog/DialogActions/DialogActions.tsx#DialogActions"] = { docgenInfo: DialogActions.__docgenInfo, name: "DialogActions", path: "src/components/Notifications/Dialog/DialogActions/DialogActions.tsx#DialogActions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/Dialog.module.scss
var Dialog_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/Dialog.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/Dialog.module.scss

      
      
      
      
      
      
      
      
      

var Dialog_module_options = {};

Dialog_module_options.styleTagTransform = (styleTagTransform_default());
Dialog_module_options.setAttributes = (setAttributesWithoutAttributes_default());
Dialog_module_options.insert = insertBySelector_default().bind(null, "head");
Dialog_module_options.domAPI = (styleDomAPI_default());
Dialog_module_options.insertStyleElement = (insertStyleElement_default());

var Dialog_module_update = injectStylesIntoStyleTag_default()(Dialog_module/* default */.A, Dialog_module_options);




       /* harmony default export */ const Dialog_Dialog_module = (Dialog_module/* default */.A && Dialog_module/* default */.A.locals ? Dialog_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss
var DialogTitle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss

      
      
      
      
      
      
      
      
      

var DialogTitle_module_options = {};

DialogTitle_module_options.styleTagTransform = (styleTagTransform_default());
DialogTitle_module_options.setAttributes = (setAttributesWithoutAttributes_default());
DialogTitle_module_options.insert = insertBySelector_default().bind(null, "head");
DialogTitle_module_options.domAPI = (styleDomAPI_default());
DialogTitle_module_options.insertStyleElement = (insertStyleElement_default());

var DialogTitle_module_update = injectStylesIntoStyleTag_default()(DialogTitle_module/* default */.A, DialogTitle_module_options);




       /* harmony default export */ const DialogTitle_DialogTitle_module = (DialogTitle_module/* default */.A && DialogTitle_module/* default */.A.locals ? DialogTitle_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/DialogTitle/DialogTitle.tsx
function DialogTitle_extends() {
  return DialogTitle_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, DialogTitle_extends.apply(null, arguments);
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






const DialogTitleComponent = (_ref, ref) => {
  let {
    id,
    title,
    titleIcon,
    caption,
    onClose,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", DialogTitle_extends({}, rest, {
    ref: ref,
    className: DialogTitle_DialogTitle_module["header"]
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(DialogTitle_DialogTitle_module["headline"], " ").concat(caption ? DialogTitle_DialogTitle_module["with-caption"] : DialogTitle_DialogTitle_module["no-caption"])
  }, titleIcon && /*#__PURE__*/react.createElement("div", {
    className: DialogTitle_DialogTitle_module["title-icon"]
  }, typeof titleIcon === "boolean" ? /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.InfoCircle
  }) : titleIcon), /*#__PURE__*/react.createElement("div", {
    className: DialogTitle_DialogTitle_module["title-wrapper"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    id: id,
    className: DialogTitle_DialogTitle_module["title"],
    spacing: titleIcon && {
      marginLeft: 2
    },
    tag: "h1",
    variant: "h4"
  }, title), caption && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: DialogTitle_DialogTitle_module["caption"],
    spacing: {
      marginLeft: 2
    },
    variant: "sub-text"
  }, caption))), onClose && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    onClick: onClose,
    className: DialogTitle_DialogTitle_module["close-button"],
    title: "close modal"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.Times
  })));
};
const DialogTitle = /*#__PURE__*/react.forwardRef(DialogTitleComponent);
try {
    // @ts-ignore
    DialogTitle.displayName = "DialogTitle";
    // @ts-ignore
    DialogTitle.__docgenInfo = { "description": "", "displayName": "DialogTitle", "props": { "caption": { "defaultValue": null, "description": "", "name": "caption", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } }, "titleIcon": { "defaultValue": null, "description": "", "name": "titleIcon", "required": false, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Dialog/DialogTitle/DialogTitle.tsx#DialogTitle"] = { docgenInfo: DialogTitle.__docgenInfo, name: "DialogTitle", path: "src/components/Notifications/Dialog/DialogTitle/DialogTitle.tsx#DialogTitle" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContext.ts
var BaseModalContext = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContext.ts");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Dialog/Dialog.tsx
function Dialog_extends() {
  return Dialog_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Dialog_extends.apply(null, arguments);
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










const DialogComponent = (_ref, ref) => {
  let {
    id,
    open,
    children,
    onClose,
    title,
    primaryAction,
    secondaryAction,
    cancelAction,
    zIndex,
    titleIcon,
    caption,
    ...rest
  } = _ref;
  const [dialogId] = (0,react.useState)(id !== null && id !== void 0 ? id : (0,helper/* generateID */.ni)(20));
  const {
    label: primaryLabel,
    ...restOfPrimaryAction
  } = primaryAction;
  const PrimaryButton = /*#__PURE__*/react.createElement(Button/* Button */.$, Dialog_extends({
    key: "primary"
  }, restOfPrimaryAction), primaryLabel);
  const SecondaryButton = secondaryAction && function () {
    const {
      label: secondaryLabel,
      ...restOfSecondaryAction
    } = secondaryAction;
    return /*#__PURE__*/react.createElement(Button/* Button */.$, Dialog_extends({
      key: "tertiary",
      variant: "outline"
    }, restOfSecondaryAction), secondaryLabel);
  }();
  const onHiddenInputKeyPress = event => {
    /** It has to be here because then we will need to check if user doesn't click tab to select action button and want to do another action then primary one? */
    if (event.key === "Enter") {
      primaryAction.onClick();
    }
  };
  return /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.d, Dialog_extends({}, rest, {
    ref: ref,
    id: dialogId,
    className: Dialog_Dialog_module["dialog"],
    containerProps: {
      className: Dialog_Dialog_module["container"]
    },
    open: open,
    onClose: onClose,
    zIndex: zIndex
  }), /*#__PURE__*/react.createElement(DialogTitle, {
    titleIcon: titleIcon,
    caption: caption,
    id: (0,BaseModalContext/* labelId */.o)(dialogId),
    title: title,
    onClose: onClose
  }), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */._, {
    id: (0,BaseModalContext/* descriptionId */.I)(dialogId),
    className: Dialog_Dialog_module["content"],
    disableAutoFocus: true
  }, children), /*#__PURE__*/react.createElement(DialogActions, {
    onClose: onClose,
    cancelAction: cancelAction
  }, [SecondaryButton, PrimaryButton]), /*#__PURE__*/react.createElement("input", {
    autoFocus: true,
    "aria-hidden": true,
    style: {
      position: "absolute",
      width: 0,
      height: 0,
      opacity: 0
    },
    maxLength: 0,
    tabIndex: -1,
    onKeyDown: onHiddenInputKeyPress
  }));
};
const Dialog = /*#__PURE__*/react.forwardRef(DialogComponent);
try {
    // @ts-ignore
    Dialog.displayName = "Dialog";
    // @ts-ignore
    Dialog.__docgenInfo = { "description": "", "displayName": "Dialog", "props": { "caption": { "defaultValue": null, "description": "", "name": "caption", "required": false, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "disableEscapeKeyDown": { "defaultValue": null, "description": "", "name": "disableEscapeKeyDown", "required": false, "type": { "name": "boolean" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } }, "cancelAction": { "defaultValue": null, "description": "", "name": "cancelAction", "required": false, "type": { "name": "CancelAction" } }, "primaryAction": { "defaultValue": null, "description": "", "name": "primaryAction", "required": true, "type": { "name": "Action" } }, "secondaryAction": { "defaultValue": null, "description": "", "name": "secondaryAction", "required": false, "type": { "name": "Action" } }, "titleIcon": { "defaultValue": null, "description": "", "name": "titleIcon", "required": false, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Dialog/Dialog.tsx#Dialog"] = { docgenInfo: Dialog.__docgenInfo, name: "Dialog", path: "src/components/Notifications/Dialog/Dialog.tsx#Dialog" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/chromatic/isChromatic.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isChromatic)
/* harmony export */ });
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss":
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
 */.BaseModalActions-module__actions--A4L3O{margin:1.5rem 0 1rem;padding:1rem 1.5rem 0;display:flex;justify-content:space-between;border-top:1px solid var(--color-blue-grey100)}.BaseModalActions-module__actions--A4L3O>*+*{margin-left:2rem}@media screen and (max-width: 640px){.BaseModalActions-module__actions--A4L3O{display:block}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__cancel-action--MgUvx{display:none}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat{flex-direction:column;align-items:flex-end;margin-left:0}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*{width:100%}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*+*{margin-top:.5rem}}.BaseModalActions-module__primary-actions--bcMat{display:flex;flex-grow:1;justify-content:flex-end}.BaseModalActions-module__primary-actions--bcMat button{white-space:nowrap}@media screen and (min-width: 640px){.BaseModalActions-module__primary-actions--bcMat button+button{margin-left:.5rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": `BaseModalActions-module__actions--A4L3O`,
	"cancel-action": `BaseModalActions-module__cancel-action--MgUvx`,
	"primary-actions": `BaseModalActions-module__primary-actions--bcMat`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/Dialog.module.scss":
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
 */.Dialog-module__dialog--faaWB{align-items:center}@media only screen and (min-width: 50em){.Dialog-module__container--ZuvaX{width:30rem;margin-top:0;max-height:90%}}.Dialog-module__content--hPfM_{padding-top:0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"dialog": `Dialog-module__dialog--faaWB`,
	"container": `Dialog-module__container--ZuvaX`,
	"content": `Dialog-module__content--hPfM_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogActions/DialogActions.module.scss":
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
 */.DialogActions-module__actions--AtqlN *+*{margin-left:.5rem}@media screen and (max-width: 640px){.DialogActions-module__actions--AtqlN .DialogActions-module__cancel-action--grFOt{display:block;flex-direction:column;align-items:flex-end;margin-left:0;margin-bottom:.5rem}.DialogActions-module__actions--AtqlN .DialogActions-module__cancel-action--grFOt>*{width:100%}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": `DialogActions-module__actions--AtqlN`,
	"cancel-action": `DialogActions-module__cancel-action--grFOt`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Dialog/DialogTitle/DialogTitle.module.scss":
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
 */.DialogTitle-module__header--Y1sRh{margin:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between}.DialogTitle-module__headline--Vdu9y{display:flex}.DialogTitle-module__headline--Vdu9y.DialogTitle-module__with-caption--gWI98{align-items:flex-start}.DialogTitle-module__headline--Vdu9y.DialogTitle-module__no-caption--TAUs4{align-items:center}.DialogTitle-module__title--suZdL{margin:0;line-height:1}.DialogTitle-module__title-icon--Ugp4w>[data-icon]{font-size:1.25rem}.DialogTitle-module__caption--GuyA1{color:var(--color-blue-grey500)}.DialogTitle-module__close-button--pv910{flex-shrink:0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": `DialogTitle-module__header--Y1sRh`,
	"headline": `DialogTitle-module__headline--Vdu9y`,
	"with-caption": `DialogTitle-module__with-caption--gWI98`,
	"no-caption": `DialogTitle-module__no-caption--TAUs4`,
	"title": `DialogTitle-module__title--suZdL`,
	"title-icon": `DialogTitle-module__title-icon--Ugp4w`,
	"caption": `DialogTitle-module__caption--GuyA1`,
	"close-button": `DialogTitle-module__close-button--pv910`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);