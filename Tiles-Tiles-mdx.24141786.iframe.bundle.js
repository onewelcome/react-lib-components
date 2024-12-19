"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1476],{

/***/ "./stories/Tiles/Tiles.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _Tiles_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/Tiles/Tiles.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Tiles_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tiles"
      }), " component has been created to display a single or multiple ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tile"
      }), " component. It can, and should, be utilized as a wrapper to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tile"
      }), " component to provide a proper pre-defined grid structure.\nThe maximum number of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tile"
      }), " components next to each other is three on the desktop, which scales down automatically when the window resizes to a smaller viewport."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["At the same time, it will allow you to enable and disable a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "loading"
      }), " state, showing 3 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tile"
      }), " components with Skeleton Loading."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For documentation regarding individual ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tile"
      }), " components, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/docs/stories-ui-tiles-tile--tile",
        children: "see this page"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Story */ .gG, {
        of: _Tiles_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.Tiles
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "./stories/Tiles/Tiles.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tiles: () => (/* binding */ Tiles_stories_Tiles),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Tiles_stories)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tiles.module.scss
var Tiles_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tiles.module.scss");
;// CONCATENATED MODULE: ./src/components/Tiles/Tiles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tiles_module/* default */.A, options);




       /* harmony default export */ const Tiles_Tiles_module = (Tiles_module/* default */.A && Tiles_module/* default */.A.locals ? Tiles_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Tiles/Tile.tsx + 1 modules
var Tile = __webpack_require__("./src/components/Tiles/Tile.tsx");
;// CONCATENATED MODULE: ./src/components/Tiles/Tiles.tsx
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




const TilesComponent = (_ref, ref) => {
  let {
    children,
    className,
    loading = false,
    ...rest
  } = _ref;
  const renderChildren = () => {
    if (loading) {
      return [/*#__PURE__*/react.createElement(Tile/* Tile */.F, {
        key: "placeholder1",
        title: "placeholder",
        imageProps: {
          src: "placeholder"
        },
        loading: true
      }), /*#__PURE__*/react.createElement(Tile/* Tile */.F, {
        key: "placeholder2",
        title: "placeholder",
        imageProps: {
          src: "placeholder"
        },
        loading: true
      }), /*#__PURE__*/react.createElement(Tile/* Tile */.F, {
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
const Tiles = /*#__PURE__*/react.forwardRef(TilesComponent);
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
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx
var ContextMenuItem = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
// EXTERNAL MODULE: ./stories/Tiles/Tiles.mdx
var Tiles_Tiles = __webpack_require__("./stories/Tiles/Tiles.mdx");
;// CONCATENATED MODULE: ./stories/Tiles/Tiles.stories.tsx
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





const meta = {
  title: "components/Layout/Tiles/Tiles",
  component: Tiles,
  parameters: {
    docs: {
      page: Tiles_Tiles["default"]
    }
  }
};
/* harmony default export */ const Tiles_stories = (meta);
const Template = args => {
  const addToFavorites = () => {
    window.alert("Add to favorites!");
  };
  return /*#__PURE__*/react.createElement(Tiles, args, /*#__PURE__*/react.createElement(Tile/* Tile */.F, {
    key: "tile1",
    title: "Tile1",
    imageProps: {
      src: "https://yt3.ggpht.com/ytc/AIdro_kADn_H24AfNf1hw5v3P3ShFuYFhlTjUsdNtZv2r1YpfyM=s68-c-k-c0x00ffffff-no-rj"
    },
    enabled: false,
    tileAction: /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.t, {
      id: "context_menu_1",
      placement: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
        title: "context menu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        icon: Icon/* Icons */.F.EllipsisAlt
      }))
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.k, null, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.k, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.k, null, "Item 3"))
  }), /*#__PURE__*/react.createElement(Tile/* Tile */.F, {
    key: "tile2",
    title: "Tile2",
    enabled: true,
    tileAction: /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
      onClick: addToFavorites,
      title: "Add to favorite"
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: Icon/* Icons */.F.StarAlt
    }))
  }), /*#__PURE__*/react.createElement(Tile/* Tile */.F, {
    key: "tile3",
    title: "Tile3",
    imageProps: {
      src: ""
    },
    enabled: true,
    tileAction: /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.t, {
      id: "context_menu_3",
      placement: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
        title: "context menu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        icon: Icon/* Icons */.F.EllipsisAlt
      }))
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.k, null, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.k, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.k, null, "Item 3"))
  }), /*#__PURE__*/react.createElement(Tile/* Tile */.F, {
    key: "tile4",
    title: "Tile4",
    imageProps: {
      src: "https://yt3.ggpht.com/ytc/AIdro_kADn_H24AfNf1hw5v3P3ShFuYFhlTjUsdNtZv2r1YpfyM=s68-c-k-c0x00ffffff-no-rj"
    },
    enabled: false,
    tileAction: /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
      onClick: addToFavorites,
      title: "Add to favorite"
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
      icon: Icon/* Icons */.F.Star
    }))
  }));
};
const Tiles_stories_Tiles = Template.bind({});
Tiles_stories_Tiles.args = {};
Tiles_stories_Tiles.parameters = {
  ...Tiles_stories_Tiles.parameters,
  docs: {
    ...Tiles_stories_Tiles.parameters?.docs,
    source: {
      originalSource: "args => {\n  const addToFavorites = () => {\n    window.alert(\"Add to favorites!\");\n  };\n  return <TitlesComponent {...args}>\n      <Tile key=\"tile1\" title=\"Tile1\" imageProps={{\n      src: \"https://yt3.ggpht.com/ytc/AIdro_kADn_H24AfNf1hw5v3P3ShFuYFhlTjUsdNtZv2r1YpfyM=s68-c-k-c0x00ffffff-no-rj\"\n    }} enabled={false} tileAction={<ContextMenu id=\"context_menu_1\" placement={{\n      vertical: \"bottom\",\n      horizontal: \"right\"\n    }} transformOrigin={{\n      vertical: \"top\",\n      horizontal: \"right\"\n    }} trigger={<IconButton title=\"context menu\">\n                <Icon icon={Icons.EllipsisAlt} />\n              </IconButton>}>\n            <ContextMenuItem>Item 1</ContextMenuItem>\n            <ContextMenuItem>Item 2</ContextMenuItem>\n            <ContextMenuItem>Item 3</ContextMenuItem>\n          </ContextMenu>} />\n      <Tile key=\"tile2\" title=\"Tile2\" enabled={true} tileAction={<IconButton onClick={addToFavorites} title=\"Add to favorite\">\n            <Icon icon={Icons.StarAlt} />\n          </IconButton>} />\n      <Tile key=\"tile3\" title=\"Tile3\" imageProps={{\n      src: \"\"\n    }} enabled={true} tileAction={<ContextMenu id=\"context_menu_3\" placement={{\n      vertical: \"bottom\",\n      horizontal: \"right\"\n    }} transformOrigin={{\n      vertical: \"top\",\n      horizontal: \"right\"\n    }} trigger={<IconButton title=\"context menu\">\n                <Icon icon={Icons.EllipsisAlt} />\n              </IconButton>}>\n            <ContextMenuItem>Item 1</ContextMenuItem>\n            <ContextMenuItem>Item 2</ContextMenuItem>\n            <ContextMenuItem>Item 3</ContextMenuItem>\n          </ContextMenu>} />\n      <Tile key=\"tile4\" title=\"Tile4\" imageProps={{\n      src: \"https://yt3.ggpht.com/ytc/AIdro_kADn_H24AfNf1hw5v3P3ShFuYFhlTjUsdNtZv2r1YpfyM=s68-c-k-c0x00ffffff-no-rj\"\n    }} enabled={false} tileAction={<IconButton onClick={addToFavorites} title=\"Add to favorite\">\n            <Icon icon={Icons.Star} />\n          </IconButton>} />\n    </TitlesComponent>;\n}",
      ...Tiles_stories_Tiles.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Tiles"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tiles/Tiles.module.scss":
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
 */.Tiles-module__tiles--S9ee8{display:grid;grid-gap:1rem;grid-template-columns:repeat(1, 1fr)}@media screen and (min-width: 30em){.Tiles-module__tiles--S9ee8{grid-template-columns:repeat(auto-fit, minmax(14.5rem, 1fr))}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tiles": `Tiles-module__tiles--S9ee8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);