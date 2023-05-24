"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7039],{

/***/ "./stories/Form/Elements/FileUpload.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FileUploadComponent": function() { return /* binding */ FileUpload_stories_FileUploadComponent; },
  "FileUploadComponentWithServerInteraction": function() { return /* binding */ FileUploadComponentWithServerInteraction; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ FileUpload_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.tsx + 1 modules
var FileItem = __webpack_require__("./src/components/Form/FileUpload/FileItem/FileItem.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileUpload.module.scss
var FileUpload_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileUpload.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileUpload.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FileUpload_module/* default */.Z, options);




       /* harmony default export */ var FileUpload_FileUpload_module = (FileUpload_module/* default */.Z && FileUpload_module/* default.locals */.Z.locals ? FileUpload_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileUpload.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["name", "accept", "error", "success", "maxFileSize", "multiple", "id", "title", "labeledBy", "disabled", "onChange", "dragAndDropText", "selectButtonText", "onDragOver", "onDragLeave", "wrapperProps", "onDrop", "subText", "onRequestedFileAction", "exceedingMaxSizeErrorText", "fileList"];
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








var FileUploadComponent = function FileUploadComponent(_ref, ref) {
  var _rest$spellCheck;
  var name = _ref.name,
    accept = _ref.accept,
    error = _ref.error,
    success = _ref.success,
    maxFileSize = _ref.maxFileSize,
    multiple = _ref.multiple,
    id = _ref.id,
    title = _ref.title,
    labeledBy = _ref.labeledBy,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onChange = _ref.onChange,
    _ref$dragAndDropText = _ref.dragAndDropText,
    dragAndDropText = _ref$dragAndDropText === void 0 ? "Drop file here or" : _ref$dragAndDropText,
    _ref$selectButtonText = _ref.selectButtonText,
    selectButtonText = _ref$selectButtonText === void 0 ? "Select file" : _ref$selectButtonText,
    onDragOver = _ref.onDragOver,
    onDragLeave = _ref.onDragLeave,
    wrapperProps = _ref.wrapperProps,
    onDrop = _ref.onDrop,
    subText = _ref.subText,
    onRequestedFileAction = _ref.onRequestedFileAction,
    exceedingMaxSizeErrorText = _ref.exceedingMaxSizeErrorText,
    fileList = _ref.fileList,
    rest = _objectWithoutProperties(_ref, _excluded);
  var labelRef = (0,react.useRef)(null);
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dragActive = _useState2[0],
    setDragActive = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    inputError = _useState4[0],
    setInputError = _useState4[1];
  var icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.U)({
    success: success,
    error: error
  });
  var dropzoneClassNames = [FileUpload_FileUpload_module["file-dropzone"]];
  var subTextClass = [FileUpload_FileUpload_module["file-selector-sub-text"]];
  dragActive && dropzoneClassNames.push(FileUpload_FileUpload_module["drag-active"]);
  inputError || error && dropzoneClassNames.push(FileUpload_FileUpload_module.error) && subTextClass.push(FileUpload_FileUpload_module.error);
  disabled && dropzoneClassNames.push(FileUpload_FileUpload_module.disabled);
  success && !error && dropzoneClassNames.push(FileUpload_FileUpload_module.success);
  var getFileList = function getFileList(files) {
    var savedFiles = fileList ? _toConsumableArray(fileList) : [];
    var fileNames = fileList.map(function (el) {
      return el.name;
    });
    (files === null || files === void 0 ? void 0 : files.length) && Array.from(files).forEach(function (el) {
      if (!fileNames.includes(el.name)) {
        savedFiles = multiple ? [].concat(_toConsumableArray(savedFiles), [_objectSpread(_objectSpread({}, validateUpload(el)), {}, {
          data: el
        })]) : [_objectSpread(_objectSpread({}, validateUpload(el)), {}, {
          data: el
        })];
      }
    });
    return savedFiles;
  };
  var onInputChange = function onInputChange(e) {
    e.preventDefault();
    e.stopPropagation();
    var files = getFileList(e.target.files);
    files.length && verifyExtensionValidity(files[files.length - 1]) && (onChange === null || onChange === void 0 ? void 0 : onChange(files));
  };
  var verifyExtensionValidity = function verifyExtensionValidity(file) {
    var extension = file.name.split(".").pop();
    return extension && accept.includes(extension);
  };
  var validateUpload = function validateUpload(file) {
    var result = {
      name: file.name,
      size: file.size,
      type: file.type
    };
    var err = false;
    if (maxFileSize && file.size && file.size >= maxFileSize) {
      var mb = (maxFileSize / (1024 * 1024)).toFixed(2);
      result.error = exceedingMaxSizeErrorText !== null && exceedingMaxSizeErrorText !== void 0 ? exceedingMaxSizeErrorText : "The maximum allowed file size is ".concat(mb, "MB. Upload a smaller file.");
      result.status = "error";
      err = true;
    }
    setInputError(err);
    return result;
  };
  (0,react.useEffect)(function () {
    if (fileList.length) {
      var validatedFiles = fileList.map(function (file) {
        return validateUpload(file);
      });
      onChange === null || onChange === void 0 ? void 0 : onChange(validatedFiles);
    }
  }, []);
  var handleOnDragOver = function handleOnDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) {
      setDragActive(true);
    }
    onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver(e);
  };
  var handleOnDragLeave = function handleOnDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = e.target;
    if (target !== null && target !== void 0 && target.classList.contains(FileUpload_FileUpload_module["file-dropzone"])) {
      setDragActive(false);
    }
    onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave(e);
  };
  var handleOnDrop = function handleOnDrop(e) {
    var _e$dataTransfer;
    e.preventDefault();
    e.stopPropagation();
    if (e !== null && e !== void 0 && (_e$dataTransfer = e.dataTransfer) !== null && _e$dataTransfer !== void 0 && _e$dataTransfer.files && e.dataTransfer.files.length) {
      var _e$dataTransfer2;
      var extension = e === null || e === void 0 ? void 0 : (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.files[0].name.split(".").pop();
      if (extension && accept && !accept.includes(extension)) {
        setDragActive(false);
        return;
      }
      var validatedFiles = getFileList(e.dataTransfer.files);
      onDrop === null || onDrop === void 0 ? void 0 : onDrop(validatedFiles);
    }
    setDragActive(false);
  };
  return /*#__PURE__*/react.createElement("div", _extends({
    className: FileUpload_FileUpload_module["file-upload-wrapper"]
  }, wrapperProps), /*#__PURE__*/react.createElement("div", {
    className: FileUpload_FileUpload_module["dropzone-wrapper"]
  }, /*#__PURE__*/react.createElement("div", {
    className: dropzoneClassNames.join(" "),
    onDragOver: function onDragOver(e) {
      return !disabled && handleOnDragOver(e);
    },
    onDragLeave: function onDragLeave(e) {
      return !disabled && handleOnDragLeave(e);
    },
    onDrop: function onDrop(e) {
      return !disabled && handleOnDrop(e);
    }
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body-bold",
    className: FileUpload_FileUpload_module["file-upload-title"],
    ref: labelRef
  }, title), /*#__PURE__*/react.createElement("div", {
    className: FileUpload_FileUpload_module["file-select"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    className: "drop-file-icon",
    icon: Icon/* Icons.FileUpload */.P.FileUpload
  }), /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    className: "drag-and-drop-text"
  }, dragAndDropText), /*#__PURE__*/react.createElement("div", {
    className: FileUpload_FileUpload_module["file-upload-btn"]
  }, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: "outline",
    disabled: disabled
  }, selectButtonText, /*#__PURE__*/react.createElement("input", _extends({
    className: FileUpload_FileUpload_module["upload-input"]
  }, rest, {
    ref: ref,
    "aria-labelledby": labeledBy,
    type: "file",
    name: name
  }, multiple && {
    multiple: true
  }, {
    disabled: disabled,
    accept: accept,
    onChange: onInputChange,
    spellCheck: (_rest$spellCheck = rest.spellCheck) !== null && _rest$spellCheck !== void 0 ? _rest$spellCheck : false
  })))), !disabled && icon, /*#__PURE__*/react.createElement("span", {
    className: FileUpload_FileUpload_module.outline
  }))), subText && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "sub-text",
    className: subTextClass.join(" ")
  }, subText)), (fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0 && /*#__PURE__*/react.createElement("ul", {
    className: FileUpload_FileUpload_module["file-list"]
  }, fileList.map(function (_ref2) {
    var name = _ref2.name,
      status = _ref2.status,
      progress = _ref2.progress,
      error = _ref2.error;
    return /*#__PURE__*/react.createElement("li", {
      key: name,
      className: status,
      id: name
    }, /*#__PURE__*/react.createElement(FileItem/* FileItem */.j, {
      name: name,
      status: status,
      progress: progress,
      error: error,
      onRequestedFileAction: onRequestedFileAction
    }));
  })));
};
var FileUpload = /*#__PURE__*/react.forwardRef(FileUploadComponent);
try {
    // @ts-ignore
    FileUpload.displayName = "FileUpload";
    // @ts-ignore
    FileUpload.__docgenInfo = { "description": "", "displayName": "FileUpload", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: FileType[]) => void)" } }, "onDragEnter": { "defaultValue": null, "description": "", "name": "onDragEnter", "required": false, "type": { "name": "DragEventHandler" } }, "onDragLeave": { "defaultValue": null, "description": "", "name": "onDragLeave", "required": false, "type": { "name": "DragEventHandler" } }, "onDragOver": { "defaultValue": null, "description": "", "name": "onDragOver", "required": false, "type": { "name": "DragEventHandler" } }, "onDrop": { "defaultValue": null, "description": "", "name": "onDrop", "required": false, "type": { "name": "((e: FileType[]) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "accept": { "defaultValue": null, "description": "", "name": "accept", "required": true, "type": { "name": "string" } }, "multiple": { "defaultValue": null, "description": "", "name": "multiple", "required": true, "type": { "name": "boolean" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "wrapperProps": { "defaultValue": null, "description": "", "name": "wrapperProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "fileList": { "defaultValue": null, "description": "", "name": "fileList", "required": true, "type": { "name": "FileType[]" } }, "exceedingMaxSizeErrorText": { "defaultValue": null, "description": "", "name": "exceedingMaxSizeErrorText", "required": false, "type": { "name": "string" } }, "maxFileSize": { "defaultValue": null, "description": "", "name": "maxFileSize", "required": false, "type": { "name": "number" } }, "selectButtonText": { "defaultValue": { value: "Select file" }, "description": "", "name": "selectButtonText", "required": false, "type": { "name": "string" } }, "dragAndDropText": { "defaultValue": { value: "Drop file here or" }, "description": "", "name": "dragAndDropText", "required": false, "type": { "name": "string" } }, "subText": { "defaultValue": null, "description": "", "name": "subText", "required": false, "type": { "name": "string" } }, "onRequestedFileAction": { "defaultValue": null, "description": "", "name": "onRequestedFileAction", "required": false, "type": { "name": "((action: FILE_ACTION, name: string) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FileUpload/FileUpload.tsx#FileUpload"] = { docgenInfo: FileUpload.__docgenInfo, name: "FileUpload", path: "src/components/Form/FileUpload/FileUpload.tsx#FileUpload" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("./src/components/Form/Form.tsx");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_ADDONS__"
var external_STORYBOOK_MODULE_ADDONS_ = __webpack_require__("@storybook/addons");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/hooks/useUploadFile.tsx
function useUploadFile_typeof(obj) {
  "@babel/helpers - typeof";

  return useUploadFile_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, useUploadFile_typeof(obj);
}
function useUploadFile_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function useUploadFile_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? useUploadFile_ownKeys(Object(source), !0).forEach(function (key) {
      useUploadFile_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useUploadFile_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function useUploadFile_defineProperty(obj, key, value) {
  key = useUploadFile_toPropertyKey(key);
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
function useUploadFile_toPropertyKey(arg) {
  var key = useUploadFile_toPrimitive(arg, "string");
  return useUploadFile_typeof(key) === "symbol" ? key : String(key);
}
function useUploadFile_toPrimitive(input, hint) {
  if (useUploadFile_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (useUploadFile_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function useUploadFile_toConsumableArray(arr) {
  return useUploadFile_arrayWithoutHoles(arr) || useUploadFile_iterableToArray(arr) || useUploadFile_unsupportedIterableToArray(arr) || useUploadFile_nonIterableSpread();
}
function useUploadFile_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useUploadFile_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function useUploadFile_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return useUploadFile_arrayLikeToArray(arr);
}
function useUploadFile_slicedToArray(arr, i) {
  return useUploadFile_arrayWithHoles(arr) || useUploadFile_iterableToArrayLimit(arr, i) || useUploadFile_unsupportedIterableToArray(arr, i) || useUploadFile_nonIterableRest();
}
function useUploadFile_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useUploadFile_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useUploadFile_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useUploadFile_arrayLikeToArray(o, minLen);
}
function useUploadFile_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function useUploadFile_iterableToArrayLimit(arr, i) {
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
function useUploadFile_arrayWithHoles(arr) {
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



var useUploadFile = function useUploadFile(files, request, callbacks) {
  var url = request.url,
    headers = request.headers,
    withCredentials = request.withCredentials,
    networkErrorText = request.networkErrorText,
    responseErrorPath = request.responseErrorPath;
  var _ref = callbacks !== null && callbacks !== void 0 ? callbacks : {},
    onComplete = _ref.onComplete,
    onProgress = _ref.onProgress;
  var _useState = (0,react.useState)([]),
    _useState2 = useUploadFile_slicedToArray(_useState, 2),
    uploadingFiles = _useState2[0],
    setUploadingFiles = _useState2[1];
  var _useState3 = (0,react.useState)(useUploadFile_toConsumableArray(files)),
    _useState4 = useUploadFile_slicedToArray(_useState3, 2),
    updatedFiles = _useState4[0],
    setUpdatedFiles = _useState4[1];
  var getUpdatedList = function getUpdatedList(fileName, fileStatus, progress, error) {
    return files.map(function (file) {
      if (file.name === fileName) {
        file.progress = progress;
        file.error = error;
        file.status = fileStatus;
      }
      return useUploadFile_objectSpread({}, file);
    });
  };
  var recordProgress = function recordProgress(e, fileName) {
    var progress = e.loaded / e.total * 100;
    var updatedData = getUpdatedList(fileName, "uploading", progress);
    setUpdatedFiles(updatedData);
    onProgress === null || onProgress === void 0 ? void 0 : onProgress(fileName, progress);
  };
  var getFileStatus = function getFileStatus(requestStatus, responseText) {
    var fileStatus = undefined;
    var error = "";
    var response = responseText && (0,helper/* isJsonString */.Pb)(responseText) && JSON.parse(responseText);
    if (requestStatus >= 200 && requestStatus < 400) {
      fileStatus = "completed";
    } else if (requestStatus === 0) {
      fileStatus = "retry";
      error = networkErrorText !== null && networkErrorText !== void 0 ? networkErrorText : "Network error. Check internet connection and retry uploading the file";
    } else if (requestStatus >= 400 && requestStatus < 500) {
      fileStatus = "error";
      error = responseErrorPath && response ? (0,helper/* getValueByPath */.MU)(response, responseErrorPath) : "Bad request";
    } else if (requestStatus >= 500) {
      fileStatus = "error";
      error = responseErrorPath && response ? (0,helper/* getValueByPath */.MU)(response, responseErrorPath) : "Server Error";
    }
    return {
      fileStatus: fileStatus,
      error: error
    };
  };
  var handleOnComplete = function handleOnComplete(xhr, fileName) {
    var status = xhr.status,
      readyState = xhr.readyState,
      responseText = xhr.responseText;
    if (readyState === xhr.DONE) {
      var _getFileStatus = getFileStatus(status, responseText),
        fileStatus = _getFileStatus.fileStatus,
        error = _getFileStatus.error;
      var updatedList = getUpdatedList(fileName, fileStatus, undefined, error);
      setUpdatedFiles(updatedList);
      var _response = {
        fileList: updatedList,
        status: status
      };
      setUploadingFiles(function (prevState) {
        return prevState.filter(function (selected) {
          return selected.name === fileName;
        });
      });
      onComplete === null || onComplete === void 0 ? void 0 : onComplete(_response);
    }
  };
  var uploadFile = function uploadFile(file) {
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", function (e) {
      return recordProgress(e, file.name);
    });
    xhr.addEventListener("readystatechange", function () {
      return handleOnComplete(xhr, file.name);
    });
    headers === null || headers === void 0 ? void 0 : headers.forEach(function (value, key) {
      return xhr.setRequestHeader(key, value);
    });
    withCredentials && (xhr.withCredentials = true);
    xhr.open("POST", url, true);
    var formData = new FormData();
    formData.append("file", file.data);
    formData.append("name", file.name);
    xhr.send(formData);
  };
  (0,react.useEffect)(function () {
    if (!url || !files.length) {
      return;
    }
    files.forEach(function (file) {
      if (!file.status && !uploadingFiles.find(function (selected) {
        return selected.name === file.name;
      })) {
        setUploadingFiles(function (prevState) {
          return [].concat(useUploadFile_toConsumableArray(prevState), [file]);
        });
        uploadFile(file);
      }
    });
  }, [url, files]);
  return {
    updatedFiles: updatedFiles,
    setUpdatedFiles: setUpdatedFiles,
    uploadingFiles: uploadingFiles
  };
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/FileUpload.mdx



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
      h1: "h1"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileUpload"
        }), " widget can be used to import data, images, certificates, etc. It depends on the use case whether a single file or multiple files can be uploaded.\nThe text and button in differ for a single or multiple files.\nUploading a new file replaces the existing one if only a single file is allowed.\nUploading a new file appends it to the existing list if multiple files are allowed for the field.\nWhen possible, the native upload dialog should restrict the file types that can be uploaded.\nFor example, when only images are allowed, the native upload dialog should only allow image files.\nWhen only a single file is allowed, the native upload dialog should allow one file only.\nDrag and drop uploading is supported. When the user drags a file on the drop area, the background changes.\nShowing a preview of file’s contents is currently out of scope, but may be introduced when needed.\nFor example, to show the image that is uploaded."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The properties the component receives are as follows:"
      }), "\n", (0,jsx_runtime.jsxs)("ul", {
        children: [(0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "accept"
            }), ": It requires a string representing a list of file extensions separated\nby comma"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "multiple"
            }), ": If set to true, it allows the component to select more than one file"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "dragAndDropText"
            }), ": Optional property, meant to replace the label on top of the\nselection button"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "title"
            }), ": Required property, meant to add a title to the form field"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "fileList"
            }), ": List of files the component will contain as data"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onChange"
            }), ": On change callback will be run when the file selection happens and\nthe value of the input changes"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onDragEnter"
            }), ": Callback fired when a file is dragged and enters the drop zone of\nthe component"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onDragLeave"
            }), ": Callback fired when a file is dragged and leaves the drop zone of\nthe component"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onDragOver"
            }), ": Callback fired when a file is dragged over the drop zone of the\ncomponent"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onDrop"
            }), ": Callback fired when a file is dropped over the drop zone"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "error"
            }), ": Error state of the component, provided by the client form"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onRequestedFileAction"
            }), ": Callback run every time a file item action button is\nclicked. It will contain info about the file item: name and action requested"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "exceedingMaxSizeErrorText"
            }), ": If set, it will override the default error text\nshown when a file exceeds the mac limit size"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "maxFileSize"
            }), ": If given, the file selector will show an error for the files\nselected or dropped"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "selectButtonText"
            }), ": If given, it will override the default 'Select file' text on\nthe selection button"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "subText"
            }), ": Subtext to be displayed in case of an error or any other info that\naffects the entirety of the file selector"]
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "File Upload"
        }), " can be used as a simple file selector.\nIn this case, the component will receive all the state changes and progress of the files uploads from the client applications"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: FileUpload_stories_FileUploadComponent
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "example-that-uses-server-interaction-as-well",
        children: "Example that uses server interaction as well:"
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: FileUploadComponentWithServerInteraction
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(dist/* Subheading */.pm, {
          children: "useUploadFile hook"
        }), "A custom hook has been created in order to be used along\nside the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileUpload"
        }), " component, in order to perform the upload action with ease The hook will\nperform upload of each file from the fileList data array, provided they do not have a 'status'\nproperty set up yet"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The hook receives the following params:"
      }), "\n", (0,jsx_runtime.jsxs)("ul", {
        children: [(0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "files"
              })
            }), ": list of of selected files for the file upload component"]
          })
        }), (0,jsx_runtime.jsxs)("li", {
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "request"
              })
            }), ": an Object of type UploadFileRequestParams, which can contain:"]
          }), (0,jsx_runtime.jsxs)("ol", {
            children: [(0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "url"
              }), ": the api url the http request will be made to"]
            }), "\n", (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "headers"
              }), ": custom headers to be applied to the request"]
            }), "\n", (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "responseErrorPath"
              }), ": a path by which to look for the error text of a response"]
            }), "\n", (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "networkErrorText"
              }), ": in case a network error occurs, override the default error text"]
            }), "\n", (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "withCredentials"
              }), ": setup with credentials request header"]
            })]
          })]
        }), (0,jsx_runtime.jsxs)("li", {
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "callbacks"
            }), ": an object of type: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UseUploadFileCallback"
            }), " referencing two types of\ncallbacks that can be used to along side the hook actions, on different request moments:"]
          }), (0,jsx_runtime.jsxs)("ol", {
            children: [(0,jsx_runtime.jsx)("li", {
              children: "onComplete: Will be called when the request has readyState status of 'DONE'."
            }), "\n", (0,jsx_runtime.jsx)("li", {
              children: "onProgress: Will be called every time the on xhr progress event is fired"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The hook will return a list of updated files and a list of files for which the call is ongoing.\nEach of the updated file will contain a status value and sometimes an error text\nWhile performing the HTTP call, the hook will update the ongoing files status property with a value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uploading"
        }), "\nIt will also update the file to contain metrics of their upload progress."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["When the 'DONE' state of the HTTP call will be registered, the files will be updated to a status value corresponding to the network or server values.\nFor uploads completed successfully (status codes 200+), the status of a file will become ", (0,jsx_runtime.jsx)(_components.code, {
          children: "completed"
        }), ".\nFor network errors, the status will have the value ", (0,jsx_runtime.jsx)(_components.code, {
          children: "retry"
        }), "\nFor server errors, starting from status codes 400 and going over 500+, the status will be error;"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The hook performs XHR calls and the payload will be of type formData, with two fields: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "file"
        }), ", containing the file data\nand ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", containing the file name"]
      })]
    });
  }
}
/* harmony default export */ var Elements_FileUpload = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/FileUpload.stories.tsx
function FileUpload_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return FileUpload_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, FileUpload_stories_typeof(obj);
}
var _FileUploadComponent$, _FileUploadComponent$2, _FileUploadComponent$3, _FileUploadComponentW, _FileUploadComponentW2, _FileUploadComponentW3;
function FileUpload_stories_extends() {
  FileUpload_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return FileUpload_stories_extends.apply(this, arguments);
}
function FileUpload_stories_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function FileUpload_stories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? FileUpload_stories_ownKeys(Object(source), !0).forEach(function (key) {
      FileUpload_stories_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : FileUpload_stories_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function FileUpload_stories_defineProperty(obj, key, value) {
  key = FileUpload_stories_toPropertyKey(key);
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
function FileUpload_stories_toPropertyKey(arg) {
  var key = FileUpload_stories_toPrimitive(arg, "string");
  return FileUpload_stories_typeof(key) === "symbol" ? key : String(key);
}
function FileUpload_stories_toPrimitive(input, hint) {
  if (FileUpload_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (FileUpload_stories_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function FileUpload_stories_slicedToArray(arr, i) {
  return FileUpload_stories_arrayWithHoles(arr) || FileUpload_stories_iterableToArrayLimit(arr, i) || FileUpload_stories_unsupportedIterableToArray(arr, i) || FileUpload_stories_nonIterableRest();
}
function FileUpload_stories_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function FileUpload_stories_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return FileUpload_stories_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FileUpload_stories_arrayLikeToArray(o, minLen);
}
function FileUpload_stories_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function FileUpload_stories_iterableToArrayLimit(arr, i) {
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
function FileUpload_stories_arrayWithHoles(arr) {
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









var meta = {
  title: "components/Inputs/FileUpload",
  component: FileUpload,
  parameters: {
    docs: {
      page: Elements_FileUpload
    }
  },
  argTypes: {
    multiple: {
      control: "boolean"
    },
    accept: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    },
    dragAndDropText: {
      control: "text"
    },
    title: {
      control: "text"
    },
    fileList: {
      control: "object"
    },
    url: {
      control: "text"
    },
    exceedingMaxSizeErrorText: {
      control: "text"
    }
  }
};
/* harmony default export */ var FileUpload_stories = (meta);
var files = [];
var Template = function Template(args) {
  var _useArgs = (0,external_STORYBOOK_MODULE_ADDONS_.useArgs)(),
    _useArgs2 = FileUpload_stories_slicedToArray(_useArgs, 2),
    _ = _useArgs2[0],
    updateArgs = _useArgs2[1];
  var onChange = function onChange(e) {
    setUpdatedFiles(e);
  };
  var _useUploadFile = useUploadFile(args.fileList, {
      url: args.url,
      withCredentials: true,
      responseErrorPath: "message"
    }),
    updatedFiles = _useUploadFile.updatedFiles,
    setUpdatedFiles = _useUploadFile.setUpdatedFiles;
  (0,react.useEffect)(function () {
    if ((0,helper/* areArraysDifferent */.R3)(args.fileList, updatedFiles, "status")) {
      updateArgs(FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, args), {}, {
        fileList: updatedFiles
      }));
    }
  }, [updatedFiles]);
  var updateFileList = function updateFileList(action, name) {
    var fileList = [];
    switch (action) {
      case FileItem/* FILE_ACTION.RETRY */.o.RETRY:
        fileList = updatedFiles.map(function (file) {
          if (file.name === name) {
            delete file.status;
          }
          return file;
        });
        break;
      case FileItem/* FILE_ACTION.REMOVE */.o.REMOVE:
      case FileItem/* FILE_ACTION.DELETE */.o.DELETE:
      case FileItem/* FILE_ACTION.ABORT */.o.ABORT:
        fileList = updatedFiles.filter(function (file) {
          return file.name !== name;
        });
        break;
    }
    setUpdatedFiles(fileList);
  };
  var onDrop = function onDrop(e) {
    setUpdatedFiles(e);
  };
  return /*#__PURE__*/react.createElement(Form/* Form */.l, {
    onSubmit: function onSubmit() {}
  }, /*#__PURE__*/react.createElement(FileUpload, FileUpload_stories_extends({}, args, {
    fileList: updatedFiles,
    onChange: onChange,
    onDrop: onDrop,
    onRequestedFileAction: updateFileList
  })));
};
var FileUpload_stories_FileUploadComponent = Template.bind({});
FileUpload_stories_FileUploadComponent.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Testing drop text",
  title: "File Upload Title Placeholder",
  fileList: files
};
var FileUploadComponentWithServerInteraction = Template.bind({});
FileUploadComponentWithServerInteraction.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Testing drop text",
  title: "File Upload Title Placeholder",
  fileList: files,
  url: "http://localhost:4000/upload"
};
FileUpload_stories_FileUploadComponent.parameters = FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, FileUpload_stories_FileUploadComponent.parameters), {}, {
  docs: FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, (_FileUploadComponent$ = FileUpload_stories_FileUploadComponent.parameters) === null || _FileUploadComponent$ === void 0 ? void 0 : _FileUploadComponent$.docs), {}, {
    source: FileUpload_stories_objectSpread({
      originalSource: "args => {\n  const [_, updateArgs] = useArgs();\n  const onChange = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  const {\n    updatedFiles,\n    setUpdatedFiles\n  } = useUploadFile(args.fileList, {\n    url: args.url,\n    withCredentials: true,\n    responseErrorPath: \"message\"\n  });\n  useEffect(() => {\n    if (areArraysDifferent(args.fileList, updatedFiles, \"status\")) {\n      updateArgs({\n        ...args,\n        fileList: updatedFiles\n      });\n    }\n  }, [updatedFiles]);\n  const updateFileList = (action: FILE_ACTION, name: FileType[\"name\"]) => {\n    let fileList: any[] = [];\n    switch (action) {\n      case FILE_ACTION.RETRY:\n        fileList = updatedFiles.map(file => {\n          if (file.name === name) {\n            delete file.status;\n          }\n          return file;\n        });\n        break;\n      case FILE_ACTION.REMOVE:\n      case FILE_ACTION.DELETE:\n      case FILE_ACTION.ABORT:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n    }\n    setUpdatedFiles(fileList);\n  };\n  const onDrop = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  return <Form onSubmit={() => {}}>\n      <FileUpload {...args} fileList={updatedFiles} onChange={onChange} onDrop={onDrop} onRequestedFileAction={updateFileList} />\n    </Form>;\n}"
    }, (_FileUploadComponent$2 = FileUpload_stories_FileUploadComponent.parameters) === null || _FileUploadComponent$2 === void 0 ? void 0 : (_FileUploadComponent$3 = _FileUploadComponent$2.docs) === null || _FileUploadComponent$3 === void 0 ? void 0 : _FileUploadComponent$3.source)
  })
});
FileUploadComponentWithServerInteraction.parameters = FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, FileUploadComponentWithServerInteraction.parameters), {}, {
  docs: FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, (_FileUploadComponentW = FileUploadComponentWithServerInteraction.parameters) === null || _FileUploadComponentW === void 0 ? void 0 : _FileUploadComponentW.docs), {}, {
    source: FileUpload_stories_objectSpread({
      originalSource: "args => {\n  const [_, updateArgs] = useArgs();\n  const onChange = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  const {\n    updatedFiles,\n    setUpdatedFiles\n  } = useUploadFile(args.fileList, {\n    url: args.url,\n    withCredentials: true,\n    responseErrorPath: \"message\"\n  });\n  useEffect(() => {\n    if (areArraysDifferent(args.fileList, updatedFiles, \"status\")) {\n      updateArgs({\n        ...args,\n        fileList: updatedFiles\n      });\n    }\n  }, [updatedFiles]);\n  const updateFileList = (action: FILE_ACTION, name: FileType[\"name\"]) => {\n    let fileList: any[] = [];\n    switch (action) {\n      case FILE_ACTION.RETRY:\n        fileList = updatedFiles.map(file => {\n          if (file.name === name) {\n            delete file.status;\n          }\n          return file;\n        });\n        break;\n      case FILE_ACTION.REMOVE:\n      case FILE_ACTION.DELETE:\n      case FILE_ACTION.ABORT:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n    }\n    setUpdatedFiles(fileList);\n  };\n  const onDrop = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  return <Form onSubmit={() => {}}>\n      <FileUpload {...args} fileList={updatedFiles} onChange={onChange} onDrop={onDrop} onRequestedFileAction={updateFileList} />\n    </Form>;\n}"
    }, (_FileUploadComponentW2 = FileUploadComponentWithServerInteraction.parameters) === null || _FileUploadComponentW2 === void 0 ? void 0 : (_FileUploadComponentW3 = _FileUploadComponentW2.docs) === null || _FileUploadComponentW3 === void 0 ? void 0 : _FileUploadComponentW3.source)
  })
});
var __namedExportsOrder = ["FileUploadComponent", "FileUploadComponentWithServerInteraction"];

