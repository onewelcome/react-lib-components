(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7599],{

/***/ "./stories/Form/Elements/MultiSelect.mdx":
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
/* harmony import */ var _MultiSelect_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Elements/MultiSelect.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _MultiSelect_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component does ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "not"
      }), " use the native HTML ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "select"
      }), " element under the hood. Because of the design, we had to opt for a different variant. However, it still works as a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "select"
      }), " is intended to work."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This also means that not all native ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "select"
      }), " HTML attributes are available."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Other than that, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component works as you would expect. It requires you to specify options by providing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiOption"
      }), " components that accept a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "value"
      }), " prop. This ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "value"
      }), " prop will be passed to the parent ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component. Whenever you click on an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiOption"
      }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onChange"
      }), " event will be fired on the parent ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We automatically display a search ' Input ' field when you have a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component. You don't need to do anything about this. In order to change the placeholder, you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "searchPlaceholder"
      }), " prop on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component.\nTo turn off search pass ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "search"
      }), " prop object with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "enabled"
      }), " property set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "false"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "search-feature",
      children: "Search feature"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Search feature is enabled by default in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["See ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "?path=/docs/components-inputs-raw-select--docs#search-feature",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Select"
        }), " components"]
      }), " for more information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "add-new-feature",
      children: "Add new feature"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["See ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "?path=/docs/components-inputs-raw-select--docs#add-new-feature",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Select"
        }), " components"]
      }), " for more information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "preselected-unremovable-options",
      children: "Preselected (unremovable) options"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Selected options are shown as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "?path=/docs/components-feedback-tag--docs",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Tag"
        }), " components"]
      }), ". To deselect option just click on remove button inside tag with the value you want to deselect.\nThe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "fixed"
      }), " prop of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiOption"
      }), " among with preselecting that option let you show selected option that can not be deselected. This can be used to show user that some options are preselected for chosen flow."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "keyboard-navigation",
      children: "Keyboard navigation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component supports keyboard navigation and was prepared to speed up selecting of options."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["To enter dropdown list press ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Enter"
        }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Space"
        }), ";"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["To navigate over list use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Arrow Up"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Arrow Down"
        }), ",", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Home"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "End"
        }), ";"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "To search (if enabled) just type your query when dropdown list is expanded;"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["To select press ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Enter"
        }), ";"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["To close press ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Escape"
        }), ";"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["To remove selected options use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Tab"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Enter"
        }), ";"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["An example of how a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelect"
      }), " component can be built using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useMultiSelect"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [allOptions, setAllOptions] = useState<string[]>([\n    \"Option 1\",\n    \"Option 2\",\n    \"Option 3\",\n    \"Option 4\"\n  ]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\"]);\n\n  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n\n  return (\n    <MultiSelect\n      value={pickedOptions}\n      onChange={handleOptionChange}\n      search={{ enabled: false }}\n    >\n      {optionElements}\n    </MultiSelect>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _MultiSelect_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectDefault
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectComponent"
      }), " with the add new button and search enabled:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n\n  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({\n    initialOptions,\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n\n  return (\n    <MultiSelect\n      value={pickedOptions}\n      onChange={handleOptionChange}\n      addNew={{ label: \"Create new\", onAddNew, btnProps: { title: \"Add new select option\" } }}\n      search={{\n        enabled: true,\n        searchPlaceholder: \"Search or add new option (Enter)\"\n      }}\n    >\n      {optionElements}\n    </MultiSelect>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _MultiSelect_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectWithAddNewAndSearch
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectComponent"
      }), " used as an editable list"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>(items);\n\n  const { handleOptionChange, onAddNew } = useMultiSelect({\n    pickedOptions,\n    setPickedOptions\n  });\n\n  return (\n    <MultiSelect\n      value={pickedOptions}\n      onChange={handleOptionChange}\n      addNew={{\n        label: \"Create new\",\n        onAddNew,\n        btnProps: { title: \"Add new list item\" }\n      }}\n      search={{\n        enabled: true,\n        searchPlaceholder: \"Add new list item (Enter)\"\n      }}\n    >\n      {pickedOptions.map(option => (\n        <MultiOption key={option} value={option}>\n          {option}\n        </MultiOption>\n      ))}\n    </MultiSelect>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _MultiSelect_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectAsEditableList
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h2, {
      id: "onchange-property-of-multiselectcomponent",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onChange"
      }), " property of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectComponent"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["if we click an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiOption"
      }), " we receive the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "event"
      }), " object as a parameter in our function, which has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "target"
      }), " prop, which has a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "options"
      }), " prop. This ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "options"
      }), " is an array contains all selected options from which you can filter out all selected values. You can see this if you go to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/story/components-feedback-tag--enabled-tag",
        children: "the Canvas tab"
      }), " and then click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Actions"
      }), " tab next to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Controls"
      }), ". If you do not see this, press the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "a"
      }), " key on your keyboard. Then while on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Actions"
      }), " tab, select an option from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Select"
      }), " component in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Canvas"
      }), " and you'll see that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onChange"
      }), " function was fired. The very first object (index ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "0"
      }), ") is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "event"
      }), " object we send you. The second object we give you is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "React instance"
      }), " of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Option"
      }), " component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This option should be preferrably handled automatically using handler function returned by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useMultiSelect"
      }), "."]
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

