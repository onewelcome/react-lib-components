"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9497],{

/***/ "./stories/Notifications/Modal/Modal.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Modal": function() { return /* binding */ Modal_stories_Modal; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Modal_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 1 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx + 1 modules
var BaseModalHeader = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx");
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
;// CONCATENATED MODULE: ./stories/Notifications/Modal/Modal.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      ul: "ul",
      li: "li",
      h1: "h1",
      code: "code",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Modals are used to present interactive or larger content - like the modal with the form. Modals contain:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "header: title, close button and additional content like wizard,"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "content: what ever content to display,"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "footer: containing action buttons to interact with content and modal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Modals appear as a modal on top of the existing content."
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the below code snippet, you'll see how you can create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Modal"
        }), " with simple form."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Modal id=\"modal\" open={open} onClose={onClose}>\n  <ModalHeader id=\"modal-label\" title=\"Modal title\" onClose={onClose} />\n  <ModalContent id=\"modal-description\">\n    <form id=\"modalForm\">\n      <Typography variant=\"body\" spacing={{ margin: 0, padding: \"0 5 5\" }}>\n        This is simple modal.\n      </Typography>\n      <FormControl>\n        <InputWrapper\n          helperText=\"Helper text for this field. Description should be short and not repeat the label\"\n          name=\"input1\"\n          type=\"text\"\n          value={value}\n          error={false}\n          label=\"Name\"\n          onChange={e => setValue(e.target.value)}\n        />\n      </FormControl>\n    </form>\n  </ModalContent>\n  <ModalActions>\n    <Button variant=\"text\" onClick={onClose}>\n      Cancel\n    </Button>\n    <Button form=\"modalForm\" type=\"submit\">\n      Save\n    </Button>\n  </ModalActions>\n</Modal>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Modal_stories_Modal
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
/* harmony default export */ var Modal = (MDXContent);

// EXTERNAL MODULE: ./src/components/Form/FormControl/FormControl.tsx + 1 modules
var FormControl = __webpack_require__("./src/components/Form/FormControl/FormControl.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
;// CONCATENATED MODULE: ./stories/Notifications/Modal/Modal.stories.tsx
var _args, _argTypes, _Modal$parameters, _Modal$parameters2, _Modal$parameters2$do;
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
  title: "components/Utils/Modal",
  component: BaseModal/* BaseModal */.I,
  subcomponents: {
    ModalHeader: BaseModalHeader/* BaseModalHeader */.o,
    ModalContent: BaseModalContent/* BaseModalContent */.v,
    ModalActions: BaseModalActions/* BaseModalActions */.u
  },
  parameters: {
    docs: {
      page: Modal
    }
  },
  args: (_args = {
    id: "modal"
  }, _defineProperty(_args, "header.title", "Modal title"), _defineProperty(_args, "content.disableAutoFocus", false), _defineProperty(_args, "actions.className", undefined), _args),
  argTypes: (_argTypes = {
    open: {
      control: false
    }
  }, _defineProperty(_argTypes, "header.title", {
    control: "text"
  }), _defineProperty(_argTypes, "content.disableAutoFocus", {
    control: "boolean"
  }), _defineProperty(_argTypes, "actions.className", {
    control: "text"
  }), _argTypes)
};
/* harmony default export */ var Modal_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)("initial value"),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var id = args.id;
  var onClose = function onClose() {
    return setOpen(false);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open modal"), /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, {
    id: id,
    open: open,
    onClose: onClose,
    zIndex: args.zIndex,
    disableBackdrop: args.disableBackdrop,
    disableEscapeKeyDown: args.disableEscapeKeyDown
  }, /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.o, {
    id: "".concat(id, "-label"),
    title: args["header.title"],
    onClose: onClose
  }), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */.v, {
    id: "".concat(id, "-description"),
    disableAutoFocus: args["content.disableAutoFocus"]
  }, /*#__PURE__*/react.createElement("form", {
    id: "modalForm",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      alert("form submitted");
      onClose();
    }
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      margin: 0,
      padding: "0 5 5"
    }
  }, "This modal shows various options of form controls. It is not meant to be a realistic example of any of our forms.", /*#__PURE__*/react.createElement("br", null), " Clicking Save, Cancel or Close may bring you to a different screen than you came from."), /*#__PURE__*/react.createElement(FormControl/* FormControl */.N, null, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input1",
    type: "text",
    value: value,
    error: false,
    label: "Name",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  })), /*#__PURE__*/react.createElement(FormControl/* FormControl */.N, null, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input2",
    type: "text",
    value: value,
    error: false,
    label: "Name",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  })), /*#__PURE__*/react.createElement(FormControl/* FormControl */.N, null, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input3",
    type: "text",
    value: value,
    error: false,
    label: "Name",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  })), /*#__PURE__*/react.createElement(FormControl/* FormControl */.N, null, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input4",
    type: "text",
    value: value,
    error: false,
    label: "Name",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  })))), /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.u, {
    className: args["actions.className"]
  }, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: "text",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    form: "modalForm",
    type: "submit"
  }, "Save"))));
};
var Modal_stories_Modal = Template.bind({});
Modal_stories_Modal.parameters = _objectSpread(_objectSpread({}, Modal_stories_Modal.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Modal$parameters = Modal_stories_Modal.parameters) === null || _Modal$parameters === void 0 ? void 0 : _Modal$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n  const [value, setValue] = useState(\"initial value\");\n  const id = args.id;\n  const onClose = () => setOpen(false);\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open modal</Button>\n      <ModalComponent id={id} open={open} onClose={onClose} zIndex={args.zIndex} disableBackdrop={args.disableBackdrop} disableEscapeKeyDown={args.disableEscapeKeyDown}>\n        <ModalHeader id={`${id}-label`} title={args[\"header.title\"]} onClose={onClose} />\n        <ModalContent id={`${id}-description`} disableAutoFocus={args[\"content.disableAutoFocus\"]}>\n          <form id=\"modalForm\" onSubmit={e => {\n          e.preventDefault();\n          alert(\"form submitted\");\n          onClose();\n        }}>\n            <Typography variant=\"body\" spacing={{\n            margin: 0,\n            padding: \"0 5 5\"\n          }}>\n              This modal shows various options of form controls. It is not meant to be a realistic\n              example of any of our forms.\n              <br /> Clicking Save, Cancel or Close may bring you to a different screen than you\n              came from.\n            </Typography>\n            <FormControl>\n              <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input1\" type=\"text\" value={value} error={false} label=\"Name\" onChange={e => setValue(e.target.value)} />\n            </FormControl>\n            <FormControl>\n              <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input2\" type=\"text\" value={value} error={false} label=\"Name\" onChange={e => setValue(e.target.value)} />\n            </FormControl>\n            <FormControl>\n              <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input3\" type=\"text\" value={value} error={false} label=\"Name\" onChange={e => setValue(e.target.value)} />\n            </FormControl>\n            <FormControl>\n              <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input4\" type=\"text\" value={value} error={false} label=\"Name\" onChange={e => setValue(e.target.value)} />\n            </FormControl>\n          </form>\n        </ModalContent>\n        <ModalActions className={args[\"actions.className\"]}>\n          <Button variant=\"text\" onClick={onClose}>\n            Cancel\n          </Button>\n          <Button form=\"modalForm\" type=\"submit\">\n            Save\n          </Button>\n        </ModalActions>\n      </ModalComponent>\n    </Fragment>;\n}"
    }, (_Modal$parameters2 = Modal_stories_Modal.parameters) === null || _Modal$parameters2 === void 0 ? void 0 : (_Modal$parameters2$do = _Modal$parameters2.docs) === null || _Modal$parameters2$do === void 0 ? void 0 : _Modal$parameters2$do.source)
  })
});
var __namedExportsOrder = ["Modal"];

