"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[51],{

/***/ "./stories/admin/LeftNav/LeftNavState.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftNavStates: () => (/* binding */ LeftNavStates),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/admin/layout/LeftNav/LeftNav.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Icon/Icon.tsx");
/* harmony import */ var _LeftNav_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./stories/admin/LeftNav/LeftNav.mdx");
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
const Template = args => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .MemoryRouter */ .fS, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__/* .LeftNav */ .$, _extends({
    className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["storybook-preview-static-left-nav"]
  }, args)));
};
const LeftNavStates = Template.bind({});
LeftNavStates.storyName = "LeftNav States";
const itemsWithActive = [{
  key: "home",
  title: "Home",
  path: "/",
  active: true
}, {
  key: "about",
  title: "About",
  path: "/about"
}, {
  key: "setting",
  title: "Settings",
  path: "/settings"
}];
const itemsWithActiveAndIcons = [{
  key: "home",
  title: "Home",
  path: "/",
  active: true,
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Link
  })
}, {
  key: "about",
  title: "About",
  path: "/about",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Edit
  })
}, {
  key: "setting",
  title: "Settings",
  path: "/settings",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.ArrowUp
  })
}];
const itemsWithDisabledAndIcons = [{
  key: "home",
  title: "Home",
  path: "/",
  disabled: true,
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Warning
  })
}, {
  key: "about",
  title: "About",
  path: "/about",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Eye
  })
}, {
  key: "setting",
  title: "Settings",
  path: "/settings",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.ZoomOut
  })
}];
const nestedItemsWithDisabledAndActiveAndIcons = [{
  key: "home",
  title: "Home",
  path: "/",
  disabled: true,
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Warning
  })
}, {
  key: "about",
  title: "About",
  path: "/about",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.Eye
  })
}, {
  key: "setting",
  title: "Settings",
  path: "/settings",
  iconComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_5__/* .Icons */ .F.ZoomOut
  }),
  items: [{
    key: "profile",
    title: "Profile",
    path: "/settings/profile"
  }, {
    key: "security",
    title: "Security",
    path: "/settings/security",
    disabled: true
  }, {
    key: "activity",
    title: "Activity",
    path: "/settings/activity",
    active: true
  }]
}];
const states = [{
  items: itemsWithActive
}, {
  items: itemsWithActive,
  firstItemPseudoState: "hover"
}, {
  items: itemsWithActive,
  firstItemPseudoState: "focus"
}, {
  items: itemsWithActive,
  firstItemPseudoState: "active"
}, {
  items: itemsWithActiveAndIcons
}, {
  items: itemsWithActiveAndIcons,
  firstItemPseudoState: "hover"
}, {
  items: itemsWithActiveAndIcons,
  firstItemPseudoState: "focus"
}, {
  items: itemsWithActiveAndIcons,
  firstItemPseudoState: "active"
}, {
  items: itemsWithDisabledAndIcons
}, {
  items: itemsWithDisabledAndIcons,
  firstItemPseudoState: "hover"
}, {
  items: itemsWithDisabledAndIcons,
  firstItemPseudoState: "focus"
}, {
  items: itemsWithDisabledAndIcons,
  firstItemPseudoState: "active"
}, {
  items: nestedItemsWithDisabledAndActiveAndIcons
}, {
  items: nestedItemsWithDisabledAndActiveAndIcons,
  firstItemPseudoState: "hover"
}, {
  items: nestedItemsWithDisabledAndActiveAndIcons,
  firstItemPseudoState: "focus"
}, {
  items: nestedItemsWithDisabledAndActiveAndIcons,
  firstItemPseudoState: "active"
}];
LeftNavStates.decorators = [() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .MemoryRouter */ .fS, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginLeft: "5px",
      marginTop: "5px",
      display: "grid",
      gridTemplateColumns: "auto auto auto auto"
    }
  }, states.map((states, index) => {
    const {
      firstItemPseudoState,
      items,
      ...props
    } = states;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: "20px"
      },
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__/* .LeftNav */ .$, _extends({}, props, {
      className: _LeftNav_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["storybook-preview-static-left-nav"],
      isSideMenuOpen: true,
      navigate: () => {},
      onItemClick: () => {},
      id: firstItemPseudoState,
      items: items
    })));
  })));
}];
LeftNavStates.parameters = {
  pseudo: {
    hover: "#hover li:first-of-type>a",
    active: "#active li:first-of-type>a",
    focus: "#focus li:first-of-type>a",
    focusVisible: "#focus li:first-of-type>a"
  },
  controls: {
    disable: true
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
;
const __namedExportsOrder = ["LeftNavStates"];
LeftNavStates.parameters = {
  ...LeftNavStates.parameters,
  docs: {
    ...LeftNavStates.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <MemoryRouter>\n      <LeftNav className={classes[\"storybook-preview-static-left-nav\"]} {...args} />\n    </MemoryRouter>;\n}",
      ...LeftNavStates.parameters?.docs?.source
    }
  }
};

/***/ })

}]);