"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1734],{

/***/ "./src/components/Notifications/BaseModal/BaseModal.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: function() { return /* binding */ BaseModal; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModal.module.scss
var BaseModal_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModal.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModal.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModal_module/* default */.Z, options);




       /* harmony default export */ var BaseModal_BaseModal_module = (BaseModal_module/* default */.Z && BaseModal_module/* default */.Z.locals ? BaseModal_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContext.ts
var BaseModalContext = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContext.ts");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx
var _excluded = ["id", "children", "open", "onClose", "className", "containerProps", "backdropProps", "labelledby", "describedby", "disableEscapeKeyDown", "disableBackdrop", "forceContainerOpen", "zIndex", "domRoot"];
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






var SCROLL_PROPERTY_NAME = "overflow";
var SCROLL_PROPERTY_VALUE = "hidden";
var useSetBodyScroll = function useSetBodyScroll(open) {
  var hideBodyScroll = function hideBodyScroll() {
    document.body.style[SCROLL_PROPERTY_NAME] = SCROLL_PROPERTY_VALUE;
  };
  var showBodyScroll = function showBodyScroll() {
    var allModalsClosed = document.querySelectorAll("[role=dialog][data-hidden=false]").length === 0;
    if (allModalsClosed) {
      document.body.style.removeProperty(SCROLL_PROPERTY_NAME);
    }
  };
  (0,react.useEffect)(function () {
    if (open) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [open]);
};
var BaseModalComponent = function BaseModalComponent(_ref, ref) {
  var _backdropProps$classN, _containerProps$class, _containerProps$class2;
  var id = _ref.id,
    children = _ref.children,
    open = _ref.open,
    onClose = _ref.onClose,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    containerProps = _ref.containerProps,
    backdropProps = _ref.backdropProps,
    labelledby = _ref.labelledby,
    describedby = _ref.describedby,
    _ref$disableEscapeKey = _ref.disableEscapeKeyDown,
    disableEscapeKeyDown = _ref$disableEscapeKey === void 0 ? false : _ref$disableEscapeKey,
    _ref$disableBackdrop = _ref.disableBackdrop,
    disableBackdrop = _ref$disableBackdrop === void 0 ? false : _ref$disableBackdrop,
    _ref$forceContainerOp = _ref.forceContainerOpen,
    forceContainerOpen = _ref$forceContainerOp === void 0 ? false : _ref$forceContainerOp,
    zIndex = _ref.zIndex,
    domRoot = _ref.domRoot,
    rest = _objectWithoutProperties(_ref, _excluded);
  useSetBodyScroll(open);
  var wrappingDivRef = (0,react.useRef)(null);
  var _useGetDomRoot = (0,useGetDomRoot/* useGetDomRoot */.X)(domRoot, wrappingDivRef),
    root = _useGetDomRoot.root;
  var handleEscKeyPress = function handleEscKeyPress(event) {
    if (!disableEscapeKeyDown && event.key === "Escape") {
      event.stopPropagation();
      onClose === null || onClose === void 0 || onClose();
    }
  };
  (0,react.useEffect)(function () {
    if (open) {
      var _wrappingDivRef$curre;
      (_wrappingDivRef$curre = wrappingDivRef.current) === null || _wrappingDivRef$curre === void 0 || _wrappingDivRef$curre.focus();
    }
  }, [open]);
  var handleBackdropClick = function handleBackdropClick() {
    return !disableBackdrop && onClose && onClose();
  };
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      if ( /*#__PURE__*/react.isValidElement(child)) {
        var _child$props$onClose;
        return /*#__PURE__*/react.cloneElement(child, {
          onClose: (_child$props$onClose = child.props.onClose) !== null && _child$props$onClose !== void 0 ? _child$props$onClose : onClose
        });
      }
      return child;
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    ref: wrappingDivRef
  }, /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    id: id,
    className: "".concat(BaseModal_BaseModal_module["modal"], " ").concat(open ? BaseModal_BaseModal_module["visible"] : "", " ").concat(className),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledby !== null && labelledby !== void 0 ? labelledby : (0,BaseModalContext/* labelId */.j)(id),
    "aria-describedby": describedby !== null && describedby !== void 0 ? describedby : (0,BaseModalContext/* descriptionId */.S)(id),
    "aria-hidden": !open,
    tabIndex: -1,
    "data-hidden": !open,
    onKeyDown: handleEscKeyPress,
    style: {
      zIndex: zIndex
    }
  }), /*#__PURE__*/react.createElement("div", _extends({}, backdropProps, {
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
var BaseModal = /*#__PURE__*/react.forwardRef(BaseModalComponent);
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
    BaseModal.__docgenInfo = { "description": "", "displayName": "BaseModal", "props": { "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "((event?: MouseEvent<HTMLElement, MouseEvent>) => unknown)" } }, "containerProps": { "defaultValue": null, "description": "", "name": "containerProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "backdropProps": { "defaultValue": null, "description": "", "name": "backdropProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "labelledby": { "defaultValue": null, "description": "", "name": "labelledby", "required": false, "type": { "name": "string" } }, "describedby": { "defaultValue": null, "description": "", "name": "describedby", "required": false, "type": { "name": "string" } }, "disableEscapeKeyDown": { "defaultValue": { value: "false" }, "description": "", "name": "disableEscapeKeyDown", "required": false, "type": { "name": "boolean" } }, "disableBackdrop": { "defaultValue": { value: "false" }, "description": "", "name": "disableBackdrop", "required": false, "type": { "name": "boolean" } }, "forceContainerOpen": { "defaultValue": { value: "false" }, "description": "", "name": "forceContainerOpen", "required": false, "type": { "name": "boolean" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModal.tsx#BaseModal"] = { docgenInfo: BaseModal.__docgenInfo, name: "BaseModal", path: "src/components/Notifications/BaseModal/BaseModal.tsx#BaseModal" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: function() { return /* binding */ BaseModalContent; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss
var BaseModalContent_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalContent_module/* default */.Z, options);




       /* harmony default export */ var BaseModalContent_BaseModalContent_module = (BaseModalContent_module/* default */.Z && BaseModalContent_module/* default */.Z.locals ? BaseModalContent_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx
var _excluded = ["id", "children", "className", "disableAutoFocus"];
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



var BaseModalContentComponent = function BaseModalContentComponent(_ref, ref) {
  var id = _ref.id,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$disableAutoFocus = _ref.disableAutoFocus,
    disableAutoFocus = _ref$disableAutoFocus === void 0 ? false : _ref$disableAutoFocus,
    rest = _objectWithoutProperties(_ref, _excluded);
  var contentRef = /*#__PURE__*/(0,react.createRef)();
  (0,react.useEffect)(function () {
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
var BaseModalContent = /*#__PURE__*/react.forwardRef(BaseModalContentComponent);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ descriptionId; },
/* harmony export */   j: function() { return /* binding */ labelId; }
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

var labelId = function labelId(id) {
  return "".concat(id, "-label");
};
var descriptionId = function descriptionId(id) {
  return "".concat(id, "-description");
};

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModal.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModal-module__sr-only--_ncLY{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseModal-module__hidden--G6XdL{display:none}.BaseModal-module__slide-in--jEsyw{animation:BaseModal-module__slide-in--jEsyw .5s forwards}@media(prefers-reduced-motion: reduce){.BaseModal-module__slide-in--jEsyw{animation-duration:.1ms}}.BaseModal-module__slide-out--teWnm{animation:BaseModal-module__slide-out--teWnm .5s forwards}@media(prefers-reduced-motion: reduce){.BaseModal-module__slide-out--teWnm{animation-duration:.1ms}}@keyframes BaseModal-module__slide-in--jEsyw{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseModal-module__slide-out--teWnm{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModal-module__modal--_ZoAQ{position:fixed;z-index:10;top:0;left:0;height:100vh;width:100vw;visibility:hidden;display:flex;align-items:flex-start;justify-content:center}.BaseModal-module__modal--_ZoAQ .BaseModal-module__backdrop--Q_rWu{content:\"\";position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,0);transition-property:background-color;transition-duration:.5s;transition-timing-function:ease}@media(prefers-reduced-motion: reduce){.BaseModal-module__modal--_ZoAQ .BaseModal-module__backdrop--Q_rWu{transition-duration:.1ms}}.BaseModal-module__modal--_ZoAQ.BaseModal-module__visible--sEHI4{visibility:visible}.BaseModal-module__modal--_ZoAQ.BaseModal-module__visible--sEHI4 .BaseModal-module__backdrop--Q_rWu{background-color:var(--modal-backdrop-color);opacity:.75}.BaseModal-module__container--B8h9b{margin-top:3.125rem;background-color:var(--modal-background-color);z-index:11;width:calc(100% - 2rem);height:auto;max-height:calc(90% - 3.125rem);display:flex;flex-direction:column}@media only screen and (min-width: 50em){.BaseModal-module__container--B8h9b{width:50rem;border-radius:2px;box-shadow:0 30px 50px var(--modal-shadow-color)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "BaseModal-module__sr-only--_ncLY",
	"hidden": "BaseModal-module__hidden--G6XdL",
	"slide-in": "BaseModal-module__slide-in--jEsyw",
	"slide-out": "BaseModal-module__slide-out--teWnm",
	"modal": "BaseModal-module__modal--_ZoAQ",
	"backdrop": "BaseModal-module__backdrop--Q_rWu",
	"visible": "BaseModal-module__visible--sEHI4",
	"container": "BaseModal-module__container--B8h9b"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalContent-module__content--FW2Bc{padding:1.25rem 1.5rem 0;overflow-y:auto;flex:1;outline:none;color:var(--color-blue-grey500);font-size:.875rem;line-height:1.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"content": "BaseModalContent-module__content--FW2Bc"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);