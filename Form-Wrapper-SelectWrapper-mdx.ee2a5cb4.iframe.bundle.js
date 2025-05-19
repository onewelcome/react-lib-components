(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8583],{

/***/ "./stories/Form/Wrapper/SelectWrapper.mdx":
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
/* harmony import */ var _SelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Form/Wrapper/SelectWrapper.stories.tsx");







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
      of: _SelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "SelectWrapper"
      }), " component has been created to make your life easier as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least 3 attributes. It needs ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "children"
      }), " (which have to be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Option"
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
        children: "SelectWrapper"
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
        href: "?path=/docs/components-inputs-raw-select--docs#features",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Select"
        }), " components"]
      }), " for more information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A code example of how you can configure a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "SelectWrapper"
      }), " within a React component:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [selectValue, setSelectValue] = useState(\"option1\");\n\n  return (\n    <SelectWrapper\n      label=\"Example select wrapper\"\n      name=\"Example select\"\n      helperText=\"Example helper text\"\n      error={false}\n      errorMessage=\"This is an error message\"\n      required={true}\n      value={selectValue}\n      onChange={event => setSelectValue(event.target.value)}\n    >\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n    </SelectWrapper>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _SelectWrapper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.SelectWrapper
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

/***/ "./stories/Form/Wrapper/SelectWrapper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectWrapper: () => (/* binding */ SelectWrapper),
/* harmony export */   SelectWrapperDisabled: () => (/* binding */ SelectWrapperDisabled),
/* harmony export */   SelectWrapperError: () => (/* binding */ SelectWrapperError),
/* harmony export */   SelectWrapperInReadOnlyMode: () => (/* binding */ SelectWrapperInReadOnlyMode),
/* harmony export */   SelectWrapperRequired: () => (/* binding */ SelectWrapperRequired),
/* harmony export */   SelectWrapperSuccess: () => (/* binding */ SelectWrapperSuccess),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Form_Wrapper_SelectWrapper_SelectWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
/* harmony import */ var _SelectWrapper_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Form/Wrapper/SelectWrapper.mdx");
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
  title: "components/Inputs/Select (Wrapper)",
  component: _src_components_Form_Wrapper_SelectWrapper_SelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .SelectWrapper */ .S,
  parameters: {
    docs: {
      page: _SelectWrapper_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
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
  }
};
const defaultArgs = {
  label: "Example select wrapper",
  name: "Example select",
  helperText: "Example helper text",
  error: false,
  errorMessage: "This is an error message",
  success: false,
  value: "option1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [pickedOption, setPickedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("option1");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Form_Wrapper_SelectWrapper_SelectWrapper__WEBPACK_IMPORTED_MODULE_2__/* .SelectWrapper */ .S, _extends({}, args, {
    onChange: e => setPickedOption(e.target.value),
    value: pickedOption,
    selectProps: {
      addNew: {
        label: "Create new",
        onAddNew: value => {
          window.alert(`This callback is yours to control. Value passed: ${value}`);
        },
        btnProps: {
          title: "Add new select option"
        }
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option1"
  }, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option5"
  }, "Option 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option6"
  }, "Option 6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option7"
  }, "Option 7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option8"
  }, "Option 8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option9"
  }, "Option 9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option10"
  }, "Option 10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option11"
  }, "Option 11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, {
    value: "option12"
  }, "Option 12"));
};
const SelectWrapper = Template.bind({});
SelectWrapper.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_5__/* .conditionalPlay */ .h)(async _ref => {
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
  const option2 = await canvas.getByRole("option", {
    name: "Option 2"
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option2);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(select).toHaveTextContent("Option 2"));
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
  const option3 = await canvas.getByRole("option", {
    name: "Option 3"
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option3);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(select).toHaveTextContent("Option 3"));
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
  const option4 = await canvas.getByRole("option", {
    name: "Option 4"
  });
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(option4);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(select).toHaveTextContent("Option 4"));
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(select);
});
SelectWrapper.args = {
  ...defaultArgs
};
const SelectWrapperError = Template.bind({});
SelectWrapperError.args = {
  ...defaultArgs,
  error: true
};
const SelectWrapperSuccess = Template.bind({});
SelectWrapperSuccess.args = {
  ...defaultArgs,
  success: true
};
const SelectWrapperDisabled = Template.bind({});
SelectWrapperDisabled.args = {
  ...defaultArgs,
  disabled: true
};
const SelectWrapperRequired = Template.bind({});
SelectWrapperRequired.args = {
  ...defaultArgs,
  required: true
};
const SelectWrapperInReadOnlyMode = Template.bind({});
SelectWrapperInReadOnlyMode.storyName = "Select Wrapper In Read-only Mode";
SelectWrapperInReadOnlyMode.args = {
  ...defaultArgs,
  readOnlyView: true
};
SelectWrapper.parameters = {
  ...SelectWrapper.parameters,
  docs: {
    ...SelectWrapper.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapper.parameters?.docs?.source
    }
  }
};
SelectWrapperError.parameters = {
  ...SelectWrapperError.parameters,
  docs: {
    ...SelectWrapperError.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapperError.parameters?.docs?.source
    }
  }
};
SelectWrapperSuccess.parameters = {
  ...SelectWrapperSuccess.parameters,
  docs: {
    ...SelectWrapperSuccess.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapperSuccess.parameters?.docs?.source
    }
  }
};
SelectWrapperDisabled.parameters = {
  ...SelectWrapperDisabled.parameters,
  docs: {
    ...SelectWrapperDisabled.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapperDisabled.parameters?.docs?.source
    }
  }
};
SelectWrapperRequired.parameters = {
  ...SelectWrapperRequired.parameters,
  docs: {
    ...SelectWrapperRequired.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapperRequired.parameters?.docs?.source
    }
  }
};
SelectWrapperInReadOnlyMode.parameters = {
  ...SelectWrapperInReadOnlyMode.parameters,
  docs: {
    ...SelectWrapperInReadOnlyMode.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapperInReadOnlyMode.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["SelectWrapper","SelectWrapperError","SelectWrapperSuccess","SelectWrapperDisabled","SelectWrapperRequired","SelectWrapperInReadOnlyMode"];

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