"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1627],{

/***/ "./stories/Notifications/Snackbar/Snackbar.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Snackbar": function() { return /* binding */ Snackbar_stories_Snackbar; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Snackbar_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx
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


var SnackbarContext = /*#__PURE__*/(0,react.createContext)({
  enqueueSnackbar: function enqueueSnackbar() {
    return null;
  },
  enqueueSuccessSnackbar: function enqueueSuccessSnackbar() {
    return null;
  },
  enqueueErrorSnackbar: function enqueueErrorSnackbar() {
    return null;
  },
  setSnackbarHeight: function setSnackbarHeight() {
    return null;
  },
  snackbars: []
});
var SnackbarContextProvider = function SnackbarContextProvider(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState;
  return /*#__PURE__*/react.createElement(SnackbarContext.Provider, {
    value: initialState
  }, children);
};

try {
    // @ts-ignore
    SnackbarContextProvider.displayName = "SnackbarContextProvider";
    // @ts-ignore
    SnackbarContextProvider.__docgenInfo = { "description": "", "displayName": "SnackbarContextProvider", "props": { "initialState": { "defaultValue": null, "description": "", "name": "initialState", "required": true, "type": { "name": "SnackbarContextProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx#SnackbarContextProvider"] = { docgenInfo: SnackbarContextProvider.__docgenInfo, name: "SnackbarContextProvider", path: "src/components/Notifications/Snackbar/SnackbarProvider/SnackbarStateProvider.tsx#SnackbarContextProvider" };
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss
var SnackbarContainer_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SnackbarContainer_module/* default */.Z, options);




       /* harmony default export */ var SnackbarContainer_SnackbarContainer_module = (SnackbarContainer_module/* default */.Z && SnackbarContainer_module/* default.locals */.Z.locals ? SnackbarContainer_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx
var _excluded = ["placement", "children", "zIndex", "className"];
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




var useSnackbarContainerHeightAnimation = function useSnackbarContainerHeightAnimation() {
  var _useContext = (0,react.useContext)(SnackbarContext),
    snackbars = _useContext.snackbars;
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = (0,react.useState)("flex-start"),
    _useState4 = _slicedToArray(_useState3, 2),
    justifyContent = _useState4[0],
    setJustifyContent = _useState4[1];
  var spaceBetweenSnackbars = 8;
  var exceedsMaximumVisibleSnackbars = snackbars.length >= 3;
  (0,react.useEffect)(function () {
    var allHeights = snackbars.map(function (snackbar) {
      return snackbar.height;
    });
    var totalHeight = allHeights.reduce(function (prev, curr) {
      return prev + curr;
    }, 0);
    totalHeight += (Math.min(snackbars.length, 3) - 1) * spaceBetweenSnackbars;

    /**
     * Once we reach the maximum amount of snackbars, they will start to disappear. We have to wait with reversing the justify-content until the last snackbar
     * has completed their animationIn. This is around 500ms. Then we want to reverse it, because otherwise whenever a snackbar disappears they shift up
     * and then down again, which looks really bad.
     * */
    if (exceedsMaximumVisibleSnackbars) setTimeout(function () {
      setJustifyContent("flex-end");
    }, 500);
    if (height > totalHeight && justifyContent !== "flex-end") {
      setJustifyContent("flex-end");
    } else if (height < totalHeight && justifyContent !== "flex-start") {
      setJustifyContent("flex-start");
    }
    setHeight(totalHeight);
  }, [snackbars]);
  return {
    height: height,
    justifyContent: justifyContent
  };
};
var SnackbarContainer = function SnackbarContainer(_ref) {
  var placement = _ref.placement,
    children = _ref.children,
    zIndex = _ref.zIndex,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useSnackbarContainer = useSnackbarContainerHeightAnimation(),
    height = _useSnackbarContainer.height,
    justifyContent = _useSnackbarContainer.justifyContent;
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    style: {
      zIndex: zIndex,
      height: height,
      justifyContent: justifyContent
    },
    className: "".concat(SnackbarContainer_SnackbarContainer_module.snackbars, " ").concat(SnackbarContainer_SnackbarContainer_module[placement.horizontal], " ").concat(SnackbarContainer_SnackbarContainer_module[placement.vertical], " ").concat(className !== null && className !== void 0 ? className : "")
  }), children);
};
try {
    // @ts-ignore
    SnackbarContainer.displayName = "SnackbarContainer";
    // @ts-ignore
    SnackbarContainer.__docgenInfo = { "description": "", "displayName": "SnackbarContainer", "props": { "placement": { "defaultValue": null, "description": "", "name": "placement", "required": true, "type": { "name": "Placement" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "number" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx#SnackbarContainer"] = { docgenInfo: SnackbarContainer.__docgenInfo, name: "SnackbarContainer", path: "src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.tsx#SnackbarContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss
var SnackbarItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss

      
      
      
      
      
      
      
      
      

var SnackbarItem_module_options = {};

SnackbarItem_module_options.styleTagTransform = (styleTagTransform_default());
SnackbarItem_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SnackbarItem_module_options.insert = insertBySelector_default().bind(null, "head");
    
SnackbarItem_module_options.domAPI = (styleDomAPI_default());
SnackbarItem_module_options.insertStyleElement = (insertStyleElement_default());

var SnackbarItem_module_update = injectStylesIntoStyleTag_default()(SnackbarItem_module/* default */.Z, SnackbarItem_module_options);




       /* harmony default export */ var SnackbarItem_SnackbarItem_module = (SnackbarItem_module/* default */.Z && SnackbarItem_module/* default.locals */.Z.locals ? SnackbarItem_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
;// CONCATENATED MODULE: ./src/hooks/useAnimation.ts
function useAnimation_slicedToArray(arr, i) {
  return useAnimation_arrayWithHoles(arr) || useAnimation_iterableToArrayLimit(arr, i) || useAnimation_unsupportedIterableToArray(arr, i) || useAnimation_nonIterableRest();
}
function useAnimation_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useAnimation_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useAnimation_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useAnimation_arrayLikeToArray(o, minLen);
}
function useAnimation_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function useAnimation_iterableToArrayLimit(arr, i) {
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
function useAnimation_arrayWithHoles(arr) {
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


var useAnimation = function useAnimation(callback) {
  var animatedObjectRef = (0,react.useRef)(null);
  /** We need to store flag that says us when to call the callback */
  var _useState = (0,react.useState)(false),
    _useState2 = useAnimation_slicedToArray(_useState, 2),
    animationStarted = _useState2[0],
    setAnimationStarted = _useState2[1];
  var onAnimationEnd = function onAnimationEnd() {
    return animationStarted && callback();
  };
  (0,react.useEffect)(function () {
    var _animatedObjectRef$cu;
    (_animatedObjectRef$cu = animatedObjectRef.current) === null || _animatedObjectRef$cu === void 0 ? void 0 : _animatedObjectRef$cu.addEventListener("animationend", onAnimationEnd);
    return function () {
      var _animatedObjectRef$cu2;
      return (_animatedObjectRef$cu2 = animatedObjectRef.current) === null || _animatedObjectRef$cu2 === void 0 ? void 0 : _animatedObjectRef$cu2.removeEventListener("animationend", onAnimationEnd);
    };
  }, [animationStarted]);
  return {
    ref: animatedObjectRef,
    animationStarted: animationStarted,
    startAnimation: function startAnimation() {
      return setAnimationStarted(true);
    }
  };
};
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.tsx
function SnackbarItem_extends() {
  SnackbarItem_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return SnackbarItem_extends.apply(this, arguments);
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









var textColor = "var(--snackbar-text-color)";
var useRegisterSnackbarHeight = function useRegisterSnackbarHeight(singleSnackbarRef, snackbarId) {
  var ctx = (0,react.useContext)(SnackbarContext);
  (0,react.useEffect)(function () {
    if (singleSnackbarRef.current) {
      ctx.setSnackbarHeight(snackbarId, singleSnackbarRef.current.getBoundingClientRect().height);
    }
  }, [singleSnackbarRef.current]);
};
var SnackbarItem = function SnackbarItem(_ref) {
  var id = _ref.id,
    title = _ref.title,
    duration = _ref.duration,
    variant = _ref.variant,
    content = _ref.content,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    onClose = _ref.onClose,
    closeButtonTitle = _ref.closeButtonTitle;
  var timerHandler = (0,react.useRef)();
  var onAnimationEnd = function onAnimationEnd() {
    return onClose(id);
  };
  var _useAnimation = useAnimation(onAnimationEnd),
    ref = _useAnimation.ref,
    animationStarted = _useAnimation.animationStarted,
    startAnimation = _useAnimation.startAnimation;
  useRegisterSnackbarHeight(ref, id);
  (0,react.useEffect)(function () {
    timerHandler.current = setTimeout(function () {
      return startAnimation();
    }, duration);
    return function () {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);
  var onMouseEnter = function onMouseEnter() {
    timerHandler.current && clearTimeout(timerHandler.current);
  };
  var onMouseLeave = function onMouseLeave() {
    timerHandler.current = setTimeout(function () {
      return startAnimation();
    }, duration);
  };
  var getVariantIcon = function getVariantIcon() {
    if (variant === "error") {
      return Icon/* Icons.Error */.P.Error;
    }
    return variant === "success" ? Icon/* Icons.CheckmarkCircleBreakout */.P.CheckmarkCircleBreakout : Icon/* Icons.InfoCircle */.P.InfoCircle;
  };
  var actionButtons = actions.map(function (actionProp, index) {
    return /*#__PURE__*/react.createElement("button", SnackbarItem_extends({
      key: index
    }, actionProp, {
      onClick: function onClick(e) {
        var _actionProp$onClick;
        onClose(id);
        (_actionProp$onClick = actionProp.onClick) === null || _actionProp$onClick === void 0 ? void 0 : _actionProp$onClick.call(actionProp, e);
      },
      className: SnackbarItem_SnackbarItem_module["action-button"]
    }), actionProp.label);
  });
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    "aria-live": "polite",
    className: "".concat(SnackbarItem_SnackbarItem_module.snackbar, " ").concat(SnackbarItem_SnackbarItem_module[variant], " ").concat(animationStarted ? readyclasses_module/* default.slide-out */.Z["slide-out"] : readyclasses_module/* default.slide-in */.Z["slide-in"]),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: getVariantIcon(),
    className: SnackbarItem_SnackbarItem_module.icon
  }), /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module.container
  }, /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module.headline
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    className: SnackbarItem_SnackbarItem_module.title,
    variant: "h4",
    tag: "span"
  }, title), /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    id: SnackbarItem_SnackbarItem_module["close-btn"],
    onClick: function onClick() {
      return startAnimation();
    },
    title: closeButtonTitle
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.Times */.P.Times,
    color: textColor
  }))), !!content && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    className: SnackbarItem_SnackbarItem_module.content,
    variant: "body"
  }, content), actionButtons.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: SnackbarItem_SnackbarItem_module.actions
  }, actionButtons)));
};
try {
    // @ts-ignore
    SnackbarItem.displayName = "SnackbarItem";
    // @ts-ignore
    SnackbarItem.__docgenInfo = { "description": "", "displayName": "SnackbarItem", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "duration": { "defaultValue": null, "description": "", "name": "duration", "required": true, "type": { "name": "number" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": true, "type": { "name": "enum", "value": [{ "value": "\"error\"" }, { "value": "\"success\"" }, { "value": "\"info\"" }] } }, "onClose": { "defaultValue": null, "description": "", "name": "onClose", "required": true, "type": { "name": "(key: string) => void" } }, "closeButtonTitle": { "defaultValue": null, "description": "", "name": "closeButtonTitle", "required": true, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": false, "type": { "name": "string" } }, "actions": { "defaultValue": { value: "[]" }, "description": "", "name": "actions", "required": false, "type": { "name": "Actions" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.tsx#SnackbarItem"] = { docgenInfo: SnackbarItem.__docgenInfo, name: "SnackbarItem", path: "src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.tsx#SnackbarItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/hooks/useGetDomRoot.ts
var useGetDomRoot = __webpack_require__("./src/hooks/useGetDomRoot.ts");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function SnackbarProvider_extends() {
  SnackbarProvider_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return SnackbarProvider_extends.apply(this, arguments);
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || SnackbarProvider_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return SnackbarProvider_arrayLikeToArray(arr);
}
function SnackbarProvider_slicedToArray(arr, i) {
  return SnackbarProvider_arrayWithHoles(arr) || SnackbarProvider_iterableToArrayLimit(arr, i) || SnackbarProvider_unsupportedIterableToArray(arr, i) || SnackbarProvider_nonIterableRest();
}
function SnackbarProvider_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function SnackbarProvider_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return SnackbarProvider_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SnackbarProvider_arrayLikeToArray(o, minLen);
}
function SnackbarProvider_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function SnackbarProvider_iterableToArrayLimit(arr, i) {
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
function SnackbarProvider_arrayWithHoles(arr) {
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









/** Short msg is when only title is provided. Long one when content or/and actions are provided (or type is error). */

var SnackbarProvider = function SnackbarProvider() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      closeButtonTitle: ""
    },
    closeButtonTitle = _ref.closeButtonTitle,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? {
      vertical: "bottom",
      horizontal: "center"
    } : _ref$placement,
    _ref$autoHideDuration = _ref.autoHideDuration,
    autoHideDuration = _ref$autoHideDuration === void 0 ? {
      long: 8000,
      short: 4000
    } : _ref$autoHideDuration,
    _ref$stackSize = _ref.stackSize,
    stackSize = _ref$stackSize === void 0 ? 3 : _ref$stackSize,
    domRoot = _ref.domRoot,
    children = _ref.children,
    className = _ref.className;
  var _useState = (0,react.useState)([]),
    _useState2 = SnackbarProvider_slicedToArray(_useState, 2),
    snackbars = _useState2[0],
    setSnackbars = _useState2[1];
  var wrappingDivRef = (0,react.useRef)(null);
  var _useGetDomRoot = (0,useGetDomRoot/* useGetDomRoot */.X)(domRoot, wrappingDivRef),
    root = _useGetDomRoot.root;
  var addSnackbar = function addSnackbar(item) {
    setSnackbars(function (items) {
      return [].concat(_toConsumableArray(items), [item]);
    });
  };
  var setSnackbarHeight = function setSnackbarHeight(id, height) {
    var newSnackbarsState = snackbars.map(function (snackbar) {
      if (snackbar.id !== id) {
        return snackbar;
      }
      return _objectSpread(_objectSpread({}, snackbar), {}, {
        height: height
      });
    });
    setSnackbars(newSnackbarsState);
  };
  var getDuration = function getDuration(variant, actions, content) {
    var hasError = variant === "error";
    var hasContentOrActions = content !== null && content !== void 0 ? content : actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };
  var enqueueSnackbar = function enqueueSnackbar(title, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$variant = options.variant,
      variant = _options$variant === void 0 ? "info" : _options$variant,
      actions = options.actions,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? getDuration(variant, actions, content) : _options$duration,
      onClose = options.onClose;
    var item = {
      title: title,
      content: content,
      variant: variant,
      actions: actions,
      duration: duration,
      height: 0,
      id: (0,helper/* generateID */.y)(15, title),
      onClose: onClose
    };
    addSnackbar(item);
  };
  var enqueueSuccessSnackbar = function enqueueSuccessSnackbar(title, content, options) {
    enqueueSnackbar(title, content, _objectSpread(_objectSpread({}, options), {}, {
      variant: "success"
    }));
  };
  var enqueueErrorSnackbar = function enqueueErrorSnackbar(title, content, options) {
    enqueueSnackbar(title, content, _objectSpread(_objectSpread({}, options), {}, {
      variant: "error"
    }));
  };
  var onItemClosed = function onItemClosed(id) {
    setSnackbars(function (items) {
      return _toConsumableArray(items).filter(function (item) {
        return item.id !== id;
      });
    });
  };
  var snackbarList = snackbars.map(function (item, index) {
    return index < stackSize ? /*#__PURE__*/react.createElement(SnackbarItem, SnackbarProvider_extends({}, item, {
      key: item.id,
      onClose: function onClose() {
        var _item$onClose;
        onItemClosed(item.id);
        (_item$onClose = item.onClose) === null || _item$onClose === void 0 ? void 0 : _item$onClose.call(item);
      },
      closeButtonTitle: closeButtonTitle
    })) : null;
  });
  var snackbarPortal = /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(SnackbarContainer, {
    placement: placement,
    className: className
  }, snackbarList), root);
  return /*#__PURE__*/react.createElement(SnackbarContextProvider, {
    initialState: {
      enqueueSnackbar: enqueueSnackbar,
      enqueueSuccessSnackbar: enqueueSuccessSnackbar,
      enqueueErrorSnackbar: enqueueErrorSnackbar,
      setSnackbarHeight: setSnackbarHeight,
      snackbars: snackbars
    }
  }, children, /*#__PURE__*/react.createElement("div", {
    ref: wrappingDivRef
  }, snackbarPortal));
};
try {
    // @ts-ignore
    SnackbarProvider.displayName = "SnackbarProvider";
    // @ts-ignore
    SnackbarProvider.__docgenInfo = { "description": "", "displayName": "SnackbarProvider", "props": { "closeButtonTitle": { "defaultValue": null, "description": "", "name": "closeButtonTitle", "required": true, "type": { "name": "string" } }, "placement": { "defaultValue": { value: "{ vertical: \"bottom\", horizontal: \"center\" }" }, "description": "", "name": "placement", "required": false, "type": { "name": "Placement" } }, "stackSize": { "defaultValue": { value: "3" }, "description": "", "name": "stackSize", "required": false, "type": { "name": "number" } }, "domRoot": { "defaultValue": null, "description": "", "name": "domRoot", "required": false, "type": { "name": "HTMLElement" } }, "autoHideDuration": { "defaultValue": { value: "{ long: 8000, short: 4000 }" }, "description": "", "name": "autoHideDuration", "required": false, "type": { "name": "Duration" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx#SnackbarProvider"] = { docgenInfo: SnackbarProvider.__docgenInfo, name: "SnackbarProvider", path: "src/components/Notifications/Snackbar/SnackbarProvider/SnackbarProvider.tsx#SnackbarProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
;// CONCATENATED MODULE: ./src/components/Notifications/Snackbar/useSnackbar.ts
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



var useSnackbar = function useSnackbar() {
  var ctx = (0,react.useContext)(SnackbarContext);
  return {
    enqueueErrorSnackbar: ctx.enqueueErrorSnackbar,
    enqueueSuccessSnackbar: ctx.enqueueSuccessSnackbar,
    enqueueSnackbar: ctx.enqueueSnackbar
  };
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Snackbar.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      strong: "strong",
      ul: "ul",
      li: "li",
      pre: "pre",
      h2: "h2",
      h1: "h1"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Snackbar"
        }), " components and hook are there for you to make it easy to notify a user. You have the option of displaying an error, success or information ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snackbar"
        }), ". In order to use all of these different ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Snackbar"
        }), "s, you'll have to wrap your entire application\nin the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SnackbarProvider"
        }), " component. This will enable to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Snackbar"
        }), " component to be portaled and displayed in the top levels of the DOM."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Once you've wrapped your application with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SnackbarProvider"
        }), " component, you are free to use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useSnackbar"
        }), " hook to create any ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Snackbar"
        }), " you like. This hook does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " accept any arguments, but it returns 3 different functions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The following functions will all accept three different arguments when called."
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["title (", (0,jsx_runtime.jsx)(_components.code, {
            children: "string"
          }), "): The title is displayed at the top of the snackbar."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["content (", (0,jsx_runtime.jsx)(_components.code, {
            children: "string"
          }), "): The content that should be displayed inside of the snackbar."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["options (", (0,jsx_runtime.jsx)(_components.code, {
            children: "object"
          }), "): Different options you can add to configure the snackbar to your liking."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The option object looks as follows:"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-js",
          children: "{\n  actions?: (ButtonHTMLAttributes<HTMLButtonElement> & { label: string })[];\n  variant?: \"info\" | \"success\" | \"error\";\n  duration?: number;\n  onClose?: () => void;\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actions"
        }), " parameter might seem confusing, but this is simply an array of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Button"
        }), " props. In the example down below, the \"Show long snackbar\" has this ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actions"
        }), " prop filled to make it more clear as to how this would look like."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["By default, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "duration"
        }), " property is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "4000"
        }), " (4 seconds). You can increase or decrease this as you like."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "enqueuesnackbar",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueSnackbar"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This function will allow you to create a regular info ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Snackbar"
        }), ". You could use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "variant"
        }), " prop to specify a variant, but using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueSuccessSnackbar"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueErrorSnackbar"
        }), " is an easier way of doing this."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "enqueueerrorsnackbar",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueErrorSnackbar"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It will allow you to easily and quickly create an error ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Snackbar"
        }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "variant"
        }), " prop is already set to be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "enqueuesuccesssnackbar",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "enqueueSuccessSnackbar"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Creates a success snackbar with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "variant"
        }), " prop already set to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "success"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["First, wrap your entire application inside the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SnackbarProvider"
        }), " component."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<SnackbarProvider>\n  <AppContent />\n</SnackbarProvider>\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Then use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useSnackbar()"
        }), " hook inside your application."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "const AppContent = () => {\n  const { enqueueSuccessSnackbar, enqueueErrorSnackbar, enqueueSnackbar } = useSnackbar();\n\n  return (\n    <Fragment>\n      <Button\n        onClick={() =>\n          enqueueSuccessSnackbar(\"Main message of the snackbar\", undefined, {\n            duration: 10000,\n            onClose: () => console.log(\"onClose handler\")\n          })\n        }\n      >\n        Show success snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueErrorSnackbar(\"Social account unlink failed\", undefined, {\n            onClose: () => console.log(\"onClose handler\")\n          })\n        }\n      >\n        Show error snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueSnackbar(\"Copy of your data is requested\", undefined, {\n            onClose: () => console.log(\"onClose handler\")\n          })\n        }\n      >\n        Show info snackbar\n      </Button>\n      <br />\n      <br />\n      <Button\n        onClick={() =>\n          enqueueSnackbar(\n            \"Copy of your data is requested\",\n            \"Body text of the snackbar. Keep it short. Users only have a few seconds to read it. Try to keep the text within the limit of 1 text message: 160 ch.\",\n            {\n              actions: [\n                { label: \"Contact support\", onClick: () => alert(\"Clicked support\") },\n                { label: \"Contact OneWelcome\", onClick: () => alert(\"Clicked OneWelcome\") }\n              ]\n            }\n          )\n        }\n      >\n        Show long snackbar\n      </Button>\n    </Fragment>\n  );\n};\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Snackbar_stories_Snackbar
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var Snackbar = (MDXContent);

