"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5812],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./stories/Stepper/Stepper.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Stepper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Stepper/Stepper.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Stepper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Stepper"
      }), " component is used to keep user informed about their progress in a multi-step process. It indicates what step they are on, what has been accomplished, what hasn't and where mistakes were made."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It has the following props:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "steps: StepProps[];\ndirection: \"horizontal\" | \"vertical\";\ntextPosition?: \"bottom\" | \"right\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "steps",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "steps"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This prop allows user to specify the array of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Steps"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "status: StepStatus;\nlabel: string;\ncaption?: string;\nindex?: number;\ndisabled?: boolean;\ndirection?: \"horizontal\" | \"vertical\";\ntextPosition?: \"bottom\" | \"right\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Each step must have a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "label"
      }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "caption"
      }), " is optional. User can specify the state of each step using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "status"
      }), " prop. This interface extends the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ComponentPropsWithRef<\"button\">"
      }), " interface which means that user can specify every ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "button"
      }), " prop (such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onClick"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onBlur"
      }), " etc.)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "direction",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "direction"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The stepper can be used both veritcally and horizontally. The default value of this props is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "horizontal"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from \"react\";\nimport { Stepper, StepperProps } from \"@onewelcome/react-lib-components\";\n\nconst stepperProps: StepperProps = {\n  direction: \"vertical\",\n  steps: [\n    {\n      label: \"Step 1\",\n      status: \"waiting\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 2\",\n      status: \"current\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 3\",\n      status: \"done\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 4\",\n      status: \"error\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 5\",\n      status: \"waiting\",\n      caption: \"Caption\"\n    }\n  ]\n};\n\nexport const StepperComponent = () => {\n  return <Stepper {...stepperProps} />;\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _Stepper_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.BaseStepper
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
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

/***/ "./stories/Stepper/Stepper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseStepper: () => (/* binding */ BaseStepper),
/* harmony export */   StepperStates: () => (/* binding */ StepperStates),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Stepper/Stepper.tsx");
/* harmony import */ var _storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.storybook/conditionalPlay.ts");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Stepper_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/Stepper/Stepper.mdx");
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






