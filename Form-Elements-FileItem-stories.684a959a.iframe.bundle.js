"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7953],{

/***/ "./stories/Form/Elements/FileItem.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FileItemCompleted: function() { return /* binding */ FileItemCompleted; },
  FileItemError: function() { return /* binding */ FileItemError; },
  FileItemProgress: function() { return /* binding */ FileItemProgress; },
  FileItemReadOnly: function() { return /* binding */ FileItemReadOnly; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ FileItem_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.tsx + 1 modules
var FileItem = __webpack_require__("./src/components/Form/FileUpload/FileItem/FileItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/FileItem.mdx



/*@jsxRuntime automatic @jsxImportSource react*/



function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File Item component was created to encapsulate the styles reserved for file items, in a file list It\nreceives the following props:"
    }), "\n", (0,jsx_runtime.jsxs)("ul", {
      children: [(0,jsx_runtime.jsx)("li", {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "name"
          }), " -> File Name, as is saved or selected from a file selector"]
        })
      }), (0,jsx_runtime.jsx)("li", {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "status"
          }), " -> The uploading status of the file"]
        })
      }), (0,jsx_runtime.jsx)("li", {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "progress"
          }), " -> The progress of the uploading file"]
        })
      }), (0,jsx_runtime.jsx)("li", {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "error"
          }), " -> A text containing the error a file can contain"]
        })
      }), (0,jsx_runtime.jsxs)("li", {
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "onRequestFileAction"
          }), " -> A callback to be used when a user clicks on an action\nbutton, at the right of the file item component The callback will receive the following params:"]
        }), (0,jsx_runtime.jsxs)("ol", {
          children: [(0,jsx_runtime.jsx)("li", {
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["action -> represents a string with the following possible values: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "delete"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "remove"
              }), ",\n", (0,jsx_runtime.jsx)(_components.code, {
                children: "abort"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "retry"
              })]
            })
          }), (0,jsx_runtime.jsx)("li", {
            children: "name -> file name"
          })]
        })]
      })]
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
/* harmony default export */ var Elements_FileItem = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/FileItem.stories.tsx
var _FileItemCompleted$pa, _FileItemCompleted$pa2, _FileItemError$parame, _FileItemError$parame2, _FileItemProgress$par, _FileItemProgress$par2, _FileItemReadOnly$par, _FileItemReadOnly$par2;
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
  title: "components/Inputs/FileUpload/FileItem",
  component: FileItem/* FileItem */.j,
  parameters: {
    docs: {
      page: Elements_FileItem
    }
  },
  argTypes: {
    name: {
      control: {
        type: "text"
      }
    },
    status: {
      options: ["uploading", "completed", "error", "readonly", "retry"],
      control: {
        type: "select"
      }
    },
    error: {
      control: {
        type: "text"
      }
    }
  }
};
/* harmony default export */ var FileItem_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(FileItem/* FileItem */.j, args);
};
var FileItemCompleted = Template.bind({});
FileItemCompleted.args = {
  name: "test.txt",
  status: "completed"
};
var FileItemError = Template.bind({});
FileItemError.args = {
  name: "test.txt",
  status: "error",
  error: "The maximum allowed file size is 2MB. Upload a smaller file."
};
var FileItemProgress = Template.bind({});
FileItemProgress.args = {
  name: "test.txt",
  status: "uploading",
  progress: 50
};
var FileItemReadOnly = Template.bind({});
FileItemReadOnly.args = {
  name: "test.txt",
  status: "readonly"
};
FileItemCompleted.parameters = _objectSpread(_objectSpread({}, FileItemCompleted.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemCompleted$pa = FileItemCompleted.parameters) === null || _FileItemCompleted$pa === void 0 ? void 0 : _FileItemCompleted$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemCompleted$pa2 = FileItemCompleted.parameters) === null || _FileItemCompleted$pa2 === void 0 || (_FileItemCompleted$pa2 = _FileItemCompleted$pa2.docs) === null || _FileItemCompleted$pa2 === void 0 ? void 0 : _FileItemCompleted$pa2.source)
  })
});
FileItemError.parameters = _objectSpread(_objectSpread({}, FileItemError.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemError$parame = FileItemError.parameters) === null || _FileItemError$parame === void 0 ? void 0 : _FileItemError$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemError$parame2 = FileItemError.parameters) === null || _FileItemError$parame2 === void 0 || (_FileItemError$parame2 = _FileItemError$parame2.docs) === null || _FileItemError$parame2 === void 0 ? void 0 : _FileItemError$parame2.source)
  })
});
FileItemProgress.parameters = _objectSpread(_objectSpread({}, FileItemProgress.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemProgress$par = FileItemProgress.parameters) === null || _FileItemProgress$par === void 0 ? void 0 : _FileItemProgress$par.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemProgress$par2 = FileItemProgress.parameters) === null || _FileItemProgress$par2 === void 0 || (_FileItemProgress$par2 = _FileItemProgress$par2.docs) === null || _FileItemProgress$par2 === void 0 ? void 0 : _FileItemProgress$par2.source)
  })
});
FileItemReadOnly.parameters = _objectSpread(_objectSpread({}, FileItemReadOnly.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemReadOnly$par = FileItemReadOnly.parameters) === null || _FileItemReadOnly$par === void 0 ? void 0 : _FileItemReadOnly$par.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemReadOnly$par2 = FileItemReadOnly.parameters) === null || _FileItemReadOnly$par2 === void 0 || (_FileItemReadOnly$par2 = _FileItemReadOnly$par2.docs) === null || _FileItemReadOnly$par2 === void 0 ? void 0 : _FileItemReadOnly$par2.source)
  })
});
var __namedExportsOrder = ["FileItemCompleted", "FileItemError", "FileItemProgress", "FileItemReadOnly"];

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