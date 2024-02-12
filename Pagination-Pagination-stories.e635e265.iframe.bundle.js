"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4066],{

/***/ "./stories/Pagination/Pagination.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pagination: () => (/* binding */ Pagination_stories_Pagination),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Pagination_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Pagination/Pagination.tsx + 1 modules
var Pagination = __webpack_require__("./src/components/Pagination/Pagination.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Pagination/Pagination.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    ul: "ul",
    li: "li",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pagination component makes the content readable by separating it into different chunks (read: pages). You, as a developer, are responsible for requesting the right content for the page that's active and for keeping track of the current page and page size."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It has a few strings of text that can be translated. These are accessible through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "translate"
      }), " prop; English is the default language. Please see the props table for the object interface. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "itemsPerPageLabel"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currentPageLabel"
      }), " are specifically for accessibility. Whenever the user tabs onto the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "itemsPerPage"
      }), " or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input"
      }), " component for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currentPage"
      }), ", their respective labels will be read by the screen reader."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "using-onpagechange-and-onpagesizechange-callbacks",
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onPageChange"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onPageSizeChange"
      }), " callbacks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Pagination component provides two important callbacks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onPageChange"
        }), " callback notifies you when the user changes the selected page. It receives one parameter, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pageNo"
        }), ".\nThe page numbering starts at 1 to match typical human-friendly conventions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onPageSizeChange"
        }), " callback handles changes in items per page. It triggers when the user selects a new page size.\nTo ensure proper display of items for the new page size, developers should also update the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "currentPage"
        }), " property of the Pagination component."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An example component that's using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pagination"
      }), " component is shown below:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [currentPage, setCurrentPage] = useState(1);\n  const [pageSize, setPageSize] = useState(10);\n\n  const onPageSizeChange = (pageSize: PageSize) => {\n    setPageSize(pageSize);\n    setCurrentPage(1);\n  };\n  const onPageChange = (pageNo: number) => {\n    setCurrentPage(pageNo);\n  };\n\n  <Pagination\n    currentPage={currentPage}\n    totalElements={totalElements}\n    pageSize={pageSize}\n    onPageChange={onPageChange}\n    onPageSizeChange={onPageSizeChange}\n    translate={{\n      totalItems: \"items in total\",\n      itemsPerPage: \"Items per page\",\n      itemsPerPageLabel: \"Select how many items per page you want to see.\",\n      currentPage: \"of %1 pages\",\n      currentPageLabel: \"What page you are currently on.\"\n    }}\n     />\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Pagination_stories_Pagination
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
/* harmony default export */ const Pagination_Pagination = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Pagination/Pagination.stories.tsx
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






