"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5329],{

/***/ "./src/components/Form/Textarea/Textarea.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": function() { return /* binding */ Textarea; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Textarea/Textarea.module.scss
var Textarea_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Textarea/Textarea.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Textarea/Textarea.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Textarea_module/* default */.Z, options);




       /* harmony default export */ var Textarea_Textarea_module = (Textarea_module/* default */.Z && Textarea_module/* default.locals */.Z.locals ? Textarea_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Textarea/Textarea.tsx
var _excluded = ["error", "success", "disabled", "className", "rows", "wrapperProps", "onFocus", "onBlur"];
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




var TextareaComponent = function TextareaComponent(_ref, ref) {
  var _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$success = _ref.success,
    success = _ref$success === void 0 ? false : _ref$success,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    className = _ref.className,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    wrapperProps = _ref.wrapperProps,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    focus = _useState2[0],
    setFocus = _useState2[1];
  var wrapperClasses = [Textarea_Textarea_module["textarea-wrapper"]];
  var outlineClasses = [Textarea_Textarea_module.outline];
  (wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.className) && wrapperClasses.push(wrapperProps.className);
  disabled && wrapperClasses.push(Textarea_Textarea_module.disabled) && outlineClasses.push(Textarea_Textarea_module.disabled);
  error && wrapperClasses.push(Textarea_Textarea_module.error) && outlineClasses.push(Textarea_Textarea_module.error);
  focus && wrapperClasses.push(Textarea_Textarea_module.focus) && outlineClasses.push(Textarea_Textarea_module.focus);
  success && wrapperClasses.push("success");
  var icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.U)({
    success: success,
    error: error
  });
  return /*#__PURE__*/react.createElement("div", _extends({}, wrapperProps, {
    className: wrapperClasses.join(" ")
  }), /*#__PURE__*/react.createElement("textarea", _extends({}, rest, {
    ref: ref,
    rows: rows,
    className: "".concat(error ? Textarea_Textarea_module.error : "", " ").concat(Textarea_Textarea_module.textarea, " ").concat(className !== null && className !== void 0 ? className : ""),
    disabled: disabled,
    onFocus: function onFocus(event) {
      setFocus(true);
      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(event);
    }
  })), icon, /*#__PURE__*/react.createElement("span", {
    className: outlineClasses.join(" ")
  }));
};
var Textarea = /*#__PURE__*/react.forwardRef(TextareaComponent);
try {
    // @ts-ignore
    Textarea.displayName = "Textarea";
    // @ts-ignore
    Textarea.__docgenInfo = { "description": "", "displayName": "Textarea", "props": { "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "wrapperProps": { "defaultValue": null, "description": "", "name": "wrapperProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, \"ref\"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ...; })" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Textarea/Textarea.tsx#Textarea"] = { docgenInfo: Textarea.__docgenInfo, name: "Textarea", path: "src/components/Form/Textarea/Textarea.tsx#Textarea" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Textarea/Textarea.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Textarea-module__sr-only--nIRiE{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Textarea-module__hidden--Hl4Nb{display:none}.Textarea-module__slide-in--Qfmo8{animation:Textarea-module__slide-in--Qfmo8 .5s forwards}@media(prefers-reduced-motion: reduce){.Textarea-module__slide-in--Qfmo8{animation-duration:.1ms}}.Textarea-module__slide-out--KeLp9{animation:Textarea-module__slide-out--KeLp9 .5s forwards}@media(prefers-reduced-motion: reduce){.Textarea-module__slide-out--KeLp9{animation-duration:.1ms}}@keyframes Textarea-module__slide-in--Qfmo8{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Textarea-module__slide-out--KeLp9{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Textarea-module__w-6--DDMmA{width:6%}.Textarea-module__w-7--VRhQU{width:7%}.Textarea-module__w-8--QCiat{width:8%}.Textarea-module__w-9--H75_w{width:9%}.Textarea-module__w-10--guC_q{width:10%}.Textarea-module__w-11--ZhE6e{width:11%}.Textarea-module__w-12--Ye1s9{width:12%}.Textarea-module__w-13--JQrxk{width:13%}.Textarea-module__w-14--rwcL7{width:14%}.Textarea-module__w-15--_SUfJ{width:15%}.Textarea-module__w-16--IrMvs{width:16%}.Textarea-module__w-17--QfbeC{width:17%}.Textarea-module__w-18--SxJSz{width:18%}.Textarea-module__w-19--J_gLH{width:19%}.Textarea-module__w-20--UEN26{width:20%}.Textarea-module__w-21--mTZr4{width:21%}.Textarea-module__w-22--qAvBQ{width:22%}.Textarea-module__w-23--RxUw_{width:23%}.Textarea-module__w-24--JsFRj{width:24%}.Textarea-module__w-25--OXS91{width:25%}.Textarea-module__w-26--FDmmI{width:26%}.Textarea-module__w-27--NwmCg{width:27%}.Textarea-module__w-28--yU4UP{width:28%}.Textarea-module__w-29--wvXpK{width:29%}.Textarea-module__w-30--J6pVd{width:30%}.Textarea-module__w-31--lX5yA{width:31%}.Textarea-module__w-32--jviO3{width:32%}.Textarea-module__w-33--IMdJ3{width:33%}.Textarea-module__w-34--_Dj9p{width:34%}.Textarea-module__w-35--aOGvl{width:35%}.Textarea-module__w-36--quDsX{width:36%}.Textarea-module__w-37--IVEhl{width:37%}.Textarea-module__w-38--rH5fa{width:38%}.Textarea-module__w-39--k03qv{width:39%}.Textarea-module__w-40--h_l4o{width:40%}.Textarea-module__w-41--BgiB3{width:41%}.Textarea-module__w-42--awT4x{width:42%}.Textarea-module__w-43--O9IYh{width:43%}.Textarea-module__w-44--iOB_T{width:44%}.Textarea-module__w-45--eTFCB{width:45%}.Textarea-module__w-46--YT1Cp{width:46%}.Textarea-module__w-47--U_zDi{width:47%}.Textarea-module__w-48--chU6f{width:48%}.Textarea-module__w-49--HlQ2u{width:49%}.Textarea-module__w-50--rVUY4{width:50%}.Textarea-module__w-51--kif9x{width:51%}.Textarea-module__w-52--qVn2o{width:52%}.Textarea-module__w-53--B7RCu{width:53%}.Textarea-module__w-54--XOJl_{width:54%}.Textarea-module__w-55--l_xT7{width:55%}.Textarea-module__w-56--dQS9U{width:56%}.Textarea-module__w-57--e6FhO{width:57%}.Textarea-module__w-58--gJH2e{width:58%}.Textarea-module__w-59--zEvhg{width:59%}.Textarea-module__w-60--aXtrd{width:60%}.Textarea-module__w-61--Ux0Yk{width:61%}.Textarea-module__w-62--LjoMb{width:62%}.Textarea-module__w-63--yR_wq{width:63%}.Textarea-module__w-64--GgR3g{width:64%}.Textarea-module__w-65--EdZvv{width:65%}.Textarea-module__w-66--Y6q29{width:66%}.Textarea-module__w-67--RcrAB{width:67%}.Textarea-module__w-68--WEfVo{width:68%}.Textarea-module__w-69--fgO1D{width:69%}.Textarea-module__w-70--OeCrB{width:70%}.Textarea-module__w-71--DWBZU{width:71%}.Textarea-module__w-72--iJHqU{width:72%}.Textarea-module__w-73--utlkw{width:73%}.Textarea-module__w-74--wH0Wt{width:74%}.Textarea-module__w-75--Aocnr{width:75%}.Textarea-module__w-76--r8U2n{width:76%}.Textarea-module__w-77--Smjjq{width:77%}.Textarea-module__w-78--vlF7T{width:78%}.Textarea-module__w-79--B1E0h{width:79%}.Textarea-module__w-80--VDxwg{width:80%}.Textarea-module__w-81--maE7M{width:81%}.Textarea-module__w-82--WZ4Lq{width:82%}.Textarea-module__w-83--ZYqEd{width:83%}.Textarea-module__w-84--FLqO6{width:84%}.Textarea-module__w-85--ja8K3{width:85%}.Textarea-module__w-86--y2Tw3{width:86%}.Textarea-module__w-87--hOezH{width:87%}.Textarea-module__w-88--wUwgi{width:88%}.Textarea-module__w-89--iLxzo{width:89%}.Textarea-module__w-90--eJayZ{width:90%}.Textarea-module__w-91--HwEqU{width:91%}.Textarea-module__w-92--F3iF8{width:92%}.Textarea-module__w-93--_omyo{width:93%}.Textarea-module__w-94--omuHA{width:94%}.Textarea-module__w-95--LUzh2{width:95%}.Textarea-module__w-96--gifbO{width:96%}.Textarea-module__w-97--QjeYF{width:97%}.Textarea-module__w-98--xXjrH{width:98%}.Textarea-module__w-99--trOAf{width:99%}.Textarea-module__w-100--_BB5Y{width:100%}.Textarea-module__w-101--dIiTi{width:101%}.Textarea-module__w-102--jXZk7{width:102%}.Textarea-module__w-103--w_X6t{width:103%}.Textarea-module__w-104--XOfTB{width:104%}.Textarea-module__w-105--GtmgQ{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Textarea-module__textarea-wrapper--Ofczb{position:relative;box-sizing:border-box;width:100%}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=success],.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=error]{position:absolute;right:1.25rem;z-index:1;top:.85rem;font-size:1.25rem}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=success]{color:var(--success)}.Textarea-module__textarea-wrapper--Ofczb [data-icon-status=error]{color:var(--error)}.Textarea-module__textarea-wrapper--Ofczb:hover .Textarea-module__outline--xb6j9{border-color:var(--default)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__disabled--dJzi8{border-color:var(--light)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__error--w5n_i{border-color:var(--error)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__focus--_FJAT{border-width:var(--input-border-width-focus)}.Textarea-module__textarea-wrapper--Ofczb .Textarea-module__outline--xb6j9.Textarea-module__focus--_FJAT:not(.Textarea-module__error--w5n_i){border-color:var(--color-focus)}.Textarea-module__textarea--6IQAD{padding:.833em .856em;box-sizing:border-box;border:0;border-radius:var(--input-border-radius);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);font-size:var(--form-control-font-size);color:var(--greyed-out);width:100%;vertical-align:top;resize:vertical}@media(prefers-reduced-motion: reduce){.Textarea-module__textarea--6IQAD{transition-duration:.1ms}}.Textarea-module__textarea--6IQAD:disabled{background-color:var(--disabled);cursor:not-allowed}.Textarea-module__textarea--6IQAD:focus:not(:disabled){outline:none}.Textarea-module__outline--xb6j9{pointer-events:none;position:absolute;margin:0;padding:0;inset:0;border-color:var(--light-grey-border);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Textarea-module__outline--xb6j9{transition-duration:.1ms}}.Textarea-module__error--w5n_i{border-color:var(--error);color:var(--error)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Textarea-module__sr-only--nIRiE",
	"hidden": "Textarea-module__hidden--Hl4Nb",
	"slide-in": "Textarea-module__slide-in--Qfmo8",
	"slide-out": "Textarea-module__slide-out--KeLp9",
	"w-6": "Textarea-module__w-6--DDMmA",
	"w-7": "Textarea-module__w-7--VRhQU",
	"w-8": "Textarea-module__w-8--QCiat",
	"w-9": "Textarea-module__w-9--H75_w",
	"w-10": "Textarea-module__w-10--guC_q",
	"w-11": "Textarea-module__w-11--ZhE6e",
	"w-12": "Textarea-module__w-12--Ye1s9",
	"w-13": "Textarea-module__w-13--JQrxk",
	"w-14": "Textarea-module__w-14--rwcL7",
	"w-15": "Textarea-module__w-15--_SUfJ",
	"w-16": "Textarea-module__w-16--IrMvs",
	"w-17": "Textarea-module__w-17--QfbeC",
	"w-18": "Textarea-module__w-18--SxJSz",
	"w-19": "Textarea-module__w-19--J_gLH",
	"w-20": "Textarea-module__w-20--UEN26",
	"w-21": "Textarea-module__w-21--mTZr4",
	"w-22": "Textarea-module__w-22--qAvBQ",
	"w-23": "Textarea-module__w-23--RxUw_",
	"w-24": "Textarea-module__w-24--JsFRj",
	"w-25": "Textarea-module__w-25--OXS91",
	"w-26": "Textarea-module__w-26--FDmmI",
	"w-27": "Textarea-module__w-27--NwmCg",
	"w-28": "Textarea-module__w-28--yU4UP",
	"w-29": "Textarea-module__w-29--wvXpK",
	"w-30": "Textarea-module__w-30--J6pVd",
	"w-31": "Textarea-module__w-31--lX5yA",
	"w-32": "Textarea-module__w-32--jviO3",
	"w-33": "Textarea-module__w-33--IMdJ3",
	"w-34": "Textarea-module__w-34--_Dj9p",
	"w-35": "Textarea-module__w-35--aOGvl",
	"w-36": "Textarea-module__w-36--quDsX",
	"w-37": "Textarea-module__w-37--IVEhl",
	"w-38": "Textarea-module__w-38--rH5fa",
	"w-39": "Textarea-module__w-39--k03qv",
	"w-40": "Textarea-module__w-40--h_l4o",
	"w-41": "Textarea-module__w-41--BgiB3",
	"w-42": "Textarea-module__w-42--awT4x",
	"w-43": "Textarea-module__w-43--O9IYh",
	"w-44": "Textarea-module__w-44--iOB_T",
	"w-45": "Textarea-module__w-45--eTFCB",
	"w-46": "Textarea-module__w-46--YT1Cp",
	"w-47": "Textarea-module__w-47--U_zDi",
	"w-48": "Textarea-module__w-48--chU6f",
	"w-49": "Textarea-module__w-49--HlQ2u",
	"w-50": "Textarea-module__w-50--rVUY4",
	"w-51": "Textarea-module__w-51--kif9x",
	"w-52": "Textarea-module__w-52--qVn2o",
	"w-53": "Textarea-module__w-53--B7RCu",
	"w-54": "Textarea-module__w-54--XOJl_",
	"w-55": "Textarea-module__w-55--l_xT7",
	"w-56": "Textarea-module__w-56--dQS9U",
	"w-57": "Textarea-module__w-57--e6FhO",
	"w-58": "Textarea-module__w-58--gJH2e",
	"w-59": "Textarea-module__w-59--zEvhg",
	"w-60": "Textarea-module__w-60--aXtrd",
	"w-61": "Textarea-module__w-61--Ux0Yk",
	"w-62": "Textarea-module__w-62--LjoMb",
	"w-63": "Textarea-module__w-63--yR_wq",
	"w-64": "Textarea-module__w-64--GgR3g",
	"w-65": "Textarea-module__w-65--EdZvv",
	"w-66": "Textarea-module__w-66--Y6q29",
	"w-67": "Textarea-module__w-67--RcrAB",
	"w-68": "Textarea-module__w-68--WEfVo",
	"w-69": "Textarea-module__w-69--fgO1D",
	"w-70": "Textarea-module__w-70--OeCrB",
	"w-71": "Textarea-module__w-71--DWBZU",
	"w-72": "Textarea-module__w-72--iJHqU",
	"w-73": "Textarea-module__w-73--utlkw",
	"w-74": "Textarea-module__w-74--wH0Wt",
	"w-75": "Textarea-module__w-75--Aocnr",
	"w-76": "Textarea-module__w-76--r8U2n",
	"w-77": "Textarea-module__w-77--Smjjq",
	"w-78": "Textarea-module__w-78--vlF7T",
	"w-79": "Textarea-module__w-79--B1E0h",
	"w-80": "Textarea-module__w-80--VDxwg",
	"w-81": "Textarea-module__w-81--maE7M",
	"w-82": "Textarea-module__w-82--WZ4Lq",
	"w-83": "Textarea-module__w-83--ZYqEd",
	"w-84": "Textarea-module__w-84--FLqO6",
	"w-85": "Textarea-module__w-85--ja8K3",
	"w-86": "Textarea-module__w-86--y2Tw3",
	"w-87": "Textarea-module__w-87--hOezH",
	"w-88": "Textarea-module__w-88--wUwgi",
	"w-89": "Textarea-module__w-89--iLxzo",
	"w-90": "Textarea-module__w-90--eJayZ",
	"w-91": "Textarea-module__w-91--HwEqU",
	"w-92": "Textarea-module__w-92--F3iF8",
	"w-93": "Textarea-module__w-93--_omyo",
	"w-94": "Textarea-module__w-94--omuHA",
	"w-95": "Textarea-module__w-95--LUzh2",
	"w-96": "Textarea-module__w-96--gifbO",
	"w-97": "Textarea-module__w-97--QjeYF",
	"w-98": "Textarea-module__w-98--xXjrH",
	"w-99": "Textarea-module__w-99--trOAf",
	"w-100": "Textarea-module__w-100--_BB5Y",
	"w-101": "Textarea-module__w-101--dIiTi",
	"w-102": "Textarea-module__w-102--jXZk7",
	"w-103": "Textarea-module__w-103--w_X6t",
	"w-104": "Textarea-module__w-104--XOfTB",
	"w-105": "Textarea-module__w-105--GtmgQ",
	"textarea-wrapper": "Textarea-module__textarea-wrapper--Ofczb",
	"outline": "Textarea-module__outline--xb6j9",
	"disabled": "Textarea-module__disabled--dJzi8",
	"error": "Textarea-module__error--w5n_i",
	"focus": "Textarea-module__focus--_FJAT",
	"textarea": "Textarea-module__textarea--6IQAD"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);