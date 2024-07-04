(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8792],{

/***/ "./node_modules/@storybook/instrumenter/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/instrumenter/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./storybook-config-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CHANNELS__"
var external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__("@storybook/channels");
;// CONCATENATED MODULE: ./storybook-stories.js
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:stories\/intro\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories\\/intro\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.(mdx|stories\.(ts|tsx|js|jsx)))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.(mdx%7Cstories\\.(ts%7Ctsx%7Cjs%7Cjsx)))$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}
;// CONCATENATED MODULE: ./storybook-config-entry.js







const getProjectAnnotations = () =>
  (0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/@onewelcome/storybook-addon-basestyling/dist/preview.mjs"),__webpack_require__("./node_modules/storybook-addon-pseudo-states/dist/preview.mjs"),__webpack_require__("./node_modules/storybook-addon-mock/dist/esm/preset/preview.js"),__webpack_require__("./.storybook/preview.tsx"),]);

const channel = (0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({ page: 'preview' });
external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel);

if (external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE === 'DEVELOPMENT'){
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}

const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(importFn, getProjectAnnotations);

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;

if (false) {}

/***/ }),

/***/ "./.storybook/preview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  decorators: () => (/* binding */ decorators)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/base.scss
var base = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/base.scss");
;// CONCATENATED MODULE: ./.storybook/base.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(base/* default */.A, options);




       /* harmony default export */ const _storybook_base = (base/* default */.A && base/* default */.A.locals ? base/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/_BaseStyling_/BaseStyling.tsx
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
 * If you add more CSS variables, and they are a color, make sure to go into /.storybook/addon/src/components/PanelContent.tsx
 * and make sure to add it to the shouldBeColorPicker array!
 */


const BaseStyling = _ref => {
  let {
    children,
    properties = {}
  } = _ref;
  const defaultProperties = {
    colorPrimary100: "#CDD0EA",
    colorPrimary300: "#6871BF",
    colorPrimary500: "#041295",
    colorPrimary600: "#030F77",
    colorPrimary700: "#020B59",
    colorPrimary900: "#01041E",
    colorPrimaryLight: "#E6E7F4",
    colorBlueGrey25: "#F7F7F9",
    colorBlueGrey25Transparent: "rgba(247, 247, 249, .8)",
    colorBlueGrey50: "#EEEFF3",
    colorBlueGrey100: "#DEDEE6",
    colorBlueGrey200: "#BCBECE",
    colorBlueGrey300: "#9A9DB5",
    colorBlueGrey400: "#797D9C",
    colorBlueGrey500: "#5D607E",
    colorBlueGrey700: "#383A4B",
    colorBlueGrey800: "#252733",
    colorBlueGrey900: "#131319",
    colorGreen100: "#D1E6DA",
    colorGreen200: "#A2CDB4",
    colorGreen500: "#178244",
    colorGreen600: "#126836",
    colorGreen700: "#0E4E29",
    colorLightBlue500: "#00BCDD",
    colorLightBlue600: "#0096B1",
    colorOrange100: "#FFE0B2",
    colorOrange500: "#E07900",
    colorOrange600: "#B36100",
    colorOrange700: "#864900",
    colorRed100: "#FFCDD2",
    colorRed200: "#F3A599",
    colorRed500: "#E01E00",
    colorRed600: "#B31800",
    colorRed700: "#861200",
    colorBlack100: "#000000",
    colorBlack20: "rgba(0, 0, 0, 0.2)",
    colorBlack10: "rgba(0, 0, 0, 0.1)",
    colorShadowBlue: "#7078C3",
    colorWhite: "#FFFFFF",
    colorFocus: "var(--color-primary300)",
    colorPrimary: "var(--color-primary500)",
    colorSuccess: "var(--color-green500)",
    colorWarning: "var(--color-orange500)",
    colorDanger: "var(--color-red500)",
    defaultPressedColor: "var(--color-blue-grey100)",
    defaultHoverColor: "var(--color-blue-grey25)",
    defaultLineHeight: "1.5",
    //FIXME: UCL-395
    dataGridLineHeight: "1.25",
    defaultBorderRadius: "0.25rem",
    focusBorderRadius: "0.125rem",
    buttonBorderRadius: "0.125rem",
    buttonBorderWidth: "2px",
    buttonFontSize: "0.875rem",
    buttonBorderStyle: "solid",
    buttonFillTextColor: "var(--light)",
    buttonPrimaryDefaultColor: "var(--color-primary500)",
    buttonPrimaryHoverColor: "var(--color-primary600)",
    buttonPrimaryFocusedColor: "var(--color-primary500)",
    buttonPrimaryPressedColor: "var(--color-primary700)",
    buttonSuccessDefaultColor: "var(--color-green500)",
    buttonSuccessHoverColor: "var(--color-green600)",
    buttonSuccessFocusedColor: "var(--color-green500)",
    buttonSuccessPressedColor: "var(--color-green700)",
    buttonDangerDefaultColor: "var(--color-red500)",
    buttonDangerHoverColor: "var(--color-red600)",
    buttonDangerFocusedColor: "var(--color-red500)",
    buttonDangerPressedColor: "var(--color-red700)",
    buttonWarningDefaultColor: "var(--color-orange500)",
    buttonWarningHoverColor: "var(--color-orange600)",
    buttonWarningFocusedColor: "var(--color-orange500)",
    buttonWarningPressedColor: "var(--color-orange700)",
    buttonDefaultColor: "var(--color-blue-grey700)",
    buttonDefaultHoverColor: "var(--color-blue-grey800)",
    buttonDefaultFocusedColor: "var(--color-blue-grey700)",
    buttonDefaultPressedColor: "var(--color-blue-grey800)",
    buttonOutlineHoverTextColor: "var(--color-primary600)",
    checkboxUncheckedHoverColor: "var(--color-blue-grey50)",
    checkboxUncheckedPressedColor: "var(--default-pressed-color)",
    checkboxCheckedHoverColor: "var(--color-primary600)",
    checkboxCheckedPressedColor: "var(--color-primary700)",
    radioHoverBackgroundColor: "var(--color-blue-grey50)",
    radioPressedBackgroundColor: "var(--default-pressed-color)",
    radioHoverColor: "var(--color-primary600)",
    radioPressedColor: "var(--color-primary700)",
    inputBorderRadius: "2px",
    inputBorderWidth: "1px",
    inputBorderWidthFocus: "1px",
    inputBorderStyle: "solid",
    fileUploadBorderWidth: "1px",
    dragDropBorderStyle: "dashed",
    inputBorderColor: "var(--color-blue-grey500)",
    inputBackgroundColor: "var(--light)",
    inputHelperTextColor: "var(--color-blue-grey500)",
    inputHoverBackgroundColor: "var(--default-hover-color)",
    inputDisabledBackgroundColor: "var(--input-hover-background-color)",
    dragBackgroundColor: "var(--color-blue-grey25-transparent)",
    dragBorderStyle: "solid",
    modalShadowColor: "rgba(0, 0, 0, 0.16)",
    modalBackgroundColor: "var(--light)",
    modalBackdropColor: "var(--default)",
    skeletonBackgroundColor: "var(--disabled)",
    skeletonAnimationColorRgb: "255, 255, 255",
    alertTextColor: "var(--default)",
    alertTextInvertedColor: "var(--light)",
    alertNeutralBackgroundColor: "var(--color-blue-grey50)",
    alertNeutralInvertedColor: "var(--color-blue-grey500)",
    alertInfoBackgroundColor: "var(--color-primary100)",
    alertInfoInvertedColor: "var(--color-primary500)",
    alertSuccessBackgroundColor: "var(--color-green100)",
    alertSuccessInvertedColor: "var(--color-green500)",
    alertErrorBackgroundColor: "var(--color-red100)",
    alertErrorInvertedColor: "var(--color-red500)",
    alertWarningBackgroundColor: "var(--color-orange100)",
    alertWarningInvertedColor: "var(--color-orange500)",
    alertBorderWidth: "4px",
    alertBorderRadius: "2px",
    stepperWaitingColor: "var(--color-blue-grey200)",
    stepperWaitingHoverColor: "var(--color-blue-grey300)",
    stepperWaitingActiveColor: "var(--color-blue-grey400)",
    stepperWaitingDisabledColor: "var(--color-blue-grey100)",
    stepperCurrentColor: "var(--color-primary500)",
    stepperCurrentHoverColor: "var(--color-primary600)",
    stepperCurrentActiveColor: "var(--color-primary700)",
    stepperCurrentDisabledColor: "var(--color-primary100)",
    stepperDoneColor: "var(--color-green500)",
    stepperDoneHoverColor: "var(--color-green600)",
    stepperDoneActiveColor: "var(--color-green700)",
    stepperDoneDisabledColor: "var(--color-green200)",
    stepperErrorColor: "var(--color-red500)",
    stepperErrorHoverColor: "var(--color-red600)",
    stepperErrorActiveColor: "var(--color-red700)",
    stepperErrorDisabledColor: "var(--color-red200)",
    stepperDefaultTextColor: "var(--color-white)",
    stepperLineColor: "var(--color-blue-grey300)",
    stepperLineBoldColor: "var(--color-blue-grey700)",
    stepperLineDisabledColor: "var(--color-blue-grey100)",
    stepperLineBoldDisabledColor: "var(--color-blue-grey300)",
    stepperLabelColor: "var(--color-blue-grey900)",
    stepperCaptionColor: "var(--color-blue-grey500)",
    stepperCaptionErrorColor: "var(--color-red500)",
    stepperLabelDisabledColor: "var(--color-blue-grey400)",
    stepperCaptionDisabledColor: "var(--color-blue-grey400)",
    stepperCaptionErrorDisabledColor: "var(--color-red200)",
    bannerBorderRadius: "2px",
    bannerBorderWidth: "0 0 0 4px",
    dataGridRowBackgroundColor: "transparent",
    dataGridRowHoverBackgroundColor: "var(--default-hover-color)",
    progressBarBackgroundColor: "var(--disabled)",
    tabsBackgroundColor: "var(--light)",
    tabActiveBorderHeight: "0.25rem",
    tabActiveBorderColor: "var(--color-primary)",
    tabActiveTextColor: "var(--color-primary)",
    tablistBorderWidth: "0.0625rem",
    tablistBorderStyle: "solid",
    tablistBorderColor: "var(--color-blue-grey100)",
    tabTextColor: "var(--color-blue-grey900)",
    tabHoverColor: "var(--default-hover-color)",
    tabPressedColor: "var(--default-pressed-color)",
    toggleBackgroundColor: "var(--color-blue-grey100)",
    tooltipBackgroundColor: "var(--default)",
    contextMenuHoverColor: "var(--default-hover-color)",
    contextMenuPressedColor: "var(--default-pressed-color)",
    default: "var(--color-blue-grey900)",
    success: "var(--color-green500)",
    error: "var(--color-red500)",
    info: "var(--color-primary500)",
    disabled: "var(--color-blue-grey100)",
    greyedOut: "var(--color-blue-grey400)",
    lightGreyBorder: "var(--color-blue-grey100)",
    warning: "var(--color-orange500)",
    light: "var(--color-white)",
    fontFamily: "Roboto, sans-serif",
    fontFamilyCode: "'Roboto Mono', monospace",
    fontSizeFormLabel: "0.875rem",
    //FIXME: UCL-395
    fontSize: "1rem",
    //FIXME: UCL-395
    fontSizeH1: "2.5rem",
    fontSizeH2: "1.625rem",
    fontSizeH3: "1.5rem",
    fontSizeH4: "1.25rem",
    fontSizeSub: ".75rem",
    fontSizeCode: "1rem",
    formControlFontSize: "0.875rem",
    //FIXME: UCL-395
    fontSizeDataGrid: "0.875rem" //FIXME: UCL-395
  };

  /** We need a loading state, because otherwise you see the colors flash from the default to the possible overridden ones. */
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const baseStylingWrapper = (0,react.useRef)(null);
  const setCSSProperties = CSSPropertiesObject => {
    for (const [key, value] of Object.entries(CSSPropertiesObject)) {
      const formattedPropertyName = key.replace(/([A-Z])/g, val => "-".concat(val.toLowerCase()));
      baseStylingWrapper.current.style.setProperty("--".concat(formattedPropertyName), value);
    }
  };
  (0,react.useEffect)(() => {
    if (Object.keys(properties).length !== 0 && baseStylingWrapper.current) {
      const mergedState = {
        ...defaultProperties,
        ...properties
      };
      setCSSProperties(mergedState);
    } else if (baseStylingWrapper.current) {
      setCSSProperties(defaultProperties);
    }
    setIsLoading(false);
  }, [properties, baseStylingWrapper.current]);
  return /*#__PURE__*/react.createElement("div", {
    className: "basestyling-wrapper",
    ref: baseStylingWrapper
  }, !isLoading ? children : null);
};
try {
    // @ts-ignore
    BaseStyling.displayName = "BaseStyling";
    // @ts-ignore
    BaseStyling.__docgenInfo = { "description": "", "displayName": "BaseStyling", "props": { "properties": { "defaultValue": { value: "{}" }, "description": "", "name": "properties", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/_BaseStyling_/BaseStyling.tsx#BaseStyling"] = { docgenInfo: BaseStyling.__docgenInfo, name: "BaseStyling", path: "src/components/_BaseStyling_/BaseStyling.tsx#BaseStyling" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./.storybook/preview.tsx
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




const Preview = story => {
  const [properties, setProperties] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    parseBaseStylingStorage();
  }, []);
  (0,react.useEffect)(() => {
    window.addEventListener("updated-styling", parseBaseStylingStorage);
    return () => {
      window.removeEventListener("updated-styling", parseBaseStylingStorage);
    };
  }, []);
  const parseBaseStylingStorage = () => {
    const baseStylingSessionStorage = window.sessionStorage.getItem("basestyling");
    if (baseStylingSessionStorage && baseStylingSessionStorage !== "undefined") {
      setProperties(JSON.parse(baseStylingSessionStorage));
    }
  };
  return /*#__PURE__*/react.createElement(BaseStyling, {
    properties: properties
  }, story());
};
const decorators = [story => Preview(story)];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/base.scss":
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
 */body{font-family:Roboto,sans-serif;overflow:initial !important}div[scale="1"]{transform:unset}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.(mdx%7Cstories\\.(ts%7Ctsx%7Cjs%7Cjsx)))$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./BaseStyling/BaseStyling.mdx": [
		"./stories/BaseStyling/BaseStyling.mdx",
		3797,
		9684
	],
	"./Breadcrumbs/Breadcrumbs.mdx": [
		"./stories/Breadcrumbs/Breadcrumbs.mdx",
		3797,
		9758,
		3816,
		7111,
		5864
	],
	"./Breadcrumbs/Breadcrumbs.stories": [
		"./stories/Breadcrumbs/Breadcrumbs.stories.tsx",
		3797,
		9758,
		3816,
		7111,
		5864
	],
	"./Breadcrumbs/Breadcrumbs.stories.tsx": [
		"./stories/Breadcrumbs/Breadcrumbs.stories.tsx",
		3797,
		9758,
		3816,
		7111,
		5864
	],
	"./Button/Button.mdx": [
		"./stories/Button/Button.mdx",
		3797,
		3816,
		9377,
		2742
	],
	"./Button/Button.stories": [
		"./stories/Button/Button.stories.tsx",
		3797,
		3816,
		9377,
		2742
	],
	"./Button/Button.stories.tsx": [
		"./stories/Button/Button.stories.tsx",
		3797,
		3816,
		9377,
		2742
	],
	"./Button/IconButton.mdx": [
		"./stories/Button/IconButton.mdx",
		3797,
		3816,
		9963,
		2653
	],
	"./Button/IconButton.stories": [
		"./stories/Button/IconButton.stories.tsx",
		3797,
		3816,
		9963,
		2653
	],
	"./Button/IconButton.stories.tsx": [
		"./stories/Button/IconButton.stories.tsx",
		3797,
		3816,
		9963,
		2653
	],
	"./ContentHeader/ContentHeader.mdx": [
		"./stories/ContentHeader/ContentHeader.mdx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		7822,
		3920,
		7068
	],
	"./ContentHeader/ContentHeader.stories": [
		"./stories/ContentHeader/ContentHeader.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		7822,
		3920,
		7068
	],
	"./ContentHeader/ContentHeader.stories.tsx": [
		"./stories/ContentHeader/ContentHeader.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		7822,
		3920,
		7068
	],
	"./ContextMenu/ContextMenu.mdx": [
		"./stories/ContextMenu/ContextMenu.mdx",
		3797,
		6668,
		3816,
		9963,
		9771,
		4773,
		539,
		5772
	],
	"./ContextMenu/ContextMenu.stories": [
		"./stories/ContextMenu/ContextMenu.stories.tsx",
		3797,
		6668,
		3816,
		9963,
		9771,
		4773,
		539,
		5772
	],
	"./ContextMenu/ContextMenu.stories.tsx": [
		"./stories/ContextMenu/ContextMenu.stories.tsx",
		3797,
		6668,
		3816,
		9963,
		9771,
		4773,
		539,
		5772
	],
	"./DataGrid/DataGrid.mdx": [
		"./stories/DataGrid/DataGrid.mdx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9377,
		9963,
		9746,
		7298,
		9701,
		1115,
		3678,
		9771,
		8270,
		4773,
		2923,
		7412,
		7650
	],
	"./DataGrid/DataGrid.stories": [
		"./stories/DataGrid/DataGrid.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9377,
		9963,
		9746,
		7298,
		9701,
		1115,
		3678,
		9771,
		8270,
		4773,
		2923,
		7412,
		7650
	],
	"./DataGrid/DataGrid.stories.tsx": [
		"./stories/DataGrid/DataGrid.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9377,
		9963,
		9746,
		7298,
		9701,
		1115,
		3678,
		9771,
		8270,
		4773,
		2923,
		7412,
		7650
	],
	"./Form/Elements/Checkbox.mdx": [
		"./stories/Form/Elements/Checkbox.mdx",
		3797,
		3816,
		7298,
		7111,
		2979
	],
	"./Form/Elements/Checkbox.stories": [
		"./stories/Form/Elements/Checkbox.stories.tsx",
		3797,
		3816,
		7298,
		7111,
		2979
	],
	"./Form/Elements/Checkbox.stories.tsx": [
		"./stories/Form/Elements/Checkbox.stories.tsx",
		3797,
		3816,
		7298,
		7111,
		2979
	],
	"./Form/Elements/Fieldset.mdx": [
		"./stories/Form/Elements/Fieldset.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		8436
	],
	"./Form/Elements/Fieldset.stories": [
		"./stories/Form/Elements/Fieldset.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		8436
	],
	"./Form/Elements/Fieldset.stories.tsx": [
		"./stories/Form/Elements/Fieldset.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		8436
	],
	"./Form/Elements/FileItem.mdx": [
		"./stories/Form/Elements/FileItem.mdx",
		3797,
		3816,
		9377,
		7111,
		254,
		8847
	],
	"./Form/Elements/FileItem.stories": [
		"./stories/Form/Elements/FileItem.stories.tsx",
		3797,
		3816,
		9377,
		7111,
		254,
		8847
	],
	"./Form/Elements/FileItem.stories.tsx": [
		"./stories/Form/Elements/FileItem.stories.tsx",
		3797,
		3816,
		9377,
		7111,
		254,
		8847
	],
	"./Form/Elements/FileUpload.mdx": [
		"./stories/Form/Elements/FileUpload.mdx",
		3797,
		3816,
		9377,
		7111,
		254,
		3309
	],
	"./Form/Elements/FileUpload.stories": [
		"./stories/Form/Elements/FileUpload.stories.tsx",
		3797,
		3816,
		9377,
		7111,
		254,
		3309
	],
	"./Form/Elements/FileUpload.stories.tsx": [
		"./stories/Form/Elements/FileUpload.stories.tsx",
		3797,
		3816,
		9377,
		7111,
		254,
		3309
	],
	"./Form/Elements/FormControl.mdx": [
		"./stories/Form/Elements/FormControl.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		6705
	],
	"./Form/Elements/FormControl.stories": [
		"./stories/Form/Elements/FormControl.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		6705
	],
	"./Form/Elements/FormControl.stories.tsx": [
		"./stories/Form/Elements/FormControl.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		6705
	],
	"./Form/Elements/FormHelperText.mdx": [
		"./stories/Form/Elements/FormHelperText.mdx",
		3797,
		5271
	],
	"./Form/Elements/FormHelperText.stories": [
		"./stories/Form/Elements/FormHelperText.stories.tsx",
		3797,
		5271
	],
	"./Form/Elements/FormHelperText.stories.tsx": [
		"./stories/Form/Elements/FormHelperText.stories.tsx",
		3797,
		5271
	],
	"./Form/Elements/Input.mdx": [
		"./stories/Form/Elements/Input.mdx",
		3797,
		3816,
		7610,
		1804
	],
	"./Form/Elements/Input.stories": [
		"./stories/Form/Elements/Input.stories.tsx",
		3797,
		3816,
		7610,
		1804
	],
	"./Form/Elements/Input.stories.tsx": [
		"./stories/Form/Elements/Input.stories.tsx",
		3797,
		3816,
		7610,
		1804
	],
	"./Form/Elements/MultiSelect.mdx": [
		"./stories/Form/Elements/MultiSelect.mdx",
		3797,
		6668,
		3816,
		8159,
		9746,
		7599
	],
	"./Form/Elements/MultiSelect.stories": [
		"./stories/Form/Elements/MultiSelect.stories.tsx",
		3797,
		6668,
		3816,
		8159,
		9746,
		7599
	],
	"./Form/Elements/MultiSelect.stories.tsx": [
		"./stories/Form/Elements/MultiSelect.stories.tsx",
		3797,
		6668,
		3816,
		8159,
		9746,
		7599
	],
	"./Form/Elements/Radio.mdx": [
		"./stories/Form/Elements/Radio.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		2857
	],
	"./Form/Elements/Radio.stories": [
		"./stories/Form/Elements/Radio.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		2857
	],
	"./Form/Elements/Radio.stories.tsx": [
		"./stories/Form/Elements/Radio.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		2857
	],
	"./Form/Elements/Select.mdx": [
		"./stories/Form/Elements/Select.mdx",
		3797,
		6668,
		3816,
		7610,
		8159,
		3664
	],
	"./Form/Elements/Select.stories": [
		"./stories/Form/Elements/Select.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8159,
		3664
	],
	"./Form/Elements/Select.stories.tsx": [
		"./stories/Form/Elements/Select.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8159,
		3664
	],
	"./Form/Elements/Textarea.mdx": [
		"./stories/Form/Elements/Textarea.mdx",
		3797,
		3816,
		4202
	],
	"./Form/Elements/Textarea.stories": [
		"./stories/Form/Elements/Textarea.stories.tsx",
		3797,
		3816,
		4202
	],
	"./Form/Elements/Textarea.stories.tsx": [
		"./stories/Form/Elements/Textarea.stories.tsx",
		3797,
		3816,
		4202
	],
	"./Form/Elements/Toggle.mdx": [
		"./stories/Form/Elements/Toggle.mdx",
		3797,
		6668,
		3816,
		7298,
		4048
	],
	"./Form/Elements/Toggle.stories": [
		"./stories/Form/Elements/Toggle.stories.tsx",
		3797,
		6668,
		3816,
		7298,
		4048
	],
	"./Form/Elements/Toggle.stories.tsx": [
		"./stories/Form/Elements/Toggle.stories.tsx",
		3797,
		6668,
		3816,
		7298,
		4048
	],
	"./Form/Form.mdx": [
		"./stories/Form/Form.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		7412,
		5646
	],
	"./Form/Form.stories": [
		"./stories/Form/Form.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		7412,
		5646
	],
	"./Form/Form.stories.tsx": [
		"./stories/Form/Form.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9746,
		7298,
		9701,
		1115,
		3678,
		7412,
		5646
	],
	"./Form/FormSection/FormSection.mdx": [
		"./stories/Form/FormSection/FormSection.mdx",
		3797,
		3816,
		7610,
		8378,
		839
	],
	"./Form/FormSection/FormSection.stories": [
		"./stories/Form/FormSection/FormSection.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		839
	],
	"./Form/FormSection/FormSection.stories.tsx": [
		"./stories/Form/FormSection/FormSection.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		839
	],
	"./Form/Wrapper/CheckboxWrapper.mdx": [
		"./stories/Form/Wrapper/CheckboxWrapper.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		2866
	],
	"./Form/Wrapper/CheckboxWrapper.stories": [
		"./stories/Form/Wrapper/CheckboxWrapper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		2866
	],
	"./Form/Wrapper/CheckboxWrapper.stories.tsx": [
		"./stories/Form/Wrapper/CheckboxWrapper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		2866
	],
	"./Form/Wrapper/InputWrapper.mdx": [
		"./stories/Form/Wrapper/InputWrapper.mdx",
		3797,
		3816,
		7610,
		8378,
		699
	],
	"./Form/Wrapper/InputWrapper.stories": [
		"./stories/Form/Wrapper/InputWrapper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		699
	],
	"./Form/Wrapper/InputWrapper.stories.tsx": [
		"./stories/Form/Wrapper/InputWrapper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		699
	],
	"./Form/Wrapper/MultiSelectWrapper.mdx": [
		"./stories/Form/Wrapper/MultiSelectWrapper.mdx",
		3797,
		6668,
		3816,
		8378,
		8159,
		9746,
		9214
	],
	"./Form/Wrapper/MultiSelectWrapper.stories": [
		"./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx",
		3797,
		6668,
		3816,
		8378,
		8159,
		9746,
		9214
	],
	"./Form/Wrapper/MultiSelectWrapper.stories.tsx": [
		"./stories/Form/Wrapper/MultiSelectWrapper.stories.tsx",
		3797,
		6668,
		3816,
		8378,
		8159,
		9746,
		9214
	],
	"./Form/Wrapper/RadioWrapper.mdx": [
		"./stories/Form/Wrapper/RadioWrapper.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		8496
	],
	"./Form/Wrapper/RadioWrapper.stories": [
		"./stories/Form/Wrapper/RadioWrapper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		8496
	],
	"./Form/Wrapper/RadioWrapper.stories.tsx": [
		"./stories/Form/Wrapper/RadioWrapper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		8496
	],
	"./Form/Wrapper/SelectWrapper.mdx": [
		"./stories/Form/Wrapper/SelectWrapper.mdx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9701,
		8583
	],
	"./Form/Wrapper/SelectWrapper.stories": [
		"./stories/Form/Wrapper/SelectWrapper.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9701,
		8583
	],
	"./Form/Wrapper/SelectWrapper.stories.tsx": [
		"./stories/Form/Wrapper/SelectWrapper.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		8159,
		9701,
		8583
	],
	"./Form/Wrapper/TextareaWrapper.mdx": [
		"./stories/Form/Wrapper/TextareaWrapper.mdx",
		3797,
		3816,
		8378,
		1115,
		8765
	],
	"./Form/Wrapper/TextareaWrapper.stories": [
		"./stories/Form/Wrapper/TextareaWrapper.stories.tsx",
		3797,
		3816,
		8378,
		1115,
		8765
	],
	"./Form/Wrapper/TextareaWrapper.stories.tsx": [
		"./stories/Form/Wrapper/TextareaWrapper.stories.tsx",
		3797,
		3816,
		8378,
		1115,
		8765
	],
	"./FormWithStepper/FormWithStepper.mdx": [
		"./stories/FormWithStepper/FormWithStepper.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		7822,
		3920,
		1056
	],
	"./FormWithStepper/FormWithStepper.stories": [
		"./stories/FormWithStepper/FormWithStepper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		7822,
		3920,
		1056
	],
	"./FormWithStepper/FormWithStepper.stories.tsx": [
		"./stories/FormWithStepper/FormWithStepper.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9746,
		7298,
		9701,
		1115,
		3678,
		7822,
		3920,
		1056
	],
	"./Icon/Icon.mdx": [
		"./stories/Icon/Icon.mdx",
		3797,
		3816,
		6600
	],
	"./Icon/Icon.stories": [
		"./stories/Icon/Icon.stories.tsx",
		3797,
		3816,
		6600
	],
	"./Icon/Icon.stories.tsx": [
		"./stories/Icon/Icon.stories.tsx",
		3797,
		3816,
		6600
	],
	"./Link/Link.mdx": [
		"./stories/Link/Link.mdx",
		3797,
		7111,
		4306
	],
	"./Link/Link.stories": [
		"./stories/Link/Link.stories.tsx",
		3797,
		7111,
		4306
	],
	"./Link/Link.stories.tsx": [
		"./stories/Link/Link.stories.tsx",
		3797,
		7111,
		4306
	],
	"./Notifications/Alert/Alert.mdx": [
		"./stories/Notifications/Alert/Alert.mdx",
		3797,
		6668,
		3816,
		9377,
		9963,
		9343
	],
	"./Notifications/Alert/Alert.stories": [
		"./stories/Notifications/Alert/Alert.stories.tsx",
		3797,
		6668,
		3816,
		9377,
		9963,
		9343
	],
	"./Notifications/Alert/Alert.stories.tsx": [
		"./stories/Notifications/Alert/Alert.stories.tsx",
		3797,
		6668,
		3816,
		9377,
		9963,
		9343
	],
	"./Notifications/Banner/Banner.mdx": [
		"./stories/Notifications/Banner/Banner.mdx",
		3797,
		3816,
		5641
	],
	"./Notifications/Banner/Banner.stories": [
		"./stories/Notifications/Banner/Banner.stories.tsx",
		3797,
		3816,
		5641
	],
	"./Notifications/Banner/Banner.stories.tsx": [
		"./stories/Notifications/Banner/Banner.stories.tsx",
		3797,
		3816,
		5641
	],
	"./Notifications/Dialog/Dialog.mdx": [
		"./stories/Notifications/Dialog/Dialog.mdx",
		3797,
		6668,
		3816,
		9377,
		9963,
		8270,
		8784,
		2369
	],
	"./Notifications/Dialog/Dialog.stories": [
		"./stories/Notifications/Dialog/Dialog.stories.tsx",
		3797,
		6668,
		3816,
		9377,
		9963,
		8270,
		8784,
		2369
	],
	"./Notifications/Dialog/Dialog.stories.tsx": [
		"./stories/Notifications/Dialog/Dialog.stories.tsx",
		3797,
		6668,
		3816,
		9377,
		9963,
		8270,
		8784,
		2369
	],
	"./Notifications/DiscardChangesModal/DiscardChangesModal.mdx": [
		"./stories/Notifications/DiscardChangesModal/DiscardChangesModal.mdx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		8784,
		239
	],
	"./Notifications/DiscardChangesModal/DiscardChangesModal.stories": [
		"./stories/Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		8784,
		239
	],
	"./Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx": [
		"./stories/Notifications/DiscardChangesModal/DiscardChangesModal.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		8784,
		239
	],
	"./Notifications/Modal/Modal.mdx": [
		"./stories/Notifications/Modal/Modal.mdx",
		3797,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		3871
	],
	"./Notifications/Modal/Modal.stories": [
		"./stories/Notifications/Modal/Modal.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		3871
	],
	"./Notifications/Modal/Modal.stories.tsx": [
		"./stories/Notifications/Modal/Modal.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		3871
	],
	"./Notifications/NotificationProvider/NotificationProvider.mdx": [
		"./stories/Notifications/NotificationProvider/NotificationProvider.mdx",
		3797,
		3981
	],
	"./Notifications/SlideInModal/SlideInModal.mdx": [
		"./stories/Notifications/SlideInModal/SlideInModal.mdx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		9523
	],
	"./Notifications/SlideInModal/SlideInModal.stories": [
		"./stories/Notifications/SlideInModal/SlideInModal.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		9523
	],
	"./Notifications/SlideInModal/SlideInModal.stories.tsx": [
		"./stories/Notifications/SlideInModal/SlideInModal.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		8270,
		9523
	],
	"./Pagination/Pagination.mdx": [
		"./stories/Pagination/Pagination.mdx",
		3797,
		6668,
		3816,
		7610,
		8159,
		9963,
		7250
	],
	"./Pagination/Pagination.stories": [
		"./stories/Pagination/Pagination.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8159,
		9963,
		7250
	],
	"./Pagination/Pagination.stories.tsx": [
		"./stories/Pagination/Pagination.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8159,
		9963,
		7250
	],
	"./ProgressBar/ProgressBar.mdx": [
		"./stories/ProgressBar/ProgressBar.mdx",
		3797,
		254,
		9512
	],
	"./ProgressBar/ProgressBar.stories": [
		"./stories/ProgressBar/ProgressBar.stories.tsx",
		3797,
		254,
		9512
	],
	"./ProgressBar/ProgressBar.stories.tsx": [
		"./stories/ProgressBar/ProgressBar.stories.tsx",
		3797,
		254,
		9512
	],
	"./Skeleton/Skeleton.mdx": [
		"./stories/Skeleton/Skeleton.mdx",
		3797,
		6436
	],
	"./Skeleton/Skeleton.stories": [
		"./stories/Skeleton/Skeleton.stories.tsx",
		3797,
		6436
	],
	"./Skeleton/Skeleton.stories.tsx": [
		"./stories/Skeleton/Skeleton.stories.tsx",
		3797,
		6436
	],
	"./Stepper/Stepper.mdx": [
		"./stories/Stepper/Stepper.mdx",
		3797,
		6668,
		3816,
		7822,
		5812
	],
	"./Stepper/Stepper.stories": [
		"./stories/Stepper/Stepper.stories.tsx",
		3797,
		6668,
		3816,
		7822,
		5812
	],
	"./Stepper/Stepper.stories.tsx": [
		"./stories/Stepper/Stepper.stories.tsx",
		3797,
		6668,
		3816,
		7822,
		5812
	],
	"./Tabs/Tabs.mdx": [
		"./stories/Tabs/Tabs.mdx",
		3797,
		6668,
		3816,
		6826
	],
	"./Tabs/Tabs.stories": [
		"./stories/Tabs/Tabs.stories.tsx",
		3797,
		6668,
		3816,
		6826
	],
	"./Tabs/Tabs.stories.tsx": [
		"./stories/Tabs/Tabs.stories.tsx",
		3797,
		6668,
		3816,
		6826
	],
	"./Tag/Tag.mdx": [
		"./stories/Tag/Tag.mdx",
		3797,
		3816,
		5972
	],
	"./Tag/Tag.stories": [
		"./stories/Tag/Tag.stories.tsx",
		3797,
		3816,
		5972
	],
	"./Tag/Tag.stories.tsx": [
		"./stories/Tag/Tag.stories.tsx",
		3797,
		3816,
		5972
	],
	"./TextEllipsis/TextEllipsis.mdx": [
		"./stories/TextEllipsis/TextEllipsis.mdx",
		3797,
		6668,
		9771,
		606
	],
	"./TextEllipsis/TextEllipsis.stories": [
		"./stories/TextEllipsis/TextEllipsis.stories.tsx",
		3797,
		6668,
		9771,
		606
	],
	"./TextEllipsis/TextEllipsis.stories.tsx": [
		"./stories/TextEllipsis/TextEllipsis.stories.tsx",
		3797,
		6668,
		9771,
		606
	],
	"./Tiles/Tile.mdx": [
		"./stories/Tiles/Tile.mdx",
		3797,
		3816,
		9963,
		9771,
		4773,
		9660,
		8785
	],
	"./Tiles/Tile.stories": [
		"./stories/Tiles/Tile.stories.tsx",
		3797,
		3816,
		9963,
		9771,
		4773,
		9660,
		8785
	],
	"./Tiles/Tile.stories.tsx": [
		"./stories/Tiles/Tile.stories.tsx",
		3797,
		3816,
		9963,
		9771,
		4773,
		9660,
		8785
	],
	"./Tiles/Tiles.mdx": [
		"./stories/Tiles/Tiles.mdx",
		3797,
		3816,
		9963,
		9771,
		4773,
		9660,
		1476
	],
	"./Tiles/Tiles.stories": [
		"./stories/Tiles/Tiles.stories.tsx",
		3797,
		3816,
		9963,
		9771,
		4773,
		9660,
		1476
	],
	"./Tiles/Tiles.stories.tsx": [
		"./stories/Tiles/Tiles.stories.tsx",
		3797,
		3816,
		9963,
		9771,
		4773,
		9660,
		1476
	],
	"./Tooltip/Tooltip.mdx": [
		"./stories/Tooltip/Tooltip.mdx",
		3797,
		6668,
		3816,
		539,
		9336
	],
	"./Tooltip/Tooltip.stories": [
		"./stories/Tooltip/Tooltip.stories.tsx",
		3797,
		6668,
		3816,
		539,
		9336
	],
	"./Tooltip/Tooltip.stories.tsx": [
		"./stories/Tooltip/Tooltip.stories.tsx",
		3797,
		6668,
		3816,
		539,
		9336
	],
	"./Typography/Typography.mdx": [
		"./stories/Typography/Typography.mdx",
		3797,
		8600
	],
	"./Typography/Typography.stories": [
		"./stories/Typography/Typography.stories.tsx",
		3797,
		8600
	],
	"./Typography/Typography.stories.tsx": [
		"./stories/Typography/Typography.stories.tsx",
		3797,
		8600
	],
	"./admin/MicrofrontendContainer/MicrofrontendContainer.mdx": [
		"./stories/admin/MicrofrontendContainer/MicrofrontendContainer.mdx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9963,
		9746,
		7298,
		9701,
		1115,
		3678,
		9771,
		7822,
		3920,
		2923,
		3690
	],
	"./admin/MicrofrontendContainer/MicrofrontendContainer.stories": [
		"./stories/admin/MicrofrontendContainer/MicrofrontendContainer.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9963,
		9746,
		7298,
		9701,
		1115,
		3678,
		9771,
		7822,
		3920,
		2923,
		3690
	],
	"./admin/MicrofrontendContainer/MicrofrontendContainer.stories.tsx": [
		"./stories/admin/MicrofrontendContainer/MicrofrontendContainer.stories.tsx",
		3797,
		3816,
		7610,
		8378,
		8159,
		9377,
		9963,
		9746,
		7298,
		9701,
		1115,
		3678,
		9771,
		7822,
		3920,
		2923,
		3690
	],
	"./hooks/useBodyClick.mdx": [
		"./stories/hooks/useBodyClick.mdx",
		3797,
		6543
	],
	"./hooks/useFullHeightCollapse.mdx": [
		"./stories/hooks/useFullHeightCollapse.mdx",
		3797,
		330
	],
	"./hooks/usePosition.mdx": [
		"./stories/hooks/usePosition.mdx",
		3797,
		8556
	],
	"./hooks/useRepeater.mdx": [
		"./stories/hooks/useRepeater.mdx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		5257
	],
	"./hooks/useRepeater.stories": [
		"./stories/hooks/useRepeater.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		5257
	],
	"./hooks/useRepeater.stories.tsx": [
		"./stories/hooks/useRepeater.stories.tsx",
		3797,
		6668,
		3816,
		7610,
		8378,
		9377,
		9963,
		5257
	],
	"./hooks/useSpacing.mdx": [
		"./stories/hooks/useSpacing.mdx",
		3797,
		512
	],
	"./intro.mdx": [
		"./stories/intro.mdx",
		3797,
		1709
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.(mdx%7Cstories\\.(ts%7Ctsx%7Cjs%7Cjsx)))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories\\/intro\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./intro.mdx": [
		"./stories/intro.mdx",
		3797,
		1709
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/stories\\/intro\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "@storybook/channels":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "@storybook/client-logger":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "@storybook/core-events/preview-errors":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;

/***/ }),

/***/ "@storybook/core-events":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "@storybook/global":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_GLOBAL__;

/***/ }),

/***/ "@storybook/preview-api":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [9324], () => (__webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);