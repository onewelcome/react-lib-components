"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4066],{

/***/ "./stories/Pagination/Pagination.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pagination: function() { return /* binding */ Pagination_stories_Pagination; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Pagination_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Pagination/Pagination.tsx + 1 modules
var Pagination = __webpack_require__("./src/components/Pagination/Pagination.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Pagination/Pagination.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    ul: "ul",
    li: "li",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pagination component makes the content readable by separating it into different chunks (read: pages). You, as a developer, are responsible for requesting the right content for the page that's active and for keeping track of the current page and page size."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It has a few strings of text that can be translated. These are accessible through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "translate"
      }), " prop; English is the default language. Please see the props table for the object interface. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "itemsPerPageLabel"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currentPageLabel"
      }), " are specifically for accessibility. Whenever the user tabs onto the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "itemsPerPage"
      }), " or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input"
      }), " component for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currentPage"
      }), ", their respective labels will be read by the screen reader."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "using-onpagechange-and-onpagesizechange-callbacks",
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onPageChange"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onPageSizeChange"
      }), " callbacks"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Pagination component provides two important callbacks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onPageChange"
        }), " callback notifies you when the user changes the selected page. It receives one parameter, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pageNo"
        }), ".\nThe page numbering starts at 1 to match typical human-friendly conventions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onPageSizeChange"
        }), " callback handles changes in items per page. It triggers when the user selects a new page size.\nTo ensure proper display of items for the new page size, developers should also update the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "currentPage"
        }), " property of the Pagination component."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An example component that's using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pagination"
      }), " component is shown below:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [currentPage, setCurrentPage] = useState(1);\n  const [pageSize, setPageSize] = useState(10);\n\n  const onPageSizeChange = (pageSize: PageSize) => {\n    setPageSize(pageSize);\n    setCurrentPage(1);\n  };\n  const onPageChange = (pageNo: number) => {\n    setCurrentPage(pageNo);\n  };\n\n  <Pagination\n    currentPage={currentPage}\n    totalElements={totalElements}\n    pageSize={pageSize}\n    onPageChange={onPageChange}\n    onPageSizeChange={onPageSizeChange}\n    translate={{\n      totalItems: \"items in total\",\n      itemsPerPage: \"Items per page\",\n      itemsPerPageLabel: \"Select how many items per page you want to see.\",\n      currentPage: \"of %1 pages\",\n      currentPageLabel: \"What page you are currently on.\"\n    }}\n     />\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Pagination_stories_Pagination
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
/* harmony default export */ var Pagination_Pagination = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/esm/index.js + 1 modules
var esm = __webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js");
;// CONCATENATED MODULE: ./stories/Pagination/Pagination.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _Pagination$parameter, _Pagination$parameter2;
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
  title: "components/Navigation/Pagination",
  component: Pagination/* Pagination */.t,
  parameters: {
    docs: {
      page: Pagination_Pagination
    }
  },
  argTypes: {
    translate: {
      control: {
        type: "object"
      }
    },
    pageSize: {
      options: ["10", "25", "50"],
      control: {
        type: "radio"
      }
    }
  }
};
/* harmony default export */ var Pagination_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(args.currentPage),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0,react.useState)(args.pageSize),
    _useState4 = _slicedToArray(_useState3, 2),
    pageSize = _useState4[0],
    setPageSize = _useState4[1];
  var onPageSizeChange = function onPageSizeChange(pageSize) {
    setPageSize(pageSize);
    setCurrentPage(1);
  };
  var onPageChange = function onPageChange(pageNo) {
    setCurrentPage(pageNo);
  };
  (0,react.useEffect)(function () {
    if (args.currentPage !== currentPage) {
      setCurrentPage(args.currentPage);
    }
    if (args.pageSize !== pageSize) {
      setPageSize(args.pageSize);
    }
  }, [args.pageSize, args.currentPage]);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      margin: "0 auto"
    }
  }, /*#__PURE__*/react.createElement(Pagination/* Pagination */.t, _extends({}, args, {
    currentPage: currentPage,
    pageSize: pageSize,
    onPageSizeChange: onPageSizeChange,
    onPageChange: onPageChange
  })));
};
var Pagination_stories_Pagination = Template.bind({});
Pagination_stories_Pagination.play = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref) {
    var canvasElement, args, step, canvas, waitForStoryToBeReady;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          canvasElement = _ref.canvasElement, args = _ref.args, step = _ref.step;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          waitForStoryToBeReady = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0,testing_library_dist/* waitFor */.X_)(function () {
                      return (0,esm/* expect */.l)(canvas.queryByText(args.translate.itemsPerPage)).toBeInTheDocument();
                    });
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function waitForStoryToBeReady() {
              return _ref3.apply(this, arguments);
            };
          }();
          _context9.next = 5;
          return step("Select items per page changes number of pages", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var pageSizeButton, itemPerPage25;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return waitForStoryToBeReady();
                case 2:
                  pageSizeButton = canvas.getByRole("button", {
                    expanded: false,
                    name: args.translate.itemsPerPage
                  });
                  _context2.next = 5;
                  return (0,testing_library_dist/* waitFor */.X_)(function () {
                    return (0,esm/* expect */.l)(pageSizeButton).toHaveTextContent("10");
                  });
                case 5:
                  (0,esm/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
                  _context2.next = 8;
                  return testing_library_dist/* userEvent */.mV.click(pageSizeButton);
                case 8:
                  itemPerPage25 = canvas.getByRole("option", {
                    name: "25"
                  });
                  _context2.next = 11;
                  return testing_library_dist/* userEvent */.mV.click(itemPerPage25);
                case 11:
                  (0,esm/* expect */.l)(pageSizeButton).toHaveTextContent("25");
                  (0,esm/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "10"))).toBeInTheDocument();
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        case 5:
          _context9.next = 7;
          return step("Select pages", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var pageSizeButton, pageNoButton, firstPageButton, prevPageButton, nextPageButton, lastPageButton, expectPageNavigationButtonAvailability, selectItemsPerPage;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  pageSizeButton = canvas.getByRole("button", {
                    expanded: false,
                    name: args.translate.itemsPerPage
                  });
                  pageNoButton = canvas.getByRole("button", {
                    expanded: false,
                    name: args.translate.currentPageLabel
                  });
                  firstPageButton = canvas.getByRole("button", {
                    hidden: true,
                    name: "first"
                  });
                  prevPageButton = canvas.getByRole("button", {
                    hidden: true,
                    name: "previous"
                  });
                  nextPageButton = canvas.getByRole("button", {
                    hidden: true,
                    name: "next"
                  });
                  lastPageButton = canvas.getByRole("button", {
                    hidden: true,
                    name: "last"
                  });
                  expectPageNavigationButtonAvailability = function expectPageNavigationButtonAvailability(forPage) {
                    if (forPage === "firstPage") {
                      (0,esm/* expect */.l)(firstPageButton).toBeDisabled();
                      (0,esm/* expect */.l)(prevPageButton).toBeDisabled();
                      (0,esm/* expect */.l)(nextPageButton).not.toBeDisabled();
                      (0,esm/* expect */.l)(lastPageButton).not.toBeDisabled();
                    } else if (forPage === "lastPage") {
                      (0,esm/* expect */.l)(firstPageButton).not.toBeDisabled();
                      (0,esm/* expect */.l)(prevPageButton).not.toBeDisabled();
                      (0,esm/* expect */.l)(nextPageButton).toBeDisabled();
                      (0,esm/* expect */.l)(lastPageButton).toBeDisabled();
                    } else {
                      (0,esm/* expect */.l)(firstPageButton).not.toBeDisabled();
                      (0,esm/* expect */.l)(prevPageButton).not.toBeDisabled();
                      (0,esm/* expect */.l)(nextPageButton).not.toBeDisabled();
                      (0,esm/* expect */.l)(lastPageButton).not.toBeDisabled();
                    }
                  };
                  selectItemsPerPage = /*#__PURE__*/function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(size) {
                      var selectedSize;
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return testing_library_dist/* userEvent */.mV.click(pageSizeButton);
                          case 2:
                            selectedSize = canvas.getByRole("option", {
                              name: size
                            });
                            _context3.next = 5;
                            return testing_library_dist/* userEvent */.mV.click(selectedSize);
                          case 5:
                            _context3.next = 7;
                            return (0,testing_library_dist/* waitFor */.X_)(function () {
                              return (0,esm/* expect */.l)(pageSizeButton).toHaveTextContent(size);
                            });
                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    }));
                    return function selectItemsPerPage(_x3) {
                      return _ref6.apply(this, arguments);
                    };
                  }();
                  _context8.next = 10;
                  return step("Select first page by changing page size", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return waitForStoryToBeReady();
                        case 2:
                          _context4.next = 4;
                          return selectItemsPerPage("10");
                        case 4:
                          expectPageNavigationButtonAvailability("firstPage");
                        case 5:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4);
                  })));
                case 10:
                  _context8.next = 12;
                  return step("Select first page by changing page size and then select last page using select component", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                    var pageNo5;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return waitForStoryToBeReady();
                        case 2:
                          _context5.next = 4;
                          return selectItemsPerPage("50");
                        case 4:
                          _context5.next = 6;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,esm/* expect */.l)(pageNoButton).toHaveTextContent("1");
                          });
                        case 6:
                          expectPageNavigationButtonAvailability("firstPage");
                          _context5.next = 9;
                          return testing_library_dist/* userEvent */.mV.click(pageNoButton);
                        case 9:
                          pageNo5 = canvas.getByRole("option", {
                            name: "5"
                          });
                          _context5.next = 12;
                          return testing_library_dist/* userEvent */.mV.click(pageNo5);
                        case 12:
                          expectPageNavigationButtonAvailability("lastPage");
                        case 13:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5);
                  })));
                case 12:
                  _context8.next = 14;
                  return step("Select page one by one", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                    var itemPerPage50;
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return waitForStoryToBeReady();
                        case 2:
                          _context6.next = 4;
                          return testing_library_dist/* userEvent */.mV.click(pageSizeButton);
                        case 4:
                          itemPerPage50 = canvas.getByRole("option", {
                            name: "50"
                          });
                          _context6.next = 7;
                          return testing_library_dist/* userEvent */.mV.click(itemPerPage50);
                        case 7:
                          _context6.next = 9;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,esm/* expect */.l)(pageSizeButton).toHaveTextContent("50");
                          });
                        case 9:
                          _context6.next = 11;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,esm/* expect */.l)(pageNoButton).toHaveTextContent("1");
                          });
                        case 11:
                          expectPageNavigationButtonAvailability("firstPage");
                          _context6.next = 14;
                          return testing_library_dist/* userEvent */.mV.click(nextPageButton);
                        case 14:
                          expectPageNavigationButtonAvailability("oneOfMiddlePages");
                          _context6.next = 17;
                          return testing_library_dist/* userEvent */.mV.click(nextPageButton);
                        case 17:
                          expectPageNavigationButtonAvailability("oneOfMiddlePages");
                          _context6.next = 20;
                          return testing_library_dist/* userEvent */.mV.click(nextPageButton);
                        case 20:
                          expectPageNavigationButtonAvailability("oneOfMiddlePages");
                          _context6.next = 23;
                          return testing_library_dist/* userEvent */.mV.click(nextPageButton);
                        case 23:
                          expectPageNavigationButtonAvailability("lastPage");
                        case 24:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6);
                  })));
                case 14:
                  _context8.next = 16;
                  return step("Select last page using select component (using search option)", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                    var page25;
                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return waitForStoryToBeReady();
                        case 2:
                          _context7.next = 4;
                          return selectItemsPerPage("10");
                        case 4:
                          _context7.next = 6;
                          return testing_library_dist/* userEvent */.mV.click(pageNoButton);
                        case 6:
                          _context7.next = 8;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,esm/* expect */.l)((0,testing_library_dist/* getByRole */.YA)(pageNoButton.parentElement, "textbox")).toBeInTheDocument();
                          });
                        case 8:
                          _context7.next = 10;
                          return testing_library_dist/* userEvent */.mV.tab();
                        case 10:
                          _context7.next = 12;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,esm/* expect */.l)(canvas.getByRole("option", {
                              name: "25"
                            })).toBeInTheDocument();
                          });
                        case 12:
                          _context7.next = 14;
                          return testing_library_dist/* userEvent */.mV.keyboard("25");
                        case 14:
                          page25 = canvas.getByRole("option", {
                            name: "25"
                          });
                          _context7.next = 17;
                          return testing_library_dist/* userEvent */.mV.click(page25);
                        case 17:
                          _context7.next = 19;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,esm/* expect */.l)(pageNoButton).toHaveTextContent("25");
                          });
                        case 19:
                          (0,esm/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
                          expectPageNavigationButtonAvailability("lastPage");
                        case 21:
                        case "end":
                          return _context7.stop();
                      }
                    }, _callee7);
                  })));
                case 16:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          })));
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();
Pagination_stories_Pagination.args = {
  currentPage: 1,
  pageSize: "10",
  totalElements: 250,
  translate: {
    totalItems: "items in total",
    itemsPerPage: "Items per page",
    itemsPerPageLabel: "Select how many items per page you want to see.",
    currentPage: "of %1 pages",
    currentPageLabel: "What page you are currently on."
  }
};
Pagination_stories_Pagination.parameters = _objectSpread(_objectSpread({}, Pagination_stories_Pagination.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Pagination$parameter = Pagination_stories_Pagination.parameters) === null || _Pagination$parameter === void 0 ? void 0 : _Pagination$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [currentPage, setCurrentPage] = useState(args.currentPage);\n  const [pageSize, setPageSize] = useState(args.pageSize);\n  const onPageSizeChange = (pageSize: PageSize) => {\n    setPageSize(pageSize);\n    setCurrentPage(1);\n  };\n  const onPageChange = (pageNo: number) => {\n    setCurrentPage(pageNo);\n  };\n  useEffect(() => {\n    if (args.currentPage !== currentPage) {\n      setCurrentPage(args.currentPage);\n    }\n    if (args.pageSize !== pageSize) {\n      setPageSize(args.pageSize);\n    }\n  }, [args.pageSize, args.currentPage]);\n  return <div style={{\n    margin: \"0 auto\"\n  }}>\n      <PaginationComponent {...args} currentPage={currentPage} pageSize={pageSize} onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} />\n    </div>;\n}"
    }, (_Pagination$parameter2 = Pagination_stories_Pagination.parameters) === null || _Pagination$parameter2 === void 0 || (_Pagination$parameter2 = _Pagination$parameter2.docs) === null || _Pagination$parameter2 === void 0 ? void 0 : _Pagination$parameter2.source)
  })
});
var __namedExportsOrder = ["Pagination"];

/***/ })

}]);