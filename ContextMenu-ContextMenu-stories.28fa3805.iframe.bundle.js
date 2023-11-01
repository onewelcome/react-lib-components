"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9239],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aD: function() { return /* reexport */ chunk_AY7I2SME/* action */.aD; }
});

// UNUSED EXPORTS: ADDON_ID, CLEAR_ID, CYCLIC_KEY, EVENT_ID, PANEL_ID, PARAM_KEY, actions, config, configureActions

// EXTERNAL MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs + 5 modules
var chunk_AY7I2SME = __webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/chunk-GOSXJPAJ.mjs


var actions=(...args)=>{let options=config,names=args;names.length===1&&Array.isArray(names[0])&&([names]=names),names.length!==1&&typeof names[names.length-1]!="string"&&(options={...config,...names.pop()});let namesObject=names[0];(names.length!==1||typeof namesObject=="string")&&(namesObject={},names.forEach(name=>{namesObject[name]=name;}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options);}),actionsObject};



;// CONCATENATED MODULE: ./node_modules/@storybook/addon-actions/dist/index.mjs





/***/ }),

/***/ "./stories/ContextMenu/ContextMenu.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ContextMenu: function() { return /* binding */ ContextMenu_stories_ContextMenu; },
  ContextMenuStates: function() { return /* binding */ ContextMenuStates; },
  ContextMenuWithDecorativeElement: function() { return /* binding */ ContextMenuWithDecorativeElement; },
  ControlledContextMenu: function() { return /* binding */ ControlledContextMenu; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ ContextMenu_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/ContextMenu/ContextMenu.tsx + 2 modules
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
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
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




       /* harmony default export */ var ContextMenu_ContextMenuDocumentation = (ContextMenuDocumentation/* default */.Z && ContextMenuDocumentation/* default */.Z.locals ? ContextMenuDocumentation/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenu.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
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
        children: "<ContextMenu\n  id=\"example-contextmenu\"\n  trigger={\n    <IconButton color=\"default\" title=\"click me for contextmenu\">\n      <Icon icon={Icons.EllipsisAlt} />\n    </IconButton>\n  }\n  placement={{ vertical: \"bottom\", horizontal: \"left\" }}\n  transformOrigin={{ vertical: \"top\", horizontal: \"left\" }}\n>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 1 onClick event\")}>\n    Example item 1\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 2 onClick event\")}>\n    Example item 2\n  </ContextMenuItem>\n  <ContextMenuItem onClick={action(\"ContextMenuItem 3 onClick event\")}>\n    Example item 3\n  </ContextMenuItem>\n</ContextMenu>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.oG, {
        of: ContextMenuWithDecorativeElement
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
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(blocks_dist/* Story */.oG, {
        of: ControlledContextMenu
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
    }), "\n", (0,jsx_runtime.jsx)(blocks_dist/* ArgTypes */.Ed, {
      story: blocks_dist/* PRIMARY_STORY */.Uh
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ var ContextMenu_ContextMenu = (MDXContent);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 4 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./stories/utils/useStoryCentring.ts
var useStoryCentring = __webpack_require__("./stories/utils/useStoryCentring.ts");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./src/components/Tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__("./src/components/Tooltip/Tooltip.tsx");
;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenu.stories.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _ContextMenu$paramete, _ContextMenu$paramete2, _ContextMenuWithDecor, _ContextMenuWithDecor2, _ControlledContextMen, _ControlledContextMen2, _ContextMenuStates$pa, _ContextMenuStates$pa2;
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
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
  /* fixme: currently it's impossible to add conditional exclusions: https://github.com/storybookjs/storybook/issues/18233
   * when it's available we should include states only for chromatic
   * excludeStories: /.*ContextMenuStates$/,
   * */
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
  (0,useStoryCentring/* useStoryCentring */.g)();

  //Only with combination with `value` to show controlled component behaviour
  var _useState5 = (0,react.useState)(args.value),
    _useState6 = _slicedToArray(_useState5, 2),
    storyValue = _useState6[0],
    setStoryValue = _useState6[1];
  var onChange = function onChange(_e, value) {
    return setStoryValue(value);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, _extends({}, args, {
    placement: {
      vertical: placement.vertical,
      horizontal: placement.horizontal
    },
    transformOrigin: transformOrigin,
    onChange: storyValue !== undefined ? onChange : undefined,
    value: storyValue
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
ContextMenu_stories_ContextMenu.play = (0,conditionalPlay/* conditionalPlay */.B)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var canvasElement, canvas;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getByRole("button", {
              name: "click me for contextmenu"
            })).toBeInTheDocument();
          });
        case 4:
          testing_library_dist/* userEvent */.mV.click(canvas.getByRole("button", {
            name: "click me for contextmenu"
          }));
          _context.next = 7;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getAllByRole("menuitem")).toHaveLength(3);
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
ContextMenu_stories_ContextMenu.args = {
  id: "example-contextmenu",
  trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    color: "default",
    title: "click me for contextmenu"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.EllipsisAlt
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
ContextMenuWithDecorativeElement.play = (0,conditionalPlay/* conditionalPlay */.B)( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
    var canvasElement, canvas;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          canvasElement = _ref3.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context2.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getByRole("button", {
              name: "click me for contextmenu"
            })).toBeInTheDocument();
          });
        case 4:
          testing_library_dist/* userEvent */.mV.click(canvas.getByRole("button", {
            name: "click me for contextmenu"
          }));
          _context2.next = 7;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getAllByRole("menuitem")).toHaveLength(1);
          });
        case 7:
          (0,jest_dist/* expect */.l)(canvas.getByText("Decorative element")).toBeInTheDocument();
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());
ContextMenuWithDecorativeElement.args = {
  id: "example-contextmenu",
  decorativeElement: /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body-bold",
    spacing: {
      marginLeft: 3,
      marginBottom: 0
    }
  }, "Decorative element"),
  trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    color: "default",
    title: "click me for contextmenu"
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.EllipsisAlt
  })),
  children: [/*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event"),
    key: "1"
  }, "Example item")]
};
ContextMenuWithDecorativeElement.storyName = "ContextMenu with decorative element";
var ControlledContextMenu = Template.bind({});
ControlledContextMenu.args = _objectSpread(_objectSpread({}, ContextMenu_stories_ContextMenu.args), {}, {
  value: 0
});
ControlledContextMenu.storyName = "ContextMenu with active state";
var ContextMenuStates = Template.bind({});
var contextMenuStates = [{}, {
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
function () {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "start",
      gap: 180,
      flexWrap: "wrap"
    }
  }, contextMenuStates.map(function (state, index) {
    return state.emptySpace ? /*#__PURE__*/react.createElement("div", {
      key: index
    }) : /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, _extends({
      key: index,
      id: "context-menu-states_".concat(index),
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
        color: "default",
        title: "click me for contextmenu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.EllipsisAlt
      }))
    }, state, {
      show: true
    }), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event")
    }, "Example item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 2 onClick event")
    }, "Example item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 3 onClick event")
    }, "Example item 3"));
  }), /*#__PURE__*/react.createElement(Tooltip/* Tooltip */.u, {
    label: /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
      id: "context-menu-states_first_selected",
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
        color: "default",
        title: "click me for contextmenu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.EllipsisAlt
      })),
      value: 0,
      show: true
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event")
    }, "Example item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 2 onClick event")
    }, "Example item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 3 onClick event")
    }, "Example item 3")),
    location: "top",
    position: "center"
  }, "Check first element by `value` prop"), /*#__PURE__*/react.createElement(Tooltip/* Tooltip */.u, {
    label: /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
      id: "context-menu-states_second_selected",
      trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
        color: "default",
        title: "click me for contextmenu"
      }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.EllipsisAlt
      })),
      show: true
    }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event")
    }, "Example item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 2 onClick event"),
      showActiveState: true
    }, "Example item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
      onClick: (0,dist/* action */.aD)("ContextMenuItem 3 onClick event")
    }, "Example item 3")),
    location: "top",
    position: "center"
  }, "Check second element by `showActiveState` prop on that element"), /*#__PURE__*/react.createElement(ContextMenu/* ContextMenu */.x, {
    id: "context-menu-states_hover-active",
    trigger: /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
      color: "default",
      title: "click me for contextmenu hover"
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons */.P.EllipsisAlt
    })),
    show: true
  }, /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 1 onClick event")
  }, "Example item 1"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 2 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_focus-active"
  }, "Example item 2"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 3 onClick event"),
    showActiveState: true
  }, "Example item 3"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 4 onClick event"),
    id: "context-menu-states-btn_focus"
  }, "Example item 4"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 5 onClick event"),
    id: "context-menu-states-btn_hover"
  }, "Example item 5"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 6 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_hover-active"
  }, "Example item 6"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 7 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_hover-active-focus"
  }, "Example item 7"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 8 onClick event"),
    id: "context-menu-states-btn_pressed"
  }, "Example item 8"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 9 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_pressed-active"
  }, "Example item 9"), /*#__PURE__*/react.createElement(ContextMenuItem/* ContextMenuItem */.Z, {
    onClick: (0,dist/* action */.aD)("ContextMenuItem 10 onClick event"),
    showActiveState: true,
    id: "context-menu-states-btn_pressed-active-focus"
  }, "Example item 10")));
}];
ContextMenuStates.play = (0,conditionalPlay/* conditionalPlay */.B)( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref5) {
    var canvasElement, canvas;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          canvasElement = _ref5.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context3.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getAllByRole("menuitem").length).toBeGreaterThanOrEqual(1);
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3) {
    return _ref6.apply(this, arguments);
  };
}());
ContextMenuStates.parameters = {
  pseudo: {
    hover: ["#context-menu-states-btn_hover", "#context-menu-states-btn_hover-active", "#context-menu-states-btn_hover-active-focus"],
    focusVisible: ["#context-menu-states-btn_hover-active-focus", "#context-menu-states-btn_pressed-active-focus", "#context-menu-states-btn_focus", "#context-menu-states-btn_focus-active"],
    active: ["#context-menu-states-btn_pressed", "#context-menu-states-btn_pressed-active", "#context-menu-states-btn_pressed-active-focus", "#context-menu-states-btn_focus-active"]
  }
};
ContextMenu_stories_ContextMenu.parameters = _objectSpread(_objectSpread({}, ContextMenu_stories_ContextMenu.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ContextMenu$paramete = ContextMenu_stories_ContextMenu.parameters) === null || _ContextMenu$paramete === void 0 ? void 0 : _ContextMenu$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenu$paramete2 = ContextMenu_stories_ContextMenu.parameters) === null || _ContextMenu$paramete2 === void 0 || (_ContextMenu$paramete2 = _ContextMenu$paramete2.docs) === null || _ContextMenu$paramete2 === void 0 ? void 0 : _ContextMenu$paramete2.source)
  })
});
ContextMenuWithDecorativeElement.parameters = _objectSpread(_objectSpread({}, ContextMenuWithDecorativeElement.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ContextMenuWithDecor = ContextMenuWithDecorativeElement.parameters) === null || _ContextMenuWithDecor === void 0 ? void 0 : _ContextMenuWithDecor.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenuWithDecor2 = ContextMenuWithDecorativeElement.parameters) === null || _ContextMenuWithDecor2 === void 0 || (_ContextMenuWithDecor2 = _ContextMenuWithDecor2.docs) === null || _ContextMenuWithDecor2 === void 0 ? void 0 : _ContextMenuWithDecor2.source)
  })
});
ControlledContextMenu.parameters = _objectSpread(_objectSpread({}, ControlledContextMenu.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ControlledContextMen = ControlledContextMenu.parameters) === null || _ControlledContextMen === void 0 ? void 0 : _ControlledContextMen.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ControlledContextMen2 = ControlledContextMenu.parameters) === null || _ControlledContextMen2 === void 0 || (_ControlledContextMen2 = _ControlledContextMen2.docs) === null || _ControlledContextMen2 === void 0 ? void 0 : _ControlledContextMen2.source)
  })
});
ContextMenuStates.parameters = _objectSpread(_objectSpread({}, ContextMenuStates.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ContextMenuStates$pa = ContextMenuStates.parameters) === null || _ContextMenuStates$pa === void 0 ? void 0 : _ContextMenuStates$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  useStoryCentring();\n\n  //Only with combination with `value` to show controlled component behaviour\n  const [storyValue, setStoryValue] = useState(args.value);\n  const onChange = (_e: unknown, value: number) => setStoryValue(value);\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin} onChange={storyValue !== undefined ? onChange : undefined} value={storyValue}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenuStates$pa2 = ContextMenuStates.parameters) === null || _ContextMenuStates$pa2 === void 0 || (_ContextMenuStates$pa2 = _ContextMenuStates$pa2.docs) === null || _ContextMenuStates$pa2 === void 0 ? void 0 : _ContextMenuStates$pa2.source)
  })
});
var __namedExportsOrder = ["ContextMenu", "ContextMenuWithDecorativeElement", "ControlledContextMenu", "ContextMenuStates"];

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Typography; },
  p: function() { return /* binding */ validVariants; }
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




       /* harmony default export */ var Typography_Typography_module = (Typography_module/* default */.Z && Typography_module/* default */.Z.locals ? Typography_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/hooks/useSpacing.ts
var useSpacing = __webpack_require__("./src/hooks/useSpacing.ts");
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["children", "variant", "tag", "style", "spacing", "align", "className"];
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
    align = _ref.align,
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
    style: _objectSpread(_objectSpread({}, styleWithSpacing), {}, {
      textAlign: align
    }),
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
/* harmony export */   S: function() { return /* binding */ useBodyClick; }
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
/* harmony export */   N: function() { return /* binding */ useSpacing; }
/* harmony export */ });
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


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




       /* harmony default export */ __webpack_exports__.Z = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);