(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[924],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "./stories/hooks/useClickOutside.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _useClickOutside_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/hooks/useClickOutside.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      title: "Hooks/useClickOutside",
      parameters: {
        viewMode: "docs",
        previewTabs: {
          canvas: {
            hidden: true
          }
        }
      }
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "useclickoutside",
      children: "useClickOutside"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This hook is especially built for components or features that need to execute an action whenever the user clicks somewhere on the webpage outside of some specific element.\nAn example is a modal window that is open. If you click next to the modal window (on the content ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "behind"
      }), " the modal), it usually indicates that you want to close the modal.\nIn order to do this, you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useClickOutside"
      }), " hook to quickly and efficiently apply an event listener to the body to check for this event."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "arguments",
      children: "Arguments"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "useClickOutside"
      }), " function accepts three arguments, first two mandatory (*):"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "myElementRef"
        }), " (*) - the element outside of which we detect clicking"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onClickOutside"
        }), " (*) - callback function called when click outside of the element occurs\nThis function is entirely up to you. In our modal example, it is probably as some sort of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "open"
        }), " property that is set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "true"
        }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "false"
        }), " to indicate that the modal needs to be shown or not.\nThe callback function in our case could be to set the state variable linked to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "open"
        }), " property to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "false"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["dependencies - Whenever our component gets rendered and rerendered, we want to prevent that our internal mouse event listener gets added and removed too many times. It's the same as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "useEffect"
        }), "s dependency list. For example, when you use this hook to close a modal dialog, you would specify ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "[open]"
        }), " with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "open"
        }), " being a state variable indicating whether the modal is open or not."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "complete-example",
      children: "Complete example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The following example shows behavior of the hook:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "when you click button1, its counter increases"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "when you click outside both button1 and button 2, the \"outside\" counter increases"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "when you click button2, both its counter and the \"outside\" counter increases"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [button1ClickCount, setButton1ClickCount] = useState(0);\n  const [button2ClickCount, setButton2ClickCount] = useState(0);\n  const [outsideButton1ClickCount, setOutsideButton1ClickCount] = useState(0);\n\n  const myElementRef = useRef < HTMLButtonElement > null;\n\n  useClickOutside(myElementRef, () => {\n    setOutsideButton1ClickCount(outsideButton1ClickCount + 1);\n  });\n\n  return (\n    <Fragment>\n      <Button\n        ref={myElementRef}\n        data-testid=\"button1\"\n        onClick={() => setButton1ClickCount(button1ClickCount + 1)}\n      >\n        button1 clicked {button1ClickCount} times\n      </Button>\n      <Button data-testid=\"button2\" onClick={() => setButton2ClickCount(button2ClickCount + 1)}>\n        button2 clicked {button2ClickCount} times\n      </Button>\n      outside of button1 clicked {outsideButton1ClickCount} times\n    </Fragment>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _useClickOutside_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.Example
    })]
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

