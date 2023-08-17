"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7512],{

/***/ "./stories/Form/Wrapper/TextareaWrapper.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TextareaWrapper: function() { return /* binding */ TextareaWrapper_stories_TextareaWrapper; },
  TextareaWrapperDisabled: function() { return /* binding */ TextareaWrapperDisabled; },
  TextareaWrapperError: function() { return /* binding */ TextareaWrapperError; },
  TextareaWrapperRequired: function() { return /* binding */ TextareaWrapperRequired; },
  TextareaWrapperSuccess: function() { return /* binding */ TextareaWrapperSuccess; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ TextareaWrapper_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx + 1 modules
var TextareaWrapper = __webpack_require__("./src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Wrapper/TextareaWrapper.mdx



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
        children: "TextareaWrapper"
      }), " component has been created to make your life easier as well as make sure that accessibility is taken care of in a proper way. It requires you to pass at least 2 attributes. It needs a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " (which should be linked to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      }), " variable)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " event to update the linked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      }), " variable whenever the user types something inside of the rendered ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textarea"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "it-takes-care-of-proper-accessibility",
      children: "It takes care of proper accessibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TextareaWrapper"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "customize-textarea-html-element",
      children: ["Customize ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textarea"
      }), " HTML element"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can change anything pertaining to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textarea"
      }), " element that's rendered by passing a configuration object to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textareaProps"
      }), ". An example is shown below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A code example of how you can configure a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TextareaWrapper"
      }), " within a React component:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [textareaValue, setTextareaValue] = useState(\"\");\n\n  return (\n    <TextareaWrapper\n      label=\"Example textarea\"\n      name=\"Textarea\"\n      helperText=\"Example textarea helpertext\"\n      errorMessage=\"Textarea error message\"\n      onChange={e => setTextareaValue(e.target.value)}\n      textareaProps={{\n        rows: 50\n      }}\n      error={error}\n      value={textareaValue}\n    />\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: TextareaWrapper_stories_TextareaWrapper
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
/* harmony default export */ var Wrapper_TextareaWrapper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Wrapper/TextareaWrapper.stories.tsx
var _TextareaWrapper$para, _TextareaWrapper$para2, _TextareaWrapperError, _TextareaWrapperError2, _TextareaWrapperSucce, _TextareaWrapperSucce2, _TextareaWrapperDisab, _TextareaWrapperDisab2, _TextareaWrapperRequi, _TextareaWrapperRequi2;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
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
  title: "components/Inputs/Textarea (Wrapper)",
  component: TextareaWrapper/* TextareaWrapper */.o,
  parameters: {
    docs: {
      page: Wrapper_TextareaWrapper
    }
  },
  argTypes: {
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    success: {
      control: "boolean"
    }
  }
};
/* harmony default export */ var TextareaWrapper_stories = (meta);
var defaultArgs = {
  error: false,
  success: false,
  value: "Example value",
  onChange: function onChange() {},
  label: "Example textarea",
  name: "Textarea",
  helperText: "Example textarea helpertext",
  errorMessage: "This is an error message"
};
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(TextareaWrapper/* TextareaWrapper */.o, args);
};
var TextareaWrapper_stories_TextareaWrapper = Template.bind({});
TextareaWrapper_stories_TextareaWrapper.args = _objectSpread({}, defaultArgs);
var TextareaWrapperError = Template.bind({});
TextareaWrapperError.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {
  error: true
});
var TextareaWrapperSuccess = Template.bind({});
TextareaWrapperSuccess.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {
  success: true
});
var TextareaWrapperDisabled = Template.bind({});
TextareaWrapperDisabled.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {
  disabled: true
});
var TextareaWrapperRequired = Template.bind({});
TextareaWrapperRequired.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {
  required: true
});
TextareaWrapper_stories_TextareaWrapper.parameters = _objectSpread(_objectSpread({}, TextareaWrapper_stories_TextareaWrapper.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TextareaWrapper$para = TextareaWrapper_stories_TextareaWrapper.parameters) === null || _TextareaWrapper$para === void 0 ? void 0 : _TextareaWrapper$para.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TextareaWrapperComponent {...args} />"
    }, (_TextareaWrapper$para2 = TextareaWrapper_stories_TextareaWrapper.parameters) === null || _TextareaWrapper$para2 === void 0 || (_TextareaWrapper$para2 = _TextareaWrapper$para2.docs) === null || _TextareaWrapper$para2 === void 0 ? void 0 : _TextareaWrapper$para2.source)
  })
});
TextareaWrapperError.parameters = _objectSpread(_objectSpread({}, TextareaWrapperError.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TextareaWrapperError = TextareaWrapperError.parameters) === null || _TextareaWrapperError === void 0 ? void 0 : _TextareaWrapperError.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TextareaWrapperComponent {...args} />"
    }, (_TextareaWrapperError2 = TextareaWrapperError.parameters) === null || _TextareaWrapperError2 === void 0 || (_TextareaWrapperError2 = _TextareaWrapperError2.docs) === null || _TextareaWrapperError2 === void 0 ? void 0 : _TextareaWrapperError2.source)
  })
});
TextareaWrapperSuccess.parameters = _objectSpread(_objectSpread({}, TextareaWrapperSuccess.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TextareaWrapperSucce = TextareaWrapperSuccess.parameters) === null || _TextareaWrapperSucce === void 0 ? void 0 : _TextareaWrapperSucce.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TextareaWrapperComponent {...args} />"
    }, (_TextareaWrapperSucce2 = TextareaWrapperSuccess.parameters) === null || _TextareaWrapperSucce2 === void 0 || (_TextareaWrapperSucce2 = _TextareaWrapperSucce2.docs) === null || _TextareaWrapperSucce2 === void 0 ? void 0 : _TextareaWrapperSucce2.source)
  })
});
TextareaWrapperDisabled.parameters = _objectSpread(_objectSpread({}, TextareaWrapperDisabled.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TextareaWrapperDisab = TextareaWrapperDisabled.parameters) === null || _TextareaWrapperDisab === void 0 ? void 0 : _TextareaWrapperDisab.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TextareaWrapperComponent {...args} />"
    }, (_TextareaWrapperDisab2 = TextareaWrapperDisabled.parameters) === null || _TextareaWrapperDisab2 === void 0 || (_TextareaWrapperDisab2 = _TextareaWrapperDisab2.docs) === null || _TextareaWrapperDisab2 === void 0 ? void 0 : _TextareaWrapperDisab2.source)
  })
});
TextareaWrapperRequired.parameters = _objectSpread(_objectSpread({}, TextareaWrapperRequired.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TextareaWrapperRequi = TextareaWrapperRequired.parameters) === null || _TextareaWrapperRequi === void 0 ? void 0 : _TextareaWrapperRequi.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TextareaWrapperComponent {...args} />"
    }, (_TextareaWrapperRequi2 = TextareaWrapperRequired.parameters) === null || _TextareaWrapperRequi2 === void 0 || (_TextareaWrapperRequi2 = _TextareaWrapperRequi2.docs) === null || _TextareaWrapperRequi2 === void 0 ? void 0 : _TextareaWrapperRequi2.source)
  })
});
var __namedExportsOrder = ["TextareaWrapper", "TextareaWrapperError", "TextareaWrapperSuccess", "TextareaWrapperDisabled", "TextareaWrapperRequired"];

/***/ }),

/***/ "./src/hooks/useDetermineStatusIcon.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ useDetermineStatusIcon; }
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



var useDetermineStatusIcon = function useDetermineStatusIcon(params) {
  var _ref = params || false,
    error = _ref.error,
    success = _ref.success;
  var icon = null;
  var errorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var successRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (error) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: errorRef,
      "data-icon-status": "error",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.Error
    });
  } else if (success) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .J, {
      ref: successRef,
      "data-icon-status": "success",
      icon: _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P.CheckmarkCircleAlt
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

/***/ })

}]);