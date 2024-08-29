"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5910],{

/***/ "./src/components/Notifications/BaseModal/BaseModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ BaseModal)
});

// UNUSED EXPORTS: useSetBodyScroll

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModal.module.scss
var BaseModal_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModal.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModal.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModal_module/* default */.A, options);




       /* harmony default export */ const BaseModal_BaseModal_module = (BaseModal_module/* default */.A && BaseModal_module/* default */.A.locals ? BaseModal_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContext.ts
var BaseModalContext = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContext.ts");
// EXTERNAL MODULE: ./src/hooks/useRepeatFocus.tsx
var useRepeatFocus = __webpack_require__("./src/hooks/useRepeatFocus.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx
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







const SCROLL_PROPERTY_NAME = "overflow";
const SCROLL_PROPERTY_VALUE = "hidden";
const useSetBodyScroll = open => {
  const hideBodyScroll = () => {
    document.body.style[SCROLL_PROPERTY_NAME] = SCROLL_PROPERTY_VALUE;
  };
  const showBodyScroll = () => {
    const allModalsClosed = document.querySelectorAll("[role=dialog][data-hidden=false]").length === 0;
    if (allModalsClosed) {
      document.body.style.removeProperty(SCROLL_PROPERTY_NAME);
    }
  };
  (0,react.useEffect)(() => {
    if (open) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [open]);
};
const BaseModalComponent = (_ref, ref) => {
  var _backdropProps$classN, _containerProps$class, _containerProps$class2;
  let {
    id,
    children,
    open,
    onClose,
    className = "",
    containerProps,
    backdropProps,
    labelledby,
    describedby,
    disableEscapeKeyDown = false,
    disableBackdrop = false,
    forceContainerOpen = false,
    zIndex,
    domRoot,
    ...rest
  } = _ref;
  useSetBodyScroll(open);
  const wrappingDivRef = (0,react.useRef)(null);
  const modalRef = ref || /*#__PURE__*/(0,react.createRef)();
  const {
    root
  } = (0,useGetDomRoot/* useGetDomRoot */.i)(domRoot, wrappingDivRef);
  const handleEscKeyPress = event => {
    if (!disableEscapeKeyDown && event.key === "Escape") {
      event.stopPropagation();
      onClose === null || onClose === void 0 || onClose();
    }
  };
  (0,useRepeatFocus/* useRepeatFocus */.F)(modalRef);
  (0,react.useEffect)(() => {
    if (open) {
      var _modalRef$current;
      (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 || _modalRef$current.focus();
    }
  }, [open]);
  const handleBackdropClick = () => !disableBackdrop && onClose && onClose();
  const renderChildren = () => react.Children.map(children, child => {
    if ( /*#__PURE__*/react.isValidElement(child)) {
      var _child$props$onClose;
      return /*#__PURE__*/react.cloneElement(child, {
        onClose: (_child$props$onClose = child.props.onClose) !== null && _child$props$onClose !== void 0 ? _child$props$onClose : onClose
      });
    }
    return child;
  });
  return /*#__PURE__*/react.createElement("div", {
    ref: wrappingDivRef
  }, /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: modalRef,
    id: id,
    className: "".concat(BaseModal_BaseModal_module["modal"], " ").concat(open ? BaseModal_BaseModal_module["visible"] : "", " ").concat(className),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledby !== null && labelledby !== void 0 ? labelledby : (0,BaseModalContext/* labelId */.o)(id),
    "aria-describedby": describedby !== null && describedby !== void 0 ? describedby : (0,BaseModalContext/* descriptionId */.I)(id),
    "aria-hidden": !open,
    tabIndex: -1,
    "data-hidden": !open,
    onKeyDown: handleEscKeyPress,
    style: {
      zIndex
    }
  }), /*#__PURE__*/react.createElement("div", _extends({}, backdropProps, {
    "aria-hidden": true,
    className: "".concat(BaseModal_BaseModal_module["backdrop"], " ").concat((_backdropProps$classN = backdropProps === null || backdropProps === void 0 ? void 0 : backdropProps.className) !== null && _backdropProps$classN !== void 0 ? _backdropProps$classN : ""),
    onClick: handleBackdropClick
  })), forceContainerOpen ? /*#__PURE__*/react.createElement("div", _extends({}, containerProps, {
    "aria-hidden": !open,
    "data-element": "dialog",
    hidden: !open,
    style: {
      zIndex: zIndex && zIndex + 1
    },
    className: "".concat(BaseModal_BaseModal_module["container"], " ").concat((_containerProps$class = containerProps === null || containerProps === void 0 ? void 0 : containerProps.className) !== null && _containerProps$class !== void 0 ? _containerProps$class : "")
  }), renderChildren()) : open && /*#__PURE__*/react.createElement("div", _extends({}, containerProps, {
    "data-element": "dialog",
    style: {
      zIndex: zIndex && zIndex + 1
    },
    className: "".concat(BaseModal_BaseModal_module["container"], " ").concat((_containerProps$class2 = containerProps === null || containerProps === void 0 ? void 0 : containerProps.className) !== null && _containerProps$class2 !== void 0 ? _containerProps$class2 : "")
  }), renderChildren())), root));
};
const BaseModal = /*#__PURE__*/react.forwardRef(BaseModalComponent);
try {
    // @ts-ignore
    useSetBodyScroll.displayName = "useSetBodyScroll";
    // @ts-ignore
    useSetBodyScroll.__docgenInfo = { "description": "", "displayName": "useSetBodyScroll", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModal.tsx#useSetBodyScroll"] = { docgenInfo: useSetBodyScroll.__docgenInfo, name: "useSetBodyScroll", path: "src/components/Notifications/BaseModal/BaseModal.tsx#useSetBodyScroll" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    BaseModal.displayName = "BaseModal";
    // @ts-ignore
    BaseModal.__docgenInfo = { "description": "", "displayName": "BaseModal", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "((event?: MouseEvent<HTMLElement, MouseEvent>) => unknown)" } }, "containerProps": { "defaultValue": null, "description": "", "name": "containerProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "backdropProps": { "defaultValue": null, "description": "", "name": "backdropProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "labelledby": { "defaultValue": null, "description": "", "name": "labelledby", "required": false, "type": { "name": "string" } }, "describedby": { "defaultValue": null, "description": "", "name": "describedby", "required": false, "type": { "name": "string" } }, "disableEscapeKeyDown": { "defaultValue": { value: "false" }, "description": "", "name": "disableEscapeKeyDown", "required": false, "type": { "name": "boolean" } }, "disableBackdrop": { "defaultValue": { value: "false" }, "description": "", "name": "disableBackdrop", "required": false, "type": { "name": "boolean" } }, "forceContainerOpen": { "defaultValue": { value: "false" }, "description": "", "name": "forceContainerOpen", "required": false, "type": { "name": "boolean" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModal.tsx#BaseModal"] = { docgenInfo: BaseModal.__docgenInfo, name: "BaseModal", path: "src/components/Notifications/BaseModal/BaseModal.tsx#BaseModal" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ BaseModalContent)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss
var BaseModalContent_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalContent_module/* default */.A, options);




       /* harmony default export */ const BaseModalContent_BaseModalContent_module = (BaseModalContent_module/* default */.A && BaseModalContent_module/* default */.A.locals ? BaseModalContent_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx
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



const BaseModalContentComponent = (_ref, ref) => {
  let {
    id,
    children,
    className = "",
    disableAutoFocus = false,
    ...rest
  } = _ref;
  const contentRef = /*#__PURE__*/(0,react.createRef)();
  (0,react.useEffect)(() => {
    if (!disableAutoFocus && ref) {
      var _current;
      (_current = ref.current) === null || _current === void 0 || _current.focus();
    } else if (!disableAutoFocus) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
    }
  }, []);

  /**tabIndex is set to be able to do focus on that element which we need for catching keyDown events */
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref !== null && ref !== void 0 ? ref : contentRef,
    id: id,
    className: "".concat(BaseModalContent_BaseModalContent_module["content"], " ").concat(className),
    tabIndex: -1
  }), children);
};
const BaseModalContent = /*#__PURE__*/react.forwardRef(BaseModalContentComponent);
try {
    // @ts-ignore
    BaseModalContent.displayName = "BaseModalContent";
    // @ts-ignore
    BaseModalContent.__docgenInfo = { "description": "", "displayName": "BaseModalContent", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "disableAutoFocus": { "defaultValue": { value: "false" }, "description": "", "name": "disableAutoFocus", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx#BaseModalContent"] = { docgenInfo: BaseModalContent.__docgenInfo, name: "BaseModalContent", path: "src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx#BaseModalContent" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalContext.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ descriptionId),
/* harmony export */   o: () => (/* binding */ labelId)
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

const labelId = id => "".concat(id, "-label");
const descriptionId = id => "".concat(id, "-description");

/***/ }),

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useGetDomRoot)
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


