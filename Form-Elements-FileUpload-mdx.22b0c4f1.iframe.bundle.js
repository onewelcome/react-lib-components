"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3309],{

/***/ "./stories/Form/Elements/FileUpload.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _FileUpload_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Elements/FileUpload.stories.tsx");







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
      of: _FileUpload_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FileUpload"
      }), " widget can be used to import data, images, certificates, etc. It depends on the use case whether a single file or multiple files can be uploaded.\nThe text and button in differ for a single or multiple files.\nUploading a new file replaces the existing one if only a single file is allowed.\nUploading a new file appends it to the existing list if multiple files are allowed for the field.\nWhen possible, the native upload dialog should restrict the file types that can be uploaded.\nFor example, when only images are allowed, the native upload dialog should only allow image files.\nWhen only a single file is allowed, the native upload dialog should allow one file only.\nDrag and drop uploading is supported. When the user drags a file on the drop area, the background changes.\nShowing a preview of file’s contents is currently out of scope, but may be introduced when needed.\nFor example, to show the image that is uploaded."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The properties the component receives are as follows:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "accept"
          }), ": It requires a string representing a list of file extensions separated\nby comma"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "multiple"
          }), ": If set to true, it allows the component to select more than one file"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "dragAndDropText"
          }), ": Optional property, meant to replace the label on top of the\nselection button"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "title"
          }), ": Required property, meant to add a title to the form field"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "fileList"
          }), ": List of files the component will contain as data"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "downloadFileLink"
          }), ": It will allow user to download uploaded file from provided\nlink"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onChange"
          }), ": On change callback will be run when the file selection happens and\nthe value of the input changes"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onDragEnter"
          }), ": Callback fired when a file is dragged and enters the drop zone of\nthe component"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onDragLeave"
          }), ": Callback fired when a file is dragged and leaves the drop zone of\nthe component"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onDragOver"
          }), ": Callback fired when a file is dragged over the drop zone of the\ncomponent"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onDrop"
          }), ": Callback fired when a file is dropped over the drop zone"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "error"
          }), ": Error state of the component, provided by the client form"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "onRequestedFileAction"
          }), ": Callback run every time a file item action button is\nclicked. It will contain info about the file item: name and action requested"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "exceedingMaxSizeErrorText"
          }), ": If set, it will override the default error text\nshown when a file exceeds the mac limit size"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "maxFileSizeInBytes"
          }), ": If given, the file selector will show an error for the\nfiles selected or dropped"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "selectButtonText"
          }), ": If given, it will override the default 'Select file' text on\nthe selection button"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "subText"
          }), ": Subtext to be displayed in case of an error or any other info that\naffects the entirety of the file selector"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "File Upload"
      }), " can be used as a simple file selector.\nIn this case, the component will receive all the state changes and progress of the files uploads from the client applications"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _FileUpload_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponent
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "example-that-uses-server-interaction-as-well",
      children: "Example that uses server interaction as well:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _FileUpload_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponentWithServerInteraction
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subheading */ .R2, {
        children: "useUploadFile hook"
      }), "A custom hook has been created in order to be used along\nside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FileUpload"
      }), " component, in order to perform the upload action with ease The hook will\nperform upload of each file from the fileList data array, provided they do not have a 'status'\nproperty set up yet"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The hook receives the following params:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "files"
            })
          }), ": list of of selected files for the file upload component"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "request"
            })
          }), ": an Object of type UploadFileRequestParams, which can contain:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "url"
            }), ": the api url the http request will be made to"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "headers"
            }), ": custom headers to be applied to the request"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "responseErrorPath"
            }), ": a path by which to look for the error text of a response"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "networkErrorText"
            }), ": in case a network error occurs, override the default error text"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "withCredentials"
            }), ": setup with credentials request header"]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
            children: "callbacks"
          }), ": an object of type: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "UseUploadFileCallback"
          }), " referencing two types of\ncallbacks that can be used to along side the hook actions, on different request moments:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: "onComplete: Will be called when the request has readyState status of 'DONE'."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: "onProgress: Will be called every time the on xhr progress event is fired"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The hook will return a list of updated files and a list of files for which the call is ongoing.\nEach of the updated file will contain a status value and sometimes an error text\nWhile performing the HTTP call, the hook will update the ongoing files status property with a value of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "uploading"
      }), "\nIt will also update the file to contain metrics of their upload progress."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["When the 'DONE' state of the HTTP call will be registered, the files will be updated to a status value corresponding to the network or server values.\nFor uploads completed successfully (status codes 200+), the status of a file will become ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "completed"
      }), ".\nFor network errors, the status will have the value ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "retry"
      }), "\nFor server errors, starting from status codes 400 and going over 500+, the status will be error;"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The hook performs XHR calls and the payload will be of type formData, with two fields: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "file"
      }), ", containing the file data\nand ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "name"
      }), ", containing the file name"]
    })]
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

