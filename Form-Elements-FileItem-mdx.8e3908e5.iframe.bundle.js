"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8847],{

/***/ "./stories/Form/Elements/FileItem.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _FileItem_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Elements/FileItem.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _FileItem_stories__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "File Item component was created to encapsulate the styles reserved for file items, in a file list It\nreceives the following props:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "name"
          }), " -> File Name, as is saved or selected from a file selector"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "status"
          }), " -> The uploading status of the file"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "progress"
          }), " -> The progress of the uploading file"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "error"
          }), " -> A text containing the error a file can contain"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onRequestFileAction"
          }), " -> A callback to be used when a user clicks on an action\nbutton, at the right of the file item component The callback will receive the following params:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
              children: ["action -> represents a string with the following possible values: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                children: "delete"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                children: "remove"
              }), ",\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                children: "abort"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                children: "retry"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: "name -> file name"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "./stories/Form/Elements/FileItem.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileItemCompleted: () => (/* binding */ FileItemCompleted),
/* harmony export */   FileItemError: () => (/* binding */ FileItemError),
/* harmony export */   FileItemProgress: () => (/* binding */ FileItemProgress),
/* harmony export */   FileItemReadOnly: () => (/* binding */ FileItemReadOnly),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_FileUpload_FileItem_FileItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/FileUpload/FileItem/FileItem.tsx");
/* harmony import */ var _FileItem_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./stories/Form/Elements/FileItem.mdx");
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




const meta = {
  title: "components/Inputs/FileUpload/FileItem",
  component: _src_components_Form_FileUpload_FileItem_FileItem__WEBPACK_IMPORTED_MODULE_1__/* .FileItem */ .I3,
  parameters: {
    docs: {
      page: _FileItem_mdx__WEBPACK_IMPORTED_MODULE_2__["default"]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_FileUpload_FileItem_FileItem__WEBPACK_IMPORTED_MODULE_1__/* .FileItem */ .I3, args);
};
const FileItemCompleted = Template.bind({});
FileItemCompleted.args = {
  name: "test.txt",
  status: "completed",
  downloadFileLink: "https://www.test.com/download"
};
const FileItemError = Template.bind({});
FileItemError.args = {
  name: "test.txt",
  status: "error",
  error: "The maximum allowed file size is 2MB. Upload a smaller file."
};
const FileItemProgress = Template.bind({});
FileItemProgress.args = {
  name: "test.txt",
  status: "uploading",
  progress: 50
};
const FileItemReadOnly = Template.bind({});
FileItemReadOnly.args = {
  name: "test.txt",
  status: "readonly"
};
FileItemCompleted.parameters = {
  ...FileItemCompleted.parameters,
  docs: {
    ...FileItemCompleted.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <FileItem {...args} />;\n}",
      ...FileItemCompleted.parameters?.docs?.source
    }
  }
};
FileItemError.parameters = {
  ...FileItemError.parameters,
  docs: {
    ...FileItemError.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <FileItem {...args} />;\n}",
      ...FileItemError.parameters?.docs?.source
    }
  }
};
FileItemProgress.parameters = {
  ...FileItemProgress.parameters,
  docs: {
    ...FileItemProgress.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <FileItem {...args} />;\n}",
      ...FileItemProgress.parameters?.docs?.source
    }
  }
};
FileItemReadOnly.parameters = {
  ...FileItemReadOnly.parameters,
  docs: {
    ...FileItemReadOnly.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <FileItem {...args} />;\n}",
      ...FileItemReadOnly.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["FileItemCompleted","FileItemError","FileItemProgress","FileItemReadOnly"];

/***/ }),

/***/ "./src/components/Form/FileUpload/FileItem/FileItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QS: () => (/* binding */ FILE_ACTION),
  I3: () => (/* binding */ FileItem)
});

