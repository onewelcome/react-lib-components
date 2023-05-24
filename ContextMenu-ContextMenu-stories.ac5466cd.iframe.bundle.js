"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9239],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aD": function() { return /* reexport */ chunk_OPEUWD42/* action */.aD; }
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs + 4 modules
var chunk_OPEUWD42 = __webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-K5NRXLLB.mjs


var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs
var chunk_VWCVBQ22 = __webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs





/***/ }),

/***/ "./stories/ContextMenu/ContextMenu.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ContextMenu": function() { return /* binding */ ContextMenu_stories_ContextMenu; },
  "ContextMenuWithDecorativeElement": function() { return /* binding */ ContextMenuWithDecorativeElement; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ ContextMenu_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenu.tsx + 1 modules
var ContextMenu = __webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenuItem.tsx + 1 modules
var ContextMenuItem = __webpack_require__("./src/components/ContextMenu/ContextMenuItem.tsx");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs + 1 modules
var dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var blocks_dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css
var ContextMenuDocumentation = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css");
;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenuDocumentation.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ContextMenuDocumentation/* default */.Z, options);




       /* harmony default export */ var ContextMenu_ContextMenuDocumentation = (ContextMenuDocumentation/* default */.Z && ContextMenuDocumentation/* default.locals */.Z.locals ? ContextMenuDocumentation/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenu.mdx



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
      a: "a",
      pre: "pre"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(blocks_dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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
      }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.oG, {
          of: ContextMenu_stories_ContextMenu
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The following code example will showcase how the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/story/components-navigation-contextmenu--context-menu",
          children: "ContextMenu story"
        }), " is created."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<ContextMenu\n  id=\"example-contextmenu\"\n  trigger={\n    <IconButton color=\"default\" title=\"click me for contextmenu\">\n      <Icon icon={Icons.EllipsisAlt} />\n    </IconButton>\n  }\n  placement={{ vertical: \"bottom\", horizontal: \"left\" }}\n  transformOrigin={{ vertical: \"top\", horizontal: \"left\" }}\n>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 1 onClick event\")} key=\"1\">\n    Example item 1\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 2 onClick event\")} key=\"2\">\n    Example item 2\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 3 onClick event\")} key=\"3\">\n    Example item 3\n  </ContextMenuItem>\n</ContextMenu>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Xz, {
        children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.oG, {
          of: ContextMenuWithDecorativeElement
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The following code example shows how one can ", (0,jsx_runtime.jsx)(_components.a, {
          href: "story/components-navigation-contextmenu--context-menu-with-decorative-element",
          children: "add a decorative element to ContextMenu"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          children: "<ContextMenu\n  id=\"example-contextmenu\"\n  decorativeElement={\n    <Typography variant=\"body-bold\" spacing={{ marginLeft: 5, marginBottom: 0 }}>\n      Decorative element\n    </Typography>\n  }\n  trigger={\n    <IconButton color=\"default\" title=\"click me for contextmenu\">\n      <Icon icon={Icons.EllipsisAlt} />\n    </IconButton>\n  }\n  placement={{ vertical: \"bottom\", horizontal: \"left\" }}\n  transformOrigin={{ vertical: \"top\", horizontal: \"left\" }}\n>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 1 onClick event\")} key=\"1\">\n    Example item 1\n  </ContextMenuItem>\n</ContextMenu>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* ArgTypes */.Ed, {
        story: blocks_dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var ContextMenu_ContextMenu = (MDXContent);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenu.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _ContextMenu$paramete, _ContextMenu$paramete2, _ContextMenu$paramete3, _ContextMenuWithDecor, _ContextMenuWithDecor2, _ContextMenuWithDecor3;
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









var meta = {
  title: "components/Navigation/ContextMenu",
  component: ContextMenu/* ContextMenu */.x,
  parameters: {
    docs: {
      page: ContextMenu_ContextMenu
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
/* harmony default export */ var ContextMenu_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)({
      vertical: "bottom",
      horizontal: "left"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    placement = _useState2[0],
    setPlacement = _useState2[1];
  var _useState3 = (0,react.useState)({
      vertical: "top",
      horizontal: "left"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    transformOrigin = _useState4[0],
    setTransformOrigin = _useState4[1];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, _extends({}, args, {
    placement: {
      vertical: placement.vertical,
      horizontal: placement.horizontal
    },
    transformOrigin: transformOrigin
  })), /*#__PURE__*/react.createElement("div", {
    id: "controls",
    style: {
      marginTop: "20px",
      textAlign: "left"
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
      maxWidth: "600px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", null, "Horizontal Placement"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setPlacement(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          horizontal: event.target.value
        });
      });
    },
    name: "placementhorizontal",
    id: "left",
    type: "radio",
    value: "left",
    checked: placement.horizontal === "left"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "left"
  }, "Left")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setPlacement(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          horizontal: event.target.value
        });
      });
    },
    name: "placementhorizontal",
    id: "centerhorizontal",
    type: "radio",
    value: "center",
    checked: placement.horizontal === "center"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "centerhorizontal"
  }, "Center")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setPlacement(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          horizontal: event.target.value
        });
      });
    },
    name: "placementhorizontal",
    id: "right",
    type: "radio",
    value: "right",
    checked: placement.horizontal === "right"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "right"
  }, "Right"))), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", null, "Vertical Placement"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setPlacement(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          vertical: event.target.value
        });
      });
    },
    name: "placementvertical",
    id: "top",
    type: "radio",
    value: "top",
    checked: placement.vertical === "top"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "top"
  }, "Top")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setPlacement(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          vertical: event.target.value
        });
      });
    },
    name: "placementvertical",
    id: "centervertical",
    type: "radio",
    value: "center",
    checked: placement.vertical === "center"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "centervertical"
  }, "Center")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setPlacement(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          vertical: event.target.value
        });
      });
    },
    name: "placementvertical",
    id: "bottom",
    type: "radio",
    value: "bottom",
    checked: placement.vertical === "bottom"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "bottom"
  }, "Bottom"))), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", null, "Transform Origin Horizontal"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setTransformOrigin(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          horizontal: event.target.value
        });
      });
    },
    name: "transformoriginhorizontalleft",
    id: "transformoriginhorizontalleft",
    type: "radio",
    value: "left",
    checked: transformOrigin.horizontal === "left"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "transformoriginhorizontalleft"
  }, "Left")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setTransformOrigin(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          horizontal: event.target.value
        });
      });
    },
    name: "transformoriginhorizontalcenter",
    id: "transformoriginhorizontalcenter",
    type: "radio",
    value: "center",
    checked: transformOrigin.horizontal === "center"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "transformoriginhorizontalcenter"
  }, "Center")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setTransformOrigin(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          horizontal: event.target.value
        });
      });
    },
    name: "transformoriginhorizontalright",
    id: "transformoriginhorizontalright",
    type: "radio",
    value: "right",
    checked: transformOrigin.horizontal === "right"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "transformoriginhorizontalright"
  }, "Right"))), /*#__PURE__*/react.createElement("fieldset", null, /*#__PURE__*/react.createElement("legend", null, "Transform Origin Vertical"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setTransformOrigin(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          vertical: event.target.value
        });
      });
    },
    name: "transformoriginverticaltop",
    id: "transformoriginverticaltop",
    type: "radio",
    value: "top",
    checked: transformOrigin.vertical === "top"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "transformoriginverticaltop"
  }, "Top")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setTransformOrigin(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          vertical: event.target.value
        });
      });
    },
    name: "transformoriginverticalcenter",
    id: "transformoriginverticalcenter",
    type: "radio",
    value: "center",
    checked: transformOrigin.vertical === "center"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "transformoriginverticalcenter"
  }, "Center")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    onChange: function onChange(event) {
      return setTransformOrigin(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          vertical: event.target.value
        });
      });
    },
    name: "transformoriginverticalbottom",
    id: "transformoriginverticalbottom",
    type: "radio",
    value: "bottom",
    checked: transformOrigin.vertical === "bottom"
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: "transformoriginverticalbottom"
  }, "Bottom"))))));
};
var ContextMenu_stories_ContextMenu = Template.bind({});
ContextMenu_stories_ContextMenu.args = {
  id: "example-contextmenu",
  trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    color: "default",
    title: "click me for contextmenu"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.EllipsisAlt */.P.EllipsisAlt
  })),
  children: [/*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event"),
    key: "1"
  }, "Example item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 2 onClick event"),
    key: "2"
  }, "Example item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 3 onClick event"),
    key: "3"
  }, "Example item 3")]
};
ContextMenu_stories_ContextMenu.storyName = "ContextMenu";
var ContextMenuWithDecorativeElement = Template.bind({});
ContextMenuWithDecorativeElement.args = {
  id: "example-contextmenu",
  decorativeElement: /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body-bold",
    spacing: {
      marginLeft: 5,
      marginBottom: 0
    }
  }, "Decorative element"),
  trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    color: "default",
    title: "click me for contextmenu"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons.EllipsisAlt */.P.EllipsisAlt
  })),
  children: [/*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event"),
    key: "1"
  }, "Example item")]
};
ContextMenuWithDecorativeElement.storyName = "ContextMenu with decorative element";
ContextMenu_stories_ContextMenu.parameters = _objectSpread(_objectSpread({}, ContextMenu_stories_ContextMenu.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ContextMenu$paramete = ContextMenu_stories_ContextMenu.parameters) === null || _ContextMenu$paramete === void 0 ? void 0 : _ContextMenu$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenu$paramete2 = ContextMenu_stories_ContextMenu.parameters) === null || _ContextMenu$paramete2 === void 0 ? void 0 : (_ContextMenu$paramete3 = _ContextMenu$paramete2.docs) === null || _ContextMenu$paramete3 === void 0 ? void 0 : _ContextMenu$paramete3.source)
  })
});
ContextMenuWithDecorativeElement.parameters = _objectSpread(_objectSpread({}, ContextMenuWithDecorativeElement.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ContextMenuWithDecor = ContextMenuWithDecorativeElement.parameters) === null || _ContextMenuWithDecor === void 0 ? void 0 : _ContextMenuWithDecor.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenuWithDecor2 = ContextMenuWithDecorativeElement.parameters) === null || _ContextMenuWithDecor2 === void 0 ? void 0 : (_ContextMenuWithDecor3 = _ContextMenuWithDecor2.docs) === null || _ContextMenuWithDecor3 === void 0 ? void 0 : _ContextMenuWithDecor3.source)
  })
});
var __namedExportsOrder = ["ContextMenu", "ContextMenuWithDecorativeElement"];

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

/***/ "./src/hooks/useBodyClick.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ useBodyClick; }
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


var useBodyClick = function useBodyClick(checkFunction, callbackFunction, dependingStateVariable) {
  function bodyClickListener(event) {
    if (checkFunction(event)) {
      callbackFunction();
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("click", bodyClickListener);
    return function () {
      window.removeEventListener("click", bodyClickListener);
    };
  }, [dependingStateVariable]);
};

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.readyclasses-module__sr-only--AaB3O{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.readyclasses-module__hidden--kciBr{display:none}.readyclasses-module__slide-in--_Xh2C{animation:readyclasses-module__slide-in--_Xh2C .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-in--_Xh2C{animation-duration:.1ms}}.readyclasses-module__slide-out--fOqOy{animation:readyclasses-module__slide-out--fOqOy .5s forwards}@media(prefers-reduced-motion: reduce){.readyclasses-module__slide-out--fOqOy{animation-duration:.1ms}}@keyframes readyclasses-module__slide-in--_Xh2C{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes readyclasses-module__slide-out--fOqOy{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "readyclasses-module__sr-only--AaB3O",
	"hidden": "readyclasses-module__hidden--kciBr",
	"slide-in": "readyclasses-module__slide-in--_Xh2C",
	"slide-out": "readyclasses-module__slide-out--fOqOy"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n\n.docs-story #controls {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



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

/***/ "./src/readyclasses.module.scss":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/readyclasses.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["Z"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ })

}]);