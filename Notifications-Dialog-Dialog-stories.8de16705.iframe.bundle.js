"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7152],{

/***/ "./stories/Notifications/Dialog/Dialog.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LeftAlignedActionDialog": function() { return /* binding */ LeftAlignedActionDialog; },
  "NestedDialogs": function() { return /* binding */ NestedDialogs; },
  "RightAlignedActionDialog": function() { return /* binding */ RightAlignedActionDialog; },
  "SingleActionDialog": function() { return /* binding */ SingleActionDialog; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Dialog_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/Dialog/Dialog.tsx + 5 modules
var Dialog = __webpack_require__("./src/components/Notifications/Dialog/Dialog.tsx");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/Dialog/Dialog.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      h1: "h1",
      em: "em",
      h2: "h2",
      pre: "pre",
      code: "code"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Dialogs are used when immediate user interaction is required.\nThey block interaction with the application until a user has made a choice.\nDialogs appear as a modal on top of the existing content."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "When the user presses enter without tabbing through the interface, the primary button is triggered, even when it is a destructive action.\nThere is no X (close) button, no event handler for the escape key and the dialog stays open when you click outside the dialog."
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The use of dialogues is very broad. See example usage below."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Note: triggering primary button on pressing enter doesn't work in documentation section (Enter key is intercepted)."
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "action-dialog",
        children: "Action dialog"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the below code snippet, you'll see how you can show dialog with buttons align to right."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Dialog\n  open={open}\n  onClose={onClose}\n  alignActions=\"right\"\n  title=\"Verify email address\"\n  primaryAction={label: 'Send email', onClick: onSendEmail}\n  secondaryAction={label: 'Cancel', onClick: onCancel}\n>\n  <Fragment>\n    <Typography variant=\"body\">\n      You want to verify the email address <b>dana.george@mydomain.com</b>.\n    </Typography>\n    <Typography variant=\"body\" spacing={{ margin: 0 }}>\n      <b>Dana George</b> will receive an email with a verification link and must click the link to\n      complete the verification.\n    </Typography>\n  </Fragment>\n</Dialog>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: RightAlignedActionDialog
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "destructive-operation",
        children: "Destructive operation"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In case of a destructive operation, the buttons align to the left instead of the right. This is to let users deliberately perform this destructive action."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the below code snippet, you'll see how you can show dialog with buttons align to left."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Dialog\n  open={open}\n  onClose={onClose}\n  alignActions=\"left\"\n  title=\"Discard changes?\"\n  primaryAction={label: 'Discard', onClick: onDiscard}\n  secondaryAction={label: 'Keep editing', onClick: onKeepEditing}\n>\n  <Typography variant=\"body\" spacing={{ margin: 0 }}>\n    This cannot be undone and you will lose your changes.\n  </Typography>\n</Dialog>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: LeftAlignedActionDialog
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "single-action",
        children: "Single action"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the below code snippet, you'll see how you can show dialog with on one button"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Dialog\n  open={open}\n  onClose={onClose}\n  alignActions=\"right\"\n  title=\"Info\"\n  primaryAction={label: 'Ok', onClick}\n>\n  <Typography variant=\"body\" spacing={{ margin: 0 }}>\n    You can't remove your account.\n  </Typography>\n</Dialog>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: SingleActionDialog
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "nesting-dialogs",
        children: "Nesting dialogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the below code snippet, you'll see how you can nest dialogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const [open, setOpen] = useState(false);\nconst [open2, setOpen2] = useState(false);\nreturn (\n  <Fragment>\n    <Button onClick={() => setOpen(true)}>Open dialog</Button>\n    <Dialog\n      open={open}\n      alignActions=\"right\"\n      title=\"Dialog 1\"\n      onClose={() => setOpen(false)}\n      primaryAction={{\n        label: \"Open another dialog\",\n        onClick: () => setOpen2(true)\n      }}\n      secondaryAction={{\n        label: \"Close\",\n        onClick: () => setOpen(false)\n      }}\n    >\n      <Typography variant=\"body\" spacing={{ margin: 0 }}>\n        Long dialog content. Long dialog content. Long dialog content. Long dialog content. Long\n        dialog content.\n      </Typography>\n    </Dialog>\n    <Dialog\n      open={open2}\n      onClose={() => setOpen2(false)}\n      alignActions=\"left\"\n      title=\"Dialog 2\"\n      primaryAction={{\n        label: \"Close\",\n        onClick: () => setOpen2(false)\n      }}\n    >\n      <Typography variant=\"body\" spacing={{ margin: 0 }}>\n        Short dialog content.\n      </Typography>\n    </Dialog>\n  </Fragment>\n);\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: NestedDialogs
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
/* harmony default export */ var Dialog_Dialog = (MDXContent);

;// CONCATENATED MODULE: ./stories/Notifications/Dialog/Dialog.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _LeftAlignedActionDia, _LeftAlignedActionDia2, _LeftAlignedActionDia3, _RightAlignedActionDi, _RightAlignedActionDi2, _RightAlignedActionDi3, _SingleActionDialog$p, _SingleActionDialog$p2, _SingleActionDialog$p3, _NestedDialogs$parame, _NestedDialogs$parame2, _NestedDialogs$parame3;
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
  title: "components/Feedback/Dialog",
  component: Dialog/* Dialog */.V,
  parameters: {
    docs: {
      page: Dialog_Dialog
    }
  },
  args: {
    id: "dialog",
    title: "components/Discard changes?",
    alignActions: "left",
    children: /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
      variant: "body",
      spacing: {
        margin: 0
      }
    }, "This cannot be undone and you will lose your changes."),
    primaryAction: {
      label: "Discard",
      onClick: function onClick() {
        return window.setDialogOpen(false);
      }
    },
    secondaryAction: {
      label: "Keep editing",
      onClick: function onClick() {
        return window.setDialogOpen(false);
      }
    }
  }
};
/* harmony default export */ var Dialog_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  window.setDialogOpen = setOpen;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open dialog"), /*#__PURE__*/react.createElement(Dialog/* Dialog */.V, {
    id: args.id,
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    alignActions: args.alignActions,
    title: args.title,
    primaryAction: args.primaryAction,
    secondaryAction: args.secondaryAction
  }, args.children));
};
var LeftAlignedActionDialog = Template.bind({});
var RightAlignedActionDialog = Template.bind({});
RightAlignedActionDialog.args = {
  title: "components/Verify email address",
  alignActions: "right",
  children: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body"
  }, "You want to verify the email address ", /*#__PURE__*/react.createElement("b", null, "dana.george@mydomain.com"), "."), /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, /*#__PURE__*/react.createElement("b", null, "Dana George"), " will receive an email with a verification link and must click the link to complete the verification.")),
  primaryAction: {
    label: "Send email",
    onClick: function onClick() {
      return window.setDialogOpen(false);
    }
  },
  secondaryAction: {
    label: "Cancel",
    onClick: function onClick() {
      return window.setDialogOpen(false);
    }
  }
};
var SingleActionDialog = Template.bind({});
SingleActionDialog.args = {
  title: "components/Info",
  alignActions: "right",
  children: /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "You can't remove your account."),
  primaryAction: {
    label: "Ok",
    onClick: function onClick() {
      return window.setDialogOpen(false);
    }
  },
  secondaryAction: undefined
};
var NestedDialogs = function NestedDialogs() {
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open2 = _useState6[0],
    setOpen2 = _useState6[1];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open dialog"), /*#__PURE__*/react.createElement(Dialog/* Dialog */.V, {
    id: "dialog11",
    open: open,
    alignActions: "right",
    title: "Dialog 1",
    onClose: function onClose() {
      return setOpen(false);
    },
    primaryAction: {
      label: "Open another dialog",
      onClick: function onClick() {
        return setOpen2(true);
      }
    },
    secondaryAction: {
      label: "Close",
      onClick: function onClick() {
        return setOpen(false);
      }
    }
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "Long dialog content. Long dialog content. Long dialog content. Long dialog content. Long dialog content.")), /*#__PURE__*/react.createElement(Dialog/* Dialog */.V, {
    id: "dialog12",
    open: open2,
    onClose: function onClose() {
      return setOpen2(false);
    },
    alignActions: "left",
    title: "Dialog 2",
    primaryAction: {
      label: "Close",
      onClick: function onClick() {
        return setOpen2(false);
      }
    }
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "Short dialog content.")));
};
LeftAlignedActionDialog.parameters = _objectSpread(_objectSpread({}, LeftAlignedActionDialog.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_LeftAlignedActionDia = LeftAlignedActionDialog.parameters) === null || _LeftAlignedActionDia === void 0 ? void 0 : _LeftAlignedActionDia.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n  window.setDialogOpen = setOpen;\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id={args.id} open={open} onClose={() => setOpen(false)} alignActions={args.alignActions} title={args.title} primaryAction={args.primaryAction} secondaryAction={args.secondaryAction}>\n        {args.children}\n      </Dialog>\n    </Fragment>;\n}"
    }, (_LeftAlignedActionDia2 = LeftAlignedActionDialog.parameters) === null || _LeftAlignedActionDia2 === void 0 ? void 0 : (_LeftAlignedActionDia3 = _LeftAlignedActionDia2.docs) === null || _LeftAlignedActionDia3 === void 0 ? void 0 : _LeftAlignedActionDia3.source)
  })
});
RightAlignedActionDialog.parameters = _objectSpread(_objectSpread({}, RightAlignedActionDialog.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_RightAlignedActionDi = RightAlignedActionDialog.parameters) === null || _RightAlignedActionDi === void 0 ? void 0 : _RightAlignedActionDi.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n  window.setDialogOpen = setOpen;\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id={args.id} open={open} onClose={() => setOpen(false)} alignActions={args.alignActions} title={args.title} primaryAction={args.primaryAction} secondaryAction={args.secondaryAction}>\n        {args.children}\n      </Dialog>\n    </Fragment>;\n}"
    }, (_RightAlignedActionDi2 = RightAlignedActionDialog.parameters) === null || _RightAlignedActionDi2 === void 0 ? void 0 : (_RightAlignedActionDi3 = _RightAlignedActionDi2.docs) === null || _RightAlignedActionDi3 === void 0 ? void 0 : _RightAlignedActionDi3.source)
  })
});
SingleActionDialog.parameters = _objectSpread(_objectSpread({}, SingleActionDialog.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SingleActionDialog$p = SingleActionDialog.parameters) === null || _SingleActionDialog$p === void 0 ? void 0 : _SingleActionDialog$p.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n  window.setDialogOpen = setOpen;\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id={args.id} open={open} onClose={() => setOpen(false)} alignActions={args.alignActions} title={args.title} primaryAction={args.primaryAction} secondaryAction={args.secondaryAction}>\n        {args.children}\n      </Dialog>\n    </Fragment>;\n}"
    }, (_SingleActionDialog$p2 = SingleActionDialog.parameters) === null || _SingleActionDialog$p2 === void 0 ? void 0 : (_SingleActionDialog$p3 = _SingleActionDialog$p2.docs) === null || _SingleActionDialog$p3 === void 0 ? void 0 : _SingleActionDialog$p3.source)
  })
});
NestedDialogs.parameters = _objectSpread(_objectSpread({}, NestedDialogs.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_NestedDialogs$parame = NestedDialogs.parameters) === null || _NestedDialogs$parame === void 0 ? void 0 : _NestedDialogs$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  const [open, setOpen] = useState(false);\n  const [open2, setOpen2] = useState(false);\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id=\"dialog11\" open={open} alignActions=\"right\" title=\"Dialog 1\" onClose={() => setOpen(false)} primaryAction={{\n      label: \"Open another dialog\",\n      onClick: () => setOpen2(true)\n    }} secondaryAction={{\n      label: \"Close\",\n      onClick: () => setOpen(false)\n    }}>\n        <Typography variant=\"body\" spacing={{\n        margin: 0\n      }}>\n          Long dialog content. Long dialog content. Long dialog content. Long dialog content. Long\n          dialog content.\n        </Typography>\n      </Dialog>\n      <Dialog id=\"dialog12\" open={open2} onClose={() => setOpen2(false)} alignActions=\"left\" title=\"Dialog 2\" primaryAction={{\n      label: \"Close\",\n      onClick: () => setOpen2(false)\n    }}>\n        <Typography variant=\"body\" spacing={{\n        margin: 0\n      }}>\n          Short dialog content.\n        </Typography>\n      </Dialog>\n    </Fragment>;\n}"
    }, (_NestedDialogs$parame2 = NestedDialogs.parameters) === null || _NestedDialogs$parame2 === void 0 ? void 0 : (_NestedDialogs$parame3 = _NestedDialogs$parame2.docs) === null || _NestedDialogs$parame3 === void 0 ? void 0 : _NestedDialogs$parame3.source)
  })
});
var __namedExportsOrder = ["LeftAlignedActionDialog", "RightAlignedActionDialog", "SingleActionDialog", "NestedDialogs"];

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Typography; },
  "p": function() { return /* binding */ validVariants; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.Z, options);




       /* harmony default export */ var Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default.locals */.Z.locals ? Typography_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
