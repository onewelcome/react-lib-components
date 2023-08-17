(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9239],{

/***/ "./node_modules/@storybook/addon-actions/dist/index.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ContextMenu: function() { return /* binding */ ContextMenu_stories_ContextMenu; },
  ContextMenuWithDecorativeElement: function() { return /* binding */ ContextMenuWithDecorativeElement; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
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
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
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
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/esm/index.js + 1 modules
var esm = __webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js");
// EXTERNAL MODULE: ./stories/utils/helpers.ts
var helpers = __webpack_require__("./stories/utils/helpers.ts");
;// CONCATENATED MODULE: ./stories/ContextMenu/ContextMenu.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _ContextMenu$paramete, _ContextMenu$paramete2, _ContextMenuWithDecor, _ContextMenuWithDecor2;
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return {
          value: void 0,
          done: !0
        };
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable || "" === iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    throw new TypeError(_typeof(iterable) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
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
  (0,helpers/* centerStory */.Nr)();
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
ContextMenu_stories_ContextMenu.play = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var canvasElement, canvas;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,esm/* expect */.l)(canvas.getByRole("button", {
              name: "click me for contextmenu"
            })).toBeInTheDocument();
          });
        case 4:
          testing_library_dist/* userEvent */.mV.click(canvas.getByRole("button", {
            name: "click me for contextmenu"
          }));
          _context.next = 7;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,esm/* expect */.l)(canvas.getAllByRole("menuitem")).toHaveLength(3);
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();
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
ContextMenuWithDecorativeElement.play = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
    var canvasElement, canvas;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          canvasElement = _ref3.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context2.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,esm/* expect */.l)(canvas.getByRole("button", {
              name: "click me for contextmenu"
            })).toBeInTheDocument();
          });
        case 4:
          testing_library_dist/* userEvent */.mV.click(canvas.getByRole("button", {
            name: "click me for contextmenu"
          }));
          _context2.next = 7;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,esm/* expect */.l)(canvas.getAllByRole("menuitem")).toHaveLength(1);
          });
        case 7:
          (0,esm/* expect */.l)(canvas.getByText("Decorative element")).toBeInTheDocument();
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();
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
    icon: Icon/* Icons */.P.EllipsisAlt
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
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  centerStory();\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenu$paramete2 = ContextMenu_stories_ContextMenu.parameters) === null || _ContextMenu$paramete2 === void 0 || (_ContextMenu$paramete2 = _ContextMenu$paramete2.docs) === null || _ContextMenu$paramete2 === void 0 ? void 0 : _ContextMenu$paramete2.source)
  })
});
ContextMenuWithDecorativeElement.parameters = _objectSpread(_objectSpread({}, ContextMenuWithDecorativeElement.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ContextMenuWithDecor = ContextMenuWithDecorativeElement.parameters) === null || _ContextMenuWithDecor === void 0 ? void 0 : _ContextMenuWithDecor.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [placement, setPlacement] = useState<Placement>({\n    vertical: \"bottom\",\n    horizontal: \"left\"\n  });\n  const [transformOrigin, setTransformOrigin] = useState<Placement>({\n    vertical: \"top\",\n    horizontal: \"left\"\n  });\n  centerStory();\n  return <Fragment>\n      <ContextMenuComponent {...args} placement={{\n      vertical: placement.vertical,\n      horizontal: placement.horizontal\n    }} transformOrigin={transformOrigin}></ContextMenuComponent>\n      <div id=\"controls\" style={{\n      marginTop: \"20px\",\n      textAlign: \"left\"\n    }}>\n        <div style={{\n        display: \"flex\",\n        justifyContent: \"space-evenly\",\n        maxWidth: \"600px\",\n        margin: \"0 auto\"\n      }}>\n          <fieldset>\n            <legend>Horizontal Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"placementhorizontal\" id=\"left\" type=\"radio\" value=\"left\" checked={placement.horizontal === \"left\"} />\n              <label htmlFor=\"left\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"placementhorizontal\" id=\"centerhorizontal\" type=\"radio\" value=\"center\" checked={placement.horizontal === \"center\"} />\n              <label htmlFor=\"centerhorizontal\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"placementhorizontal\" id=\"right\" type=\"radio\" value=\"right\" checked={placement.horizontal === \"right\"} />\n              <label htmlFor=\"right\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Vertical Placement</legend>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"placementvertical\" id=\"top\" type=\"radio\" value=\"top\" checked={placement.vertical === \"top\"} />\n              <label htmlFor=\"top\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"placementvertical\" id=\"centervertical\" type=\"radio\" value=\"center\" checked={placement.vertical === \"center\"} />\n              <label htmlFor=\"centervertical\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setPlacement(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"placementvertical\" id=\"bottom\" type=\"radio\" value=\"bottom\" checked={placement.vertical === \"bottom\"} />\n              <label htmlFor=\"bottom\">Bottom</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Horizontal</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"left\")\n            }))} name=\"transformoriginhorizontalleft\" id=\"transformoriginhorizontalleft\" type=\"radio\" value=\"left\" checked={transformOrigin.horizontal === \"left\"} />\n              <label htmlFor=\"transformoriginhorizontalleft\">Left</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"center\")\n            }))} name=\"transformoriginhorizontalcenter\" id=\"transformoriginhorizontalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.horizontal === \"center\"} />\n              <label htmlFor=\"transformoriginhorizontalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              horizontal: (event.target.value as \"right\")\n            }))} name=\"transformoriginhorizontalright\" id=\"transformoriginhorizontalright\" type=\"radio\" value=\"right\" checked={transformOrigin.horizontal === \"right\"} />\n              <label htmlFor=\"transformoriginhorizontalright\">Right</label>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Transform Origin Vertical</legend>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"top\")\n            }))} name=\"transformoriginverticaltop\" id=\"transformoriginverticaltop\" type=\"radio\" value=\"top\" checked={transformOrigin.vertical === \"top\"} />\n              <label htmlFor=\"transformoriginverticaltop\">Top</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"center\")\n            }))} name=\"transformoriginverticalcenter\" id=\"transformoriginverticalcenter\" type=\"radio\" value=\"center\" checked={transformOrigin.vertical === \"center\"} />\n              <label htmlFor=\"transformoriginverticalcenter\">Center</label>\n            </div>\n            <div>\n              <input onChange={event => setTransformOrigin(prevState => ({\n              ...prevState,\n              vertical: (event.target.value as \"bottom\")\n            }))} name=\"transformoriginverticalbottom\" id=\"transformoriginverticalbottom\" type=\"radio\" value=\"bottom\" checked={transformOrigin.vertical === \"bottom\"} />\n              <label htmlFor=\"transformoriginverticalbottom\">Bottom</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </Fragment>;\n}"
    }, (_ContextMenuWithDecor2 = ContextMenuWithDecorativeElement.parameters) === null || _ContextMenuWithDecor2 === void 0 || (_ContextMenuWithDecor2 = _ContextMenuWithDecor2.docs) === null || _ContextMenuWithDecor2 === void 0 ? void 0 : _ContextMenuWithDecor2.source)
  })
});
var __namedExportsOrder = ["ContextMenu", "ContextMenuWithDecorativeElement"];

/***/ }),

/***/ "./src/components/Typography/Typography.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ useSpacing; }
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

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ContextMenu/ContextMenuDocumentation.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "?4f7e":
/***/ (function() {

/* (ignored) */

/***/ })

}]);