(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8442],{

/***/ "./.storybook/conditionalPlay.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: function() { return /* binding */ conditionalPlay; }
});

// UNUSED EXPORTS: __namedExportsOrder

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
}

;// CONCATENATED MODULE: ./.storybook/conditionalPlay.ts
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


var conditionalPlay = function conditionalPlay(playFunction) {
  var isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};
var __namedExportsOrder = (/* unused pure expression or super */ null && (["conditionalPlay"]));

/***/ }),

/***/ "./stories/Form/Elements/Toggle.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CheckedToggle: function() { return /* binding */ CheckedToggle; },
  ToggleDisabled: function() { return /* binding */ ToggleDisabled; },
  ToggleLabelHidden: function() { return /* binding */ ToggleLabelHidden; },
  ToggleLabelLeft: function() { return /* binding */ ToggleLabelLeft; },
  ToggleLabelOverflow: function() { return /* binding */ ToggleLabelOverflow; },
  ToggleSpacingBetween: function() { return /* binding */ ToggleSpacingBetween; },
  ToggleVersionNeutral: function() { return /* binding */ ToggleVersionNeutral; },
  UncheckedToggle: function() { return /* binding */ UncheckedToggle; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Toggle_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Toggle/Toggle.tsx + 1 modules
var Toggle = __webpack_require__("./src/components/Form/Toggle/Toggle.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Toggle.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h1: "h1",
    pre: "pre",
    a: "a"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Toggle"
      }), " component inherits (nearly) everything that the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), " component has. It is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Form"
      }), " component that can be used to give the end-user a choice. We have a bunch of props that are shown in the table below like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperProps"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "formSelectorWrapperProps"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "helperText"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "labelPosition"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hideLabel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "labelOverflow"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spacing"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checked"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "disabled"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "className"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toggle-properties",
      children: "Toggle properties"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            children: "Property"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Type"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Default"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "The name of the toggle"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "label"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "The label of the toggle"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "helperProps"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "object"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Props for the helper"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "formSelectorWrapperProps"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "object"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Props for the form selector wrapper"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "helperText"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "The helper text of the toggle. Won't render if helperProps are specified"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "labelPosition"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "The position of the label"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "hideLabel"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Hide the label"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "labelOverflow"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Hide the label overflow"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "version"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "The version of the toggle"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "spacing"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "The spacing of the toggle"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "checked"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Is the toggle checked"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "disabled"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Is the toggle disabled"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example code with state:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <Toggle name=\"test\" onChange={() => setChecked(!checked)} checked={checked} helperText=\"Example helper text\">\n      Example toggle\n    </Toggle>;\n  )\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Below you can find an exampe of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Toggle"
      }), " component. It can be controlled through the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#props",
        children: "Props table"
      }), " at the bottom."]
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: UncheckedToggle
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
/* harmony default export */ var Elements_Toggle = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 4 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
;// CONCATENATED MODULE: ./stories/Form/Elements/Toggle.stories.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _UncheckedToggle$para, _UncheckedToggle$para2, _ToggleDisabled$param, _ToggleDisabled$param2, _CheckedToggle$parame, _CheckedToggle$parame2, _ToggleLabelLeft$para, _ToggleLabelLeft$para2, _ToggleLabelHidden$pa, _ToggleLabelHidden$pa2, _ToggleLabelOverflow$, _ToggleLabelOverflow$2, _ToggleVersionNeutral, _ToggleVersionNeutral2, _ToggleSpacingBetween, _ToggleSpacingBetween2;
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
  title: "components/Inputs/Toggle",
  component: Toggle/* Toggle */.Z,
  parameters: {
    docs: {
      page: Elements_Toggle
    }
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true
      },
      control: false
    },
    parentErrorId: {
      table: {
        disable: true
      },
      control: false
    },
    errorMessageId: {
      table: {
        disable: true
      },
      control: false
    },
    checked: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: "boolean"
    },
    className: {
      control: "text"
    }
  }
};
/* harmony default export */ var Toggle_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: "200px",
      padding: "1rem"
    }
  }, /*#__PURE__*/react.createElement(Toggle/* Toggle */.Z, _extends({
    onChange: function onChange() {
      return setChecked(!checked);
    },
    checked: checked
  }, args)));
};
var UncheckedToggle = Template.bind({});
UncheckedToggle.play = (0,conditionalPlay/* conditionalPlay */.B)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var canvasElement, canvas, toggle, label;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getByRole("checkbox")).not.toBeChecked();
          });
        case 4:
          _context.next = 6;
          return canvas.getByRole("checkbox");
        case 6:
          toggle = _context.sent;
          _context.next = 9;
          return canvas.getByText("Toggle label");
        case 9:
          label = _context.sent;
          (0,jest_dist/* expect */.l)(toggle).not.toBeChecked();
          _context.next = 13;
          return testing_library_dist/* userEvent */.mV.click(label);
        case 13:
          _context.next = 15;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(toggle).toBeChecked();
          });
        case 15:
          _context.next = 17;
          return testing_library_dist/* userEvent */.mV.click(label);
        case 17:
          _context.next = 19;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(toggle).not.toBeChecked();
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
UncheckedToggle.args = {
  name: "Example toggle",
  label: "Toggle label",
  helperProps: {
    children: /*#__PURE__*/react.createElement("a", {
      href: "https://www.google.com"
    }, "Test")
  }
};
var ToggleDisabled = Template.bind({});
ToggleDisabled.args = {
  name: "Example toggle",
  label: "Toggle label",
  disabled: true,
  helperProps: {
    children: /*#__PURE__*/react.createElement("a", {
      href: "https://www.google.com"
    }, "Test")
  }
};
var CheckedToggle = Template.bind({});
CheckedToggle.args = {
  name: "Example toggle",
  label: "Toggle label",
  helperProps: {
    children: /*#__PURE__*/react.createElement("a", {
      href: "https://www.google.com"
    }, "Test")
  }
};
CheckedToggle.play = (0,conditionalPlay/* conditionalPlay */.B)( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
    var canvasElement, canvas, toggle, label;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          canvasElement = _ref3.canvasElement;
          canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
          _context2.next = 4;
          return (0,testing_library_dist/* waitFor */.X_)(function () {
            return (0,jest_dist/* expect */.l)(canvas.getByRole("checkbox")).not.toBeChecked();
          });
        case 4:
          _context2.next = 6;
          return canvas.getByRole("checkbox");
        case 6:
          toggle = _context2.sent;
          _context2.next = 9;
          return canvas.getByText("Toggle label");
        case 9:
          label = _context2.sent;
          _context2.next = 12;
          return testing_library_dist/* userEvent */.mV.click(label);
        case 12:
          (0,jest_dist/* expect */.l)(toggle).toBeChecked();
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());
var ToggleLabelLeft = Template.bind({});
ToggleLabelLeft.args = _objectSpread(_objectSpread({}, UncheckedToggle.args), {}, {
  labelPosition: "left"
});
var ToggleLabelHidden = Template.bind({});
ToggleLabelHidden.args = _objectSpread(_objectSpread({}, UncheckedToggle.args), {}, {
  hideLabel: true
});
var ToggleLabelOverflow = Template.bind({});
ToggleLabelOverflow.args = _objectSpread(_objectSpread({}, UncheckedToggle.args), {}, {
  label: "This is a very long label that will overflow the toggle.",
  labelOverflow: "wrap"
});
var ToggleVersionNeutral = Template.bind({});
ToggleVersionNeutral.args = _objectSpread(_objectSpread({}, UncheckedToggle.args), {}, {
  version: "neutral",
  checked: true
});
var ToggleSpacingBetween = Template.bind({});
ToggleSpacingBetween.args = _objectSpread(_objectSpread({}, UncheckedToggle.args), {}, {
  spacing: "between"
});
UncheckedToggle.parameters = _objectSpread(_objectSpread({}, UncheckedToggle.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_UncheckedToggle$para = UncheckedToggle.parameters) === null || _UncheckedToggle$para === void 0 ? void 0 : _UncheckedToggle$para.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_UncheckedToggle$para2 = UncheckedToggle.parameters) === null || _UncheckedToggle$para2 === void 0 || (_UncheckedToggle$para2 = _UncheckedToggle$para2.docs) === null || _UncheckedToggle$para2 === void 0 ? void 0 : _UncheckedToggle$para2.source)
  })
});
ToggleDisabled.parameters = _objectSpread(_objectSpread({}, ToggleDisabled.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleDisabled$param = ToggleDisabled.parameters) === null || _ToggleDisabled$param === void 0 ? void 0 : _ToggleDisabled$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_ToggleDisabled$param2 = ToggleDisabled.parameters) === null || _ToggleDisabled$param2 === void 0 || (_ToggleDisabled$param2 = _ToggleDisabled$param2.docs) === null || _ToggleDisabled$param2 === void 0 ? void 0 : _ToggleDisabled$param2.source)
  })
});
CheckedToggle.parameters = _objectSpread(_objectSpread({}, CheckedToggle.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CheckedToggle$parame = CheckedToggle.parameters) === null || _CheckedToggle$parame === void 0 ? void 0 : _CheckedToggle$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_CheckedToggle$parame2 = CheckedToggle.parameters) === null || _CheckedToggle$parame2 === void 0 || (_CheckedToggle$parame2 = _CheckedToggle$parame2.docs) === null || _CheckedToggle$parame2 === void 0 ? void 0 : _CheckedToggle$parame2.source)
  })
});
ToggleLabelLeft.parameters = _objectSpread(_objectSpread({}, ToggleLabelLeft.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleLabelLeft$para = ToggleLabelLeft.parameters) === null || _ToggleLabelLeft$para === void 0 ? void 0 : _ToggleLabelLeft$para.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_ToggleLabelLeft$para2 = ToggleLabelLeft.parameters) === null || _ToggleLabelLeft$para2 === void 0 || (_ToggleLabelLeft$para2 = _ToggleLabelLeft$para2.docs) === null || _ToggleLabelLeft$para2 === void 0 ? void 0 : _ToggleLabelLeft$para2.source)
  })
});
ToggleLabelHidden.parameters = _objectSpread(_objectSpread({}, ToggleLabelHidden.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleLabelHidden$pa = ToggleLabelHidden.parameters) === null || _ToggleLabelHidden$pa === void 0 ? void 0 : _ToggleLabelHidden$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_ToggleLabelHidden$pa2 = ToggleLabelHidden.parameters) === null || _ToggleLabelHidden$pa2 === void 0 || (_ToggleLabelHidden$pa2 = _ToggleLabelHidden$pa2.docs) === null || _ToggleLabelHidden$pa2 === void 0 ? void 0 : _ToggleLabelHidden$pa2.source)
  })
});
ToggleLabelOverflow.parameters = _objectSpread(_objectSpread({}, ToggleLabelOverflow.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleLabelOverflow$ = ToggleLabelOverflow.parameters) === null || _ToggleLabelOverflow$ === void 0 ? void 0 : _ToggleLabelOverflow$.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_ToggleLabelOverflow$2 = ToggleLabelOverflow.parameters) === null || _ToggleLabelOverflow$2 === void 0 || (_ToggleLabelOverflow$2 = _ToggleLabelOverflow$2.docs) === null || _ToggleLabelOverflow$2 === void 0 ? void 0 : _ToggleLabelOverflow$2.source)
  })
});
ToggleVersionNeutral.parameters = _objectSpread(_objectSpread({}, ToggleVersionNeutral.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleVersionNeutral = ToggleVersionNeutral.parameters) === null || _ToggleVersionNeutral === void 0 ? void 0 : _ToggleVersionNeutral.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_ToggleVersionNeutral2 = ToggleVersionNeutral.parameters) === null || _ToggleVersionNeutral2 === void 0 || (_ToggleVersionNeutral2 = _ToggleVersionNeutral2.docs) === null || _ToggleVersionNeutral2 === void 0 ? void 0 : _ToggleVersionNeutral2.source)
  })
});
ToggleSpacingBetween.parameters = _objectSpread(_objectSpread({}, ToggleSpacingBetween.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleSpacingBetween = ToggleSpacingBetween.parameters) === null || _ToggleSpacingBetween === void 0 ? void 0 : _ToggleSpacingBetween.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [checked, setChecked] = useState(false);\n  return <div style={{\n    width: \"200px\",\n    padding: \"1rem\"\n  }}>\n      <ToggleComponent onChange={() => setChecked(!checked)} checked={checked} {...args} />\n    </div>;\n}"
    }, (_ToggleSpacingBetween2 = ToggleSpacingBetween.parameters) === null || _ToggleSpacingBetween2 === void 0 || (_ToggleSpacingBetween2 = _ToggleSpacingBetween2.docs) === null || _ToggleSpacingBetween2 === void 0 ? void 0 : _ToggleSpacingBetween2.source)
  })
});
var __namedExportsOrder = ["UncheckedToggle", "ToggleDisabled", "CheckedToggle", "ToggleLabelLeft", "ToggleLabelHidden", "ToggleLabelOverflow", "ToggleVersionNeutral", "ToggleSpacingBetween"];

