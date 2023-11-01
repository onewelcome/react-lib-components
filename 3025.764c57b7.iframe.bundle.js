"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3025],{

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
// EXTERNAL MODULE: ./src/hooks/usePosition.ts + 1 modules
var usePosition = __webpack_require__("./src/hooks/usePosition.ts");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenuService.ts
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



var useArrowNavigation = function useArrowNavigation(_ref) {
  var selectedContextMenuItem = _ref.selectedContextMenuItem,
    setSelectedContextMenuItem = _ref.setSelectedContextMenuItem,
    focusedContextMenuItem = _ref.focusedContextMenuItem,
    setFocusedContextMenuItem = _ref.setFocusedContextMenuItem,
    showContextMenu = _ref.showContextMenu,
    setShowContextMenu = _ref.setShowContextMenu,
    childrenCount = _ref.childrenCount,
    setShouldClick = _ref.setShouldClick;
  var onArrowNavigation = function onArrowNavigation(event) {
    if (focusedContextMenuItem === -1 && selectedContextMenuItem !== -1) {
      setFocusedContextMenuItem(selectedContextMenuItem);
    }
    var codesToPreventDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter", "Space", "Escape", "End", "Home"];
    if (codesToPreventDefault.includes(event.code)) {
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
  return {
    onArrowNavigation: onArrowNavigation
  };
};
var defaultOffsetSpacing = (0,helper/* remToPx */.cv)(0.25);
var useDefaultOffset = function useDefaultOffset() {
  var calculateDefaultOffset = function calculateDefaultOffset(placement, transformOrigin) {
    var offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    if (placement.vertical === usePosition/* vertical */.KR.BOTTOM && transformOrigin.vertical === usePosition/* vertical */.KR.TOP) {
      offset.top = defaultOffsetSpacing;
    } else if (placement.vertical === usePosition/* vertical */.KR.TOP && transformOrigin.vertical === usePosition/* vertical */.KR.BOTTOM) {
      offset.top = -defaultOffsetSpacing;
    }
    if (placement.horizontal === usePosition/* horizontal */.Sl.RIGHT) {
      offset.left = defaultOffsetSpacing;
    }
    return offset;
  };
  return {
    calculateDefaultOffset: calculateDefaultOffset
  };
};
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenu.tsx
var _excluded = ["trigger", "children", "decorativeElement", "id", "show", "onShow", "onClose", "placement", "offset", "transformOrigin", "debounceAmount", "domRoot", "popoverProps", "value", "onChange"];
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
    offset = _ref.offset,
    _ref$transformOrigin = _ref.transformOrigin,
    transformOrigin = _ref$transformOrigin === void 0 ? {
      horizontal: "left",
      vertical: "top"
    } : _ref$transformOrigin,
    debounceAmount = _ref.debounceAmount,
    domRoot = _ref.domRoot,
    popoverProps = _ref.popoverProps,
    value = _ref.value,
    onChange = _ref.onChange,
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
  var syncSelectedContextMenuItem = setSelectedContextMenuItem;
  (0,react.useEffect)(function () {
    value !== undefined && syncSelectedContextMenuItem(value);
  }, [value]);
  var _useDefaultOffset = useDefaultOffset(),
    calculateDefaultOffset = _useDefaultOffset.calculateDefaultOffset;
  var calculatedOffset = offset !== null && offset !== void 0 ? offset : calculateDefaultOffset(placement, transformOrigin);
  var _useArrowNavigation = useArrowNavigation({
      selectedContextMenuItem: selectedContextMenuItem,
      setSelectedContextMenuItem: setSelectedContextMenuItem,
      focusedContextMenuItem: focusedContextMenuItem,
      setFocusedContextMenuItem: setFocusedContextMenuItem,
      showContextMenu: showContextMenu,
      setShowContextMenu: setShowContextMenu,
      childrenCount: childrenCount,
      setShouldClick: setShouldClick
    }),
    onArrowNavigation = _useArrowNavigation.onArrowNavigation;
  (0,useBodyClick/* useBodyClick */.S)(function (event) {
    return showContextMenu && anchorEl.current !== event.target && anchorEl.current !== event.target.parentElement;
  }, function () {
    setShowContextMenu(false);
  }, showContextMenu);
  (0,react.useEffect)(function () {
    if (showContextMenu === true) {
      onShow === null || onShow === void 0 || onShow();
    } else {
      var _document$activeEleme, _wrappingDivRef$curre;
      onClose === null || onClose === void 0 || onClose();
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
      var _child$props$showActi;
      return /*#__PURE__*/react.cloneElement(child, {
        onFocusChange: function onFocusChange(childIndex) {
          return setFocusedContextMenuItem(childIndex);
        },
        onSelectedChange: function onSelectedChange(event, childIndex) {
          setSelectedContextMenuItem(childIndex);
          setShouldClick(false);
          onChange === null || onChange === void 0 || onChange(event, childIndex);
        },
        childIndex: index,
        hasFocus: focusedContextMenuItem === index,
        isSelected: selectedContextMenuItem === index,
        showActiveState: (_child$props$showActi = child === null || child === void 0 ? void 0 : child.props.showActiveState) !== null && _child$props$showActi !== void 0 ? _child$props$showActi : value !== undefined && selectedContextMenuItem === index,
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
    offset: calculatedOffset,
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
    ContextMenu.__docgenInfo = { "description": "", "displayName": "ContextMenu", "props": { "placement": { "defaultValue": { value: "{ horizontal: \"right\", vertical: \"top\" }" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>, childIndex: number) => void)" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "number" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "trigger": { "defaultValue": null, "description": "", "name": "trigger", "required": true, "type": { "name": "ReactElement<Props, string | JSXElementConstructor<any>> | ReactElement<Props, string | JSXElementConstructor<any>>" } }, "decorativeElement": { "defaultValue": null, "description": "", "name": "decorativeElement", "required": false, "type": { "name": "ReactNode" } }, "transformOrigin": { "defaultValue": { value: "{ horizontal: \"left\", vertical: \"top\" }" }, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": { value: "false" }, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "onShow": { "defaultValue": null, "description": "", "name": "onShow", "required": false, "type": { "name": "(() => void)" } }, "popoverProps": { "defaultValue": null, "description": "", "name": "popoverProps", "required": false, "type": { "name": "Props" } } } };
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
var _excluded = ["children", "onClick", "onFocusChange", "onSelectedChange", "hasFocus", "isSelected", "showActiveState", "childIndex", "contextMenuOpened", "shouldClick", "className"];
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
    showActiveState = _ref.showActiveState,
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
    role: "menuitem",
    className: showActiveState ? ContextMenu_ContextMenuItem_module["active"] : undefined
  }, rest, {
    ref: innerButtonRef,
    "data-focus": hasFocus,
    tabIndex: -1,
    onClick: function onClick(event) {
      _onClick === null || _onClick === void 0 || _onClick(event);
      childIndex !== undefined && (onSelectedChange === null || onSelectedChange === void 0 ? void 0 : onSelectedChange(event, childIndex));
    }
  }), children));
};
var ContextMenuItem = /*#__PURE__*/react.forwardRef(ContextMenuItemComponent);
try {
    // @ts-ignore
    ContextMenuItem.displayName = "ContextMenuItem";
    // @ts-ignore
    ContextMenuItem.__docgenInfo = { "description": "", "displayName": "ContextMenuItem", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": null, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "showActiveState": { "defaultValue": null, "description": "", "name": "showActiveState", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "contextMenuOpened": { "defaultValue": null, "description": "", "name": "contextMenuOpened", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "onSelectedChange": { "defaultValue": null, "description": "", "name": "onSelectedChange", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>, childIndex: number) => void)" } } } };
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

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ filterProps; },
/* harmony export */   MU: function() { return /* binding */ getValueByPath; },
/* harmony export */   Pb: function() { return /* binding */ isJsonString; },
/* harmony export */   R3: function() { return /* binding */ areArraysDifferent; },
/* harmony export */   cv: function() { return /* binding */ remToPx; },
/* harmony export */   y: function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
var deepMerge = function deepMerge(obj1, obj2) {
  if (!obj2) return obj1;
  var result = _objectSpread({}, obj1);
  for (var _key2 in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, _key2)) {
      if (_typeof(obj2[_key2]) === "object" && obj2[_key2] !== null && Object.prototype.hasOwnProperty.call(obj1, _key2) && !Array.isArray(obj2[_key2])) {
        result[_key2] = deepMerge(obj1[_key2], obj2[_key2]);
      } else {
        result[_key2] = obj2[_key2];
      }
    }
  }
  return result;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
}
catch (__react_docgen_typescript_loader_error) { }

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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ContextMenu-module__context-menu--HlZKn{position:relative;display:inline-block;box-sizing:border-box}.ContextMenu-module__menu--sDCMr{white-space:nowrap;margin:.25rem 0;list-style:none;padding:0;min-width:10rem}.ContextMenu-module__menu--sDCMr.ContextMenu-module__no-margin-top--VlUzz{margin:0 0 .25rem}.ContextMenu-module__menu--sDCMr button{text-align:left}.ContextMenu-module__decorative-element--euBeh{margin-top:.5rem}", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ContextMenuItem-module__sr-only--G84DU{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.ContextMenuItem-module__hidden--vS9qC{display:none}.ContextMenuItem-module__slide-in--bLtbG{animation:ContextMenuItem-module__slide-in--bLtbG .5s forwards}@media(prefers-reduced-motion: reduce){.ContextMenuItem-module__slide-in--bLtbG{animation-duration:.1ms}}.ContextMenuItem-module__slide-out--eDEux{animation:ContextMenuItem-module__slide-out--eDEux .5s forwards}@media(prefers-reduced-motion: reduce){.ContextMenuItem-module__slide-out--eDEux{animation-duration:.1ms}}@keyframes ContextMenuItem-module__slide-in--bLtbG{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes ContextMenuItem-module__slide-out--eDEux{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.ContextMenuItem-module__context-menu-item--cSBEA{position:relative}.ContextMenuItem-module__context-menu-item--cSBEA button{background-color:rgba(0,0,0,0);border:0;font-family:var(--font-family);font-size:var(--font-size-form-label);line-height:1.25rem;cursor:pointer;width:100%;height:100%;padding:.62rem .75rem;box-sizing:border-box}.ContextMenuItem-module__context-menu-item--cSBEA button:focus-visible{outline:none}.ContextMenuItem-module__context-menu-item--cSBEA button:focus-visible::after{outline:.125rem solid var(--color-focus);outline-offset:0;border-radius:var(--focus-border-radius);content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;z-index:101}.ContextMenuItem-module__context-menu-item--cSBEA button:hover{background-color:var(--context-menu-hover-color)}.ContextMenuItem-module__context-menu-item--cSBEA button:active{background-color:var(--context-menu-pressed-color)}.ContextMenuItem-module__context-menu-item--cSBEA button.ContextMenuItem-module__active--qO1rv{color:var(--color-primary)}.ContextMenuItem-module__context-menu-item--cSBEA button.ContextMenuItem-module__active--qO1rv::before{content:\"\";position:absolute;top:0;left:0;height:100%;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "ContextMenuItem-module__sr-only--G84DU",
	"hidden": "ContextMenuItem-module__hidden--vS9qC",
	"slide-in": "ContextMenuItem-module__slide-in--bLtbG",
	"slide-out": "ContextMenuItem-module__slide-out--eDEux",
	"context-menu-item": "ContextMenuItem-module__context-menu-item--cSBEA",
	"active": "ContextMenuItem-module__active--qO1rv"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);