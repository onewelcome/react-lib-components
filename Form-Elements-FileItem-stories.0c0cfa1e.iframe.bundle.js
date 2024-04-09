"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7953],{

/***/ "./stories/Form/Elements/FileItem.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FileItemCompleted: () => (/* binding */ FileItemCompleted),
  FileItemError: () => (/* binding */ FileItemError),
  FileItemProgress: () => (/* binding */ FileItemProgress),
  FileItemReadOnly: () => (/* binding */ FileItemReadOnly),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ FileItem_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.tsx + 1 modules
var FileItem = __webpack_require__("./src/components/Form/FileUpload/FileItem/FileItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
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
/* harmony default export */ const Elements_FileItem = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/FileItem.stories.tsx
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
/* harmony default export */ const FileItem_stories = (meta);
const Template = args => {
  return /*#__PURE__*/react.createElement(FileItem/* FileItem */.j, args);
};
const FileItemCompleted = Template.bind({});
FileItemCompleted.args = {
  name: "test.txt",
  status: "completed"
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
  o: () => (/* binding */ FILE_ACTION),
  j: () => (/* binding */ FileItem)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.module.scss
var FileItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FileItem_module/* default */.Z, options);




       /* harmony default export */ const FileItem_FileItem_module = (FileItem_module/* default */.Z && FileItem_module/* default */.Z.locals ? FileItem_module/* default */.Z.locals : undefined);

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






let FILE_ACTION = /*#__PURE__*/function (FILE_ACTION) {
  FILE_ACTION["DELETE"] = "delete";
  FILE_ACTION["REMOVE"] = "remove";
  FILE_ACTION["ABORT"] = "abort";
  FILE_ACTION["RETRY"] = "retry";
  return FILE_ACTION;
}({});
const FileItemComponent = (_ref, ref) => {
  let {
    name,
    status,
    error,
    progress,
    onRequestedFileAction
  } = _ref;
  const determineIcons = status => {
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
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: FileItem_FileItem_module["file-item-wrapper"],
    "aria-label": "".concat(name, "-wrapper")
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    title: name,
    className: "".concat(FileItem_FileItem_module["file-name"], " ").concat(status ? FileItem_FileItem_module[status] : "")
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: icons.fileIcon,
    className: FileItem_FileItem_module["file-icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: FileItem_FileItem_module["friendly-name"]
  }, friendlyName), ".", /*#__PURE__*/react.createElement("span", null, extension), icons.actionIcon && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    title: icons.actionIcon.action,
    icon: icons.actionIcon.type,
    className: FileItem_FileItem_module["action-icon"],
    onClick: () => icons.actionIcon && onRequestedFileAction && onRequestedFileAction(icons.actionIcon.action, name)
  })), error && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "sub-text",
    className: "".concat(FileItem_FileItem_module["file-subtitle"], " ").concat(status ? FileItem_FileItem_module[status] : "")
  }, error), status === "uploading" ? /*#__PURE__*/react.createElement(ProgressBar/* ProgressBar */.k, {
    className: FileItem_FileItem_module["progress-bar"],
    completed: progress
  }) : "");
};
const FileItem = /*#__PURE__*/react.forwardRef(FileItemComponent);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.module.scss":
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
 */.FileItem-module__sr-only--Ku2ck{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileItem-module__hidden--nTkWY{display:none}.FileItem-module__slide-in--VbvM9{animation:FileItem-module__slide-in--VbvM9 .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-module__slide-in--VbvM9{animation-duration:.1ms}}.FileItem-module__slide-out--VVuQ0{animation:FileItem-module__slide-out--VVuQ0 .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-module__slide-out--VVuQ0{animation-duration:.1ms}}@keyframes FileItem-module__slide-in--VbvM9{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileItem-module__slide-out--VVuQ0{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.FileItem-module__file-item-wrapper--X17CP{padding:.5rem 1.25rem;border-radius:var(--input-border-radius);background-color:var(--input-background-color);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileItem-module__file-item-wrapper--X17CP{transition-duration:.1ms}}.FileItem-module__file-item-wrapper--X17CP [class*=icon]{font-size:1.25rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__progress-bar--XqMwU{background-color:var(--color-black10)}.FileItem-module__file-item-wrapper--X17CP span[class*=bar--]{border-radius:var(--input-border-radius);height:1rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-name--bW7R1{margin:0;display:flex;align-items:center}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-name--bW7R1 .FileItem-module__friendly-name--GdQ12{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__action-icon--rMhc2{margin-left:auto;color:var(--color-primary);cursor:pointer;padding-left:1.25rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-icon--KKPt5{margin-right:.5rem}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__file-subtitle--bpw0_,.FileItem-module__file-item-wrapper--X17CP .FileItem-module__progress-bar--XqMwU{display:block;margin:.3125rem 1.75rem;padding:0}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__error--j2Cr_,.FileItem-module__file-item-wrapper--X17CP .FileItem-module__retry--pIny8{color:var(--error)}.FileItem-module__file-item-wrapper--X17CP .FileItem-module__readonly--WvdMy{color:var(--greyed-out)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `FileItem-module__sr-only--Ku2ck`,
	"hidden": `FileItem-module__hidden--nTkWY`,
	"slide-in": `FileItem-module__slide-in--VbvM9`,
	"slide-out": `FileItem-module__slide-out--VVuQ0`,
	"file-item-wrapper": `FileItem-module__file-item-wrapper--X17CP`,
	"progress-bar": `FileItem-module__progress-bar--XqMwU`,
	"file-name": `FileItem-module__file-name--bW7R1`,
	"friendly-name": `FileItem-module__friendly-name--GdQ12`,
	"action-icon": `FileItem-module__action-icon--rMhc2`,
	"file-icon": `FileItem-module__file-icon--KKPt5`,
	"file-subtitle": `FileItem-module__file-subtitle--bpw0_`,
	"error": `FileItem-module__error--j2Cr_`,
	"retry": `FileItem-module__retry--pIny8`,
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