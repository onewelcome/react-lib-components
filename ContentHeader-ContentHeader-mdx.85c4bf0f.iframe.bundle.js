(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7068],{

/***/ "./stories/ContentHeader/ContentHeader.mdx":
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
/* harmony import */ var _ContentHeader_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/ContentHeader/ContentHeader.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _ContentHeader_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ContentHeader"
      }), " component serves as the header for a page and is designed to be flexible and customizable.\nIt helps streamline common UI patterns, such as displaying a back button, showing a global page error, or incorporating additional contextual elements like action buttons.\nThis makes it easier to maintain consistency across different pages while reducing repetitive code."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "See the code snippet below that showcases how you can use it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-jsx",
        children: "\nconst buttons: ReactElement<ButtonProps, typeof Button>[] = [\n  <Button key=\"1\" onClick={() => alert(\"Cancel button clicked.\")} variant=\"text\">\n    Cancel\n  </Button>,\n  <Button key=\"2\" disabled startIcon={<Icon icon={Icons.SaveOutline} />}>\n    Save Draft\n  </Button>,\n  <Button key=\"3\" onClick={() => alert(\"Submit button clicked.\")} startIcon={<Icon icon={Icons.ReplyOutline} />}>\n    Submit\n  </Button>\n];\n\n <ContentHeader\n  title= {\"Content Header Text\"}\n  buttons={buttons}>\n    Content Description\n </ContentHeader>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _ContentHeader_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.ContentHeader
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

/***/ "./stories/ContentHeader/ContentHeader.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CollapsedContentHeaderWithError: () => (/* binding */ CollapsedContentHeaderWithError),
  ContentHeader: () => (/* binding */ ContentHeader_stories_ContentHeader),
  ContentHeaderWithCollapseHeader: () => (/* binding */ ContentHeaderWithCollapseHeader),
  ContentHeaderWithError: () => (/* binding */ ContentHeaderWithError),
  ContentHeaderWithTags: () => (/* binding */ ContentHeaderWithTags),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ContentHeader_stories)
});

// EXTERNAL MODULE: ./src/components/Layout/ContentHeader/ContentHeader.tsx + 1 modules
var ContentHeader = __webpack_require__("./src/components/Layout/ContentHeader/ContentHeader.tsx");
// EXTERNAL MODULE: ./stories/ContentHeader/ContentHeader.mdx
var ContentHeader_ContentHeader = __webpack_require__("./stories/ContentHeader/ContentHeader.mdx");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Tag/Tag.tsx + 1 modules
var Tag = __webpack_require__("./src/components/Tag/Tag.tsx");
;// CONCATENATED MODULE: ./src/hooks/useFullHeightCollapse.ts
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


const useFullHeightCollapse = isCollapsed => {
  const [collapsed, setCollapsed] = (0,react.useState)(isCollapsed ?? false);
  const handleScroll = e => {
    const target = e.target;
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = target;
    const position = Math.ceil(scrollTop / (scrollHeight - clientHeight) * 100);
    setCollapsed(position !== 0);
  };
  return {
    collapsed,
    handleScroll
  };
};
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx + 1 modules
var FormSection = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx + 1 modules
var FormStepper = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx + 1 modules
var FormWithStepper = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx");
// EXTERNAL MODULE: ./stories/Form/Examples/FormControlExample.tsx
var FormControlExample = __webpack_require__("./stories/Form/Examples/FormControlExample.tsx");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./node_modules/@storybook/test/dist/index.mjs
var dist = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__("./node_modules/react-router/dist/index.js");
;// CONCATENATED MODULE: ./stories/ContentHeader/ContentHeader.stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}










