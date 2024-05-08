(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5889],{

/***/ "./stories/Form/Wrapper/SelectWrapper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SelectWrapper: () => (/* binding */ SelectWrapper_stories_SelectWrapper),
  SelectWrapperDisabled: () => (/* binding */ SelectWrapperDisabled),
  SelectWrapperError: () => (/* binding */ SelectWrapperError),
  SelectWrapperRequired: () => (/* binding */ SelectWrapperRequired),
  SelectWrapperSuccess: () => (/* binding */ SelectWrapperSuccess),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ SelectWrapper_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx + 1 modules
var SelectWrapper = __webpack_require__("./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/SelectWrapper.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h1: "h1",
    a: "a",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SelectWrapper"
      }), " component has been created to make your life easier as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least 3 attributes. It needs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "children"
      }), " (which have to be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Option"
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
        children: "SelectWrapper"
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
      id: "features",
      children: "Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "?path=/docs/components-inputs-raw-select--docs#features",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Select"
        }), " components"]
      }), " for more information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A code example of how you can configure a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SelectWrapper"
      }), " within a React component:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [selectValue, setSelectValue] = useState(\"option1\");\n\n  return (\n    <SelectWrapper\n      label=\"Example select wrapper\"\n      name=\"Example select\"\n      helperText=\"Example helper text\"\n      error={false}\n      errorMessage=\"This is an error message\"\n      required={true}\n      value={selectValue}\n      onChange={event => setSelectValue(event.target.value)}\n    >\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n    </SelectWrapper>\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: SelectWrapper_stories_SelectWrapper
      })
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
/* harmony default export */ const Wrapper_SelectWrapper = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/SelectWrapper.stories.tsx
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
  title: "components/Inputs/Select (Wrapper)",
  component: SelectWrapper/* SelectWrapper */.S,
  parameters: {
    docs: {
      page: Wrapper_SelectWrapper
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
/* harmony default export */ const SelectWrapper_stories = (meta);
const Template = args => {
  const [pickedOption, setPickedOption] = (0,react.useState)("option1");
  return /*#__PURE__*/react.createElement(SelectWrapper/* SelectWrapper */.S, _extends({}, args, {
    onChange: e => setPickedOption(e.target.value),
    value: pickedOption,
    selectProps: {
      addNew: {
        label: "Create new",
        onAddNew: value => {
          window.alert("This callback is yours to control. Value passed: ".concat(value));
        },
        btnProps: {
          title: "Add new select option"
        }
      }
    }
  }), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option5"
  }, "Option 5"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option6"
  }, "Option 6"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option7"
  }, "Option 7"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option8"
  }, "Option 8"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option9"
  }, "Option 9"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option10"
  }, "Option 10"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option11"
  }, "Option 11"), /*#__PURE__*/react.createElement(Option/* Option */.c, {
    value: "option12"
  }, "Option 12"));
};
const SelectWrapper_stories_SelectWrapper = Template.bind({});
SelectWrapper_stories_SelectWrapper.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.ux)(canvasElement);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.Q4.click(select);
  const option2 = await canvas.getByRole("option", {
    name: "Option 2"
  });
  await testing_library_dist/* userEvent */.Q4.click(option2);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(select).toHaveTextContent("Option 2"));
  await testing_library_dist/* userEvent */.Q4.click(select);
  const option3 = await canvas.getByRole("option", {
    name: "Option 3"
  });
  await testing_library_dist/* userEvent */.Q4.click(option3);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(select).toHaveTextContent("Option 3"));
  await testing_library_dist/* userEvent */.Q4.click(select);
  const option4 = await canvas.getByRole("option", {
    name: "Option 4"
  });
  await testing_library_dist/* userEvent */.Q4.click(option4);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(select).toHaveTextContent("Option 4"));
  await testing_library_dist/* userEvent */.Q4.click(select);
});
SelectWrapper_stories_SelectWrapper.args = {
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
SelectWrapper_stories_SelectWrapper.parameters = {
  ...SelectWrapper_stories_SelectWrapper.parameters,
  docs: {
    ...SelectWrapper_stories_SelectWrapper.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [pickedOption, setPickedOption] = useState<string>(\"option1\");\n  return <SelectWrapperComponent {...args} onChange={e => setPickedOption(e.target.value)} value={pickedOption} selectProps={{\n    addNew: {\n      label: \"Create new\",\n      onAddNew: value => {\n        window.alert(`This callback is yours to control. Value passed: ${value}`);\n      },\n      btnProps: {\n        title: \"Add new select option\"\n      }\n    }\n  }}>\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n      <Option value=\"option6\">Option 6</Option>\n      <Option value=\"option7\">Option 7</Option>\n      <Option value=\"option8\">Option 8</Option>\n      <Option value=\"option9\">Option 9</Option>\n      <Option value=\"option10\">Option 10</Option>\n      <Option value=\"option11\">Option 11</Option>\n      <Option value=\"option12\">Option 12</Option>\n    </SelectWrapperComponent>;\n}",
      ...SelectWrapper_stories_SelectWrapper.parameters?.docs?.source
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
};;const __namedExportsOrder = ["SelectWrapper","SelectWrapperError","SelectWrapperSuccess","SelectWrapperDisabled","SelectWrapperRequired"];

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


const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
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
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "disableDefaultSelectedStyle": { "defaultValue": null, "description": "", "name": "disableDefaultSelectedStyle", "required": false, "type": { "name": "boolean" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ SelectWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss
var SelectWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SelectWrapper_module/* default */.A, options);




       /* harmony default export */ const SelectWrapper_SelectWrapper_module = (SelectWrapper_module/* default */.A && SelectWrapper_module/* default */.A.locals ? SelectWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx + 2 modules
var Select = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx
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






const SelectWrapperComponent = (_ref, ref) => {
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
      className: SelectWrapper_SelectWrapper_module["select-label"]
    },
    helperProps: {
      ...helperProps,
      className: "".concat(SelectWrapper_SelectWrapper_module["select-helper-text"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    },
    error: error
  }), /*#__PURE__*/react.createElement(Select/* Select */.l, _extends({}, selectProps, {
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
const SelectWrapper = /*#__PURE__*/react.forwardRef(SelectWrapperComponent);
try {
    // @ts-ignore
    SelectWrapper.displayName = "SelectWrapper";
    // @ts-ignore
    SelectWrapper.__docgenInfo = { "description": "", "displayName": "SelectWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "selectProps": { "defaultValue": null, "description": "", "name": "selectProps", "required": false, "type": { "name": "PartialSelectProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx#SelectWrapper"] = { docgenInfo: SelectWrapper.__docgenInfo, name: "SelectWrapper", path: "src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx#SelectWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.module.scss":
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
 */.SelectWrapper-module__select-label--E0mjB{left:calc(1.25rem + 2px)}.SelectWrapper-module__select-helper-text--o94e6{margin-top:.15rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select-label": `SelectWrapper-module__select-label--E0mjB`,
	"select-helper-text": `SelectWrapper-module__select-helper-text--o94e6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);