/***/ }),

/***/ "./src/components/Form/Toggle/Toggle.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Toggle; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Checkbox/Checkbox.tsx + 1 modules
var Checkbox = __webpack_require__("./src/components/Form/Checkbox/Checkbox.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss
var Toggle_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Toggle_module/* default */.Z, options);




       /* harmony default export */ var Toggle_Toggle_module = (Toggle_module/* default */.Z && Toggle_module/* default */.Z.locals ? Toggle_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Form/Toggle/Toggle.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["checked", "disabled", "helperProps", "className", "label", "labelPosition", "hideLabel", "labelOverflow", "version", "spacing"];
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




var ToggleComponent = function ToggleComponent(_ref, ref) {
  var checked = _ref.checked,
    disabled = _ref.disabled,
    helperProps = _ref.helperProps,
    className = _ref.className,
    label = _ref.label,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? "right" : _ref$labelPosition,
    _ref$hideLabel = _ref.hideLabel,
    hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
    _ref$labelOverflow = _ref.labelOverflow,
    labelOverflow = _ref$labelOverflow === void 0 ? "nowrap" : _ref$labelOverflow,
    _ref$version = _ref.version,
    version = _ref$version === void 0 ? "emphasis" : _ref$version,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? "packed" : _ref$spacing,
    rest = _objectWithoutProperties(_ref, _excluded);
  var classNames = [Toggle_Toggle_module["toggle-wrapper"]];
  className && classNames.push(className);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(labelPosition)]);
  hideLabel && classNames.push(Toggle_Toggle_module["toggle-wrapper--hide-label"]);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(labelOverflow)]);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(version)]);
  classNames.push(Toggle_Toggle_module["toggle-wrapper--".concat(spacing)]);
  disabled && classNames.push(Toggle_Toggle_module["toggle-wrapper--disabled"]);
  return /*#__PURE__*/react.createElement("div", {
    className: classNames.join(" ")
  }, /*#__PURE__*/react.createElement(Checkbox/* Checkbox */.X, _extends({}, rest, {
    ref: ref,
    checked: checked,
    className: Toggle_Toggle_module["checkbox"],
    helperProps: _objectSpread({
      className: Toggle_Toggle_module["toggle-helper"]
    }, helperProps),
    disabled: disabled,
    label: label
  }), /*#__PURE__*/react.createElement("span", {
    "data-toggle": "true",
    "aria-hidden": "true",
    className: "".concat(Toggle_Toggle_module["toggle"], " ").concat(checked ? Toggle_Toggle_module["checked"] : "", " ").concat(disabled ? Toggle_Toggle_module["disabled"] : "", " ")
  })));
};
var Toggle = /*#__PURE__*/react.forwardRef(ToggleComponent);
try {
    // @ts-ignore
    Toggle.displayName = "Toggle";
    // @ts-ignore
    Toggle.__docgenInfo = { "description": "", "displayName": "Toggle", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string | ReactElement<any, string | JSXElementConstructor<any>>" } }, "spacing": { "defaultValue": { value: "packed" }, "description": "", "name": "spacing", "required": false, "type": { "name": "enum", "value": [{ "value": "\"packed\"" }, { "value": "\"between\"" }] } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "parentHelperId": { "defaultValue": null, "description": "", "name": "parentHelperId", "required": false, "type": { "name": "string" } }, "parentErrorId": { "defaultValue": null, "description": "", "name": "parentErrorId", "required": false, "type": { "name": "string" } }, "formSelectorWrapperProps": { "defaultValue": null, "description": "", "name": "formSelectorWrapperProps", "required": false, "type": { "name": "Props" } }, "labelPosition": { "defaultValue": { value: "right" }, "description": "", "name": "labelPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "hideLabel": { "defaultValue": { value: "false" }, "description": "", "name": "hideLabel", "required": false, "type": { "name": "boolean" } }, "labelOverflow": { "defaultValue": { value: "nowrap" }, "description": "", "name": "labelOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }] } }, "version": { "defaultValue": { value: "emphasis" }, "description": "", "name": "version", "required": false, "type": { "name": "enum", "value": [{ "value": "\"neutral\"" }, { "value": "\"emphasis\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Toggle/Toggle.tsx#Toggle"] = { docgenInfo: Toggle.__docgenInfo, name: "Toggle", path: "src/components/Form/Toggle/Toggle.tsx#Toggle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Toggle/Toggle.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Toggle-module__sr-only--fg5Lz{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Toggle-module__hidden--MLQo5{display:none}.Toggle-module__slide-in--BUiHs{animation:Toggle-module__slide-in--BUiHs .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-in--BUiHs{animation-duration:.1ms}}.Toggle-module__slide-out--o4_75{animation:Toggle-module__slide-out--o4_75 .5s forwards}@media(prefers-reduced-motion: reduce){.Toggle-module__slide-out--o4_75{animation-duration:.1ms}}@keyframes Toggle-module__slide-in--BUiHs{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Toggle-module__slide-out--o4_75{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Toggle-module__toggle-wrapper--EJ6xC{display:flex;align-items:center;position:relative}.Toggle-module__toggle-wrapper--EJ6xC label{white-space:nowrap}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div{flex-direction:row-reverse;position:relative}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div input{left:initial;right:0}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div label{margin-left:0;margin-right:.5rem}.Toggle-module__toggle-wrapper--left--Vfg1G>div>div+div{margin-left:0}.Toggle-module__toggle-wrapper--hide-label--HLd__>div>div label{display:none}.Toggle-module__toggle-wrapper--hide-label--HLd__>div>div+div{margin-left:0}.Toggle-module__toggle-wrapper--wrap--HQDDK label{white-space:normal}.Toggle-module__toggle-wrapper--neutral--Vr9l1 input:checked+span{background-color:var(--color-blue-grey500)}.Toggle-module__toggle-wrapper--neutral--Vr9l1 input+span:after{color:var(--color-blue-grey500)}.Toggle-module__toggle-wrapper--between--Mkha7{width:100%}.Toggle-module__toggle-wrapper--between--Mkha7>div{width:100%}.Toggle-module__toggle-wrapper--between--Mkha7>div>div{justify-content:space-between}.Toggle-module__toggle-wrapper--between--Mkha7.Toggle-module__toggle-wrapper--right--NTk_I>div>div+div{margin-left:0;text-align:right}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span{background-color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span:before{background-color:var(--color-blue-grey200)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input+span:after{color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span{background-color:var(--color-blue-grey200)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span:before{background-color:var(--color-blue-grey50)}.Toggle-module__toggle-wrapper--disabled--oKaKZ input:checked+span:after{color:var(--color-blue-grey200)}.Toggle-module__toggle--CAy20{width:2rem;min-width:2rem;height:1.25rem;background-color:var(--toggle-background-color);border-radius:2.5rem;position:relative;transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:block;pointer-events:none}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:before{content:\"\";width:1rem;height:1rem;border-radius:50%;display:block;background-color:var(--light);position:absolute;top:50%;transform:translateY(-50%) translateX(0);left:.125rem;transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:before{transition-duration:.1ms}}.Toggle-module__toggle--CAy20:after{content:\"\";font-family:\"icomoon\";position:absolute;font-size:.4375rem;top:47%;left:.4rem;transform:translateY(-50%) translateX(0);color:var(--color-primary);transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Toggle-module__toggle--CAy20:after{transition-duration:.1ms}}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi{background-color:var(--color-primary)}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:before{transform:translateY(-50%) translateX(calc(100% - 0.25rem))}.Toggle-module__toggle--CAy20.Toggle-module__checked--glybi:after{transform:translateY(-50%) translateX(170%);content:\"\"}.Toggle-module__toggle--CAy20.Toggle-module__disabled--cz5pI{cursor:not-allowed}.Toggle-module__toggle-helper--l3hCO{margin-left:2.5rem}.Toggle-module__checkbox--ptyNo{z-index:10;position:static}.Toggle-module__checkbox--ptyNo>div:first-child{display:flex;align-items:flex-start}.Toggle-module__checkbox--ptyNo input{width:2rem}.Toggle-module__checkbox--ptyNo input~[data-icon][aria-hidden]{display:none}.Toggle-module__checkbox--ptyNo input:focus-visible+*{border-radius:2.5rem;outline-offset:.125rem;outline-width:.125rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Toggle-module__sr-only--fg5Lz",
	"hidden": "Toggle-module__hidden--MLQo5",
	"slide-in": "Toggle-module__slide-in--BUiHs",
	"slide-out": "Toggle-module__slide-out--o4_75",
	"toggle-wrapper": "Toggle-module__toggle-wrapper--EJ6xC",
	"toggle-wrapper--left": "Toggle-module__toggle-wrapper--left--Vfg1G",
	"toggle-wrapper--hide-label": "Toggle-module__toggle-wrapper--hide-label--HLd__",
	"toggle-wrapper--wrap": "Toggle-module__toggle-wrapper--wrap--HQDDK",
	"toggle-wrapper--neutral": "Toggle-module__toggle-wrapper--neutral--Vr9l1",
	"toggle-wrapper--between": "Toggle-module__toggle-wrapper--between--Mkha7",
	"toggle-wrapper--right": "Toggle-module__toggle-wrapper--right--NTk_I",
	"toggle-wrapper--disabled": "Toggle-module__toggle-wrapper--disabled--oKaKZ",
	"toggle": "Toggle-module__toggle--CAy20",
	"checked": "Toggle-module__checked--glybi",
	"disabled": "Toggle-module__disabled--cz5pI",
	"toggle-helper": "Toggle-module__toggle-helper--l3hCO",
	"checkbox": "Toggle-module__checkbox--ptyNo"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {

"use strict";


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

/***/ "?4f7e":
/***/ (function() {

/* (ignored) */

/***/ })

}]);