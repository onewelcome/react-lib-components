"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3969],{

/***/ "./stories/Form/Wrapper/CheckboxWrapper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Checkboxes: () => (/* binding */ Checkboxes),
  CheckboxesError: () => (/* binding */ CheckboxesError),
  NestedCheckboxes: () => (/* binding */ NestedCheckboxes),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CheckboxWrapper_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Checkbox/Checkbox.tsx + 1 modules
var Checkbox = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx + 1 modules
var CheckboxWrapper = __webpack_require__("./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/CheckboxWrapper.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    a: "a",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " component has been created to make your life easier, as well as making sure that accessibility is taken care of in a proper way.\nIt requires you to pass at least two props: a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fieldsetProps.legend"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As the name implies, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " component should be used as a wrapper around your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components. It has a few functions that help you with retaining proper accessibility and functionality:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "it-adds-a-fieldset-component",
      children: "It adds a Fieldset component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It requires a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "legend"
      }), " prop, which increases accessibility by telling screenreaders what your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " group is used for. You will also have access to the rest of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Fieldset"
      }), " props through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fieldsetProps"
      }), " prop on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " component.\nFor all of the props ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/docs/stories-form-elements-fieldset--fieldset",
        children: ["see the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component documentation"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "it-enables-proper-accessibility-features",
      children: "It enables proper accessibility features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " has an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), " state and an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " state. The same goes for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), ". It will automatically set the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aria-describedby"
      }), " property of all the nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " id of the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The same goes for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), ". If an individual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " component has its own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), " it will be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aria-describedby"
      }), " on its own. If not, it will be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aria-describedby"
      }), " the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You will not have to do anything for these complicated accessibility features. It's all done internally for you."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "it-gives-styling-on-error-or-disabled",
      children: "It gives styling on error or disabled"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The disabled state for all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components within the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " can be controlled through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "disabled"
      }), " prop on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), ". The same goes for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), " prop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/story/stories-form-wrapper-checkboxwrapper--checkboxes",
        children: "Regular checkboxes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A code example of linking ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components inside of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckboxWrapper"
      }), " using state would look as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [checkboxStates, setCheckboxStates] = useState({\n    option1: false,\n    option2: false,\n    option3: false,\n    option4: false,\n    option5: false\n  });\n  const [hasError, setHasError] = useState(false);\n\n  const onChangeHandler = event => {\n    setCheckboxStates(prevState => ({\n      ...prevState,\n      [event.target.value]: !checkboxStates[event.target.value]\n    }));\n  };\n\n  return (\n    <CheckboxWrapper\n      name=\"Example checkboxes\"\n      fieldsetProps={{\n        legend: \"Example fieldset legend\",\n        legendVariant: \"h1\",\n        hideLegend: false,\n        background: \"#FFF\",\n        noPadding: false,\n        noBackground: false\n      }}\n      error={hasError}\n      errorMessage=\"Please check all the boxes\"\n      helperText=\"Helpertext for the group\"\n    >\n      <Checkbox\n        checked={checkboxStates.option1}\n        onChange={onChangeHandler}\n        name=\"Option 1\"\n        value=\"option1\"\n      >\n        Option 1\n      </Checkbox>\n      <Checkbox\n        checked={checkboxStates.option2}\n        onChange={onChangeHandler}\n        name=\"Option 2\"\n        value=\"option2\"\n      >\n        Option 2\n      </Checkbox>\n      <Checkbox\n        checked={checkboxStates.option3}\n        onChange={onChangeHandler}\n        name=\"Option 3\"\n        value=\"option3\"\n      >\n        Option 3\n      </Checkbox>\n      <Checkbox\n        checked={checkboxStates.option4}\n        onChange={onChangeHandler}\n        name=\"Option 4\"\n        value=\"option4\"\n      >\n        Option 4\n      </Checkbox>\n      <Checkbox\n        checked={checkboxStates.option5}\n        onChange={onChangeHandler}\n        name=\"Option 5\"\n        value=\"option5\"\n      >\n        Option 5\n      </Checkbox>\n    </CheckboxWrapper>\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Checkboxes
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/story/stories-form-wrapper-checkboxwrapper--nested-checkboxes",
        children: "Nested checkboxes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A code example of linking nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " components using state would look as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleForm = () => {\n  const [indeterminate, setIndeterminate] = useState(false);\n  const [electronics, setElectronics] = useState(false);\n  const [checkedLaptop, setCheckedLaptop] = useState(false);\n  const [checkedTV, setCheckedTV] = useState(false);\n  const [checkedMicrophone, setCheckedMicrophone] = useState(false);\n  const [hasError, setHasError] = useState(false);\n\n  useEffect(() => {\n    if (checkedLaptop && checkedTV && checkedMicrophone) {\n      setElectronics(true);\n      setIndeterminate(false);\n    } else if (checkedLaptop || checkedTV || checkedMicrophone) {\n      setElectronics(false);\n      setIndeterminate(true);\n    } else {\n      setElectronics(false);\n      setIndeterminate(false);\n    }\n  }, [checkedLaptop, checkedTV, checkedMicrophone]);\n  const handleElectronicsOnChange = () => {\n    setElectronics(!electronics);\n    setCheckedLaptop(!electronics);\n    setCheckedTV(!electronics);\n    setCheckedMicrophone(!electronics);\n  };\n\n  return (\n    <CheckboxWrapper\n      name=\"electronics\"\n      fieldsetProps={{\n        legend: 'Electronics',\n        legendVariant: 'h1',\n        hideLegend: false,\n        background: '#FFF',\n        noPadding: false,\n        noBackground: false,\n      }}\n      error={hasError}\n      errorMessage=\"Please check all the boxes\"\n      helperText=\"Helpertext for the group\"\n      >\n      <Checkbox\n        indeterminate={indeterminate}\n        checked={electronics}\n        name=\"electronics\"\n        label=\"Electronics\"\n        onChange={handleElectronicsOnChange}\n      >\n        <Checkbox\n          onChange={setCheckedLaptop(!checkedLaptop);}\n          checked={checkedLaptop}\n          helperText=\"More examples\"\n          name=\"laptop\"\n        >\n          Laptop\n        </Checkbox>\n        <Checkbox\n          onChange={setCheckedTV(!checkedTV);}\n          checked={checkedTV}\n          name=\"tv\"\n        >\n          TVs\n        </Checkbox>\n        <Checkbox\n          onChange={setCheckedMicrophone(!checkedMicrophone);}\n          checked={checkedMicrophone}\n          name=\"microphones\"\n        >\n          Microphones\n        </Checkbox>\n      </Checkbox>\n    </CheckboxWrapper>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: NestedCheckboxes
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
/* harmony default export */ const Wrapper_CheckboxWrapper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Wrapper/CheckboxWrapper.stories.tsx
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
  title: "components/Inputs/Checkbox (Wrapper)",
  component: CheckboxWrapper/* CheckboxWrapper */.Z,
  parameters: {
    docs: {
      page: Wrapper_CheckboxWrapper
    }
  },
  argTypes: {
    legendId: {
      controls: false,
      table: {
        disable: true
      }
    },
    label: {
      controls: false,
      table: {
        disable: true
      }
    },
    helperProps: {
      controls: false,
      table: {
        disable: true
      }
    },
    onChange: {
      controls: false,
      table: {
        disable: true
      }
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};
/* harmony default export */ const CheckboxWrapper_stories = (meta);
const CheckboxesTemplate = args => {
  const [checkboxStates, setCheckboxStates] = (0,react.useState)({
    option1: false,
    option2: true,
    option3: true,
    option4: false,
    option5: false
  });
  const onChangeHandler = event => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [event.target.value]: !checkboxStates[event.target.value]
    }));
  };
  return /*#__PURE__*/react.createElement(CheckboxWrapper/* CheckboxWrapper */.Z, args, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    checked: checkboxStates.option1,
    onChange: onChangeHandler,
    name: "Option 1",
    value: "option1"
  }, "Option 1"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    checked: checkboxStates.option2,
    onChange: onChangeHandler,
    name: "Option 2",
    value: "option2"
  }, "Option 2"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    checked: checkboxStates.option3,
    onChange: onChangeHandler,
    name: "Option 3",
    value: "option3"
  }, "Option 3"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    checked: checkboxStates.option4,
    onChange: onChangeHandler,
    name: "Option 4",
    value: "option4"
  }, "Option 4"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    checked: checkboxStates.option5,
    onChange: onChangeHandler,
    name: "Option 5",
    value: "option5"
  }, "Option 5"));
};
const Checkboxes = CheckboxesTemplate.bind({});
Checkboxes.args = {
  name: "Example checkboxes",
  fieldsetProps: {
    legend: "Example fieldset legend",
    legendStyle: "h1",
    hideLegend: false,
    background: "#FFF",
    noPadding: false,
    noBackground: false
  },
  error: false,
  errorMessage: "Please check all the boxes"
};
const NestedTemplate = args => {
  const [indeterminate, setIndeterminate] = (0,react.useState)(true);
  const [electronics, setElectronics] = (0,react.useState)(false);
  const [checkedLaptop, setCheckedLaptop] = (0,react.useState)(true);
  const [checkedTV, setCheckedTV] = (0,react.useState)(false);
  const [checkedMicrophone, setCheckedMicrophone] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (checkedLaptop && checkedTV && checkedMicrophone) {
      setElectronics(true);
      setIndeterminate(false);
    } else if (checkedLaptop || checkedTV || checkedMicrophone) {
      setElectronics(false);
      setIndeterminate(true);
    } else {
      setElectronics(false);
      setIndeterminate(false);
    }
  }, [checkedLaptop, checkedTV, checkedMicrophone]);
  const handleElectronicsOnChange = () => {
    setElectronics(!electronics);
    setCheckedLaptop(!electronics);
    setCheckedTV(!electronics);
    setCheckedMicrophone(!electronics);
  };
  const onLaptopCheckHandler = () => {
    console.warn("Laptop Checked");
    setCheckedLaptop(!checkedLaptop);
  };
  const onTVCheckHandler = () => {
    console.warn("TV Checked");
    setCheckedTV(!checkedTV);
  };
  const onMicrophoneCheckHandler = () => {
    console.warn("Microphone Checked");
    setCheckedMicrophone(!checkedMicrophone);
  };
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(CheckboxWrapper/* CheckboxWrapper */.Z, args, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    indeterminate: indeterminate,
    checked: electronics,
    name: "electronics",
    label: "Electronics",
    onChange: handleElectronicsOnChange
  }, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    onChange: onLaptopCheckHandler,
    checked: checkedLaptop,
    helperText: "More examples",
    name: "laptop"
  }, "Laptop"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    onChange: onTVCheckHandler,
    checked: checkedTV,
    name: "tv"
  }, "TVs"), /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    onChange: onMicrophoneCheckHandler,
    checked: checkedMicrophone,
    name: "microphones"
  }, "Microphones"))));
};
const CheckboxesError = CheckboxesTemplate.bind({});
CheckboxesError.args = {
  name: "Example checkboxes",
  fieldsetProps: {
    legend: "Example fieldset legend",
    legendStyle: "h1",
    hideLegend: false,
    background: "#FFF",
    noPadding: false,
    noBackground: false
  },
  error: true,
  errorMessage: "Please check all the boxes"
};
const NestedCheckboxes = NestedTemplate.bind({});
NestedCheckboxes.args = {
  name: "Electronics",
  fieldsetProps: {
    legend: "Example fieldset legend",
    legendStyle: "h1",
    hideLegend: true,
    background: "#FFF",
    noPadding: true,
    noBackground: true
  },
  error: false,
  errorMessage: "Please check all the boxes",
  helperText: "Helpertext for the group"
};
Checkboxes.parameters = {
  ...Checkboxes.parameters,
  docs: {
    ...Checkboxes.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [checkboxStates, setCheckboxStates] = useState({\n    option1: false,\n    option2: true,\n    option3: true,\n    option4: false,\n    option5: false\n  });\n  const onChangeHandler = event => {\n    setCheckboxStates(prevState => ({\n      ...prevState,\n      [event.target.value]: !checkboxStates[event.target.value]\n    }));\n  };\n  return <CheckboxWrapper {...args}>\n      <Checkbox checked={checkboxStates.option1} onChange={onChangeHandler} name=\"Option 1\" value=\"option1\">\n        Option 1\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option2} onChange={onChangeHandler} name=\"Option 2\" value=\"option2\">\n        Option 2\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option3} onChange={onChangeHandler} name=\"Option 3\" value=\"option3\">\n        Option 3\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option4} onChange={onChangeHandler} name=\"Option 4\" value=\"option4\">\n        Option 4\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option5} onChange={onChangeHandler} name=\"Option 5\" value=\"option5\">\n        Option 5\n      </Checkbox>\n    </CheckboxWrapper>;\n}",
      ...Checkboxes.parameters?.docs?.source
    }
  }
};
CheckboxesError.parameters = {
  ...CheckboxesError.parameters,
  docs: {
    ...CheckboxesError.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [checkboxStates, setCheckboxStates] = useState({\n    option1: false,\n    option2: true,\n    option3: true,\n    option4: false,\n    option5: false\n  });\n  const onChangeHandler = event => {\n    setCheckboxStates(prevState => ({\n      ...prevState,\n      [event.target.value]: !checkboxStates[event.target.value]\n    }));\n  };\n  return <CheckboxWrapper {...args}>\n      <Checkbox checked={checkboxStates.option1} onChange={onChangeHandler} name=\"Option 1\" value=\"option1\">\n        Option 1\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option2} onChange={onChangeHandler} name=\"Option 2\" value=\"option2\">\n        Option 2\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option3} onChange={onChangeHandler} name=\"Option 3\" value=\"option3\">\n        Option 3\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option4} onChange={onChangeHandler} name=\"Option 4\" value=\"option4\">\n        Option 4\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option5} onChange={onChangeHandler} name=\"Option 5\" value=\"option5\">\n        Option 5\n      </Checkbox>\n    </CheckboxWrapper>;\n}",
      ...CheckboxesError.parameters?.docs?.source
    }
  }
};
NestedCheckboxes.parameters = {
  ...NestedCheckboxes.parameters,
  docs: {
    ...NestedCheckboxes.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [indeterminate, setIndeterminate] = useState(true);\n  const [electronics, setElectronics] = useState(false);\n  const [checkedLaptop, setCheckedLaptop] = useState(true);\n  const [checkedTV, setCheckedTV] = useState(false);\n  const [checkedMicrophone, setCheckedMicrophone] = useState(false);\n  useEffect(() => {\n    if (checkedLaptop && checkedTV && checkedMicrophone) {\n      setElectronics(true);\n      setIndeterminate(false);\n    } else if (checkedLaptop || checkedTV || checkedMicrophone) {\n      setElectronics(false);\n      setIndeterminate(true);\n    } else {\n      setElectronics(false);\n      setIndeterminate(false);\n    }\n  }, [checkedLaptop, checkedTV, checkedMicrophone]);\n  const handleElectronicsOnChange = () => {\n    setElectronics(!electronics);\n    setCheckedLaptop(!electronics);\n    setCheckedTV(!electronics);\n    setCheckedMicrophone(!electronics);\n  };\n  const onLaptopCheckHandler = () => {\n    console.warn(\"Laptop Checked\");\n    setCheckedLaptop(!checkedLaptop);\n  };\n  const onTVCheckHandler = () => {\n    console.warn(\"TV Checked\");\n    setCheckedTV(!checkedTV);\n  };\n  const onMicrophoneCheckHandler = () => {\n    console.warn(\"Microphone Checked\");\n    setCheckedMicrophone(!checkedMicrophone);\n  };\n  return <div>\n      <CheckboxWrapper {...args}>\n        <Checkbox indeterminate={indeterminate} checked={electronics} name=\"electronics\" label=\"Electronics\" onChange={handleElectronicsOnChange}>\n          <Checkbox onChange={onLaptopCheckHandler} checked={checkedLaptop} helperText=\"More examples\" name=\"laptop\">\n            Laptop\n          </Checkbox>\n          <Checkbox onChange={onTVCheckHandler} checked={checkedTV} name=\"tv\">\n            TVs\n          </Checkbox>\n          <Checkbox onChange={onMicrophoneCheckHandler} checked={checkedMicrophone} name=\"microphones\">\n            Microphones\n          </Checkbox>\n        </Checkbox>\n      </CheckboxWrapper>\n    </div>;\n}",
      ...NestedCheckboxes.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Checkboxes","CheckboxesError","NestedCheckboxes"];

/***/ }),

/***/ "./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CheckboxWrapper)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss
var CheckboxWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CheckboxWrapper_module/* default */.Z, options);




       /* harmony default export */ const CheckboxWrapper_CheckboxWrapper_module = (CheckboxWrapper_module/* default */.Z && CheckboxWrapper_module/* default */.Z.locals ? CheckboxWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx
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







const CheckboxWrapperComponent = (_ref, ref) => {
  var _helperProps$classNam;
  let {
    children,
    error = false,
    helperText,
    helperProps,
    fieldsetProps,
    ...rest
  } = _ref;
  const {
    errorId,
    helperId
  } = (0,useWrapper/* useWrapper */.s)();
  (0,react.useEffect)(() => {
    if (fieldsetProps.legend === undefined) {
      console.error("You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: \"legend here\" }})");
    }
  }, []);
  const renderChildren = () => react.Children.map(children, child => /*#__PURE__*/react.cloneElement(child, {
    parentErrorId: errorId,
    error: error,
    parentHelperId: helperText ? helperId : false,
    disabled: rest.disabled
  }));
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.p, _extends({}, fieldsetProps, {
    required: rest.required
  }), /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    label: "",
    helperId: helperId,
    helperText: helperText,
    helperProps: {
      ...helperProps,
      className: "".concat(CheckboxWrapper_CheckboxWrapper_module["checkbox-wrapper-helper"], " ").concat(error ? CheckboxWrapper_CheckboxWrapper_module["checkbox-wrapper-error"] : "", " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    },
    error: error,
    errorMessageIcon: Icon/* Icons */.P.Error,
    errorId: errorId
  }), renderChildren()));
};

/**
 * @deprecated
 */
const CheckboxWrapper = /*#__PURE__*/react.forwardRef(CheckboxWrapperComponent);
try {
    // @ts-ignore
    CheckboxWrapper.displayName = "CheckboxWrapper";
    // @ts-ignore
    CheckboxWrapper.__docgenInfo = { "description": "", "displayName": "CheckboxWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "fieldsetProps": { "defaultValue": null, "description": "", "name": "fieldsetProps", "required": true, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx#CheckboxWrapper"] = { docgenInfo: CheckboxWrapper.__docgenInfo, name: "CheckboxWrapper", path: "src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx#CheckboxWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss":
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
 */.CheckboxWrapper-module__checkbox-wrapper-helper--pK6o6{margin-top:1.25rem}.CheckboxWrapper-module__checkbox-wrapper-error--jgZns span{font-size:1rem}.CheckboxWrapper-module__checkbox-wrapper-error--jgZns [data-icon]{font-size:1.375rem;vertical-align:bottom}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkbox-wrapper-helper": `CheckboxWrapper-module__checkbox-wrapper-helper--pK6o6`,
	"checkbox-wrapper-error": `CheckboxWrapper-module__checkbox-wrapper-error--jgZns`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);