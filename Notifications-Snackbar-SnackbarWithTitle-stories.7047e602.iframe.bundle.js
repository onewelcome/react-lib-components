"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9623],{

/***/ "./stories/Notifications/Snackbar/SnackbarWithTitle.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SnackbarWithTitle: function() { return /* binding */ SnackbarWithTitle_stories_SnackbarWithTitle; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ SnackbarWithTitle_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx + 5 modules
var SnackbarProvider = __webpack_require__("./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/Snackbar/useSnackbar.ts
var useSnackbar = __webpack_require__("./src/components/Notifications/Snackbar/useSnackbar.ts");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/SnackbarWithTitle.mdx



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
/* harmony default export */ var SnackbarWithTitle = (MDXContent);

// EXTERNAL MODULE: ./stories/Notifications/Snackbar/Stories.module.scss
var Stories_module = __webpack_require__("./stories/Notifications/Snackbar/Stories.module.scss");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/SnackbarWithTitle.stories.tsx
var _SnackbarWithTitle$pa, _SnackbarWithTitle$pa2;
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
  title: "components/Feedback/Snackbar/SnackbarWithTitle",
  component: SnackbarProvider/* SnackbarProvider */.w,
  parameters: {
    docs: {
      page: SnackbarWithTitle,
      description: {
        component: "We want to disable autogenerated docs for a single story, but we can't currently... https://github.com/storybookjs/storybook/issues/21085"
      }
    }
  }
};
/* harmony default export */ var SnackbarWithTitle_stories = (meta);
var AppContent = function AppContent() {
  var _useSnackbar = (0,useSnackbar/* useSnackbar */.D)(),
    enqueueSnackbar = _useSnackbar.enqueueSnackbar;
  (0,react.useEffect)(function () {
    enqueueSnackbar("This is a title", "Phasellus eleifend cursus vehicula. Pellentesque ut sem in elit pulvinar luctus.", {
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
var SnackbarWithTitle_stories_SnackbarWithTitle = Template.bind({});
SnackbarWithTitle_stories_SnackbarWithTitle.parameters = _objectSpread(_objectSpread({}, SnackbarWithTitle_stories_SnackbarWithTitle.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SnackbarWithTitle$pa = SnackbarWithTitle_stories_SnackbarWithTitle.parameters) === null || _SnackbarWithTitle$pa === void 0 ? void 0 : _SnackbarWithTitle$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <AppContent />\n    </SnackbarProvider>;\n}"
    }, (_SnackbarWithTitle$pa2 = SnackbarWithTitle_stories_SnackbarWithTitle.parameters) === null || _SnackbarWithTitle$pa2 === void 0 || (_SnackbarWithTitle$pa2 = _SnackbarWithTitle$pa2.docs) === null || _SnackbarWithTitle$pa2 === void 0 ? void 0 : _SnackbarWithTitle$pa2.source)
  })
});
var __namedExportsOrder = ["SnackbarWithTitle"];

/***/ })

}]);