"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3123],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aD": function() { return /* reexport */ chunk_OPEUWD42/* action */.aD; }
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs + 4 modules
var chunk_OPEUWD42 = __webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-K5NRXLLB.mjs


var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs
var chunk_VWCVBQ22 = __webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs





/***/ }),

/***/ "./stories/DataGrid/DataGrid.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DataGridIsLoading": function() { return /* binding */ DataGridIsLoading; },
  "DefaultDataGrid": function() { return /* binding */ DefaultDataGrid; },
  "EmptyDataGrid": function() { return /* binding */ EmptyDataGrid; },
  "HideColumnDataGrid": function() { return /* binding */ HideColumnDataGrid; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ DataGrid_stories; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGrid.module.scss
var DataGrid_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGrid.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGrid.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DataGrid_module/* default */.Z, options);




       /* harmony default export */ var DataGrid_DataGrid_module = (DataGrid_module/* default */.Z && DataGrid_module/* default.locals */.Z.locals ? DataGrid_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss
var DataGridHeaderCell_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss

      
      
      
      
      
      
      
      
      

var DataGridHeaderCell_module_options = {};

DataGridHeaderCell_module_options.styleTagTransform = (styleTagTransform_default());
DataGridHeaderCell_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridHeaderCell_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridHeaderCell_module_options.domAPI = (styleDomAPI_default());
DataGridHeaderCell_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridHeaderCell_module_update = injectStylesIntoStyleTag_default()(DataGridHeaderCell_module/* default */.Z, DataGridHeaderCell_module_options);




       /* harmony default export */ var DataGridHeader_DataGridHeaderCell_module = (DataGridHeaderCell_module/* default */.Z && DataGridHeaderCell_module/* default.locals */.Z.locals ? DataGridHeaderCell_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.tsx
var _excluded = ["headline", "name", "disableSorting", "activeSortDirection", "onSort"];
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




var ariaSortMapping = {
  ASC: "ascending",
  DESC: "descending"
};
var DataGridHeaderCellComponent = function DataGridHeaderCellComponent(_ref, ref) {
  var headline = _ref.headline,
    name = _ref.name,
    disableSorting = _ref.disableSorting,
    activeSortDirection = _ref.activeSortDirection,
    onSort = _ref.onSort,
    rest = _objectWithoutProperties(_ref, _excluded);
  var onCellClick = function onCellClick() {
    onSort === null || onSort === void 0 ? void 0 : onSort(name);
  };
  var sortingIndicator = function sortingIndicator() {
    var getSortingIndicatorClasses = function getSortingIndicatorClasses(direction) {
      var sortingIndicatorClasses = [DataGridHeader_DataGridHeaderCell_module.indicator];
      activeSortDirection && sortingIndicatorClasses.push(activeSortDirection === direction ? DataGridHeader_DataGridHeaderCell_module.active : DataGridHeader_DataGridHeaderCell_module.hidden);
      return sortingIndicatorClasses;
    };
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: getSortingIndicatorClasses("ASC").join(" "),
      icon: Icon/* Icons.TriangleUp */.P.TriangleUp
    }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: getSortingIndicatorClasses("DESC").join(" "),
      icon: Icon/* Icons.TriangleDown */.P.TriangleDown
    }));
  };
  var innerContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: DataGridHeader_DataGridHeaderCell_module.headline
  }, headline), !disableSorting && /*#__PURE__*/react.createElement("div", {
    className: DataGridHeader_DataGridHeaderCell_module["sorting-indicator-container"]
  }, sortingIndicator()));
  return /*#__PURE__*/react.createElement("th", _extends({}, rest, {
    ref: ref,
    className: DataGridHeader_DataGridHeaderCell_module["header-cell"],
    "aria-sort": activeSortDirection && ariaSortMapping[activeSortDirection]
  }), disableSorting ? /*#__PURE__*/react.createElement("div", {
    key: name
  }, innerContent) : /*#__PURE__*/react.createElement("button", {
    key: name,
    onClick: onCellClick
  }, innerContent));
};
var DataGridHeaderCell = /*#__PURE__*/react.forwardRef(DataGridHeaderCellComponent);
try {
    // @ts-ignore
    DataGridHeaderCell.displayName = "DataGridHeaderCell";
    // @ts-ignore
    DataGridHeaderCell.__docgenInfo = { "description": "", "displayName": "DataGridHeaderCell", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "onSort": { "defaultValue": null, "description": "", "name": "onSort", "required": false, "type": { "name": "((name: string) => void)" } }, "headline": { "defaultValue": null, "description": "", "name": "headline", "required": true, "type": { "name": "string" } }, "disableSorting": { "defaultValue": null, "description": "", "name": "disableSorting", "required": false, "type": { "name": "boolean" } }, "activeSortDirection": { "defaultValue": null, "description": "", "name": "activeSortDirection", "required": false, "type": { "name": "enum", "value": [{ "value": "\"ASC\"" }, { "value": "\"DESC\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridHeader/DataGridHeaderCell.tsx#DataGridHeaderCell"] = { docgenInfo: DataGridHeaderCell.__docgenInfo, name: "DataGridHeaderCell", path: "src/components/DataGrid/DataGridHeader/DataGridHeaderCell.tsx#DataGridHeaderCell" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss
var DataGridHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss

      
      
      
      
      
      
      
      
      

var DataGridHeader_module_options = {};

DataGridHeader_module_options.styleTagTransform = (styleTagTransform_default());
DataGridHeader_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridHeader_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridHeader_module_options.domAPI = (styleDomAPI_default());
DataGridHeader_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridHeader_module_update = injectStylesIntoStyleTag_default()(DataGridHeader_module/* default */.Z, DataGridHeader_module_options);




       /* harmony default export */ var DataGridHeader_DataGridHeader_module = (DataGridHeader_module/* default */.Z && DataGridHeader_module/* default.locals */.Z.locals ? DataGridHeader_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeader.tsx
var DataGridHeader_excluded = ["initialSort", "onSort", "headers", "disableContextMenuColumn", "enableMultiSorting", "spacing"];
function DataGridHeader_extends() {
  DataGridHeader_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGridHeader_extends.apply(this, arguments);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function DataGridHeader_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGridHeader_objectWithoutPropertiesLoose(source, excluded);
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
function DataGridHeader_objectWithoutPropertiesLoose(source, excluded) {
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




var sortingStates = [undefined, "ASC", "DESC"];
var DataGridHeaderComponent = function DataGridHeaderComponent(_ref, ref) {
  var initialSort = _ref.initialSort,
    onSort = _ref.onSort,
    headers = _ref.headers,
    disableContextMenuColumn = _ref.disableContextMenuColumn,
    enableMultiSorting = _ref.enableMultiSorting,
    spacing = _ref.spacing,
    rest = DataGridHeader_objectWithoutProperties(_ref, DataGridHeader_excluded);
  var _useState = (0,react.useState)(initialSort !== null && initialSort !== void 0 ? initialSort : []),
    _useState2 = _slicedToArray(_useState, 2),
    sortList = _useState2[0],
    setSortList = _useState2[1];
  (0,react.useEffect)(function () {
    setSortList(initialSort !== null && initialSort !== void 0 ? initialSort : []);
  }, [initialSort]);
  var calculateNextSortState = function calculateNextSortState(direction) {
    var currentDirectionIdx = sortingStates.findIndex(function (item) {
      return item === direction;
    });
    return sortingStates[currentDirectionIdx + 1 % sortingStates.length];
  };

  /**
   * The sortList contains sorting columns objects. The order of those objects determinates priorities of sorting.
   * Last modified sorting column has the highest priority.
   */
  var updateSortList = function updateSortList(name) {
    var current = sortList.find(function (item) {
      return item.name === name;
    });
    var restSortList = enableMultiSorting ? sortList.filter(function (item) {
      return item.name !== name;
    }) : [];
    var newSortDirection = calculateNextSortState(current === null || current === void 0 ? void 0 : current.direction);
    return newSortDirection ? [{
      name: name,
      direction: newSortDirection
    }].concat(_toConsumableArray(restSortList)) : restSortList;
  };
  var wrapOnSort = function wrapOnSort(name) {
    var newSort = updateSortList(name);
    onSort === null || onSort === void 0 ? void 0 : onSort(newSort);
    setSortList(newSort);
  };
  var headerCells = headers.map(function (header, index) {
    var _header$align, _header$disableSortin;
    if (header.hidden) {
      return null;
    }
    var headerStyle = {
      textAlign: (_header$align = header.align) !== null && _header$align !== void 0 ? _header$align : "left"
    };
    if (index === 0) {
      headerStyle.paddingLeft = spacing === null || spacing === void 0 ? void 0 : spacing.paddingLeft;
    }
    if (index === headers.length - 1 && disableContextMenuColumn) {
      headerStyle.paddingRight = spacing === null || spacing === void 0 ? void 0 : spacing.paddingRight;
    }
    var sort = sortList.find(function (item) {
      return item.name === header.name;
    });
    return /*#__PURE__*/react.createElement(DataGridHeaderCell, {
      key: header.name,
      name: header.name,
      headline: header.headline,
      disableSorting: (_header$disableSortin = header.disableSorting) !== null && _header$disableSortin !== void 0 ? _header$disableSortin : !onSort,
      onSort: wrapOnSort,
      activeSortDirection: sort === null || sort === void 0 ? void 0 : sort.direction,
      style: headerStyle
    });
  });
  return /*#__PURE__*/react.createElement("thead", DataGridHeader_extends({}, rest, {
    ref: ref,
    className: DataGridHeader_DataGridHeader_module.thead
  }), /*#__PURE__*/react.createElement("tr", {
    className: DataGridHeader_DataGridHeader_module.row
  }, headerCells, !disableContextMenuColumn && /*#__PURE__*/react.createElement("td", {
    style: {
      paddingRight: spacing === null || spacing === void 0 ? void 0 : spacing.paddingRight
    },
    "aria-label": "context menu",
    className: DataGridHeader_DataGridHeader_module["context-menu"]
  })));
};
var DataGridHeader = /*#__PURE__*/react.forwardRef(DataGridHeaderComponent);
try {
    // @ts-ignore
    DataGridHeader.displayName = "DataGridHeader";
    // @ts-ignore
    DataGridHeader.__docgenInfo = { "description": "", "displayName": "DataGridHeader", "props": { "spacing": { "defaultValue": null, "description": "", "name": "spacing", "required": false, "type": { "name": "CSSProperties" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "initialSort": { "defaultValue": null, "description": "", "name": "initialSort", "required": false, "type": { "name": "Sort" } }, "onSort": { "defaultValue": null, "description": "", "name": "onSort", "required": false, "type": { "name": "OnSortFunction" } }, "disableContextMenuColumn": { "defaultValue": null, "description": "", "name": "disableContextMenuColumn", "required": false, "type": { "name": "boolean" } }, "enableMultiSorting": { "defaultValue": null, "description": "", "name": "enableMultiSorting", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridHeader/DataGridHeader.tsx#DataGridHeader"] = { docgenInfo: DataGridHeader.__docgenInfo, name: "DataGridHeader", path: "src/components/DataGrid/DataGridHeader/DataGridHeader.tsx#DataGridHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridActions.module.scss
var DataGridActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridActions.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridActions.module.scss

      
      
      
      
      
      
      
      
      

var DataGridActions_module_options = {};

DataGridActions_module_options.styleTagTransform = (styleTagTransform_default());
DataGridActions_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridActions_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridActions_module_options.domAPI = (styleDomAPI_default());
DataGridActions_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridActions_module_update = injectStylesIntoStyleTag_default()(DataGridActions_module/* default */.Z, DataGridActions_module_options);




       /* harmony default export */ var DataGridActions_DataGridActions_module = (DataGridActions_module/* default */.Z && DataGridActions_module/* default.locals */.Z.locals ? DataGridActions_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Toggle/Toggle.tsx + 1 modules
var Toggle = __webpack_require__("./src/components/Form/Toggle/Toggle.tsx");
// EXTERNAL MODULE: ./src/components/Popover/Popover.tsx + 1 modules
var Popover = __webpack_require__("./src/components/Popover/Popover.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss
var DataGridColumnsToggle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss

      
      
      
      
      
      
      
      
      

var DataGridColumnsToggle_module_options = {};

DataGridColumnsToggle_module_options.styleTagTransform = (styleTagTransform_default());
DataGridColumnsToggle_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridColumnsToggle_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridColumnsToggle_module_options.domAPI = (styleDomAPI_default());
DataGridColumnsToggle_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridColumnsToggle_module_update = injectStylesIntoStyleTag_default()(DataGridColumnsToggle_module/* default */.Z, DataGridColumnsToggle_module_options);




       /* harmony default export */ var DataGridActions_DataGridColumnsToggle_module = (DataGridColumnsToggle_module/* default */.Z && DataGridColumnsToggle_module/* default.locals */.Z.locals ? DataGridColumnsToggle_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.tsx
var DataGridColumnsToggle_excluded = ["open", "headers", "titleLabel", "closeButtonTitle", "onClose", "onToggleClicked", "className", "domRoot"];
function DataGridColumnsToggle_extends() {
  DataGridColumnsToggle_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGridColumnsToggle_extends.apply(this, arguments);
}
function DataGridColumnsToggle_slicedToArray(arr, i) {
  return DataGridColumnsToggle_arrayWithHoles(arr) || DataGridColumnsToggle_iterableToArrayLimit(arr, i) || DataGridColumnsToggle_unsupportedIterableToArray(arr, i) || DataGridColumnsToggle_nonIterableRest();
}
function DataGridColumnsToggle_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DataGridColumnsToggle_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return DataGridColumnsToggle_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DataGridColumnsToggle_arrayLikeToArray(o, minLen);
}
function DataGridColumnsToggle_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function DataGridColumnsToggle_iterableToArrayLimit(arr, i) {
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
function DataGridColumnsToggle_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function DataGridColumnsToggle_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGridColumnsToggle_objectWithoutPropertiesLoose(source, excluded);
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
function DataGridColumnsToggle_objectWithoutPropertiesLoose(source, excluded) {
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










var DataGridColumnsToggleComponent = function DataGridColumnsToggleComponent(_ref, ref) {
  var open = _ref.open,
    headers = _ref.headers,
    _ref$titleLabel = _ref.titleLabel,
    titleLabel = _ref$titleLabel === void 0 ? "Show columns" : _ref$titleLabel,
    _ref$closeButtonTitle = _ref.closeButtonTitle,
    closeButtonTitle = _ref$closeButtonTitle === void 0 ? "Close show columns dialog" : _ref$closeButtonTitle,
    onClose = _ref.onClose,
    onToggleClicked = _ref.onToggleClicked,
    className = _ref.className,
    _ref$domRoot = _ref.domRoot,
    domRoot = _ref$domRoot === void 0 ? document.body : _ref$domRoot,
    rest = DataGridColumnsToggle_objectWithoutProperties(_ref, DataGridColumnsToggle_excluded);
  var _useState = (0,react.useState)((0,helper/* generateID */.y)()),
    _useState2 = DataGridColumnsToggle_slicedToArray(_useState, 1),
    id = _useState2[0];
  var labelledId = id + "_header";
  var toggles = headers.map(function (item) {
    return /*#__PURE__*/react.createElement(Toggle/* Toggle */.Z, {
      key: item.name,
      name: item.name,
      checked: !item.hidden,
      onChange: function onChange() {
        return onToggleClicked(item.name);
      }
    }, item.headline);
  });
  var handleBackdropClick = function handleBackdropClick() {
    return onClose();
  };
  return /*#__PURE__*/react.createElement(Popover/* Popover */.J, DataGridColumnsToggle_extends({}, rest, {
    ref: ref,
    className: "".concat(DataGridActions_DataGridColumnsToggle_module.popover, " ").concat(className),
    show: open,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledId
  }), open && /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridColumnsToggle_module.backdrop,
    onClick: handleBackdropClick
  }), domRoot), open && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridColumnsToggle_module.header
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: labelledId,
    className: DataGridActions_DataGridColumnsToggle_module.title,
    tag: "span",
    variant: "h4"
  }, titleLabel), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    onClick: onClose,
    className: "".concat(DataGridActions_DataGridColumnsToggle_module["close-btn"]),
    title: closeButtonTitle
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.Times */.P.Times
  }))), /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridColumnsToggle_module.content
  }, toggles)));
};
var DataGridColumnsToggle = /*#__PURE__*/react.forwardRef(DataGridColumnsToggleComponent);
try {
    // @ts-ignore
    DataGridColumnsToggle.displayName = "DataGridColumnsToggle";
    // @ts-ignore
    DataGridColumnsToggle.__docgenInfo = { "description": "", "displayName": "DataGridColumnsToggle", "props": { "placement": { "defaultValue": null, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "transformOrigin": { "defaultValue": null, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "domRoot": { "defaultValue": { value: "document.body" }, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": null, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "() => void" } }, "closeButtonTitle": { "defaultValue": { value: "Close show columns dialog" }, "description": "", "name": "closeButtonTitle", "required": false, "type": { "name": "string" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "titleLabel": { "defaultValue": { value: "Show columns" }, "description": "", "name": "titleLabel", "required": false, "type": { "name": "string" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "anchorEl": { "defaultValue": null, "description": "", "name": "anchorEl", "required": false, "type": { "name": "RefObject<HTMLOrSVGElement>" } }, "onAnchorOutOfView": { "defaultValue": null, "description": "", "name": "onAnchorOutOfView", "required": false, "type": { "name": "(() => void)" } }, "onToggleClicked": { "defaultValue": null, "description": "", "name": "onToggleClicked", "required": true, "type": { "name": "(colName: string) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridActions/DataGridColumnsToggle.tsx#DataGridColumnsToggle"] = { docgenInfo: DataGridColumnsToggle.__docgenInfo, name: "DataGridColumnsToggle", path: "src/components/DataGrid/DataGridActions/DataGridColumnsToggle.tsx#DataGridColumnsToggle" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridActions.tsx
var DataGridActions_excluded = ["className", "enableAddBtn", "enableColumnsBtn", "enableSearchBtn", "addBtnProps", "columnsBtnProps", "searchBtnProps", "searchIconBtnProps", "headers", "onColumnToggled", "children"],
  _excluded2 = ["children"],
  _excluded3 = ["children"],
  _excluded4 = ["children"];
function DataGridActions_extends() {
  DataGridActions_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGridActions_extends.apply(this, arguments);
}
function DataGridActions_slicedToArray(arr, i) {
  return DataGridActions_arrayWithHoles(arr) || DataGridActions_iterableToArrayLimit(arr, i) || DataGridActions_unsupportedIterableToArray(arr, i) || DataGridActions_nonIterableRest();
}
function DataGridActions_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DataGridActions_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return DataGridActions_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DataGridActions_arrayLikeToArray(o, minLen);
}
function DataGridActions_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function DataGridActions_iterableToArrayLimit(arr, i) {
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
function DataGridActions_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function DataGridActions_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGridActions_objectWithoutPropertiesLoose(source, excluded);
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
function DataGridActions_objectWithoutPropertiesLoose(source, excluded) {
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







var DataGridActionsComponent = function DataGridActionsComponent(_ref, ref) {
  var _ref2, _columnsBtnProps$clas, _columnsBtnProps$clas2, _searchBtnProps$class, _columnsBtnProps$clas3;
  var className = _ref.className,
    enableAddBtn = _ref.enableAddBtn,
    enableColumnsBtn = _ref.enableColumnsBtn,
    enableSearchBtn = _ref.enableSearchBtn,
    _ref$addBtnProps = _ref.addBtnProps,
    addBtnProps = _ref$addBtnProps === void 0 ? {} : _ref$addBtnProps,
    _ref$columnsBtnProps = _ref.columnsBtnProps,
    columnsBtnProps = _ref$columnsBtnProps === void 0 ? {} : _ref$columnsBtnProps,
    _ref$searchBtnProps = _ref.searchBtnProps,
    searchBtnProps = _ref$searchBtnProps === void 0 ? {} : _ref$searchBtnProps,
    _ref$searchIconBtnPro = _ref.searchIconBtnProps,
    searchIconBtnProps = _ref$searchIconBtnPro === void 0 ? {} : _ref$searchIconBtnPro,
    headers = _ref.headers,
    onColumnToggled = _ref.onColumnToggled,
    children = _ref.children,
    rest = DataGridActions_objectWithoutProperties(_ref, DataGridActions_excluded);
  var isHidden = !((_ref2 = enableAddBtn !== null && enableAddBtn !== void 0 ? enableAddBtn : enableColumnsBtn) !== null && _ref2 !== void 0 ? _ref2 : enableSearchBtn);
  var _useState = (0,react.useState)(false),
    _useState2 = DataGridActions_slicedToArray(_useState, 2),
    showColsPopover = _useState2[0],
    setShowColsPopover = _useState2[1];
  var showColumnBtn = (0,react.useRef)(null);
  var addBtnChildren = addBtnProps.children,
    restAddBtnProps = DataGridActions_objectWithoutProperties(addBtnProps, _excluded2);
  var columnsBtnChildren = columnsBtnProps.children,
    restColumnsBtnProps = DataGridActions_objectWithoutProperties(columnsBtnProps, _excluded3);
  var searchBtnChildren = searchBtnProps.children,
    restSearchBtnProps = DataGridActions_objectWithoutProperties(searchBtnProps, _excluded4);
  return isHidden ? null : /*#__PURE__*/react.createElement("div", DataGridActions_extends({}, rest, {
    ref: ref,
    className: "".concat(DataGridActions_DataGridActions_module.actions, " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridActions_module["left-actions"]
  }, enableAddBtn && /*#__PURE__*/react.createElement(Button/* Button */.z, DataGridActions_extends({
    color: "primary",
    startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons.Plus */.P.Plus
    }),
    title: "Add item",
    type: "button",
    variant: "outline"
  }, restAddBtnProps), addBtnChildren !== null && addBtnChildren !== void 0 ? addBtnChildren : "Add item")), /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridActions_module["right-actions"]
  }, enableColumnsBtn && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, DataGridActions_extends({
    startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons.Change */.P.Change
    }),
    title: "Show/hide columns",
    variant: "text"
  }, restColumnsBtnProps, {
    className: "".concat(DataGridActions_DataGridActions_module.desktop, " ").concat((_columnsBtnProps$clas = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas !== void 0 ? _columnsBtnProps$clas : ""),
    ref: showColumnBtn,
    onClick: function onClick() {
      return setShowColsPopover(true);
    }
  }), columnsBtnChildren !== null && columnsBtnChildren !== void 0 ? columnsBtnChildren : "Columns"), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, DataGridActions_extends({
    title: "Show/hide columns"
  }, columnsBtnProps, {
    onClick: function onClick() {
      return setShowColsPopover(true);
    },
    className: "".concat(DataGridActions_DataGridActions_module.mobile, " ").concat((_columnsBtnProps$clas2 = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas2 !== void 0 ? _columnsBtnProps$clas2 : "")
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.Change */.P.Change
  })), /*#__PURE__*/react.createElement(DataGridColumnsToggle, {
    "aria-hidden": !showColsPopover,
    open: showColsPopover,
    headers: headers,
    onClose: function onClose() {
      return setShowColsPopover(false);
    },
    onToggleClicked: onColumnToggled,
    anchorEl: showColumnBtn
  })), enableSearchBtn && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, DataGridActions_extends({
    startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons.TableSearch */.P.TableSearch
    }),
    title: "Search",
    variant: "text"
  }, restSearchBtnProps, {
    className: "".concat(DataGridActions_DataGridActions_module.desktop, " ").concat((_searchBtnProps$class = searchBtnProps === null || searchBtnProps === void 0 ? void 0 : searchBtnProps.className) !== null && _searchBtnProps$class !== void 0 ? _searchBtnProps$class : "")
  }), searchBtnChildren !== null && searchBtnChildren !== void 0 ? searchBtnChildren : "Search"), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, DataGridActions_extends({
    title: "Search"
  }, searchIconBtnProps, {
    className: "".concat(DataGridActions_DataGridActions_module.mobile, " ").concat((_columnsBtnProps$clas3 = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas3 !== void 0 ? _columnsBtnProps$clas3 : "")
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.TableSearch */.P.TableSearch
  })))));
};
var DataGridActions = /*#__PURE__*/react.forwardRef(DataGridActionsComponent);
try {
    // @ts-ignore
    DataGridActions.displayName = "DataGridActions";
    // @ts-ignore
    DataGridActions.__docgenInfo = { "description": "", "displayName": "DataGridActions", "props": { "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "enableAddBtn": { "defaultValue": null, "description": "", "name": "enableAddBtn", "required": false, "type": { "name": "boolean" } }, "enableColumnsBtn": { "defaultValue": null, "description": "", "name": "enableColumnsBtn", "required": false, "type": { "name": "boolean" } }, "enableSearchBtn": { "defaultValue": null, "description": "", "name": "enableSearchBtn", "required": false, "type": { "name": "boolean" } }, "addBtnProps": { "defaultValue": { value: "{}" }, "description": "", "name": "addBtnProps", "required": false, "type": { "name": "Props" } }, "columnsBtnProps": { "defaultValue": { value: "{}" }, "description": "", "name": "columnsBtnProps", "required": false, "type": { "name": "Props" } }, "searchBtnProps": { "defaultValue": { value: "{}" }, "description": "", "name": "searchBtnProps", "required": false, "type": { "name": "Props" } }, "searchIconBtnProps": { "defaultValue": { value: "{}" }, "description": "", "name": "searchIconBtnProps", "required": false, "type": { "name": "Props" } }, "onColumnToggled": { "defaultValue": null, "description": "", "name": "onColumnToggled", "required": true, "type": { "name": "(colName: string) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridActions/DataGridActions.tsx#DataGridActions"] = { docgenInfo: DataGridActions.__docgenInfo, name: "DataGridActions", path: "src/components/DataGrid/DataGridActions/DataGridActions.tsx#DataGridActions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridCell.module.scss
var DataGridCell_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridCell.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridCell.module.scss

      
      
      
      
      
      
      
      
      

var DataGridCell_module_options = {};

DataGridCell_module_options.styleTagTransform = (styleTagTransform_default());
DataGridCell_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridCell_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridCell_module_options.domAPI = (styleDomAPI_default());
DataGridCell_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridCell_module_update = injectStylesIntoStyleTag_default()(DataGridCell_module/* default */.Z, DataGridCell_module_options);




       /* harmony default export */ var DataGridBody_DataGridCell_module = (DataGridCell_module/* default */.Z && DataGridCell_module/* default.locals */.Z.locals ? DataGridCell_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridCell.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var DataGridCell_excluded = ["children", "className", "isLoading", "spacing", "cellIndex", "columnLength", "disableContextMenuColumn"];
function DataGridCell_extends() {
  DataGridCell_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGridCell_extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function DataGridCell_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGridCell_objectWithoutPropertiesLoose(source, excluded);
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
function DataGridCell_objectWithoutPropertiesLoose(source, excluded) {
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




var DataGridCellComponent = function DataGridCellComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    isLoading = _ref.isLoading,
    spacing = _ref.spacing,
    cellIndex = _ref.cellIndex,
    columnLength = _ref.columnLength,
    disableContextMenuColumn = _ref.disableContextMenuColumn,
    rest = DataGridCell_objectWithoutProperties(_ref, DataGridCell_excluded);
  var cellStyle = {};
  if (cellIndex === 0) {
    cellStyle.paddingLeft = spacing === null || spacing === void 0 ? void 0 : spacing.paddingLeft;
  }
  if (cellIndex === columnLength && !disableContextMenuColumn || columnLength && cellIndex === columnLength - 1 && disableContextMenuColumn) {
    cellStyle.paddingRight = spacing === null || spacing === void 0 ? void 0 : spacing.paddingRight;
  }
  return /*#__PURE__*/react.createElement("td", DataGridCell_extends({}, rest, {
    ref: ref,
    style: _objectSpread(_objectSpread({}, rest.style), cellStyle),
    className: "".concat(DataGridBody_DataGridCell_module.cell, " ").concat(className !== null && className !== void 0 ? className : "")
  }), isLoading && /*#__PURE__*/react.createElement("div", {
    className: DataGridBody_DataGridCell_module.loading,
    "aria-busy": "true",
    "aria-live": "polite"
  }), !isLoading && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    tag: "span"
  }, children));
};
var DataGridCell = /*#__PURE__*/react.forwardRef(DataGridCellComponent);
try {
    // @ts-ignore
    DataGridCell.displayName = "DataGridCell";
    // @ts-ignore
    DataGridCell.__docgenInfo = { "description": "", "displayName": "DataGridCell", "props": { "spacing": { "defaultValue": null, "description": "", "name": "spacing", "required": false, "type": { "name": "CSSProperties" } }, "disableContextMenuColumn": { "defaultValue": null, "description": "", "name": "disableContextMenuColumn", "required": false, "type": { "name": "boolean" } }, "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean" } }, "cellIndex": { "defaultValue": null, "description": "", "name": "cellIndex", "required": false, "type": { "name": "number" } }, "columnLength": { "defaultValue": null, "description": "", "name": "columnLength", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridBody/DataGridCell.tsx#DataGridCell"] = { docgenInfo: DataGridCell.__docgenInfo, name: "DataGridCell", path: "src/components/DataGrid/DataGridBody/DataGridCell.tsx#DataGridCell" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridRow.module.scss
var DataGridRow_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridRow.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridRow.module.scss

      
      
      
      
      
      
      
      
      

var DataGridRow_module_options = {};

DataGridRow_module_options.styleTagTransform = (styleTagTransform_default());
DataGridRow_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridRow_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridRow_module_options.domAPI = (styleDomAPI_default());
DataGridRow_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridRow_module_update = injectStylesIntoStyleTag_default()(DataGridRow_module/* default */.Z, DataGridRow_module_options);




       /* harmony default export */ var DataGridBody_DataGridRow_module = (DataGridRow_module/* default */.Z && DataGridRow_module/* default.locals */.Z.locals ? DataGridRow_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridRow.tsx
var DataGridRow_excluded = ["children", "className", "headers", "isLoading", "spacing", "disableContextMenuColumn"];
function DataGridRow_extends() {
  DataGridRow_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGridRow_extends.apply(this, arguments);
}
function DataGridRow_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGridRow_objectWithoutPropertiesLoose(source, excluded);
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
function DataGridRow_objectWithoutPropertiesLoose(source, excluded) {
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



var DataGridRowComponent = function DataGridRowComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    headers = _ref.headers,
    isLoading = _ref.isLoading,
    spacing = _ref.spacing,
    disableContextMenuColumn = _ref.disableContextMenuColumn,
    rest = DataGridRow_objectWithoutProperties(_ref, DataGridRow_excluded);
  var visibleCells = react.Children.map(children, function (child, index) {
    if (child) {
      var cellWithSpacing = /*#__PURE__*/react.cloneElement(child, {
        spacing: spacing,
        cellIndex: index,
        columnLength: headers === null || headers === void 0 ? void 0 : headers.length,
        disableContextMenuColumn: disableContextMenuColumn
      });
      var visible = headers && headers.length > index ? !headers[index].hidden : true;
      return visible && cellWithSpacing;
    }
    return null;
  });
  var classNames = [DataGridBody_DataGridRow_module.row];
  className && classNames.push(className);
  isLoading && classNames.push(DataGridBody_DataGridRow_module.loading);
  return /*#__PURE__*/react.createElement("tr", DataGridRow_extends({}, rest, {
    ref: ref,
    className: classNames.join(" ")
  }), visibleCells);
};
var DataGridRow = /*#__PURE__*/react.forwardRef(DataGridRowComponent);
try {
    // @ts-ignore
    DataGridRow.displayName = "DataGridRow";
    // @ts-ignore
    DataGridRow.__docgenInfo = { "description": "", "displayName": "DataGridRow", "props": { "spacing": { "defaultValue": null, "description": "", "name": "spacing", "required": false, "type": { "name": "CSSProperties" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": false, "type": { "name": "HeaderCell[]" } }, "disableContextMenuColumn": { "defaultValue": null, "description": "", "name": "disableContextMenuColumn", "required": false, "type": { "name": "boolean" } }, "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridBody/DataGridRow.tsx#DataGridRow"] = { docgenInfo: DataGridRow.__docgenInfo, name: "DataGridRow", path: "src/components/DataGrid/DataGridBody/DataGridRow.tsx#DataGridRow" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridBody.module.scss
var DataGridBody_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridBody.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridBody.module.scss

      
      
      
      
      
      
      
      
      

var DataGridBody_module_options = {};

DataGridBody_module_options.styleTagTransform = (styleTagTransform_default());
DataGridBody_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridBody_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridBody_module_options.domAPI = (styleDomAPI_default());
DataGridBody_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridBody_module_update = injectStylesIntoStyleTag_default()(DataGridBody_module/* default */.Z, DataGridBody_module_options);




       /* harmony default export */ var DataGridBody_DataGridBody_module = (DataGridBody_module/* default */.Z && DataGridBody_module/* default.locals */.Z.locals ? DataGridBody_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridBody.tsx
var DataGridBody_excluded = ["children", "data", "headers", "isLoading", "disableContextMenuColumn", "emptyLabel", "spacing"];
function DataGridBody_extends() {
  DataGridBody_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGridBody_extends.apply(this, arguments);
}
function DataGridBody_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGridBody_objectWithoutPropertiesLoose(source, excluded);
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
function DataGridBody_objectWithoutPropertiesLoose(source, excluded) {
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






var skeletonLoadingRows = 9;
var DataGridBodyInner = function DataGridBodyInner(_ref, ref) {
  var children = _ref.children,
    data = _ref.data,
    headers = _ref.headers,
    isLoading = _ref.isLoading,
    disableContextMenuColumn = _ref.disableContextMenuColumn,
    emptyLabel = _ref.emptyLabel,
    spacing = _ref.spacing,
    rest = DataGridBody_objectWithoutProperties(_ref, DataGridBody_excluded);
  var renderContent = function renderContent() {
    var visibleColumns = headers.filter(function (header) {
      return !header.hidden;
    }).length;
    if (isLoading) {
      return Array.from(Array(skeletonLoadingRows)).map(function (_, rowIdx) {
        return /*#__PURE__*/react.createElement(DataGridRow, {
          key: rowIdx,
          isLoading: true
        }, Array.from(Array(visibleColumns)).map(function (__, colIdx) {
          return /*#__PURE__*/react.createElement(DataGridCell, {
            key: colIdx,
            isLoading: true
          });
        }), !disableContextMenuColumn && /*#__PURE__*/react.createElement(DataGridCell, null));
      });
    }
    var emptyData = !data || data.length === 0;
    if (emptyData) {
      return /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
        className: DataGridBody_DataGridBody_module.empty,
        colSpan: visibleColumns + (disableContextMenuColumn ? 0 : 1)
      }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
        variant: "body",
        spacing: {
          margin: 0
        }
      }, emptyLabel)));
    }
    return data === null || data === void 0 ? void 0 : data.map(function (item, index) {
      return /*#__PURE__*/react.cloneElement(children({
        item: item,
        index: index
      }), {
        headers: headers,
        spacing: spacing,
        disableContextMenuColumn: disableContextMenuColumn
      });
    });
  };
  return /*#__PURE__*/react.createElement("tbody", DataGridBody_extends({}, rest, {
    ref: ref
  }), renderContent());
};
var DataGridBody = /*#__PURE__*/react.forwardRef(DataGridBodyInner);
try {
    // @ts-ignore
    DataGridBody.displayName = "DataGridBody";
    // @ts-ignore
    DataGridBody.__docgenInfo = { "description": "", "displayName": "DataGridBody", "props": { "data": { "defaultValue": null, "description": "", "name": "data", "required": false, "type": { "name": "T[]" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean" } }, "disableContextMenuColumn": { "defaultValue": null, "description": "", "name": "disableContextMenuColumn", "required": false, "type": { "name": "boolean" } }, "emptyLabel": { "defaultValue": null, "description": "", "name": "emptyLabel", "required": false, "type": { "name": "string" } }, "spacing": { "defaultValue": null, "description": "", "name": "spacing", "required": false, "type": { "name": "CSSProperties" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLTableSectionElement | null) => void) | RefObject<HTMLTableSectionElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridBody/DataGridBody.tsx#DataGridBody"] = { docgenInfo: DataGridBody.__docgenInfo, name: "DataGridBody", path: "src/components/DataGrid/DataGridBody/DataGridBody.tsx#DataGridBody" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Pagination/Pagination.tsx + 1 modules
var Pagination = __webpack_require__("./src/components/Pagination/Pagination.tsx");
// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGrid.tsx
function DataGrid_typeof(obj) {
  "@babel/helpers - typeof";

  return DataGrid_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, DataGrid_typeof(obj);
}
var DataGrid_excluded = ["children", "data", "initialSort", "onSort", "headers", "actions", "paginationProps", "disableContextMenuColumn", "isLoading", "enableMultiSorting", "emptyLabel", "spacing", "style"];
function DataGrid_extends() {
  DataGrid_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DataGrid_extends.apply(this, arguments);
}
function DataGrid_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function DataGrid_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? DataGrid_ownKeys(Object(source), !0).forEach(function (key) {
      DataGrid_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DataGrid_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function DataGrid_defineProperty(obj, key, value) {
  key = DataGrid_toPropertyKey(key);
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
function DataGrid_toPropertyKey(arg) {
  var key = DataGrid_toPrimitive(arg, "string");
  return DataGrid_typeof(key) === "symbol" ? key : String(key);
}
function DataGrid_toPrimitive(input, hint) {
  if (DataGrid_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (DataGrid_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function DataGrid_slicedToArray(arr, i) {
  return DataGrid_arrayWithHoles(arr) || DataGrid_iterableToArrayLimit(arr, i) || DataGrid_unsupportedIterableToArray(arr, i) || DataGrid_nonIterableRest();
}
function DataGrid_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DataGrid_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return DataGrid_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DataGrid_arrayLikeToArray(o, minLen);
}
function DataGrid_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function DataGrid_iterableToArrayLimit(arr, i) {
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
function DataGrid_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function DataGrid_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DataGrid_objectWithoutPropertiesLoose(source, excluded);
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
function DataGrid_objectWithoutPropertiesLoose(source, excluded) {
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








var DataGridInner = function DataGridInner(_ref, ref) {
  var _paginationProps$clas;
  var children = _ref.children,
    data = _ref.data,
    initialSort = _ref.initialSort,
    onSort = _ref.onSort,
    headers = _ref.headers,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? {} : _ref$actions,
    paginationProps = _ref.paginationProps,
    disableContextMenuColumn = _ref.disableContextMenuColumn,
    isLoading = _ref.isLoading,
    enableMultiSorting = _ref.enableMultiSorting,
    emptyLabel = _ref.emptyLabel,
    spacing = _ref.spacing,
    style = _ref.style,
    rest = DataGrid_objectWithoutProperties(_ref, DataGrid_excluded);
  if (!headers) {
    throw new Error("Headers definition has to be provided");
  }
  if (!children) {
    throw new Error("DataGridBody should be provieded with a template how to render rows");
  }
  var _useState = (0,react.useState)(headers),
    _useState2 = DataGrid_slicedToArray(_useState, 2),
    internalHeaders = _useState2[0],
    setInternalHeaders = _useState2[1];
  var styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
  (0,react.useEffect)(function () {
    return setInternalHeaders(headers);
  }, [headers]);
  var onColumnToggled = function onColumnToggled(colName) {
    setInternalHeaders(internalHeaders.map(function (item) {
      return item.name !== colName ? item : DataGrid_objectSpread(DataGrid_objectSpread({}, item), {}, {
        hidden: !item.hidden
      });
    }));
  };
  if (styleWithSpacing !== null && styleWithSpacing !== void 0 && styleWithSpacing.padding) {
    var splitPaddings = styleWithSpacing.padding.toString().split(" ");
    var paddingLeftIndex = 0;
    if (splitPaddings.length >= 2) {
      paddingLeftIndex = 1;
    }
    if (splitPaddings.length === 4) {
      paddingLeftIndex = 3;
    }
    Object.defineProperties(styleWithSpacing, {
      paddingTop: {
        value: splitPaddings[0]
      },
      paddingRight: {
        value: splitPaddings[splitPaddings.length - 1 > 0 ? 1 : 0]
      },
      paddingBottom: {
        value: splitPaddings[splitPaddings.length / 3 >= 1 ? 2 : 0]
      },
      paddingLeft: {
        value: splitPaddings[paddingLeftIndex]
      }
    });
  }
  return /*#__PURE__*/react.createElement("div", DataGrid_extends({}, rest, {
    className: DataGrid_DataGrid_module["grid-wrapper"],
    ref: ref,
    style: {
      paddingTop: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingTop,
      paddingBottom: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingBottom
    }
  }), /*#__PURE__*/react.createElement(DataGridActions, DataGrid_extends({}, actions, {
    style: {
      paddingLeft: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingLeft,
      paddingRight: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingRight
    },
    headers: internalHeaders,
    onColumnToggled: onColumnToggled
  })), /*#__PURE__*/react.createElement("div", {
    className: DataGrid_DataGrid_module["table-wrapper"]
  }, /*#__PURE__*/react.createElement("table", {
    className: DataGrid_DataGrid_module.table
  }, /*#__PURE__*/react.createElement(DataGridHeader, {
    headers: internalHeaders,
    initialSort: initialSort,
    onSort: onSort,
    disableContextMenuColumn: disableContextMenuColumn,
    enableMultiSorting: enableMultiSorting,
    spacing: styleWithSpacing
  }), /*#__PURE__*/react.createElement(DataGridBody, {
    data: data,
    headers: internalHeaders,
    isLoading: isLoading,
    disableContextMenuColumn: disableContextMenuColumn,
    emptyLabel: emptyLabel,
    spacing: styleWithSpacing
  }, children))), paginationProps && !isLoading && /*#__PURE__*/react.createElement(Pagination/* Pagination */.t, DataGrid_extends({}, paginationProps, {
    style: DataGrid_objectSpread(DataGrid_objectSpread({}, paginationProps.style), {}, {
      paddingLeft: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingLeft,
      paddingRight: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingRight
    }),
    className: "".concat(DataGrid_DataGrid_module.pagination, " ").concat((_paginationProps$clas = paginationProps.className) !== null && _paginationProps$clas !== void 0 ? _paginationProps$clas : "")
  })));
};
var DataGrid = /*#__PURE__*/react.forwardRef(DataGridInner);
try {
    // @ts-ignore
    DataGrid.displayName = "DataGrid";
    // @ts-ignore
    DataGrid.__docgenInfo = { "description": "", "displayName": "DataGrid", "props": { "data": { "defaultValue": null, "description": "", "name": "data", "required": false, "type": { "name": "T[]" } }, "initialSort": { "defaultValue": null, "description": "", "name": "initialSort", "required": false, "type": { "name": "Sort" } }, "onSort": { "defaultValue": null, "description": "", "name": "onSort", "required": false, "type": { "name": "OnSortFunction" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "actions": { "defaultValue": { value: "{}" }, "description": "", "name": "actions", "required": false, "type": { "name": "{ enableAddBtn?: boolean; enableColumnsBtn?: boolean; enableSearchBtn?: boolean | undefined; addBtnProps?: Props | undefined; columnsBtnProps?: Props | undefined; searchBtnProps?: Props | undefined; searchIconBtnProps?: Props | undefined; } | undefined" } }, "emptyLabel": { "defaultValue": null, "description": "", "name": "emptyLabel", "required": false, "type": { "name": "string" } }, "paginationProps": { "defaultValue": null, "description": "", "name": "paginationProps", "required": false, "type": { "name": "Props" } }, "disableContextMenuColumn": { "defaultValue": null, "description": "", "name": "disableContextMenuColumn", "required": false, "type": { "name": "boolean" } }, "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean" } }, "enableMultiSorting": { "defaultValue": null, "description": "", "name": "enableMultiSorting", "required": false, "type": { "name": "boolean" } }, "spacing": { "defaultValue": null, "description": "", "name": "spacing", "required": false, "type": { "name": "Spacing" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGrid.tsx#DataGrid"] = { docgenInfo: DataGrid.__docgenInfo, name: "DataGrid", path: "src/components/DataGrid/DataGrid.tsx#DataGrid" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenu.tsx + 1 modules
var ContextMenu = __webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx + 1 modules
var ContextMenuItem = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs
var chunk_DXNAW7Q2 = __webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs
var chunk_JT3VIYBO = __webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-links/dist/react/index.mjs




var LEFT_BUTTON=0,isPlainLeftClick=e=>e.button===LEFT_BUTTON&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,cancelled=(e,cb=_e=>{})=>{isPlainLeftClick(e)&&(e.preventDefault(),cb(e));},LinkTo=class extends react.PureComponent{constructor(){super(...arguments);this.state={href:"/"};this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await (0,chunk_DXNAW7Q2/* hrefTo */.ew)(title,name);this.setState({href});}};this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,chunk_DXNAW7Q2/* navigate */.c4)({title,name});};}componentDidMount(){this.updateHref();}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref();}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react.createElement("a",{href,onClick:e=>cancelled(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_react_default=LinkTo;



;// CONCATENATED MODULE: ./stories/DataGrid/DataGrid.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      strong: "strong",
      a: "a",
      h1: "h1",
      pre: "pre",
      h2: "h2",
      h3: "h3",
      em: "em"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), " is used to represent data that have no clear graphical distinction between items. Under the hood, it's built with the default HTML ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<table>"
        }), " element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), " component shows provided data in the table. Moreover, it includes pagination and additional buttons in the action section above table header. The column button will trigger a popup to show/hide table columns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), " is wrapped inside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Card"
        }), " component. The table is in the middle, the action section is above it, and the pagination is at the bottom.\nTable shows data based on provided data list and template. The template describes how to render each row.\nThe last column of a table is used to display actions, such as a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ContextMenu"
        }), " component. This menu can, for example, display an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Edit"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Delete"
        }), " option.\nThe table header has support for single- & multi-sorting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), " utilises the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useSpacing"
        }), " hook, which means you can add spacing through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spacing"
        }), " prop. This component ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only accepts padding spacing"
        }), ". This means: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "padding"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "paddingTop"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "paddingRight"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "paddingBottom"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "paddingBottom"
        }), " are supported. Any ", (0,jsx_runtime.jsx)(_components.code, {
          children: "margin"
        }), " property\nthat you pass into the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spacing"
        }), " prop will be ignored! This is because the hover effect on each individual row needs to stretch to the entire container. If you want to add margin, you can do so by adding a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "className"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), ". Padding is complex, because it gets added\nto multiple different components and layers within ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), " to get the desired effect. The default value for the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spacing"
        }), " prop is: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spacing={{ padding: 4 }}"
        }), ", which means it adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1rem"
        }), " of padding on each side. ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "?path=/docs/hooks-usespacing--page",
          children: ["See the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "useSpacing"
          }), " documentation for more information."]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "table",
        children: "Table"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The DataGrid header is generated based on provided ", (0,jsx_runtime.jsx)(_components.code, {
          children: "headers"
        }), " props, and the body is generated through the data passed in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " prop. The rows will be rendered based on the rendering function passed to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "children"
        }), " prop."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid\n  headers={[\n    { name: 'name', headline: 'Name' },\n    { name: 'created', headline: 'Created' },\n    { name: 'id', headline: 'Identifier' },\n    { name: 'type', headline: 'Type' },\n    { name: 'enabled', headline: 'Enabled' },\n  ]}\n  data={[...]}\n  spacing={{ padding: 4 }}\n>\n  {({ item }) => (\n    <DataGridRow key={item.id}>\n      <DataGridCell>{item.name}</DataGridCell>\n      <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n      <DataGridCell>{item.id}</DataGridCell>\n      <DataGridCell>{item.type}</DataGridCell>\n      <DataGridCell>...</DataGridCell>\n      <DataGridCell>\n        <ContextMenu ... />\n      </DataGridCell>\n    </DataGridRow>\n  )}\n</DataGrid>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: DefaultDataGrid
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "table-header",
        children: "Table header"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "headers"
        }), " property is a list of header objects. These objects contain a column name (to be passed in sorting callback), a headline that is used to render header cell content,\nand optionally ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hidden"
        }), ", which triggers the visibility of the column, and/or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disableSorting"
        }), ", which disables sorting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the example below, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Created"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Identifier"
        }), " columns are hidden. Sorting is possible only by the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Name"
        }), " column."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid\n  headers={[\n    { name: 'name', headline: 'Name' },\n    { name: 'created', headline: 'Created', hidden: true },\n    { name: 'id', headline: 'Identifier', hidden: true },\n    { name: 'type', headline: 'Type', disableSorting: true },\n    { name: 'enabled', headline: 'Enabled', disableSorting: true },\n  ]}\n  data={[...]}\n  onSort={...}\n  initialSort={[ { name: 'name', direction: 'ASC' } ]}\n  spacing={{ padding: '4 8' }}\n/>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: HideColumnDataGrid
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "sorting",
        children: "Sorting"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The sorting indicators (icons) are not rendered until ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onSort"
        }), " callback function is set.\nBy clicking the header cells the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onSort"
        }), " callback is called with the parameters; 'columnName' and 'sortingDirection'.\nEach column has three different states; clicking once sets it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ascending"
        }), ", the second click sets it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "descending"
        }), ", and the third one turns off sorting.\nClicking on any of the other header cells sets the sorting direction to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ascending"
        }), " for the current column - the previous one is forgotten."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["By default, single-column sorting is enabled. To enable multi-sorting the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enableMultiSorting"
        }), " property should be set.\nBy enabling multi-sorting the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onSort"
        }), " callback takes an array of column names & directions pairs. It means that each column has its independent sorting state.\nClicking on different header cells doesn't cause the previous ones to be forgotten but moves them to a higher index in the array instead."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "NOTE: The order of sorting pairs reflects the sort priority."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "initialSort"
        }), " property consumes the initial settings for the sorting feature. To support single and multi sorting, it consumes an array of column names and directions pairs."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "table-body",
        children: "Table body"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Rows are generated based on the provided template using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "children"
        }), " prop.\nThe template should wrap its content in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGridRow"
        }), " component. Each cell should be wrapped with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGridCell"
        }), " component.\nThe last cell of each row is reserved for item actions that can affect it, which could be editing or deleting something. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ContextMenu"
        }), " component is supposed to handle all of this."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid\n  headers={[\n    { name: 'index', headline: '#' },\n    { name: 'name', headline: 'Name' },\n    { name: 'number', headline: 'Random number' },\n  ]}\n  data={[...]}\n  spacing={{ paddingLeft: 4, paddingRight: 8 }}\n>\n  {({ item, index }) => (\n    <DataGridRow key={item.id}>\n      <DataGridCell>{index + 1}</DataGridCell>\n      <DataGridCell>{item.name}</DataGridCell>\n      <DataGridCell>{Math.random()}</DataGridCell>\n      <DataGridCell>\n        <ContextMenu ... />\n      </DataGridCell>\n    </DataGridRow>\n  )}\n</DataGrid>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "disabling-context-menu-column",
        children: "Disabling context menu column"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To disable context menu column set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disableContextMenuColumn"
        }), " property to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "skeleton-loading-animation",
        children: "Skeleton loading animation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To show a loading animation, set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isLoading"
        }), " property to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ".\nIt renders 9 rows with skeleton loading animation in all defined cells."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid isLoading />\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: DataGridIsLoading
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "showing-empty-table-message",
        children: "Showing empty table message"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To show an empty table message, set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "emptyLabel"
        }), " property with the text to display.\nText will be displayed only if the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " property is empty, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isLoading"
        }), " is set to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid emptyLabel=\"There are no vegetables within the current selection\" data={undefined} />\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: EmptyDataGrid
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "action-section",
        children: "Action section"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It's possible to show the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Add item"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Columns"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Search"
        }), " buttons."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Clicking the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Columns"
        }), " button opens the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Show columns"
        }), " popup with a list of available columns whch can be toggled.\nHowever, the developer must handle the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Add item"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Search"
        }), " button actions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Each button can be customized by providing props as in the example below."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid\n  actions={{\n    enableAddBtn: true,\n    enableColumnsBtn: true,\n    enableSearchBtn: true,\n    searchBtnProps: { title: \"Zoeken\", children: \"Zoeken\", onClick }\n  }}\n/>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "pagination",
        children: "Pagination"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Pagination in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataGrid"
        }), " component is rendered based on the provided ", (0,jsx_runtime.jsx)(_components.code, {
          children: "paginationProps"
        }), ". For more information read the ", (0,jsx_runtime.jsx)(react_react_default, {
          kind: "components-data-display-pagination--pagination",
          children: "Pagination documentation"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "An example can be found below:"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<DataGrid\n  paginationProps={{\n    totalElements: 105,\n    currentPage: 2\n  }}\n/>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "full-example",
        children: "Full example"
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: DefaultDataGrid
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var DataGrid_DataGrid = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs + 1 modules
var addon_actions_dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/DataGrid/DataGrid.stories.tsx
var _DefaultDataGrid$para, _DefaultDataGrid$para2, _DefaultDataGrid$para3, _HideColumnDataGrid$p, _HideColumnDataGrid$p2, _HideColumnDataGrid$p3, _DataGridIsLoading$pa, _DataGridIsLoading$pa2, _DataGridIsLoading$pa3, _EmptyDataGrid$parame, _EmptyDataGrid$parame2, _EmptyDataGrid$parame3;
function DataGrid_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return DataGrid_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, DataGrid_stories_typeof(obj);
}
function DataGrid_stories_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function DataGrid_stories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? DataGrid_stories_ownKeys(Object(source), !0).forEach(function (key) {
      DataGrid_stories_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DataGrid_stories_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function DataGrid_stories_defineProperty(obj, key, value) {
  key = DataGrid_stories_toPropertyKey(key);
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
function DataGrid_stories_toPropertyKey(arg) {
  var key = DataGrid_stories_toPrimitive(arg, "string");
  return DataGrid_stories_typeof(key) === "symbol" ? key : String(key);
}
function DataGrid_stories_toPrimitive(input, hint) {
  if (DataGrid_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (DataGrid_stories_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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











/* harmony default export */ var DataGrid_stories = ({
  title: "components/Data Display/DataGrid",
  component: DataGrid,
  parameters: {
    docs: {
      page: DataGrid_DataGrid
    }
  }
});
var Template = function Template(args) {
  var row = function row(_ref) {
    var item = _ref.item;
    if (!item) return;
    return /*#__PURE__*/react.createElement(DataGridRow, {
      key: item.id
    }, /*#__PURE__*/react.createElement(DataGridCell, null, item.name), /*#__PURE__*/react.createElement(DataGridCell, null, item.created.toLocaleDateString()), /*#__PURE__*/react.createElement(DataGridCell, null, item.id), /*#__PURE__*/react.createElement(DataGridCell, null, item.type), /*#__PURE__*/react.createElement(DataGridCell, null, item.enabled ? "Active" : "Delisted"));
  };
  return /*#__PURE__*/react.createElement("div", {
    style: {
      padding: "1rem",
      backgroundColor: "rgb(245, 248, 248)"
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      borderRadius: ".5rem",
      backgroundColor: "#FFF"
    }
  }, /*#__PURE__*/react.createElement(DataGrid, args, function (_ref2) {
    var item = _ref2.item;
    return /*#__PURE__*/react.createElement(DataGridRow, {
      key: item.id
    }, /*#__PURE__*/react.createElement(DataGridCell, null, item.name), /*#__PURE__*/react.createElement(DataGridCell, null, item.created.toLocaleDateString()), /*#__PURE__*/react.createElement(DataGridCell, null, item.id), /*#__PURE__*/react.createElement(DataGridCell, null, item.type), /*#__PURE__*/react.createElement(DataGridCell, null, item.enabled ? "Active" : "Delisted"), !args.disableContextMenuColumn && /*#__PURE__*/react.createElement(DataGridCell, null, /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
      id: "consent_menu_".concat(item.id),
      placement: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
        title: "Actions for ".concat(item.name),
        color: "default"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons.EllipsisAlt */.P.EllipsisAlt
      }))
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 3"))));
  })));
};
var DefaultDataGrid = Template.bind({});
DefaultDataGrid.args = {
  data: [{
    name: "Company 1",
    created: new Date(2023, 0, 1),
    id: "1",
    type: "Stock",
    enabled: true
  }, {
    name: "Company 2",
    created: new Date(2023, 0, 2),
    id: "2",
    type: "Stock",
    enabled: false
  }],
  headers: [{
    name: "name",
    headline: "Name"
  }, {
    name: "created",
    headline: "Created"
  }, {
    name: "id",
    headline: "Identifier"
  }, {
    name: "type",
    headline: "Type",
    disableSorting: true
  }, {
    name: "enabled",
    headline: "Status",
    disableSorting: true
  }],
  initialSort: [{
    name: "name",
    direction: "ASC"
  }, {
    name: "created",
    direction: "DESC"
  }],
  onSort: function onSort(sort) {
    return (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort));
  },
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: {
      onClick: function onClick() {
        return (0,addon_actions_dist/* action */.aD)("add btn clicked");
      }
    },
    searchBtnProps: {
      onClick: function onClick() {
        return (0,addon_actions_dist/* action */.aD)("search btn clicked");
      }
    }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: false,
  enableMultiSorting: true
};
var HideColumnDataGrid = Template.bind({});
HideColumnDataGrid.args = {
  data: [{
    name: "Company 1",
    created: new Date(2023, 0, 1),
    id: "1",
    type: "Stock",
    enabled: true
  }, {
    name: "Company 2",
    created: new Date(2023, 0, 2),
    id: "2",
    type: "Stock",
    enabled: false
  }],
  headers: [{
    name: "name",
    headline: "Name",
    hidden: true
  }, {
    name: "created",
    headline: "Created",
    hidden: true
  }, {
    name: "id",
    headline: "Identifier"
  }, {
    name: "type",
    headline: "Type",
    disableSorting: true
  }, {
    name: "enabled",
    headline: "Status",
    disableSorting: true
  }],
  initialSort: [{
    name: "name",
    direction: "ASC"
  }, {
    name: "created",
    direction: "DESC"
  }],
  onSort: function onSort(sort) {
    return (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort));
  },
  disableContextMenuColumn: false,
  isLoading: false,
  enableMultiSorting: true
};
var DataGridIsLoading = Template.bind({});
DataGridIsLoading.args = {
  data: [{
    name: "Company 1",
    created: new Date(2023, 0, 1),
    id: "1",
    type: "Stock",
    enabled: true
  }, {
    name: "Company 2",
    created: new Date(2023, 0, 2),
    id: "2",
    type: "Stock",
    enabled: false
  }],
  headers: [{
    name: "name",
    headline: "Name"
  }, {
    name: "created",
    headline: "Created"
  }, {
    name: "id",
    headline: "Identifier"
  }, {
    name: "type",
    headline: "Type",
    disableSorting: true
  }, {
    name: "enabled",
    headline: "Status",
    disableSorting: true
  }],
  initialSort: [{
    name: "name",
    direction: "ASC"
  }, {
    name: "created",
    direction: "DESC"
  }],
  onSort: function onSort(sort) {
    return (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort));
  },
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: {
      onClick: function onClick() {
        return (0,addon_actions_dist/* action */.aD)("add btn clicked");
      }
    },
    searchBtnProps: {
      onClick: function onClick() {
        return (0,addon_actions_dist/* action */.aD)("search btn clicked");
      }
    }
  },
  disableContextMenuColumn: false,
  paginationProps: {
    totalElements: 2,
    currentPage: 1
  },
  isLoading: true,
  enableMultiSorting: true
};
var EmptyDataGrid = Template.bind({});
EmptyDataGrid.args = {
  headers: [{
    name: "name",
    headline: "Name"
  }, {
    name: "created",
    headline: "Created"
  }, {
    name: "id",
    headline: "Identifier"
  }, {
    name: "type",
    headline: "Type",
    disableSorting: true
  }, {
    name: "enabled",
    headline: "Status",
    disableSorting: true
  }],
  data: [],
  emptyLabel: "There are no vegetables within the current selection"
};
DefaultDataGrid.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, DefaultDataGrid.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_DefaultDataGrid$para = DefaultDataGrid.parameters) === null || _DefaultDataGrid$para === void 0 ? void 0 : _DefaultDataGrid$para.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  const row = ({\n    item\n  }) => {\n    if (!item) return;\n    return <DataGridRow key={item.id}>\n        <DataGridCell>{item.name}</DataGridCell>\n        <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n        <DataGridCell>{item.id}</DataGridCell>\n        <DataGridCell>{item.type}</DataGridCell>\n        <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n      </DataGridRow>;\n  };\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_DefaultDataGrid$para2 = DefaultDataGrid.parameters) === null || _DefaultDataGrid$para2 === void 0 ? void 0 : (_DefaultDataGrid$para3 = _DefaultDataGrid$para2.docs) === null || _DefaultDataGrid$para3 === void 0 ? void 0 : _DefaultDataGrid$para3.source)
  })
});
HideColumnDataGrid.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, HideColumnDataGrid.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_HideColumnDataGrid$p = HideColumnDataGrid.parameters) === null || _HideColumnDataGrid$p === void 0 ? void 0 : _HideColumnDataGrid$p.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  const row = ({\n    item\n  }) => {\n    if (!item) return;\n    return <DataGridRow key={item.id}>\n        <DataGridCell>{item.name}</DataGridCell>\n        <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n        <DataGridCell>{item.id}</DataGridCell>\n        <DataGridCell>{item.type}</DataGridCell>\n        <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n      </DataGridRow>;\n  };\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_HideColumnDataGrid$p2 = HideColumnDataGrid.parameters) === null || _HideColumnDataGrid$p2 === void 0 ? void 0 : (_HideColumnDataGrid$p3 = _HideColumnDataGrid$p2.docs) === null || _HideColumnDataGrid$p3 === void 0 ? void 0 : _HideColumnDataGrid$p3.source)
  })
});
DataGridIsLoading.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, DataGridIsLoading.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_DataGridIsLoading$pa = DataGridIsLoading.parameters) === null || _DataGridIsLoading$pa === void 0 ? void 0 : _DataGridIsLoading$pa.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  const row = ({\n    item\n  }) => {\n    if (!item) return;\n    return <DataGridRow key={item.id}>\n        <DataGridCell>{item.name}</DataGridCell>\n        <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n        <DataGridCell>{item.id}</DataGridCell>\n        <DataGridCell>{item.type}</DataGridCell>\n        <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n      </DataGridRow>;\n  };\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_DataGridIsLoading$pa2 = DataGridIsLoading.parameters) === null || _DataGridIsLoading$pa2 === void 0 ? void 0 : (_DataGridIsLoading$pa3 = _DataGridIsLoading$pa2.docs) === null || _DataGridIsLoading$pa3 === void 0 ? void 0 : _DataGridIsLoading$pa3.source)
  })
});
EmptyDataGrid.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, EmptyDataGrid.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_EmptyDataGrid$parame = EmptyDataGrid.parameters) === null || _EmptyDataGrid$parame === void 0 ? void 0 : _EmptyDataGrid$parame.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  const row = ({\n    item\n  }) => {\n    if (!item) return;\n    return <DataGridRow key={item.id}>\n        <DataGridCell>{item.name}</DataGridCell>\n        <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n        <DataGridCell>{item.id}</DataGridCell>\n        <DataGridCell>{item.type}</DataGridCell>\n        <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n      </DataGridRow>;\n  };\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_EmptyDataGrid$parame2 = EmptyDataGrid.parameters) === null || _EmptyDataGrid$parame2 === void 0 ? void 0 : (_EmptyDataGrid$parame3 = _EmptyDataGrid$parame2.docs) === null || _EmptyDataGrid$parame3 === void 0 ? void 0 : _EmptyDataGrid$parame3.source)
  })
});
var __namedExportsOrder = ["DefaultDataGrid", "HideColumnDataGrid", "DataGridIsLoading", "EmptyDataGrid"];
try {
    // @ts-ignore
    DefaultDataGrid.displayName = "DefaultDataGrid";
    // @ts-ignore
    DefaultDataGrid.__docgenInfo = { "description": "", "displayName": "DefaultDataGrid", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/DataGrid/DataGrid.stories.tsx#DefaultDataGrid"] = { docgenInfo: DefaultDataGrid.__docgenInfo, name: "DefaultDataGrid", path: "stories/DataGrid/DataGrid.stories.tsx#DefaultDataGrid" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    HideColumnDataGrid.displayName = "HideColumnDataGrid";
    // @ts-ignore
    HideColumnDataGrid.__docgenInfo = { "description": "", "displayName": "HideColumnDataGrid", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/DataGrid/DataGrid.stories.tsx#HideColumnDataGrid"] = { docgenInfo: HideColumnDataGrid.__docgenInfo, name: "HideColumnDataGrid", path: "stories/DataGrid/DataGrid.stories.tsx#HideColumnDataGrid" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    DataGridIsLoading.displayName = "DataGridIsLoading";
    // @ts-ignore
    DataGridIsLoading.__docgenInfo = { "description": "", "displayName": "DataGridIsLoading", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/DataGrid/DataGrid.stories.tsx#DataGridIsLoading"] = { docgenInfo: DataGridIsLoading.__docgenInfo, name: "DataGridIsLoading", path: "stories/DataGrid/DataGrid.stories.tsx#DataGridIsLoading" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    EmptyDataGrid.displayName = "EmptyDataGrid";
    // @ts-ignore
    EmptyDataGrid.__docgenInfo = { "description": "", "displayName": "EmptyDataGrid", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/DataGrid/DataGrid.stories.tsx#EmptyDataGrid"] = { docgenInfo: EmptyDataGrid.__docgenInfo, name: "EmptyDataGrid", path: "stories/DataGrid/DataGrid.stories.tsx#EmptyDataGrid" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/FormHelperText/FormHelperText.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": function() { return /* binding */ FormHelperText; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss
var FormHelperText_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormHelperText/FormHelperText.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormHelperText_module/* default */.Z, options);




       /* harmony default export */ var FormHelperText_FormHelperText_module = (FormHelperText_module/* default */.Z && FormHelperText_module/* default.locals */.Z.locals ? FormHelperText_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FormHelperText/FormHelperText.tsx
var _excluded = ["children", "error", "className"];
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




var FormHelperTextComponent = function FormHelperTextComponent(_ref, ref) {
  var children = _ref.children,
    error = _ref.error,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Typography/* Typography */.Z, _extends({}, rest, {
    ref: ref,
    variant: "sub-text",
    tag: "div",
    className: "".concat(FormHelperText_FormHelperText_module["form-helper-text"], " ").concat(error ? FormHelperText_FormHelperText_module.error : "", " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
var FormHelperText = /*#__PURE__*/react.forwardRef(FormHelperTextComponent);
try {
    // @ts-ignore
    FormHelperText.displayName = "FormHelperText";
    // @ts-ignore
    FormHelperText.__docgenInfo = { "description": "", "displayName": "FormHelperText", "props": { "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormHelperText/FormHelperText.tsx#FormHelperText"] = { docgenInfo: FormHelperText.__docgenInfo, name: "FormHelperText", path: "src/components/Form/FormHelperText/FormHelperText.tsx#FormHelperText" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Toggle/Toggle.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Toggle; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Checkbox/Checkbox.tsx + 1 modules
var Checkbox = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss
var Toggle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Toggle_module/* default */.Z, options);




       /* harmony default export */ var Toggle_Toggle_module = (Toggle_module/* default */.Z && Toggle_module/* default.locals */.Z.locals ? Toggle_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["children", "checked", "disabled", "helperProps"];
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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




var ToggleComponent = function ToggleComponent(_ref, ref) {
  var children = _ref.children,
    checked = _ref.checked,
    disabled = _ref.disabled,
    helperProps = _ref.helperProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", {
    className: Toggle_Toggle_module["toggle-wrapper"]
  }, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, _extends({}, rest, {
    ref: ref,
    checked: checked,
    className: Toggle_Toggle_module.checkbox,
    helperProps: _objectSpread({
      className: Toggle_Toggle_module["toggle-helper"]
    }, helperProps),
    disabled: disabled,
    label: children
  }), /*#__PURE__*/react.createElement("span", {
    "data-toggle": true,
    "aria-hidden": "true",
    className: "".concat(Toggle_Toggle_module.toggle, " ").concat(checked ? Toggle_Toggle_module.checked : "", " ").concat(disabled ? Toggle_Toggle_module.disabled : "", " ")
  })));
};
var Toggle = /*#__PURE__*/react.forwardRef(ToggleComponent);
try {
    // @ts-ignore
    Toggle.displayName = "Toggle";
    // @ts-ignore
    Toggle.__docgenInfo = { "description": "", "displayName": "Toggle", "props": { "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "formSelectorWrapperProps": { "defaultValue": null, "description": "", "name": "formSelectorWrapperProps", "required": false, "type": { "name": "Props" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Toggle/Toggle.tsx#Toggle"] = { docgenInfo: Toggle.__docgenInfo, name: "Toggle", path: "src/components/Form/Toggle/Toggle.tsx#Toggle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Typography; },
  "p": function() { return /* binding */ validVariants; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.Z, options);




       /* harmony default export */ var Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default.locals */.Z.locals ? Typography_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
var _excluded = ["children", "variant", "tag", "style", "spacing", "className"];
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




var validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
var TypographyComponent = function TypographyComponent(_ref, ref) {
  var children = _ref.children,
    variant = _ref.variant,
    tag = _ref.tag,
    style = _ref.style,
    spacing = _ref.spacing,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  var styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
  if (!tag) {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "code":
        tag = variant;
        break;
      case "body":
        tag = "p";
        break;
      case "body-bold":
        tag = "p";
        break;
      case "sub-text":
        tag = "span";
        break;
      default:
        tag = "div";
        break;
    }
  }
  var TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: styleWithSpacing,
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
var Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
try {
    // @ts-ignore
    Typography.displayName = "Typography";
    // @ts-ignore
    Typography.__docgenInfo = { "description": "", "displayName": "Typography", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"] = { docgenInfo: Typography.__docgenInfo, name: "Typography", path: "src/components/Typography/Typography.tsx#Typography" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useSpacing.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useSpacing; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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

var defaultFactor = 0.25;
var defaultUnit = "rem";
var spacingNumberRegex = /(\d+\.?\d*)+/g;
var useSpacing = function useSpacing(spacingProps, style) {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce(function (prev, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        spacing = _ref2[0],
        multiplier = _ref2[1];
      var matches = String(multiplier).matchAll(spacingNumberRegex);
      var cssSpacingValue = Array.from(matches).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          multiplierValue = _ref4[0];
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, spacing, cssSpacingValue));
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGrid.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGrid-module__grid-wrapper--kXh8U{padding:1rem 0}.DataGrid-module__table-wrapper--S0t3v{overflow-x:auto}.DataGrid-module__table--dcYJX{border-collapse:collapse;padding-top:.5rem;width:100%;position:relative}.DataGrid-module__pagination--FCQcY{margin-top:1rem;padding:0 1rem}@media only screen and (min-width: 50em){.DataGrid-module__pagination--FCQcY{padding:0 1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grid-wrapper": "DataGrid-module__grid-wrapper--kXh8U",
	"table-wrapper": "DataGrid-module__table-wrapper--S0t3v",
	"table": "DataGrid-module__table--dcYJX",
	"pagination": "DataGrid-module__pagination--FCQcY"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridActions.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridActions-module__actions--ac2sB{margin-bottom:1rem;padding:0 1rem;display:flex;flex-wrap:wrap}.DataGridActions-module__left-actions--UnjX2{flex:1}.DataGridActions-module__right-actions--w0Wkt{display:flex;gap:1rem}.DataGridActions-module__desktop--gWZdP{display:none}@media only screen and (min-width: 50em){.DataGridActions-module__actions--ac2sB{padding:0 1.25rem}}@media only screen and (min-width: 30em){.DataGridActions-module__desktop--gWZdP{display:flex}.DataGridActions-module__mobile--vu1Gz{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": "DataGridActions-module__actions--ac2sB",
	"left-actions": "DataGridActions-module__left-actions--UnjX2",
	"right-actions": "DataGridActions-module__right-actions--w0Wkt",
	"desktop": "DataGridActions-module__desktop--gWZdP",
	"mobile": "DataGridActions-module__mobile--vu1Gz"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridColumnsToggle-module__popover--_ZOpO{background-color:var(--modal-background-color);z-index:1;min-width:17.5rem;font-family:var(--font-family)}.DataGridColumnsToggle-module__backdrop--lZf5x{content:\"\";position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,0)}.DataGridColumnsToggle-module__header--oDiSb{min-width:5rem;padding:1rem .5rem 1rem 1.5rem;background-color:var(--modal-header-background-color);border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:flex;align-items:center}.DataGridColumnsToggle-module__title--Y8QxI{flex:1;margin:0}.DataGridColumnsToggle-module__close-btn--U6Esh{margin-left:.5rem}.DataGridColumnsToggle-module__content--uixTn{padding:1.5rem;display:flex;flex-direction:column;gap:1.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"popover": "DataGridColumnsToggle-module__popover--_ZOpO",
	"backdrop": "DataGridColumnsToggle-module__backdrop--lZf5x",
	"header": "DataGridColumnsToggle-module__header--oDiSb",
	"title": "DataGridColumnsToggle-module__title--Y8QxI",
	"close-btn": "DataGridColumnsToggle-module__close-btn--U6Esh",
	"content": "DataGridColumnsToggle-module__content--uixTn"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridBody.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridBody-module__empty--t6TLM{text-align:center;height:6rem;padding:2rem;vertical-align:top}.DataGridBody-module__empty--t6TLM p{color:var(--greyed-out)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"empty": "DataGridBody-module__empty--t6TLM"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridCell.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridCell-module__sr-only--LViZv{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.DataGridCell-module__hidden--TWILP{display:none}.DataGridCell-module__slide-in--vOKCd{animation:DataGridCell-module__slide-in--vOKCd .5s forwards}@media(prefers-reduced-motion: reduce){.DataGridCell-module__slide-in--vOKCd{animation-duration:.1ms}}.DataGridCell-module__slide-out--qzk5g{animation:DataGridCell-module__slide-out--qzk5g .5s forwards}@media(prefers-reduced-motion: reduce){.DataGridCell-module__slide-out--qzk5g{animation-duration:.1ms}}@keyframes DataGridCell-module__slide-in--vOKCd{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes DataGridCell-module__slide-out--qzk5g{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridCell-module__w-6--uQYaq{width:6%}.DataGridCell-module__w-7--KB_p6{width:7%}.DataGridCell-module__w-8--O8ZL8{width:8%}.DataGridCell-module__w-9--LdrFI{width:9%}.DataGridCell-module__w-10--XsFZI{width:10%}.DataGridCell-module__w-11--v8buZ{width:11%}.DataGridCell-module__w-12--hqiHC{width:12%}.DataGridCell-module__w-13--mSwFU{width:13%}.DataGridCell-module__w-14--yI_ru{width:14%}.DataGridCell-module__w-15--obd_t{width:15%}.DataGridCell-module__w-16--ihme1{width:16%}.DataGridCell-module__w-17--JoxN6{width:17%}.DataGridCell-module__w-18--W8O46{width:18%}.DataGridCell-module__w-19--ILsev{width:19%}.DataGridCell-module__w-20--rJcb2{width:20%}.DataGridCell-module__w-21--mr2BD{width:21%}.DataGridCell-module__w-22--Umv1b{width:22%}.DataGridCell-module__w-23--ACWqE{width:23%}.DataGridCell-module__w-24--lK7eI{width:24%}.DataGridCell-module__w-25--xwCEv{width:25%}.DataGridCell-module__w-26--tlEpC{width:26%}.DataGridCell-module__w-27--MZnFX{width:27%}.DataGridCell-module__w-28--UHWbj{width:28%}.DataGridCell-module__w-29--_a3r5{width:29%}.DataGridCell-module__w-30--f2oji{width:30%}.DataGridCell-module__w-31--RFY4E{width:31%}.DataGridCell-module__w-32--J6R3s{width:32%}.DataGridCell-module__w-33--KFZnS{width:33%}.DataGridCell-module__w-34--vBrF8{width:34%}.DataGridCell-module__w-35--s3ovI{width:35%}.DataGridCell-module__w-36--mo4kn{width:36%}.DataGridCell-module__w-37--YQQb5{width:37%}.DataGridCell-module__w-38--ARDE5{width:38%}.DataGridCell-module__w-39--DIf0m{width:39%}.DataGridCell-module__w-40--DD4mV{width:40%}.DataGridCell-module__w-41--wu4oj{width:41%}.DataGridCell-module__w-42--K8F1N{width:42%}.DataGridCell-module__w-43--OOIbS{width:43%}.DataGridCell-module__w-44--pUlU0{width:44%}.DataGridCell-module__w-45--UWr63{width:45%}.DataGridCell-module__w-46--EFlDA{width:46%}.DataGridCell-module__w-47--OGrHH{width:47%}.DataGridCell-module__w-48--a6w0T{width:48%}.DataGridCell-module__w-49--pSPMO{width:49%}.DataGridCell-module__w-50--qDSXX{width:50%}.DataGridCell-module__w-51--Q88u4{width:51%}.DataGridCell-module__w-52--NaNpg{width:52%}.DataGridCell-module__w-53--PLLM0{width:53%}.DataGridCell-module__w-54--mx4Na{width:54%}.DataGridCell-module__w-55--o6MYw{width:55%}.DataGridCell-module__w-56--IMhaT{width:56%}.DataGridCell-module__w-57--NQVcY{width:57%}.DataGridCell-module__w-58--VZ_AW{width:58%}.DataGridCell-module__w-59--u_qxk{width:59%}.DataGridCell-module__w-60--q2Kkd{width:60%}.DataGridCell-module__w-61--OmSiL{width:61%}.DataGridCell-module__w-62--yO2Lc{width:62%}.DataGridCell-module__w-63--mG6GS{width:63%}.DataGridCell-module__w-64--wSxdU{width:64%}.DataGridCell-module__w-65--ipoEs{width:65%}.DataGridCell-module__w-66--XsPBJ{width:66%}.DataGridCell-module__w-67--kAq89{width:67%}.DataGridCell-module__w-68--WSsK4{width:68%}.DataGridCell-module__w-69--zyjWu{width:69%}.DataGridCell-module__w-70--WRtIU{width:70%}.DataGridCell-module__w-71--QIhWY{width:71%}.DataGridCell-module__w-72--q9hD6{width:72%}.DataGridCell-module__w-73--IAowK{width:73%}.DataGridCell-module__w-74--CpdtY{width:74%}.DataGridCell-module__w-75--swcpC{width:75%}.DataGridCell-module__w-76--XBWxW{width:76%}.DataGridCell-module__w-77--rgU6v{width:77%}.DataGridCell-module__w-78--oc7o9{width:78%}.DataGridCell-module__w-79--kZ3ne{width:79%}.DataGridCell-module__w-80--z_zW7{width:80%}.DataGridCell-module__w-81--eJDcn{width:81%}.DataGridCell-module__w-82--n6R14{width:82%}.DataGridCell-module__w-83--K1kXU{width:83%}.DataGridCell-module__w-84--u77RG{width:84%}.DataGridCell-module__w-85--_SO8g{width:85%}.DataGridCell-module__w-86--D8GUI{width:86%}.DataGridCell-module__w-87--fb_py{width:87%}.DataGridCell-module__w-88--zo41g{width:88%}.DataGridCell-module__w-89--h5T2_{width:89%}.DataGridCell-module__w-90--U2mVi{width:90%}.DataGridCell-module__w-91--OT8fU{width:91%}.DataGridCell-module__w-92--wSK08{width:92%}.DataGridCell-module__w-93--ltBqr{width:93%}.DataGridCell-module__w-94--EFBXv{width:94%}.DataGridCell-module__w-95--ZDcTr{width:95%}.DataGridCell-module__w-96--pFaUM{width:96%}.DataGridCell-module__w-97--UaUFP{width:97%}.DataGridCell-module__w-98--S85XL{width:98%}.DataGridCell-module__w-99--BRBbF{width:99%}.DataGridCell-module__w-100--nBlGp{width:100%}.DataGridCell-module__w-101--DU8Oq{width:101%}.DataGridCell-module__w-102--pDkkO{width:102%}.DataGridCell-module__w-103--MXOpC{width:103%}.DataGridCell-module__w-104--YTOxk{width:104%}.DataGridCell-module__w-105--Nq0WI{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridCell-module__cell--Ycwcq{min-height:3.5rem;padding:.5rem .625rem}.DataGridCell-module__cell--Ycwcq:first-child{padding-left:1rem}.DataGridCell-module__cell--Ycwcq:last-child{padding-right:1rem}.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN{position:relative;overflow:hidden;background-color:var(--skeleton-background-color);border-radius:.5rem;height:1.25rem;margin:.625rem 0}.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(var(--skeleton-animation-color-rgb), 0) 0, rgba(var(--skeleton-animation-color-rgb), 0.2) 20%, rgba(var(--skeleton-animation-color-rgb), 0.5) 60%, rgba(var(--skeleton-animation-color-rgb), 0));content:\"\";animation:DataGridCell-module__shimmer--iNsni 2s infinite}@media(prefers-reduced-motion: reduce){.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN::after{animation:none}}@keyframes DataGridCell-module__shimmer--iNsni{100%{transform:translateX(100%)}}@media only screen and (min-width: 50em){.DataGridCell-module__cell--Ycwcq:first-child{padding-left:1.25rem}.DataGridCell-module__cell--Ycwcq:last-child{padding-right:1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "DataGridCell-module__sr-only--LViZv",
	"hidden": "DataGridCell-module__hidden--TWILP",
	"slide-in": "DataGridCell-module__slide-in--vOKCd",
	"slide-out": "DataGridCell-module__slide-out--qzk5g",
	"w-6": "DataGridCell-module__w-6--uQYaq",
	"w-7": "DataGridCell-module__w-7--KB_p6",
	"w-8": "DataGridCell-module__w-8--O8ZL8",
	"w-9": "DataGridCell-module__w-9--LdrFI",
	"w-10": "DataGridCell-module__w-10--XsFZI",
	"w-11": "DataGridCell-module__w-11--v8buZ",
	"w-12": "DataGridCell-module__w-12--hqiHC",
	"w-13": "DataGridCell-module__w-13--mSwFU",
	"w-14": "DataGridCell-module__w-14--yI_ru",
	"w-15": "DataGridCell-module__w-15--obd_t",
	"w-16": "DataGridCell-module__w-16--ihme1",
	"w-17": "DataGridCell-module__w-17--JoxN6",
	"w-18": "DataGridCell-module__w-18--W8O46",
	"w-19": "DataGridCell-module__w-19--ILsev",
	"w-20": "DataGridCell-module__w-20--rJcb2",
	"w-21": "DataGridCell-module__w-21--mr2BD",
	"w-22": "DataGridCell-module__w-22--Umv1b",
	"w-23": "DataGridCell-module__w-23--ACWqE",
	"w-24": "DataGridCell-module__w-24--lK7eI",
	"w-25": "DataGridCell-module__w-25--xwCEv",
	"w-26": "DataGridCell-module__w-26--tlEpC",
	"w-27": "DataGridCell-module__w-27--MZnFX",
	"w-28": "DataGridCell-module__w-28--UHWbj",
	"w-29": "DataGridCell-module__w-29--_a3r5",
	"w-30": "DataGridCell-module__w-30--f2oji",
	"w-31": "DataGridCell-module__w-31--RFY4E",
	"w-32": "DataGridCell-module__w-32--J6R3s",
	"w-33": "DataGridCell-module__w-33--KFZnS",
	"w-34": "DataGridCell-module__w-34--vBrF8",
	"w-35": "DataGridCell-module__w-35--s3ovI",
	"w-36": "DataGridCell-module__w-36--mo4kn",
	"w-37": "DataGridCell-module__w-37--YQQb5",
	"w-38": "DataGridCell-module__w-38--ARDE5",
	"w-39": "DataGridCell-module__w-39--DIf0m",
	"w-40": "DataGridCell-module__w-40--DD4mV",
	"w-41": "DataGridCell-module__w-41--wu4oj",
	"w-42": "DataGridCell-module__w-42--K8F1N",
	"w-43": "DataGridCell-module__w-43--OOIbS",
	"w-44": "DataGridCell-module__w-44--pUlU0",
	"w-45": "DataGridCell-module__w-45--UWr63",
	"w-46": "DataGridCell-module__w-46--EFlDA",
	"w-47": "DataGridCell-module__w-47--OGrHH",
	"w-48": "DataGridCell-module__w-48--a6w0T",
	"w-49": "DataGridCell-module__w-49--pSPMO",
	"w-50": "DataGridCell-module__w-50--qDSXX",
	"w-51": "DataGridCell-module__w-51--Q88u4",
	"w-52": "DataGridCell-module__w-52--NaNpg",
	"w-53": "DataGridCell-module__w-53--PLLM0",
	"w-54": "DataGridCell-module__w-54--mx4Na",
	"w-55": "DataGridCell-module__w-55--o6MYw",
	"w-56": "DataGridCell-module__w-56--IMhaT",
	"w-57": "DataGridCell-module__w-57--NQVcY",
	"w-58": "DataGridCell-module__w-58--VZ_AW",
	"w-59": "DataGridCell-module__w-59--u_qxk",
	"w-60": "DataGridCell-module__w-60--q2Kkd",
	"w-61": "DataGridCell-module__w-61--OmSiL",
	"w-62": "DataGridCell-module__w-62--yO2Lc",
	"w-63": "DataGridCell-module__w-63--mG6GS",
	"w-64": "DataGridCell-module__w-64--wSxdU",
	"w-65": "DataGridCell-module__w-65--ipoEs",
	"w-66": "DataGridCell-module__w-66--XsPBJ",
	"w-67": "DataGridCell-module__w-67--kAq89",
	"w-68": "DataGridCell-module__w-68--WSsK4",
	"w-69": "DataGridCell-module__w-69--zyjWu",
	"w-70": "DataGridCell-module__w-70--WRtIU",
	"w-71": "DataGridCell-module__w-71--QIhWY",
	"w-72": "DataGridCell-module__w-72--q9hD6",
	"w-73": "DataGridCell-module__w-73--IAowK",
	"w-74": "DataGridCell-module__w-74--CpdtY",
	"w-75": "DataGridCell-module__w-75--swcpC",
	"w-76": "DataGridCell-module__w-76--XBWxW",
	"w-77": "DataGridCell-module__w-77--rgU6v",
	"w-78": "DataGridCell-module__w-78--oc7o9",
	"w-79": "DataGridCell-module__w-79--kZ3ne",
	"w-80": "DataGridCell-module__w-80--z_zW7",
	"w-81": "DataGridCell-module__w-81--eJDcn",
	"w-82": "DataGridCell-module__w-82--n6R14",
	"w-83": "DataGridCell-module__w-83--K1kXU",
	"w-84": "DataGridCell-module__w-84--u77RG",
	"w-85": "DataGridCell-module__w-85--_SO8g",
	"w-86": "DataGridCell-module__w-86--D8GUI",
	"w-87": "DataGridCell-module__w-87--fb_py",
	"w-88": "DataGridCell-module__w-88--zo41g",
	"w-89": "DataGridCell-module__w-89--h5T2_",
	"w-90": "DataGridCell-module__w-90--U2mVi",
	"w-91": "DataGridCell-module__w-91--OT8fU",
	"w-92": "DataGridCell-module__w-92--wSK08",
	"w-93": "DataGridCell-module__w-93--ltBqr",
	"w-94": "DataGridCell-module__w-94--EFBXv",
	"w-95": "DataGridCell-module__w-95--ZDcTr",
	"w-96": "DataGridCell-module__w-96--pFaUM",
	"w-97": "DataGridCell-module__w-97--UaUFP",
	"w-98": "DataGridCell-module__w-98--S85XL",
	"w-99": "DataGridCell-module__w-99--BRBbF",
	"w-100": "DataGridCell-module__w-100--nBlGp",
	"w-101": "DataGridCell-module__w-101--DU8Oq",
	"w-102": "DataGridCell-module__w-102--pDkkO",
	"w-103": "DataGridCell-module__w-103--MXOpC",
	"w-104": "DataGridCell-module__w-104--YTOxk",
	"w-105": "DataGridCell-module__w-105--Nq0WI",
	"cell": "DataGridCell-module__cell--Ycwcq",
	"loading": "DataGridCell-module__loading--JTfLN",
	"shimmer": "DataGridCell-module__shimmer--iNsni"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridRow.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridRow-module__row--XjCXQ{background-color:var(--data-grid-row-background-color)}.DataGridRow-module__row--XjCXQ:not(.DataGridRow-module__loading--z7nvk):hover{background-color:var(--data-grid-row-hover-background-color)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"row": "DataGridRow-module__row--XjCXQ",
	"loading": "DataGridRow-module__loading--z7nvk"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridHeader-module__thead--HgXx_::after{content:\"\";position:absolute;width:calc(100% - 2rem);left:1rem;border-bottom:2px solid var(--light-grey-border)}.DataGridHeader-module__row--xtIT4{height:2.5rem}.DataGridHeader-module__context-menu--WbIfT{width:4.125rem;box-sizing:border-box}@media only screen and (min-width: 50em){.DataGridHeader-module__thead--HgXx_::after{width:calc(100% - 2.5rem);left:1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"thead": "DataGridHeader-module__thead--HgXx_",
	"row": "DataGridHeader-module__row--xtIT4",
	"context-menu": "DataGridHeader-module__context-menu--WbIfT"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridHeaderCell-module__header-cell--pYGCz{font-weight:normal;text-align:left;padding:0 .625rem}.DataGridHeaderCell-module__header-cell--pYGCz:first-child{padding-left:1rem}.DataGridHeaderCell-module__header-cell--pYGCz:last-child{padding-right:1rem}.DataGridHeaderCell-module__header-cell--pYGCz>*{display:inline-flex}.DataGridHeaderCell-module__header-cell--pYGCz>button{padding:0;margin:0;border:0;background:none;cursor:pointer;display:inline-flex;align-items:center}.DataGridHeaderCell-module__headline--y64Zz{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--default-line-height);font-weight:700;color:var(--default)}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO{display:flex;flex-direction:column;padding-left:.5rem;justify-content:center}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO>*{font-size:.625rem}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO .DataGridHeaderCell-module__indicator--OXbM6{color:var(--greyed-out)}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO .DataGridHeaderCell-module__indicator--OXbM6.DataGridHeaderCell-module__active--xGM8O{color:var(--color-primary)}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO .DataGridHeaderCell-module__indicator--OXbM6.DataGridHeaderCell-module__hidden--v1QcA{visibility:hidden}@media only screen and (min-width: 50em){.DataGridHeaderCell-module__header-cell--pYGCz:first-child{padding-left:1.25rem}.DataGridHeaderCell-module__header-cell--pYGCz:last-child{padding-right:1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header-cell": "DataGridHeaderCell-module__header-cell--pYGCz",
	"headline": "DataGridHeaderCell-module__headline--y64Zz",
	"sorting-indicator-container": "DataGridHeaderCell-module__sorting-indicator-container--IlbeO",
	"indicator": "DataGridHeaderCell-module__indicator--OXbM6",
	"active": "DataGridHeaderCell-module__active--xGM8O",
	"hidden": "DataGridHeaderCell-module__hidden--v1QcA"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormHelperText/FormHelperText.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FormHelperText-module__form-helper-text--CZrGs{margin:0;color:var(--greyed-out)}.FormHelperText-module__error--uFct6{color:var(--error)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-helper-text": "FormHelperText-module__form-helper-text--CZrGs",
	"error": "FormHelperText-module__error--uFct6"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Toggle-module__sr-only--fg5Lz{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Toggle-module__hidden--MLQo5{display:none}.Toggle-module__slide-in--BUiHs{animation:Toggle-module__slide-in--BUiHs .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-in--BUiHs{animation-duration:.1ms}}.Toggle-module__slide-out--o4_75{animation:Toggle-module__slide-out--o4_75 .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-out--o4_75{animation-duration:.1ms}}@keyframes Toggle-module__slide-in--BUiHs{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Toggle-module__slide-out--o4_75{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Toggle-module__w-6--E6pL9{width:6%}.Toggle-module__w-7--_BHjY{width:7%}.Toggle-module__w-8--n3PAm{width:8%}.Toggle-module__w-9--MlsmW{width:9%}.Toggle-module__w-10--csI7t{width:10%}.Toggle-module__w-11--LsEUk{width:11%}.Toggle-module__w-12--EaGEx{width:12%}.Toggle-module__w-13--eV3KP{width:13%}.Toggle-module__w-14--nhCf2{width:14%}.Toggle-module__w-15--frqrw{width:15%}.Toggle-module__w-16--gH3t7{width:16%}.Toggle-module__w-17--zrz3N{width:17%}.Toggle-module__w-18--Q3gdy{width:18%}.Toggle-module__w-19--bktFA{width:19%}.Toggle-module__w-20--hIzus{width:20%}.Toggle-module__w-21--hODNS{width:21%}.Toggle-module__w-22--d1ter{width:22%}.Toggle-module__w-23--im5HG{width:23%}.Toggle-module__w-24--hYGFh{width:24%}.Toggle-module__w-25--Lo3UM{width:25%}.Toggle-module__w-26--B1VKP{width:26%}.Toggle-module__w-27--DtXnj{width:27%}.Toggle-module__w-28--D8bO_{width:28%}.Toggle-module__w-29--RYCD5{width:29%}.Toggle-module__w-30--LsSCL{width:30%}.Toggle-module__w-31--eTdaS{width:31%}.Toggle-module__w-32--X543Y{width:32%}.Toggle-module__w-33--vnJ5V{width:33%}.Toggle-module__w-34--TZJU_{width:34%}.Toggle-module__w-35--y0cxH{width:35%}.Toggle-module__w-36--abTQ4{width:36%}.Toggle-module__w-37--uAK8L{width:37%}.Toggle-module__w-38--XzKYc{width:38%}.Toggle-module__w-39--otISy{width:39%}.Toggle-module__w-40--jqZjw{width:40%}.Toggle-module__w-41--GTuSW{width:41%}.Toggle-module__w-42--dXAn_{width:42%}.Toggle-module__w-43--YnhZS{width:43%}.Toggle-module__w-44--HwCTJ{width:44%}.Toggle-module__w-45--OPWx7{width:45%}.Toggle-module__w-46--ssmL2{width:46%}.Toggle-module__w-47--Srq9d{width:47%}.Toggle-module__w-48--oyQOU{width:48%}.Toggle-module__w-49--AuShN{width:49%}.Toggle-module__w-50--u6IQp{width:50%}.Toggle-module__w-51--qMjr6{width:51%}.Toggle-module__w-52--dDoH2{width:52%}.Toggle-module__w-53--rUHmM{width:53%}.Toggle-module__w-54--s7hYn{width:54%}.Toggle-module__w-55--fLOog{width:55%}.Toggle-module__w-56--tyVxI{width:56%}.Toggle-module__w-57--xJRnM{width:57%}.Toggle-module__w-58--G5Eqr{width:58%}.Toggle-module__w-59--vq8d4{width:59%}.Toggle-module__w-60--_Q8As{width:60%}.Toggle-module__w-61--i7L58{width:61%}.Toggle-module__w-62--wzv2U{width:62%}.Toggle-module__w-63--eRy7K{width:63%}.Toggle-module__w-64--jC1Xp{width:64%}.Toggle-module__w-65--TGqg8{width:65%}.Toggle-module__w-66--hpYRE{width:66%}.Toggle-module__w-67--pKoBC{width:67%}.Toggle-module__w-68--X80qf{width:68%}.Toggle-module__w-69--nOtYZ{width:69%}.Toggle-module__w-70--Uyndn{width:70%}.Toggle-module__w-71--6_kOr{width:71%}.Toggle-module__w-72--wzAvX{width:72%}.Toggle-module__w-73--EWGao{width:73%}.Toggle-module__w-74--Zjywf{width:74%}.Toggle-module__w-75--E96eq{width:75%}.Toggle-module__w-76--V6DZa{width:76%}.Toggle-module__w-77--Dd0x7{width:77%}.Toggle-module__w-78--rS7Rt{width:78%}.Toggle-module__w-79--r5hys{width:79%}.Toggle-module__w-80--vBZdJ{width:80%}.Toggle-module__w-81--Bq4J7{width:81%}.Toggle-module__w-82--L4Pa2{width:82%}.Toggle-module__w-83--BZ76P{width:83%}.Toggle-module__w-84--IlodQ{width:84%}.Toggle-module__w-85--HdWuM{width:85%}.Toggle-module__w-86--KfRGY{width:86%}.Toggle-module__w-87--Ge354{width:87%}.Toggle-module__w-88--dzn7N{width:88%}.Toggle-module__w-89--RaNgk{width:89%}.Toggle-module__w-90--urlH1{width:90%}.Toggle-module__w-91--qxZ5s{width:91%}.Toggle-module__w-92--rTmBi{width:92%}.Toggle-module__w-93--kgSqo{width:93%}.Toggle-module__w-94--xIDdK{width:94%}.Toggle-module__w-95--SFfCs{width:95%}.Toggle-module__w-96--__wN4{width:96%}.Toggle-module__w-97--gVzHf{width:97%}.Toggle-module__w-98--hon1R{width:98%}.Toggle-module__w-99--eYFcE{width:99%}.Toggle-module__w-100--eQsE_{width:100%}.Toggle-module__w-101--MzG_g{width:101%}.Toggle-module__w-102--Ru2M7{width:102%}.Toggle-module__w-103--R7uc2{width:103%}.Toggle-module__w-104--hYyzq{width:104%}.Toggle-module__w-105--i0_1p{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Toggle-module__toggle-wrapper--EJ6xC{display:flex;align-items:center;position:relative}.Toggle-module__toggle--CAy20{width:2rem;min-width:2rem;height:1.25rem;background-color:var(--default);border-radius:2.5rem;position:relative;transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:block;pointer-events:none}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:before{content:\"\";width:1rem;height:1rem;border-radius:50%;display:block;background-color:var(--light);position:absolute;top:50%;transform:translateY(-50%) translateX(0);left:.125rem;transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:before{transition-duration:.1ms}}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi{background-color:var(--color-primary)}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:before{transform:translateY(-50%) translateX(calc(100% - 0.25rem))}.Toggle-module__toggle--CAy20.Toggle-module__disabled--cz5pI{background-color:var(--disabled);cursor:not-allowed}.Toggle-module__toggle-helper--l3hCO{margin-left:2.5rem}.Toggle-module__checkbox--ptyNo{z-index:10;position:static}.Toggle-module__checkbox--ptyNo input{width:2rem}.Toggle-module__checkbox--ptyNo input~[data-icon][aria-hidden]{display:none}.Toggle-module__checkbox--ptyNo input:focus-visible+*{border-radius:2.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Toggle-module__sr-only--fg5Lz",
	"hidden": "Toggle-module__hidden--MLQo5",
	"slide-in": "Toggle-module__slide-in--BUiHs",
	"slide-out": "Toggle-module__slide-out--o4_75",
	"w-6": "Toggle-module__w-6--E6pL9",
	"w-7": "Toggle-module__w-7--_BHjY",
	"w-8": "Toggle-module__w-8--n3PAm",
	"w-9": "Toggle-module__w-9--MlsmW",
	"w-10": "Toggle-module__w-10--csI7t",
	"w-11": "Toggle-module__w-11--LsEUk",
	"w-12": "Toggle-module__w-12--EaGEx",
	"w-13": "Toggle-module__w-13--eV3KP",
	"w-14": "Toggle-module__w-14--nhCf2",
	"w-15": "Toggle-module__w-15--frqrw",
	"w-16": "Toggle-module__w-16--gH3t7",
	"w-17": "Toggle-module__w-17--zrz3N",
	"w-18": "Toggle-module__w-18--Q3gdy",
	"w-19": "Toggle-module__w-19--bktFA",
	"w-20": "Toggle-module__w-20--hIzus",
	"w-21": "Toggle-module__w-21--hODNS",
	"w-22": "Toggle-module__w-22--d1ter",
	"w-23": "Toggle-module__w-23--im5HG",
	"w-24": "Toggle-module__w-24--hYGFh",
	"w-25": "Toggle-module__w-25--Lo3UM",
	"w-26": "Toggle-module__w-26--B1VKP",
	"w-27": "Toggle-module__w-27--DtXnj",
	"w-28": "Toggle-module__w-28--D8bO_",
	"w-29": "Toggle-module__w-29--RYCD5",
	"w-30": "Toggle-module__w-30--LsSCL",
	"w-31": "Toggle-module__w-31--eTdaS",
	"w-32": "Toggle-module__w-32--X543Y",
	"w-33": "Toggle-module__w-33--vnJ5V",
	"w-34": "Toggle-module__w-34--TZJU_",
	"w-35": "Toggle-module__w-35--y0cxH",
	"w-36": "Toggle-module__w-36--abTQ4",
	"w-37": "Toggle-module__w-37--uAK8L",
	"w-38": "Toggle-module__w-38--XzKYc",
	"w-39": "Toggle-module__w-39--otISy",
	"w-40": "Toggle-module__w-40--jqZjw",
	"w-41": "Toggle-module__w-41--GTuSW",
	"w-42": "Toggle-module__w-42--dXAn_",
	"w-43": "Toggle-module__w-43--YnhZS",
	"w-44": "Toggle-module__w-44--HwCTJ",
	"w-45": "Toggle-module__w-45--OPWx7",
	"w-46": "Toggle-module__w-46--ssmL2",
	"w-47": "Toggle-module__w-47--Srq9d",
	"w-48": "Toggle-module__w-48--oyQOU",
	"w-49": "Toggle-module__w-49--AuShN",
	"w-50": "Toggle-module__w-50--u6IQp",
	"w-51": "Toggle-module__w-51--qMjr6",
	"w-52": "Toggle-module__w-52--dDoH2",
	"w-53": "Toggle-module__w-53--rUHmM",
	"w-54": "Toggle-module__w-54--s7hYn",
	"w-55": "Toggle-module__w-55--fLOog",
	"w-56": "Toggle-module__w-56--tyVxI",
	"w-57": "Toggle-module__w-57--xJRnM",
	"w-58": "Toggle-module__w-58--G5Eqr",
	"w-59": "Toggle-module__w-59--vq8d4",
	"w-60": "Toggle-module__w-60--_Q8As",
	"w-61": "Toggle-module__w-61--i7L58",
	"w-62": "Toggle-module__w-62--wzv2U",
	"w-63": "Toggle-module__w-63--eRy7K",
	"w-64": "Toggle-module__w-64--jC1Xp",
	"w-65": "Toggle-module__w-65--TGqg8",
	"w-66": "Toggle-module__w-66--hpYRE",
	"w-67": "Toggle-module__w-67--pKoBC",
	"w-68": "Toggle-module__w-68--X80qf",
	"w-69": "Toggle-module__w-69--nOtYZ",
	"w-70": "Toggle-module__w-70--Uyndn",
	"w-71": "Toggle-module__w-71--6_kOr",
	"w-72": "Toggle-module__w-72--wzAvX",
	"w-73": "Toggle-module__w-73--EWGao",
	"w-74": "Toggle-module__w-74--Zjywf",
	"w-75": "Toggle-module__w-75--E96eq",
	"w-76": "Toggle-module__w-76--V6DZa",
	"w-77": "Toggle-module__w-77--Dd0x7",
	"w-78": "Toggle-module__w-78--rS7Rt",
	"w-79": "Toggle-module__w-79--r5hys",
	"w-80": "Toggle-module__w-80--vBZdJ",
	"w-81": "Toggle-module__w-81--Bq4J7",
	"w-82": "Toggle-module__w-82--L4Pa2",
	"w-83": "Toggle-module__w-83--BZ76P",
	"w-84": "Toggle-module__w-84--IlodQ",
	"w-85": "Toggle-module__w-85--HdWuM",
	"w-86": "Toggle-module__w-86--KfRGY",
	"w-87": "Toggle-module__w-87--Ge354",
	"w-88": "Toggle-module__w-88--dzn7N",
	"w-89": "Toggle-module__w-89--RaNgk",
	"w-90": "Toggle-module__w-90--urlH1",
	"w-91": "Toggle-module__w-91--qxZ5s",
	"w-92": "Toggle-module__w-92--rTmBi",
	"w-93": "Toggle-module__w-93--kgSqo",
	"w-94": "Toggle-module__w-94--xIDdK",
	"w-95": "Toggle-module__w-95--SFfCs",
	"w-96": "Toggle-module__w-96--__wN4",
	"w-97": "Toggle-module__w-97--gVzHf",
	"w-98": "Toggle-module__w-98--hon1R",
	"w-99": "Toggle-module__w-99--eYFcE",
	"w-100": "Toggle-module__w-100--eQsE_",
	"w-101": "Toggle-module__w-101--MzG_g",
	"w-102": "Toggle-module__w-102--Ru2M7",
	"w-103": "Toggle-module__w-103--R7uc2",
	"w-104": "Toggle-module__w-104--hYyzq",
	"w-105": "Toggle-module__w-105--i0_1p",
	"toggle-wrapper": "Toggle-module__toggle-wrapper--EJ6xC",
	"toggle": "Toggle-module__toggle--CAy20",
	"checked": "Toggle-module__checked--glybi",
	"disabled": "Toggle-module__disabled--cz5pI",
	"toggle-helper": "Toggle-module__toggle-helper--l3hCO",
	"checkbox": "Toggle-module__checkbox--ptyNo"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": "Typography-module__typography_style_h1--QRbCJ",
	"typography_style_h2": "Typography-module__typography_style_h2--gst_1",
	"typography_style_h3": "Typography-module__typography_style_h3--OMuiN",
	"typography_style_h4": "Typography-module__typography_style_h4--AK8ry",
	"typography_style_body": "Typography-module__typography_style_body--RZ14O",
	"typography_style_body-bold": "Typography-module__typography_style_body-bold--yrfzC",
	"typography_style_sub-text": "Typography-module__typography_style_sub-text--J284m",
	"typography_style_code": "Typography-module__typography_style_code--aL5hm"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);