/***/ "./stories/Form/Elements/MultiSelect.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSelectAsEditableList: () => (/* binding */ MultiSelectAsEditableList),
/* harmony export */   MultiSelectClosesWhenAnotherMultiSelectClicked: () => (/* binding */ MultiSelectClosesWhenAnotherMultiSelectClicked),
/* harmony export */   MultiSelectDefault: () => (/* binding */ MultiSelectDefault),
/* harmony export */   MultiSelectExpandUpwards: () => (/* binding */ MultiSelectExpandUpwards),
/* harmony export */   MultiSelectInReadOnlyMode: () => (/* binding */ MultiSelectInReadOnlyMode),
/* harmony export */   MultiSelectWithAddNew: () => (/* binding */ MultiSelectWithAddNew),
/* harmony export */   MultiSelectWithAddNewAndSearch: () => (/* binding */ MultiSelectWithAddNewAndSearch),
/* harmony export */   MultiSelectWithoutSearch: () => (/* binding */ MultiSelectWithoutSearch),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiSelect.tsx");
/* harmony import */ var _MultiSelect_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Elements/MultiSelect.mdx");
/* harmony import */ var _storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.storybook/conditionalPlay.ts");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Form/Select/MultiSelect/useMultiSelect.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiOption.tsx");
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







