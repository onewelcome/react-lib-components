"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[70],{

/***/ "./stories/admin/LeftNav/LeftNav.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _LeftNav_stories_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/admin/LeftNav/LeftNav.stories.tsx");







function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _LeftNav_stories_tsx__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "experimental-component--api-may-change-without-warning",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "!EXPERIMENTAL COMPONENT! – API may change without warning!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<LeftNav />"
      }), " component is a vertical navigation menu designed for sidebars. It supports nested menu items and custom icons."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Supports nested menu items"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Customizable icons via props"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Keyboard-accessible navigation"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "nested-items",
      children: "Nested Items"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<LeftNav />"
      }), " component supports nested items. By design, it supports only one level of nesting,\nhowever it can render multiple levels of nesting (might not be aligned with a future design).\nRendered subitems are indented more to the right."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "icons",
      children: "Icons"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Each item can have an icon displayed before the item label. The icon should be delivered as a React component,\nmeaning developers have the freedom to choose what kind of prefix component they want to display.\nThe icon is specified inside the item object (see examples below)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Note:"
      }), " Remember to memoize your items to avoid recreating icon components."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "accessibility",
      children: "Accessibility"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The component is fully accessible, supporting keyboard navigation and screen readers.\nUse the arrow keys to navigate the structure. Alternatively, use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Space"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Enter"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Escape"
      }), ", or even ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tab"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Shift+Tab"
      }), " to navigate through it.\nAs a developer, you can also adjust the way focus moves after pressing an item."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Note:"
      }), " If you work with MacOS' VoiceOver, use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "option"
      }), " key with arrows to navigate, otherwise you wouldn't be able to jump between menu items."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<LeftNav />"
      }), " was written in a way that it relies on incoming props, keeping only the state of open submenus and supporting accessibility.\nThat means you, as a developer, are responsible for setting the proper state of items."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Tracking the active item is done by setting an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "active"
      }), " flag on the active item.\nHowever, the component properly styles parent elements of the active subitem, and only the item that corresponds to the active page should have the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "active"
      }), " flag set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "true"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<LeftNav />"
      }), " requires ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "react-router"
      }), ". The edge links are rendered using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "react-router"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<Link />"
      }), " component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<LeftNav />"
      }), " calls two callback methods on different conditions:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "navigate(path: string)"
        }), " - Called directly when the user presses a parent element (button) to align with the behavior of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "react-router"
        }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Link />"
        }), " component."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "onItemClick(path: string, button: boolean)"
        }), " - Called when pressing parent elements (button) or edge links (link)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A basic example of using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<LeftNav />"
      }), " component:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _LeftNav_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.BasicLeftNav
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "nested-items-1",
      children: "Nested items"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "An example with nested items:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      of: _LeftNav_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.NestedItemsLeftNav
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Advance example with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "react-router"
      }), " and collapsing menu for mobile view:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n  Button,\n  ButtonProps,\n  ContentHeader,\n  Icon,\n  IconButton,\n  Icons,\n  MicrofrontendContainer,\n  LeftNav,\n  LeftNavProps\n} from \"@onewelcome/react-lib-components\";\n\nconst items: MenuItem[] = [\n  {\n    key: \"menu1\",\n    title: \"Menu Item 1\",\n    path: \"/configuration/menu1\",\n    iconComponent: <Icon icon={Icons.UploadOutline} />\n  },\n  {\n    key: \"menu2\",\n    title: \"Menu Item 2\",\n    path: \"/configuration/menu2\",\n    iconComponent: <Icon icon={Icons.Trash} />\n  },\n  {\n    key: \"menu3\",\n    title: \"Menu Item 3\",\n    path: \"/configuration/menu3\",\n    iconComponent: <Icon icon={Icons.FileAltIcon} />,\n    items: [\n      {\n        key: \"menu3.1\",\n        title: \"Sub Menu Item 3.1\",\n        path: \"/configuration/menu31\"\n      },\n      {\n        key: \"menu3.2\",\n        title: \"Sub Menu Item 3.2\",\n        path: \"/configuration/menu32\"\n      },\n      {\n        key: \"menu3.3\",\n        title: \"Sub Menu Item 3.3\",\n        path: \"/configuration/menu33\"\n      },\n      {\n        key: \"menu3.4\",\n        title: \"Sub Menu Item 3.4\",\n        path: \"/configuration/menu34\"\n      }\n    ]\n  },\n  {\n    key: \"menu4\",\n    title: \"Menu Item 4\",\n    path: \"/configuration/menu4\",\n    iconComponent: <Icon icon={Icons.SaveOutline} />\n  },\n  {\n    key: \"menu5\",\n    title: \"Menu Item 5\",\n    path: \"/configuration/menu5\",\n    iconComponent: <Icon icon={Icons.Warning} />\n  }\n];\n\nconst extractRoutes = (menuItems: MenuItem[]): MenuItem[] => {\n  const routes: MenuItem[] = [];\n  menuItems.forEach(item => {\n    if (item.path) {\n      routes.push(item);\n    }\n    if (item.items) {\n      routes.push(...extractRoutes(item.items));\n    }\n  });\n  return routes;\n};\n\nconst generateRedirects = (menuItems: MenuItem[]): ReactNode[] => {\n  const redirects: ReactNode[] = [];\n  menuItems.forEach(item => {\n    if (item.items && item.items.length > 0) {\n      redirects.push(\n        <Route\n          key={`${item.key}-redirect`}\n          path={item.path}\n          element={<Navigate to={item.items[0].path!} />}\n        />\n      );\n      redirects.push(...generateRedirects(item.items));\n    }\n  });\n  return redirects;\n};\n\nconst setActiveItem = (menuItems: MenuItem[], path: string) => {\n  menuItems.forEach(item => {\n    item.active = item.path === path;\n    if (item.items && item.items.length > 0) {\n      setActiveItem(item.items, path);\n    }\n  });\n};\n\nconst routes = extractRoutes(items);\nconst redirects = generateRedirects(items);\n\nconst App = () => {\n  return (\n    <MemoryRouter>\n      <IndexPage />\n    </MemoryRouter>\n  );\n};\n\nconst IndexPage = () => {\n  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);\n  const [localItems, setLocalItems] = useState(items);\n  const navigate = useNavigate();\n  const location = useLocation();\n\n  const handleSideMenuClose = () => {\n    setIsSideMenuOpen(false);\n  };\n\n  useEffect(() => {\n    const newItems = [...localItems];\n    setActiveItem(newItems, location.pathname);\n    setLocalItems(newItems);\n  }, [location]);\n\n  return (\n    <Fragment>\n      <div className={classes[\"top-nav\"]}>\n        <IconButton\n          className={classes[\"menu-icon\"]}\n          aria-controls=\"sidemenu\"\n          data-testid=\"sidemenu-btn\"\n          aria-expanded={isSideMenuOpen}\n          title={isSideMenuOpen ? \"Hide menu\" : \"Show menu\"}\n          color=\"default\"\n          onClick={() => setIsSideMenuOpen(state => !state)}\n        >\n          {isSideMenuOpen ? <Icon icon={Icons.Times} /> : <Icon icon={Icons.Hamburger} />}\n        </IconButton>\n        LOGO\n      </div>\n      <div>\n        <LeftNav\n          items={localItems}\n          isSideMenuOpen={isSideMenuOpen}\n          navigate={navigate}\n          onItemClick={handleSideMenuClose}\n        />\n        <div className={classes[\"content\"]}>\n          <MicrofrontendContainer\n            header={\n              <ContentHeader\n                title=\"Example title\"\n                subtitle=\"This is a subtitle, you can put a short message here\"\n              >\n                If you need more place to write some explanation to your user, this is the place you\n                can do it. Have fun!\n              </ContentHeader>\n            }\n            {...args}\n          >\n            <div className={classes[\"inner\"]}>\n              <Routes>\n                {redirects}\n                {routes.map(route => (\n                  <Route\n                    key={route.key}\n                    path={route.path}\n                    element={<span>{route.title} Content</span>}\n                  />\n                ))}\n                <Route path=\"*\" element={<Navigate to={routes[0]?.path || \"/\"} />} />\n              </Routes>\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n              Some content\n              <br />\n            </div>\n          </MicrofrontendContainer>\n        </div>\n      </div>\n    </Fragment>\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Canvas */ .Hl, {
      layout: "fullscreen",
      of: _LeftNav_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.AdvancedLeftNav,
      sourceState: "none",
      className: "storybook-extended-preview-static-left-nav"
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

