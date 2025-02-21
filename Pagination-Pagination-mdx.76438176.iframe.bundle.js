(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7250],{

/***/ "./stories/Pagination/Pagination.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Pagination/Pagination.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The pagination component makes the content readable by separating it into different chunks (read: pages). You, as a developer, are responsible for requesting the right content for the page that's active and for keeping track of the current page and page size."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["It has a few strings of text that can be translated. These are accessible through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "translate"
      }), " prop; English is the default language. Please see the props table for the object interface. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "itemsPerPageLabel"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "currentPageLabel"
      }), " are specifically for accessibility. Whenever the user tabs onto the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Select"
      }), " component for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "itemsPerPage"
      }), " or the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Input"
      }), " component for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "currentPage"
      }), ", their respective labels will be read by the screen reader."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h2, {
      id: "using-onpagechange-and-onpagesizechange-callbacks",
      children: ["Using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onPageChange"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onPageSizeChange"
      }), " callbacks"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The Pagination component provides two important callbacks:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onPageChange"
        }), " callback notifies you when the user changes the selected page. It receives one parameter, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "pageNo"
        }), ".\nThe page numbering starts at 1 to match typical human-friendly conventions."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onPageSizeChange"
        }), " callback handles changes in items per page. It triggers when the user selects a new page size.\nTo ensure proper display of items for the new page size, developers should also update the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "currentPage"
        }), " property of the Pagination component."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["An example component that's using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Pagination"
      }), " component is shown below:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [currentPage, setCurrentPage] = useState(1);\n  const [pageSize, setPageSize] = useState(10);\n\n  const onPageSizeChange = (pageSize: PageSize) => {\n    setPageSize(pageSize);\n    setCurrentPage(1);\n  };\n  const onPageChange = (pageNo: number) => {\n    setCurrentPage(pageNo);\n  };\n\n  <Pagination\n    currentPage={currentPage}\n    totalElements={totalElements}\n    pageSize={pageSize}\n    onPageChange={onPageChange}\n    onPageSizeChange={onPageSizeChange}\n    translate={{\n      totalItems: \"items in total\",\n      itemsPerPage: \"Items per page\",\n      itemsPerPageLabel: \"Select how many items per page you want to see.\",\n      currentPage: \"of %1 pages\",\n      currentPageLabel: \"What page you are currently on.\"\n    }}\n     />\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.Pagination
      })
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

/***/ "./stories/Pagination/Pagination.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pagination: () => (/* binding */ Pagination),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Pagination/Pagination.tsx");
/* harmony import */ var _Pagination_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Pagination/Pagination.mdx");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
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





