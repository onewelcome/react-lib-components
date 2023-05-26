"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1034],{

/***/ "./src/components/Form/Label/Label.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": function() { return /* binding */ Label; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss
var Label_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Label_module/* default */.Z, options);




       /* harmony default export */ var Label_Label_module = (Label_module/* default */.Z && Label_module/* default.locals */.Z.locals ? Label_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.tsx
var _excluded = ["children", "className", "hidden"];
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




var LabelComponent = function LabelComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$hidden = _ref.hidden,
    hidden = _ref$hidden === void 0 ? false : _ref$hidden,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("label", _extends({}, rest, {
    ref: ref,
    className: "".concat(hidden ? readyclasses_module/* default.sr-only */.Z["sr-only"] : "", " ").concat(Label_Label_module.label, " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
var Label = /*#__PURE__*/react.forwardRef(LabelComponent);
try {
    // @ts-ignore
    Label.displayName = "Label";
    // @ts-ignore
    Label.__docgenInfo = { "description": "", "displayName": "Label", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Label/Label.tsx#Label"] = { docgenInfo: Label.__docgenInfo, name: "Label", path: "src/components/Form/Label/Label.tsx#Label" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/Option.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ Option; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/Select.module.scss");
var _excluded = ["children", "className", "isSelected", "shouldClick", "hasFocus", "selectOpened", "isSearching", "childIndex", "onOptionSelect", "onFocusChange", "disabled", "value"];
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



var OptionComponent = function OptionComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$isSelected = _ref.isSelected,
    isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
    shouldClick = _ref.shouldClick,
    hasFocus = _ref.hasFocus,
    selectOpened = _ref.selectOpened,
    isSearching = _ref.isSearching,
    childIndex = _ref.childIndex,
    onOptionSelect = _ref.onOptionSelect,
    onFocusChange = _ref.onFocusChange,
    disabled = _ref.disabled,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);
  var onSelectHandler = function onSelectHandler() {
    if (onOptionSelect) onOptionSelect(innerOptionRef);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({}, rest, {
    ref: innerOptionRef,
    "data-value": value,
    className: "".concat(isSelected ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["selected-option"] */ .Z["selected-option"] : "", " ").concat(disabled ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disabled */ .Z.disabled : "", " ").concat(className !== null && className !== void 0 ? className : ""),
    onClick: onSelectHandler,
    onKeyDownCapture: function onKeyDownCapture(event) {
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
var Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(OptionComponent);
try {
    // @ts-ignore
    Option.displayName = "Option";
    // @ts-ignore
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Pagination/Pagination.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": function() { return /* binding */ Pagination; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss");
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Pagination_module/* default */.Z, options);




       /* harmony default export */ var Pagination_Pagination_module = (Pagination_module/* default */.Z && Pagination_module/* default.locals */.Z.locals ? Pagination_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/Select.tsx + 1 modules
var Select = __webpack_require__("./src/components/Form/Select/Select.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/Option.tsx");
// EXTERNAL MODULE: ./src/components/Form/Label/Label.tsx + 1 modules
var Label = __webpack_require__("./src/components/Form/Label/Label.tsx");
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.tsx
var _excluded = ["totalElements", "pageSize", "translate", "currentPage", "className", "onPageChange", "onPageSizeChange"];
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










var DefaultTranslations = /*#__PURE__*/function (DefaultTranslations) {
  DefaultTranslations["totalItems"] = "Total items";
  DefaultTranslations["itemsPerPage"] = "Items per page";
  DefaultTranslations["currentPage"] = "Page %1 of %2";
  DefaultTranslations["itemsPerPageLabel"] = "Select how many items per page you want to see.";
  DefaultTranslations["currentPageLabel"] = "What page you are currently on.";
  return DefaultTranslations;
}(DefaultTranslations || {});
var PaginationComponent = function PaginationComponent(_ref, ref) {
  var _currentPage$toString;
  var totalElements = _ref.totalElements,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 10 : _ref$pageSize,
    _ref$translate = _ref.translate,
    translate = _ref$translate === void 0 ? DefaultTranslations : _ref$translate,
    currentPage = _ref.currentPage,
    className = _ref.className,
    onPageChange = _ref.onPageChange,
    onPageSizeChange = _ref.onPageSizeChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  /** We use an internal state variable, because we don't want to fire onCurrentPageChange whenever onChange fires on the input. Rather, only when the Enter key is pressed. */
  var _useState = (0,react.useState)((_currentPage$toString = currentPage === null || currentPage === void 0 ? void 0 : currentPage.toString()) !== null && _currentPage$toString !== void 0 ? _currentPage$toString : "1"),
    _useState2 = _slicedToArray(_useState, 2),
    internalCurrentPage = _useState2[0],
    setInternalCurrentPage = _useState2[1];
  var calculateAmountOfPages = function calculateAmountOfPages() {
    if (!totalElements) return 1;
    if (Math.ceil(totalElements / pageSize) < 1) {
      return 1;
    }
    return Math.ceil(totalElements / pageSize);
  };
  (0,react.useEffect)(function () {
    var _currentPage$toString2;
    setInternalCurrentPage((_currentPage$toString2 = currentPage === null || currentPage === void 0 ? void 0 : currentPage.toString()) !== null && _currentPage$toString2 !== void 0 ? _currentPage$toString2 : "1");
  }, [currentPage]);
  var onEnterListener = function onEnterListener(event) {
    if (event.code === "Enter") {
      onPageChange(Number(internalCurrentPage));
    }
  };
  var renderCurrentPageTranslation = function renderCurrentPageTranslation() {
    var amountOfPages = calculateAmountOfPages();
    if (amountOfPages) {
      var splitCurrentPageTranslation = translate.currentPage.split(" ");
      return splitCurrentPageTranslation.map(function (string) {
        if (string.includes("%1")) {
          return /*#__PURE__*/react.createElement(react.Fragment, {
            key: string
          }, /*#__PURE__*/react.createElement(Label/* Label */._, {
            id: "current-value-input-label",
            htmlFor: "current-value-input",
            className: "".concat(readyclasses_module/* default.sr-only */.Z["sr-only"], " ").concat(Pagination_Pagination_module["current-value-input-label"])
          }, translate.currentPageLabel), /*#__PURE__*/react.createElement(Input/* Input */.I, {
            "aria-labelledby": "current-value-input-label",
            key: "input",
            id: "current-value-input",
            type: "text",
            size: currentPage === null || currentPage === void 0 ? void 0 : currentPage.toString().length,
            max: calculateAmountOfPages(),
            wrapperProps: {
              className: Pagination_Pagination_module["current-value-input"]
            },
            onKeyUp: onEnterListener,
            onBlur: function onBlur(event) {
              return onPageChange(Number(event.target.value));
            },
            onChange: function onChange(e) {
              return setInternalCurrentPage(e.target.value);
            },
            name: "current-value-input",
            value: internalCurrentPage,
            className: "".concat(Pagination_Pagination_module["form-element"], " ").concat(Pagination_Pagination_module["current-page-input"])
          }));
        }
        if (string.includes("%2")) {
          return /*#__PURE__*/react.createElement("div", {
            key: string
          }, /*#__PURE__*/react.createElement("strong", null, string.replace("%2", amountOfPages.toString())), "\xA0");
        }
        return /*#__PURE__*/react.createElement("div", {
          key: string
        }, string, "\xA0");
      });
    }
    return null;
  };
  var onPageSizeChangeHandler = function onPageSizeChangeHandler(event) {
    var pageSizeNumber = Number(event.target.value);
    onPageSizeChange(pageSizeNumber);
  };
  var onPageChangeHandler = function onPageChangeHandler(pageToGoTo) {
    onPageChange(pageToGoTo);
  };
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(Pagination_Pagination_module["pagination-wrapper"], " ").concat(className ? className : "")
  }), totalElements && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module.total
  }, /*#__PURE__*/react.createElement("span", {
    tabIndex: 0
  }, translate.totalItems, ": ", /*#__PURE__*/react.createElement("span", null, totalElements))), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module.pagination
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
  }, "50"))), /*#__PURE__*/react.createElement(react.Fragment, null, !!(currentPage && currentPage > 2 || currentPage && currentPage > 1) && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module.previous
  }, currentPage > 2 && /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    title: "first",
    onClick: function onClick() {
      return onPageChangeHandler(0);
    },
    "data-paginate": "first"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.NavigationFirst */.P.NavigationFirst
  })), currentPage > 1 && /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    title: "previous",
    onClick: function onClick() {
      return onPageChangeHandler(currentPage - 1);
    },
    "data-paginate": "previous"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.ChevronLeft */.P.ChevronLeft
  }))), totalElements && !!calculateAmountOfPages() && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module.page
  }, renderCurrentPageTranslation()), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module.next
  }, !!(currentPage !== undefined && currentPage < calculateAmountOfPages() || currentPage !== undefined && !totalElements) && /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    title: "next",
    onClick: function onClick() {
      return onPageChangeHandler(currentPage + 1);
    },
    "data-paginate": "next"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.ChevronRight */.P.ChevronRight
  })), !!(currentPage && totalElements && currentPage < calculateAmountOfPages() - 1) && /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    title: "last",
    onClick: function onClick() {
      return onPageChangeHandler(totalElements / pageSize);
    },
    "data-paginate": "last"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.NavigationLast */.P.NavigationLast
  }))))));
};
var Pagination = /*#__PURE__*/react.forwardRef(PaginationComponent);
try {
    // @ts-ignore
    Pagination.displayName = "Pagination";
    // @ts-ignore
    Pagination.__docgenInfo = { "description": "", "displayName": "Pagination", "props": { "translate": { "defaultValue": null, "description": "", "name": "translate", "required": false, "type": { "name": "PaginationTranslations" } }, "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": false, "type": { "name": "number" } }, "totalElements": { "defaultValue": null, "description": "", "name": "totalElements", "required": false, "type": { "name": "number" } }, "pageSize": { "defaultValue": { value: "10" }, "description": "", "name": "pageSize", "required": false, "type": { "name": "enum", "value": [{ "value": "10" }, { "value": "25" }, { "value": "50" }] } }, "onPageChange": { "defaultValue": null, "description": "", "name": "onPageChange", "required": true, "type": { "name": "(pageToGoTo: number) => void" } }, "onPageSizeChange": { "defaultValue": null, "description": "", "name": "onPageSizeChange", "required": true, "type": { "name": "(pageSize: PageSize) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"] = { docgenInfo: Pagination.__docgenInfo, name: "Pagination", path: "src/components/Pagination/Pagination.tsx#Pagination" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": function() { return /* binding */ filterProps; },
/* harmony export */   "MU": function() { return /* binding */ getValueByPath; },
/* harmony export */   "Pb": function() { return /* binding */ isJsonString; },
/* harmony export */   "R3": function() { return /* binding */ areArraysDifferent; },
/* harmony export */   "y": function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx */
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Label-module__label--jg1cj{cursor:text;color:var(--greyed-out);font-size:var(--font-size)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"label": "Label-module__label--jg1cj"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Pagination-module__pagination-wrapper--rXCDG{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--default-line-height);color:var(--greyed-out);display:flex;flex-direction:column}.Pagination-module__pagination-wrapper--rXCDG label{margin-bottom:0}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM{height:2.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM button{min-height:2.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_{flex:1 0 auto;display:flex;align-items:center;justify-content:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_ span>span{font-weight:700;font-family:var(--font-family);font-size:var(--font-size);margin-left:.25rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6{flex:1 0 auto;display:flex;align-items:center;justify-content:center;margin-top:1rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg{display:flex;align-items:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r button,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg button{margin:.25rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r button span:before,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg button span:before{font-size:.75rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C{display:none;align-items:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page--G5Zd_{display:flex;align-items:center;flex-basis:min-content}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2{border-color:var(--light);margin:0 .25rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button{min-width:3.4375rem;padding:0}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button div[data-display]{left:.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button div:not([data-display]){right:.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__current-value-input--UnR3T{margin:0 .25rem 0 0;padding:0;height:auto}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__current-value-input--UnR3T input{border-radius:var(--input-border-radius);padding:0 1rem;width:auto;text-align:center}@media screen and (min-width: 30em){.Pagination-module__pagination-wrapper--rXCDG{flex-direction:row}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_{justify-content:flex-start}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6{margin-top:0;justify-content:flex-end}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r button,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg button{margin:0 .5rem}}@media screen and (min-width: 48em){.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C{display:flex;margin-right:.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pagination-wrapper": "Pagination-module__pagination-wrapper--rXCDG",
	"form-element": "Pagination-module__form-element--cfBoM",
	"total": "Pagination-module__total--jFLJ_",
	"pagination": "Pagination-module__pagination--D8WW6",
	"previous": "Pagination-module__previous--DsV1r",
	"next": "Pagination-module__next--sD4Yg",
	"per-page": "Pagination-module__per-page--KEN2C",
	"page": "Pagination-module__page--G5Zd_",
	"page-size-select": "Pagination-module__page-size-select--NOhp2",
	"current-value-input": "Pagination-module__current-value-input--UnR3T"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);