// UNUSED EXPORTS: ACTION_STATUS

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.module.scss
var FileItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FileItem_module/* default */.A, options);




       /* harmony default export */ const FileItem_FileItem_module = (FileItem_module/* default */.A && FileItem_module/* default */.A.locals ? FileItem_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/ProgressBar/ProgressBar.tsx + 1 modules
var ProgressBar = __webpack_require__("./src/components/ProgressBar/ProgressBar.tsx");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Link/Link.tsx + 1 modules
var Link = __webpack_require__("./src/components/Link/Link.tsx");
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








let FILE_ACTION = /*#__PURE__*/function (FILE_ACTION) {
  FILE_ACTION["DELETE"] = "delete";
  FILE_ACTION["DOWNLOAD"] = "download";
  FILE_ACTION["REMOVE"] = "remove";
  FILE_ACTION["ABORT"] = "abort";
  FILE_ACTION["RETRY"] = "retry";
  return FILE_ACTION;
}({});
let ACTION_STATUS = /*#__PURE__*/function (ACTION_STATUS) {
  ACTION_STATUS["COMPLETED"] = "completed";
  ACTION_STATUS["UPLOADING"] = "uploading";
  ACTION_STATUS["ERROR"] = "error";
  ACTION_STATUS["RETRY"] = "retry";
  ACTION_STATUS["READONLY"] = "readonly";
  return ACTION_STATUS;
}({});
const FileItemComponent = (_ref, ref) => {
  let {
    name,
    status,
    error,
    progress,
    downloadFileLink,
    totalPercentage,
    onRequestedFileAction
  } = _ref;
  const determineIcons = status => {
    switch (status) {
      case ACTION_STATUS.COMPLETED:
        return {
          fileIcon: Icon/* Icons */.F.FileAltIcon,
          actionIcons: [{
            type: Icon/* Icons */.F.Trash,
            action: FILE_ACTION.DELETE
          }, {
            type: Icon/* Icons */.F.DownloadFile,
            action: FILE_ACTION.DOWNLOAD
          }]
        };
      case ACTION_STATUS.ERROR:
        return {
          fileIcon: Icon/* Icons */.F.Error,
          actionIcons: [{
            type: Icon/* Icons */.F.Times,
            action: FILE_ACTION.REMOVE
          }]
        };
      case ACTION_STATUS.UPLOADING:
        return {
          fileIcon: Icon/* Icons */.F.FileAltIcon,
          actionIcons: [{
            type: Icon/* Icons */.F.AbortFile,
            action: FILE_ACTION.ABORT
          }]
        };
      case ACTION_STATUS.RETRY:
        return {
          fileIcon: Icon/* Icons */.F.FileAltIcon,
          actionIcons: [{
            type: Icon/* Icons */.F.Refresh,
            action: FILE_ACTION.RETRY
          }, {
            type: Icon/* Icons */.F.Trash,
            action: FILE_ACTION.REMOVE
          }]
        };
      case ACTION_STATUS.READONLY:
      default:
        return {
          fileIcon: Icon/* Icons */.F.FileAltIcon
        };
    }
  };
  const icons = determineIcons(status);
  const getFriendlyNameAndExtension = name => {
    const index = name.indexOf(".");
    return {
      friendlyName: name.slice(0, index),
      extension: name.slice(index + 1)
    };
  };
  const {
    friendlyName,
    extension
  } = getFriendlyNameAndExtension(name);
  const getStartIcon = icon => /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    key: icon.action,
    title: icon.action,
    icon: icon.type,
    className: FileItem_FileItem_module["action-icon"]
  });
  const renderActionIcons = actionIcons => {
    return actionIcons.map(icon => /*#__PURE__*/react.createElement(react.Fragment, {
      key: icon.action
    }, icon.action !== FILE_ACTION.DOWNLOAD && /*#__PURE__*/react.createElement(Button/* Button */.$, {
      color: "primary",
      startIcon: getStartIcon(icon),
      title: icon.action !== FILE_ACTION.ABORT ? icon.action : "",
      type: "button",
      variant: "text",
      onClick: () => icon && onRequestedFileAction && onRequestedFileAction(icon.action, name)
    }, icon.action !== FILE_ACTION.ABORT ? icon.action : ""), icon.action === FILE_ACTION.DOWNLOAD && downloadFileLink && /*#__PURE__*/react.createElement(Link/* Link */.N, {
      color: "primary",
      display: "link",
      to: downloadFileLink,
      type: "download",
      target: "_blank",
      prefixIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        key: icon.action,
        className: FileItem_FileItem_module["action-icon"],
        title: icon.action,
        icon: icon.type
      })
    }, icon.action)));
  };
  const getUploadedFileInfo = () => {
    return /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
      variant: "body",
      title: name,
      className: "".concat(FileItem_FileItem_module["file-name"], " ").concat(status ? FileItem_FileItem_module[status] : "")
    }, status === "retry" && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: Icon/* Icons */.F.Error,
      className: "".concat(FileItem_FileItem_module["file-icon"], " ").concat(status ? FileItem_FileItem_module[status] : "")
    }), /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: icons.fileIcon,
      className: FileItem_FileItem_module["file-icon"]
    }), /*#__PURE__*/react.createElement("span", {
      className: FileItem_FileItem_module["friendly-name"]
    }, friendlyName), ".", /*#__PURE__*/react.createElement("span", null, extension));
  };
  const getProgressBar = () => {
    return /*#__PURE__*/react.createElement(ProgressBar/* ProgressBar */.z, {
      className: FileItem_FileItem_module["progress-bar"],
      completed: progress,
      label: "".concat(friendlyName, ".").concat(extension),
      percentage: totalPercentage
    });
  };
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: FileItem_FileItem_module["file-item-wrapper"],
    "aria-label": "".concat(name, "-wrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: FileItem_FileItem_module["file-list-container"]
  }, status !== ACTION_STATUS.UPLOADING && getUploadedFileInfo(), /*#__PURE__*/react.createElement("div", {
    className: "".concat(status === ACTION_STATUS.UPLOADING ? FileItem_FileItem_module["progress-with-action"] : "")
  }, status === ACTION_STATUS.UPLOADING && getProgressBar(), /*#__PURE__*/react.createElement("div", {
    className: FileItem_FileItem_module["action-button-wrapper"]
  }, icons.actionIcons && renderActionIcons(icons.actionIcons)))), error && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "sub-text",
    className: "".concat(FileItem_FileItem_module["file-subtitle"], " ").concat(status ? FileItem_FileItem_module[status] : "")
  }, error));
};
const FileItem = /*#__PURE__*/react.forwardRef(FileItemComponent);
try {
    // @ts-ignore
    FileItem.displayName = "FileItem";
    // @ts-ignore
    FileItem.__docgenInfo = { "description": "", "displayName": "FileItem", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "progress": { "defaultValue": null, "description": "", "name": "progress", "required": false, "type": { "name": "number" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": false, "type": { "name": "enum", "value": [{ "value": "\"completed\"" }, { "value": "\"error\"" }, { "value": "\"uploading\"" }, { "value": "\"readonly\"" }, { "value": "\"retry\"" }] } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "string" } }, "onRequestedFileAction": { "defaultValue": null, "description": "", "name": "onRequestedFileAction", "required": false, "type": { "name": "((action: FILE_ACTION, name: string) => void)" } }, "downloadFileLink": { "defaultValue": null, "description": "", "name": "downloadFileLink", "required": false, "type": { "name": "string" } }, "totalPercentage": { "defaultValue": null, "description": "", "name": "totalPercentage", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FileUpload/FileItem/FileItem.tsx#FileItem"] = { docgenInfo: FileItem.__docgenInfo, name: "FileItem", path: "src/components/Form/FileUpload/FileItem/FileItem.tsx#FileItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
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
 */.FileItem-module__sr-only--Ku2ck{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileItem-module__hidden--nTkWY{display:none}.FileItem-module__slide-in--VbvM9{animation:FileItem-module__slide-in--VbvM9 .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-module__slide-in--VbvM9{animation-duration:.1ms}}.FileItem-module__slide-out--VVuQ0{animation:FileItem-module__slide-out--VVuQ0 .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-module__slide-out--VVuQ0{animation-duration:.1ms}}@keyframes FileItem-module__slide-in--VbvM9{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileItem-module__slide-out--VVuQ0{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.FileItem-module__sr-only--Ku2ck{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileItem-module__hidden--nTkWY{display:none}.FileItem-module__slide-in--VbvM9{animation:FileItem-module__slide-in--VbvM9 .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-module__slide-in--VbvM9{animation-duration:.1ms}}.FileItem-module__slide-out--VVuQ0{animation:FileItem-module__slide-out--VVuQ0 .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-module__slide-out--VVuQ0{animation-duration:.1ms}}@keyframes FileItem-module__slide-in--VbvM9{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileItem-module__slide-out--VVuQ0{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.FileItem-module__file-item-wrapper--X17CP{padding:0;border-radius:var(--input-border-radius);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileItem-module__file-item-wrapper--X17CP{transition-duration:.1ms}}.FileItem-module__file-item-wrapper--X17CP [class*=icon]{font-size:1.25rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7{background-color:var(--color-blue-grey25);padding:.25rem .75rem;display:flex;justify-content:space-between;flex-wrap:wrap;min-height:2.875rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl{margin:.25rem 0;display:flex}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl button{margin-left:.5rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl button span{font-size:.875rem;text-transform:capitalize}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl a{padding-left:.75rem;padding-right:1.25rem;font-weight:500;cursor:pointer;display:flex;align-items:center;text-decoration:none;margin-left:.5rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl a span.FileItem-module__action-icon--rMhc2{display:flex;justify-content:center;width:1.5rem;margin-right:.25rem;font-size:.875rem;padding-left:0}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl a span{font-size:.875rem;text-transform:capitalize}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl a:hover{color:var(--button-primary-hover-color);background-color:var(--color-black10)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__action-button-wrapper--xLFLl a:focus{outline:.125rem solid var(--color-focus);outline-offset:2px;border-radius:var(--focus-border-radius)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__progress-with-action--Dwrfv{width:100%;display:flex;align-items:center}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__progress-with-action--Dwrfv .FileItem-module__progress-bar--XqMwU{height:3rem;width:100%;background:rgba(0,0,0,0)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__progress-with-action--Dwrfv .FileItem-module__progress-bar--XqMwU>span{height:.3rem;border-radius:var(--input-border-radius)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-list-container--ZM1r7 .FileItem-module__progress-with-action--Dwrfv .FileItem-module__progress-bar--XqMwU p{font-size:.875rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__progress-bar--XqMwU{background-color:var(--color-black10)}.FileItem-module__file-item-wrapper--X17CP span[class*=bar--]{border-radius:var(--input-border-radius);height:1rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-name--bW7R1{margin:0;display:flex;align-items:center;font-size:.875rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-name--bW7R1 .FileItem-module__friendly-name--GdQ12{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-name--bW7R1.FileItem-module__error--j2Cr_ span::before{color:var(--error)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__action-icon--rMhc2{margin-left:auto;color:var(--color-primary);cursor:pointer;padding-left:1.25rem;margin-right:1rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__action-icon--rMhc2 label,.FileItem-module__file-item-wrapper--X17CP .FileItem-module__action-icon--rMhc2 a{text-transform:capitalize;padding-left:.5rem;cursor:pointer;color:var(--color-primary);text-decoration:none}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-icon--KKPt5{margin-right:.5rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-icon--KKPt5::before{color:var(--color-primary500)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-icon--KKPt5.FileItem-module__retry--pIny8::before{color:var(--error)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-subtitle--bpw0_,.FileItem-module__file-item-wrapper--X17CP .FileItem-module__progress-bar--XqMwU{display:block;margin:.3125rem 1.75rem;padding:0}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__error--j2Cr_,.FileItem-module__file-item-wrapper--X17CP .FileItem-module__retry--pIny8{color:var(--error)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__readonly--WvdMy{color:var(--greyed-out)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-subtitle--bpw0_{margin-left:0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `FileItem-module__sr-only--Ku2ck`,
	"hidden": `FileItem-module__hidden--nTkWY`,
	"slide-in": `FileItem-module__slide-in--VbvM9`,
	"slide-out": `FileItem-module__slide-out--VVuQ0`,
	"file-item-wrapper": `FileItem-module__file-item-wrapper--X17CP`,
	"file-list-container": `FileItem-module__file-list-container--ZM1r7`,
	"action-button-wrapper": `FileItem-module__action-button-wrapper--xLFLl`,
	"action-icon": `FileItem-module__action-icon--rMhc2`,
	"progress-with-action": `FileItem-module__progress-with-action--Dwrfv`,
	"progress-bar": `FileItem-module__progress-bar--XqMwU`,
	"file-name": `FileItem-module__file-name--bW7R1`,
	"friendly-name": `FileItem-module__friendly-name--GdQ12`,
	"error": `FileItem-module__error--j2Cr_`,
	"file-icon": `FileItem-module__file-icon--KKPt5`,
	"retry": `FileItem-module__retry--pIny8`,
	"file-subtitle": `FileItem-module__file-subtitle--bpw0_`,
	"readonly": `FileItem-module__readonly--WvdMy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {



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