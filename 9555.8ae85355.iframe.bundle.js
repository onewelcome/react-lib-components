"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9555],{

/***/ "./stories/Wizard/Wizard.mdx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");



/*@jsxRuntime automatic @jsxImportSource react*/




function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .ah)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      h2: "h2",
      pre: "pre",
      h3: "h3",
      a: "a",
      ul: "ul",
      li: "li",
      h1: "h1"
    }, (0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .ah)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .Dx, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .QE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Wizard"
        }), " component is used to give the user some indication of how far they are in a process. This could, for example, be a form with many different steps."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["To configure the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Wizard"
        }), " correctly, there are a few different components you will use."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
        id: "wizard-",
        children: "<Wizard />"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["This is the main wrapping component you will use to configure your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Wizard"
        }), ". It has the following props:"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          className: "language-tsx",
          children: "steps: Step[];\nmode: \"add\" | \"edit\";\ninitialStepNo?: number;\nonStepChange: (stepNo: number) => void;\nchildren: React.ReactNode;\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "steps",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "steps"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["As you can see, the steps and their labels will be configured through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "steps"
        }), " prop. This will be an array of the following object:"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          className: "language-ts",
          children: "{\n  label: string;\n  disabled?: boolean;\n}\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Each step will have a label and can be set to a disabled state. The number on the step is generated automatically for you."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "mode",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "mode"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "mode"
        }), " prop will control whether your users can jump ahead to steps by clicking on them. If your user has previously entered all sorts of\ninformation in all the forms in the different steps, you can set the mode to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "edit"
        }), " and they can easily jump to a step instead of\nhaving to click the Next button many times."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["On the other hand if you want your users to follow through the entire step process you've created you can set the mode to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "add"
        }), ". This\nwill force them to use the next button, and you'll be able to validate the contents of the steps and guide them towards completion."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "initialstepno",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "initialStepNo"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["If you'd like your users to start on a different step than the first one, you can fill this prop with a number. Remember: the index starts at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "0"
        }), ". So step 1 in\nyour ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Wizard"
        }), " component will equal to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "initialStepNo"
        }), " of 0 and step 6 will equal to an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "initialStepNo"
        }), " of 5. You could use this if your user closes\nin the middle of your Wizard. You can save the step they're at and re-open at that same step whenever they open it again."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "onstepchange",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onStepChange"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "This function will allow you to listen to the event that the user goes to the next or previous step. This way, you can create your own\nstate variable that keeps track of which step the user is on, and set it to the correct step you get as the first, and only, parameter."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "children",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "children"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["Here is where you will render anything that you want to show depending on the step that is active. You can simply use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "&&"
        }), " sign to conditionally render a certain piece of JSX."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["An example is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "#examples",
          children: "found below"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
        id: "wizardsteps-",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<WizardSteps />"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["You can determine where exactly you want the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "steps"
        }), " you've passed to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Wizard"
        }), " component are being rendered. Simply put this component anywhere within your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Wizard />"
        }), " component. This component takes\na single prop."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onStepClick: (currentStepNo: number, selectedStepNo: number) => boolean;\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["Whenever the user clicks on one of the steps, this function will fire with the step they came from, and the step they're going to. In reality you'll not need this function as the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onStepChange"
        }), " prop on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Wizard />"
        }), " component should be enough for you. If, for whatever reason, you need the step they came from. Use this prop instead."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
        id: "wizardactions-",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<WizardActions />"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Wizard actions allow you to render different buttons based on what step the user is on. The following buttons will be rendered:"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
          children: "Cancel (always available)"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
          children: "Previous (available if there's a previous step to go to)"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
          children: "Next (available if there's a next step to go to)"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
          children: "Save & Close (available on the last step)"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "WizardActions"
        }), " component will accept the following props:"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          className: "language-tsx",
          children: "cancelButtonLabel: string;\npreviousButtonLabel: string;\nnextButtonLabel: string;\nsaveAndCloseButtonLabel: string;\nonCancel: () => void;\nonNext: (currentStepNo: number) => boolean;\nonPrevious?: () => void;\nonSaveAndClose: (currentStepNo: number) => void;\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "cancelbuttonlabel",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "cancelButtonLabel"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "The label for the Cancel button."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "previousbuttonlabel",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "previousButtonLabel"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "The label for the Previous button."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "nextbuttonlabel",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "nextButtonLabel"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "The label for the Next button."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "saveandclosebuttonlabel",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "saveAndCloseButtonLabel"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "The label for the Save & Close button."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "oncancel",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onCancel"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["A function will be executed as soon as the user clicks the Cancel button. You can use this to, for example, close the modal that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Wizard"
        }), " is in."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "onnext",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onNext"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "A function will be executed when the user clicks on the Next button. Use this to update the active step state you've created to go to the next step."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "onprevious",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onPrevious"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "A function will be executed when the user clicks on the Previous button. Use this to update the active step state you've created to go to the previous step."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
        id: "onsaveandclose",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onSaveAndClose"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "A function will be executed when the user clicks the Save & Close button. Gets the current step number as an argument."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .Ed, {
        story: _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .PRIMARY_STORY */ .Uh
      })]
    });
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (MDXContent);


/***/ }),

/***/ "./src/components/Wizard/BaseWizardSteps/BaseWizardSteps.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": function() { return /* binding */ BaseWizardSteps; }
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




       /* harmony default export */ var BaseWizardSteps_BaseWizardSteps_module = (BaseWizardSteps_module/* default */.Z && BaseWizardSteps_module/* default.locals */.Z.locals ? BaseWizardSteps_module/* default.locals */.Z.locals : undefined);

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
        className: BaseWizardSteps_BaseWizardSteps_module.checkmark,
        icon: Icon/* Icons.Checkmark */.P.Checkmark
      });
    } else {
      return /*#__PURE__*/react.createElement(react.Fragment, null, stepNumberString);
    }
  };
  var generatedSteps = steps.map(function (step, index) {
    var stepState = getStepState(index);
    var disabledStyleClassName = step.disabled ? BaseWizardSteps_BaseWizardSteps_module.disabled : "";
    var clickableClassName = futureStepsClickable ? BaseWizardSteps_BaseWizardSteps_module.clickable : "";
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
      className: BaseWizardSteps_BaseWizardSteps_module.number
    }, getStepContent(stepState, index, step.disabled))), /*#__PURE__*/react.createElement("div", {
      className: BaseWizardSteps_BaseWizardSteps_module["two-line-text-overflow"]
    }, /*#__PURE__*/react.createElement("span", {
      className: BaseWizardSteps_BaseWizardSteps_module.label
    }, step.label)));
  });
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: BaseWizardSteps_BaseWizardSteps_module.wizard
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
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



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