const meta = {
  title: "components/Navigation/Pagination",
  component: _src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__/* .Pagination */ .d,
  parameters: {
    docs: {
      page: _Pagination_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.currentPage);
  const [pageSize, setPageSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.pageSize);
  const onPageSizeChange = pageSize => {
    setPageSize(pageSize);
    setCurrentPage(1);
  };
  const onPageChange = pageNo => {
    setCurrentPage(pageNo);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (args.currentPage !== currentPage) {
      setCurrentPage(args.currentPage);
    }
    if (args.pageSize !== pageSize) {
      setPageSize(args.pageSize);
    }
  }, [args.pageSize, args.currentPage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: "0 auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__/* .Pagination */ .d, _extends({}, args, {
    currentPage: currentPage,
    pageSize: pageSize,
    onPageSizeChange: onPageSizeChange,
    onPageChange: onPageChange
  })));
};
const Pagination = Template.bind({});
Pagination.play = async _ref => {
  let {
    canvasElement,
    args,
    step
  } = _ref;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(canvasElement);
  const waitForStoryToBeReady = async () => {
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText(args.translate.itemsPerPage)).toBeInTheDocument());
  };
  await step("Select items per page changes number of pages", async () => {
    await waitForStoryToBeReady();
    const pageSizeButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate.itemsPerPage
    });
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageSizeButton).toHaveTextContent("10"));
    (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
    await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(pageSizeButton);
    const itemPerPage25 = canvas.getByRole("option", {
      name: "25"
    });
    await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(itemPerPage25);
    (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageSizeButton).toHaveTextContent("25");
    (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText(args.translate.currentPage.replace("%1", "10"))).toBeInTheDocument();
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
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(firstPageButton).toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(prevPageButton).toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(nextPageButton).not.toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(lastPageButton).not.toBeDisabled();
      } else if (forPage === "lastPage") {
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(firstPageButton).not.toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(prevPageButton).not.toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(nextPageButton).toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(lastPageButton).toBeDisabled();
      } else {
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(firstPageButton).not.toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(prevPageButton).not.toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(nextPageButton).not.toBeDisabled();
        (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(lastPageButton).not.toBeDisabled();
      }
    };
    const selectItemsPerPage = async size => {
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(pageSizeButton);
      const selectedSize = canvas.getByRole("option", {
        name: size
      });
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(selectedSize);
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageSizeButton).toHaveTextContent(size));
    };
    await step("Select first page by changing page size", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("10");
      expectPageNavigationButtonAvailability("firstPage");
    });
    await step("Select first page by changing page size and then select last page using select component", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("50");
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageNoButton).toHaveTextContent("1"));
      expectPageNavigationButtonAvailability("firstPage");
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(pageNoButton);
      const pageNo5 = canvas.getByRole("option", {
        name: "5"
      });
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(pageNo5);
      expectPageNavigationButtonAvailability("lastPage");
    });
    await step("Select page one by one", async () => {
      await waitForStoryToBeReady();
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(pageSizeButton);
      const itemPerPage50 = canvas.getByRole("option", {
        name: "50"
      });
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(itemPerPage50);
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageSizeButton).toHaveTextContent("50"));
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageNoButton).toHaveTextContent("1"));
      expectPageNavigationButtonAvailability("firstPage");
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(nextPageButton);
      expectPageNavigationButtonAvailability("lastPage");
    });
    await step("Select last page using select component (using search option)", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("10");
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(pageNoButton);
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)((0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .getByRole */ .gy)(pageNoButton.parentElement, "textbox")).toBeInTheDocument());
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.tab();
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.getByRole("option", {
        name: "25"
      })).toBeInTheDocument());
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.keyboard("25");
      const page25 = canvas.getByRole("option", {
        name: "25"
      });
      await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(page25);
      await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(pageNoButton).toHaveTextContent("25"));
      (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
      expectPageNavigationButtonAvailability("lastPage");
    });
  });
};
Pagination.args = {
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
Pagination.parameters = {
  ...Pagination.parameters,
  docs: {
    ...Pagination.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  const [pageSize, setPageSize] = useState(args.pageSize);\n  const onPageSizeChange = (pageSize: PageSize) => {\n    setPageSize(pageSize);\n    setCurrentPage(1);\n  };\n  const onPageChange = (pageNo: number) => {\n    setCurrentPage(pageNo);\n  };\n  useEffect(() => {\n    if (args.currentPage !== currentPage) {\n      setCurrentPage(args.currentPage);\n    }\n    if (args.pageSize !== pageSize) {\n      setPageSize(args.pageSize);\n    }\n  }, [args.pageSize, args.currentPage]);\n  return <div style={{\n    margin: \"0 auto\"\n  }}>\n      <PaginationComponent {...args} currentPage={currentPage} pageSize={pageSize} onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} />\n    </div>;\n}",
      ...Pagination.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Pagination"];

/***/ }),

/***/ "./node_modules/@storybook/test/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/test/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/components/Button/BaseButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ BaseButton)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseButton_module/* default */.A, options);




       /* harmony default export */ const Button_BaseButton_module = (BaseButton_module/* default */.A && BaseButton_module/* default */.A.locals ? BaseButton_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Spinner.tsx
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


const ButtonSpinner = props => /*#__PURE__*/react.createElement("svg", _extends({}, props, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/react.createElement("path", {
  d: "M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8323 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.2918 23.4127C6.49076 22.8275 4.85378 21.8243 3.51472 20.4853C2.17565 19.1462 1.17251 17.5092 0.587322 15.7082C0.00212849 13.9072 -0.148504 11.9932 0.14774 10.1228C0.443984 8.25238 1.17869 6.47863 2.2918 4.94658L3.91307 6.1245C2.98585 7.4007 2.37384 8.87823 2.12707 10.4363C1.8803 11.9943 2.00577 13.5887 2.49324 15.0889C2.9807 16.5892 3.81632 17.9528 4.93176 19.0682C6.0472 20.1837 7.4108 21.0193 8.91107 21.5068C10.4113 21.9942 12.0057 22.1197 13.5637 21.8729C15.1218 21.6262 16.5993 21.0141 17.8755 20.0869C19.1517 19.1597 20.1903 17.9436 20.9065 16.5381C21.6227 15.1326 21.996 13.5775 21.996 12H24Z",
  fill: "#5D607E"
}));
try {
    // @ts-ignore
    ButtonSpinner.displayName = "ButtonSpinner";
    // @ts-ignore
    ButtonSpinner.__docgenInfo = { "description": "", "displayName": "ButtonSpinner", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Spinner.tsx#ButtonSpinner"] = { docgenInfo: ButtonSpinner.__docgenInfo, name: "ButtonSpinner", path: "src/components/Button/Spinner.tsx#ButtonSpinner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.tsx
function BaseButton_extends() {
  return BaseButton_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, BaseButton_extends.apply(null, arguments);
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




const BaseButtonComponent = (_ref, ref) => {
  let {
    children,
    type = "button",
    className,
    loading,
    disabled,
    hidden,
    ...rest
  } = _ref;
  const validTypes = ["submit", "button", "reset"];
  const isDisabled = disabled !== null && disabled !== void 0 ? disabled : loading;
  if (!validTypes.includes(type)) throw new Error("You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ".concat(type));
  const buttonClasses = [Button_BaseButton_module.button];
  loading && buttonClasses.push(Button_BaseButton_module.loading);
  className && buttonClasses.push(className);
  return /*#__PURE__*/react.createElement("button", BaseButton_extends({}, rest, {
    disabled: isDisabled,
    ref: ref,
    type: type,
    hidden: hidden,
    className: hidden ? "" : buttonClasses.join(" ")
  }), loading ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Button_BaseButton_module["content-hidden"]
  }, children), /*#__PURE__*/react.createElement(ButtonSpinner, {
    className: Button_BaseButton_module["spinner"]
  })) : children);
};
const BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"submit\"" }, { "value": "\"reset\"" }] } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }, { "value": "\"success\"" }, { "value": "\"warning\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Label/Label.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss
var Label_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Label_module/* default */.A, options);




       /* harmony default export */ const Label_Label_module = (Label_module/* default */.A && Label_module/* default */.A.locals ? Label_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Label/Label.tsx
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




const LabelComponent = (_ref, ref) => {
  let {
    children,
    className,
    hidden = false,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("label", _extends({}, rest, {
    ref: ref,
    className: "".concat(hidden ? readyclasses_module/* default */.A["sr-only"] : "", " ").concat(Label_Label_module["label"], " ").concat(className !== null && className !== void 0 ? className : "")
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

/***/ "./src/components/Form/Select/SingleSelect/Option.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/helper.tsx");
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




const OptionComponent = (_ref, ref) => {
  let {
    id,
    children,
    className,
    isSelected = false,
    disableDefaultSelectedStyle,
    shouldClick,
    hasFocus,
    selectOpened,
    isSearching,
    childIndex,
    onOptionSelect,
    onFocusChange,
    disabled,
    value,
    isAddBtnFocused,
    ...rest
  } = _ref;
  const defaultOptionId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_util_helper__WEBPACK_IMPORTED_MODULE_2__/* .generateID */ .ni)(20));
  const optionId = id !== null && id !== void 0 ? id : defaultOptionId.current;
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const additionalClasses = [];
  className && additionalClasses.push(className);
  isSelected && !disableDefaultSelectedStyle && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["selected-option"]);
  disabled && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["disabled"]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching && !isAddBtnFocused) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);
  const onSelectHandler = () => onOptionSelect === null || onOptionSelect === void 0 ? void 0 : onOptionSelect(innerOptionRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({}, rest, {
    id: optionId,
    ref: innerOptionRef,
    "data-value": value,
    className: additionalClasses.join(" "),
    onClick: onSelectHandler,
    onKeyDown: event => {
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
const Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(OptionComponent);
try {
    // @ts-ignore
    Option.displayName = "Option";
    // @ts-ignore
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "disableDefaultSelectedStyle": { "defaultValue": null, "description": "", "name": "disableDefaultSelectedStyle", "required": false, "type": { "name": "boolean" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/SingleSelect/Select.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select)
});

// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.module.scss
var Select_module = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/hooks/useClickOutside.ts
var useClickOutside = __webpack_require__("./src/hooks/useClickOutside.ts");
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/Select.interfaces.ts
var Select_interfaces = __webpack_require__("./src/components/Form/Select/Select.interfaces.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/useSelectPositionList.ts
var useSelectPositionList = __webpack_require__("./src/components/Form/Select/useSelectPositionList.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/useAddNewBtn.tsx + 1 modules
var useAddNewBtn = __webpack_require__("./src/components/Form/Select/useAddNewBtn.tsx");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/useSearch.tsx
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



/** @scope .*/
const useSearch = _ref => {
  var _search$renderThresho, _search$searchInputPr4;
  let {
    search,
    optionsCount,
    searchInputClassName,
    expanded,
    setFocusedSelectItem
  } = _ref;
  const [filter, setFilter] = (0,react.useState)("");
  const [isSearching, setIsSearching] = (0,react.useState)(false);
  const DEFAULT_RENDER_THRESHOLD = 10;
  const searchInputRef = (0,react.useRef)(null);
  const threshold = (_search$renderThresho = search === null || search === void 0 ? void 0 : search.renderThreshold) !== null && _search$renderThresho !== void 0 ? _search$renderThresho : DEFAULT_RENDER_THRESHOLD;
  const hasEnoughChildren = optionsCount >= threshold;
  const filterResults = event => {
    setFilter(event.currentTarget.value);
  };
  const shouldRenderSearch = () => {
    if (search !== null && search !== void 0 && search.enabled) {
      return hasEnoughChildren;
    }
    if (search) {
      return search.enabled;
    }
    return optionsCount > DEFAULT_RENDER_THRESHOLD;
  };
  const renderSearch = () => {
    var _search$searchInputPr, _search$searchInputPr2;
    return /*#__PURE__*/react.createElement(Input/* Input */.p, _extends({}, (_search$searchInputPr = search === null || search === void 0 ? void 0 : search.searchInputProps) !== null && _search$searchInputPr !== void 0 ? _search$searchInputPr : {}, {
      ref: searchInputRef,
      onFocus: () => setIsSearching(true),
      onBlur: () => setIsSearching(false),
      onChange: filterResults,
      className: searchInputClassName,
      wrapperProps: {
        className: search === null || search === void 0 || (_search$searchInputPr2 = search.searchInputProps) === null || _search$searchInputPr2 === void 0 || (_search$searchInputPr2 = _search$searchInputPr2.wrapperProps) === null || _search$searchInputPr2 === void 0 ? void 0 : _search$searchInputPr2.className
      },
      style: {
        display: expanded ? "block" : "none"
      },
      type: "text",
      name: "search-option",
      placeholder: search !== null && search !== void 0 && search.searchPlaceholder ? search === null || search === void 0 ? void 0 : search.searchPlaceholder : "Search item"
    }));
  };
  const resetSearchState = () => {
    setFilter("");
    setIsSearching(false);
    setFocusedSelectItem(-1);
  };
  const visible = shouldRenderSearch();
  (0,react.useEffect)(() => {
    var _search$searchInputPr3;
    (search === null || search === void 0 || (_search$searchInputPr3 = search.searchInputProps) === null || _search$searchInputPr3 === void 0 ? void 0 : _search$searchInputPr3.reset) && resetSearchState();
  }, [search === null || search === void 0 || (_search$searchInputPr4 = search.searchInputProps) === null || _search$searchInputPr4 === void 0 ? void 0 : _search$searchInputPr4.reset]);
  (0,react.useEffect)(() => {
    const searchDeactivated = !visible && !isSearching; /*solves issue in MultiSelect when we filtered result and selected result causes list to be shorter than threshold so still we have a filter applied but can't change it due to `visible` variable has false  */
    if (searchDeactivated) {
      resetSearchState();
    }
  }, [isSearching, visible]);
  return {
    renderSearch,
    setIsSearching,
    searchVisible: visible,
    searchThreshold: threshold,
    searchInputRef,
    filter,
    isSearching
  };
};
try {
    // @ts-ignore
    useSearch.displayName = "useSearch";
    // @ts-ignore
    useSearch.__docgenInfo = { "description": "", "displayName": "useSearch", "props": { "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "optionsCount": { "defaultValue": null, "description": "", "name": "optionsCount", "required": true, "type": { "name": "number" } }, "searchInputClassName": { "defaultValue": null, "description": "", "name": "searchInputClassName", "required": true, "type": { "name": "string" } }, "expanded": { "defaultValue": null, "description": "", "name": "expanded", "required": true, "type": { "name": "boolean" } }, "setFocusedSelectItem": { "defaultValue": null, "description": "", "name": "setFocusedSelectItem", "required": true, "type": { "name": "(idx: number) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/useSearch.tsx#useSearch"] = { docgenInfo: useSearch.__docgenInfo, name: "useSearch", path: "src/components/Form/Select/SingleSelect/useSearch.tsx#useSearch" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/useArrowNavigation.ts
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

/** @scope .*/
const useArrowNavigation = _ref => {
  let {
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold,
    isReadOnlyView
  } = _ref;
  const onArrowNavigation = event => {
    const codesToPreventDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space", "Escape", "End", "Home"];
    const codesToPreventDefaultWhenSearching = ["ArrowDown", "ArrowUp", "Enter", "Escape", "MetaLeft", "MetaRight"];
    const isAddBtnFocused = (addBtnRef === null || addBtnRef === void 0 ? void 0 : addBtnRef.current) === document.activeElement;
    if (isReadOnlyView) {
      return;
    }
    if (expanded) {
      codesToPreventDefault.push("Tab");
    }
    if (addBtnRef) {
      codesToPreventDefaultWhenSearching.push("Tab");
    }
    if (codesToPreventDefault.includes(event.code) && !event.metaKey && !isSearching) {
      event.preventDefault();
    }
    if (isSearching && codesToPreventDefaultWhenSearching.includes(event.code)) {
      event.preventDefault();
    }
    if (isSearching) {
      switch (event.code) {
        case "ArrowDown":
        case "Enter":
          setIsSearching(false);
          setFocusedSelectItem(0);
          return;
        case "ArrowUp":
          setIsSearching(false);
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "Escape":
          setIsSearching(false);
          setExpanded(false);
          return;
        case "Tab":
          if (addBtnRef !== null && addBtnRef !== void 0 && addBtnRef.current) {
            addBtnRef.current.focus();
            return;
          }
          setIsSearching(false);
          setExpanded(false);
      }
    } else {
      switch (event.code) {
        case "ArrowDown":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          setFocusedSelectItem(prevState => {
            return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
          });
          return;
        case "ArrowUp":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(childrenCount - 1);
            return;
          }
          setFocusedSelectItem(prevState => {
            return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
          });
          return;
        case "Space":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          onOptionChangeHandler(event.target);
          setShouldClick(true);
          setExpanded(false);
          return;
        case "Enter":
        case "Home":
          setFocusedSelectItem(0);
          return;
        case "Tab":
          if (childrenCount >= renderThreshold && expanded && !isAddBtnFocused) {
            var _searchInputRef$curre;
            setIsSearching(true);
            (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 || _searchInputRef$curre.focus();
            return;
          } else if (addBtnRef !== null && addBtnRef !== void 0 && addBtnRef.current && expanded && !isAddBtnFocused) {
            addBtnRef.current.focus();
            return;
          }
          setExpanded(false);
          return;
        case "Escape":
          if (expanded) {
            setExpanded(false);
          }
          return;
        case "End":
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "ArrowLeft":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(0);
          }
          return;
        case "ArrowRight":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(childrenCount - 1);
          }
          return;
      }
    }
  };
  return {
    onArrowNavigation
  };
};
// EXTERNAL MODULE: ./src/components/withReadOnly.tsx
var withReadOnly = __webpack_require__("./src/components/withReadOnly.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx
function Select_extends() {
  return Select_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Select_extends.apply(null, arguments);
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














const SelectComponent = (_ref, ref) => {
  let {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    selectButtonProps,
    className,
    error = false,
    success = false,
    value,
    clearLabel = "Clear selection",
    noResultsLabel = "No results found",
    onChange,
    addNew,
    search,
    isReadOnlyView,
    ...rest
  } = _ref;
  const [expanded, setExpanded] = (0,react.useState)(false);
  const [display, setDisplay] = (0,react.useState)("");
  const containerReference = (0,react.useRef)(null);
  const optionListReference = (0,react.useRef)(null);
  const [focusedSelectItem, setFocusedSelectItem] = (0,react.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react.useState)(false);
  /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = (0,react.useState)(false);
  const optionsCount = react.Children.count(children);
  const {
    filter,
    isSearching,
    renderSearch,
    searchInputRef,
    setIsSearching,
    searchThreshold,
    searchVisible
  } = useSearch({
    expanded,
    search,
    searchInputClassName: Select_module/* default */.A["select-search"],
    optionsCount,
    setFocusedSelectItem
  });
  const {
    addBtnRef,
    addNewBtnOptionsContainerClassName,
    renderAddNew
  } = (0,useAddNewBtn/* useAddNewBtn */.X)({
    addNew,
    filter,
    focusedSelectItem,
    optionsCount,
    searchInputRef
  });
  const nativeSelect = ref || /*#__PURE__*/(0,react.createRef)();
  const onOptionChangeHandler = optionElement => {
    if (nativeSelect.current && optionElement) {
      nativeSelect.current.value = optionElement.getAttribute("data-value");
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    setExpanded(false);
  };
  const customSelectButtonRef = (0,react.useRef)(null);
  const {
    onArrowNavigation
  } = useArrowNavigation({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount: optionsCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold: searchThreshold,
    isReadOnlyView: isReadOnlyView || !!rest["data-readonlyview"]
  });
  const {
    listPosition,
    opacity,
    optionsListMaxHeight,
    setListPosition,
    setOpacity
  } = (0,useSelectPositionList/* useSelectPositionList */.V)({
    expanded,
    optionListReference,
    containerReference,
    addBtnRef
  });
  const syncDisplayValue = val => {
    react.Children.forEach(children, child => {
      if (child.props.value === val) {
        setDisplay(child.props.children);
      }
    });
  };

  /**
   * @description We have to modify the children (Option component) to have an additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    if (isSearching || filter !== "") {
      const filteredChildren = react.Children.toArray(children).filter(child => child.props.children.toLowerCase().match(filter.toLowerCase()) !== null);
      const internalChildren = _internalRenderChildren(filteredChildren);
      if (internalChildren.length === 0) {
        return /*#__PURE__*/react.createElement("li", {
          className: Select_module/* default */.A["no-results"]
        }, noResultsLabel);
      }
      return _internalRenderChildren(filteredChildren);
    }
    return _internalRenderChildren(children);
    function _internalRenderChildren(internalChildren) {
      return react.Children.map(internalChildren, (child, index) => {
        return /*#__PURE__*/react.cloneElement(child, {
          onFocusChange: childIndex => {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: optionRef => {
            onOptionChangeHandler(optionRef.current);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick,
          isAddBtnFocused: addBtnRef.current === document.activeElement
        });
      });
    }
  };
  const renderChevronIcon = () => {
    return expanded ? /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      className: Select_module/* default */.A["chevron-icon"],
      icon: Icon/* Icons */.F.ChevronUp
    }) : /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      className: Select_module/* default */.A["chevron-icon"],
      icon: Icon/* Icons */.F.ChevronDown
    });
  };
  const icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.q)({
    success,
    error
  });
  const nativeOnChangeHandler = event => {
    onChange === null || onChange === void 0 || onChange(event);
  };
  (0,react.useEffect)(() => {
    if (expanded) {
      setFocusedSelectItem(0);
      setShouldFocusButtonAfterClose(true);
    }
    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      customSelectButtonRef.current.focus();
      setShouldFocusButtonAfterClose(false);
    }
  }, [expanded, customSelectButtonRef.current, shouldFocusButtonAfterClose]);
  (0,react.useEffect)(() => {
    syncDisplayValue(value);
  }, [value]);
  const myElementRef = (0,react.useRef)(null);
  (0,useClickOutside/* useClickOutside */.L)(myElementRef, () => {
    if (!expanded) {
      return;
    }
    setExpanded(false);
    setListPosition(Select_interfaces/* Position */.y.Below);
    setOpacity(0);
  }, [expanded]);
  const additionalClasses = [];
  expanded && additionalClasses.push(Select_module/* default */.A.expanded);
  error && additionalClasses.push(Select_module/* default */.A.error);
  disabled && additionalClasses.push(Select_module/* default */.A.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(Select_module/* default */.A.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react.createElement("div", {
    ref: myElementRef
  }, /*#__PURE__*/react.createElement("select", Select_extends({}, (0,helper/* filterProps */.J9)(rest, /^data-/, false), {
    tabIndex: -1,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: readyclasses_module/* default */.A["sr-only"]
  }), /*#__PURE__*/react.createElement("option", {
    value: ""
  }), react.Children.map(children, child => /*#__PURE__*/react.createElement("option", {
    value: child.props.value
  }))), /*#__PURE__*/react.createElement("div", Select_extends({}, (0,helper/* filterProps */.J9)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(Select_module/* default */.A.select, " ").concat(additionalClasses.join(" "))
  }), searchVisible && renderSearch(), /*#__PURE__*/react.createElement("button", Select_extends({}, selectButtonProps, {
    onClick: () => {
      setExpanded(isReadOnlyView || rest["data-readonlyview"] ? false : !expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(Select_module/* default */.A["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: expanded && searchVisible ? "none" : "block"
    },
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-invalid": error,
    "aria-expanded": expanded,
    "aria-haspopup": "listbox",
    "aria-labelledby": labeledBy,
    "aria-describedby": describedBy
  }), /*#__PURE__*/react.createElement("div", {
    "data-display": true,
    className: Select_module/* default */.A["selected"]
  }, !value && placeholder && /*#__PURE__*/react.createElement("span", {
    className: Select_module/* default */.A["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react.createElement("span", {
    "data-display-inner": true
  }, display)), /*#__PURE__*/react.createElement("div", {
    className: Select_module/* default */.A["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react.createElement("div", {
    className: "list-wrapper-container"
  }, /*#__PURE__*/react.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(Select_module/* default */.A["list-wrapper"]),
    style: {
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight.wrapper,
      pointerEvents: expanded ? "auto" : "none",
      bottom: listPosition === Select_interfaces/* Position */.y.Above ? "2.85rem" : "initial",
      marginTop: "4px"
    }
  }, /*#__PURE__*/react.createElement("ul", {
    className: addNewBtnOptionsContainerClassName,
    role: "listbox",
    style: {
      maxHeight: optionsListMaxHeight.list
    }
  }, renderOptions()), renderAddNew()))));
};
const Select = (0,withReadOnly/* withReadOnly */.R)( /*#__PURE__*/react.forwardRef(SelectComponent));
try {
    // @ts-ignore
    Select.displayName = "Select";
    // @ts-ignore
    Select.__docgenInfo = { "description": "", "displayName": "Select", "props": { "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "readOnlyView": { "defaultValue": null, "description": "", "name": "readOnlyView", "required": false, "type": { "name": "boolean" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "selectButtonProps": { "defaultValue": null, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; } & FormElement)" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } }, "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "AddNewProps" } }, "isReadOnlyView": { "defaultValue": null, "description": "", "name": "isReadOnlyView", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Select.tsx#Select"] = { docgenInfo: Select.__docgenInfo, name: "Select", path: "src/components/Form/Select/SingleSelect/Select.tsx#Select" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Pagination/Pagination.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ Pagination)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss
var Pagination_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss");
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Pagination_module/* default */.A, options);




       /* harmony default export */ const Pagination_Pagination_module = (Pagination_module/* default */.A && Pagination_module/* default */.A.locals ? Pagination_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx + 2 modules
var Select = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
// EXTERNAL MODULE: ./src/components/Form/Label/Label.tsx + 1 modules
var Label = __webpack_require__("./src/components/Form/Label/Label.tsx");
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.tsx
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









var DefaultTranslations = /*#__PURE__*/function (DefaultTranslations) {
  DefaultTranslations["totalItems"] = "items in total";
  DefaultTranslations["itemsPerPage"] = "Items per page";
  DefaultTranslations["currentPage"] = "of %1 pages";
  DefaultTranslations["itemsPerPageLabel"] = "Select how many items per page you want to see.";
  DefaultTranslations["currentPageLabel"] = "What page you are currently on.";
  return DefaultTranslations;
}(DefaultTranslations || {});
const PaginationComponent = (_ref, ref) => {
  let {
    totalElements,
    pageSize = 10,
    translate = DefaultTranslations,
    currentPage,
    className,
    onPageChange,
    onPageSizeChange,
    ...rest
  } = _ref;
  const calculateAmountOfPages = () => {
    if (!totalElements) return 1;
    if (Math.ceil(totalElements / pageSize) < 1) {
      return 1;
    }
    return Math.ceil(totalElements / pageSize);
  };
  const pagesAmount = calculateAmountOfPages();
  const [resetPageNoSelect, setResetPageNoSelect] = (0,react.useState)(false);
  const onPageSizeChangeHandler = event => {
    const pageSizeNumber = Number(event.target.value);
    setResetPageNoSelect(true);
    onPageSizeChange(pageSizeNumber);
  };
  const onPageChangeHandler = pageToGoTo => {
    onPageChange(pageToGoTo);
  };
  (0,react.useEffect)(() => {
    resetPageNoSelect && setResetPageNoSelect(false);
  }, [resetPageNoSelect]);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(Pagination_Pagination_module["pagination-wrapper"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["left"]
  }, pageSize && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["per-page"]
  }, /*#__PURE__*/react.createElement(Label/* Label */.J, {
    id: "page-size-select-label",
    htmlFor: "page-size-select",
    className: Pagination_Pagination_module["label"]
  }, translate.itemsPerPage), /*#__PURE__*/react.createElement(Select/* Select */.l, {
    name: "page-size-select",
    id: "page-size-select",
    labeledBy: "page-size-select-label",
    className: "".concat(Pagination_Pagination_module["form-element"], " ").concat(Pagination_Pagination_module["page-size-select"]),
    value: pageSize.toString(),
    onChange: onPageSizeChangeHandler
  }, /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "10"
  }, "10"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "25"
  }, "25"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "50"
  }, "50"))), totalElements && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["total"]
  }, /*#__PURE__*/react.createElement("span", {
    tabIndex: 0
  }, totalElements, "\xA0", translate.totalItems))), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["pagination"]
  }, /*#__PURE__*/react.createElement(react.Fragment, null, totalElements && !!pagesAmount && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["page"]
  }, /*#__PURE__*/react.createElement(Label/* Label */.J, {
    id: "current-value-input-label",
    htmlFor: "current-value-input",
    className: "".concat(readyclasses_module/* default */.A["sr-only"], " ").concat(Pagination_Pagination_module["current-value-select-label"])
  }, translate.currentPageLabel), /*#__PURE__*/react.createElement(Select/* Select */.l, {
    labeledBy: "current-value-input-label",
    key: "input",
    id: "current-value-input",
    size: currentPage.toString().length,
    onChange: e => onPageChangeHandler(Number(e.target.value)),
    name: "current-value-input",
    value: currentPage.toString(),
    className: "".concat(Pagination_Pagination_module["form-element"], " ").concat(Pagination_Pagination_module["current-page-select"]),
    search: {
      enabled: true,
      searchInputProps: {
        wrapperProps: {
          className: Pagination_Pagination_module["search-input-wrapper"]
        },
        reset: resetPageNoSelect ? resetPageNoSelect : undefined,
        autoComplete: "off"
      }
    }
  }, Array.from(Array(pagesAmount).keys()).map(page => /*#__PURE__*/react.createElement(Option/* Option */.c, {
    key: page,
    value: (page + 1).toString()
  }, (page + 1).toString()))), /*#__PURE__*/react.createElement("span", {
    className: Pagination_Pagination_module["page-total"]
  }, translate.currentPage.replace("%1", Math.ceil(totalElements / pageSize).toString()))), !!currentPage && /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["previous"]
  }, /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    disabled: currentPage <= 1,
    title: "first",
    onClick: () => onPageChangeHandler(1),
    "data-paginate": "first"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.NavigationFirst
  })), /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    disabled: currentPage <= 1,
    title: "previous",
    onClick: () => onPageChangeHandler(currentPage - 1),
    "data-paginate": "previous"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ChevronLeft
  }))), /*#__PURE__*/react.createElement("div", {
    className: Pagination_Pagination_module["next"]
  }, (currentPage !== undefined || false) && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    disabled: currentPage >= pagesAmount,
    title: "next",
    onClick: () => onPageChangeHandler(currentPage + 1),
    "data-paginate": "next"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ChevronRight
  })), !!(currentPage && totalElements) && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    disabled: currentPage >= pagesAmount,
    title: "last",
    onClick: () => onPageChangeHandler(Math.ceil(totalElements / pageSize)),
    "data-paginate": "last"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.NavigationLast
  }))))));
};
const Pagination = /*#__PURE__*/react.forwardRef(PaginationComponent);
try {
    // @ts-ignore
    Pagination.displayName = "Pagination";
    // @ts-ignore
    Pagination.__docgenInfo = { "description": "", "displayName": "Pagination", "props": { "translate": { "defaultValue": null, "description": "", "name": "translate", "required": false, "type": { "name": "PaginationTranslations" } }, "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "totalElements": { "defaultValue": null, "description": "", "name": "totalElements", "required": false, "type": { "name": "number" } }, "pageSize": { "defaultValue": { value: "10" }, "description": "", "name": "pageSize", "required": false, "type": { "name": "enum", "value": [{ "value": "10" }, { "value": "25" }, { "value": "50" }] } }, "onPageChange": { "defaultValue": null, "description": "", "name": "onPageChange", "required": true, "type": { "name": "(pageToGoTo: number) => void" } }, "onPageSizeChange": { "defaultValue": null, "description": "", "name": "onPageSizeChange", "required": true, "type": { "name": "(pageSize: PageSize) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"] = { docgenInfo: Pagination.__docgenInfo, name: "Pagination", path: "src/components/Pagination/Pagination.tsx#Pagination" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.BaseButton-module__button--q6T9A{position:relative}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.5rem .75rem;min-height:2.5rem;cursor:pointer;font-family:var(--font-family);transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed;background-color:var(--disabled);border-color:var(--disabled)}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `BaseButton-module__sr-only--pIoQP`,
	"hidden": `BaseButton-module__hidden--YXbft`,
	"slide-in": `BaseButton-module__slide-in--f4Qq6`,
	"slide-out": `BaseButton-module__slide-out--QlyO7`,
	"button": `BaseButton-module__button--q6T9A`,
	"content-hidden": `BaseButton-module__content-hidden--QNxtO`,
	"spinner": `BaseButton-module__spinner--sHeyQ`,
	"spin": `BaseButton-module__spin--KXAHp`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Label/Label.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 */.Label-module__label--jg1cj{cursor:text;color:var(--greyed-out);font-size:var(--font-size)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"label": `Label-module__label--jg1cj`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 */.Pagination-module__pagination-wrapper--rXCDG{font-family:var(--font-family);font-size:var(--font-size-data-grid);line-height:var(--data-grid-line-height);color:var(--greyed-out);display:flex;flex-direction:column;justify-content:space-between}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__left--TsLD0{display:flex}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM{height:2.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM .Pagination-module__search-input-wrapper--jwTaM{width:2.75rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__form-element--cfBoM button{min-height:2.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_{flex:1 0 auto;display:flex;align-items:center;justify-content:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_ span{color:var(--color-blue-grey500)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6{flex:1 0 auto;display:flex;align-items:center;justify-content:center;margin-top:1rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg{display:flex;align-items:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__previous--DsV1r button span:before,.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6 .Pagination-module__next--sD4Yg button span:before{font-size:.75rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C{display:none;align-items:center}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C label{font-size:var(--font-size-data-grid);line-height:var(--data-grid-line-height);font-weight:500;color:var(--color-blue-grey900)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C+.Pagination-module__total--jFLJ_{padding-left:.9375rem;border-left:1px solid var(--color-blue-grey100)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page--G5Zd_{display:flex;align-items:center;flex-basis:min-content;padding-right:1rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-total--WTVfR{display:inline-block;margin-left:.5rem;white-space:nowrap;font-weight:500;color:var(--color-blue-grey900)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page--G5Zd_+.Pagination-module__previous--DsV1r{padding-left:.9375rem;border-left:1px solid var(--color-blue-grey100)}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2{margin:0 .25rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button{min-width:3.75rem;padding:0}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button div[data-display]{left:.5rem}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__page-size-select--NOhp2 button div:not([data-display]){right:.5rem}.Pagination-module__current-page-select--hbMG6 button{min-width:3.75rem;padding:0}.Pagination-module__current-page-select--hbMG6 button div[data-display]{left:.5rem}.Pagination-module__current-page-select--hbMG6 button div:not([data-display]){right:.5rem}@media screen and (min-width: 30em){.Pagination-module__pagination-wrapper--rXCDG{flex-direction:row}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__total--jFLJ_{justify-content:flex-start}.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__pagination--D8WW6{margin-top:0;justify-content:flex-end}}@media screen and (min-width: 48em){.Pagination-module__pagination-wrapper--rXCDG .Pagination-module__per-page--KEN2C{display:flex;margin-right:1rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pagination-wrapper": `Pagination-module__pagination-wrapper--rXCDG`,
	"left": `Pagination-module__left--TsLD0`,
	"form-element": `Pagination-module__form-element--cfBoM`,
	"search-input-wrapper": `Pagination-module__search-input-wrapper--jwTaM`,
	"total": `Pagination-module__total--jFLJ_`,
	"pagination": `Pagination-module__pagination--D8WW6`,
	"previous": `Pagination-module__previous--DsV1r`,
	"next": `Pagination-module__next--sD4Yg`,
	"per-page": `Pagination-module__per-page--KEN2C`,
	"page": `Pagination-module__page--G5Zd_`,
	"page-total": `Pagination-module__page-total--WTVfR`,
	"page-size-select": `Pagination-module__page-size-select--NOhp2`,
	"current-page-select": `Pagination-module__current-page-select--hbMG6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {

"use strict";


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