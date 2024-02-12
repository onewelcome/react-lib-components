"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[652],{

/***/ "./src/components/Form/Select/SelectService.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useSelectPositionList),
/* harmony export */   r: () => (/* binding */ useArrowNavigation)
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

/** @scope .*/
const useSelectPositionList = _ref2 => {
  let {
    expanded,
    optionListReference,
    addBtnRef,
    containerReference
  } = _ref2;
  const [optionsListMaxHeight, setOptionsListMaxHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    wrapper: undefined,
    list: undefined
  });
  const [opacity, setOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // We set opacity because otherwise if we calculate the max height you see the list full height for a split second and then it shortens.
  const [listPosition, setListPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    var _optionListReference$;
    // Calculate max height if there's more space below the select
    const listHeight = (_optionListReference$ = optionListReference.current) === null || _optionListReference$ === void 0 ? void 0 : _optionListReference$.getBoundingClientRect().height;
    const addNewButtonHeightWithMargin = addBtnRef.current ? addBtnRef.current.getBoundingClientRect().height + parseInt(getComputedStyle(addBtnRef.current).marginBottom) : 0;
    const transformOrigin = position.top !== "initial" ? "top" : "bottom";
    if (!containerReference.current) {
      console.error("The containerReference is empty for some reason in the SelectService.ts for the Select component in react-lib-components. We are trying to calculate the option list max height on expand");
      return;
    }
    const availableSpace = transformOrigin === "top" ? window.innerHeight - containerReference.current.getBoundingClientRect().bottom - 16 : containerReference.current.getBoundingClientRect().top - 16;
    if (listHeight && availableSpace < listHeight + addNewButtonHeightWithMargin) {
      const maxHeightObject = {
        wrapper: "".concat(availableSpace, "px"),
        list: addNewButtonHeightWithMargin > 0 ? "".concat(availableSpace - addNewButtonHeightWithMargin, "px") : "none"
      };
      setOptionsListMaxHeight(maxHeightObject);
      setOpacity(100);
      return;
    }
    setOptionsListMaxHeight({
      wrapper: undefined,
      list: undefined
    });
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

/***/ }),