/***/ "./stories/Form/Elements/FileUpload.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FileUploadComponent: () => (/* binding */ FileUpload_stories_FileUploadComponent),
  FileUploadComponentWithServerInteraction: () => (/* binding */ FileUploadComponentWithServerInteraction),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ FileUpload_stories)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileUpload.module.scss
var FileUpload_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileUpload.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileUpload.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FileUpload_module/* default */.A, options);




       /* harmony default export */ const FileUpload_FileUpload_module = (FileUpload_module/* default */.A && FileUpload_module/* default */.A.locals ? FileUpload_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileUpload.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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







const FileUploadComponent = (_ref, ref) => {
  let {
    name,
    accept,
    error,
    success,
    maxFileSizeInBytes,
    multiple,
    id,
    title,
    labeledBy,
    disabled = false,
    onChange,
    dragAndDropText = "Drag and drop or",
    selectButtonText = "Browse file",
    onDragOver,
    onDragLeave,
    wrapperProps,
    onDrop,
    subText,
    onRequestedFileAction,
    exceedingMaxSizeErrorText,
    fileList,
    downloadFileLink,
    isRequired = true,
    invalidDropErrorMessage = "Invalid file format. Supported formats are: $accept.",
    noMultipleFileDropErrorMessage = "You can upload only a single file.",
    ...rest
  } = _ref;
  const labelRef = (0,react.useRef)(null);
  const [dragActive, setDragActive] = (0,react.useState)(false);
  const [errorMsg, setErrorMsg] = (0,react.useState)("");
  const [inputError, setInputError] = (0,react.useState)(false);
  const icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.q)({
    success,
    error
  });
  let dropzoneClassNames = [FileUpload_FileUpload_module["file-dropzone"]];
  let dropzoneContainerClassNames = [FileUpload_FileUpload_module["upload-button-wrapper"]];
  let subTextClass = [FileUpload_FileUpload_module["file-selector-sub-text"]];
  let errorTextClass = [FileUpload_FileUpload_module["file-selector-sub-text"]];
  dragActive && dropzoneContainerClassNames.push(FileUpload_FileUpload_module["drag-active"]);
  const hasError = inputError || error || errorMsg;
  if (hasError) {
    const errorClass = FileUpload_FileUpload_module["error"];
    dropzoneClassNames.push(errorClass);
    subTextClass.push(errorClass);
    errorTextClass.push(errorClass);
  }
  disabled && dropzoneContainerClassNames.push(FileUpload_FileUpload_module["disabled"]);
  success && !error && dropzoneClassNames.push(FileUpload_FileUpload_module["success"]);
  const getFileList = files => {
    let savedFiles = fileList ? [...fileList] : [];
    const fileNames = fileList.map(el => el.name);
    (files === null || files === void 0 ? void 0 : files.length) && Array.from(files).forEach(el => {
      if (!fileNames.includes(el.name)) {
        savedFiles = multiple ? [...savedFiles, {
          ...validateUpload(el),
          data: el
        }] : [{
          ...validateUpload(el),
          data: el
        }];
      }
    });
    return savedFiles;
  };
  const onInputChange = e => {
    e.preventDefault();
    e.stopPropagation();
    let files = getFileList(e.target.files);
    const isFileValid = files.length && verifyExtensionValidity(files[files.length - 1]);
    if (isFileValid) {
      setErrorMsg("");
    }
    isFileValid && (onChange === null || onChange === void 0 ? void 0 : onChange(files));
  };
  const verifyExtensionValidity = file => {
    const extension = file.name.split(".").pop();
    return extension && accept.includes(extension);
  };
  const validateUpload = file => {
    const result = {
      name: file.name,
      size: file.size,
      type: file.type
    };
    let err = false;
    if (maxFileSizeInBytes && file.size && file.size >= maxFileSizeInBytes) {
      let sizeMessage;
      const isAtLeastOneMb = maxFileSizeInBytes >= 1024 * 1024;
      if (isAtLeastOneMb) {
        sizeMessage = "".concat((maxFileSizeInBytes / (1024 * 1024)).toFixed(2), "MB");
      } else {
        sizeMessage = "".concat((maxFileSizeInBytes / 1024).toFixed(2), "KB");
      }
      result.error = exceedingMaxSizeErrorText !== null && exceedingMaxSizeErrorText !== void 0 ? exceedingMaxSizeErrorText : "The maximum allowed file size is ".concat(sizeMessage, ". Upload a smaller file.");
      result.status = "error";
      err = true;
    }
    setInputError(err);
    return result;
  };
  (0,react.useEffect)(() => {
    if (fileList.length) {
      const validatedFiles = fileList.map(file => validateUpload(file));
      onChange === null || onChange === void 0 || onChange(validatedFiles);
    }
  }, []);
  const handleOnDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) {
      setDragActive(true);
    }
    onDragOver === null || onDragOver === void 0 || onDragOver(e);
  };
  const handleOnDragLeave = e => {
    var _target$offsetParent;
    e.preventDefault();
    e.stopPropagation();
    const target = e.target;
    if (target !== null && target !== void 0 && (_target$offsetParent = target.offsetParent) !== null && _target$offsetParent !== void 0 && _target$offsetParent.classList.contains(FileUpload_FileUpload_module["file-dropzone"])) {
      setDragActive(false);
    }
    onDragLeave === null || onDragLeave === void 0 || onDragLeave(e);
  };
  const handleOnDrop = e => {
    var _e$dataTransfer;
    e.preventDefault();
    e.stopPropagation();
    if (e !== null && e !== void 0 && (_e$dataTransfer = e.dataTransfer) !== null && _e$dataTransfer !== void 0 && _e$dataTransfer.files && e.dataTransfer.files.length) {
      var _e$dataTransfer2;
      const extension = e === null || e === void 0 || (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 || (_e$dataTransfer2 = _e$dataTransfer2.files[0]) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.name.split(".").pop();
      if (extension && accept && !accept.includes(extension)) {
        setErrorMsg(invalidDropErrorMessage.replace("$accept", accept));
        setDragActive(false);
        return;
      } else if (!multiple && e.dataTransfer.files.length > 1) {
        setErrorMsg(noMultipleFileDropErrorMessage);
        setDragActive(false);
        return;
      } else {
        setErrorMsg("");
      }
      const validatedFiles = getFileList(e.dataTransfer.files);
      onDrop ? onDrop === null || onDrop === void 0 ? void 0 : onDrop(validatedFiles) : onChange === null || onChange === void 0 ? void 0 : onChange(validatedFiles);
    }
    setDragActive(false);
  };
  return /*#__PURE__*/react.createElement("div", _extends({
    className: FileUpload_FileUpload_module["file-upload-wrapper"]
  }, wrapperProps), /*#__PURE__*/react.createElement("div", {
    className: FileUpload_FileUpload_module["dropzone-wrapper"]
  }, /*#__PURE__*/react.createElement("div", {
    className: dropzoneClassNames.join(" ")
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "body-bold",
    className: FileUpload_FileUpload_module["file-upload-title"],
    ref: labelRef
  }, title, " ", isRequired && /*#__PURE__*/react.createElement("span", {
    className: FileUpload_FileUpload_module["file-upload-title-mandatory"]
  }, "*")), (fileList === null || fileList === void 0 ? void 0 : fileList.length) > 0 && /*#__PURE__*/react.createElement("ul", {
    className: FileUpload_FileUpload_module["file-list"]
  }, fileList.map(_ref2 => {
    let {
      name,
      status,
      progress,
      error
    } = _ref2;
    return /*#__PURE__*/react.createElement("li", {
      key: name,
      className: status,
      id: name
    }, /*#__PURE__*/react.createElement(FileItem/* FileItem */.I3, {
      name: name,
      key: "".concat(name, "_").concat(status),
      status: status,
      progress: progress,
      error: error,
      downloadFileLink: downloadFileLink,
      onRequestedFileAction: onRequestedFileAction
    }));
  })), /*#__PURE__*/react.createElement("div", {
    className: dropzoneContainerClassNames.join(" "),
    onDragOver: e => !disabled && handleOnDragOver(e),
    onDragLeave: e => !disabled && handleOnDragLeave(e),
    onDrop: e => !disabled && handleOnDrop(e)
  }, /*#__PURE__*/react.createElement("div", {
    className: FileUpload_FileUpload_module["file-select"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "body",
    className: "drag-and-drop-text"
  }, dragAndDropText), /*#__PURE__*/react.createElement("div", {
    className: FileUpload_FileUpload_module["file-upload-btn"]
  }, /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: "outline",
    disabled: disabled
  }, selectButtonText, /*#__PURE__*/react.createElement("input", _extends({}, rest, {
    className: "".concat(FileUpload_FileUpload_module["upload-input"], " ").concat(rest.className),
    ref: ref,
    "aria-labelledby": labeledBy,
    type: "file",
    name: name,
    multiple: multiple,
    disabled: disabled,
    accept: accept,
    onChange: onInputChange,
    spellCheck: false
  })))), !disabled && icon, /*#__PURE__*/react.createElement("span", {
    className: FileUpload_FileUpload_module["outline"]
  })))), errorMsg && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "sub-text",
    className: errorTextClass.join(" ")
  }, errorMsg), subText && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "sub-text",
    className: subTextClass.join(" ")
  }, subText)));
};
const FileUpload = /*#__PURE__*/react.forwardRef(FileUploadComponent);
try {
    // @ts-ignore
    FileUpload.displayName = "FileUpload";
    // @ts-ignore
    FileUpload.__docgenInfo = { "description": "", "displayName": "FileUpload", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((e: FileType[]) => void)" } }, "onDragEnter": { "defaultValue": null, "description": "", "name": "onDragEnter", "required": false, "type": { "name": "DragEventHandler" } }, "onDragLeave": { "defaultValue": null, "description": "", "name": "onDragLeave", "required": false, "type": { "name": "DragEventHandler" } }, "onDragOver": { "defaultValue": null, "description": "", "name": "onDragOver", "required": false, "type": { "name": "DragEventHandler" } }, "onDrop": { "defaultValue": null, "description": "", "name": "onDrop", "required": false, "type": { "name": "((e: FileType[]) => void)" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "accept": { "defaultValue": null, "description": "", "name": "accept", "required": true, "type": { "name": "string" } }, "multiple": { "defaultValue": null, "description": "", "name": "multiple", "required": true, "type": { "name": "boolean" } }, "wrapperProps": { "defaultValue": null, "description": "", "name": "wrapperProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "fileList": { "defaultValue": null, "description": "", "name": "fileList", "required": true, "type": { "name": "FileType[]" } }, "exceedingMaxSizeErrorText": { "defaultValue": null, "description": "", "name": "exceedingMaxSizeErrorText", "required": false, "type": { "name": "string" } }, "maxFileSizeInBytes": { "defaultValue": null, "description": "", "name": "maxFileSizeInBytes", "required": false, "type": { "name": "number" } }, "selectButtonText": { "defaultValue": { value: "Browse file" }, "description": "", "name": "selectButtonText", "required": false, "type": { "name": "string" } }, "dragAndDropText": { "defaultValue": { value: "Drag and drop or" }, "description": "", "name": "dragAndDropText", "required": false, "type": { "name": "string" } }, "subText": { "defaultValue": null, "description": "", "name": "subText", "required": false, "type": { "name": "string" } }, "onRequestedFileAction": { "defaultValue": null, "description": "", "name": "onRequestedFileAction", "required": false, "type": { "name": "((action: FILE_ACTION, name: string) => void)" } }, "downloadFileLink": { "defaultValue": null, "description": "", "name": "downloadFileLink", "required": false, "type": { "name": "string" } }, "isRequired": { "defaultValue": { value: "true" }, "description": "", "name": "isRequired", "required": false, "type": { "name": "boolean" } }, "invalidDropErrorMessage": { "defaultValue": { value: "Invalid file format. Supported formats are: $accept." }, "description": "", "name": "invalidDropErrorMessage", "required": false, "type": { "name": "string" } }, "noMultipleFileDropErrorMessage": { "defaultValue": { value: "You can upload only a single file." }, "description": "", "name": "noMultipleFileDropErrorMessage", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FileUpload/FileUpload.tsx#FileUpload"] = { docgenInfo: FileUpload.__docgenInfo, name: "FileUpload", path: "src/components/Form/FileUpload/FileUpload.tsx#FileUpload" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("./src/components/Form/Form.tsx");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/hooks/useUploadFile.tsx
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



const useUploadFile = (files, request, callbacks) => {
  const {
    url,
    headers,
    withCredentials,
    networkErrorText,
    responseErrorPath
  } = request;
  const {
    onComplete,
    onProgress
  } = callbacks !== null && callbacks !== void 0 ? callbacks : {};
  const [uploadingFiles, setUploadingFiles] = (0,react.useState)([]);
  const [updatedFiles, setUpdatedFiles] = (0,react.useState)([...files]);
  const getUpdatedList = (fileName, fileStatus, progress, error) => {
    return files.map(file => {
      if (file.name === fileName) {
        file.progress = progress;
        file.error = error;
        file.status = fileStatus;
      }
      return {
        ...file
      };
    });
  };
  const recordProgress = (e, fileName) => {
    const progress = e.loaded / e.total * 100;
    const updatedData = getUpdatedList(fileName, "uploading", progress);
    setUpdatedFiles(updatedData);
    onProgress === null || onProgress === void 0 || onProgress(fileName, progress);
  };
  const getFileStatus = (requestStatus, responseText) => {
    let fileStatus = undefined;
    let error = "";
    const response = responseText && (0,helper/* isJsonString */.Eo)(responseText) && JSON.parse(responseText);
    if (requestStatus >= 200 && requestStatus < 400) {
      fileStatus = "completed";
    } else if (requestStatus === 0) {
      fileStatus = "retry";
      error = networkErrorText !== null && networkErrorText !== void 0 ? networkErrorText : "Network error. Check internet connection and retry uploading the file";
    } else if (requestStatus >= 400 && requestStatus < 500) {
      fileStatus = "error";
      error = responseErrorPath && response ? (0,helper/* getValueByPath */.Em)(response, responseErrorPath) : "Bad request";
    } else if (requestStatus >= 500) {
      fileStatus = "error";
      error = responseErrorPath && response ? (0,helper/* getValueByPath */.Em)(response, responseErrorPath) : "Server Error";
    }
    return {
      fileStatus,
      error
    };
  };
  const handleOnComplete = (xhr, fileName) => {
    const {
      status,
      readyState,
      responseText
    } = xhr;
    if (readyState === xhr.DONE) {
      const {
        fileStatus,
        error
      } = getFileStatus(status, responseText);
      const updatedList = getUpdatedList(fileName, fileStatus, undefined, error);
      setUpdatedFiles(updatedList);
      const response = {
        fileList: updatedList,
        status
      };
      setUploadingFiles(prevState => prevState.filter(selected => selected.name === fileName));
      onComplete === null || onComplete === void 0 || onComplete(response);
    }
  };
  const uploadFile = file => {
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", e => recordProgress(e, file.name));
    xhr.addEventListener("readystatechange", () => handleOnComplete(xhr, file.name));
    headers === null || headers === void 0 || headers.forEach((value, key) => xhr.setRequestHeader(key, value));
    withCredentials && (xhr.withCredentials = true);
    xhr.open("POST", url, true);
    const formData = new FormData();
    formData.append("file", file.data);
    formData.append("name", file.name);
    xhr.send(formData);
  };
  (0,react.useEffect)(() => {
    if (!url || !files.length) {
      return;
    }
    files.forEach(file => {
      if (!file.status && !uploadingFiles.find(selected => selected.name === file.name)) {
        setUploadingFiles(prevState => [...prevState, file]);
        uploadFile(file);
      }
    });
  }, [url, files]);
  return {
    updatedFiles,
    setUpdatedFiles,
    uploadingFiles
  };
};
// EXTERNAL MODULE: ./stories/Form/Elements/FileUpload.mdx
var Elements_FileUpload = __webpack_require__("./stories/Form/Elements/FileUpload.mdx");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
;// CONCATENATED MODULE: ./stories/Form/Elements/FileUpload.stories.tsx
function FileUpload_stories_extends() {
  return FileUpload_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, FileUpload_stories_extends.apply(null, arguments);
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









const meta = {
  title: "components/Inputs/FileUpload",
  component: FileUpload,
  parameters: {
    docs: {
      page: Elements_FileUpload["default"]
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
    },
    onRequestedFileAction: {
      control: "object"
    },
    onDragOver: {
      table: {
        disable: true
      }
    },
    onDragLeave: {
      table: {
        disable: true
      }
    },
    onDragEnter: {
      table: {
        disable: true
      }
    },
    onDrop: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};
/* harmony default export */ const FileUpload_stories = (meta);
const files = [];
const Template = args => {
  const [_, updateArgs] = (0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();
  const onChange = e => {
    setUpdatedFiles(e);
  };
  const {
    updatedFiles,
    setUpdatedFiles
  } = useUploadFile(args.fileList, {
    url: args.url,
    withCredentials: true,
    responseErrorPath: "message"
  });
  (0,react.useEffect)(() => {
    if ((0,helper/* areArraysDifferent */.GK)(args.fileList, updatedFiles, "status")) {
      updateArgs({
        ...args,
        fileList: updatedFiles
      });
    }
  }, [updatedFiles]);
  const updateFileList = (action, name) => {
    let fileList = [];
    switch (action) {
      case FileItem/* FILE_ACTION */.QS.RETRY:
        fileList = updatedFiles.map(file => {
          if (file.name === name) {
            delete file.status;
          }
          return file;
        });
        break;
      case FileItem/* FILE_ACTION */.QS.REMOVE:
      case FileItem/* FILE_ACTION */.QS.DELETE:
        fileList = updatedFiles.filter(file => file.name !== name);
        break;
      case FileItem/* FILE_ACTION */.QS.DOWNLOAD:
        fileList = updatedFiles;
        break;
      case FileItem/* FILE_ACTION */.QS.ABORT:
        fileList = updatedFiles.filter(file => file.name !== name);
        break;
    }
    setUpdatedFiles(fileList);
  };
  const onDrop = e => {
    setUpdatedFiles(e);
  };
  return /*#__PURE__*/react.createElement(Form/* Form */.l, {
    onSubmit: () => {}
  }, /*#__PURE__*/react.createElement(FileUpload, FileUpload_stories_extends({}, args, {
    fileList: updatedFiles,
    onChange: onChange,
    onDrop: onDrop,
    onRequestedFileAction: updateFileList
  })));
};
const FileUpload_stories_FileUploadComponent = Template.bind({});
FileUpload_stories_FileUploadComponent.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Drag and drop or",
  title: "Label",
  subText: "Caption",
  fileList: files,
  invalidDropErrorMessage: "Invalid file format. Supported formats are: $accept.",
  noMultipleFileDropErrorMessage: "You can upload only a single file.",
  downloadFileLink: "http://localhost:4000/download.link"
};
const FileUploadComponentWithServerInteraction = Template.bind({});
FileUploadComponentWithServerInteraction.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Drag and drop or",
  title: "Label",
  subText: "Caption",
  fileList: files,
  url: "http://localhost:4000/upload",
  invalidDropErrorMessage: "Invalid file format. Supported formats are: $accept.",
  noMultipleFileDropErrorMessage: "You can upload only a single file.",
  downloadFileLink: "http://localhost:4000/download.link"
};
FileUploadComponentWithServerInteraction.parameters = {
  mockAddonConfigs: {
    globalMockData: [],
    ignoreQueryParams: true,
    refreshStoryOnUpdate: true,
    disableUsingOriginal: false,
    disable: false
  },
  mockData: [{
    url: "http://localhost:4000/upload",
    method: "POST",
    status: 201,
    body: {},
    response: {
      message: "This is default response message."
    }
  }]
};
FileUpload_stories_FileUploadComponent.parameters = {
  ...FileUpload_stories_FileUploadComponent.parameters,
  docs: {
    ...FileUpload_stories_FileUploadComponent.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [_, updateArgs] = useArgs();\n  const onChange = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  const {\n    updatedFiles,\n    setUpdatedFiles\n  } = useUploadFile(args.fileList, {\n    url: args.url,\n    withCredentials: true,\n    responseErrorPath: \"message\"\n  });\n  useEffect(() => {\n    if (areArraysDifferent(args.fileList, updatedFiles, \"status\")) {\n      updateArgs({\n        ...args,\n        fileList: updatedFiles\n      });\n    }\n  }, [updatedFiles]);\n  const updateFileList = (action: FILE_ACTION, name: FileType[\"name\"]) => {\n    let fileList: any[] = [];\n    switch (action) {\n      case FILE_ACTION.RETRY:\n        fileList = updatedFiles.map(file => {\n          if (file.name === name) {\n            delete file.status;\n          }\n          return file;\n        });\n        break;\n      case FILE_ACTION.REMOVE:\n      case FILE_ACTION.DELETE:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n      case FILE_ACTION.DOWNLOAD:\n        fileList = updatedFiles;\n        break;\n      case FILE_ACTION.ABORT:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n    }\n    setUpdatedFiles(fileList);\n  };\n  const onDrop = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  return <Form onSubmit={() => {}}>\n      <FileUpload {...args} fileList={updatedFiles} onChange={onChange} onDrop={onDrop} onRequestedFileAction={updateFileList} />\n    </Form>;\n}",
      ...FileUpload_stories_FileUploadComponent.parameters?.docs?.source
    }
  }
};
FileUploadComponentWithServerInteraction.parameters = {
  ...FileUploadComponentWithServerInteraction.parameters,
  docs: {
    ...FileUploadComponentWithServerInteraction.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [_, updateArgs] = useArgs();\n  const onChange = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  const {\n    updatedFiles,\n    setUpdatedFiles\n  } = useUploadFile(args.fileList, {\n    url: args.url,\n    withCredentials: true,\n    responseErrorPath: \"message\"\n  });\n  useEffect(() => {\n    if (areArraysDifferent(args.fileList, updatedFiles, \"status\")) {\n      updateArgs({\n        ...args,\n        fileList: updatedFiles\n      });\n    }\n  }, [updatedFiles]);\n  const updateFileList = (action: FILE_ACTION, name: FileType[\"name\"]) => {\n    let fileList: any[] = [];\n    switch (action) {\n      case FILE_ACTION.RETRY:\n        fileList = updatedFiles.map(file => {\n          if (file.name === name) {\n            delete file.status;\n          }\n          return file;\n        });\n        break;\n      case FILE_ACTION.REMOVE:\n      case FILE_ACTION.DELETE:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n      case FILE_ACTION.DOWNLOAD:\n        fileList = updatedFiles;\n        break;\n      case FILE_ACTION.ABORT:\n        fileList = updatedFiles.filter(file => file.name !== name);\n        break;\n    }\n    setUpdatedFiles(fileList);\n  };\n  const onDrop = (e: FileType[]) => {\n    setUpdatedFiles(e);\n  };\n  return <Form onSubmit={() => {}}>\n      <FileUpload {...args} fileList={updatedFiles} onChange={onChange} onDrop={onDrop} onRequestedFileAction={updateFileList} />\n    </Form>;\n}",
      ...FileUploadComponentWithServerInteraction.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["FileUploadComponent","FileUploadComponentWithServerInteraction"];

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss
var Form_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Form.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Form_module/* default */.A, options);




       /* harmony default export */ const Form_Form_module = (Form_module/* default */.A && Form_module/* default */.A.locals ? Form_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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

/***/ "./src/hooks/useDetermineStatusIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ useDetermineStatusIcon)
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



const useDetermineStatusIcon = params => {
  const {
    error,
    success
  } = params || false;
  let icon = null;
  const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const successRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (error) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .I, {
      ref: errorRef,
      "data-icon-status": "error",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .F.Error
    });
  } else if (success) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .I, {
      ref: successRef,
      "data-icon-status": "success",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .F.CheckmarkCircleAlt
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: () => (/* binding */ getValueByPath),
/* harmony export */   Eo: () => (/* binding */ isJsonString),
/* harmony export */   GK: () => (/* binding */ areArraysDifferent),
/* harmony export */   J9: () => (/* binding */ filterProps),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   ir: () => (/* binding */ remToPx),
/* harmony export */   ni: () => (/* binding */ generateID)
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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

const generateID = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  let stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
const filterProps = function (props, regexPattern) {
  let returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce((acc, key) => {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(_ref => {
      let [key] = _ref;
      return !regexPattern.test(key);
    }).reduce((prevObj, currKeyValPair) => ({
      ...prevObj,
      [currKeyValPair[0]]: currKeyValPair[1]
    }), {});
  }
};
const debounce = (fn, delay) => {
  let timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
const throttle = (fn, delay) => {
  let lastTime = 0;
  return function () {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
const isEqual = (x, y) => {
  const typesCoincide = x && y && typeof x === "object" && typeof y === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => isEqual(x[key], y[key])) : x === y;
};
const areArraysDifferent = (arr1, arr2, key) => {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    const firstFilteredArray = arr1.filter(arr1Item => arr2.some(arr2Item => !isEqual(arr1Item[key], arr2Item[key])));
    const secondFilteredArray = arr2.filter(arr2Item => arr1.some(arr1Item => !isEqual(arr1Item[key], arr2Item[key])));
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
const getValueByPath = (obj, path) => {
  return path.split(".").reduce((res, prop) => {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
const remToPx = rem => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
const deepMerge = (obj1, obj2) => {
  if (!obj2) return obj1;
  let result = {
    ...obj1
  };
  for (let key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null && Object.prototype.hasOwnProperty.call(obj1, key) && !Array.isArray(obj2[key])) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
try {
    // @ts-ignore
    escapeRegExp.displayName = "escapeRegExp";
    // @ts-ignore
    escapeRegExp.__docgenInfo = { "description": "", "displayName": "escapeRegExp", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#escapeRegExp"] = { docgenInfo: escapeRegExp.__docgenInfo, name: "escapeRegExp", path: "src/util/helper.tsx#escapeRegExp" };
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileUpload.module.scss":
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
 */.FileUpload-module__sr-only--FHXiJ{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileUpload-module__hidden--oaezm{display:none}.FileUpload-module__slide-in--nwXxV{animation:FileUpload-module__slide-in--nwXxV .5s forwards}@media(prefers-reduced-motion: reduce){.FileUpload-module__slide-in--nwXxV{animation-duration:.1ms}}.FileUpload-module__slide-out--BesCa{animation:FileUpload-module__slide-out--BesCa .5s forwards}@media(prefers-reduced-motion: reduce){.FileUpload-module__slide-out--BesCa{animation-duration:.1ms}}@keyframes FileUpload-module__slide-in--nwXxV{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileUpload-module__slide-out--BesCa{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.FileUpload-module__file-upload-wrapper--wCmkU{display:flex;flex-direction:column}.FileUpload-module__file-dropzone--dmxsb{border-radius:var(--input-border-radius);background-color:var(--input-background-color);position:relative;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}.FileUpload-module__file-dropzone--dmxsb .FileUpload-module__file-upload-title--wy8cA{margin:0 0 .25rem 0;font-size:.875rem;font-weight:400}@media(prefers-reduced-motion: reduce){.FileUpload-module__file-dropzone--dmxsb{transition-duration:.1ms}}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH span[data-icon-status],.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH .FileUpload-module__file-upload-title--wy8cA{color:var(--error)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__error--RnBHH .FileUpload-module__file-select--u2rcf{border-color:var(--error)}.FileUpload-module__file-dropzone--dmxsb.FileUpload-module__success--hF8XD span[data-icon-status]{color:var(--success)}.FileUpload-module__file-dropzone--dmxsb .FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__disabled--IWesn{pointer-events:none}.FileUpload-module__file-dropzone--dmxsb .FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__disabled--IWesn p{color:var(--color-blue-grey400)}.FileUpload-module__file-dropzone--dmxsb span[data-icon-status]{font-size:1.25rem;position:absolute;top:auto;right:2rem}.FileUpload-module__file-dropzone--dmxsb .FileUpload-module__file-upload-title-mandatory--ol5do{color:var(--color-red500)}.FileUpload-module__upload-button-wrapper--X6ty5{background:var(--color-blue-grey25);padding:4px}.FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a{pointer-events:none;position:absolute;margin:0;padding:0;inset:0;border:var(--file-upload-border-width) var(--drag-drop-border-style) var(--color-blue-grey500);border-radius:var(--input-border-radius);background-color:var(--color-primary-light);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a{transition-duration:.1ms}}.FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__drag-active--sPSV6 .FileUpload-module__outline--MYU1a::before{content:"Drop here";text-align:center;display:block;color:var(--color-primary);padding-top:2rem}.FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__drag-active--sPSV6:hover .FileUpload-module__outline--MYU1a{background-color:var(--color-primary-light)}.FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__drag-active--sPSV6 .FileUpload-module__file-select--u2rcf{position:relative}.FileUpload-module__upload-button-wrapper--X6ty5.FileUpload-module__drag-active--sPSV6 .FileUpload-module__error--RnBHH .FileUpload-module__outline--MYU1a{border-color:var(--error)}.FileUpload-module__file-selector-sub-text--rESWn{color:var(--greyed-out)}.FileUpload-module__file-selector-sub-text--rESWn.FileUpload-module__error--RnBHH{color:var(--error);display:block}.FileUpload-module__file-select--u2rcf{display:flex;align-items:center;flex-direction:row;justify-content:center;border:var(--file-upload-border-width) var(--drag-drop-border-style) var(--color-blue-grey100);padding:1.25rem}.FileUpload-module__file-select--u2rcf [class*=file]{font-size:1.25rem;margin-left:.5rem}.FileUpload-module__file-select--u2rcf [class*=typography]{margin-bottom:0}.FileUpload-module__upload-input--x9lqZ{display:block;width:100%;border:none;text-transform:none;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;cursor:pointer}.FileUpload-module__upload-input--x9lqZ:focus{outline:none}.FileUpload-module__file-upload-btn--lEMGL{position:relative}.FileUpload-module__file-list--kS0Wy{list-style:none;padding:0;margin:.25rem 0}.FileUpload-module__file-list--kS0Wy li:not(:last-child){margin-bottom:.5rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `FileUpload-module__sr-only--FHXiJ`,
	"hidden": `FileUpload-module__hidden--oaezm`,
	"slide-in": `FileUpload-module__slide-in--nwXxV`,
	"slide-out": `FileUpload-module__slide-out--BesCa`,
	"file-upload-wrapper": `FileUpload-module__file-upload-wrapper--wCmkU`,
	"file-dropzone": `FileUpload-module__file-dropzone--dmxsb`,
	"file-upload-title": `FileUpload-module__file-upload-title--wy8cA`,
	"error": `FileUpload-module__error--RnBHH`,
	"file-select": `FileUpload-module__file-select--u2rcf`,
	"success": `FileUpload-module__success--hF8XD`,
	"upload-button-wrapper": `FileUpload-module__upload-button-wrapper--X6ty5`,
	"disabled": `FileUpload-module__disabled--IWesn`,
	"file-upload-title-mandatory": `FileUpload-module__file-upload-title-mandatory--ol5do`,
	"drag-active": `FileUpload-module__drag-active--sPSV6`,
	"outline": `FileUpload-module__outline--MYU1a`,
	"file-selector-sub-text": `FileUpload-module__file-selector-sub-text--rESWn`,
	"upload-input": `FileUpload-module__upload-input--x9lqZ`,
	"file-upload-btn": `FileUpload-module__file-upload-btn--lEMGL`,
	"file-list": `FileUpload-module__file-list--kS0Wy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss":
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
 */.Form-module__form--Nl9sb{font-family:var(--font-family)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": `Form-module__form--Nl9sb`
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