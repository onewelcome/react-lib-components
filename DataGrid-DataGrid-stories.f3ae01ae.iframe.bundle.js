"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3123],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aD: () => (/* reexport */ action)
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: ./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs + 1 modules
var preview_errors = __webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-WFFRPTHA.mjs





var PARAM_KEY="actions",ADDON_ID="storybook/actions",PANEL_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/panel`)),EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/action-clear`)),CYCLIC_KEY="$___storybook.isCyclic";var config={depth:10,clearOnStoryChange:!0,limit:50},configureActions=(options={})=>{Object.assign(config,options);};var findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return !proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!(typeof e=="object"&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&typeof e.persist=="function"),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return typeof view=="object"&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,v4/* default */.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>render.phase==="playing"||render.phase==="rendering");if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors/* ImplicitActionsDuringRendering */.is({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),minDepth=5,serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:minDepth+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit);};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs



/***/ }),

/***/ "./stories/DataGrid/DataGrid.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DataGridIsLoading: () => (/* binding */ DataGridIsLoading),
  DataGridWithColumnsPopup: () => (/* binding */ DataGridWithColumnsPopup),
  DefaultDataGrid: () => (/* binding */ DefaultDataGrid),
  EmptyDataGrid: () => (/* binding */ EmptyDataGrid),
  HideColumnDataGrid: () => (/* binding */ HideColumnDataGrid),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ DataGrid_stories)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGrid.module.scss