/***/ "./stories/admin/LeftNav/LeftNav.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedLeftNav: () => (/* binding */ AdvancedLeftNav),
/* harmony export */   BasicLeftNav: () => (/* binding */ BasicLeftNav),
/* harmony export */   NestedItemsLeftNav: () => (/* binding */ NestedItemsLeftNav),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/admin/layout/LeftNav/LeftNav.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Button/Button.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Icon/Icon.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Button/IconButton.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Layout/ContentHeader/ContentHeader.tsx");
/* harmony import */ var _LeftNav_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/admin/LeftNav/LeftNav.mdx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* harmony import */ var _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./stories/admin/LeftNav/LeftNav.module.scss");
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
 * Copyright 2024 OneWelcome B.V.
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
  title: "admin/Layout/LeftNav",
  component: _src__WEBPACK_IMPORTED_MODULE_2__/* .LeftNav */ .$,
  parameters: {
    docs: {
      page: _LeftNav_mdx__WEBPACK_IMPORTED_MODULE_3__["default"]
    }
  }
};
const formButtonList = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
  key: "1",
  onClick: () => alert("Cancel button clicked."),
  variant: "text"
}, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
  key: "2",
  disabled: true,
  startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.SaveOutline
  })
}, "Save Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$, {
  key: "3",
  onClick: () => alert("Submit button clicked."),
  startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.ReplyOutline
  })
}, "Submit")];
const items = [{
  key: "menu1",
  title: "Menu Item 1",
  path: "/configuration/menu1",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.UploadOutline
  })
}, {
  key: "menu2",
  title: "Menu Item 2",
  path: "/configuration/menu2",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Trash
  })
}, {
  key: "menu3",
  title: "Menu Item 3",
  path: "/configuration/menu3",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.FileAltIcon
  }),
  items: [{
    key: "menu3.1",
    title: "Sub Menu Item 3.1",
    path: "/configuration/menu31"
  }, {
    key: "menu3.2",
    title: "Sub Menu Item 3.2",
    path: "/configuration/menu32"
  }, {
    key: "menu3.3",
    title: "Sub Menu Item 3.3",
    path: "/configuration/menu33"
  }, {
    key: "menu3.4",
    title: "Sub Menu Item 3.4",
    path: "/configuration/menu34"
  }]
}, {
  key: "menu4",
  title: "Menu Item 4",
  path: "/configuration/menu4",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.SaveOutline
  })
}, {
  key: "menu5",
  title: "Menu Item 5",
  path: "/configuration/menu5",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Warning
  })
}];
const extractRoutes = menuItems => {
  const routes = [];
  menuItems.forEach(item => {
    if (item.path) {
      routes.push(item);
    }
    if (item.items) {
      routes.push(...extractRoutes(item.items));
    }
  });
  return routes;
};
const generateRedirects = menuItems => {
  const redirects = [];
  menuItems.forEach(item => {
    if (item.items && item.items.length > 0) {
      redirects.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Route */ .qh, {
        key: `${item.key}-redirect`,
        path: item.path,
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Navigate */ .C5, {
          to: item.items[0].path
        })
      }));
      redirects.push(...generateRedirects(item.items));
    }
  });
  return redirects;
};
const setActiveItem = (menuItems, path) => {
  menuItems.forEach(item => {
    item.active = item.path === path;
    if (item.items && item.items.length > 0) {
      setActiveItem(item.items, path);
    }
  });
};
const routes = extractRoutes(items);
const redirects = generateRedirects(items);
const ExtendedTemplateWithRouterWrapper = args => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .MemoryRouter */ .fS, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExtendedVersionTemplate, args));
};
const ExtendedVersionTemplate = args => {
  const [isSideMenuOpen, setIsSideMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [localItems, setLocalItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items);
  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .Zp)();
  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_6__/* .useLocation */ .zy)();
  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const newItems = [...localItems];
    setActiveItem(newItems, location.pathname);
    setLocalItems(newItems);
  }, [location]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["top-nav"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
    className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["menu-icon"],
    "aria-controls": "sidemenu",
    "data-testid": "sidemenu-btn",
    "aria-expanded": isSideMenuOpen,
    title: isSideMenuOpen ? "Hide menu" : "Show menu",
    color: "default",
    onClick: () => setIsSideMenuOpen(state => !state)
  }, isSideMenuOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Times
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Hamburger
  })), "LOGO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__/* .LeftNav */ .$, {
    items: localItems,
    isSideMenuOpen: isSideMenuOpen,
    navigate: navigate,
    onItemClick: handleSideMenuClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["content"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .MicrofrontendContainer */ .c, _extends({
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContentHeader */ .d, {
      buttons: formButtonList,
      title: "Example title",
      subtitle: "This is a subtitle, you can put a short message here"
    }, "If you need more place to write some explanation to your user, this is the place you can do it. Have fun!")
  }, args), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["inner"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Routes */ .BV, null, redirects, routes.map(route => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Route */ .qh, {
    key: route.key,
    path: route.path,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, route.title, " Content")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Route */ .qh, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .Navigate */ .C5, {
      to: routes[0]?.path || "/"
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Some content", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))))));
};
const AdvancedLeftNav = ExtendedTemplateWithRouterWrapper.bind({});
AdvancedLeftNav.storyName = "Advanced LeftNav";
const Template = args => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__/* .MemoryRouter */ .fS, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__/* .LeftNav */ .$, _extends({
    className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["storybook-preview-static-left-nav"]
  }, args)));
};
const BasicLeftNav = Template.bind({});
BasicLeftNav.args = {
  items: [{
    key: "home",
    title: "Home",
    path: "/",
    iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.MinusCircle
    })
  }, {
    key: "about",
    title: "About",
    path: "/about",
    iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.InfoBell
    })
  }, {
    key: "setting",
    title: "Settings",
    path: "/settings",
    iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.SaveOutline
    })
  }]
};
BasicLeftNav.storyName = "Basic LeftNav";
const NestedItemsLeftNav = Template.bind({});
NestedItemsLeftNav.args = {
  items: [{
    key: "home",
    title: "Home",
    path: "/",
    iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.MinusCircle
    })
  }, {
    key: "about",
    title: "About",
    path: "/about",
    iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.InfoBell
    })
  }, {
    key: "setting",
    title: "Settings",
    path: "/settings",
    iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.SaveOutline
    }),
    items: [{
      key: "profile",
      title: "Profile",
      path: "/settings/profile"
    }, {
      key: "security",
      title: "Security",
      path: "/settings/security"
    }]
  }]
};
NestedItemsLeftNav.storyName = "Nested LeftNav items";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
AdvancedLeftNav.parameters = {
  ...AdvancedLeftNav.parameters,
  docs: {
    ...AdvancedLeftNav.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <MemoryRouter>\n      <ExtendedVersionTemplate {...args} />\n    </MemoryRouter>;\n}",
      ...AdvancedLeftNav.parameters?.docs?.source
    }
  }
};
BasicLeftNav.parameters = {
  ...BasicLeftNav.parameters,
  docs: {
    ...BasicLeftNav.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <MemoryRouter>\n      <LeftNav className={classes[\"storybook-preview-static-left-nav\"]} {...args} />\n    </MemoryRouter>;\n}",
      ...BasicLeftNav.parameters?.docs?.source
    }
  }
};
NestedItemsLeftNav.parameters = {
  ...NestedItemsLeftNav.parameters,
  docs: {
    ...NestedItemsLeftNav.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <MemoryRouter>\n      <LeftNav className={classes[\"storybook-preview-static-left-nav\"]} {...args} />\n    </MemoryRouter>;\n}",
      ...NestedItemsLeftNav.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["AdvancedLeftNav","BasicLeftNav","NestedItemsLeftNav"];

/***/ }),

/***/ "./src/components/Layout/ContentHeader/ContentHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ ContentHeader)
});

// UNUSED EXPORTS: ContentHeaderComponent

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss
var ContentHeader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss");
;// CONCATENATED MODULE: ./src/components/Layout/ContentHeader/ContentHeader.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContentHeader_module/* default */.A, options);




       /* harmony default export */ const ContentHeader_ContentHeader_module = (ContentHeader_module/* default */.A && ContentHeader_module/* default */.A.locals ? ContentHeader_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/Tag/Tag.tsx + 1 modules
var Tag = __webpack_require__("./src/components/Tag/Tag.tsx");
// EXTERNAL MODULE: ./src/components/TextEllipsis/TextEllipsis.tsx + 1 modules
var TextEllipsis = __webpack_require__("./src/components/TextEllipsis/TextEllipsis.tsx");
;// CONCATENATED MODULE: ./src/components/Layout/ContentHeader/ContentHeader.tsx
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








const ContentHeaderComponent = _ref => {
  let {
    title,
    children,
    buttons,
    collapsed,
    subtitle,
    navigation,
    tags,
    error,
    errorMessage,
    errorTagText,
    ...rest
  } = _ref;
  const errorTag = /*#__PURE__*/react.createElement(Tag/* Tag */.v, {
    icon: Icon/* Icons */.F.Forbidden,
    backgroundColor: "var(--color-red50)",
    color: "var(--color-red900)"
  }, errorTagText || "Blocked");
  const getTags = () => tags ?? [];
  const renderTags = (0,react.useMemo)(() => {
    if (error && collapsed) {
      return [errorTag, ...getTags().filter(tag => tag.props.variant !== "enabled")];
    } else if (error) {
      return getTags().filter(tag => tag.props.variant !== "enabled");
    }
    return getTags();
  }, [tags, error, collapsed]);
  return /*#__PURE__*/react.createElement("div", {
    className: ContentHeader_ContentHeader_module["header-background-color"]
  }, /*#__PURE__*/react.createElement("div", _extends({
    className: `${ContentHeader_ContentHeader_module["header"]} ${rest.className} ${collapsed ? ContentHeader_ContentHeader_module["collapsed-header"] : ""}`
  }, rest), /*#__PURE__*/react.createElement("div", null, navigation && !collapsed && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    onClick: () => {
      navigation.navigateFN(-1);
    },
    className: ContentHeader_ContentHeader_module["back-arrow"],
    iconSize: "s"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ArrowLeft
  }), /*#__PURE__*/react.createElement("span", {
    className: ContentHeader_ContentHeader_module["back-text"]
  }, navigation.displayText ? navigation.displayText : "Back")), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: ContentHeader_ContentHeader_module["header-text"],
    variant: "h1"
  }, navigation && collapsed && /*#__PURE__*/react.createElement(IconButton/* IconButton */.K, {
    onClick: () => {
      navigation.navigateFN(-1);
    },
    className: ContentHeader_ContentHeader_module["back-arrow"]
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.ArrowLeft
  })), /*#__PURE__*/react.createElement(TextEllipsis/* TextEllipsis */.T, {
    "data-testid": "content-header-title"
  }, title), /*#__PURE__*/react.createElement("span", {
    className: ContentHeader_ContentHeader_module["header-tags"]
  }, renderTags.map((tag, index) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: tag.key || index
  }, tag)))), subtitle && !error && /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: `${ContentHeader_ContentHeader_module["header-subtitle"]} ${collapsed ? ContentHeader_ContentHeader_module["hide-text"] : ""}`,
    variant: "h4"
  }, subtitle), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    className: `${collapsed ? ContentHeader_ContentHeader_module["hide-text"] : ""}`,
    variant: "body",
    spacing: {
      margin: 0
    }
  }, error ? /*#__PURE__*/react.createElement(react.Fragment, null, errorTag, /*#__PURE__*/react.createElement("span", {
    className: ContentHeader_ContentHeader_module["error-text"]
  }, errorMessage)) : children)), buttons && /*#__PURE__*/react.createElement("div", {
    className: ContentHeader_ContentHeader_module["buttons-wrapper"]
  }, buttons)));
};
const ContentHeader = ContentHeaderComponent;
try {
    // @ts-ignore
    ContentHeaderComponent.displayName = "ContentHeaderComponent";
    // @ts-ignore
    ContentHeaderComponent.__docgenInfo = { "description": "", "displayName": "ContentHeaderComponent", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "subtitle": { "defaultValue": null, "description": "@deprecated pass text as children", "name": "subtitle", "required": false, "type": { "name": "string" } }, "buttons": { "defaultValue": null, "description": "", "name": "buttons", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLButtonElement>>> | ReactElement<...>[]" } }, "collapsed": { "defaultValue": null, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } }, "navigation": { "defaultValue": null, "description": "", "name": "navigation", "required": false, "type": { "name": "ContentHeaderNavigationProps" } }, "tags": { "defaultValue": null, "description": "", "name": "tags", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>>[]" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "errorTagText": { "defaultValue": null, "description": "", "name": "errorTagText", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeaderComponent"] = { docgenInfo: ContentHeaderComponent.__docgenInfo, name: "ContentHeaderComponent", path: "src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeaderComponent" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    ContentHeader.displayName = "ContentHeader";
    // @ts-ignore
    ContentHeader.__docgenInfo = { "description": "", "displayName": "ContentHeader", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "subtitle": { "defaultValue": null, "description": "@deprecated pass text as children", "name": "subtitle", "required": false, "type": { "name": "string" } }, "buttons": { "defaultValue": null, "description": "", "name": "buttons", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Omit<Props, \"ref\"> & RefAttributes<HTMLButtonElement>>> | ReactElement<...>[]" } }, "collapsed": { "defaultValue": null, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } }, "navigation": { "defaultValue": null, "description": "", "name": "navigation", "required": false, "type": { "name": "ContentHeaderNavigationProps" } }, "tags": { "defaultValue": null, "description": "", "name": "tags", "required": false, "type": { "name": "ReactElement<Props, ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>>[]" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "errorTagText": { "defaultValue": null, "description": "", "name": "errorTagText", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeader"] = { docgenInfo: ContentHeader.__docgenInfo, name: "ContentHeader", path: "src/components/Layout/ContentHeader/ContentHeader.tsx#ContentHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Tag/RemoveButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ RemoveButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/RemoveButton.module.scss
var RemoveButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/RemoveButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Tag/RemoveButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(RemoveButton_module/* default */.A, options);




       /* harmony default export */ const Tag_RemoveButton_module = (RemoveButton_module/* default */.A && RemoveButton_module/* default */.A.locals ? RemoveButton_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Tag/RemoveButton.tsx
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





const RemoveButtonComponent = (_ref, ref) => {
  let {
    removeLabel = "Remove",
    label,
    onRemove,
    ...rest
  } = _ref;
  return onRemove && /*#__PURE__*/react.createElement("button", _extends({
    title: "",
    type: "button"
  }, rest, {
    ref: ref,
    className: `${Tag_RemoveButton_module["remove"]} ${rest.className ?? ""}`,
    onClick: onRemove
  }), /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    icon: Icon/* Icons */.F.Times,
    className: Tag_RemoveButton_module["icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: readyclasses_module/* default */.A["sr-only"]
  }, removeLabel, label ? " " + label : ""));
};
const RemoveButton = /*#__PURE__*/(0,react.forwardRef)(RemoveButtonComponent);
try {
    // @ts-ignore
    RemoveButton.displayName = "RemoveButton";
    // @ts-ignore
    RemoveButton.__docgenInfo = { "description": "", "displayName": "RemoveButton", "props": { "removeLabel": { "defaultValue": { value: "Remove" }, "description": "", "name": "removeLabel", "required": false, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "onRemove": { "defaultValue": null, "description": "", "name": "onRemove", "required": false, "type": { "name": "((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tag/RemoveButton.tsx#RemoveButton"] = { docgenInfo: RemoveButton.__docgenInfo, name: "RemoveButton", path: "src/components/Tag/RemoveButton.tsx#RemoveButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Tag/Tag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Tag)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/Tag.module.scss
var Tag_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/Tag.module.scss");
;// CONCATENATED MODULE: ./src/components/Tag/Tag.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Tag_module/* default */.A, options);




       /* harmony default export */ const Tag_Tag_module = (Tag_module/* default */.A && Tag_module/* default */.A.locals ? Tag_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/components/Tag/RemoveButton.tsx + 1 modules
var RemoveButton = __webpack_require__("./src/components/Tag/RemoveButton.tsx");
;// CONCATENATED MODULE: ./src/components/Tag/Tag.tsx
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






const TagComponent = (_ref, ref) => {
  let {
    children,
    variant,
    icon,
    backgroundColor,
    color,
    shape = "rounded",
    removeButton = {},
    ...rest
  } = _ref;
  const determineIcon = () => {
    if (icon) {
      return /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        size: "inherit",
        icon: icon
      });
    }
    if (variant === "enabled") {
      return /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        size: "inherit",
        icon: Icon/* Icons */.F.CheckmarkCircleAlt
      });
    } else if (variant === "disabled") {
      return /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
        size: "inherit",
        icon: Icon/* Icons */.F.Forbidden
      });
    }
  };
  const tagClasses = [Tag_Tag_module["tag"]];
  variant === "enabled" && tagClasses.push(Tag_Tag_module["tag-enabled"]);
  variant === "disabled" && tagClasses.push(Tag_Tag_module["tag-disabled"]);
  shape === "sharp" && tagClasses.push(Tag_Tag_module["sharp"]);
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: ref,
    className: `${tagClasses.join(" ")} ${rest.className ?? ""}`,
    style: {
      backgroundColor,
      color
    }
  }), determineIcon(), /*#__PURE__*/react.createElement(Typography/* Typography */.o, {
    spacing: {
      marginBottom: 0
    },
    variant: "body",
    className: Tag_Tag_module["label"]
  }, children), /*#__PURE__*/react.createElement(RemoveButton/* RemoveButton */.d, _extends({}, removeButton, {
    label: children
  })));
};
const Tag = /*#__PURE__*/(0,react.forwardRef)(TagComponent);
try {
    // @ts-ignore
    Tag.displayName = "Tag";
    // @ts-ignore
    Tag.__docgenInfo = { "description": "", "displayName": "Tag", "props": { "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"disabled\"" }, { "value": "\"enabled\"" }] } }, "icon": { "defaultValue": null, "description": "", "name": "icon", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bell\"" }, { "value": "\"bell-alt\"" }, { "value": "\"bookmark\"" }, { "value": "\"bookmark-alt\"" }, { "value": "\"build\"" }, { "value": "\"calendar\"" }, { "value": "\"change\"" }, { "value": "\"checkmark\"" }, { "value": "\"checkmark-circle\"" }, { "value": "\"checkmark-circle-alt\"" }, { "value": "\"checkmark-circle-breakout\"" }, { "value": "\"checkmark-square\"" }, { "value": "\"chevron-up\"" }, { "value": "\"chevron-down\"" }, { "value": "\"chevron-left\"" }, { "value": "\"chevron-right\"" }, { "value": "\"circle\"" }, { "value": "\"clock\"" }, { "value": "\"copy\"" }, { "value": "\"edit\"" }, { "value": "\"ellipsis\"" }, { "value": "\"ellipsis-alt\"" }, { "value": "\"equal\"" }, { "value": "\"error-circle\"" }, { "value": "\"error-circle-alt\"" }, { "value": "\"eye\"" }, { "value": "\"eye-blocked\"" }, { "value": "\"filter\"" }, { "value": "\"filter-alt\"" }, { "value": "\"filter-alt-arrow\"" }, { "value": "\"filter-alt-times\"" }, { "value": "\"forbidden\"" }, { "value": "\"fullscreen\"" }, { "value": "\"fullscreen-exit\"" }, { "value": "\"gearwheel\"" }, { "value": "\"grid\"" }, { "value": "\"hamburger\"" }, { "value": "\"home-filled\"" }, { "value": "\"heart\"" }, { "value": "\"image\"" }, { "value": "\"info-bell\"" }, { "value": "\"info-circle\"" }, { "value": "\"link\"" }, { "value": "\"minus-square\"" }, { "value": "\"navigation-first\"" }, { "value": "\"navigation-last\"" }, { "value": "\"plus\"" }, { "value": "\"radio\"" }, { "value": "\"refresh\"" }, { "value": "\"search\"" }, { "value": "\"share\"" }, { "value": "\"square\"" }, { "value": "\"star\"" }, { "value": "\"star-alt\"" }, { "value": "\"table-search\"" }, { "value": "\"times\"" }, { "value": "\"times-circle\"" }, { "value": "\"times-circle-alt\"" }, { "value": "\"times-thin\"" }, { "value": "\"trash\"" }, { "value": "\"triangle-down\"" }, { "value": "\"triangle-down-circle\"" }, { "value": "\"triangle-left\"" }, { "value": "\"triangle-right\"" }, { "value": "\"triangle-up\"" }, { "value": "\"undo\"" }, { "value": "\"warning\"" }, { "value": "\"warning-filled\"" }, { "value": "\"file-outline\"" }, { "value": "\"file-upload-outline\"" }, { "value": "\"file-download-outline\"" }, { "value": "\"upload-outline\"" }, { "value": "\"reply-outline\"" }, { "value": "\"save-outline\"" }, { "value": "\"download-file-outline\"" }, { "value": "\"retry\"" }, { "value": "\"cancel\"" }, { "value": "\"file-alt\"" }, { "value": "\"add-circle\"" }, { "value": "\"zoom-in\"" }, { "value": "\"zoom-out\"" }, { "value": "\"arrow-up\"" }, { "value": "\"arrow-left\"" }, { "value": "\"external-link\"" }, { "value": "\"sidesheet-handle\"" }, { "value": "\"pending-circle\"" }, { "value": "\"minus-circle\"" }] } }, "backgroundColor": { "defaultValue": null, "description": "", "name": "backgroundColor", "required": false, "type": { "name": "string" } }, "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "string" } }, "shape": { "defaultValue": { value: "rounded" }, "description": "", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"rounded\"" }, { "value": "\"sharp\"" }] } }, "removeButton": { "defaultValue": { value: "{}" }, "description": "", "name": "removeButton", "required": false, "type": { "name": "Props" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"] = { docgenInfo: Tag.__docgenInfo, name: "Tag", path: "src/components/Tag/Tag.tsx#Tag" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/TextEllipsis/TextEllipsis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ TextEllipsis)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Popover/Popover.tsx + 1 modules
var Popover = __webpack_require__("./src/components/Popover/Popover.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEllipsis/TextEllipsis.module.scss
var TextEllipsis_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEllipsis/TextEllipsis.module.scss");
;// CONCATENATED MODULE: ./src/components/TextEllipsis/TextEllipsis.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TextEllipsis_module/* default */.A, options);




       /* harmony default export */ const TextEllipsis_TextEllipsis_module = (TextEllipsis_module/* default */.A && TextEllipsis_module/* default */.A.locals ? TextEllipsis_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/TextEllipsis/TextEllipsis.tsx
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




const TextEllipsisComponent = (_ref, ref) => {
  let {
    children,
    popoverClassName,
    className,
    ...rest
  } = _ref;
  const [showPopover, setShowPopover] = (0,react.useState)(false);
  const textContainer = (0,react.useRef)(null);
  const ellipsisVisible = () => {
    if (textContainer.current && textContainer.current.offsetWidth < textContainer.current.scrollWidth) {
      return true;
    }
    return false;
  };
  const onMouseEnter = () => {
    ellipsisVisible() && setShowPopover(true);
  };
  const onMouseLeave = () => {
    ellipsisVisible() && setShowPopover(false);
  };
  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: `${TextEllipsis_TextEllipsis_module["text-ellipsis"]} ${className ?? ""}`,
    ref: ref ?? textContainer
  }), children, /*#__PURE__*/react.createElement(Popover/* Popover */.A, {
    "aria-hidden": true,
    "data-hidden": !showPopover,
    show: showPopover,
    role: "tooltip",
    anchorEl: textContainer,
    className: `${TextEllipsis_TextEllipsis_module.popover} ${popoverClassName ?? ""}`
  }, children));
};
const TextEllipsis = /*#__PURE__*/react.forwardRef(TextEllipsisComponent);
try {
    // @ts-ignore
    TextEllipsis.displayName = "TextEllipsis";
    // @ts-ignore
    TextEllipsis.__docgenInfo = { "description": "", "displayName": "TextEllipsis", "props": { "popoverClassName": { "defaultValue": null, "description": "", "name": "popoverClassName", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/TextEllipsis/TextEllipsis.tsx#TextEllipsis"] = { docgenInfo: TextEllipsis.__docgenInfo, name: "TextEllipsis", path: "src/components/TextEllipsis/TextEllipsis.tsx#TextEllipsis" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Typography),
  v: () => (/* binding */ validVariants)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss
var Typography_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Typography_module/* default */.A, options);




       /* harmony default export */ const Typography_Typography_module = (Typography_module/* default */.A && Typography_module/* default */.A.locals ? Typography_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
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




const validVariants = ["h1", "h2", "h3", "h4", "body", "body-bold", "sub-text", "code"];

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */

const TypographyComponent = (_ref, ref) => {
  let {
    children,
    variant,
    tag,
    style,
    spacing,
    align,
    className = "",
    ...rest
  } = _ref;
  if (!validVariants.includes(variant)) {
    throw new Error(`You entered an invalid variant. You can choose from: ${validVariants}, you entered: ${variant}`);
  }
  const styleWithSpacing = (0,useSpacing/* useSpacing */.T)(spacing, style);
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
  const TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: {
      ...styleWithSpacing,
      textAlign: align
    },
    className: `${Typography_Typography_module["typography_style_" + variant]} ${className}`
  }), children);
};
const Typography = /*#__PURE__*/react.forwardRef(TypographyComponent);
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

/***/ "./src/components/admin/layout/LeftNav/LeftNav.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ LeftNav)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/LeftNav/LeftNav.module.scss
var LeftNav_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/LeftNav/LeftNav.module.scss");
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNav.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(LeftNav_module/* default */.A, options);




       /* harmony default export */ const LeftNav_LeftNav_module = (LeftNav_module/* default */.A && LeftNav_module/* default */.A.locals ? LeftNav_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.module.scss
var LeftNavItem_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.module.scss");
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.module.scss

      
      
      
      
      
      
      
      
      

var LeftNavItem_module_options = {};

LeftNavItem_module_options.styleTagTransform = (styleTagTransform_default());
LeftNavItem_module_options.setAttributes = (setAttributesWithoutAttributes_default());
LeftNavItem_module_options.insert = insertBySelector_default().bind(null, "head");
LeftNavItem_module_options.domAPI = (styleDomAPI_default());
LeftNavItem_module_options.insertStyleElement = (insertStyleElement_default());

var LeftNavItem_module_update = injectStylesIntoStyleTag_default()(LeftNavItem_module/* default */.A, LeftNavItem_module_options);




       /* harmony default export */ const LeftNavItem_LeftNavItem_module = (LeftNavItem_module/* default */.A && LeftNavItem_module/* default */.A.locals ? LeftNavItem_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNavItem/useKeyboardNavigation.ts
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

const useKeyboardNavigation = _ref => {
  let {
    refItems,
    item,
    closeParentList
  } = _ref;
  const onKeyPressNavigation = e => {
    if (e.code === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeParentList?.();
      refItems.getParentElement(item.key)?.focus();
    }
    if (e.code === "ArrowUp") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getPrevElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "ArrowDown") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getNextElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "Home") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getFirstElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "End") {
      e.preventDefault();
      e.stopPropagation();
      refItems.getLastElementOnSameLevel(item.key)?.focus();
    }
    if (e.code === "Space" || e.code === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      refItems.getNextElement(item.key, true)?.focus();
      e.currentTarget.click();
    }
  };
  return {
    onKeyPressNavigation
  };
};
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNavItem/ButtonLeftNavItem.tsx
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






const chevronIconDataKey = {
  attributeKey: "chevron-icon",
  objectKey: "chevronIcon"
};
const ButtonLeftNavItemComponent = (_ref, ref) => {
  let {
    item,
    navigate,
    onItemClick,
    refItems,
    NestedComponent,
    closeParentList
  } = _ref;
  const [expanded, setExpanded] = (0,react.useState)(false);
  const isActiveParent = !!item.items?.find(menuItem => menuItem.active);
  const {
    onKeyPressNavigation
  } = useKeyboardNavigation({
    refItems,
    item,
    closeParentList
  });
  const onButtonClickHandler = event => {
    const isChevronIcon = !!event.target.dataset[chevronIconDataKey.objectKey];
    if (!isChevronIcon && item.path && !item.disabled) {
      event.preventDefault();
      navigate(item.path);
      onItemClick(item.path, true);
    }
  };
  const onExpandIconClickHandler = () => {
    setExpanded(expanded => !expanded);
  };
  const openParentWithActiveElement = () => {
    if (isActiveParent) {
      setExpanded(true);
    }
  };
  (0,react.useEffect)(openParentWithActiveElement, [isActiveParent]);
  const getStylingClasses = () => {
    const buttonClasses = [LeftNavItem_LeftNavItem_module["menu-item"], LeftNavItem_LeftNavItem_module["menu-button"]];
    expanded && buttonClasses.push(LeftNavItem_LeftNavItem_module["expanded"]);
    (item.active || isActiveParent) && buttonClasses.push(LeftNavItem_LeftNavItem_module["menu-item-active"]);
    item.disabled && buttonClasses.push(LeftNavItem_LeftNavItem_module["disabled"]);
    const buttonWrapperClasses = [LeftNavItem_LeftNavItem_module["menu-button-wrapper"], LeftNavItem_LeftNavItem_module["menu-list-item"]];
    expanded && buttonWrapperClasses.push(LeftNavItem_LeftNavItem_module["expanded"]);
    item.active && buttonWrapperClasses.push(LeftNavItem_LeftNavItem_module["menu-item-active"]);
    return {
      buttonClasses,
      buttonWrapperClasses
    };
  };
  const {
    buttonClasses,
    buttonWrapperClasses
  } = getStylingClasses();
  const tabIndexActive = item.active ? 0 : -1;
  const tabIndex = item.disabled ? -1 : tabIndexActive;
  return /*#__PURE__*/react.createElement("li", {
    className: buttonWrapperClasses.join(" "),
    "data-testid": item.key
  }, /*#__PURE__*/react.createElement("button", {
    "aria-controls": item.key,
    "data-testid": `tab-btn-${item.key}`,
    "aria-expanded": expanded,
    ref: ref,
    onKeyDown: onKeyPressNavigation,
    onClick: onButtonClickHandler,
    className: buttonClasses.join(" "),
    disabled: item.disabled,
    tabIndex: tabIndex
  }, /*#__PURE__*/react.createElement("div", {
    className: LeftNavItem_LeftNavItem_module["menu-item-text-wrapper"]
  }, item.iconComponent && /*#__PURE__*/react.cloneElement(item.iconComponent, {
    className: LeftNavItem_LeftNavItem_module["menu-item-icon"]
  }), item.path ? /*#__PURE__*/react.createElement(dist/* Link */.N_, {
    to: item.path,
    "aria-current": item.active ? "page" : false,
    className: LeftNavItem_LeftNavItem_module["menu-item-text"],
    tabIndex: -1
  }, item.title) : /*#__PURE__*/react.createElement("span", {
    className: LeftNavItem_LeftNavItem_module["menu-item-text"]
  }, item.title)), /*#__PURE__*/react.createElement(Icon/* Icon */.I, {
    onClick: onExpandIconClickHandler,
    className: LeftNavItem_LeftNavItem_module["menu-item-expand-icon"],
    icon: Icon/* Icons */.F.ChevronDown,
    [`data-${chevronIconDataKey.attributeKey}`]: "true"
  })), /*#__PURE__*/react.createElement("ul", {
    id: item.key,
    style: {
      maxHeight: expanded ? undefined : 0
    },
    className: LeftNavItem_LeftNavItem_module["menu-list"]
  }, !item.disabled && item.items?.map(item => /*#__PURE__*/react.createElement(NestedComponent, {
    ref: el => refItems.addElementReference(el, item.key),
    key: item.key,
    closeParentList: () => setExpanded(false),
    onKeyUp: onKeyPressNavigation,
    item: item,
    navigate: navigate,
    onItemClick: onItemClick,
    refItems: refItems
  }, item.title))));
};
const ButtonLeftNavItem = /*#__PURE__*/react.forwardRef(ButtonLeftNavItemComponent);
try {
    // @ts-ignore
    ButtonLeftNavItem.displayName = "ButtonLeftNavItem";
    // @ts-ignore
    ButtonLeftNavItem.__docgenInfo = { "description": "", "displayName": "ButtonLeftNavItem", "props": { "navigate": { "defaultValue": null, "description": "", "name": "navigate", "required": true, "type": { "name": "(path: string) => void" } }, "onItemClick": { "defaultValue": null, "description": "", "name": "onItemClick", "required": true, "type": { "name": "(path?: string | undefined, button?: boolean | undefined) => void" } }, "item": { "defaultValue": null, "description": "", "name": "item", "required": true, "type": { "name": "MenuItem" } }, "refItems": { "defaultValue": null, "description": "", "name": "refItems", "required": true, "type": { "name": "{ addElementReference: (el: HTMLElement | null, key: string) => void; getNextElement: (currentKey: string, whenHavingChildren?: boolean) => HTMLElement | undefined; ... 5 more ...; getItemMap: () => Record<...>; }" } }, "closeParentList": { "defaultValue": null, "description": "", "name": "closeParentList", "required": false, "type": { "name": "(() => void)" } }, "NestedComponent": { "defaultValue": null, "description": "", "name": "NestedComponent", "required": true, "type": { "name": "ForwardRefExoticComponent<LeftNavItemProps>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/admin/layout/LeftNav/LeftNavItem/ButtonLeftNavItem.tsx#ButtonLeftNavItem"] = { docgenInfo: ButtonLeftNavItem.__docgenInfo, name: "ButtonLeftNavItem", path: "src/components/admin/layout/LeftNav/LeftNavItem/ButtonLeftNavItem.tsx#ButtonLeftNavItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./src/components/Link/Link.tsx + 1 modules
var Link = __webpack_require__("./src/components/Link/Link.tsx");
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNavItem/LinkLeftNavItem.tsx
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






const LinkLeftNavItemComponent = (_ref, ref) => {
  let {
    item,
    onItemClick,
    refItems,
    closeParentList
  } = _ref;
  const {
    onKeyPressNavigation
  } = useKeyboardNavigation({
    refItems,
    item,
    closeParentList
  });
  const onLinkClickHandler = event => {
    if (item.disabled) {
      event.preventDefault();
    } else {
      onItemClick(item.path);
    }
  };
  const getStylingClasses = () => {
    const menuItemLinkClasses = [LeftNavItem_LeftNavItem_module["menu-item"], LeftNavItem_LeftNavItem_module["menu-link"]];
    item.active && menuItemLinkClasses.push(LeftNavItem_LeftNavItem_module["menu-item-active"]);
    item.disabled && menuItemLinkClasses.push(LeftNavItem_LeftNavItem_module["disabled"]);
    const menuLinkWrapperClasses = [LeftNavItem_LeftNavItem_module["menu-list-item"]];
    return {
      menuItemLinkClasses,
      menuLinkWrapperClasses
    };
  };
  const {
    menuItemLinkClasses,
    menuLinkWrapperClasses
  } = getStylingClasses();
  const tabIndexActive = item.active ? 0 : -1;
  const tabIndex = item.disabled ? -1 : tabIndexActive;
  return /*#__PURE__*/react.createElement("li", {
    className: menuLinkWrapperClasses.join(" "),
    "data-testid": `${item.key}`
  }, item.path?.match(/^https?:\/\//) ? /*#__PURE__*/react.createElement(Link/* Link */.N, {
    ref: ref,
    onKeyDown: onKeyPressNavigation,
    onClick: onLinkClickHandler,
    "data-testid": item.key,
    "aria-current": item.active ? "page" : false,
    "aria-disabled": item.disabled,
    className: menuItemLinkClasses.join(" "),
    to: item.path ?? "",
    type: "external",
    disabled: item.disabled,
    tabIndex: tabIndex
  }, /*#__PURE__*/react.createElement("div", {
    className: LeftNavItem_LeftNavItem_module["menu-item-text-wrapper"]
  }, item.iconComponent && /*#__PURE__*/react.cloneElement(item.iconComponent, {
    className: LeftNavItem_LeftNavItem_module["menu-item-icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: LeftNavItem_LeftNavItem_module["menu-item-text"]
  }, item.title))) : /*#__PURE__*/react.createElement(dist/* Link */.N_, {
    ref: ref,
    onKeyDown: onKeyPressNavigation,
    onClick: onLinkClickHandler,
    "aria-current": item.active ? "page" : false,
    "aria-disabled": item.disabled,
    className: menuItemLinkClasses.join(" "),
    to: item.path ?? "",
    tabIndex: tabIndex
  }, /*#__PURE__*/react.createElement("div", {
    className: LeftNavItem_LeftNavItem_module["menu-item-text-wrapper"]
  }, item.iconComponent && /*#__PURE__*/react.cloneElement(item.iconComponent, {
    className: LeftNavItem_LeftNavItem_module["menu-item-icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: LeftNavItem_LeftNavItem_module["menu-item-text"]
  }, item.title))));
};
const LinkLeftNavItem = /*#__PURE__*/react.forwardRef(LinkLeftNavItemComponent);
try {
    // @ts-ignore
    LinkLeftNavItem.displayName = "LinkLeftNavItem";
    // @ts-ignore
    LinkLeftNavItem.__docgenInfo = { "description": "", "displayName": "LinkLeftNavItem", "props": { "onItemClick": { "defaultValue": null, "description": "", "name": "onItemClick", "required": true, "type": { "name": "(path?: string | undefined, button?: boolean | undefined) => void" } }, "item": { "defaultValue": null, "description": "", "name": "item", "required": true, "type": { "name": "MenuItem" } }, "refItems": { "defaultValue": null, "description": "", "name": "refItems", "required": true, "type": { "name": "{ addElementReference: (el: HTMLElement | null, key: string) => void; getNextElement: (currentKey: string, whenHavingChildren?: boolean) => HTMLElement | undefined; ... 5 more ...; getItemMap: () => Record<...>; }" } }, "closeParentList": { "defaultValue": null, "description": "", "name": "closeParentList", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/admin/layout/LeftNav/LeftNavItem/LinkLeftNavItem.tsx#LinkLeftNavItem"] = { docgenInfo: LinkLeftNavItem.__docgenInfo, name: "LinkLeftNavItem", path: "src/components/admin/layout/LeftNav/LeftNavItem/LinkLeftNavItem.tsx#LinkLeftNavItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.tsx
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




const LeftNavItemComponent = (props, ref) => {
  const shouldBeButton = !!(props.item.items?.length ?? 0 >= 1);
  return shouldBeButton ? /*#__PURE__*/react.createElement(ButtonLeftNavItem, _extends({}, props, {
    ref: ref,
    NestedComponent: LeftNavItem
  })) : /*#__PURE__*/react.createElement(LinkLeftNavItem, _extends({}, props, {
    ref: ref
  }));
};
const LeftNavItem = /*#__PURE__*/react.forwardRef(LeftNavItemComponent);
try {
    // @ts-ignore
    LeftNavItem.displayName = "LeftNavItem";
    // @ts-ignore
    LeftNavItem.__docgenInfo = { "description": "", "displayName": "LeftNavItem", "props": { "navigate": { "defaultValue": null, "description": "", "name": "navigate", "required": true, "type": { "name": "(path: string) => void" } }, "onItemClick": { "defaultValue": null, "description": "", "name": "onItemClick", "required": true, "type": { "name": "(path?: string | undefined, button?: boolean | undefined) => void" } }, "item": { "defaultValue": null, "description": "", "name": "item", "required": true, "type": { "name": "MenuItem" } }, "refItems": { "defaultValue": null, "description": "", "name": "refItems", "required": true, "type": { "name": "{ addElementReference: (el: HTMLElement | null, key: string) => void; getNextElement: (currentKey: string, whenHavingChildren?: boolean) => HTMLElement | undefined; ... 5 more ...; getItemMap: () => Record<...>; }" } }, "closeParentList": { "defaultValue": null, "description": "", "name": "closeParentList", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.tsx#LeftNavItem"] = { docgenInfo: LeftNavItem.__docgenInfo, name: "LeftNavItem", path: "src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.tsx#LeftNavItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/useRefItems.ts
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


const useRefItems = _ref => {
  let {
    items
  } = _ref;
  const navRefs = (0,react.useRef)({});
  const itemsMap = (0,react.useRef)({});
  (0,react.useEffect)(() => {
    createLinkedMap(items);
  }, [items]);

  /**
   * Creates linked list of provided menu items.
   * Disabled items are filtered out.
   */
  const createLinkedMap = menuItems => {
    const map = {};
    createRecursiveLinkedMap(map, 0, menuItems);
    itemsMap.current = map;
  };
  const createRecursiveLinkedMap = (itemsMap, level, items, prevItem, nextItem) => {
    let currentPreviousItem = prevItem,
      currentNextItem = nextItem;
    const nonDisabledItems = items?.filter(item => !item.disabled);
    nonDisabledItems?.forEach((currentItem, index) => {
      const isLast = index === nonDisabledItems.length - 1;
      if (!isLast) {
        currentNextItem = nonDisabledItems[index + 1];
      } else {
        currentNextItem = nextItem;
      }
      const hasChildren = currentItem.items?.filter(item => !item.disabled) !== undefined;
      if (hasChildren) {
        itemsMap[currentItem.key] = {
          item: currentItem,
          level,
          prev: currentPreviousItem,
          next: currentItem?.items?.filter(item => !item.disabled)[0]
        };
        currentPreviousItem = currentItem;
        const {
          lastItem
        } = createRecursiveLinkedMap(itemsMap, level + 1, currentItem?.items, currentPreviousItem, currentNextItem);
        currentPreviousItem = lastItem;
      } else {
        itemsMap[currentItem.key] = {
          item: currentItem,
          level,
          prev: currentPreviousItem,
          next: currentNextItem
        };
        currentPreviousItem = currentItem;
      }
    });
    return {
      lastItem: currentPreviousItem
    };
  };
  const addElementReference = (el, key) => {
    if (el) {
      navRefs.current[key] = el;
    } else {
      delete navRefs.current[key];
    }
  };

  /**
   * Get next element that is rendered. It could be nested element
   * @param currentKey key of item
   * @returns element or undefined if element does not exists or current element is the last element on that level
   */
  const getNextElement = function (currentKey) {
    let whenHavingChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const currentItem = itemsMap.current?.[currentKey];
    if (whenHavingChildren && !currentItem.item.items) {
      return;
    }
    const nextKey = currentItem.next?.key;
    return nextKey ? navRefs.current?.[nextKey] : undefined;
  };

  /**
   * Get next element on the same level as currentKey param
   * @param currentKey key of item
   * @returns element or undefined if element does not exists or current element is the last element on that level
   */
  const getNextElementOnSameLevel = currentKey => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const nextItem = _traverseNextElements({
      currentItem,
      desiredLevel: currentLevel,
      currentLevel
    });
    return nextItem?.item.key ? navRefs.current?.[nextItem?.item.key] : undefined;
  };

  /**
   * Get previous element on the same level as currentKey param
   * @param currentKey key of item
   * @returns element or undefined if element does not exists or current element is the first element on that level
   */
  const getPrevElementOnSameLevel = currentKey => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const prevItem = _traversePrevElements({
      currentItem,
      desiredLevel: currentLevel
    });
    return prevItem?.item.key ? navRefs.current?.[prevItem?.item.key] : undefined;
  };

  /**
   * Get first element on the same level as currentKey param
   * @param currentKey key of item
   * @returns element or undefined if element does not exists or current element is the first element on that level
   */
  const getFirstElementOnSameLevel = currentKey => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const prevItem = _traversePrevElements({
      currentItem,
      desiredLevel: currentLevel
    });
    const prevItemKey = prevItem?.item.key;
    if (prevItemKey) {
      const hasNextPrevElement = !!_traversePrevElements({
        currentItem: itemsMap.current?.[prevItemKey],
        desiredLevel: currentLevel
      });
      if (hasNextPrevElement) {
        return getFirstElementOnSameLevel(prevItemKey);
      }
      return navRefs.current?.[prevItemKey];
    }
  };

  /**
   * Get last element on the same level as currentKey param
   * @param currentKey key of item
   * @returns element or undefined if element does not exists or current element is the last element on that level
   */
  const getLastElementOnSameLevel = currentKey => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const nextItem = _traverseNextElements({
      currentItem,
      desiredLevel: currentLevel,
      currentLevel
    });
    const nextItemKey = nextItem?.item.key;
    if (nextItemKey) {
      const hasNextNextElement = !!_traverseNextElements({
        currentItem: itemsMap.current?.[nextItemKey],
        desiredLevel: currentLevel,
        currentLevel
      });
      if (hasNextNextElement) {
        return getLastElementOnSameLevel(nextItemKey);
      }
      return navRefs.current?.[nextItemKey];
    }
  };
  const getParentElement = currentKey => {
    const currentItem = itemsMap.current?.[currentKey];
    const currentLevel = currentItem.level;
    const parentLevel = currentLevel - 1;
    const parentItem = _traversePrevElements({
      currentItem,
      desiredLevel: parentLevel,
      checkForMenuEscape: false
    });
    return parentItem?.item.key ? navRefs.current?.[parentItem?.item.key] : undefined;
  };
  const _traverseNextElements = _ref2 => {
    let {
      currentItem,
      desiredLevel,
      currentLevel
    } = _ref2;
    const nextKey = currentItem.next?.key;
    if (!nextKey) {
      return;
    }
    const escapedSubMenu = desiredLevel > currentLevel;
    if (escapedSubMenu) {
      return;
    }
    const next = itemsMap.current?.[nextKey];
    if (next && next.level === desiredLevel) {
      return next;
    } else {
      return _traverseNextElements({
        currentItem: next,
        desiredLevel,
        currentLevel: next.level
      });
    }
  };
  const _traversePrevElements = _ref3 => {
    let {
      currentItem,
      desiredLevel,
      checkForMenuEscape = true
    } = _ref3;
    const prevKey = currentItem.prev?.key;
    if (!prevKey) {
      return;
    }
    const prev = itemsMap.current?.[prevKey];
    const prevLevel = prev.level;
    const escapedSubMenu = desiredLevel > prevLevel;
    if (checkForMenuEscape && escapedSubMenu) {
      return;
    }
    if (prev && prev.level === desiredLevel) {
      return prev;
    } else {
      return _traversePrevElements({
        currentItem: prev,
        desiredLevel
      });
    }
  };
  return {
    addElementReference,
    getNextElement,
    getNextElementOnSameLevel,
    getPrevElementOnSameLevel,
    getFirstElementOnSameLevel,
    getLastElementOnSameLevel,
    getParentElement,
    getItemMap: () => itemsMap.current
  };
};
;// CONCATENATED MODULE: ./src/components/admin/layout/LeftNav/LeftNav.tsx
function LeftNav_extends() {
  return LeftNav_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, LeftNav_extends.apply(null, arguments);
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





const LeftNavComponent = (_ref, ref) => {
  let {
    isSideMenuOpen,
    items,
    navigate,
    onItemClick,
    marginTop,
    ...rest
  } = _ref;
  const [isSideNavbarVisible, setIsSideNavbarVisible] = (0,react.useState)(isSideMenuOpen);
  const refItems = useRefItems({
    items
  });
  const onSideNavbarTransitionEnd = () => {
    setIsSideNavbarVisible(isSideMenuOpen);
  };
  const renderMenuItems = () => {
    if (!items.length) {
      return null;
    }
    return items.map(item => {
      return /*#__PURE__*/react.createElement(LeftNavItem, {
        ref: el => refItems.addElementReference(el, item.key),
        key: item.key,
        item: item,
        navigate: navigate,
        onItemClick: onItemClick,
        refItems: refItems
      });
    });
  };
  return /*#__PURE__*/react.createElement("nav", LeftNav_extends({}, rest, {
    ref: ref
  }), /*#__PURE__*/react.createElement("ul", {
    style: {
      "--margin-top": marginTop
    },
    className: `${LeftNav_LeftNav_module["sidenavbar"]} ${isSideMenuOpen ? LeftNav_LeftNav_module["open"] : ""} ${!isSideNavbarVisible ? LeftNav_LeftNav_module["hidden"] : ""}`,
    onTransitionEnd: onSideNavbarTransitionEnd
  }, renderMenuItems()));
};
const LeftNav = /*#__PURE__*/react.forwardRef(LeftNavComponent);
try {
    // @ts-ignore
    LeftNav.displayName = "LeftNav";
    // @ts-ignore
    LeftNav.__docgenInfo = { "description": "", "displayName": "LeftNav", "props": { "isSideMenuOpen": { "defaultValue": null, "description": "", "name": "isSideMenuOpen", "required": false, "type": { "name": "boolean" } }, "items": { "defaultValue": null, "description": "", "name": "items", "required": true, "type": { "name": "MenuItem[]" } }, "navigate": { "defaultValue": null, "description": "", "name": "navigate", "required": true, "type": { "name": "(path: string) => void" } }, "onItemClick": { "defaultValue": null, "description": "", "name": "onItemClick", "required": true, "type": { "name": "(path?: string | undefined, button?: boolean | undefined) => void" } }, "marginTop": { "defaultValue": null, "description": "", "name": "marginTop", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/admin/layout/LeftNav/LeftNav.tsx#LeftNav"] = { docgenInfo: LeftNav.__docgenInfo, name: "LeftNav", path: "src/components/admin/layout/LeftNav/LeftNav.tsx#LeftNav" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ MicrofrontendContainer)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss
var MicrofrontendContainer_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss");
;// CONCATENATED MODULE: ./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(MicrofrontendContainer_module/* default */.A, options);




       /* harmony default export */ const MicrofrontendContainer_MicrofrontendContainer_module = (MicrofrontendContainer_module/* default */.A && MicrofrontendContainer_module/* default */.A.locals ? MicrofrontendContainer_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx
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



const MicrofrontendContainer = _ref => {
  let {
    header,
    children,
    contentMargins = true,
    contentMaxWidth = true,
    ...rest
  } = _ref;
  const appliedClasses = [];
  contentMargins && appliedClasses.push(MicrofrontendContainer_MicrofrontendContainer_module["microfrontend-container-margin"]);
  contentMaxWidth && appliedClasses.push(MicrofrontendContainer_MicrofrontendContainer_module["microfrontend-container-max-width"]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, header), /*#__PURE__*/react.createElement("div", _extends({
    className: appliedClasses.join(" ")
  }, rest), children));
};
try {
    // @ts-ignore
    MicrofrontendContainer.displayName = "MicrofrontendContainer";
    // @ts-ignore
    MicrofrontendContainer.__docgenInfo = { "description": "", "displayName": "MicrofrontendContainer", "props": { "header": { "defaultValue": null, "description": "", "name": "header", "required": false, "type": { "name": "ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]" } }, "contentMargins": { "defaultValue": { value: "true" }, "description": "", "name": "contentMargins", "required": false, "type": { "name": "boolean" } }, "contentMaxWidth": { "defaultValue": { value: "true" }, "description": "", "name": "contentMaxWidth", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx#MicrofrontendContainer"] = { docgenInfo: MicrofrontendContainer.__docgenInfo, name: "MicrofrontendContainer", path: "src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.tsx#MicrofrontendContainer" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useSpacing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useSpacing)
/* harmony export */ });
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

const defaultFactor = 0.25;
const defaultUnit = "rem";
const spacingNumberRegex = /(\d+\.?\d*)+/g;
const useSpacing = (spacingProps, style) => {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce((prev, _ref) => {
      let [spacing, multiplier] = _ref;
      const matches = String(multiplier).matchAll(spacingNumberRegex);
      const cssSpacingValue = Array.from(matches).map(_ref2 => {
        let [multiplierValue] = _ref2;
        return `${Number(multiplierValue) * defaultFactor}${defaultUnit}`;
      }).join(" ");
      return {
        ...prev,
        [spacing]: cssSpacingValue
      };
    }, style ?? {});
  }
  return style;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/ContentHeader/ContentHeader.module.scss":
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
___CSS_LOADER_EXPORT___.push([module.id, `.ContentHeader-module__header--B9Tg6{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;padding:2rem;z-index:1;-webkit-transition:.5s;transition:.5s;max-width:105rem}.ContentHeader-module__header--B9Tg6.ContentHeader-module__collapsed-header--XE0m0{padding:1rem 2rem 1rem 2rem;-webkit-transition:.5s;transition:.5s;align-items:center}.ContentHeader-module__header-background-color--riBxL{background-color:var(--color-blue-grey25)}.ContentHeader-module__header--B9Tg6 button.ContentHeader-module__back-arrow--TkZAf{width:auto;height:1rem;display:block;gap:.5rem}.ContentHeader-module__hide-text--HLEeL{display:none}.ContentHeader-module__header-text--EcyxI{margin:0;font-weight:500;color:var(--color-blue-grey900);line-height:1.25;display:flex;align-items:center;max-width:65vw}@media screen and (max-width: 900px){.ContentHeader-module__header-text--EcyxI{max-width:unset}.ContentHeader-module__header-text--EcyxI div{text-wrap:wrap}}.ContentHeader-module__header-text--EcyxI div{vertical-align:middle;align-self:center}.ContentHeader-module__header-text--EcyxI button.ContentHeader-module__back-arrow--TkZAf{margin-right:.5rem;width:2.5rem;height:2.5rem}.ContentHeader-module__header-tags--cgSn0{display:flex;margin-left:1rem;gap:.5rem}.ContentHeader-module__header-subtitle--BORyD{color:var(--color-blue-grey400);font-weight:500}.ContentHeader-module__back-text--HvQDA{font-size:.875rem;font-weight:400;margin-left:.5rem}.ContentHeader-module__error-text--mwVSQ{color:var(--color-red500);vertical-align:middle;margin-left:.5rem}.ContentHeader-module__buttons-wrapper--rCTji{display:flex;justify-content:flex-end;flex-shrink:0;gap:1rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": `ContentHeader-module__header--B9Tg6`,
	"collapsed-header": `ContentHeader-module__collapsed-header--XE0m0`,
	"header-background-color": `ContentHeader-module__header-background-color--riBxL`,
	"back-arrow": `ContentHeader-module__back-arrow--TkZAf`,
	"hide-text": `ContentHeader-module__hide-text--HLEeL`,
	"header-text": `ContentHeader-module__header-text--EcyxI`,
	"header-tags": `ContentHeader-module__header-tags--cgSn0`,
	"header-subtitle": `ContentHeader-module__header-subtitle--BORyD`,
	"back-text": `ContentHeader-module__back-text--HvQDA`,
	"error-text": `ContentHeader-module__error-text--mwVSQ`,
	"buttons-wrapper": `ContentHeader-module__buttons-wrapper--rCTji`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/RemoveButton.module.scss":
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
 */.RemoveButton-module__sr-only--YAtrZ{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.RemoveButton-module__hidden--VDjK8{display:none}.RemoveButton-module__slide-in--BpcUt{animation:RemoveButton-module__slide-in--BpcUt .5s forwards}@media(prefers-reduced-motion: reduce){.RemoveButton-module__slide-in--BpcUt{animation-duration:.1ms}}.RemoveButton-module__slide-out--IUBdR{animation:RemoveButton-module__slide-out--IUBdR .5s forwards}@media(prefers-reduced-motion: reduce){.RemoveButton-module__slide-out--IUBdR{animation-duration:.1ms}}@keyframes RemoveButton-module__slide-in--BpcUt{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes RemoveButton-module__slide-out--IUBdR{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.RemoveButton-module__remove--Io5iY{width:1.25rem;height:1.25rem;background:none;border:none;padding:0;margin-right:-0.375rem;cursor:pointer}.RemoveButton-module__remove--Io5iY:hover{border-radius:.125rem;background-color:var(--color-black10)}.RemoveButton-module__remove--Io5iY:active{background-color:var(--color-blue-grey400)}.RemoveButton-module__remove--Io5iY:focus-visible{outline:calc(.125*var(--font-size)) solid var(--color-focus);outline-offset:0;border-radius:var(--focus-border-radius)}.RemoveButton-module__remove--Io5iY .RemoveButton-module__icon--jszWb{font-size:var(--font-size-small)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `RemoveButton-module__sr-only--YAtrZ`,
	"hidden": `RemoveButton-module__hidden--VDjK8`,
	"slide-in": `RemoveButton-module__slide-in--BpcUt`,
	"slide-out": `RemoveButton-module__slide-out--IUBdR`,
	"remove": `RemoveButton-module__remove--Io5iY`,
	"icon": `RemoveButton-module__icon--jszWb`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Tag/Tag.module.scss":
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
 */.Tag-module__tag--R6thR{font-size:var(--font-size-sub);padding:.25rem .75rem;border:none;border-radius:3.125rem;display:inline-flex;align-items:center;gap:.25rem}.Tag-module__tag--R6thR.Tag-module__tag-enabled--_EDD1{background-color:var(--color-green100)}.Tag-module__tag--R6thR.Tag-module__tag-disabled--Q_CYr{background-color:var(--color-blue-grey100)}.Tag-module__tag--R6thR.Tag-module__sharp--JiP08{border-radius:.125rem}.Tag-module__tag--R6thR .Tag-module__label--Hw5f_{line-height:2;font-size:inherit;color:inherit}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"tag": `Tag-module__tag--R6thR`,
	"tag-enabled": `Tag-module__tag-enabled--_EDD1`,
	"tag-disabled": `Tag-module__tag-disabled--Q_CYr`,
	"sharp": `Tag-module__sharp--JiP08`,
	"label": `Tag-module__label--Hw5f_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextEllipsis/TextEllipsis.module.scss":
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
 */.TextEllipsis-module__text-ellipsis--Iw4vN{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.TextEllipsis-module__popover--BKWTH{max-width:min(75ch,90%);padding:.6875rem .6875rem .6875rem .875rem;border-radius:.25rem;box-shadow:0 .1875rem .375rem rgba(0,0,0,.29);white-space:pre-wrap;transition-property:opacity;transform:scale(1);z-index:1}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"text-ellipsis": `TextEllipsis-module__text-ellipsis--Iw4vN`,
	"popover": `TextEllipsis-module__popover--BKWTH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Typography/Typography.module.scss":
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
 */.Typography-module__sr-only--atsaN{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Typography-module__hidden--Fh_t9{display:none}.Typography-module__slide-in--yyWDG{animation:Typography-module__slide-in--yyWDG .5s forwards}@media(prefers-reduced-motion: reduce){.Typography-module__slide-in--yyWDG{animation-duration:.1ms}}.Typography-module__slide-out--OE65m{animation:Typography-module__slide-out--OE65m .5s forwards}@media(prefers-reduced-motion: reduce){.Typography-module__slide-out--OE65m{animation-duration:.1ms}}@keyframes Typography-module__slide-in--yyWDG{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Typography-module__slide-out--OE65m{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:var(--font-size);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 calc(1*var(--font-size)) 0}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `Typography-module__sr-only--atsaN`,
	"hidden": `Typography-module__hidden--Fh_t9`,
	"slide-in": `Typography-module__slide-in--yyWDG`,
	"slide-out": `Typography-module__slide-out--OE65m`,
	"typography_style_h1": `Typography-module__typography_style_h1--QRbCJ`,
	"typography_style_h2": `Typography-module__typography_style_h2--gst_1`,
	"typography_style_h3": `Typography-module__typography_style_h3--OMuiN`,
	"typography_style_h4": `Typography-module__typography_style_h4--AK8ry`,
	"typography_style_body": `Typography-module__typography_style_body--RZ14O`,
	"typography_style_body-bold": `Typography-module__typography_style_body-bold--yrfzC`,
	"typography_style_sub-text": `Typography-module__typography_style_sub-text--J284m`,
	"typography_style_code": `Typography-module__typography_style_code--aL5hm`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/LeftNav/LeftNav.module.scss":
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
 */.LeftNav-module__sr-only--zujH3{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.LeftNav-module__hidden--Yl05_{display:none}.LeftNav-module__slide-in--Q4Fru{animation:LeftNav-module__slide-in--Q4Fru .5s forwards}@media(prefers-reduced-motion: reduce){.LeftNav-module__slide-in--Q4Fru{animation-duration:.1ms}}.LeftNav-module__slide-out--syzwM{animation:LeftNav-module__slide-out--syzwM .5s forwards}@media(prefers-reduced-motion: reduce){.LeftNav-module__slide-out--syzwM{animation-duration:.1ms}}@keyframes LeftNav-module__slide-in--Q4Fru{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes LeftNav-module__slide-out--syzwM{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.LeftNav-module__sidenavbar--CP4rG{--margin-top: 4rem;position:fixed;z-index:2;background-color:#fff;display:block;overflow-y:auto;flex-shrink:0;width:15rem;height:calc(100vh - var(--margin-top));padding:0;margin:0;box-shadow:0px 2px 2px 0px rgba(1,5,50,.02),0px 3px 4px 0px rgba(1,5,50,.02),0px 1px 5px 0px rgba(1,5,50,.04)}@media screen and (max-width: 50em){.LeftNav-module__sidenavbar--CP4rG{transition:transform 200ms ease-in-out;box-shadow:0 30px 50px rgba(0,0,0,.1607843137);transform:translateX(-110%)}.LeftNav-module__sidenavbar--CP4rG.LeftNav-module__hidden--Yl05_{visibility:hidden}.LeftNav-module__sidenavbar--CP4rG.LeftNav-module__open--_r_nH{visibility:visible;transform:translateX(0)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `LeftNav-module__sr-only--zujH3`,
	"hidden": `LeftNav-module__hidden--Yl05_`,
	"slide-in": `LeftNav-module__slide-in--Q4Fru`,
	"slide-out": `LeftNav-module__slide-out--syzwM`,
	"sidenavbar": `LeftNav-module__sidenavbar--CP4rG`,
	"open": `LeftNav-module__open--_r_nH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/LeftNav/LeftNavItem/LeftNavItem.module.scss":
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
___CSS_LOADER_EXPORT___.push([module.id, `.LeftNavItem-module__menu-button--LxPO4{background-color:rgba(0,0,0,0);border:0;font-family:var(--font-family)}.LeftNavItem-module__menu-button--LxPO4 a{color:inherit;text-decoration:inherit}.LeftNavItem-module__menu-button--LxPO4 a:hover,.LeftNavItem-module__menu-button--LxPO4 a:active,.LeftNavItem-module__menu-button--LxPO4 a:focus{color:inherit}.LeftNavItem-module__menu-link--fOKMX{text-decoration:none}.LeftNavItem-module__menu-button-wrapper--ETyDm>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm,.LeftNavItem-module__menu-button-wrapper--ETyDm>.LeftNavItem-module__menu-button--LxPO4+ul>a{opacity:0;transform:translateY(-60px)}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm,.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li{opacity:0;animation-name:LeftNavItem-module__item-fade-in--Egx4X;animation-duration:250ms;animation-fill-mode:forwards}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(1),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(1){animation-delay:0ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(2),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(2){animation-delay:100ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(3),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(3){animation-delay:200ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(4),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(4){animation-delay:300ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(5),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(5){animation-delay:400ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(6),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(6){animation-delay:500ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(7),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(7){animation-delay:600ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(8),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(8){animation-delay:700ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(9),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(9){animation-delay:800ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(10),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(10){animation-delay:900ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(11),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(11){animation-delay:1000ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(12),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(12){animation-delay:1100ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(13),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(13){animation-delay:1200ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(14),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(14){animation-delay:1300ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(15),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(15){animation-delay:1400ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(16),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(16){animation-delay:1500ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(17),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(17){animation-delay:1600ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(18),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(18){animation-delay:1700ms}.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>.LeftNavItem-module__menu-button-wrapper--ETyDm:nth-child(19),.LeftNavItem-module__menu-button-wrapper--ETyDm.LeftNavItem-module__expanded--jFco_>.LeftNavItem-module__menu-button--LxPO4+ul>li:nth-child(19){animation-delay:1800ms}.LeftNavItem-module__menu-list--WBViw{padding:0;margin:0;overflow:hidden;max-height:100000px;list-style:none;text-align:left;transition:max-height .15s ease-in-out}.LeftNavItem-module__menu-list--WBViw .LeftNavItem-module__menu-item-text-wrapper--r1JCC{padding-left:2rem}.LeftNavItem-module__menu-list--WBViw a:focus-visible,.LeftNavItem-module__menu-list--WBViw button:focus-visible{outline-offset:-0.0625rem}.LeftNavItem-module__menu-item--bcCIU{box-sizing:border-box;display:flex;padding:1.125rem 1rem;align-items:center;justify-content:space-between;width:100%;color:var(--color-blue-grey900);line-height:1.5rem;font-size:1rem;font-weight:400;transition:all .15s ease-in-out;cursor:pointer}.LeftNavItem-module__menu-item--bcCIU:focus-visible{outline-offset:-0.0625rem}.LeftNavItem-module__menu-item--bcCIU .LeftNavItem-module__menu-item-text-wrapper--r1JCC{display:flex}.LeftNavItem-module__menu-item--bcCIU .LeftNavItem-module__menu-item-expand-icon--fDh2i{padding:.375rem;margin:-0.375rem}.LeftNavItem-module__menu-item--bcCIU .LeftNavItem-module__menu-item-icon--wkrIu{display:flex;align-items:center;justify-content:center;width:1.5rem;margin-right:.5rem;font-size:1.125rem}.LeftNavItem-module__menu-item-text--YF9PR{display:flex;align-items:center}.LeftNavItem-module__menu-item-expand-icon--fDh2i{font-size:.75rem;color:var(--color-blue-grey900);transition:all .15s ease-in-out}.LeftNavItem-module__menu-item--bcCIU.LeftNavItem-module__expanded--jFco_ .LeftNavItem-module__menu-item-expand-icon--fDh2i{transform:rotate(180deg)}.LeftNavItem-module__menu-item--bcCIU a{color:inherit}.LeftNavItem-module__menu-item--bcCIU:hover{background-color:var(--color-blue-grey50)}.LeftNavItem-module__menu-item--bcCIU:focus,.LeftNavItem-module__menu-item--bcCIU:active{color:inherit;background-color:var(--color-blue-grey100)}.LeftNavItem-module__menu-item--bcCIU.LeftNavItem-module__disabled--iDEbC{color:var(--color-blue-grey400);background-color:var(--color-blue-grey25);pointer-events:none}.LeftNavItem-module__menu-list-item--YW6QE{position:relative}.LeftNavItem-module__menu-list-item--YW6QE .LeftNavItem-module__menu-item--bcCIU{padding:.75rem 1rem}.LeftNavItem-module__menu-list-item--YW6QE a.LeftNavItem-module__menu-item-active--EwVUR{background-color:var(--color-primary50)}.LeftNavItem-module__menu-list-item--YW6QE a.LeftNavItem-module__menu-item-active--EwVUR:hover{background-color:var(--color-blue-grey50)}.LeftNavItem-module__menu-list-item--YW6QE a.LeftNavItem-module__menu-item-active--EwVUR:focus,.LeftNavItem-module__menu-list-item--YW6QE a.LeftNavItem-module__menu-item-active--EwVUR:active{background-color:var(--color-blue-grey100)}.LeftNavItem-module__menu-list-item--YW6QE a.LeftNavItem-module__menu-item-active--EwVUR:before{content:"";height:100%;position:absolute;left:0;z-index:2;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary500)}.LeftNavItem-module__menu-list-item--YW6QE a.LeftNavItem-module__menu-item-active--EwVUR .LeftNavItem-module__menu-item-text--YF9PR{font-weight:700}.LeftNavItem-module__menu-list-item--YW6QE button.LeftNavItem-module__menu-item-active--EwVUR .LeftNavItem-module__menu-item-text--YF9PR{font-weight:700}@keyframes LeftNavItem-module__item-fade-in--Egx4X{0%{opacity:0;transform:translateY(-60px)}80%{opacity:.6}100%{opacity:1;transform:translateY(0px)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"menu-button": `LeftNavItem-module__menu-button--LxPO4`,
	"menu-link": `LeftNavItem-module__menu-link--fOKMX`,
	"menu-button-wrapper": `LeftNavItem-module__menu-button-wrapper--ETyDm`,
	"expanded": `LeftNavItem-module__expanded--jFco_`,
	"item-fade-in": `LeftNavItem-module__item-fade-in--Egx4X`,
	"menu-list": `LeftNavItem-module__menu-list--WBViw`,
	"menu-item-text-wrapper": `LeftNavItem-module__menu-item-text-wrapper--r1JCC`,
	"menu-item": `LeftNavItem-module__menu-item--bcCIU`,
	"menu-item-expand-icon": `LeftNavItem-module__menu-item-expand-icon--fDh2i`,
	"menu-item-icon": `LeftNavItem-module__menu-item-icon--wkrIu`,
	"menu-item-text": `LeftNavItem-module__menu-item-text--YF9PR`,
	"disabled": `LeftNavItem-module__disabled--iDEbC`,
	"menu-list-item": `LeftNavItem-module__menu-list-item--YW6QE`,
	"menu-item-active": `LeftNavItem-module__menu-item-active--EwVUR`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer.module.scss":
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
 */.MicrofrontendContainer-module__microfrontend-container-margin--AVcro{padding:2rem}.MicrofrontendContainer-module__microfrontend-container-max-width--qJEq8{max-width:105rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"microfrontend-container-margin": `MicrofrontendContainer-module__microfrontend-container-margin--AVcro`,
	"microfrontend-container-max-width": `MicrofrontendContainer-module__microfrontend-container-max-width--qJEq8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/admin/LeftNav/LeftNav.module.scss":
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
 *    Licensed under the Apache License; Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing; software
 *    distributed under the License is distributed on an "AS IS" BASIS;
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND; either express or implied.
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
 */.LeftNav-module__sr-only--mCvgz{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.LeftNav-module__hidden--MIQUZ{display:none}.LeftNav-module__slide-in--GsBcQ{animation:LeftNav-module__slide-in--GsBcQ .5s forwards}@media(prefers-reduced-motion: reduce){.LeftNav-module__slide-in--GsBcQ{animation-duration:.1ms}}.LeftNav-module__slide-out--NtZod{animation:LeftNav-module__slide-out--NtZod .5s forwards}@media(prefers-reduced-motion: reduce){.LeftNav-module__slide-out--NtZod{animation-duration:.1ms}}@keyframes LeftNav-module__slide-in--GsBcQ{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes LeftNav-module__slide-out--NtZod{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!
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
 */.LeftNav-module__top-nav--ZCMTn{position:sticky;z-index:1;top:1rem;display:flex;height:3rem;align-items:center;padding-inline:1.25rem;background-color:#fff;box-shadow:0px 1px 5px 0px rgba(1,5,50,.0784313725)}@media screen and (max-width: 50em){.LeftNav-module__top-nav--ZCMTn{padding-inline:.5rem}}.LeftNav-module__top-nav--ZCMTn .LeftNav-module__menu-icon--VlDff{flex-shrink:0;margin-right:.75rem;display:none}@media screen and (max-width: 50em){.LeftNav-module__top-nav--ZCMTn .LeftNav-module__menu-icon--VlDff{display:block}}.LeftNav-module__content--QO6ST{margin-left:15rem}@media screen and (max-width: 50em){.LeftNav-module__content--QO6ST{margin-left:0}}.LeftNav-module__content--QO6ST .LeftNav-module__inner--TI0NY{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;background-color:#f7f7f9;box-shadow:0px 1px 5px 0px rgba(1,5,50,.0784313725)}nav.LeftNav-module__storybook-preview-static-left-nav--UGYff{height:150px}nav.LeftNav-module__storybook-preview-static-left-nav--UGYff ul{position:relative;display:block;height:fit-content}.storybook-extended-preview-static-left-nav nav>ul{top:4rem;position:absolute;height:calc(100% - 6rem)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `LeftNav-module__sr-only--mCvgz`,
	"hidden": `LeftNav-module__hidden--MIQUZ`,
	"slide-in": `LeftNav-module__slide-in--GsBcQ`,
	"slide-out": `LeftNav-module__slide-out--NtZod`,
	"top-nav": `LeftNav-module__top-nav--ZCMTn`,
	"menu-icon": `LeftNav-module__menu-icon--VlDff`,
	"content": `LeftNav-module__content--QO6ST`,
	"inner": `LeftNav-module__inner--TI0NY`,
	"storybook-preview-static-left-nav": `LeftNav-module__storybook-preview-static-left-nav--UGYff`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ "./stories/admin/LeftNav/LeftNav.module.scss":
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./stories/admin/LeftNav/LeftNav.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

}]);