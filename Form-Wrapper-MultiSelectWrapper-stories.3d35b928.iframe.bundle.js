(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[6636],{

/***/ "./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MultiSelectWrapper: () => (/* binding */ MultiSelectWrapper_stories_MultiSelectWrapper),
  MultiSelectWrapperDisabled: () => (/* binding */ MultiSelectWrapperDisabled),
  MultiSelectWrapperError: () => (/* binding */ MultiSelectWrapperError),
  MultiSelectWrapperRequired: () => (/* binding */ MultiSelectWrapperRequired),
  MultiSelectWrapperSuccess: () => (/* binding */ MultiSelectWrapperSuccess),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ MultiSelectWrapper_stories)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss
var MultiSelectWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MultiSelectWrapper_module/* default */.Z, options);




       /* harmony default export */ const MultiSelectWrapper_MultiSelectWrapper_module = (MultiSelectWrapper_module/* default */.Z && MultiSelectWrapper_module/* default */.Z.locals ? MultiSelectWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Form/Select/MultiSelect/MultiSelect.tsx + 5 modules
var MultiSelect = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiSelect.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx
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
  } = (0,useWrapper/* useWrapper */.s)();
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
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
  }), /*#__PURE__*/react.createElement(MultiSelect/* MultiSelect */.N, _extends({}, selectProps, {
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
    MultiSelectWrapper.__docgenInfo = { "description": "", "displayName": "MultiSelectWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string[]" } }, "selectProps": { "defaultValue": null, "description": "", "name": "selectProps", "required": false, "type": { "name": "PartialSelectProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx#MultiSelectWrapper"] = { docgenInfo: MultiSelectWrapper.__docgenInfo, name: "MultiSelectWrapper", path: "src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.tsx#MultiSelectWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Form/Select/MultiSelect/MultiOption.tsx
var MultiOption = __webpack_require__("./src/components/Form/Select/MultiSelect/MultiOption.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/MultiSelectWrapper.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " component has been created to make your life easier as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least 3 attributes. It needs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "children"
      }), " (which have to be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiOption"
      }), " components), a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " prop, which should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      }), " variable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " event to update the linked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      }), " variable whenever the user selects an option."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "it-takes-care-of-proper-accessibility",
      children: "It takes care of proper accessibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " accepts a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " prop. Based on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), " prop (set to true or false) it will make sure to set its ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aria-describedby"
      }), " value to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " prop should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      }), " variable that gets updated using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " event."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A code example of how you can configure a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiSelectWrapper"
      }), " within a React component:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n\n  return (\n    <MultiSelectWrapper\n      label=\"Example multi select wrapper\"\n      name=\"Example multi select\"\n      helperText=\"Example helper text\"\n      error={false}\n      errorMessage=\"This is an error message\"\n      required={true}\n      value={pickedOptions}\n      onChange={event => {\n        setPickedOptions(\n          [...event.target.options].filter(option => option.selected).map(option => option.value)\n        );\n      }}\n    >\n      <MultiOption value=\"option1\">Option 1</MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n    </SelectWrapper>\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: MultiSelectWrapper_stories_MultiSelectWrapper
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
/* harmony default export */ const Wrapper_MultiSelectWrapper = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx
function MultiSelectWrapper_stories_extends() {
  MultiSelectWrapper_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return MultiSelectWrapper_stories_extends.apply(this, arguments);
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
  component: MultiSelectWrapper,
  parameters: {
    docs: {
      page: Wrapper_MultiSelectWrapper
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
  label: "Example multi select wrapper",
  name: "Example multi select",
  helperText: "Example helper text",
  error: false,
  errorMessage: "This is an error message",
  success: false,
  value: ["option1"]
};
/* harmony default export */ const MultiSelectWrapper_stories = (meta);
const Template = args => {
  const [pickedOptions, setPickedOptions] = (0,react.useState)(["option1"]);
  return /*#__PURE__*/react.createElement(MultiSelectWrapper, MultiSelectWrapper_stories_extends({}, args, {
    value: pickedOptions,
    onChange: e => {
      setPickedOptions([...e.target.options].filter(option => option.selected).map(option => option.value));
    }
  }), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option1",
    fixed: true
  }, "Option 1"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option5"
  }, "Option 5"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option6"
  }, "Option 6"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option7"
  }, "Option 7"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option8"
  }, "Option 8"), /*#__PURE__*/react.createElement(MultiOption/* MultiOption */.r, {
    value: "option9"
  }, "Option 9"));
};
const MultiSelectWrapper_stories_MultiSelectWrapper = Template.bind({});
const expectRemovableTag = (label, canvas) => {
  const tag1 = canvas.getByText(label).parentElement;
  (0,jest_dist/* expect */.l)(tag1).toBeInTheDocument();
  (0,jest_dist/* expect */.l)((0,testing_library_dist/* within */.uh)(tag1).queryByText("Remove ".concat(label))).toBeInTheDocument();
};
const expectNonRemovableTag = (label, canvas) => {
  const tag1 = canvas.getByText(label).parentElement;
  (0,jest_dist/* expect */.l)(tag1).toBeInTheDocument();
  (0,jest_dist/* expect */.l)((0,testing_library_dist/* within */.uh)(tag1).queryByText("Remove ".concat(label))).not.toBeInTheDocument();
};
MultiSelectWrapper_stories_MultiSelectWrapper.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.mV.click(select);
  const option2 = canvas.getByRole("option", {
    name: "Option 2"
  });
  await testing_library_dist/* userEvent */.mV.click(option2);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  await testing_library_dist/* userEvent */.mV.click(select);
  const option3 = canvas.getByRole("option", {
    name: "Option 3"
  });
  await testing_library_dist/* userEvent */.mV.click(option3);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  await testing_library_dist/* userEvent */.mV.click(select);
  const option4 = await canvas.getByRole("option", {
    name: "Option 4"
  });
  await testing_library_dist/* userEvent */.mV.click(option4);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  expectRemovableTag("Option 4", canvas);
  const option4RemoveBtn = await canvas.getByText("Remove Option 4");
  await testing_library_dist/* userEvent */.mV.click(option4RemoveBtn);
  expectNonRemovableTag("Option 1", canvas);
  expectRemovableTag("Option 2", canvas);
  expectRemovableTag("Option 3", canvas);
  (0,jest_dist/* expect */.l)(canvas.queryByText("Remove Option 4")).not.toBeInTheDocument();
  await testing_library_dist/* userEvent */.mV.click(select);
});
MultiSelectWrapper_stories_MultiSelectWrapper.args = {
  ...defaultArgs
};
const MultiSelectWrapperError = Template.bind({});
MultiSelectWrapperError.args = {
  ...defaultArgs,
  error: true
};
const MultiSelectWrapperSuccess = Template.bind({});
MultiSelectWrapperSuccess.args = {
  ...defaultArgs,
  success: true
};
const MultiSelectWrapperDisabled = Template.bind({});
MultiSelectWrapperDisabled.args = {
  ...defaultArgs,
  disabled: true
};
const MultiSelectWrapperRequired = Template.bind({});
MultiSelectWrapperRequired.args = {
  ...defaultArgs,
  required: true
};
MultiSelectWrapper_stories_MultiSelectWrapper.parameters = {
  ...MultiSelectWrapper_stories_MultiSelectWrapper.parameters,
  docs: {
    ...MultiSelectWrapper_stories_MultiSelectWrapper.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions([...e.target.options].filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapper_stories_MultiSelectWrapper.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperError.parameters = {
  ...MultiSelectWrapperError.parameters,
  docs: {
    ...MultiSelectWrapperError.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions([...e.target.options].filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperError.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperSuccess.parameters = {
  ...MultiSelectWrapperSuccess.parameters,
  docs: {
    ...MultiSelectWrapperSuccess.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions([...e.target.options].filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperSuccess.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperDisabled.parameters = {
  ...MultiSelectWrapperDisabled.parameters,
  docs: {
    ...MultiSelectWrapperDisabled.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions([...e.target.options].filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperDisabled.parameters?.docs?.source
    }
  }
};
MultiSelectWrapperRequired.parameters = {
  ...MultiSelectWrapperRequired.parameters,
  docs: {
    ...MultiSelectWrapperRequired.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOptions, setPickedOptions] = useState<string[]>([\"option1\"]);\n  return <MultiSelectWrapperComponent {...args} value={pickedOptions} onChange={e => {\n    setPickedOptions([...e.target.options].filter(option => option.selected).map(option => option.value));\n  }}>\n      <MultiOption value=\"option1\" fixed>\n        Option 1\n      </MultiOption>\n      <MultiOption value=\"option2\">Option 2</MultiOption>\n      <MultiOption value=\"option3\">Option 3</MultiOption>\n      <MultiOption value=\"option4\">Option 4</MultiOption>\n      <MultiOption value=\"option5\">Option 5</MultiOption>\n      <MultiOption value=\"option6\">Option 6</MultiOption>\n      <MultiOption value=\"option7\">Option 7</MultiOption>\n      <MultiOption value=\"option8\">Option 8</MultiOption>\n      <MultiOption value=\"option9\">Option 9</MultiOption>\n    </MultiSelectWrapperComponent>;\n}",
      ...MultiSelectWrapperRequired.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["MultiSelectWrapper","MultiSelectWrapperError","MultiSelectWrapperSuccess","MultiSelectWrapperDisabled","MultiSelectWrapperRequired"];

/***/ }),

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ conditionalPlay)
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


const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};

/***/ }),

/***/ "./src/components/Form/Select/MultiSelect/MultiOption.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ MultiOption)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _SingleSelect_Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
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



const MultiOptionComponent = (_ref, ref) => {
  let {
    fixed: _fixed,
    ...rest
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SingleSelect_Option__WEBPACK_IMPORTED_MODULE_1__/* .Option */ .W, _extends({
    ref: ref
  }, rest));
};
const MultiOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MultiOptionComponent);
try {
    // @ts-ignore
    MultiOption.displayName = "MultiOption";
    // @ts-ignore
    MultiOption.__docgenInfo = { "description": "", "displayName": "MultiOption", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": null, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "fixed": { "defaultValue": null, "description": "", "name": "fixed", "required": false, "type": { "name": "boolean" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
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
/* harmony export */   W: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
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



const OptionComponent = (_ref, ref) => {
  let {
    children,
    className,
    isSelected = false,
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
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
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
    ref: innerOptionRef,
    "data-value": value,
    className: "".concat(isSelected ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z["selected-option"] : "", " ").concat(disabled ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.disabled : "", " ").concat(className !== null && className !== void 0 ? className : ""),
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
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 */.MultiSelectWrapper-module__select-label--Tt5s3{left:calc(1.25rem + 2px)}.MultiSelectWrapper-module__select-helper-text--_SOQR{margin-top:.15rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select-label": `MultiSelectWrapper-module__select-label--Tt5s3`,
	"select-helper-text": `MultiSelectWrapper-module__select-helper-text--_SOQR`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);