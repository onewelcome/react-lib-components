"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4540],{

/***/ "./src/components/Icon/Icon.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": function() { return /* binding */ Icon; },
  "P": function() { return /* binding */ Icons; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Icon/Icon.module.scss
var Icon_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Icon/Icon.module.scss");
;// CONCATENATED MODULE: ./src/components/Icon/Icon.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Icon_module/* default */.Z, options);




       /* harmony default export */ var Icon_Icon_module = (Icon_module/* default */.Z && Icon_module/* default.locals */.Z.locals ? Icon_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Icon/Icon.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["icon", "color", "className", "style", "size", "tag"];
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



var Icons = /*#__PURE__*/function (Icons) {
  Icons["Bell"] = "bell";
  Icons["BellAlt"] = "bell-alt";
  Icons["Bookmark"] = "bookmark";
  Icons["BookmarkAlt"] = "bookmark-alt";
  Icons["Build"] = "build";
  Icons["Calendar"] = "calendar";
  Icons["Change"] = "change";
  Icons["Checkmark"] = "checkmark";
  Icons["CheckmarkCircle"] = "checkmark-circle";
  Icons["CheckmarkCircleAlt"] = "checkmark-circle-alt";
  Icons["CheckmarkCircleBreakout"] = "checkmark-circle-breakout";
  Icons["CheckmarkSquare"] = "checkmark-square";
  Icons["ChevronUp"] = "chevron-up";
  Icons["ChevronDown"] = "chevron-down";
  Icons["ChevronLeft"] = "chevron-left";
  Icons["ChevronRight"] = "chevron-right";
  Icons["Circle"] = "circle";
  Icons["Clock"] = "clock";
  Icons["Copy"] = "copy";
  Icons["Edit"] = "edit";
  Icons["Ellipsis"] = "ellipsis";
  Icons["EllipsisAlt"] = "ellipsis-alt";
  Icons["Equal"] = "equal";
  Icons["Error"] = "error-circle";
  Icons["Eye"] = "eye";
  Icons["Filter"] = "filter";
  Icons["FilterAlt"] = "filter-alt";
  Icons["FilterAltArrow"] = "filter-alt-arrow";
  Icons["FilterAltTimes"] = "filter-alt-times";
  Icons["Forbidden"] = "forbidden";
  Icons["Fullscreen"] = "fullscreen";
  Icons["FullscreenExit"] = "fullscreen-exit";
  Icons["Gearwheel"] = "gearwheel";
  Icons["Grid"] = "grid";
  Icons["Hamburger"] = "hamburger";
  Icons["Heart"] = "heart";
  Icons["Image"] = "image";
  Icons["InfoBell"] = "info-bell";
  Icons["InfoCircle"] = "info-circle";
  Icons["Link"] = "link";
  Icons["MinusSquare"] = "minus-square";
  Icons["NavigationFirst"] = "navigation-first";
  Icons["NavigationLast"] = "navigation-last";
  Icons["Plus"] = "plus";
  Icons["Radio"] = "radio";
  Icons["Refresh"] = "refresh";
  Icons["Search"] = "search";
  Icons["Share"] = "share";
  Icons["Square"] = "square";
  Icons["Star"] = "star";
  Icons["StarAlt"] = "star-alt";
  Icons["TableSearch"] = "table-search";
  Icons["Times"] = "times";
  Icons["TimesCircle"] = "times-circle";
  Icons["TimesCircleAlt"] = "times-circle-alt";
  Icons["TimesThin"] = "times-thin";
  Icons["Trash"] = "trash";
  Icons["TriangleDown"] = "triangle-down";
  Icons["TriangleDownCircle"] = "triangle-down-circle";
  Icons["TriangleLeft"] = "triangle-left";
  Icons["TriangleRight"] = "triangle-right";
  Icons["TriangleUp"] = "triangle-up";
  Icons["Undo"] = "undo";
  Icons["Warning"] = "warning";
  Icons["FileOutline"] = "file-outline";
  Icons["FileUpload"] = "file-upload-outline";
  Icons["FileDownload"] = "file-download-outline";
  return Icons;
}({});
var IconComponent = function IconComponent(_ref, ref) {
  var icon = _ref.icon,
    color = _ref.color,
    className = _ref.className,
    style = _ref.style,
    size = _ref.size,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? "span" : _ref$tag,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Component = tag;
  return /*#__PURE__*/react.createElement(Component, _extends({}, rest, {
    ref: ref,
    style: _objectSpread(_objectSpread({
      color: color
    }, style), {}, {
      fontSize: size
    }),
    "data-icon": true,
    "aria-hidden": "true",
    className: "".concat(Icon_Icon_module.icon, " ").concat(Icon_Icon_module["icon-" + icon], " ").concat(className ? className : "")
  }));
};
var Icon = /*#__PURE__*/react.forwardRef(IconComponent);
try {
    // @ts-ignore
    Icon.displayName = "Icon";
    // @ts-ignore
    Icon.__docgenInfo = { "description": "", "displayName": "Icon", "props": { "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "string" } }, "tag": { "defaultValue": { value: "span" }, "description": "", "name": "tag", "required": false, "type": { "name": "enum", "value": [{ "value": "\"div\"" }, { "value": "\"i\"" }, { "value": "\"span\"" }] } }, "icon": { "defaultValue": null, "description": "", "name": "icon", "required": true, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"eye\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }] } }, "size": { "defaultValue": null, "description": "", "name": "size", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"] = { docgenInfo: Icon.__docgenInfo, name: "Icon", path: "src/components/Icon/Icon.tsx#Icon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Icon/Icon.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("./src/font/icomoon.eot?9c63pa"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__("./src/font/icomoon.ttf?9c63pa"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__("./src/font/icomoon.woff?9c63pa"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */@font-face{font-family:\"icomoon\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");font-weight:normal;font-style:normal;font-display:block}.Icon-module__icon--tIfrV{line-height:0;font-size:.875rem}.Icon-module__icon-file-outline--k4BjM:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-file-upload-outline--dHAj1:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-file-download-outline--ERUbQ:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-image--Xm0nH:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-bookmark--jLYNO:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-bookmark-alt--z_uQe:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-equal--OGJ7w:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-build--iiTSs:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-refresh--zXfC3:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-calendar--iNKgp:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-checkmark-circle--c67td:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-checkmark-circle-alt--_3CUW:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-clock--MPUVp:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-trash--hcksE:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-heart--hR7nf:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-search--Wb4rq:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-gearwheel--SmbTb:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-star--CF14k:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-star-alt--nUmT5:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-undo--aO3iR:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-eye--gWT5O:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-times-circle-alt--N6CPq:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-info-circle--wRduv:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-info-bell--XflKw:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-checkmark-circle-breakout--ETGWs:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-warning--Wd5mz:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-plus--Uj7ff:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-copy--QCxkU:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-edit--xQZOw:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-filter--_og8l:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-link--tELnj:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-change--TiJPs:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-filter-alt-arrow--qznZI:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-filter-alt--sDHsR:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-filter-alt-times--REAwZ:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-grid--WZHMc:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-triangle-down--h9Mjz:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-triangle-down-circle--_4gkS:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-triangle-up--B6W1g:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-triangle-right--AKL1v:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-chevron-left--z7Kbn:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-chevron-right--x4Mbq:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-times--FCcro:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-times-circle--WrZ64:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-times-thin--U_Tyc:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-chevron-up--QFtO4:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-chevron-down--UMwtT:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-navigation-first--Y624f:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-fullscreen--enmjc:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-fullscreen-exit--cj62o:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-navigation-last--faFkd:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-hamburger--QupS8:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-ellipsis--XjCKv:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-triangle-left--lvfj6:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-ellipsis-alt--GVcqJ:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-bell--zKcjZ:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-bell-alt--dprGK:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-share--LrMZy:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-forbidden--hCNl5:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-checkmark--PlO7c:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-checkmark-square--Golyx:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-square--sTWAm:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-minus-square--sJ0CE:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-radio--AGpF_:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-error-circle--J43mn:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-circle--v4czI:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.Icon-module__icon-table-search--RqmPs:before{content:\"\";font-family:\"icomoon\",sans-serif !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"icon": "Icon-module__icon--tIfrV",
	"icon-file-outline": "Icon-module__icon-file-outline--k4BjM",
	"icon-file-upload-outline": "Icon-module__icon-file-upload-outline--dHAj1",
	"icon-file-download-outline": "Icon-module__icon-file-download-outline--ERUbQ",
	"icon-image": "Icon-module__icon-image--Xm0nH",
	"icon-bookmark": "Icon-module__icon-bookmark--jLYNO",
	"icon-bookmark-alt": "Icon-module__icon-bookmark-alt--z_uQe",
	"icon-equal": "Icon-module__icon-equal--OGJ7w",
	"icon-build": "Icon-module__icon-build--iiTSs",
	"icon-refresh": "Icon-module__icon-refresh--zXfC3",
	"icon-calendar": "Icon-module__icon-calendar--iNKgp",
	"icon-checkmark-circle": "Icon-module__icon-checkmark-circle--c67td",
	"icon-checkmark-circle-alt": "Icon-module__icon-checkmark-circle-alt--_3CUW",
	"icon-clock": "Icon-module__icon-clock--MPUVp",
	"icon-trash": "Icon-module__icon-trash--hcksE",
	"icon-heart": "Icon-module__icon-heart--hR7nf",
	"icon-search": "Icon-module__icon-search--Wb4rq",
	"icon-gearwheel": "Icon-module__icon-gearwheel--SmbTb",
	"icon-star": "Icon-module__icon-star--CF14k",
	"icon-star-alt": "Icon-module__icon-star-alt--nUmT5",
	"icon-undo": "Icon-module__icon-undo--aO3iR",
	"icon-eye": "Icon-module__icon-eye--gWT5O",
	"icon-times-circle-alt": "Icon-module__icon-times-circle-alt--N6CPq",
	"icon-info-circle": "Icon-module__icon-info-circle--wRduv",
	"icon-info-bell": "Icon-module__icon-info-bell--XflKw",
	"icon-checkmark-circle-breakout": "Icon-module__icon-checkmark-circle-breakout--ETGWs",
	"icon-warning": "Icon-module__icon-warning--Wd5mz",
	"icon-plus": "Icon-module__icon-plus--Uj7ff",
	"icon-copy": "Icon-module__icon-copy--QCxkU",
	"icon-edit": "Icon-module__icon-edit--xQZOw",
	"icon-filter": "Icon-module__icon-filter--_og8l",
	"icon-link": "Icon-module__icon-link--tELnj",
	"icon-change": "Icon-module__icon-change--TiJPs",
	"icon-filter-alt-arrow": "Icon-module__icon-filter-alt-arrow--qznZI",
	"icon-filter-alt": "Icon-module__icon-filter-alt--sDHsR",
	"icon-filter-alt-times": "Icon-module__icon-filter-alt-times--REAwZ",
	"icon-grid": "Icon-module__icon-grid--WZHMc",
	"icon-triangle-down": "Icon-module__icon-triangle-down--h9Mjz",
	"icon-triangle-down-circle": "Icon-module__icon-triangle-down-circle--_4gkS",
	"icon-triangle-up": "Icon-module__icon-triangle-up--B6W1g",
	"icon-triangle-right": "Icon-module__icon-triangle-right--AKL1v",
	"icon-chevron-left": "Icon-module__icon-chevron-left--z7Kbn",
	"icon-chevron-right": "Icon-module__icon-chevron-right--x4Mbq",
	"icon-times": "Icon-module__icon-times--FCcro",
	"icon-times-circle": "Icon-module__icon-times-circle--WrZ64",
	"icon-times-thin": "Icon-module__icon-times-thin--U_Tyc",
	"icon-chevron-up": "Icon-module__icon-chevron-up--QFtO4",
	"icon-chevron-down": "Icon-module__icon-chevron-down--UMwtT",
	"icon-navigation-first": "Icon-module__icon-navigation-first--Y624f",
	"icon-fullscreen": "Icon-module__icon-fullscreen--enmjc",
	"icon-fullscreen-exit": "Icon-module__icon-fullscreen-exit--cj62o",
	"icon-navigation-last": "Icon-module__icon-navigation-last--faFkd",
	"icon-hamburger": "Icon-module__icon-hamburger--QupS8",
	"icon-ellipsis": "Icon-module__icon-ellipsis--XjCKv",
	"icon-triangle-left": "Icon-module__icon-triangle-left--lvfj6",
	"icon-ellipsis-alt": "Icon-module__icon-ellipsis-alt--GVcqJ",
	"icon-bell": "Icon-module__icon-bell--zKcjZ",
	"icon-bell-alt": "Icon-module__icon-bell-alt--dprGK",
	"icon-share": "Icon-module__icon-share--LrMZy",
	"icon-forbidden": "Icon-module__icon-forbidden--hCNl5",
	"icon-checkmark": "Icon-module__icon-checkmark--PlO7c",
	"icon-checkmark-square": "Icon-module__icon-checkmark-square--Golyx",
	"icon-square": "Icon-module__icon-square--sTWAm",
	"icon-minus-square": "Icon-module__icon-minus-square--sJ0CE",
	"icon-radio": "Icon-module__icon-radio--AGpF_",
	"icon-error-circle": "Icon-module__icon-error-circle--J43mn",
	"icon-circle": "Icon-module__icon-circle--v4czI",
	"icon-table-search": "Icon-module__icon-table-search--RqmPs"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/font/icomoon.eot?9c63pa":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icomoon.99f12a21.eot";

/***/ }),

/***/ "./src/font/icomoon.ttf?9c63pa":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icomoon.2ee7ba8e.ttf";

/***/ }),

/***/ "./src/font/icomoon.woff?9c63pa":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/icomoon.83181777.woff";

/***/ })

}]);