"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1961],{

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
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
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
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      story: dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
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
  component: FileItem/* FileItem */.I3,
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
  return /*#__PURE__*/react.createElement(FileItem/* FileItem */.I3, args);
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

/***/ })

}]);