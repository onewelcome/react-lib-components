"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4864],{

/***/ "./src/components/ContextMenu/ContextMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ ContextMenu)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenu.module.scss
var ContextMenu_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenu.module.scss");
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenu.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContextMenu_module/* default */.A, options);




       /* harmony default export */ const ContextMenu_ContextMenu_module = (ContextMenu_module/* default */.A && ContextMenu_module/* default */.A.locals ? ContextMenu_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useClickOutside.ts
var useClickOutside = __webpack_require__("./src/hooks/useClickOutside.ts");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
// EXTERNAL MODULE: ./src/hooks/usePosition.ts
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




/** @scope . */
const useArrowNavigation = _ref => {
  let {
    selectedContextMenuItem,
    setSelectedContextMenuItem,
    focusedContextMenuItem,
    setFocusedContextMenuItem,
    showContextMenu,
    setShowContextMenu,
    childrenCount,
    setShouldClick
  } = _ref;
  const onArrowNavigation = event => {
    if (focusedContextMenuItem === -1 && selectedContextMenuItem !== -1) {
      setFocusedContextMenuItem(selectedContextMenuItem);
    }
    const codesToPreventDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter", "Space", "Escape", "End", "Home"];
    if (codesToPreventDefault.includes(event.code)) {
      event.preventDefault();
    }
    switch (event.code) {
      case "ArrowDown":
        if (!showContextMenu) {
          setShowContextMenu(true);
          return;
        }
        setFocusedContextMenuItem(prevState => {
          return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
        });
        return;
      case "ArrowUp":
        setFocusedContextMenuItem(prevState => {
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
    onArrowNavigation
  };
};
const defaultOffsetSpacing = (0,helper/* remToPx */.ir)(0.25);
const useDefaultOffset = () => {
  const calculateDefaultOffset = (placement, transformOrigin) => {
    const offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    if (placement.vertical === usePosition/* vertical */.Vd.BOTTOM && transformOrigin.vertical === usePosition/* vertical */.Vd.TOP) {
      offset.top = defaultOffsetSpacing;
    } else if (placement.vertical === usePosition/* vertical */.Vd.TOP && transformOrigin.vertical === usePosition/* vertical */.Vd.BOTTOM) {
      offset.top = -defaultOffsetSpacing;
    }
    if (placement.horizontal === usePosition/* horizontal */.xM.RIGHT) {
      offset.left = defaultOffsetSpacing;
    }
    return offset;
  };
  return {
    calculateDefaultOffset
  };
};
const useFocusAnchorElement = (anchorEl, id, showContextMenu, setShowContextMenu, setFocusedContextMenuItem, onShow, onClose) => {
  const handleEscapeKeyPress = e => {
    if (e.key === "Escape") {
      setShowContextMenu(false);
      anchorEl.current?.focus();
    }
  };
  const escapeKeyEventHandlerManager = () => {
    if (showContextMenu) {
      document.addEventListener("keydown", handleEscapeKeyPress);
    } else {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    }
  };
  const emitContextMenuEvent = () => {
    if (showContextMenu) {
      onShow?.();
    } else {
      onClose?.();
      if (document.activeElement?.closest(`#${id}-menu`)) {
        anchorEl.current?.focus();
      }
      setFocusedContextMenuItem(-1);
    }
  };
  (0,react.useEffect)(() => {
    escapeKeyEventHandlerManager();
    emitContextMenuEvent();
  }, [showContextMenu]);
};
;// CONCATENATED MODULE: ./src/components/ContextMenu/ContextMenu.tsx
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









const ContextMenuComponent = (_ref, ref) => {
  let {
    trigger,
    children,
    decorativeElement,
    id = `ID-${(0,helper/* generateID */.ni)()}`,
    show = false,
    onShow,
    onClose,
    placement = {
      horizontal: "right",
      vertical: "top"
    },
    offset,
    transformOrigin = {
      horizontal: "left",
      vertical: "top"
    },
    debounceAmount,
    domRoot,
    popoverProps,
    value,
    onChange,
    ...rest
  } = _ref;
  const anchorEl = (0,react.useRef)(null);
  const wrappingDivRef = ref || /*#__PURE__*/(0,react.createRef)();
  const [showContextMenu, setShowContextMenu] = (0,react.useState)(show);
  const [selectedContextMenuItem, setSelectedContextMenuItem] = (0,react.useState)(-1);
  const [focusedContextMenuItem, setFocusedContextMenuItem] = (0,react.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react.useState)(false); /** We need this, because whenever we use the arrow keys to select the contextmenu item, and we focus the currently selected item it fires the "click" listener in ContextMenuItem component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [childrenCount] = (0,react.useState)(react.Children.count(children));
  const {
    root
  } = (0,useGetDomRoot/* useGetDomRoot */.i)(domRoot, wrappingDivRef);
  const syncSelectedContextMenuItem = setSelectedContextMenuItem;
  (0,react.useEffect)(() => {
    value !== undefined && syncSelectedContextMenuItem(value);
  }, [value]);
  const {
    calculateDefaultOffset
  } = useDefaultOffset();
  const calculatedOffset = offset ?? calculateDefaultOffset(placement, transformOrigin);
  const {
    onArrowNavigation
  } = useArrowNavigation({
    selectedContextMenuItem,
    setSelectedContextMenuItem,
    focusedContextMenuItem,
    setFocusedContextMenuItem,
    showContextMenu,
    setShowContextMenu,
    childrenCount,
    setShouldClick
  });
  (0,useClickOutside/* useClickOutside */.L)(anchorEl, () => {
    if (showContextMenu) {
      setShowContextMenu(false);
    }
  }, [showContextMenu]);
  useFocusAnchorElement(anchorEl, id, showContextMenu, setShowContextMenu, setFocusedContextMenuItem, onShow, onClose);
  const renderTrigger = () => /*#__PURE__*/react.cloneElement(trigger, {
    id: id,
    "aria-haspopup": "true",
    "aria-controls": `${id}-menu`,
    "aria-expanded": showContextMenu,
    onClick: () => setShowContextMenu(!showContextMenu),
    tabIndex: 0,
    ref: anchorEl
  });
  const renderChildren = () => react.Children.map(children, (child, index) => /*#__PURE__*/react.cloneElement(child, {
    onFocusChange: childIndex => setFocusedContextMenuItem(childIndex),
    onSelectedChange: (event, childIndex) => {
      setSelectedContextMenuItem(childIndex);
      setShouldClick(false);
      onChange?.(event, childIndex);
    },
    childIndex: index,
    hasFocus: focusedContextMenuItem === index,
    isSelected: selectedContextMenuItem === index,
    showActiveState: child?.props.showActiveState ?? (value !== undefined && selectedContextMenuItem === index),
    contextMenuOpened: showContextMenu,
    shouldClick: shouldClick
  }));
  const onOutOfViewHandler = (0,react.useCallback)(() => {
    setShowContextMenu(false);
  }, []);
  if (!root) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: wrappingDivRef,
    onKeyDown: onArrowNavigation,
    className: ContextMenu_ContextMenu_module["context-menu"]
  }), renderTrigger(), /*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/react.createElement(Popover/* Popover */.A, _extends({}, popoverProps, {
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
    className: `${ContextMenu_ContextMenu_module["menu"]} ${decorativeElement ? ContextMenu_ContextMenu_module["no-margin-top"] : ""}`,
    id: `${id}-menu`,
    "aria-describedby": id,
    role: "menu"
  }, renderChildren())), root));
};
const ContextMenu = /*#__PURE__*/react.forwardRef(ContextMenuComponent);
try {
    // @ts-ignore
    ContextMenu.displayName = "ContextMenu";
    // @ts-ignore
    ContextMenu.__docgenInfo = { "description": "", "displayName": "ContextMenu", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "number" } }, "id": { "defaultValue": { value: "`ID-${generateID()}`" }, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>, childIndex: number) => void)" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "placement": { "defaultValue": { value: "{ horizontal: \"right\", vertical: \"top\" }" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "trigger": { "defaultValue": null, "description": "", "name": "trigger", "required": true, "type": { "name": "ReactElement<Props, string | JSXElementConstructor<any>> | ReactElement<Props, string | JSXElementConstructor<any>>" } }, "decorativeElement": { "defaultValue": null, "description": "", "name": "decorativeElement", "required": false, "type": { "name": "ReactNode" } }, "transformOrigin": { "defaultValue": { value: "{ horizontal: \"left\", vertical: \"top\" }" }, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": { value: "false" }, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "onShow": { "defaultValue": null, "description": "", "name": "onShow", "required": false, "type": { "name": "(() => void)" } }, "popoverProps": { "defaultValue": null, "description": "", "name": "popoverProps", "required": false, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/ContextMenu/ContextMenu.tsx#ContextMenu"] = { docgenInfo: ContextMenu.__docgenInfo, name: "ContextMenu", path: "src/components/ContextMenu/ContextMenu.tsx#ContextMenu" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/ContextMenu/ContextMenuItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ContextMenuItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.module.scss");
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



const ContextMenuItemComponent = (_ref, ref) => {
  let {
    children,
    onClick,
    onFocusChange,
    onSelectedChange,
    hasFocus,
    isSelected,
    showActiveState,
    childIndex,
    contextMenuOpened,
    shouldClick,
    className,
    ...rest
  } = _ref;
  const innerButtonRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSelected && innerButtonRef.current && shouldClick) {
      innerButtonRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (innerButtonRef.current && hasFocus && contextMenuOpened) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerButtonRef.current.focus();
    }
  }, [hasFocus, innerButtonRef, contextMenuOpened]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    role: "none",
    className: `${_ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["context-menu-item"]} ${className ?? ""}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({
    role: "menuitem",
    className: showActiveState ? _ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["active"] : undefined
  }, rest, {
    ref: innerButtonRef,
    "data-focus": hasFocus,
    tabIndex: -1,
    onClick: event => {
      onClick?.(event);
      childIndex !== undefined && onSelectedChange?.(event, childIndex);
    }
  }), children));
};
const ContextMenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ContextMenuItemComponent);
try {
    // @ts-ignore
    ContextMenuItem.displayName = "ContextMenuItem";
    // @ts-ignore
    ContextMenuItem.__docgenInfo = { "description": "", "displayName": "ContextMenuItem", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } }, "isSelected": { "defaultValue": null, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "showActiveState": { "defaultValue": null, "description": "", "name": "showActiveState", "required": false, "type": { "name": "boolean" } }, "contextMenuOpened": { "defaultValue": null, "description": "", "name": "contextMenuOpened", "required": false, "type": { "name": "boolean" } }, "onSelectedChange": { "defaultValue": null, "description": "", "name": "onSelectedChange", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>, childIndex: number) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/ContextMenu/ContextMenuItem.tsx#ContextMenuItem"] = { docgenInfo: ContextMenuItem.__docgenInfo, name: "ContextMenuItem", path: "src/components/ContextMenu/ContextMenuItem.tsx#ContextMenuItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenu.module.scss":
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
 */.ContextMenu-module__context-menu--HlZKn{position:relative;display:inline-block;box-sizing:border-box}.ContextMenu-module__menu--sDCMr{white-space:nowrap;margin:.25rem 0;list-style:none;padding:0;min-width:10rem}.ContextMenu-module__menu--sDCMr.ContextMenu-module__no-margin-top--VlUzz{margin:0 0 .25rem}.ContextMenu-module__menu--sDCMr button{text-align:left}.ContextMenu-module__decorative-element--euBeh{margin-top:.5rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"context-menu": `ContextMenu-module__context-menu--HlZKn`,
	"menu": `ContextMenu-module__menu--sDCMr`,
	"no-margin-top": `ContextMenu-module__no-margin-top--VlUzz`,
	"decorative-element": `ContextMenu-module__decorative-element--euBeh`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenuItem.module.scss":
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
 */.ContextMenuItem-module__sr-only--G84DU{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.ContextMenuItem-module__hidden--vS9qC{display:none}.ContextMenuItem-module__slide-in--bLtbG{animation:ContextMenuItem-module__slide-in--bLtbG .5s forwards}@media(prefers-reduced-motion: reduce){.ContextMenuItem-module__slide-in--bLtbG{animation-duration:.1ms}}.ContextMenuItem-module__slide-out--eDEux{animation:ContextMenuItem-module__slide-out--eDEux .5s forwards}@media(prefers-reduced-motion: reduce){.ContextMenuItem-module__slide-out--eDEux{animation-duration:.1ms}}@keyframes ContextMenuItem-module__slide-in--bLtbG{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes ContextMenuItem-module__slide-out--eDEux{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.ContextMenuItem-module__context-menu-item--cSBEA{position:relative}.ContextMenuItem-module__context-menu-item--cSBEA button{background-color:rgba(0,0,0,0);border:0;font-family:var(--font-family);font-size:var(--context-menu-font-size);line-height:1.43;cursor:pointer;width:100%;height:100%;padding:.62rem .75rem;box-sizing:border-box}.ContextMenuItem-module__context-menu-item--cSBEA button:focus-visible{outline:none}.ContextMenuItem-module__context-menu-item--cSBEA button:focus-visible::after{content:"";position:absolute;top:0;left:0;height:100%;width:100%;z-index:101;outline:.125rem solid var(--color-focus);outline-offset:0;border-radius:var(--focus-border-radius)}.ContextMenuItem-module__context-menu-item--cSBEA button:hover{background-color:var(--context-menu-hover-color)}.ContextMenuItem-module__context-menu-item--cSBEA button:active{background-color:var(--context-menu-pressed-color)}.ContextMenuItem-module__context-menu-item--cSBEA button.ContextMenuItem-module__active--qO1rv{color:var(--color-primary)}.ContextMenuItem-module__context-menu-item--cSBEA button.ContextMenuItem-module__active--qO1rv::before{content:"";position:absolute;top:0;left:0;height:100%;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `ContextMenuItem-module__sr-only--G84DU`,
	"hidden": `ContextMenuItem-module__hidden--vS9qC`,
	"slide-in": `ContextMenuItem-module__slide-in--bLtbG`,
	"slide-out": `ContextMenuItem-module__slide-out--eDEux`,
	"context-menu-item": `ContextMenuItem-module__context-menu-item--cSBEA`,
	"active": `ContextMenuItem-module__active--qO1rv`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/ContextMenu/ContextMenuItem.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ContextMenu/ContextMenuItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ContextMenuItem_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

}]);