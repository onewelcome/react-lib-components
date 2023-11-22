"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3969],{

/***/ "./stories/Form/Wrapper/CheckboxWrapper.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Checkboxes: function() { return /* binding */ Checkboxes; },
  CheckboxesError: function() { return /* binding */ CheckboxesError; },
  NestedCheckboxes: function() { return /* binding */ NestedCheckboxes; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ CheckboxWrapper_stories; }
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
/* harmony default export */ var Wrapper_CheckboxWrapper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Wrapper/CheckboxWrapper.stories.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _Checkboxes$parameter, _Checkboxes$parameter2, _CheckboxesError$para, _CheckboxesError$para2, _NestedCheckboxes$par, _NestedCheckboxes$par2;
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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






var meta = {
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
/* harmony default export */ var CheckboxWrapper_stories = (meta);
var CheckboxesTemplate = function CheckboxesTemplate(args) {
  var _useState = (0,react.useState)({
      option1: false,
      option2: true,
      option3: true,
      option4: false,
      option5: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    checkboxStates = _useState2[0],
    setCheckboxStates = _useState2[1];
  var onChangeHandler = function onChangeHandler(event) {
    setCheckboxStates(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, event.target.value, !checkboxStates[event.target.value]));
    });
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
var Checkboxes = CheckboxesTemplate.bind({});
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
var NestedTemplate = function NestedTemplate(args) {
  var _useState3 = (0,react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    indeterminate = _useState4[0],
    setIndeterminate = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    electronics = _useState6[0],
    setElectronics = _useState6[1];
  var _useState7 = (0,react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    checkedLaptop = _useState8[0],
    setCheckedLaptop = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    checkedTV = _useState10[0],
    setCheckedTV = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    checkedMicrophone = _useState12[0],
    setCheckedMicrophone = _useState12[1];
  (0,react.useEffect)(function () {
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
  var handleElectronicsOnChange = function handleElectronicsOnChange() {
    setElectronics(!electronics);
    setCheckedLaptop(!electronics);
    setCheckedTV(!electronics);
    setCheckedMicrophone(!electronics);
  };
  var onLaptopCheckHandler = function onLaptopCheckHandler() {
    console.warn("Laptop Checked");
    setCheckedLaptop(!checkedLaptop);
  };
  var onTVCheckHandler = function onTVCheckHandler() {
    console.warn("TV Checked");
    setCheckedTV(!checkedTV);
  };
  var onMicrophoneCheckHandler = function onMicrophoneCheckHandler() {
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
var CheckboxesError = CheckboxesTemplate.bind({});
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
var NestedCheckboxes = NestedTemplate.bind({});
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
Checkboxes.parameters = _objectSpread(_objectSpread({}, Checkboxes.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Checkboxes$parameter = Checkboxes.parameters) === null || _Checkboxes$parameter === void 0 ? void 0 : _Checkboxes$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checkboxStates, setCheckboxStates] = useState({\n    option1: false,\n    option2: true,\n    option3: true,\n    option4: false,\n    option5: false\n  });\n  const onChangeHandler = event => {\n    setCheckboxStates(prevState => ({\n      ...prevState,\n      [event.target.value]: !checkboxStates[event.target.value]\n    }));\n  };\n  return <CheckboxWrapper {...args}>\n      <Checkbox checked={checkboxStates.option1} onChange={onChangeHandler} name=\"Option 1\" value=\"option1\">\n        Option 1\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option2} onChange={onChangeHandler} name=\"Option 2\" value=\"option2\">\n        Option 2\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option3} onChange={onChangeHandler} name=\"Option 3\" value=\"option3\">\n        Option 3\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option4} onChange={onChangeHandler} name=\"Option 4\" value=\"option4\">\n        Option 4\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option5} onChange={onChangeHandler} name=\"Option 5\" value=\"option5\">\n        Option 5\n      </Checkbox>\n    </CheckboxWrapper>;\n}"
    }, (_Checkboxes$parameter2 = Checkboxes.parameters) === null || _Checkboxes$parameter2 === void 0 || (_Checkboxes$parameter2 = _Checkboxes$parameter2.docs) === null || _Checkboxes$parameter2 === void 0 ? void 0 : _Checkboxes$parameter2.source)
  })
});
CheckboxesError.parameters = _objectSpread(_objectSpread({}, CheckboxesError.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CheckboxesError$para = CheckboxesError.parameters) === null || _CheckboxesError$para === void 0 ? void 0 : _CheckboxesError$para.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checkboxStates, setCheckboxStates] = useState({\n    option1: false,\n    option2: true,\n    option3: true,\n    option4: false,\n    option5: false\n  });\n  const onChangeHandler = event => {\n    setCheckboxStates(prevState => ({\n      ...prevState,\n      [event.target.value]: !checkboxStates[event.target.value]\n    }));\n  };\n  return <CheckboxWrapper {...args}>\n      <Checkbox checked={checkboxStates.option1} onChange={onChangeHandler} name=\"Option 1\" value=\"option1\">\n        Option 1\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option2} onChange={onChangeHandler} name=\"Option 2\" value=\"option2\">\n        Option 2\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option3} onChange={onChangeHandler} name=\"Option 3\" value=\"option3\">\n        Option 3\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option4} onChange={onChangeHandler} name=\"Option 4\" value=\"option4\">\n        Option 4\n      </Checkbox>\n      <Checkbox checked={checkboxStates.option5} onChange={onChangeHandler} name=\"Option 5\" value=\"option5\">\n        Option 5\n      </Checkbox>\n    </CheckboxWrapper>;\n}"
    }, (_CheckboxesError$para2 = CheckboxesError.parameters) === null || _CheckboxesError$para2 === void 0 || (_CheckboxesError$para2 = _CheckboxesError$para2.docs) === null || _CheckboxesError$para2 === void 0 ? void 0 : _CheckboxesError$para2.source)
  })
});
NestedCheckboxes.parameters = _objectSpread(_objectSpread({}, NestedCheckboxes.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_NestedCheckboxes$par = NestedCheckboxes.parameters) === null || _NestedCheckboxes$par === void 0 ? void 0 : _NestedCheckboxes$par.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [indeterminate, setIndeterminate] = useState(true);\n  const [electronics, setElectronics] = useState(false);\n  const [checkedLaptop, setCheckedLaptop] = useState(true);\n  const [checkedTV, setCheckedTV] = useState(false);\n  const [checkedMicrophone, setCheckedMicrophone] = useState(false);\n  useEffect(() => {\n    if (checkedLaptop && checkedTV && checkedMicrophone) {\n      setElectronics(true);\n      setIndeterminate(false);\n    } else if (checkedLaptop || checkedTV || checkedMicrophone) {\n      setElectronics(false);\n      setIndeterminate(true);\n    } else {\n      setElectronics(false);\n      setIndeterminate(false);\n    }\n  }, [checkedLaptop, checkedTV, checkedMicrophone]);\n  const handleElectronicsOnChange = () => {\n    setElectronics(!electronics);\n    setCheckedLaptop(!electronics);\n    setCheckedTV(!electronics);\n    setCheckedMicrophone(!electronics);\n  };\n  const onLaptopCheckHandler = () => {\n    console.warn(\"Laptop Checked\");\n    setCheckedLaptop(!checkedLaptop);\n  };\n  const onTVCheckHandler = () => {\n    console.warn(\"TV Checked\");\n    setCheckedTV(!checkedTV);\n  };\n  const onMicrophoneCheckHandler = () => {\n    console.warn(\"Microphone Checked\");\n    setCheckedMicrophone(!checkedMicrophone);\n  };\n  return <div>\n      <CheckboxWrapper {...args}>\n        <Checkbox indeterminate={indeterminate} checked={electronics} name=\"electronics\" label=\"Electronics\" onChange={handleElectronicsOnChange}>\n          <Checkbox onChange={onLaptopCheckHandler} checked={checkedLaptop} helperText=\"More examples\" name=\"laptop\">\n            Laptop\n          </Checkbox>\n          <Checkbox onChange={onTVCheckHandler} checked={checkedTV} name=\"tv\">\n            TVs\n          </Checkbox>\n          <Checkbox onChange={onMicrophoneCheckHandler} checked={checkedMicrophone} name=\"microphones\">\n            Microphones\n          </Checkbox>\n        </Checkbox>\n      </CheckboxWrapper>\n    </div>;\n}"
    }, (_NestedCheckboxes$par2 = NestedCheckboxes.parameters) === null || _NestedCheckboxes$par2 === void 0 || (_NestedCheckboxes$par2 = _NestedCheckboxes$par2.docs) === null || _NestedCheckboxes$par2 === void 0 ? void 0 : _NestedCheckboxes$par2.source)
  })
});
var __namedExportsOrder = ["Checkboxes", "CheckboxesError", "NestedCheckboxes"];

