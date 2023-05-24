"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9228],{

/***/ "./stories/Button/Button.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DisabledButton": function() { return /* binding */ DisabledButton; },
  "EndIconButton": function() { return /* binding */ EndIconButton; },
  "FilledButton": function() { return /* binding */ FilledButton; },
  "LoadingButton": function() { return /* binding */ LoadingButton; },
  "OutlineButton": function() { return /* binding */ OutlineButton; },
  "StartIconButton": function() { return /* binding */ StartIconButton; },
  "TextButton": function() { return /* binding */ TextButton; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Button_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Button/Button.mdx



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
      strong: "strong",
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Button"
        }), " component is used to display a button with a label and an optional icon at the start or end."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Button"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IconButton"
        }), " are used to perform certain actions. These actions should ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " be a route change or a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "link"
        }), " to somewhere. It should trigger a change on the page itself such as opening a modal or submitting a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Form"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the below code snippet you'll see how you can create the buttons displayed down below."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Button>\n  This is a button\n</Button>\n\n<Button variant=\"outline\">\n  This is a button\n</Button>\n\n<Button variant=\"text\">\n  This is a button\n</Button>\n\n<Button variant=\"filled\" startIcon={<Icon icon={Icons.Calendar} />}>\n  This is a button\n</Button>\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(dist/* Canvas */.Xz, {
        children: [(0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: FilledButton
        }), (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: OutlineButton
        }), (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: TextButton
        }), (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: StartIconButton
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var Button_Button = (MDXContent);

;// CONCATENATED MODULE: ./stories/Button/Button.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _FilledButton$paramet, _FilledButton$paramet2, _FilledButton$paramet3, _OutlineButton$parame, _OutlineButton$parame2, _OutlineButton$parame3, _TextButton$parameter, _TextButton$parameter2, _TextButton$parameter3, _StartIconButton$para, _StartIconButton$para2, _StartIconButton$para3, _EndIconButton$parame, _EndIconButton$parame2, _EndIconButton$parame3, _DisabledButton$param, _DisabledButton$param2, _DisabledButton$param3, _LoadingButton$parame, _LoadingButton$parame2, _LoadingButton$parame3;
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
  title: "components/Inputs/Button",
  component: Button/* Button */.z,
  parameters: {
    docs: {
      page: Button_Button
    }
  },
  argTypes: {
    startIcon: {
      options: Icon/* Icons */.P,
      control: {
        type: "select"
      }
    },
    endIcon: {
      options: Icon/* Icons */.P,
      control: {
        type: "select"
      }
    }
  }
};
/* harmony default export */ var Button_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Button/* Button */.z, _extends({}, args, {
    title: "This is a button",
    startIcon: (args === null || args === void 0 ? void 0 : args.startIcon) && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: args === null || args === void 0 ? void 0 : args.startIcon
    }),
    endIcon: (args === null || args === void 0 ? void 0 : args.endIcon) && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: args === null || args === void 0 ? void 0 : args.endIcon
    })
  }), "This is a button");
};
var FilledButton = Template.bind({});
FilledButton.args = {
  color: "primary",
  variant: "fill",
  type: "button"
};
var OutlineButton = Template.bind({});
OutlineButton.args = {
  color: "primary",
  variant: "outline",
  type: "button"
};
var TextButton = Template.bind({});
TextButton.args = {
  color: "primary",
  variant: "text",
  type: "button"
};
var StartIconButton = Template.bind({});
var EndIconButton = Template.bind({});
StartIconButton.args = {
  startIcon: Icon/* Icons.Calendar */.P.Calendar,
  color: "primary",
  variant: "fill",
  type: "button"
};
EndIconButton.args = {
  endIcon: Icon/* Icons.Calendar */.P.Calendar,
  color: "primary",
  variant: "fill",
  type: "button"
};
var DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true
};
var LoadingButton = Template.bind({});
LoadingButton.args = {
  loading: true
};
FilledButton.parameters = _objectSpread(_objectSpread({}, FilledButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FilledButton$paramet = FilledButton.parameters) === null || _FilledButton$paramet === void 0 ? void 0 : _FilledButton$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_FilledButton$paramet2 = FilledButton.parameters) === null || _FilledButton$paramet2 === void 0 ? void 0 : (_FilledButton$paramet3 = _FilledButton$paramet2.docs) === null || _FilledButton$paramet3 === void 0 ? void 0 : _FilledButton$paramet3.source)
  })
});
OutlineButton.parameters = _objectSpread(_objectSpread({}, OutlineButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_OutlineButton$parame = OutlineButton.parameters) === null || _OutlineButton$parame === void 0 ? void 0 : _OutlineButton$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_OutlineButton$parame2 = OutlineButton.parameters) === null || _OutlineButton$parame2 === void 0 ? void 0 : (_OutlineButton$parame3 = _OutlineButton$parame2.docs) === null || _OutlineButton$parame3 === void 0 ? void 0 : _OutlineButton$parame3.source)
  })
});
TextButton.parameters = _objectSpread(_objectSpread({}, TextButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TextButton$parameter = TextButton.parameters) === null || _TextButton$parameter === void 0 ? void 0 : _TextButton$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_TextButton$parameter2 = TextButton.parameters) === null || _TextButton$parameter2 === void 0 ? void 0 : (_TextButton$parameter3 = _TextButton$parameter2.docs) === null || _TextButton$parameter3 === void 0 ? void 0 : _TextButton$parameter3.source)
  })
});
StartIconButton.parameters = _objectSpread(_objectSpread({}, StartIconButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_StartIconButton$para = StartIconButton.parameters) === null || _StartIconButton$para === void 0 ? void 0 : _StartIconButton$para.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_StartIconButton$para2 = StartIconButton.parameters) === null || _StartIconButton$para2 === void 0 ? void 0 : (_StartIconButton$para3 = _StartIconButton$para2.docs) === null || _StartIconButton$para3 === void 0 ? void 0 : _StartIconButton$para3.source)
  })
});
EndIconButton.parameters = _objectSpread(_objectSpread({}, EndIconButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_EndIconButton$parame = EndIconButton.parameters) === null || _EndIconButton$parame === void 0 ? void 0 : _EndIconButton$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_EndIconButton$parame2 = EndIconButton.parameters) === null || _EndIconButton$parame2 === void 0 ? void 0 : (_EndIconButton$parame3 = _EndIconButton$parame2.docs) === null || _EndIconButton$parame3 === void 0 ? void 0 : _EndIconButton$parame3.source)
  })
});
DisabledButton.parameters = _objectSpread(_objectSpread({}, DisabledButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_DisabledButton$param = DisabledButton.parameters) === null || _DisabledButton$param === void 0 ? void 0 : _DisabledButton$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_DisabledButton$param2 = DisabledButton.parameters) === null || _DisabledButton$param2 === void 0 ? void 0 : (_DisabledButton$param3 = _DisabledButton$param2.docs) === null || _DisabledButton$param3 === void 0 ? void 0 : _DisabledButton$param3.source)
  })
});
LoadingButton.parameters = _objectSpread(_objectSpread({}, LoadingButton.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_LoadingButton$parame = LoadingButton.parameters) === null || _LoadingButton$parame === void 0 ? void 0 : _LoadingButton$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <Button {...args} title=\"This is a button\" startIcon={args?.startIcon && <Icon icon={(args?.startIcon as Icons)} />} endIcon={args?.endIcon && <Icon icon={(args?.endIcon as Icons)} />}>\n      This is a button\n    </Button>;\n}"
    }, (_LoadingButton$parame2 = LoadingButton.parameters) === null || _LoadingButton$parame2 === void 0 ? void 0 : (_LoadingButton$parame3 = _LoadingButton$parame2.docs) === null || _LoadingButton$parame3 === void 0 ? void 0 : _LoadingButton$parame3.source)
  })
});
var __namedExportsOrder = ["FilledButton", "OutlineButton", "TextButton", "StartIconButton", "EndIconButton", "DisabledButton", "LoadingButton"];

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



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