"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9373],{

/***/ "./stories/Form/Elements/Fieldset.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Fieldset": function() { return /* binding */ Fieldset_stories_Fieldset; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Fieldset_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
// EXTERNAL MODULE: ./src/components/Form/FormControl/FormControl.tsx + 1 modules
var FormControl = __webpack_require__("./src/components/Form/FormControl/FormControl.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/Option.tsx");
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("./src/components/Form/Form.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx + 1 modules
var SelectWrapper = __webpack_require__("./src/components/Form/Wrapper/SelectWrapper/SelectWrapper.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Fieldset.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      ul: "ul",
      li: "li",
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component is created to improve accessibility and give you an easier time with creating sections between parts of the form. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), " prop will create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "legend"
        }), " HTMLElement for you, which is hidden and used for screenreader purposes only. A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Typography"
        }), " component that you can control through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "titleVariant"
        }), " prop is rendered instead. You can also optionally hide the title by providing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hideTitle"
        }), " prop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["By default, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component will propagate its ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        }), " prop to any Form component nested inside of it. This includes the following components:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Checkbox"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "CheckboxWrapper"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FormControl"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FormHelperText"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "FormSelectorWrapper"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Input"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "InputWrapper"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Label"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Radio"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "RadioWrapper"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Select"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SelectWrapper"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Textarea"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "TextareaWrapper"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Toggle"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If, for some reason, you want to handle all of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disabled"
        }), " props yourself, you can set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "disablePropagation"
        }), " prop of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ". This will disable this behavior."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Below you will find an example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fieldset"
        }), " component:"]
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Fieldset_stories_Fieldset,
          id: "components-layout-fieldset--fieldset"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "And here's how that would look like in your code:"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const ExampleComponent = () => {\n  const [prefix, setPrefix] = useState(\"mr\");\n  const [firstName, setFirstName] = useState(\"\");\n  const [date, setDate] = useState(\"\");\n\n  return (\n    <Form style={{ padding: \"20px\", backgroundColor: \"#F5F8F8\" }}>\n      <Fieldset legend=\"Name\">\n        <FormControl grid={3} align=\"top\">\n          <SelectWrapper\n            name=\"prefix\"\n            label=\"Prefix\"\n            value={prefix}\n            onChange={event => setPrefix(event.target.value)}\n          >\n            <Option disabled value={undefined}>\n              Prefix\n            </Option>\n            <Option value=\"mr\">Mr.</Option>\n            <Option value=\"mrs\">Mrs.</Option>\n          </SelectWrapper>\n          <InputWrapper\n            onChange={event => setFirstName(event.target.value)}\n            label=\"First name\"\n            errorMessage={\"Error message\"}\n            error={false}\n            value={firstName}\n            helperText={\"Helper text\"}\n            name=\"first-name\"\n            type=\"text\"\n          />\n          <InputWrapper\n            onChange={event => setDate(event.target.value)}\n            label=\"Last name\"\n            errorMessage={\"Error message\"}\n            error={false}\n            value={date}\n            helperText={\"Helper text\"}\n            name=\"callback-time\"\n            type=\"datetime-local\"\n          />\n        </FormControl>\n      </Fieldset>\n    </Form>\n  );\n};\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var Elements_Fieldset = (MDXContent);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./stories/Form/Elements/Fieldset.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _Fieldset$parameters, _Fieldset$parameters2, _Fieldset$parameters3;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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
  title: "components/Layout/Fieldset",
  component: Fieldset/* Fieldset */.p,
  parameters: {
    docs: {
      page: Elements_Fieldset
    }
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    background: {
      control: {
        type: "color"
      }
    }
  }
};
/* harmony default export */ var Fieldset_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)("mr"),
    _useState2 = _slicedToArray(_useState, 2),
    prefix = _useState2[0],
    setPrefix = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    firstName = _useState4[0],
    setFirstName = _useState4[1];
  var _useState5 = (0,react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    lastName = _useState6[0],
    setLastName = _useState6[1];
  return /*#__PURE__*/react.createElement(Form/* Form */.l, {
    style: {
      padding: "20px",
      backgroundColor: "#F5F8F8"
    }
  }, /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.p, _extends({}, args, {
    legend: "Name"
  }), /*#__PURE__*/react.createElement(FormControl/* FormControl */.N, {
    grid: 3,
    align: "top"
  }, /*#__PURE__*/react.createElement(SelectWrapper/* SelectWrapper */.b, {
    name: "prefix",
    label: "Prefix",
    value: prefix,
    onChange: function onChange(event) {
      return setPrefix(event.target.value);
    }
  }, /*#__PURE__*/react.createElement(Option/* Option */.W, {
    disabled: true,
    value: ""
  }, "Prefix"), /*#__PURE__*/react.createElement(Option/* Option */.W, {
    value: "mr"
  }, "Mr."), /*#__PURE__*/react.createElement(Option/* Option */.W, {
    value: "mrs"
  }, "Mrs.")), /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    onChange: function onChange(event) {
      return setFirstName(event.target.value);
    },
    label: "First name",
    errorMessage: "Error message",
    error: false,
    value: firstName,
    helperText: "Helper text",
    name: "first-name",
    type: "text"
  }), /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    onChange: function onChange(event) {
      return setLastName(event.target.value);
    },
    label: "Last name",
    errorMessage: "Error message",
    error: false,
    value: lastName,
    helperText: "Helper text",
    name: "last-name",
    type: "text"
  })), /*#__PURE__*/react.createElement(Button/* Button */.z, null, "Test")));
};
var Fieldset_stories_Fieldset = Template.bind({});
Fieldset_stories_Fieldset.args = {};
Fieldset_stories_Fieldset.parameters = _objectSpread(_objectSpread({}, Fieldset_stories_Fieldset.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Fieldset$parameters = Fieldset_stories_Fieldset.parameters) === null || _Fieldset$parameters === void 0 ? void 0 : _Fieldset$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [prefix, setPrefix] = useState(\"mr\");\n  const [firstName, setFirstName] = useState(\"\");\n  const [lastName, setLastName] = useState(\"\");\n  return <Form style={{\n    padding: \"20px\",\n    backgroundColor: \"#F5F8F8\"\n  }}>\n      <FieldsetComponent {...args} legend=\"Name\">\n        <FormControl grid={3} align=\"top\">\n          <SelectWrapper name=\"prefix\" label=\"Prefix\" value={prefix} onChange={event => setPrefix(event.target.value)}>\n            <Option disabled value={\"\"}>\n              Prefix\n            </Option>\n            <Option value=\"mr\">Mr.</Option>\n            <Option value=\"mrs\">Mrs.</Option>\n          </SelectWrapper>\n          <InputWrapper onChange={event => setFirstName(event.target.value)} label=\"First name\" errorMessage={\"Error message\"} error={false} value={firstName} helperText={\"Helper text\"} name=\"first-name\" type=\"text\" />\n          <InputWrapper onChange={event => setLastName(event.target.value)} label=\"Last name\" errorMessage={\"Error message\"} error={false} value={lastName} helperText={\"Helper text\"} name=\"last-name\" type=\"text\" />\n        </FormControl>\n        <Button>Test</Button>\n      </FieldsetComponent>\n    </Form>;\n}"
    }, (_Fieldset$parameters2 = Fieldset_stories_Fieldset.parameters) === null || _Fieldset$parameters2 === void 0 ? void 0 : (_Fieldset$parameters3 = _Fieldset$parameters2.docs) === null || _Fieldset$parameters3 === void 0 ? void 0 : _Fieldset$parameters3.source)
  })
});
var __namedExportsOrder = ["Fieldset"];