/***/ }),

/***/ "./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ CheckboxWrapper; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss
var CheckboxWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(CheckboxWrapper_module/* default */.Z, options);




       /* harmony default export */ var CheckboxWrapper_CheckboxWrapper_module = (CheckboxWrapper_module/* default */.Z && CheckboxWrapper_module/* default */.Z.locals ? CheckboxWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["children", "error", "helperText", "helperProps", "fieldsetProps"];
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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







var CheckboxWrapperComponent = function CheckboxWrapperComponent(_ref, ref) {
  var _helperProps$classNam;
  var children = _ref.children,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    helperText = _ref.helperText,
    helperProps = _ref.helperProps,
    fieldsetProps = _ref.fieldsetProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useWrapper = (0,useWrapper/* useWrapper */.s)(),
    errorId = _useWrapper.errorId,
    helperId = _useWrapper.helperId;
  (0,react.useEffect)(function () {
    if (fieldsetProps.legend === undefined) {
      console.error("You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: \"legend here\" }})");
    }
  }, []);
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      return /*#__PURE__*/react.cloneElement(child, {
        parentErrorId: errorId,
        error: error,
        parentHelperId: helperText ? helperId : false,
        disabled: rest.disabled
      });
    });
  };
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.p, _extends({}, fieldsetProps, {
    required: rest.required
  }), /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    label: "",
    helperId: helperId,
    helperText: helperText,
    helperProps: _objectSpread(_objectSpread({}, helperProps), {}, {
      className: "".concat(CheckboxWrapper_CheckboxWrapper_module["checkbox-wrapper-helper"], " ").concat(error ? CheckboxWrapper_CheckboxWrapper_module["checkbox-wrapper-error"] : "", " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "")
    }),
    error: error,
    errorMessageIcon: Icon/* Icons */.P.Error,
    errorId: errorId
  }), renderChildren()));
};

/**
 * @deprecated
 */
var CheckboxWrapper = /*#__PURE__*/react.forwardRef(CheckboxWrapperComponent);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.CheckboxWrapper-module__checkbox-wrapper-helper--pK6o6{margin-top:1.25rem}.CheckboxWrapper-module__checkbox-wrapper-error--jgZns span{font-size:1rem}.CheckboxWrapper-module__checkbox-wrapper-error--jgZns [data-icon]{font-size:1.375rem;vertical-align:bottom}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkbox-wrapper-helper": "CheckboxWrapper-module__checkbox-wrapper-helper--pK6o6",
	"checkbox-wrapper-error": "CheckboxWrapper-module__checkbox-wrapper-error--jgZns"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);