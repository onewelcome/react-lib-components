"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9214],{

/***/ "./stories/Form/Wrapper/MultiSelectWrapper.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " component has been created to make your life easier as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least 3 attributes. It needs ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "children"
      }), " (which have to be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiOption"
      }), " components), a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "name"
      }), " and a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "value"
      }), " prop, which should be linked to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useState"
      }), " variable."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onChange"
      }), " event to update the linked ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useState"
      }), " variable whenever the user selects an option."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "it-takes-care-of-proper-accessibility",
      children: "It takes care of proper accessibility"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " accepts a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "helperText"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "errorMessage"
      }), " prop. Based on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "error"
      }), " prop (set to true or false) it will make sure to set its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "aria-describedby"
      }), " value to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "id"
      }), " of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "errorMessage"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "helperText"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "value"
      }), " prop should be linked to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useState"
      }), " variable that gets updated using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onChange"
      }), " event."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["See ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "?path=/docs/components-inputs-raw-multiselect--docs#features",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "MultiSelect"
        }), " components"]
      }), " for more information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of how you can configure a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " within a React component:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [allOptions, setAllOptions] = useState<string[]>([\n    \"Option 1\",\n    \"Option 2\",\n    \"Option 3\",\n    \"Option 4\"\n  ]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\"]);\n\n  const { handleOptionChange, optionElements } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n\n  return (\n    <MultiSelectWrapperComponent\n      label=\"Example multi select wrapper\"\n      name=\"Example multi select\"\n      helperText=\"Example helper text\"\n      error={false}\n      errorMessage=\"This is an error message\"\n      required={true}\n      value={pickedOptions}\n      onChange={handleOptionChange}\n      selectProps={{\n        search: { enabled: false }\n      }}\n    >\n      {optionElements}\n    </MultiSelectWrapperComponent>\n  );\n};\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectWrapperUseBasic
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " with the add new button and search enabled:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n\n  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({\n    initialOptions,\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n\n  return (\n    <MultiSelectWrapperComponent\n      label=\"Example multi select wrapper - with add new and search\"\n      name=\"Example multi select\"\n      value={pickedOptions}\n      onChange={handleOptionChange}\n      selectProps={{\n        addNew: { label: \"Create new\", onAddNew, btnProps: { title: \"Add new select option\" } },\n        search: {\n          enabled: true,\n          searchPlaceholder: \"Search or add new option (Enter)\"\n        }\n      }}\n    >\n      {optionElements}\n    </MultiSelectWrapperComponent>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectWrapperUseWithAddNew
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " used as an editable list"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>(items);\n\n  const { handleOptionChange, onAddNew, optionElements } = useMultiSelect({\n    pickedOptions,\n    setPickedOptions\n  });\n\n  return (\n    <MultiSelectWrapperComponent\n      label=\"Example multi select wrapper - editable list\"\n      name=\"Example multi select\"\n      value={pickedOptions}\n      onChange={handleOptionChange}\n      selectProps={{\n        addNew: {\n          label: \"Create new\",\n          onAddNew,\n          btnProps: { title: \"Add new list item\" }\n        },\n        search: {\n          enabled: true,\n          searchPlaceholder: \"Add new list item (Enter)\"\n        }\n      }}\n    >\n      {optionElements}\n    </MultiSelectWrapperComponent>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectWrapperUseAsEditableList
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

/***/ "./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSelectWrapper: () => (/* binding */ MultiSelectWrapper),
/* harmony export */   MultiSelectWrapperDisabled: () => (/* binding */ MultiSelectWrapperDisabled),
/* harmony export */   MultiSelectWrapperError: () => (/* binding */ MultiSelectWrapperError),
/* harmony export */   MultiSelectWrapperInReadOnlyMode: () => (/* binding */ MultiSelectWrapperInReadOnlyMode),
/* harmony export */   MultiSelectWrapperRequired: () => (/* binding */ MultiSelectWrapperRequired),
/* harmony export */   MultiSelectWrapperSuccess: () => (/* binding */ MultiSelectWrapperSuccess),
/* harmony export */   MultiSelectWrapperUseAsEditableList: () => (/* binding */ MultiSelectWrapperUseAsEditableList),
/* harmony export */   MultiSelectWrapperUseBasic: () => (/* binding */ MultiSelectWrapperUseBasic),
/* harmony export */   MultiSelectWrapperUseBasicWithSearch: () => (/* binding */ MultiSelectWrapperUseBasicWithSearch),
/* harmony export */   MultiSelectWrapperUseWithAddNew: () => (/* binding */ MultiSelectWrapperUseWithAddNew),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx");
/* harmony import */ var _src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiOption.tsx");
/* harmony import */ var _MultiSelectWrapper_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Form/Wrapper/MultiSelectWrapper.mdx");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.storybook/conditionalPlay.ts");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Form/Select/MultiSelect/useMultiSelect.tsx");
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
  title: "components/Inputs/MultiSelect (Wrapper)",
  component: _src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectWrapper */ .J,
  parameters: {
    docs: {
      page: _MultiSelectWrapper_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
  },
  argTypes: {
    value: {
      control: {
        type: "select"
      }
    },
    disabled: {
      control: "boolean"
    }
  },
  args: {
    label: "Example multi select wrapper",
    name: "Example multi select",
    helperText: "Example helper text",
    error: false,
    errorMessage: "This is an error message",
    success: false,
    value: ["option1"]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["option1"]);
  const [newOptions, setNewOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectWrapper */ .J, _extends({}, args, {
    value: pickedOptions,
    onChange: e => {
      setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option1",
    fixed: true
  }, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option5"
  }, "Option 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option6"
  }, "Option 6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option7"
  }, "Option 7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option8"
  }, "Option 8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    value: "option9"
  }, "Option 9"));
};
const MultiSelectWrapper = Template.bind({});
const expectRemovableTag = (label, canvas) => {
  const tag1 = canvas.getByText(label).parentElement;
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(tag1).toBeInTheDocument();
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)((0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(tag1).queryByText(`Remove ${label}`)).toBeInTheDocument();
};
const expectNonRemovableTag = (label, canvas) => {
  const tag1 = canvas.getByText(label).parentElement;
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(tag1).toBeInTheDocument();
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)((0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(tag1).queryByText(`Remove ${label}`)).not.toBeInTheDocument();
};
MultiSelectWrapper.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_5__/* .conditionalPlay */ .h)(async _ref => {
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
  const option2 = canvas.getByRole("option", {
    name: "Option 2"
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option2);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
  const option3 = canvas.getByRole("option", {
    name: "Option 3"
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option3);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
  const option4 = await canvas.getByRole("option", {
    name: "Option 4"
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option4);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  expectRemovableTag("Option 4", canvas);
  const option4RemoveBtn = await canvas.getByText("Remove Option 4");
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option4RemoveBtn);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText("Remove Option 4")).not.toBeInTheDocument();
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
});
const MultiSelectWrapperError = Template.bind({});
MultiSelectWrapperError.args = {
  error: true
};
const MultiSelectWrapperSuccess = Template.bind({});
MultiSelectWrapperSuccess.args = {
  success: true
};
const MultiSelectWrapperDisabled = Template.bind({});
MultiSelectWrapperDisabled.args = {
  disabled: true
};
const MultiSelectWrapperRequired = Template.bind({});
MultiSelectWrapperRequired.args = {
  required: true
};
const TemplateWithUseMultiSelect = args => {
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Option 1", "Option 2", "Option 3", "Option 4"]);
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Option 1"]);
  const {
    handleOptionChange,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_6__/* .useMultiSelect */ .L)({
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectWrapper */ .J, _extends({}, args, {
    value: pickedOptions,
    onChange: handleOptionChange,
    selectProps: {
      search: args.search
    }
  }), optionElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: "7rem"
    }
  }));
};
const MultiSelectWrapperUseBasic = TemplateWithUseMultiSelect.bind({});
MultiSelectWrapperUseBasic.args = {
  search: {
    enabled: false
  }
};
const MultiSelectWrapperUseBasicWithSearch = TemplateWithUseMultiSelect.bind({});
MultiSelectWrapperUseBasicWithSearch.args = {
  search: {
    enabled: true
  }
};
const MultiSelectWrapperUseWithAddNew = (args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialOptions);
  const {
    handleOptionChange,
    onAddNew,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_6__/* .useMultiSelect */ .L)({
    initialOptions,
    allOptions,
    setAllOptions,
    pickedOptions,
    setPickedOptions
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectWrapper */ .J, _extends({}, args, {
    value: pickedOptions,
    onChange: handleOptionChange,
    selectProps: {
      addNew: {
        label: "Create new",
        onAddNew,
        btnProps: {
          title: "Add new select option"
        }
      },
      search: {
        enabled: true,
        searchPlaceholder: "Search or add new option (Enter)"
      }
    }
  }), optionElements), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: "7rem"
    }
  }));
}).bind({});
const MultiSelectWrapperUseAsEditableList = (args => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items);
  const {
    handleOptionChange,
    onAddNew,
    optionElements
  } = (0,_src__WEBPACK_IMPORTED_MODULE_6__/* .useMultiSelect */ .L)({
    pickedOptions,
    setPickedOptions
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectWrapper */ .J, _extends({}, args, {
    value: pickedOptions,
    onChange: handleOptionChange,
    selectProps: {
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
    }
  }), optionElements);
}).bind({});
const MultiSelectWrapperInReadOnlyMode = Template.bind({});
MultiSelectWrapperInReadOnlyMode.storyName = "Multi Select Wrapper In Read-only Mode";
MultiSelectWrapperInReadOnlyMode.args = {
  readOnlyView: true
};
;
const __namedExportsOrder = ["MultiSelectWrapper", "MultiSelectWrapperError", "MultiSelectWrapperSuccess", "MultiSelectWrapperDisabled", "MultiSelectWrapperRequired", "MultiSelectWrapperUseBasic", "MultiSelectWrapperUseBasicWithSearch", "MultiSelectWrapperUseWithAddNew", "MultiSelectWrapperUseAsEditableList", "MultiSelectWrapperInReadOnlyMode"];
MultiSelectWrapper.parameters = {
  ...MultiSelectWrapper.parameters,
  docs: {
    ...MultiSelectWrapper.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  const [newOptions, setNewOptions] = useState<string[]>();\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapper.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperError.parameters = {
  ...MultiSelectWrapperError.parameters,
  docs: {
    ...MultiSelectWrapperError.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  const [newOptions, setNewOptions] = useState<string[]>();\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperError.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperSuccess.parameters = {
  ...MultiSelectWrapperSuccess.parameters,
  docs: {
    ...MultiSelectWrapperSuccess.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  const [newOptions, setNewOptions] = useState<string[]>();\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperSuccess.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperDisabled.parameters = {
  ...MultiSelectWrapperDisabled.parameters,
  docs: {
    ...MultiSelectWrapperDisabled.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  const [newOptions, setNewOptions] = useState<string[]>();\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperDisabled.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperRequired.parameters = {
  ...MultiSelectWrapperRequired.parameters,
  docs: {
    ...MultiSelectWrapperRequired.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  const [newOptions, setNewOptions] = useState<string[]>();\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperRequired.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperUseBasic.parameters = {
  ...MultiSelectWrapperUseBasic.parameters,
  docs: {
    ...MultiSelectWrapperUseBasic.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [allOptions, setAllOptions] = useState<string[]>([\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\"]);\n  const {\n    handleOptionChange,\n    optionElements\n  } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n  return <div>\n      <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={handleOptionChange} selectProps={{\n      search: args.search\n    }}>\n        {optionElements}\n      </MultiSelectWrapperComponent>\n      <div style={{\n      height: \"7rem\"\n    }}></div>\n    </div>;\n}",
      ...MultiSelectWrapperUseBasic.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperUseBasicWithSearch.parameters = {
  ...MultiSelectWrapperUseBasicWithSearch.parameters,
  docs: {
    ...MultiSelectWrapperUseBasicWithSearch.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [allOptions, setAllOptions] = useState<string[]>([\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"]);\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"Option 1\"]);\n  const {\n    handleOptionChange,\n    optionElements\n  } = useMultiSelect({\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n  return <div>\n      <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={handleOptionChange} selectProps={{\n      search: args.search\n    }}>\n        {optionElements}\n      </MultiSelectWrapperComponent>\n      <div style={{\n      height: \"7rem\"\n    }}></div>\n    </div>;\n}",
      ...MultiSelectWrapperUseBasicWithSearch.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperUseWithAddNew.parameters = {
  ...MultiSelectWrapperUseWithAddNew.parameters,
  docs: {
    ...MultiSelectWrapperUseWithAddNew.parameters?.docs,
    source: {
      originalSource: "(args => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    initialOptions,\n    allOptions,\n    setAllOptions,\n    pickedOptions,\n    setPickedOptions\n  });\n  return <div>\n      <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={handleOptionChange} selectProps={{\n      addNew: {\n        label: \"Create new\",\n        onAddNew,\n        btnProps: {\n          title: \"Add new select option\"\n        }\n      },\n      search: {\n        enabled: true,\n        searchPlaceholder: \"Search or add new option (Enter)\"\n      }\n    }}>\n        {optionElements}\n      </MultiSelectWrapperComponent>\n      <div style={{\n      height: \"7rem\"\n    }}></div>\n    </div>;\n}).bind({})",
      ...MultiSelectWrapperUseWithAddNew.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperUseAsEditableList.parameters = {
  ...MultiSelectWrapperUseAsEditableList.parameters,
  docs: {
    ...MultiSelectWrapperUseAsEditableList.parameters?.docs,
    source: {
      originalSource: "(args => {\n  const items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>(items);\n  const {\n    handleOptionChange,\n    onAddNew,\n    optionElements\n  } = useMultiSelect({\n    pickedOptions,\n    setPickedOptions\n  });\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={handleOptionChange} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew,\n      btnProps: {\n        title: \"Add new list item\"\n      }\n    },\n    search: {\n      enabled: true,\n      searchPlaceholder: \"Add new list item (Enter)\"\n    }\n  }}>\n      {optionElements}\n    </MultiSelectWrapperComponent>;\n}).bind({})",
      ...MultiSelectWrapperUseAsEditableList.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperInReadOnlyMode.parameters = {
  ...MultiSelectWrapperInReadOnlyMode.parameters,
  docs: {
    ...MultiSelectWrapperInReadOnlyMode.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  const [newOptions, setNewOptions] = useState<string[]>();\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions(Array.from(e.target.options).filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperInReadOnlyMode.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    MultiSelectWrapperUseBasic.displayName = "MultiSelectWrapperUseBasic";
    // @ts-ignore
    MultiSelectWrapperUseBasic.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapperUseBasic", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseBasic"] = { docgenInfo: MultiSelectWrapperUseBasic.__docgenInfo, name: "MultiSelectWrapperUseBasic", path: "stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseBasic" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectWrapperUseBasicWithSearch.displayName = "MultiSelectWrapperUseBasicWithSearch";
    // @ts-ignore
    MultiSelectWrapperUseBasicWithSearch.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapperUseBasicWithSearch", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseBasicWithSearch"] = { docgenInfo: MultiSelectWrapperUseBasicWithSearch.__docgenInfo, name: "MultiSelectWrapperUseBasicWithSearch", path: "stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseBasicWithSearch" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectWrapperUseWithAddNew.displayName = "MultiSelectWrapperUseWithAddNew";
    // @ts-ignore
    MultiSelectWrapperUseWithAddNew.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapperUseWithAddNew", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseWithAddNew"] = { docgenInfo: MultiSelectWrapperUseWithAddNew.__docgenInfo, name: "MultiSelectWrapperUseWithAddNew", path: "stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseWithAddNew" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    MultiSelectWrapperUseAsEditableList.displayName = "MultiSelectWrapperUseAsEditableList";
    // @ts-ignore
    MultiSelectWrapperUseAsEditableList.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapperUseAsEditableList", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseAsEditableList"] = { docgenInfo: MultiSelectWrapperUseAsEditableList.__docgenInfo, name: "MultiSelectWrapperUseAsEditableList", path: "stories/Form/Wrapper/MultiSelectWrapper.stories.tsx#MultiSelectWrapperUseAsEditableList" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ MultiSelectWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss
var MultiSelectWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MultiSelectWrapper_module/* default */.A, options);




       /* harmony default export */ const MultiSelectWrapper_MultiSelectWrapper_module = (MultiSelectWrapper_module/* default */.A && MultiSelectWrapper_module/* default */.A.locals ? MultiSelectWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/MultiSelect/MultiSelect.tsx + 6 modules
var MultiSelect = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiSelect.tsx");
// EXTERNAL MODULE: ./src/components/withReadOnly.tsx
var withReadOnly = __webpack_require__("./src/components/withReadOnly.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx
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







const MultiSelectWrapperComponent = (_ref, ref) => {
  let {
    children,
    error,
    success,
    value,
    placeholder,
    selectProps,
    helperProps,
    onChange,
    ...rest
  } = _ref;
  const {
    errorId,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.r)();
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
    ref: ref,
    errorId: errorId,
    helperId: helperId,
    labelProps: {
      id: labelId,
      className: MultiSelectWrapper_MultiSelectWrapper_module["select-label"]
    },
    helperProps: {
      ...helperProps,
      className: `${MultiSelectWrapper_MultiSelectWrapper_module["select-helper-text"]} ${helperProps?.className ?? ""}`
    },
    error: error
  }), /*#__PURE__*/react.createElement(MultiSelect/* MultiSelect */.K, _extends({}, selectProps, {
    value: value,
    labeledBy: labelId,
    error: error,
    success: success,
    describedBy: error ? errorId : helperId,
    onChange: onChange,
    placeholder: placeholder,
    className: `${selectProps?.className ?? ""}`,
    isReadOnlyView: !!rest["data-readonlyview"]
  }), children));
};
const MultiSelectWrapper = (0,withReadOnly/* withReadOnly */.R)(/*#__PURE__*/react.forwardRef(MultiSelectWrapperComponent), {
  isWrapperComponent: true
});
try {
    // @ts-ignore
    MultiSelectWrapper.displayName = "MultiSelectWrapper";
    // @ts-ignore
    MultiSelectWrapper.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapper", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string[]" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>) => void)" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "errorMessageProps": { "defaultValue": null, "description": "", "name": "errorMessageProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, \"ref\"> & { ...; })" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "readOnlyView": { "defaultValue": null, "description": "", "name": "readOnlyView", "required": false, "type": { "name": "boolean" } }, "selectProps": { "defaultValue": null, "description": "", "name": "selectProps", "required": false, "type": { "name": "PartialSelectProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx#MultiSelectWrapper"] = { docgenInfo: MultiSelectWrapper.__docgenInfo, name: "MultiSelectWrapper", path: "src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx#MultiSelectWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss":
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
 */.MultiSelectWrapper-module__select-label--Tt5s3{left:calc(1.25rem + 2px)}.MultiSelectWrapper-module__select-helper-text--_SOQR{margin-top:.15rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select-label": `MultiSelectWrapper-module__select-label--Tt5s3`,
	"select-helper-text": `MultiSelectWrapper-module__select-helper-text--_SOQR`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);