/***/ "./stories/hooks/useClickOutside.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Example: () => (/* binding */ Example),
/* harmony export */   ExampleModal: () => (/* binding */ ExampleModal),
/* harmony export */   ExampleModal2: () => (/* binding */ ExampleModal2),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _useClickOutside_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./stories/hooks/useClickOutside.mdx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/hooks/useClickOutside.ts");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Button/Button.tsx");
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
  title: "Hooks/useClickOutside",
  parameters: {
    docs: {
      page: _useClickOutside_mdx__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    controls: {
      hideNoControlsWarning: true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const ExampleTemplate = () => {
  const ExampleComponent = () => {
    const [button1ClickCount, setButton1ClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [button2ClickCount, setButton2ClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [outsideButton1ClickCount, setOutsideButton1ClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const myElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,_src__WEBPACK_IMPORTED_MODULE_2__/* .useClickOutside */ .L)(myElementRef, () => {
      setOutsideButton1ClickCount(outsideButton1ClickCount + 1);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
      ref: myElementRef,
      "data-testid": "button1",
      onClick: () => setButton1ClickCount(button1ClickCount + 1)
    }, "button1 clicked ", button1ClickCount, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
      "data-testid": "button2",
      onClick: () => setButton2ClickCount(button2ClickCount + 1)
    }, "button2 clicked ", button2ClickCount, " times"), "outside of button1 clicked ", outsideButton1ClickCount, " times");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExampleComponent, null);
};
const Example = ExampleTemplate.bind({});
Example.args = {};
const ExampleModalTemplate = () => {
  const MyModalComponent = args => {
    const myElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,_src__WEBPACK_IMPORTED_MODULE_2__/* .useClickOutside */ .L)(myElementRef, () => {
      args.close();
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: myElementRef,
      style: {
        backgroundColor: "#ff8"
      }
    }, "fake modal dialog");
  };
  const ExampleComponent = () => {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
      "data-testid": "button1",
      onClick: () => setOpen(true)
    }, "open modal"), open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MyModalComponent, {
      close: () => setOpen(false)
    }) : undefined);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExampleComponent, null);
};
const ExampleModal = ExampleModalTemplate.bind({});
ExampleModal.args = {};
const ExampleModal2Template = () => {
  const ExampleComponent = () => {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const modalElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,_src__WEBPACK_IMPORTED_MODULE_2__/* .useClickOutside */ .L)(modalElementRef, () => {
      if (open) {
        setOpen(false);
      }
    }, [open]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
      "data-testid": "button1",
      onClick: () => setOpen(true)
    }, "open modal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: modalElementRef,
      style: {
        display: open ? "block" : "none",
        backgroundColor: "#ff8"
      }
    }, "fake modal dialog"));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExampleComponent, null);
};
const ExampleModal2 = ExampleModal2Template.bind({});
ExampleModal2.args = {};
Example.parameters = {
  ...Example.parameters,
  docs: {
    ...Example.parameters?.docs,
    source: {
      originalSource: "() => {\n  const ExampleComponent = () => {\n    const [button1ClickCount, setButton1ClickCount] = useState(0);\n    const [button2ClickCount, setButton2ClickCount] = useState(0);\n    const [outsideButton1ClickCount, setOutsideButton1ClickCount] = useState(0);\n    const myElementRef = useRef<HTMLButtonElement>(null);\n    useClickOutside(myElementRef, () => {\n      setOutsideButton1ClickCount(outsideButton1ClickCount + 1);\n    });\n    return <Fragment>\n        <Button ref={myElementRef} data-testid=\"button1\" onClick={() => setButton1ClickCount(button1ClickCount + 1)}>\n          button1 clicked {button1ClickCount} times\n        </Button>\n        <Button data-testid=\"button2\" onClick={() => setButton2ClickCount(button2ClickCount + 1)}>\n          button2 clicked {button2ClickCount} times\n        </Button>\n        outside of button1 clicked {outsideButton1ClickCount} times\n      </Fragment>;\n  };\n  return <ExampleComponent></ExampleComponent>;\n}",
      ...Example.parameters?.docs?.source
    }
  }
};
ExampleModal.parameters = {
  ...ExampleModal.parameters,
  docs: {
    ...ExampleModal.parameters?.docs,
    source: {
      originalSource: "() => {\n  const MyModalComponent = (args: {\n    close: () => void;\n  }) => {\n    const myElementRef = useRef<HTMLDivElement>(null);\n    useClickOutside(myElementRef, () => {\n      args.close();\n    });\n    return <div ref={myElementRef} style={{\n      backgroundColor: \"#ff8\"\n    }}>\n        fake modal dialog\n      </div>;\n  };\n  const ExampleComponent = () => {\n    const [open, setOpen] = useState(false);\n    return <Fragment>\n        <Button data-testid=\"button1\" onClick={() => setOpen(true)}>\n          open modal\n        </Button>\n        {open ? <MyModalComponent close={() => setOpen(false)}></MyModalComponent> : undefined}\n      </Fragment>;\n  };\n  return <ExampleComponent></ExampleComponent>;\n}",
      ...ExampleModal.parameters?.docs?.source
    }
  }
};
ExampleModal2.parameters = {
  ...ExampleModal2.parameters,
  docs: {
    ...ExampleModal2.parameters?.docs,
    source: {
      originalSource: "() => {\n  const ExampleComponent = () => {\n    const [open, setOpen] = useState(false);\n    const modalElementRef = useRef<HTMLDivElement>(null);\n    useClickOutside(modalElementRef, () => {\n      if (open) {\n        setOpen(false);\n      }\n    }, [open]);\n    return <Fragment>\n        <Button data-testid=\"button1\" onClick={() => setOpen(true)}>\n          open modal\n        </Button>\n        <div ref={modalElementRef} style={{\n        display: open ? \"block\" : \"none\",\n        backgroundColor: \"#ff8\"\n      }}>\n          fake modal dialog\n        </div>\n      </Fragment>;\n  };\n  return <ExampleComponent></ExampleComponent>;\n}",
      ...ExampleModal2.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Example","ExampleModal","ExampleModal2"];

/***/ }),

/***/ "./src/hooks/useClickOutside.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
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


const useClickOutside = (myElementRef, onClickOutside, dependencies) => {
  function eventListener(event) {
    const myElement = myElementRef?.current;
    if (!myElement) {
      return;
    }
    const clickedInsideMyElement = myElement.contains(event.target);
    if (!clickedInsideMyElement) {
      onClickOutside(event);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => window.addEventListener("click", eventListener));
    return () => {
      setTimeout(() => window.removeEventListener("click", eventListener));
    };
  }, dependencies);
};

/***/ }),

/***/ "./node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);