var _excluded = ["children", "variant", "tag", "style", "spacing", "className"];
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




var validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
var TypographyComponent = function TypographyComponent(_ref, ref) {
  var children = _ref.children,
    variant = _ref.variant,
    tag = _ref.tag,
    style = _ref.style,
    spacing = _ref.spacing,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  var styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
  if (!tag) {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "code":
        tag = variant;
        break;
      case "body":
        tag = "p";
        break;
      case "body-bold":
        tag = "p";
        break;
      case "sub-text":
        tag = "span";
        break;
      default:
        tag = "div";
        break;
    }
  }
  var TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: styleWithSpacing,
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
var Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
try {
    // @ts-ignore
    Typography.displayName = "Typography";
    // @ts-ignore
    Typography.__docgenInfo = { "description": "", "displayName": "Typography", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"] = { docgenInfo: Typography.__docgenInfo, name: "Typography", path: "src/components/Typography/Typography.tsx#Typography" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useSpacing.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useSpacing; }
/* harmony export */ });
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

var defaultFactor = 0.25;
var defaultUnit = "rem";
var spacingNumberRegex = /(\d+\.?\d*)+/g;
var useSpacing = function useSpacing(spacingProps, style) {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce(function (prev, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        spacing = _ref2[0],
        multiplier = _ref2[1];
      var matches = String(multiplier).matchAll(spacingNumberRegex);
      var cssSpacingValue = Array.from(matches).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          multiplierValue = _ref4[0];
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, spacing, cssSpacingValue));
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": function() { return /* binding */ filterProps; },
/* harmony export */   "MU": function() { return /* binding */ getValueByPath; },
/* harmony export */   "Pb": function() { return /* binding */ isJsonString; },
/* harmony export */   "R3": function() { return /* binding */ areArraysDifferent; },
/* harmony export */   "y": function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx */
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": "Typography-module__typography_style_h1--QRbCJ",
	"typography_style_h2": "Typography-module__typography_style_h2--gst_1",
	"typography_style_h3": "Typography-module__typography_style_h3--OMuiN",
	"typography_style_h4": "Typography-module__typography_style_h4--AK8ry",
	"typography_style_body": "Typography-module__typography_style_body--RZ14O",
	"typography_style_body-bold": "Typography-module__typography_style_body-bold--yrfzC",
	"typography_style_sub-text": "Typography-module__typography_style_sub-text--J284m",
	"typography_style_code": "Typography-module__typography_style_code--aL5hm"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);