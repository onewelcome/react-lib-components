(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[409],{

/***/ "./src/components/Form/Select/SingleSelect/Option.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
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



const OptionComponent = (_ref, ref) => {
  let {
    children,
    className,
    isSelected = false,
    shouldClick,
    hasFocus,
    selectOpened,
    isSearching,
    childIndex,
    onOptionSelect,
    onFocusChange,
    disabled,
    value,
    isAddBtnFocused,
    ...rest
  } = _ref;
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching && !isAddBtnFocused) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);
  const onSelectHandler = () => onOptionSelect === null || onOptionSelect === void 0 ? void 0 : onOptionSelect(innerOptionRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({}, rest, {
    ref: innerOptionRef,
    "data-value": value,
    className: "".concat(isSelected ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z["selected-option"] : "", " ").concat(disabled ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.disabled : "", " ").concat(className !== null && className !== void 0 ? className : ""),
    onClick: onSelectHandler,
    onKeyDown: event => {
      if (event.code === "Enter") {
        event.stopPropagation();
        event.preventDefault();
        onSelectHandler();
      }
    },
    "aria-selected": isSelected,
    role: "option",
    tabIndex: disabled ? -1 : 0
  }), children);
};
const Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(OptionComponent);
try {
    // @ts-ignore
    Option.displayName = "Option";
    // @ts-ignore
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/SingleSelect/Select.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _hooks_useBodyClick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/hooks/useBodyClick.ts");
/* harmony import */ var _hooks_useDetermineStatusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
/* harmony import */ var _readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/readyclasses.module.scss");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/util/helper.tsx");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Icon/Icon.tsx");
/* harmony import */ var _SelectService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Form/Select/SelectService.ts");
/* harmony import */ var _useAddNewBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/Select/useAddNewBtn.tsx");
/* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Select/useSearch.tsx");
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











const SelectComponent = (_ref, ref) => {
  let {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    searchPlaceholder = "Search item",
    searchInputProps,
    selectButtonProps,
    className,
    error = false,
    success = false,
    value,
    clearLabel = "Clear selection",
    noResultsLabel = "No results found",
    onChange,
    addNew,
    search,
    ...rest
  } = _ref;
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const containerReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const optionListReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [focusedSelectItem, setFocusedSelectItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const optionsCount = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children);
  const {
    filter,
    isSearching,
    renderSearch,
    searchInputRef,
    setIsSearching,
    searchThreshold,
    searchVisible
  } = (0,_useSearch__WEBPACK_IMPORTED_MODULE_3__/* .useSearch */ .R)({
    expanded,
    search,
    searchInputClassName: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["select-search"],
    optionsCount,
    setFocusedSelectItem,
    searchInputProps,
    searchPlaceholder
  });
  const {
    addBtnRef,
    addNewBtnOptionsContainerClassName,
    renderAddNew
  } = (0,_useAddNewBtn__WEBPACK_IMPORTED_MODULE_4__/* .useAddNewBtn */ .Z)({
    addNew,
    filter
  });
  const nativeSelect = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  const onOptionChangeHandler = optionElement => {
    if (nativeSelect.current && optionElement) {
      nativeSelect.current.value = optionElement.getAttribute("data-value");
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    setExpanded(false);
  };
  const customSelectButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    onArrowNavigation
  } = (0,_SelectService__WEBPACK_IMPORTED_MODULE_5__/* .useArrowNavigation */ .r)({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount: optionsCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold: searchThreshold
  });
  const {
    listPosition,
    opacity,
    optionsListMaxHeight,
    setListPosition,
    setOpacity
  } = (0,_SelectService__WEBPACK_IMPORTED_MODULE_5__/* .useSelectPositionList */ .i)({
    expanded,
    optionListReference,
    containerReference,
    addBtnRef
  });
  const syncDisplayValue = val => {
    react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, child => {
      if (child.props.value === val) {
        setDisplay(child.props.children);
      }
    });
  };

  /**
   * @description We have to modify the children (Option component) to have an additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    if (isSearching || filter !== "") {
      const filteredChildren = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).filter(child => child.props.children.toLowerCase().match(filter.toLowerCase()) !== null);
      const internalChildren = _internalRenderChildren(filteredChildren);
      if (internalChildren.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
          className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["no-results"]
        }, noResultsLabel);
      }
      return _internalRenderChildren(filteredChildren);
    }
    return _internalRenderChildren(children);
    function _internalRenderChildren(internalChildren) {
      return react__WEBPACK_IMPORTED_MODULE_1__.Children.map(internalChildren, (child, index) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, {
          onFocusChange: childIndex => {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: optionRef => {
            onOptionChangeHandler(optionRef.current);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick,
          isAddBtnFocused: addBtnRef.current === document.activeElement
        });
      });
    }
  };
  const renderChevronIcon = () => {
    return expanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J, {
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["chevron-icon"],
      icon: _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icons */ .P.ChevronUp
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J, {
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["chevron-icon"],
      icon: _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icons */ .P.ChevronDown
    });
  };
  const icon = (0,_hooks_useDetermineStatusIcon__WEBPACK_IMPORTED_MODULE_7__/* .useDetermineStatusIcon */ .U)({
    success,
    error
  });
  const nativeOnChangeHandler = event => {
    onChange === null || onChange === void 0 || onChange(event);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (expanded) {
      setFocusedSelectItem(0);
      setShouldFocusButtonAfterClose(true);
    }
    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      customSelectButtonRef.current.focus();
      setShouldFocusButtonAfterClose(false);
    }
  }, [expanded, customSelectButtonRef.current, shouldFocusButtonAfterClose]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    syncDisplayValue(value);
  }, [value]);
  (0,_hooks_useBodyClick__WEBPACK_IMPORTED_MODULE_8__/* .useBodyClick */ .S)(event => !event.target.closest(".custom-select") && expanded, () => {
    setExpanded(false);
    setListPosition({
      top: 0,
      bottom: "initial"
    });
    setOpacity(0);
  }, expanded);
  const additionalClasses = [];
  expanded && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.expanded);
  error && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error);
  disabled && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", _extends({}, (0,_util_helper__WEBPACK_IMPORTED_MODULE_9__/* .filterProps */ .L6)(rest, /^data-/, false), {
    tabIndex: -1,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: _readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z["sr-only"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: ""
  }), react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: child.props.value
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", _extends({}, (0,_util_helper__WEBPACK_IMPORTED_MODULE_9__/* .filterProps */ .L6)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.select, " ").concat(additionalClasses.join(" "), " ").concat(className !== null && className !== void 0 ? className : "")
  }), searchVisible && renderSearch(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", _extends({}, selectButtonProps, {
    onClick: () => {
      setExpanded(!expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: expanded && searchVisible ? "none" : "initial"
    },
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-invalid": error,
    "aria-expanded": expanded,
    "aria-haspopup": "listbox",
    "aria-labelledby": labeledBy,
    "aria-describedby": describedBy
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "data-display": true,
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["selected"]
  }, !value && placeholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    "data-display-inner": true
  }, display)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["list-wrapper"]),
    style: {
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight.wrapper,
      pointerEvents: expanded ? "auto" : "none",
      ...listPosition
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: addNewBtnOptionsContainerClassName,
    role: "listbox",
    style: {
      maxHeight: optionsListMaxHeight.list
    }
  }, renderOptions()), renderAddNew())));
};
const Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(SelectComponent);
try {
    // @ts-ignore
    Select.displayName = "Select";
    // @ts-ignore
    Select.__docgenInfo = { "description": "", "displayName": "Select", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "searchPlaceholder": { "defaultValue": { value: "Search item" }, "description": "@deprecated", "name": "searchPlaceholder", "required": false, "type": { "name": "string" } }, "searchInputProps": { "defaultValue": null, "description": "@deprecated", "name": "searchInputProps", "required": false, "type": { "name": "(Partial<Props> & { reset?: boolean; })" } }, "selectButtonProps": { "defaultValue": null, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; })" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } }, "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "AddNewProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Select.tsx#Select"] = { docgenInfo: Select.__docgenInfo, name: "Select", path: "src/components/Form/Select/SingleSelect/Select.tsx#Select" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Pagination/Pagination.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ Pagination)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss");
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Pagination_module/* default */.Z, options);




       /* harmony default export */ const Pagination_Pagination_module = (Pagination_module/* default */.Z && Pagination_module/* default */.Z.locals ? Pagination_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx
var Select = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
// EXTERNAL MODULE: ./src/components/Form/Label/Label.tsx + 1 modules
var Label = __webpack_require__("./src/components/Form/Label/Label.tsx");
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.tsx
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









var DefaultTranslations = /*#__PURE__*/function (DefaultTranslations) {
  DefaultTranslations["totalItems"] = "items in total";
  DefaultTranslations["itemsPerPage"] = "Items per page";
  DefaultTranslations["currentPage"] = "of %1 pages";
  DefaultTranslations["itemsPerPageLabel"] = "Select how many items per page you want to see.";
  DefaultTranslations["currentPageLabel"] = "What page you are currently on.";
  return DefaultTranslations;
}(DefaultTranslations || {});
const PaginationComponent = (_ref, ref) => {
  let {
    totalElements,
    pageSize = 10,
    translate = DefaultTranslations,
    currentPage,
    className,
    onPageChange,
    onPageSizeChange,
    ...rest
  } = _ref;
  const calculateAmountOfPages = () => {
    if (!totalElements) return 1;
    if (Math.ceil(totalElements / pageSize) < 1) {
      return 1;
    }
    return Math.ceil(totalElements / pageSize);
  };
  const pagesAmount = calculateAmountOfPages();
  const [resetPageNoSelect, setResetPageNoSelect] = (0,react.useState)(false);
  const onPageSizeChangeHandler = event => {
    const pageSizeNumber = Number(event.target.value);
    setResetPageNoSelect(true);
    onPageSizeChange(pageSizeNumber);
  };
  const onPageChangeHandler = pageToGoTo => {
    onPageChange(pageToGoTo);
  };
  (0,react.useEffect)(() => {
    resetPageNoSelect && setResetPageNoSelect(false);
  }, [resetPageNoSelect]);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(Pagination_Pagination_module["pagination-wrapper"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["left"]
  }, pageSize && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["per-page"]
  }, /*#__PURE__*/react.createElement(Label/* Label */._, {
    id: "page-size-select-label"
  }, translate.itemsPerPage), /*#__PURE__*/react.createElement(Select/* Select */.P, {
    labeledBy: "page-size-select-label",
    className: "".concat(Pagination_Pagination_module["form-element"], " ").concat(Pagination_Pagination_module["page-size-select"]),
    value: pageSize.toString(),
    onChange: onPageSizeChangeHandler
  }, /*#__PURE__*/react.createElement(Option/* Option */.W, {
    value: "10"
  }, "10"), /*#__PURE__*/react.createElement(Option/* Option */.W, {
    value: "25"
  }, "25"), /*#__PURE__*/react.createElement(Option/* Option */.W, {
    value: "50"
  }, "50"))), totalElements && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["total"]
  }, /*#__PURE__*/react.createElement("span", {
    tabIndex: 0
  }, totalElements, "\xA0", translate.totalItems))), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["pagination"]
  }, /*#__PURE__*/react.createElement(react.Fragment, null, totalElements && !!pagesAmount && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["page"]
  }, /*#__PURE__*/react.createElement(Label/* Label */._, {
    id: "current-value-input-label",
    htmlFor: "current-value-input",
    className: "".concat(readyclasses_module/* default */.Z["sr-only"], " ").concat(Pagination_Pagination_module["current-value-select-label"])
  }, translate.currentPageLabel), /*#__PURE__*/react.createElement(Select/* Select */.P, {
    labeledBy: "current-value-input-label",
    key: "input",
    id: "current-value-input",
    size: currentPage.toString().length,
    onChange: e => onPageChangeHandler(Number(e.target.value)),
    name: "current-value-input",
    value: currentPage.toString(),
    className: "".concat(Pagination_Pagination_module["form-element"], " ").concat(Pagination_Pagination_module["current-page-select"]),
    searchInputProps: {
      wrapperProps: {
        className: Pagination_Pagination_module["search-input-wrapper"]
      },
      reset: resetPageNoSelect,
      autoComplete: "off"
    }
  }, Array.from(Array(pagesAmount).keys()).map(page => /*#__PURE__*/react.createElement(Option/* Option */.W, {
    key: page,
    value: (page + 1).toString()
  }, (page + 1).toString()))), /*#__PURE__*/react.createElement("span", {
    className: Pagination_Pagination_module["page-total"]
  }, translate.currentPage.replace("%1", Math.ceil(totalElements / pageSize).toString()))), !!currentPage && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["previous"]
  }, /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    disabled: currentPage <= 1,
    title: "first",
    onClick: () => onPageChangeHandler(1),
    "data-paginate": "first"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.NavigationFirst
  })), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    disabled: currentPage <= 1,
    title: "previous",
    onClick: () => onPageChangeHandler(currentPage - 1),
    "data-paginate": "previous"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.ChevronLeft
  }))), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["next"]
  }, !!(currentPage !== undefined || currentPage !== undefined && !totalElements) && /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    disabled: currentPage >= pagesAmount,
    title: "next",
    onClick: () => onPageChangeHandler(currentPage + 1),
    "data-paginate": "next"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.ChevronRight
  })), !!(currentPage && totalElements) && /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    disabled: currentPage >= pagesAmount,
    title: "last",
    onClick: () => onPageChangeHandler(Math.ceil(totalElements / pageSize)),
    "data-paginate": "last"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.NavigationLast
  }))))));
};
const Pagination = /*#__PURE__*/react.forwardRef(PaginationComponent);
try {
    // @ts-ignore
    Pagination.displayName = "Pagination";
    // @ts-ignore
    Pagination.__docgenInfo = { "description": "", "displayName": "Pagination", "props": { "translate": { "defaultValue": null, "description": "", "name": "translate", "required": false, "type": { "name": "PaginationTranslations" } }, "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "totalElements": { "defaultValue": null, "description": "", "name": "totalElements", "required": false, "type": { "name": "number" } }, "pageSize": { "defaultValue": { value: "10" }, "description": "", "name": "pageSize", "required": false, "type": { "name": "enum", "value": [{ "value": "10" }, { "value": "25" }, { "value": "50" }] } }, "onPageChange": { "defaultValue": null, "description": "", "name": "onPageChange", "required": true, "type": { "name": "(pageToGoTo: number) => void" } }, "onPageSizeChange": { "defaultValue": null, "description": "", "name": "onPageSizeChange", "required": true, "type": { "name": "(pageSize: PageSize) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"] = { docgenInfo: Pagination.__docgenInfo, name: "Pagination", path: "src/components/Pagination/Pagination.tsx#Pagination" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 */.Pagination-module__pagination-wrapper--rXCDG{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--default-line-height);color:var(--greyed-out);display:flex;flex-direction:column;justify-content:space-between}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__left--TsLD0{display:flex}.Pagination-module__pagination-wrapper--rXCDG label{margin-bottom:0}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM{height:2.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM .Pagination-module__search-input-wrapper--jwTaM{width:2.75rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM button{min-height:2.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_{flex:1 0 auto;display:flex;align-items:center;justify-content:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_ span{color:var(--color-blue-grey500)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6{flex:1 0 auto;display:flex;align-items:center;justify-content:center;margin-top:1rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg{display:flex;align-items:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r button span:before,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg button span:before{font-size:.75rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C{display:none;align-items:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C label{font-weight:500;color:var(--color-blue-grey900)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C+.Pagination-module__total--jFLJ_{padding-left:.9375rem;border-left:1px solid var(--color-blue-grey100)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page--G5Zd_{display:flex;align-items:center;flex-basis:min-content;padding-right:1rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-total--WTVfR{display:inline-block;margin-left:.5rem;white-space:nowrap;font-weight:500;color:var(--color-blue-grey900)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page--G5Zd_+.Pagination-module__previous--DsV1r{padding-left:.9375rem;border-left:1px solid var(--color-blue-grey100)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2{margin:0 .25rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button{min-width:3.75rem;padding:0}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button div[data-display]{left:.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button div:not([data-display]){right:.5rem}.Pagination-module__current-page-select--hbMG6 button{min-width:3.75rem;padding:0}.Pagination-module__current-page-select--hbMG6 button div[data-display]{left:.5rem}.Pagination-module__current-page-select--hbMG6 button div:not([data-display]){right:.5rem}@media screen and (min-width: 30em){.Pagination-module__pagination-wrapper--rXCDG{flex-direction:row}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_{justify-content:flex-start}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6{margin-top:0;justify-content:flex-end}}@media screen and (min-width: 48em){.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C{display:flex;margin-right:1rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pagination-wrapper": `Pagination-module__pagination-wrapper--rXCDG`,
	"left": `Pagination-module__left--TsLD0`,
	"form-element": `Pagination-module__form-element--cfBoM`,
	"search-input-wrapper": `Pagination-module__search-input-wrapper--jwTaM`,
	"total": `Pagination-module__total--jFLJ_`,
	"pagination": `Pagination-module__pagination--D8WW6`,
	"previous": `Pagination-module__previous--DsV1r`,
	"next": `Pagination-module__next--sD4Yg`,
	"per-page": `Pagination-module__per-page--KEN2C`,
	"page": `Pagination-module__page--G5Zd_`,
	"page-total": `Pagination-module__page-total--WTVfR`,
	"page-size-select": `Pagination-module__page-size-select--NOhp2`,
	"current-page-select": `Pagination-module__current-page-select--hbMG6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);