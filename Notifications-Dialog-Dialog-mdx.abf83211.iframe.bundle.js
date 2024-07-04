"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2369],{

/***/ "./stories/Notifications/Dialog/Dialog.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Dialog_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Notifications/Dialog/Dialog.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Dialog_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Dialogs are used when immediate user interaction is required.\nThey block interaction with the application until a user has made a choice.\nDialogs appear as a modal on top of the existing content."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When the user presses enter without tabbing through the interface, the primary button is triggered, even when it is a destructive action.\nDialog handles X (close) button, escape key presses and clicking outside the dialog the same way as the Modal component."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The dialog has different properties that can be used to customize the dialog."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "dialog-properties",
      children: "Dialog properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            children: "Property"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            children: "Description"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            children: "Required"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tbody", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "open"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "Whether the dialog is open or not."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "yes"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "title"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The title of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "yes"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "titleIcon"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "boolean, or string or <Icon /> component"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
            children: ["The icon to show in the title. If it's true the default icon (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "info-circle"
            }), ") is rendered"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "no"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "caption"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The caption of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "no"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "primaryAction"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "{ label: string; onClick: () => void; disabled?: boolean }"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The primary action of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "yes"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "secondaryAction"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "{ label: string; onClick: () => void; disabled?: boolean }"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The secondary action of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "no"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "onClose"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "() => void"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The function that is called when the dialog is closed."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "yes"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "children"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "ReactNode"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The content of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "yes"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "disableEscapeKeyDown"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "Whether the dialog should close when the escape key is pressed."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "no"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "zIndex"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The z-index of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "no"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "cancelAction"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "{ label: string; cancelButtonProps: ButtonProps }"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "The cancel action of the dialog."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            children: "no"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "cancel-button-configuration",
      children: "Cancel button configuration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Enhance your modal with a left-aligned cancel button by simply applying the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "cancelAction"
      }), " property, complete with a required ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "label"
      }), " field."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Customization is possible by adding extra properties to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "cancelAction"
      }), " configuration, allowing adjustments to the button's visual style."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The Dialog's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onClose"
      }), " method is attached to cancel button's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onClick"
      }), " event."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Unlike the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<Modal />"
      }), " component, where the cancelButton is hidden on smaller screens to preserve readability,\nin the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<Dialog />"
      }), " component, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "it remains visible even on mobile resolutions"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The use of dialogues is very broad. See example usage below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Note: triggering primary button on pressing enter doesn't work in documentation section (Enter key is intercepted)."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "action-dialog",
      children: "Action dialog"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the below code snippet, you'll see how you can show dialog."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Dialog\n  open={open}\n  onClose={onClose}\n  titleIcon={true}\n  caption=\"Example dialog\"\n  title=\"Verify email address\"\n  primaryAction={label: 'Send email', onClick: onSendEmail}\n  cancelAction={label: 'Cancel'}\n>\n  <Fragment>\n    <Typography variant=\"body\">\n      You want to verify the email address <b>dana.george@mydomain.com</b>.\n    </Typography>\n    <Typography variant=\"body\" spacing={{ margin: 0 }}>\n      <b>Dana George</b> will receive an email with a verification link and must click the link to\n      complete the verification.\n    </Typography>\n  </Fragment>\n</Dialog>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Dialog_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.ActionDialog
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "single-action",
      children: "Single action"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the below code snippet, you'll see how you can show dialog with on one button"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Dialog\n  open={open}\n  titleIcon={<Icon icon={Icons.Bell} />}\n  caption=\"Example dialog\"\n  onClose={onClose}\n  title=\"Info\"\n  primaryAction={label: 'Ok', onClick}\n>\n  <Typography variant=\"body\" spacing={{ margin: 0 }}>\n    You can't remove your account.\n  </Typography>\n</Dialog>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Dialog_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.SingleActionDialog
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "nesting-dialogs",
      children: "Nesting dialogs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the below code snippet, you'll see how you can nest dialogs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const [open, setOpen] = useState(false);\nconst [open2, setOpen2] = useState(false);\nreturn (\n  <Fragment>\n    <Button onClick={() => setOpen(true)}>Open dialog</Button>\n    <Dialog\n      open={open}\n      title=\"Dialog 1\"\n      titleIcon={<Icon icon={Icons.Bell} />}\n      caption=\"Example dialog\"\n      onClose={() => setOpen(false)}\n      primaryAction={{\n        label: \"Open another dialog\",\n        onClick: () => setOpen2(true)\n      }}\n      cancelAction={{ label: \"Cancel\" }}\n    >\n      <Typography variant=\"body\" spacing={{ margin: 0 }}>\n        Long dialog content. Long dialog content. Long dialog content. Long dialog content. Long\n        dialog content.\n      </Typography>\n    </Dialog>\n    <Dialog\n      open={open2}\n      onClose={() => setOpen2(false)}\n      title=\"Dialog 2\"\n      titleIcon={true}\n      caption=\"Example dialog\"\n      primaryAction={{\n        label: \"Close\",\n        onClick: () => setOpen2(false)\n      }}\n    >\n      <Typography variant=\"body\" spacing={{ margin: 0 }}>\n        Short dialog content.\n      </Typography>\n    </Dialog>\n  </Fragment>\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Dialog_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.NestedDialogs
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "./stories/Notifications/Dialog/Dialog.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDialog: () => (/* binding */ ActionDialog),
/* harmony export */   DialogWithoutIcon: () => (/* binding */ DialogWithoutIcon),
/* harmony export */   NestedDialogs: () => (/* binding */ NestedDialogs),
/* harmony export */   SingleActionDialog: () => (/* binding */ SingleActionDialog),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Notifications_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Notifications/Dialog/Dialog.tsx");
/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Button/Button.tsx");
/* harmony import */ var _src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Typography/Typography.tsx");
/* harmony import */ var _Dialog_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Notifications/Dialog/Dialog.mdx");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Icon/Icon.tsx");
/* harmony import */ var _storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.storybook/conditionalPlay.ts");
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