/***/ "./src/components/Form/Select/useAddNewBtn.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ useAddNewBtn)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/useAddNewBtn.module.scss
var useAddNewBtn_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/useAddNewBtn.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Select/useAddNewBtn.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(useAddNewBtn_module/* default */.Z, options);




       /* harmony default export */ const Select_useAddNewBtn_module = (useAddNewBtn_module/* default */.Z && useAddNewBtn_module/* default */.Z.locals ? useAddNewBtn_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/components/Form/Select/useAddNewBtn.tsx
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



const useAddNewBtn = _ref => {
  var _addNew$label;
  let {
    addNew,
    filter
  } = _ref;
  const addBtnRef = (0,react.useRef)(null);
  const addNewLabel = (_addNew$label = addNew === null || addNew === void 0 ? void 0 : addNew.label) !== null && _addNew$label !== void 0 ? _addNew$label : "Create new";
  const renderAddNew = () => addNew && /*#__PURE__*/react.createElement("button", _extends({
    "data-testid": "select-action-button",
    className: Select_useAddNewBtn_module["action-button"],
    onClick: () => addNew.onAddNew(filter),
    ref: addBtnRef
  }, addNew.btnProps), !filter && addNewLabel, filter && /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: "700"
    }
  }, "\"".concat(filter, "\"")), filter && " (".concat(addNewLabel.toLowerCase(), ")"));
  const addNewBtnOptionsContainerClassName = addNew ? Select_useAddNewBtn_module["has-sibling"] : "";
  return {
    addNewBtnOptionsContainerClassName,
    renderAddNew,
    addBtnRef
  };
};
try {
    // @ts-ignore
    useAddNewBtn.displayName = "useAddNewBtn";
    // @ts-ignore
    useAddNewBtn.__docgenInfo = { "description": "", "displayName": "useAddNewBtn", "props": { "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "AddNewProps" } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/useAddNewBtn.tsx#useAddNewBtn"] = { docgenInfo: useAddNewBtn.__docgenInfo, name: "useAddNewBtn", path: "src/components/Form/Select/useAddNewBtn.tsx#useAddNewBtn" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/useSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Input/Input.tsx");
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
  const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isSearching, setIsSearching] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const DEFAULT_RENDER_THRESHOLD = 10;
  const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const threshold = (_search$renderThresho = search === null || search === void 0 ? void 0 : search.renderThreshold) !== null && _search$renderThresho !== void 0 ? _search$renderThresho : DEFAULT_RENDER_THRESHOLD;
  const hasEnoughChildren = optionsCount > threshold;
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .I, _extends({}, (_ref2 = (_search$searchInputPr = search === null || search === void 0 ? void 0 : search.searchInputProps) !== null && _search$searchInputPr !== void 0 ? _search$searchInputPr : searchInputProps) !== null && _ref2 !== void 0 ? _ref2 : {}, {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _search$searchInputPr4;
    ((search === null || search === void 0 || (_search$searchInputPr4 = search.searchInputProps) === null || _search$searchInputPr4 === void 0 ? void 0 : _search$searchInputPr4.reset) || (searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset)) && resetSearchState();
  }, [searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset, search === null || search === void 0 || (_search$searchInputPr5 = search.searchInputProps) === null || _search$searchInputPr5 === void 0 ? void 0 : _search$searchInputPr5.reset]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/useSearch.tsx#useSearch"] = { docgenInfo: useSearch.__docgenInfo, name: "useSearch", path: "src/components/Form/Select/useSearch.tsx#useSearch" };
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/SingleSelect/Select.module.scss":
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
 */.Select-module__sr-only--gMeuo{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Select-module__hidden--Sev2W{display:none}.Select-module__slide-in--gnPAF{animation:Select-module__slide-in--gnPAF .5s forwards}@media(prefers-reduced-motion: reduce){.Select-module__slide-in--gnPAF{animation-duration:.1ms}}.Select-module__slide-out--pEhfN{animation:Select-module__slide-out--pEhfN .5s forwards}@media(prefers-reduced-motion: reduce){.Select-module__slide-out--pEhfN{animation-duration:.1ms}}@keyframes Select-module__slide-in--gnPAF{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Select-module__slide-out--pEhfN{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Select-module__select--Nf2Cz{position:relative;box-sizing:border-box;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;border:0;border-radius:var(--input-border-radius);background-color:var(--input-background-color);font-size:var(--form-control-font-size)}@media(prefers-reduced-motion: reduce){.Select-module__select--Nf2Cz{transition-duration:.1ms}}.Select-module__select--Nf2Cz [data-display]{color:var(--color-default);font-family:var(--font-family)}.Select-module__select--Nf2Cz.Select-module__expanded--kKKhc .Select-module__list-wrapper--tflry{background:var(--light)}.Select-module__select--Nf2Cz:not(.Select-module__expanded--kKKhc) button:focus:not(.Select-module__error--qv0Yn){border:var(--input-border-width-focus) solid var(--color-focus);padding:0 calc(.5rem - var(--input-border-width-focus))}.Select-module__select--Nf2Cz:hover:not(.Select-module__disabled--AzdZP):not(.Select-module__expanded--kKKhc):not(.Select-module__error--qv0Yn) button:not(:focus){border-color:var(--default);border-width:var(--input-border-width);background-color:var(--color-blue-grey25)}.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx{position:relative;width:100%;min-height:calc(2.625rem - 2*var(--input-border-width));padding:0 calc(.5rem - var(--input-border-width));background-color:rgba(0,0,0,0);border-color:var(--color-blue-grey500);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);font-size:var(--form-control-font-size);cursor:pointer;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx{transition-duration:.1ms}}.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx:focus{outline:0}.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx.Select-module__error--qv0Yn{border-color:var(--error);color:var(--error)}.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx.Select-module__error--qv0Yn:focus{border-width:var(--input-border-width-focus)}.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx.Select-module__disabled--AzdZP{border-color:var(--color-disabled)}.Select-module__select--Nf2Cz .Select-module__list-wrapper--tflry{border-color:var(--light-grey-border);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);box-shadow:0 8px 10px 0 rgba(1,5,50,.1411764706);position:absolute;z-index:11;top:44px;left:0;width:100%;overflow:auto}.Select-module__select--Nf2Cz ul{box-sizing:border-box;padding:.25rem 0;width:100%;margin:0;list-style:none;background-color:var(--light);border-radius:var(--input-border-radius);color:var(--default);text-align:left;overflow:auto;max-height:25rem}.Select-module__select--Nf2Cz ul li{padding:.62rem .75rem;font-size:var(--form-control-font-size);margin:0;position:relative;line-height:1.25rem;box-sizing:border-box;min-height:2.5rem;cursor:pointer}.Select-module__select--Nf2Cz ul li:focus{outline:var(--input-border-width-focus) solid var(--color-primary300);outline-offset:var(--input-border-width-focus)}.Select-module__select--Nf2Cz ul li:hover{background-color:var(--color-blue-grey50)}.Select-module__select--Nf2Cz ul li:active{background-color:var(--color-blue-grey100)}.Select-module__select--Nf2Cz ul li.Select-module__disabled--AzdZP{color:var(--greyed-out);background-color:var(--disabled);pointer-events:none}.Select-module__selected-option--HpZYz{content:"";position:absolute;top:0;left:0;height:100%;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary);color:var(--color-primary)}.Select-module__selected--kornk{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none}.Select-module__status--JNP7j{position:absolute;top:50%;right:.8125rem;transform:translateY(-50%);display:flex;align-items:center}.Select-module__status--JNP7j [data-icon-status=success]{color:var(--success);font-size:1.25rem}.Select-module__status--JNP7j [data-icon-status=error]{color:var(--error);font-size:1.25rem}.Select-module__status--JNP7j .Select-module__chevron-icon--F7_YP{color:var(--default);font-size:.625rem}.Select-module__status--JNP7j *+*{margin-left:1.25rem}.Select-module__placeholder--EjE5i{color:var(--greyed-out)}.Select-module__select-search--LgoSe{position:relative;width:100%;box-sizing:border-box;border-bottom-left-radius:0;border-bottom-right-radius:0}.Select-module__disabled--AzdZP{cursor:not-allowed;color:var(--greyed-out);background-color:var(--color-blue-grey25)}.Select-module__disabled--AzdZP>*{pointer-events:none}@media only screen and (min-width: 30em){.Select-module__select--Nf2Cz .Select-module__custom-select--voQHx{padding:0 calc(.5rem - var(--input-border-width))}.Select-module__select--Nf2Cz:not(.Select-module__expanded--kKKhc) button:focus:not(.Select-module__error--qv0Yn){padding:0 calc(.5rem - var(--input-border-width-focus))}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Select-module__sr-only--gMeuo`,
	"hidden": `Select-module__hidden--Sev2W`,
	"slide-in": `Select-module__slide-in--gnPAF`,
	"slide-out": `Select-module__slide-out--pEhfN`,
	"select": `Select-module__select--Nf2Cz`,
	"expanded": `Select-module__expanded--kKKhc`,
	"list-wrapper": `Select-module__list-wrapper--tflry`,
	"error": `Select-module__error--qv0Yn`,
	"disabled": `Select-module__disabled--AzdZP`,
	"custom-select": `Select-module__custom-select--voQHx`,
	"selected-option": `Select-module__selected-option--HpZYz`,
	"selected": `Select-module__selected--kornk`,
	"status": `Select-module__status--JNP7j`,
	"chevron-icon": `Select-module__chevron-icon--F7_YP`,
	"placeholder": `Select-module__placeholder--EjE5i`,
	"select-search": `Select-module__select-search--LgoSe`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/useAddNewBtn.module.scss":
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
 */ul.useAddNewBtn-module__has-sibling--AGcyX{padding-bottom:2px}.useAddNewBtn-module__action-button--MFO9K{border:none;border-top:1px solid var(--color-blue-grey50);width:100%;height:2.5rem;padding:.625rem .75rem;margin:0 0 .25rem;background-color:var(--light);border-radius:var(--input-border-radius);color:var(--default);text-align:left;box-sizing:border-box;cursor:pointer;font-family:var(--font-family);font-size:var(--form-control-font-size)}.useAddNewBtn-module__action-button--MFO9K:focus{outline:1px solid;outline-offset:0;border-radius:0}.useAddNewBtn-module__action-button--MFO9K:hover{background-color:var(--color-blue-grey50)}.useAddNewBtn-module__action-button--MFO9K:active{background-color:var(--color-blue-grey100)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"has-sibling": `useAddNewBtn-module__has-sibling--AGcyX`,
	"action-button": `useAddNewBtn-module__action-button--MFO9K`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Form/Select/SingleSelect/Select.module.scss":
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/SingleSelect/Select.module.scss");

      
      
      
      
      
      
      
      
      

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