const meta = {
  title: "components/Layout/Stepper",
  component: _src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C,
  parameters: {
    docs: {
      page: _Stepper_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
  },
  args: {
    direction: "vertical",
    textPosition: "right",
    steps: [{
      label: "Step 1",
      status: "waiting",
      caption: "Very very long caption"
    }, {
      label: "Step 2",
      status: "current"
    }, {
      label: "Step 3",
      status: "done",
      caption: "Caption"
    }, {
      label: "Step 4",
      status: "error",
      caption: "Caption"
    }, {
      label: "Step 5",
      status: "waiting",
      disabled: true
    }]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center"
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, props));
const BaseStepper = Template.bind({});
const StepperStates = Template.bind({});
const removeCaptionFromProps = props => {
  return {
    ...props,
    steps: props.steps.map(step => ({
      ...step,
      caption: undefined
    }))
  };
};
const waitingStateProps = {
  direction: "vertical",
  steps: [{
    id: "general",
    label: "Step waiting 1",
    status: "waiting",
    caption: "Caption"
  }, {
    id: "hover",
    label: "Step waiting 2",
    status: "waiting",
    caption: "Caption"
  }, {
    id: "active",
    label: "Step waiting 3",
    status: "waiting",
    caption: "Caption"
  }, {
    id: "focus",
    label: "Step waiting 4",
    status: "waiting",
    caption: "Caption"
  }, {
    label: "Step waiting 5",
    status: "waiting",
    caption: "Caption",
    disabled: true
  }]
};
const currentStateProps = {
  direction: "vertical",
  steps: [{
    id: "general",
    label: "Step current 1",
    status: "current",
    caption: "Caption"
  }, {
    id: "hover",
    label: "Step current 2",
    status: "current",
    caption: "Caption"
  }, {
    id: "active",
    label: "Step current 3",
    status: "current",
    caption: "Caption"
  }, {
    id: "focus",
    label: "Step current 4",
    status: "current",
    caption: "Caption"
  }, {
    label: "Step current 5",
    status: "current",
    caption: "Caption",
    disabled: true
  }]
};
const doneStateProps = {
  direction: "vertical",
  steps: [{
    id: "general",
    label: "Step done 1",
    status: "done",
    caption: "Caption"
  }, {
    id: "hover",
    label: "Step done 2",
    status: "done",
    caption: "Caption"
  }, {
    id: "active",
    label: "Step done 3",
    status: "done",
    caption: "Caption"
  }, {
    id: "focus",
    label: "Step done 4",
    status: "done",
    caption: "Caption"
  }, {
    label: "Step done 5",
    status: "done",
    caption: "Caption",
    disabled: true
  }]
};
const errorStateProps = {
  direction: "vertical",
  steps: [{
    id: "general",
    label: "Step error 1",
    status: "error",
    caption: "Caption"
  }, {
    id: "hover",
    label: "Step error 2",
    status: "error",
    caption: "Caption"
  }, {
    id: "active",
    label: "Step error 3",
    status: "error",
    caption: "Caption"
  }, {
    id: "focus",
    label: "Step error 4",
    status: "error",
    caption: "Caption"
  }, {
    label: "Step error 5",
    status: "error",
    caption: "Caption",
    disabled: true
  }]
};
StepperStates.decorators = [() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, waitingStateProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, currentStateProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, doneStateProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, errorStateProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, removeCaptionFromProps(waitingStateProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, removeCaptionFromProps(currentStateProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, removeCaptionFromProps(doneStateProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, removeCaptionFromProps(errorStateProps))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, waitingStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, currentStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, doneStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, errorStateProps, {
    direction: "horizontal"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, waitingStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, currentStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, doneStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_Stepper_Stepper__WEBPACK_IMPORTED_MODULE_2__/* .Stepper */ .C, _extends({}, errorStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  }))));
}];
StepperStates.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_4__/* .conditionalPlay */ .h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .within */ .ux)(canvasElement);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__/* .expect */ .E3)(canvas.getAllByText("Step current 1")).toHaveLength(4));
});
StepperStates.parameters = {
  pseudo: {
    hover: "#hover",
    active: "#active",
    disabled: "#disabled",
    focusVisible: "#focus button"
  },
  controls: {
    disable: true
  }
};
;
const __namedExportsOrder = ["BaseStepper", "StepperStates"];
BaseStepper.parameters = {
  ...BaseStepper.parameters,
  docs: {
    ...BaseStepper.parameters?.docs,
    source: {
      originalSource: "props => <div style={{\n  display: \"flex\",\n  justifyContent: \"center\"\n}}>\n    <Stepper {...props} />\n  </div>",
      ...BaseStepper.parameters?.docs?.source
    }
  }
};
StepperStates.parameters = {
  ...StepperStates.parameters,
  docs: {
    ...StepperStates.parameters?.docs,
    source: {
      originalSource: "props => <div style={{\n  display: \"flex\",\n  justifyContent: \"center\"\n}}>\n    <Stepper {...props} />\n  </div>",
      ...StepperStates.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ conditionalPlay)
});

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArgument) {
  const windowToCheck = windowArgument || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (/Chromatic/.test(windowToCheck.navigator.userAgent) ||
      /chromatic=true/.test(windowToCheck.location.href))
  );
}

;// CONCATENATED MODULE: ./.storybook/conditionalPlay.ts
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
 * To improve our visual tests, we need to display various states of our components. This often requires simulating user actions.
 * In Storybook, visiting the desired component automatically triggers the play function, which can be confusing for those not familiar with the tool.
 * To address this, we've wrapped the original play function, so it only runs when Chromatic is active or when in development mode.
 * @param playFunction
 */
const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return async context => {
      await playFunction(context);
    };
  }
  return async () => {};
};

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

/***/ })

}]);