/***/ }),

/***/ "./src/components/Form/Form.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": function() { return /* binding */ Form; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss
var Form_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Form.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Form_module/* default */.Z, options);




       /* harmony default export */ var Form_Form_module = (Form_module/* default */.Z && Form_module/* default.locals */.Z.locals ? Form_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Form.tsx
var _excluded = ["children", "className"];
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



var FormComponent = function FormComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("form", _extends({
    ref: ref,
    className: "".concat(Form_Form_module.form, " ").concat(className !== null && className !== void 0 ? className : "")
  }, rest), children);
};
var Form = /*#__PURE__*/react.forwardRef(FormComponent);
try {
    // @ts-ignore
    Form.displayName = "Form";
    // @ts-ignore
    Form.__docgenInfo = { "description": "", "displayName": "Form", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Form.tsx#Form"] = { docgenInfo: Form.__docgenInfo, name: "Form", path: "src/components/Form/Form.tsx#Form" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/Option.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ Option; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/Select.module.scss");
var _excluded = ["children", "className", "isSelected", "shouldClick", "hasFocus", "selectOpened", "isSearching", "childIndex", "onOptionSelect", "onFocusChange", "disabled", "value"];
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



var OptionComponent = function OptionComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$isSelected = _ref.isSelected,
    isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
    shouldClick = _ref.shouldClick,
    hasFocus = _ref.hasFocus,
    selectOpened = _ref.selectOpened,
    isSearching = _ref.isSearching,
    childIndex = _ref.childIndex,
    onOptionSelect = _ref.onOptionSelect,
    onFocusChange = _ref.onFocusChange,
    disabled = _ref.disabled,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);
  var onSelectHandler = function onSelectHandler() {
    if (onOptionSelect) onOptionSelect(innerOptionRef);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({}, rest, {
    ref: innerOptionRef,
    "data-value": value,
    className: "".concat(isSelected ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["selected-option"] */ .Z["selected-option"] : "", " ").concat(disabled ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].disabled */ .Z.disabled : "", " ").concat(className !== null && className !== void 0 ? className : ""),
    onClick: onSelectHandler,
    onKeyDownCapture: function onKeyDownCapture(event) {
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
var Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(OptionComponent);
try {
    // @ts-ignore
    Option.displayName = "Option";
    // @ts-ignore
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Form.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Form-module__form--Nl9sb{font-family:var(--font-family)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": "Form-module__form--Nl9sb"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);