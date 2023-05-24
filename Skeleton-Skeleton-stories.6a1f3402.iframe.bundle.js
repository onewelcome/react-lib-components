"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1713],{

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

/***/ "./stories/Skeleton/Skeleton.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RectangleSkeleton": function() { return /* binding */ RectangleSkeleton; },
  "Skeleton": function() { return /* binding */ Skeleton_stories_Skeleton; },
  "TypographySkeleton": function() { return /* binding */ TypographySkeleton; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Skeleton_stories; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Skeleton/Skeleton.module.scss
var Skeleton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Skeleton/Skeleton.module.scss");
;// CONCATENATED MODULE: ./src/components/Skeleton/Skeleton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Skeleton_module/* default */.Z, options);




       /* harmony default export */ var Skeleton_Skeleton_module = (Skeleton_module/* default */.Z && Skeleton_module/* default.locals */.Z.locals ? Skeleton_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Skeleton/Skeleton.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _excluded = ["variant", "height", "width", "className", "style"];
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



var SkeletonComponent = function SkeletonComponent(_ref, ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "text" : _ref$variant,
    height = _ref.height,
    width = _ref.width,
    className = _ref.className,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  var classNames = [Skeleton_Skeleton_module.skeleton];
  !height && classNames.push(Skeleton_Skeleton_module["no-height"]);
  variant === "text" && classNames.push(Skeleton_Skeleton_module.text);
  variant === "circular" && classNames.push(Skeleton_Skeleton_module.circular);
  className && classNames.push(className);
  return /*#__PURE__*/react.createElement("span", _extends({}, rest, {
    "aria-busy": "true",
    "aria-hidden": "true",
    ref: ref,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height
    }),
    className: classNames.join(" ")
  }));
};
var Skeleton = /*#__PURE__*/react.forwardRef(SkeletonComponent);
try {
    // @ts-ignore
    Skeleton.displayName = "Skeleton";
    // @ts-ignore
    Skeleton.__docgenInfo = { "description": "", "displayName": "Skeleton", "props": { "variant": { "defaultValue": { value: "text" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"text\"" }, { "value": "\"circular\"" }, { "value": "\"rectangle\"" }] } }, "height": { "defaultValue": null, "description": "", "name": "height", "required": false, "type": { "name": "string | number" } }, "width": { "defaultValue": null, "description": "", "name": "width", "required": false, "type": { "name": "string | number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"] = { docgenInfo: Skeleton.__docgenInfo, name: "Skeleton", path: "src/components/Skeleton/Skeleton.tsx#Skeleton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Skeleton/Skeleton.mdx



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
      h1: "h1",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Skeleton"
        }), " component is used to render loading animation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It can be used to mock text, circular objects, or any rectangle by passing the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "variant"
        }), " property."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "height"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "width"
        }), " properties are optional. The width is by default set to 100%.\nIf the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "height"
        }), " property is not defined, it takes a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "height"
        }), " of the current font size."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "examples",
        children: "Examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<Skeleton />\n<Skeleton variant=\"rectangle\" height={50} width={100}/>\n<Typography variant=\"h1\">\n  <Skeleton />\n</Typography>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: Skeleton_stories_Skeleton
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: RectangleSkeleton
        })
      }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
          of: TypographySkeleton
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
/* harmony default export */ var Skeleton_Skeleton = (MDXContent);

