"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3123],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aD: function() { return /* reexport */ chunk_AY7I2SME/* action */.aD; }
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs + 5 modules
var chunk_AY7I2SME = __webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-GOSXJPAJ.mjs


var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs





/***/ }),

/***/ "./stories/DataGrid/DataGrid.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DataGridIsLoading: function() { return /* binding */ DataGridIsLoading; },
  DataGridWithColumnsPopup: function() { return /* binding */ DataGridWithColumnsPopup; },
  DefaultDataGrid: function() { return /* binding */ DefaultDataGrid; },
  EmptyDataGrid: function() { return /* binding */ EmptyDataGrid; },
  HideColumnDataGrid: function() { return /* binding */ HideColumnDataGrid; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
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




       /* harmony default export */ var DataGrid_DataGrid_module = (DataGrid_module/* default */.Z && DataGrid_module/* default */.Z.locals ? DataGrid_module/* default */.Z.locals : undefined);

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




       /* harmony default export */ var DataGridHeader_DataGridHeaderCell_module = (DataGridHeaderCell_module/* default */.Z && DataGridHeaderCell_module/* default */.Z.locals ? DataGridHeaderCell_module/* default */.Z.locals : undefined);

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
      var sortingIndicatorClasses = [DataGridHeader_DataGridHeaderCell_module["indicator"]];
      activeSortDirection && sortingIndicatorClasses.push(activeSortDirection === direction ? DataGridHeader_DataGridHeaderCell_module["active"] : DataGridHeader_DataGridHeaderCell_module["hidden"]);
      return sortingIndicatorClasses;
    };
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: getSortingIndicatorClasses("ASC").join(" "),
      icon: Icon/* Icons */.P.TriangleUp
    }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: getSortingIndicatorClasses("DESC").join(" "),
      icon: Icon/* Icons */.P.TriangleDown
    }));
  };
  var innerContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: DataGridHeader_DataGridHeaderCell_module["headline"]
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




       /* harmony default export */ var DataGridHeader_DataGridHeader_module = (DataGridHeader_module/* default */.Z && DataGridHeader_module/* default */.Z.locals ? DataGridHeader_module/* default */.Z.locals : undefined);

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
    className: DataGridHeader_DataGridHeader_module["thead"]
  }), /*#__PURE__*/react.createElement("tr", {
    className: DataGridHeader_DataGridHeader_module["row"]
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




       /* harmony default export */ var DataGridActions_DataGridActions_module = (DataGridActions_module/* default */.Z && DataGridActions_module/* default */.Z.locals ? DataGridActions_module/* default */.Z.locals : undefined);

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




       /* harmony default export */ var DataGridActions_DataGridColumnsToggle_module = (DataGridColumnsToggle_module/* default */.Z && DataGridColumnsToggle_module/* default */.Z.locals ? DataGridColumnsToggle_module/* default */.Z.locals : undefined);

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
      },
      label: item.headline
    });
  });
  var handleBackdropClick = function handleBackdropClick() {
    return onClose();
  };
  return /*#__PURE__*/react.createElement(Popover/* Popover */.J, DataGridColumnsToggle_extends({}, rest, {
    ref: ref,
    className: "".concat(DataGridActions_DataGridColumnsToggle_module["popover"], " ").concat(className),
    show: open,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledId
  }), open && /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridColumnsToggle_module["backdrop"],
    onClick: handleBackdropClick
  }), domRoot), open && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridColumnsToggle_module["header"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: labelledId,
    className: DataGridActions_DataGridColumnsToggle_module["title"],
    tag: "span",
    variant: "h4"
  }, titleLabel), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    onClick: onClose,
    className: "".concat(DataGridActions_DataGridColumnsToggle_module["close-btn"]),
    title: closeButtonTitle
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Times
  }))), /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridColumnsToggle_module["content"]
  }, toggles)));
};
var DataGridColumnsToggle = /*#__PURE__*/react.forwardRef(DataGridColumnsToggleComponent);
try {
    // @ts-ignore
    DataGridColumnsToggle.displayName = "DataGridColumnsToggle";
    // @ts-ignore
    DataGridColumnsToggle.__docgenInfo = { "description": "", "displayName": "DataGridColumnsToggle", "props": { "closeButtonTitle": { "defaultValue": { value: "Close show columns dialog" }, "description": "", "name": "closeButtonTitle", "required": false, "type": { "name": "string" } }, "placement": { "defaultValue": null, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "domRoot": { "defaultValue": { value: "document.body" }, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "() => void" } }, "titleLabel": { "defaultValue": { value: "Show columns" }, "description": "", "name": "titleLabel", "required": false, "type": { "name": "string" } }, "transformOrigin": { "defaultValue": null, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": null, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "anchorEl": { "defaultValue": null, "description": "", "name": "anchorEl", "required": false, "type": { "name": "RefObject<HTMLOrSVGElement>" } }, "onAnchorOutOfView": { "defaultValue": null, "description": "", "name": "onAnchorOutOfView", "required": false, "type": { "name": "(() => void)" } }, "onToggleClicked": { "defaultValue": null, "description": "", "name": "onToggleClicked", "required": true, "type": { "name": "(colName: string) => void" } } } };
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
  var _columnsBtnProps$clas, _columnsBtnProps$clas2, _searchBtnProps$class, _columnsBtnProps$clas3;
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
  var isHidden = !(enableAddBtn || enableColumnsBtn || enableSearchBtn);
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
    className: "".concat(DataGridActions_DataGridActions_module["actions"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridActions_module["left-actions"]
  }, enableAddBtn && /*#__PURE__*/react.createElement(Button/* Button */.z, DataGridActions_extends({
    color: "primary",
    startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons */.P.Plus
    }),
    title: "Add item",
    type: "button",
    variant: "outline"
  }, restAddBtnProps), addBtnChildren !== null && addBtnChildren !== void 0 ? addBtnChildren : "Add item")), /*#__PURE__*/react.createElement("div", {
    className: DataGridActions_DataGridActions_module["right-actions"]
  }, enableColumnsBtn && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, DataGridActions_extends({
    startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons */.P.Change
    }),
    title: "Show/hide columns",
    variant: "text"
  }, restColumnsBtnProps, {
    className: "".concat(DataGridActions_DataGridActions_module["desktop"], " ").concat((_columnsBtnProps$clas = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas !== void 0 ? _columnsBtnProps$clas : ""),
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
    className: "".concat(DataGridActions_DataGridActions_module["mobile"], " ").concat((_columnsBtnProps$clas2 = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas2 !== void 0 ? _columnsBtnProps$clas2 : "")
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Change
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
      icon: Icon/* Icons */.P.TableSearch
    }),
    title: "Search",
    variant: "text"
  }, restSearchBtnProps, {
    className: "".concat(DataGridActions_DataGridActions_module["desktop"], " ").concat((_searchBtnProps$class = searchBtnProps === null || searchBtnProps === void 0 ? void 0 : searchBtnProps.className) !== null && _searchBtnProps$class !== void 0 ? _searchBtnProps$class : "")
  }), searchBtnChildren !== null && searchBtnChildren !== void 0 ? searchBtnChildren : "Search"), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, DataGridActions_extends({
    title: "Search"
  }, searchIconBtnProps, {
    className: "".concat(DataGridActions_DataGridActions_module["mobile"], " ").concat((_columnsBtnProps$clas3 = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas3 !== void 0 ? _columnsBtnProps$clas3 : "")
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.TableSearch
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




       /* harmony default export */ var DataGridBody_DataGridCell_module = (DataGridCell_module/* default */.Z && DataGridCell_module/* default */.Z.locals ? DataGridCell_module/* default */.Z.locals : undefined);

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
    className: "".concat(DataGridBody_DataGridCell_module["cell"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), isLoading && /*#__PURE__*/react.createElement("div", {
    className: DataGridBody_DataGridCell_module["loading"],
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




       /* harmony default export */ var DataGridBody_DataGridRow_module = (DataGridRow_module/* default */.Z && DataGridRow_module/* default */.Z.locals ? DataGridRow_module/* default */.Z.locals : undefined);

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
  var classNames = [DataGridBody_DataGridRow_module["row"]];
  className && classNames.push(className);
  isLoading && classNames.push(DataGridBody_DataGridRow_module["loading"]);
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




       /* harmony default export */ var DataGridBody_DataGridBody_module = (DataGridBody_module/* default */.Z && DataGridBody_module/* default */.Z.locals ? DataGridBody_module/* default */.Z.locals : undefined);

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
        className: DataGridBody_DataGridBody_module["empty"],
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
    className: DataGrid_DataGrid_module["table"]
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
    className: "".concat(DataGrid_DataGrid_module["pagination"], " ").concat((_paginationProps$clas = paginationProps.className) !== null && _paginationProps$clas !== void 0 ? _paginationProps$clas : "")
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
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs
var chunk_DXNAW7Q2 = __webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs
var chunk_JT3VIYBO = __webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-links/dist/react/index.mjs




var LEFT_BUTTON=0,isPlainLeftClick=e=>e.button===LEFT_BUTTON&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,cancelled=(e,cb=_e=>{})=>{isPlainLeftClick(e)&&(e.preventDefault(),cb(e));},LinkTo=class extends react.PureComponent{constructor(){super(...arguments);this.state={href:"/"};this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await (0,chunk_DXNAW7Q2/* hrefTo */.ew)(title,name);this.setState({href});}};this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,chunk_DXNAW7Q2/* navigate */.c4)({title,name});};}componentDidMount(){this.updateHref();}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref();}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react.createElement("a",{href,onClick:e=>cancelled(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_react_default=LinkTo;



;// CONCATENATED MODULE: ./stories/DataGrid/DataGrid.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
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
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var DataGrid_DataGrid = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs + 1 modules
var addon_actions_dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/esm/index.js + 1 modules
var esm = __webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js");
;// CONCATENATED MODULE: ./stories/DataGrid/DataGrid.stories.tsx
function DataGrid_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return DataGrid_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, DataGrid_stories_typeof(obj);
}
var _DefaultDataGrid$para, _DefaultDataGrid$para2, _DataGridWithColumnsP, _DataGridWithColumnsP2, _HideColumnDataGrid$p, _HideColumnDataGrid$p2, _DataGridIsLoading$pa, _DataGridIsLoading$pa2, _EmptyDataGrid$parame, _EmptyDataGrid$parame2;
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
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == DataGrid_stories_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return {
          value: void 0,
          done: !0
        };
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable || "" === iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    throw new TypeError(DataGrid_stories_typeof(iterable) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
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
  }, /*#__PURE__*/react.createElement(DataGrid, args, function (_ref) {
    var item = _ref.item;
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
        icon: Icon/* Icons */.P.EllipsisAlt
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
var DataGridWithColumnsPopup = Template.bind({});
DataGridWithColumnsPopup.play = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref2) {
    var _canvas$queryByText2;
    var canvasElement, canvas, columnsButton, showColumnsDialog, innerDiv, nameToggle;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref2.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            var _canvas$queryByText;
            return (0,esm/* expect */.l)((_canvas$queryByText = canvas.queryByText("Columns")) === null || _canvas$queryByText === void 0 ? void 0 : _canvas$queryByText.closest("button")).toBeInTheDocument();
          });
        case 4:
          _context.next = 6;
          return (_canvas$queryByText2 = canvas.queryByText("Columns")) === null || _canvas$queryByText2 === void 0 ? void 0 : _canvas$queryByText2.closest("button");
        case 6:
          columnsButton = _context.sent;
          _context.next = 9;
          return testing_library_dist/* userEvent */.mV.click(columnsButton);
        case 9:
          showColumnsDialog = canvas.queryByRole("dialog");
          innerDiv = showColumnsDialog === null || showColumnsDialog === void 0 ? void 0 : showColumnsDialog.querySelector("div");
          (0,esm/* expect */.l)(showColumnsDialog).toBeInTheDocument();
          _context.next = 14;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,esm/* expect */.l)(innerDiv).toHaveStyle({
              "pointer-events": "auto"
            });
          });
        case 14:
          _context.next = 16;
          return canvas.getByLabelText("Name");
        case 16:
          nameToggle = _context.sent;
          _context.next = 19;
          return testing_library_dist/* userEvent */.mV.click(nameToggle);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();
DataGridWithColumnsPopup.args = {
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
      originalSource: "args => {\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_DefaultDataGrid$para2 = DefaultDataGrid.parameters) === null || _DefaultDataGrid$para2 === void 0 || (_DefaultDataGrid$para2 = _DefaultDataGrid$para2.docs) === null || _DefaultDataGrid$para2 === void 0 ? void 0 : _DefaultDataGrid$para2.source)
  })
});
DataGridWithColumnsPopup.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, DataGridWithColumnsPopup.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_DataGridWithColumnsP = DataGridWithColumnsPopup.parameters) === null || _DataGridWithColumnsP === void 0 ? void 0 : _DataGridWithColumnsP.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_DataGridWithColumnsP2 = DataGridWithColumnsPopup.parameters) === null || _DataGridWithColumnsP2 === void 0 || (_DataGridWithColumnsP2 = _DataGridWithColumnsP2.docs) === null || _DataGridWithColumnsP2 === void 0 ? void 0 : _DataGridWithColumnsP2.source)
  })
});
HideColumnDataGrid.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, HideColumnDataGrid.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_HideColumnDataGrid$p = HideColumnDataGrid.parameters) === null || _HideColumnDataGrid$p === void 0 ? void 0 : _HideColumnDataGrid$p.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_HideColumnDataGrid$p2 = HideColumnDataGrid.parameters) === null || _HideColumnDataGrid$p2 === void 0 || (_HideColumnDataGrid$p2 = _HideColumnDataGrid$p2.docs) === null || _HideColumnDataGrid$p2 === void 0 ? void 0 : _HideColumnDataGrid$p2.source)
  })
});
DataGridIsLoading.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, DataGridIsLoading.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_DataGridIsLoading$pa = DataGridIsLoading.parameters) === null || _DataGridIsLoading$pa === void 0 ? void 0 : _DataGridIsLoading$pa.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_DataGridIsLoading$pa2 = DataGridIsLoading.parameters) === null || _DataGridIsLoading$pa2 === void 0 || (_DataGridIsLoading$pa2 = _DataGridIsLoading$pa2.docs) === null || _DataGridIsLoading$pa2 === void 0 ? void 0 : _DataGridIsLoading$pa2.source)
  })
});
EmptyDataGrid.parameters = DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, EmptyDataGrid.parameters), {}, {
  docs: DataGrid_stories_objectSpread(DataGrid_stories_objectSpread({}, (_EmptyDataGrid$parame = EmptyDataGrid.parameters) === null || _EmptyDataGrid$parame === void 0 ? void 0 : _EmptyDataGrid$parame.docs), {}, {
    source: DataGrid_stories_objectSpread({
      originalSource: "args => {\n  return <div style={{\n    padding: \"1rem\",\n    backgroundColor: \"rgb(245, 248, 248)\"\n  }}>\n      <div style={{\n      borderRadius: \".5rem\",\n      backgroundColor: \"#FFF\"\n    }}>\n        <DataGridComponent {...args}>\n          {({\n          item\n        }: {\n          item: {\n            name: string;\n            id: string;\n            created: Date;\n            type: string;\n            enabled: boolean;\n          };\n        }) => <DataGridRow key={item.id}>\n              <DataGridCell>{item.name}</DataGridCell>\n              <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n              <DataGridCell>{item.id}</DataGridCell>\n              <DataGridCell>{item.type}</DataGridCell>\n              <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n              {!args.disableContextMenuColumn && <DataGridCell>\n                  <ContextMenu id={`consent_menu_${item.id}`} placement={{\n              vertical: \"bottom\",\n              horizontal: \"right\"\n            }} transformOrigin={{\n              vertical: \"top\",\n              horizontal: \"right\"\n            }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                        <Icon icon={Icons.EllipsisAlt} />\n                      </IconButton>}>\n                    <ContextMenuItem>Item 1</ContextMenuItem>\n                    <ContextMenuItem>Item 2</ContextMenuItem>\n                    <ContextMenuItem>Item 3</ContextMenuItem>\n                  </ContextMenu>\n                </DataGridCell>}\n            </DataGridRow>}\n        </DataGridComponent>\n      </div>\n    </div>;\n}"
    }, (_EmptyDataGrid$parame2 = EmptyDataGrid.parameters) === null || _EmptyDataGrid$parame2 === void 0 || (_EmptyDataGrid$parame2 = _EmptyDataGrid$parame2.docs) === null || _EmptyDataGrid$parame2 === void 0 ? void 0 : _EmptyDataGrid$parame2.source)
  })
});
var __namedExportsOrder = ["DefaultDataGrid", "DataGridWithColumnsPopup", "HideColumnDataGrid", "DataGridIsLoading", "EmptyDataGrid"];
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
    DataGridWithColumnsPopup.displayName = "DataGridWithColumnsPopup";
    // @ts-ignore
    DataGridWithColumnsPopup.__docgenInfo = { "description": "", "displayName": "DataGridWithColumnsPopup", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/DataGrid/DataGrid.stories.tsx#DataGridWithColumnsPopup"] = { docgenInfo: DataGridWithColumnsPopup.__docgenInfo, name: "DataGridWithColumnsPopup", path: "stories/DataGrid/DataGrid.stories.tsx#DataGridWithColumnsPopup" };
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

/***/ "./src/components/Form/Toggle/Toggle.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Toggle; }
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




       /* harmony default export */ var Toggle_Toggle_module = (Toggle_module/* default */.Z && Toggle_module/* default */.Z.locals ? Toggle_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["checked", "disabled", "helperProps", "className", "label", "labelPosition", "hideLabel", "labelOverflow", "version", "spacing"];
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
  var checked = _ref.checked,
    disabled = _ref.disabled,
    helperProps = _ref.helperProps,
    className = _ref.className,
    label = _ref.label,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? "right" : _ref$labelPosition,
    _ref$hideLabel = _ref.hideLabel,
    hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
    _ref$labelOverflow = _ref.labelOverflow,
    labelOverflow = _ref$labelOverflow === void 0 ? "nowrap" : _ref$labelOverflow,
    _ref$version = _ref.version,
    version = _ref$version === void 0 ? "emphasis" : _ref$version,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? "packed" : _ref$spacing,
    rest = _objectWithoutProperties(_ref, _excluded);
  var classNames = [Toggle_Toggle_module["toggle-wrapper"]];
  className && classNames.push(className);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(labelPosition)]);
  hideLabel && classNames.push(Toggle_Toggle_module["toggle-wrapper--hide-label"]);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(labelOverflow)]);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(version)]);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(spacing)]);
  disabled && classNames.push(Toggle_Toggle_module["toggle-wrapper--disabled"]);
  return /*#__PURE__*/react.createElement("div", {
    className: classNames.join(" ")
  }, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, _extends({}, rest, {
    ref: ref,
    checked: checked,
    className: Toggle_Toggle_module["checkbox"],
    helperProps: _objectSpread({
      className: Toggle_Toggle_module["toggle-helper"]
    }, helperProps),
    disabled: disabled,
    label: label
  }), /*#__PURE__*/react.createElement("span", {
    "data-toggle": "true",
    "aria-hidden": "true",
    className: "".concat(Toggle_Toggle_module["toggle"], " ").concat(checked ? Toggle_Toggle_module["checked"] : "", " ").concat(disabled ? Toggle_Toggle_module["disabled"] : "", " ")
  })));
};
var Toggle = /*#__PURE__*/react.forwardRef(ToggleComponent);
try {
    // @ts-ignore
    Toggle.displayName = "Toggle";
    // @ts-ignore
    Toggle.__docgenInfo = { "description": "", "displayName": "Toggle", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string | ReactElement<any, string | JSXElementConstructor<any>>" } }, "spacing": { "defaultValue": { value: "packed" }, "description": "", "name": "spacing", "required": false, "type": { "name": "enum", "value": [{ "value": "\"packed\"" }, { "value": "\"between\"" }] } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "formSelectorWrapperProps": { "defaultValue": null, "description": "", "name": "formSelectorWrapperProps", "required": false, "type": { "name": "Props" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } }, "labelPosition": { "defaultValue": { value: "right" }, "description": "", "name": "labelPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "hideLabel": { "defaultValue": { value: "false" }, "description": "", "name": "hideLabel", "required": false, "type": { "name": "boolean" } }, "labelOverflow": { "defaultValue": { value: "nowrap" }, "description": "", "name": "labelOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }] } }, "version": { "defaultValue": { value: "emphasis" }, "description": "", "name": "version", "required": false, "type": { "name": "enum", "value": [{ "value": "\"neutral\"" }, { "value": "\"emphasis\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Toggle/Toggle.tsx#Toggle"] = { docgenInfo: Toggle.__docgenInfo, name: "Toggle", path: "src/components/Form/Toggle/Toggle.tsx#Toggle" };
}
catch (__react_docgen_typescript_loader_error) { }

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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.DataGridCell-module__sr-only--LViZv{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.DataGridCell-module__hidden--TWILP{display:none}.DataGridCell-module__slide-in--vOKCd{animation:DataGridCell-module__slide-in--vOKCd .5s forwards}@media(prefers-reduced-motion: reduce){.DataGridCell-module__slide-in--vOKCd{animation-duration:.1ms}}.DataGridCell-module__slide-out--qzk5g{animation:DataGridCell-module__slide-out--qzk5g .5s forwards}@media(prefers-reduced-motion: reduce){.DataGridCell-module__slide-out--qzk5g{animation-duration:.1ms}}@keyframes DataGridCell-module__slide-in--vOKCd{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes DataGridCell-module__slide-out--qzk5g{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.DataGridCell-module__cell--Ycwcq{min-height:3.5rem;padding:.5rem .625rem}.DataGridCell-module__cell--Ycwcq:first-child{padding-left:1rem}.DataGridCell-module__cell--Ycwcq:last-child{padding-right:1rem}.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN{position:relative;overflow:hidden;background-color:var(--skeleton-background-color);border-radius:.5rem;height:1.25rem;margin:.625rem 0}.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(var(--skeleton-animation-color-rgb), 0) 0, rgba(var(--skeleton-animation-color-rgb), 0.2) 20%, rgba(var(--skeleton-animation-color-rgb), 0.5) 60%, rgba(var(--skeleton-animation-color-rgb), 0));content:\"\";animation:DataGridCell-module__shimmer--iNsni 2s infinite}@media(prefers-reduced-motion: reduce){.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN::after{animation:none}}@keyframes DataGridCell-module__shimmer--iNsni{100%{transform:translateX(100%)}}@media only screen and (min-width: 50em){.DataGridCell-module__cell--Ycwcq:first-child{padding-left:1.25rem}.DataGridCell-module__cell--Ycwcq:last-child{padding-right:1.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "DataGridCell-module__sr-only--LViZv",
	"hidden": "DataGridCell-module__hidden--TWILP",
	"slide-in": "DataGridCell-module__slide-in--vOKCd",
	"slide-out": "DataGridCell-module__slide-out--qzk5g",
	"cell": "DataGridCell-module__cell--Ycwcq",
	"loading": "DataGridCell-module__loading--JTfLN",
	"shimmer": "DataGridCell-module__shimmer--iNsni"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Toggle-module__sr-only--fg5Lz{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Toggle-module__hidden--MLQo5{display:none}.Toggle-module__slide-in--BUiHs{animation:Toggle-module__slide-in--BUiHs .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-in--BUiHs{animation-duration:.1ms}}.Toggle-module__slide-out--o4_75{animation:Toggle-module__slide-out--o4_75 .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-out--o4_75{animation-duration:.1ms}}@keyframes Toggle-module__slide-in--BUiHs{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Toggle-module__slide-out--o4_75{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Toggle-module__toggle-wrapper--EJ6xC{display:flex;align-items:center;position:relative}.Toggle-module__toggle-wrapper--EJ6xC label{margin-top:.0625rem;white-space:nowrap}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div{flex-direction:row-reverse;position:relative}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div input{left:initial;right:0}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div label{margin-left:0;margin-right:.5rem}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div+div{margin-left:0}.Toggle-module__toggle-wrapper--hide-label--HLd__>div>div label{display:none}.Toggle-module__toggle-wrapper--hide-label--HLd__>div>div+div{margin-left:0}.Toggle-module__toggle-wrapper--wrap--HQDDK label{white-space:normal}.Toggle-module__toggle-wrapper--neutral--Vr9l1 input:checked+span{background-color:var(--color-blue-grey500)}.Toggle-module__toggle-wrapper--neutral--Vr9l1 input+span:after{color:var(--color-blue-grey500)}.Toggle-module__toggle-wrapper--between--Mkha7{width:100%}.Toggle-module__toggle-wrapper--between--Mkha7>div{width:100%}.Toggle-module__toggle-wrapper--between--Mkha7>div>div{justify-content:space-between}.Toggle-module__toggle-wrapper--between--Mkha7.Toggle-module__toggle-wrapper--right--NTk_I>div>div+div{margin-left:0;text-align:right}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span{background-color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span:before{background-color:var(--color-blue-grey200)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span:after{color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span{background-color:var(--color-blue-grey200)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span:before{background-color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span:after{color:var(--color-blue-grey200)}.Toggle-module__toggle--CAy20{width:2rem;min-width:2rem;height:1.25rem;background-color:var(--toggle-background-color);border-radius:2.5rem;position:relative;transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:block;pointer-events:none}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:before{content:\"\";width:1rem;height:1rem;border-radius:50%;display:block;background-color:var(--light);position:absolute;top:50%;transform:translateY(-50%) translateX(0);left:.125rem;transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:before{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:after{content:\"\";font-family:\"icomoon\";position:absolute;font-size:.4375rem;top:47%;left:.4rem;transform:translateY(-50%) translateX(0);color:var(--color-primary);transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:after{transition-duration:.1ms}}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi{background-color:var(--color-primary)}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:before{transform:translateY(-50%) translateX(calc(100% - 0.25rem))}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:after{transform:translateY(-50%) translateX(170%);content:\"\"}.Toggle-module__toggle--CAy20.Toggle-module__disabled--cz5pI{cursor:not-allowed}.Toggle-module__toggle-helper--l3hCO{margin-left:2.5rem}.Toggle-module__checkbox--ptyNo{z-index:10;position:static}.Toggle-module__checkbox--ptyNo>div:first-child{display:flex;align-items:flex-start}.Toggle-module__checkbox--ptyNo input{width:2rem}.Toggle-module__checkbox--ptyNo input~[data-icon][aria-hidden]{display:none}.Toggle-module__checkbox--ptyNo input:focus-visible+*{border-radius:2.5rem;outline-offset:.125rem;outline-width:.125rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Toggle-module__sr-only--fg5Lz",
	"hidden": "Toggle-module__hidden--MLQo5",
	"slide-in": "Toggle-module__slide-in--BUiHs",
	"slide-out": "Toggle-module__slide-out--o4_75",
	"toggle-wrapper": "Toggle-module__toggle-wrapper--EJ6xC",
	"toggle-wrapper--left": "Toggle-module__toggle-wrapper--left--Vfg1G",
	"toggle-wrapper--hide-label": "Toggle-module__toggle-wrapper--hide-label--HLd__",
	"toggle-wrapper--wrap": "Toggle-module__toggle-wrapper--wrap--HQDDK",
	"toggle-wrapper--neutral": "Toggle-module__toggle-wrapper--neutral--Vr9l1",
	"toggle-wrapper--between": "Toggle-module__toggle-wrapper--between--Mkha7",
	"toggle-wrapper--right": "Toggle-module__toggle-wrapper--right--NTk_I",
	"toggle-wrapper--disabled": "Toggle-module__toggle-wrapper--disabled--oKaKZ",
	"toggle": "Toggle-module__toggle--CAy20",
	"checked": "Toggle-module__checked--glybi",
	"disabled": "Toggle-module__disabled--cz5pI",
	"toggle-helper": "Toggle-module__toggle-helper--l3hCO",
	"checkbox": "Toggle-module__checkbox--ptyNo"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);