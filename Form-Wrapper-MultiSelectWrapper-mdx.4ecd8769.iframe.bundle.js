(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9214],{

/***/ "./stories/Form/Wrapper/MultiSelectWrapper.mdx":
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
        children: "const ExampleComponent = () => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n\n  return (\n    <MultiSelectWrapper\n      label=\"Example multi select wrapper\"\n      name=\"Example multi select\"\n      helperText=\"Example helper text\"\n      error={false}\n      errorMessage=\"This is an error message\"\n      required={true}\n      value={pickedOptions}\n      onChange={event => {\n        setPickedOptions(\n          Array.from(event.target.options).filter(option => option.selected).map(option => option.value)\n        );\n      }}\n      selectProps={{\n        search: {\n          enabled: false\n        }\n      }}\n    >\n      <MultiOption value=\"option1\">Option 1</MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n    </SelectWrapper>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectWrapper
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of a fully functional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " with the add new button and search enabled:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n\n  const handleOptionChange = (options: HTMLOptionsCollection) => {\n    let newPickedOptions = [...pickedOptions];\n    let newAllOptions = [...allOptions];\n    Array.from(options).forEach(option => {\n      const selected = option.selected;\n      const exists = newPickedOptions.includes(option.value);\n\n      const shouldAdd = !exists && selected;\n      const shouldRemove = exists && !selected;\n\n      if (shouldAdd) {\n        newPickedOptions.push(option.value);\n      } else if (shouldRemove) {\n        newPickedOptions = newPickedOptions.filter(value => value !== option.value);\n        const isInInitialOptions = initialOptions.includes(option.value);\n        if (!isInInitialOptions) {\n          newAllOptions = newAllOptions.filter(value => value !== option.value);\n        }\n      }\n    });\n    return { newPickedOptions, newAllOptions };\n  };\n\n  return (\n    <MultiSelectWrapperComponent\n      {...args}\n      value={pickedOptions}\n      onChange={e => {\n        const { newPickedOptions, newAllOptions } = handleOptionChange(e.target.options);\n        setPickedOptions(newPickedOptions);\n        setAllOptions(newAllOptions);\n      }}\n      selectProps={{\n        addNew: {\n          label: \"Create new\",\n          onAddNew: value => {\n            const trimmedValue = value.trim();\n            const getValuesWithValueIfUnique = (value: string) => (values: string[]) =>\n              values.includes(value) ? values : [...values, value];\n            trimmedValue && setAllOptions(getValuesWithValueIfUnique(trimmedValue));\n            trimmedValue && setPickedOptions(getValuesWithValueIfUnique(trimmedValue));\n          },\n          btnProps: { title: \"Add new select option\" }\n        },\n        search: {\n          enabled: true,\n          searchPlaceholder: \"Search or add new option (Enter)\"\n        }\n      }}\n    >\n      {allOptions.map(option => (\n        <MultiOption key={option} value={option}>\n          {option}\n        </MultiOption>\n      ))}\n    </MultiSelectWrapperComponent>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _MultiSelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.MultiSelectAddNewWrapper
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

/***/ "./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSelectAddNewWrapper: () => (/* binding */ MultiSelectAddNewWrapper),
/* harmony export */   MultiSelectWrapper: () => (/* binding */ MultiSelectWrapper),
/* harmony export */   MultiSelectWrapperDisabled: () => (/* binding */ MultiSelectWrapperDisabled),
/* harmony export */   MultiSelectWrapperError: () => (/* binding */ MultiSelectWrapperError),
/* harmony export */   MultiSelectWrapperRequired: () => (/* binding */ MultiSelectWrapperRequired),
/* harmony export */   MultiSelectWrapperSuccess: () => (/* binding */ MultiSelectWrapperSuccess),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx");
/* harmony import */ var _src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiOption.tsx");
/* harmony import */ var _MultiSelectWrapper_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Form/Wrapper/MultiSelectWrapper.mdx");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.storybook/conditionalPlay.ts");
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
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)((0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(tag1).queryByText("Remove ".concat(label))).toBeInTheDocument();
};
const expectNonRemovableTag = (label, canvas) => {
  const tag1 = canvas.getByText(label).parentElement;
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(tag1).toBeInTheDocument();
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)((0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(tag1).queryByText("Remove ".concat(label))).not.toBeInTheDocument();
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
const AddNewTemplate = args => {
  const initialOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [pickedOptions, setPickedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialOptions);
  const handleOptionChange = options => {
    let newPickedOptions = [...pickedOptions];
    let newAllOptions = [...allOptions];
    Array.from(options).forEach(option => {
      const selected = option.selected;
      const exists = newPickedOptions.includes(option.value);
      const shouldAdd = !exists && selected;
      const shouldRemove = exists && !selected;
      if (shouldAdd) {
        newPickedOptions.push(option.value);
      } else if (shouldRemove) {
        newPickedOptions = newPickedOptions.filter(value => value !== option.value);
        const isInInitialOptions = initialOptions.includes(option.value);
        if (!isInInitialOptions) {
          newAllOptions = newAllOptions.filter(value => value !== option.value);
        }
      }
    });
    return {
      newPickedOptions,
      newAllOptions
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_MultiSelectWrapper_MultiSelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .MultiSelectWrapper */ .J, _extends({}, args, {
    value: pickedOptions,
    onChange: e => {
      const {
        newPickedOptions,
        newAllOptions
      } = handleOptionChange(e.target.options);
      setPickedOptions(newPickedOptions);
      setAllOptions(newAllOptions);
    },
    selectProps: {
      addNew: {
        label: "Create new",
        onAddNew: value => {
          const trimmedValue = value.trim();
          const getValuesWithValueIfUnique = value => values => values.includes(value) ? values : [...values, value];
          trimmedValue && setAllOptions(getValuesWithValueIfUnique(trimmedValue));
          trimmedValue && setPickedOptions(getValuesWithValueIfUnique(trimmedValue));
        },
        btnProps: {
          title: "Add new select option"
        }
      },
      search: {
        enabled: true,
        searchPlaceholder: "Search or add new option (Enter)"
      }
    }
  }), allOptions.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Select_MultiSelect_MultiOption__WEBPACK_IMPORTED_MODULE_4__/* .MultiOption */ .n, {
    key: option,
    value: option
  }, option)));
};
const MultiSelectAddNewWrapper = AddNewTemplate.bind({});
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
MultiSelectAddNewWrapper.parameters = {
  ...MultiSelectAddNewWrapper.parameters,
  docs: {
    ...MultiSelectAddNewWrapper.parameters?.docs,
    source: {
      originalSource: "args => {\n  const initialOptions = [\"Option 1\", \"Option 2\", \"Option 3\", \"Option 4\"];\n  const [pickedOptions, setPickedOptions] = useState<string[]>([]);\n  const [allOptions, setAllOptions] = useState<string[]>(initialOptions);\n  const handleOptionChange = (options: HTMLOptionsCollection) => {\n    let newPickedOptions = [...pickedOptions];\n    let newAllOptions = [...allOptions];\n    Array.from(options).forEach(option => {\n      const selected = option.selected;\n      const exists = newPickedOptions.includes(option.value);\n      const shouldAdd = !exists && selected;\n      const shouldRemove = exists && !selected;\n      if (shouldAdd) {\n        newPickedOptions.push(option.value);\n      } else if (shouldRemove) {\n        newPickedOptions = newPickedOptions.filter(value => value !== option.value);\n        const isInInitialOptions = initialOptions.includes(option.value);\n        if (!isInInitialOptions) {\n          newAllOptions = newAllOptions.filter(value => value !== option.value);\n        }\n      }\n    });\n    return {\n      newPickedOptions,\n      newAllOptions\n    };\n  };\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    const {\n      newPickedOptions,\n      newAllOptions\n    } = handleOptionChange(e.target.options);\n    setPickedOptions(newPickedOptions);\n    setAllOptions(newAllOptions);\n  }} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        const trimmedValue = value.trim();\n        const getValuesWithValueIfUnique = (value: string) => (values: string[]) => values.includes(value) ? values : [...values, value];\n        trimmedValue && setAllOptions(getValuesWithValueIfUnique(trimmedValue));\n        trimmedValue && setPickedOptions(getValuesWithValueIfUnique(trimmedValue));\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    },\n    search: {\n      enabled: true,\n      searchPlaceholder: \"Search or add new option (Enter)\"\n    }\n  }}>\n      {allOptions.map(option => <MultiOption key={option} value={option}>\n          {option}\n        </MultiOption>)}\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectAddNewWrapper.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["MultiSelectWrapper","MultiSelectWrapperError","MultiSelectWrapperSuccess","MultiSelectWrapperDisabled","MultiSelectWrapperRequired","MultiSelectAddNewWrapper"];

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
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const additionalClasses = [];
  className && additionalClasses.push(className);
  hasFocus && additionalClasses.push(_MultiSelect_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["focus"]);
  const scrollToSelectedElement = element => {
    var _element$parentElemen, _listbox$offsetHeight;
    const listbox = element.parentElement;
    const listboxWrapper = (_element$parentElemen = element.parentElement) === null || _element$parentElemen === void 0 ? void 0 : _element$parentElemen.parentElement;
    const isListboxWrapperScrollable = !!(listboxWrapper !== null && listboxWrapper !== void 0 && listboxWrapper.style.maxHeight);
    if (isListboxWrapperScrollable) {
      var _listboxWrapper$offse;
      (listboxWrapper === null || listboxWrapper === void 0 ? void 0 : listboxWrapper.scrollTo) && (listboxWrapper === null || listboxWrapper === void 0 ? void 0 : listboxWrapper.scrollTo(0, element.offsetTop - ((_listboxWrapper$offse = listboxWrapper === null || listboxWrapper === void 0 ? void 0 : listboxWrapper.offsetHeight) !== null && _listboxWrapper$offse !== void 0 ? _listboxWrapper$offse : 1) / 2));
    }
    (listbox === null || listbox === void 0 ? void 0 : listbox.scrollTo) && (listbox === null || listbox === void 0 ? void 0 : listbox.scrollTo(0, element.offsetTop - ((_listbox$offsetHeight = listbox === null || listbox === void 0 ? void 0 : listbox.offsetHeight) !== null && _listbox$offsetHeight !== void 0 ? _listbox$offsetHeight : 1) / 2));
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

/***/ "./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
  var _helperProps$classNam, _selectProps$classNam;
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
      className: "".concat(MultiSelectWrapper_MultiSelectWrapper_module["select-helper-text"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
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
    className: "".concat((_selectProps$classNam = selectProps === null || selectProps === void 0 ? void 0 : selectProps.className) !== null && _selectProps$classNam !== void 0 ? _selectProps$classNam : "")
  }), children));
};
const MultiSelectWrapper = /*#__PURE__*/react.forwardRef(MultiSelectWrapperComponent);
try {
    // @ts-ignore
    MultiSelectWrapper.displayName = "MultiSelectWrapper";
    // @ts-ignore
    MultiSelectWrapper.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string[]" } }, "selectProps": { "defaultValue": null, "description": "", "name": "selectProps", "required": false, "type": { "name": "PartialSelectProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx#MultiSelectWrapper"] = { docgenInfo: MultiSelectWrapper.__docgenInfo, name: "MultiSelectWrapper", path: "src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx#MultiSelectWrapper" };
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss":
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
 */.MultiSelectWrapper-module__select-label--Tt5s3{left:calc(1.25rem + 2px)}.MultiSelectWrapper-module__select-helper-text--_SOQR{margin-top:.15rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select-label": `MultiSelectWrapper-module__select-label--Tt5s3`,
	"select-helper-text": `MultiSelectWrapper-module__select-helper-text--_SOQR`
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