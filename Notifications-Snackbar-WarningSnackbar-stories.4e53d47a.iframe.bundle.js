"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9532],{

/***/ "./stories/Notifications/Snackbar/WarningSnackbar.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WarningSnackbar: function() { return /* binding */ WarningSnackbar_stories_WarningSnackbar; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ WarningSnackbar_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx + 5 modules
var SnackbarProvider = __webpack_require__("./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/Snackbar/useSnackbar.ts
var useSnackbar = __webpack_require__("./src/components/Notifications/Snackbar/useSnackbar.ts");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/WarningSnackbar.mdx



/*@jsxRuntime automatic @jsxImportSource react*/


function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsx)(_components.p, {
    children: (0,jsx_runtime.jsx)(_components.a, {
      href: "/docs/components-feedback-snackbar-snackbar--docs",
      children: "See the general Snackbar documentation"
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var WarningSnackbar = (MDXContent);

// EXTERNAL MODULE: ./stories/Notifications/Snackbar/Stories.module.scss
var Stories_module = __webpack_require__("./stories/Notifications/Snackbar/Stories.module.scss");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/WarningSnackbar.stories.tsx
var _WarningSnackbar$para, _WarningSnackbar$para2;
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







/**
 * We want to disable autogenerated docs for a single story, but we can't currently... https://github.com/storybookjs/storybook/issues/21085
 */
var meta = {
  title: "components/Feedback/Snackbar/WarningSnackbar",
  component: SnackbarProvider/* SnackbarProvider */.w,
  parameters: {
    docs: {
      page: WarningSnackbar,
      description: {
        component: "We want to disable autogenerated docs for a single story, but we can't currently... https://github.com/storybookjs/storybook/issues/21085"
      }
    }
  }
};
/* harmony default export */ var WarningSnackbar_stories = (meta);
var AppContent = function AppContent() {
  var _useSnackbar = (0,useSnackbar/* useSnackbar */.D)(),
    enqueueWarningSnackbar = _useSnackbar.enqueueWarningSnackbar;
  (0,react.useEffect)(function () {
    enqueueWarningSnackbar(undefined, "Alert message", {
      actions: [{
        label: "Action",
        onClick: function onClick() {
          return alert("Clicked support");
        }
      }],
      onClose: function onClose() {
        return console.warn("onClose handler");
      },
      duration: 200000,
      className: Stories_module/* default */.Z["remove-animation"]
    });
  }, []);
  return null;
};
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(SnackbarProvider/* SnackbarProvider */.w, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(AppContent, null));
};
var WarningSnackbar_stories_WarningSnackbar = Template.bind({});
WarningSnackbar_stories_WarningSnackbar.parameters = _objectSpread(_objectSpread({}, WarningSnackbar_stories_WarningSnackbar.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_WarningSnackbar$para = WarningSnackbar_stories_WarningSnackbar.parameters) === null || _WarningSnackbar$para === void 0 ? void 0 : _WarningSnackbar$para.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <AppContent />\n    </SnackbarProvider>;\n}"
    }, (_WarningSnackbar$para2 = WarningSnackbar_stories_WarningSnackbar.parameters) === null || _WarningSnackbar$para2 === void 0 || (_WarningSnackbar$para2 = _WarningSnackbar$para2.docs) === null || _WarningSnackbar$para2 === void 0 ? void 0 : _WarningSnackbar$para2.source)
  })
});
var __namedExportsOrder = ["WarningSnackbar"];

/***/ })

}]);