(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[539],{

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

/***/ "./src/components/Tooltip/Tooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss
var Tooltip_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss");
;// CONCATENATED MODULE: ./src/components/Tooltip/Tooltip.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tooltip_module/* default */.A, options);




       /* harmony default export */ const Tooltip_Tooltip_module = (Tooltip_module/* default */.A && Tooltip_module/* default */.A.locals ? Tooltip_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/hooks/usePosition.ts
var usePosition = __webpack_require__("./src/hooks/usePosition.ts");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
;// CONCATENATED MODULE: ./src/components/Tooltip/Tooltip.tsx
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








const locations = {
  left: {
    placement: {
      horizontal: "left",
      vertical: "center"
    },
    offset: {
      left: 0,
      right: 12,
      top: 0,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "center"
    }
  },
  leftEnd: {
    placement: {
      horizontal: "left",
      vertical: "top"
    },
    offset: {
      left: 0,
      right: 12,
      top: -12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "top"
    }
  },
  leftStart: {
    placement: {
      horizontal: "left",
      vertical: "bottom"
    },
    offset: {
      left: 0,
      right: 12,
      top: 0,
      bottom: -12
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom"
    }
  },
  right: {
    placement: {
      horizontal: "right",
      vertical: "center"
    },
    offset: {
      left: 12,
      right: 0,
      top: 0,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "center"
    }
  },
  rightEnd: {
    placement: {
      horizontal: "right",
      vertical: "top"
    },
    offset: {
      left: 12,
      right: 0,
      top: -12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "top"
    }
  },
  rightStart: {
    placement: {
      horizontal: "right",
      vertical: "bottom"
    },
    offset: {
      left: 12,
      right: 0,
      top: 0,
      bottom: -12
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom"
    }
  },
  top: {
    placement: {
      horizontal: "center",
      vertical: "top"
    },
    offset: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 12
    },
    transformOrigin: {
      horizontal: "center",
      vertical: "bottom"
    }
  },
  topEnd: {
    placement: {
      horizontal: "left",
      vertical: "top"
    },
    offset: {
      left: -12,
      right: 0,
      top: 0,
      bottom: 12
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "bottom"
    }
  },
  topStart: {
    placement: {
      horizontal: "right",
      vertical: "top"
    },
    offset: {
      left: 0,
      right: -12,
      top: 0,
      bottom: 12
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "bottom"
    }
  },
  bottom: {
    placement: {
      horizontal: "center",
      vertical: "bottom"
    },
    offset: {
      left: 0,
      right: 0,
      top: 12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "center",
      vertical: "top"
    }
  },
  bottomEnd: {
    placement: {
      horizontal: "left",
      vertical: "bottom"
    },
    offset: {
      left: -12,
      right: 0,
      top: 12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "left",
      vertical: "top"
    }
  },
  bottomStart: {
    placement: {
      horizontal: "right",
      vertical: "bottom"
    },
    offset: {
      left: 0,
      right: -12,
      top: 12,
      bottom: 0
    },
    transformOrigin: {
      horizontal: "right",
      vertical: "top"
    }
  }
};
const TooltipComponent = (_ref, ref) => {
  let {
    title,
    children,
    className,
    domRoot,
    label,
    location = "right",
    position = "center",
    color = "black",
    ...rest
  } = _ref;
  const [identifier] = (0,react.useState)((0,helper/* generateID */.ni)());
  const [visible, setVisible] = (0,react.useState)(false);
  const wrappingDivRef = ref || /*#__PURE__*/(0,react.createRef)();
  const {
    root
  } = (0,useGetDomRoot/* useGetDomRoot */.i)(domRoot, wrappingDivRef);
  const relativeElement = (0,react.useRef)(null);
  const elementToBePositioned = (0,react.useRef)(null);
  const determinedLocation = (0,react.useMemo)(() => {
    if (position === "center") {
      return location;
    }
    return "".concat(location).concat(position.charAt(0).toUpperCase() + position.slice(1));
  }, [location, position]);
  const {
    top,
    bottom,
    right,
    left,
    calculatePosition
  } = (0,usePosition/* usePosition */.Jl)({
    relativeElement: relativeElement,
    elementToBePositioned: elementToBePositioned,
    placement: locations[determinedLocation].placement,
    offset: locations[determinedLocation].offset,
    transformOrigin: locations[determinedLocation].transformOrigin
  });
  (0,react.useEffect)(() => {
    if (!visible) return;
    const escapePressHandler = event => {
      if (event.key === "Escape") {
        setVisible(false);
      }
    };
    document.addEventListener("keyup", escapePressHandler);
    return () => {
      document.removeEventListener("keyup", escapePressHandler);
    };
  }, [visible]);
  (0,react.useLayoutEffect)(() => {
    calculatePosition();
  }, [visible]);
  const renderChildren = () => {
    if ( /*#__PURE__*/react.isValidElement(label)) {
      return /*#__PURE__*/react.cloneElement(label, {
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
        "aria-describedby": identifier,
        tabIndex: 0,
        className: Tooltip_Tooltip_module["label"]
      });
    }
    return /*#__PURE__*/react.createElement("span", {
      className: Tooltip_Tooltip_module["label"],
      tabIndex: 0,
      onFocus: () => setVisible(true),
      onBlur: () => setVisible(false),
      "aria-describedby": identifier
    }, label);
  };
  const tooltipClasses = "".concat(Tooltip_Tooltip_module["tooltip"], " ").concat(Tooltip_Tooltip_module[color], " ").concat(visible ? Tooltip_Tooltip_module["visible"] : "", " ").concat(Tooltip_Tooltip_module[determinedLocation.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase()]);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: wrappingDivRef,
    className: "".concat(Tooltip_Tooltip_module.wrapper, " ").concat(className !== null && className !== void 0 ? className : "")
  }), renderChildren(), /*#__PURE__*/react.createElement("div", {
    className: "".concat(Tooltip_Tooltip_module["tooltip-wrapper"])
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    ref: relativeElement,
    tag: "div",
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    icon: Icon/* Icons */.F.InfoCircle,
    className: Tooltip_Tooltip_module.icon
  }), /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement("div", {
    ref: elementToBePositioned,
    style: {
      ...rest.style,
      top: top,
      left: left,
      right: right,
      bottom: bottom
    },
    "aria-hidden": !visible,
    id: identifier,
    className: tooltipClasses
  }, title && /*#__PURE__*/react.createElement("span", {
    className: Tooltip_Tooltip_module["tooltip-title"]
  }, title), children), root)));
};
const Tooltip = /*#__PURE__*/react.forwardRef(TooltipComponent);
try {
    // @ts-ignore
    Tooltip.displayName = "Tooltip";
    // @ts-ignore
    Tooltip.__docgenInfo = { "description": "", "displayName": "Tooltip", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "ReactNode" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": { value: "black" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"black\"" }, { "value": "\"blue\"" }] } }, "location": { "defaultValue": { value: "right" }, "description": "", "name": "location", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }, { "value": "\"top\"" }, { "value": "\"bottom\"" }] } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "position": { "defaultValue": { value: "center" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"start\"" }, { "value": "\"end\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"] = { docgenInfo: Tooltip.__docgenInfo, name: "Tooltip", path: "src/components/Tooltip/Tooltip.tsx#Tooltip" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eo: () => (/* binding */ isJsonString),
/* harmony export */   GK: () => (/* binding */ areArraysDifferent),
/* harmony export */   J9: () => (/* binding */ filterProps),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   ir: () => (/* binding */ remToPx),
/* harmony export */   ni: () => (/* binding */ generateID)
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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

const generateID = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  let stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
const filterProps = function (props, regexPattern) {
  let returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce((acc, key) => {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(_ref => {
      let [key] = _ref;
      return !regexPattern.test(key);
    }).reduce((prevObj, currKeyValPair) => ({
      ...prevObj,
      [currKeyValPair[0]]: currKeyValPair[1]
    }), {});
  }
};
const debounce = (fn, delay) => {
  let timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
const throttle = (fn, delay) => {
  let lastTime = 0;
  return function () {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
const isEqual = (x, y) => {
  const typesCoincide = x && y && typeof x === "object" && typeof y === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => isEqual(x[key], y[key])) : x === y;
};
const areArraysDifferent = (arr1, arr2, key) => {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    const firstFilteredArray = arr1.filter(arr1Item => arr2.some(arr2Item => !isEqual(arr1Item[key], arr2Item[key])));
    const secondFilteredArray = arr2.filter(arr2Item => arr1.some(arr1Item => !isEqual(arr1Item[key], arr2Item[key])));
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
const remToPx = rem => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
const deepMerge = (obj1, obj2) => {
  if (!obj2) return obj1;
  let result = {
    ...obj1
  };
  for (let key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null && Object.prototype.hasOwnProperty.call(obj1, key) && !Array.isArray(obj2[key])) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    escapeRegExp.displayName = "escapeRegExp";
    // @ts-ignore
    escapeRegExp.__docgenInfo = { "description": "", "displayName": "escapeRegExp", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#escapeRegExp"] = { docgenInfo: escapeRegExp.__docgenInfo, name: "escapeRegExp", path: "src/util/helper.tsx#escapeRegExp" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./stories/utils/useStoryCentring.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useStoryCentring)
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


const useStoryCentring = () => {
  const isStory = () => window.location.search.includes("viewMode=story");
  const centerStory = () => {
    /** In order to show off the positioning for the tooltip we need to center everything in the middle of the screen. */
    const root = document.querySelector("html");
    if (root && isStory()) {
      root.style.height = "100%";
      root.style.width = "100%";
      root.style.display = "flex";
      root.style.justifyContent = "center";
      root.style.alignItems = "center";
      root.style.overflow = "hidden";
    }
  };
  const resetStory = () => {
    /** We want to reset story positioning when we are unmounting story */
    const root = document.querySelector("html");
    if (root) {
      root.style.height = "";
      root.style.width = "";
      root.style.display = "";
      root.style.justifyContent = "";
      root.style.alignItems = "";
      root.style.overflow = "";
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    centerStory();
    return () => {
      resetStory();
    };
  }, []);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.module.scss":
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
 */.Tooltip-module__sr-only--RRKCe{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Tooltip-module__hidden--S1mG5{display:none}.Tooltip-module__slide-in--ia8fD{animation:Tooltip-module__slide-in--ia8fD .5s forwards}@media(prefers-reduced-motion: reduce){.Tooltip-module__slide-in--ia8fD{animation-duration:.1ms}}.Tooltip-module__slide-out--Jj9Iw{animation:Tooltip-module__slide-out--Jj9Iw .5s forwards}@media(prefers-reduced-motion: reduce){.Tooltip-module__slide-out--Jj9Iw{animation-duration:.1ms}}@keyframes Tooltip-module__slide-in--ia8fD{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Tooltip-module__slide-out--Jj9Iw{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Tooltip-module__wrapper--rZQQf{display:flex;align-items:center}.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8{margin-left:.5rem;color:var(--greyed-out);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8{transition-duration:.1ms}}.Tooltip-module__tooltip-wrapper--R0gaI .Tooltip-module__icon--oy4M8:hover{color:var(--default)}.Tooltip-module__tooltip--oh0fm{position:fixed;font-size:.75rem;line-height:1rem;border-radius:.125rem;padding:.75rem;color:var(--light);max-width:20.625rem;opacity:0;transform:scale(0);transform-origin:center center;pointer-events:none;box-shadow:0 .0625rem .3125rem 0 rgba(1,5,50,.3);word-break:break-word;transition-property:opacity,transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Tooltip-module__tooltip--oh0fm{transition-duration:.1ms}}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh{background-color:var(--tooltip-background-color)}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__top--NM1dh:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--tooltip-background-color);position:absolute;left:50%;right:initial;transform:translateX(-50%);top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__top-start--LW4x3:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--tooltip-background-color);position:absolute;right:.75rem;left:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__top-end--i7g7Q:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--tooltip-background-color);position:absolute;left:1rem;right:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__bottom--_z0N4:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--tooltip-background-color);position:absolute;left:50%;right:initial;transform:translateX(-50%);bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__bottom-start--oRJUH:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--tooltip-background-color);position:absolute;right:.75rem;left:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__bottom-end--qfMK5:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--tooltip-background-color);position:absolute;left:1rem;right:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__left--UcBDU:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--tooltip-background-color);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__left-start--maL9p:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--tooltip-background-color);position:absolute;bottom:.9375rem;top:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__left-end--ttTlp:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--tooltip-background-color);position:absolute;top:.875rem;bottom:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__right--jVRgM:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--tooltip-background-color);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__right-start--rS6Tz:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--tooltip-background-color);position:absolute;bottom:.9375rem;top:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__black--RmJwh.Tooltip-module__right-end--CWacb:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--tooltip-background-color);position:absolute;top:.875rem;bottom:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag{background-color:var(--color-blue-grey500)}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__top--NM1dh:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--color-blue-grey500);position:absolute;left:50%;right:initial;transform:translateX(-50%);top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__top-start--LW4x3:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--color-blue-grey500);position:absolute;right:.75rem;left:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__top-end--i7g7Q:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-top-color:var(--color-blue-grey500);position:absolute;left:1rem;right:initial;top:100%;border-bottom-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__bottom--_z0N4:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--color-blue-grey500);position:absolute;left:50%;right:initial;transform:translateX(-50%);bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__bottom-start--oRJUH:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--color-blue-grey500);position:absolute;right:.75rem;left:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__bottom-end--qfMK5:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-bottom-color:var(--color-blue-grey500);position:absolute;left:1rem;right:initial;bottom:100%;border-top-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__left--UcBDU:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--color-blue-grey500);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__left-start--maL9p:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--color-blue-grey500);position:absolute;bottom:.9375rem;top:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__left-end--ttTlp:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-left-color:var(--color-blue-grey500);position:absolute;top:.875rem;bottom:initial;left:100%;border-right-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__right--jVRgM:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--color-blue-grey500);position:absolute;top:50%;bottom:initial;transform:translateY(-50%);right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__right-start--rS6Tz:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--color-blue-grey500);position:absolute;bottom:.9375rem;top:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm.Tooltip-module__blue--xEaag.Tooltip-module__right-end--CWacb:after{width:0;height:0;border-style:solid;border-width:.25rem;border-color:rgba(0,0,0,0);border-right-color:var(--color-blue-grey500);position:absolute;top:.875rem;bottom:initial;right:100%;border-left-width:0}.Tooltip-module__tooltip--oh0fm:after{content:""}.Tooltip-module__tooltip--oh0fm.Tooltip-module__visible--qAQt6{opacity:1;transform:scale(1)}.Tooltip-module__label--o5K01:focus-visible{outline:.0313rem dashed var(--color-primary)}.Tooltip-module__tooltip-title--Nu2DQ{font-weight:500;font-size:.875rem;line-height:1.25rem;display:block;margin-bottom:.25rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Tooltip-module__sr-only--RRKCe`,
	"hidden": `Tooltip-module__hidden--S1mG5`,
	"slide-in": `Tooltip-module__slide-in--ia8fD`,
	"slide-out": `Tooltip-module__slide-out--Jj9Iw`,
	"wrapper": `Tooltip-module__wrapper--rZQQf`,
	"tooltip-wrapper": `Tooltip-module__tooltip-wrapper--R0gaI`,
	"icon": `Tooltip-module__icon--oy4M8`,
	"tooltip": `Tooltip-module__tooltip--oh0fm`,
	"black": `Tooltip-module__black--RmJwh`,
	"top": `Tooltip-module__top--NM1dh`,
	"top-start": `Tooltip-module__top-start--LW4x3`,
	"top-end": `Tooltip-module__top-end--i7g7Q`,
	"bottom": `Tooltip-module__bottom--_z0N4`,
	"bottom-start": `Tooltip-module__bottom-start--oRJUH`,
	"bottom-end": `Tooltip-module__bottom-end--qfMK5`,
	"left": `Tooltip-module__left--UcBDU`,
	"left-start": `Tooltip-module__left-start--maL9p`,
	"left-end": `Tooltip-module__left-end--ttTlp`,
	"right": `Tooltip-module__right--jVRgM`,
	"right-start": `Tooltip-module__right-start--rS6Tz`,
	"right-end": `Tooltip-module__right-end--CWacb`,
	"blue": `Tooltip-module__blue--xEaag`,
	"visible": `Tooltip-module__visible--qAQt6`,
	"label": `Tooltip-module__label--o5K01`,
	"tooltip-title": `Tooltip-module__tooltip-title--Nu2DQ`
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

/***/ })

}]);