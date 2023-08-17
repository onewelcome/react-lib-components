"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[594],{

/***/ "./stories/ProgressBar/ProgressBar.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProgressBar: function() { return /* binding */ ProgressBar_stories_ProgressBar; },
  ProgressBarWithoutPercentage: function() { return /* binding */ ProgressBarWithoutPercentage; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ ProgressBar_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/ProgressBar/ProgressBar.tsx + 1 modules
var ProgressBar = __webpack_require__("./src/components/ProgressBar/ProgressBar.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/ProgressBar/ProgressBar.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    h2: "h2",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component can be used whenever user has to wait for a particular action to finish."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It takes 100% width of its parent by default. It has a few different properties that can be used to customize its appearance. These are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "caption"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "completed"
      }), " (number that changes width of the progress bar), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "percentage"
      }), " (shows it on top right of progressbar) & ", (0,jsx_runtime.jsx)(_components.code, {
        children: "accessibilityTitle"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressbar-properties",
      children: "Progressbar properties"
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
          }), (0,jsx_runtime.jsx)("th", {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "caption"
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
            children: "Text that is shown below the progress bar."
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
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
            children: "Text that is shown above the progress bar."
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "completed"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "number"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Number that changes width of the progress bar, you can set this the same as the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "percentage"
              }), "\nvalue to slowly let the bar fill. Or leave it empty, then it will simply show a loading\nstate."]
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "percentage"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "number"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "undefined"
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "Shows percentage on top right of progress bar."
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)("code", {
              children: "accessibilityTitle"
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
            children: "Text that is read by screen readers."
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React from \"react\";\n\nimport { ProgressBar } from \"@onewelcome/react-lib-components\";\n\nconst Example = () => {\n  const [percentage, setPercentage] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setPercentage(percentage => {\n        if (percentage === 100) {\n          clearInterval(interval);\n          return percentage;\n        }\n\n        return percentage + 1;\n      });\n    }, 100);\n\n    return () => clearInterval(interval);\n  }, []);\n\n  return (\n    <ProgressBar\n      caption=\"Caption\"\n      label=\"Label\"\n      completed={percentage}\n      percentage\n      accessibilityTitle=\"Accessibility title\"\n    />\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: ProgressBar_stories_ProgressBar
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
/* harmony default export */ var ProgressBar_ProgressBar = (MDXContent);

;// CONCATENATED MODULE: ./stories/ProgressBar/ProgressBar.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _ProgressBar$paramete, _ProgressBar$paramete2, _ProgressBarWithoutPe, _ProgressBarWithoutPe2;
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
  title: "components/Feedback/ProgressBar",
  component: ProgressBar/* ProgressBar */.k,
  parameters: {
    docs: {
      page: ProgressBar_ProgressBar
    }
  }
};
/* harmony default export */ var ProgressBar_stories = (meta);
var Template = function Template(args) {
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    percentage = _useState2[0],
    setPercentage = _useState2[1];
  (0,react.useEffect)(function () {
    // Delay for the first render for Chromatic to capture the initial state.
    if (percentage === 0) {
      var initialDelay = setTimeout(function () {
        var timer = setInterval(function () {
          setPercentage(function (prevPercentage) {
            if (prevPercentage < 100) {
              return prevPercentage + 1;
            } else {
              clearInterval(timer); // Stop the timer when we reach 100
              return prevPercentage;
            }
          });
        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));
        return function () {
          return clearInterval(timer);
        };
      }, 2000);
      return function () {
        return clearTimeout(initialDelay);
      };
    }
  }, [percentage]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "500px"
    }
  }, /*#__PURE__*/react.createElement(ProgressBar/* ProgressBar */.k, _extends({
    caption: "One moment please...",
    completed: percentage,
    percentage: percentage
  }, args))), percentage === 100 && /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: "3rem"
    }
  }, "Finished loading!"));
};
var ProgressBar_stories_ProgressBar = Template.bind({});
ProgressBar_stories_ProgressBar.args = {
  label: "Loading..."
};
var ProgressBarWithoutPercentage = Template.bind({});
ProgressBarWithoutPercentage.args = {
  label: "Loading...",
  percentage: undefined,
  completed: undefined
};
ProgressBar_stories_ProgressBar.parameters = _objectSpread(_objectSpread({}, ProgressBar_stories_ProgressBar.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ProgressBar$paramete = ProgressBar_stories_ProgressBar.parameters) === null || _ProgressBar$paramete === void 0 ? void 0 : _ProgressBar$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [percentage, setPercentage] = useState(0);\n  useEffect(() => {\n    // Delay for the first render for Chromatic to capture the initial state.\n    if (percentage === 0) {\n      const initialDelay = setTimeout(() => {\n        const timer = setInterval(() => {\n          setPercentage(prevPercentage => {\n            if (prevPercentage < 100) {\n              return prevPercentage + 1;\n            } else {\n              clearInterval(timer); // Stop the timer when we reach 100\n              return prevPercentage;\n            }\n          });\n        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));\n        return () => clearInterval(timer);\n      }, 2000);\n      return () => clearTimeout(initialDelay);\n    }\n  }, [percentage]);\n  return <Fragment>\n      <div style={{\n      width: \"100%\",\n      maxWidth: \"500px\"\n    }}>\n        <ProgressBarComponent caption=\"One moment please...\" completed={percentage} percentage={percentage} {...args} />\n      </div>\n      {percentage === 100 && <div style={{\n      marginTop: \"3rem\"\n    }}>Finished loading!</div>}\n    </Fragment>;\n}"
    }, (_ProgressBar$paramete2 = ProgressBar_stories_ProgressBar.parameters) === null || _ProgressBar$paramete2 === void 0 || (_ProgressBar$paramete2 = _ProgressBar$paramete2.docs) === null || _ProgressBar$paramete2 === void 0 ? void 0 : _ProgressBar$paramete2.source)
  })
});
ProgressBarWithoutPercentage.parameters = _objectSpread(_objectSpread({}, ProgressBarWithoutPercentage.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ProgressBarWithoutPe = ProgressBarWithoutPercentage.parameters) === null || _ProgressBarWithoutPe === void 0 ? void 0 : _ProgressBarWithoutPe.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  const [percentage, setPercentage] = useState(0);\n  useEffect(() => {\n    // Delay for the first render for Chromatic to capture the initial state.\n    if (percentage === 0) {\n      const initialDelay = setTimeout(() => {\n        const timer = setInterval(() => {\n          setPercentage(prevPercentage => {\n            if (prevPercentage < 100) {\n              return prevPercentage + 1;\n            } else {\n              clearInterval(timer); // Stop the timer when we reach 100\n              return prevPercentage;\n            }\n          });\n        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));\n        return () => clearInterval(timer);\n      }, 2000);\n      return () => clearTimeout(initialDelay);\n    }\n  }, [percentage]);\n  return <Fragment>\n      <div style={{\n      width: \"100%\",\n      maxWidth: \"500px\"\n    }}>\n        <ProgressBarComponent caption=\"One moment please...\" completed={percentage} percentage={percentage} {...args} />\n      </div>\n      {percentage === 100 && <div style={{\n      marginTop: \"3rem\"\n    }}>Finished loading!</div>}\n    </Fragment>;\n}"
    }, (_ProgressBarWithoutPe2 = ProgressBarWithoutPercentage.parameters) === null || _ProgressBarWithoutPe2 === void 0 || (_ProgressBarWithoutPe2 = _ProgressBarWithoutPe2.docs) === null || _ProgressBarWithoutPe2 === void 0 ? void 0 : _ProgressBarWithoutPe2.source)
  })
});
var __namedExportsOrder = ["ProgressBar", "ProgressBarWithoutPercentage"];

/***/ })

}]);