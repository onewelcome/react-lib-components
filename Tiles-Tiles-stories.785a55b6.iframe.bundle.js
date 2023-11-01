"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2342],{

/***/ "./stories/Tiles/Tiles.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tiles: function() { return /* binding */ Tiles_stories_Tiles; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Tiles_stories; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tiles.module.scss
var Tiles_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tiles.module.scss");
;// CONCATENATED MODULE: ./src/components/Tiles/Tiles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tiles_module/* default */.Z, options);




       /* harmony default export */ var Tiles_Tiles_module = (Tiles_module/* default */.Z && Tiles_module/* default */.Z.locals ? Tiles_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Tiles/Tile.tsx + 1 modules
var Tile = __webpack_require__("./src/components/Tiles/Tile.tsx");
;// CONCATENATED MODULE: ./src/components/Tiles/Tiles.tsx
var _excluded = ["children", "className", "loading"];
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




var TilesComponent = function TilesComponent(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    rest = _objectWithoutProperties(_ref, _excluded);
  var renderChildren = function renderChildren() {
    if (loading) {
      return [/*#__PURE__*/react.createElement(Tile/* Tile */.n, {
        key: "placeholder1",
        title: "placeholder",
        imageProps: {
          src: "placeholder"
        },
        loading: true
      }), /*#__PURE__*/react.createElement(Tile/* Tile */.n, {
        key: "placeholder2",
        title: "placeholder",
        imageProps: {
          src: "placeholder"
        },
        loading: true
      }), /*#__PURE__*/react.createElement(Tile/* Tile */.n, {
        key: "placeholder3",
        title: "placeholder",
        imageProps: {
          src: "placeholder"
        },
        loading: true
      })];
    }
    return children;
  };
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: "".concat(Tiles_Tiles_module["tiles"], " ").concat(className !== null && className !== void 0 ? className : ""),
    "aria-live": "polite",
    "aria-busy": loading
  }), renderChildren());
};
var Tiles = /*#__PURE__*/react.forwardRef(TilesComponent);
try {
    // @ts-ignore
    Tiles.displayName = "Tiles";
    // @ts-ignore
    Tiles.__docgenInfo = { "description": "", "displayName": "Tiles", "props": { "loading": { "defaultValue": { value: "false" }, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tiles/Tiles.tsx#Tiles"] = { docgenInfo: Tiles.__docgenInfo, name: "Tiles", path: "src/components/Tiles/Tiles.tsx#Tiles" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenu.tsx + 2 modules
var ContextMenu = __webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx + 1 modules
var ContextMenuItem = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Tiles/Tiles.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    a: "a",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), " component has been created to display a single or multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " component. It can, and should, be utilized as a wrapper to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " component to provide a proper pre-defined grid structure.\nThe maximum number of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components next to each other is three on the desktop, which scales down automatically when the window resizes to a smaller viewport."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At the same time, it will allow you to enable and disable a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "loading"
      }), " state, showing 3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components with Skeleton Loading."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For documentation regarding individual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/stories-ui-tiles-tile--tile",
        children: "see this page"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Tiles_stories_Tiles
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
      story: dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var Tiles_Tiles = (MDXContent);

;// CONCATENATED MODULE: ./stories/Tiles/Tiles.stories.tsx
var _Tiles$parameters, _Tiles$parameters2;
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
  title: "components/Layout/Tiles/Tiles",
  component: Tiles,
  parameters: {
    docs: {
      page: Tiles_Tiles
    }
  }
};
/* harmony default export */ var Tiles_stories = (meta);
var Template = function Template(args) {
  var addToFavorites = function addToFavorites() {
    window.alert("Add to favorites!");
  };
  return /*#__PURE__*/react.createElement(Tiles, args, /*#__PURE__*/react.createElement(Tile/* Tile */.n, {
    key: "tile1",
    title: "Tile1",
    imageProps: {
      src: "https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg"
    },
    enabled: false,
    tileAction: /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
      id: "context_menu_1",
      placement: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
        title: "context menu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.EllipsisAlt
      }))
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 3"))
  }), /*#__PURE__*/react.createElement(Tile/* Tile */.n, {
    key: "tile2",
    title: "Tile2",
    enabled: true,
    tileAction: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
      onClick: addToFavorites,
      title: "Add to favorite"
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons */.P.StarAlt
    }))
  }), /*#__PURE__*/react.createElement(Tile/* Tile */.n, {
    key: "tile3",
    title: "Tile3",
    imageProps: {
      src: ""
    },
    enabled: true,
    tileAction: /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
      id: "context_menu_3",
      placement: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
        title: "context menu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.EllipsisAlt
      }))
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 3"))
  }), /*#__PURE__*/react.createElement(Tile/* Tile */.n, {
    key: "tile4",
    title: "Tile4",
    imageProps: {
      src: "https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg"
    },
    enabled: false,
    tileAction: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
      onClick: addToFavorites,
      title: "Add to favorite"
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons */.P.Star
    }))
  }));
};
var Tiles_stories_Tiles = Template.bind({});
Tiles_stories_Tiles.args = {};
Tiles_stories_Tiles.parameters = _objectSpread(_objectSpread({}, Tiles_stories_Tiles.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Tiles$parameters = Tiles_stories_Tiles.parameters) === null || _Tiles$parameters === void 0 ? void 0 : _Tiles$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const addToFavorites = () => {\n    window.alert(\"Add to favorites!\");\n  };\n  return <TitlesComponent {...args}>\n      <Tile key=\"tile1\" title=\"Tile1\" imageProps={{\n      src: \"https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg\"\n    }} enabled={false} tileAction={<ContextMenu id=\"context_menu_1\" placement={{\n      vertical: \"bottom\",\n      horizontal: \"right\"\n    }} transformOrigin={{\n      vertical: \"top\",\n      horizontal: \"right\"\n    }} trigger={<IconButton title=\"context menu\">\n                <Icon icon={Icons.EllipsisAlt} />\n              </IconButton>}>\n            <ContextMenuItem>Item 1</ContextMenuItem>\n            <ContextMenuItem>Item 2</ContextMenuItem>\n            <ContextMenuItem>Item 3</ContextMenuItem>\n          </ContextMenu>} />\n      <Tile key=\"tile2\" title=\"Tile2\" enabled={true} tileAction={<IconButton onClick={addToFavorites} title=\"Add to favorite\">\n            <Icon icon={Icons.StarAlt} />\n          </IconButton>} />\n      <Tile key=\"tile3\" title=\"Tile3\" imageProps={{\n      src: \"\"\n    }} enabled={true} tileAction={<ContextMenu id=\"context_menu_3\" placement={{\n      vertical: \"bottom\",\n      horizontal: \"right\"\n    }} transformOrigin={{\n      vertical: \"top\",\n      horizontal: \"right\"\n    }} trigger={<IconButton title=\"context menu\">\n                <Icon icon={Icons.EllipsisAlt} />\n              </IconButton>}>\n            <ContextMenuItem>Item 1</ContextMenuItem>\n            <ContextMenuItem>Item 2</ContextMenuItem>\n            <ContextMenuItem>Item 3</ContextMenuItem>\n          </ContextMenu>} />\n      <Tile key=\"tile4\" title=\"Tile4\" imageProps={{\n      src: \"https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg\"\n    }} enabled={false} tileAction={<IconButton onClick={addToFavorites} title=\"Add to favorite\">\n            <Icon icon={Icons.Star} />\n          </IconButton>} />\n    </TitlesComponent>;\n}"
    }, (_Tiles$parameters2 = Tiles_stories_Tiles.parameters) === null || _Tiles$parameters2 === void 0 || (_Tiles$parameters2 = _Tiles$parameters2.docs) === null || _Tiles$parameters2 === void 0 ? void 0 : _Tiles$parameters2.source)
  })
});
var __namedExportsOrder = ["Tiles"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tiles.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Tiles-module__tiles--S9ee8{display:grid;grid-gap:1rem;grid-template-columns:repeat(1, 1fr)}@media screen and (min-width: 30em){.Tiles-module__tiles--S9ee8{grid-template-columns:repeat(auto-fit, minmax(14.5rem, 1fr))}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tiles": "Tiles-module__tiles--S9ee8"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

}]);