const contentButtonList = [/*#__PURE__*/react.createElement(Button/* Button */.$, {
  key: "1",
  onClick: () => alert("Cancel button clicked."),
  variant: "text"
}, "Cancel"), /*#__PURE__*/react.createElement(Button/* Button */.$, {
  key: "2",
  disabled: true,
  startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.SaveOutline
  })
}, "Save Draft"), /*#__PURE__*/react.createElement(Button/* Button */.$, {
  key: "3",
  onClick: () => alert("Submit button clicked."),
  startIcon: /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ReplyOutline
  })
}, "Submit")];
const meta = {
  title: "Components/Layout/ContentHeader",
  component: ContentHeader/* ContentHeader */.d,
  decorators: [Story => /*#__PURE__*/react.createElement(react_router_dom_dist/* BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(Story, null))],
  parameters: {
    docs: {
      page: ContentHeader_ContentHeader["default"]
    }
  },
  args: {
    title: "Content Header Text",
    children: "Content Description",
    buttons: contentButtonList,
    collapsed: false
  },
  argTypes: {
    children: {
      control: false
    }
  }
};
/* harmony default export */ const ContentHeader_stories = (meta);
const Template = args => {
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  return /*#__PURE__*/react.createElement(ContentHeader/* ContentHeader */.d, _extends({
    navigation: {
      navigateFN: navigate
    }
  }, args));
};
const ContentHeader_stories_ContentHeader = Template.bind({});
ContentHeader_stories_ContentHeader.args = {
  navigation: undefined
};
const ContentHeaderWithTags = Template.bind({});
ContentHeaderWithTags.args = {
  children: /*#__PURE__*/react.createElement(react.Fragment, null, "Content ", /*#__PURE__*/react.createElement("i", null, "Description")),
  buttons: contentButtonList.slice(0, 2),
  tags: [/*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    variant: "enabled"
  }, "Active"), /*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    variant: "disabled"
  }, "Default")]
};
const ContentHeaderWithError = Template.bind({});
ContentHeaderWithError.args = {
  children: /*#__PURE__*/react.createElement(react.Fragment, null, "Content ", /*#__PURE__*/react.createElement("i", null, "Description")),
  buttons: contentButtonList.slice(0, 2),
  tags: [/*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    variant: "enabled"
  }, "Active"), /*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    variant: "disabled"
  }, "Default")],
  error: true,
  errorMessage: "Error message"
};
const CollapsedContentHeaderWithError = Template.bind({});
CollapsedContentHeaderWithError.args = {
  children: /*#__PURE__*/react.createElement(react.Fragment, null, "Content ", /*#__PURE__*/react.createElement("i", null, "Description")),
  buttons: contentButtonList.slice(0, 2),
  tags: [/*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    variant: "enabled"
  }, "Active"), /*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    variant: "disabled"
  }, "Default")],
  error: true,
  errorMessage: "Error message",
  collapsed: true
};
const initialStepperState = [{
  status: "current",
  label: "Step 1",
  targetScrollViewId: "samlBaseInfo"
}, {
  status: "waiting",
  label: "Step 2",
  targetScrollViewId: "samlConnectionDetail"
}, {
  status: "done",
  label: "Step 3",
  targetScrollViewId: "samlFederationRequest"
}, {
  status: "error",
  label: "Step 4",
  targetScrollViewId: "samlAttributeMapping"
}];
const formStepperProps = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};
const FormWithStepperTemplate = args => {
  const [steps, setSteps] = (0,react.useState)(initialStepperState);
  const updateStepStatus = (index, status) => {
    setSteps(prevState => {
      const props = prevState.concat();
      props[index].status = status;
      return props;
    });
  };
  const formStepperState = {
    ...formStepperProps,
    steps: steps
  };
  const formStepperComponent = /*#__PURE__*/react.createElement(FormStepper/* FormStepper */.I, formStepperState);
  const {
    collapsed,
    handleScroll
  } = useFullHeightCollapse(false);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ContentHeader_stories_ContentHeader, {
    title: "Form Header",
    collapsed: collapsed
  }, /*#__PURE__*/react.createElement("p", null, "Form Header Description")), /*#__PURE__*/react.createElement(FormWithStepper/* FormWithStepper */.g, {
    stepper: formStepperComponent,
    onScroll: handleScroll
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlBaseInfo",
    header: "Step 1 Form Section",
    subtext: "Form Section sub-header."
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 0,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlConnectionDetail",
    header: "Step 2 Form Section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 1,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlFederationRequest",
    header: "Step 3 Form section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 2,
    updateStepStatus: updateStepStatus
  })), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlAttributeMapping",
    header: "Step 4 Form section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, {
    index: 3,
    updateStepStatus: updateStepStatus
  })))));
};
const ContentHeaderWithCollapseHeader = FormWithStepperTemplate.bind({});
ContentHeaderWithCollapseHeader.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,dist/* within */.ux)(canvasElement);
  await (0,dist/* waitFor */.fm)(() => (0,dist/* expect */.E3)(canvas.getByText("Step 4")).toBeInTheDocument());
  const select = await canvas.getByText("Step 4");
  await dist/* userEvent */.Q4.click(select);
});
ContentHeader_stories_ContentHeader.parameters = {
  ...ContentHeader_stories_ContentHeader.parameters,
  docs: {
    ...ContentHeader_stories_ContentHeader.parameters?.docs,
    source: {
      originalSource: "args => {\n  const navigate = useNavigate();\n  return <ContentHeaderComponent navigation={{\n    navigateFN: navigate\n  }} {...args} />;\n}",
      ...ContentHeader_stories_ContentHeader.parameters?.docs?.source
    }
  }
};
ContentHeaderWithTags.parameters = {
  ...ContentHeaderWithTags.parameters,
  docs: {
    ...ContentHeaderWithTags.parameters?.docs,
    source: {
      originalSource: "args => {\n  const navigate = useNavigate();\n  return <ContentHeaderComponent navigation={{\n    navigateFN: navigate\n  }} {...args} />;\n}",
      ...ContentHeaderWithTags.parameters?.docs?.source
    }
  }
};
ContentHeaderWithError.parameters = {
  ...ContentHeaderWithError.parameters,
  docs: {
    ...ContentHeaderWithError.parameters?.docs,
    source: {
      originalSource: "args => {\n  const navigate = useNavigate();\n  return <ContentHeaderComponent navigation={{\n    navigateFN: navigate\n  }} {...args} />;\n}",
      ...ContentHeaderWithError.parameters?.docs?.source
    }
  }
};
CollapsedContentHeaderWithError.parameters = {
  ...CollapsedContentHeaderWithError.parameters,
  docs: {
    ...CollapsedContentHeaderWithError.parameters?.docs,
    source: {
      originalSource: "args => {\n  const navigate = useNavigate();\n  return <ContentHeaderComponent navigation={{\n    navigateFN: navigate\n  }} {...args} />;\n}",
      ...CollapsedContentHeaderWithError.parameters?.docs?.source
    }
  }
};
ContentHeaderWithCollapseHeader.parameters = {
  ...ContentHeaderWithCollapseHeader.parameters,
  docs: {
    ...ContentHeaderWithCollapseHeader.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [steps, setSteps] = useState(initialStepperState);\n  const updateStepStatus = (index: number, status: StepStatus) => {\n    setSteps(prevState => {\n      const props = prevState.concat();\n      props[index].status = status;\n      return props;\n    });\n  };\n  const formStepperState = {\n    ...formStepperProps,\n    steps: steps\n  };\n  const formStepperComponent = <FormStepper {...formStepperState}></FormStepper>;\n  const {\n    collapsed,\n    handleScroll\n  } = useFullHeightCollapse(false);\n  return <>\n      <ContentHeader title=\"Form Header\" collapsed={collapsed}>\n        <p>Form Header Description</p>\n      </ContentHeader>\n      <FormWithStepper stepper={formStepperComponent} onScroll={handleScroll}>\n        <div>\n          <FormSection id=\"samlBaseInfo\" header=\"Step 1 Form Section\" subtext=\"Form Section sub-header.\">\n            <FormControlExample index={0} updateStepStatus={updateStepStatus}></FormControlExample>\n          </FormSection>\n          <FormSection id=\"samlConnectionDetail\" header=\"Step 2 Form Section\" subtext=\"Form Section Subheader\">\n            <FormControlExample index={1} updateStepStatus={updateStepStatus}></FormControlExample>\n          </FormSection>\n          <FormSection id=\"samlFederationRequest\" header=\"Step 3 Form section\" subtext=\"Form Section Subheader\">\n            <FormControlExample index={2} updateStepStatus={updateStepStatus}></FormControlExample>\n          </FormSection>\n          <FormSection id=\"samlAttributeMapping\" header=\"Step 4 Form section\" subtext=\"Form Section Subheader\">\n            <FormControlExample index={3} updateStepStatus={updateStepStatus}></FormControlExample>\n          </FormSection>\n        </div>\n      </FormWithStepper>\n    </>;\n}",
      ...ContentHeaderWithCollapseHeader.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ContentHeader","ContentHeaderWithTags","ContentHeaderWithError","CollapsedContentHeaderWithError","ContentHeaderWithCollapseHeader"];

/***/ }),

