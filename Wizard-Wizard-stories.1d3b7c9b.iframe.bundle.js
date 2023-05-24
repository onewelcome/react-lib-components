"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2360],{

/***/ "./stories/Wizard/Wizard.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BasicWizard": function() { return /* binding */ BasicWizard; },
  "WizardInModal": function() { return /* binding */ WizardInModal; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Wizard_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/components/Wizard/wizardStateReducer.ts
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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
// EXTERNAL MODULE: ./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx + 1 modules
var BaseWizardSteps = __webpack_require__("./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx");
;// CONCATENATED MODULE: ./src/components/Wizard/WizardSteps/WizardSteps.tsx
var _excluded = ["onStepClick"];
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





var WizardStepsComponent = function WizardStepsComponent(_ref, ref) {
  var onStepClick = _ref.onStepClick,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = (0,react.useContext)(WizardStateContext),
    _useContext$state = _useContext.state,
    currentStepNo = _useContext$state.currentStepNo,
    mode = _useContext$state.mode,
    steps = _useContext$state.steps,
    dispatch = _useContext.dispatch;
  var onClick = function onClick(selectedStepNo) {
    onStepClick(currentStepNo, selectedStepNo) && dispatch(changeCurrentStepNo(selectedStepNo));
  };
  return /*#__PURE__*/react.createElement(BaseWizardSteps/* BaseWizardSteps */.j, _extends({}, rest, {
    ref: ref,
    onClick: onClick,
    steps: steps,
    currentStepNo: currentStepNo,
    futureStepsClickable: mode === "edit"
  }));
};
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
var WizardActions = function WizardActions(_ref) {
  var onCancel = _ref.onCancel,
    onNext = _ref.onNext,
    onPrevious = _ref.onPrevious,
    onSaveAndClose = _ref.onSaveAndClose,
    cancelButtonLabel = _ref.cancelButtonLabel,
    previousButtonLabel = _ref.previousButtonLabel,
    nextButtonLabel = _ref.nextButtonLabel,
    saveAndCloseButtonLabel = _ref.saveAndCloseButtonLabel;
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
    onNext(currentStepNo) && changeStepNo("forward");
  };
  var onPreviousWrapper = function onPreviousWrapper() {
    onPrevious === null || onPrevious === void 0 ? void 0 : onPrevious();
    changeStepNo("backward");
  };
  var onSaveAndCloseWrapper = function onSaveAndCloseWrapper() {
    onSaveAndClose(currentStepNo);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: "text",
    onClick: onCancel
  }, cancelButtonLabel), hasPreviousStep && /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: "outline",
    onClick: onPreviousWrapper
  }, previousButtonLabel), hasNextStep && /*#__PURE__*/react.createElement(Button/* Button */.z, {
    variant: mode === "edit" ? "outline" : "fill",
    onClick: onNextWrapper
  }, nextButtonLabel), isLastStepOrEditMode && /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: onSaveAndCloseWrapper
  }, saveAndCloseButtonLabel));
};
try {
    // @ts-ignore
    WizardActions.displayName = "WizardActions";
    // @ts-ignore
    WizardActions.__docgenInfo = { "description": "", "displayName": "WizardActions", "props": { "cancelButtonLabel": { "defaultValue": null, "description": "", "name": "cancelButtonLabel", "required": true, "type": { "name": "string" } }, "previousButtonLabel": { "defaultValue": null, "description": "", "name": "previousButtonLabel", "required": true, "type": { "name": "string" } }, "nextButtonLabel": { "defaultValue": null, "description": "", "name": "nextButtonLabel", "required": true, "type": { "name": "string" } }, "saveAndCloseButtonLabel": { "defaultValue": null, "description": "", "name": "saveAndCloseButtonLabel", "required": true, "type": { "name": "string" } }, "onCancel": { "defaultValue": null, "description": "", "name": "onCancel", "required": true, "type": { "name": "() => void" } }, "onNext": { "defaultValue": null, "description": "", "name": "onNext", "required": true, "type": { "name": "(currentStepNo: number) => boolean" } }, "onPrevious": { "defaultValue": null, "description": "", "name": "onPrevious", "required": false, "type": { "name": "(() => void)" } }, "onSaveAndClose": { "defaultValue": null, "description": "", "name": "onSaveAndClose", "required": true, "type": { "name": "(currentStepNo: number) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Wizard/WizardActions/WizardActions.tsx#WizardActions"] = { docgenInfo: WizardActions.__docgenInfo, name: "WizardActions", path: "src/components/Wizard/WizardActions/WizardActions.tsx#WizardActions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./stories/Wizard/Wizard.mdx
var Wizard_Wizard = __webpack_require__("./stories/Wizard/Wizard.mdx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModal.tsx + 1 modules
var BaseModal = __webpack_require__("./src/components/Notifications/BaseModal/BaseModal.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx + 1 modules
var BaseModalContent = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalContent/BaseModalContent.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx + 1 modules
var BaseModalActions = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx");
// EXTERNAL MODULE: ./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx + 1 modules
var BaseModalHeader = __webpack_require__("./src/components/Notifications/BaseModal/BaseModalHeader/BaseModalHeader.tsx");
;// CONCATENATED MODULE: ./stories/Wizard/Wizard.stories.tsx
function Wizard_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return Wizard_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Wizard_stories_typeof(obj);
}
var _BasicWizard$paramete, _BasicWizard$paramete2, _BasicWizard$paramete3, _WizardInModal$parame, _WizardInModal$parame2, _WizardInModal$parame3;
function Wizard_stories_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function Wizard_stories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? Wizard_stories_ownKeys(Object(source), !0).forEach(function (key) {
      Wizard_stories_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Wizard_stories_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function Wizard_stories_iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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
      page: Wizard_Wizard/* default */.Z
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
/* harmony default export */ var Wizard_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(args.initialStepNo),
    _useState2 = Wizard_stories_slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var onNext = function onNext(stepNo) {
    if (stepNo === 3) {
      return window.confirm("Does the validation passed?");
    }
    return true;
  };
  var onCancel = function onCancel() {
    alert("Cancel clicked");
  };
  var onSaveAndClose = function onSaveAndClose(stepNo) {
    alert("Save clicked");
  };
  return /*#__PURE__*/react.createElement(Wizard, Wizard_stories_extends({}, args, {
    onStepChange: function onStepChange(stepNo) {
      return setStep(stepNo);
    }
  }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(WizardSteps, {
    onStepClick: function onStepClick() {
      return true;
    }
  })), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", null, "Step ", step + 1, " content.")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(WizardActions, {
    cancelButtonLabel: "Cancel",
    previousButtonLabel: "Previous",
    nextButtonLabel: "Next",
    saveAndCloseButtonLabel: "Save & close",
    onNext: onNext,
    onCancel: onCancel,
    onSaveAndClose: onSaveAndClose
  })));
};
var BasicWizard = Template.bind({});
var WizardModalTemplate = function WizardModalTemplate() {
  var _useState3 = (0,react.useState)(false),
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
  var _useState11 = (0,react.useState)(false),
    _useState12 = Wizard_stories_slicedToArray(_useState11, 2),
    exampleInputError = _useState12[0],
    setExampleInputError = _useState12[1];
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
  var onNext = function onNext(stepNo) {
    if (stepNo === 1) {
      if (exampleInput.length === 0) {
        setExampleInputError(true);
        return false;
      }
      setExampleInputError(false);
    }
    return true;
  };
  var onSaveAndClose = function onSaveAndClose(stepNo) {
    alert("Wizard saved!");
    onClose();
  };
  var onClose = function onClose() {
    return setOpen(false);
  };
  var modalId = "modal-with-wizard";
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open modal"), /*#__PURE__*/react.createElement(BaseModal/* BaseModal */.I, {
    id: modalId,
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react.createElement(Wizard, {
    steps: steps,
    mode: "add",
    onStepChange: function onStepChange(stepNo) {
      return setStep(stepNo);
    }
  }, /*#__PURE__*/react.createElement(BaseModalHeader/* BaseModalHeader */.o, {
    id: "".concat(modalId, "-label"),
    title: "Example modal with wizard",
    onClose: onClose
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
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      margin: 0,
      paddingInline: 20
    }
  }, "This modal shows various options of form controls. It is not meant to be a realistic example of any of our forms.", /*#__PURE__*/react.createElement("br", null), " Clicking Save, Cancel or Close may bring you to a different screen than you came from."), step === 0 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", {
    id: "checkbox",
    type: "checkbox",
    style: {
      paddingBlock: 10,
      marginTop: 20
    },
    checked: checkboxChecked,
    onChange: onCheckboxChange
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "checkbox"
  }, "Checking this checkbox affects the activity of step 2")), step === 1 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", {
    style: {
      paddingBlock: 10,
      marginTop: 20,
      width: "100%",
      boxSizing: "border-box"
    },
    value: exampleInput,
    onChange: function onChange(event) {
      return setExampleInput(event.target.value);
    }
  }), /*#__PURE__*/react.createElement("p", {
    style: {
      margin: 0,
      paddingTop: 5,
      paddingInline: 20,
      fontSize: 11
    }
  }, exampleInputError ? /*#__PURE__*/react.createElement("span", {
    style: {
      color: "var(--error)"
    }
  }, "This field is required") : "Helper text for this text field. Description should be short and not repeat the label.")), step === 2 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("input", {
    style: {
      paddingBlock: 10,
      marginTop: 20,
      width: "100%",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/react.createElement("p", {
    style: {
      margin: 0,
      paddingTop: 5,
      paddingInline: 20,
      fontSize: 11
    }
  }, "Helper text for this text field. Description should be short and not repeat the label.")))), /*#__PURE__*/react.createElement(BaseModalActions/* BaseModalActions */.u, null, /*#__PURE__*/react.createElement(WizardActions, {
    cancelButtonLabel: "Cancel",
    previousButtonLabel: "Previous",
    nextButtonLabel: "Next",
    saveAndCloseButtonLabel: "Save & close",
    onNext: onNext,
    onCancel: onClose,
    onSaveAndClose: onSaveAndClose
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
      originalSource: "args => {\n  const [step, setStep] = useState(args.initialStepNo);\n  const onNext = (stepNo: number) => {\n    if (stepNo === 3) {\n      return window.confirm(\"Does the validation passed?\");\n    }\n    return true;\n  };\n  const onCancel = () => {\n    alert(\"Cancel clicked\");\n  };\n  const onSaveAndClose = (stepNo: number) => {\n    alert(\"Save clicked\");\n  };\n  return <Wizard {...args} onStepChange={(stepNo: number) => setStep(stepNo)}>\n      <div>\n        <WizardSteps onStepClick={() => true} />\n      </div>\n      <div>\n        <p>Step {step! + 1} content.</p>\n      </div>\n      <div>\n        <WizardActions cancelButtonLabel=\"Cancel\" previousButtonLabel=\"Previous\" nextButtonLabel=\"Next\" saveAndCloseButtonLabel=\"Save & close\" onNext={onNext} onCancel={onCancel} onSaveAndClose={onSaveAndClose} />\n      </div>\n    </Wizard>;\n}"
    }, (_BasicWizard$paramete2 = BasicWizard.parameters) === null || _BasicWizard$paramete2 === void 0 ? void 0 : (_BasicWizard$paramete3 = _BasicWizard$paramete2.docs) === null || _BasicWizard$paramete3 === void 0 ? void 0 : _BasicWizard$paramete3.source)
  })
});
WizardInModal.parameters = Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, WizardInModal.parameters), {}, {
  docs: Wizard_stories_objectSpread(Wizard_stories_objectSpread({}, (_WizardInModal$parame = WizardInModal.parameters) === null || _WizardInModal$parame === void 0 ? void 0 : _WizardInModal$parame.docs), {}, {
    source: Wizard_stories_objectSpread({
      originalSource: "() => {\n  const [open, setOpen] = useState(false);\n  const [step, setStep] = useState(0);\n  const [checkboxChecked, setCheckboxChecked] = useState(false);\n  const [exampleInput, setExampleInput] = useState(\"\");\n  const [exampleInputError, setExampleInputError] = useState(false);\n  const [steps, setSteps] = useState(([{\n    label: \"Step 1\"\n  }, {\n    label: \"Step 2\"\n  }, {\n    label: \"Step 3\"\n  }] as Step[]));\n  const onCheckboxChange = () => {\n    setCheckboxChecked(!checkboxChecked);\n    const newSteps = [...steps];\n    newSteps[1] = {\n      ...newSteps[1],\n      disabled: !checkboxChecked\n    };\n    setSteps(newSteps);\n  };\n  const onNext = (stepNo: number) => {\n    if (stepNo === 1) {\n      if (exampleInput.length === 0) {\n        setExampleInputError(true);\n        return false;\n      }\n      setExampleInputError(false);\n    }\n    return true;\n  };\n  const onSaveAndClose = (stepNo: number) => {\n    alert(\"Wizard saved!\");\n    onClose();\n  };\n  const onClose = () => setOpen(false);\n  const modalId = \"modal-with-wizard\";\n  return <Fragment>\n      <Button onClick={() => setOpen(true)}>Open modal</Button>\n      <Modal id={modalId} open={open} onClose={onClose}>\n        <Wizard steps={steps} mode=\"add\" onStepChange={(stepNo: number) => setStep(stepNo)}>\n          <ModalHeader id={`${modalId}-label`} title=\"Example modal with wizard\" onClose={onClose}>\n            <WizardSteps style={{\n            paddingBottom: 0\n          }} onStepClick={() => true} />\n          </ModalHeader>\n          <ModalContent id={`${modalId}-description`}>\n            <form id=\"modalForm\">\n              <p style={{\n              margin: 0,\n              paddingInline: 20\n            }}>\n                This modal shows various options of form controls. It is not meant to be a realistic\n                example of any of our forms.\n                <br /> Clicking Save, Cancel or Close may bring you to a different screen than you\n                came from.\n              </p>\n              {step === 0 && <Fragment>\n                  <input id=\"checkbox\" type=\"checkbox\" style={{\n                paddingBlock: 10,\n                marginTop: 20\n              }} checked={checkboxChecked} onChange={onCheckboxChange}></input>\n                  <label htmlFor=\"checkbox\">\n                    Checking this checkbox affects the activity of step 2\n                  </label>\n                </Fragment>}\n              {step === 1 && <Fragment>\n                  <input style={{\n                paddingBlock: 10,\n                marginTop: 20,\n                width: \"100%\",\n                boxSizing: \"border-box\"\n              }} value={exampleInput} onChange={event => setExampleInput(event.target.value)}></input>\n                  <p style={{\n                margin: 0,\n                paddingTop: 5,\n                paddingInline: 20,\n                fontSize: 11\n              }}>\n                    {exampleInputError ? <span style={{\n                  color: \"var(--error)\"\n                }}>This field is required</span> : \"Helper text for this text field. Description should be short and not repeat the label.\"}\n                  </p>\n                </Fragment>}\n              {step === 2 && <Fragment>\n                  <input style={{\n                paddingBlock: 10,\n                marginTop: 20,\n                width: \"100%\",\n                boxSizing: \"border-box\"\n              }}></input>\n                  <p style={{\n                margin: 0,\n                paddingTop: 5,\n                paddingInline: 20,\n                fontSize: 11\n              }}>\n                    Helper text for this text field. Description should be short and not repeat the\n                    label.\n                  </p>\n                </Fragment>}\n            </form>\n          </ModalContent>\n          <ModalActions>\n            <WizardActions cancelButtonLabel=\"Cancel\" previousButtonLabel=\"Previous\" nextButtonLabel=\"Next\" saveAndCloseButtonLabel=\"Save & close\" onNext={onNext} onCancel={onClose} onSaveAndClose={onSaveAndClose} />\n          </ModalActions>\n        </Wizard>\n      </Modal>\n    </Fragment>;\n}"
    }, (_WizardInModal$parame2 = WizardInModal.parameters) === null || _WizardInModal$parame2 === void 0 ? void 0 : (_WizardInModal$parame3 = _WizardInModal$parame2.docs) === null || _WizardInModal$parame3 === void 0 ? void 0 : _WizardInModal$parame3.source)
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

/***/ "./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ BaseModalActions; }
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




       /* harmony default export */ var BaseModalActions_BaseModalActions_module = (BaseModalActions_module/* default */.Z && BaseModalActions_module/* default.locals */.Z.locals ? BaseModalActions_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/BaseModal/BaseModalActions/BaseModalActions.tsx
var _excluded = ["children", "className"];
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
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(BaseModalActions_BaseModalActions_module.actions, " ").concat(className)
  }), children);
};
var BaseModalActions = /*#__PURE__*/react.forwardRef(BaseModalActionsComponent);
try {
    // @ts-ignore
    BaseModalActions.displayName = "BaseModalActions";
    // @ts-ignore
    BaseModalActions.__docgenInfo = { "description": "", "displayName": "BaseModalActions", "props": {} };
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
  "o": function() { return /* binding */ BaseModalHeader; }
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




       /* harmony default export */ var BaseModalHeader_BaseModalHeader_module = (BaseModalHeader_module/* default */.Z && BaseModalHeader_module/* default.locals */.Z.locals ? BaseModalHeader_module/* default.locals */.Z.locals : undefined);

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
    className: BaseModalHeader_BaseModalHeader_module.header
  }), /*#__PURE__*/react.createElement("div", {
    className: BaseModalHeader_BaseModalHeader_module.headline
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    id: id,
    className: BaseModalHeader_BaseModalHeader_module.title,
    tag: "h1",
    variant: "h4"
  }, title), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    onClick: onClose,
    className: BaseModalHeader_BaseModalHeader_module.closeBtn,
    title: "close modal"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.Times */.P.Times
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

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Typography; },
  "p": function() { return /* binding */ validVariants; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.Z, options);




       /* harmony default export */ var Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default.locals */.Z.locals ? Typography_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
