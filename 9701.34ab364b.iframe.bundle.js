"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9701],{

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
// EXTERNAL MODULE: ./src/hooks/useClickOutside.ts
var useClickOutside = __webpack_require__("./src/hooks/useClickOutside.ts");
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/Select.interfaces.ts
var Select_interfaces = __webpack_require__("./src/components/Form/Select/Select.interfaces.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/useSelectPositionList.ts
var useSelectPositionList = __webpack_require__("./src/components/Form/Select/useSelectPositionList.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/useAddNewBtn.tsx + 1 modules
var useAddNewBtn = __webpack_require__("./src/components/Form/Select/useAddNewBtn.tsx");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/useSearch.tsx
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



/** @scope .*/
const useSearch = _ref => {
  var _search$renderThresho, _search$searchInputPr4;
  let {
    search,
    optionsCount,
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
    var _search$searchInputPr, _search$searchInputPr2;
    return /*#__PURE__*/react.createElement(Input/* Input */.p, _extends({}, (_search$searchInputPr = search === null || search === void 0 ? void 0 : search.searchInputProps) !== null && _search$searchInputPr !== void 0 ? _search$searchInputPr : {}, {
      ref: searchInputRef,
      onFocus: () => setIsSearching(true),
      onBlur: () => setIsSearching(false),
      onChange: filterResults,
      className: searchInputClassName,
      wrapperProps: {
        className: search === null || search === void 0 || (_search$searchInputPr2 = search.searchInputProps) === null || _search$searchInputPr2 === void 0 || (_search$searchInputPr2 = _search$searchInputPr2.wrapperProps) === null || _search$searchInputPr2 === void 0 ? void 0 : _search$searchInputPr2.className
      },
      style: {
        display: expanded ? "block" : "none"
      },
      type: "text",
      name: "search-option",
      placeholder: search !== null && search !== void 0 && search.searchPlaceholder ? search === null || search === void 0 ? void 0 : search.searchPlaceholder : "Search item"
    }));
  };
  const resetSearchState = () => {
    setFilter("");
    setIsSearching(false);
    setFocusedSelectItem(-1);
  };
  const visible = shouldRenderSearch();
  (0,react.useEffect)(() => {
    var _search$searchInputPr3;
    (search === null || search === void 0 || (_search$searchInputPr3 = search.searchInputProps) === null || _search$searchInputPr3 === void 0 ? void 0 : _search$searchInputPr3.reset) && resetSearchState();
  }, [search === null || search === void 0 || (_search$searchInputPr4 = search.searchInputProps) === null || _search$searchInputPr4 === void 0 ? void 0 : _search$searchInputPr4.reset]);
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
    useSearch.__docgenInfo = { "description": "", "displayName": "useSearch", "props": { "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "optionsCount": { "defaultValue": null, "description": "", "name": "optionsCount", "required": true, "type": { "name": "number" } }, "searchInputClassName": { "defaultValue": null, "description": "", "name": "searchInputClassName", "required": true, "type": { "name": "string" } }, "expanded": { "defaultValue": null, "description": "", "name": "expanded", "required": true, "type": { "name": "boolean" } }, "setFocusedSelectItem": { "defaultValue": null, "description": "", "name": "setFocusedSelectItem", "required": true, "type": { "name": "(idx: number) => void" } } } };
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
    renderThreshold,
    isReadOnlyView
  } = _ref;
  const onArrowNavigation = event => {
    const codesToPreventDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space", "Escape", "End", "Home"];
    const codesToPreventDefaultWhenSearching = ["ArrowDown", "ArrowUp", "Enter", "Escape", "MetaLeft", "MetaRight"];
    const isAddBtnFocused = (addBtnRef === null || addBtnRef === void 0 ? void 0 : addBtnRef.current) === document.activeElement;
    if (isReadOnlyView) {
      return;
    }
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
// EXTERNAL MODULE: ./src/components/withReadOnly.tsx
var withReadOnly = __webpack_require__("./src/components/withReadOnly.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx
function Select_extends() {
  return Select_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Select_extends.apply(null, arguments);
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
    isReadOnlyView,
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
    setFocusedSelectItem
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
    renderThreshold: searchThreshold,
    isReadOnlyView: isReadOnlyView || !!rest["data-readonlyview"]
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
  const myElementRef = (0,react.useRef)(null);
  (0,useClickOutside/* useClickOutside */.L)(myElementRef, () => {
    if (!expanded) {
      return;
    }
    setExpanded(false);
    setListPosition(Select_interfaces/* Position */.y.Below);
    setOpacity(0);
  }, [expanded]);
  const additionalClasses = [];
  expanded && additionalClasses.push(Select_module/* default */.A.expanded);
  error && additionalClasses.push(Select_module/* default */.A.error);
  disabled && additionalClasses.push(Select_module/* default */.A.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(Select_module/* default */.A.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react.createElement("div", {
    ref: myElementRef
  }, /*#__PURE__*/react.createElement("select", Select_extends({}, (0,helper/* filterProps */.J9)(rest, /^data-/, false), {
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
    className: "custom-select ".concat(Select_module/* default */.A.select, " ").concat(additionalClasses.join(" "))
  }), searchVisible && renderSearch(), /*#__PURE__*/react.createElement("button", Select_extends({}, selectButtonProps, {
    onClick: () => {
      setExpanded(isReadOnlyView || rest["data-readonlyview"] ? false : !expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(Select_module/* default */.A["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: expanded && searchVisible ? "none" : "block"
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
    className: "list-wrapper-container"
  }, /*#__PURE__*/react.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(Select_module/* default */.A["list-wrapper"]),
    style: {
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight.wrapper,
      pointerEvents: expanded ? "auto" : "none",
      bottom: listPosition === Select_interfaces/* Position */.y.Above ? "2.85rem" : "initial",
      marginTop: "4px"
    }
  }, /*#__PURE__*/react.createElement("ul", {
    className: addNewBtnOptionsContainerClassName,
    role: "listbox",
    style: {
      maxHeight: optionsListMaxHeight.list
    }
  }, renderOptions()), renderAddNew()))));
};
const Select = (0,withReadOnly/* withReadOnly */.R)( /*#__PURE__*/react.forwardRef(SelectComponent));
try {
    // @ts-ignore
    Select.displayName = "Select";
    // @ts-ignore
    Select.__docgenInfo = { "description": "", "displayName": "Select", "props": { "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "readOnlyView": { "defaultValue": null, "description": "", "name": "readOnlyView", "required": false, "type": { "name": "boolean" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "selectButtonProps": { "defaultValue": null, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; } & FormElement)" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } }, "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "AddNewProps" } }, "isReadOnlyView": { "defaultValue": null, "description": "", "name": "isReadOnlyView", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Select.tsx#Select"] = { docgenInfo: Select.__docgenInfo, name: "Select", path: "src/components/Form/Select/SingleSelect/Select.tsx#Select" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ SelectWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss
var SelectWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SelectWrapper_module/* default */.A, options);




       /* harmony default export */ const SelectWrapper_SelectWrapper_module = (SelectWrapper_module/* default */.A && SelectWrapper_module/* default */.A.locals ? SelectWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx + 2 modules
var Select = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/withReadOnly.tsx
var withReadOnly = __webpack_require__("./src/components/withReadOnly.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx
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







const SelectWrapperComponent = (_ref, ref) => {
  var _helperProps$classNam, _selectProps$classNam;
  let {
    children,
    error,
    success,
    value,
    placeholder,
    selectProps,
    helperProps,
    onChange,
    ...rest
  } = _ref;
  const {
    errorId,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.r)();
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
    ref: ref,
    errorId: errorId,
    helperId: helperId,
    labelProps: {
      id: labelId,
      className: SelectWrapper_SelectWrapper_module["select-label"]
    },
    helperProps: {
      ...helperProps,
      className: "".concat(SelectWrapper_SelectWrapper_module["select-helper-text"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    },
    error: error
  }), /*#__PURE__*/react.createElement(Select/* Select */.l, _extends({}, selectProps, {
    value: value,
    labeledBy: labelId,
    error: error,
    success: success,
    describedBy: error ? errorId : helperId,
    onChange: onChange,
    placeholder: placeholder,
    className: "".concat((_selectProps$classNam = selectProps === null || selectProps === void 0 ? void 0 : selectProps.className) !== null && _selectProps$classNam !== void 0 ? _selectProps$classNam : ""),
    isReadOnlyView: !!rest["data-readonlyview"]
  }), children));
};
const forwardedSelectWrapper = /*#__PURE__*/react.forwardRef(SelectWrapperComponent);
forwardedSelectWrapper.displayName = "SelectWrapper";
const SelectWrapper = (0,withReadOnly/* withReadOnly */.R)(forwardedSelectWrapper);
try {
    // @ts-ignore
    SelectWrapper.displayName = "SelectWrapper";
    // @ts-ignore
    SelectWrapper.__docgenInfo = { "description": "", "displayName": "SelectWrapper", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>) => void)" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "errorMessageProps": { "defaultValue": null, "description": "", "name": "errorMessageProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, \"ref\"> & { ...; })" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "readOnlyView": { "defaultValue": null, "description": "", "name": "readOnlyView", "required": false, "type": { "name": "boolean" } }, "selectProps": { "defaultValue": null, "description": "", "name": "selectProps", "required": false, "type": { "name": "PartialSelectProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx#SelectWrapper"] = { docgenInfo: SelectWrapper.__docgenInfo, name: "SelectWrapper", path: "src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx#SelectWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss":
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
 */.SelectWrapper-module__select-label--E0mjB{left:calc(1.25rem + 2px)}.SelectWrapper-module__select-helper-text--o94e6{margin-top:.15rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select-label": `SelectWrapper-module__select-label--E0mjB`,
	"select-helper-text": `SelectWrapper-module__select-helper-text--o94e6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);