/***/ "./node_modules/@storybook/test/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/test/dist sync recursive";
module.exports = webpackEmptyContext;

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

/***/ "./src/components/Layout/ContentHeader/ContentHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ ContentHeader)
});

// UNUSED EXPORTS: ContentHeaderComponent

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss
var ContentHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/Layout/ContentHeader/ContentHeader.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContentHeader_module/* default */.A, options);




       /* harmony default export */ const ContentHeader_ContentHeader_module = (ContentHeader_module/* default */.A && ContentHeader_module/* default */.A.locals ? ContentHeader_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Tag/Tag.tsx + 1 modules
var Tag = __webpack_require__("./src/components/Tag/Tag.tsx");
// EXTERNAL MODULE: ./src/components/TextEllipsis/TextEllipsis.tsx + 1 modules
var TextEllipsis = __webpack_require__("./src/components/TextEllipsis/TextEllipsis.tsx");
;// CONCATENATED MODULE: ./src/components/Layout/ContentHeader/ContentHeader.tsx
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








const ContentHeaderComponent = _ref => {
  let {
    title,
    children,
    buttons,
    collapsed,
    subtitle,
    navigation,
    tags,
    error,
    errorMessage,
    errorTagText,
    ...rest
  } = _ref;
  const errorTag = /*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    icon: Icon/* Icons */.F.Forbidden,
    backgroundColor: "var(--color-red50)",
    color: "var(--color-red900)"
  }, errorTagText || "Blocked");
  const getTags = () => tags ?? [];
  const renderTags = (0,react.useMemo)(() => {
    if (error && collapsed) {
      return [errorTag, ...getTags().filter(tag => tag.props.variant !== "enabled")];
    } else if (error) {
      return getTags().filter(tag => tag.props.variant !== "enabled");
    }
    return getTags();
  }, [tags, error, collapsed]);
  return /*#__PURE__*/react.createElement("div", {
    className: ContentHeader_ContentHeader_module["header-background-color"]
  }, /*#__PURE__*/react.createElement("div", _extends({
    className: `${ContentHeader_ContentHeader_module["header"]} ${rest.className} ${collapsed ? ContentHeader_ContentHeader_module["collapsed-header"] : ""}`
  }, rest), /*#__PURE__*/react.createElement("div", null, navigation && !collapsed && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    onClick: () => {
      navigation.navigateFN(-1);
    },
    className: ContentHeader_ContentHeader_module["back-arrow"],
    iconSize: "s"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ArrowLeft
  }), /*#__PURE__*/react.createElement("span", {
    className: ContentHeader_ContentHeader_module["back-text"]
  }, navigation.displayText ? navigation.displayText : "Back")), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: ContentHeader_ContentHeader_module["header-text"],
    variant: "h1"
  }, navigation && collapsed && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    onClick: () => {
      navigation.navigateFN(-1);
    },
    className: ContentHeader_ContentHeader_module["back-arrow"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ArrowLeft
  })), /*#__PURE__*/react.createElement(TextEllipsis/* TextEllipsis */.T, {
    "data-testid": "content-header-title"
  }, title), /*#__PURE__*/react.createElement("span", {
    className: ContentHeader_ContentHeader_module["header-tags"]
  }, renderTags.map((tag, index) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: tag.key || index
  }, tag)))), subtitle && !error && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: `${ContentHeader_ContentHeader_module["header-subtitle"]} ${collapsed ? ContentHeader_ContentHeader_module["hide-text"] : ""}`,
    variant: "h4"
  }, subtitle), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: `${collapsed ? ContentHeader_ContentHeader_module["hide-text"] : ""}`,
    variant: "body",
    spacing: {
      margin: 0
    }
  }, error ? /*#__PURE__*/react.createElement(react.Fragment, null, errorTag, /*#__PURE__*/react.createElement("span", {
    className: ContentHeader_ContentHeader_module["error-text"]
  }, errorMessage)) : children)), buttons && /*#__PURE__*/react.createElement("div", {
    className: ContentHeader_ContentHeader_module["buttons-wrapper"]
  }, buttons)));
};
const ContentHeader = ContentHeaderComponent;
try {
    // @ts-ignore
    ContentHeaderComponent.displayName = "ContentHeaderComponent";
    // @ts-ignore
    ContentHeaderComponent.__docgenInfo = { "description": "", "displayName": "ContentHeaderComponent", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "subtitle": { "defaultValue": null, "description": "@deprecated pass text as children", "name": "subtitle", "required": false, "type": { "name": "string" } }, "buttons": { "defaultValue": null, "description": "", "name": "buttons", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLButtonElement>>> | ReactElement<...>[]" } }, "collapsed": { "defaultValue": null, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } }, "navigation": { "defaultValue": null, "description": "", "name": "navigation", "required": false, "type": { "name": "ContentHeaderNavigationProps" } }, "tags": { "defaultValue": null, "description": "", "name": "tags", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>>[]" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "errorTagText": { "defaultValue": null, "description": "", "name": "errorTagText", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeaderComponent"] = { docgenInfo: ContentHeaderComponent.__docgenInfo, name: "ContentHeaderComponent", path: "src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeaderComponent" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    ContentHeader.displayName = "ContentHeader";
    // @ts-ignore
    ContentHeader.__docgenInfo = { "description": "", "displayName": "ContentHeader", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "subtitle": { "defaultValue": null, "description": "@deprecated pass text as children", "name": "subtitle", "required": false, "type": { "name": "string" } }, "buttons": { "defaultValue": null, "description": "", "name": "buttons", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLButtonElement>>> | ReactElement<...>[]" } }, "collapsed": { "defaultValue": null, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } }, "navigation": { "defaultValue": null, "description": "", "name": "navigation", "required": false, "type": { "name": "ContentHeaderNavigationProps" } }, "tags": { "defaultValue": null, "description": "", "name": "tags", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>>[]" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "errorTagText": { "defaultValue": null, "description": "", "name": "errorTagText", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeader"] = { docgenInfo: ContentHeader.__docgenInfo, name: "ContentHeader", path: "src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/TextEllipsis/TextEllipsis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ TextEllipsis)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Popover/Popover.tsx + 1 modules
var Popover = __webpack_require__("./src/components/Popover/Popover.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEllipsis/TextEllipsis.module.scss
var TextEllipsis_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEllipsis/TextEllipsis.module.scss");
;// CONCATENATED MODULE: ./src/components/TextEllipsis/TextEllipsis.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextEllipsis_module/* default */.A, options);




       /* harmony default export */ const TextEllipsis_TextEllipsis_module = (TextEllipsis_module/* default */.A && TextEllipsis_module/* default */.A.locals ? TextEllipsis_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/TextEllipsis/TextEllipsis.tsx
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




const TextEllipsisComponent = (_ref, ref) => {
  let {
    children,
    popoverClassName,
    className,
    ...rest
  } = _ref;
  const [showPopover, setShowPopover] = (0,react.useState)(false);
  const textContainer = (0,react.useRef)(null);
  const ellipsisVisible = () => {
    if (textContainer.current && textContainer.current.offsetWidth < textContainer.current.scrollWidth) {
      return true;
    }
    return false;
  };
  const onMouseEnter = () => {
    ellipsisVisible() && setShowPopover(true);
  };
  const onMouseLeave = () => {
    ellipsisVisible() && setShowPopover(false);
  };
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: `${TextEllipsis_TextEllipsis_module["text-ellipsis"]} ${className ?? ""}`,
    ref: ref ?? textContainer
  }), children, /*#__PURE__*/react.createElement(Popover/* Popover */.A, {
    "aria-hidden": true,
    "data-hidden": !showPopover,
    show: showPopover,
    role: "tooltip",
    anchorEl: textContainer,
    className: `${TextEllipsis_TextEllipsis_module.popover} ${popoverClassName ?? ""}`
  }, children));
};
const TextEllipsis = /*#__PURE__*/react.forwardRef(TextEllipsisComponent);
try {
    // @ts-ignore
    TextEllipsis.displayName = "TextEllipsis";
    // @ts-ignore
    TextEllipsis.__docgenInfo = { "description": "", "displayName": "TextEllipsis", "props": { "popoverClassName": { "defaultValue": null, "description": "", "name": "popoverClassName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/TextEllipsis/TextEllipsis.tsx#TextEllipsis"] = { docgenInfo: TextEllipsis.__docgenInfo, name: "TextEllipsis", path: "src/components/TextEllipsis/TextEllipsis.tsx#TextEllipsis" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.ContentHeader-module__header--B9Tg6{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;padding:2rem;z-index:1;-webkit-transition:.5s;transition:.5s;max-width:105rem}.ContentHeader-module__header--B9Tg6.ContentHeader-module__collapsed-header--XE0m0{padding:1rem 2rem 1rem 2rem;-webkit-transition:.5s;transition:.5s;align-items:center}.ContentHeader-module__header-background-color--riBxL{background-color:var(--color-blue-grey25)}.ContentHeader-module__header--B9Tg6 button.ContentHeader-module__back-arrow--TkZAf{width:auto;height:1rem;display:block;gap:.5rem}.ContentHeader-module__hide-text--HLEeL{display:none}.ContentHeader-module__header-text--EcyxI{margin:0;font-weight:500;color:var(--color-blue-grey900);line-height:1.25;display:flex;align-items:center;max-width:65vw}@media screen and (max-width: 900px){.ContentHeader-module__header-text--EcyxI{max-width:unset}.ContentHeader-module__header-text--EcyxI div{text-wrap:wrap}}.ContentHeader-module__header-text--EcyxI div{vertical-align:middle;align-self:center}.ContentHeader-module__header-text--EcyxI button.ContentHeader-module__back-arrow--TkZAf{margin-right:.5rem;width:2.5rem;height:2.5rem}.ContentHeader-module__header-tags--cgSn0{display:flex;margin-left:1rem;gap:.5rem}.ContentHeader-module__header-subtitle--BORyD{color:var(--color-blue-grey400);font-weight:500}.ContentHeader-module__back-text--HvQDA{font-size:.875rem;font-weight:400;margin-left:.5rem}.ContentHeader-module__error-text--mwVSQ{color:var(--color-red500);vertical-align:middle;margin-left:.5rem}.ContentHeader-module__buttons-wrapper--rCTji{display:flex;justify-content:flex-end;flex-shrink:0;gap:1rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": `ContentHeader-module__header--B9Tg6`,
	"collapsed-header": `ContentHeader-module__collapsed-header--XE0m0`,
	"header-background-color": `ContentHeader-module__header-background-color--riBxL`,
	"back-arrow": `ContentHeader-module__back-arrow--TkZAf`,
	"hide-text": `ContentHeader-module__hide-text--HLEeL`,
	"header-text": `ContentHeader-module__header-text--EcyxI`,
	"header-tags": `ContentHeader-module__header-tags--cgSn0`,
	"header-subtitle": `ContentHeader-module__header-subtitle--BORyD`,
	"back-text": `ContentHeader-module__back-text--HvQDA`,
	"error-text": `ContentHeader-module__error-text--mwVSQ`,
	"buttons-wrapper": `ContentHeader-module__buttons-wrapper--rCTji`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEllipsis/TextEllipsis.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
 */.TextEllipsis-module__text-ellipsis--Iw4vN{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.TextEllipsis-module__popover--BKWTH{max-width:min(75ch,90%);padding:.6875rem .6875rem .6875rem .875rem;border-radius:.25rem;box-shadow:0 .1875rem .375rem rgba(0,0,0,.29);white-space:pre-wrap;transition-property:opacity;transform:scale(1);z-index:1}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"text-ellipsis": `TextEllipsis-module__text-ellipsis--Iw4vN`,
	"popover": `TextEllipsis-module__popover--BKWTH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);