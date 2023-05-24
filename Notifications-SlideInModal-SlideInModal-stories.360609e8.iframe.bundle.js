"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5788],{

/***/ "./stories/Notifications/SlideInModal/SlideInModal.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SlideInModal": function() { return /* binding */ SlideInModal_stories_SlideInModal; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ SlideInModal_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 1 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/SlideInModal/SlideInModal.module.scss
var SlideInModal_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/SlideInModal/SlideInModal.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/SlideInModal/SlideInModal.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SlideInModal_module/* default */.Z, options);




       /* harmony default export */ var SlideInModal_SlideInModal_module = (SlideInModal_module/* default */.Z && SlideInModal_module/* default.locals */.Z.locals ? SlideInModal_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/SlideInModal/SlideInModal.tsx
var _excluded = ["children", "id", "open"];
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




var SlideInModalComponent = function SlideInModalComponent(_ref, ref) {
  var children = _ref.children,
    id = _ref.id,
    open = _ref.open,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react.useState)("hide"),
    _useState2 = _slicedToArray(_useState, 2),
    classHideOnTransition = _useState2[0],
    setClassHideOnTransition = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    controlledOpen = _useState4[0],
    setControlledOpen = _useState4[1];
  var containerRef = (0,react.useRef)(null);
  var onTransitionEnd = (0,react.useCallback)(function (e) {
    if (e.target === containerRef.current) {
      setClassHideOnTransition(function (prev) {
        return prev ? "" : "hide";
      });
      if (!open && controlledOpen) {
        setControlledOpen(false);
      }
    }
  }, [open]);
  (0,react.useEffect)(function () {
    open && setControlledOpen(open);
  }, [open]);
  return /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, _extends({}, rest, {
    id: id,
    open: controlledOpen,
    className: "".concat(SlideInModal_SlideInModal_module["slide-in-modal"], " ").concat(open ? SlideInModal_SlideInModal_module.visible : "", " ").concat(!open ? SlideInModal_SlideInModal_module[classHideOnTransition] : ""),
    containerProps: {
      className: SlideInModal_SlideInModal_module.container
    },
    backdropProps: {
      id: SlideInModal_SlideInModal_module["backdrop-slide"]
    },
    onTransitionEnd: onTransitionEnd,
    ref: ref !== null && ref !== void 0 ? ref : containerRef
  }), children);
};
var SlideInModal = /*#__PURE__*/react.forwardRef(SlideInModalComponent);
try {
    // @ts-ignore
    SlideInModal.displayName = "SlideInModal";
    // @ts-ignore
    SlideInModal.__docgenInfo = { "description": "", "displayName": "SlideInModal", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "((event?: MouseEvent<HTMLElement, MouseEvent>) => unknown)" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "containerProps": { "defaultValue": null, "description": "", "name": "containerProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "backdropProps": { "defaultValue": null, "description": "", "name": "backdropProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "labelledby": { "defaultValue": null, "description": "", "name": "labelledby", "required": false, "type": { "name": "string" } }, "describedby": { "defaultValue": null, "description": "", "name": "describedby", "required": false, "type": { "name": "string" } }, "disableEscapeKeyDown": { "defaultValue": null, "description": "", "name": "disableEscapeKeyDown", "required": false, "type": { "name": "boolean" } }, "disableBackdrop": { "defaultValue": null, "description": "", "name": "disableBackdrop", "required": false, "type": { "name": "boolean" } }, "forceContainerOpen": { "defaultValue": null, "description": "", "name": "forceContainerOpen", "required": false, "type": { "name": "boolean" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/SlideInModal/SlideInModal.tsx#SlideInModal"] = { docgenInfo: SlideInModal.__docgenInfo, name: "SlideInModal", path: "src/components/Notifications/SlideInModal/SlideInModal.tsx#SlideInModal" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/SlideInModal/SlideInModal.mdx



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
      h1: "h1"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SlideInModal is an extension of the basic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Modal"
        }), " component. The only difference between these two is a purely visual one: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SlideInModal"
        }), " slides into the right side of viewport, and has no visible backdrop."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: SlideInModal_stories_SlideInModal
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
/* harmony default export */ var SlideInModal_SlideInModal = (MDXContent);

// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx + 1 modules
var BaseModalHeader = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
;// CONCATENATED MODULE: ./stories/Notifications/SlideInModal/SlideInModal.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _SlideInModal$paramet, _SlideInModal$paramet2, _SlideInModal$paramet3;
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
function SlideInModal_stories_extends() {
  SlideInModal_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return SlideInModal_stories_extends.apply(this, arguments);
}
function SlideInModal_stories_slicedToArray(arr, i) {
  return SlideInModal_stories_arrayWithHoles(arr) || SlideInModal_stories_iterableToArrayLimit(arr, i) || SlideInModal_stories_unsupportedIterableToArray(arr, i) || SlideInModal_stories_nonIterableRest();
}
function SlideInModal_stories_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function SlideInModal_stories_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return SlideInModal_stories_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SlideInModal_stories_arrayLikeToArray(o, minLen);
}
function SlideInModal_stories_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function SlideInModal_stories_iterableToArrayLimit(arr, i) {
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
function SlideInModal_stories_arrayWithHoles(arr) {
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
  title: "components/Utils/SlideInModal",
  component: SlideInModal,
  parameters: {
    docs: {
      page: SlideInModal_SlideInModal
    }
  }
};
/* harmony default export */ var SlideInModal_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(false),
    _useState2 = SlideInModal_stories_slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = SlideInModal_stories_slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var onOpen = function onOpen() {
    return setOpen(true);
  };
  var onClose = function onClose() {
    return setOpen(false);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: onOpen
  }, "Open modal"), /*#__PURE__*/react.createElement(SlideInModal, SlideInModal_stories_extends({}, args, {
    id: "slide-in-modal",
    open: open,
    onClose: onClose
  }), /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.o, {
    id: "modal-header",
    title: "Modal header",
    onClose: onClose
  }), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */.v, {
    id: "modal-description",
    disableAutoFocus: args["content.disableAutoFocus"]
  }, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    type: "text",
    label: "Name",
    name: "Name",
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    }
  }))));
};
var SlideInModal_stories_SlideInModal = Template.bind({});
SlideInModal_stories_SlideInModal.parameters = _objectSpread(_objectSpread({}, SlideInModal_stories_SlideInModal.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SlideInModal$paramet = SlideInModal_stories_SlideInModal.parameters) === null || _SlideInModal$paramet === void 0 ? void 0 : _SlideInModal$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n  const [inputValue, setInputValue] = useState(\"\");\n  const onOpen = () => setOpen(true);\n  const onClose = () => setOpen(false);\n  return <Fragment>\n      <Button onClick={onOpen}>Open modal</Button>\n      <SlideInModalComponent {...args} id=\"slide-in-modal\" open={open} onClose={onClose}>\n        <ModalHeader id={\"modal-header\"} title={\"Modal header\"} onClose={onClose} />\n        <ModalContent id={`modal-description`} disableAutoFocus={args[\"content.disableAutoFocus\"]}>\n          <InputWrapper type=\"text\" label=\"Name\" name=\"Name\" value={inputValue} onChange={e => setInputValue(e.target.value)} />\n        </ModalContent>\n      </SlideInModalComponent>\n    </Fragment>;\n}"
    }, (_SlideInModal$paramet2 = SlideInModal_stories_SlideInModal.parameters) === null || _SlideInModal$paramet2 === void 0 ? void 0 : (_SlideInModal$paramet3 = _SlideInModal$paramet2.docs) === null || _SlideInModal$paramet3 === void 0 ? void 0 : _SlideInModal$paramet3.source)
  })
});
var __namedExportsOrder = ["SlideInModal"];

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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/SlideInModal/SlideInModal.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SlideInModal-module__sr-only--BcTOR{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SlideInModal-module__hidden--PnD3Y{display:none}.SlideInModal-module__slide-in--EFGSZ{animation:SlideInModal-module__slide-in--EFGSZ .5s forwards}@media(prefers-reduced-motion: reduce){.SlideInModal-module__slide-in--EFGSZ{animation-duration:.1ms}}.SlideInModal-module__slide-out--L75e6{animation:SlideInModal-module__slide-out--L75e6 .5s forwards}@media(prefers-reduced-motion: reduce){.SlideInModal-module__slide-out--L75e6{animation-duration:.1ms}}@keyframes SlideInModal-module__slide-in--EFGSZ{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SlideInModal-module__slide-out--L75e6{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SlideInModal-module__w-6--v3iJO{width:6%}.SlideInModal-module__w-7--v9BFu{width:7%}.SlideInModal-module__w-8--luAvI{width:8%}.SlideInModal-module__w-9--qskPL{width:9%}.SlideInModal-module__w-10--C5Su_{width:10%}.SlideInModal-module__w-11--dLC2o{width:11%}.SlideInModal-module__w-12--HexEL{width:12%}.SlideInModal-module__w-13--TshcU{width:13%}.SlideInModal-module__w-14--IK8qS{width:14%}.SlideInModal-module__w-15--U6DD8{width:15%}.SlideInModal-module__w-16--EiOZp{width:16%}.SlideInModal-module__w-17--faDv9{width:17%}.SlideInModal-module__w-18--XYlFR{width:18%}.SlideInModal-module__w-19--ZZiZ9{width:19%}.SlideInModal-module__w-20--txEfR{width:20%}.SlideInModal-module__w-21--nQyCV{width:21%}.SlideInModal-module__w-22--DXlp9{width:22%}.SlideInModal-module__w-23--x8_zs{width:23%}.SlideInModal-module__w-24--iq3g5{width:24%}.SlideInModal-module__w-25--wjuoy{width:25%}.SlideInModal-module__w-26--yxhkM{width:26%}.SlideInModal-module__w-27--NX4gP{width:27%}.SlideInModal-module__w-28--A4CD_{width:28%}.SlideInModal-module__w-29--RoSRU{width:29%}.SlideInModal-module__w-30--bSDdq{width:30%}.SlideInModal-module__w-31--LuqGX{width:31%}.SlideInModal-module__w-32--b12w2{width:32%}.SlideInModal-module__w-33--Fcy6t{width:33%}.SlideInModal-module__w-34--kWEO5{width:34%}.SlideInModal-module__w-35--nees1{width:35%}.SlideInModal-module__w-36--vow6a{width:36%}.SlideInModal-module__w-37--eM2A3{width:37%}.SlideInModal-module__w-38--V1L9E{width:38%}.SlideInModal-module__w-39--vjoaQ{width:39%}.SlideInModal-module__w-40--CwN_5{width:40%}.SlideInModal-module__w-41--D9g2N{width:41%}.SlideInModal-module__w-42--p0FyH{width:42%}.SlideInModal-module__w-43--k94H4{width:43%}.SlideInModal-module__w-44--mCEPW{width:44%}.SlideInModal-module__w-45--VU0Fp{width:45%}.SlideInModal-module__w-46--bN40k{width:46%}.SlideInModal-module__w-47--fNMc4{width:47%}.SlideInModal-module__w-48--Rmu6c{width:48%}.SlideInModal-module__w-49--fSDtE{width:49%}.SlideInModal-module__w-50--uuEIh{width:50%}.SlideInModal-module__w-51--K8aro{width:51%}.SlideInModal-module__w-52--cPZ2W{width:52%}.SlideInModal-module__w-53--nZCGB{width:53%}.SlideInModal-module__w-54--xYIRV{width:54%}.SlideInModal-module__w-55--GQ9Nf{width:55%}.SlideInModal-module__w-56--mBSGt{width:56%}.SlideInModal-module__w-57--JYnvP{width:57%}.SlideInModal-module__w-58--nVeJd{width:58%}.SlideInModal-module__w-59--yaw5t{width:59%}.SlideInModal-module__w-60--YxDPd{width:60%}.SlideInModal-module__w-61--FnmpX{width:61%}.SlideInModal-module__w-62--t5i4E{width:62%}.SlideInModal-module__w-63--t_prK{width:63%}.SlideInModal-module__w-64--bm8gR{width:64%}.SlideInModal-module__w-65--ygxHj{width:65%}.SlideInModal-module__w-66--Mw7KA{width:66%}.SlideInModal-module__w-67--Z15AN{width:67%}.SlideInModal-module__w-68--KYW_f{width:68%}.SlideInModal-module__w-69--ivcix{width:69%}.SlideInModal-module__w-70--K6Kr6{width:70%}.SlideInModal-module__w-71--EVWFC{width:71%}.SlideInModal-module__w-72--AobSf{width:72%}.SlideInModal-module__w-73--QQaKL{width:73%}.SlideInModal-module__w-74--pslH4{width:74%}.SlideInModal-module__w-75--GpeKg{width:75%}.SlideInModal-module__w-76--YJehq{width:76%}.SlideInModal-module__w-77--jLiXJ{width:77%}.SlideInModal-module__w-78--lZbyo{width:78%}.SlideInModal-module__w-79--WqnO8{width:79%}.SlideInModal-module__w-80--OsE5s{width:80%}.SlideInModal-module__w-81--uUlnp{width:81%}.SlideInModal-module__w-82--Q90Bj{width:82%}.SlideInModal-module__w-83--gszqL{width:83%}.SlideInModal-module__w-84--nViB0{width:84%}.SlideInModal-module__w-85--o9jWn{width:85%}.SlideInModal-module__w-86--rb1ja{width:86%}.SlideInModal-module__w-87--fP_2n{width:87%}.SlideInModal-module__w-88--UF2vR{width:88%}.SlideInModal-module__w-89--Xp5KU{width:89%}.SlideInModal-module__w-90--QQWGF{width:90%}.SlideInModal-module__w-91--UavUp{width:91%}.SlideInModal-module__w-92--qwhbF{width:92%}.SlideInModal-module__w-93--ActYi{width:93%}.SlideInModal-module__w-94--BDuir{width:94%}.SlideInModal-module__w-95--zwJmn{width:95%}.SlideInModal-module__w-96--_pPIw{width:96%}.SlideInModal-module__w-97--ewdUw{width:97%}.SlideInModal-module__w-98--Rxc9B{width:98%}.SlideInModal-module__w-99--f7z8c{width:99%}.SlideInModal-module__w-100--Nzp6W{width:100%}.SlideInModal-module__w-101--m7zOT{width:101%}.SlideInModal-module__w-102--dAShU{width:102%}.SlideInModal-module__w-103--LoAuc{width:103%}.SlideInModal-module__w-104--kD2vJ{width:104%}.SlideInModal-module__w-105--b7SU2{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SlideInModal-module__slide-in-modal--ivnSv{justify-content:flex-end;visibility:visible;transition-property:transform;transition-duration:.5s;transition-timing-function:ease-in-out;transform:translate(120%)}@media(prefers-reduced-motion: reduce){.SlideInModal-module__slide-in-modal--ivnSv{transition-duration:.1ms}}.SlideInModal-module__slide-in-modal--ivnSv.SlideInModal-module__hide--SnbN0{visibility:hidden}.SlideInModal-module__slide-in-modal--ivnSv.SlideInModal-module__visible--R_dtN{visibility:visible;transform:translate(0%)}.SlideInModal-module__slide-in-modal--ivnSv.SlideInModal-module__visible--R_dtN #SlideInModal-module__backdrop-slide--Jy3jn{background-color:rgba(0,0,0,0)}#SlideInModal-module__backdrop-slide--Jy3jn{background-color:rgba(0,0,0,0)}@media only screen and (min-width: 50rem){.SlideInModal-module__container--buaMi{margin-top:0;width:50rem;height:100%;max-height:unset;border-radius:0;box-shadow:0 1.875rem 3.125rem var(--modal-shadow-color)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "SlideInModal-module__sr-only--BcTOR",
	"hidden": "SlideInModal-module__hidden--PnD3Y",
	"slide-in": "SlideInModal-module__slide-in--EFGSZ",
	"slide-out": "SlideInModal-module__slide-out--L75e6",
	"w-6": "SlideInModal-module__w-6--v3iJO",
	"w-7": "SlideInModal-module__w-7--v9BFu",
	"w-8": "SlideInModal-module__w-8--luAvI",
	"w-9": "SlideInModal-module__w-9--qskPL",
	"w-10": "SlideInModal-module__w-10--C5Su_",
	"w-11": "SlideInModal-module__w-11--dLC2o",
	"w-12": "SlideInModal-module__w-12--HexEL",
	"w-13": "SlideInModal-module__w-13--TshcU",
	"w-14": "SlideInModal-module__w-14--IK8qS",
	"w-15": "SlideInModal-module__w-15--U6DD8",
	"w-16": "SlideInModal-module__w-16--EiOZp",
	"w-17": "SlideInModal-module__w-17--faDv9",
	"w-18": "SlideInModal-module__w-18--XYlFR",
	"w-19": "SlideInModal-module__w-19--ZZiZ9",
	"w-20": "SlideInModal-module__w-20--txEfR",
	"w-21": "SlideInModal-module__w-21--nQyCV",
	"w-22": "SlideInModal-module__w-22--DXlp9",
	"w-23": "SlideInModal-module__w-23--x8_zs",
	"w-24": "SlideInModal-module__w-24--iq3g5",
	"w-25": "SlideInModal-module__w-25--wjuoy",
	"w-26": "SlideInModal-module__w-26--yxhkM",
	"w-27": "SlideInModal-module__w-27--NX4gP",
	"w-28": "SlideInModal-module__w-28--A4CD_",
	"w-29": "SlideInModal-module__w-29--RoSRU",
	"w-30": "SlideInModal-module__w-30--bSDdq",
	"w-31": "SlideInModal-module__w-31--LuqGX",
	"w-32": "SlideInModal-module__w-32--b12w2",
	"w-33": "SlideInModal-module__w-33--Fcy6t",
	"w-34": "SlideInModal-module__w-34--kWEO5",
	"w-35": "SlideInModal-module__w-35--nees1",
	"w-36": "SlideInModal-module__w-36--vow6a",
	"w-37": "SlideInModal-module__w-37--eM2A3",
	"w-38": "SlideInModal-module__w-38--V1L9E",
	"w-39": "SlideInModal-module__w-39--vjoaQ",
	"w-40": "SlideInModal-module__w-40--CwN_5",
	"w-41": "SlideInModal-module__w-41--D9g2N",
	"w-42": "SlideInModal-module__w-42--p0FyH",
	"w-43": "SlideInModal-module__w-43--k94H4",
	"w-44": "SlideInModal-module__w-44--mCEPW",
	"w-45": "SlideInModal-module__w-45--VU0Fp",
	"w-46": "SlideInModal-module__w-46--bN40k",
	"w-47": "SlideInModal-module__w-47--fNMc4",
	"w-48": "SlideInModal-module__w-48--Rmu6c",
	"w-49": "SlideInModal-module__w-49--fSDtE",
	"w-50": "SlideInModal-module__w-50--uuEIh",
	"w-51": "SlideInModal-module__w-51--K8aro",
	"w-52": "SlideInModal-module__w-52--cPZ2W",
	"w-53": "SlideInModal-module__w-53--nZCGB",
	"w-54": "SlideInModal-module__w-54--xYIRV",
	"w-55": "SlideInModal-module__w-55--GQ9Nf",
	"w-56": "SlideInModal-module__w-56--mBSGt",
	"w-57": "SlideInModal-module__w-57--JYnvP",
	"w-58": "SlideInModal-module__w-58--nVeJd",
	"w-59": "SlideInModal-module__w-59--yaw5t",
	"w-60": "SlideInModal-module__w-60--YxDPd",
	"w-61": "SlideInModal-module__w-61--FnmpX",
	"w-62": "SlideInModal-module__w-62--t5i4E",
	"w-63": "SlideInModal-module__w-63--t_prK",
	"w-64": "SlideInModal-module__w-64--bm8gR",
	"w-65": "SlideInModal-module__w-65--ygxHj",
	"w-66": "SlideInModal-module__w-66--Mw7KA",
	"w-67": "SlideInModal-module__w-67--Z15AN",
	"w-68": "SlideInModal-module__w-68--KYW_f",
	"w-69": "SlideInModal-module__w-69--ivcix",
	"w-70": "SlideInModal-module__w-70--K6Kr6",
	"w-71": "SlideInModal-module__w-71--EVWFC",
	"w-72": "SlideInModal-module__w-72--AobSf",
	"w-73": "SlideInModal-module__w-73--QQaKL",
	"w-74": "SlideInModal-module__w-74--pslH4",
	"w-75": "SlideInModal-module__w-75--GpeKg",
	"w-76": "SlideInModal-module__w-76--YJehq",
	"w-77": "SlideInModal-module__w-77--jLiXJ",
	"w-78": "SlideInModal-module__w-78--lZbyo",
	"w-79": "SlideInModal-module__w-79--WqnO8",
	"w-80": "SlideInModal-module__w-80--OsE5s",
	"w-81": "SlideInModal-module__w-81--uUlnp",
	"w-82": "SlideInModal-module__w-82--Q90Bj",
	"w-83": "SlideInModal-module__w-83--gszqL",
	"w-84": "SlideInModal-module__w-84--nViB0",
	"w-85": "SlideInModal-module__w-85--o9jWn",
	"w-86": "SlideInModal-module__w-86--rb1ja",
	"w-87": "SlideInModal-module__w-87--fP_2n",
	"w-88": "SlideInModal-module__w-88--UF2vR",
	"w-89": "SlideInModal-module__w-89--Xp5KU",
	"w-90": "SlideInModal-module__w-90--QQWGF",
	"w-91": "SlideInModal-module__w-91--UavUp",
	"w-92": "SlideInModal-module__w-92--qwhbF",
	"w-93": "SlideInModal-module__w-93--ActYi",
	"w-94": "SlideInModal-module__w-94--BDuir",
	"w-95": "SlideInModal-module__w-95--zwJmn",
	"w-96": "SlideInModal-module__w-96--_pPIw",
	"w-97": "SlideInModal-module__w-97--ewdUw",
	"w-98": "SlideInModal-module__w-98--Rxc9B",
	"w-99": "SlideInModal-module__w-99--f7z8c",
	"w-100": "SlideInModal-module__w-100--Nzp6W",
	"w-101": "SlideInModal-module__w-101--m7zOT",
	"w-102": "SlideInModal-module__w-102--dAShU",
	"w-103": "SlideInModal-module__w-103--LoAuc",
	"w-104": "SlideInModal-module__w-104--kD2vJ",
	"w-105": "SlideInModal-module__w-105--b7SU2",
	"slide-in-modal": "SlideInModal-module__slide-in-modal--ivnSv",
	"hide": "SlideInModal-module__hide--SnbN0",
	"visible": "SlideInModal-module__visible--R_dtN",
	"backdrop-slide": "SlideInModal-module__backdrop-slide--Jy3jn",
	"container": "SlideInModal-module__container--buaMi"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);