var _excluded = ["children", "variant", "tag", "style", "spacing", "className"];
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




var validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];
var TypographyComponent = function TypographyComponent(_ref, ref) {
  var children = _ref.children,
    variant = _ref.variant,
    tag = _ref.tag,
    style = _ref.style,
    spacing = _ref.spacing,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!validVariants.includes(variant)) {
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
  }
  var styleWithSpacing = (0,useSpacing/* useSpacing */.N)(spacing, style);
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
  var TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: styleWithSpacing,
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
  }), children);
};
var Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useSpacing; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
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
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
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

var defaultFactor = 0.25;
var defaultUnit = "rem";
var spacingNumberRegex = /(\d+\.?\d*)+/g;
var useSpacing = function useSpacing(spacingProps, style) {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce(function (prev, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        spacing = _ref2[0],
        multiplier = _ref2[1];
      var matches = String(multiplier).matchAll(spacingNumberRegex);
      var cssSpacingValue = Array.from(matches).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          multiplierValue = _ref4[0];
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, spacing, cssSpacingValue));
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalActions-module__actions--A4L3O{margin:1.875rem 1.25rem 1.875rem 1.25rem;display:flex;justify-content:flex-end}.BaseModalActions-module__actions--A4L3O>*{margin-left:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"actions": "BaseModalActions-module__actions--A4L3O"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseModalHeader-module__header--UVtiQ{min-width:80px;padding:1rem 1.25rem;background-color:var(--modal-header-background-color);border-top-left-radius:8px;border-top-right-radius:8px}.BaseModalHeader-module__headline--q6eEZ{display:flex;align-items:center}.BaseModalHeader-module__title--FjtRT{flex:1;margin:0 0 0 1.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "BaseModalHeader-module__header--UVtiQ",
	"headline": "BaseModalHeader-module__headline--q6eEZ",
	"title": "BaseModalHeader-module__title--FjtRT"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"typography_style_h1": "Typography-module__typography_style_h1--QRbCJ",
	"typography_style_h2": "Typography-module__typography_style_h2--gst_1",
	"typography_style_h3": "Typography-module__typography_style_h3--OMuiN",
	"typography_style_h4": "Typography-module__typography_style_h4--AK8ry",
	"typography_style_body": "Typography-module__typography_style_body--RZ14O",
	"typography_style_body-bold": "Typography-module__typography_style_body-bold--yrfzC",
	"typography_style_sub-text": "Typography-module__typography_style_sub-text--J284m",
	"typography_style_code": "Typography-module__typography_style_code--aL5hm"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.readyclasses-module__sr-only--AaB3O{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.readyclasses-module__hidden--kciBr{display:none}.readyclasses-module__slide-in--_Xh2C{animation:readyclasses-module__slide-in--_Xh2C .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-in--_Xh2C{animation-duration:.1ms}}.readyclasses-module__slide-out--fOqOy{animation:readyclasses-module__slide-out--fOqOy .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-out--fOqOy{animation-duration:.1ms}}@keyframes readyclasses-module__slide-in--_Xh2C{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes readyclasses-module__slide-out--fOqOy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "readyclasses-module__sr-only--AaB3O",
	"hidden": "readyclasses-module__hidden--kciBr",
	"slide-in": "readyclasses-module__slide-in--_Xh2C",
	"slide-out": "readyclasses-module__slide-out--fOqOy"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/readyclasses.module.scss":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["Z"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ })

}]);