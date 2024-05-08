"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4615],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
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

/***/ "./src/components/Tiles/Tile.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ Tile)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tile.module.scss
var Tile_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tile.module.scss");
;// CONCATENATED MODULE: ./src/components/Tiles/Tile.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tile_module/* default */.A, options);




       /* harmony default export */ const Tiles_Tile_module = (Tile_module/* default */.A && Tile_module/* default */.A.locals ? Tile_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/components/Tiles/Tile.tsx
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






const TileComponent = (_ref, ref) => {
  let {
    title,
    imageProps,
    enabled,
    className,
    loading,
    tileAction,
    ...rest
  } = _ref;
  const [tileDescriptionID] = (0,react.useState)((0,helper/* generateID */.ni)(20));
  if (!title) {
    throw new Error("Please make sure to pass a title prop to your Tile component.");
  }
  const statusMessage = () => {
    if (enabled) {
      return "Status: enabled";
    }
    return "Status: disabled";
  };
  return /*#__PURE__*/react.createElement("article", _extends({}, rest, {
    tabIndex: 0,
    "aria-labelledby": tileDescriptionID,
    ref: ref,
    className: "".concat(Tiles_Tile_module["tile"], " ").concat(loading ? Tiles_Tile_module["loading"] : "")
  }), /*#__PURE__*/react.createElement("header", {
    style: {
      justifyContent: enabled === undefined ? "flex-end" : "space-between"
    }
  }, enabled === true && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    color: "var(--success)",
    icon: Icon/* Icons */.F.Checkmark,
    className: "".concat(Tiles_Tile_module["icon"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), enabled === false && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    color: "var(--greyed-out)",
    icon: Icon/* Icons */.F.Forbidden,
    className: "".concat(Tiles_Tile_module["icon"], " ").concat(className !== null && className !== void 0 ? className : "")
  }), enabled !== undefined && /*#__PURE__*/react.createElement("span", {
    id: tileDescriptionID,
    className: readyclasses_module/* default */.A["sr-only"]
  }, "".concat(title, ". ").concat(statusMessage())), tileAction !== null && tileAction !== void 0 ? tileAction : null), /*#__PURE__*/react.createElement("div", {
    className: Tiles_Tile_module["content"]
  }, imageProps && imageProps.src.length > 0 && /*#__PURE__*/react.createElement("figure", {
    className: Tiles_Tile_module["image"]
  }, !loading && /*#__PURE__*/react.createElement("img", _extends({}, imageProps, {
    alt: ""
  }))), (!imageProps || imageProps.src.length === 0) && /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    className: Tiles_Tile_module["placeholder"],
    icon: Icon/* Icons */.F.Image
  }), /*#__PURE__*/react.createElement("span", {
    className: Tiles_Tile_module["title"]
  }, title)));
};
const Tile = /*#__PURE__*/react.forwardRef(TileComponent);
try {
    // @ts-ignore
    Tile.displayName = "Tile";
    // @ts-ignore
    Tile.__docgenInfo = { "description": "", "displayName": "Tile", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "imageProps": { "defaultValue": null, "description": "", "name": "imageProps", "required": false, "type": { "name": "ImageProps" } }, "enabled": { "defaultValue": null, "description": "", "name": "enabled", "required": false, "type": { "name": "boolean" } }, "tileAction": { "defaultValue": null, "description": "", "name": "tileAction", "required": false, "type": { "name": "ReactElement<Props, string | JSXElementConstructor<any>> | ReactElement<Props, string | JSXElementConstructor<any>>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tiles/Tile.tsx#Tile"] = { docgenInfo: Tile.__docgenInfo, name: "Tile", path: "src/components/Tiles/Tile.tsx#Tile" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useBodyClick.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ useBodyClick)
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


const useBodyClick = (checkFunction, callbackFunction, dependingStateVariable) => {
  function bodyClickListener(event) {
    if (checkFunction(event)) {
      callbackFunction();
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("click", bodyClickListener);
    return () => {
      window.removeEventListener("click", bodyClickListener);
    };
  }, [dependingStateVariable]);
};

/***/ }),

/***/ "./src/hooks/useGetDomRoot.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: () => (/* binding */ getValueByPath),
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
const getValueByPath = (obj, path) => {
  return path.split(".").reduce((res, prop) => {
    return res[prop];
  }, obj);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tile.module.scss":
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
 */.Tile-module__sr-only--eiZm4{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Tile-module__hidden--R4v7g{display:none}.Tile-module__slide-in--SnQTF{animation:Tile-module__slide-in--SnQTF .5s forwards}@media(prefers-reduced-motion: reduce){.Tile-module__slide-in--SnQTF{animation-duration:.1ms}}.Tile-module__slide-out--Zl8PU{animation:Tile-module__slide-out--Zl8PU .5s forwards}@media(prefers-reduced-motion: reduce){.Tile-module__slide-out--Zl8PU{animation-duration:.1ms}}@keyframes Tile-module__slide-in--SnQTF{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Tile-module__slide-out--Zl8PU{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Tile-module__tile--RIJTT{border:1px solid var(--light-grey-border);border-radius:8px;box-sizing:border-box;padding:0 0 2rem;background-color:var(--light);transition-property:box-shadow;transition-duration:.2s;transition-timing-function:ease-in-out;font-family:var(--font-family)}@media(prefers-reduced-motion: reduce){.Tile-module__tile--RIJTT{transition-duration:.1ms}}.Tile-module__tile--RIJTT:hover{box-shadow:0 3px 6px rgba(0,0,0,.29)}.Tile-module__tile--RIJTT header{display:flex;align-items:center}.Tile-module__tile--RIJTT header .Tile-module__icon--fG2eF{padding:0 1rem}.Tile-module__tile--RIJTT figure{margin:0 0 1rem;height:3rem}.Tile-module__tile--RIJTT figure img{vertical-align:top;height:3rem;width:auto}.Tile-module__tile--RIJTT .Tile-module__placeholder--U4Q4_{font-size:3rem;margin:0 0 1rem;color:var(--greyed-out)}.Tile-module__tile--RIJTT .Tile-module__content--vy6kW{display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:default;padding:0 1rem}.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW header{display:none}.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW .Tile-module__image--jnqsE{margin-top:2.5rem;position:relative;overflow:hidden;background-color:var(--skeleton-background-color);border-radius:.5rem;width:3rem;height:3rem}.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW .Tile-module__image--jnqsE::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(var(--skeleton-animation-color-rgb), 0) 0, rgba(var(--skeleton-animation-color-rgb), 0.2) 20%, rgba(var(--skeleton-animation-color-rgb), 0.5) 60%, rgba(var(--skeleton-animation-color-rgb), 0));content:"";animation:Tile-module__shimmer--I94Za 2s infinite}@media(prefers-reduced-motion: reduce){.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW .Tile-module__image--jnqsE::after{animation:none}}@keyframes Tile-module__shimmer--I94Za{100%{transform:translateX(100%)}}.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW .Tile-module__title--RJ7pB{position:relative;overflow:hidden;background-color:var(--skeleton-background-color);color:rgba(0,0,0,0);display:inline-block;width:70%;border-radius:.5rem}.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW .Tile-module__title--RJ7pB::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(var(--skeleton-animation-color-rgb), 0) 0, rgba(var(--skeleton-animation-color-rgb), 0.2) 20%, rgba(var(--skeleton-animation-color-rgb), 0.5) 60%, rgba(var(--skeleton-animation-color-rgb), 0));content:"";animation:Tile-module__shimmer--I94Za 2s infinite}@media(prefers-reduced-motion: reduce){.Tile-module__tile--RIJTT.Tile-module__loading--eCPGW .Tile-module__title--RJ7pB::after{animation:none}}@keyframes Tile-module__shimmer--I94Za{100%{transform:translateX(100%)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Tile-module__sr-only--eiZm4`,
	"hidden": `Tile-module__hidden--R4v7g`,
	"slide-in": `Tile-module__slide-in--SnQTF`,
	"slide-out": `Tile-module__slide-out--Zl8PU`,
	"tile": `Tile-module__tile--RIJTT`,
	"icon": `Tile-module__icon--fG2eF`,
	"placeholder": `Tile-module__placeholder--U4Q4_`,
	"content": `Tile-module__content--vy6kW`,
	"loading": `Tile-module__loading--eCPGW`,
	"image": `Tile-module__image--jnqsE`,
	"shimmer": `Tile-module__shimmer--I94Za`,
	"title": `Tile-module__title--RJ7pB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
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
 */.readyclasses-module__sr-only--AaB3O{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.readyclasses-module__hidden--kciBr{display:none}.readyclasses-module__slide-in--_Xh2C{animation:readyclasses-module__slide-in--_Xh2C .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-in--_Xh2C{animation-duration:.1ms}}.readyclasses-module__slide-out--fOqOy{animation:readyclasses-module__slide-out--fOqOy .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-out--fOqOy{animation-duration:.1ms}}@keyframes readyclasses-module__slide-in--_Xh2C{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes readyclasses-module__slide-out--fOqOy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `readyclasses-module__sr-only--AaB3O`,
	"hidden": `readyclasses-module__hidden--kciBr`,
	"slide-in": `readyclasses-module__slide-in--_Xh2C`,
	"slide-out": `readyclasses-module__slide-out--fOqOy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {



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

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "./src/readyclasses.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

}]);