var DataGrid_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGrid.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGrid.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(DataGrid_module/* default */.Z, options);




       /* harmony default export */ const DataGrid_DataGrid_module = (DataGrid_module/* default */.Z && DataGrid_module/* default */.Z.locals ? DataGrid_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss
var DataGridHeaderCell_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss

      
      
      
      
      
      
      
      
      

var DataGridHeaderCell_module_options = {};

DataGridHeaderCell_module_options.styleTagTransform = (styleTagTransform_default());
DataGridHeaderCell_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridHeaderCell_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridHeaderCell_module_options.domAPI = (styleDomAPI_default());
DataGridHeaderCell_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridHeaderCell_module_update = injectStylesIntoStyleTag_default()(DataGridHeaderCell_module/* default */.Z, DataGridHeaderCell_module_options);




       /* harmony default export */ const DataGridHeader_DataGridHeaderCell_module = (DataGridHeaderCell_module/* default */.Z && DataGridHeaderCell_module/* default */.Z.locals ? DataGridHeaderCell_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.tsx
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




const ariaSortMapping = {
  ASC: "ascending",
  DESC: "descending"
};
const DataGridHeaderCellComponent = (_ref, ref) => {
  let {
    headline,
    name,
    disableSorting,
    activeSortDirection,
    onSort,
    ...rest
  } = _ref;
  const onCellClick = () => {
    onSort === null || onSort === void 0 || onSort(name);
  };
  const sortingIndicator = () => {
    const getSortingIndicatorClasses = direction => {
      const sortingIndicatorClasses = [DataGridHeader_DataGridHeaderCell_module["indicator"]];
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
  const innerContent = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
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
const DataGridHeaderCell = /*#__PURE__*/react.forwardRef(DataGridHeaderCellComponent);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss
var DataGridHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss

      
      
      
      
      
      
      
      
      

var DataGridHeader_module_options = {};

DataGridHeader_module_options.styleTagTransform = (styleTagTransform_default());
DataGridHeader_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridHeader_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridHeader_module_options.domAPI = (styleDomAPI_default());
DataGridHeader_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridHeader_module_update = injectStylesIntoStyleTag_default()(DataGridHeader_module/* default */.Z, DataGridHeader_module_options);




       /* harmony default export */ const DataGridHeader_DataGridHeader_module = (DataGridHeader_module/* default */.Z && DataGridHeader_module/* default */.Z.locals ? DataGridHeader_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridHeader/DataGridHeader.tsx
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




const sortingStates = [undefined, "ASC", "DESC"];
const DataGridHeaderComponent = (_ref, ref) => {
  let {
    initialSort,
    onSort,
    headers,
    disableContextMenuColumn,
    enableMultiSorting,
    spacing,
    ...rest
  } = _ref;
  const [sortList, setSortList] = (0,react.useState)(initialSort !== null && initialSort !== void 0 ? initialSort : []);
  (0,react.useEffect)(() => {
    setSortList(initialSort !== null && initialSort !== void 0 ? initialSort : []);
  }, [initialSort]);
  const calculateNextSortState = direction => {
    const currentDirectionIdx = sortingStates.findIndex(item => item === direction);
    return sortingStates[currentDirectionIdx + 1 % sortingStates.length];
  };

  /**
   * The sortList contains sorting columns objects. The order of those objects determinates priorities of sorting.
   * Last modified sorting column has the highest priority.
   */
  const updateSortList = name => {
    const current = sortList.find(item => item.name === name);
    const restSortList = enableMultiSorting ? sortList.filter(item => item.name !== name) : [];
    const newSortDirection = calculateNextSortState(current === null || current === void 0 ? void 0 : current.direction);
    return newSortDirection ? [{
      name,
      direction: newSortDirection
    }, ...restSortList] : restSortList;
  };
  const wrapOnSort = name => {
    const newSort = updateSortList(name);
    onSort === null || onSort === void 0 || onSort(newSort);
    setSortList(newSort);
  };
  const headerCells = headers.map((header, index) => {
    var _header$align, _header$disableSortin;
    if (header.hidden) {
      return null;
    }
    let headerStyle = {
      textAlign: (_header$align = header.align) !== null && _header$align !== void 0 ? _header$align : "left"
    };
    if (index === 0) {
      headerStyle.paddingLeft = spacing === null || spacing === void 0 ? void 0 : spacing.paddingLeft;
    }
    if (index === headers.length - 1 && disableContextMenuColumn) {
      headerStyle.paddingRight = spacing === null || spacing === void 0 ? void 0 : spacing.paddingRight;
    }
    const sort = sortList.find(item => item.name === header.name);
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
const DataGridHeader = /*#__PURE__*/react.forwardRef(DataGridHeaderComponent);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridActions.module.scss
var DataGridActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridActions.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridActions.module.scss

      
      
      
      
      
      
      
      
      

var DataGridActions_module_options = {};

DataGridActions_module_options.styleTagTransform = (styleTagTransform_default());
DataGridActions_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridActions_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridActions_module_options.domAPI = (styleDomAPI_default());
DataGridActions_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridActions_module_update = injectStylesIntoStyleTag_default()(DataGridActions_module/* default */.Z, DataGridActions_module_options);




       /* harmony default export */ const DataGridActions_DataGridActions_module = (DataGridActions_module/* default */.Z && DataGridActions_module/* default */.Z.locals ? DataGridActions_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Toggle/Toggle.tsx + 1 modules
var Toggle = __webpack_require__("./src/components/Form/Toggle/Toggle.tsx");
// EXTERNAL MODULE: ./src/components/Popover/Popover.tsx + 1 modules
var Popover = __webpack_require__("./src/components/Popover/Popover.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss
var DataGridColumnsToggle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss

      
      
      
      
      
      
      
      
      

var DataGridColumnsToggle_module_options = {};

DataGridColumnsToggle_module_options.styleTagTransform = (styleTagTransform_default());
DataGridColumnsToggle_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridColumnsToggle_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridColumnsToggle_module_options.domAPI = (styleDomAPI_default());
DataGridColumnsToggle_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridColumnsToggle_module_update = injectStylesIntoStyleTag_default()(DataGridColumnsToggle_module/* default */.Z, DataGridColumnsToggle_module_options);




       /* harmony default export */ const DataGridActions_DataGridColumnsToggle_module = (DataGridColumnsToggle_module/* default */.Z && DataGridColumnsToggle_module/* default */.Z.locals ? DataGridColumnsToggle_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.tsx
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










const DataGridColumnsToggleComponent = (_ref, ref) => {
  let {
    open,
    headers,
    titleLabel = "Show columns",
    closeButtonTitle = "Close show columns dialog",
    onClose,
    onToggleClicked,
    className,
    domRoot = document.body,
    ...rest
  } = _ref;
  const [id] = (0,react.useState)((0,helper/* generateID */.y)());
  const labelledId = id + "_header";
  const toggles = headers.map(item => /*#__PURE__*/react.createElement(Toggle/* Toggle */.Z, {
    key: item.name,
    name: item.name,
    checked: !item.hidden,
    onChange: () => onToggleClicked(item.name),
    label: item.headline
  }));
  const handleBackdropClick = () => onClose();
  return /*#__PURE__*/react.createElement(Popover/* Popover */.J, DataGridColumnsToggle_extends({}, rest, {
    ref: ref,
    className: "".concat(DataGridActions_DataGridColumnsToggle_module["popover"], " ").concat(className),
    show: open,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": labelledId
  }), open && /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", {
    "aria-hidden": "true",
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
const DataGridColumnsToggle = /*#__PURE__*/react.forwardRef(DataGridColumnsToggleComponent);
try {
    // @ts-ignore
    DataGridColumnsToggle.displayName = "DataGridColumnsToggle";
    // @ts-ignore
    DataGridColumnsToggle.__docgenInfo = { "description": "", "displayName": "DataGridColumnsToggle", "props": { "domRoot": { "defaultValue": { value: "document.body" }, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "closeButtonTitle": { "defaultValue": { value: "Close show columns dialog" }, "description": "", "name": "closeButtonTitle", "required": false, "type": { "name": "string" } }, "placement": { "defaultValue": null, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "() => void" } }, "titleLabel": { "defaultValue": { value: "Show columns" }, "description": "", "name": "titleLabel", "required": false, "type": { "name": "string" } }, "transformOrigin": { "defaultValue": null, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": null, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "headers": { "defaultValue": null, "description": "", "name": "headers", "required": true, "type": { "name": "HeaderCell[]" } }, "anchorEl": { "defaultValue": null, "description": "", "name": "anchorEl", "required": false, "type": { "name": "RefObject<HTMLOrSVGElement>" } }, "onAnchorOutOfView": { "defaultValue": null, "description": "", "name": "onAnchorOutOfView", "required": false, "type": { "name": "(() => void)" } }, "onToggleClicked": { "defaultValue": null, "description": "", "name": "onToggleClicked", "required": true, "type": { "name": "(colName: string) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/DataGrid/DataGridActions/DataGridColumnsToggle.tsx#DataGridColumnsToggle"] = { docgenInfo: DataGridColumnsToggle.__docgenInfo, name: "DataGridColumnsToggle", path: "src/components/DataGrid/DataGridActions/DataGridColumnsToggle.tsx#DataGridColumnsToggle" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridActions/DataGridActions.tsx
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







const DataGridActionsComponent = (_ref, ref) => {
  var _columnsBtnProps$clas, _columnsBtnProps$clas2, _searchBtnProps$class, _columnsBtnProps$clas3;
  let {
    className,
    enableAddBtn,
    enableColumnsBtn,
    enableSearchBtn,
    addBtnProps = {},
    columnsBtnProps = {},
    searchBtnProps = {},
    searchIconBtnProps = {},
    headers,
    onColumnToggled,
    children,
    ...rest
  } = _ref;
  const isHidden = !(enableAddBtn || enableColumnsBtn || enableSearchBtn);
  const [showColsPopover, setShowColsPopover] = (0,react.useState)(false);
  const showColumnBtn = (0,react.useRef)(null);
  const {
    children: addBtnChildren,
    ...restAddBtnProps
  } = addBtnProps;
  const {
    children: columnsBtnChildren,
    ...restColumnsBtnProps
  } = columnsBtnProps;
  const {
    children: searchBtnChildren,
    ...restSearchBtnProps
  } = searchBtnProps;
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
    onClick: () => setShowColsPopover(true)
  }), columnsBtnChildren !== null && columnsBtnChildren !== void 0 ? columnsBtnChildren : "Columns"), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, DataGridActions_extends({
    title: "Show/hide columns"
  }, columnsBtnProps, {
    onClick: () => setShowColsPopover(true),
    className: "".concat(DataGridActions_DataGridActions_module["mobile"], " ").concat((_columnsBtnProps$clas2 = columnsBtnProps === null || columnsBtnProps === void 0 ? void 0 : columnsBtnProps.className) !== null && _columnsBtnProps$clas2 !== void 0 ? _columnsBtnProps$clas2 : "")
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Change
  })), /*#__PURE__*/react.createElement(DataGridColumnsToggle, {
    "aria-hidden": !showColsPopover,
    open: showColsPopover,
    headers: headers,
    onClose: () => setShowColsPopover(false),
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
const DataGridActions = /*#__PURE__*/react.forwardRef(DataGridActionsComponent);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridCell.module.scss
var DataGridCell_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridCell.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridCell.module.scss

      
      
      
      
      
      
      
      
      

var DataGridCell_module_options = {};

DataGridCell_module_options.styleTagTransform = (styleTagTransform_default());
DataGridCell_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridCell_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridCell_module_options.domAPI = (styleDomAPI_default());
DataGridCell_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridCell_module_update = injectStylesIntoStyleTag_default()(DataGridCell_module/* default */.Z, DataGridCell_module_options);




       /* harmony default export */ const DataGridBody_DataGridCell_module = (DataGridCell_module/* default */.Z && DataGridCell_module/* default */.Z.locals ? DataGridCell_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridCell.tsx
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




const DataGridCellComponent = (_ref, ref) => {
  let {
    children,
    className,
    isLoading,
    spacing,
    cellIndex,
    columnLength,
    disableContextMenuColumn,
    ...rest
  } = _ref;
  let cellStyle = {};
  if (cellIndex === 0) {
    cellStyle.paddingLeft = spacing === null || spacing === void 0 ? void 0 : spacing.paddingLeft;
  }
  if (cellIndex === columnLength && !disableContextMenuColumn || columnLength && cellIndex === columnLength - 1 && disableContextMenuColumn) {
    cellStyle.paddingRight = spacing === null || spacing === void 0 ? void 0 : spacing.paddingRight;
  }
  return /*#__PURE__*/react.createElement("td", DataGridCell_extends({}, rest, {
    ref: ref,
    style: {
      ...rest.style,
      ...cellStyle
    },
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
const DataGridCell = /*#__PURE__*/react.forwardRef(DataGridCellComponent);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridRow.module.scss
var DataGridRow_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridRow.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridRow.module.scss

      
      
      
      
      
      
      
      
      

var DataGridRow_module_options = {};

DataGridRow_module_options.styleTagTransform = (styleTagTransform_default());
DataGridRow_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridRow_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridRow_module_options.domAPI = (styleDomAPI_default());
DataGridRow_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridRow_module_update = injectStylesIntoStyleTag_default()(DataGridRow_module/* default */.Z, DataGridRow_module_options);




       /* harmony default export */ const DataGridBody_DataGridRow_module = (DataGridRow_module/* default */.Z && DataGridRow_module/* default */.Z.locals ? DataGridRow_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridRow.tsx
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



const DataGridRowComponent = (_ref, ref) => {
  let {
    children,
    className,
    headers,
    isLoading,
    spacing,
    disableContextMenuColumn,
    ...rest
  } = _ref;
  const visibleCells = react.Children.map(children, (child, index) => {
    if (child) {
      const cellWithSpacing = /*#__PURE__*/react.cloneElement(child, {
        spacing: spacing,
        cellIndex: index,
        columnLength: headers === null || headers === void 0 ? void 0 : headers.length,
        disableContextMenuColumn
      });
      const visible = headers && headers.length > index ? !headers[index].hidden : true;
      return visible && cellWithSpacing;
    }
    return null;
  });
  const classNames = [DataGridBody_DataGridRow_module["row"]];
  className && classNames.push(className);
  isLoading && classNames.push(DataGridBody_DataGridRow_module["loading"]);
  return /*#__PURE__*/react.createElement("tr", DataGridRow_extends({}, rest, {
    ref: ref,
    className: classNames.join(" ")
  }), visibleCells);
};
const DataGridRow = /*#__PURE__*/react.forwardRef(DataGridRowComponent);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridBody.module.scss
var DataGridBody_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridBody.module.scss");
;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridBody.module.scss

      
      
      
      
      
      
      
      
      

var DataGridBody_module_options = {};

DataGridBody_module_options.styleTagTransform = (styleTagTransform_default());
DataGridBody_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DataGridBody_module_options.insert = insertBySelector_default().bind(null, "head");
    
DataGridBody_module_options.domAPI = (styleDomAPI_default());
DataGridBody_module_options.insertStyleElement = (insertStyleElement_default());

var DataGridBody_module_update = injectStylesIntoStyleTag_default()(DataGridBody_module/* default */.Z, DataGridBody_module_options);




       /* harmony default export */ const DataGridBody_DataGridBody_module = (DataGridBody_module/* default */.Z && DataGridBody_module/* default */.Z.locals ? DataGridBody_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/DataGrid/DataGridBody/DataGridBody.tsx
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






const skeletonLoadingRows = 9;
const DataGridBodyInner = (_ref, ref) => {
  let {
    children,
    data,
    headers,
    isLoading,
    disableContextMenuColumn,
    emptyLabel,
    spacing,
    ...rest
  } = _ref;
  const renderContent = () => {
    const visibleColumns = headers.filter(header => !header.hidden).length;
    if (isLoading) {
      return Array.from(Array(skeletonLoadingRows)).map((_, rowIdx) => /*#__PURE__*/react.createElement(DataGridRow, {
        key: rowIdx,
        isLoading: true
      }, Array.from(Array(visibleColumns)).map((__, colIdx) => /*#__PURE__*/react.createElement(DataGridCell, {
        key: colIdx,
        isLoading: true
      })), !disableContextMenuColumn && /*#__PURE__*/react.createElement(DataGridCell, null)));
    }
    const emptyData = !data || data.length === 0;
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
    return data === null || data === void 0 ? void 0 : data.map((item, index) => {
      return /*#__PURE__*/react.cloneElement(children({
        item,
        index
      }), {
        headers,
        spacing,
        disableContextMenuColumn
      });
    });
  };
  return /*#__PURE__*/react.createElement("tbody", DataGridBody_extends({}, rest, {
    ref: ref
  }), renderContent());
};
const DataGridBody = /*#__PURE__*/react.forwardRef(DataGridBodyInner);
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








const DataGridInner = (_ref, ref) => {
  var _paginationProps$clas;
  let {
    children,
    data,
    initialSort,
    onSort,
    headers,
    actions = {},
    paginationProps,
    disableContextMenuColumn,
    isLoading,
    enableMultiSorting,
    emptyLabel,
    spacing,
    style,
    ...rest
  } = _ref;
  if (!headers) {
    throw new Error("Headers definition has to be provided");
  }
  if (!children) {
    throw new Error("DataGridBody should be provieded with a template how to render rows");
  }
  const [internalHeaders, setInternalHeaders] = (0,react.useState)(headers);
  const styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
  (0,react.useEffect)(() => setInternalHeaders(headers), [headers]);
  const onColumnToggled = colName => {
    setInternalHeaders(internalHeaders.map(item => item.name !== colName ? item : {
      ...item,
      hidden: !item.hidden
    }));
  };
  if (styleWithSpacing !== null && styleWithSpacing !== void 0 && styleWithSpacing.padding) {
    const splitPaddings = styleWithSpacing.padding.toString().split(" ");
    let paddingLeftIndex = 0;
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
    style: {
      ...paginationProps.style,
      paddingLeft: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingLeft,
      paddingRight: styleWithSpacing === null || styleWithSpacing === void 0 ? void 0 : styleWithSpacing.paddingRight
    },
    className: "".concat(DataGrid_DataGrid_module["pagination"], " ").concat((_paginationProps$clas = paginationProps.className) !== null && _paginationProps$clas !== void 0 ? _paginationProps$clas : "")
  })));
};
const DataGrid = /*#__PURE__*/react.forwardRef(DataGridInner);
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
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenu.tsx + 2 modules
var ContextMenu = __webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx + 1 modules
var ContextMenuItem = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_ = __webpack_require__("@storybook/core-events");
// EXTERNAL MODULE: ./node_modules/@storybook/csf/dist/index.mjs
var csf_dist = __webpack_require__("./node_modules/@storybook/csf/dist/index.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs





var PARAM_KEY="links";var{document: chunk_6GSMXRCY_document,HTMLElement}=external_STORYBOOK_MODULE_GLOBAL_.global;function parseQuery(queryString){let query={},pairs=(queryString[0]==="?"?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"");}return query}var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),hrefTo=(title,name)=>new Promise(resolve=>{let{location}=chunk_6GSMXRCY_document,query=parseQuery(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,csf_dist/* toId */.KK)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,""),url=`${location.origin+sbPath}?${Object.entries({path}).map(item=>`${item[0]}=${item[1]}`).join("&")}`;resolve(url);}),valueOrCall=args=>value=>typeof value=="function"?value(...args):value,linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=valueOrCall(args),title=resolver(idOrTitle),name=nameInput?resolver(nameInput):!1;title?.match(/--/)&&!name?chunk_6GSMXRCY_navigate({storyId:title}):name&&title?chunk_6GSMXRCY_navigate({kind:title,story:name}):title?chunk_6GSMXRCY_navigate({kind:title}):name&&chunk_6GSMXRCY_navigate({story:name});},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}));},hasListener=!1,on=()=>{hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener));},off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener));},withLinks=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:PARAM_KEY,wrapper:(getStory,context)=>(on(),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))});



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-links/dist/react/index.mjs



var LEFT_BUTTON=0,isPlainLeftClick=e=>e.button===LEFT_BUTTON&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,cancelled=(e,cb=_e=>{})=>{isPlainLeftClick(e)&&(e.preventDefault(),cb(e));},LinkTo=class extends react.PureComponent{constructor(){super(...arguments);this.state={href:"/"};this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await hrefTo(title,name);this.setState({href});}};this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&chunk_6GSMXRCY_navigate({title,name});};}componentDidMount(){this.updateHref();}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref();}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react.createElement("a",{href,onClick:e=>cancelled(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_react_default=LinkTo;



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
/* harmony default export */ const DataGrid_DataGrid = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs + 1 modules
var addon_actions_dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 2 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx + 1 modules
var BaseModalHeader = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("./src/components/Form/Form.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
;// CONCATENATED MODULE: ./stories/DataGrid/DataGrid.stories.tsx
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





















/* harmony default export */ const DataGrid_stories = ({
  title: "components/Data Display/DataGrid",
  component: DataGrid,
  parameters: {
    docs: {
      page: DataGrid_DataGrid
    }
  }
});
const Template = args => {
  const [openModalId, setOpenModalId] = (0,react.useState)("");
  const [modalData, setModalData] = (0,react.useState)(null);
  const [inputValue, setInputValue] = (0,react.useState)("");
  const openModal = item => {
    setModalData(item);
    setOpenModalId("testModal_".concat(item.id));
  };
  const closeModal = () => {
    setOpenModalId("");
    setInputValue("");
    setModalData(null);
    if (modalData) {
      var _document$getElementB;
      (_document$getElementB = document.getElementById("consent_menu_".concat(modalData.id))) === null || _document$getElementB === void 0 || _document$getElementB.focus();
    }
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: "1rem",
      backgroundColor: "rgb(245, 248, 248)"
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      borderRadius: ".5rem",
      backgroundColor: "#FFF"
    }
  }, /*#__PURE__*/react.createElement(DataGrid, args, _ref => {
    let {
      item
    } = _ref;
    return /*#__PURE__*/react.createElement(DataGridRow, {
      key: item.id
    }, /*#__PURE__*/react.createElement(DataGridCell, null, item.name), /*#__PURE__*/react.createElement(DataGridCell, null, item.created.toLocaleDateString()), /*#__PURE__*/react.createElement(DataGridCell, null, item.id), /*#__PURE__*/react.createElement(DataGridCell, null, item.type), /*#__PURE__*/react.createElement(DataGridCell, null, item.enabled ? "Active" : "Delisted"), !args.disableContextMenuColumn && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DataGridCell, null, /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
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
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      "aria-haspopup": true,
      "aria-controls": "testModal_".concat(item.id),
      onClick: () => openModal(item)
    }, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 3")))));
  }))), modalData && /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, {
    open: openModalId === "testModal_".concat(modalData.id),
    id: openModalId,
    onClose: closeModal
  }, /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.o, {
    id: "testmodal-header-".concat(modalData.id),
    title: modalData.name
  }), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */.v, null, /*#__PURE__*/react.createElement(Form/* Form */.l, {
    id: "example-form-".concat(modalData.id),
    onSubmit: e => {
      e.preventDefault();
      alert("Submitted form!");
    }
  }, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    label: "Example",
    name: "example",
    type: "text",
    value: inputValue,
    onChange: e => setInputValue(e.target.value)
  }))), /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.u, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    form: "example-form-".concat(modalData.id),
    onClick: () => {
      closeModal();
    }
  }, "Close"))));
};
const DefaultDataGrid = Template.bind({});
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
  onSort: sort => (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort)),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: {
      onClick: () => (0,addon_actions_dist/* action */.aD)("add btn clicked")
    },
    searchBtnProps: {
      onClick: () => (0,addon_actions_dist/* action */.aD)("search btn clicked")
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
const DataGridWithColumnsPopup = Template.bind({});
DataGridWithColumnsPopup.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref2 => {
  var _canvas$queryByText2;
  let {
    canvasElement
  } = _ref2;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  await (0,testing_library_dist/* waitFor */.X_)(() => {
    var _canvas$queryByText;
    return (0,jest_dist/* expect */.l)((_canvas$queryByText = canvas.queryByText("Columns")) === null || _canvas$queryByText === void 0 ? void 0 : _canvas$queryByText.closest("button")).toBeInTheDocument();
  });
  const columnsButton = await ((_canvas$queryByText2 = canvas.queryByText("Columns")) === null || _canvas$queryByText2 === void 0 ? void 0 : _canvas$queryByText2.closest("button"));
  await testing_library_dist/* userEvent */.mV.click(columnsButton);
  const showColumnsDialog = canvas.queryByRole("dialog");
  const innerDiv = showColumnsDialog === null || showColumnsDialog === void 0 ? void 0 : showColumnsDialog.querySelector("div");
  (0,jest_dist/* expect */.l)(showColumnsDialog).toBeInTheDocument();
  await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(innerDiv).toHaveStyle({
    "pointer-events": "auto"
  }));
  const nameToggle = await canvas.getByLabelText("Name");
  await testing_library_dist/* userEvent */.mV.click(nameToggle);
});
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
  onSort: sort => (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort)),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: {
      onClick: () => (0,addon_actions_dist/* action */.aD)("add btn clicked")
    },
    searchBtnProps: {
      onClick: () => (0,addon_actions_dist/* action */.aD)("search btn clicked")
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
const HideColumnDataGrid = Template.bind({});
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
  onSort: sort => (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort)),
  disableContextMenuColumn: false,
  isLoading: false,
  enableMultiSorting: true
};
const DataGridIsLoading = Template.bind({});
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
  onSort: sort => (0,addon_actions_dist/* action */.aD)("Sort callback: ".concat(sort)),
  actions: {
    enableAddBtn: true,
    enableColumnsBtn: true,
    enableSearchBtn: true,
    addBtnProps: {
      onClick: () => (0,addon_actions_dist/* action */.aD)("add btn clicked")
    },
    searchBtnProps: {
      onClick: () => (0,addon_actions_dist/* action */.aD)("search btn clicked")
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
const EmptyDataGrid = Template.bind({});
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
DefaultDataGrid.parameters = {
  ...DefaultDataGrid.parameters,
  docs: {
    ...DefaultDataGrid.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [openModalId, setOpenModalId] = useState<string>(\"\");\n  const [modalData, setModalData] = useState<DataGridItem | null>(null);\n  const [inputValue, setInputValue] = useState(\"\");\n  const openModal = (item: DataGridItem) => {\n    setModalData(item);\n    setOpenModalId(`testModal_${item.id}`);\n  };\n  const closeModal = () => {\n    setOpenModalId(\"\");\n    setInputValue(\"\");\n    setModalData(null);\n    if (modalData) {\n      document.getElementById(`consent_menu_${modalData.id}`)?.focus();\n    }\n  };\n  return <Fragment>\n      <div style={{\n      padding: \"1rem\",\n      backgroundColor: \"rgb(245, 248, 248)\"\n    }}>\n        <div style={{\n        borderRadius: \".5rem\",\n        backgroundColor: \"#FFF\"\n      }}>\n          <DataGridComponent {...args}>\n            {({\n            item\n          }: {\n            item: {\n              name: string;\n              id: string;\n              created: Date;\n              type: string;\n              enabled: boolean;\n            };\n          }) => <DataGridRow key={item.id}>\n                <DataGridCell>{item.name}</DataGridCell>\n                <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n                <DataGridCell>{item.id}</DataGridCell>\n                <DataGridCell>{item.type}</DataGridCell>\n                <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n                {!args.disableContextMenuColumn && <Fragment>\n                    <DataGridCell>\n                      <ContextMenu id={`consent_menu_${item.id}`} placement={{\n                  vertical: \"bottom\",\n                  horizontal: \"right\"\n                }} transformOrigin={{\n                  vertical: \"top\",\n                  horizontal: \"right\"\n                }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                            <Icon icon={Icons.EllipsisAlt} />\n                          </IconButton>}>\n                        <ContextMenuItem aria-haspopup={true} aria-controls={`testModal_${item.id}`} onClick={() => openModal(item)}>\n                          Item 1\n                        </ContextMenuItem>\n                        <ContextMenuItem>Item 2</ContextMenuItem>\n                        <ContextMenuItem>Item 3</ContextMenuItem>\n                      </ContextMenu>\n                    </DataGridCell>\n                  </Fragment>}\n              </DataGridRow>}\n          </DataGridComponent>\n        </div>\n      </div>\n      {modalData && <Modal open={openModalId === `testModal_${modalData.id}`} id={openModalId} onClose={closeModal}>\n          <ModalHeader id={`testmodal-header-${modalData.id}`} title={modalData.name} />\n          <ModalContent>\n            <Form id={`example-form-${modalData.id}`} onSubmit={e => {\n          e.preventDefault();\n          alert(\"Submitted form!\");\n        }}>\n              <InputWrapper label=\"Example\" name=\"example\" type=\"text\" value={inputValue} onChange={e => setInputValue(e.target.value)} />\n            </Form>\n          </ModalContent>\n          <ModalActions>\n            <Button form={`example-form-${modalData.id}`} onClick={() => {\n          closeModal();\n        }}>\n              Close\n            </Button>\n          </ModalActions>\n        </Modal>}\n    </Fragment>;\n}",
      ...DefaultDataGrid.parameters?.docs?.source
    }
  }
};
DataGridWithColumnsPopup.parameters = {
  ...DataGridWithColumnsPopup.parameters,
  docs: {
    ...DataGridWithColumnsPopup.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [openModalId, setOpenModalId] = useState<string>(\"\");\n  const [modalData, setModalData] = useState<DataGridItem | null>(null);\n  const [inputValue, setInputValue] = useState(\"\");\n  const openModal = (item: DataGridItem) => {\n    setModalData(item);\n    setOpenModalId(`testModal_${item.id}`);\n  };\n  const closeModal = () => {\n    setOpenModalId(\"\");\n    setInputValue(\"\");\n    setModalData(null);\n    if (modalData) {\n      document.getElementById(`consent_menu_${modalData.id}`)?.focus();\n    }\n  };\n  return <Fragment>\n      <div style={{\n      padding: \"1rem\",\n      backgroundColor: \"rgb(245, 248, 248)\"\n    }}>\n        <div style={{\n        borderRadius: \".5rem\",\n        backgroundColor: \"#FFF\"\n      }}>\n          <DataGridComponent {...args}>\n            {({\n            item\n          }: {\n            item: {\n              name: string;\n              id: string;\n              created: Date;\n              type: string;\n              enabled: boolean;\n            };\n          }) => <DataGridRow key={item.id}>\n                <DataGridCell>{item.name}</DataGridCell>\n                <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n                <DataGridCell>{item.id}</DataGridCell>\n                <DataGridCell>{item.type}</DataGridCell>\n                <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n                {!args.disableContextMenuColumn && <Fragment>\n                    <DataGridCell>\n                      <ContextMenu id={`consent_menu_${item.id}`} placement={{\n                  vertical: \"bottom\",\n                  horizontal: \"right\"\n                }} transformOrigin={{\n                  vertical: \"top\",\n                  horizontal: \"right\"\n                }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                            <Icon icon={Icons.EllipsisAlt} />\n                          </IconButton>}>\n                        <ContextMenuItem aria-haspopup={true} aria-controls={`testModal_${item.id}`} onClick={() => openModal(item)}>\n                          Item 1\n                        </ContextMenuItem>\n                        <ContextMenuItem>Item 2</ContextMenuItem>\n                        <ContextMenuItem>Item 3</ContextMenuItem>\n                      </ContextMenu>\n                    </DataGridCell>\n                  </Fragment>}\n              </DataGridRow>}\n          </DataGridComponent>\n        </div>\n      </div>\n      {modalData && <Modal open={openModalId === `testModal_${modalData.id}`} id={openModalId} onClose={closeModal}>\n          <ModalHeader id={`testmodal-header-${modalData.id}`} title={modalData.name} />\n          <ModalContent>\n            <Form id={`example-form-${modalData.id}`} onSubmit={e => {\n          e.preventDefault();\n          alert(\"Submitted form!\");\n        }}>\n              <InputWrapper label=\"Example\" name=\"example\" type=\"text\" value={inputValue} onChange={e => setInputValue(e.target.value)} />\n            </Form>\n          </ModalContent>\n          <ModalActions>\n            <Button form={`example-form-${modalData.id}`} onClick={() => {\n          closeModal();\n        }}>\n              Close\n            </Button>\n          </ModalActions>\n        </Modal>}\n    </Fragment>;\n}",
      ...DataGridWithColumnsPopup.parameters?.docs?.source
    }
  }
};
HideColumnDataGrid.parameters = {
  ...HideColumnDataGrid.parameters,
  docs: {
    ...HideColumnDataGrid.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [openModalId, setOpenModalId] = useState<string>(\"\");\n  const [modalData, setModalData] = useState<DataGridItem | null>(null);\n  const [inputValue, setInputValue] = useState(\"\");\n  const openModal = (item: DataGridItem) => {\n    setModalData(item);\n    setOpenModalId(`testModal_${item.id}`);\n  };\n  const closeModal = () => {\n    setOpenModalId(\"\");\n    setInputValue(\"\");\n    setModalData(null);\n    if (modalData) {\n      document.getElementById(`consent_menu_${modalData.id}`)?.focus();\n    }\n  };\n  return <Fragment>\n      <div style={{\n      padding: \"1rem\",\n      backgroundColor: \"rgb(245, 248, 248)\"\n    }}>\n        <div style={{\n        borderRadius: \".5rem\",\n        backgroundColor: \"#FFF\"\n      }}>\n          <DataGridComponent {...args}>\n            {({\n            item\n          }: {\n            item: {\n              name: string;\n              id: string;\n              created: Date;\n              type: string;\n              enabled: boolean;\n            };\n          }) => <DataGridRow key={item.id}>\n                <DataGridCell>{item.name}</DataGridCell>\n                <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n                <DataGridCell>{item.id}</DataGridCell>\n                <DataGridCell>{item.type}</DataGridCell>\n                <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n                {!args.disableContextMenuColumn && <Fragment>\n                    <DataGridCell>\n                      <ContextMenu id={`consent_menu_${item.id}`} placement={{\n                  vertical: \"bottom\",\n                  horizontal: \"right\"\n                }} transformOrigin={{\n                  vertical: \"top\",\n                  horizontal: \"right\"\n                }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                            <Icon icon={Icons.EllipsisAlt} />\n                          </IconButton>}>\n                        <ContextMenuItem aria-haspopup={true} aria-controls={`testModal_${item.id}`} onClick={() => openModal(item)}>\n                          Item 1\n                        </ContextMenuItem>\n                        <ContextMenuItem>Item 2</ContextMenuItem>\n                        <ContextMenuItem>Item 3</ContextMenuItem>\n                      </ContextMenu>\n                    </DataGridCell>\n                  </Fragment>}\n              </DataGridRow>}\n          </DataGridComponent>\n        </div>\n      </div>\n      {modalData && <Modal open={openModalId === `testModal_${modalData.id}`} id={openModalId} onClose={closeModal}>\n          <ModalHeader id={`testmodal-header-${modalData.id}`} title={modalData.name} />\n          <ModalContent>\n            <Form id={`example-form-${modalData.id}`} onSubmit={e => {\n          e.preventDefault();\n          alert(\"Submitted form!\");\n        }}>\n              <InputWrapper label=\"Example\" name=\"example\" type=\"text\" value={inputValue} onChange={e => setInputValue(e.target.value)} />\n            </Form>\n          </ModalContent>\n          <ModalActions>\n            <Button form={`example-form-${modalData.id}`} onClick={() => {\n          closeModal();\n        }}>\n              Close\n            </Button>\n          </ModalActions>\n        </Modal>}\n    </Fragment>;\n}",
      ...HideColumnDataGrid.parameters?.docs?.source
    }
  }
};
DataGridIsLoading.parameters = {
  ...DataGridIsLoading.parameters,
  docs: {
    ...DataGridIsLoading.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [openModalId, setOpenModalId] = useState<string>(\"\");\n  const [modalData, setModalData] = useState<DataGridItem | null>(null);\n  const [inputValue, setInputValue] = useState(\"\");\n  const openModal = (item: DataGridItem) => {\n    setModalData(item);\n    setOpenModalId(`testModal_${item.id}`);\n  };\n  const closeModal = () => {\n    setOpenModalId(\"\");\n    setInputValue(\"\");\n    setModalData(null);\n    if (modalData) {\n      document.getElementById(`consent_menu_${modalData.id}`)?.focus();\n    }\n  };\n  return <Fragment>\n      <div style={{\n      padding: \"1rem\",\n      backgroundColor: \"rgb(245, 248, 248)\"\n    }}>\n        <div style={{\n        borderRadius: \".5rem\",\n        backgroundColor: \"#FFF\"\n      }}>\n          <DataGridComponent {...args}>\n            {({\n            item\n          }: {\n            item: {\n              name: string;\n              id: string;\n              created: Date;\n              type: string;\n              enabled: boolean;\n            };\n          }) => <DataGridRow key={item.id}>\n                <DataGridCell>{item.name}</DataGridCell>\n                <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n                <DataGridCell>{item.id}</DataGridCell>\n                <DataGridCell>{item.type}</DataGridCell>\n                <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n                {!args.disableContextMenuColumn && <Fragment>\n                    <DataGridCell>\n                      <ContextMenu id={`consent_menu_${item.id}`} placement={{\n                  vertical: \"bottom\",\n                  horizontal: \"right\"\n                }} transformOrigin={{\n                  vertical: \"top\",\n                  horizontal: \"right\"\n                }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                            <Icon icon={Icons.EllipsisAlt} />\n                          </IconButton>}>\n                        <ContextMenuItem aria-haspopup={true} aria-controls={`testModal_${item.id}`} onClick={() => openModal(item)}>\n                          Item 1\n                        </ContextMenuItem>\n                        <ContextMenuItem>Item 2</ContextMenuItem>\n                        <ContextMenuItem>Item 3</ContextMenuItem>\n                      </ContextMenu>\n                    </DataGridCell>\n                  </Fragment>}\n              </DataGridRow>}\n          </DataGridComponent>\n        </div>\n      </div>\n      {modalData && <Modal open={openModalId === `testModal_${modalData.id}`} id={openModalId} onClose={closeModal}>\n          <ModalHeader id={`testmodal-header-${modalData.id}`} title={modalData.name} />\n          <ModalContent>\n            <Form id={`example-form-${modalData.id}`} onSubmit={e => {\n          e.preventDefault();\n          alert(\"Submitted form!\");\n        }}>\n              <InputWrapper label=\"Example\" name=\"example\" type=\"text\" value={inputValue} onChange={e => setInputValue(e.target.value)} />\n            </Form>\n          </ModalContent>\n          <ModalActions>\n            <Button form={`example-form-${modalData.id}`} onClick={() => {\n          closeModal();\n        }}>\n              Close\n            </Button>\n          </ModalActions>\n        </Modal>}\n    </Fragment>;\n}",
      ...DataGridIsLoading.parameters?.docs?.source
    }
  }
};
EmptyDataGrid.parameters = {
  ...EmptyDataGrid.parameters,
  docs: {
    ...EmptyDataGrid.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [openModalId, setOpenModalId] = useState<string>(\"\");\n  const [modalData, setModalData] = useState<DataGridItem | null>(null);\n  const [inputValue, setInputValue] = useState(\"\");\n  const openModal = (item: DataGridItem) => {\n    setModalData(item);\n    setOpenModalId(`testModal_${item.id}`);\n  };\n  const closeModal = () => {\n    setOpenModalId(\"\");\n    setInputValue(\"\");\n    setModalData(null);\n    if (modalData) {\n      document.getElementById(`consent_menu_${modalData.id}`)?.focus();\n    }\n  };\n  return <Fragment>\n      <div style={{\n      padding: \"1rem\",\n      backgroundColor: \"rgb(245, 248, 248)\"\n    }}>\n        <div style={{\n        borderRadius: \".5rem\",\n        backgroundColor: \"#FFF\"\n      }}>\n          <DataGridComponent {...args}>\n            {({\n            item\n          }: {\n            item: {\n              name: string;\n              id: string;\n              created: Date;\n              type: string;\n              enabled: boolean;\n            };\n          }) => <DataGridRow key={item.id}>\n                <DataGridCell>{item.name}</DataGridCell>\n                <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>\n                <DataGridCell>{item.id}</DataGridCell>\n                <DataGridCell>{item.type}</DataGridCell>\n                <DataGridCell>{item.enabled ? \"Active\" : \"Delisted\"}</DataGridCell>\n                {!args.disableContextMenuColumn && <Fragment>\n                    <DataGridCell>\n                      <ContextMenu id={`consent_menu_${item.id}`} placement={{\n                  vertical: \"bottom\",\n                  horizontal: \"right\"\n                }} transformOrigin={{\n                  vertical: \"top\",\n                  horizontal: \"right\"\n                }} trigger={<IconButton title={`Actions for ${item.name}`} color=\"default\">\n                            <Icon icon={Icons.EllipsisAlt} />\n                          </IconButton>}>\n                        <ContextMenuItem aria-haspopup={true} aria-controls={`testModal_${item.id}`} onClick={() => openModal(item)}>\n                          Item 1\n                        </ContextMenuItem>\n                        <ContextMenuItem>Item 2</ContextMenuItem>\n                        <ContextMenuItem>Item 3</ContextMenuItem>\n                      </ContextMenu>\n                    </DataGridCell>\n                  </Fragment>}\n              </DataGridRow>}\n          </DataGridComponent>\n        </div>\n      </div>\n      {modalData && <Modal open={openModalId === `testModal_${modalData.id}`} id={openModalId} onClose={closeModal}>\n          <ModalHeader id={`testmodal-header-${modalData.id}`} title={modalData.name} />\n          <ModalContent>\n            <Form id={`example-form-${modalData.id}`} onSubmit={e => {\n          e.preventDefault();\n          alert(\"Submitted form!\");\n        }}>\n              <InputWrapper label=\"Example\" name=\"example\" type=\"text\" value={inputValue} onChange={e => setInputValue(e.target.value)} />\n            </Form>\n          </ModalContent>\n          <ModalActions>\n            <Button form={`example-form-${modalData.id}`} onClick={() => {\n          closeModal();\n        }}>\n              Close\n            </Button>\n          </ModalActions>\n        </Modal>}\n    </Fragment>;\n}",
      ...EmptyDataGrid.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["DefaultDataGrid","DataGridWithColumnsPopup","HideColumnDataGrid","DataGridIsLoading","EmptyDataGrid"];
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

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ conditionalPlay)
});

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
}

;// CONCATENATED MODULE: ./.storybook/conditionalPlay.ts
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


const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};