;// CONCATENATED MODULE: ./stories/Notifications/Snackbar/Snackbar.stories.tsx
var _Snackbar$parameters, _Snackbar$parameters2, _Snackbar$parameters3;
function Snackbar_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return Snackbar_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Snackbar_stories_typeof(obj);
}
function Snackbar_stories_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function Snackbar_stories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? Snackbar_stories_ownKeys(Object(source), !0).forEach(function (key) {
      Snackbar_stories_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Snackbar_stories_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function Snackbar_stories_defineProperty(obj, key, value) {
  key = Snackbar_stories_toPropertyKey(key);
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
function Snackbar_stories_toPropertyKey(arg) {
  var key = Snackbar_stories_toPrimitive(arg, "string");
  return Snackbar_stories_typeof(key) === "symbol" ? key : String(key);
}
function Snackbar_stories_toPrimitive(input, hint) {
  if (Snackbar_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Snackbar_stories_typeof(res) !== "object") return res;
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
  title: "components/Feedback/Snackbar",
  component: SnackbarProvider,
  parameters: {
    docs: {
      page: Snackbar
    }
  }
};
/* harmony default export */ var Snackbar_stories = (meta);
var AppContent = function AppContent() {
  var _useSnackbar = useSnackbar(),
    enqueueSuccessSnackbar = _useSnackbar.enqueueSuccessSnackbar,
    enqueueErrorSnackbar = _useSnackbar.enqueueErrorSnackbar,
    enqueueSnackbar = _useSnackbar.enqueueSnackbar;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return enqueueSuccessSnackbar("Main message of the snackbar", undefined, {
        onClose: function onClose() {
          return console.warn("onClose handler");
        }
      });
    }
  }, "Show success snackbar"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return enqueueErrorSnackbar("Social account unlink failed", undefined, {
        onClose: function onClose() {
          return console.warn("onClose handler");
        }
      });
    }
  }, "Show error snackbar"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return enqueueSnackbar("Copy of your data is requested", undefined, {
        onClose: function onClose() {
          return console.warn("onClose handler");
        }
      });
    }
  }, "Show info snackbar"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: function onClick() {
      return enqueueSnackbar("Copy of your data is requested", "Body text of the snackbar. Keep it short. Users only have a few seconds to read it. Try to keep the text within the limit of 1 text message: 160 ch.", {
        actions: [{
          label: "Contact support",
          onClick: function onClick() {
            return alert("Clicked support");
          }
        }, {
          label: "Contact OneWelcome",
          onClick: function onClick() {
            return alert("Clicked OneWelcome");
          }
        }]
      });
    }
  }, "Show long snackbar"));
};
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(SnackbarProvider, {
    closeButtonTitle: "Close"
  }, /*#__PURE__*/react.createElement(AppContent, null));
};
var Snackbar_stories_Snackbar = Template.bind({});
Snackbar_stories_Snackbar.parameters = Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, Snackbar_stories_Snackbar.parameters), {}, {
  docs: Snackbar_stories_objectSpread(Snackbar_stories_objectSpread({}, (_Snackbar$parameters = Snackbar_stories_Snackbar.parameters) === null || _Snackbar$parameters === void 0 ? void 0 : _Snackbar$parameters.docs), {}, {
    source: Snackbar_stories_objectSpread({
      originalSource: "args => {\n  return <SnackbarProvider closeButtonTitle=\"Close\">\n      <AppContent />\n    </SnackbarProvider>;\n}"
    }, (_Snackbar$parameters2 = Snackbar_stories_Snackbar.parameters) === null || _Snackbar$parameters2 === void 0 ? void 0 : (_Snackbar$parameters3 = _Snackbar$parameters2.docs) === null || _Snackbar$parameters3 === void 0 ? void 0 : _Snackbar$parameters3.source)
  })
});
var __namedExportsOrder = ["Snackbar"];

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

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ useGetDomRoot; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
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