const meta = {
  title: "components/Navigation/Pagination",
  component: Pagination/* Pagination */.t,
  parameters: {
    docs: {
      page: Pagination_Pagination
    }
  },
  argTypes: {
    translate: {
      control: {
        type: "object"
      }
    },
    pageSize: {
      options: ["10", "25", "50"],
      control: {
        type: "radio"
      }
    }
  }
};
/* harmony default export */ const Pagination_stories = (meta);
const Template = args => {
  const [currentPage, setCurrentPage] = (0,react.useState)(args.currentPage);
  const [pageSize, setPageSize] = (0,react.useState)(args.pageSize);
  const onPageSizeChange = pageSize => {
    setPageSize(pageSize);
    setCurrentPage(1);
  };
  const onPageChange = pageNo => {
    setCurrentPage(pageNo);
  };
  (0,react.useEffect)(() => {
    if (args.currentPage !== currentPage) {
      setCurrentPage(args.currentPage);
    }
    if (args.pageSize !== pageSize) {
      setPageSize(args.pageSize);
    }
  }, [args.pageSize, args.currentPage]);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      margin: "0 auto"
    }
  }, /*#__PURE__*/react.createElement(Pagination/* Pagination */.t, _extends({}, args, {
    currentPage: currentPage,
    pageSize: pageSize,
    onPageSizeChange: onPageSizeChange,
    onPageChange: onPageChange
  })));
};
const Pagination_stories_Pagination = Template.bind({});
Pagination_stories_Pagination.play = async _ref => {
  let {
    canvasElement,
    args,
    step
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  const waitForStoryToBeReady = async () => {
    await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.itemsPerPage)).toBeInTheDocument());
  };
  await step("Select items per page changes number of pages", async () => {
    await waitForStoryToBeReady();
    const pageSizeButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate.itemsPerPage
    });
    await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent("10"));
    (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
    await testing_library_dist/* userEvent */.mV.click(pageSizeButton);
    const itemPerPage25 = canvas.getByRole("option", {
      name: "25"
    });
    await testing_library_dist/* userEvent */.mV.click(itemPerPage25);
    (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent("25");
    (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "10"))).toBeInTheDocument();
  });
  await step("Select pages", async () => {
    const pageSizeButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate.itemsPerPage
    });
    const pageNoButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate.currentPageLabel
    });
    const firstPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "first"
    });
    const prevPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "previous"
    });
    const nextPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "next"
    });
    const lastPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "last"
    });
    const expectPageNavigationButtonAvailability = forPage => {
      if (forPage === "firstPage") {
        (0,jest_dist/* expect */.l)(firstPageButton).toBeDisabled();
        (0,jest_dist/* expect */.l)(prevPageButton).toBeDisabled();
        (0,jest_dist/* expect */.l)(nextPageButton).not.toBeDisabled();
        (0,jest_dist/* expect */.l)(lastPageButton).not.toBeDisabled();
      } else if (forPage === "lastPage") {
        (0,jest_dist/* expect */.l)(firstPageButton).not.toBeDisabled();
        (0,jest_dist/* expect */.l)(prevPageButton).not.toBeDisabled();
        (0,jest_dist/* expect */.l)(nextPageButton).toBeDisabled();
        (0,jest_dist/* expect */.l)(lastPageButton).toBeDisabled();
      } else {
        (0,jest_dist/* expect */.l)(firstPageButton).not.toBeDisabled();
        (0,jest_dist/* expect */.l)(prevPageButton).not.toBeDisabled();
        (0,jest_dist/* expect */.l)(nextPageButton).not.toBeDisabled();
        (0,jest_dist/* expect */.l)(lastPageButton).not.toBeDisabled();
      }
    };
    const selectItemsPerPage = async size => {
      await testing_library_dist/* userEvent */.mV.click(pageSizeButton);
      const selectedSize = canvas.getByRole("option", {
        name: size
      });
      await testing_library_dist/* userEvent */.mV.click(selectedSize);
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent(size));
    };
    await step("Select first page by changing page size", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("10");
      expectPageNavigationButtonAvailability("firstPage");
    });
    await step("Select first page by changing page size and then select last page using select component", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("50");
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(pageNoButton).toHaveTextContent("1"));
      expectPageNavigationButtonAvailability("firstPage");
      await testing_library_dist/* userEvent */.mV.click(pageNoButton);
      const pageNo5 = canvas.getByRole("option", {
        name: "5"
      });
      await testing_library_dist/* userEvent */.mV.click(pageNo5);
      expectPageNavigationButtonAvailability("lastPage");
    });
    await step("Select page one by one", async () => {
      await waitForStoryToBeReady();
      await testing_library_dist/* userEvent */.mV.click(pageSizeButton);
      const itemPerPage50 = canvas.getByRole("option", {
        name: "50"
      });
      await testing_library_dist/* userEvent */.mV.click(itemPerPage50);
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent("50"));
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(pageNoButton).toHaveTextContent("1"));
      expectPageNavigationButtonAvailability("firstPage");
      await testing_library_dist/* userEvent */.mV.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await testing_library_dist/* userEvent */.mV.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await testing_library_dist/* userEvent */.mV.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await testing_library_dist/* userEvent */.mV.click(nextPageButton);
      expectPageNavigationButtonAvailability("lastPage");
    });
    await step("Select last page using select component (using search option)", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("10");
      await testing_library_dist/* userEvent */.mV.click(pageNoButton);
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)((0,testing_library_dist/* getByRole */.YA)(pageNoButton.parentElement, "textbox")).toBeInTheDocument());
      await testing_library_dist/* userEvent */.mV.tab();
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.getByRole("option", {
        name: "25"
      })).toBeInTheDocument());
      await testing_library_dist/* userEvent */.mV.keyboard("25");
      const page25 = canvas.getByRole("option", {
        name: "25"
      });
      await testing_library_dist/* userEvent */.mV.click(page25);
      await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(pageNoButton).toHaveTextContent("25"));
      (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
      expectPageNavigationButtonAvailability("lastPage");
    });
  });
};
Pagination_stories_Pagination.args = {
  currentPage: 1,
  pageSize: "10",
  totalElements: 250,
  translate: {
    totalItems: "items in total",
    itemsPerPage: "Items per page",
    itemsPerPageLabel: "Select how many items per page you want to see.",
    currentPage: "of %1 pages",
    currentPageLabel: "What page you are currently on."
  }
};
Pagination_stories_Pagination.parameters = {
  ...Pagination_stories_Pagination.parameters,
  docs: {
    ...Pagination_stories_Pagination.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  const [pageSize, setPageSize] = useState(args.pageSize);\n  const onPageSizeChange = (pageSize: PageSize) => {\n    setPageSize(pageSize);\n    setCurrentPage(1);\n  };\n  const onPageChange = (pageNo: number) => {\n    setCurrentPage(pageNo);\n  };\n  useEffect(() => {\n    if (args.currentPage !== currentPage) {\n      setCurrentPage(args.currentPage);\n    }\n    if (args.pageSize !== pageSize) {\n      setPageSize(args.pageSize);\n    }\n  }, [args.pageSize, args.currentPage]);\n  return <div style={{\n    margin: \"0 auto\"\n  }}>\n      <PaginationComponent {...args} currentPage={currentPage} pageSize={pageSize} onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} />\n    </div>;\n}",
      ...Pagination_stories_Pagination.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Pagination"];

/***/ }),

/***/ "./src/components/Form/Label/Label.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ Label)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss
var Label_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Label_module/* default */.Z, options);




       /* harmony default export */ const Label_Label_module = (Label_module/* default */.Z && Label_module/* default */.Z.locals ? Label_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.tsx
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




const LabelComponent = (_ref, ref) => {
  let {
    children,
    className,
    hidden = false,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("label", _extends({}, rest, {
    ref: ref,
    className: "".concat(hidden ? readyclasses_module/* default */.Z["sr-only"] : "", " ").concat(Label_Label_module["label"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
const Label = /*#__PURE__*/react.forwardRef(LabelComponent);
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

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: () => (/* binding */ filterProps),
/* harmony export */   MU: () => (/* binding */ getValueByPath),
/* harmony export */   Pb: () => (/* binding */ isJsonString),
/* harmony export */   R3: () => (/* binding */ areArraysDifferent),
/* harmony export */   cv: () => (/* binding */ remToPx),
/* harmony export */   y: () => (/* binding */ generateID)
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss":
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
 */.Label-module__label--jg1cj{cursor:text;color:var(--greyed-out);font-size:var(--font-size)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"label": `Label-module__label--jg1cj`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);