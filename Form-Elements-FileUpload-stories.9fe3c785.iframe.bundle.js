"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7039],{

/***/ "./stories/Form/Elements/FileUpload.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FileUploadComponent: function() { return /* binding */ FileUpload_stories_FileUploadComponent; },
  FileUploadComponentWithServerInteraction: function() { return /* binding */ FileUploadComponentWithServerInteraction; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
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




       /* harmony default export */ var FileUpload_FileUpload_module = (FileUpload_module/* default */.Z && FileUpload_module/* default */.Z.locals ? FileUpload_module/* default */.Z.locals : undefined);

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
  inputError || error && dropzoneClassNames.push(FileUpload_FileUpload_module["error"]) && subTextClass.push(FileUpload_FileUpload_module["error"]);
  disabled && dropzoneClassNames.push(FileUpload_FileUpload_module["disabled"]);
  success && !error && dropzoneClassNames.push(FileUpload_FileUpload_module["success"]);
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
      var extension = e === null || e === void 0 || (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.files[0].name.split(".").pop();
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
    icon: Icon/* Icons */.P.FileUpload
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
    className: FileUpload_FileUpload_module["outline"]
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
    FileUpload.__docgenInfo = { "description": "", "displayName": "FileUpload", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: FileType[]) => void)" } }, "onDragEnter": { "defaultValue": null, "description": "", "name": "onDragEnter", "required": false, "type": { "name": "DragEventHandler" } }, "onDragLeave": { "defaultValue": null, "description": "", "name": "onDragLeave", "required": false, "type": { "name": "DragEventHandler" } }, "onDragOver": { "defaultValue": null, "description": "", "name": "onDragOver", "required": false, "type": { "name": "DragEventHandler" } }, "onDrop": { "defaultValue": null, "description": "", "name": "onDrop", "required": false, "type": { "name": "((e: FileType[]) => void)" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "accept": { "defaultValue": null, "description": "", "name": "accept", "required": true, "type": { "name": "string" } }, "multiple": { "defaultValue": null, "description": "", "name": "multiple", "required": true, "type": { "name": "boolean" } }, "wrapperProps": { "defaultValue": null, "description": "", "name": "wrapperProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "fileList": { "defaultValue": null, "description": "", "name": "fileList", "required": true, "type": { "name": "FileType[]" } }, "exceedingMaxSizeErrorText": { "defaultValue": null, "description": "", "name": "exceedingMaxSizeErrorText", "required": false, "type": { "name": "string" } }, "maxFileSize": { "defaultValue": null, "description": "", "name": "maxFileSize", "required": false, "type": { "name": "number" } }, "selectButtonText": { "defaultValue": { value: "Select file" }, "description": "", "name": "selectButtonText", "required": false, "type": { "name": "string" } }, "dragAndDropText": { "defaultValue": { value: "Drop file here or" }, "description": "", "name": "dragAndDropText", "required": false, "type": { "name": "string" } }, "subText": { "defaultValue": null, "description": "", "name": "subText", "required": false, "type": { "name": "string" } }, "onRequestedFileAction": { "defaultValue": null, "description": "", "name": "onRequestedFileAction", "required": false, "type": { "name": "((action: FILE_ACTION, name: string) => void)" } } } };
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
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/FileUpload.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
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
          }), (0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "headers"
            }), ": custom headers to be applied to the request"]
          }), (0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "responseErrorPath"
            }), ": a path by which to look for the error text of a response"]
          }), (0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "networkErrorText"
            }), ": in case a network error occurs, override the default error text"]
          }), (0,jsx_runtime.jsxs)("li", {
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
          }), (0,jsx_runtime.jsx)("li", {
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
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
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
var _FileUploadComponent$, _FileUploadComponent$2, _FileUploadComponentW, _FileUploadComponentW2;
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
      case FileItem/* FILE_ACTION */.o.RETRY:
        fileList = updatedFiles.map(function (file) {
          if (file.name === name) {
            delete file.status;
          }
          return file;
        });
        break;
      case FileItem/* FILE_ACTION */.o.REMOVE:
      case FileItem/* FILE_ACTION */.o.DELETE:
      case FileItem/* FILE_ACTION */.o.ABORT:
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
    }, (_FileUploadComponent$2 = FileUpload_stories_FileUploadComponent.parameters) === null || _FileUploadComponent$2 === void 0 || (_FileUploadComponent$2 = _FileUploadComponent$2.docs) === null || _FileUploadComponent$2 === void 0 ? void 0 : _FileUploadComponent$2.source)
  })
});
FileUploadComponentWithServerInteraction.parameters = FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, FileUploadComponentWithServerInteraction.parameters), {}, {
  docs: FileUpload_stories_objectSpread(FileUpload_stories_objectSpread({}, (_FileUploadComponentW = FileUploadComponentWithServerInteraction.parameters) === null || _FileUploadComponentW === void 0 ? void 0 : _FileUploadComponentW.docs), {}, {
    source: FileUpload_stories_objectSpread({
      originalSource: "args => {\n  const [_, updateArgs] = useArgs();\n  const onChange = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  const {\n    updatedFiles,\n    setUpdatedFiles\n  } = useUploadFile(args.fileList, {\n    url: args.url,\n    withCredentials: true,\n    responseErrorPath: \"message\"\n  });\n  useEffect(() => {\n    if (areArraysDifferent(args.fileList, updatedFiles, \"status\")) {\n      updateArgs({\n        ...args,\n        fileList: updatedFiles\n      });\n    }\n  }, [updatedFiles]);\n  const updateFileList = (action: FILE_ACTION, name: FileType[\"name\"]) => {\n    let fileList: any[] = [];\n    switch (action) {\n      case FILE_ACTION.RETRY:\n        fileList = updatedFiles.map(file => {\n          if (file.name === name) {\n            delete file.status;\n          }\n          return file;\n        });\n        break;\n      case FILE_ACTION.REMOVE:\n      case FILE_ACTION.DELETE:\n      case FILE_ACTION.ABORT:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n    }\n    setUpdatedFiles(fileList);\n  };\n  const onDrop = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  return <Form onSubmit={() => {}}>\n      <FileUpload {...args} fileList={updatedFiles} onChange={onChange} onDrop={onDrop} onRequestedFileAction={updateFileList} />\n    </Form>;\n}"
    }, (_FileUploadComponentW2 = FileUploadComponentWithServerInteraction.parameters) === null || _FileUploadComponentW2 === void 0 || (_FileUploadComponentW2 = _FileUploadComponentW2.docs) === null || _FileUploadComponentW2 === void 0 ? void 0 : _FileUploadComponentW2.source)
  })
});
var __namedExportsOrder = ["FileUploadComponent", "FileUploadComponentWithServerInteraction"];

