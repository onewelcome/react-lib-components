"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5044],{

/***/ "./stories/Form/Elements/Radio.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Radio: function() { return /* binding */ Radio_stories_Radio; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Radio_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Radio/Radio.tsx + 1 modules
var Radio = __webpack_require__("./src/components/Form/Radio/Radio.tsx");
// EXTERNAL MODULE: ./src/components/Form/Fieldset/Fieldset.tsx + 1 modules
var Fieldset = __webpack_require__("./src/components/Form/Fieldset/Fieldset.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Radio.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    a: "a",
    strong: "strong",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio"
      }), " component is a native HTML ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input"
      }), " element. And just like the native elements, it should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), ". This can be done by either nesting the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio"
      }), " component inside of a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Form"
      }), " component, or by linking to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), " element by using the appropriate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), " attribute. As is default with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<input type=\"radio\"/>"
      }), " HTMLElements, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio"
      }), "s are grouped together through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " attribute."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For proper accessibility, it is recommended to nest the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio"
      }), " component inside a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Fieldset"
      }), " component, so it has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "legend"
      }), " element that tells the end-user what they represent. ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/docs/stories-form-wrapper-radiowrapper--radio-wrapper",
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RadioWrapper"
        }), " component already does this for you."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each individual radio button can have its own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), ". By default, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), " will be shown ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "if"
      }), " this prop is filled in. As soon as the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), " prop is set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errorMessage"
      }), " will be shown."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A code example of how you could use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio"
      }), " component with state:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [radioValue, setRadioValue] = useState(\"option1\");\n\n  return (\n    <Fieldset legend=\"Radio button group\">\n      <Radio\n        name=\"example-name\"\n        value=\"option1\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option1\"}\n      >\n        Option 1\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option2\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option2\"}\n      >\n        Option 2\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option3\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option3\"}\n      >\n        Option 3\n      </Radio>\n      <Radio\n        name=\"example-name\"\n        value=\"option4\"\n        onChange={event => setRadioValue(event.target.value)}\n        checked={radioValue === \"option4\"}\n      >\n        Option 4\n      </Radio>\n    </Fieldset>\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Radio_stories_Radio
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
/* harmony default export */ var Elements_Radio = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/Radio.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _Radio$parameters, _Radio$parameters2;
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
  title: "components/Inputs/Raw/Radio",
  component: Radio/* Radio */.Y,
  parameters: {
    docs: {
      page: Elements_Radio
    }
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true
      },
      control: false
    },
    parentErrorId: {
      table: {
        disable: true
      },
      control: false
    },
    errorMessageId: {
      table: {
        disable: true
      },
      control: false
    },
    checked: {
      type: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};
/* harmony default export */ var Radio_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Fieldset/* Fieldset */.p, {
    legend: "Radio button group",
    legendStyle: "body-bold"
  }, /*#__PURE__*/react.createElement(Radio/* Radio */.Y, _extends({}, args, {
    helperText: "Example helpertext",
    errorMessage: "Example error message",
    value: "example-radio"
  }), "Label"));
};
var Radio_stories_Radio = Template.bind({});
Radio_stories_Radio.args = {};
Radio_stories_Radio.parameters = _objectSpread(_objectSpread({}, Radio_stories_Radio.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Radio$parameters = Radio_stories_Radio.parameters) === null || _Radio$parameters === void 0 ? void 0 : _Radio$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <Fieldset legend=\"Radio button group\" legendStyle={\"body-bold\"}>\n    <RadioComponent {...args} helperText=\"Example helpertext\" errorMessage=\"Example error message\" value=\"example-radio\">\n      Label\n    </RadioComponent>\n  </Fieldset>"
    }, (_Radio$parameters2 = Radio_stories_Radio.parameters) === null || _Radio$parameters2 === void 0 || (_Radio$parameters2 = _Radio$parameters2.docs) === null || _Radio$parameters2 === void 0 ? void 0 : _Radio$parameters2.source)
  })
});
var __namedExportsOrder = ["Radio"];

/***/ })

}]);