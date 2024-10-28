"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5772],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XI: () => (/* reexport */ action)
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_ = __webpack_require__("@storybook/core-events/preview-errors");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-MZXVCX43.mjs





var PARAM_KEY="actions",ADDON_ID="storybook/actions",PANEL_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/panel`)),EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=(/* unused pure expression or super */ null && (`${ADDON_ID}/action-clear`)),CYCLIC_KEY="$___storybook.isCyclic";var config={depth:10,clearOnStoryChange:!0,limit:50},configureActions=(options={})=>{Object.assign(config,options);};var findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return !proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!(typeof e=="object"&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&typeof e.persist=="function"),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return typeof view=="object"&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,v4/* default */.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>render.phase==="playing"||render.phase==="rendering");if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),minDepth=5,serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:minDepth+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit);};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs



/***/ }),

/***/ "./stories/ContextMenu/ContextMenu.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 17 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css
var ContextMenuDocumentation = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css");
;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenuDocumentation.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContextMenuDocumentation/* default */.A, options);




       /* harmony default export */ const ContextMenu_ContextMenuDocumentation = (ContextMenuDocumentation/* default */.A && ContextMenuDocumentation/* default */.A.locals ? ContextMenuDocumentation/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./stories/ContextMenu/ContextMenu.stories.tsx
var ContextMenu_stories = __webpack_require__("./stories/ContextMenu/ContextMenu.stories.tsx");
;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenu.mdx








function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      of: ContextMenu_stories
    }), "\n", (0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenu"
      }), " (root element is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<div>"
      }), ") is used to display a list of items after clicking on a trigger. This trigger is either a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IconButton"
      }), " component. The ContextMenu has to be used in conjunction with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenuItem"
      }), " component. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenuItem"
      }), " component has to be a child of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenu"
      }), " and can be regarded as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<li>"
      }), " HTMLElement.\nWithin this ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<li>"
      }), " there's a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "button"
      }), " which executes and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onClick"
      }), " event as soon as it is clicked on. Meaning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenuItem"
      }), " can receive an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onClick"
      }), " prop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenu"
      }), " component can be used to show a small menu that can execute certain actions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "show"
      }), " property of the ContextMenu component is controlled internally by the component library, but you can set its initial value. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onShow"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onClose"
      }), " props when you need to trigger actions upon showing or closing the context menu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenu"
      }), " will be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "React.Portal"
      }), "ed to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "body"
      }), " so that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transform"
      }), " won't mess with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePlacement"
      }), " hook."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If needed one can use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "decorativeElement"
      }), " prop which can be used to insert decorative, noninteractive element into the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextMenu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: ContextMenu_stories.ContextMenu
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following code example will showcase how the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/story/components-navigation-contextmenu--context-menu",
        children: "ContextMenu story"
      }), " is created."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<ContextMenu\n  id=\"example-contextmenu\"\n  trigger={\n    <IconButton color=\"default\" title=\"click me for contextmenu\">\n      <Icon icon={Icons.EllipsisAlt} />\n    </IconButton>\n  }\n  placement={{ vertical: \"bottom\", horizontal: \"left\" }}\n  transformOrigin={{ vertical: \"top\", horizontal: \"left\" }}\n>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 1 onClick event\")}>\n    Example item 1\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 2 onClick event\")}>\n    Example item 2\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 3 onClick event\")}>\n    Example item 3\n  </ContextMenuItem>\n</ContextMenu>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: ContextMenu_stories.ContextMenuWithDecorativeElement
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following code example shows how one can ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/story/components-navigation-contextmenu--context-menu-with-decorative-element",
        children: "add a decorative element to ContextMenu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<ContextMenu\n  id=\"example-contextmenu\"\n  decorativeElement={\n    <Typography variant=\"body-bold\" spacing={{ marginLeft: 5, marginBottom: 0 }}>\n      Decorative element\n    </Typography>\n  }\n  trigger={\n    <IconButton color=\"default\" title=\"click me for contextmenu\">\n      <Icon icon={Icons.EllipsisAlt} />\n    </IconButton>\n  }\n  placement={{ vertical: \"bottom\", horizontal: \"left\" }}\n  transformOrigin={{ vertical: \"top\", horizontal: \"left\" }}\n>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 1 onClick event\")}>\n    Example item 1\n  </ContextMenuItem>\n</ContextMenu>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: ContextMenu_stories.ControlledContextMenu
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following code example shows how one can ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/story/components-navigation-contextmenu--context-menu-with-decorative-element",
        children: "control ContextMenu's active state by value"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const [itemNo, setItemNo] = useState(-1);\nconst onChange = (_e: unknown, itemNo: number) => setItemNo(itemNo);\n\n<ContextMenu\n  id=\"example-contextmenu-with-active-ribbon\"\n  value={itemNo}\n  onChange={onChange}\n  trigger={\n    <IconButton color=\"default\" title=\"click me for contextmenu\">\n      <Icon icon={Icons.EllipsisAlt} />\n    </IconButton>\n  }\n>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 1 onClick event\")}>\n    Example item 1\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 2 onClick event\")}>\n    Example item 2\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 3 onClick event\")}>\n    Example item 3\n  </ContextMenuItem>\n</ContextMenu>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "./stories/ContextMenu/ContextMenu.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu),
/* harmony export */   ContextMenuStates: () => (/* binding */ ContextMenuStates),
/* harmony export */   ContextMenuWithDecorativeElement: () => (/* binding */ ContextMenuWithDecorativeElement),
/* harmony export */   ControlledContextMenu: () => (/* binding */ ControlledContextMenu),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Button/IconButton.tsx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Icon/Icon.tsx");
/* harmony import */ var _ContextMenu_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./stories/ContextMenu/ContextMenu.mdx");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/Typography/Typography.tsx");
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _utils_useStoryCentring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./stories/utils/useStoryCentring.ts");
/* harmony import */ var _storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.storybook/conditionalPlay.ts");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Tooltip/Tooltip.tsx");
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













const meta = {
  /* fixme: currently it's impossible to add conditional exclusions: https://github.com/storybookjs/storybook/issues/18233
   * when it's available we should include states only for chromatic
   * excludeStories: /.*ContextMenuStates$/,
   * */
  title: "components/Navigation/ContextMenu",
  component: _src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__/* .ContextMenu */ .t,
  parameters: {
    docs: {
      page: _ContextMenu_mdx__WEBPACK_IMPORTED_MODULE_4__["default"]
    }
  },
  argTypes: {
    onShow: {
      control: false
    },
    show: {
      control: false
    },
    transformOrigin: {
      control: false
    },
    placement: {
      control: false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Template = args => {
  const [placement, setPlacement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    vertical: "bottom",
    horizontal: "left"
  });
  const [transformOrigin, setTransformOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    vertical: "top",
    horizontal: "left"
  });
  (0,_utils_useStoryCentring__WEBPACK_IMPORTED_MODULE_5__/* .useStoryCentring */ .n)();

  //Only with combination with `value` to show controlled component behaviour
  const [storyValue, setStoryValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.value);
  const onChange = (_e, value) => setStoryValue(value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__/* .ContextMenu */ .t, _extends({}, args, {
    placement: {
      vertical: placement.vertical,
      horizontal: placement.horizontal
    },
    transformOrigin: transformOrigin,
    onChange: storyValue !== undefined ? onChange : undefined,
    value: storyValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "controls",
    style: {
      marginTop: "20px",
      textAlign: "left"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
      maxWidth: "600px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Horizontal Placement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setPlacement(prevState => ({
      ...prevState,
      horizontal: event.target.value
    })),
    name: "placementhorizontal",
    id: "left",
    type: "radio",
    value: "left",
    checked: placement.horizontal === "left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "left"
  }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setPlacement(prevState => ({
      ...prevState,
      horizontal: event.target.value
    })),
    name: "placementhorizontal",
    id: "centerhorizontal",
    type: "radio",
    value: "center",
    checked: placement.horizontal === "center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "centerhorizontal"
  }, "Center")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setPlacement(prevState => ({
      ...prevState,
      horizontal: event.target.value
    })),
    name: "placementhorizontal",
    id: "right",
    type: "radio",
    value: "right",
    checked: placement.horizontal === "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "right"
  }, "Right"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Vertical Placement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setPlacement(prevState => ({
      ...prevState,
      vertical: event.target.value
    })),
    name: "placementvertical",
    id: "top",
    type: "radio",
    value: "top",
    checked: placement.vertical === "top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "top"
  }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setPlacement(prevState => ({
      ...prevState,
      vertical: event.target.value
    })),
    name: "placementvertical",
    id: "centervertical",
    type: "radio",
    value: "center",
    checked: placement.vertical === "center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "centervertical"
  }, "Center")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setPlacement(prevState => ({
      ...prevState,
      vertical: event.target.value
    })),
    name: "placementvertical",
    id: "bottom",
    type: "radio",
    value: "bottom",
    checked: placement.vertical === "bottom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "bottom"
  }, "Bottom"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Transform Origin Horizontal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setTransformOrigin(prevState => ({
      ...prevState,
      horizontal: event.target.value
    })),
    name: "transformoriginhorizontalleft",
    id: "transformoriginhorizontalleft",
    type: "radio",
    value: "left",
    checked: transformOrigin.horizontal === "left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "transformoriginhorizontalleft"
  }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setTransformOrigin(prevState => ({
      ...prevState,
      horizontal: event.target.value
    })),
    name: "transformoriginhorizontalcenter",
    id: "transformoriginhorizontalcenter",
    type: "radio",
    value: "center",
    checked: transformOrigin.horizontal === "center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "transformoriginhorizontalcenter"
  }, "Center")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setTransformOrigin(prevState => ({
      ...prevState,
      horizontal: event.target.value
    })),
    name: "transformoriginhorizontalright",
    id: "transformoriginhorizontalright",
    type: "radio",
    value: "right",
    checked: transformOrigin.horizontal === "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "transformoriginhorizontalright"
  }, "Right"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Transform Origin Vertical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setTransformOrigin(prevState => ({
      ...prevState,
      vertical: event.target.value
    })),
    name: "transformoriginverticaltop",
    id: "transformoriginverticaltop",
    type: "radio",
    value: "top",
    checked: transformOrigin.vertical === "top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "transformoriginverticaltop"
  }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setTransformOrigin(prevState => ({
      ...prevState,
      vertical: event.target.value
    })),
    name: "transformoriginverticalcenter",
    id: "transformoriginverticalcenter",
    type: "radio",
    value: "center",
    checked: transformOrigin.vertical === "center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "transformoriginverticalcenter"
  }, "Center")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: event => setTransformOrigin(prevState => ({
      ...prevState,
      vertical: event.target.value
    })),
    name: "transformoriginverticalbottom",
    id: "transformoriginverticalbottom",
    type: "radio",
    value: "bottom",
    checked: transformOrigin.vertical === "bottom"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "transformoriginverticalbottom"
  }, "Bottom"))))));
};
const ContextMenu = Template.bind({});
ContextMenu.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_6__/* .conditionalPlay */ .h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .within */ .ux)(canvasElement);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .expect */ .E3)(canvas.getByRole("button", {
    name: "click me for contextmenu"
  })).toBeInTheDocument());
  _storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .userEvent */ .Q4.click(canvas.getByRole("button", {
    name: "click me for contextmenu"
  }));
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .expect */ .E3)(canvas.getAllByRole("menuitem")).toHaveLength(3));
});
ContextMenu.args = {
  id: "example-contextmenu",
  trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
    color: "default",
    title: "click me for contextmenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_8__/* .Icons */ .F.EllipsisAlt
  })),
  children: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 1 onClick event"),
    key: "1"
  }, "Example item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 2 onClick event"),
    key: "2"
  }, "Example item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 3 onClick event"),
    key: "3"
  }, "Example item 3")]
};
ContextMenu.storyName = "ContextMenu";
const ContextMenuWithDecorativeElement = Template.bind({});
ContextMenuWithDecorativeElement.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_6__/* .conditionalPlay */ .h)(async _ref2 => {
  let {
    canvasElement
  } = _ref2;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .within */ .ux)(canvasElement);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .expect */ .E3)(canvas.getByRole("button", {
    name: "click me for contextmenu"
  })).toBeInTheDocument());
  _storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .userEvent */ .Q4.click(canvas.getByRole("button", {
    name: "click me for contextmenu"
  }));
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .expect */ .E3)(canvas.getAllByRole("menuitem")).toHaveLength(1));
  (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .expect */ .E3)(canvas.getByText("Decorative element")).toBeInTheDocument();
});
ContextMenuWithDecorativeElement.args = {
  id: "example-contextmenu",
  decorativeElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .o, {
    variant: "body-bold",
    spacing: {
      marginLeft: 3,
      marginBottom: 0
    }
  }, "Decorative element"),
  trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
    color: "default",
    title: "click me for contextmenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .I, {
    icon: _src__WEBPACK_IMPORTED_MODULE_8__/* .Icons */ .F.EllipsisAlt
  })),
  children: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 1 onClick event"),
    key: "1"
  }, "Example item")]
};
ContextMenuWithDecorativeElement.storyName = "ContextMenu with decorative element";
const ControlledContextMenu = Template.bind({});
ControlledContextMenu.args = {
  ...ContextMenu.args,
  value: 0
};
ControlledContextMenu.storyName = "ContextMenu with active state";
const ContextMenuStates = Template.bind({});
const contextMenuStates = [{}, {
  placement: {
    horizontal: "right",
    vertical: "top"
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  }
}, {
  emptySpace: true
}, {
  placement: {
    horizontal: "left",
    vertical: "top"
  },
  transformOrigin: {
    horizontal: "right",
    vertical: "top"
  }
}, {
  placement: {
    horizontal: "left",
    vertical: "top"
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  }
}, {
  placement: {
    horizontal: "right",
    vertical: "bottom"
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  }
}, {
  placement: {
    horizontal: "right",
    vertical: "center"
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  }
}, {
  placement: {
    horizontal: "left",
    vertical: "bottom"
  },
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  }
}, {
  emptySpace: true
}, {
  placement: {
    horizontal: "left",
    vertical: "bottom"
  },
  transformOrigin: {
    horizontal: "right",
    vertical: "top"
  }
}, {
  placement: {
    horizontal: "right",
    vertical: "bottom"
  },
  transformOrigin: {
    horizontal: "right",
    vertical: "top"
  }
}, {
  offset: {
    top: 10,
    left: 10,
    right: 0,
    bottom: 0
  }
}, {
  offset: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10
  }
}, {
  offset: {
    top: 0,
    left: 0,
    right: 10,
    bottom: 10
  }
}];
ContextMenuStates.decorators = [
/* We need to place all context menu components on single page as the inside logic doesn't let 
     the context menu be invisible, so the position is fixed and that mean those will overlaps
   */
() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "start",
      gap: 180,
      flexWrap: "wrap"
    }
  }, contextMenuStates.map((state, index) => state.emptySpace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__/* .ContextMenu */ .t, _extends({
    key: index,
    id: "context-menu-states_".concat(index),
    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
      color: "default",
      title: "click me for contextmenu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_8__/* .Icons */ .F.EllipsisAlt
    }))
  }, state, {
    show: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 1 onClick event")
  }, "Example item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 2 onClick event")
  }, "Example item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 3 onClick event")
  }, "Example item 3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_11__/* .Tooltip */ .m, {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__/* .ContextMenu */ .t, {
      id: "context-menu-states_first_selected",
      trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
        color: "default",
        title: "click me for contextmenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .I, {
        icon: _src__WEBPACK_IMPORTED_MODULE_8__/* .Icons */ .F.EllipsisAlt
      })),
      value: 0,
      show: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
      onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 1 onClick event")
    }, "Example item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
      onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 2 onClick event")
    }, "Example item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
      onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 3 onClick event")
    }, "Example item 3")),
    location: "top",
    position: "center"
  }, "Check first element by `value` prop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_11__/* .Tooltip */ .m, {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__/* .ContextMenu */ .t, {
      id: "context-menu-states_second_selected",
      trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
        color: "default",
        title: "click me for contextmenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .I, {
        icon: _src__WEBPACK_IMPORTED_MODULE_8__/* .Icons */ .F.EllipsisAlt
      })),
      show: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
      onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 1 onClick event")
    }, "Example item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
      onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 2 onClick event"),
      showActiveState: true
    }, "Example item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
      onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 3 onClick event")
    }, "Example item 3")),
    location: "top",
    position: "center"
  }, "Check second element by `showActiveState` prop on that element"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__/* .ContextMenu */ .t, {
    id: "context-menu-states_hover-active",
    trigger: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_7__/* .IconButton */ .K, {
      color: "default",
      title: "click me for contextmenu hover"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .I, {
      icon: _src__WEBPACK_IMPORTED_MODULE_8__/* .Icons */ .F.EllipsisAlt
    })),
    show: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 1 onClick event")
  }, "Example item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 2 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_focus-active"
  }, "Example item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 3 onClick event"),
    showActiveState: true
  }, "Example item 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 4 onClick event"),
    id: "context-menu-states-btn_focus"
  }, "Example item 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 5 onClick event"),
    id: "context-menu-states-btn_hover"
  }, "Example item 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 6 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_hover-active"
  }, "Example item 6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 7 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_hover-active-focus"
  }, "Example item 7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 8 onClick event"),
    id: "context-menu-states-btn_pressed"
  }, "Example item 8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 9 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_pressed-active"
  }, "Example item 9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_9__/* .ContextMenuItem */ .k, {
    onClick: (0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__/* .action */ .XI)("ContextMenuItem 10 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_pressed-active-focus"
  }, "Example item 10")));
}];
ContextMenuStates.play = (0,_storybook_conditionalPlay__WEBPACK_IMPORTED_MODULE_6__/* .conditionalPlay */ .h)(async _ref3 => {
  let {
    canvasElement
  } = _ref3;
  const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .within */ .ux)(canvasElement);
  await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .waitFor */ .fm)(() => (0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__/* .expect */ .E3)(canvas.getAllByRole("menuitem").length).toBeGreaterThanOrEqual(1));
});
ContextMenuStates.parameters = {
  pseudo: {
    hover: ["#context-menu-states-btn_hover", "#context-menu-states-btn_hover-active", "#context-menu-states-btn_hover-active-focus"],
    focusVisible: ["#context-menu-states-btn_hover-active-focus", "#context-menu-states-btn_pressed-active-focus", "#context-menu-states-btn_focus", "#context-menu-states-btn_focus-active"],
    active: ["#context-menu-states-btn_pressed", "#context-menu-states-btn_pressed-active", "#context-menu-states-btn_pressed-active-focus", "#context-menu-states-btn_focus-active"]
  }
};
ContextMenu.parameters = {
  ...ContextMenu.parameters,
  docs: {
    ...ContextMenu.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...ContextMenu.parameters?.docs?.source
    }
  }
};
ContextMenuWithDecorativeElement.parameters = {
  ...ContextMenuWithDecorativeElement.parameters,
  docs: {
    ...ContextMenuWithDecorativeElement.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...ContextMenuWithDecorativeElement.parameters?.docs?.source
    }
  }
};
ControlledContextMenu.parameters = {
  ...ControlledContextMenu.parameters,
  docs: {
    ...ControlledContextMenu.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...ControlledContextMenu.parameters?.docs?.source
    }
  }
};
ContextMenuStates.parameters = {
  ...ContextMenuStates.parameters,
  docs: {
    ...ContextMenuStates.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}",
      ...ContextMenuStates.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ContextMenu","ContextMenuWithDecorativeElement","ControlledContextMenu","ContextMenuStates"];

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
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

.docs-story #controls {
  display: none;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Button/BaseButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ BaseButton)
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss
var BaseButton_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss");
;// CONCATENATED MODULE: ./src/components/Button/BaseButton.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(BaseButton_module/* default */.A, options);




       /* harmony default export */ const Button_BaseButton_module = (BaseButton_module/* default */.A && BaseButton_module/* default */.A.locals ? BaseButton_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Button/Spinner.tsx
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


const Spinner = props => /*#__PURE__*/react.createElement("svg", _extends({}, props, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/react.createElement("path", {
  d: "M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8323 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.2918 23.4127C6.49076 22.8275 4.85378 21.8243 3.51472 20.4853C2.17565 19.1462 1.17251 17.5092 0.587322 15.7082C0.00212849 13.9072 -0.148504 11.9932 0.14774 10.1228C0.443984 8.25238 1.17869 6.47863 2.2918 4.94658L3.91307 6.1245C2.98585 7.4007 2.37384 8.87823 2.12707 10.4363C1.8803 11.9943 2.00577 13.5887 2.49324 15.0889C2.9807 16.5892 3.81632 17.9528 4.93176 19.0682C6.0472 20.1837 7.4108 21.0193 8.91107 21.5068C10.4113 21.9942 12.0057 22.1197 13.5637 21.8729C15.1218 21.6262 16.5993 21.0141 17.8755 20.0869C19.1517 19.1597 20.1903 17.9436 20.9065 16.5381C21.6227 15.1326 21.996 13.5775 21.996 12H24Z",
  fill: "#5D607E"
}));
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
function BaseButton_extends() {
  return BaseButton_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, BaseButton_extends.apply(null, arguments);
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




const BaseButtonComponent = (_ref, ref) => {
  let {
    children,
    type = "button",
    className,
    loading,
    disabled,
    ...rest
  } = _ref;
  const validTypes = ["submit", "button", "reset"];
  const isDisabled = disabled !== null && disabled !== void 0 ? disabled : loading;
  if (!validTypes.includes(type)) throw new Error("You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ".concat(type));
  return /*#__PURE__*/react.createElement("button", BaseButton_extends({}, rest, {
    disabled: isDisabled,
    ref: ref,
    type: type,
    className: "".concat(Button_BaseButton_module.button, " ").concat(loading ? Button_BaseButton_module.loading : "", " ").concat(className ? className : "")
  }), loading ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: Button_BaseButton_module["content-hidden"]
  }, children), /*#__PURE__*/react.createElement(Spinner, {
    className: Button_BaseButton_module["spinner"]
  })) : children);
};
const BaseButton = /*#__PURE__*/react.forwardRef(BaseButtonComponent);
try {
    // @ts-ignore
    BaseButton.displayName = "BaseButton";
    // @ts-ignore
    BaseButton.__docgenInfo = { "description": "", "displayName": "BaseButton", "props": { "color": { "defaultValue": null, "description": "", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"success\"" }, { "value": "\"danger\"" }, { "value": "\"warning\"" }, { "value": "\"default\"" }] } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": { value: "button" }, "description": "", "name": "type", "required": false, "type": { "name": "enum", "value": [{ "value": "\"button\"" }, { "value": "\"reset\"" }, { "value": "\"submit\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"] = { docgenInfo: BaseButton.__docgenInfo, name: "BaseButton", path: "src/components/Button/BaseButton.tsx#BaseButton" };
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
    throw new Error("You entered an invalid variant. You can choose from: ".concat(validVariants, ", you entered: ").concat(variant));
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
  let TagName = tag;
  return /*#__PURE__*/react.createElement(TagName, _extends({}, rest, {
    ref: ref,
    style: {
      ...styleWithSpacing,
      textAlign: align
    },
    className: "".concat(Typography_Typography_module["typography_style_" + variant], " ").concat(className)
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
        return "".concat(Number(multiplierValue) * defaultFactor).concat(defaultUnit);
      }).join(" ");
      return {
        ...prev,
        [spacing]: cssSpacingValue
      };
    }, style !== null && style !== void 0 ? style : {});
  }
  return style;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/BaseButton.module.scss":
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
 */.BaseButton-module__sr-only--pIoQP{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.BaseButton-module__hidden--YXbft{display:none}.BaseButton-module__slide-in--f4Qq6{animation:BaseButton-module__slide-in--f4Qq6 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-in--f4Qq6{animation-duration:.1ms}}.BaseButton-module__slide-out--QlyO7{animation:BaseButton-module__slide-out--QlyO7 .5s forwards}@media(prefers-reduced-motion: reduce){.BaseButton-module__slide-out--QlyO7{animation-duration:.1ms}}@keyframes BaseButton-module__slide-in--f4Qq6{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes BaseButton-module__slide-out--QlyO7{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.BaseButton-module__button--q6T9A{position:relative}.BaseButton-module__button--q6T9A .BaseButton-module__content-hidden--QNxtO{visibility:hidden;display:flex}.BaseButton-module__button--q6T9A{border-width:var(--button-border-width);border-style:var(--button-border-style);border-radius:var(--button-border-radius);font-size:var(--button-font-size);line-height:var(--button-font-size);margin:0;padding:.5rem .75rem;min-height:2.5rem;cursor:pointer;font-family:var(--font-family);transition-property:color,background-color,border-color;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.BaseButton-module__button--q6T9A{transition-duration:.1ms}}.BaseButton-module__button--q6T9A:disabled{color:var(--greyed-out);cursor:not-allowed;background-color:var(--disabled);border-color:var(--disabled)}.BaseButton-module__spinner--sHeyQ{position:absolute;top:calc(50% - .75rem);left:calc(50% - .75rem);transform:translate(-50%, -50%);animation:BaseButton-module__spin--KXAHp 1s infinite linear}@keyframes BaseButton-module__spin--KXAHp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `BaseButton-module__sr-only--pIoQP`,
	"hidden": `BaseButton-module__hidden--YXbft`,
	"slide-in": `BaseButton-module__slide-in--f4Qq6`,
	"slide-out": `BaseButton-module__slide-out--QlyO7`,
	"button": `BaseButton-module__button--q6T9A`,
	"content-hidden": `BaseButton-module__content-hidden--QNxtO`,
	"spinner": `BaseButton-module__spinner--sHeyQ`,
	"spin": `BaseButton-module__spin--KXAHp`
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
 */.Typography-module__sr-only--atsaN{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Typography-module__hidden--Fh_t9{display:none}.Typography-module__slide-in--yyWDG{animation:Typography-module__slide-in--yyWDG .5s forwards}@media(prefers-reduced-motion: reduce){.Typography-module__slide-in--yyWDG{animation-duration:.1ms}}.Typography-module__slide-out--OE65m{animation:Typography-module__slide-out--OE65m .5s forwards}@media(prefers-reduced-motion: reduce){.Typography-module__slide-out--OE65m{animation-duration:.1ms}}@keyframes Typography-module__slide-in--yyWDG{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Typography-module__slide-out--OE65m{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}.Typography-module__typography_style_h1--QRbCJ{font-family:var(--font-family);font-size:var(--font-size-h1);font-style:normal;font-variant:normal;line-height:1.2;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h2--gst_1{font-family:var(--font-family);font-size:var(--font-size-h2);font-style:normal;font-variant:normal;line-height:1.42857;font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h3--OMuiN{font-family:var(--font-family);font-size:var(--font-size-h3);font-style:normal;font-variant:normal;line-height:1.16666;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_h4--AK8ry{font-family:var(--font-family);font-size:var(--font-size-h4);font-style:normal;font-variant:normal;line-height:1.2;font-weight:500;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body--RZ14O{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_body-bold--yrfzC{font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-variant:normal;line-height:var(--default-line-height);font-weight:700;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_sub-text--J284m{font-family:var(--font-family);font-size:var(--font-size-sub);font-style:normal;font-variant:normal;line-height:1rem;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}.Typography-module__typography_style_code--aL5hm{font-family:var(--font-family-code);font-size:var(--font-size-code);font-style:normal;font-variant:normal;line-height:1.5;font-weight:400;text-transform:none;letter-spacing:0;color:var(--default);margin:0 0 1rem 0}`, ""]);
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


/***/ })

}]);