/***/ }),

/***/ "./src/components/Button/BaseButton.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: function() { return /* binding */ BaseButton; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseButton_module/* default */.Z, options);




       /* harmony default export */ var Button_BaseButton_module = (BaseButton_module/* default */.Z && BaseButton_module/* default */.Z.locals ? BaseButton_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Spinner.tsx
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


var Spinner = function Spinner(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({}, props, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8323 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.2918 23.4127C6.49076 22.8275 4.85378 21.8243 3.51472 20.4853C2.17565 19.1462 1.17251 17.5092 0.587322 15.7082C0.00212849 13.9072 -0.148504 11.9932 0.14774 10.1228C0.443984 8.25238 1.17869 6.47863 2.2918 4.94658L3.91307 6.1245C2.98585 7.4007 2.37384 8.87823 2.12707 10.4363C1.8803 11.9943 2.00577 13.5887 2.49324 15.0889C2.9807 16.5892 3.81632 17.9528 4.93176 19.0682C6.0472 20.1837 7.4108 21.0193 8.91107 21.5068C10.4113 21.9942 12.0057 22.1197 13.5637 21.8729C15.1218 21.6262 16.5993 21.0141 17.8755 20.0869C19.1517 19.1597 20.1903 17.9436 20.9065 16.5381C21.6227 15.1326 21.996 13.5775 21.996 12H24Z",
    fill: "#5D607E"
  }));
};
try {
    // @ts-ignore
    Spinner.displayName = "Spinner";
    // @ts-ignore
    Spinner.__docgenInfo = { "description": "", "displayName": "Spinner", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Spinner.tsx#Spinner"] = { docgenInfo: Spinner.__docgenInfo, name: "Spinner", path: "src/components/Button/Spinner.tsx#Spinner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.tsx
var _excluded = ["children", "type", "className", "loading", "disabled"];
function BaseButton_extends() {
  BaseButton_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return BaseButton_extends.apply(this, arguments);
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




var BaseButtonComponent = function BaseButtonComponent(_ref, ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    className = _ref.className,
    loading = _ref.loading,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var validTypes = ["submit", "button", "reset"];
  var isDisabled = disabled !== null && disabled !== void 0 ? disabled : loading;
  if (!validTypes.includes(type)) throw new Error("You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ".concat(type));
  return /*#__PURE__*/react.createElement("button", BaseButton_extends({}, rest, {
    disabled: isDisabled,
    ref: ref,
    type: type,
    className: "".concat(Button_BaseButton_module.button, " ").concat(loading ? Button_BaseButton_module.loading : "", " ").concat(className ? className : "")
  }), loading ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Button_BaseButton_module["content-hidden"]
  }, children), /*#__PURE__*/react.createElement(Spinner, {
    className: Button_BaseButton_module["spinner"]
  })) : children);
};
var BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/FileUpload/FileItem/FileItem.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: function() { return /* binding */ FILE_ACTION; },
  j: function() { return /* binding */ FileItem; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.modules.scss
var FileItem_modules = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.modules.scss");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.modules.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FileItem_modules/* default */.Z, options);




       /* harmony default export */ var FileItem_FileItem_modules = (FileItem_modules/* default */.Z && FileItem_modules/* default */.Z.locals ? FileItem_modules/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/ProgressBar/ProgressBar.tsx + 1 modules
var ProgressBar = __webpack_require__("./src/components/ProgressBar/ProgressBar.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.tsx
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






var FILE_ACTION = /*#__PURE__*/function (FILE_ACTION) {
  FILE_ACTION["DELETE"] = "delete";
  FILE_ACTION["REMOVE"] = "remove";
  FILE_ACTION["ABORT"] = "abort";
  FILE_ACTION["RETRY"] = "retry";
  return FILE_ACTION;
}({});
var FileItemComponent = function FileItemComponent(_ref, ref) {
  var name = _ref.name,
    status = _ref.status,
    error = _ref.error,
    progress = _ref.progress,
    onRequestedFileAction = _ref.onRequestedFileAction;
  var determineIcons = function determineIcons(status) {
    switch (status) {
      case "completed":
        return {
          fileIcon: Icon/* Icons */.P.FileOutline,
          actionIcon: {
            type: Icon/* Icons */.P.Trash,
            action: FILE_ACTION.DELETE
          }
        };
      case "error":
        return {
          fileIcon: Icon/* Icons */.P.InfoCircle,
          actionIcon: {
            type: Icon/* Icons */.P.Times,
            action: FILE_ACTION.REMOVE
          }
        };
      case "uploading":
        return {
          fileIcon: Icon/* Icons */.P.FileUpload,
          actionIcon: {
            type: Icon/* Icons */.P.Times,
            action: FILE_ACTION.ABORT
          }
        };
      case "retry":
        return {
          fileIcon: Icon/* Icons */.P.InfoCircle,
          actionIcon: {
            type: Icon/* Icons */.P.Refresh,
            action: FILE_ACTION.RETRY
          }
        };
      case "readonly":
      default:
        return {
          fileIcon: Icon/* Icons */.P.FileOutline
        };
    }
  };
  var icons = determineIcons(status);
  var getFriendlyNameAndExtension = function getFriendlyNameAndExtension(name) {
    var index = name.indexOf(".");
    return {
      friendlyName: name.slice(0, index),
      extension: name.slice(index + 1)
    };
  };
  var _getFriendlyNameAndEx = getFriendlyNameAndExtension(name),
    friendlyName = _getFriendlyNameAndEx.friendlyName,
    extension = _getFriendlyNameAndEx.extension;
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: FileItem_FileItem_modules["file-item-wrapper"],
    "aria-label": "".concat(name, "-wrapper")
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    title: name,
    className: "".concat(FileItem_FileItem_modules["file-name"], " ").concat(status ? FileItem_FileItem_modules[status] : "")
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: icons.fileIcon,
    className: FileItem_FileItem_modules["file-icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: FileItem_FileItem_modules["friendly-name"]
  }, friendlyName), ".", /*#__PURE__*/react.createElement("span", null, extension), icons.actionIcon && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    title: icons.actionIcon.action,
    icon: icons.actionIcon.type,
    className: FileItem_FileItem_modules["action-icon"],
    onClick: function onClick() {
      return icons.actionIcon && onRequestedFileAction && onRequestedFileAction(icons.actionIcon.action, name);
    }
  })), error && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "sub-text",
    className: "".concat(FileItem_FileItem_modules["file-subtitle"], " ").concat(status ? FileItem_FileItem_modules[status] : "")
  }, error), status === "uploading" ? /*#__PURE__*/react.createElement(ProgressBar/* ProgressBar */.k, {
    className: FileItem_FileItem_modules["progress-bar"],
    completed: progress
  }) : "");
};
var FileItem = /*#__PURE__*/react.forwardRef(FileItemComponent);
try {
    // @ts-ignore
    FileItem.displayName = "FileItem";
    // @ts-ignore
    FileItem.__docgenInfo = { "description": "", "displayName": "FileItem", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "progress": { "defaultValue": null, "description": "", "name": "progress", "required": false, "type": { "name": "number" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": false, "type": { "name": "enum", "value": [{ "value": "\"error\"" }, { "value": "\"completed\"" }, { "value": "\"uploading\"" }, { "value": "\"readonly\"" }, { "value": "\"retry\"" }] } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "string" } }, "onRequestedFileAction": { "defaultValue": null, "description": "", "name": "onRequestedFileAction", "required": false, "type": { "name": "((action: FILE_ACTION, name: string) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FileUpload/FileItem/FileItem.tsx#FileItem"] = { docgenInfo: FileItem.__docgenInfo, name: "FileItem", path: "src/components/Form/FileUpload/FileItem/FileItem.tsx#FileItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Form.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: function() { return /* binding */ Form; }
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




       /* harmony default export */ var Form_Form_module = (Form_module/* default */.Z && Form_module/* default */.Z.locals ? Form_module/* default */.Z.locals : undefined);

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
/* harmony export */   U: function() { return /* binding */ useDetermineStatusIcon; }
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
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.Error
    });
  } else if (success) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: successRef,
      "data-icon-status": "success",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.CheckmarkCircleAlt
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
/* harmony export */   L6: function() { return /* binding */ filterProps; },
/* harmony export */   MU: function() { return /* binding */ getValueByPath; },
/* harmony export */   Pb: function() { return /* binding */ isJsonString; },
/* harmony export */   R3: function() { return /* binding */ areArraysDifferent; },
/* harmony export */   y: function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx, deepMerge */
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
var deepMerge = function deepMerge(obj1, obj2) {
  if (!obj2) return obj1;
  var result = _objectSpread({}, obj1);
  for (var _key2 in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, _key2)) {
      if (_typeof(obj2[_key2]) === "object" && obj2[_key2] !== null && Object.prototype.hasOwnProperty.call(obj1, _key2) && !Array.isArray(obj2[_key2])) {
        result[_key2] = deepMerge(obj1[_key2], obj2[_key2]);
      } else {
        result[_key2] = obj2[_key2];
      }
    }
  }
  return result;
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.75rem 1rem;min-height:2.5rem;cursor:pointer;transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);position:relative}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "BaseButton-module__sr-only--pIoQP",
	"hidden": "BaseButton-module__hidden--YXbft",
	"slide-in": "BaseButton-module__slide-in--f4Qq6",
	"slide-out": "BaseButton-module__slide-out--QlyO7",
	"button": "BaseButton-module__button--q6T9A",
	"content-hidden": "BaseButton-module__content-hidden--QNxtO",
	"spinner": "BaseButton-module__spinner--sHeyQ",
	"spin": "BaseButton-module__spin--KXAHp"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.modules.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FileItem-modules__sr-only--O1Dgl{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileItem-modules__hidden--QB9Vz{display:none}.FileItem-modules__slide-in--FW0wO{animation:FileItem-modules__slide-in--FW0wO .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-modules__slide-in--FW0wO{animation-duration:.1ms}}.FileItem-modules__slide-out--VglXR{animation:FileItem-modules__slide-out--VglXR .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-modules__slide-out--VglXR{animation-duration:.1ms}}@keyframes FileItem-modules__slide-in--FW0wO{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileItem-modules__slide-out--VglXR{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.FileItem-modules__file-item-wrapper--VFQe3{padding:.5rem 1.25rem;border-radius:var(--input-border-radius);background-color:var(--input-background-color);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileItem-modules__file-item-wrapper--VFQe3{transition-duration:.1ms}}.FileItem-modules__file-item-wrapper--VFQe3 [class*=icon]{font-size:1.25rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__progress-bar--Oqnj0{background-color:var(--color-black10)}.FileItem-modules__file-item-wrapper--VFQe3 span[class*=bar--]{border-radius:var(--input-border-radius);height:1rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-name--DDN1v{margin:0;display:flex;align-items:center}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-name--DDN1v .FileItem-modules__friendly-name--Sdhg8{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__action-icon--FlRKH{margin-left:auto;color:var(--color-primary);cursor:pointer;padding-left:1.25rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-icon--ItS59{margin-right:.5rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-subtitle--to11y,.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__progress-bar--Oqnj0{display:block;margin:.3125rem 1.75rem;padding:0}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__error--_vK3r,.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__retry--_p7UI{color:var(--error)}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__readonly--pfCYa{color:var(--greyed-out)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "FileItem-modules__sr-only--O1Dgl",
	"hidden": "FileItem-modules__hidden--QB9Vz",
	"slide-in": "FileItem-modules__slide-in--FW0wO",
	"slide-out": "FileItem-modules__slide-out--VglXR",
	"file-item-wrapper": "FileItem-modules__file-item-wrapper--VFQe3",
	"progress-bar": "FileItem-modules__progress-bar--Oqnj0",
	"file-name": "FileItem-modules__file-name--DDN1v",
	"friendly-name": "FileItem-modules__friendly-name--Sdhg8",
	"action-icon": "FileItem-modules__action-icon--FlRKH",
	"file-icon": "FileItem-modules__file-icon--ItS59",
	"file-subtitle": "FileItem-modules__file-subtitle--to11y",
	"error": "FileItem-modules__error--_vK3r",
	"retry": "FileItem-modules__retry--_p7UI",
	"readonly": "FileItem-modules__readonly--pfCYa"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FileUpload-module__sr-only--FHXiJ{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileUpload-module__hidden--oaezm{display:none}.FileUpload-module__slide-in--nwXxV{animation:FileUpload-module__slide-in--nwXxV .5s forwards}@media(prefers-reduced-motion: reduce){.FileUpload-module__slide-in--nwXxV{animation-duration:.1ms}}.FileUpload-module__slide-out--BesCa{animation:FileUpload-module__slide-out--BesCa .5s forwards}@media(prefers-reduced-motion: reduce){.FileUpload-module__slide-out--BesCa{animation-duration:.1ms}}@keyframes FileUpload-module__slide-in--nwXxV{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileUpload-module__slide-out--BesCa{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.FileUpload-module__file-upload-wrapper--wCmkU{display:flex;flex-direction:column}.FileUpload-module__file-dropzone--dmxsb{border-radius:var(--input-border-radius);background-color:var(--input-background-color);padding:1.25rem;position:relative;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileUpload-module__file-dropzone--dmxsb{transition-duration:.1ms}}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a{pointer-events:none;position:absolute;margin:0;padding:0;inset:0;border-color:var(--color-blue-grey500);border-style:var(--drag-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);background-color:var(--drag-background-color);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a{transition-duration:.1ms}}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6:hover .FileUpload-module__outline--MYU1a{border-color:var(--default);background-color:var(--input-hover-background-color)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__disabled--IWesn{border-color:var(--disabled);background-color:var(--input-disabled-background-color)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__error--RnBHH{border-color:var(--error)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__focus--gtrsT{border-width:var(--input-border-width-focus)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a.FileUpload-module__focus--gtrsT:not(.FileUpload-module__error--RnBHH){border-color:var(--color-focus)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH span[data-icon-status],.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH .FileUpload-module__file-upload-title--wy8cA{color:var(--error)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__success--hF8XD span[data-icon-status]{color:var(--success)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__disabled--IWesn{pointer-events:none;background-color:var(--disabled);color:var(--greyed-out)}.FileUpload-module__file-dropzone--dmxsb span[data-icon-status]{font-size:1.25rem;position:absolute;top:2.74rem;right:1.375rem}.FileUpload-module__file-selector-sub-text--rESWn{color:var(--greyed-out);padding:0 1.25rem}.FileUpload-module__file-selector-sub-text--rESWn.FileUpload-module__error--RnBHH{color:var(--error)}.FileUpload-module__file-select--u2rcf{display:flex;align-items:center;flex-direction:column}.FileUpload-module__file-select--u2rcf [class*=file]{font-size:1.25rem}.FileUpload-module__file-select--u2rcf [class*=typography]{margin-bottom:.625rem}.FileUpload-module__upload-input--x9lqZ{display:block;width:100%;border:none;text-transform:none;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;cursor:pointer}.FileUpload-module__upload-input--x9lqZ:focus{outline:none}.FileUpload-module__file-upload-btn--lEMGL{position:relative}.FileUpload-module__file-list--kS0Wy{list-style:none;padding:0;margin:.75rem 0}.FileUpload-module__file-list--kS0Wy li:not(:last-child){margin-bottom:.5rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "FileUpload-module__sr-only--FHXiJ",
	"hidden": "FileUpload-module__hidden--oaezm",
	"slide-in": "FileUpload-module__slide-in--nwXxV",
	"slide-out": "FileUpload-module__slide-out--BesCa",
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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ })

}]);