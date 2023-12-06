(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5541],{

/***/ "./.storybook/conditionalPlay.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: function() { return /* binding */ conditionalPlay; }
});

// UNUSED EXPORTS: __namedExportsOrder

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


var conditionalPlay = function conditionalPlay(playFunction) {
  var isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};
var __namedExportsOrder = (/* unused pure expression or super */ null && (["conditionalPlay"]));

/***/ }),

/***/ "./stories/Stepper/Stepper.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaseStepper: function() { return /* binding */ BaseStepper; },
  StepperStates: function() { return /* binding */ StepperStates; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Stepper_stories; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Step.module.scss
var Step_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Step.module.scss");
;// CONCATENATED MODULE: ./src/components/Stepper/Step.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Step_module/* default */.Z, options);




       /* harmony default export */ var Stepper_Step_module = (Step_module/* default */.Z && Step_module/* default */.Z.locals ? Step_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Stepper/Step.tsx
var _excluded = ["label", "caption", "status", "index", "direction", "disabled", "lastStep", "onClick", "textPosition"];
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





var getStepContent = function getStepContent(index, status) {
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
var getStepMaxWidth = function getStepMaxWidth(isHorizontal, lastStep, index) {
  if (isHorizontal && lastStep) {
    var percentage = 100 / (index + 1);
    var gapSize = index * gapBetweenStepsInRem;
    return "calc(".concat(percentage, "% - ").concat(gapSize, "rem)");
  }
};
var StepComponent = function StepComponent(_ref, ref) {
  var label = _ref.label,
    caption = _ref.caption,
    status = _ref.status,
    index = _ref.index,
    direction = _ref.direction,
    disabled = _ref.disabled,
    lastStep = _ref.lastStep,
    onClick = _ref.onClick,
    textPosition = _ref.textPosition,
    rest = _objectWithoutProperties(_ref, _excluded);
  var stepIndex = index !== null && index !== void 0 ? index : 0;
  var additionalClasses = [Stepper_Step_module[status]];
  var additionalStyles = {};
  var isHorizontal = direction === "horizontal";
  var isTextBottom = textPosition === "bottom";
  var hasCaption = !!caption;
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
var Step = /*#__PURE__*/react.forwardRef(StepComponent);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Stepper.module.scss
var Stepper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Stepper.module.scss");
;// CONCATENATED MODULE: ./src/components/Stepper/Stepper.module.scss

      
      
      
      
      
      
      
      
      

var Stepper_module_options = {};

Stepper_module_options.styleTagTransform = (styleTagTransform_default());
Stepper_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Stepper_module_options.insert = insertBySelector_default().bind(null, "head");
    
Stepper_module_options.domAPI = (styleDomAPI_default());
Stepper_module_options.insertStyleElement = (insertStyleElement_default());

var Stepper_module_update = injectStylesIntoStyleTag_default()(Stepper_module/* default */.Z, Stepper_module_options);




       /* harmony default export */ var Stepper_Stepper_module = (Stepper_module/* default */.Z && Stepper_module/* default */.Z.locals ? Stepper_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Stepper/Stepper.tsx
var Stepper_excluded = ["steps", "direction", "textPosition", "className"];
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
function Stepper_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Stepper_objectWithoutPropertiesLoose(source, excluded);
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
function Stepper_objectWithoutPropertiesLoose(source, excluded) {
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




var gapBetweenStepsInRem = 0.5;
var Stepper = function Stepper(_ref) {
  var steps = _ref.steps,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    textPosition = _ref.textPosition,
    className = _ref.className,
    rest = Stepper_objectWithoutProperties(_ref, Stepper_excluded);
  var additionalClasses = [];
  direction === "horizontal" && additionalClasses.push(Stepper_Stepper_module["horizontal"]);
  textPosition === "bottom" && additionalClasses.push(Stepper_Stepper_module["text-bottom"]);
  className && additionalClasses.push(className);
  return /*#__PURE__*/react.createElement("div", Stepper_extends({}, rest, {
    className: "".concat(Stepper_Stepper_module["stepper"], " ").concat(additionalClasses.join(" "))
  }), steps.map(function (step, index) {
    return /*#__PURE__*/react.createElement(Step, Stepper_extends({}, step, {
      key: step.label.toLowerCase().replace(/\s/, "-"),
      index: index,
      direction: direction,
      lastStep: index + 1 === steps.length,
      textPosition: textPosition
    }));
  }));
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
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 4 modules
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
/* harmony default export */ var Stepper_Stepper = (MDXContent);

;// CONCATENATED MODULE: ./stories/Stepper/Stepper.stories.tsx
var _BaseStepper$paramete, _BaseStepper$paramete2, _StepperStates$parame, _StepperStates$parame2;
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
/* harmony default export */ var Stepper_stories = (meta);
var Template = function Template(props) {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react.createElement(Stepper, props));
};
var BaseStepper = Template.bind({});
var StepperStates = Template.bind({});
var removeCaptionFromProps = function removeCaptionFromProps(props) {
  return _objectSpread(_objectSpread({}, props), {}, {
    steps: props.steps.map(function (step) {
      return _objectSpread(_objectSpread({}, step), {}, {
        caption: undefined
      });
    })
  });
};
var waitingStateProps = {
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
var currentStateProps = {
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
var doneStateProps = {
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
var errorStateProps = {
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
StepperStates.decorators = [function () {
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
StepperStates.play = (0,conditionalPlay/* conditionalPlay */.B)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var canvasElement, canvas;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          canvas = (0,dist/* within */.uh)(canvasElement);
          _context.next = 4;
          return (0,dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getAllByText("Step current 1")).toHaveLength(4);
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
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
BaseStepper.parameters = _objectSpread(_objectSpread({}, BaseStepper.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_BaseStepper$paramete = BaseStepper.parameters) === null || _BaseStepper$paramete === void 0 ? void 0 : _BaseStepper$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "props => <div style={{\n  display: \"flex\",\n  justifyContent: \"center\"\n}}>\n    <Stepper {...props} />\n  </div>"
    }, (_BaseStepper$paramete2 = BaseStepper.parameters) === null || _BaseStepper$paramete2 === void 0 || (_BaseStepper$paramete2 = _BaseStepper$paramete2.docs) === null || _BaseStepper$paramete2 === void 0 ? void 0 : _BaseStepper$paramete2.source)
  })
});
StepperStates.parameters = _objectSpread(_objectSpread({}, StepperStates.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_StepperStates$parame = StepperStates.parameters) === null || _StepperStates$parame === void 0 ? void 0 : _StepperStates$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "props => <div style={{\n  display: \"flex\",\n  justifyContent: \"center\"\n}}>\n    <Stepper {...props} />\n  </div>"
    }, (_StepperStates$parame2 = StepperStates.parameters) === null || _StepperStates$parame2 === void 0 || (_StepperStates$parame2 = _StepperStates$parame2.docs) === null || _StepperStates$parame2 === void 0 ? void 0 : _StepperStates$parame2.source)
  })
});
var __namedExportsOrder = ["BaseStepper", "StepperStates"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Step.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Step-module__sr-only--IchoG{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Step-module__hidden--Qm9BD{display:none}.Step-module__slide-in--LLY4r{animation:Step-module__slide-in--LLY4r .5s forwards}@media(prefers-reduced-motion: reduce){.Step-module__slide-in--LLY4r{animation-duration:.1ms}}.Step-module__slide-out--uVRH8{animation:Step-module__slide-out--uVRH8 .5s forwards}@media(prefers-reduced-motion: reduce){.Step-module__slide-out--uVRH8{animation-duration:.1ms}}@keyframes Step-module__slide-in--LLY4r{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Step-module__slide-out--uVRH8{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Step-module__step-wrapper--hwJFW{pointer-events:none;display:grid;gap:.5rem;grid-template-columns:1.875rem 1fr;grid-template-rows:auto 1fr;background-color:rgba(0,0,0,0);border:0;padding:0;margin:0}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG{grid-template-columns:1.875rem auto 1fr;grid-template-rows:auto 1fr;align-items:start;width:100%}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-color);min-height:auto;height:2px;width:100%;min-width:1rem;border-radius:2px;margin-top:.8125rem}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__label--jfUnJ{margin-top:.25rem}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD{grid-template-columns:5rem 1fr;gap:0}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__step--ctubR{justify-self:center}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__label--jfUnJ{justify-self:center;text-align:center;grid-column-start:1;grid-column-end:1;grid-row-start:2;grid-row-end:2}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__stepper-line--nZVbI{margin-right:-1.125rem;margin-left:-1.125rem;width:calc(100% + 2.25rem)}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD .Step-module__label-inner-wrapper--DA68m{display:inline}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD.Step-module__last-step--x40Rl{justify-content:center;grid-template-columns:5rem;grid-template-rows:auto 1fr;flex:1 0 5rem;display:grid}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__text-bottom--rpbsD.Step-module__last-step--x40Rl .Step-module__label--jfUnJ{width:auto}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__last-step--x40Rl{display:flex;width:max-content}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG.Step-module__last-step--x40Rl .Step-module__label--jfUnJ{width:max-content}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__label-inner-wrapper--DA68m{display:flex}.Step-module__step-wrapper--hwJFW.Step-module__horizontal--GvLsG .Step-module__stepper-line-extender--jy0Bl{display:block;flex:1;margin-left:.4375rem;margin-right:-1rem;margin-top:.5625rem}.Step-module__step-wrapper--hwJFW .Step-module__stepper-line--nZVbI{pointer-events:none;justify-self:center;background-color:var(--stepper-line-color);min-height:.375rem;height:100%;width:2px;border-radius:2px}.Step-module__step-wrapper--hwJFW.Step-module__vertical--a_r4r.Step-module__has-caption--cFyAV .Step-module__stepper-line--nZVbI{min-height:1.375rem}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv .Step-module__step--ctubR{color:var(--stepper-default-text-color);color:var(--stepper-waiting-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv:hover .Step-module__step--ctubR{border:2px solid var(--stepper-waiting-hover-color);color:var(--stepper-waiting-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv:active .Step-module__step--ctubR{border:2px solid var(--stepper-waiting-active-color);color:var(--stepper-waiting-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border:2px solid var(--stepper-waiting-disabled-color);color:var(--stepper-waiting-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__waiting--tLzpv.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN .Step-module__step--ctubR{color:var(--stepper-default-text-color);background-color:var(--stepper-current-color);border-color:var(--stepper-current-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN:hover .Step-module__step--ctubR{border-color:var(--stepper-current-hover-color);background-color:var(--stepper-current-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN:active .Step-module__step--ctubR{border-color:var(--stepper-current-active-color);background-color:var(--stepper-current-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border-color:var(--stepper-current-disabled-color);background-color:var(--stepper-current-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN .Step-module__label--jfUnJ{font-weight:700}.Step-module__step-wrapper--hwJFW.Step-module__current--iYhdN .Step-module__label--jfUnJ .Step-module__caption--UzV1j{font-weight:400}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8 .Step-module__step--ctubR{color:var(--stepper-default-text-color);background-color:var(--stepper-done-color);border-color:var(--stepper-done-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8 .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-bold-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8:hover .Step-module__step--ctubR{border-color:var(--stepper-done-hover-color);background-color:var(--stepper-done-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8:active .Step-module__step--ctubR{border-color:var(--stepper-done-active-color);background-color:var(--stepper-done-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border-color:var(--stepper-done-disabled-color);background-color:var(--stepper-done-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__done--dkNh8.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-bold-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir .Step-module__step--ctubR{color:var(--stepper-default-text-color);background-color:var(--stepper-error-color);border-color:var(--stepper-error-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir:hover .Step-module__step--ctubR{border-color:var(--stepper-error-hover-color);background-color:var(--stepper-error-hover-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir:active .Step-module__step--ctubR{border-color:var(--stepper-error-active-color);background-color:var(--stepper-error-active-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK{cursor:not-allowed}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__step--ctubR{cursor:not-allowed;border-color:var(--stepper-error-disabled-color);background-color:var(--stepper-error-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__label--jfUnJ{cursor:not-allowed;color:var(--stepper-label-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-error-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir.Step-module__disabled--bAAPK .Step-module__stepper-line--nZVbI{background-color:var(--stepper-line-disabled-color)}.Step-module__step-wrapper--hwJFW.Step-module__error--Lywir .Step-module__label--jfUnJ .Step-module__caption--UzV1j{color:var(--stepper-caption-error-color)}.Step-module__step--ctubR{pointer-events:visible;cursor:pointer;flex-shrink:0;box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:1.75rem;height:1.75rem;border:2px solid var(--stepper-waiting-color);border-radius:50%;font-size:var(--font-size-form-label);font-family:var(--font-family);font-weight:700}.Step-module__label--jfUnJ{pointer-events:visible;cursor:pointer;grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:span 2;align-self:start;margin:.25rem 0 0;padding:0;background-color:initial;border:none;text-align:left;color:var(--stepper-label-color);font-family:var(--font-family);font-size:var(--font-size-form-label);line-height:1.25rem}.Step-module__label--jfUnJ:focus-visible{outline:.125rem solid var(--color-focus);outline-offset:\"1px\";border-radius:var(--focus-border-radius)}.Step-module__caption--UzV1j{display:block;color:var(--stepper-caption-color);font-family:var(--font-family);font-size:.75rem;line-height:1rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Step-module__sr-only--IchoG",
	"hidden": "Step-module__hidden--Qm9BD",
	"slide-in": "Step-module__slide-in--LLY4r",
	"slide-out": "Step-module__slide-out--uVRH8",
	"step-wrapper": "Step-module__step-wrapper--hwJFW",
	"horizontal": "Step-module__horizontal--GvLsG",
	"stepper-line": "Step-module__stepper-line--nZVbI",
	"label": "Step-module__label--jfUnJ",
	"text-bottom": "Step-module__text-bottom--rpbsD",
	"step": "Step-module__step--ctubR",
	"label-inner-wrapper": "Step-module__label-inner-wrapper--DA68m",
	"last-step": "Step-module__last-step--x40Rl",
	"stepper-line-extender": "Step-module__stepper-line-extender--jy0Bl",
	"vertical": "Step-module__vertical--a_r4r",
	"has-caption": "Step-module__has-caption--cFyAV",
	"waiting": "Step-module__waiting--tLzpv",
	"disabled": "Step-module__disabled--bAAPK",
	"caption": "Step-module__caption--UzV1j",
	"current": "Step-module__current--iYhdN",
	"done": "Step-module__done--dkNh8",
	"error": "Step-module__error--Lywir"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Stepper/Stepper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Stepper-module__stepper--cvKk9{display:flex;gap:.5rem;justify-content:flex-start;width:auto;flex-direction:column}.Stepper-module__stepper--cvKk9.Stepper-module__horizontal--vOpcI{justify-content:center;flex-direction:row;width:100%}.Stepper-module__stepper--cvKk9.Stepper-module__horizontal--vOpcI.Stepper-module__text-bottom--cAVpT{gap:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"stepper": "Stepper-module__stepper--cvKk9",
	"horizontal": "Stepper-module__horizontal--vOpcI",
	"text-bottom": "Stepper-module__text-bottom--cAVpT"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {

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
/***/ (function() {

/* (ignored) */

/***/ })

}]);