"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7847],{

/***/ "./stories/Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DiscardChangesModal": function() { return /* binding */ DiscardChangesModal_stories_DiscardChangesModal; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ DiscardChangesModal_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 1 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx + 1 modules
var BaseModalHeader = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/Dialog/Dialog.tsx + 5 modules
var Dialog = __webpack_require__("./src/components/Notifications/Dialog/Dialog.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/DiscardChangesModal/DiscardChangesDialog/DiscardChangesDialog.tsx
var _excluded = ["open", "onKeepEditing", "onDiscardChanges", "discardChangesButtonLabel", "keepEditingButtonLabel", "contentLabel", "titleLabel"];
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




var DiscardChangesDialogComponent = function DiscardChangesDialogComponent(_ref, ref) {
  var open = _ref.open,
    onKeepEditing = _ref.onKeepEditing,
    onDiscardChanges = _ref.onDiscardChanges,
    discardChangesButtonLabel = _ref.discardChangesButtonLabel,
    keepEditingButtonLabel = _ref.keepEditingButtonLabel,
    contentLabel = _ref.contentLabel,
    titleLabel = _ref.titleLabel,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Dialog/* Dialog */.V, _extends({}, rest, {
    ref: ref,
    open: open,
    alignActions: "left",
    title: titleLabel,
    onClose: onKeepEditing,
    primaryAction: {
      label: discardChangesButtonLabel,
      onClick: onDiscardChanges
    },
    secondaryAction: {
      label: keepEditingButtonLabel,
      onClick: onKeepEditing
    },
    disableEscapeKeyDown: false
  }), /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, contentLabel));
};
var DiscardChangesDialog = /*#__PURE__*/react.forwardRef(DiscardChangesDialogComponent);
try {
    // @ts-ignore
    DiscardChangesDialog.displayName = "DiscardChangesDialog";
    // @ts-ignore
    DiscardChangesDialog.__docgenInfo = { "description": "", "displayName": "DiscardChangesDialog", "props": { "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "onKeepEditing": { "defaultValue": null, "description": "", "name": "onKeepEditing", "required": true, "type": { "name": "() => void" } }, "onDiscardChanges": { "defaultValue": null, "description": "", "name": "onDiscardChanges", "required": true, "type": { "name": "() => void" } }, "discardChangesButtonLabel": { "defaultValue": null, "description": "", "name": "discardChangesButtonLabel", "required": true, "type": { "name": "string" } }, "keepEditingButtonLabel": { "defaultValue": null, "description": "", "name": "keepEditingButtonLabel", "required": true, "type": { "name": "string" } }, "contentLabel": { "defaultValue": null, "description": "", "name": "contentLabel", "required": true, "type": { "name": "string" } }, "titleLabel": { "defaultValue": null, "description": "", "name": "titleLabel", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/DiscardChangesModal/DiscardChangesDialog/DiscardChangesDialog.tsx#DiscardChangesDialog"] = { docgenInfo: DiscardChangesDialog.__docgenInfo, name: "DiscardChangesDialog", path: "src/components/Notifications/DiscardChangesModal/DiscardChangesDialog/DiscardChangesDialog.tsx#DiscardChangesDialog" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Notifications/DiscardChangesModal/DiscardChangesModal.tsx
var DiscardChangesModal_excluded = ["id", "children", "headerProps", "discardChangedDialogProps", "modalRef", "dialogRef", "onClose", "hasUnsavedChanges"];
function DiscardChangesModal_extends() {
  DiscardChangesModal_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DiscardChangesModal_extends.apply(this, arguments);
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
function DiscardChangesModal_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = DiscardChangesModal_objectWithoutPropertiesLoose(source, excluded);
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
function DiscardChangesModal_objectWithoutPropertiesLoose(source, excluded) {
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





var DiscardChangesModal = function DiscardChangesModal(_ref) {
  var id = _ref.id,
    children = _ref.children,
    headerProps = _ref.headerProps,
    discardChangedDialogProps = _ref.discardChangedDialogProps,
    modalRef = _ref.modalRef,
    dialogRef = _ref.dialogRef,
    onClose = _ref.onClose,
    hasUnsavedChanges = _ref.hasUnsavedChanges,
    rest = DiscardChangesModal_objectWithoutProperties(_ref, DiscardChangesModal_excluded);
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openDiscardChangesDialog = _useState2[0],
    setOpenDiscardChangesDialog = _useState2[1];
  var onCloseWrapper = function onCloseWrapper() {
    return hasUnsavedChanges() ? setOpenDiscardChangesDialog(true) : onClose();
  };
  var onDialogKeepEditing = function onDialogKeepEditing() {
    setOpenDiscardChangesDialog(false);
  };
  var onDialogDiscardChanges = function onDialogDiscardChanges() {
    setOpenDiscardChangesDialog(false);
    onClose();
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, DiscardChangesModal_extends({
    id: id,
    ref: modalRef,
    onClose: onCloseWrapper
  }, rest), /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.o, DiscardChangesModal_extends({}, headerProps, {
    id: "".concat(id, "-label"),
    onClose: onCloseWrapper
  })), children), /*#__PURE__*/react.createElement(DiscardChangesDialog, DiscardChangesModal_extends({}, discardChangedDialogProps, {
    ref: dialogRef,
    open: openDiscardChangesDialog,
    onKeepEditing: onDialogKeepEditing,
    onDiscardChanges: onDialogDiscardChanges
  })));
};
try {
    // @ts-ignore
    DiscardChangesModal.displayName = "DiscardChangesModal";
    // @ts-ignore
    DiscardChangesModal.__docgenInfo = { "description": "", "displayName": "DiscardChangesModal", "props": { "hasUnsavedChanges": { "defaultValue": null, "description": "", "name": "hasUnsavedChanges", "required": true, "type": { "name": "() => boolean" } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "(event?: MouseEvent<HTMLElement, MouseEvent> | undefined) => unknown" } }, "headerProps": { "defaultValue": null, "description": "", "name": "headerProps", "required": true, "type": { "name": "Omit<Props, \"id\" | \"onClose\">" } }, "discardChangedDialogProps": { "defaultValue": null, "description": "", "name": "discardChangedDialogProps", "required": true, "type": { "name": "Omit<Props, \"open\" | \"onKeepEditing\" | \"onDiscardChanges\">" } }, "modalRef": { "defaultValue": null, "description": "", "name": "modalRef", "required": false, "type": { "name": "RefObject<HTMLDivElement>" } }, "dialogRef": { "defaultValue": null, "description": "", "name": "dialogRef", "required": false, "type": { "name": "RefObject<HTMLDivElement>" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "open": { "defaultValue": null, "description": "", "name": "open", "required": true, "type": { "name": "boolean" } }, "containerProps": { "defaultValue": null, "description": "", "name": "containerProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "backdropProps": { "defaultValue": null, "description": "", "name": "backdropProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } }, "labelledby": { "defaultValue": null, "description": "", "name": "labelledby", "required": false, "type": { "name": "string" } }, "describedby": { "defaultValue": null, "description": "", "name": "describedby", "required": false, "type": { "name": "string" } }, "disableEscapeKeyDown": { "defaultValue": null, "description": "", "name": "disableEscapeKeyDown", "required": false, "type": { "name": "boolean" } }, "disableBackdrop": { "defaultValue": null, "description": "", "name": "disableBackdrop", "required": false, "type": { "name": "boolean" } }, "forceContainerOpen": { "defaultValue": null, "description": "", "name": "forceContainerOpen", "required": false, "type": { "name": "boolean" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/DiscardChangesModal/DiscardChangesModal.tsx#DiscardChangesModal"] = { docgenInfo: DiscardChangesModal.__docgenInfo, name: "DiscardChangesModal", path: "src/components/Notifications/DiscardChangesModal/DiscardChangesModal.tsx#DiscardChangesModal" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./src/components/Form/FormControl/FormControl.tsx + 1 modules
var FormControl = __webpack_require__("./src/components/Form/FormControl/FormControl.tsx");
// EXTERNAL MODULE: ./src/components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("./src/components/Form/Form.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/DiscardChangesModal/DiscardChangesModal.mdx



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
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DiscardChangesModal"
        }), " component is a special combination of the Modal and Dialog components.\nIt shows the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Modal"
        }), " component and displays a dialog that displays a well-known sentence: \"You have unsaved changes\", whenever the user modifies form inputs and wants to close the modal."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the below code snippet, you'll see how you can create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Modal"
        }), " which shows ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Dialog"
        }), " whenever a user changes an input value and closes the modal."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const [open, setOpen] = useState(false);\nconst initialFormState = { name: \"Value\" };\nconst [formState, setFormState] = useState(initialFormState);\nconst id = \"modal\";\n\nconst hasUnsavedChanges = () => JSON.stringify(initialFormState) !== JSON.stringify(formState);\n\nconst onOpen = () => {\n  setOpen(true);\n  setFormState(initialFormState);\n};\n\nconst onClose = () => {\n  setOpen(false);\n};\n\nreturn (\n  <Fragment>\n    <Button onClick={onOpen}>Open modal</Button>\n    <DiscardChangesModalComponent\n      id={id}\n      open={open}\n      onClose={onClose}\n      hasUnsavedChanges={hasUnsavedChanges}\n    >\n      <ModalContent id={`${id}-description`}>\n        <Form\n          id=\"modalForm\"\n          onSubmit={() => {\n            alert(JSON.stringify(formState));\n            onClose();\n          }}\n        >\n          <Typography variant=\"body\" spacing={{ paddingLeft: 5, paddingRight: 5, marginBottom: 5 }}>\n            Changing the input value and closing modal should show 'DiscardChangesDialog'. Clicking\n            on 'Cancel' button should close modal without showing 'DiscardChangesDialog'.\n          </Typography>\n          <FormControl>\n            <InputWrapper\n              name=\"input1\"\n              type=\"text\"\n              value={formState.name}\n              error={false}\n              label=\"Name\"\n              onChange={event =>\n                setFormState(prevState => ({\n                  ...prevState,\n                  name: event.target.value\n                }))\n              }\n            />\n          </FormControl>\n        </Form>\n      </ModalContent>\n      <ModalActions>\n        <Button variant=\"text\" onClick={onClose}>\n          Cancel\n        </Button>\n        <Button form=\"modalForm\" type=\"submit\">\n          Save\n        </Button>\n      </ModalActions>\n    </DiscardChangesModalComponent>\n  </Fragment>\n);\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["As you can see, action buttons are rendered outside of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Form"
        }), " component.\nFor the accessibility and handling of form submission/resetting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "form"
        }), " attribute has to refer to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Form"
        }), " component id."]
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: DiscardChangesModal_stories_DiscardChangesModal
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
/* harmony default export */ var DiscardChangesModal_DiscardChangesModal = (MDXContent);

