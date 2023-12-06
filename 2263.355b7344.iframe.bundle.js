"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2263],{

/***/ "./src/components/Link/Link.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: function() { return /* binding */ Link; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Link/Link.module.scss
var Link_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Link/Link.module.scss");
;// CONCATENATED MODULE: ./src/components/Link/Link.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Link_module/* default */.Z, options);




       /* harmony default export */ var Link_Link_module = (Link_module/* default */.Z && Link_module/* default */.Z.locals ? Link_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Link/Link.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["children", "className", "disabled", "prefixIcon", "to", "color", "type", "display", "buttonVariant", "component"];
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



var LinkComponent = function LinkComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$prefixIcon = _ref.prefixIcon,
    prefixIcon = _ref$prefixIcon === void 0 ? undefined : _ref$prefixIcon,
    to = _ref.to,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "internal" : _ref$type,
    _ref$display = _ref.display,
    display = _ref$display === void 0 ? "link" : _ref$display,
    _ref$buttonVariant = _ref.buttonVariant,
    buttonVariant = _ref$buttonVariant === void 0 ? "fill" : _ref$buttonVariant,
    component = _ref.component,
    rest = _objectWithoutProperties(_ref, _excluded);
  var determineTarget = function determineTarget() {
    if (rest.target) {
      return rest.target;
    }
    if (type === "external") {
      return "_blank";
    }
    return "";
  };
  var classNames = [Link_Link_module[color]];
  display === "link" && classNames.push(Link_Link_module["link"]);
  display === "button" && classNames.push(Link_Link_module["button"], Link_Link_module[buttonVariant]);
  disabled && classNames.push(Link_Link_module["disabled"]);
  className && classNames.push(className);
  if (component) {
    return /*#__PURE__*/react.createElement(component, _objectSpread(_objectSpread({}, rest), {}, {
      ref: ref,
      to: to,
      className: classNames.join(" "),
      "aria-disabled": disabled,
      style: _objectSpread({}, rest.style)
    }), children);
  }
  return /*#__PURE__*/react.createElement("a", _extends({}, rest, {
    ref: ref,
    download: type === "download",
    rel: type === "external" ? "noopener noreferer" : undefined,
    href: !disabled ? to : undefined,
    className: classNames.join(" "),
    "aria-disabled": disabled,
    target: determineTarget(),
    style: _objectSpread({}, rest.style)
  }), prefixIcon, /*#__PURE__*/react.createElement("span", {
    "data-underline": "true"
  }, children));
};
var Link = /*#__PURE__*/react.forwardRef(LinkComponent);
try {
    // @ts-ignore
    Link.displayName = "Link";
    // @ts-ignore
    Link.__docgenInfo = { "description": "", "displayName": "Link", "props": { "component": { "defaultValue": null, "description": "", "name": "component", "required": false, "type": { "name": "ForwardRefExoticComponent<any>" } }, "color": { "defaultValue": { value: "primary" }, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"tertiary\"" }] } }, "disabled": { "defaultValue": { value: "false" }, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "internal" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"download\"" }, { "value": "\"external\"" }, { "value": "\"internal\"" }] } }, "prefixIcon": { "defaultValue": { value: "undefined" }, "description": "", "name": "prefixIcon", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLDivElement>>>" } }, "display": { "defaultValue": { value: "link" }, "description": "", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"link\"" }] } }, "buttonVariant": { "defaultValue": { value: "fill" }, "description": "", "name": "buttonVariant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fill\"" }, { "value": "\"text\"" }, { "value": "\"outline\"" }] } }, "to": { "defaultValue": null, "description": "", "name": "to", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"] = { docgenInfo: Link.__docgenInfo, name: "Link", path: "src/components/Link/Link.tsx#Link" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Link/Link.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Link-module__sr-only--dUukE{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Link-module__hidden--NMGpf{display:none}.Link-module__slide-in--FCRAS{animation:Link-module__slide-in--FCRAS .5s forwards}@media(prefers-reduced-motion: reduce){.Link-module__slide-in--FCRAS{animation-duration:.1ms}}.Link-module__slide-out--khLEt{animation:Link-module__slide-out--khLEt .5s forwards}@media(prefers-reduced-motion: reduce){.Link-module__slide-out--khLEt{animation-duration:.1ms}}@keyframes Link-module__slide-in--FCRAS{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Link-module__slide-out--khLEt{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Link-module__link--bnulR{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:normal;text-transform:none;letter-spacing:0}.Link-module__link--bnulR:focus,.Link-module__link--bnulR:hover,.Link-module__link--bnulR:active{text-decoration-thickness:.125rem;outline:0}.Link-module__link--bnulR.Link-module__primary--YrdLn{color:var(--color-primary)}.Link-module__link--bnulR.Link-module__primary--YrdLn:focus-visible{outline:.5px dashed var(--color-primary)}.Link-module__link--bnulR.Link-module__secondary--kjLw6{color:var(--color-secondary)}.Link-module__link--bnulR.Link-module__secondary--kjLw6:focus-visible{outline:.5px dashed var(--color-primary)}.Link-module__link--bnulR.Link-module__tertiary--OlSJh{color:var(--color-tertiary)}.Link-module__link--bnulR.Link-module__tertiary--OlSJh:focus-visible{outline:.5px dashed var(--color-primary)}.Link-module__link--bnulR.Link-module__disabled--GVrDm{cursor:not-allowed;color:var(--greyed-out)}.Link-module__button--WwADl{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.5rem .75rem;min-height:2.5rem;cursor:pointer;transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);text-decoration:none}@media(prefers-reduced-motion: reduce){.Link-module__button--WwADl{transition-duration:.1ms}}.Link-module__button--WwADl.Link-module__disabled--GVrDm{color:var(--greyed-out);cursor:not-allowed}.Link-module__button--WwADl.Link-module__fill--W47HR{font-weight:500}.Link-module__button--WwADl.Link-module__fill--W47HR:not(.Link-module__disabled--GVrDm){color:var(--button-fill-text-color);background-color:var(--button-primary-default-color);border-color:var(--button-primary-default-color)}.Link-module__button--WwADl.Link-module__fill--W47HR:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){background-color:var(--button-primary-hover-color)}.Link-module__button--WwADl.Link-module__fill--W47HR:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__fill--W47HR:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){background-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__fill--W47HR:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__fill--W47HR:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){background-color:var(--button-primary-pressed-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb{background-color:var(--white);font-weight:500}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm){border-color:var(--button-primary-default-color);color:var(--button-primary-default-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-primary-hover-color);background-color:var(--color-black10);border-color:var(--button-primary-hover-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-primary-focused-color);border-color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-primary-pressed-color);border-color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm){border-color:var(--button-secondary-default-color);color:var(--button-secondary-default-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-hover-color);background-color:var(--color-black10);border-color:var(--button-secondary-hover-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-focused-color);border-color:var(--button-secondary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-pressed-color);border-color:var(--button-secondary-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm){border-color:var(--button-warning-default-color);color:var(--button-warning-default-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-warning-hover-color);background-color:var(--color-black10);border-color:var(--button-warning-hover-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-warning-focused-color);border-color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-warning-pressed-color);border-color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm){border-color:var(--button-default-color);color:var(--button-default-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-default-hover-color);background-color:var(--color-black10);border-color:var(--button-default-hover-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-default-focused-color);border-color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-default-pressed-color);border-color:var(--button-default-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm){border-color:var(--button-danger-default-color);color:var(--button-danger-default-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-danger-hover-color);background-color:var(--color-black10);border-color:var(--button-danger-hover-color)}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-danger-focused-color);border-color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__outline--pPuJb.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-danger-pressed-color);border-color:var(--button-danger-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__text--JCYil{border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm){color:var(--button-primary-default-color)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-primary-hover-color);background-color:var(--color-black10)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-primary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__primary--YrdLn:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-primary-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-default-color)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-hover-color);background-color:var(--color-black10)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__secondary--kjLw6:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-secondary-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm){color:var(--button-warning-default-color)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-warning-hover-color);background-color:var(--color-black10)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-warning-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__warning--ZnX9b:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-warning-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm){color:var(--button-default-color)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-default-hover-color);background-color:var(--color-black10)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-default-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__default--PUUlD:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-default-pressed-color);background-color:var(--color-black20)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm){color:var(--button-danger-default-color)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):hover:not(.Link-module__disabled--GVrDm){color:var(--button-danger-hover-color);background-color:var(--color-black10)}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):focus:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):focus-visible:not(.Link-module__disabled--GVrDm){color:var(--button-danger-focused-color);position:relative;outline:2px solid var(--color-focus);outline-offset:2px;border-radius:1px;z-index:2}.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):active:not(.Link-module__disabled--GVrDm),.Link-module__button--WwADl.Link-module__text--JCYil.Link-module__danger--Fzw7i:not(.Link-module__disabled--GVrDm):visited:not(.Link-module__disabled--GVrDm){color:var(--button-danger-pressed-color);background-color:var(--color-black20)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Link-module__sr-only--dUukE",
	"hidden": "Link-module__hidden--NMGpf",
	"slide-in": "Link-module__slide-in--FCRAS",
	"slide-out": "Link-module__slide-out--khLEt",
	"link": "Link-module__link--bnulR",
	"primary": "Link-module__primary--YrdLn",
	"secondary": "Link-module__secondary--kjLw6",
	"tertiary": "Link-module__tertiary--OlSJh",
	"disabled": "Link-module__disabled--GVrDm",
	"button": "Link-module__button--WwADl",
	"fill": "Link-module__fill--W47HR",
	"outline": "Link-module__outline--pPuJb",
	"warning": "Link-module__warning--ZnX9b",
	"default": "Link-module__default--PUUlD",
	"danger": "Link-module__danger--Fzw7i",
	"text": "Link-module__text--JCYil"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);