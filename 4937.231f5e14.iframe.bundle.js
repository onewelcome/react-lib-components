"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4937],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF": function() { return /* binding */ withMDXComponents; },
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "ah": function() { return /* binding */ useMDXComponents; },
/* harmony export */   "pC": function() { return /* binding */ MDXContext; }
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

/***/ "./src/components/Button/BaseButton.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": function() { return /* binding */ BaseButton; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseButton_module/* default */.Z, options);




       /* harmony default export */ var Button_BaseButton_module = (BaseButton_module/* default */.Z && BaseButton_module/* default.locals */.Z.locals ? BaseButton_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Spinner.tsx
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


var Spinner = function Spinner(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({}, props, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8323 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.2918 23.4127C6.49076 22.8275 4.85378 21.8243 3.51472 20.4853C2.17565 19.1462 1.17251 17.5092 0.587322 15.7082C0.00212849 13.9072 -0.148504 11.9932 0.14774 10.1228C0.443984 8.25238 1.17869 6.47863 2.2918 4.94658L3.91307 6.1245C2.98585 7.4007 2.37384 8.87823 2.12707 10.4363C1.8803 11.9943 2.00577 13.5887 2.49324 15.0889C2.9807 16.5892 3.81632 17.9528 4.93176 19.0682C6.0472 20.1837 7.4108 21.0193 8.91107 21.5068C10.4113 21.9942 12.0057 22.1197 13.5637 21.8729C15.1218 21.6262 16.5993 21.0141 17.8755 20.0869C19.1517 19.1597 20.1903 17.9436 20.9065 16.5381C21.6227 15.1326 21.996 13.5775 21.996 12H24Z",
    fill: "#5D607E"
  }));
};
try {
    // @ts-ignore
    Spinner.displayName = "Spinner";
    // @ts-ignore
    Spinner.__docgenInfo = { "description": "", "displayName": "Spinner", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/Spinner.tsx#Spinner"] = { docgenInfo: Spinner.__docgenInfo, name: "Spinner", path: "src/components/Button/Spinner.tsx#Spinner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.tsx
var _excluded = ["children", "type", "className", "loading", "disabled"];
function BaseButton_extends() {
  BaseButton_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return BaseButton_extends.apply(this, arguments);
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




var BaseButtonComponent = function BaseButtonComponent(_ref, ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    className = _ref.className,
    loading = _ref.loading,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var validTypes = ["submit", "button", "reset"];
  var isDisabled = disabled !== null && disabled !== void 0 ? disabled : loading;
  if (!validTypes.includes(type)) throw new Error("You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ".concat(type));
  return /*#__PURE__*/react.createElement("button", BaseButton_extends({}, rest, {
    disabled: isDisabled,
    ref: ref,
    type: type,
    className: "".concat(Button_BaseButton_module.button, " ").concat(loading ? Button_BaseButton_module.loading : "", " ").concat(className ? className : "")
  }), loading ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Button_BaseButton_module["content-hidden"]
  }, children), /*#__PURE__*/react.createElement(Spinner, {
    className: Button_BaseButton_module.spinner
  })) : children);
};
var BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"warning\"" }, { "value": "\"primary\"" }, { "value": "\"secondary\"" }, { "value": "\"danger\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseButton-module__w-6--mLhC1{width:6%}.BaseButton-module__w-7--CNa88{width:7%}.BaseButton-module__w-8--uCJWa{width:8%}.BaseButton-module__w-9--mAxTT{width:9%}.BaseButton-module__w-10--ukGdO{width:10%}.BaseButton-module__w-11--Q6c1g{width:11%}.BaseButton-module__w-12--pgH5w{width:12%}.BaseButton-module__w-13--kfc7E{width:13%}.BaseButton-module__w-14--LBrDE{width:14%}.BaseButton-module__w-15--TBQDc{width:15%}.BaseButton-module__w-16--EHgAO{width:16%}.BaseButton-module__w-17--G2mzI{width:17%}.BaseButton-module__w-18--LeH5m{width:18%}.BaseButton-module__w-19--u4mh6{width:19%}.BaseButton-module__w-20--PpKA0{width:20%}.BaseButton-module__w-21--Jrkbk{width:21%}.BaseButton-module__w-22--IJp85{width:22%}.BaseButton-module__w-23--SFUeD{width:23%}.BaseButton-module__w-24--qVlz7{width:24%}.BaseButton-module__w-25--R8kBY{width:25%}.BaseButton-module__w-26--MnqwC{width:26%}.BaseButton-module__w-27--ZgYzC{width:27%}.BaseButton-module__w-28--FgBhm{width:28%}.BaseButton-module__w-29--e1XxG{width:29%}.BaseButton-module__w-30--LKitc{width:30%}.BaseButton-module__w-31--srM25{width:31%}.BaseButton-module__w-32--CRHWm{width:32%}.BaseButton-module__w-33--ix7Tn{width:33%}.BaseButton-module__w-34--oVUUi{width:34%}.BaseButton-module__w-35--XMSjV{width:35%}.BaseButton-module__w-36--A4RGI{width:36%}.BaseButton-module__w-37--OXE3w{width:37%}.BaseButton-module__w-38--ufRZ1{width:38%}.BaseButton-module__w-39--OBl6c{width:39%}.BaseButton-module__w-40--iUg1I{width:40%}.BaseButton-module__w-41--HVw_N{width:41%}.BaseButton-module__w-42--zAvMG{width:42%}.BaseButton-module__w-43--x0vWO{width:43%}.BaseButton-module__w-44--tzVrE{width:44%}.BaseButton-module__w-45--Eg0q0{width:45%}.BaseButton-module__w-46--e68EI{width:46%}.BaseButton-module__w-47--vl6eM{width:47%}.BaseButton-module__w-48--Kq3vA{width:48%}.BaseButton-module__w-49--mqmO1{width:49%}.BaseButton-module__w-50--eTWqs{width:50%}.BaseButton-module__w-51--c8G4E{width:51%}.BaseButton-module__w-52--kr7jt{width:52%}.BaseButton-module__w-53--KnpcY{width:53%}.BaseButton-module__w-54--gLhae{width:54%}.BaseButton-module__w-55--w2s93{width:55%}.BaseButton-module__w-56--yN_Y_{width:56%}.BaseButton-module__w-57--c0DSk{width:57%}.BaseButton-module__w-58--dlNlY{width:58%}.BaseButton-module__w-59--ESCga{width:59%}.BaseButton-module__w-60--nskYE{width:60%}.BaseButton-module__w-61--Zh0fJ{width:61%}.BaseButton-module__w-62--PCKZq{width:62%}.BaseButton-module__w-63--BUaIh{width:63%}.BaseButton-module__w-64--q1TFG{width:64%}.BaseButton-module__w-65--sw00t{width:65%}.BaseButton-module__w-66--mEfcL{width:66%}.BaseButton-module__w-67--IbDoq{width:67%}.BaseButton-module__w-68--oIhVq{width:68%}.BaseButton-module__w-69--rzZbT{width:69%}.BaseButton-module__w-70--ZZdIG{width:70%}.BaseButton-module__w-71--V7x7Q{width:71%}.BaseButton-module__w-72--gtfVY{width:72%}.BaseButton-module__w-73--PqvZf{width:73%}.BaseButton-module__w-74--X87QB{width:74%}.BaseButton-module__w-75--GvBGp{width:75%}.BaseButton-module__w-76--QhTDD{width:76%}.BaseButton-module__w-77--wpEyV{width:77%}.BaseButton-module__w-78--M5I8S{width:78%}.BaseButton-module__w-79--ZarHy{width:79%}.BaseButton-module__w-80--pKVi5{width:80%}.BaseButton-module__w-81--hQWSr{width:81%}.BaseButton-module__w-82--S2n7i{width:82%}.BaseButton-module__w-83--ZpVzu{width:83%}.BaseButton-module__w-84--L3cJh{width:84%}.BaseButton-module__w-85--dALzf{width:85%}.BaseButton-module__w-86--JHrug{width:86%}.BaseButton-module__w-87--G8Jy8{width:87%}.BaseButton-module__w-88--zsA6c{width:88%}.BaseButton-module__w-89--wjkwk{width:89%}.BaseButton-module__w-90--Dcrxw{width:90%}.BaseButton-module__w-91--QV9Zd{width:91%}.BaseButton-module__w-92--Sc3k8{width:92%}.BaseButton-module__w-93--Wf_wK{width:93%}.BaseButton-module__w-94--Ths5D{width:94%}.BaseButton-module__w-95--KpmYv{width:95%}.BaseButton-module__w-96--FV9T5{width:96%}.BaseButton-module__w-97--qKBku{width:97%}.BaseButton-module__w-98--mgDLC{width:98%}.BaseButton-module__w-99--Vkhq0{width:99%}.BaseButton-module__w-100--u0Hzv{width:100%}.BaseButton-module__w-101--HmZny{width:101%}.BaseButton-module__w-102--YKkAq{width:102%}.BaseButton-module__w-103--YFCY0{width:103%}.BaseButton-module__w-104--cGN1X{width:104%}.BaseButton-module__w-105--iAPkD{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.75rem 1rem;min-height:2.5rem;cursor:pointer;transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family);position:relative}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "BaseButton-module__sr-only--pIoQP",
	"hidden": "BaseButton-module__hidden--YXbft",
	"slide-in": "BaseButton-module__slide-in--f4Qq6",
	"slide-out": "BaseButton-module__slide-out--QlyO7",
	"w-6": "BaseButton-module__w-6--mLhC1",
	"w-7": "BaseButton-module__w-7--CNa88",
	"w-8": "BaseButton-module__w-8--uCJWa",
	"w-9": "BaseButton-module__w-9--mAxTT",
	"w-10": "BaseButton-module__w-10--ukGdO",
	"w-11": "BaseButton-module__w-11--Q6c1g",
	"w-12": "BaseButton-module__w-12--pgH5w",
	"w-13": "BaseButton-module__w-13--kfc7E",
	"w-14": "BaseButton-module__w-14--LBrDE",
	"w-15": "BaseButton-module__w-15--TBQDc",
	"w-16": "BaseButton-module__w-16--EHgAO",
	"w-17": "BaseButton-module__w-17--G2mzI",
	"w-18": "BaseButton-module__w-18--LeH5m",
	"w-19": "BaseButton-module__w-19--u4mh6",
	"w-20": "BaseButton-module__w-20--PpKA0",
	"w-21": "BaseButton-module__w-21--Jrkbk",
	"w-22": "BaseButton-module__w-22--IJp85",
	"w-23": "BaseButton-module__w-23--SFUeD",
	"w-24": "BaseButton-module__w-24--qVlz7",
	"w-25": "BaseButton-module__w-25--R8kBY",
	"w-26": "BaseButton-module__w-26--MnqwC",
	"w-27": "BaseButton-module__w-27--ZgYzC",
	"w-28": "BaseButton-module__w-28--FgBhm",
	"w-29": "BaseButton-module__w-29--e1XxG",
	"w-30": "BaseButton-module__w-30--LKitc",
	"w-31": "BaseButton-module__w-31--srM25",
	"w-32": "BaseButton-module__w-32--CRHWm",
	"w-33": "BaseButton-module__w-33--ix7Tn",
	"w-34": "BaseButton-module__w-34--oVUUi",
	"w-35": "BaseButton-module__w-35--XMSjV",
	"w-36": "BaseButton-module__w-36--A4RGI",
	"w-37": "BaseButton-module__w-37--OXE3w",
	"w-38": "BaseButton-module__w-38--ufRZ1",
	"w-39": "BaseButton-module__w-39--OBl6c",
	"w-40": "BaseButton-module__w-40--iUg1I",
	"w-41": "BaseButton-module__w-41--HVw_N",
	"w-42": "BaseButton-module__w-42--zAvMG",
	"w-43": "BaseButton-module__w-43--x0vWO",
	"w-44": "BaseButton-module__w-44--tzVrE",
	"w-45": "BaseButton-module__w-45--Eg0q0",
	"w-46": "BaseButton-module__w-46--e68EI",
	"w-47": "BaseButton-module__w-47--vl6eM",
	"w-48": "BaseButton-module__w-48--Kq3vA",
	"w-49": "BaseButton-module__w-49--mqmO1",
	"w-50": "BaseButton-module__w-50--eTWqs",
	"w-51": "BaseButton-module__w-51--c8G4E",
	"w-52": "BaseButton-module__w-52--kr7jt",
	"w-53": "BaseButton-module__w-53--KnpcY",
	"w-54": "BaseButton-module__w-54--gLhae",
	"w-55": "BaseButton-module__w-55--w2s93",
	"w-56": "BaseButton-module__w-56--yN_Y_",
	"w-57": "BaseButton-module__w-57--c0DSk",
	"w-58": "BaseButton-module__w-58--dlNlY",
	"w-59": "BaseButton-module__w-59--ESCga",
	"w-60": "BaseButton-module__w-60--nskYE",
	"w-61": "BaseButton-module__w-61--Zh0fJ",
	"w-62": "BaseButton-module__w-62--PCKZq",
	"w-63": "BaseButton-module__w-63--BUaIh",
	"w-64": "BaseButton-module__w-64--q1TFG",
	"w-65": "BaseButton-module__w-65--sw00t",
	"w-66": "BaseButton-module__w-66--mEfcL",
	"w-67": "BaseButton-module__w-67--IbDoq",
	"w-68": "BaseButton-module__w-68--oIhVq",
	"w-69": "BaseButton-module__w-69--rzZbT",
	"w-70": "BaseButton-module__w-70--ZZdIG",
	"w-71": "BaseButton-module__w-71--V7x7Q",
	"w-72": "BaseButton-module__w-72--gtfVY",
	"w-73": "BaseButton-module__w-73--PqvZf",
	"w-74": "BaseButton-module__w-74--X87QB",
	"w-75": "BaseButton-module__w-75--GvBGp",
	"w-76": "BaseButton-module__w-76--QhTDD",
	"w-77": "BaseButton-module__w-77--wpEyV",
	"w-78": "BaseButton-module__w-78--M5I8S",
	"w-79": "BaseButton-module__w-79--ZarHy",
	"w-80": "BaseButton-module__w-80--pKVi5",
	"w-81": "BaseButton-module__w-81--hQWSr",
	"w-82": "BaseButton-module__w-82--S2n7i",
	"w-83": "BaseButton-module__w-83--ZpVzu",
	"w-84": "BaseButton-module__w-84--L3cJh",
	"w-85": "BaseButton-module__w-85--dALzf",
	"w-86": "BaseButton-module__w-86--JHrug",
	"w-87": "BaseButton-module__w-87--G8Jy8",
	"w-88": "BaseButton-module__w-88--zsA6c",
	"w-89": "BaseButton-module__w-89--wjkwk",
	"w-90": "BaseButton-module__w-90--Dcrxw",
	"w-91": "BaseButton-module__w-91--QV9Zd",
	"w-92": "BaseButton-module__w-92--Sc3k8",
	"w-93": "BaseButton-module__w-93--Wf_wK",
	"w-94": "BaseButton-module__w-94--Ths5D",
	"w-95": "BaseButton-module__w-95--KpmYv",
	"w-96": "BaseButton-module__w-96--FV9T5",
	"w-97": "BaseButton-module__w-97--qKBku",
	"w-98": "BaseButton-module__w-98--mgDLC",
	"w-99": "BaseButton-module__w-99--Vkhq0",
	"w-100": "BaseButton-module__w-100--u0Hzv",
	"w-101": "BaseButton-module__w-101--HmZny",
	"w-102": "BaseButton-module__w-102--YKkAq",
	"w-103": "BaseButton-module__w-103--YFCY0",
	"w-104": "BaseButton-module__w-104--cGN1X",
	"w-105": "BaseButton-module__w-105--iAPkD",
	"button": "BaseButton-module__button--q6T9A",
	"content-hidden": "BaseButton-module__content-hidden--QNxtO",
	"spinner": "BaseButton-module__spinner--sHeyQ",
	"spin": "BaseButton-module__spin--KXAHp"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


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