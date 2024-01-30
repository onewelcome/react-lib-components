"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1095],{

/***/ "./stories/Tiles/Tile.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tile: () => (/* binding */ Tile_stories_Tile),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Tile_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Tiles/Tile.tsx + 1 modules
var Tile = __webpack_require__("./src/components/Tiles/Tile.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenu.tsx + 2 modules
var ContextMenu = __webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx + 1 modules
var ContextMenuItem = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Tiles/Tile.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " component should always be nested in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), " component. It renders a container that stretches based on its parent. There are multiple things a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " component can render for you:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "title",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It tells screenreaders what the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " is. So make it a description, for example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OneWelcome Identity Provider"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imageprops",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "imageProps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is an object that accepts every single attribute for an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "img"
      }), " HTML element. The most important one here is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src"
      }), ", which should be a string linking to the image."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tileaction",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tileAction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It should be a component that could trigger something. Think about an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IconButton"
      }), " to add something to your favorites or a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenu"
      }), " to display a list of items."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enabled",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enabled"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enabled"
      }), " prop has three states: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undefined"
      }), ". When it's set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), ", a checkmark will be displayed in the top left corner, if it's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ", it will be a forbidden icon, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undefined"
      }), " will not render anything."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loading",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "loading"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This prop will be inherited from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), " wrapper component. But if you use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " as an individual component, you can always manually set the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "loading"
      }), " state through this prop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Tile_stories_Tile
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
/* harmony default export */ const Tiles_Tile = (MDXContent);

;// CONCATENATED MODULE: ./stories/Tiles/Tile.stories.tsx
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
  title: "components/Layout/Tiles/Tile",
  component: Tile/* Tile */.n,
  parameters: {
    docs: {
      page: Tiles_Tile
    }
  }
};
/* harmony default export */ const Tile_stories = (meta);
const Template = args => /*#__PURE__*/react.createElement(Tile/* Tile */.n, args);
const Tile_stories_Tile = Template.bind({});
Tile_stories_Tile.args = {
  title: "components/Tile1",
  imageProps: {
    src: "https://www.onegini.com/hubfs/OneWelcome_Beeldmerk.svg"
  },
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
  }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, null, "Item 3")),
  enabled: true
};
Tile_stories_Tile.parameters = {
  ...Tile_stories_Tile.parameters,
  docs: {
    ...Tile_stories_Tile.parameters?.docs,
    source: {
      originalSource: "args => <TileComponent {...args} />",
      ...Tile_stories_Tile.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Tile"];

/***/ })

}]);