"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4066],{

/***/ "./stories/Pagination/Pagination.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pagination": function() { return /* binding */ Pagination_stories_Pagination; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
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
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Pagination/Pagination.mdx



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
          children: "const ExampleComponent = () => {\n  const [currentPage, setCurrentPage] = useState(0);\n  const [totalElements, setTotalElements] = useState(100);\n  const [pageSize, setPageSize] = useState(10)\n\n  const onPageChange = (action: 'first' | 'previous' | 'next', 'last') => {\n    switch(action) {\n      case 'first':\n        setCurrentPage(0);\n      case 'previous':\n        setCurrentPage(currPage => currPage - 1);\n      case: 'next':\n        setCurrentPage(currPage => currPage + 1);\n      case: 'last':\n        setCurrentPage(totalElements / pageSize);\n    }\n  }\n\n  <Pagination\n    currentPage={currentPage}\n    totalElements={totalElements}\n    pageSize={pageSize}\n    onCurrentPageChange={(pageNumber: number) => setCurrentPage(pageNumber)}\n    onPageChange={(pageChangeAction: 'first' | 'previous' | 'next', 'last') => onPageChange(pageChangeAction)}\n    onPageSizeChange={(pageSize: 10 | 25 | 50) => setPageSize(pageSize)}\n     />\n}\n"
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
}
/* harmony default export */ var Pagination_Pagination = (MDXContent);

;// CONCATENATED MODULE: ./stories/Pagination/Pagination.stories.tsx
var _Pagination$parameter, _Pagination$parameter2, _Pagination$parameter3;
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
  return /*#__PURE__*/react.createElement("div", {
    style: {
      maxWidth: "800px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react.createElement(Pagination/* Pagination */.t, args));
};
var Pagination_stories_Pagination = Template.bind({});
Pagination_stories_Pagination.args = {
  currentPage: 1,
  pageSize: 10,
  totalElements: 1000,
  translate: {
    totalItems: "Total items",
    itemsPerPage: "Items per page",
    itemsPerPageLabel: "Select how many items per page you want to see.",
    currentPage: "Page %1 of %2",
    currentPageLabel: "What page you are currently on."
  }
};
Pagination_stories_Pagination.parameters = _objectSpread(_objectSpread({}, Pagination_stories_Pagination.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Pagination$parameter = Pagination_stories_Pagination.parameters) === null || _Pagination$parameter === void 0 ? void 0 : _Pagination$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <div style={{\n  maxWidth: \"800px\",\n  margin: \"0 auto\"\n}}>\n    <PaginationComponent {...args} />\n  </div>"
    }, (_Pagination$parameter2 = Pagination_stories_Pagination.parameters) === null || _Pagination$parameter2 === void 0 ? void 0 : (_Pagination$parameter3 = _Pagination$parameter2.docs) === null || _Pagination$parameter3 === void 0 ? void 0 : _Pagination$parameter3.source)
  })
});
var __namedExportsOrder = ["Pagination"];

/***/ })

}]);