const useGetDomRoot = (passedDomRoot, relativeElement) => {
  const [root, setRoot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.body);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (relativeElement !== null && relativeElement !== void 0 && relativeElement.current && !passedDomRoot) {
      const closestBaseStylingWrapper = relativeElement.current.closest(".basestyling-wrapper");
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
    root
  };
};

/***/ }),

/***/ "./src/hooks/useRepeatFocus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useRepeatFocus)
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



/**
 * @description This is a hook that will make sure that when a modal is open and the user tabs through the it,
 * the focus will be repeated and the user will not lose their entire focusable element to an element in the background
 * that is being blocked by the modal.
 */

const useRepeatFocus = ref => {
  const getFocusableElement = (element, position) => {
    const baseSelectors = ["button", "[href]", "input", "select", "textarea", "[tabindex]", "[contenteditable]"];
    const focusableSelectors = baseSelectors.map(selector => "".concat(selector, ":not([tabindex=\"-1\"])")).join(", ");
    const focusableElements = element.querySelectorAll(focusableSelectors);
    if (position === "first") {
      return focusableElements[0] || null;
    } else if (position === "last") {
      return focusableElements[focusableElements.length - 1] || null;
    }
    return null;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!ref.current || !open) return;
    const lastFocusableElement = getFocusableElement(ref.current, "last");
    const firstFocusableElement = getFocusableElement(ref.current, "first");
    if (!lastFocusableElement || !firstFocusableElement) return;
    const handleTabKeyPress = event => {
      if (event.key !== "Tab") return;
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement === null || lastFocusableElement === void 0 || lastFocusableElement.focus();
        }
      } else if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement === null || firstFocusableElement === void 0 || firstFocusableElement.focus();
      }
    };
    lastFocusableElement.addEventListener("keydown", handleTabKeyPress);
    firstFocusableElement.addEventListener("keydown", handleTabKeyPress);
    return () => {
      lastFocusableElement.removeEventListener("keydown", handleTabKeyPress);
      firstFocusableElement.removeEventListener("keydown", handleTabKeyPress);
    };
  }, [ref, open]);
};
try {
    // @ts-ignore
    useRepeatFocus.displayName = "useRepeatFocus";
    // @ts-ignore
    useRepeatFocus.__docgenInfo = { "description": "", "displayName": "useRepeatFocus", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/hooks/useRepeatFocus.tsx#useRepeatFocus"] = { docgenInfo: useRepeatFocus.__docgenInfo, name: "useRepeatFocus", path: "src/hooks/useRepeatFocus.tsx#useRepeatFocus" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModal.module.scss":
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
 */.BaseModal-module__sr-only--_ncLY{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseModal-module__hidden--G6XdL{display:none}.BaseModal-module__slide-in--jEsyw{animation:BaseModal-module__slide-in--jEsyw .5s forwards}@media(prefers-reduced-motion: reduce){.BaseModal-module__slide-in--jEsyw{animation-duration:.1ms}}.BaseModal-module__slide-out--teWnm{animation:BaseModal-module__slide-out--teWnm .5s forwards}@media(prefers-reduced-motion: reduce){.BaseModal-module__slide-out--teWnm{animation-duration:.1ms}}@keyframes BaseModal-module__slide-in--jEsyw{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseModal-module__slide-out--teWnm{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.BaseModal-module__modal--_ZoAQ{position:fixed;z-index:10;top:0;left:0;height:100vh;width:100vw;visibility:hidden;display:flex;align-items:flex-start;justify-content:center}.BaseModal-module__modal--_ZoAQ .BaseModal-module__backdrop--Q_rWu{content:"";position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,0);transition-property:background-color;transition-duration:.5s;transition-timing-function:ease}@media(prefers-reduced-motion: reduce){.BaseModal-module__modal--_ZoAQ .BaseModal-module__backdrop--Q_rWu{transition-duration:.1ms}}.BaseModal-module__modal--_ZoAQ.BaseModal-module__visible--sEHI4{visibility:visible}.BaseModal-module__modal--_ZoAQ.BaseModal-module__visible--sEHI4 .BaseModal-module__backdrop--Q_rWu{background-color:var(--modal-backdrop-color);opacity:.75}.BaseModal-module__container--B8h9b{margin-top:3.125rem;background-color:var(--modal-background-color);z-index:11;width:calc(100% - 2rem);height:auto;max-height:calc(90% - 3.125rem);display:flex;flex-direction:column}@media only screen and (min-width: 50em){.BaseModal-module__container--B8h9b{width:50rem;border-radius:2px;box-shadow:0 30px 50px var(--modal-shadow-color)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `BaseModal-module__sr-only--_ncLY`,
	"hidden": `BaseModal-module__hidden--G6XdL`,
	"slide-in": `BaseModal-module__slide-in--jEsyw`,
	"slide-out": `BaseModal-module__slide-out--teWnm`,
	"modal": `BaseModal-module__modal--_ZoAQ`,
	"backdrop": `BaseModal-module__backdrop--Q_rWu`,
	"visible": `BaseModal-module__visible--sEHI4`,
	"container": `BaseModal-module__container--B8h9b`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss":
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
 */.BaseModalContent-module__content--FW2Bc{padding:1.25rem 1.5rem 0;overflow-y:auto;flex:1;outline:none;font-size:.875rem;line-height:1.25rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"content": `BaseModalContent-module__content--FW2Bc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);