/***/ }),

/***/ "./src/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Form)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss
var Form_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Form.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Form_module/* default */.Z, options);




       /* harmony default export */ const Form_Form_module = (Form_module/* default */.Z && Form_module/* default */.Z.locals ? Form_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
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



const FormComponent = (_ref, ref) => {
  let {
    children,
    className,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("form", _extends({
    ref: ref,
    className: "".concat(Form_Form_module.form, " ").concat(className !== null && className !== void 0 ? className : "")
  }, rest), children);
};
const Form = /*#__PURE__*/react.forwardRef(FormComponent);
try {
    // @ts-ignore
    Form.displayName = "Form";
    // @ts-ignore
    Form.__docgenInfo = { "description": "", "displayName": "Form", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Form.tsx#Form"] = { docgenInfo: Form.__docgenInfo, name: "Form", path: "src/components/Form/Form.tsx#Form" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Toggle/Toggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Toggle)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss
var Toggle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Toggle_module/* default */.Z, options);




       /* harmony default export */ const Toggle_Toggle_module = (Toggle_module/* default */.Z && Toggle_module/* default */.Z.locals ? Toggle_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.tsx
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




const ToggleComponent = (_ref, ref) => {
  let {
    checked,
    disabled,
    helperProps,
    className,
    label,
    labelPosition = "right",
    hideLabel = false,
    labelOverflow = "nowrap",
    version = "emphasis",
    spacing = "packed",
    ...rest
  } = _ref;
  const classNames = [Toggle_Toggle_module["toggle-wrapper"]];
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
    helperProps: {
      className: Toggle_Toggle_module["toggle-helper"],
      ...helperProps
    },
    disabled: disabled,
    label: label
  }), /*#__PURE__*/react.createElement("span", {
    "data-toggle": "true",
    "aria-hidden": "true",
    className: "".concat(Toggle_Toggle_module["toggle"], " ").concat(checked ? Toggle_Toggle_module["checked"] : "", " ").concat(disabled ? Toggle_Toggle_module["disabled"] : "", " ")
  })));
};
const Toggle = /*#__PURE__*/react.forwardRef(ToggleComponent);
try {
    // @ts-ignore
    Toggle.displayName = "Toggle";
    // @ts-ignore
    Toggle.__docgenInfo = { "description": "", "displayName": "Toggle", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string | ReactElement<any, string | JSXElementConstructor<any>>" } }, "spacing": { "defaultValue": { value: "packed" }, "description": "", "name": "spacing", "required": false, "type": { "name": "enum", "value": [{ "value": "\"packed\"" }, { "value": "\"between\"" }] } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } }, "formSelectorWrapperProps": { "defaultValue": null, "description": "", "name": "formSelectorWrapperProps", "required": false, "type": { "name": "Props" } }, "labelPosition": { "defaultValue": { value: "right" }, "description": "", "name": "labelPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "hideLabel": { "defaultValue": { value: "false" }, "description": "", "name": "hideLabel", "required": false, "type": { "name": "boolean" } }, "labelOverflow": { "defaultValue": { value: "nowrap" }, "description": "", "name": "labelOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }] } }, "version": { "defaultValue": { value: "emphasis" }, "description": "", "name": "version", "required": false, "type": { "name": "enum", "value": [{ "value": "\"neutral\"" }, { "value": "\"emphasis\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Toggle/Toggle.tsx#Toggle"] = { docgenInfo: Toggle.__docgenInfo, name: "Toggle", path: "src/components/Form/Toggle/Toggle.tsx#Toggle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ InputWrapper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.Z, options);




       /* harmony default export */ const InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.Z && InputWrapper_module/* default */.Z.locals ? InputWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
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






const InputWrapperComponent = (_ref, ref) => {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  let {
    type,
    name,
    inputProps,
    helperText,
    helperProps,
    value,
    className,
    error,
    success,
    onChange,
    onBlur,
    onFocus,
    disabled,
    ...rest
  } = _ref;
  const {
    errorId,
    hasFocus,
    setHasFocus,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.s)();
  const {
    prefix,
    suffix
  } = inputProps !== null && inputProps !== void 0 ? inputProps : {};
  const input = (0,react.useRef)(null);
  const labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module["focus"]);
  const inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    name: name,
    className: "".concat(InputWrapper_InputWrapper_module["input-wrapper"], " ").concat(className !== null && className !== void 0 ? className : ""),
    labelProps: {
      id: labelId,
      className: labelClasses.join(" ")
    },
    errorId: errorId,
    error: error,
    helperId: helperId,
    helperText: helperText,
    helperProps: {
      ...helperProps,
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    },
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: e => {
      onFocus === null || onFocus === void 0 || onFocus(e);
      setHasFocus(true);
    },
    onBlur: e => {
      onBlur === null || onBlur === void 0 || onBlur(e);
      setHasFocus(false);
    },
    className: "\n         ".concat((_inputProps$className = inputProps === null || inputProps === void 0 ? void 0 : inputProps.className) !== null && _inputProps$className !== void 0 ? _inputProps$className : ""),
    name: name,
    success: success,
    error: error,
    id: name,
    value: value,
    type: type
  })));
};
const InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
try {
    // @ts-ignore
    InputWrapper.displayName = "InputWrapper";
    // @ts-ignore
    InputWrapper.__docgenInfo = { "description": "", "displayName": "InputWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"number\"" }, { "value": "\"search\"" }, { "value": "\"time\"" }, { "value": "\"text\"" }, { "value": "\"hidden\"" }, { "value": "\"tel\"" }, { "value": "\"url\"" }, { "value": "\"email\"" }, { "value": "\"date\"" }, { "value": "\"file\"" }, { "value": "\"password\"" }, { "value": "\"datetime-local\"" }] } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "inputProps": { "defaultValue": null, "description": "", "name": "inputProps", "required": false, "type": { "name": "PartialInputProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper"] = { docgenInfo: InputWrapper.__docgenInfo, name: "InputWrapper", path: "src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ BaseModalActions)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss
var BaseModalActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalActions_module/* default */.Z, options);




       /* harmony default export */ const BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.Z && BaseModalActions_module/* default */.Z.locals ? BaseModalActions_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
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




const BaseModalActionsComponent = (_ref, ref) => {
  let {
    children,
    cancelAction,
    cancelActionsClassName = "",
    onClose,
    className = "",
    ...rest
  } = _ref;
  const innerRef = /*#__PURE__*/ /*#__PURE__*/react.createRef() || ref;
  const cancelButtonRef = (0,react.useRef)(null);
  const primaryActionsRef = (0,react.useRef)(null);
  const cancelButton = /*#__PURE__*/react.createElement(Button/* Button */.z, _extends({
    variant: "text",
    color: "default"
  }, cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.cancelButtonProps, {
    onClick: onClose
  }), cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.label);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: innerRef,
    className: "".concat(BaseModalActions_BaseModalActions_module["actions"], " ").concat(className)
  }), cancelAction && /*#__PURE__*/react.createElement("div", {
    className: "".concat(BaseModalActions_BaseModalActions_module["cancel-action"], " ").concat(cancelActionsClassName),
    ref: cancelButtonRef
  }, cancelButton), children && /*#__PURE__*/react.createElement("div", {
    ref: primaryActionsRef,
    className: BaseModalActions_BaseModalActions_module["primary-actions"]
  }, children));
};
const BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
try {
    // @ts-ignore
    BaseModalActions.displayName = "BaseModalActions";
    // @ts-ignore
    BaseModalActions.__docgenInfo = { "description": "", "displayName": "BaseModalActions", "props": { "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "cancelAction": { "defaultValue": null, "description": "", "name": "cancelAction", "required": false, "type": { "name": "CancelAction" } }, "cancelActionsClassName": { "defaultValue": { value: "" }, "description": "", "name": "cancelActionsClassName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions"] = { docgenInfo: BaseModalActions.__docgenInfo, name: "BaseModalActions", path: "src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ BaseModalHeader)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss
var BaseModalHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalHeader_module/* default */.Z, options);




       /* harmony default export */ const BaseModalHeader_BaseModalHeader_module = (BaseModalHeader_module/* default */.Z && BaseModalHeader_module/* default */.Z.locals ? BaseModalHeader_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx
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






const BaseModalHeaderComponent = (_ref, ref) => {
  let {
    id,
    title,
    children,
    onClose,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: BaseModalHeader_BaseModalHeader_module["header"]
  }), /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module["headline"]
  }, /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module["title-wrapper"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: id,
    className: BaseModalHeader_BaseModalHeader_module["title"],
    tag: "h1",
    spacing: {
      marginBottom: 0
    },
    variant: "h4"
  }, title)), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    onClick: onClose,
    className: BaseModalHeader_BaseModalHeader_module["closeBtn"],
    title: "close modal"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Times
  }))), children);
};
const BaseModalHeader = /*#__PURE__*/react.forwardRef(BaseModalHeaderComponent);
try {
    // @ts-ignore
    BaseModalHeader.displayName = "BaseModalHeader";
    // @ts-ignore
    BaseModalHeader.__docgenInfo = { "description": "", "displayName": "BaseModalHeader", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx#BaseModalHeader"] = { docgenInfo: BaseModalHeader.__docgenInfo, name: "BaseModalHeader", path: "src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx#BaseModalHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGrid.module.scss":
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
 */.DataGrid-module__grid-wrapper--kXh8U{padding:1rem 0}.DataGrid-module__table-wrapper--S0t3v{overflow-x:auto}.DataGrid-module__table--dcYJX{border-collapse:collapse;padding-top:.5rem;width:100%;position:relative}.DataGrid-module__pagination--FCQcY{margin-top:1rem;padding:0 1rem}@media only screen and (min-width: 50em){.DataGrid-module__pagination--FCQcY{padding:0 1.25rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grid-wrapper": `DataGrid-module__grid-wrapper--kXh8U`,
	"table-wrapper": `DataGrid-module__table-wrapper--S0t3v`,
	"table": `DataGrid-module__table--dcYJX`,
	"pagination": `DataGrid-module__pagination--FCQcY`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridActions.module.scss":
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
 */.DataGridActions-module__actions--ac2sB{margin-bottom:1rem;padding:0 1rem;display:flex;flex-wrap:wrap}.DataGridActions-module__left-actions--UnjX2{flex:1}.DataGridActions-module__right-actions--w0Wkt{display:flex;gap:1rem}.DataGridActions-module__desktop--gWZdP{display:none}@media only screen and (min-width: 50em){.DataGridActions-module__actions--ac2sB{padding:0 1.25rem}}@media only screen and (min-width: 30em){.DataGridActions-module__desktop--gWZdP{display:flex}.DataGridActions-module__mobile--vu1Gz{display:none}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": `DataGridActions-module__actions--ac2sB`,
	"left-actions": `DataGridActions-module__left-actions--UnjX2`,
	"right-actions": `DataGridActions-module__right-actions--w0Wkt`,
	"desktop": `DataGridActions-module__desktop--gWZdP`,
	"mobile": `DataGridActions-module__mobile--vu1Gz`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridActions/DataGridColumnsToggle.module.scss":
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
 */.DataGridColumnsToggle-module__popover--_ZOpO{background-color:var(--modal-background-color);z-index:1;min-width:17.5rem;font-family:var(--font-family)}.DataGridColumnsToggle-module__backdrop--lZf5x{content:"";position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,0)}.DataGridColumnsToggle-module__header--oDiSb{min-width:5rem;padding:1rem .5rem 1rem 1.5rem;background-color:var(--modal-header-background-color);border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:flex;align-items:center}.DataGridColumnsToggle-module__title--Y8QxI{flex:1;margin:0}.DataGridColumnsToggle-module__close-btn--U6Esh{margin-left:.5rem}.DataGridColumnsToggle-module__content--uixTn{padding:1.5rem;display:flex;flex-direction:column;gap:1.25rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"popover": `DataGridColumnsToggle-module__popover--_ZOpO`,
	"backdrop": `DataGridColumnsToggle-module__backdrop--lZf5x`,
	"header": `DataGridColumnsToggle-module__header--oDiSb`,
	"title": `DataGridColumnsToggle-module__title--Y8QxI`,
	"close-btn": `DataGridColumnsToggle-module__close-btn--U6Esh`,
	"content": `DataGridColumnsToggle-module__content--uixTn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridBody.module.scss":
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
 */.DataGridBody-module__empty--t6TLM{text-align:center;height:6rem;padding:2rem;vertical-align:top}.DataGridBody-module__empty--t6TLM p{color:var(--greyed-out)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"empty": `DataGridBody-module__empty--t6TLM`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridCell.module.scss":
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
 */.DataGridCell-module__sr-only--LViZv{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.DataGridCell-module__hidden--TWILP{display:none}.DataGridCell-module__slide-in--vOKCd{animation:DataGridCell-module__slide-in--vOKCd .5s forwards}@media(prefers-reduced-motion: reduce){.DataGridCell-module__slide-in--vOKCd{animation-duration:.1ms}}.DataGridCell-module__slide-out--qzk5g{animation:DataGridCell-module__slide-out--qzk5g .5s forwards}@media(prefers-reduced-motion: reduce){.DataGridCell-module__slide-out--qzk5g{animation-duration:.1ms}}@keyframes DataGridCell-module__slide-in--vOKCd{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes DataGridCell-module__slide-out--qzk5g{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.DataGridCell-module__cell--Ycwcq{min-height:3.5rem;padding:.5rem .625rem}.DataGridCell-module__cell--Ycwcq:first-child{padding-left:1rem}.DataGridCell-module__cell--Ycwcq:last-child{padding-right:1rem}.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN{position:relative;overflow:hidden;background-color:var(--skeleton-background-color);border-radius:.5rem;height:1.25rem;margin:.625rem 0}.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(var(--skeleton-animation-color-rgb), 0) 0, rgba(var(--skeleton-animation-color-rgb), 0.2) 20%, rgba(var(--skeleton-animation-color-rgb), 0.5) 60%, rgba(var(--skeleton-animation-color-rgb), 0));content:"";animation:DataGridCell-module__shimmer--iNsni 2s infinite}@media(prefers-reduced-motion: reduce){.DataGridCell-module__cell--Ycwcq .DataGridCell-module__loading--JTfLN::after{animation:none}}@keyframes DataGridCell-module__shimmer--iNsni{100%{transform:translateX(100%)}}@media only screen and (min-width: 50em){.DataGridCell-module__cell--Ycwcq:first-child{padding-left:1.25rem}.DataGridCell-module__cell--Ycwcq:last-child{padding-right:1.25rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `DataGridCell-module__sr-only--LViZv`,
	"hidden": `DataGridCell-module__hidden--TWILP`,
	"slide-in": `DataGridCell-module__slide-in--vOKCd`,
	"slide-out": `DataGridCell-module__slide-out--qzk5g`,
	"cell": `DataGridCell-module__cell--Ycwcq`,
	"loading": `DataGridCell-module__loading--JTfLN`,
	"shimmer": `DataGridCell-module__shimmer--iNsni`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridBody/DataGridRow.module.scss":
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
 */.DataGridRow-module__row--XjCXQ{background-color:var(--data-grid-row-background-color)}.DataGridRow-module__row--XjCXQ:not(.DataGridRow-module__loading--z7nvk):hover{background-color:var(--data-grid-row-hover-background-color)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"row": `DataGridRow-module__row--XjCXQ`,
	"loading": `DataGridRow-module__loading--z7nvk`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeader.module.scss":
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
 */.DataGridHeader-module__thead--HgXx_::after{content:"";position:absolute;width:calc(100% - 2rem);left:1rem;border-bottom:2px solid var(--light-grey-border)}.DataGridHeader-module__row--xtIT4{height:2.5rem}.DataGridHeader-module__context-menu--WbIfT{width:4.125rem;box-sizing:border-box}@media only screen and (min-width: 50em){.DataGridHeader-module__thead--HgXx_::after{width:calc(100% - 2.5rem);left:1.25rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"thead": `DataGridHeader-module__thead--HgXx_`,
	"row": `DataGridHeader-module__row--xtIT4`,
	"context-menu": `DataGridHeader-module__context-menu--WbIfT`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/DataGrid/DataGridHeader/DataGridHeaderCell.module.scss":
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
 */.DataGridHeaderCell-module__header-cell--pYGCz{font-weight:normal;text-align:left;padding:0 .625rem}.DataGridHeaderCell-module__header-cell--pYGCz:first-child{padding-left:1rem}.DataGridHeaderCell-module__header-cell--pYGCz:last-child{padding-right:1rem}.DataGridHeaderCell-module__header-cell--pYGCz>*{display:inline-flex}.DataGridHeaderCell-module__header-cell--pYGCz>button{padding:0;margin:0;border:0;background:none;cursor:pointer;display:inline-flex;align-items:center}.DataGridHeaderCell-module__headline--y64Zz{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--default-line-height);font-weight:700;color:var(--default)}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO{display:flex;flex-direction:column;padding-left:.5rem;justify-content:center}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO>*{font-size:.625rem}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO .DataGridHeaderCell-module__indicator--OXbM6{color:var(--greyed-out)}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO .DataGridHeaderCell-module__indicator--OXbM6.DataGridHeaderCell-module__active--xGM8O{color:var(--color-primary)}.DataGridHeaderCell-module__sorting-indicator-container--IlbeO .DataGridHeaderCell-module__indicator--OXbM6.DataGridHeaderCell-module__hidden--v1QcA{visibility:hidden}@media only screen and (min-width: 50em){.DataGridHeaderCell-module__header-cell--pYGCz:first-child{padding-left:1.25rem}.DataGridHeaderCell-module__header-cell--pYGCz:last-child{padding-right:1.25rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header-cell": `DataGridHeaderCell-module__header-cell--pYGCz`,
	"headline": `DataGridHeaderCell-module__headline--y64Zz`,
	"sorting-indicator-container": `DataGridHeaderCell-module__sorting-indicator-container--IlbeO`,
	"indicator": `DataGridHeaderCell-module__indicator--OXbM6`,
	"active": `DataGridHeaderCell-module__active--xGM8O`,
	"hidden": `DataGridHeaderCell-module__hidden--v1QcA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss":
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
 */.Form-module__form--Nl9sb{font-family:var(--font-family)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": `Form-module__form--Nl9sb`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss":
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
 */.Toggle-module__sr-only--fg5Lz{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Toggle-module__hidden--MLQo5{display:none}.Toggle-module__slide-in--BUiHs{animation:Toggle-module__slide-in--BUiHs .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-in--BUiHs{animation-duration:.1ms}}.Toggle-module__slide-out--o4_75{animation:Toggle-module__slide-out--o4_75 .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-out--o4_75{animation-duration:.1ms}}@keyframes Toggle-module__slide-in--BUiHs{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Toggle-module__slide-out--o4_75{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Toggle-module__toggle-wrapper--EJ6xC{display:flex;align-items:center;position:relative}.Toggle-module__toggle-wrapper--EJ6xC label{white-space:nowrap}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div{flex-direction:row-reverse;position:relative}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div input{left:initial;right:0}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div label{margin-left:0;margin-right:.5rem}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div+div{margin-left:0}.Toggle-module__toggle-wrapper--hide-label--HLd__>div>div label{display:none}.Toggle-module__toggle-wrapper--hide-label--HLd__>div>div+div{margin-left:0}.Toggle-module__toggle-wrapper--wrap--HQDDK label{white-space:normal}.Toggle-module__toggle-wrapper--neutral--Vr9l1 input:checked+span{background-color:var(--color-blue-grey500)}.Toggle-module__toggle-wrapper--neutral--Vr9l1 input+span:after{color:var(--color-blue-grey500)}.Toggle-module__toggle-wrapper--between--Mkha7{width:100%}.Toggle-module__toggle-wrapper--between--Mkha7>div{width:100%}.Toggle-module__toggle-wrapper--between--Mkha7>div>div{justify-content:space-between}.Toggle-module__toggle-wrapper--between--Mkha7.Toggle-module__toggle-wrapper--right--NTk_I>div>div+div{margin-left:0;text-align:right}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span{background-color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span:before{background-color:var(--color-blue-grey200)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span:after{color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span{background-color:var(--color-blue-grey200)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span:before{background-color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span:after{color:var(--color-blue-grey200)}.Toggle-module__toggle--CAy20{width:2rem;min-width:2rem;height:1.25rem;background-color:var(--toggle-background-color);border-radius:2.5rem;position:relative;transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:block;pointer-events:none}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:before{content:"";width:1rem;height:1rem;border-radius:50%;display:block;background-color:var(--light);position:absolute;top:50%;transform:translateY(-50%) translateX(0);left:.125rem;transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:before{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:after{content:"";font-family:"icomoon";position:absolute;font-size:.4375rem;top:47%;left:.4rem;transform:translateY(-50%) translateX(0);color:var(--color-primary);transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:after{transition-duration:.1ms}}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi{background-color:var(--color-primary)}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:before{transform:translateY(-50%) translateX(calc(100% - 0.25rem))}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:after{transform:translateY(-50%) translateX(170%);content:""}.Toggle-module__toggle--CAy20.Toggle-module__disabled--cz5pI{cursor:not-allowed}.Toggle-module__toggle-helper--l3hCO{margin-left:2.5rem}.Toggle-module__checkbox--ptyNo{z-index:10;position:static}.Toggle-module__checkbox--ptyNo>div:first-child{display:flex;align-items:flex-start}.Toggle-module__checkbox--ptyNo input{width:2rem}.Toggle-module__checkbox--ptyNo input~[data-icon][aria-hidden]{display:none}.Toggle-module__checkbox--ptyNo input:focus-visible+*{border-radius:2.5rem;outline-offset:.125rem;outline-width:.125rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Toggle-module__sr-only--fg5Lz`,
	"hidden": `Toggle-module__hidden--MLQo5`,
	"slide-in": `Toggle-module__slide-in--BUiHs`,
	"slide-out": `Toggle-module__slide-out--o4_75`,
	"toggle-wrapper": `Toggle-module__toggle-wrapper--EJ6xC`,
	"toggle-wrapper--left": `Toggle-module__toggle-wrapper--left--Vfg1G`,
	"toggle-wrapper--hide-label": `Toggle-module__toggle-wrapper--hide-label--HLd__`,
	"toggle-wrapper--wrap": `Toggle-module__toggle-wrapper--wrap--HQDDK`,
	"toggle-wrapper--neutral": `Toggle-module__toggle-wrapper--neutral--Vr9l1`,
	"toggle-wrapper--between": `Toggle-module__toggle-wrapper--between--Mkha7`,
	"toggle-wrapper--right": `Toggle-module__toggle-wrapper--right--NTk_I`,
	"toggle-wrapper--disabled": `Toggle-module__toggle-wrapper--disabled--oKaKZ`,
	"toggle": `Toggle-module__toggle--CAy20`,
	"checked": `Toggle-module__checked--glybi`,
	"disabled": `Toggle-module__disabled--cz5pI`,
	"toggle-helper": `Toggle-module__toggle-helper--l3hCO`,
	"checkbox": `Toggle-module__checkbox--ptyNo`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
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
 */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem;display:flex;align-items:center;justify-content:center}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed;color:var(--greyed-out)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `InputWrapper-module__sr-only--_BGLV`,
	"hidden": `InputWrapper-module__hidden--j7j0R`,
	"slide-in": `InputWrapper-module__slide-in--PMOZy`,
	"slide-out": `InputWrapper-module__slide-out--ghrlP`,
	"floating-label": `InputWrapper-module__floating-label--aGgwG`,
	"input-wrapper-helper": `InputWrapper-module__input-wrapper-helper--GKzdc`,
	"input-wrapper": `InputWrapper-module__input-wrapper--x9INE`,
	"disabled": `InputWrapper-module__disabled--TE5Ui`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss":
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
 */.BaseModalActions-module__actions--A4L3O{margin:1.5rem 0 1rem;padding:1rem 1.5rem 0;display:flex;justify-content:space-between;border-top:1px solid var(--color-blue-grey100)}.BaseModalActions-module__actions--A4L3O>*+*{margin-left:2rem}@media screen and (max-width: 640px){.BaseModalActions-module__actions--A4L3O{display:block}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__cancel-action--MgUvx{display:none}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat{flex-direction:column;align-items:flex-end;margin-left:0}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*{width:100%}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*+*{margin-top:.5rem}}.BaseModalActions-module__primary-actions--bcMat{display:flex;flex-grow:1;justify-content:flex-end}.BaseModalActions-module__primary-actions--bcMat button{white-space:nowrap}@media screen and (min-width: 640px){.BaseModalActions-module__primary-actions--bcMat button+button{margin-left:.5rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": `BaseModalActions-module__actions--A4L3O`,
	"cancel-action": `BaseModalActions-module__cancel-action--MgUvx`,
	"primary-actions": `BaseModalActions-module__primary-actions--bcMat`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss":
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
 */.BaseModalHeader-module__header--UVtiQ{min-width:80px;padding:1.25rem 1.5rem 0;border-top-left-radius:8px;border-top-right-radius:8px}.BaseModalHeader-module__headline--q6eEZ{display:flex;align-items:center;justify-content:space-between}.BaseModalHeader-module__title--FjtRT{flex:1;margin:0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": `BaseModalHeader-module__header--UVtiQ`,
	"headline": `BaseModalHeader-module__headline--q6eEZ`,
	"title": `BaseModalHeader-module__title--FjtRT`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);