/***/ }),

/***/ "./src/components/Form/Form.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": function() { return /* binding */ Form; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss
var Form_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Form.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Form_module/* default */.Z, options);




       /* harmony default export */ var Form_Form_module = (Form_module/* default */.Z && Form_module/* default.locals */.Z.locals ? Form_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
var _excluded = ["children", "className"];
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



var FormComponent = function FormComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("form", _extends({
    ref: ref,
    className: "".concat(Form_Form_module.form, " ").concat(className !== null && className !== void 0 ? className : "")
  }, rest), children);
};
var Form = /*#__PURE__*/react.forwardRef(FormComponent);
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

/***/ "./src/hooks/useDetermineStatusIcon.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ useDetermineStatusIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Icon/Icon.tsx");
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



var useDetermineStatusIcon = function useDetermineStatusIcon(params) {
  var _ref = params || false,
    error = _ref.error,
    success = _ref.success;
  var icon = null;
  var errorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var successRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (error) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: errorRef,
      "data-icon-status": "error",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons.Error */ .P.Error
    });
  } else if (success) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: successRef,
      "data-icon-status": "success",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons.CheckmarkCircleBreakout */ .P.CheckmarkCircleBreakout
    });
  }
  return icon;
};
try {
    // @ts-ignore
    useDetermineStatusIcon.displayName = "useDetermineStatusIcon";
    // @ts-ignore
    useDetermineStatusIcon.__docgenInfo = { "description": "", "displayName": "useDetermineStatusIcon", "props": { "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/hooks/useDetermineStatusIcon.tsx#useDetermineStatusIcon"] = { docgenInfo: useDetermineStatusIcon.__docgenInfo, name: "useDetermineStatusIcon", path: "src/hooks/useDetermineStatusIcon.tsx#useDetermineStatusIcon" };
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileUpload.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FileUpload-module__sr-only--FHXiJ{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileUpload-module__hidden--oaezm{display:none}.FileUpload-module__slide-in--nwXxV{animation:FileUpload-module__slide-in--nwXxV .5s forwards}@media(prefers-reduced-motion: reduce){.FileUpload-module__slide-in--nwXxV{animation-duration:.1ms}}.FileUpload-module__slide-out--BesCa{animation:FileUpload-module__slide-out--BesCa .5s forwards}@media(prefers-reduced-motion: reduce){.FileUpload-module__slide-out--BesCa{animation-duration:.1ms}}@keyframes FileUpload-module__slide-in--nwXxV{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileUpload-module__slide-out--BesCa{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FileUpload-module__w-6--n0rDA{width:6%}.FileUpload-module__w-7--FzK3q{width:7%}.FileUpload-module__w-8--szbfy{width:8%}.FileUpload-module__w-9--pdfIy{width:9%}.FileUpload-module__w-10--wO5r7{width:10%}.FileUpload-module__w-11--UNImg{width:11%}.FileUpload-module__w-12--yDmYS{width:12%}.FileUpload-module__w-13--Wxcrt{width:13%}.FileUpload-module__w-14--dUwd2{width:14%}.FileUpload-module__w-15--sZ6M8{width:15%}.FileUpload-module__w-16--a4r8I{width:16%}.FileUpload-module__w-17--L8e3N{width:17%}.FileUpload-module__w-18--KqYV0{width:18%}.FileUpload-module__w-19--_zzlS{width:19%}.FileUpload-module__w-20--PPHK5{width:20%}.FileUpload-module__w-21--CXhwD{width:21%}.FileUpload-module__w-22--KhPYo{width:22%}.FileUpload-module__w-23--Qc44E{width:23%}.FileUpload-module__w-24--iBSEG{width:24%}.FileUpload-module__w-25--YTjaK{width:25%}.FileUpload-module__w-26--IWNgq{width:26%}.FileUpload-module__w-27--gD93K{width:27%}.FileUpload-module__w-28--dFrNR{width:28%}.FileUpload-module__w-29--VkOFE{width:29%}.FileUpload-module__w-30--G5A6s{width:30%}.FileUpload-module__w-31--NRpUz{width:31%}.FileUpload-module__w-32--H5dvw{width:32%}.FileUpload-module__w-33--Flo_f{width:33%}.FileUpload-module__w-34--wmBtk{width:34%}.FileUpload-module__w-35--JVAmk{width:35%}.FileUpload-module__w-36--zeP13{width:36%}.FileUpload-module__w-37--WDd0p{width:37%}.FileUpload-module__w-38--1r_iS{width:38%}.FileUpload-module__w-39--ppONI{width:39%}.FileUpload-module__w-40--T3lZq{width:40%}.FileUpload-module__w-41--yeYYl{width:41%}.FileUpload-module__w-42--CIt92{width:42%}.FileUpload-module__w-43--Cq7S4{width:43%}.FileUpload-module__w-44--A2EBQ{width:44%}.FileUpload-module__w-45--QiLpb{width:45%}.FileUpload-module__w-46--hmxom{width:46%}.FileUpload-module__w-47--q6F2f{width:47%}.FileUpload-module__w-48--AB9fU{width:48%}.FileUpload-module__w-49--BIjU7{width:49%}.FileUpload-module__w-50--mtY0n{width:50%}.FileUpload-module__w-51--ZJ7K5{width:51%}.FileUpload-module__w-52--mHOaY{width:52%}.FileUpload-module__w-53--mbeUk{width:53%}.FileUpload-module__w-54--g_8Ha{width:54%}.FileUpload-module__w-55--WOhbC{width:55%}.FileUpload-module__w-56--QL53P{width:56%}.FileUpload-module__w-57--LUB8k{width:57%}.FileUpload-module__w-58--g95zE{width:58%}.FileUpload-module__w-59--R3gdu{width:59%}.FileUpload-module__w-60--wu3ex{width:60%}.FileUpload-module__w-61--iCu2U{width:61%}.FileUpload-module__w-62--Sxxyz{width:62%}.FileUpload-module__w-63--WJqyS{width:63%}.FileUpload-module__w-64--Wd6rr{width:64%}.FileUpload-module__w-65--tNKX2{width:65%}.FileUpload-module__w-66--__Qpy{width:66%}.FileUpload-module__w-67--n0JKj{width:67%}.FileUpload-module__w-68--Akn4L{width:68%}.FileUpload-module__w-69--_dA7v{width:69%}.FileUpload-module__w-70--lawra{width:70%}.FileUpload-module__w-71--t1poW{width:71%}.FileUpload-module__w-72--nWzD9{width:72%}.FileUpload-module__w-73--dsa5m{width:73%}.FileUpload-module__w-74--X4KqT{width:74%}.FileUpload-module__w-75--HeSHc{width:75%}.FileUpload-module__w-76--yGfbP{width:76%}.FileUpload-module__w-77--TpSi5{width:77%}.FileUpload-module__w-78--yCCnQ{width:78%}.FileUpload-module__w-79--lD5c5{width:79%}.FileUpload-module__w-80--tp12N{width:80%}.FileUpload-module__w-81--eJDYv{width:81%}.FileUpload-module__w-82--OV36M{width:82%}.FileUpload-module__w-83--gWYCs{width:83%}.FileUpload-module__w-84--xzF6j{width:84%}.FileUpload-module__w-85--V2l_g{width:85%}.FileUpload-module__w-86--NNKyS{width:86%}.FileUpload-module__w-87--iyOCc{width:87%}.FileUpload-module__w-88--ldXwx{width:88%}.FileUpload-module__w-89--OtyvH{width:89%}.FileUpload-module__w-90--v5vA0{width:90%}.FileUpload-module__w-91--DGbxE{width:91%}.FileUpload-module__w-92--rdxWg{width:92%}.FileUpload-module__w-93--FebDh{width:93%}.FileUpload-module__w-94--zscU2{width:94%}.FileUpload-module__w-95--e6K6O{width:95%}.FileUpload-module__w-96--B5O_z{width:96%}.FileUpload-module__w-97--DgRPn{width:97%}.FileUpload-module__w-98--BSBwG{width:98%}.FileUpload-module__w-99--ck047{width:99%}.FileUpload-module__w-100--tbHGJ{width:100%}.FileUpload-module__w-101--Jim11{width:101%}.FileUpload-module__w-102--BAV3M{width:102%}.FileUpload-module__w-103--cPOit{width:103%}.FileUpload-module__w-104--Peznl{width:104%}.FileUpload-module__w-105--t9KsP{width:105%}.FileUpload-module__file-upload-wrapper--wCmkU{display:flex;flex-direction:column}.FileUpload-module__file-dropzone--dmxsb{border-radius:var(--input-border-radius);background-color:var(--input-background-color);padding:1.25rem;position:relative;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileUpload-module__file-dropzone--dmxsb{transition-duration:.1ms}}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a{pointer-events:none;position:absolute;margin:0;padding:0;inset:0;border-color:var(--color-blue-grey500);border-style:var(--drag-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);background-color:var(--drag-background-color);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a{transition-duration:.1ms}}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6:hover .FileUpload-module__outline--MYU1a{border-color:var(--default)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__disabled--IWesn{border-color:var(--light)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__error--RnBHH{border-color:var(--error)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__focus--gtrsT{border-width:var(--input-border-width-focus)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__focus--gtrsT:not(.FileUpload-module__error--RnBHH){border-color:var(--color-focus)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH span[data-icon-status],.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH .FileUpload-module__file-upload-title--wy8cA{color:var(--error)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__success--hF8XD span[data-icon-status]{color:var(--success)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__disabled--IWesn{pointer-events:none;background-color:var(--disabled);color:var(--greyed-out)}.FileUpload-module__file-dropzone--dmxsb span[data-icon-status]{font-size:1.25rem;position:absolute;top:2.74rem;right:1.375rem}.FileUpload-module__file-selector-sub-text--rESWn{color:var(--greyed-out);padding:0 1.25rem}.FileUpload-module__file-selector-sub-text--rESWn.FileUpload-module__error--RnBHH{color:var(--error)}.FileUpload-module__file-select--u2rcf{display:flex;align-items:center;flex-direction:column}.FileUpload-module__file-select--u2rcf [class*=file]{font-size:1.25rem}.FileUpload-module__file-select--u2rcf [class*=typography]{margin-bottom:.625rem}.FileUpload-module__upload-input--x9lqZ{display:block;width:100%;border:none;text-transform:none;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;cursor:pointer}.FileUpload-module__upload-input--x9lqZ:focus{outline:none}.FileUpload-module__file-upload-btn--lEMGL{position:relative}.FileUpload-module__file-list--kS0Wy{list-style:none;padding:0;margin:.75rem 0}.FileUpload-module__file-list--kS0Wy li:not(:last-child){margin-bottom:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "FileUpload-module__sr-only--FHXiJ",
	"hidden": "FileUpload-module__hidden--oaezm",
	"slide-in": "FileUpload-module__slide-in--nwXxV",
	"slide-out": "FileUpload-module__slide-out--BesCa",
	"w-6": "FileUpload-module__w-6--n0rDA",
	"w-7": "FileUpload-module__w-7--FzK3q",
	"w-8": "FileUpload-module__w-8--szbfy",
	"w-9": "FileUpload-module__w-9--pdfIy",
	"w-10": "FileUpload-module__w-10--wO5r7",
	"w-11": "FileUpload-module__w-11--UNImg",
	"w-12": "FileUpload-module__w-12--yDmYS",
	"w-13": "FileUpload-module__w-13--Wxcrt",
	"w-14": "FileUpload-module__w-14--dUwd2",
	"w-15": "FileUpload-module__w-15--sZ6M8",
	"w-16": "FileUpload-module__w-16--a4r8I",
	"w-17": "FileUpload-module__w-17--L8e3N",
	"w-18": "FileUpload-module__w-18--KqYV0",
	"w-19": "FileUpload-module__w-19--_zzlS",
	"w-20": "FileUpload-module__w-20--PPHK5",
	"w-21": "FileUpload-module__w-21--CXhwD",
	"w-22": "FileUpload-module__w-22--KhPYo",
	"w-23": "FileUpload-module__w-23--Qc44E",
	"w-24": "FileUpload-module__w-24--iBSEG",
	"w-25": "FileUpload-module__w-25--YTjaK",
	"w-26": "FileUpload-module__w-26--IWNgq",
	"w-27": "FileUpload-module__w-27--gD93K",
	"w-28": "FileUpload-module__w-28--dFrNR",
	"w-29": "FileUpload-module__w-29--VkOFE",
	"w-30": "FileUpload-module__w-30--G5A6s",
	"w-31": "FileUpload-module__w-31--NRpUz",
	"w-32": "FileUpload-module__w-32--H5dvw",
	"w-33": "FileUpload-module__w-33--Flo_f",
	"w-34": "FileUpload-module__w-34--wmBtk",
	"w-35": "FileUpload-module__w-35--JVAmk",
	"w-36": "FileUpload-module__w-36--zeP13",
	"w-37": "FileUpload-module__w-37--WDd0p",
	"w-38": "FileUpload-module__w-38--1r_iS",
	"w-39": "FileUpload-module__w-39--ppONI",
	"w-40": "FileUpload-module__w-40--T3lZq",
	"w-41": "FileUpload-module__w-41--yeYYl",
	"w-42": "FileUpload-module__w-42--CIt92",
	"w-43": "FileUpload-module__w-43--Cq7S4",
	"w-44": "FileUpload-module__w-44--A2EBQ",
	"w-45": "FileUpload-module__w-45--QiLpb",
	"w-46": "FileUpload-module__w-46--hmxom",
	"w-47": "FileUpload-module__w-47--q6F2f",
	"w-48": "FileUpload-module__w-48--AB9fU",
	"w-49": "FileUpload-module__w-49--BIjU7",
	"w-50": "FileUpload-module__w-50--mtY0n",
	"w-51": "FileUpload-module__w-51--ZJ7K5",
	"w-52": "FileUpload-module__w-52--mHOaY",
	"w-53": "FileUpload-module__w-53--mbeUk",
	"w-54": "FileUpload-module__w-54--g_8Ha",
	"w-55": "FileUpload-module__w-55--WOhbC",
	"w-56": "FileUpload-module__w-56--QL53P",
	"w-57": "FileUpload-module__w-57--LUB8k",
	"w-58": "FileUpload-module__w-58--g95zE",
	"w-59": "FileUpload-module__w-59--R3gdu",
	"w-60": "FileUpload-module__w-60--wu3ex",
	"w-61": "FileUpload-module__w-61--iCu2U",
	"w-62": "FileUpload-module__w-62--Sxxyz",
	"w-63": "FileUpload-module__w-63--WJqyS",
	"w-64": "FileUpload-module__w-64--Wd6rr",
	"w-65": "FileUpload-module__w-65--tNKX2",
	"w-66": "FileUpload-module__w-66--__Qpy",
	"w-67": "FileUpload-module__w-67--n0JKj",
	"w-68": "FileUpload-module__w-68--Akn4L",
	"w-69": "FileUpload-module__w-69--_dA7v",
	"w-70": "FileUpload-module__w-70--lawra",
	"w-71": "FileUpload-module__w-71--t1poW",
	"w-72": "FileUpload-module__w-72--nWzD9",
	"w-73": "FileUpload-module__w-73--dsa5m",
	"w-74": "FileUpload-module__w-74--X4KqT",
	"w-75": "FileUpload-module__w-75--HeSHc",
	"w-76": "FileUpload-module__w-76--yGfbP",
	"w-77": "FileUpload-module__w-77--TpSi5",
	"w-78": "FileUpload-module__w-78--yCCnQ",
	"w-79": "FileUpload-module__w-79--lD5c5",
	"w-80": "FileUpload-module__w-80--tp12N",
	"w-81": "FileUpload-module__w-81--eJDYv",
	"w-82": "FileUpload-module__w-82--OV36M",
	"w-83": "FileUpload-module__w-83--gWYCs",
	"w-84": "FileUpload-module__w-84--xzF6j",
	"w-85": "FileUpload-module__w-85--V2l_g",
	"w-86": "FileUpload-module__w-86--NNKyS",
	"w-87": "FileUpload-module__w-87--iyOCc",
	"w-88": "FileUpload-module__w-88--ldXwx",
	"w-89": "FileUpload-module__w-89--OtyvH",
	"w-90": "FileUpload-module__w-90--v5vA0",
	"w-91": "FileUpload-module__w-91--DGbxE",
	"w-92": "FileUpload-module__w-92--rdxWg",
	"w-93": "FileUpload-module__w-93--FebDh",
	"w-94": "FileUpload-module__w-94--zscU2",
	"w-95": "FileUpload-module__w-95--e6K6O",
	"w-96": "FileUpload-module__w-96--B5O_z",
	"w-97": "FileUpload-module__w-97--DgRPn",
	"w-98": "FileUpload-module__w-98--BSBwG",
	"w-99": "FileUpload-module__w-99--ck047",
	"w-100": "FileUpload-module__w-100--tbHGJ",
	"w-101": "FileUpload-module__w-101--Jim11",
	"w-102": "FileUpload-module__w-102--BAV3M",
	"w-103": "FileUpload-module__w-103--cPOit",
	"w-104": "FileUpload-module__w-104--Peznl",
	"w-105": "FileUpload-module__w-105--t9KsP",
	"file-upload-wrapper": "FileUpload-module__file-upload-wrapper--wCmkU",
	"file-dropzone": "FileUpload-module__file-dropzone--dmxsb",
	"drag-active": "FileUpload-module__drag-active--sPSV6",
	"outline": "FileUpload-module__outline--MYU1a",
	"disabled": "FileUpload-module__disabled--IWesn",
	"error": "FileUpload-module__error--RnBHH",
	"focus": "FileUpload-module__focus--gtrsT",
	"file-upload-title": "FileUpload-module__file-upload-title--wy8cA",
	"success": "FileUpload-module__success--hF8XD",
	"file-selector-sub-text": "FileUpload-module__file-selector-sub-text--rESWn",
	"file-select": "FileUpload-module__file-select--u2rcf",
	"upload-input": "FileUpload-module__upload-input--x9lqZ",
	"file-upload-btn": "FileUpload-module__file-upload-btn--lEMGL",
	"file-list": "FileUpload-module__file-list--kS0Wy"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Form-module__form--Nl9sb{font-family:var(--font-family)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": "Form-module__form--Nl9sb"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);