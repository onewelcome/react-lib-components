"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7953],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF": function() { return /* binding */ withMDXComponents; },
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "ah": function() { return /* binding */ useMDXComponents; },
/* harmony export */   "pC": function() { return /* binding */ MDXContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./stories/Form/Elements/FileItem.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FileItemCompleted": function() { return /* binding */ FileItemCompleted; },
  "FileItemError": function() { return /* binding */ FileItemError; },
  "FileItemProgress": function() { return /* binding */ FileItemProgress; },
  "FileItemReadOnly": function() { return /* binding */ FileItemReadOnly; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ FileItem_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.tsx + 1 modules
var FileItem = __webpack_require__("./src/components/Form/FileUpload/FileItem/FileItem.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/FileItem.mdx



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
      h1: "h1"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "File Item component was created to encapsulate the styles reserved for file items, in a file list It\nreceives the following props:"
      }), "\n", (0,jsx_runtime.jsxs)("ul", {
        children: [(0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "name"
            }), " -> File Name, as is saved or selected from a file selector"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "status"
            }), " -> The uploading status of the file"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "progress"
            }), " -> The progress of the uploading file"]
          })
        }), (0,jsx_runtime.jsx)("li", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "error"
            }), " -> A text containing the error a file can contain"]
          })
        }), (0,jsx_runtime.jsxs)("li", {
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "onRequestFileAction"
            }), " -> A callback to be used when a user clicks on an action\nbutton, at the right of the file item component The callback will receive the following params:"]
          }), (0,jsx_runtime.jsxs)("ol", {
            children: [(0,jsx_runtime.jsx)("li", {
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["action -> represents a string with the following possible values: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "delete"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "remove"
                }), ",\n", (0,jsx_runtime.jsx)(_components.code, {
                  children: "abort"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "retry"
                })]
              })
            }), (0,jsx_runtime.jsx)("li", {
              children: "name -> file name"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "props",
        children: "Props"
      }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.Ed, {
        story: dist/* PRIMARY_STORY */.Uh
      })]
    });
  }
}
/* harmony default export */ var Elements_FileItem = (MDXContent);

;// CONCATENATED MODULE: ./stories/Form/Elements/FileItem.stories.tsx
var _FileItemCompleted$pa, _FileItemCompleted$pa2, _FileItemCompleted$pa3, _FileItemError$parame, _FileItemError$parame2, _FileItemError$parame3, _FileItemProgress$par, _FileItemProgress$par2, _FileItemProgress$par3, _FileItemReadOnly$par, _FileItemReadOnly$par2, _FileItemReadOnly$par3;
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
  title: "components/Inputs/FileUpload/FileItem",
  component: FileItem/* FileItem */.j,
  parameters: {
    docs: {
      page: Elements_FileItem
    }
  },
  argTypes: {
    name: {
      control: {
        type: "text"
      }
    },
    status: {
      options: ["uploading", "completed", "error", "readonly", "retry"],
      control: {
        type: "select"
      }
    },
    error: {
      control: {
        type: "text"
      }
    }
  }
};
/* harmony default export */ var FileItem_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(FileItem/* FileItem */.j, args);
};
var FileItemCompleted = Template.bind({});
FileItemCompleted.args = {
  name: "test.txt",
  status: "completed"
};
var FileItemError = Template.bind({});
FileItemError.args = {
  name: "test.txt",
  status: "error",
  error: "The maximum allowed file size is 2MB. Upload a smaller file."
};
var FileItemProgress = Template.bind({});
FileItemProgress.args = {
  name: "test.txt",
  status: "uploading",
  progress: 50
};
var FileItemReadOnly = Template.bind({});
FileItemReadOnly.args = {
  name: "test.txt",
  status: "readonly"
};
FileItemCompleted.parameters = _objectSpread(_objectSpread({}, FileItemCompleted.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemCompleted$pa = FileItemCompleted.parameters) === null || _FileItemCompleted$pa === void 0 ? void 0 : _FileItemCompleted$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemCompleted$pa2 = FileItemCompleted.parameters) === null || _FileItemCompleted$pa2 === void 0 ? void 0 : (_FileItemCompleted$pa3 = _FileItemCompleted$pa2.docs) === null || _FileItemCompleted$pa3 === void 0 ? void 0 : _FileItemCompleted$pa3.source)
  })
});
FileItemError.parameters = _objectSpread(_objectSpread({}, FileItemError.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemError$parame = FileItemError.parameters) === null || _FileItemError$parame === void 0 ? void 0 : _FileItemError$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemError$parame2 = FileItemError.parameters) === null || _FileItemError$parame2 === void 0 ? void 0 : (_FileItemError$parame3 = _FileItemError$parame2.docs) === null || _FileItemError$parame3 === void 0 ? void 0 : _FileItemError$parame3.source)
  })
});
FileItemProgress.parameters = _objectSpread(_objectSpread({}, FileItemProgress.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemProgress$par = FileItemProgress.parameters) === null || _FileItemProgress$par === void 0 ? void 0 : _FileItemProgress$par.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemProgress$par2 = FileItemProgress.parameters) === null || _FileItemProgress$par2 === void 0 ? void 0 : (_FileItemProgress$par3 = _FileItemProgress$par2.docs) === null || _FileItemProgress$par3 === void 0 ? void 0 : _FileItemProgress$par3.source)
  })
});
FileItemReadOnly.parameters = _objectSpread(_objectSpread({}, FileItemReadOnly.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_FileItemReadOnly$par = FileItemReadOnly.parameters) === null || _FileItemReadOnly$par === void 0 ? void 0 : _FileItemReadOnly$par.docs), {}, {
    source: _objectSpread({
      originalSource: "args => {\n  return <FileItem {...args} />;\n}"
    }, (_FileItemReadOnly$par2 = FileItemReadOnly.parameters) === null || _FileItemReadOnly$par2 === void 0 ? void 0 : (_FileItemReadOnly$par3 = _FileItemReadOnly$par2.docs) === null || _FileItemReadOnly$par3 === void 0 ? void 0 : _FileItemReadOnly$par3.source)
  })
});
var __namedExportsOrder = ["FileItemCompleted", "FileItemError", "FileItemProgress", "FileItemReadOnly"];

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);