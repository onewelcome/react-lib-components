"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1263],{

/***/ "./src/components/Popover/Popover.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/hooks/usePosition.ts + 1 modules
var usePosition = __webpack_require__("./src/hooks/usePosition.ts");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss
var Popover_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss");
;// CONCATENATED MODULE: ./src/components/Popover/Popover.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Popover_module/* default */.A, options);




       /* harmony default export */ const Popover_Popover_module = (Popover_module/* default */.A && Popover_module/* default */.A.locals ? Popover_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Popover/Popover.tsx
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




const PopoverComponent = (_ref, ref) => {
  let {
    children,
    className,
    show,
    placement,
    offset,
    debounceAmount,
    transformOrigin,
    anchorEl,
    onAnchorOutOfView,
    ...rest
  } = _ref;
  const [showPopover, setShowPopover] = (0,react.useState)(false);
  const elToBePositioned = (0,react.useRef)(null);
  const {
    top,
    left,
    right,
    bottom,
    calculatePosition,
    initialCalculationDone
  } = (0,usePosition/* usePosition */.Jl)({
    elementToBePositioned: elToBePositioned,
    relativeElement: anchorEl,
    offset: offset,
    placement: placement,
    transformOrigin: transformOrigin,
    debounceAmount: debounceAmount !== null && debounceAmount !== void 0 ? debounceAmount : undefined
  });
  const normalizePosition = value => {
    if (value === "initial") {
      return "initial";
    }
    if (isNaN(value)) {
      return 0;
    }
    return Number(value);
  };
  (0,react.useEffect)(() => {
    if (initialCalculationDone) {
      setShowPopover(!!show);
    }
  }, [show, initialCalculationDone]);
  (0,react.useEffect)(() => {
    if (!showPopover) {
      return;
    }
    window.addEventListener("resize", calculatePosition);
    window.addEventListener("scroll", calculatePosition);
    return () => {
      window.removeEventListener("resize", calculatePosition);
      window.removeEventListener("scroll", calculatePosition);
    };
  }, [showPopover]);
  (0,react.useEffect)(() => {
    calculatePosition();
  }, [showPopover]);
  (0,react.useEffect)(() => {
    const anchor = anchorEl === null || anchorEl === void 0 ? void 0 : anchorEl.current;
    if (anchor) {
      const anchorTop = anchor.getBoundingClientRect().top;
      const anchorBottom = anchor.getBoundingClientRect().bottom;
      const isAnchorOffscreen = showPopover && (Number(top) < 0 || Number(left) < 0 || Number(right) < 0 || Number(bottom) < 0 || anchorTop < 0 || anchorBottom > window.innerHeight);
      if (isAnchorOffscreen) {
        onAnchorOutOfView === null || onAnchorOutOfView === void 0 || onAnchorOutOfView();
      }
    }
  }, [top, left, right, bottom]);
  return /*#__PURE__*/react.createElement("div", _extends({
    ref: ref
  }, rest), /*#__PURE__*/react.createElement("div", {
    ref: elToBePositioned,
    className: "".concat(Popover_Popover_module.popover, " ").concat(className !== null && className !== void 0 ? className : "", " ").concat(showPopover ? Popover_Popover_module.show : ""),
    style: {
      top: normalizePosition(top),
      left: normalizePosition(left),
      right: normalizePosition(right),
      bottom: normalizePosition(bottom)
    }
  }, children));
};
const Popover = /*#__PURE__*/react.forwardRef(PopoverComponent);
try {
    // @ts-ignore
    Popover.displayName = "Popover";
    // @ts-ignore
    Popover.__docgenInfo = { "description": "", "displayName": "Popover", "props": { "placement": { "defaultValue": null, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "transformOrigin": { "defaultValue": null, "description": "", "name": "transformOrigin", "required": false, "type": { "name": "Placement" } }, "offset": { "defaultValue": null, "description": "", "name": "offset", "required": false, "type": { "name": "Offset" } }, "debounceAmount": { "defaultValue": null, "description": "", "name": "debounceAmount", "required": false, "type": { "name": "number" } }, "show": { "defaultValue": null, "description": "", "name": "show", "required": false, "type": { "name": "boolean" } }, "anchorEl": { "defaultValue": null, "description": "", "name": "anchorEl", "required": false, "type": { "name": "RefObject<HTMLOrSVGElement>" } }, "onAnchorOutOfView": { "defaultValue": null, "description": "", "name": "onAnchorOutOfView", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"] = { docgenInfo: Popover.__docgenInfo, name: "Popover", path: "src/components/Popover/Popover.tsx#Popover" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/usePosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xM: () => (/* binding */ horizontal),
  Jl: () => (/* binding */ usePosition),
  Vd: () => (/* binding */ vertical)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/hooks/useDebouncedCallback.tsx
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


const useDebouncedCallback = (callback, delay, dependencies) => {
  const timeout = react.useRef();
  const comboDeps = dependencies ? [callback, delay, ...dependencies] : [callback, delay];
  return react.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeout.current != null) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, comboDeps);
};
;// CONCATENATED MODULE: ./src/hooks/usePosition.ts
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



let horizontal = /*#__PURE__*/function (horizontal) {
  horizontal["LEFT"] = "left";
  horizontal["CENTER"] = "center";
  horizontal["CENTER_H"] = "centerh";
  horizontal["RIGHT"] = "right";
  return horizontal;
}({});
let vertical = /*#__PURE__*/function (vertical) {
  vertical["TOP"] = "top";
  vertical["CENTER"] = "center";
  vertical["CENTER_V"] = "centerv";
  vertical["BOTTOM"] = "bottom";
  return vertical;
}({});
const defaultConfigObject = {
  relativeElement: undefined,
  elementToBePositioned: undefined,
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  },
  placement: {
    horizontal: "left",
    vertical: "top"
  },
  offset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  debounceAmount: 20
};

/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain*/
const usePosition = function () {
  var _configObject$debounc;
  let providedConfigObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfigObject;
  const configObject = {
    ...defaultConfigObject,
    ...providedConfigObject
  };
  const [initialCalculationDone, setInitialCalculationDone] = (0,react.useState)(false);
  if (configObject.transformOrigin === undefined) {
    configObject.transformOrigin = defaultConfigObject.transformOrigin;
  }
  if (configObject.placement === undefined) {
    configObject.placement = defaultConfigObject.placement;
  }
  if (configObject.offset === undefined) {
    configObject.offset = defaultConfigObject.offset;
  }
  const [position, setPosition] = (0,react.useState)({
    left: 0,
    top: 0,
    right: "initial",
    bottom: "initial"
  });
  const _fixPossibleViewportOverflow = (value, transformOrigin, requestedReturnValue, elDimensions) => {
    let returnValue = value;
    if (transformOrigin[requestedReturnValue] === "left" && returnValue < 0 || transformOrigin[requestedReturnValue] === "top" && returnValue < 0 || transformOrigin[requestedReturnValue] === "center" && returnValue < 0 || transformOrigin[requestedReturnValue] === "bottom" && returnValue < 0) {
      returnValue = 0;
    }
    if (transformOrigin[requestedReturnValue] === "left" && returnValue > window.innerWidth - elDimensions.width || transformOrigin[requestedReturnValue] === "center" && requestedReturnValue === "horizontal" && returnValue > window.innerWidth - elDimensions.width) {
      returnValue = window.innerWidth - elDimensions.width;
    }
    if (transformOrigin[requestedReturnValue] === "top" && returnValue > window.innerHeight - elDimensions.height || transformOrigin[requestedReturnValue] === "center" && requestedReturnValue === "vertical" && returnValue > window.innerHeight - elDimensions.height) {
      returnValue = window.innerHeight - elDimensions.height;
    }
    if (transformOrigin[requestedReturnValue] === "right" && returnValue > window.innerWidth - elDimensions.width) {
      returnValue = window.innerWidth - elDimensions.width;
    }
    if (transformOrigin[requestedReturnValue] === "bottom" && returnValue > window.innerHeight - elDimensions.height) {
      returnValue = window.innerHeight - elDimensions.height;
    }
    return returnValue;
  };
  const _applyOffsetToPlacementValue = (value, requestedReturnValue, transformOrigin) => {
    var _configObject$offset, _configObject$offset2, _configObject$offset7, _configObject$offset8;
    let returnValue = value;
    if (requestedReturnValue === "horizontal" && ((_configObject$offset = configObject.offset) === null || _configObject$offset === void 0 ? void 0 : _configObject$offset.left) !== 0 || requestedReturnValue === "horizontal" && ((_configObject$offset2 = configObject.offset) === null || _configObject$offset2 === void 0 ? void 0 : _configObject$offset2.right) !== 0) {
      if (transformOrigin[requestedReturnValue] === "left" || transformOrigin[requestedReturnValue] === "center") {
        var _configObject$offset3, _configObject$offset4;
        returnValue += (_configObject$offset3 = configObject.offset) === null || _configObject$offset3 === void 0 ? void 0 : _configObject$offset3.left;
        returnValue -= (_configObject$offset4 = configObject.offset) === null || _configObject$offset4 === void 0 ? void 0 : _configObject$offset4.right;
      }
      if (transformOrigin[requestedReturnValue] === "right") {
        var _configObject$offset5, _configObject$offset6;
        returnValue -= (_configObject$offset5 = configObject.offset) === null || _configObject$offset5 === void 0 ? void 0 : _configObject$offset5.left;
        returnValue += (_configObject$offset6 = configObject.offset) === null || _configObject$offset6 === void 0 ? void 0 : _configObject$offset6.right;
      }
    }
    if (requestedReturnValue === "vertical" && ((_configObject$offset7 = configObject.offset) === null || _configObject$offset7 === void 0 ? void 0 : _configObject$offset7.top) !== 0 || requestedReturnValue === "vertical" && ((_configObject$offset8 = configObject.offset) === null || _configObject$offset8 === void 0 ? void 0 : _configObject$offset8.bottom) !== 0) {
      if (transformOrigin[requestedReturnValue] === "top" || transformOrigin[requestedReturnValue] === "center") {
        var _configObject$offset9, _configObject$offset10;
        returnValue += (_configObject$offset9 = configObject.offset) === null || _configObject$offset9 === void 0 ? void 0 : _configObject$offset9.top;
        returnValue -= (_configObject$offset10 = configObject.offset) === null || _configObject$offset10 === void 0 ? void 0 : _configObject$offset10.bottom;
      }
      if (transformOrigin[requestedReturnValue] === "bottom") {
        var _configObject$offset11, _configObject$offset12;
        returnValue -= (_configObject$offset11 = configObject.offset) === null || _configObject$offset11 === void 0 ? void 0 : _configObject$offset11.top;
        returnValue += (_configObject$offset12 = configObject.offset) === null || _configObject$offset12 === void 0 ? void 0 : _configObject$offset12.bottom;
      }
    }
    return returnValue;
  };
  const _calculateInitialPlacementValue = (transformOrigin, requestedReturnValue, relEl, placementOriginDefinition, elDimensions) => {
    let value = 0;
    if (transformOrigin[requestedReturnValue] === "left" || transformOrigin[requestedReturnValue] === "top") {
      value = relEl[placementOriginDefinition];
    } else if (transformOrigin[requestedReturnValue] === "center") {
      value = relEl[placementOriginDefinition] - elDimensions[requestedReturnValue === "horizontal" ? "width" : "height"] / 2;
    } else if (transformOrigin[requestedReturnValue] === "right" || transformOrigin[requestedReturnValue] === "bottom") {
      value = window[requestedReturnValue === "horizontal" ? "innerWidth" : "innerHeight"] - relEl[placementOriginDefinition];
    }
    return value;
  };

  /**
   *
   * @param requestedReturnValue whether the requested return value is for the horizontal or vertical axis
   * @returns either the horizontally centered placement definition (centerh) or the vertically centered one (centerv)
   */
  const _determineCenteredPlacementOrigin = requestedReturnValue => {
    if (requestedReturnValue === "horizontal") {
      return "centerh";
    } else if (requestedReturnValue === "vertical") {
      return "centerv";
    }
    throw new Error("the requested return value isn't \"vertical\" or \"horizontal\" ".concat(requestedReturnValue, " was given."));
  };
  const _calculatePlacementValue = (transformOrigin, placement, requestedReturnValue, relEl, elDimensions) => {
    const placementOriginDefinition = placement === "center" ? _determineCenteredPlacementOrigin(requestedReturnValue) : placement;
    const value = _calculateInitialPlacementValue(transformOrigin, requestedReturnValue, relEl, placementOriginDefinition, elDimensions);
    const valueWithOffset = _applyOffsetToPlacementValue(value, requestedReturnValue, transformOrigin);
    const valueCorrectionForViewportOverflow = _fixPossibleViewportOverflow(valueWithOffset, transformOrigin, requestedReturnValue, elDimensions);
    return valueCorrectionForViewportOverflow;
  };
  const _calculatePlacement = (relEl, elDimensions, axis) => {
    var _configObject$transfo, _configObject$transfo2;
    const placementValue = _calculatePlacementValue(configObject.transformOrigin, configObject.placement[axis], axis, relEl, elDimensions);
    let direction = "left";
    let oppositeDirection = "right";
    if (axis === "horizontal" && ((_configObject$transfo = configObject.transformOrigin) === null || _configObject$transfo === void 0 ? void 0 : _configObject$transfo.horizontal) === "right") {
      direction = "right";
      oppositeDirection = "left";
    } else if (axis === "horizontal") {
      direction = "left";
      oppositeDirection = "right";
    }
    if (axis === "vertical" && ((_configObject$transfo2 = configObject.transformOrigin) === null || _configObject$transfo2 === void 0 ? void 0 : _configObject$transfo2.vertical) === "bottom") {
      direction = "bottom";
      oppositeDirection = "top";
    } else if (axis === "vertical") {
      direction = "top";
      oppositeDirection = "bottom";
    }
    setPosition(prevState => ({
      ...prevState,
      [direction]: placementValue,
      [oppositeDirection]: "initial"
    }));
  };
  const calculatePosition = useDebouncedCallback(() => {
    var _configObject$relativ, _configObject$element;
    if (!((_configObject$relativ = configObject.relativeElement) !== null && _configObject$relativ !== void 0 && _configObject$relativ.current) || !((_configObject$element = configObject.elementToBePositioned) !== null && _configObject$element !== void 0 && _configObject$element.current)) return;
    const relativeElRect = configObject.relativeElement.current.getBoundingClientRect();
    const elementToBePositionedDimensions = {
      height: configObject.elementToBePositioned.current.offsetHeight,
      width: configObject.elementToBePositioned.current.offsetWidth
    };

    /** We want to add a center (horizontal and vertical) property to the DOMRect object. Since it's a special object we can't modify so we clone it and add it. */
    const clonedRelEl = {
      top: relativeElRect.top,
      right: relativeElRect.right,
      bottom: relativeElRect.bottom,
      center: 0,
      centerv: relativeElRect.top + relativeElRect.height / 2,
      centerh: relativeElRect.left + relativeElRect.width / 2,
      left: relativeElRect.left,
      width: relativeElRect.width,
      height: relativeElRect.height,
      x: relativeElRect.x,
      y: relativeElRect.y
    };
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "horizontal");
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "vertical");
    if (!initialCalculationDone) {
      setInitialCalculationDone(true);
    }
  }, (_configObject$debounc = configObject.debounceAmount) !== null && _configObject$debounc !== void 0 ? _configObject$debounc : 20);
  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    calculatePosition,
    initialCalculationDone
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss":
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
 */.Popover-module__sr-only--NXDMO{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Popover-module__hidden--N85ZW{display:none}.Popover-module__slide-in--wCdIn{animation:Popover-module__slide-in--wCdIn .5s forwards}@media(prefers-reduced-motion: reduce){.Popover-module__slide-in--wCdIn{animation-duration:.1ms}}.Popover-module__slide-out--ruTBN{animation:Popover-module__slide-out--ruTBN .5s forwards}@media(prefers-reduced-motion: reduce){.Popover-module__slide-out--ruTBN{animation-duration:.1ms}}@keyframes Popover-module__slide-in--wCdIn{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Popover-module__slide-out--ruTBN{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Popover-module__popover--PmG6o{position:fixed;z-index:100;pointer-events:none;background-color:var(--light);border-radius:.125rem;box-shadow:0px 4px 5px 0px rgba(1,5,50,.2),0px 3px 14px 0px rgba(1,5,50,.12),0px 8px 10px 0px rgba(1,5,50,.14);opacity:0;transform:scale(0.5);transition-property:transform,opacity;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Popover-module__popover--PmG6o{transition-duration:.1ms}}.Popover-module__popover--PmG6o.Popover-module__show--ZKX5k{transform:scale(1);pointer-events:auto;opacity:1}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Popover-module__sr-only--NXDMO`,
	"hidden": `Popover-module__hidden--N85ZW`,
	"slide-in": `Popover-module__slide-in--wCdIn`,
	"slide-out": `Popover-module__slide-out--ruTBN`,
	"popover": `Popover-module__popover--PmG6o`,
	"show": `Popover-module__show--ZKX5k`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);