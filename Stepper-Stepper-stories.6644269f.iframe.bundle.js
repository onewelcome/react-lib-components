(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2990],{

/***/ "./stories/Stepper/Stepper.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaseStepper: () => (/* binding */ BaseStepper),
  StepperStates: () => (/* binding */ StepperStates),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Stepper_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Stepper/Stepper.tsx + 3 modules
var Stepper = __webpack_require__("./src/components/Stepper/Stepper.tsx");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var blocks_dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Stepper/Stepper.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    pre: "pre",
    h3: "h3",
    h2: "h2"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(blocks_dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stepper"
      }), " component is used to keep user informed about their progress in a multi-step process. It indicates what step they are on, what has been accomplished, what hasn't and where mistakes were made."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It has the following props:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "steps: StepProps[];\ndirection: \"horizontal\" | \"vertical\";\ntextPosition?: \"bottom\" | \"right\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "steps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This prop allows user to specify the array of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "status: StepStatus;\nlabel: string;\ncaption?: string;\nindex?: number;\ndisabled?: boolean;\ndirection?: \"horizontal\" | \"vertical\";\ntextPosition?: \"bottom\" | \"right\";\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each step must have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "caption"
      }), " is optional. User can specify the state of each step using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "status"
      }), " prop. This interface extends the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ComponentPropsWithRef<\"button\">"
      }), " interface which means that user can specify every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "button"
      }), " prop (such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onClick"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onBlur"
      }), " etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "direction",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "direction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The stepper can be used both veritcally and horizontally. The default value of this props is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "horizontal"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from \"react\";\nimport { Stepper, StepperProps } from \"@onewelcome/react-lib-components\";\n\nconst stepperProps: StepperProps = {\n  direction: \"vertical\",\n  steps: [\n    {\n      label: \"Step 1\",\n      status: \"waiting\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 2\",\n      status: \"current\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 3\",\n      status: \"done\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 4\",\n      status: \"error\",\n      caption: \"Caption\"\n    },\n    {\n      label: \"Step 5\",\n      status: \"waiting\",\n      caption: \"Caption\"\n    }\n  ]\n};\n\nexport const StepperComponent = () => {\n  return <Stepper {...stepperProps} />;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.gG, {
        of: BaseStepper
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* ArgTypes */.ov, {
      story: blocks_dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Stepper_Stepper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Stepper/Stepper.stories.tsx
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







const meta = {
  title: "components/Layout/Stepper",
  component: Stepper/* Stepper */.C,
  parameters: {
    docs: {
      page: Stepper_Stepper
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
/* harmony default export */ const Stepper_stories = (meta);
const Template = props => /*#__PURE__*/react.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center"
  }
}, /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, props));
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
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, waitingStateProps), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, currentStateProps), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, doneStateProps), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, errorStateProps)), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, removeCaptionFromProps(waitingStateProps)), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, removeCaptionFromProps(currentStateProps)), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, removeCaptionFromProps(doneStateProps)), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, removeCaptionFromProps(errorStateProps))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, waitingStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, currentStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, doneStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, errorStateProps, {
    direction: "horizontal"
  }))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, waitingStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, currentStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, doneStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react.createElement(Stepper/* Stepper */.C, _extends({}, errorStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  }))));
}];
StepperStates.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,dist/* within */.ux)(canvasElement);
  await (0,dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getAllByText("Step current 1")).toHaveLength(4));
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
};;const __namedExportsOrder = ["BaseStepper","StepperStates"];

/***/ }),

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ conditionalPlay)
});

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
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


const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {

"use strict";


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

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);