const playExpand = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_2__/* .conditionalPlay */ .h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(canvasElement);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
});
const meta = {
  title: "components/Inputs/Raw/MultiSelect",
  component: _src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K,
  parameters: {
    docs: {
      page: _MultiSelect_mdx__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
  },
  argTypes: {
    labeledBy: {
      table: {
        disable: true
      },
      control: false
    },
    describedBy: {
      table: {
        disable: true
      },
      control: false
    },
    className: {
      table: {
        disable: true
      },
      control: false
    },
    disabled: {
      control: "boolean"
    },
    success: {
      control: "boolean"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Option 1", "Option 2", "Option 3", "Option 4"]);
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Option 1", "Option 2"]);
  const {
    handleOptionChange,
    onAddNew,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_5__/* .useMultiSelect */ .L)({
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: args.stickToBottom ? {
      position: "absolute",
      bottom: 8,
      left: 8,
      right: 8
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K, {
    value: pickedOptions,
    onChange: handleOptionChange,
    search: args.search
  }, optionElements), !args.stickToBottom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: "7rem"
    }
  }) : undefined);
};
const MultiSelectDefault = Template.bind({});
MultiSelectDefault.storyName = "Multi Select";
const MultiSelectWithoutSearch = Template.bind({});
MultiSelectWithoutSearch.args = {
  search: {
    enabled: false
  }
};
MultiSelectWithoutSearch.play = playExpand;
const MultiSelectExpandUpwards = Template.bind({});
MultiSelectExpandUpwards.args = {
  stickToBottom: true
};
MultiSelectExpandUpwards.play = playExpand;
const TemplateWithAddNew = args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Option 1", "Option 2"]);
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialOptions);
  const {
    handleOptionChange,
    onAddNew,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_5__/* .useMultiSelect */ .L)({
    initialOptions,
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions,
    onAddNew: args.onAddNew
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K, {
    value: pickedOptions,
    onChange: handleOptionChange,
    addNew: {
      label: "Create new",
      onAddNew,
      btnProps: {
        title: "Add new select option"
      }
    },
    search: {
      enabled: args.searchEnabled,
      searchPlaceholder: args.searchPlaceholder
    }
  }, optionElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: "7rem"
    }
  }));
};
const MultiSelectWithAddNew = TemplateWithAddNew.bind({});
MultiSelectWithAddNew.args = {
  searchEnabled: false,
  onAddNew: newOption => alert(`Triggered onAddNew("${newOption}")`)
};
MultiSelectWithAddNew.play = playExpand;
const MultiSelectWithAddNewAndSearch = TemplateWithAddNew.bind({});
MultiSelectWithAddNewAndSearch.args = {
  searchPlaceholder: "Search or add new option (Enter)",
  searchEnabled: true
};
MultiSelectWithAddNewAndSearch.play = playExpand;
const MultiSelectAsEditableList = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items);
  const {
    handleOptionChange,
    onAddNew,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_5__/* .useMultiSelect */ .L)({
    pickedOptions,
    setPickedOptions
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K, {
    value: pickedOptions,
    onChange: handleOptionChange,
    addNew: {
      label: "Create new",
      onAddNew,
      btnProps: {
        title: "Add new list item"
      }
    },
    search: {
      enabled: true,
      searchPlaceholder: "Add new list item (Enter)"
    }
  }, optionElements);
}).bind({});
MultiSelectAsEditableList.play = playExpand;
const MultiSelectInReadOnlyMode = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items);
  const {
    handleOptionChange,
    onAddNew,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_5__/* .useMultiSelect */ .L)({
    pickedOptions,
    setPickedOptions
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K, {
    value: pickedOptions,
    onChange: handleOptionChange,
    readOnlyView: true,
    addNew: {
      label: "Create new",
      onAddNew,
      btnProps: {
        title: "Add new list item"
      }
    },
    search: {
      enabled: true,
      searchPlaceholder: "Add new list item (Enter)"
    }
  }, optionElements);
}).bind({});
MultiSelectInReadOnlyMode.storyName = "Multi Select Component In Read-only Mode";
const MultiSelectClosesWhenAnotherMultiSelectClicked = (() => {
  const generateOptions = options => Array.from({
    length: options
  }, (_, index) => {
    const option = `Option ${index}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_6__/* .MultiOption */ .n, {
      key: option,
      value: option
    }, option);
  });
  const options1 = generateOptions(3);
  const options2 = generateOptions(3);
  const Box = _ref2 => {
    let {
      children
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        width: "18rem",
        display: "inline-block"
      }
    }, children);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K, {
    value: ["Option 1"],
    children: options1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiSelect__WEBPACK_IMPORTED_MODULE_3__/* .MultiSelect */ .K, {
    value: ["Option 1"],
    children: options2
  })));
}).bind({});
MultiSelectDefault.parameters = {
  ...MultiSelectDefault.parameters,
  docs: {
    ...MultiSelectDefault.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [allOptions, setAllOptions] = useState<string[]>([\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\", \"Option 2\"]);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n  return <div style={args.stickToBottom ? {\n    position: \"absolute\",\n    bottom: 8,\n    left: 8,\n    right: 8\n  } : {}}>\n      <MultiSelect value={pickedOptions} onChange={handleOptionChange} search={args.search}>\n        {optionElements}\n      </MultiSelect>\n      {!args.stickToBottom ? <div style={{\n      height: \"7rem\"\n    }}></div> : undefined}\n    </div>;\n}",
      ...MultiSelectDefault.parameters?.docs?.source
    }
  }
};
MultiSelectWithoutSearch.parameters = {
  ...MultiSelectWithoutSearch.parameters,
  docs: {
    ...MultiSelectWithoutSearch.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [allOptions, setAllOptions] = useState<string[]>([\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\", \"Option 2\"]);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n  return <div style={args.stickToBottom ? {\n    position: \"absolute\",\n    bottom: 8,\n    left: 8,\n    right: 8\n  } : {}}>\n      <MultiSelect value={pickedOptions} onChange={handleOptionChange} search={args.search}>\n        {optionElements}\n      </MultiSelect>\n      {!args.stickToBottom ? <div style={{\n      height: \"7rem\"\n    }}></div> : undefined}\n    </div>;\n}",
      ...MultiSelectWithoutSearch.parameters?.docs?.source
    }
  }
};
MultiSelectExpandUpwards.parameters = {
  ...MultiSelectExpandUpwards.parameters,
  docs: {
    ...MultiSelectExpandUpwards.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [allOptions, setAllOptions] = useState<string[]>([\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\", \"Option 2\"]);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n  return <div style={args.stickToBottom ? {\n    position: \"absolute\",\n    bottom: 8,\n    left: 8,\n    right: 8\n  } : {}}>\n      <MultiSelect value={pickedOptions} onChange={handleOptionChange} search={args.search}>\n        {optionElements}\n      </MultiSelect>\n      {!args.stickToBottom ? <div style={{\n      height: \"7rem\"\n    }}></div> : undefined}\n    </div>;\n}",
      ...MultiSelectExpandUpwards.parameters?.docs?.source
    }
  }
};
MultiSelectWithAddNew.parameters = {
  ...MultiSelectWithAddNew.parameters,
  docs: {
    ...MultiSelectWithAddNew.parameters?.docs,
    source: {
      originalSource: "args => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\", \"Option 2\"]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    initialOptions,\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions,\n    onAddNew: args.onAddNew\n  });\n  return <div>\n      <MultiSelect value={pickedOptions} onChange={handleOptionChange} addNew={{\n      label: \"Create new\",\n      onAddNew,\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }} search={{\n      enabled: args.searchEnabled,\n      searchPlaceholder: args.searchPlaceholder\n    }}>\n        {optionElements}\n      </MultiSelect>\n      <div style={{\n      height: \"7rem\"\n    }}></div>\n    </div>;\n}",
      ...MultiSelectWithAddNew.parameters?.docs?.source
    }
  }
};
MultiSelectWithAddNewAndSearch.parameters = {
  ...MultiSelectWithAddNewAndSearch.parameters,
  docs: {
    ...MultiSelectWithAddNewAndSearch.parameters?.docs,
    source: {
      originalSource: "args => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\", \"Option 2\"]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    initialOptions,\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions,\n    onAddNew: args.onAddNew\n  });\n  return <div>\n      <MultiSelect value={pickedOptions} onChange={handleOptionChange} addNew={{\n      label: \"Create new\",\n      onAddNew,\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }} search={{\n      enabled: args.searchEnabled,\n      searchPlaceholder: args.searchPlaceholder\n    }}>\n        {optionElements}\n      </MultiSelect>\n      <div style={{\n      height: \"7rem\"\n    }}></div>\n    </div>;\n}",
      ...MultiSelectWithAddNewAndSearch.parameters?.docs?.source
    }
  }
};
MultiSelectAsEditableList.parameters = {
  ...MultiSelectAsEditableList.parameters,
  docs: {
    ...MultiSelectAsEditableList.parameters?.docs,
    source: {
      originalSource: "(args => {\n  const items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>(items);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    pickedOptions,\n    setPickedOptions\n  });\n  return <MultiSelect value={pickedOptions} onChange={handleOptionChange} addNew={{\n    label: \"Create new\",\n    onAddNew,\n    btnProps: {\n      title: \"Add new list item\"\n    }\n  }} search={{\n    enabled: true,\n    searchPlaceholder: \"Add new list item (Enter)\"\n  }}>\n      {optionElements}\n    </MultiSelect>;\n}).bind({})",
      ...MultiSelectAsEditableList.parameters?.docs?.source
    }
  }
};
MultiSelectInReadOnlyMode.parameters = {
  ...MultiSelectInReadOnlyMode.parameters,
  docs: {
    ...MultiSelectInReadOnlyMode.parameters?.docs,
    source: {
      originalSource: "(args => {\n  const items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>(items);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    pickedOptions,\n    setPickedOptions\n  });\n  return <MultiSelect value={pickedOptions} onChange={handleOptionChange} readOnlyView={true} addNew={{\n    label: \"Create new\",\n    onAddNew,\n    btnProps: {\n      title: \"Add new list item\"\n    }\n  }} search={{\n    enabled: true,\n    searchPlaceholder: \"Add new list item (Enter)\"\n  }}>\n      {optionElements}\n    </MultiSelect>;\n}).bind({})",
      ...MultiSelectInReadOnlyMode.parameters?.docs?.source
    }
  }
};
MultiSelectClosesWhenAnotherMultiSelectClicked.parameters = {
  ...MultiSelectClosesWhenAnotherMultiSelectClicked.parameters,
  docs: {
    ...MultiSelectClosesWhenAnotherMultiSelectClicked.parameters?.docs,
    source: {
      originalSource: "(() => {\n  const generateOptions = options => Array.from({\n    length: options\n  }, (_, index) => {\n    const option = `Option ${index}`;\n    return <MultiOption key={option} value={option}>\n          {option}\n        </MultiOption>;\n  });\n  const options1 = generateOptions(3);\n  const options2 = generateOptions(3);\n  const Box = ({\n    children\n  }) => <div style={{\n    width: \"18rem\",\n    display: \"inline-block\"\n  }}>{children}</div>;\n  return <div>\n      <Box>\n        <MultiSelect value={[\"Option 1\"]} children={options1}></MultiSelect>\n      </Box>\n      <Box>\n        <MultiSelect value={[\"Option 1\"]} children={options2}></MultiSelect>\n      </Box>\n    </div>;\n}).bind({})",
      ...MultiSelectClosesWhenAnotherMultiSelectClicked.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["MultiSelectDefault","MultiSelectWithoutSearch","MultiSelectExpandUpwards","MultiSelectWithAddNew","MultiSelectWithAddNewAndSearch","MultiSelectAsEditableList","MultiSelectInReadOnlyMode","MultiSelectClosesWhenAnotherMultiSelectClicked"];
try {
    // @ts-ignore
    MultiSelectDefault.displayName = "MultiSelectDefault";
    // @ts-ignore
    MultiSelectDefault.__docgenInfo = { "description": "", "displayName": "MultiSelectDefault", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectDefault"] = { docgenInfo: MultiSelectDefault.__docgenInfo, name: "MultiSelectDefault", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectDefault" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectWithoutSearch.displayName = "MultiSelectWithoutSearch";
    // @ts-ignore
    MultiSelectWithoutSearch.__docgenInfo = { "description": "", "displayName": "MultiSelectWithoutSearch", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectWithoutSearch"] = { docgenInfo: MultiSelectWithoutSearch.__docgenInfo, name: "MultiSelectWithoutSearch", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectWithoutSearch" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectExpandUpwards.displayName = "MultiSelectExpandUpwards";
    // @ts-ignore
    MultiSelectExpandUpwards.__docgenInfo = { "description": "", "displayName": "MultiSelectExpandUpwards", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectExpandUpwards"] = { docgenInfo: MultiSelectExpandUpwards.__docgenInfo, name: "MultiSelectExpandUpwards", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectExpandUpwards" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectWithAddNew.displayName = "MultiSelectWithAddNew";
    // @ts-ignore
    MultiSelectWithAddNew.__docgenInfo = { "description": "", "displayName": "MultiSelectWithAddNew", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectWithAddNew"] = { docgenInfo: MultiSelectWithAddNew.__docgenInfo, name: "MultiSelectWithAddNew", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectWithAddNew" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectWithAddNewAndSearch.displayName = "MultiSelectWithAddNewAndSearch";
    // @ts-ignore
    MultiSelectWithAddNewAndSearch.__docgenInfo = { "description": "", "displayName": "MultiSelectWithAddNewAndSearch", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectWithAddNewAndSearch"] = { docgenInfo: MultiSelectWithAddNewAndSearch.__docgenInfo, name: "MultiSelectWithAddNewAndSearch", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectWithAddNewAndSearch" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectAsEditableList.displayName = "MultiSelectAsEditableList";
    // @ts-ignore
    MultiSelectAsEditableList.__docgenInfo = { "description": "", "displayName": "MultiSelectAsEditableList", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectAsEditableList"] = { docgenInfo: MultiSelectAsEditableList.__docgenInfo, name: "MultiSelectAsEditableList", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectAsEditableList" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectInReadOnlyMode.displayName = "MultiSelectInReadOnlyMode";
    // @ts-ignore
    MultiSelectInReadOnlyMode.__docgenInfo = { "description": "", "displayName": "MultiSelectInReadOnlyMode", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectInReadOnlyMode"] = { docgenInfo: MultiSelectInReadOnlyMode.__docgenInfo, name: "MultiSelectInReadOnlyMode", path: "stories/Form/Elements/MultiSelect.stories.tsx#MultiSelectInReadOnlyMode" };
}
catch (__react_docgen_typescript_loader_error) { }

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

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ conditionalPlay)
});

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
}

;// CONCATENATED MODULE: ./.storybook/conditionalPlay.ts
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



/**
 * To improve our visual tests, we need to display various states of our components. This often requires simulating user actions.
 * In Storybook, visiting the desired component automatically triggers the play function, which can be confusing for those not familiar with the tool.
 * To address this, we've wrapped the original play function, so it only runs when Chromatic is active or when in development mode.
 * @param playFunction
 */
const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return async context => {
      await playFunction(context);
    };
  }
  return async () => {};
};

/***/ }),

/***/ "./src/components/Form/Select/MultiSelect/MultiOption.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ MultiOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _SingleSelect_Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
/* harmony import */ var _MultiSelect_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiSelect.module.scss");
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




const MultiOptionComponent = (_ref, ref) => {
  let {
    fixed: _fixed,
    hasFocus,
    className,
    ...rest
  } = _ref;
  const innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const additionalClasses = [];
  className && additionalClasses.push(className);
  hasFocus && additionalClasses.push(_MultiSelect_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["focus"]);
  const scrollToSelectedElement = element => {
    const listbox = element.parentElement;
    const listboxWrapper = element.parentElement?.parentElement;
    const isListboxWrapperScrollable = !!listboxWrapper?.style.maxHeight;
    if (isListboxWrapperScrollable) {
      listboxWrapper?.scrollTo && listboxWrapper?.scrollTo(0, element.offsetTop - (listboxWrapper?.offsetHeight ?? 1) / 2);
    }
    listbox?.scrollTo && listbox?.scrollTo(0, element.offsetTop - (listbox?.offsetHeight ?? 1) / 2);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (innerOptionRef.current && hasFocus) {
      scrollToSelectedElement(innerOptionRef.current);
    }
  }, [hasFocus, innerOptionRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_2__/* .Option */ .c, _extends({
    ref: innerOptionRef,
    isSelected: hasFocus,
    disableDefaultSelectedStyle: true,
    className: additionalClasses.join(" "),
    "aria-disabled": false
  }, rest));
};
const MultiOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MultiOptionComponent);
try {
    // @ts-ignore
    MultiOption.displayName = "MultiOption";
    // @ts-ignore
    MultiOption.__docgenInfo = { "description": "", "displayName": "MultiOption", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "fixed": { "defaultValue": null, "description": "", "name": "fixed", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": null, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "disableDefaultSelectedStyle": { "defaultValue": null, "description": "", "name": "disableDefaultSelectedStyle", "required": false, "type": { "name": "boolean" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/MultiSelect/MultiOption.tsx#MultiOption"] = { docgenInfo: MultiOption.__docgenInfo, name: "MultiOption", path: "src/components/Form/Select/MultiSelect/MultiOption.tsx#MultiOption" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/MultiSelect/useMultiSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useMultiSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _MultiOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiOption.tsx");
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



const useMultiSelect = _ref => {
  let {
    initialOptions,
    pickedOptions,
    allOptions = pickedOptions,
    setPickedOptions,
    setAllOptions = setPickedOptions,
    onAddNew
  } = _ref;
  const handleOptionChange = e => {
    const htmlOptions = e.target.options;
    const newPickedOptions = [...pickedOptions];
    Array.from(htmlOptions).forEach(option => {
      const selected = option.selected;
      const exists = pickedOptions.includes(option.value);
      const shouldAdd = !exists && selected;
      const shouldRemove = exists && !selected;
      if (shouldAdd) {
        newPickedOptions.push(option.value);
      } else if (shouldRemove) {
        const index = newPickedOptions.indexOf(option.value);
        newPickedOptions.splice(index, 1);
        if (initialOptions && !initialOptions.includes(option.value)) {
          setAllOptions?.(allOptions.filter(value => value !== option.value));
        }
      }
    });
    setPickedOptions(newPickedOptions);
  };
  const onAddNewWrapper = value => {
    if (value == undefined || value.length === 0) {
      onAddNew?.("");
      return;
    }
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0 || allOptions.includes(trimmedValue)) {
      return;
    }
    setAllOptions?.([...allOptions, trimmedValue]);
    setPickedOptions([...pickedOptions, trimmedValue]);
    onAddNew?.(trimmedValue);
  };
  const optionElements = allOptions.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MultiOption__WEBPACK_IMPORTED_MODULE_1__/* .MultiOption */ .n, {
    key: option,
    value: option
  }, option));
  return {
    handleOptionChange,
    onAddNew: onAddNewWrapper,
    optionElements
  };
};
try {
    // @ts-ignore
    useMultiSelect.displayName = "useMultiSelect";
    // @ts-ignore
    useMultiSelect.__docgenInfo = { "description": "", "displayName": "useMultiSelect", "props": { "initialOptions": { "defaultValue": null, "description": "", "name": "initialOptions", "required": false, "type": { "name": "string[]" } }, "allOptions": { "defaultValue": null, "description": "", "name": "allOptions", "required": false, "type": { "name": "string[]" } }, "setAllOptions": { "defaultValue": null, "description": "", "name": "setAllOptions", "required": false, "type": { "name": "((options: string[]) => void)" } }, "pickedOptions": { "defaultValue": null, "description": "", "name": "pickedOptions", "required": true, "type": { "name": "string[]" } }, "setPickedOptions": { "defaultValue": null, "description": "", "name": "setPickedOptions", "required": true, "type": { "name": "(options: string[]) => void" } }, "onAddNew": { "defaultValue": null, "description": "", "name": "onAddNew", "required": false, "type": { "name": "((newOption: string) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/MultiSelect/useMultiSelect.tsx#useMultiSelect"] = { docgenInfo: useMultiSelect.__docgenInfo, name: "useMultiSelect", path: "src/components/Form/Select/MultiSelect/useMultiSelect.tsx#useMultiSelect" };
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
  const optionId = id ?? defaultOptionId.current;
  const innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
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
  const onSelectHandler = () => onOptionSelect?.(innerOptionRef);
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

/***/ "./src/components/Typography/Typography.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Typography),
  v: () => (/* binding */ validVariants)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.A, options);




       /* harmony default export */ const Typography_Typography_module = (Typography_module/* default */.A && Typography_module/* default */.A.locals ? Typography_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
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




const validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */

const TypographyComponent = (_ref, ref) => {
  let {
    children,
    variant,
    tag,
    style,
    spacing,
    align,
    className = "",
    ...rest
  } = _ref;
  if (!validVariants.includes(variant)) {
    throw new Error(`You entered an invalid variant. You can choose from: ${validVariants}, you entered: ${variant}`);
  }
  const styleWithSpacing = (0,useSpacing/* useSpacing */.T)(spacing, style);
  if (!tag) {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "code":
        tag = variant;
        break;
      case "body":
        tag = "p";
        break;
      case "body-bold":
        tag = "p";
        break;
      case "sub-text":
        tag = "span";
        break;
      default:
        tag = "div";
        break;
    }
  }
  const TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: {
      ...styleWithSpacing,
      textAlign: align
    },
    className: `${Typography_Typography_module["typography_style_" + variant]} ${className}`
  }), children);
};
const Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
try {
    // @ts-ignore
    Typography.displayName = "Typography";
    // @ts-ignore
    Typography.__docgenInfo = { "description": "", "displayName": "Typography", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"] = { docgenInfo: Typography.__docgenInfo, name: "Typography", path: "src/components/Typography/Typography.tsx#Typography" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/withReadOnly.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ withReadOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
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


const componentsWithKeyEventsToPrevent = ["CheckboxWrapper"];
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
};
const getConditionalProps = (readOnlyView, type, helperText) => {
  const props = {};
  if (readOnlyView) {
    props.style = {
      pointerEvents: "none",
      userSelect: "text"
    };
    if (helperText) {
      props.helperText = "";
    }
  } else {
    props.helperText = helperText;
  }
  if (type) {
    props.type = type;
  }
  return props;
};
const withReadOnly = WrappedComponent => {
  const preventKeyUpAndKeyDownHandlerForSpecificComponents = readOnlyView => {
    const preventSubmissionKeys = e => {
      const isEnterOrSpace = e => e.key === "Enter" || e.key === " ";
      if (isEnterOrSpace(e)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    if (readOnlyView && componentsWithKeyEventsToPrevent.includes(WrappedComponent.displayName || WrappedComponent.name)) {
      const props = {};
      props.onKeyUp = e => {
        preventSubmissionKeys(e);
      };
      props.onKeyDown = e => {
        preventSubmissionKeys(e);
      };
      return props;
    }
    return {};
  };
  const WithReadOnlyComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    const {
      readOnlyView = false,
      required,
      children,
      helperText,
      type = "",
      ...restProps
    } = props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, _extends({
      ref: ref
    }, restProps, {
      "data-readonlyview": readOnlyView,
      "aria-readonly": readOnlyView,
      required: readOnlyView ? false : required
    }, getConditionalProps(readOnlyView, type, helperText), preventKeyUpAndKeyDownHandlerForSpecificComponents(readOnlyView)), children);
  });
  WithReadOnlyComponent.displayName = `withReadOnly_${getDisplayName(WrappedComponent)}`;
  return WithReadOnlyComponent;
};
try {
    // @ts-ignore
    withReadOnly.displayName = "withReadOnly";
    // @ts-ignore
    withReadOnly.__docgenInfo = { "description": "", "displayName": "withReadOnly", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/withReadOnly.tsx#withReadOnly"] = { docgenInfo: withReadOnly.__docgenInfo, name: "withReadOnly", path: "src/components/withReadOnly.tsx#withReadOnly" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useDetermineStatusIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/hooks/useSpacing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useSpacing)
/* harmony export */ });
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

const defaultFactor = 0.25;
const defaultUnit = "rem";
const spacingNumberRegex = /(\d+\.?\d*)+/g;
const useSpacing = (spacingProps, style) => {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce((prev, _ref) => {
      let [spacing, multiplier] = _ref;
      const matches = String(multiplier).matchAll(spacingNumberRegex);
      const cssSpacingValue = Array.from(matches).map(_ref2 => {
        let [multiplierValue] = _ref2;
        return `${Number(multiplierValue) * defaultFactor}${defaultUnit}`;
      }).join(" ");
      return {
        ...prev,
        [spacing]: cssSpacingValue
      };
    }, style ?? {});
  }
  return style;
};

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
/* unused harmony exports debounce, throttle, deepMerge */
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

/* eslint-disable @typescript-eslint/no-explicit-any */

const generateID = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  let stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  const hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    const stringCharacter = typeof stringToWeaveIn === "string" && stringToWeaveIn?.[i] !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
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
    const now = Date.now();
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
  if (!obj2) {
    return obj1;
  }
  const result = {
    ...obj1
  };
  for (const key in obj2) {
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
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
 */.Typography-module__sr-only--atsaN{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Typography-module__hidden--Fh_t9{display:none}.Typography-module__slide-in--yyWDG{animation:Typography-module__slide-in--yyWDG .5s forwards}@media(prefers-reduced-motion: reduce){.Typography-module__slide-in--yyWDG{animation-duration:.1ms}}.Typography-module__slide-out--OE65m{animation:Typography-module__slide-out--OE65m .5s forwards}@media(prefers-reduced-motion: reduce){.Typography-module__slide-out--OE65m{animation-duration:.1ms}}@keyframes Typography-module__slide-in--yyWDG{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Typography-module__slide-out--OE65m{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:var(--font-size);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Typography-module__sr-only--atsaN`,
	"hidden": `Typography-module__hidden--Fh_t9`,
	"slide-in": `Typography-module__slide-in--yyWDG`,
	"slide-out": `Typography-module__slide-out--OE65m`,
	"typography_style_h1": `Typography-module__typography_style_h1--QRbCJ`,
	"typography_style_h2": `Typography-module__typography_style_h2--gst_1`,
	"typography_style_h3": `Typography-module__typography_style_h3--OMuiN`,
	"typography_style_h4": `Typography-module__typography_style_h4--AK8ry`,
	"typography_style_body": `Typography-module__typography_style_body--RZ14O`,
	"typography_style_body-bold": `Typography-module__typography_style_body-bold--yrfzC`,
	"typography_style_sub-text": `Typography-module__typography_style_sub-text--J284m`,
	"typography_style_code": `Typography-module__typography_style_code--aL5hm`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
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
 */.readyclasses-module__sr-only--AaB3O{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.readyclasses-module__hidden--kciBr{display:none}.readyclasses-module__slide-in--_Xh2C{animation:readyclasses-module__slide-in--_Xh2C .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-in--_Xh2C{animation-duration:.1ms}}.readyclasses-module__slide-out--fOqOy{animation:readyclasses-module__slide-out--fOqOy .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-out--fOqOy{animation-duration:.1ms}}@keyframes readyclasses-module__slide-in--_Xh2C{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes readyclasses-module__slide-out--fOqOy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `readyclasses-module__sr-only--AaB3O`,
	"hidden": `readyclasses-module__hidden--kciBr`,
	"slide-in": `readyclasses-module__slide-in--_Xh2C`,
	"slide-out": `readyclasses-module__slide-out--fOqOy`
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

/***/ }),

/***/ "./src/readyclasses.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

}]);