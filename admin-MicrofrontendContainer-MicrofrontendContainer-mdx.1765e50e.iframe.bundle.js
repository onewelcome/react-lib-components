"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[3690],{

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

/***/ "./stories/admin/MicrofrontendContainer/MicrofrontendContainer.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _MicrofrontendContainer_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/admin/MicrofrontendContainer/MicrofrontendContainer.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _MicrofrontendContainer_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The Microfrontend Container component is designed to simplify the implementation of responsive layouts and spacing management\nwithin microfrontend architectures. It's a go-to solution suitable for basic scenarios, but remember to validate with the designs to ensure it meets your specific requirements.\nThis component offers developers a straightforward solution for ensuring that content remains visually appealing and well-structured across various screen sizes and devices."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "At its core, the Microfrontend Container utilizes standard CSS techniques to adjust its size and layout based on the dimensions of the viewport.\nThis ensures that content within the container adapts seamlessly to different screen sizes, providing a consistent user experience across desktops, tablets,\nand mobile devices. It comes with pre-applied margin properties."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In essence, the Microfrontend Container streamlines the process of creating responsive and well-structured user interfaces within Admin UI container.\nBy abstracting away the complexities of responsiveness and margin management, this component allows developers to focus on designing engaging\ncontent while ensuring a polished and cohesive user experience across all devices."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "example",
      children: "Example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _MicrofrontendContainer_stories__WEBPACK_IMPORTED_MODULE_4__.MicrofrontendContainerTable
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

/***/ "./stories/admin/MicrofrontendContainer/MicrofrontendContainer.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MicrofrontendContainerDefaultMaxWidth: () => (/* binding */ MicrofrontendContainerDefaultMaxWidth),
  MicrofrontendContainerFormWithStepper: () => (/* binding */ MicrofrontendContainerFormWithStepper),
  MicrofrontendContainerFullWidth: () => (/* binding */ MicrofrontendContainerFullWidth),
  MicrofrontendContainerTable: () => (/* binding */ MicrofrontendContainerTable),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ MicrofrontendContainer_stories)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss
var MicrofrontendContainer_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss");
;// CONCATENATED MODULE: ./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MicrofrontendContainer_module/* default */.A, options);




       /* harmony default export */ const MicrofrontendContainer_MicrofrontendContainer_module = (MicrofrontendContainer_module/* default */.A && MicrofrontendContainer_module/* default */.A.locals ? MicrofrontendContainer_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx
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



const MicrofrontendContainer = _ref => {
  let {
    header,
    children,
    contentMargins = true,
    contentMaxWidth = true,
    ...rest
  } = _ref;
  const appliedClasses = [];
  contentMargins && appliedClasses.push(MicrofrontendContainer_MicrofrontendContainer_module["microfrontend-container-margin"]);
  contentMaxWidth && appliedClasses.push(MicrofrontendContainer_MicrofrontendContainer_module["microfrontend-container-max-width"]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, header), /*#__PURE__*/react.createElement("div", _extends({
    className: appliedClasses.join(" ")
  }, rest), children));
};
try {
    // @ts-ignore
    MicrofrontendContainer.displayName = "MicrofrontendContainer";
    // @ts-ignore
    MicrofrontendContainer.__docgenInfo = { "description": "", "displayName": "MicrofrontendContainer", "props": { "header": { "defaultValue": null, "description": "", "name": "header", "required": false, "type": { "name": "ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]" } }, "contentMargins": { "defaultValue": { value: "true" }, "description": "", "name": "contentMargins", "required": false, "type": { "name": "boolean" } }, "contentMaxWidth": { "defaultValue": { value: "true" }, "description": "", "name": "contentMaxWidth", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx#MicrofrontendContainer"] = { docgenInfo: MicrofrontendContainer.__docgenInfo, name: "MicrofrontendContainer", path: "src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx#MicrofrontendContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx + 1 modules
var FormStepper = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper.tsx");
// EXTERNAL MODULE: ./src/components/Layout/ContentHeader/ContentHeader.tsx + 1 modules
var ContentHeader = __webpack_require__("./src/components/Layout/ContentHeader/ContentHeader.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx + 1 modules
var FormWithStepper = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormWithStepper.tsx");
// EXTERNAL MODULE: ./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx + 1 modules
var FormSection = __webpack_require__("./src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection.tsx");
// EXTERNAL MODULE: ./src/components/DataGrid/DataGrid.tsx + 21 modules
var DataGrid = __webpack_require__("./src/components/DataGrid/DataGrid.tsx");
// EXTERNAL MODULE: ./src/components/DataGrid/DataGridBody/DataGridRow/DataGridRow.tsx + 3 modules
var DataGridRow = __webpack_require__("./src/components/DataGrid/DataGridBody/DataGridRow/DataGridRow.tsx");
// EXTERNAL MODULE: ./src/components/DataGrid/DataGridBody/DataGridCell/DataGridCell.tsx + 1 modules
var DataGridCell = __webpack_require__("./src/components/DataGrid/DataGridBody/DataGridCell/DataGridCell.tsx");
// EXTERNAL MODULE: ./stories/Form/Examples/FormControlExample.tsx
var FormControlExample = __webpack_require__("./stories/Form/Examples/FormControlExample.tsx");
// EXTERNAL MODULE: ./stories/admin/MicrofrontendContainer/MicrofrontendContainer.mdx
var MicrofrontendContainer_MicrofrontendContainer = __webpack_require__("./stories/admin/MicrofrontendContainer/MicrofrontendContainer.mdx");
;// CONCATENATED MODULE: ./stories/admin/MicrofrontendContainer/MicrofrontendContainer.stories.tsx
function MicrofrontendContainer_stories_extends() {
  return MicrofrontendContainer_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, MicrofrontendContainer_stories_extends.apply(null, arguments);
}
/*
 * Copyright 2024 OneWelcome B.V.
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
  title: "admin/Layout/MicrofrontendContainer",
  component: MicrofrontendContainer,
  argTypes: {
    children: {
      control: false
    },
    contentMargins: {
      description: "Specifies if the content (children) element should have the default margins added.\n"
    },
    contentMaxWidth: {
      description: "Specifies if the content (children) element should have the default max-width added.\n"
    }
  },
  parameters: {
    docs: {
      page: MicrofrontendContainer_MicrofrontendContainer["default"]
    }
  }
};
const initialStepperState = [{
  status: "done",
  label: "Step 1",
  targetScrollViewId: "samlBaseInfo"
}, {
  status: "error",
  label: "Step 2",
  targetScrollViewId: "samlConnectionDetail"
}];
const formButtonList = [/*#__PURE__*/react.createElement(Button/* Button */.$, {
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
const stepper = /*#__PURE__*/react.createElement(FormStepper/* FormStepper */.I, {
  steps: initialStepperState,
  direction: "vertical"
});
const boxShadow = {
  boxShadow: "0px 1px 5px 0px #01053214"
};
const centerText = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const createDummyContent = text => /*#__PURE__*/react.createElement("div", {
  style: {
    backgroundColor: "#F7F7F9",
    width: "100%",
    ...boxShadow,
    ...centerText
  }
}, text);
const Template = args => {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    style: {
      height: "4rem",
      ...boxShadow,
      ...centerText
    }
  }, "HEADER"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      ...boxShadow,
      ...centerText,
      width: "8vw",
      zIndex: 1,
      minHeight: "40vw"
    }
  }, "NAV"), /*#__PURE__*/react.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react.createElement(MicrofrontendContainer, MicrofrontendContainer_stories_extends({
    header: /*#__PURE__*/react.createElement(ContentHeader/* ContentHeader */.d, {
      buttons: formButtonList,
      title: "Example title",
      subtitle: "This is a subtitle, you can put a short message here"
    }, "If you need more place to write some explanation to your user, this is the place you can do it. Have fun!")
  }, args), args.children))));
};
const MicrofrontendContainerFormWithStepper = Template.bind({});
MicrofrontendContainerFormWithStepper.args = {
  children: /*#__PURE__*/react.createElement(FormWithStepper/* FormWithStepper */.g, {
    stepper: stepper
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlBaseInfo",
    header: "Step 1 Form Section",
    subtext: "Form Section sub-header."
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, null)), /*#__PURE__*/react.createElement(FormSection/* FormSection */.y, {
    id: "samlConnectionDetail",
    header: "Step 2 Form Section",
    subtext: "Form Section Subheader"
  }, /*#__PURE__*/react.createElement(FormControlExample/* FormControlExample */.S, null))))
};
const MicrofrontendContainerTable = Template.bind({});
MicrofrontendContainerTable.args = {
  children: /*#__PURE__*/react.createElement(DataGrid/* DataGrid */.z, {
    headers: [{
      name: "name",
      headline: "Name"
    }, {
      name: "created",
      headline: "Created"
    }, {
      name: "id",
      headline: "Identifier"
    }],
    data: [{
      name: "Company 1",
      created: new Date(2023, 0, 1),
      id: "1"
    }, {
      name: "Company 2",
      created: new Date(2023, 0, 2),
      id: "2"
    }]
  }, _ref => {
    let {
      item
    } = _ref;
    return /*#__PURE__*/react.createElement(DataGridRow/* DataGridRow */.r, {
      key: item.id
    }, /*#__PURE__*/react.createElement(DataGridCell/* DataGridCell */.N, null, item.name), /*#__PURE__*/react.createElement(DataGridCell/* DataGridCell */.N, null, item.created.toLocaleDateString()), /*#__PURE__*/react.createElement(DataGridCell/* DataGridCell */.N, null, item.id));
  })
};
const MicrofrontendContainerDefaultMaxWidth = Template.bind({});
MicrofrontendContainerDefaultMaxWidth.parameters = {
  chromatic: {
    viewports: [1440, 2560]
  }
};
MicrofrontendContainerDefaultMaxWidth.args = {
  children: createDummyContent("DEFAULT MAX-WIDTH CONTENT")
};
const MicrofrontendContainerFullWidth = Template.bind({});
MicrofrontendContainerFullWidth.args = {
  contentMaxWidth: false,
  children: createDummyContent("FULL WIDTH CONTENT")
};
MicrofrontendContainerFullWidth.parameters = {
  chromatic: {
    viewports: [1440, 2560]
  }
};
/* harmony default export */ const MicrofrontendContainer_stories = (meta);
MicrofrontendContainerFormWithStepper.parameters = {
  ...MicrofrontendContainerFormWithStepper.parameters,
  docs: {
    ...MicrofrontendContainerFormWithStepper.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <Fragment>\n      <div style={{\n      height: \"4rem\",\n      ...boxShadow,\n      ...centerText\n    }}>HEADER</div>\n      <div style={{\n      display: \"flex\"\n    }}>\n        <div style={{\n        ...boxShadow,\n        ...centerText,\n        width: \"8vw\",\n        zIndex: 1,\n        minHeight: \"40vw\"\n      }}>\n          NAV\n        </div>\n        <div style={{\n        flexGrow: 1\n      }}>\n          <MicrofrontendContainerComponent header={<ContentHeader buttons={formButtonList} title={\"Example title\"} subtitle={\"This is a subtitle, you can put a short message here\"}>\n                If you need more place to write some explanation to your user, this is the place you\n                can do it. Have fun!\n              </ContentHeader>} {...args}>\n            {args.children}\n          </MicrofrontendContainerComponent>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...MicrofrontendContainerFormWithStepper.parameters?.docs?.source
    }
  }
};
MicrofrontendContainerTable.parameters = {
  ...MicrofrontendContainerTable.parameters,
  docs: {
    ...MicrofrontendContainerTable.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <Fragment>\n      <div style={{\n      height: \"4rem\",\n      ...boxShadow,\n      ...centerText\n    }}>HEADER</div>\n      <div style={{\n      display: \"flex\"\n    }}>\n        <div style={{\n        ...boxShadow,\n        ...centerText,\n        width: \"8vw\",\n        zIndex: 1,\n        minHeight: \"40vw\"\n      }}>\n          NAV\n        </div>\n        <div style={{\n        flexGrow: 1\n      }}>\n          <MicrofrontendContainerComponent header={<ContentHeader buttons={formButtonList} title={\"Example title\"} subtitle={\"This is a subtitle, you can put a short message here\"}>\n                If you need more place to write some explanation to your user, this is the place you\n                can do it. Have fun!\n              </ContentHeader>} {...args}>\n            {args.children}\n          </MicrofrontendContainerComponent>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...MicrofrontendContainerTable.parameters?.docs?.source
    }
  }
};
MicrofrontendContainerDefaultMaxWidth.parameters = {
  ...MicrofrontendContainerDefaultMaxWidth.parameters,
  docs: {
    ...MicrofrontendContainerDefaultMaxWidth.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <Fragment>\n      <div style={{\n      height: \"4rem\",\n      ...boxShadow,\n      ...centerText\n    }}>HEADER</div>\n      <div style={{\n      display: \"flex\"\n    }}>\n        <div style={{\n        ...boxShadow,\n        ...centerText,\n        width: \"8vw\",\n        zIndex: 1,\n        minHeight: \"40vw\"\n      }}>\n          NAV\n        </div>\n        <div style={{\n        flexGrow: 1\n      }}>\n          <MicrofrontendContainerComponent header={<ContentHeader buttons={formButtonList} title={\"Example title\"} subtitle={\"This is a subtitle, you can put a short message here\"}>\n                If you need more place to write some explanation to your user, this is the place you\n                can do it. Have fun!\n              </ContentHeader>} {...args}>\n            {args.children}\n          </MicrofrontendContainerComponent>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...MicrofrontendContainerDefaultMaxWidth.parameters?.docs?.source
    }
  }
};
MicrofrontendContainerFullWidth.parameters = {
  ...MicrofrontendContainerFullWidth.parameters,
  docs: {
    ...MicrofrontendContainerFullWidth.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <Fragment>\n      <div style={{\n      height: \"4rem\",\n      ...boxShadow,\n      ...centerText\n    }}>HEADER</div>\n      <div style={{\n      display: \"flex\"\n    }}>\n        <div style={{\n        ...boxShadow,\n        ...centerText,\n        width: \"8vw\",\n        zIndex: 1,\n        minHeight: \"40vw\"\n      }}>\n          NAV\n        </div>\n        <div style={{\n        flexGrow: 1\n      }}>\n          <MicrofrontendContainerComponent header={<ContentHeader buttons={formButtonList} title={\"Example title\"} subtitle={\"This is a subtitle, you can put a short message here\"}>\n                If you need more place to write some explanation to your user, this is the place you\n                can do it. Have fun!\n              </ContentHeader>} {...args}>\n            {args.children}\n          </MicrofrontendContainerComponent>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...MicrofrontendContainerFullWidth.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["MicrofrontendContainerFormWithStepper","MicrofrontendContainerTable","MicrofrontendContainerDefaultMaxWidth","MicrofrontendContainerFullWidth"];

/***/ }),

/***/ "./src/components/Layout/ContentHeader/ContentHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: ContentHeader_ContentHeader_module["header-background-color"]
  }, /*#__PURE__*/react.createElement("div", _extends({
    className: "".concat(ContentHeader_ContentHeader_module["header"], " ").concat(rest.className, " ").concat(collapsed ? ContentHeader_ContentHeader_module["collapsed-header"] : "")
  }, rest), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: ContentHeader_ContentHeader_module["header-text"],
    variant: "h1"
  }, title), subtitle && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: "".concat(ContentHeader_ContentHeader_module["header-subtitle"], " ").concat(collapsed ? ContentHeader_ContentHeader_module["hide-text"] : ""),
    variant: "h4"
  }, subtitle), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: "".concat(collapsed ? ContentHeader_ContentHeader_module["hide-text"] : ""),
    variant: "body",
    spacing: {
      margin: 0
    }
  }, children)), buttons && /*#__PURE__*/react.createElement("div", {
    className: ContentHeader_ContentHeader_module["buttons-wrapper"]
  }, buttons)));
};
const ContentHeader = ContentHeaderComponent;
try {
    // @ts-ignore
    ContentHeaderComponent.displayName = "ContentHeaderComponent";
    // @ts-ignore
    ContentHeaderComponent.__docgenInfo = { "description": "", "displayName": "ContentHeaderComponent", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "subtitle": { "defaultValue": null, "description": "", "name": "subtitle", "required": false, "type": { "name": "string" } }, "buttons": { "defaultValue": null, "description": "", "name": "buttons", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLButtonElement>>> | ReactElement<...>[]" } }, "collapsed": { "defaultValue": null, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } } } };
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
    ContentHeader.__docgenInfo = { "description": "", "displayName": "ContentHeader", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "subtitle": { "defaultValue": null, "description": "", "name": "subtitle", "required": false, "type": { "name": "string" } }, "buttons": { "defaultValue": null, "description": "", "name": "buttons", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLButtonElement>>> | ReactElement<...>[]" } }, "collapsed": { "defaultValue": null, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeader"] = { docgenInfo: ContentHeader.__docgenInfo, name: "ContentHeader", path: "src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useGetDomRoot)
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


const useGetDomRoot = (passedDomRoot, relativeElement) => {
  const [root, setRoot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.body);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (relativeElement !== null && relativeElement !== void 0 && relativeElement.current && !passedDomRoot) {
      const closestBaseStylingWrapper = relativeElement.current.closest(".basestyling-wrapper");
      if (closestBaseStylingWrapper) {
        setRoot(closestBaseStylingWrapper);
        return;
      }
    } else if (passedDomRoot) {
      setRoot(passedDomRoot);
      return;
    }
  }, [relativeElement]);
  return {
    root
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss":
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
___CSS_LOADER_EXPORT___.push([module.id, `.ContentHeader-module__header--B9Tg6{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;padding:2rem;z-index:1;-webkit-transition:.5s;transition:.5s;max-width:105rem}.ContentHeader-module__header--B9Tg6.ContentHeader-module__collapsed-header--XE0m0{padding:1rem 2rem 1rem 2rem;-webkit-transition:.5s;transition:.5s}.ContentHeader-module__header-background-color--riBxL{background-color:var(--color-blue-grey25)}.ContentHeader-module__hide-text--HLEeL{display:none}.ContentHeader-module__header-text--EcyxI{margin:0;font-weight:500;color:var(--color-blue-grey900);line-height:3.125rem}.ContentHeader-module__header-subtitle--BORyD{color:var(--color-blue-grey400);font-weight:500}.ContentHeader-module__buttons-wrapper--rCTji{display:flex;justify-content:flex-end;flex-shrink:0;gap:1rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": `ContentHeader-module__header--B9Tg6`,
	"collapsed-header": `ContentHeader-module__collapsed-header--XE0m0`,
	"header-background-color": `ContentHeader-module__header-background-color--riBxL`,
	"hide-text": `ContentHeader-module__hide-text--HLEeL`,
	"header-text": `ContentHeader-module__header-text--EcyxI`,
	"header-subtitle": `ContentHeader-module__header-subtitle--BORyD`,
	"buttons-wrapper": `ContentHeader-module__buttons-wrapper--rCTji`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss":
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
 */.MicrofrontendContainer-module__microfrontend-container-margin--AVcro{padding:2rem}.MicrofrontendContainer-module__microfrontend-container-max-width--qJEq8{max-width:105rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"microfrontend-container-margin": `MicrofrontendContainer-module__microfrontend-container-margin--AVcro`,
	"microfrontend-container-max-width": `MicrofrontendContainer-module__microfrontend-container-max-width--qJEq8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);