;// CONCATENATED MODULE: ./stories/Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _DiscardChangesModal$, _DiscardChangesModal$2, _DiscardChangesModal$3;
function DiscardChangesModal_stories_extends() {
  DiscardChangesModal_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return DiscardChangesModal_stories_extends.apply(this, arguments);
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
function DiscardChangesModal_stories_slicedToArray(arr, i) {
  return DiscardChangesModal_stories_arrayWithHoles(arr) || DiscardChangesModal_stories_iterableToArrayLimit(arr, i) || DiscardChangesModal_stories_unsupportedIterableToArray(arr, i) || DiscardChangesModal_stories_nonIterableRest();
}
function DiscardChangesModal_stories_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DiscardChangesModal_stories_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return DiscardChangesModal_stories_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DiscardChangesModal_stories_arrayLikeToArray(o, minLen);
}
function DiscardChangesModal_stories_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function DiscardChangesModal_stories_iterableToArrayLimit(arr, i) {
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
function DiscardChangesModal_stories_arrayWithHoles(arr) {
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
  title: "components/Feedback/Discard Changes Modal",
  component: DiscardChangesModal,
  subcomponents: {
    ModalContent: BaseModalContent/* BaseModalContent */.v
  },
  parameters: {
    docs: {
      page: DiscardChangesModal_DiscardChangesModal
    }
  },
  args: {
    id: "modal",
    headerProps: {
      title: "components/Modal title"
    },
    discardChangedDialogProps: {
      discardChangesButtonLabel: "Discard",
      keepEditingButtonLabel: "Keep editing",
      contentLabel: "You have unsaved changes that will be lost. Do you want to discard them?",
      titleLabel: "Unsaved changes"
    }
  },
  argTypes: {
    open: {
      control: false
    },
    hasUnsavedChanges: {
      control: false
    }
  }
};
/* harmony default export */ var DiscardChangesModal_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(false),
    _useState2 = DiscardChangesModal_stories_slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var initialFormState = {
    name: "Name"
  };
  var _useState3 = (0,react.useState)(initialFormState),
    _useState4 = DiscardChangesModal_stories_slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];
  var id = args.id;
  var hasUnsavedChanges = function hasUnsavedChanges() {
    return JSON.stringify(initialFormState) !== JSON.stringify(formState);
  };
  var onClose = function onClose() {
    setOpen(false);
    setFormState(initialFormState);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open modal"), /*#__PURE__*/react.createElement(DiscardChangesModal, DiscardChangesModal_stories_extends({}, args, {
    id: id,
    open: open,
    onClose: onClose,
    hasUnsavedChanges: hasUnsavedChanges
  }), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */.v, {
    id: "".concat(id, "-description")
  }, /*#__PURE__*/react.createElement(Form/* Form */.l, {
    id: "modalForm",
    onSubmit: function onSubmit() {
      alert(JSON.stringify(formState));
      onClose();
    }
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    spacing: {
      paddingLeft: 5,
      paddingRight: 5,
      marginBottom: 5
    }
  }, "Changing the input value and closing modal should show 'DiscardChangesDialog'. Clicking on 'Cancel' button should close modal without showing 'DiscardChangesDialog'."), /*#__PURE__*/react.createElement(FormControl/* FormControl */.N, null, /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    helperText: "Helper text for this field. Description should be short and not repeat the label",
    name: "input1",
    type: "text",
    value: formState.name,
    error: false,
    label: "Name",
    onChange: function onChange(event) {
      return setFormState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          name: event.target.value
        });
      });
    }
  })))), /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.u, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: "text",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    form: "modalForm",
    type: "submit"
  }, "Save"))));
};
var DiscardChangesModal_stories_DiscardChangesModal = Template.bind({});
DiscardChangesModal_stories_DiscardChangesModal.parameters = _objectSpread(_objectSpread({}, DiscardChangesModal_stories_DiscardChangesModal.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_DiscardChangesModal$ = DiscardChangesModal_stories_DiscardChangesModal.parameters) === null || _DiscardChangesModal$ === void 0 ? void 0 : _DiscardChangesModal$.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n  const initialFormState = {\n    name: \"Name\"\n  };\n  const [formState, setFormState] = useState(initialFormState);\n  const id = args.id;\n  const hasUnsavedChanges = () => JSON.stringify(initialFormState) !== JSON.stringify(formState);\n  const onClose = () => {\n    setOpen(false);\n    setFormState(initialFormState);\n  };\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open modal</Button>\n      <DiscardChangesModalComponent {...args} id={id} open={open} onClose={onClose} hasUnsavedChanges={hasUnsavedChanges}>\n        <ModalContent id={`${id}-description`}>\n          <Form id=\"modalForm\" onSubmit={() => {\n          alert(JSON.stringify(formState));\n          onClose();\n        }}>\n            <Typography variant=\"body\" spacing={{\n            paddingLeft: 5,\n            paddingRight: 5,\n            marginBottom: 5\n          }}>\n              Changing the input value and closing modal should show\n              &apos;DiscardChangesDialog&apos;. Clicking on &apos;Cancel&apos; button should close\n              modal without showing &apos;DiscardChangesDialog&apos;.\n            </Typography>\n            <FormControl>\n              <InputWrapper helperText=\"Helper text for this field. Description should be short and not repeat the label\" name=\"input1\" type=\"text\" value={formState.name} error={false} label=\"Name\" onChange={event => setFormState(prevState => ({\n              ...prevState,\n              name: event.target.value\n            }))} />\n            </FormControl>\n          </Form>\n        </ModalContent>\n        <ModalActions>\n          <Button variant=\"text\" onClick={onClose}>\n            Cancel\n          </Button>\n          <Button form=\"modalForm\" type=\"submit\">\n            Save\n          </Button>\n        </ModalActions>\n      </DiscardChangesModalComponent>\n    </Fragment>;\n}"
    }, (_DiscardChangesModal$2 = DiscardChangesModal_stories_DiscardChangesModal.parameters) === null || _DiscardChangesModal$2 === void 0 ? void 0 : (_DiscardChangesModal$3 = _DiscardChangesModal$2.docs) === null || _DiscardChangesModal$3 === void 0 ? void 0 : _DiscardChangesModal$3.source)
  })
});
var __namedExportsOrder = ["DiscardChangesModal"];

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