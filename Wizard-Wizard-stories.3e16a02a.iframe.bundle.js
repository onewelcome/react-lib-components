"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2006],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./stories/Wizard/Wizard.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BasicWizard: () => (/* binding */ BasicWizard),
  WizardInModal: () => (/* binding */ WizardInModal),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Wizard_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/components/Wizard/wizardStateReducer.ts
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

const setWizardState = (steps, mode) => {
  return {
    type: "SET_STATE",
    payload: {
      steps,
      mode
    }
  };
};
const changeCurrentStepNo = currentStepNo => {
  return {
    type: "CHANGE_CURRENT_STEP_NO",
    payload: currentStepNo
  };
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        ...action.payload
      };
    case "CHANGE_CURRENT_STEP_NO":
      return {
        ...state,
        currentStepNo: action.payload
      };
    default:
      return state;
  }
};

;// CONCATENATED MODULE: ./src/components/Wizard/WizardStateProvider.tsx
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



const WizardStateContext = /*#__PURE__*/(0,react.createContext)({
  state: {},
  dispatch: () => null
});
/**
 * @deprecated
 */
const WizardStateProvider = _ref => {
  let {
    children,
    initialState
  } = _ref;
  const [state, dispatch] = (0,react.useReducer)(reducer, initialState);
  return /*#__PURE__*/react.createElement(WizardStateContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

try {
    // @ts-ignore
    WizardStateProvider.displayName = "WizardStateProvider";
    // @ts-ignore
    WizardStateProvider.__docgenInfo = { "description": "", "displayName": "WizardStateProvider", "props": { "initialState": { "defaultValue": null, "description": "", "name": "initialState", "required": true, "type": { "name": "WizardStateType" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/WizardStateProvider.tsx#WizardStateProvider"] = { docgenInfo: WizardStateProvider.__docgenInfo, name: "WizardStateProvider", path: "src/components/Wizard/WizardStateProvider.tsx#WizardStateProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Context.displayName = "Context";
    // @ts-ignore
    Context.__docgenInfo = { "description": "Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}", "displayName": "Context", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/WizardStateProvider.tsx#Context"] = { docgenInfo: Context.__docgenInfo, name: "Context", path: "src/components/Wizard/WizardStateProvider.tsx#Context" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Wizard/Wizard.tsx
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




const useSetWizardState = (steps, mode) => {
  const {
    dispatch
  } = (0,react.useContext)(WizardStateContext);
  (0,react.useEffect)(() => {
    dispatch(setWizardState(steps, mode));
  }, [steps, mode]);
};
const useStepChanging = onStepChange => {
  const {
    state: {
      currentStepNo
    }
  } = (0,react.useContext)(WizardStateContext);
  (0,react.useEffect)(() => {
    onStepChange(currentStepNo);
  }, [currentStepNo]);
};

/**
 * @deprecated
 */
const WizardContent = _ref => {
  let {
    steps,
    mode,
    onStepChange,
    children
  } = _ref;
  useSetWizardState(steps, mode);
  useStepChanging(onStepChange);
  return /*#__PURE__*/react.createElement(react.Fragment, null, children);
};
const Wizard = props => {
  const {
    steps,
    initialStepNo: currentStepNo = 0,
    mode
  } = props;
  return /*#__PURE__*/react.createElement(WizardStateProvider, {
    initialState: {
      steps,
      currentStepNo,
      mode
    }
  }, /*#__PURE__*/react.createElement(WizardContent, props));
};
try {
    // @ts-ignore
    Wizard.displayName = "Wizard";
    // @ts-ignore
    Wizard.__docgenInfo = { "description": "", "displayName": "Wizard", "props": { "steps": { "defaultValue": null, "description": "", "name": "steps", "required": true, "type": { "name": "Step[]" } }, "mode": { "defaultValue": null, "description": "", "name": "mode", "required": true, "type": { "name": "enum", "value": [{ "value": "\"add\"" }, { "value": "\"edit\"" }] } }, "initialStepNo": { "defaultValue": null, "description": "", "name": "initialStepNo", "required": false, "type": { "name": "number" } }, "onStepChange": { "defaultValue": null, "description": "", "name": "onStepChange", "required": true, "type": { "name": "(stepNo: number) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/Wizard.tsx#Wizard"] = { docgenInfo: Wizard.__docgenInfo, name: "Wizard", path: "src/components/Wizard/Wizard.tsx#Wizard" };
}
catch (__react_docgen_typescript_loader_error) { }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss
var BaseWizardSteps_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss");
;// CONCATENATED MODULE: ./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseWizardSteps_module/* default */.A, options);




       /* harmony default export */ const BaseWizardSteps_BaseWizardSteps_module = (BaseWizardSteps_module/* default */.A && BaseWizardSteps_module/* default */.A.locals ? BaseWizardSteps_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx
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




const BaseWizardStepsComponent = (_ref, ref) => {
  let {
    steps,
    currentStepNo,
    onClick,
    futureStepsClickable = false,
    ...rest
  } = _ref;
  const getStepState = stepNo => {
    if (currentStepNo === stepNo) {
      return "current";
    } else if (stepNo < currentStepNo) {
      return "finished";
    }
    return "future";
  };
  const getStepContent = (stepState, index, disabled) => {
    const stepNumberString = String(index + 1);
    if (stepState === "finished") {
      return disabled ? null : /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        className: BaseWizardSteps_BaseWizardSteps_module["checkmark"],
        icon: Icon/* Icons */.F.Checkmark
      });
    } else {
      return /*#__PURE__*/react.createElement(react.Fragment, null, stepNumberString);
    }
  };
  const generatedSteps = steps.map((step, index) => {
    const stepState = getStepState(index);
    const disabledStyleClassName = step.disabled ? BaseWizardSteps_BaseWizardSteps_module["disabled"] : "";
    const clickableClassName = futureStepsClickable ? BaseWizardSteps_BaseWizardSteps_module["clickable"] : "";
    return /*#__PURE__*/react.createElement("button", {
      key: step.label.toLowerCase().replace(/\s/, "-"),
      disabled: step.disabled || stepState === "future" && !futureStepsClickable || stepState === "current",
      "aria-current": stepState === "current" ? "step" : undefined,
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick(index),
      className: "".concat(BaseWizardSteps_BaseWizardSteps_module["wizard-element"], " ").concat(BaseWizardSteps_BaseWizardSteps_module[stepState], " ").concat(clickableClassName, " ").concat(disabledStyleClassName)
    }, /*#__PURE__*/react.createElement("div", {
      className: BaseWizardSteps_BaseWizardSteps_module["number-wrapper"]
    }, /*#__PURE__*/react.createElement("span", {
      className: BaseWizardSteps_BaseWizardSteps_module["number"]
    }, getStepContent(stepState, index, step.disabled))), /*#__PURE__*/react.createElement("div", {
      className: BaseWizardSteps_BaseWizardSteps_module["two-line-text-overflow"]
    }, /*#__PURE__*/react.createElement("span", {
      className: BaseWizardSteps_BaseWizardSteps_module["label"]
    }, step.label)));
  });
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: BaseWizardSteps_BaseWizardSteps_module["wizard"]
  }), generatedSteps);
};
const BaseWizardSteps = /*#__PURE__*/react.forwardRef(BaseWizardStepsComponent);
try {
    // @ts-ignore
    BaseWizardSteps.displayName = "BaseWizardSteps";
    // @ts-ignore
    BaseWizardSteps.__docgenInfo = { "description": "", "displayName": "BaseWizardSteps", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "((stepNo: number) => void)" } }, "steps": { "defaultValue": null, "description": "", "name": "steps", "required": true, "type": { "name": "Step[]" } }, "currentStepNo": { "defaultValue": null, "description": "", "name": "currentStepNo", "required": true, "type": { "name": "number" } }, "futureStepsClickable": { "defaultValue": { value: "false" }, "description": "", "name": "futureStepsClickable", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx#BaseWizardSteps"] = { docgenInfo: BaseWizardSteps.__docgenInfo, name: "BaseWizardSteps", path: "src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx#BaseWizardSteps" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Wizard/WizardSteps/WizardSteps.tsx
function WizardSteps_extends() {
  WizardSteps_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return WizardSteps_extends.apply(this, arguments);
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





const WizardStepsComponent = (_ref, ref) => {
  let {
    onStepClick,
    ...rest
  } = _ref;
  const {
    state: {
      currentStepNo,
      mode,
      steps
    },
    dispatch
  } = (0,react.useContext)(WizardStateContext);
  const onClick = selectedStepNo => {
    onStepClick(currentStepNo, selectedStepNo) && dispatch(changeCurrentStepNo(selectedStepNo));
  };
  return /*#__PURE__*/react.createElement(BaseWizardSteps, WizardSteps_extends({}, rest, {
    ref: ref,
    onClick: onClick,
    steps: steps,
    currentStepNo: currentStepNo,
    futureStepsClickable: mode === "edit"
  }));
};

/**
 * @deprecated
 */
const WizardSteps = /*#__PURE__*/react.forwardRef(WizardStepsComponent);
try {
    // @ts-ignore
    WizardSteps.displayName = "WizardSteps";
    // @ts-ignore
    WizardSteps.__docgenInfo = { "description": "", "displayName": "WizardSteps", "props": { "onStepClick": { "defaultValue": null, "description": "", "name": "onStepClick", "required": true, "type": { "name": "(currentStepNo: number, selectedStepNo: number) => boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/WizardSteps/WizardSteps.tsx#WizardSteps"] = { docgenInfo: WizardSteps.__docgenInfo, name: "WizardSteps", path: "src/components/Wizard/WizardSteps/WizardSteps.tsx#WizardSteps" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/Wizard/WizardActions/WizardActions.tsx
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





const calculateNextStepNo = (steps, currentStepNo) => () => steps.findIndex((step, stepNo) => stepNo > currentStepNo && !step.disabled);
const calculatePrevStepNo = (steps, currentStepNo) => () => {
  const reversedCurrentStepNo = steps.length - 1 - currentStepNo;
  const reversedPrevStepNo = [...steps].reverse().findIndex((step, stepNo) => stepNo > reversedCurrentStepNo && !step.disabled);
  if (reversedPrevStepNo > 0) {
    return steps.length - 1 - reversedPrevStepNo;
  }
  return -1;
};
const useNextStepNo = (mode, currentStepNo, steps) => (0,react.useMemo)(calculateNextStepNo(steps, currentStepNo), [mode, currentStepNo, steps]);
const usePreviousStepNo = (mode, currentStepNo, steps) => (0,react.useMemo)(calculatePrevStepNo(steps, currentStepNo), [mode, currentStepNo, steps]);

/**
 * @deprecated
 */
const WizardActions = _ref => {
  let {
    actions
  } = _ref;
  const {
    state: {
      mode,
      steps,
      currentStepNo
    },
    dispatch
  } = (0,react.useContext)(WizardStateContext);
  const nextStepNo = useNextStepNo(mode, currentStepNo, steps);
  const hasNextStep = nextStepNo !== -1;
  const previousStepNo = usePreviousStepNo(mode, currentStepNo, steps);
  const hasPreviousStep = previousStepNo !== -1;
  const isLastStepOrEditMode = !hasNextStep || mode === "edit";
  const changeStepNo = direction => {
    if (direction === "forward") {
      hasNextStep && dispatch(changeCurrentStepNo(nextStepNo));
    } else {
      hasPreviousStep && dispatch(changeCurrentStepNo(previousStepNo));
    }
  };
  const onNextWrapper = () => {
    actions.next.onClick(currentStepNo) && changeStepNo("forward");
  };
  const onPreviousWrapper = () => {
    var _actions$previous$onC, _actions$previous;
    (_actions$previous$onC = (_actions$previous = actions.previous).onClick) === null || _actions$previous$onC === void 0 || _actions$previous$onC.call(_actions$previous);
    changeStepNo("backward");
  };
  const onSaveAndCloseWrapper = () => {
    actions.saveAndClose.onClick(currentStepNo);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, hasPreviousStep && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: "outline",
    onClick: onPreviousWrapper
  }, actions.previous.label), hasNextStep && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: mode === "edit" ? "outline" : "fill",
    onClick: onNextWrapper
  }, actions.next.label), isLastStepOrEditMode && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    onClick: onSaveAndCloseWrapper
  }, actions.saveAndClose.label));
};
try {
    // @ts-ignore
    WizardActions.displayName = "WizardActions";
    // @ts-ignore
    WizardActions.__docgenInfo = { "description": "", "displayName": "WizardActions", "props": { "actions": { "defaultValue": null, "description": "", "name": "actions", "required": true, "type": { "name": "{ previous: { label: string; onClick: () => void; previousButtonProps?: Props | undefined; }; next: { label: string; onClick: (currentStepNo: number) => boolean; nextButtonProps?: Props | undefined; }; saveAndClose: { ...; }; }" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/WizardActions/WizardActions.tsx#WizardActions"] = { docgenInfo: WizardActions.__docgenInfo, name: "WizardActions", path: "src/components/Wizard/WizardActions/WizardActions.tsx#WizardActions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Wizard/Wizard.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    strong: "strong",
    a: "a",
    code: "code",
    h2: "h2",
    pre: "pre",
    h3: "h3",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)("div", {
      style: {
        color: "red",
        fontSize: "2em",
        padding: "1em",
        border: "2px solid red",
        borderRadius: "5px",
        backgroundColor: "pink"
      },
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["THIS COMPONENT HAS BEEN DEPRECATED IN FAVOR OF THE ", (0,jsx_runtime.jsx)(_components.a, {
            href: "?path=/docs/components-layout-stepper--docs",
            children: "STEPPER COMPONENT"
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Wizard"
      }), " component is used to give the user some indication of how far they are in a process. This could, for example, be a form with many different steps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To configure the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Wizard"
      }), " correctly, there are a few different components you will use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wizard-",
      children: "<Wizard />"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the main wrapping component you will use to configure your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Wizard"
      }), ". It has the following props:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "steps: Step[];\nmode: \"add\" | \"edit\";\ninitialStepNo?: number;\nonStepChange: (stepNo: number) => void;\nchildren: React.ReactNode;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "steps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As you can see, the steps and their labels will be configured through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "steps"
      }), " prop. This will be an array of the following object:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "{\n  label: string;\n  disabled?: boolean;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each step will have a label and can be set to a disabled state. The number on the step is generated automatically for you."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mode",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mode"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mode"
      }), " prop will control whether your users can jump ahead to steps by clicking on them. If your user has previously entered all sorts of\ninformation in all the forms in the different steps, you can set the mode to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edit"
      }), " and they can easily jump to a step instead of\nhaving to click the Next button many times."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On the other hand if you want your users to follow through the entire step process you've created you can set the mode to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add"
      }), ". This\nwill force them to use the next button, and you'll be able to validate the contents of the steps and guide them towards completion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initialstepno",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initialStepNo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you'd like your users to start on a different step than the first one, you can fill this prop with a number. Remember: the index starts at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), ". So step 1 in\nyour ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Wizard"
      }), " component will equal to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "initialStepNo"
      }), " of 0 and step 6 will equal to an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "initialStepNo"
      }), " of 5. You could use this if your user closes\nin the middle of your Wizard. You can save the step they're at and re-open at that same step whenever they open it again."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onstepchange",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onStepChange"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This function will allow you to listen to the event that the user goes to the next or previous step. This way, you can create your own\nstate variable that keeps track of which step the user is on, and set it to the correct step you get as the first, and only, parameter."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "children",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "children"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here is where you will render anything that you want to show depending on the step that is active. You can simply use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " sign to conditionally render a certain piece of JSX."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An example is ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#examples",
        children: "found below"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wizardsteps-",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<WizardSteps />"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can determine where exactly you want the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "steps"
      }), " you've passed to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Wizard"
      }), " component are being rendered. Simply put this component anywhere within your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Wizard />"
      }), " component. This component takes\na single prop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onStepClick: (currentStepNo: number, selectedStepNo: number) => boolean;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Whenever the user clicks on one of the steps, this function will fire with the step they came from, and the step they're going to. In reality you'll not need this function as the\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "onStepChange"
      }), " prop on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Wizard />"
      }), " component should be enough for you. If, for whatever reason, you need the step they came from. Use this prop instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wizardactions-",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<WizardActions />"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Wizard ", (0,jsx_runtime.jsx)(_components.code, {
        children: "actions"
      }), " prop allows you to determine some button properties that are handled by the Wizard. The following buttons will be rendered:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "actions: {\n  previous: {\n    label: string;\n    onClick: () => void;\n    previousButtonProps: ButtonProps;\n  },\n  next: {\n    label: string;\n    onClick: () => void;\n    nextButtonProps: ButtonProps;\n  },\n  saveAndClose: {\n    label: string;\n    onClick: () => void;\n    saveAndCloseButtonProps: ButtonProps;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "wizard-in-the-modal-",
      children: ["Wizard in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Modal />"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There is a possibility to Put a wizard into modal. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/story/components-layout-wizard-wizard--wizard-in-modal",
        children: "Wizard in Modal story"
      }), ".\nPlease keep beneath components structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Wizard>\n  <Modal>\n    <ModalHeader>\n      <WizardSteps />\n    </ModalHeader>\n    <ModalContent></ModalContent>\n    <ModalActions>\n      <WizardActions />\n    </ModalActions>\n  </Modal>\n</Wizard>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: BasicWizard
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementing-this-with-the-proper-event-functions",
      children: "Implementing this with the proper event functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react';\n\nimport { Wizard, WizardSteps, WizardActions } from '@onewelcome/react-lib-components';\nimport { StepOne } from './StepOne';\nimport { StepTwo } from './StepTwo';\nimport { StepThree } from './StepThree';\n\ninterface Props {\n  onCloseModal: () => void;\n}\n\nexport const StepForm = ({ onCloseModal }: Props) => {\n  const [activeStep, setActiveStep] = useState(1);\n\n  const onStepChangeHandler = (stepNumber: number) {\n    setActiveStep(stepNumber);\n  }\n\n  const onNextStepHandler = () => {\n    setActiveStep(activeStep + 1);\n  }\n\n  const onPreviousStepHandler = () => {\n    setActiveStep(activeStep - 1);\n  }\n\n  const onSubmitHandler = () => {\n    // Do something with the data\n\n    onCloseModal();\n  }\n\n  return {\n    <Wizard\n      initialStepNo{1}\n      mode=\"add\"\n      onStepChange={onStepChangeHandler}\n      steps={[\n        { label: \"Step 1\" },\n        { label: \"Step 2\" },\n        { label: \"Step 3\" }\n      ]}>\n\n      <header>\n        <WizardSteps />\n      </header>\n\n      <main>\n        <Form>\n          {activeStep === 1 && <StepOne />}\n          {activeStep === 2 && <StepTwo />}\n          {activeStep === 3 && <StepThree />}\n        </Form>\n      </main>\n\n      <footer>\n        <WizardActions\n          actions={{\n            previous: {\n              label: \"Previous\",\n              onClick: onPreviousStepHandler\n            },\n            next: {\n              label: \"Next\",\n              onClick: onNextStepHandler\n            },\n            saveAndClose: {\n              label: \"Save and close\",\n              onClick: onSubmitHandler\n            }\n          }}\n        />\n      </footer>\n\n    </Wizard>\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      story: dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Wizard_Wizard = (MDXContent);

// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 2 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx + 1 modules
var BaseModalHeader = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx");
// EXTERNAL MODULE: ./src/components/Form/Checkbox/Checkbox.tsx + 1 modules
var Checkbox = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
;// CONCATENATED MODULE: ./stories/Wizard/Wizard.stories.tsx
function Wizard_stories_extends() {
  Wizard_stories_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return Wizard_stories_extends.apply(this, arguments);
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
  title: "components/Layout/Wizard/Wizard",
  component: Wizard,
  parameters: {
    docs: {
      page: Wizard_Wizard
    }
  },
  args: {
    steps: [{
      label: "Step 1"
    }, {
      label: "Step 2"
    }, {
      label: "Step 3",
      disabled: true
    }, {
      label: "Step 4"
    }, {
      label: "Very long label for step 5",
      disabled: true
    }, {
      label: "Last step"
    }],
    initialStepNo: 1,
    mode: "add"
  }
};
const onNext = stepNo => {
  if (stepNo === 3) {
    return window.confirm("Does the validation passed?");
  }
  return true;
};
const onSaveAndClose = () => {
  alert("Save clicked");
};
const wizardActionsProps = {
  actions: {
    previous: {
      label: "Previous",
      onClick: () => true
    },
    next: {
      label: "Next",
      onClick: onNext
    },
    saveAndClose: {
      label: "Save & close",
      onClick: onSaveAndClose
    }
  }
};
/* harmony default export */ const Wizard_stories = (meta);
const Template = args => {
  const [step, setStep] = (0,react.useState)(args.initialStepNo);
  return /*#__PURE__*/react.createElement(Wizard, Wizard_stories_extends({}, args, {
    onStepChange: stepNo => setStep(stepNo)
  }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(WizardSteps, {
    onStepClick: () => true
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", null, "Step ", step + 1, " content.")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(WizardActions, wizardActionsProps)));
};
const BasicWizard = Template.bind({});
const WizardModalTemplate = () => {
  const [open, setOpen] = (0,react.useState)(true);
  const [step, setStep] = (0,react.useState)(0);
  const [checkboxChecked, setCheckboxChecked] = (0,react.useState)(false);
  const [exampleInput, setExampleInput] = (0,react.useState)("");
  const [exampleInput2, setExampleInput2] = (0,react.useState)("");
  const [steps, setSteps] = (0,react.useState)([{
    label: "Step 1"
  }, {
    label: "Step 2"
  }, {
    label: "Step 3"
  }]);
  const onCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    const newSteps = [...steps];
    newSteps[1] = {
      ...newSteps[1],
      disabled: !checkboxChecked
    };
    setSteps(newSteps);
  };
  const onClose = () => setOpen(false);
  const modalId = "modal-with-wizard";
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.$, {
    onClick: () => setOpen(true)
  }, "Open modal"), /*#__PURE__*/react.createElement(Wizard, {
    steps: steps,
    mode: "add",
    onStepChange: stepNo => setStep(stepNo)
  }, /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.d, {
    id: modalId,
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.O, {
    id: "".concat(modalId, "-label"),
    title: "Example modal with wizard"
  }, /*#__PURE__*/react.createElement(WizardSteps, {
    style: {
      paddingBottom: 0
    },
    onStepClick: () => true
  })), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */._, {
    id: "".concat(modalId, "-description")
  }, /*#__PURE__*/react.createElement("form", {
    id: "modalForm"
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    variant: "body"
  }, "This modal shows various options of form controls. It is not meant to be a realistic example of any of our forms.", /*#__PURE__*/react.createElement("br", null), " Clicking Save, Cancel or Close may bring you to a different screen than you came from."), step === 0 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.S, {
    id: "checkbox",
    name: "checkbox",
    type: "checkbox",
    checked: checkboxChecked,
    onChange: onCheckboxChange
  }, "Checking this checkbox affects the activity of step 2")), step === 1 && /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
    label: "Some input",
    helperText: "Helper text for this text field. Description should be short and not repeat the label.",
    name: "first-name",
    value: exampleInput,
    onChange: event => setExampleInput(event.target.value),
    type: "text"
  }), step === 2 && /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.o, {
    label: "Some 2 input",
    helperText: "Helper text for this text field. Description should be short and not repeat the label.",
    name: "first-name",
    value: exampleInput2,
    onChange: event => setExampleInput2(event.target.value),
    type: "text"
  }))), /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.q, {
    cancelAction: {
      label: "Cancel"
    }
  }, /*#__PURE__*/react.createElement(WizardActions, {
    actions: {
      ...wizardActionsProps.actions
    }
  })))));
};
const WizardInModal = WizardModalTemplate.bind({});
WizardInModal.parameters = {
  controls: {
    hideNoControlsWarning: true
  }
};
BasicWizard.parameters = {
  ...BasicWizard.parameters,
  docs: {
    ...BasicWizard.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [step, setStep] = useState(args.initialStepNo);\n  return <Wizard {...args} onStepChange={(stepNo: number) => setStep(stepNo)}>\n      <div>\n        <WizardSteps onStepClick={() => true} />\n      </div>\n      <div>\n        <p>Step {step! + 1} content.</p>\n      </div>\n      <div>\n        <WizardActions {...wizardActionsProps} />\n      </div>\n    </Wizard>;\n}",
      ...BasicWizard.parameters?.docs?.source
    }
  }
};
WizardInModal.parameters = {
  ...WizardInModal.parameters,
  docs: {
    ...WizardInModal.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [open, setOpen] = useState(true);\n  const [step, setStep] = useState(0);\n  const [checkboxChecked, setCheckboxChecked] = useState(false);\n  const [exampleInput, setExampleInput] = useState(\"\");\n  const [exampleInput2, setExampleInput2] = useState(\"\");\n  const [steps, setSteps] = useState(([{\n    label: \"Step 1\"\n  }, {\n    label: \"Step 2\"\n  }, {\n    label: \"Step 3\"\n  }] as Step[]));\n  const onCheckboxChange = () => {\n    setCheckboxChecked(!checkboxChecked);\n    const newSteps = [...steps];\n    newSteps[1] = {\n      ...newSteps[1],\n      disabled: !checkboxChecked\n    };\n    setSteps(newSteps);\n  };\n  const onClose = () => setOpen(false);\n  const modalId = \"modal-with-wizard\";\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open modal</Button>\n      <Wizard steps={steps} mode=\"add\" onStepChange={(stepNo: number) => setStep(stepNo)}>\n        <Modal id={modalId} open={open} onClose={onClose}>\n          <ModalHeader id={`${modalId}-label`} title=\"Example modal with wizard\">\n            <WizardSteps style={{\n            paddingBottom: 0\n          }} onStepClick={() => true} />\n          </ModalHeader>\n          <ModalContent id={`${modalId}-description`}>\n            <form id=\"modalForm\">\n              <Typography variant=\"body\">\n                This modal shows various options of form controls. It is not meant to be a realistic\n                example of any of our forms.\n                <br /> Clicking Save, Cancel or Close may bring you to a different screen than you\n                came from.\n              </Typography>\n              {step === 0 && <Fragment>\n                  <Checkbox id=\"checkbox\" name=\"checkbox\" type=\"checkbox\" checked={checkboxChecked} onChange={onCheckboxChange}>\n                    Checking this checkbox affects the activity of step 2\n                  </Checkbox>\n                </Fragment>}\n              {step === 1 && <InputWrapper label=\"Some input\" helperText=\"Helper text for this text field. Description should be short and not repeat the\n            label.\" name=\"first-name\" value={exampleInput} onChange={event => setExampleInput(event.target.value)} type=\"text\" />}\n              {step === 2 && <InputWrapper label=\"Some 2 input\" helperText=\"Helper text for this text field. Description should be short and not repeat the\n            label.\" name=\"first-name\" value={exampleInput2} onChange={event => setExampleInput2(event.target.value)} type=\"text\" />}\n            </form>\n          </ModalContent>\n          <ModalActions cancelAction={{\n          label: \"Cancel\"\n        }}>\n            <WizardActions actions={{\n            ...wizardActionsProps.actions\n          }} />\n          </ModalActions>\n        </Modal>\n      </Wizard>\n    </Fragment>;\n}",
      ...WizardInModal.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["BasicWizard","WizardInModal"];
try {
    // @ts-ignore
    BasicWizard.displayName = "BasicWizard";
    // @ts-ignore
    BasicWizard.__docgenInfo = { "description": "", "displayName": "BasicWizard", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["stories/Wizard/Wizard.stories.tsx#BasicWizard"] = { docgenInfo: BasicWizard.__docgenInfo, name: "BasicWizard", path: "stories/Wizard/Wizard.stories.tsx#BasicWizard" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ InputWrapper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.A, options);




       /* harmony default export */ const InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.A && InputWrapper_module/* default */.A.locals ? InputWrapper_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
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






const InputWrapperComponent = (_ref, ref) => {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  let {
    type,
    name,
    inputProps,
    helperText,
    helperProps,
    value,
    className,
    error,
    success,
    onChange,
    onBlur,
    onFocus,
    disabled,
    ...rest
  } = _ref;
  const {
    errorId,
    hasFocus,
    setHasFocus,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.r)();
  const {
    prefix,
    suffix
  } = inputProps !== null && inputProps !== void 0 ? inputProps : {};
  const input = (0,react.useRef)(null);
  const labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module["focus"]);
  const inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.m, _extends({}, rest, {
    ref: ref,
    name: name,
    className: "".concat(InputWrapper_InputWrapper_module["input-wrapper"], " ").concat(className !== null && className !== void 0 ? className : ""),
    labelProps: {
      id: labelId,
      className: labelClasses.join(" ")
    },
    errorId: errorId,
    error: error,
    helperId: helperId,
    helperText: helperText,
    helperProps: {
      ...helperProps,
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    },
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.p, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: e => {
      onFocus === null || onFocus === void 0 || onFocus(e);
      setHasFocus(true);
    },
    onBlur: e => {
      onBlur === null || onBlur === void 0 || onBlur(e);
      setHasFocus(false);
    },
    className: "\n         ".concat((_inputProps$className = inputProps === null || inputProps === void 0 ? void 0 : inputProps.className) !== null && _inputProps$className !== void 0 ? _inputProps$className : ""),
    name: name,
    success: success,
    error: error,
    id: name,
    value: value,
    type: type
  })));
};
const InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
try {
    // @ts-ignore
    InputWrapper.displayName = "InputWrapper";
    // @ts-ignore
    InputWrapper.__docgenInfo = { "description": "", "displayName": "InputWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"number\"" }, { "value": "\"search\"" }, { "value": "\"time\"" }, { "value": "\"text\"" }, { "value": "\"hidden\"" }, { "value": "\"tel\"" }, { "value": "\"url\"" }, { "value": "\"email\"" }, { "value": "\"date\"" }, { "value": "\"file\"" }, { "value": "\"password\"" }, { "value": "\"datetime-local\"" }] } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "inputProps": { "defaultValue": null, "description": "", "name": "inputProps", "required": false, "type": { "name": "PartialInputProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper"] = { docgenInfo: InputWrapper.__docgenInfo, name: "InputWrapper", path: "src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ BaseModalActions)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss
var BaseModalActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalActions_module/* default */.A, options);




       /* harmony default export */ const BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.A && BaseModalActions_module/* default */.A.locals ? BaseModalActions_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
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




const BaseModalActionsComponent = (_ref, ref) => {
  let {
    children,
    cancelAction,
    cancelActionsClassName = "",
    onClose,
    className = "",
    ...rest
  } = _ref;
  const innerRef = /*#__PURE__*/ /*#__PURE__*/react.createRef() || ref;
  const cancelButtonRef = (0,react.useRef)(null);
  const primaryActionsRef = (0,react.useRef)(null);
  const cancelButton = /*#__PURE__*/react.createElement(Button/* Button */.$, _extends({
    variant: "text",
    color: "default"
  }, cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.cancelButtonProps, {
    onClick: onClose
  }), cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.label);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: innerRef,
    className: "".concat(BaseModalActions_BaseModalActions_module["actions"], " ").concat(className)
  }), cancelAction && onClose && /*#__PURE__*/react.createElement("div", {
    className: "".concat(BaseModalActions_BaseModalActions_module["cancel-action"], " ").concat(cancelActionsClassName),
    ref: cancelButtonRef
  }, cancelButton), children && /*#__PURE__*/react.createElement("div", {
    ref: primaryActionsRef,
    className: BaseModalActions_BaseModalActions_module["primary-actions"]
  }, children));
};
const BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
try {
    // @ts-ignore
    BaseModalActions.displayName = "BaseModalActions";
    // @ts-ignore
    BaseModalActions.__docgenInfo = { "description": "", "displayName": "BaseModalActions", "props": { "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "cancelAction": { "defaultValue": null, "description": "", "name": "cancelAction", "required": false, "type": { "name": "CancelAction" } }, "cancelActionsClassName": { "defaultValue": { value: "" }, "description": "", "name": "cancelActionsClassName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions"] = { docgenInfo: BaseModalActions.__docgenInfo, name: "BaseModalActions", path: "src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx#BaseModalActions" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ BaseModalHeader)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss
var BaseModalHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalHeader_module/* default */.A, options);




       /* harmony default export */ const BaseModalHeader_BaseModalHeader_module = (BaseModalHeader_module/* default */.A && BaseModalHeader_module/* default */.A.locals ? BaseModalHeader_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx
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






const BaseModalHeaderComponent = (_ref, ref) => {
  let {
    id,
    title,
    children,
    onClose,
    ...rest
  } = _ref;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: BaseModalHeader_BaseModalHeader_module["header"]
  }), /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module["headline"]
  }, /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module["title-wrapper"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    id: id,
    className: BaseModalHeader_BaseModalHeader_module["title"],
    tag: "h1",
    spacing: {
      marginBottom: 0
    },
    variant: "h4"
  }, title)), /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    onClick: onClose,
    className: BaseModalHeader_BaseModalHeader_module["closeBtn"],
    title: "close modal"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.Times
  }))), children);
};
const BaseModalHeader = /*#__PURE__*/react.forwardRef(BaseModalHeaderComponent);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
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
 */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem;display:flex;align-items:center;justify-content:center}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed;color:var(--greyed-out)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `InputWrapper-module__sr-only--_BGLV`,
	"hidden": `InputWrapper-module__hidden--j7j0R`,
	"slide-in": `InputWrapper-module__slide-in--PMOZy`,
	"slide-out": `InputWrapper-module__slide-out--ghrlP`,
	"floating-label": `InputWrapper-module__floating-label--aGgwG`,
	"input-wrapper-helper": `InputWrapper-module__input-wrapper-helper--GKzdc`,
	"input-wrapper": `InputWrapper-module__input-wrapper--x9INE`,
	"disabled": `InputWrapper-module__disabled--TE5Ui`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss":
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
 */.BaseModalActions-module__actions--A4L3O{margin:1.5rem 0 1rem;padding:1rem 1.5rem 0;display:flex;justify-content:space-between;border-top:1px solid var(--color-blue-grey100)}.BaseModalActions-module__actions--A4L3O>*+*{margin-left:2rem}@media screen and (max-width: 640px){.BaseModalActions-module__actions--A4L3O{display:block}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__cancel-action--MgUvx{display:none}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat{flex-direction:column;align-items:flex-end;margin-left:0}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*{width:100%}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*+*{margin-top:.5rem}}.BaseModalActions-module__primary-actions--bcMat{display:flex;flex-grow:1;justify-content:flex-end}.BaseModalActions-module__primary-actions--bcMat button{white-space:nowrap}@media screen and (min-width: 640px){.BaseModalActions-module__primary-actions--bcMat button+button{margin-left:.5rem}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": `BaseModalActions-module__actions--A4L3O`,
	"cancel-action": `BaseModalActions-module__cancel-action--MgUvx`,
	"primary-actions": `BaseModalActions-module__primary-actions--bcMat`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.module.scss":
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
 */.BaseModalHeader-module__header--UVtiQ{min-width:80px;padding:1.25rem 1.5rem 0;border-top-left-radius:8px;border-top-right-radius:8px}.BaseModalHeader-module__headline--q6eEZ{display:flex;align-items:center;justify-content:space-between}.BaseModalHeader-module__title--FjtRT{flex:1;margin:0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": `BaseModalHeader-module__header--UVtiQ`,
	"headline": `BaseModalHeader-module__headline--q6eEZ`,
	"title": `BaseModalHeader-module__title--FjtRT`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss":
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
 */.BaseWizardSteps-module__wizard--He5Km{padding:1rem;display:flex}.BaseWizardSteps-module__wizard-element--LCwh5{display:flex;flex:1;flex-direction:column;background-color:rgba(0,0,0,0);border:0;align-items:stretch;padding:0;margin:0}.BaseWizardSteps-module__wizard-element--LCwh5:focus-visible{outline:1px dashed var(--color-primary);outline-offset:1px}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--color-primary);color:var(--color-primary);font-weight:normal}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__number-wrapper--Ssi_r:before,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__number-wrapper--Ssi_r:after{border-bottom:2px solid var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__label--ZsO5k{color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:disabled .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--disabled);color:var(--disabled)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:disabled .BaseWizardSteps-module__label--ZsO5k{color:var(--greyed-out)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:hover,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:focus,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active{cursor:pointer}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:hover .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:focus .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{background-color:var(--color-primary);color:var(--light)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:hover .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:focus .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active .BaseWizardSteps-module__label--ZsO5k{text-decoration:underline}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:none;margin:2px}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{color:var(--light);border:2px solid var(--color-primary);background-color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__number-wrapper--Ssi_r:before{border-bottom:2px solid var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__label--ZsO5k{font-weight:700;color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__two-line-text-overflow--ujBaf{display:unset}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--color-primary);color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf .BaseWizardSteps-module__label--ZsO5k{color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:hover,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:focus,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active{cursor:pointer}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:hover .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:focus .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{background-color:var(--color-primary);color:var(--light)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:hover .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:focus .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active .BaseWizardSteps-module__label--ZsO5k{text-decoration:underline}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:none;margin:2px}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:disabled .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--disabled);color:var(--disabled)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:disabled .BaseWizardSteps-module__label--ZsO5k{color:var(--greyed-out)}.BaseWizardSteps-module__wizard-element--LCwh5:first-child .BaseWizardSteps-module__number-wrapper--Ssi_r:before{border-bottom:none}.BaseWizardSteps-module__wizard-element--LCwh5:last-child .BaseWizardSteps-module__number-wrapper--Ssi_r:after{border-bottom:none}.BaseWizardSteps-module__number-wrapper--Ssi_r{display:flex;flex-direction:row}.BaseWizardSteps-module__number-wrapper--Ssi_r:after,.BaseWizardSteps-module__number-wrapper--Ssi_r:before{content:" ";margin-bottom:.8125rem;width:100%;border-bottom:2px solid var(--greyed-out)}.BaseWizardSteps-module__number--ovCZe{font-family:var(--font-family);font-size:1rem;font-weight:normal;display:flex;align-items:center;justify-content:center;border:2px solid var(--wizard-step-indicator-future-color);border-radius:50%;min-width:1.5rem;min-height:1.5rem;width:1.5rem;height:1.5rem;color:var(--wizard-step-indicator-future-color);line-height:var(--default-line-height);background-color:var(--light);box-sizing:content-box}.BaseWizardSteps-module__two-line-text-overflow--ujBaf{max-height:2rem;display:none;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding:.25rem 1rem 0}.BaseWizardSteps-module__label--ZsO5k{font-family:var(--font-family);font-size:.75rem;line-height:1rem;overflow:hidden;color:var(--default);text-align:center}.BaseWizardSteps-module__checkmark--m9Lc7{font-size:.875rem}@media only screen and (min-width: 30em){.BaseWizardSteps-module__two-line-text-overflow--ujBaf{display:unset}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wizard": `BaseWizardSteps-module__wizard--He5Km`,
	"wizard-element": `BaseWizardSteps-module__wizard-element--LCwh5`,
	"finished": `BaseWizardSteps-module__finished--zBBmi`,
	"number-wrapper": `BaseWizardSteps-module__number-wrapper--Ssi_r`,
	"number": `BaseWizardSteps-module__number--ovCZe`,
	"label": `BaseWizardSteps-module__label--ZsO5k`,
	"current": `BaseWizardSteps-module__current--sKhJ3`,
	"two-line-text-overflow": `BaseWizardSteps-module__two-line-text-overflow--ujBaf`,
	"future": `BaseWizardSteps-module__future--vn2cg`,
	"clickable": `BaseWizardSteps-module__clickable--_pUvf`,
	"checkmark": `BaseWizardSteps-module__checkmark--m9Lc7`
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