const meta = {
  title: "components/Feedback/Dialog",
  component: _src_components_Notifications_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__/* .Dialog */ .l,
  parameters: {
    docs: {
      page: _Dialog_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
  },
  args: {
    id: "dialog",
    title: "Discard changes?",
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
      variant: "body",
      spacing: {
        margin: 0
      }
    }, "This cannot be undone and you will lose your changes."),
    primaryAction: {
      label: "Discard",
      onClick: () => window.setDialogOpen(false)
    },
    secondaryAction: {
      label: "Keep editing",
      onClick: () => window.setDialogOpen(false)
    },
    titleIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Bell
    }),
    caption: "This is a caption",
    cancelAction: {
      label: "Cancel"
    },
    onClose: () => window.setDialogOpen(false)
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /** When we're on the story page, we want the dialog to start in the "open" state. However, when we're on the "docs" page, we don't. */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.location.search.includes("story")) {
      setOpen(true);
    }
  }, []);
  window.setDialogOpen = setOpen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$, {
    onClick: () => setOpen(true)
  }, "Open dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Notifications_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__/* .Dialog */ .l, {
    id: args.id,
    open: open,
    onClose: args.onClose,
    title: args.title,
    primaryAction: args.primaryAction,
    secondaryAction: args.secondaryAction,
    titleIcon: args.titleIcon,
    caption: args.caption,
    cancelAction: args.cancelAction
  }, args.children));
};
const ActionDialog = Template.bind({});
ActionDialog.args = {
  title: "Verify email address",
  children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
    variant: "body"
  }, "You want to verify the email address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "dana.george@mydomain.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Dana George"), " will receive an email with a verification link and must click the link to complete the verification.")),
  primaryAction: {
    label: "Send email",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined
};
const SingleActionDialog = Template.bind({});
SingleActionDialog.args = {
  title: "Info",
  children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "You can't remove your account."),
  primaryAction: {
    label: "Ok",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined,
  cancelAction: undefined,
  onClose: null
};
const NestedDialogsTemplate = () => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [open2, setOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /** When we're on the story page, we want the dialog to start in the "open" state. However, when we're on the "docs" page, we don't. */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.location.search.includes("story")) {
      setOpen(true);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$, {
    onClick: () => setOpen(true)
  }, "Open dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Notifications_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__/* .Dialog */ .l, {
    id: "dialog11",
    open: open,
    title: "Dialog 1",
    titleIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Bell
    }),
    caption: "This is a caption",
    onClose: () => setOpen(false),
    primaryAction: {
      label: "Open another dialog",
      onClick: () => setOpen2(true)
    },
    cancelAction: {
      label: "Cancel"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "Addressing the inquiry concerning the length of text within a dialogue is indeed a multifaceted endeavor. It is an intricate subject that demands careful consideration and comprehensive analysis to provide a thorough and meaningful response.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Notifications_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__/* .Dialog */ .l, {
    id: "dialog12",
    open: open2,
    onClose: () => setOpen2(false),
    title: "Dialog 2",
    titleIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Bell
    }),
    caption: "This is a caption",
    primaryAction: {
      label: "Close",
      onClick: () => setOpen2(false)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "Short dialog content.")));
};
const NestedDialogs = NestedDialogsTemplate.bind({});
NestedDialogs.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_7__/* .conditionalPlay */ .h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(canvasElement);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText("Dialog 1")).not.toBeNull());
  const openAnotherDialogButton = await canvas.findByText("Open another dialog");
  await _storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .userEvent */ .Q4.click(openAnotherDialogButton);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.queryByText("Dialog 2")).not.toBeNull());
});
const DialogWithoutIcon = Template.bind({});
DialogWithoutIcon.args = {
  title: "Info",
  children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, {
    variant: "body",
    spacing: {
      margin: 0
    }
  }, "You can't remove your account."),
  primaryAction: {
    label: "Ok",
    onClick: () => window.setDialogOpen(false)
  },
  secondaryAction: undefined,
  titleIcon: undefined,
  caption: undefined,
  cancelAction: {
    label: "Cancel"
  }
};
ActionDialog.parameters = {
  ...ActionDialog.parameters,
  docs: {
    ...ActionDialog.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n\n  /** When we're on the story page, we want the dialog to start in the \"open\" state. However, when we're on the \"docs\" page, we don't. */\n  useEffect(() => {\n    if (window.location.search.includes(\"story\")) {\n      setOpen(true);\n    }\n  }, []);\n  window.setDialogOpen = setOpen;\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id={args.id} open={open} onClose={args.onClose} title={args.title} primaryAction={args.primaryAction} secondaryAction={args.secondaryAction} titleIcon={args.titleIcon} caption={args.caption} cancelAction={args.cancelAction}>\n        {args.children}\n      </Dialog>\n    </Fragment>;\n}",
      ...ActionDialog.parameters?.docs?.source
    }
  }
};
SingleActionDialog.parameters = {
  ...SingleActionDialog.parameters,
  docs: {
    ...SingleActionDialog.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n\n  /** When we're on the story page, we want the dialog to start in the \"open\" state. However, when we're on the \"docs\" page, we don't. */\n  useEffect(() => {\n    if (window.location.search.includes(\"story\")) {\n      setOpen(true);\n    }\n  }, []);\n  window.setDialogOpen = setOpen;\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id={args.id} open={open} onClose={args.onClose} title={args.title} primaryAction={args.primaryAction} secondaryAction={args.secondaryAction} titleIcon={args.titleIcon} caption={args.caption} cancelAction={args.cancelAction}>\n        {args.children}\n      </Dialog>\n    </Fragment>;\n}",
      ...SingleActionDialog.parameters?.docs?.source
    }
  }
};
NestedDialogs.parameters = {
  ...NestedDialogs.parameters,
  docs: {
    ...NestedDialogs.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [open, setOpen] = useState(false);\n  const [open2, setOpen2] = useState(false);\n\n  /** When we're on the story page, we want the dialog to start in the \"open\" state. However, when we're on the \"docs\" page, we don't. */\n  useEffect(() => {\n    if (window.location.search.includes(\"story\")) {\n      setOpen(true);\n    }\n  }, []);\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id=\"dialog11\" open={open} title=\"Dialog 1\" titleIcon={<Icon icon={Icons.Bell} />} caption=\"This is a caption\" onClose={() => setOpen(false)} primaryAction={{\n      label: \"Open another dialog\",\n      onClick: () => setOpen2(true)\n    }} cancelAction={{\n      label: \"Cancel\"\n    }}>\n        <Typography variant=\"body\" spacing={{\n        margin: 0\n      }}>\n          Addressing the inquiry concerning the length of text within a dialogue is indeed a\n          multifaceted endeavor. It is an intricate subject that demands careful consideration and\n          comprehensive analysis to provide a thorough and meaningful response.\n        </Typography>\n      </Dialog>\n      <Dialog id=\"dialog12\" open={open2} onClose={() => setOpen2(false)} title=\"Dialog 2\" titleIcon={<Icon icon={Icons.Bell} />} caption=\"This is a caption\" primaryAction={{\n      label: \"Close\",\n      onClick: () => setOpen2(false)\n    }}>\n        <Typography variant=\"body\" spacing={{\n        margin: 0\n      }}>\n          Short dialog content.\n        </Typography>\n      </Dialog>\n    </Fragment>;\n}",
      ...NestedDialogs.parameters?.docs?.source
    }
  }
};
DialogWithoutIcon.parameters = {
  ...DialogWithoutIcon.parameters,
  docs: {
    ...DialogWithoutIcon.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [open, setOpen] = useState(false);\n\n  /** When we're on the story page, we want the dialog to start in the \"open\" state. However, when we're on the \"docs\" page, we don't. */\n  useEffect(() => {\n    if (window.location.search.includes(\"story\")) {\n      setOpen(true);\n    }\n  }, []);\n  window.setDialogOpen = setOpen;\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open dialog</Button>\n      <Dialog id={args.id} open={open} onClose={args.onClose} title={args.title} primaryAction={args.primaryAction} secondaryAction={args.secondaryAction} titleIcon={args.titleIcon} caption={args.caption} cancelAction={args.cancelAction}>\n        {args.children}\n      </Dialog>\n    </Fragment>;\n}",
      ...DialogWithoutIcon.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ActionDialog","SingleActionDialog","NestedDialogs","DialogWithoutIcon"];

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Typography),
  v: () => (/* binding */ validVariants)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.A, options);




       /* harmony default export */ const Typography_Typography_module = (Typography_module/* default */.A && Typography_module/* default */.A.locals ? Typography_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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




const validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
const TypographyComponent = (_ref, ref) => {
  let {
    children,
    variant,
    tag,
    style,
    spacing,
    align,
    className = "",
    ...rest
  } = _ref;
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  const styleWithSpacing = (0,useSpacing/* useSpacing */.T)(spacing, style);
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
  let TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: {
      ...styleWithSpacing,
      textAlign: align
    },
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
const Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useSpacing)
/* harmony export */ });
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

const defaultFactor = 0.25;
const defaultUnit = "rem";
const spacingNumberRegex = /(\d+\.?\d*)+/g;
const useSpacing = (spacingProps, style) => {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce((prev, _ref) => {
      let [spacing, multiplier] = _ref;
      const matches = String(multiplier).matchAll(spacingNumberRegex);
      const cssSpacingValue = Array.from(matches).map(_ref2 => {
        let [multiplierValue] = _ref2;
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return {
        ...prev,
        [spacing]: cssSpacingValue
      };
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: () => (/* binding */ getValueByPath),
/* harmony export */   Eo: () => (/* binding */ isJsonString),
/* harmony export */   GK: () => (/* binding */ areArraysDifferent),
/* harmony export */   J9: () => (/* binding */ filterProps),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   ir: () => (/* binding */ remToPx),
/* harmony export */   ni: () => (/* binding */ generateID)
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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

const generateID = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  let stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
const filterProps = function (props, regexPattern) {
  let returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce((acc, key) => {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(_ref => {
      let [key] = _ref;
      return !regexPattern.test(key);
    }).reduce((prevObj, currKeyValPair) => ({
      ...prevObj,
      [currKeyValPair[0]]: currKeyValPair[1]
    }), {});
  }
};
const debounce = (fn, delay) => {
  let timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
const throttle = (fn, delay) => {
  let lastTime = 0;
  return function () {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
const isEqual = (x, y) => {
  const typesCoincide = x && y && typeof x === "object" && typeof y === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => isEqual(x[key], y[key])) : x === y;
};
const areArraysDifferent = (arr1, arr2, key) => {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    const firstFilteredArray = arr1.filter(arr1Item => arr2.some(arr2Item => !isEqual(arr1Item[key], arr2Item[key])));
    const secondFilteredArray = arr2.filter(arr2Item => arr1.some(arr1Item => !isEqual(arr1Item[key], arr2Item[key])));
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
const getValueByPath = (obj, path) => {
  return path.split(".").reduce((res, prop) => {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
const remToPx = rem => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
const deepMerge = (obj1, obj2) => {
  if (!obj2) return obj1;
  let result = {
    ...obj1
  };
  for (let key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null && Object.prototype.hasOwnProperty.call(obj1, key) && !Array.isArray(obj2[key])) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
try {
    // @ts-ignore
    escapeRegExp.displayName = "escapeRegExp";
    // @ts-ignore
    escapeRegExp.__docgenInfo = { "description": "", "displayName": "escapeRegExp", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#escapeRegExp"] = { docgenInfo: escapeRegExp.__docgenInfo, name: "escapeRegExp", path: "src/util/helper.tsx#escapeRegExp" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": `Typography-module__typography_style_h1--QRbCJ`,
	"typography_style_h2": `Typography-module__typography_style_h2--gst_1`,
	"typography_style_h3": `Typography-module__typography_style_h3--OMuiN`,
	"typography_style_h4": `Typography-module__typography_style_h4--AK8ry`,
	"typography_style_body": `Typography-module__typography_style_body--RZ14O`,
	"typography_style_body-bold": `Typography-module__typography_style_body-bold--yrfzC`,
	"typography_style_sub-text": `Typography-module__typography_style_sub-text--J284m`,
	"typography_style_code": `Typography-module__typography_style_code--aL5hm`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 */.readyclasses-module__sr-only--AaB3O{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.readyclasses-module__hidden--kciBr{display:none}.readyclasses-module__slide-in--_Xh2C{animation:readyclasses-module__slide-in--_Xh2C .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-in--_Xh2C{animation-duration:.1ms}}.readyclasses-module__slide-out--fOqOy{animation:readyclasses-module__slide-out--fOqOy .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-out--fOqOy{animation-duration:.1ms}}@keyframes readyclasses-module__slide-in--_Xh2C{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes readyclasses-module__slide-out--fOqOy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `readyclasses-module__sr-only--AaB3O`,
	"hidden": `readyclasses-module__hidden--kciBr`,
	"slide-in": `readyclasses-module__slide-in--_Xh2C`,
	"slide-out": `readyclasses-module__slide-out--fOqOy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {



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

/***/ }),

/***/ "./src/readyclasses.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

}]);