var useGetDomRoot = function useGetDomRoot(passedDomRoot, relativeElement) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.body),
    _useState2 = _slicedToArray(_useState, 2),
    root = _useState2[0],
    setRoot = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (relativeElement !== null && relativeElement !== void 0 && relativeElement.current && !passedDomRoot) {
      var closestBaseStylingWrapper = relativeElement.current.closest(".basestyling-wrapper");
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
    root: root
  };
};

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

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": function() { return /* binding */ filterProps; },
/* harmony export */   "MU": function() { return /* binding */ getValueByPath; },
/* harmony export */   "Pb": function() { return /* binding */ isJsonString; },
/* harmony export */   "R3": function() { return /* binding */ areArraysDifferent; },
/* harmony export */   "y": function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, remToPx */
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarContainer/SnackbarContainer.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarContainer-module__sr-only--iXUBF{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SnackbarContainer-module__hidden--azVvn{display:none}.SnackbarContainer-module__slide-in--zCzA9{animation:SnackbarContainer-module__slide-in--zCzA9 .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__slide-in--zCzA9{animation-duration:.1ms}}.SnackbarContainer-module__slide-out--QClYD{animation:SnackbarContainer-module__slide-out--QClYD .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__slide-out--QClYD{animation-duration:.1ms}}@keyframes SnackbarContainer-module__slide-in--zCzA9{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SnackbarContainer-module__slide-out--QClYD{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarContainer-module__w-6--UbhNj{width:6%}.SnackbarContainer-module__w-7--t1VUX{width:7%}.SnackbarContainer-module__w-8--Gduek{width:8%}.SnackbarContainer-module__w-9--M_OH0{width:9%}.SnackbarContainer-module__w-10--G75nj{width:10%}.SnackbarContainer-module__w-11--K7TNg{width:11%}.SnackbarContainer-module__w-12--CQlJP{width:12%}.SnackbarContainer-module__w-13--Ck9YS{width:13%}.SnackbarContainer-module__w-14--JmINr{width:14%}.SnackbarContainer-module__w-15--Njwpy{width:15%}.SnackbarContainer-module__w-16--ZxFgZ{width:16%}.SnackbarContainer-module__w-17--gZpwy{width:17%}.SnackbarContainer-module__w-18--fPHHA{width:18%}.SnackbarContainer-module__w-19--tCJIH{width:19%}.SnackbarContainer-module__w-20--j6Oz3{width:20%}.SnackbarContainer-module__w-21--ICUsk{width:21%}.SnackbarContainer-module__w-22--x8_NY{width:22%}.SnackbarContainer-module__w-23--HfN53{width:23%}.SnackbarContainer-module__w-24--CkL_r{width:24%}.SnackbarContainer-module__w-25--q_aOU{width:25%}.SnackbarContainer-module__w-26--r6apx{width:26%}.SnackbarContainer-module__w-27--l544F{width:27%}.SnackbarContainer-module__w-28--_QkdQ{width:28%}.SnackbarContainer-module__w-29--EFqlB{width:29%}.SnackbarContainer-module__w-30--xNK0e{width:30%}.SnackbarContainer-module__w-31--tQ_YW{width:31%}.SnackbarContainer-module__w-32--SAlr8{width:32%}.SnackbarContainer-module__w-33--elwVb{width:33%}.SnackbarContainer-module__w-34--Gy4pw{width:34%}.SnackbarContainer-module__w-35--iz6NS{width:35%}.SnackbarContainer-module__w-36--e09eh{width:36%}.SnackbarContainer-module__w-37--Ui9Gj{width:37%}.SnackbarContainer-module__w-38--a3Yyz{width:38%}.SnackbarContainer-module__w-39--ubMQt{width:39%}.SnackbarContainer-module__w-40--iXKcm{width:40%}.SnackbarContainer-module__w-41--bJfd6{width:41%}.SnackbarContainer-module__w-42--mkq6l{width:42%}.SnackbarContainer-module__w-43--BIHd8{width:43%}.SnackbarContainer-module__w-44--ehIxL{width:44%}.SnackbarContainer-module__w-45--kEhAO{width:45%}.SnackbarContainer-module__w-46--FEhjc{width:46%}.SnackbarContainer-module__w-47--OSXCO{width:47%}.SnackbarContainer-module__w-48--STZ3C{width:48%}.SnackbarContainer-module__w-49--ZKP_Q{width:49%}.SnackbarContainer-module__w-50--OjYiE{width:50%}.SnackbarContainer-module__w-51--hsZe7{width:51%}.SnackbarContainer-module__w-52--WfAka{width:52%}.SnackbarContainer-module__w-53--umw2S{width:53%}.SnackbarContainer-module__w-54--fBndR{width:54%}.SnackbarContainer-module__w-55--XC6aK{width:55%}.SnackbarContainer-module__w-56--JqQMA{width:56%}.SnackbarContainer-module__w-57--cdvLE{width:57%}.SnackbarContainer-module__w-58--ggfcC{width:58%}.SnackbarContainer-module__w-59--MriGo{width:59%}.SnackbarContainer-module__w-60--sUPZd{width:60%}.SnackbarContainer-module__w-61--e_ETQ{width:61%}.SnackbarContainer-module__w-62--Tu0n3{width:62%}.SnackbarContainer-module__w-63--lV_WP{width:63%}.SnackbarContainer-module__w-64--JChyR{width:64%}.SnackbarContainer-module__w-65--jlpBx{width:65%}.SnackbarContainer-module__w-66--HOwAm{width:66%}.SnackbarContainer-module__w-67--h5fyB{width:67%}.SnackbarContainer-module__w-68--nV9od{width:68%}.SnackbarContainer-module__w-69--SfeKT{width:69%}.SnackbarContainer-module__w-70--DFrGK{width:70%}.SnackbarContainer-module__w-71--WVo5J{width:71%}.SnackbarContainer-module__w-72--qEa7R{width:72%}.SnackbarContainer-module__w-73--ms5uU{width:73%}.SnackbarContainer-module__w-74--wY8Ld{width:74%}.SnackbarContainer-module__w-75--mRgGJ{width:75%}.SnackbarContainer-module__w-76--z1CT_{width:76%}.SnackbarContainer-module__w-77--hUqLz{width:77%}.SnackbarContainer-module__w-78--YurCm{width:78%}.SnackbarContainer-module__w-79--IzJ9n{width:79%}.SnackbarContainer-module__w-80--JT50Z{width:80%}.SnackbarContainer-module__w-81--uZQTk{width:81%}.SnackbarContainer-module__w-82--UVO02{width:82%}.SnackbarContainer-module__w-83--SK1xZ{width:83%}.SnackbarContainer-module__w-84--HP6Pd{width:84%}.SnackbarContainer-module__w-85--rVV5B{width:85%}.SnackbarContainer-module__w-86--mLdfx{width:86%}.SnackbarContainer-module__w-87--Urdr0{width:87%}.SnackbarContainer-module__w-88--sPKUh{width:88%}.SnackbarContainer-module__w-89--CDvmY{width:89%}.SnackbarContainer-module__w-90--_0HY0{width:90%}.SnackbarContainer-module__w-91--YxqJQ{width:91%}.SnackbarContainer-module__w-92--WBu9u{width:92%}.SnackbarContainer-module__w-93--LUvLa{width:93%}.SnackbarContainer-module__w-94--TRcLf{width:94%}.SnackbarContainer-module__w-95--ZNKdJ{width:95%}.SnackbarContainer-module__w-96--BiLMi{width:96%}.SnackbarContainer-module__w-97--ySZcz{width:97%}.SnackbarContainer-module__w-98--KtLxW{width:98%}.SnackbarContainer-module__w-99--Ax2QB{width:99%}.SnackbarContainer-module__w-100--MnH0H{width:100%}.SnackbarContainer-module__w-101--xJcXT{width:101%}.SnackbarContainer-module__w-102--A9IJV{width:102%}.SnackbarContainer-module__w-103--cAjY3{width:103%}.SnackbarContainer-module__w-104--UTxiq{width:104%}.SnackbarContainer-module__w-105--rFOwm{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarContainer-module__snackbars--tc0QC{position:fixed;z-index:20;width:100%;display:flex;flex-direction:column;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.SnackbarContainer-module__snackbars--tc0QC{transition-duration:.1ms}}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__bottom--AGi7f{bottom:3.5rem}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__top--QRjr4{top:3.5rem}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__start--n7LOy{left:0}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__center--N7Azo{left:0}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__end--J5Asy{right:0}@media only screen and (min-width: 37.5em){.SnackbarContainer-module__snackbars--tc0QC{width:initial}.SnackbarContainer-module__snackbars--tc0QC.SnackbarContainer-module__center--N7Azo{left:calc(50% - 18.75rem)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "SnackbarContainer-module__sr-only--iXUBF",
	"hidden": "SnackbarContainer-module__hidden--azVvn",
	"slide-in": "SnackbarContainer-module__slide-in--zCzA9",
	"slide-out": "SnackbarContainer-module__slide-out--QClYD",
	"w-6": "SnackbarContainer-module__w-6--UbhNj",
	"w-7": "SnackbarContainer-module__w-7--t1VUX",
	"w-8": "SnackbarContainer-module__w-8--Gduek",
	"w-9": "SnackbarContainer-module__w-9--M_OH0",
	"w-10": "SnackbarContainer-module__w-10--G75nj",
	"w-11": "SnackbarContainer-module__w-11--K7TNg",
	"w-12": "SnackbarContainer-module__w-12--CQlJP",
	"w-13": "SnackbarContainer-module__w-13--Ck9YS",
	"w-14": "SnackbarContainer-module__w-14--JmINr",
	"w-15": "SnackbarContainer-module__w-15--Njwpy",
	"w-16": "SnackbarContainer-module__w-16--ZxFgZ",
	"w-17": "SnackbarContainer-module__w-17--gZpwy",
	"w-18": "SnackbarContainer-module__w-18--fPHHA",
	"w-19": "SnackbarContainer-module__w-19--tCJIH",
	"w-20": "SnackbarContainer-module__w-20--j6Oz3",
	"w-21": "SnackbarContainer-module__w-21--ICUsk",
	"w-22": "SnackbarContainer-module__w-22--x8_NY",
	"w-23": "SnackbarContainer-module__w-23--HfN53",
	"w-24": "SnackbarContainer-module__w-24--CkL_r",
	"w-25": "SnackbarContainer-module__w-25--q_aOU",
	"w-26": "SnackbarContainer-module__w-26--r6apx",
	"w-27": "SnackbarContainer-module__w-27--l544F",
	"w-28": "SnackbarContainer-module__w-28--_QkdQ",
	"w-29": "SnackbarContainer-module__w-29--EFqlB",
	"w-30": "SnackbarContainer-module__w-30--xNK0e",
	"w-31": "SnackbarContainer-module__w-31--tQ_YW",
	"w-32": "SnackbarContainer-module__w-32--SAlr8",
	"w-33": "SnackbarContainer-module__w-33--elwVb",
	"w-34": "SnackbarContainer-module__w-34--Gy4pw",
	"w-35": "SnackbarContainer-module__w-35--iz6NS",
	"w-36": "SnackbarContainer-module__w-36--e09eh",
	"w-37": "SnackbarContainer-module__w-37--Ui9Gj",
	"w-38": "SnackbarContainer-module__w-38--a3Yyz",
	"w-39": "SnackbarContainer-module__w-39--ubMQt",
	"w-40": "SnackbarContainer-module__w-40--iXKcm",
	"w-41": "SnackbarContainer-module__w-41--bJfd6",
	"w-42": "SnackbarContainer-module__w-42--mkq6l",
	"w-43": "SnackbarContainer-module__w-43--BIHd8",
	"w-44": "SnackbarContainer-module__w-44--ehIxL",
	"w-45": "SnackbarContainer-module__w-45--kEhAO",
	"w-46": "SnackbarContainer-module__w-46--FEhjc",
	"w-47": "SnackbarContainer-module__w-47--OSXCO",
	"w-48": "SnackbarContainer-module__w-48--STZ3C",
	"w-49": "SnackbarContainer-module__w-49--ZKP_Q",
	"w-50": "SnackbarContainer-module__w-50--OjYiE",
	"w-51": "SnackbarContainer-module__w-51--hsZe7",
	"w-52": "SnackbarContainer-module__w-52--WfAka",
	"w-53": "SnackbarContainer-module__w-53--umw2S",
	"w-54": "SnackbarContainer-module__w-54--fBndR",
	"w-55": "SnackbarContainer-module__w-55--XC6aK",
	"w-56": "SnackbarContainer-module__w-56--JqQMA",
	"w-57": "SnackbarContainer-module__w-57--cdvLE",
	"w-58": "SnackbarContainer-module__w-58--ggfcC",
	"w-59": "SnackbarContainer-module__w-59--MriGo",
	"w-60": "SnackbarContainer-module__w-60--sUPZd",
	"w-61": "SnackbarContainer-module__w-61--e_ETQ",
	"w-62": "SnackbarContainer-module__w-62--Tu0n3",
	"w-63": "SnackbarContainer-module__w-63--lV_WP",
	"w-64": "SnackbarContainer-module__w-64--JChyR",
	"w-65": "SnackbarContainer-module__w-65--jlpBx",
	"w-66": "SnackbarContainer-module__w-66--HOwAm",
	"w-67": "SnackbarContainer-module__w-67--h5fyB",
	"w-68": "SnackbarContainer-module__w-68--nV9od",
	"w-69": "SnackbarContainer-module__w-69--SfeKT",
	"w-70": "SnackbarContainer-module__w-70--DFrGK",
	"w-71": "SnackbarContainer-module__w-71--WVo5J",
	"w-72": "SnackbarContainer-module__w-72--qEa7R",
	"w-73": "SnackbarContainer-module__w-73--ms5uU",
	"w-74": "SnackbarContainer-module__w-74--wY8Ld",
	"w-75": "SnackbarContainer-module__w-75--mRgGJ",
	"w-76": "SnackbarContainer-module__w-76--z1CT_",
	"w-77": "SnackbarContainer-module__w-77--hUqLz",
	"w-78": "SnackbarContainer-module__w-78--YurCm",
	"w-79": "SnackbarContainer-module__w-79--IzJ9n",
	"w-80": "SnackbarContainer-module__w-80--JT50Z",
	"w-81": "SnackbarContainer-module__w-81--uZQTk",
	"w-82": "SnackbarContainer-module__w-82--UVO02",
	"w-83": "SnackbarContainer-module__w-83--SK1xZ",
	"w-84": "SnackbarContainer-module__w-84--HP6Pd",
	"w-85": "SnackbarContainer-module__w-85--rVV5B",
	"w-86": "SnackbarContainer-module__w-86--mLdfx",
	"w-87": "SnackbarContainer-module__w-87--Urdr0",
	"w-88": "SnackbarContainer-module__w-88--sPKUh",
	"w-89": "SnackbarContainer-module__w-89--CDvmY",
	"w-90": "SnackbarContainer-module__w-90--_0HY0",
	"w-91": "SnackbarContainer-module__w-91--YxqJQ",
	"w-92": "SnackbarContainer-module__w-92--WBu9u",
	"w-93": "SnackbarContainer-module__w-93--LUvLa",
	"w-94": "SnackbarContainer-module__w-94--TRcLf",
	"w-95": "SnackbarContainer-module__w-95--ZNKdJ",
	"w-96": "SnackbarContainer-module__w-96--BiLMi",
	"w-97": "SnackbarContainer-module__w-97--ySZcz",
	"w-98": "SnackbarContainer-module__w-98--KtLxW",
	"w-99": "SnackbarContainer-module__w-99--Ax2QB",
	"w-100": "SnackbarContainer-module__w-100--MnH0H",
	"w-101": "SnackbarContainer-module__w-101--xJcXT",
	"w-102": "SnackbarContainer-module__w-102--A9IJV",
	"w-103": "SnackbarContainer-module__w-103--cAjY3",
	"w-104": "SnackbarContainer-module__w-104--UTxiq",
	"w-105": "SnackbarContainer-module__w-105--rFOwm",
	"snackbars": "SnackbarContainer-module__snackbars--tc0QC",
	"bottom": "SnackbarContainer-module__bottom--AGi7f",
	"top": "SnackbarContainer-module__top--QRjr4",
	"start": "SnackbarContainer-module__start--n7LOy",
	"center": "SnackbarContainer-module__center--N7Azo",
	"end": "SnackbarContainer-module__end--J5Asy"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Notifications/Snackbar/SnackbarItem/SnackbarItem.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarItem-module__sr-only--eZ1bg{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.SnackbarItem-module__hidden--V8va5{display:none}.SnackbarItem-module__slide-in--qUDHP{animation:SnackbarItem-module__slide-in--qUDHP .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__slide-in--qUDHP{animation-duration:.1ms}}.SnackbarItem-module__slide-out--c2p0v{animation:SnackbarItem-module__slide-out--c2p0v .5s forwards}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__slide-out--c2p0v{animation-duration:.1ms}}@keyframes SnackbarItem-module__slide-in--qUDHP{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes SnackbarItem-module__slide-out--c2p0v{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarItem-module__w-6--A9vPE{width:6%}.SnackbarItem-module__w-7--oLfCp{width:7%}.SnackbarItem-module__w-8--DZGcj{width:8%}.SnackbarItem-module__w-9--eMRI5{width:9%}.SnackbarItem-module__w-10--rbSEE{width:10%}.SnackbarItem-module__w-11--pVlnT{width:11%}.SnackbarItem-module__w-12--oftxZ{width:12%}.SnackbarItem-module__w-13--B0ljN{width:13%}.SnackbarItem-module__w-14--zTIx7{width:14%}.SnackbarItem-module__w-15--RrOe5{width:15%}.SnackbarItem-module__w-16--QqsTZ{width:16%}.SnackbarItem-module__w-17--a7mBT{width:17%}.SnackbarItem-module__w-18--Y4j7F{width:18%}.SnackbarItem-module__w-19--Ol4If{width:19%}.SnackbarItem-module__w-20--TwkjA{width:20%}.SnackbarItem-module__w-21--voZKh{width:21%}.SnackbarItem-module__w-22--QAaEu{width:22%}.SnackbarItem-module__w-23--xbwFi{width:23%}.SnackbarItem-module__w-24--JAAfs{width:24%}.SnackbarItem-module__w-25--jl7F4{width:25%}.SnackbarItem-module__w-26--piIzQ{width:26%}.SnackbarItem-module__w-27--SQwjb{width:27%}.SnackbarItem-module__w-28--DYTLD{width:28%}.SnackbarItem-module__w-29--qksd5{width:29%}.SnackbarItem-module__w-30--N9l2w{width:30%}.SnackbarItem-module__w-31--MoiSL{width:31%}.SnackbarItem-module__w-32--_ad9_{width:32%}.SnackbarItem-module__w-33--muLP8{width:33%}.SnackbarItem-module__w-34--yfGXR{width:34%}.SnackbarItem-module__w-35--r4RpO{width:35%}.SnackbarItem-module__w-36--LDlat{width:36%}.SnackbarItem-module__w-37--bFpqy{width:37%}.SnackbarItem-module__w-38--o0tG_{width:38%}.SnackbarItem-module__w-39--cwFG5{width:39%}.SnackbarItem-module__w-40--Jc0Qf{width:40%}.SnackbarItem-module__w-41--x9r3l{width:41%}.SnackbarItem-module__w-42--zZ_7d{width:42%}.SnackbarItem-module__w-43--uOaql{width:43%}.SnackbarItem-module__w-44--hVF33{width:44%}.SnackbarItem-module__w-45--ZhrSP{width:45%}.SnackbarItem-module__w-46--eGlRo{width:46%}.SnackbarItem-module__w-47--QBKE2{width:47%}.SnackbarItem-module__w-48--ZsUE3{width:48%}.SnackbarItem-module__w-49--dLutg{width:49%}.SnackbarItem-module__w-50--icv4D{width:50%}.SnackbarItem-module__w-51--y9Svo{width:51%}.SnackbarItem-module__w-52--Yk6vP{width:52%}.SnackbarItem-module__w-53--DvuzL{width:53%}.SnackbarItem-module__w-54--sX2ot{width:54%}.SnackbarItem-module__w-55--DoWUa{width:55%}.SnackbarItem-module__w-56--eHOeL{width:56%}.SnackbarItem-module__w-57--p3OEc{width:57%}.SnackbarItem-module__w-58--hMxZF{width:58%}.SnackbarItem-module__w-59--pdhqI{width:59%}.SnackbarItem-module__w-60--Z6u49{width:60%}.SnackbarItem-module__w-61--i111d{width:61%}.SnackbarItem-module__w-62--k2d_Y{width:62%}.SnackbarItem-module__w-63--aUyC3{width:63%}.SnackbarItem-module__w-64--jmQJg{width:64%}.SnackbarItem-module__w-65--w_yW_{width:65%}.SnackbarItem-module__w-66--NzLoy{width:66%}.SnackbarItem-module__w-67--NO8Jb{width:67%}.SnackbarItem-module__w-68--zPIYF{width:68%}.SnackbarItem-module__w-69--TrD5s{width:69%}.SnackbarItem-module__w-70--VcG9_{width:70%}.SnackbarItem-module__w-71--bCqbZ{width:71%}.SnackbarItem-module__w-72--qN0Sf{width:72%}.SnackbarItem-module__w-73--yfUca{width:73%}.SnackbarItem-module__w-74--HYKgO{width:74%}.SnackbarItem-module__w-75--_5fqn{width:75%}.SnackbarItem-module__w-76--afU47{width:76%}.SnackbarItem-module__w-77--d8HSt{width:77%}.SnackbarItem-module__w-78--wz3cw{width:78%}.SnackbarItem-module__w-79--MWKK3{width:79%}.SnackbarItem-module__w-80--nEuc7{width:80%}.SnackbarItem-module__w-81--X_b0C{width:81%}.SnackbarItem-module__w-82--XgbF0{width:82%}.SnackbarItem-module__w-83--AbFW8{width:83%}.SnackbarItem-module__w-84--qAfY3{width:84%}.SnackbarItem-module__w-85--Q1V7i{width:85%}.SnackbarItem-module__w-86--yy2Ql{width:86%}.SnackbarItem-module__w-87--lNeKb{width:87%}.SnackbarItem-module__w-88--MSLJZ{width:88%}.SnackbarItem-module__w-89--tXEFd{width:89%}.SnackbarItem-module__w-90--vMSZI{width:90%}.SnackbarItem-module__w-91--mA4yB{width:91%}.SnackbarItem-module__w-92--swCgh{width:92%}.SnackbarItem-module__w-93--fBBz7{width:93%}.SnackbarItem-module__w-94--K91JT{width:94%}.SnackbarItem-module__w-95--r36qk{width:95%}.SnackbarItem-module__w-96--pdz49{width:96%}.SnackbarItem-module__w-97--crhru{width:97%}.SnackbarItem-module__w-98--TD0T8{width:98%}.SnackbarItem-module__w-99--okhE2{width:99%}.SnackbarItem-module__w-100--ahiSk{width:100%}.SnackbarItem-module__w-101--AKUgV{width:101%}.SnackbarItem-module__w-102--kQW53{width:102%}.SnackbarItem-module__w-103--t6W2z{width:103%}.SnackbarItem-module__w-104--djfBV{width:104%}.SnackbarItem-module__w-105--Qf4tB{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.SnackbarItem-module__snackbar--dcufU{padding:1rem 1.25rem;border-radius:var(--snackbar-border-radius);display:flex;width:100%;box-sizing:border-box;transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out;flex-grow:0}@media(prefers-reduced-motion: reduce){.SnackbarItem-module__snackbar--dcufU{transition-duration:.1ms}}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__info--CSCWu{background-color:var(--snackbar-info-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__success--gEUUJ{background-color:var(--snackbar-success-background-color)}.SnackbarItem-module__snackbar--dcufU.SnackbarItem-module__error--T63Uq{background-color:var(--snackbar-error-background-color)}.SnackbarItem-module__snackbar--dcufU+.SnackbarItem-module__snackbar--dcufU{margin-top:.5rem}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__container--PeQON{flex:1}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__headline--BP8jw{display:flex;color:var(--snackbar-text-color)}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH{color:var(--snackbar-text-color)}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:hover,.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:focus{border-color:var(--snackbar-text-color)}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:active{border-color:rgba(0,0,0,0)}.SnackbarItem-module__snackbar--dcufU #SnackbarItem-module__close-btn--VlPbH:active:after{top:0;height:100%;background-color:var(--snackbar-text-color)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__icon--azl89{color:var(--snackbar-text-color);margin-top:.5rem;font-size:1.25rem;line-height:var(--default-line-height)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__title--BTBlp{color:var(--snackbar-text-color);flex:1;margin:.375rem 1.25rem 0 .75rem}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__content--_ubCv{margin:.25rem .75rem 0 .75rem;color:var(--snackbar-text-color)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__actions--S1N_9{margin:.5rem .75rem 0 .75rem;text-align:right}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);font-weight:700;margin:0;padding:.625rem 1.25rem;cursor:pointer;transition:color,background-color,border-color .2s ease-in-out;font-family:var(--font-family);color:var(--snackbar-text-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:disabled{color:var(--greyed-out);cursor:not-allowed}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:focus-visible{outline:1px solid var(--snackbar-text-color);outline-offset:1px}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):hover,.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:not(:disabled):focus{border-color:var(--snackbar-text-color)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:active{position:relative;border:0 rgba(0,0,0,0);padding:calc(.625rem + var(--button-border-width)) calc(1.25rem + var(--button-border-width))}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH:active:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--snackbar-text-color);border-radius:var(--button-border-radius);filter:opacity(0.1)}.SnackbarItem-module__snackbar--dcufU .SnackbarItem-module__action-button--FX3PH+.SnackbarItem-module__action-button--FX3PH{margin-left:1rem}@media only screen and (min-width: 37.5em){.SnackbarItem-module__snackbar--dcufU{width:37.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "SnackbarItem-module__sr-only--eZ1bg",
	"hidden": "SnackbarItem-module__hidden--V8va5",
	"slide-in": "SnackbarItem-module__slide-in--qUDHP",
	"slide-out": "SnackbarItem-module__slide-out--c2p0v",
	"w-6": "SnackbarItem-module__w-6--A9vPE",
	"w-7": "SnackbarItem-module__w-7--oLfCp",
	"w-8": "SnackbarItem-module__w-8--DZGcj",
	"w-9": "SnackbarItem-module__w-9--eMRI5",
	"w-10": "SnackbarItem-module__w-10--rbSEE",
	"w-11": "SnackbarItem-module__w-11--pVlnT",
	"w-12": "SnackbarItem-module__w-12--oftxZ",
	"w-13": "SnackbarItem-module__w-13--B0ljN",
	"w-14": "SnackbarItem-module__w-14--zTIx7",
	"w-15": "SnackbarItem-module__w-15--RrOe5",
	"w-16": "SnackbarItem-module__w-16--QqsTZ",
	"w-17": "SnackbarItem-module__w-17--a7mBT",
	"w-18": "SnackbarItem-module__w-18--Y4j7F",
	"w-19": "SnackbarItem-module__w-19--Ol4If",
	"w-20": "SnackbarItem-module__w-20--TwkjA",
	"w-21": "SnackbarItem-module__w-21--voZKh",
	"w-22": "SnackbarItem-module__w-22--QAaEu",
	"w-23": "SnackbarItem-module__w-23--xbwFi",
	"w-24": "SnackbarItem-module__w-24--JAAfs",
	"w-25": "SnackbarItem-module__w-25--jl7F4",
	"w-26": "SnackbarItem-module__w-26--piIzQ",
	"w-27": "SnackbarItem-module__w-27--SQwjb",
	"w-28": "SnackbarItem-module__w-28--DYTLD",
	"w-29": "SnackbarItem-module__w-29--qksd5",
	"w-30": "SnackbarItem-module__w-30--N9l2w",
	"w-31": "SnackbarItem-module__w-31--MoiSL",
	"w-32": "SnackbarItem-module__w-32--_ad9_",
	"w-33": "SnackbarItem-module__w-33--muLP8",
	"w-34": "SnackbarItem-module__w-34--yfGXR",
	"w-35": "SnackbarItem-module__w-35--r4RpO",
	"w-36": "SnackbarItem-module__w-36--LDlat",
	"w-37": "SnackbarItem-module__w-37--bFpqy",
	"w-38": "SnackbarItem-module__w-38--o0tG_",
	"w-39": "SnackbarItem-module__w-39--cwFG5",
	"w-40": "SnackbarItem-module__w-40--Jc0Qf",
	"w-41": "SnackbarItem-module__w-41--x9r3l",
	"w-42": "SnackbarItem-module__w-42--zZ_7d",
	"w-43": "SnackbarItem-module__w-43--uOaql",
	"w-44": "SnackbarItem-module__w-44--hVF33",
	"w-45": "SnackbarItem-module__w-45--ZhrSP",
	"w-46": "SnackbarItem-module__w-46--eGlRo",
	"w-47": "SnackbarItem-module__w-47--QBKE2",
	"w-48": "SnackbarItem-module__w-48--ZsUE3",
	"w-49": "SnackbarItem-module__w-49--dLutg",
	"w-50": "SnackbarItem-module__w-50--icv4D",
	"w-51": "SnackbarItem-module__w-51--y9Svo",
	"w-52": "SnackbarItem-module__w-52--Yk6vP",
	"w-53": "SnackbarItem-module__w-53--DvuzL",
	"w-54": "SnackbarItem-module__w-54--sX2ot",
	"w-55": "SnackbarItem-module__w-55--DoWUa",
	"w-56": "SnackbarItem-module__w-56--eHOeL",
	"w-57": "SnackbarItem-module__w-57--p3OEc",
	"w-58": "SnackbarItem-module__w-58--hMxZF",
	"w-59": "SnackbarItem-module__w-59--pdhqI",
	"w-60": "SnackbarItem-module__w-60--Z6u49",
	"w-61": "SnackbarItem-module__w-61--i111d",
	"w-62": "SnackbarItem-module__w-62--k2d_Y",
	"w-63": "SnackbarItem-module__w-63--aUyC3",
	"w-64": "SnackbarItem-module__w-64--jmQJg",
	"w-65": "SnackbarItem-module__w-65--w_yW_",
	"w-66": "SnackbarItem-module__w-66--NzLoy",
	"w-67": "SnackbarItem-module__w-67--NO8Jb",
	"w-68": "SnackbarItem-module__w-68--zPIYF",
	"w-69": "SnackbarItem-module__w-69--TrD5s",
	"w-70": "SnackbarItem-module__w-70--VcG9_",
	"w-71": "SnackbarItem-module__w-71--bCqbZ",
	"w-72": "SnackbarItem-module__w-72--qN0Sf",
	"w-73": "SnackbarItem-module__w-73--yfUca",
	"w-74": "SnackbarItem-module__w-74--HYKgO",
	"w-75": "SnackbarItem-module__w-75--_5fqn",
	"w-76": "SnackbarItem-module__w-76--afU47",
	"w-77": "SnackbarItem-module__w-77--d8HSt",
	"w-78": "SnackbarItem-module__w-78--wz3cw",
	"w-79": "SnackbarItem-module__w-79--MWKK3",
	"w-80": "SnackbarItem-module__w-80--nEuc7",
	"w-81": "SnackbarItem-module__w-81--X_b0C",
	"w-82": "SnackbarItem-module__w-82--XgbF0",
	"w-83": "SnackbarItem-module__w-83--AbFW8",
	"w-84": "SnackbarItem-module__w-84--qAfY3",
	"w-85": "SnackbarItem-module__w-85--Q1V7i",
	"w-86": "SnackbarItem-module__w-86--yy2Ql",
	"w-87": "SnackbarItem-module__w-87--lNeKb",
	"w-88": "SnackbarItem-module__w-88--MSLJZ",
	"w-89": "SnackbarItem-module__w-89--tXEFd",
	"w-90": "SnackbarItem-module__w-90--vMSZI",
	"w-91": "SnackbarItem-module__w-91--mA4yB",
	"w-92": "SnackbarItem-module__w-92--swCgh",
	"w-93": "SnackbarItem-module__w-93--fBBz7",
	"w-94": "SnackbarItem-module__w-94--K91JT",
	"w-95": "SnackbarItem-module__w-95--r36qk",
	"w-96": "SnackbarItem-module__w-96--pdz49",
	"w-97": "SnackbarItem-module__w-97--crhru",
	"w-98": "SnackbarItem-module__w-98--TD0T8",
	"w-99": "SnackbarItem-module__w-99--okhE2",
	"w-100": "SnackbarItem-module__w-100--ahiSk",
	"w-101": "SnackbarItem-module__w-101--AKUgV",
	"w-102": "SnackbarItem-module__w-102--kQW53",
	"w-103": "SnackbarItem-module__w-103--t6W2z",
	"w-104": "SnackbarItem-module__w-104--djfBV",
	"w-105": "SnackbarItem-module__w-105--Qf4tB",
	"snackbar": "SnackbarItem-module__snackbar--dcufU",
	"info": "SnackbarItem-module__info--CSCWu",
	"success": "SnackbarItem-module__success--gEUUJ",
	"error": "SnackbarItem-module__error--T63Uq",
	"container": "SnackbarItem-module__container--PeQON",
	"headline": "SnackbarItem-module__headline--BP8jw",
	"close-btn": "SnackbarItem-module__close-btn--VlPbH",
	"icon": "SnackbarItem-module__icon--azl89",
	"title": "SnackbarItem-module__title--BTBlp",
	"content": "SnackbarItem-module__content--_ubCv",
	"actions": "SnackbarItem-module__actions--S1N_9",
	"action-button": "SnackbarItem-module__action-button--FX3PH"
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