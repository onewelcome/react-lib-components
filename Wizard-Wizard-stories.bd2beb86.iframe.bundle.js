"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2360],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: function() { return /* binding */ withMDXComponents; },
/* harmony export */   Zo: function() { return /* binding */ MDXProvider; },
/* harmony export */   ah: function() { return /* binding */ useMDXComponents; },
/* harmony export */   pC: function() { return /* binding */ MDXContext; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BasicWizard: function() { return /* binding */ BasicWizard; },
  WizardInModal: function() { return /* binding */ WizardInModal; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Wizard_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/components/Wizard/wizardStateReducer.ts
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

var setWizardState = function setWizardState(steps, mode) {
  return {
    type: "SET_STATE",
    payload: {
      steps: steps,
      mode: mode
    }
  };
};
var changeCurrentStepNo = function changeCurrentStepNo(currentStepNo) {
  return {
    type: "CHANGE_CURRENT_STEP_NO",
    payload: currentStepNo
  };
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case "SET_STATE":
      return _objectSpread(_objectSpread({}, state), action.payload);
    case "CHANGE_CURRENT_STEP_NO":
      return _objectSpread(_objectSpread({}, state), {}, {
        currentStepNo: action.payload
      });
    default:
      return state;
  }
};

;// CONCATENATED MODULE: ./src/components/Wizard/WizardStateProvider.tsx
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
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



var WizardStateContext = /*#__PURE__*/(0,react.createContext)({
  state: {},
  dispatch: function dispatch() {
    return null;
  }
});
/**
 * @deprecated
 */
var WizardStateProvider = function WizardStateProvider(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState;
  var _useReducer = (0,react.useReducer)(reducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  return /*#__PURE__*/react.createElement(WizardStateContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
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




var useSetWizardState = function useSetWizardState(steps, mode) {
  var _useContext = (0,react.useContext)(WizardStateContext),
    dispatch = _useContext.dispatch;
  (0,react.useEffect)(function () {
    dispatch(setWizardState(steps, mode));
  }, [steps, mode]);
};
var useStepChanging = function useStepChanging(onStepChange) {
  var _useContext2 = (0,react.useContext)(WizardStateContext),
    currentStepNo = _useContext2.state.currentStepNo;
  (0,react.useEffect)(function () {
    onStepChange(currentStepNo);
  }, [currentStepNo]);
};

/**
 * @deprecated
 */
var WizardContent = function WizardContent(_ref) {
  var steps = _ref.steps,
    mode = _ref.mode,
    onStepChange = _ref.onStepChange,
    children = _ref.children;
  useSetWizardState(steps, mode);
  useStepChanging(onStepChange);
  return /*#__PURE__*/react.createElement(react.Fragment, null, children);
};
var Wizard = function Wizard(props) {
  var steps = props.steps,
    _props$initialStepNo = props.initialStepNo,
    currentStepNo = _props$initialStepNo === void 0 ? 0 : _props$initialStepNo,
    mode = props.mode;
  return /*#__PURE__*/react.createElement(WizardStateProvider, {
    initialState: {
      steps: steps,
      currentStepNo: currentStepNo,
      mode: mode
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss
var BaseWizardSteps_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss");
;// CONCATENATED MODULE: ./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseWizardSteps_module/* default */.Z, options);




       /* harmony default export */ var BaseWizardSteps_BaseWizardSteps_module = (BaseWizardSteps_module/* default */.Z && BaseWizardSteps_module/* default */.Z.locals ? BaseWizardSteps_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx
var _excluded = ["steps", "currentStepNo", "onClick", "futureStepsClickable"];
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




var BaseWizardStepsComponent = function BaseWizardStepsComponent(_ref, ref) {
  var steps = _ref.steps,
    currentStepNo = _ref.currentStepNo,
    _onClick = _ref.onClick,
    _ref$futureStepsClick = _ref.futureStepsClickable,
    futureStepsClickable = _ref$futureStepsClick === void 0 ? false : _ref$futureStepsClick,
    rest = _objectWithoutProperties(_ref, _excluded);
  var getStepState = function getStepState(stepNo) {
    if (currentStepNo === stepNo) {
      return "current";
    } else if (stepNo < currentStepNo) {
      return "finished";
    }
    return "future";
  };
  var getStepContent = function getStepContent(stepState, index, disabled) {
    var stepNumberString = String(index + 1);
    if (stepState === "finished") {
      return disabled ? null : /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        className: BaseWizardSteps_BaseWizardSteps_module["checkmark"],
        icon: Icon/* Icons */.P.Checkmark
      });
    } else {
      return /*#__PURE__*/react.createElement(react.Fragment, null, stepNumberString);
    }
  };
  var generatedSteps = steps.map(function (step, index) {
    var stepState = getStepState(index);
    var disabledStyleClassName = step.disabled ? BaseWizardSteps_BaseWizardSteps_module["disabled"] : "";
    var clickableClassName = futureStepsClickable ? BaseWizardSteps_BaseWizardSteps_module["clickable"] : "";
    return /*#__PURE__*/react.createElement("button", {
      key: step.label.toLowerCase().replace(/\s/, "-"),
      disabled: step.disabled || stepState === "future" && !futureStepsClickable || stepState === "current",
      "aria-current": stepState === "current" ? "step" : undefined,
      onClick: function onClick() {
        return _onClick === null || _onClick === void 0 ? void 0 : _onClick(index);
      },
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
var BaseWizardSteps = /*#__PURE__*/react.forwardRef(BaseWizardStepsComponent);
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
var WizardSteps_excluded = ["onStepClick"];
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
function WizardSteps_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = WizardSteps_objectWithoutPropertiesLoose(source, excluded);
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
function WizardSteps_objectWithoutPropertiesLoose(source, excluded) {
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





var WizardStepsComponent = function WizardStepsComponent(_ref, ref) {
  var onStepClick = _ref.onStepClick,
    rest = WizardSteps_objectWithoutProperties(_ref, WizardSteps_excluded);
  var _useContext = (0,react.useContext)(WizardStateContext),
    _useContext$state = _useContext.state,
    currentStepNo = _useContext$state.currentStepNo,
    mode = _useContext$state.mode,
    steps = _useContext$state.steps,
    dispatch = _useContext.dispatch;
  var onClick = function onClick(selectedStepNo) {
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
var WizardSteps = /*#__PURE__*/react.forwardRef(WizardStepsComponent);
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || WizardActions_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function WizardActions_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return WizardActions_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WizardActions_arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return WizardActions_arrayLikeToArray(arr);
}
function WizardActions_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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





var calculateNextStepNo = function calculateNextStepNo(steps, currentStepNo) {
  return function () {
    return steps.findIndex(function (step, stepNo) {
      return stepNo > currentStepNo && !step.disabled;
    });
  };
};
var calculatePrevStepNo = function calculatePrevStepNo(steps, currentStepNo) {
  return function () {
    var reversedCurrentStepNo = steps.length - 1 - currentStepNo;
    var reversedPrevStepNo = _toConsumableArray(steps).reverse().findIndex(function (step, stepNo) {
      return stepNo > reversedCurrentStepNo && !step.disabled;
    });
    if (reversedPrevStepNo > 0) {
      return steps.length - 1 - reversedPrevStepNo;
    }
    return -1;
  };
};
var useNextStepNo = function useNextStepNo(mode, currentStepNo, steps) {
  return (0,react.useMemo)(calculateNextStepNo(steps, currentStepNo), [mode, currentStepNo, steps]);
};
var usePreviousStepNo = function usePreviousStepNo(mode, currentStepNo, steps) {
  return (0,react.useMemo)(calculatePrevStepNo(steps, currentStepNo), [mode, currentStepNo, steps]);
};

/**
 * @deprecated
 */
var WizardActions = function WizardActions(_ref) {
  var actions = _ref.actions;
  var _useContext = (0,react.useContext)(WizardStateContext),
    _useContext$state = _useContext.state,
    mode = _useContext$state.mode,
    steps = _useContext$state.steps,
    currentStepNo = _useContext$state.currentStepNo,
    dispatch = _useContext.dispatch;
  var nextStepNo = useNextStepNo(mode, currentStepNo, steps);
  var hasNextStep = nextStepNo !== -1;
  var previousStepNo = usePreviousStepNo(mode, currentStepNo, steps);
  var hasPreviousStep = previousStepNo !== -1;
  var isLastStepOrEditMode = !hasNextStep || mode === "edit";
  var changeStepNo = function changeStepNo(direction) {
    if (direction === "forward") {
      hasNextStep && dispatch(changeCurrentStepNo(nextStepNo));
    } else {
      hasPreviousStep && dispatch(changeCurrentStepNo(previousStepNo));
    }
  };
  var onNextWrapper = function onNextWrapper() {
    actions.next.onClick(currentStepNo) && changeStepNo("forward");
  };
  var onPreviousWrapper = function onPreviousWrapper() {
    var _actions$previous$onC, _actions$previous;
    (_actions$previous$onC = (_actions$previous = actions.previous).onClick) === null || _actions$previous$onC === void 0 || _actions$previous$onC.call(_actions$previous);
    changeStepNo("backward");
  };
  var onSaveAndCloseWrapper = function onSaveAndCloseWrapper() {
    actions.saveAndClose.onClick(currentStepNo);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, hasPreviousStep && /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: "outline",
    onClick: onPreviousWrapper
  }, actions.previous.label), hasNextStep && /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: mode === "edit" ? "outline" : "fill",
    onClick: onNextWrapper
  }, actions.next.label), isLastStepOrEditMode && /*#__PURE__*/react.createElement(Button/* Button */.z, {
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
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
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
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
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
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
      story: dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var Wizard_Wizard = (MDXContent);

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
function Wizard_stories_typeof(o) {
  "@babel/helpers - typeof";

  return Wizard_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Wizard_stories_typeof(o);
}
var _BasicWizard$paramete, _BasicWizard$paramete2, _WizardInModal$parame, _WizardInModal$parame2;
function Wizard_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Wizard_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Wizard_stories_ownKeys(Object(t), !0).forEach(function (r) {
      Wizard_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wizard_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Wizard_stories_defineProperty(obj, key, value) {
  key = Wizard_stories_toPropertyKey(key);
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
function Wizard_stories_toPropertyKey(arg) {
  var key = Wizard_stories_toPrimitive(arg, "string");
  return Wizard_stories_typeof(key) === "symbol" ? key : String(key);
}
function Wizard_stories_toPrimitive(input, hint) {
  if (Wizard_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Wizard_stories_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function Wizard_stories_toConsumableArray(arr) {
  return Wizard_stories_arrayWithoutHoles(arr) || Wizard_stories_iterableToArray(arr) || Wizard_stories_unsupportedIterableToArray(arr) || Wizard_stories_nonIterableSpread();
}
function Wizard_stories_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Wizard_stories_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function Wizard_stories_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Wizard_stories_arrayLikeToArray(arr);
}
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
function Wizard_stories_slicedToArray(arr, i) {
  return Wizard_stories_arrayWithHoles(arr) || Wizard_stories_iterableToArrayLimit(arr, i) || Wizard_stories_unsupportedIterableToArray(arr, i) || Wizard_stories_nonIterableRest();
}
function Wizard_stories_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Wizard_stories_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Wizard_stories_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wizard_stories_arrayLikeToArray(o, minLen);
}
function Wizard_stories_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function Wizard_stories_iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function Wizard_stories_arrayWithHoles(arr) {
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
var onNext = function onNext(stepNo) {
  if (stepNo === 3) {
    return window.confirm("Does the validation passed?");
  }
  return true;
};
var onSaveAndClose = function onSaveAndClose() {
  alert("Save clicked");
};
var wizardActionsProps = {
  actions: {
    previous: {
      label: "Previous",
      onClick: function onClick() {
        return true;
      }
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
/* harmony default export */ var Wizard_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(args.initialStepNo),
    _useState2 = Wizard_stories_slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  return /*#__PURE__*/react.createElement(Wizard, Wizard_stories_extends({}, args, {
    onStepChange: function onStepChange(stepNo) {
      return setStep(stepNo);
    }
  }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(WizardSteps, {
    onStepClick: function onStepClick() {
      return true;
    }
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", null, "Step ", step + 1, " content.")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(WizardActions, wizardActionsProps)));
};
var BasicWizard = Template.bind({});
var WizardModalTemplate = function WizardModalTemplate() {
  var _useState3 = (0,react.useState)(true),
    _useState4 = Wizard_stories_slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = (0,react.useState)(0),
    _useState6 = Wizard_stories_slicedToArray(_useState5, 2),
    step = _useState6[0],
    setStep = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = Wizard_stories_slicedToArray(_useState7, 2),
    checkboxChecked = _useState8[0],
    setCheckboxChecked = _useState8[1];
  var _useState9 = (0,react.useState)(""),
    _useState10 = Wizard_stories_slicedToArray(_useState9, 2),
    exampleInput = _useState10[0],
    setExampleInput = _useState10[1];
  var _useState11 = (0,react.useState)(""),
    _useState12 = Wizard_stories_slicedToArray(_useState11, 2),
    exampleInput2 = _useState12[0],
    setExampleInput2 = _useState12[1];
  var _useState13 = (0,react.useState)([{
      label: "Step 1"
    }, {
      label: "Step 2"
    }, {
      label: "Step 3"
    }]),
    _useState14 = Wizard_stories_slicedToArray(_useState13, 2),
    steps = _useState14[0],
    setSteps = _useState14[1];
  var onCheckboxChange = function onCheckboxChange() {
    setCheckboxChecked(!checkboxChecked);
    var newSteps = Wizard_stories_toConsumableArray(steps);
    newSteps[1] = Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, newSteps[1]), {}, {
      disabled: !checkboxChecked
    });
    setSteps(newSteps);
  };
  var onClose = function onClose() {
    return setOpen(false);
  };
  var modalId = "modal-with-wizard";
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open modal"), /*#__PURE__*/react.createElement(Wizard, {
    steps: steps,
    mode: "add",
    onStepChange: function onStepChange(stepNo) {
      return setStep(stepNo);
    }
  }, /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, {
    id: modalId,
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.o, {
    id: "".concat(modalId, "-label"),
    title: "Example modal with wizard"
  }, /*#__PURE__*/react.createElement(WizardSteps, {
    style: {
      paddingBottom: 0
    },
    onStepClick: function onStepClick() {
      return true;
    }
  })), /*#__PURE__*/react.createElement(BaseModalContent/* BaseModalContent */.v, {
    id: "".concat(modalId, "-description")
  }, /*#__PURE__*/react.createElement("form", {
    id: "modalForm"
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body"
  }, "This modal shows various options of form controls. It is not meant to be a realistic example of any of our forms.", /*#__PURE__*/react.createElement("br", null), " Clicking Save, Cancel or Close may bring you to a different screen than you came from."), step === 0 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, {
    id: "checkbox",
    name: "checkbox",
    type: "checkbox",
    checked: checkboxChecked,
    onChange: onCheckboxChange
  }, "Checking this checkbox affects the activity of step 2")), step === 1 && /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    label: "Some input",
    helperText: "Helper text for this text field. Description should be short and not repeat the label.",
    name: "first-name",
    value: exampleInput,
    onChange: function onChange(event) {
      return setExampleInput(event.target.value);
    },
    type: "text"
  }), step === 2 && /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    label: "Some 2 input",
    helperText: "Helper text for this text field. Description should be short and not repeat the label.",
    name: "first-name",
    value: exampleInput2,
    onChange: function onChange(event) {
      return setExampleInput2(event.target.value);
    },
    type: "text"
  }))), /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.u, {
    cancelAction: {
      label: "Cancel"
    }
  }, /*#__PURE__*/react.createElement(WizardActions, {
    actions: Wizard_stories_objectSpread({}, wizardActionsProps.actions)
  })))));
};
var WizardInModal = WizardModalTemplate.bind({});
WizardInModal.parameters = {
  controls: {
    hideNoControlsWarning: true
  }
};
BasicWizard.parameters = Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, BasicWizard.parameters), {}, {
  docs: Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, (_BasicWizard$paramete = BasicWizard.parameters) === null || _BasicWizard$paramete === void 0 ? void 0 : _BasicWizard$paramete.docs), {}, {
    source: Wizard_stories_objectSpread({
      originalSource: "args => {\n  const [step, setStep] = useState(args.initialStepNo);\n  return <Wizard {...args} onStepChange={(stepNo: number) => setStep(stepNo)}>\n      <div>\n        <WizardSteps onStepClick={() => true} />\n      </div>\n      <div>\n        <p>Step {step! + 1} content.</p>\n      </div>\n      <div>\n        <WizardActions {...wizardActionsProps} />\n      </div>\n    </Wizard>;\n}"
    }, (_BasicWizard$paramete2 = BasicWizard.parameters) === null || _BasicWizard$paramete2 === void 0 || (_BasicWizard$paramete2 = _BasicWizard$paramete2.docs) === null || _BasicWizard$paramete2 === void 0 ? void 0 : _BasicWizard$paramete2.source)
  })
});
WizardInModal.parameters = Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, WizardInModal.parameters), {}, {
  docs: Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, (_WizardInModal$parame = WizardInModal.parameters) === null || _WizardInModal$parame === void 0 ? void 0 : _WizardInModal$parame.docs), {}, {
    source: Wizard_stories_objectSpread({
      originalSource: "() => {\n  const [open, setOpen] = useState(true);\n  const [step, setStep] = useState(0);\n  const [checkboxChecked, setCheckboxChecked] = useState(false);\n  const [exampleInput, setExampleInput] = useState(\"\");\n  const [exampleInput2, setExampleInput2] = useState(\"\");\n  const [steps, setSteps] = useState(([{\n    label: \"Step 1\"\n  }, {\n    label: \"Step 2\"\n  }, {\n    label: \"Step 3\"\n  }] as Step[]));\n  const onCheckboxChange = () => {\n    setCheckboxChecked(!checkboxChecked);\n    const newSteps = [...steps];\n    newSteps[1] = {\n      ...newSteps[1],\n      disabled: !checkboxChecked\n    };\n    setSteps(newSteps);\n  };\n  const onClose = () => setOpen(false);\n  const modalId = \"modal-with-wizard\";\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open modal</Button>\n      <Wizard steps={steps} mode=\"add\" onStepChange={(stepNo: number) => setStep(stepNo)}>\n        <Modal id={modalId} open={open} onClose={onClose}>\n          <ModalHeader id={`${modalId}-label`} title=\"Example modal with wizard\">\n            <WizardSteps style={{\n            paddingBottom: 0\n          }} onStepClick={() => true} />\n          </ModalHeader>\n          <ModalContent id={`${modalId}-description`}>\n            <form id=\"modalForm\">\n              <Typography variant=\"body\">\n                This modal shows various options of form controls. It is not meant to be a realistic\n                example of any of our forms.\n                <br /> Clicking Save, Cancel or Close may bring you to a different screen than you\n                came from.\n              </Typography>\n              {step === 0 && <Fragment>\n                  <Checkbox id=\"checkbox\" name=\"checkbox\" type=\"checkbox\" checked={checkboxChecked} onChange={onCheckboxChange}>\n                    Checking this checkbox affects the activity of step 2\n                  </Checkbox>\n                </Fragment>}\n              {step === 1 && <InputWrapper label=\"Some input\" helperText=\"Helper text for this text field. Description should be short and not repeat the\n            label.\" name=\"first-name\" value={exampleInput} onChange={event => setExampleInput(event.target.value)} type=\"text\" />}\n              {step === 2 && <InputWrapper label=\"Some 2 input\" helperText=\"Helper text for this text field. Description should be short and not repeat the\n            label.\" name=\"first-name\" value={exampleInput2} onChange={event => setExampleInput2(event.target.value)} type=\"text\" />}\n            </form>\n          </ModalContent>\n          <ModalActions cancelAction={{\n          label: \"Cancel\"\n        }}>\n            <WizardActions actions={{\n            ...wizardActionsProps.actions\n          }} />\n          </ModalActions>\n        </Modal>\n      </Wizard>\n    </Fragment>;\n}"
    }, (_WizardInModal$parame2 = WizardInModal.parameters) === null || _WizardInModal$parame2 === void 0 || (_WizardInModal$parame2 = _WizardInModal$parame2.docs) === null || _WizardInModal$parame2 === void 0 ? void 0 : _WizardInModal$parame2.source)
  })
});
var __namedExportsOrder = ["BasicWizard", "WizardInModal"];
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: function() { return /* binding */ InputWrapper; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.Z, options);




       /* harmony default export */ var InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.Z && InputWrapper_module/* default */.Z.locals ? InputWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["type", "name", "inputProps", "helperText", "helperProps", "value", "className", "error", "success", "onChange", "onBlur", "onFocus", "disabled"];
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






var InputWrapperComponent = function InputWrapperComponent(_ref, ref) {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  var type = _ref.type,
    name = _ref.name,
    inputProps = _ref.inputProps,
    helperText = _ref.helperText,
    helperProps = _ref.helperProps,
    value = _ref.value,
    className = _ref.className,
    error = _ref.error,
    success = _ref.success,
    onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    _onFocus = _ref.onFocus,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useWrapper = (0,useWrapper/* useWrapper */.s)(),
    errorId = _useWrapper.errorId,
    hasFocus = _useWrapper.hasFocus,
    setHasFocus = _useWrapper.setHasFocus,
    helperId = _useWrapper.helperId,
    labelId = _useWrapper.labelId;
  var _ref2 = inputProps !== null && inputProps !== void 0 ? inputProps : {},
    prefix = _ref2.prefix,
    suffix = _ref2.suffix;
  var input = (0,react.useRef)(null);
  var labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module["focus"]);
  var inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
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
    helperProps: _objectSpread(_objectSpread({}, helperProps), {}, {
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    }),
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: function onFocus(e) {
      _onFocus === null || _onFocus === void 0 || _onFocus(e);
      setHasFocus(true);
    },
    onBlur: function onBlur(e) {
      _onBlur === null || _onBlur === void 0 || _onBlur(e);
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
var InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: function() { return /* binding */ BaseModalActions; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss
var BaseModalActions_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseModalActions_module/* default */.Z, options);




       /* harmony default export */ var BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.Z && BaseModalActions_module/* default */.Z.locals ? BaseModalActions_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
var _excluded = ["children", "cancelAction", "cancelActionsClassName", "onClose", "className"];
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




var BaseModalActionsComponent = function BaseModalActionsComponent(_ref, ref) {
  var children = _ref.children,
    cancelAction = _ref.cancelAction,
    _ref$cancelActionsCla = _ref.cancelActionsClassName,
    cancelActionsClassName = _ref$cancelActionsCla === void 0 ? "" : _ref$cancelActionsCla,
    onClose = _ref.onClose,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var innerRef = /*#__PURE__*/ /*#__PURE__*/react.createRef() || ref;
  var cancelButtonRef = (0,react.useRef)(null);
  var primaryActionsRef = (0,react.useRef)(null);
  var cancelButton = /*#__PURE__*/react.createElement(Button/* Button */.z, _extends({
    variant: "text",
    color: "default"
  }, cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.cancelButtonProps, {
    onClick: onClose
  }), cancelAction === null || cancelAction === void 0 ? void 0 : cancelAction.label);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: innerRef,
    className: "".concat(BaseModalActions_BaseModalActions_module["actions"], " ").concat(className)
  }), cancelAction && /*#__PURE__*/react.createElement("div", {
    className: "".concat(BaseModalActions_BaseModalActions_module["cancel-action"], " ").concat(cancelActionsClassName),
    ref: cancelButtonRef
  }, cancelButton), children && /*#__PURE__*/react.createElement("div", {
    ref: primaryActionsRef,
    className: BaseModalActions_BaseModalActions_module["primary-actions"]
  }, children));
};
var BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: function() { return /* binding */ BaseModalHeader; }
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




       /* harmony default export */ var BaseModalHeader_BaseModalHeader_module = (BaseModalHeader_module/* default */.Z && BaseModalHeader_module/* default */.Z.locals ? BaseModalHeader_module/* default */.Z.locals : undefined);

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
    className: BaseModalHeader_BaseModalHeader_module["header"]
  }), /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module["headline"]
  }, /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module["title-wrapper"]
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: id,
    className: BaseModalHeader_BaseModalHeader_module["title"],
    tag: "h1",
    spacing: {
      marginBottom: 0
    },
    variant: "h4"
  }, title)), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    onClick: onClose,
    className: BaseModalHeader_BaseModalHeader_module["closeBtn"],
    title: "close modal"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Times
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem;display:flex;align-items:center;justify-content:center}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__floating-label-active--GU6su [data-icon]:before{transform:translateY(5px)}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed;color:var(--greyed-out)}.InputWrapper-module__floating-label-active--GU6su [data-prefix],.InputWrapper-module__floating-label-active--GU6su [data-suffix]{padding-top:1rem;transform:translateY(0)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "InputWrapper-module__sr-only--_BGLV",
	"hidden": "InputWrapper-module__hidden--j7j0R",
	"slide-in": "InputWrapper-module__slide-in--PMOZy",
	"slide-out": "InputWrapper-module__slide-out--ghrlP",
	"floating-label": "InputWrapper-module__floating-label--aGgwG",
	"input-wrapper-helper": "InputWrapper-module__input-wrapper-helper--GKzdc",
	"input-wrapper": "InputWrapper-module__input-wrapper--x9INE",
	"floating-label-active": "InputWrapper-module__floating-label-active--GU6su",
	"disabled": "InputWrapper-module__disabled--TE5Ui"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalActions-module__actions--A4L3O{margin:1.5rem 0 1rem;padding:1rem 1.5rem 0;display:flex;justify-content:space-between;border-top:1px solid var(--color-blue-grey100)}.BaseModalActions-module__actions--A4L3O>*+*{margin-left:2rem}@media screen and (max-width: 640px){.BaseModalActions-module__actions--A4L3O{display:block}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__cancel-action--MgUvx{display:none}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat{flex-direction:column;align-items:flex-end;margin-left:0}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*{width:100%}.BaseModalActions-module__actions--A4L3O .BaseModalActions-module__primary-actions--bcMat>*+*{margin-top:.5rem}}.BaseModalActions-module__primary-actions--bcMat{display:flex;flex-grow:1;justify-content:flex-end}.BaseModalActions-module__primary-actions--bcMat button{white-space:nowrap}@media screen and (min-width: 640px){.BaseModalActions-module__primary-actions--bcMat button+button{margin-left:.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": "BaseModalActions-module__actions--A4L3O",
	"cancel-action": "BaseModalActions-module__cancel-action--MgUvx",
	"primary-actions": "BaseModalActions-module__primary-actions--bcMat"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalHeader-module__header--UVtiQ{min-width:80px;padding:1.25rem 1.5rem 0;border-top-left-radius:8px;border-top-right-radius:8px}.BaseModalHeader-module__headline--q6eEZ{display:flex;align-items:center;justify-content:space-between}.BaseModalHeader-module__title--FjtRT{flex:1;margin:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "BaseModalHeader-module__header--UVtiQ",
	"headline": "BaseModalHeader-module__headline--q6eEZ",
	"title": "BaseModalHeader-module__title--FjtRT"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseWizardSteps-module__wizard--He5Km{padding:1rem;display:flex}.BaseWizardSteps-module__wizard-element--LCwh5{display:flex;flex:1;flex-direction:column;background-color:rgba(0,0,0,0);border:0;align-items:stretch;padding:0;margin:0}.BaseWizardSteps-module__wizard-element--LCwh5:focus-visible{outline:1px dashed var(--color-primary);outline-offset:1px}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--color-primary);color:var(--color-primary);font-weight:normal}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__number-wrapper--Ssi_r:before,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__number-wrapper--Ssi_r:after{border-bottom:2px solid var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi .BaseWizardSteps-module__label--ZsO5k{color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:disabled .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--disabled);color:var(--disabled)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:disabled .BaseWizardSteps-module__label--ZsO5k{color:var(--greyed-out)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:hover,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:focus,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active{cursor:pointer}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:hover .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:focus .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{background-color:var(--color-primary);color:var(--light)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:hover .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:focus .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active .BaseWizardSteps-module__label--ZsO5k{text-decoration:underline}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__finished--zBBmi:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:none;margin:2px}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{color:var(--light);border:2px solid var(--color-primary);background-color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__number-wrapper--Ssi_r:before{border-bottom:2px solid var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__label--ZsO5k{font-weight:700;color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__current--sKhJ3 .BaseWizardSteps-module__two-line-text-overflow--ujBaf{display:unset}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--color-primary);color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf .BaseWizardSteps-module__label--ZsO5k{color:var(--color-primary)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:hover,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:focus,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active{cursor:pointer}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:hover .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:focus .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{background-color:var(--color-primary);color:var(--light)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:hover .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:focus .BaseWizardSteps-module__label--ZsO5k,.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active .BaseWizardSteps-module__label--ZsO5k{text-decoration:underline}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:enabled:active .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:none;margin:2px}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:disabled .BaseWizardSteps-module__number-wrapper--Ssi_r .BaseWizardSteps-module__number--ovCZe{border:2px solid var(--disabled);color:var(--disabled)}.BaseWizardSteps-module__wizard-element--LCwh5.BaseWizardSteps-module__future--vn2cg.BaseWizardSteps-module__clickable--_pUvf:disabled .BaseWizardSteps-module__label--ZsO5k{color:var(--greyed-out)}.BaseWizardSteps-module__wizard-element--LCwh5:first-child .BaseWizardSteps-module__number-wrapper--Ssi_r:before{border-bottom:none}.BaseWizardSteps-module__wizard-element--LCwh5:last-child .BaseWizardSteps-module__number-wrapper--Ssi_r:after{border-bottom:none}.BaseWizardSteps-module__number-wrapper--Ssi_r{display:flex;flex-direction:row}.BaseWizardSteps-module__number-wrapper--Ssi_r:after,.BaseWizardSteps-module__number-wrapper--Ssi_r:before{content:\" \";margin-bottom:.8125rem;width:100%;border-bottom:2px solid var(--greyed-out)}.BaseWizardSteps-module__number--ovCZe{font-family:var(--font-family);font-size:1rem;font-weight:normal;display:flex;align-items:center;justify-content:center;border:2px solid var(--wizard-step-indicator-future-color);border-radius:50%;min-width:1.5rem;min-height:1.5rem;width:1.5rem;height:1.5rem;color:var(--wizard-step-indicator-future-color);line-height:var(--default-line-height);background-color:var(--light);box-sizing:content-box}.BaseWizardSteps-module__two-line-text-overflow--ujBaf{max-height:2rem;display:none;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding:.25rem 1rem 0}.BaseWizardSteps-module__label--ZsO5k{font-family:var(--font-family);font-size:.75rem;line-height:1rem;overflow:hidden;color:var(--default);text-align:center}.BaseWizardSteps-module__checkmark--m9Lc7{font-size:.875rem}@media only screen and (min-width: 30em){.BaseWizardSteps-module__two-line-text-overflow--ujBaf{display:unset}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wizard": "BaseWizardSteps-module__wizard--He5Km",
	"wizard-element": "BaseWizardSteps-module__wizard-element--LCwh5",
	"finished": "BaseWizardSteps-module__finished--zBBmi",
	"number-wrapper": "BaseWizardSteps-module__number-wrapper--Ssi_r",
	"number": "BaseWizardSteps-module__number--ovCZe",
	"label": "BaseWizardSteps-module__label--ZsO5k",
	"current": "BaseWizardSteps-module__current--sKhJ3",
	"two-line-text-overflow": "BaseWizardSteps-module__two-line-text-overflow--ujBaf",
	"future": "BaseWizardSteps-module__future--vn2cg",
	"clickable": "BaseWizardSteps-module__clickable--_pUvf",
	"checkmark": "BaseWizardSteps-module__checkmark--m9Lc7"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);