(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5541],{

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
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Step.module.scss
var Step_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Step.module.scss");
;// CONCATENATED MODULE: ./src/components/Stepper/Step.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Step_module/* default */.Z, options);




       /* harmony default export */ const Stepper_Step_module = (Step_module/* default */.Z && Step_module/* default */.Z.locals ? Step_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Stepper/Step.tsx
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




const gapBetweenStepsInRem = 0.5;
const getStepContent = (index, status) => {
  switch (status) {
    case "waiting":
      return String(index + 1);
    case "current":
      return String(index + 1);
    case "done":
      return /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.Checkmark
      });
    case "error":
      return "!";
  }
};
const getStepMaxWidth = (isHorizontal, lastStep, index) => {
  if (isHorizontal && lastStep) {
    const percentage = 100 / (index + 1);
    const gapSize = index * gapBetweenStepsInRem;
    return "calc(".concat(percentage, "% - ").concat(gapSize, "rem)");
  }
};
const StepComponent = (_ref, ref) => {
  let {
    label,
    caption,
    status,
    index,
    direction,
    disabled,
    lastStep,
    onClick,
    textPosition,
    ...rest
  } = _ref;
  const stepIndex = index !== null && index !== void 0 ? index : 0;
  const additionalClasses = [Stepper_Step_module[status]];
  const additionalStyles = {};
  const isHorizontal = direction === "horizontal";
  const isTextBottom = textPosition === "bottom";
  const hasCaption = !!caption;
  additionalClasses.push(isHorizontal ? Stepper_Step_module["horizontal"] : Stepper_Step_module["vertical"]);
  disabled && additionalClasses.push(Stepper_Step_module["disabled"]);
  isTextBottom && additionalClasses.push(Stepper_Step_module["text-bottom"]);
  lastStep && additionalClasses.push(Stepper_Step_module["last-step"]);
  hasCaption && additionalClasses.push(Stepper_Step_module["has-caption"]);
  additionalStyles["maxWidth"] = getStepMaxWidth(isHorizontal, !!lastStep, index);
  return /*#__PURE__*/react.createElement("div", _extends({
    style: additionalStyles,
    className: "".concat(Stepper_Step_module["step-wrapper"], " ").concat(additionalClasses.join(" "))
  }, rest), /*#__PURE__*/react.createElement("div", {
    "aria-hidden": true,
    className: Stepper_Step_module["step"],
    onClick: onClick
  }, getStepContent(stepIndex, status)), /*#__PURE__*/react.createElement("button", {
    "aria-current": status === "current" ? "step" : undefined,
    className: Stepper_Step_module["label"],
    disabled: disabled,
    onClick: onClick
  }, /*#__PURE__*/react.createElement("span", {
    className: Stepper_Step_module["label-inner-wrapper"]
  }, label, " ", !lastStep && isHorizontal && !isTextBottom && /*#__PURE__*/react.createElement("div", {
    className: "".concat(Stepper_Step_module["stepper-line"], " ").concat(Stepper_Step_module["stepper-line-extender"])
  })), /*#__PURE__*/react.createElement("span", {
    className: Stepper_Step_module["caption"]
  }, caption)), !lastStep && /*#__PURE__*/react.createElement("div", {
    className: Stepper_Step_module["stepper-line"]
  }));
};
const Step = /*#__PURE__*/react.forwardRef(StepComponent);
try {
    // @ts-ignore
    StepComponent.displayName = "StepComponent";
    // @ts-ignore
    StepComponent.__docgenInfo = { "description": "", "displayName": "StepComponent", "props": { "status": { "defaultValue": null, "description": "", "name": "status", "required": true, "type": { "name": "enum", "value": [{ "value": "\"current\"" }, { "value": "\"error\"" }, { "value": "\"done\"" }, { "value": "\"waiting\"" }] } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "caption": { "defaultValue": null, "description": "", "name": "caption", "required": false, "type": { "name": "string" } }, "index": { "defaultValue": null, "description": "", "name": "index", "required": false, "type": { "name": "number" } }, "lastStep": { "defaultValue": null, "description": "", "name": "lastStep", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "direction": { "defaultValue": null, "description": "", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }] } }, "textPosition": { "defaultValue": null, "description": "", "name": "textPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"right\"" }, { "value": "\"bottom\"" }] } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "((event: MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void)" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Stepper/Step.tsx#StepComponent"] = { docgenInfo: StepComponent.__docgenInfo, name: "StepComponent", path: "src/components/Stepper/Step.tsx#StepComponent" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Step.displayName = "Step";
    // @ts-ignore
    Step.__docgenInfo = { "description": "", "displayName": "Step", "props": { "caption": { "defaultValue": null, "description": "", "name": "caption", "required": false, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "((event: MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void)" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": true, "type": { "name": "enum", "value": [{ "value": "\"current\"" }, { "value": "\"error\"" }, { "value": "\"done\"" }, { "value": "\"waiting\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "direction": { "defaultValue": null, "description": "", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }] } }, "textPosition": { "defaultValue": null, "description": "", "name": "textPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"right\"" }, { "value": "\"bottom\"" }] } }, "index": { "defaultValue": null, "description": "", "name": "index", "required": false, "type": { "name": "number" } }, "lastStep": { "defaultValue": null, "description": "", "name": "lastStep", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Stepper/Step.tsx#Step"] = { docgenInfo: Step.__docgenInfo, name: "Step", path: "src/components/Stepper/Step.tsx#Step" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Stepper.module.scss
var Stepper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Stepper.module.scss");
;// CONCATENATED MODULE: ./src/components/Stepper/Stepper.module.scss

      
      
      
      
      
      
      
      
      

var Stepper_module_options = {};

Stepper_module_options.styleTagTransform = (styleTagTransform_default());
Stepper_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Stepper_module_options.insert = insertBySelector_default().bind(null, "head");
    
Stepper_module_options.domAPI = (styleDomAPI_default());
Stepper_module_options.insertStyleElement = (insertStyleElement_default());

var Stepper_module_update = injectStylesIntoStyleTag_default()(Stepper_module/* default */.Z, Stepper_module_options);




       /* harmony default export */ const Stepper_Stepper_module = (Stepper_module/* default */.Z && Stepper_module/* default */.Z.locals ? Stepper_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Stepper/Stepper.tsx
function Stepper_extends() {
  Stepper_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Stepper_extends.apply(this, arguments);
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




const Stepper = _ref => {
  let {
    steps,
    direction = "horizontal",
    textPosition,
    className,
    ...rest
  } = _ref;
  const additionalClasses = [];
  direction === "horizontal" && additionalClasses.push(Stepper_Stepper_module["horizontal"]);
  textPosition === "bottom" && additionalClasses.push(Stepper_Stepper_module["text-bottom"]);
  className && additionalClasses.push(className);
  return /*#__PURE__*/react.createElement("div", Stepper_extends({}, rest, {
    className: "".concat(Stepper_Stepper_module["stepper"], " ").concat(additionalClasses.join(" "))
  }), steps.map((step, index) => /*#__PURE__*/react.createElement(Step, Stepper_extends({}, step, {
    key: step.label.toLowerCase().replace(/\s/, "-"),
    index: index,
    direction: direction,
    lastStep: index + 1 === steps.length,
    textPosition: textPosition
  }))));
};
try {
    // @ts-ignore
    Stepper.displayName = "Stepper";
    // @ts-ignore
    Stepper.__docgenInfo = { "description": "", "displayName": "Stepper", "props": { "steps": { "defaultValue": null, "description": "", "name": "steps", "required": true, "type": { "name": "Props[]" } }, "direction": { "defaultValue": { value: "horizontal" }, "description": "", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }] } }, "textPosition": { "defaultValue": null, "description": "", "name": "textPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"right\"" }, { "value": "\"bottom\"" }] } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Stepper/Stepper.tsx#Stepper"] = { docgenInfo: Stepper.__docgenInfo, name: "Stepper", path: "src/components/Stepper/Stepper.tsx#Stepper" };
}
catch (__react_docgen_typescript_loader_error) { }
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
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(blocks_dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.oG, {
        of: BaseStepper
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* ArgTypes */.Ed, {
      story: blocks_dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Stepper_Stepper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Stepper/Stepper.stories.tsx
function Stepper_stories_extends() {
  Stepper_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Stepper_stories_extends.apply(this, arguments);
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
  component: Stepper,
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
}, /*#__PURE__*/react.createElement(Stepper, props));
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
  }, /*#__PURE__*/react.createElement(Stepper, waitingStateProps), /*#__PURE__*/react.createElement(Stepper, currentStateProps), /*#__PURE__*/react.createElement(Stepper, doneStateProps), /*#__PURE__*/react.createElement(Stepper, errorStateProps)), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper, removeCaptionFromProps(waitingStateProps)), /*#__PURE__*/react.createElement(Stepper, removeCaptionFromProps(currentStateProps)), /*#__PURE__*/react.createElement(Stepper, removeCaptionFromProps(doneStateProps)), /*#__PURE__*/react.createElement(Stepper, removeCaptionFromProps(errorStateProps))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, waitingStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, currentStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, doneStateProps, {
    direction: "horizontal"
  })), /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, errorStateProps, {
    direction: "horizontal"
  }))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, waitingStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, currentStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, doneStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  })), /*#__PURE__*/react.createElement(Stepper, Stepper_stories_extends({}, errorStateProps, {
    direction: "horizontal",
    textPosition: "bottom"
  }))));
}];
StepperStates.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,dist/* within */.uh)(canvasElement);
  await (0,dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.getAllByText("Step current 1")).toHaveLength(4));
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
  B: () => (/* binding */ conditionalPlay)
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Step.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
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
 *//*!
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
 */.Step-module__sr-only--IchoG{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Step-module__hidden--Qm9BD{display:none}.Step-module__slide-in--LLY4r{animation:Step-module__slide-in--LLY4r .5s forwards}@media(prefers-reduced-motion: reduce){.Step-module__slide-in--LLY4r{animation-duration:.1ms}}.Step-module__slide-out--uVRH8{animation:Step-module__slide-out--uVRH8 .5s forwards}@media(prefers-reduced-motion: reduce){.Step-module__slide-out--uVRH8{animation-duration:.1ms}}@keyframes Step-module__slide-in--LLY4r{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Step-module__slide-out--uVRH8{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Step-module__step-wrapper--hwJFW{pointer-events:none;display:grid;gap:.5rem;grid-template-columns:1.875rem 1fr;grid-template-rows:auto 1fr;background-color:rgba(0,0,0,0);border:0;padding:0;margin:0}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG{grid-template-columns:1.875rem auto 1fr;grid-template-rows:auto 1fr;align-items:start;width:100%}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-color);min-height:auto;height:2px;width:100%;min-width:1rem;border-radius:2px;margin-top:.8125rem}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__label--jfUnJ{margin-top:.25rem}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD{grid-template-columns:5rem 1fr;gap:0}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__step--ctubR{justify-self:center}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__label--jfUnJ{justify-self:center;text-align:center;grid-column-start:1;grid-column-end:1;grid-row-start:2;grid-row-end:2}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__stepper-line--nZVbI{margin-right:-1.125rem;margin-left:-1.125rem;width:calc(100% + 2.25rem)}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__label-inner-wrapper--DA68m{display:inline}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD.Step-module__last-step--x40Rl{justify-content:center;grid-template-columns:5rem;grid-template-rows:auto 1fr;flex:1 0 5rem;display:grid}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD.Step-module__last-step--x40Rl .Step-module__label--jfUnJ{width:auto}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__last-step--x40Rl{display:flex;width:max-content}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__last-step--x40Rl .Step-module__label--jfUnJ{width:max-content}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__label-inner-wrapper--DA68m{display:flex}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__stepper-line-extender--jy0Bl{display:block;flex:1;margin-left:.4375rem;margin-right:-1rem;margin-top:.5625rem}.Step-module__step-wrapper--hwJFW .Step-module__stepper-line--nZVbI{pointer-events:none;justify-self:center;background-color:var(--stepper-line-color);min-height:.375rem;height:100%;width:2px;border-radius:2px}.Step-module__step-wrapper--hwJFW.Step-module__vertical--a_r4r.Step-module__has-caption--cFyAV .Step-module__stepper-line--nZVbI{min-height:1.375rem}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv .Step-module__step--ctubR{color:var(--stepper-default-text-color);color:var(--stepper-waiting-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv:hover .Step-module__step--ctubR{border:2px solid var(--stepper-waiting-hover-color);color:var(--stepper-waiting-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv:active .Step-module__step--ctubR{border:2px solid var(--stepper-waiting-active-color);color:var(--stepper-waiting-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border:2px solid var(--stepper-waiting-disabled-color);color:var(--stepper-waiting-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN .Step-module__step--ctubR{color:var(--stepper-default-text-color);background-color:var(--stepper-current-color);border-color:var(--stepper-current-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN:hover .Step-module__step--ctubR{border-color:var(--stepper-current-hover-color);background-color:var(--stepper-current-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN:active .Step-module__step--ctubR{border-color:var(--stepper-current-active-color);background-color:var(--stepper-current-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border-color:var(--stepper-current-disabled-color);background-color:var(--stepper-current-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN .Step-module__label--jfUnJ{font-weight:700}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN .Step-module__label--jfUnJ .Step-module__caption--UzV1j{font-weight:400}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8 .Step-module__step--ctubR{color:var(--stepper-default-text-color);background-color:var(--stepper-done-color);border-color:var(--stepper-done-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8 .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-bold-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8:hover .Step-module__step--ctubR{border-color:var(--stepper-done-hover-color);background-color:var(--stepper-done-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8:active .Step-module__step--ctubR{border-color:var(--stepper-done-active-color);background-color:var(--stepper-done-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border-color:var(--stepper-done-disabled-color);background-color:var(--stepper-done-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-bold-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir .Step-module__step--ctubR{color:var(--stepper-default-text-color);background-color:var(--stepper-error-color);border-color:var(--stepper-error-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir:hover .Step-module__step--ctubR{border-color:var(--stepper-error-hover-color);background-color:var(--stepper-error-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir:active .Step-module__step--ctubR{border-color:var(--stepper-error-active-color);background-color:var(--stepper-error-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border-color:var(--stepper-error-disabled-color);background-color:var(--stepper-error-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-error-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-error-color)}.Step-module__step--ctubR{pointer-events:visible;cursor:pointer;flex-shrink:0;box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:1.75rem;height:1.75rem;border:2px solid var(--stepper-waiting-color);border-radius:50%;font-size:var(--font-size-form-label);font-family:var(--font-family);font-weight:700}.Step-module__label--jfUnJ{pointer-events:visible;cursor:pointer;grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:span 2;align-self:start;margin:.25rem 0 0;padding:0;background-color:initial;border:none;text-align:left;color:var(--stepper-label-color);font-family:var(--font-family);font-size:var(--font-size-form-label);line-height:1.25rem}.Step-module__label--jfUnJ:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:"1px";border-radius:var(--focus-border-radius)}.Step-module__caption--UzV1j{display:block;color:var(--stepper-caption-color);font-family:var(--font-family);font-size:.75rem;line-height:1rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Step-module__sr-only--IchoG`,
	"hidden": `Step-module__hidden--Qm9BD`,
	"slide-in": `Step-module__slide-in--LLY4r`,
	"slide-out": `Step-module__slide-out--uVRH8`,
	"step-wrapper": `Step-module__step-wrapper--hwJFW`,
	"horizontal": `Step-module__horizontal--GvLsG`,
	"stepper-line": `Step-module__stepper-line--nZVbI`,
	"label": `Step-module__label--jfUnJ`,
	"text-bottom": `Step-module__text-bottom--rpbsD`,
	"step": `Step-module__step--ctubR`,
	"label-inner-wrapper": `Step-module__label-inner-wrapper--DA68m`,
	"last-step": `Step-module__last-step--x40Rl`,
	"stepper-line-extender": `Step-module__stepper-line-extender--jy0Bl`,
	"vertical": `Step-module__vertical--a_r4r`,
	"has-caption": `Step-module__has-caption--cFyAV`,
	"waiting": `Step-module__waiting--tLzpv`,
	"disabled": `Step-module__disabled--bAAPK`,
	"caption": `Step-module__caption--UzV1j`,
	"current": `Step-module__current--iYhdN`,
	"done": `Step-module__done--dkNh8`,
	"error": `Step-module__error--Lywir`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Stepper.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Stepper-module__stepper--cvKk9{display:flex;gap:.5rem;justify-content:flex-start;width:auto;flex-direction:column}.Stepper-module__stepper--cvKk9.Stepper-module__horizontal--vOpcI{justify-content:center;flex-direction:row;width:100%}.Stepper-module__stepper--cvKk9.Stepper-module__horizontal--vOpcI.Stepper-module__text-bottom--cAVpT{gap:0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"stepper": `Stepper-module__stepper--cvKk9`,
	"horizontal": `Stepper-module__horizontal--vOpcI`,
	"text-bottom": `Stepper-module__text-bottom--cAVpT`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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