;// CONCATENATED MODULE: ./stories/Skeleton/Skeleton.stories.tsx
var _Skeleton$parameters, _Skeleton$parameters2, _Skeleton$parameters3, _RectangleSkeleton$pa, _RectangleSkeleton$pa2, _RectangleSkeleton$pa3, _TypographySkeleton$p, _TypographySkeleton$p2, _TypographySkeleton$p3;
function Skeleton_stories_typeof(obj) {
  "@babel/helpers - typeof";

  return Skeleton_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, Skeleton_stories_typeof(obj);
}
function Skeleton_stories_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function Skeleton_stories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? Skeleton_stories_ownKeys(Object(source), !0).forEach(function (key) {
      Skeleton_stories_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Skeleton_stories_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function Skeleton_stories_defineProperty(obj, key, value) {
  key = Skeleton_stories_toPropertyKey(key);
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
function Skeleton_stories_toPropertyKey(arg) {
  var key = Skeleton_stories_toPrimitive(arg, "string");
  return Skeleton_stories_typeof(key) === "symbol" ? key : String(key);
}
function Skeleton_stories_toPrimitive(input, hint) {
  if (Skeleton_stories_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Skeleton_stories_typeof(res) !== "object") return res;
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
  title: "components/Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      page: Skeleton_Skeleton
    }
  },
  argTypes: {
    height: {
      control: {
        type: "number"
      }
    },
    width: {
      control: {
        type: "number"
      }
    }
  }
};
/* harmony default export */ var Skeleton_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Skeleton, args);
};
var Skeleton_stories_Skeleton = Template.bind({});
Skeleton_stories_Skeleton.args = {
  variant: "text"
};
var RectangleSkeleton = Template.bind({});
RectangleSkeleton.args = {
  variant: "rectangle",
  height: 50,
  width: 100
};
var TypographySkeletonTemplate = function TypographySkeletonTemplate(args) {
  return /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "h1"
  }, /*#__PURE__*/react.createElement(Skeleton, args));
};
var TypographySkeleton = TypographySkeletonTemplate.bind({});
TypographySkeleton.storyName = "Skeleton inside Typography";
TypographySkeleton.args = {};
Skeleton_stories_Skeleton.parameters = Skeleton_stories_objectSpread(Skeleton_stories_objectSpread({}, Skeleton_stories_Skeleton.parameters), {}, {
  docs: Skeleton_stories_objectSpread(Skeleton_stories_objectSpread({}, (_Skeleton$parameters = Skeleton_stories_Skeleton.parameters) === null || _Skeleton$parameters === void 0 ? void 0 : _Skeleton$parameters.docs), {}, {
    source: Skeleton_stories_objectSpread({
      originalSource: "args => <SkeletonComponent {...args} />"
    }, (_Skeleton$parameters2 = Skeleton_stories_Skeleton.parameters) === null || _Skeleton$parameters2 === void 0 ? void 0 : (_Skeleton$parameters3 = _Skeleton$parameters2.docs) === null || _Skeleton$parameters3 === void 0 ? void 0 : _Skeleton$parameters3.source)
  })
});
RectangleSkeleton.parameters = Skeleton_stories_objectSpread(Skeleton_stories_objectSpread({}, RectangleSkeleton.parameters), {}, {
  docs: Skeleton_stories_objectSpread(Skeleton_stories_objectSpread({}, (_RectangleSkeleton$pa = RectangleSkeleton.parameters) === null || _RectangleSkeleton$pa === void 0 ? void 0 : _RectangleSkeleton$pa.docs), {}, {
    source: Skeleton_stories_objectSpread({
      originalSource: "args => <SkeletonComponent {...args} />"
    }, (_RectangleSkeleton$pa2 = RectangleSkeleton.parameters) === null || _RectangleSkeleton$pa2 === void 0 ? void 0 : (_RectangleSkeleton$pa3 = _RectangleSkeleton$pa2.docs) === null || _RectangleSkeleton$pa3 === void 0 ? void 0 : _RectangleSkeleton$pa3.source)
  })
});
TypographySkeleton.parameters = Skeleton_stories_objectSpread(Skeleton_stories_objectSpread({}, TypographySkeleton.parameters), {}, {
  docs: Skeleton_stories_objectSpread(Skeleton_stories_objectSpread({}, (_TypographySkeleton$p = TypographySkeleton.parameters) === null || _TypographySkeleton$p === void 0 ? void 0 : _TypographySkeleton$p.docs), {}, {
    source: Skeleton_stories_objectSpread({
      originalSource: "args => <Typography variant=\"h1\">\n    <SkeletonComponent {...args} />\n  </Typography>"
    }, (_TypographySkeleton$p2 = TypographySkeleton.parameters) === null || _TypographySkeleton$p2 === void 0 ? void 0 : (_TypographySkeleton$p3 = _TypographySkeleton$p2.docs) === null || _TypographySkeleton$p3 === void 0 ? void 0 : _TypographySkeleton$p3.source)
  })
});
var __namedExportsOrder = ["Skeleton", "RectangleSkeleton", "TypographySkeleton"];

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Skeleton/Skeleton.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Skeleton-module__sr-only--vZ_Nu{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Skeleton-module__hidden--J1O3t{display:none}.Skeleton-module__slide-in--vfC6q{animation:Skeleton-module__slide-in--vfC6q .5s forwards}@media(prefers-reduced-motion: reduce){.Skeleton-module__slide-in--vfC6q{animation-duration:.1ms}}.Skeleton-module__slide-out--F1fw2{animation:Skeleton-module__slide-out--F1fw2 .5s forwards}@media(prefers-reduced-motion: reduce){.Skeleton-module__slide-out--F1fw2{animation-duration:.1ms}}@keyframes Skeleton-module__slide-in--vfC6q{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Skeleton-module__slide-out--F1fw2{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Skeleton-module__w-6--LwNEC{width:6%}.Skeleton-module__w-7--H_kkm{width:7%}.Skeleton-module__w-8--m5bds{width:8%}.Skeleton-module__w-9--bHyq3{width:9%}.Skeleton-module__w-10--wdXC5{width:10%}.Skeleton-module__w-11--EGXlI{width:11%}.Skeleton-module__w-12--E5uaF{width:12%}.Skeleton-module__w-13--i52YJ{width:13%}.Skeleton-module__w-14--FZQYU{width:14%}.Skeleton-module__w-15--YM3nf{width:15%}.Skeleton-module__w-16--MSEwJ{width:16%}.Skeleton-module__w-17--zzwCf{width:17%}.Skeleton-module__w-18--kzgKh{width:18%}.Skeleton-module__w-19--_tijf{width:19%}.Skeleton-module__w-20--Fwy0i{width:20%}.Skeleton-module__w-21--Qc5cG{width:21%}.Skeleton-module__w-22--PRxDu{width:22%}.Skeleton-module__w-23--epBJi{width:23%}.Skeleton-module__w-24--TmaCI{width:24%}.Skeleton-module__w-25--DYpfO{width:25%}.Skeleton-module__w-26--rnUS8{width:26%}.Skeleton-module__w-27--sNM5L{width:27%}.Skeleton-module__w-28--LcRKT{width:28%}.Skeleton-module__w-29--TaLLu{width:29%}.Skeleton-module__w-30--IyNWa{width:30%}.Skeleton-module__w-31--gpMvB{width:31%}.Skeleton-module__w-32--QKGqj{width:32%}.Skeleton-module__w-33--O8dgR{width:33%}.Skeleton-module__w-34--YHqxP{width:34%}.Skeleton-module__w-35--i0kxy{width:35%}.Skeleton-module__w-36--RQAA2{width:36%}.Skeleton-module__w-37--yodCj{width:37%}.Skeleton-module__w-38--guGCP{width:38%}.Skeleton-module__w-39--sYgRK{width:39%}.Skeleton-module__w-40--mvaEQ{width:40%}.Skeleton-module__w-41--iBw20{width:41%}.Skeleton-module__w-42--c5fxK{width:42%}.Skeleton-module__w-43--VtxCM{width:43%}.Skeleton-module__w-44--mPBiu{width:44%}.Skeleton-module__w-45--zO1JO{width:45%}.Skeleton-module__w-46--BSXwW{width:46%}.Skeleton-module__w-47--yz_Rh{width:47%}.Skeleton-module__w-48--d1VDZ{width:48%}.Skeleton-module__w-49--L9HRV{width:49%}.Skeleton-module__w-50--dTcHM{width:50%}.Skeleton-module__w-51--Wvjjn{width:51%}.Skeleton-module__w-52--gF80e{width:52%}.Skeleton-module__w-53--j0ImP{width:53%}.Skeleton-module__w-54--FJWWZ{width:54%}.Skeleton-module__w-55--It3BB{width:55%}.Skeleton-module__w-56--LUumA{width:56%}.Skeleton-module__w-57--NYkZe{width:57%}.Skeleton-module__w-58--T7Ub6{width:58%}.Skeleton-module__w-59--iWAgp{width:59%}.Skeleton-module__w-60--sUAhM{width:60%}.Skeleton-module__w-61--fqxzU{width:61%}.Skeleton-module__w-62--CpbNo{width:62%}.Skeleton-module__w-63--ILkbF{width:63%}.Skeleton-module__w-64--b9EXY{width:64%}.Skeleton-module__w-65--ooKbx{width:65%}.Skeleton-module__w-66--f6Hnu{width:66%}.Skeleton-module__w-67--n4_nt{width:67%}.Skeleton-module__w-68--id6dN{width:68%}.Skeleton-module__w-69--AV1ZH{width:69%}.Skeleton-module__w-70--XyHJT{width:70%}.Skeleton-module__w-71--VO6SX{width:71%}.Skeleton-module__w-72--sokGK{width:72%}.Skeleton-module__w-73--D5VVQ{width:73%}.Skeleton-module__w-74--ITSa7{width:74%}.Skeleton-module__w-75--cDjcD{width:75%}.Skeleton-module__w-76--BKkXo{width:76%}.Skeleton-module__w-77--FK6gD{width:77%}.Skeleton-module__w-78--v3wPu{width:78%}.Skeleton-module__w-79--VWRiV{width:79%}.Skeleton-module__w-80--oZROt{width:80%}.Skeleton-module__w-81--R4lvx{width:81%}.Skeleton-module__w-82--cSZ9N{width:82%}.Skeleton-module__w-83--GgXeE{width:83%}.Skeleton-module__w-84--pNhln{width:84%}.Skeleton-module__w-85--Xqs16{width:85%}.Skeleton-module__w-86--qizFZ{width:86%}.Skeleton-module__w-87--YwJrY{width:87%}.Skeleton-module__w-88--P8duy{width:88%}.Skeleton-module__w-89--YyRx9{width:89%}.Skeleton-module__w-90--ZxK7X{width:90%}.Skeleton-module__w-91--SkXN0{width:91%}.Skeleton-module__w-92--hmJPl{width:92%}.Skeleton-module__w-93--Zr8ji{width:93%}.Skeleton-module__w-94--kOSbw{width:94%}.Skeleton-module__w-95--Utx9D{width:95%}.Skeleton-module__w-96--Nk65M{width:96%}.Skeleton-module__w-97--aDkSC{width:97%}.Skeleton-module__w-98--rIue3{width:98%}.Skeleton-module__w-99--i2Yq6{width:99%}.Skeleton-module__w-100--TgBtm{width:100%}.Skeleton-module__w-101--oIks5{width:101%}.Skeleton-module__w-102--wPu_y{width:102%}.Skeleton-module__w-103--ETG9N{width:103%}.Skeleton-module__w-104--BTS9x{width:104%}.Skeleton-module__w-105--r1Oj8{width:105%}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Skeleton-module__skeleton--A7l_r{display:block;height:auto;position:relative;overflow:hidden;background-color:var(--skeleton-background-color)}.Skeleton-module__skeleton--A7l_r::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg, rgba(var(--skeleton-animation-color-rgb), 0) 0, rgba(var(--skeleton-animation-color-rgb), 0.2) 20%, rgba(var(--skeleton-animation-color-rgb), 0.5) 60%, rgba(var(--skeleton-animation-color-rgb), 0));content:\"\";animation:Skeleton-module__shimmer--E64Kp 2s infinite}@media(prefers-reduced-motion: reduce){.Skeleton-module__skeleton--A7l_r::after{animation:none}}@keyframes Skeleton-module__shimmer--E64Kp{100%{transform:translateX(100%)}}.Skeleton-module__no-height--WDIsP::before{content:\" \";white-space:pre-wrap}.Skeleton-module__text--Hryg1{border-radius:.5rem}.Skeleton-module__circular--Ch7ab{border-radius:50%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Skeleton-module__sr-only--vZ_Nu",
	"hidden": "Skeleton-module__hidden--J1O3t",
	"slide-in": "Skeleton-module__slide-in--vfC6q",
	"slide-out": "Skeleton-module__slide-out--F1fw2",
	"w-6": "Skeleton-module__w-6--LwNEC",
	"w-7": "Skeleton-module__w-7--H_kkm",
	"w-8": "Skeleton-module__w-8--m5bds",
	"w-9": "Skeleton-module__w-9--bHyq3",
	"w-10": "Skeleton-module__w-10--wdXC5",
	"w-11": "Skeleton-module__w-11--EGXlI",
	"w-12": "Skeleton-module__w-12--E5uaF",
	"w-13": "Skeleton-module__w-13--i52YJ",
	"w-14": "Skeleton-module__w-14--FZQYU",
	"w-15": "Skeleton-module__w-15--YM3nf",
	"w-16": "Skeleton-module__w-16--MSEwJ",
	"w-17": "Skeleton-module__w-17--zzwCf",
	"w-18": "Skeleton-module__w-18--kzgKh",
	"w-19": "Skeleton-module__w-19--_tijf",
	"w-20": "Skeleton-module__w-20--Fwy0i",
	"w-21": "Skeleton-module__w-21--Qc5cG",
	"w-22": "Skeleton-module__w-22--PRxDu",
	"w-23": "Skeleton-module__w-23--epBJi",
	"w-24": "Skeleton-module__w-24--TmaCI",
	"w-25": "Skeleton-module__w-25--DYpfO",
	"w-26": "Skeleton-module__w-26--rnUS8",
	"w-27": "Skeleton-module__w-27--sNM5L",
	"w-28": "Skeleton-module__w-28--LcRKT",
	"w-29": "Skeleton-module__w-29--TaLLu",
	"w-30": "Skeleton-module__w-30--IyNWa",
	"w-31": "Skeleton-module__w-31--gpMvB",
	"w-32": "Skeleton-module__w-32--QKGqj",
	"w-33": "Skeleton-module__w-33--O8dgR",
	"w-34": "Skeleton-module__w-34--YHqxP",
	"w-35": "Skeleton-module__w-35--i0kxy",
	"w-36": "Skeleton-module__w-36--RQAA2",
	"w-37": "Skeleton-module__w-37--yodCj",
	"w-38": "Skeleton-module__w-38--guGCP",
	"w-39": "Skeleton-module__w-39--sYgRK",
	"w-40": "Skeleton-module__w-40--mvaEQ",
	"w-41": "Skeleton-module__w-41--iBw20",
	"w-42": "Skeleton-module__w-42--c5fxK",
	"w-43": "Skeleton-module__w-43--VtxCM",
	"w-44": "Skeleton-module__w-44--mPBiu",
	"w-45": "Skeleton-module__w-45--zO1JO",
	"w-46": "Skeleton-module__w-46--BSXwW",
	"w-47": "Skeleton-module__w-47--yz_Rh",
	"w-48": "Skeleton-module__w-48--d1VDZ",
	"w-49": "Skeleton-module__w-49--L9HRV",
	"w-50": "Skeleton-module__w-50--dTcHM",
	"w-51": "Skeleton-module__w-51--Wvjjn",
	"w-52": "Skeleton-module__w-52--gF80e",
	"w-53": "Skeleton-module__w-53--j0ImP",
	"w-54": "Skeleton-module__w-54--FJWWZ",
	"w-55": "Skeleton-module__w-55--It3BB",
	"w-56": "Skeleton-module__w-56--LUumA",
	"w-57": "Skeleton-module__w-57--NYkZe",
	"w-58": "Skeleton-module__w-58--T7Ub6",
	"w-59": "Skeleton-module__w-59--iWAgp",
	"w-60": "Skeleton-module__w-60--sUAhM",
	"w-61": "Skeleton-module__w-61--fqxzU",
	"w-62": "Skeleton-module__w-62--CpbNo",
	"w-63": "Skeleton-module__w-63--ILkbF",
	"w-64": "Skeleton-module__w-64--b9EXY",
	"w-65": "Skeleton-module__w-65--ooKbx",
	"w-66": "Skeleton-module__w-66--f6Hnu",
	"w-67": "Skeleton-module__w-67--n4_nt",
	"w-68": "Skeleton-module__w-68--id6dN",
	"w-69": "Skeleton-module__w-69--AV1ZH",
	"w-70": "Skeleton-module__w-70--XyHJT",
	"w-71": "Skeleton-module__w-71--VO6SX",
	"w-72": "Skeleton-module__w-72--sokGK",
	"w-73": "Skeleton-module__w-73--D5VVQ",
	"w-74": "Skeleton-module__w-74--ITSa7",
	"w-75": "Skeleton-module__w-75--cDjcD",
	"w-76": "Skeleton-module__w-76--BKkXo",
	"w-77": "Skeleton-module__w-77--FK6gD",
	"w-78": "Skeleton-module__w-78--v3wPu",
	"w-79": "Skeleton-module__w-79--VWRiV",
	"w-80": "Skeleton-module__w-80--oZROt",
	"w-81": "Skeleton-module__w-81--R4lvx",
	"w-82": "Skeleton-module__w-82--cSZ9N",
	"w-83": "Skeleton-module__w-83--GgXeE",
	"w-84": "Skeleton-module__w-84--pNhln",
	"w-85": "Skeleton-module__w-85--Xqs16",
	"w-86": "Skeleton-module__w-86--qizFZ",
	"w-87": "Skeleton-module__w-87--YwJrY",
	"w-88": "Skeleton-module__w-88--P8duy",
	"w-89": "Skeleton-module__w-89--YyRx9",
	"w-90": "Skeleton-module__w-90--ZxK7X",
	"w-91": "Skeleton-module__w-91--SkXN0",
	"w-92": "Skeleton-module__w-92--hmJPl",
	"w-93": "Skeleton-module__w-93--Zr8ji",
	"w-94": "Skeleton-module__w-94--kOSbw",
	"w-95": "Skeleton-module__w-95--Utx9D",
	"w-96": "Skeleton-module__w-96--Nk65M",
	"w-97": "Skeleton-module__w-97--aDkSC",
	"w-98": "Skeleton-module__w-98--rIue3",
	"w-99": "Skeleton-module__w-99--i2Yq6",
	"w-100": "Skeleton-module__w-100--TgBtm",
	"w-101": "Skeleton-module__w-101--oIks5",
	"w-102": "Skeleton-module__w-102--wPu_y",
	"w-103": "Skeleton-module__w-103--ETG9N",
	"w-104": "Skeleton-module__w-104--BTS9x",
	"w-105": "Skeleton-module__w-105--r1Oj8",
	"skeleton": "Skeleton-module__skeleton--A7l_r",
	"shimmer": "Skeleton-module__shimmer--E64Kp",
	"no-height": "Skeleton-module__no-height--WDIsP",
	"text": "Skeleton-module__text--Hryg1",
	"circular": "Skeleton-module__circular--Ch7ab"
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