/***/ }),

/***/ "./src/components/Form/FormControl/FormControl.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": function() { return /* binding */ FormControl; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormControl/FormControl.module.scss
var FormControl_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormControl/FormControl.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/FormControl/FormControl.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FormControl_module/* default */.Z, options);




       /* harmony default export */ var FormControl_FormControl_module = (FormControl_module/* default */.Z && FormControl_module/* default.locals */.Z.locals ? FormControl_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/FormControl/FormControl.tsx
var _excluded = ["children", "disabled", "error", "className", "grid", "align"];
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



var FormControlComponent = function FormControlComponent(_ref, ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    error = _ref.error,
    className = _ref.className,
    grid = _ref.grid,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "center" : _ref$align,
    rest = _objectWithoutProperties(_ref, _excluded);
  var renderChildren = function renderChildren() {
    return react.Children.map(children, function (child) {
      if (!child) {
        return null;
      }
      var childElement = /*#__PURE__*/react.cloneElement(child, {
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
        error: child.props.error !== undefined ? child.props.error : error
      });
      if (grid && grid > 1) {
        return /*#__PURE__*/react.createElement("div", {
          className: "".concat(FormControl_FormControl_module["col-" + grid], " ").concat(FormControl_FormControl_module.column)
        }, childElement);
      }
      return childElement;
    });
  };
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    "data-formcontrol": true,
    className: "".concat(FormControl_FormControl_module["form-control"], " ").concat(className ? className : "", " ").concat(grid && grid > 1 ? "".concat(FormControl_FormControl_module.grid, " ").concat(FormControl_FormControl_module["grid-" + grid]) : "", " ").concat(FormControl_FormControl_module[align])
  }), renderChildren());
};
var FormControl = /*#__PURE__*/react.forwardRef(FormControlComponent);
try {
    // @ts-ignore
    FormControl.displayName = "FormControl";
    // @ts-ignore
    FormControl.__docgenInfo = { "description": "", "displayName": "FormControl", "props": { "grid": { "defaultValue": null, "description": "", "name": "grid", "required": false, "type": { "name": "enum", "value": [{ "value": "2" }, { "value": "1" }, { "value": "3" }] } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "align": { "defaultValue": { value: "center" }, "description": "", "name": "align", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"top\"" }, { "value": "\"start\"" }, { "value": "\"middle\"" }, { "value": "\"bottom\"" }, { "value": "\"end\"" }, { "value": "\"stretch\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FormControl/FormControl.tsx#FormControl"] = { docgenInfo: FormControl.__docgenInfo, name: "FormControl", path: "src/components/Form/FormControl/FormControl.tsx#FormControl" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ BaseModalActions; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss
var BaseModalActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalActions_module/* default */.Z, options);




       /* harmony default export */ var BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.Z && BaseModalActions_module/* default.locals */.Z.locals ? BaseModalActions_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
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



var BaseModalActionsComponent = function BaseModalActionsComponent(_ref, ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(BaseModalActions_BaseModalActions_module.actions, " ").concat(className)
  }), children);
};
var BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
try {
    // @ts-ignore
    BaseModalActions.displayName = "BaseModalActions";
    // @ts-ignore
    BaseModalActions.__docgenInfo = { "description": "", "displayName": "BaseModalActions", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions"] = { docgenInfo: BaseModalActions.__docgenInfo, name: "BaseModalActions", path: "src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": function() { return /* binding */ BaseModalHeader; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss
var BaseModalHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalHeader_module/* default */.Z, options);




       /* harmony default export */ var BaseModalHeader_BaseModalHeader_module = (BaseModalHeader_module/* default */.Z && BaseModalHeader_module/* default.locals */.Z.locals ? BaseModalHeader_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx
var _excluded = ["id", "title", "children", "onClose"];
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






var BaseModalHeaderComponent = function BaseModalHeaderComponent(_ref, ref) {
  var id = _ref.id,
    title = _ref.title,
    children = _ref.children,
    onClose = _ref.onClose,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: BaseModalHeader_BaseModalHeader_module.header
  }), /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module.headline
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: id,
    className: BaseModalHeader_BaseModalHeader_module.title,
    tag: "h1",
    variant: "h4"
  }, title), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    onClick: onClose,
    className: BaseModalHeader_BaseModalHeader_module.closeBtn,
    title: "close modal"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.Times */.P.Times
  }))), children);
};
var BaseModalHeader = /*#__PURE__*/react.forwardRef(BaseModalHeaderComponent);
try {
    // @ts-ignore
    BaseModalHeader.displayName = "BaseModalHeader";
    // @ts-ignore
    BaseModalHeader.__docgenInfo = { "description": "", "displayName": "BaseModalHeader", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx#BaseModalHeader"] = { docgenInfo: BaseModalHeader.__docgenInfo, name: "BaseModalHeader", path: "src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx#BaseModalHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FormControl/FormControl.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FormControl-module__form-control--MCNkj{font-size:var(--form-control-font-size)}.FormControl-module__form-control--MCNkj+.FormControl-module__form-control--MCNkj{margin-top:1rem}.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl{display:flex;flex-wrap:wrap;gap:1rem}.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__center--u9QmV,.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__middle--yDYYX{align-items:center}.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__start--eHNvW,.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__top--kaeIy{align-items:flex-start}.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__end--MccTU,.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__bottom--oUJJE{align-items:flex-end}.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__stretch--aig0w{align-items:stretch}.FormControl-module__form-control--MCNkj.FormControl-module__grid--iRDTl.FormControl-module__stretch--aig0w>*>*{box-sizing:border-box;height:100%}.FormControl-module__column--aUF2c{flex-grow:1;flex-shrink:0}.FormControl-module__col-2--m8KXX{flex-basis:calc((100% - 1rem)/2)}.FormControl-module__col-3--AIfmZ{flex-basis:calc((100% - 2rem)/3)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-control": "FormControl-module__form-control--MCNkj",
	"grid": "FormControl-module__grid--iRDTl",
	"center": "FormControl-module__center--u9QmV",
	"middle": "FormControl-module__middle--yDYYX",
	"start": "FormControl-module__start--eHNvW",
	"top": "FormControl-module__top--kaeIy",
	"end": "FormControl-module__end--MccTU",
	"bottom": "FormControl-module__bottom--oUJJE",
	"stretch": "FormControl-module__stretch--aig0w",
	"column": "FormControl-module__column--aUF2c",
	"col-2": "FormControl-module__col-2--m8KXX",
	"col-3": "FormControl-module__col-3--AIfmZ"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalActions-module__actions--A4L3O{margin:1.875rem 1.25rem 1.875rem 1.25rem;display:flex;justify-content:flex-end}.BaseModalActions-module__actions--A4L3O>*{margin-left:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": "BaseModalActions-module__actions--A4L3O"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalHeader-module__header--UVtiQ{min-width:80px;padding:1rem 1.25rem;background-color:var(--modal-header-background-color);border-top-left-radius:8px;border-top-right-radius:8px}.BaseModalHeader-module__headline--q6eEZ{display:flex;align-items:center}.BaseModalHeader-module__title--FjtRT{flex:1;margin:0 0 0 1.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "BaseModalHeader-module__header--UVtiQ",
	"headline": "BaseModalHeader-module__headline--q6eEZ",
	"title": "BaseModalHeader-module__title--FjtRT"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);