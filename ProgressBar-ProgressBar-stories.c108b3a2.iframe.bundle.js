(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[594],{

/***/ "./stories/ProgressBar/ProgressBar.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProgressBar: () => (/* binding */ ProgressBar_stories_ProgressBar),
  ProgressBarWithoutPercentage: () => (/* binding */ ProgressBarWithoutPercentage),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ProgressBar_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/ProgressBar/ProgressBar.tsx + 1 modules
var ProgressBar = __webpack_require__("./src/components/ProgressBar/ProgressBar.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
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
/* harmony default export */ const ProgressBar_ProgressBar = (MDXContent);

;// CONCATENATED MODULE: ./stories/ProgressBar/ProgressBar.stories.tsx
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
  title: "components/Feedback/ProgressBar",
  component: ProgressBar/* ProgressBar */.k,
  parameters: {
    docs: {
      page: ProgressBar_ProgressBar
    }
  }
};
/* harmony default export */ const ProgressBar_stories = (meta);
const Template = args => {
  const [percentage, setPercentage] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    // Delay for the first render for Chromatic to capture the initial state.
    if (percentage === 0) {
      const initialDelay = setTimeout(() => {
        const timer = setInterval(() => {
          setPercentage(prevPercentage => {
            if (prevPercentage < 100) {
              return prevPercentage + 1;
            } else {
              clearInterval(timer); // Stop the timer when we reach 100
              return prevPercentage;
            }
          });
        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));
        return () => clearInterval(timer);
      }, 2000);
      return () => clearTimeout(initialDelay);
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
const ProgressBar_stories_ProgressBar = Template.bind({});
ProgressBar_stories_ProgressBar.args = {
  label: "Loading..."
};
const ProgressBarWithoutPercentage = Template.bind({});
ProgressBarWithoutPercentage.args = {
  label: "Loading...",
  percentage: undefined,
  completed: undefined
};
ProgressBar_stories_ProgressBar.parameters = {
  ...ProgressBar_stories_ProgressBar.parameters,
  docs: {
    ...ProgressBar_stories_ProgressBar.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [percentage, setPercentage] = useState(0);\n  useEffect(() => {\n    // Delay for the first render for Chromatic to capture the initial state.\n    if (percentage === 0) {\n      const initialDelay = setTimeout(() => {\n        const timer = setInterval(() => {\n          setPercentage(prevPercentage => {\n            if (prevPercentage < 100) {\n              return prevPercentage + 1;\n            } else {\n              clearInterval(timer); // Stop the timer when we reach 100\n              return prevPercentage;\n            }\n          });\n        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));\n        return () => clearInterval(timer);\n      }, 2000);\n      return () => clearTimeout(initialDelay);\n    }\n  }, [percentage]);\n  return <Fragment>\n      <div style={{\n      width: \"100%\",\n      maxWidth: \"500px\"\n    }}>\n        <ProgressBarComponent caption=\"One moment please...\" completed={percentage} percentage={percentage} {...args} />\n      </div>\n      {percentage === 100 && <div style={{\n      marginTop: \"3rem\"\n    }}>Finished loading!</div>}\n    </Fragment>;\n}",
      ...ProgressBar_stories_ProgressBar.parameters?.docs?.source
    }
  }
};
ProgressBarWithoutPercentage.parameters = {
  ...ProgressBarWithoutPercentage.parameters,
  docs: {
    ...ProgressBarWithoutPercentage.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [percentage, setPercentage] = useState(0);\n  useEffect(() => {\n    // Delay for the first render for Chromatic to capture the initial state.\n    if (percentage === 0) {\n      const initialDelay = setTimeout(() => {\n        const timer = setInterval(() => {\n          setPercentage(prevPercentage => {\n            if (prevPercentage < 100) {\n              return prevPercentage + 1;\n            } else {\n              clearInterval(timer); // Stop the timer when we reach 100\n              return prevPercentage;\n            }\n          });\n        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));\n        return () => clearInterval(timer);\n      }, 2000);\n      return () => clearTimeout(initialDelay);\n    }\n  }, [percentage]);\n  return <Fragment>\n      <div style={{\n      width: \"100%\",\n      maxWidth: \"500px\"\n    }}>\n        <ProgressBarComponent caption=\"One moment please...\" completed={percentage} percentage={percentage} {...args} />\n      </div>\n      {percentage === 100 && <div style={{\n      marginTop: \"3rem\"\n    }}>Finished loading!</div>}\n    </Fragment>;\n}",
      ...ProgressBarWithoutPercentage.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ProgressBar","ProgressBarWithoutPercentage"];

/***/ }),

/***/ "./node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ })

}]);