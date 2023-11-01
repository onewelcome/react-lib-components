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
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
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
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 4 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Pagination/Pagination.stories.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _Pagination$parameter, _Pagination$parameter2;
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
                      return (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.itemsPerPage)).toBeInTheDocument();
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
                    return (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent("10");
                  });
                case 5:
                  (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
                  _context2.next = 8;
                  return testing_library_dist/* userEvent */.mV.click(pageSizeButton);
                case 8:
                  itemPerPage25 = canvas.getByRole("option", {
                    name: "25"
                  });
                  _context2.next = 11;
                  return testing_library_dist/* userEvent */.mV.click(itemPerPage25);
                case 11:
                  (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent("25");
                  (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "10"))).toBeInTheDocument();
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
                      (0,jest_dist/* expect */.l)(firstPageButton).toBeDisabled();
                      (0,jest_dist/* expect */.l)(prevPageButton).toBeDisabled();
                      (0,jest_dist/* expect */.l)(nextPageButton).not.toBeDisabled();
                      (0,jest_dist/* expect */.l)(lastPageButton).not.toBeDisabled();
                    } else if (forPage === "lastPage") {
                      (0,jest_dist/* expect */.l)(firstPageButton).not.toBeDisabled();
                      (0,jest_dist/* expect */.l)(prevPageButton).not.toBeDisabled();
                      (0,jest_dist/* expect */.l)(nextPageButton).toBeDisabled();
                      (0,jest_dist/* expect */.l)(lastPageButton).toBeDisabled();
                    } else {
                      (0,jest_dist/* expect */.l)(firstPageButton).not.toBeDisabled();
                      (0,jest_dist/* expect */.l)(prevPageButton).not.toBeDisabled();
                      (0,jest_dist/* expect */.l)(nextPageButton).not.toBeDisabled();
                      (0,jest_dist/* expect */.l)(lastPageButton).not.toBeDisabled();
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
                              return (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent(size);
                            });
                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    }));
                    return function selectItemsPerPage(_x2) {
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
                            return (0,jest_dist/* expect */.l)(pageNoButton).toHaveTextContent("1");
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
                            return (0,jest_dist/* expect */.l)(pageSizeButton).toHaveTextContent("50");
                          });
                        case 9:
                          _context6.next = 11;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,jest_dist/* expect */.l)(pageNoButton).toHaveTextContent("1");
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
                            return (0,jest_dist/* expect */.l)((0,testing_library_dist/* getByRole */.YA)(pageNoButton.parentElement, "textbox")).toBeInTheDocument();
                          });
                        case 8:
                          _context7.next = 10;
                          return testing_library_dist/* userEvent */.mV.tab();
                        case 10:
                          _context7.next = 12;
                          return (0,testing_library_dist/* waitFor */.X_)(function () {
                            return (0,jest_dist/* expect */.l)(canvas.getByRole("option", {
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
                            return (0,jest_dist/* expect */.l)(pageNoButton).toHaveTextContent("25");
                          });
                        case 19:
                          (0,jest_dist/* expect */.l)(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();
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
  return function (_x) {
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

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: function() { return /* binding */ filterProps; },
/* harmony export */   MU: function() { return /* binding */ getValueByPath; },
/* harmony export */   Pb: function() { return /* binding */ isJsonString; },
/* harmony export */   R3: function() { return /* binding */ areArraysDifferent; },
/* harmony export */   cv: function() { return /* binding */ remToPx; },
/* harmony export */   y: function() { return /* binding */ generateID; }
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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

var generateID = function generateID() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  var hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var id = "";

  /** Generate an id of x characters in length */
  for (var i = 0; i < length && id.length < length; i++) {
    var stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
var filterProps = function filterProps(props, regexPattern) {
  var returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce(function (acc, key) {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return !regexPattern.test(key);
    }).reduce(function (prevObj, currKeyValPair) {
      return _objectSpread(_objectSpread({}, prevObj), {}, _defineProperty({}, currKeyValPair[0], currKeyValPair[1]));
    }, {});
  }
};
var debounce = function debounce(fn, delay) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      fn.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
var throttle = function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
var isEqual = function isEqual(x, y) {
  var typesCoincide = x && y && _typeof(x) === "object" && _typeof(y) === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(function (key) {
    return isEqual(x[key], y[key]);
  }) : x === y;
};
var areArraysDifferent = function areArraysDifferent(arr1, arr2, key) {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    var firstFilteredArray = arr1.filter(function (arr1Item) {
      return arr2.some(function (arr2Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    var secondFilteredArray = arr2.filter(function (arr2Item) {
      return arr1.some(function (arr1Item) {
        return !isEqual(arr1Item[key], arr2Item[key]);
      });
    });
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
var getValueByPath = function getValueByPath(obj, path) {
  return path.split(".").reduce(function (res, prop) {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
var remToPx = function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
var isJsonString = function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
var deepMerge = function deepMerge(obj1, obj2) {
  if (!obj2) return obj1;
  var result = _objectSpread({}, obj1);
  for (var _key2 in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, _key2)) {
      if (_typeof(obj2[_key2]) === "object" && obj2[_key2] !== null && Object.prototype.hasOwnProperty.call(obj1, _key2) && !Array.isArray(obj2[_key2])) {
        result[_key2] = deepMerge(obj1[_key2], obj2[_key2]);
      } else {
        result[_key2] = obj2[_key2];
      }
    }
  }
  return result;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);