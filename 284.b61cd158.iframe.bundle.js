"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[284],{

/***/ "./src/components/Form/Select/MultiSelect/MultiSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ MultiSelect)
});

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/MultiSelect.module.scss
var MultiSelect_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/MultiSelect.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Select/MultiSelect/MultiSelect.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MultiSelect_module/* default */.Z, options);




       /* harmony default export */ const MultiSelect_MultiSelect_module = (MultiSelect_module/* default */.Z && MultiSelect_module/* default */.Z.locals ? MultiSelect_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/hooks/useBodyClick.ts
var useBodyClick = __webpack_require__("./src/hooks/useBodyClick.ts");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SelectService.ts
var SelectService = __webpack_require__("./src/components/Form/Select/SelectService.ts");
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
// EXTERNAL MODULE: ./src/components/Tag/Tag.tsx + 3 modules
var Tag = __webpack_require__("./src/components/Tag/Tag.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/SelectedOptions.module.scss
var SelectedOptions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/SelectedOptions.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Select/MultiSelect/SelectedOptions.module.scss

      
      
      
      
      
      
      
      
      

var SelectedOptions_module_options = {};

SelectedOptions_module_options.styleTagTransform = (styleTagTransform_default());
SelectedOptions_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SelectedOptions_module_options.insert = insertBySelector_default().bind(null, "head");
    
SelectedOptions_module_options.domAPI = (styleDomAPI_default());
SelectedOptions_module_options.insertStyleElement = (insertStyleElement_default());

var SelectedOptions_module_update = injectStylesIntoStyleTag_default()(SelectedOptions_module/* default */.Z, SelectedOptions_module_options);




       /* harmony default export */ const MultiSelect_SelectedOptions_module = (SelectedOptions_module/* default */.Z && SelectedOptions_module/* default */.Z.locals ? SelectedOptions_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Select/MultiSelect/SelectedOptions.tsx
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




const SelectedOptionsComponent = (_ref, ref) => {
  let {
    display,
    onRemove,
    disabled,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    className: MultiSelect_SelectedOptions_module["options"],
    ref: ref
  }), Object.entries(display).map(_ref2 => {
    let [value, item] = _ref2;
    return /*#__PURE__*/react.createElement(Tag/* Tag */.V, {
      key: value,
      onClick: e => {
        e.stopPropagation();
      },
      className: MultiSelect_SelectedOptions_module["tag"],
      removeButton: !disabled && !item.fixed ? {
        onRemove: e => {
          e.stopPropagation();
          onRemove(value);
        },
        className: MultiSelect_SelectedOptions_module["remove-btn"]
      } : undefined,
      backgroundColor: "var(--color-blue-grey100)",
      shape: "sharp"
    }, item.label);
  }));
};
const SelectedOptions = /*#__PURE__*/react.forwardRef(SelectedOptionsComponent);
try {
    // @ts-ignore
    SelectedOptions.displayName = "SelectedOptions";
    // @ts-ignore
    SelectedOptions.__docgenInfo = { "description": "", "displayName": "SelectedOptions", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": true, "type": { "name": "boolean" } }, "display": { "defaultValue": null, "description": "", "name": "display", "required": true, "type": { "name": "Record<string, Display>" } }, "onRemove": { "defaultValue": null, "description": "", "name": "onRemove", "required": true, "type": { "name": "(value: string) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/MultiSelect/SelectedOptions.tsx#SelectedOptions"] = { docgenInfo: SelectedOptions.__docgenInfo, name: "SelectedOptions", path: "src/components/Form/Select/MultiSelect/SelectedOptions.tsx#SelectedOptions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/SelectButton.module.scss
var SelectButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/SelectButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Select/MultiSelect/SelectButton.module.scss

      
      
      
      
      
      
      
      
      

var SelectButton_module_options = {};

SelectButton_module_options.styleTagTransform = (styleTagTransform_default());
SelectButton_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SelectButton_module_options.insert = insertBySelector_default().bind(null, "head");
    
SelectButton_module_options.domAPI = (styleDomAPI_default());
SelectButton_module_options.insertStyleElement = (insertStyleElement_default());

var SelectButton_module_update = injectStylesIntoStyleTag_default()(SelectButton_module/* default */.Z, SelectButton_module_options);




       /* harmony default export */ const MultiSelect_SelectButton_module = (SelectButton_module/* default */.Z && SelectButton_module/* default */.Z.locals ? SelectButton_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Select/MultiSelect/SelectButton.tsx
function SelectButton_extends() {
  SelectButton_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return SelectButton_extends.apply(this, arguments);
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



const SelectButtonComponent = (_ref, ref) => {
  let {
    onClick,
    name,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("button", SelectButton_extends({}, rest, {
    className: MultiSelect_SelectButton_module["add-btn"],
    onClick: onClick,
    ref: ref,
    type: "button",
    name: name
  }));
};
const SelectButton = /*#__PURE__*/react.forwardRef(SelectButtonComponent);
try {
    // @ts-ignore
    SelectButton.displayName = "SelectButton";
    // @ts-ignore
    SelectButton.__docgenInfo = { "description": "", "displayName": "SelectButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/MultiSelect/SelectButton.tsx#SelectButton"] = { docgenInfo: SelectButton.__docgenInfo, name: "SelectButton", path: "src/components/Form/Select/MultiSelect/SelectButton.tsx#SelectButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Form/Select/useSearch.tsx
var useSearch = __webpack_require__("./src/components/Form/Select/useSearch.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/useAddNewBtn.tsx + 1 modules
var useAddNewBtn = __webpack_require__("./src/components/Form/Select/useAddNewBtn.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/MultiSelect/MultiSelect.tsx
function MultiSelect_extends() {
  MultiSelect_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return MultiSelect_extends.apply(this, arguments);
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













const MultiSelectComponent = (_ref, ref) => {
  let {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    searchPlaceholder = "Search item",
    searchInputProps,
    selectButtonProps = {},
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
  const [display, setDisplay] = (0,react.useState)({});
  const containerReference = (0,react.useRef)(null);
  const optionListReference = (0,react.useRef)(null);
  const [focusedSelectItem, setFocusedSelectItem] = (0,react.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react.useState)(false); /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = (0,react.useState)(false);
  const optionsVisibleCount = react.Children.count(children) - Object.keys(display).length;
  const {
    filter,
    isSearching,
    renderSearch,
    searchInputRef,
    setIsSearching,
    searchThreshold,
    searchVisible
  } = (0,useSearch/* useSearch */.R)({
    expanded,
    search,
    searchInputClassName: MultiSelect_MultiSelect_module["select-search"],
    optionsCount: optionsVisibleCount,
    setFocusedSelectItem,
    searchInputProps,
    searchPlaceholder
  });
  const {
    addBtnRef,
    addNewBtnOptionsContainerClassName,
    renderAddNew
  } = (0,useAddNewBtn/* useAddNewBtn */.Z)({
    addNew,
    filter
  });
  const nativeSelect = ref || /*#__PURE__*/(0,react.createRef)();
  const onOptionChangeHandler = optionElement => {
    if (nativeSelect.current && optionElement) {
      const value = optionElement.getAttribute("data-value");
      const options = [...nativeSelect.current.options];
      const lastSelectedOptionValues = options.filter(option => option.selected).map(option => option.value);
      options.forEach(option => {
        if (option.value === value || lastSelectedOptionValues.includes(option.value)) {
          option.selected = true;
        }
      });
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    setExpanded(false);
  };
  const onSelectedOptionRemoveHandler = value => {
    if (nativeSelect.current) {
      const options = [...nativeSelect.current.options];
      options.find(option => option.value === value).selected = false;
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
  };
  const customSelectButtonRef = (0,react.useRef)(null);
  const {
    onArrowNavigation
  } = (0,SelectService/* useArrowNavigation */.r)({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount: optionsVisibleCount,
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
  } = (0,SelectService/* useSelectPositionList */.i)({
    expanded,
    optionListReference,
    containerReference,
    addBtnRef
  });
  const syncDisplayValue = vals => {
    const displayArray = react.Children.map(children, child => child).reduce((prevOption, curOption) => {
      if (vals.includes(curOption.props.value)) {
        prevOption[curOption.props.value] = {
          label: curOption.props.children,
          fixed: curOption.props.fixed
        };
      }
      return prevOption;
    }, {});
    setDisplay(displayArray);
  };
  const syncSelectedOption = vals => {
    if (nativeSelect.current) {
      const options = [...nativeSelect.current.options];
      options.forEach(option => {
        if (vals.includes(option.value)) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    }
  };

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    const filterOutSelectedChildren = internalChildren => {
      const selectedValues = Object.keys(display);
      return internalChildren.filter(child => typeof child === "object" && "props" in child && !selectedValues.includes(child.props.value));
    };
    if (isSearching || filter !== "") {
      const filteredChildren = react.Children.toArray(children).filter(child => child.props.children.toLowerCase().match(filter.toLowerCase()) !== null);
      const internalChildren = _internalRenderChildren(filterOutSelectedChildren(filteredChildren));
      if (internalChildren.length === 0) {
        return /*#__PURE__*/react.createElement("li", {
          className: MultiSelect_MultiSelect_module["no-results"]
        }, noResultsLabel);
      }
      return internalChildren;
    }
    return _internalRenderChildren(filterOutSelectedChildren(react.Children.toArray(children)));
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
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick
        });
      });
    }
  };
  const renderChevronIcon = () => {
    return expanded ? /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: MultiSelect_MultiSelect_module["chevron-icon"],
      icon: Icon/* Icons */.P.ChevronUp
    }) : /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: MultiSelect_MultiSelect_module["chevron-icon"],
      icon: Icon/* Icons */.P.ChevronDown
    });
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
    syncSelectedOption(value);
  }, [value]);
  (0,useBodyClick/* useBodyClick */.S)(event => !event.target.closest(".custom-select") && expanded, () => {
    setExpanded(false);
    setListPosition({
      top: 0,
      bottom: "initial"
    });
    setOpacity(0);
  }, expanded);
  const additionalClasses = [];
  expanded && additionalClasses.push(MultiSelect_MultiSelect_module.expanded);
  error && additionalClasses.push(MultiSelect_MultiSelect_module.error);
  disabled && additionalClasses.push(MultiSelect_MultiSelect_module.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(MultiSelect_MultiSelect_module.success);
  const onSelectButtonClick = () => {
    setExpanded(!expanded);
  };

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", MultiSelect_extends({}, (0,helper/* filterProps */.L6)(rest, /^data-/, false), {
    tabIndex: -1,
    multiple: true,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: readyclasses_module/* default */.Z["sr-only"]
  }), /*#__PURE__*/react.createElement("option", {
    value: ""
  }), react.Children.map(children, child => /*#__PURE__*/react.createElement("option", {
    value: child.props.value
  }))), /*#__PURE__*/react.createElement("div", MultiSelect_extends({}, (0,helper/* filterProps */.L6)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(MultiSelect_MultiSelect_module.select, " ").concat(additionalClasses.join(" "), " ").concat(className !== null && className !== void 0 ? className : "")
  }), searchVisible && renderSearch(), /*#__PURE__*/react.createElement("div", {
    className: "".concat(MultiSelect_MultiSelect_module["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: expanded && searchVisible ? "none" : "flex"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: MultiSelect_MultiSelect_module["display-container"],
    "data-display": true
  }, /*#__PURE__*/react.createElement(SelectButton, MultiSelect_extends({}, selectButtonProps, {
    onClick: onSelectButtonClick,
    name: name,
    ref: customSelectButtonRef,
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-invalid": error,
    "aria-expanded": expanded,
    "aria-haspopup": "listbox",
    "aria-labelledby": labeledBy,
    "aria-describedby": describedBy
  })), (value === null || value === void 0 ? void 0 : value.length) === 0 && placeholder && /*#__PURE__*/react.createElement("span", {
    className: MultiSelect_MultiSelect_module["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react.createElement(SelectedOptions, {
    disabled: disabled,
    display: display,
    onClick: onSelectButtonClick,
    onRemove: onSelectedOptionRemoveHandler
  })), /*#__PURE__*/react.createElement("div", {
    className: MultiSelect_MultiSelect_module["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(MultiSelect_MultiSelect_module["list-wrapper"]),
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
const MultiSelect = /*#__PURE__*/react.forwardRef(MultiSelectComponent);
try {
    // @ts-ignore
    MultiSelect.displayName = "MultiSelect";
    // @ts-ignore
    MultiSelect.__docgenInfo = { "description": "", "displayName": "MultiSelect", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string[]" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "searchPlaceholder": { "defaultValue": { value: "Search item" }, "description": "@deprecated", "name": "searchPlaceholder", "required": false, "type": { "name": "string" } }, "searchInputProps": { "defaultValue": null, "description": "@deprecated", "name": "searchInputProps", "required": false, "type": { "name": "(Partial<Props> & { reset?: boolean; })" } }, "selectButtonProps": { "defaultValue": { value: "{}" }, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; })" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } }, "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "AddNewProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/MultiSelect/MultiSelect.tsx#MultiSelect"] = { docgenInfo: MultiSelect.__docgenInfo, name: "MultiSelect", path: "src/components/Form/Select/MultiSelect/MultiSelect.tsx#MultiSelect" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Tag/Tag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/Tag.module.scss
var Tag_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/Tag.module.scss");
;// CONCATENATED MODULE: ./src/components/Tag/Tag.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tag_module/* default */.Z, options);




       /* harmony default export */ const Tag_Tag_module = (Tag_module/* default */.Z && Tag_module/* default */.Z.locals ? Tag_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/RemoveButton.module.scss
var RemoveButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/RemoveButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Tag/RemoveButton.module.scss

      
      
      
      
      
      
      
      
      

var RemoveButton_module_options = {};

RemoveButton_module_options.styleTagTransform = (styleTagTransform_default());
RemoveButton_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      RemoveButton_module_options.insert = insertBySelector_default().bind(null, "head");
    
RemoveButton_module_options.domAPI = (styleDomAPI_default());
RemoveButton_module_options.insertStyleElement = (insertStyleElement_default());

var RemoveButton_module_update = injectStylesIntoStyleTag_default()(RemoveButton_module/* default */.Z, RemoveButton_module_options);




       /* harmony default export */ const Tag_RemoveButton_module = (RemoveButton_module/* default */.Z && RemoveButton_module/* default */.Z.locals ? RemoveButton_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tag/RemoveButton.tsx
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





const RemoveButtonComponent = (_ref, ref) => {
  var _rest$className;
  let {
    removeLabel = "Remove",
    label,
    onRemove,
    ...rest
  } = _ref;
  return onRemove && /*#__PURE__*/react.createElement("button", _extends({
    title: "",
    type: "button"
  }, rest, {
    ref: ref,
    className: "".concat(Tag_RemoveButton_module["remove"], " ").concat((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : ""),
    onClick: onRemove
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Times,
    className: Tag_RemoveButton_module["icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: readyclasses_module/* default */.Z["sr-only"]
  }, removeLabel, label ? " " + label : ""));
};
const RemoveButton = /*#__PURE__*/(0,react.forwardRef)(RemoveButtonComponent);
try {
    // @ts-ignore
    RemoveButton.displayName = "RemoveButton";
    // @ts-ignore
    RemoveButton.__docgenInfo = { "description": "", "displayName": "RemoveButton", "props": { "removeLabel": { "defaultValue": { value: "Remove" }, "description": "", "name": "removeLabel", "required": false, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onRemove": { "defaultValue": null, "description": "", "name": "onRemove", "required": false, "type": { "name": "((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tag/RemoveButton.tsx#RemoveButton"] = { docgenInfo: RemoveButton.__docgenInfo, name: "RemoveButton", path: "src/components/Tag/RemoveButton.tsx#RemoveButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Tag/Tag.tsx
function Tag_extends() {
  Tag_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Tag_extends.apply(this, arguments);
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






const TagComponent = (_ref, ref) => {
  var _rest$className;
  let {
    children,
    variant,
    icon,
    backgroundColor,
    color,
    shape = "rounded",
    removeButton = {},
    ...rest
  } = _ref;
  const determineIcon = () => {
    if (icon) {
      return /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        size: "inherit",
        icon: icon
      });
    }
    if (variant === "enabled") {
      return /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        size: "inherit",
        icon: Icon/* Icons */.P.CheckmarkCircleAlt
      });
    } else if (variant === "disabled") {
      return /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        size: "inherit",
        icon: Icon/* Icons */.P.Forbidden
      });
    }
  };
  const tagClasses = [Tag_Tag_module["tag"]];
  variant === "enabled" && tagClasses.push(Tag_Tag_module["tag-enabled"]);
  variant === "disabled" && tagClasses.push(Tag_Tag_module["tag-disabled"]);
  shape === "sharp" && tagClasses.push(Tag_Tag_module["sharp"]);
  return /*#__PURE__*/react.createElement("div", Tag_extends({}, rest, {
    ref: ref,
    className: "".concat(tagClasses.join(" "), " ").concat((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : ""),
    style: {
      backgroundColor,
      color
    }
  }), determineIcon(), /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    spacing: {
      marginBottom: 0
    },
    variant: "body",
    className: Tag_Tag_module["label"]
  }, children), /*#__PURE__*/react.createElement(RemoveButton, Tag_extends({}, removeButton, {
    label: children
  })));
};
const Tag = /*#__PURE__*/(0,react.forwardRef)(TagComponent);
try {
    // @ts-ignore
    Tag.displayName = "Tag";
    // @ts-ignore
    Tag.__docgenInfo = { "description": "", "displayName": "Tag", "props": { "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"enabled\"" }, { "value": "\"disabled\"" }] } }, "icon": { "defaultValue": null, "description": "", "name": "icon", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"error-circle-alt\"" }, { "value": "\"eye\"" }, { "value": "\"eye-blocked\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"home-filled\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"warning-filled\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }, { "value": "\"upload-outline\"" }, { "value": "\"reply-outline\"" }, { "value": "\"save-outline\"" }] } }, "backgroundColor": { "defaultValue": null, "description": "", "name": "backgroundColor", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "string" } }, "shape": { "defaultValue": { value: "rounded" }, "description": "", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"rounded\"" }, { "value": "\"sharp\"" }] } }, "removeButton": { "defaultValue": { value: "{}" }, "description": "", "name": "removeButton", "required": false, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"] = { docgenInfo: Tag.__docgenInfo, name: "Tag", path: "src/components/Tag/Tag.tsx#Tag" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/MultiSelect.module.scss":
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
 */.MultiSelect-module__sr-only--fR8it{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.MultiSelect-module__hidden--yBx8h{display:none}.MultiSelect-module__slide-in--a0MdE{animation:MultiSelect-module__slide-in--a0MdE .5s forwards}@media(prefers-reduced-motion: reduce){.MultiSelect-module__slide-in--a0MdE{animation-duration:.1ms}}.MultiSelect-module__slide-out--hSLrN{animation:MultiSelect-module__slide-out--hSLrN .5s forwards}@media(prefers-reduced-motion: reduce){.MultiSelect-module__slide-out--hSLrN{animation-duration:.1ms}}@keyframes MultiSelect-module__slide-in--a0MdE{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes MultiSelect-module__slide-out--hSLrN{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.MultiSelect-module__select--mvCJ6{position:relative;box-sizing:border-box;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;border:0;border-radius:var(--input-border-radius);background-color:var(--input-background-color);font-size:var(--form-control-font-size)}@media(prefers-reduced-motion: reduce){.MultiSelect-module__select--mvCJ6{transition-duration:.1ms}}.MultiSelect-module__select--mvCJ6 [data-display]{color:var(--color-default);font-family:var(--font-family)}.MultiSelect-module__select--mvCJ6.MultiSelect-module__expanded--kvYCi .MultiSelect-module__list-wrapper--Wx0ev{background:var(--light)}.MultiSelect-module__select--mvCJ6:not(.MultiSelect-module__expanded--kvYCi) .MultiSelect-module__custom-select--eaNQ4:focus:not(.MultiSelect-module__error--sFCnt){border:var(--input-border-width-focus) solid var(--color-focus);padding:0 calc(.5rem - var(--input-border-width-focus))}.MultiSelect-module__select--mvCJ6:hover:not(.MultiSelect-module__disabled--J7mc7):not(.MultiSelect-module__expanded--kvYCi):not(.MultiSelect-module__error--sFCnt) .MultiSelect-module__custom-select--eaNQ4:not(:focus){border-color:var(--default);border-width:var(--input-border-width);background-color:var(--color-blue-grey25)}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4{box-sizing:border-box;width:100%;min-height:calc(2.625rem - 2*var(--input-border-width));padding:0 calc(.5rem - var(--input-border-width));background-color:rgba(0,0,0,0);border-color:var(--color-blue-grey500);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);font-size:var(--form-control-font-size);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4{transition-duration:.1ms}}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4:focus{outline:0}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4.MultiSelect-module__error--sFCnt{border-color:var(--error)}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4.MultiSelect-module__error--sFCnt:focus{border-width:var(--input-border-width-focus)}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4.MultiSelect-module__disabled--J7mc7{border-color:var(--color-disabled);pointer-events:none}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4 .MultiSelect-module__display-container--_buwZ{flex:1;display:flex;align-items:center;padding:.1875rem 0}.MultiSelect-module__select--mvCJ6 .MultiSelect-module__list-wrapper--Wx0ev{border-color:var(--light-grey-border);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);box-shadow:0px 4px 5px 0px rgba(1,5,50,.2);box-shadow:0px 3px 14px 0px rgba(1,5,50,.1215686275);box-shadow:0px 8px 10px 0px rgba(1,5,50,.1411764706);position:absolute;z-index:11;top:44px;left:0;width:100%;overflow:auto}.MultiSelect-module__select--mvCJ6 ul{box-sizing:border-box;padding:.25rem 0;width:100%;margin:0;list-style:none;background-color:var(--light);border-radius:var(--input-border-radius);color:var(--default);text-align:left;overflow:auto;max-height:25rem}.MultiSelect-module__select--mvCJ6 ul li{padding:.62rem .75rem;font-size:var(--form-control-font-size);margin:0;position:relative;line-height:1.25rem;box-sizing:border-box;min-height:2.5rem;cursor:pointer}.MultiSelect-module__select--mvCJ6 ul li:after{content:"";position:absolute;top:0;left:0;background-color:rgba(0,0,0,0);width:100%;height:100%;opacity:.05}.MultiSelect-module__select--mvCJ6 ul li:focus{outline:var(--input-border-width-focus) solid var(--color-primary300);outline-offset:-var(--input-border-width-focus)}.MultiSelect-module__select--mvCJ6 ul li:hover:after,.MultiSelect-module__select--mvCJ6 ul li:active:after{background-color:var(--color-primary)}.MultiSelect-module__select--mvCJ6 ul li:active:after{opacity:.1}.MultiSelect-module__select--mvCJ6 ul li.MultiSelect-module__disabled--J7mc7{color:var(--greyed-out);background-color:var(--disabled);pointer-events:none}.MultiSelect-module__selected-option--frKNf{color:var(--color-primary)}.MultiSelect-module__selected-option--frKNf:before{content:"";position:absolute;top:0;left:0;height:100%;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary)}.MultiSelect-module__status--y_z2W{padding:.3125rem;display:flex;align-items:center}.MultiSelect-module__status--y_z2W [data-icon-status=success]{color:var(--success);font-size:1.25rem}.MultiSelect-module__status--y_z2W [data-icon-status=error]{color:var(--error);font-size:1.25rem}.MultiSelect-module__status--y_z2W .MultiSelect-module__chevron-icon--JsNoc{color:var(--default);font-size:.625rem}.MultiSelect-module__status--y_z2W *+*{margin-left:1.25rem}.MultiSelect-module__placeholder--ZoPqi{color:var(--greyed-out)}.MultiSelect-module__select-search--imgo0{position:relative;width:100%;box-sizing:border-box;border-bottom-left-radius:0;border-bottom-right-radius:0}.MultiSelect-module__disabled--J7mc7{cursor:not-allowed;color:var(--greyed-out);background-color:var(--color-blue-grey25)}.MultiSelect-module__disabled--J7mc7>*{pointer-events:none}@media only screen and (min-width: 30em){.MultiSelect-module__select--mvCJ6 .MultiSelect-module__custom-select--eaNQ4{padding:0 calc(.5rem - var(--input-border-width))}.MultiSelect-module__select--mvCJ6:not(.MultiSelect-module__expanded--kvYCi) .MultiSelect-module__custom-select--eaNQ4:focus:not(.MultiSelect-module__error--sFCnt){padding:0 calc(.5rem - var(--input-border-width-focus))}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `MultiSelect-module__sr-only--fR8it`,
	"hidden": `MultiSelect-module__hidden--yBx8h`,
	"slide-in": `MultiSelect-module__slide-in--a0MdE`,
	"slide-out": `MultiSelect-module__slide-out--hSLrN`,
	"select": `MultiSelect-module__select--mvCJ6`,
	"expanded": `MultiSelect-module__expanded--kvYCi`,
	"list-wrapper": `MultiSelect-module__list-wrapper--Wx0ev`,
	"custom-select": `MultiSelect-module__custom-select--eaNQ4`,
	"error": `MultiSelect-module__error--sFCnt`,
	"disabled": `MultiSelect-module__disabled--J7mc7`,
	"display-container": `MultiSelect-module__display-container--_buwZ`,
	"selected-option": `MultiSelect-module__selected-option--frKNf`,
	"status": `MultiSelect-module__status--y_z2W`,
	"chevron-icon": `MultiSelect-module__chevron-icon--JsNoc`,
	"placeholder": `MultiSelect-module__placeholder--ZoPqi`,
	"select-search": `MultiSelect-module__select-search--imgo0`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/SelectButton.module.scss":
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
 */.SelectButton-module__add-btn--I0tNB{position:absolute;top:0;left:0;height:100%;width:100%;border:0;padding:0;background:none;cursor:pointer}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"add-btn": `SelectButton-module__add-btn--I0tNB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/MultiSelect/SelectedOptions.module.scss":
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
 */.SelectedOptions-module__options--_0Q5i{position:relative;display:flex;gap:.375rem;flex-wrap:wrap;cursor:pointer}.SelectedOptions-module__tag--Lvc02{cursor:text}.SelectedOptions-module__tag--Lvc02 .SelectedOptions-module__remove-btn--XqC9M{cursor:pointer}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"options": `SelectedOptions-module__options--_0Q5i`,
	"tag": `SelectedOptions-module__tag--Lvc02`,
	"remove-btn": `SelectedOptions-module__remove-btn--XqC9M`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/RemoveButton.module.scss":
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
 */.RemoveButton-module__sr-only--YAtrZ{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.RemoveButton-module__hidden--VDjK8{display:none}.RemoveButton-module__slide-in--BpcUt{animation:RemoveButton-module__slide-in--BpcUt .5s forwards}@media(prefers-reduced-motion: reduce){.RemoveButton-module__slide-in--BpcUt{animation-duration:.1ms}}.RemoveButton-module__slide-out--IUBdR{animation:RemoveButton-module__slide-out--IUBdR .5s forwards}@media(prefers-reduced-motion: reduce){.RemoveButton-module__slide-out--IUBdR{animation-duration:.1ms}}@keyframes RemoveButton-module__slide-in--BpcUt{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes RemoveButton-module__slide-out--IUBdR{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.RemoveButton-module__remove--Io5iY{width:1.25rem;height:1.25rem;background:none;border:none;padding:0;margin-right:-0.375rem}.RemoveButton-module__remove--Io5iY:hover{border-radius:.125rem;background-color:var(--color-black10)}.RemoveButton-module__remove--Io5iY:active{background-color:var(--color-blue-grey400)}.RemoveButton-module__remove--Io5iY:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:0;border-radius:var(--focus-border-radius)}.RemoveButton-module__remove--Io5iY .RemoveButton-module__icon--jszWb{font-size:.625rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `RemoveButton-module__sr-only--YAtrZ`,
	"hidden": `RemoveButton-module__hidden--VDjK8`,
	"slide-in": `RemoveButton-module__slide-in--BpcUt`,
	"slide-out": `RemoveButton-module__slide-out--IUBdR`,
	"remove": `RemoveButton-module__remove--Io5iY`,
	"icon": `RemoveButton-module__icon--jszWb`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/Tag.module.scss":
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
 */.Tag-module__tag--R6thR{font-size:.75rem;padding:.25rem .75rem;border:none;border-radius:3.125rem;display:inline-flex;align-items:center;gap:.25rem}.Tag-module__tag--R6thR.Tag-module__tag-enabled--_EDD1{background-color:var(--color-green100)}.Tag-module__tag--R6thR.Tag-module__tag-disabled--Q_CYr{background-color:var(--color-blue-grey100)}.Tag-module__tag--R6thR.Tag-module__sharp--JiP08{border-radius:.125rem}.Tag-module__tag--R6thR .Tag-module__label--Hw5f_{line-height:2;font-size:inherit;color:inherit}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tag": `Tag-module__tag--R6thR`,
	"tag-enabled": `Tag-module__tag-enabled--_EDD1`,
	"tag-disabled": `Tag-module__tag-disabled--Q_CYr`,
	"sharp": `Tag-module__sharp--JiP08`,
	"label": `Tag-module__label--Hw5f_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);