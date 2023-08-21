"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[898],{

/***/ "./src/components/ContextMenu/ContextMenu.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: function() { return /* binding */ ContextMenu; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Popover/Popover.tsx + 1 modules
var Popover = __webpack_require__("./src/components/Popover/Popover.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenu.module.scss
var ContextMenu_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenu.module.scss");
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenu.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContextMenu_module/* default */.Z, options);




       /* harmony default export */ var ContextMenu_ContextMenu_module = (ContextMenu_module/* default */.Z && ContextMenu_module/* default */.Z.locals ? ContextMenu_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useBodyClick.ts
var useBodyClick = __webpack_require__("./src/hooks/useBodyClick.ts");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenu.tsx
var _excluded = ["trigger", "children", "decorativeElement", "id", "show", "onShow", "onClose", "placement", "offset", "transformOrigin", "debounceAmount", "domRoot", "popoverProps"];
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







var ContextMenuComponent = function ContextMenuComponent(_ref, ref) {
  var trigger = _ref.trigger,
    children = _ref.children,
    decorativeElement = _ref.decorativeElement,
    id = _ref.id,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    onShow = _ref.onShow,
    onClose = _ref.onClose,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? {
      horizontal: "right",
      vertical: "top"
    } : _ref$placement,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    } : _ref$offset,
    _ref$transformOrigin = _ref.transformOrigin,
    transformOrigin = _ref$transformOrigin === void 0 ? {
      horizontal: "left",
      vertical: "top"
    } : _ref$transformOrigin,
    debounceAmount = _ref.debounceAmount,
    domRoot = _ref.domRoot,
    popoverProps = _ref.popoverProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var anchorEl = (0,react.useRef)(null);
  var wrappingDivRef = ref || /*#__PURE__*/(0,react.createRef)();
  var _useState = (0,react.useState)(show),
    _useState2 = _slicedToArray(_useState, 2),
    showContextMenu = _useState2[0],
    setShowContextMenu = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasBeenClosed = _useState4[0],
    setHasBeenClosed = _useState4[1];
  var _useState5 = (0,react.useState)(-1),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedContextMenuItem = _useState6[0],
    setSelectedContextMenuItem = _useState6[1];
  var _useState7 = (0,react.useState)(-1),
    _useState8 = _slicedToArray(_useState7, 2),
    focusedContextMenuItem = _useState8[0],
    setFocusedContextMenuItem = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    shouldClick = _useState10[0],
    setShouldClick = _useState10[1]; /** We need this, because whenever we use the arrow keys to select the contextmenu item, and we focus the currently selected item it fires the "click" listener in ContextMenuItem component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  var _useState11 = (0,react.useState)(react.Children.count(children)),
    _useState12 = _slicedToArray(_useState11, 1),
    childrenCount = _useState12[0];
  var _useGetDomRoot = (0,useGetDomRoot/* useGetDomRoot */.X)(domRoot, wrappingDivRef),
    root = _useGetDomRoot.root;
  if (!id) {
    throw new Error("You need to provide an ID to the context menu");
  }
  var onArrowNavigation = function onArrowNavigation(event) {
    if (focusedContextMenuItem === -1 && selectedContextMenuItem !== -1) {
      setFocusedContextMenuItem(selectedContextMenuItem);
    }
    var codesToPrevenDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter", "Space", "Escape", "End", "Home"];
    if (codesToPrevenDefault.includes(event.code)) {
      event.preventDefault();
    }
    switch (event.code) {
      case "ArrowDown":
        if (!showContextMenu) {
          setShowContextMenu(true);
          return;
        }
        setFocusedContextMenuItem(function (prevState) {
          return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
        });
        return;
      case "ArrowUp":
        setFocusedContextMenuItem(function (prevState) {
          return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
        });
        return;
      case "Enter":
      case "Space":
        if (!showContextMenu) {
          setShowContextMenu(true);
          return;
        }
        setShouldClick(true);
        setSelectedContextMenuItem(focusedContextMenuItem);
        setShowContextMenu(false);
        return;
      case "Tab":
      case "Escape":
        setShowContextMenu(false);
        return;
      case "End":
        setFocusedContextMenuItem(childrenCount - 1);
        return;
      case "Home":
        setFocusedContextMenuItem(0);
        return;
    }
  };
  (0,useBodyClick/* useBodyClick */.S)(function (event) {
    return showContextMenu && anchorEl.current !== event.target && anchorEl.current !== event.target.parentElement;
  }, function () {
    setShowContextMenu(false);
  }, showContextMenu);
  (0,react.useEffect)(function () {
    if (showContextMenu === true) {
      onShow === null || onShow === void 0 ? void 0 : onShow();
    } else {
      var _document$activeEleme, _wrappingDivRef$curre;
      onClose === null || onClose === void 0 ? void 0 : onClose();
      !hasBeenClosed && setHasBeenClosed(true);
      setFocusedContextMenuItem(-1);
      // If the user clicks on the trigger button, we want to focus it again after the context menu has been closed,
      // but only if the option doesn't open another window (such as a modal),
      // otherwise pressing enter wouldn't fire the primary action of the modal.
      if ((_document$activeEleme = document.activeElement) !== null && _document$activeEleme !== void 0 && _document$activeEleme.closest(".".concat((_wrappingDivRef$curre = wrappingDivRef.current) === null || _wrappingDivRef$curre === void 0 ? void 0 : _wrappingDivRef$curre.className))) {
        hasBeenClosed && anchorEl.current && anchorEl.current.focus();
      }
    }
  }, [showContextMenu]);
  var renderTrigger = function renderTrigger() {
    return /*#__PURE__*/react.cloneElement(trigger, {
      id: id,
      "aria-haspopup": "true",
      "aria-controls": "".concat(id, "-menu"),
      "aria-expanded": showContextMenu,
      onClick: function onClick() {
        return setShowContextMenu(!showContextMenu);
      },
      tabIndex: 0,
      ref: anchorEl
    });
  };
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child, index) {
      return /*#__PURE__*/react.cloneElement(child, {
        onFocusChange: function onFocusChange(childIndex) {
          return setFocusedContextMenuItem(childIndex);
        },
        onSelectedChange: function onSelectedChange(childIndex) {
          setSelectedContextMenuItem(childIndex);
          setShouldClick(false);
        },
        childIndex: index,
        hasFocus: focusedContextMenuItem === index,
        isSelected: selectedContextMenuItem === index,
        contextMenuOpened: showContextMenu,
        shouldClick: shouldClick
      });
    });
  };
  var onOutOfViewHandler = (0,react.useCallback)(function () {
    setShowContextMenu(false);
  }, []);
  if (!root) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: wrappingDivRef,
    onKeyDown: onArrowNavigation,
    className: ContextMenu_ContextMenu_module["context-menu"]
  }), renderTrigger(), /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(Popover/* Popover */.J, _extends({}, popoverProps, {
    placement: placement,
    transformOrigin: transformOrigin,
    offset: offset,
    anchorEl: anchorEl,
    debounceAmount: debounceAmount,
    show: showContextMenu,
    onAnchorOutOfView: onOutOfViewHandler
  }), decorativeElement && /*#__PURE__*/react.createElement("div", {
    className: ContextMenu_ContextMenu_module["decorative-element"]
  }, decorativeElement), /*#__PURE__*/react.createElement("ul", {
    className: "".concat(ContextMenu_ContextMenu_module["menu"], " ").concat(decorativeElement ? ContextMenu_ContextMenu_module["no-margin-top"] : ""),
    id: "".concat(id, "-menu"),
    "aria-describedby": id,
    role: "menu"
  }, renderChildren())), root));
};
var ContextMenu = /*#__PURE__*/react.forwardRef(ContextMenuComponent);
try {
    // @ts-ignore
    ContextMenu.displayName = "ContextMenu";
    // @ts-ignore
    ContextMenu.__docgenInfo = { "description": "", "displayName": "ContextMenu", "props": { "placement": { "defaultValue": { value: "{ horizontal: \"right\", vertical: \"top\" }" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "trigger": { "defaultValue": null, "description": "", "name": "trigger", "required": true, "type": { "name": "ReactElement<Props, string | JSXElementConstructor<any>> | ReactElement<Props, string | JSXElementConstructor<any>>" } }, "decorativeElement": { "defaultValue": null, "description": "", "name": "decorativeElement", "required": false, "type": { "name": "ReactNode" } }, "transformOrigin": { "defaultValue": { value: "{ horizontal: \"left\", vertical: \"top\" }" }, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": { value: "{ top: 0, bottom: 0, left: 0, right: 0 }" }, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": { value: "false" }, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "onShow": { "defaultValue": null, "description": "", "name": "onShow", "required": false, "type": { "name": "(() => void)" } }, "popoverProps": { "defaultValue": null, "description": "", "name": "popoverProps", "required": false, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/ContextMenu/ContextMenu.tsx#ContextMenu"] = { docgenInfo: ContextMenu.__docgenInfo, name: "ContextMenu", path: "src/components/ContextMenu/ContextMenu.tsx#ContextMenu" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/ContextMenu/ContextMenuItem.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ContextMenuItem; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenuItem.module.scss
var ContextMenuItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenuItem.module.scss");
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenuItem.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContextMenuItem_module/* default */.Z, options);




       /* harmony default export */ var ContextMenu_ContextMenuItem_module = (ContextMenuItem_module/* default */.Z && ContextMenuItem_module/* default */.Z.locals ? ContextMenuItem_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx
var _excluded = ["children", "onClick", "onFocusChange", "onSelectedChange", "hasFocus", "isSelected", "childIndex", "contextMenuOpened", "shouldClick", "className"];
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



var ContextMenuItemComponent = function ContextMenuItemComponent(_ref, ref) {
  var children = _ref.children,
    _onClick = _ref.onClick,
    onFocusChange = _ref.onFocusChange,
    onSelectedChange = _ref.onSelectedChange,
    hasFocus = _ref.hasFocus,
    isSelected = _ref.isSelected,
    childIndex = _ref.childIndex,
    contextMenuOpened = _ref.contextMenuOpened,
    shouldClick = _ref.shouldClick,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var innerButtonRef = ref || /*#__PURE__*/(0,react.createRef)();
  (0,react.useEffect)(function () {
    if (isSelected && innerButtonRef.current && shouldClick) {
      innerButtonRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react.useEffect)(function () {
    if (innerButtonRef.current && hasFocus && contextMenuOpened) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerButtonRef.current.focus();
    }
  }, [hasFocus, innerButtonRef, contextMenuOpened]);
  return /*#__PURE__*/react.createElement("li", {
    role: "none",
    className: "".concat(ContextMenu_ContextMenuItem_module["context-menu-item"], " ").concat(className !== null && className !== void 0 ? className : "")
  }, /*#__PURE__*/react.createElement("button", _extends({
    role: "menuitem"
  }, rest, {
    ref: innerButtonRef,
    "data-focus": hasFocus,
    tabIndex: -1,
    onClick: function onClick(event) {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(event);
      onSelectedChange && childIndex && onSelectedChange(childIndex);
    }
  }), children));
};
var ContextMenuItem = /*#__PURE__*/react.forwardRef(ContextMenuItemComponent);
try {
    // @ts-ignore
    ContextMenuItem.displayName = "ContextMenuItem";
    // @ts-ignore
    ContextMenuItem.__docgenInfo = { "description": "", "displayName": "ContextMenuItem", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": null, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "contextMenuOpened": { "defaultValue": null, "description": "", "name": "contextMenuOpened", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "onSelectedChange": { "defaultValue": null, "description": "", "name": "onSelectedChange", "required": false, "type": { "name": "((childIndex: number) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/ContextMenu/ContextMenuItem.tsx#ContextMenuItem"] = { docgenInfo: ContextMenuItem.__docgenInfo, name: "ContextMenuItem", path: "src/components/ContextMenu/ContextMenuItem.tsx#ContextMenuItem" };
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenu.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ContextMenu-module__context-menu--HlZKn{position:relative;display:inline-block;box-sizing:border-box}.ContextMenu-module__menu--sDCMr{white-space:nowrap;margin:1rem 0;list-style:none;padding:0;min-width:200px}.ContextMenu-module__menu--sDCMr.ContextMenu-module__no-margin-top--VlUzz{margin:0 0 1rem}.ContextMenu-module__menu--sDCMr button{text-align:left}.ContextMenu-module__decorative-element--euBeh{margin-top:1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"context-menu": "ContextMenu-module__context-menu--HlZKn",
	"menu": "ContextMenu-module__menu--sDCMr",
	"no-margin-top": "ContextMenu-module__no-margin-top--VlUzz",
	"decorative-element": "ContextMenu-module__decorative-element--euBeh"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenuItem.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ContextMenuItem-module__context-menu-item--cSBEA{position:relative}.ContextMenuItem-module__context-menu-item--cSBEA button{background-color:rgba(0,0,0,0);border:0;font-family:var(--font-family);font-size:var(--font-size);line-height:var(--default-line-height);cursor:pointer;width:100%;height:100%;padding:.5rem 1.25rem;box-sizing:border-box}.ContextMenuItem-module__context-menu-item--cSBEA:after{content:\"\";position:absolute;top:0;left:0;background-color:rgba(0,0,0,0);width:100%;height:100%;opacity:.1;pointer-events:none}.ContextMenuItem-module__context-menu-item--cSBEA:hover:after{background-color:var(--color-primary)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"context-menu-item": "ContextMenuItem-module__context-menu-item--cSBEA"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);