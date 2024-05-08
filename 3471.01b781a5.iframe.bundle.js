"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3471],{

/***/ "./src/components/Form/Select/SingleSelect/Select.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select)
});

// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.module.scss
var Select_module = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/hooks/useBodyClick.ts
var useBodyClick = __webpack_require__("./src/hooks/useBodyClick.ts");
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/useSelectPositionList.ts
var useSelectPositionList = __webpack_require__("./src/components/Form/Select/useSelectPositionList.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/useAddNewBtn.tsx + 1 modules
var useAddNewBtn = __webpack_require__("./src/components/Form/Select/useAddNewBtn.tsx");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/useSearch.tsx
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



/** @scope .*/
const useSearch = _ref => {
  var _search$renderThresho, _search$searchInputPr5;
  let {
    search,
    optionsCount,
    searchPlaceholder,
    searchInputProps,
    searchInputClassName,
    expanded,
    setFocusedSelectItem
  } = _ref;
  const [filter, setFilter] = (0,react.useState)("");
  const [isSearching, setIsSearching] = (0,react.useState)(false);
  const DEFAULT_RENDER_THRESHOLD = 10;
  const searchInputRef = (0,react.useRef)(null);
  const threshold = (_search$renderThresho = search === null || search === void 0 ? void 0 : search.renderThreshold) !== null && _search$renderThresho !== void 0 ? _search$renderThresho : DEFAULT_RENDER_THRESHOLD;
  const hasEnoughChildren = optionsCount >= threshold;
  const filterResults = event => {
    setFilter(event.currentTarget.value);
  };
  const shouldRenderSearch = () => {
    if (search !== null && search !== void 0 && search.enabled) {
      return hasEnoughChildren;
    }
    if (search) {
      return search.enabled;
    }
    return optionsCount > DEFAULT_RENDER_THRESHOLD;
  };
  const renderSearch = () => {
    var _ref2, _search$searchInputPr, _search$searchInputPr2, _search$searchInputPr3, _searchInputProps$wra, _search$searchPlaceho;
    return /*#__PURE__*/react.createElement(Input/* Input */.p, _extends({}, (_ref2 = (_search$searchInputPr = search === null || search === void 0 ? void 0 : search.searchInputProps) !== null && _search$searchInputPr !== void 0 ? _search$searchInputPr : searchInputProps) !== null && _ref2 !== void 0 ? _ref2 : {}, {
      ref: searchInputRef,
      onFocus: () => setIsSearching(true),
      onBlur: () => setIsSearching(false),
      onChange: filterResults,
      className: searchInputClassName,
      wrapperProps: {
        className: (_search$searchInputPr2 = search === null || search === void 0 || (_search$searchInputPr3 = search.searchInputProps) === null || _search$searchInputPr3 === void 0 || (_search$searchInputPr3 = _search$searchInputPr3.wrapperProps) === null || _search$searchInputPr3 === void 0 ? void 0 : _search$searchInputPr3.className) !== null && _search$searchInputPr2 !== void 0 ? _search$searchInputPr2 : searchInputProps === null || searchInputProps === void 0 || (_searchInputProps$wra = searchInputProps.wrapperProps) === null || _searchInputProps$wra === void 0 ? void 0 : _searchInputProps$wra.className
      },
      style: {
        display: expanded ? "block" : "none"
      },
      type: "text",
      name: "search-option",
      placeholder: (_search$searchPlaceho = search === null || search === void 0 ? void 0 : search.searchPlaceholder) !== null && _search$searchPlaceho !== void 0 ? _search$searchPlaceho : searchPlaceholder
    }));
  };
  const resetSearchState = () => {
    setFilter("");
    setIsSearching(false);
    setFocusedSelectItem(-1);
  };
  const visible = shouldRenderSearch();
  (0,react.useEffect)(() => {
    var _search$searchInputPr4;
    ((search === null || search === void 0 || (_search$searchInputPr4 = search.searchInputProps) === null || _search$searchInputPr4 === void 0 ? void 0 : _search$searchInputPr4.reset) || (searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset)) && resetSearchState();
  }, [searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset, search === null || search === void 0 || (_search$searchInputPr5 = search.searchInputProps) === null || _search$searchInputPr5 === void 0 ? void 0 : _search$searchInputPr5.reset]);
  (0,react.useEffect)(() => {
    const searchDeactivated = !visible && !isSearching; /*solves issue in MultiSelect when we filtered result and selected result causes list to be shorter than threshold so still we have a filter applied but can't change it due to `visible` variable has false  */
    if (searchDeactivated) {
      resetSearchState();
    }
  }, [isSearching, visible]);
  return {
    renderSearch,
    setIsSearching,
    searchVisible: visible,
    searchThreshold: threshold,
    searchInputRef,
    filter,
    isSearching
  };
};
try {
    // @ts-ignore
    useSearch.displayName = "useSearch";
    // @ts-ignore
    useSearch.__docgenInfo = { "description": "", "displayName": "useSearch", "props": { "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "optionsCount": { "defaultValue": null, "description": "", "name": "optionsCount", "required": true, "type": { "name": "number" } }, "searchPlaceholder": { "defaultValue": null, "description": "@deprecated", "name": "searchPlaceholder", "required": false, "type": { "name": "string" } }, "searchInputProps": { "defaultValue": null, "description": "@deprecated", "name": "searchInputProps", "required": false, "type": { "name": "(Partial<Props> & { reset?: boolean; })" } }, "searchInputClassName": { "defaultValue": null, "description": "", "name": "searchInputClassName", "required": true, "type": { "name": "string" } }, "expanded": { "defaultValue": null, "description": "", "name": "expanded", "required": true, "type": { "name": "boolean" } }, "setFocusedSelectItem": { "defaultValue": null, "description": "", "name": "setFocusedSelectItem", "required": true, "type": { "name": "(idx: number) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/useSearch.tsx#useSearch"] = { docgenInfo: useSearch.__docgenInfo, name: "useSearch", path: "src/components/Form/Select/SingleSelect/useSearch.tsx#useSearch" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/useArrowNavigation.ts
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

/** @scope .*/
const useArrowNavigation = _ref => {
  let {
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold
  } = _ref;
  const onArrowNavigation = event => {
    const codesToPreventDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space", "Escape", "End", "Home"];
    const codesToPreventDefaultWhenSearching = ["ArrowDown", "ArrowUp", "Enter", "Escape", "MetaLeft", "MetaRight"];
    const isAddBtnFocused = (addBtnRef === null || addBtnRef === void 0 ? void 0 : addBtnRef.current) === document.activeElement;
    if (expanded) {
      codesToPreventDefault.push("Tab");
    }
    if (addBtnRef) {
      codesToPreventDefaultWhenSearching.push("Tab");
    }
    if (codesToPreventDefault.includes(event.code) && !event.metaKey && !isSearching) {
      event.preventDefault();
    }
    if (isSearching && codesToPreventDefaultWhenSearching.includes(event.code)) {
      event.preventDefault();
    }
    if (isSearching) {
      switch (event.code) {
        case "ArrowDown":
        case "Enter":
          setIsSearching(false);
          setFocusedSelectItem(0);
          return;
        case "ArrowUp":
          setIsSearching(false);
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "Escape":
          setIsSearching(false);
          setExpanded(false);
          return;
        case "Tab":
          if (addBtnRef !== null && addBtnRef !== void 0 && addBtnRef.current) {
            addBtnRef.current.focus();
            return;
          }
          setIsSearching(false);
          setExpanded(false);
      }
    } else {
      switch (event.code) {
        case "ArrowDown":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          setFocusedSelectItem(prevState => {
            return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
          });
          return;
        case "ArrowUp":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(childrenCount - 1);
            return;
          }
          setFocusedSelectItem(prevState => {
            return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
          });
          return;
        case "Space":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          onOptionChangeHandler(event.target);
          setShouldClick(true);
          setExpanded(false);
          return;
        case "Enter":
        case "Home":
          setFocusedSelectItem(0);
          return;
        case "Tab":
          if (childrenCount >= renderThreshold && expanded && !isAddBtnFocused) {
            var _searchInputRef$curre;
            setIsSearching(true);
            (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 || _searchInputRef$curre.focus();
            return;
          } else if (addBtnRef !== null && addBtnRef !== void 0 && addBtnRef.current && expanded && !isAddBtnFocused) {
            addBtnRef.current.focus();
            return;
          }
          setExpanded(false);
          return;
        case "Escape":
          if (expanded) {
            setExpanded(false);
          }
          return;
        case "End":
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "ArrowLeft":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(0);
          }
          return;
        case "ArrowRight":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(childrenCount - 1);
          }
          return;
      }
    }
  };
  return {
    onArrowNavigation
  };
};
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx
function Select_extends() {
  Select_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Select_extends.apply(this, arguments);
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
  const [expanded, setExpanded] = (0,react.useState)(false);
  const [display, setDisplay] = (0,react.useState)("");
  const containerReference = (0,react.useRef)(null);
  const optionListReference = (0,react.useRef)(null);
  const [focusedSelectItem, setFocusedSelectItem] = (0,react.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react.useState)(false);
  /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = (0,react.useState)(false);
  const optionsCount = react.Children.count(children);
  const {
    filter,
    isSearching,
    renderSearch,
    searchInputRef,
    setIsSearching,
    searchThreshold,
    searchVisible
  } = useSearch({
    expanded,
    search,
    searchInputClassName: Select_module/* default */.A["select-search"],
    optionsCount,
    setFocusedSelectItem,
    searchInputProps,
    searchPlaceholder
  });
  const {
    addBtnRef,
    addNewBtnOptionsContainerClassName,
    renderAddNew
  } = (0,useAddNewBtn/* useAddNewBtn */.X)({
    addNew,
    filter,
    focusedSelectItem,
    optionsCount,
    searchInputRef
  });
  const nativeSelect = ref || /*#__PURE__*/(0,react.createRef)();
  const onOptionChangeHandler = optionElement => {
    if (nativeSelect.current && optionElement) {
      nativeSelect.current.value = optionElement.getAttribute("data-value");
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    setExpanded(false);
  };
  const customSelectButtonRef = (0,react.useRef)(null);
  const {
    onArrowNavigation
  } = useArrowNavigation({
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
  } = (0,useSelectPositionList/* useSelectPositionList */.V)({
    expanded,
    optionListReference,
    containerReference,
    addBtnRef
  });
  const syncDisplayValue = val => {
    react.Children.forEach(children, child => {
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
      const filteredChildren = react.Children.toArray(children).filter(child => child.props.children.toLowerCase().match(filter.toLowerCase()) !== null);
      const internalChildren = _internalRenderChildren(filteredChildren);
      if (internalChildren.length === 0) {
        return /*#__PURE__*/react.createElement("li", {
          className: Select_module/* default */.A["no-results"]
        }, noResultsLabel);
      }
      return _internalRenderChildren(filteredChildren);
    }
    return _internalRenderChildren(children);
    function _internalRenderChildren(internalChildren) {
      return react.Children.map(internalChildren, (child, index) => {
        return /*#__PURE__*/react.cloneElement(child, {
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
    return expanded ? /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      className: Select_module/* default */.A["chevron-icon"],
      icon: Icon/* Icons */.F.ChevronUp
    }) : /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      className: Select_module/* default */.A["chevron-icon"],
      icon: Icon/* Icons */.F.ChevronDown
    });
  };
  const icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.q)({
    success,
    error
  });
  const nativeOnChangeHandler = event => {
    onChange === null || onChange === void 0 || onChange(event);
  };
  (0,react.useEffect)(() => {
    if (expanded) {
      setFocusedSelectItem(0);
      setShouldFocusButtonAfterClose(true);
    }
    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      customSelectButtonRef.current.focus();
      setShouldFocusButtonAfterClose(false);
    }
  }, [expanded, customSelectButtonRef.current, shouldFocusButtonAfterClose]);
  (0,react.useEffect)(() => {
    syncDisplayValue(value);
  }, [value]);
  (0,useBodyClick/* useBodyClick */.U)(event => !event.target.closest(".custom-select") && expanded, () => {
    setExpanded(false);
    setListPosition({
      top: 0,
      bottom: "initial"
    });
    setOpacity(0);
  }, expanded);
  const additionalClasses = [];
  expanded && additionalClasses.push(Select_module/* default */.A.expanded);
  error && additionalClasses.push(Select_module/* default */.A.error);
  disabled && additionalClasses.push(Select_module/* default */.A.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(Select_module/* default */.A.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", Select_extends({}, (0,helper/* filterProps */.J9)(rest, /^data-/, false), {
    tabIndex: -1,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: readyclasses_module/* default */.A["sr-only"]
  }), /*#__PURE__*/react.createElement("option", {
    value: ""
  }), react.Children.map(children, child => /*#__PURE__*/react.createElement("option", {
    value: child.props.value
  }))), /*#__PURE__*/react.createElement("div", Select_extends({}, (0,helper/* filterProps */.J9)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(Select_module/* default */.A.select, " ").concat(additionalClasses.join(" "), " ").concat(className !== null && className !== void 0 ? className : "")
  }), searchVisible && renderSearch(), /*#__PURE__*/react.createElement("button", Select_extends({}, selectButtonProps, {
    onClick: () => {
      setExpanded(!expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(Select_module/* default */.A["custom-select"], " ").concat(additionalClasses.join(" "), " "),
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
  }), /*#__PURE__*/react.createElement("div", {
    "data-display": true,
    className: Select_module/* default */.A["selected"]
  }, !value && placeholder && /*#__PURE__*/react.createElement("span", {
    className: Select_module/* default */.A["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react.createElement("span", {
    "data-display-inner": true
  }, display)), /*#__PURE__*/react.createElement("div", {
    className: Select_module/* default */.A["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(Select_module/* default */.A["list-wrapper"]),
    style: {
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight.wrapper,
      pointerEvents: expanded ? "auto" : "none",
      ...listPosition
    }
  }, /*#__PURE__*/react.createElement("ul", {
    className: addNewBtnOptionsContainerClassName,
    role: "listbox",
    style: {
      maxHeight: optionsListMaxHeight.list
    }
  }, renderOptions()), renderAddNew())));
};
const Select = /*#__PURE__*/react.forwardRef(SelectComponent);
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

/***/ })

}]);