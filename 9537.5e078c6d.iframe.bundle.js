"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9537],{

/***/ "./src/components/Form/Select/Select.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ Select)
});

// EXTERNAL MODULE: ./src/components/Form/Select/Select.module.scss
var Select_module = __webpack_require__("./src/components/Form/Select/Select.module.scss");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/hooks/useBodyClick.ts
var useBodyClick = __webpack_require__("./src/hooks/useBodyClick.ts");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SelectService.ts
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
const useSelectPositionList = _ref2 => {
  let {
    expanded,
    optionListReference,
    addBtnRef,
    containerReference
  } = _ref2;
  const [optionsListMaxHeight, setOptionsListMaxHeight] = (0,react.useState)("none");
  const [opacity, setOpacity] = (0,react.useState)(0); // We set opacity because otherwise if we calculate the max height you see the list full height for a split second and then it shortens.
  const [listPosition, setListPosition] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    rePositionList();
  }, [expanded]);
  const rePositionList = () => {
    if (!expanded || !optionListReference.current || !containerReference.current) {
      return;
    }

    // Check whether there is more space above or below the select
    // Check space between the bottom of select and top of viewport
    const spaceOnTopOfSelect = containerReference.current.getBoundingClientRect().bottom;

    // Check space between the top of the select and bottom of viewport
    const spaceOnBottomOfSelect = window.innerHeight - containerReference.current.getBoundingClientRect().top;

    // Set position as if there's more space on the bottom
    let position = {
      top: "2.75rem",
      bottom: "initial"
    };

    // Set the position of the select
    if (spaceOnTopOfSelect > spaceOnBottomOfSelect) {
      position = {
        top: "initial",
        bottom: "2.75rem"
      };
    }
    setListPosition(position);

    // Calculate the potential max height of the options list
    calculateOptionListMaxHeight(position);
  };
  const calculateOptionListMaxHeight = position => {
    var _optionListReference$, _addBtnRef$current$ge, _addBtnRef$current;
    // Calculate max height if there's more space below the select
    const listHeight = (_optionListReference$ = optionListReference.current) === null || _optionListReference$ === void 0 ? void 0 : _optionListReference$.getBoundingClientRect().height;
    const addNewButtonHeight = (_addBtnRef$current$ge = (_addBtnRef$current = addBtnRef.current) === null || _addBtnRef$current === void 0 ? void 0 : _addBtnRef$current.getBoundingClientRect().height) !== null && _addBtnRef$current$ge !== void 0 ? _addBtnRef$current$ge : 0;
    const transformOrigin = position.top !== "initial" ? "top" : "bottom";
    if (!containerReference.current) {
      console.error("The containerReference is empty for some reason in the SelectService.ts for the Select component in react-lib-components. We are trying to calculate the option list max height on expand");
      return;
    }
    const availableSpace = transformOrigin === "top" ? window.innerHeight - containerReference.current.getBoundingClientRect().bottom - 16 : containerReference.current.getBoundingClientRect().top - 16;
    if (listHeight && availableSpace < listHeight + addNewButtonHeight) {
      setOptionsListMaxHeight("".concat(availableSpace, "px"));
      setOpacity(100);
      return;
    }
    setOptionsListMaxHeight("none");
    setOpacity(100);
  };
  return {
    optionsListMaxHeight,
    opacity,
    setOpacity,
    listPosition,
    setListPosition
  };
};
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/Select.tsx
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
  var _addNew$label, _search$renderThresho, _search$searchInputPr5;
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
  const [filter, setFilter] = (0,react.useState)("");
  const [display, setDisplay] = (0,react.useState)("");
  const containerReference = (0,react.useRef)(null);
  const optionListReference = (0,react.useRef)(null);
  const [isSearching, setIsSearching] = (0,react.useState)(false);
  const [focusedSelectItem, setFocusedSelectItem] = (0,react.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react.useState)(false);
  /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = (0,react.useState)(false);
  const DEFAULT_RENDER_THRESHOLD = 10;
  const nativeSelect = ref || /*#__PURE__*/(0,react.createRef)();
  const searchInputRef = (0,react.useRef)(null);
  const addBtnRef = (0,react.useRef)(null);
  const addNewLabel = (_addNew$label = addNew === null || addNew === void 0 ? void 0 : addNew.label) !== null && _addNew$label !== void 0 ? _addNew$label : "Create new";
  const getRenderThreshold = (_search$renderThresho = search === null || search === void 0 ? void 0 : search.renderThreshold) !== null && _search$renderThresho !== void 0 ? _search$renderThresho : DEFAULT_RENDER_THRESHOLD;
  const hasEnoughChildren = Array.isArray(children) && children.length > getRenderThreshold;
  const shouldRenderSearch = () => {
    if (search !== null && search !== void 0 && search.enabled) {
      return hasEnoughChildren;
    }
    if (search) {
      return search.enabled;
    }
    return children.length > DEFAULT_RENDER_THRESHOLD;
  };
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
    childrenCount: react.Children.count(children),
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold: getRenderThreshold
  });
  const {
    listPosition,
    opacity,
    optionsListMaxHeight,
    setListPosition,
    setOpacity
  } = useSelectPositionList({
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
          className: Select_module/* default */.Z["no-results"]
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
  const renderSearch = () => {
    var _search$searchInputPr, _search$searchInputPr2, _search$searchInputPr3, _searchInputProps$wra, _search$searchPlaceho;
    return /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, (_search$searchInputPr = search === null || search === void 0 ? void 0 : search.searchInputProps) !== null && _search$searchInputPr !== void 0 ? _search$searchInputPr : searchInputProps, {
      ref: searchInputRef,
      onFocus: () => setIsSearching(true),
      onBlur: () => setIsSearching(false),
      onChange: filterResults,
      className: Select_module/* default */.Z["select-search"],
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
  const renderChevronIcon = () => {
    return expanded ? /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: Select_module/* default */.Z["chevron-icon"],
      icon: Icon/* Icons */.P.ChevronUp
    }) : /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: Select_module/* default */.Z["chevron-icon"],
      icon: Icon/* Icons */.P.ChevronDown
    });
  };
  const filterResults = event => {
    setFilter(event.currentTarget.value);
  };
  const icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.U)({
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
  (0,useBodyClick/* useBodyClick */.S)(event => !event.target.closest(".custom-select") && expanded, () => {
    setExpanded(false);
    setListPosition({
      top: 0,
      bottom: "initial"
    });
    setOpacity(0);
  }, expanded);
  const resetSearchState = () => {
    setFilter("");
    setIsSearching(false);
    setFocusedSelectItem(-1);
  };
  (0,react.useEffect)(() => {
    var _search$searchInputPr4;
    ((search === null || search === void 0 || (_search$searchInputPr4 = search.searchInputProps) === null || _search$searchInputPr4 === void 0 ? void 0 : _search$searchInputPr4.reset) || (searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset)) && resetSearchState();
  }, [searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset, search === null || search === void 0 || (_search$searchInputPr5 = search.searchInputProps) === null || _search$searchInputPr5 === void 0 ? void 0 : _search$searchInputPr5.reset]);
  const additionalClasses = [];
  expanded && additionalClasses.push(Select_module/* default */.Z.expanded);
  error && additionalClasses.push(Select_module/* default */.Z.error);
  disabled && additionalClasses.push(Select_module/* default */.Z.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(Select_module/* default */.Z.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", _extends({}, (0,helper/* filterProps */.L6)(rest, /^data-/, false), {
    tabIndex: -1,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: readyclasses_module/* default */.Z["sr-only"]
  }), /*#__PURE__*/react.createElement("option", {
    value: ""
  }), react.Children.map(children, child => /*#__PURE__*/react.createElement("option", {
    value: child.props.value
  }))), /*#__PURE__*/react.createElement("div", _extends({}, (0,helper/* filterProps */.L6)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(Select_module/* default */.Z.select, " ").concat(additionalClasses.join(" "), " ").concat(className !== null && className !== void 0 ? className : "")
  }), shouldRenderSearch() && renderSearch(), /*#__PURE__*/react.createElement("button", _extends({}, selectButtonProps, {
    onClick: () => {
      setExpanded(!expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(Select_module/* default */.Z["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: expanded && shouldRenderSearch() ? "none" : "initial"
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
    className: Select_module/* default */.Z["selected"]
  }, !value && placeholder && /*#__PURE__*/react.createElement("span", {
    className: Select_module/* default */.Z["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react.createElement("span", {
    "data-display-inner": true
  }, display)), /*#__PURE__*/react.createElement("div", {
    className: Select_module/* default */.Z["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(Select_module/* default */.Z["list-wrapper"]),
    style: {
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight,
      pointerEvents: expanded ? "auto" : "none",
      ...listPosition
    }
  }, /*#__PURE__*/react.createElement("ul", {
    className: addNew && Select_module/* default */.Z["has-sibling"],
    role: "listbox"
  }, renderOptions()), addNew && /*#__PURE__*/react.createElement("button", _extends({
    "data-testid": "select-action-button",
    className: Select_module/* default */.Z["action-button"],
    onClick: () => addNew.onAddNew(filter),
    ref: addBtnRef
  }, addNew.btnProps), !filter && addNewLabel, filter && /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: "700"
    }
  }, "\"".concat(filter, "\"")), filter && " (".concat(addNewLabel.toLowerCase(), ")")))));
};
const Select = /*#__PURE__*/react.forwardRef(SelectComponent);
try {
    // @ts-ignore
    Select.displayName = "Select";
    // @ts-ignore
    Select.__docgenInfo = { "description": "", "displayName": "Select", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "searchPlaceholder": { "defaultValue": { value: "Search item" }, "description": "@deprecated", "name": "searchPlaceholder", "required": false, "type": { "name": "string" } }, "searchInputProps": { "defaultValue": null, "description": "@deprecated", "name": "searchInputProps", "required": false, "type": { "name": "(Partial<Props> & { reset?: boolean; })" } }, "selectButtonProps": { "defaultValue": null, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; })" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } }, "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "{ label: string; onAddNew: (value: string) => void; btnProps?: ButtonHTMLAttributes<HTMLButtonElement>; }" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/Select.tsx#Select"] = { docgenInfo: Select.__docgenInfo, name: "Select", path: "src/components/Form/Select/Select.tsx#Select" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useBodyClick.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useBodyClick)
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


const useBodyClick = (checkFunction, callbackFunction, dependingStateVariable) => {
  function bodyClickListener(event) {
    if (checkFunction(event)) {
      callbackFunction();
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("click", bodyClickListener);
    return () => {
      window.removeEventListener("click", bodyClickListener);
    };
  }, [dependingStateVariable]);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/Select.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
 */.Select-module__sr-only--abXQI{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Select-module__hidden--Leydu{display:none}.Select-module__slide-in--Ekvcd{animation:Select-module__slide-in--Ekvcd .5s forwards}@media(prefers-reduced-motion: reduce){.Select-module__slide-in--Ekvcd{animation-duration:.1ms}}.Select-module__slide-out--VbE95{animation:Select-module__slide-out--VbE95 .5s forwards}@media(prefers-reduced-motion: reduce){.Select-module__slide-out--VbE95{animation-duration:.1ms}}@keyframes Select-module__slide-in--Ekvcd{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Select-module__slide-out--VbE95{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Select-module__select--CZdwK{position:relative;box-sizing:border-box;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;border:0;border-radius:var(--input-border-radius);background-color:var(--input-background-color);font-size:var(--form-control-font-size)}@media(prefers-reduced-motion: reduce){.Select-module__select--CZdwK{transition-duration:.1ms}}.Select-module__select--CZdwK [data-display]{color:var(--color-default);font-family:var(--font-family)}.Select-module__select--CZdwK.Select-module__expanded--EvnX4 .Select-module__list-wrapper--pkehP{background:var(--light)}.Select-module__select--CZdwK:not(.Select-module__expanded--EvnX4) button:focus:not(.Select-module__error--fejv9){border:var(--input-border-width-focus) solid var(--color-focus);padding:0 calc(.5rem - var(--input-border-width-focus))}.Select-module__select--CZdwK:hover:not(.Select-module__disabled--pDJzp):not(.Select-module__expanded--EvnX4):not(.Select-module__error--fejv9) button:not(:focus){border-color:var(--default);border-width:var(--input-border-width);background-color:var(--color-blue-grey25)}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL{position:relative;width:100%;min-height:calc(2.625rem - 2*var(--input-border-width));padding:0 calc(.5rem - var(--input-border-width));background-color:rgba(0,0,0,0);border-color:var(--color-blue-grey500);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);font-size:var(--form-control-font-size);cursor:pointer;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Select-module__select--CZdwK .Select-module__custom-select--GkyRL{transition-duration:.1ms}}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL:focus{outline:0}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL.Select-module__error--fejv9{border-color:var(--error);color:var(--error)}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL.Select-module__error--fejv9:focus{border-width:var(--input-border-width-focus)}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL.Select-module__disabled--pDJzp{border-color:var(--color-disabled)}.Select-module__select--CZdwK .Select-module__list-wrapper--pkehP{border-color:var(--light-grey-border);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);box-shadow:0 8px 10px 0 rgba(1,5,50,.1411764706);position:absolute;z-index:11;top:44px;left:0;width:100%;overflow:auto}.Select-module__select--CZdwK ul{box-sizing:border-box;padding:.25rem 0;width:100%;margin:0;list-style:none;background-color:var(--light);border-radius:var(--input-border-radius);color:var(--default);text-align:left}.Select-module__select--CZdwK ul li{padding:.62rem .75rem;font-size:var(--form-control-font-size);margin:0;position:relative;line-height:1.25rem;box-sizing:border-box;min-height:2.5rem;cursor:pointer}.Select-module__select--CZdwK ul li:focus{outline:var(--input-border-width-focus) solid var(--color-primary300);outline-offset:var(--input-border-width-focus)}.Select-module__select--CZdwK ul li:hover{background-color:var(--color-blue-grey50)}.Select-module__select--CZdwK ul li:active{background-color:var(--color-blue-grey100)}.Select-module__select--CZdwK ul li.Select-module__disabled--pDJzp{color:var(--greyed-out);background-color:var(--disabled);pointer-events:none}ul.Select-module__has-sibling--p2Usi{padding-bottom:2px}.Select-module__selected-option--LDP9M{content:"";position:absolute;top:0;left:0;height:100%;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary);color:var(--color-primary)}.Select-module__selected--fvhOw{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none}.Select-module__action-button--nZt43{border:none;border-top:1px solid var(--color-blue-grey50);width:100%;height:2.5rem;padding:.625rem .75rem;margin:0 0 .25rem;background-color:var(--light);border-radius:var(--input-border-radius);color:var(--default);text-align:left;box-sizing:border-box;cursor:pointer;font-family:var(--font-family);font-size:var(--form-control-font-size)}.Select-module__action-button--nZt43:focus{outline:1px solid;outline-offset:0;border-radius:0}.Select-module__action-button--nZt43:hover{background-color:var(--color-blue-grey50)}.Select-module__action-button--nZt43:active{background-color:var(--color-blue-grey100)}.Select-module__status--GdPab{position:absolute;top:50%;right:.8125rem;transform:translateY(-50%);display:flex;align-items:center}.Select-module__status--GdPab [data-icon-status=success]{color:var(--success);font-size:1.25rem}.Select-module__status--GdPab [data-icon-status=error]{color:var(--error);font-size:1.25rem}.Select-module__status--GdPab .Select-module__chevron-icon--gWEuH{color:var(--default);font-size:.625rem}.Select-module__status--GdPab *+*{margin-left:1.25rem}.Select-module__placeholder--fc5ns{color:var(--greyed-out)}.Select-module__select-search--rOF8b{position:relative;width:100%;box-sizing:border-box;border-bottom-left-radius:0;border-bottom-right-radius:0}.Select-module__disabled--pDJzp{cursor:not-allowed;color:var(--greyed-out);background-color:var(--color-blue-grey25)}.Select-module__disabled--pDJzp>*{pointer-events:none}@media only screen and (min-width: 30em){.Select-module__select--CZdwK .Select-module__custom-select--GkyRL{padding:0 calc(.5rem - var(--input-border-width))}.Select-module__select--CZdwK:not(.Select-module__expanded--EvnX4) button:focus:not(.Select-module__error--fejv9){padding:0 calc(.5rem - var(--input-border-width-focus))}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Select-module__sr-only--abXQI`,
	"hidden": `Select-module__hidden--Leydu`,
	"slide-in": `Select-module__slide-in--Ekvcd`,
	"slide-out": `Select-module__slide-out--VbE95`,
	"select": `Select-module__select--CZdwK`,
	"expanded": `Select-module__expanded--EvnX4`,
	"list-wrapper": `Select-module__list-wrapper--pkehP`,
	"error": `Select-module__error--fejv9`,
	"disabled": `Select-module__disabled--pDJzp`,
	"custom-select": `Select-module__custom-select--GkyRL`,
	"has-sibling": `Select-module__has-sibling--p2Usi`,
	"selected-option": `Select-module__selected-option--LDP9M`,
	"selected": `Select-module__selected--fvhOw`,
	"action-button": `Select-module__action-button--nZt43`,
	"status": `Select-module__status--GdPab`,
	"chevron-icon": `Select-module__chevron-icon--gWEuH`,
	"placeholder": `Select-module__placeholder--fc5ns`,
	"select-search": `Select-module__select-search--rOF8b`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Form/Select/Select.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/Select.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);