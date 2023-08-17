"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1635],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: function() { return /* binding */ withMDXComponents; },
/* harmony export */   Zo: function() { return /* binding */ MDXProvider; },
/* harmony export */   ah: function() { return /* binding */ useMDXComponents; },
/* harmony export */   pC: function() { return /* binding */ MDXContext; }
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

/***/ "./stories/Typography/Typography.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Typography: function() { return /* binding */ Typography_stories_Typography; },
  TypographyBody: function() { return /* binding */ TypographyBody; },
  TypographyBodyBold: function() { return /* binding */ TypographyBodyBold; },
  TypographyCode: function() { return /* binding */ TypographyCode; },
  TypographyH2: function() { return /* binding */ TypographyH2; },
  TypographyH3: function() { return /* binding */ TypographyH3; },
  TypographyH4: function() { return /* binding */ TypographyH4; },
  TypographySubText: function() { return /* binding */ TypographySubText; },
  __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ Typography_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 64 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Typography/Typography.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    code: "code",
    pre: "pre",
    a: "a",
    h1: "h1"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The typography component helps present text content. It has styling defined for all kinds of uses. Text can be rendered within all valid HTML tags, regardless of the proper styling setting that should be used (e.g., text in div can be styled as an H1 element)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "font",
      children: "Font"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typography was designed to support any font you like. This can be changed by the configuration provided to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BaseStyling"
      }), " component. By default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Roboto"
      }), " font is set.\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Roboto"
      }), " is not automatically loaded. You are responsible for including font in your application."]
    }), "\n", (0,jsx_runtime.jsx)("table", {
      children: (0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsx)("tr", {
          children: (0,jsx_runtime.jsx)("th", {
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["NOTE: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "code block"
              }), " is the only exception that uses the font ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Roboto Mono"
              }), ". You only have to\ninclude it in your application if you use it."]
            })
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-fonts",
      children: "Google fonts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can take the HTML snippet beneath and put it in your application."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<link\n  href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap\"\n  rel=\"stylesheet\"\n/>\n<link href=\"https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap\" rel=\"stylesheet\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-with-npm",
      children: "Install with npm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively, you can install font as a dependency using npm to get the benefits of self-hosting fonts. Read ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/@fontsource/roboto",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "more"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "npm i @fontsource/roboto @fontsource/roboto-mono\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changing-default-font-size--font-family",
      children: "Changing default font-size & font-family"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<BaseStyling/>"
      }), " supports overwriting default properties. For Typography, these properties can be set:"]
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      children: [(0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "Property name"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Default value"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Description"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontFamily"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Roboto, sans-serif"
        }), (0,jsx_runtime.jsxs)("td", {
          children: ["Base font family used for all Typography's variants beside ", (0,jsx_runtime.jsx)(_components.code, {
            children: "code"
          })]
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontFamilyCode"
        }), (0,jsx_runtime.jsx)("td", {
          children: "'Roboto Mono', sans-serif"
        }), (0,jsx_runtime.jsxs)("td", {
          children: ["Font family used for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "code"
          }), " Typography variant"]
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSize"
        }), (0,jsx_runtime.jsx)("td", {
          children: "1rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Base font size used in Typography as well in other elements like buttons"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSizeH1"
        }), (0,jsx_runtime.jsx)("td", {
          children: "2.5rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Font size of Heading1 variant"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSizeH2"
        }), (0,jsx_runtime.jsx)("td", {
          children: "1.625rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Font size of Heading2 variant"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSizeH3"
        }), (0,jsx_runtime.jsx)("td", {
          children: "1.5rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Font size of Heading3 variant"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSizeH4"
        }), (0,jsx_runtime.jsx)("td", {
          children: "1.25rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Font size of Heading4 variant"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSizeSub"
        }), (0,jsx_runtime.jsx)("td", {
          children: "0.75rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Font size of Sub text variant"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: "fontSizeCode"
        }), (0,jsx_runtime.jsx)("td", {
          children: "1rem"
        }), (0,jsx_runtime.jsx)("td", {
          children: "Font size of Code variant"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "using-spacing",
      children: "Using spacing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Typography"
      }), " elements have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin-bottom"
      }), " property set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1rem"
      }), ". This can be changed by setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spacing"
      }), " property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Typography variant=\"h1\">Heading 1</Typography>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can see all the variants below:"
    }), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "h1",
      children: "Heading 1"
    }), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "h2",
      children: "Heading 2"
    }), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "h3",
      children: "Heading 3"
    }), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "h4",
      children: "Heading 4"
    }), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "body",
      children: "body"
    }), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "body-bold",
      children: "body-bold"
    }), "\n", (0,jsx_runtime.jsx)("code", {
      children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
        variant: "code",
        children: "code"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "sub-text",
      children: "sub-text"
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
/* harmony default export */ var Typography_Typography = (MDXContent);

;// CONCATENATED MODULE: ./stories/Typography/Typography.stories.tsx
var _Typography$parameter, _Typography$parameter2, _TypographyH2$paramet, _TypographyH2$paramet2, _TypographyH3$paramet, _TypographyH3$paramet2, _TypographyH4$paramet, _TypographyH4$paramet2, _TypographyBody$param, _TypographyBody$param2, _TypographyBodyBold$p, _TypographyBodyBold$p2, _TypographySubText$pa, _TypographySubText$pa2, _TypographyCode$param, _TypographyCode$param2;
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
  title: "components/Data Display/Typography",
  component: Typography/* Typography */.Z,
  parameters: {
    docs: {
      page: Typography_Typography
    }
  },
  argTypes: {
    variant: {
      options: Typography/* validVariants */.p,
      control: "select"
    }
  }
};
/* harmony default export */ var Typography_stories = (meta);
var Template = function Template(args) {
  return /*#__PURE__*/react.createElement(Typography/* Typography */.Z, args, "content");
};
var Typography_stories_Typography = Template.bind({});
Typography_stories_Typography.args = {
  variant: "h1"
};
var TypographyH2 = Template.bind({});
TypographyH2.args = {
  variant: "h2"
};
TypographyH2.storyName = "Typography H2";
var TypographyH3 = Template.bind({});
TypographyH3.args = {
  variant: "h3"
};
TypographyH3.storyName = "Typography H3";
var TypographyH4 = Template.bind({});
TypographyH4.args = {
  variant: "h4"
};
TypographyH4.storyName = "Typography H4";
var TypographyBody = Template.bind({});
TypographyBody.args = {
  variant: "body"
};
var TypographyBodyBold = Template.bind({});
TypographyBodyBold.args = {
  variant: "body-bold"
};
var TypographySubText = Template.bind({});
TypographySubText.args = {
  variant: "sub-text"
};
var TypographyCode = Template.bind({});
TypographyCode.args = {
  variant: "code"
};
Typography_stories_Typography.parameters = _objectSpread(_objectSpread({}, Typography_stories_Typography.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Typography$parameter = Typography_stories_Typography.parameters) === null || _Typography$parameter === void 0 ? void 0 : _Typography$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_Typography$parameter2 = Typography_stories_Typography.parameters) === null || _Typography$parameter2 === void 0 || (_Typography$parameter2 = _Typography$parameter2.docs) === null || _Typography$parameter2 === void 0 ? void 0 : _Typography$parameter2.source)
  })
});
TypographyH2.parameters = _objectSpread(_objectSpread({}, TypographyH2.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographyH2$paramet = TypographyH2.parameters) === null || _TypographyH2$paramet === void 0 ? void 0 : _TypographyH2$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographyH2$paramet2 = TypographyH2.parameters) === null || _TypographyH2$paramet2 === void 0 || (_TypographyH2$paramet2 = _TypographyH2$paramet2.docs) === null || _TypographyH2$paramet2 === void 0 ? void 0 : _TypographyH2$paramet2.source)
  })
});
TypographyH3.parameters = _objectSpread(_objectSpread({}, TypographyH3.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographyH3$paramet = TypographyH3.parameters) === null || _TypographyH3$paramet === void 0 ? void 0 : _TypographyH3$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographyH3$paramet2 = TypographyH3.parameters) === null || _TypographyH3$paramet2 === void 0 || (_TypographyH3$paramet2 = _TypographyH3$paramet2.docs) === null || _TypographyH3$paramet2 === void 0 ? void 0 : _TypographyH3$paramet2.source)
  })
});
TypographyH4.parameters = _objectSpread(_objectSpread({}, TypographyH4.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographyH4$paramet = TypographyH4.parameters) === null || _TypographyH4$paramet === void 0 ? void 0 : _TypographyH4$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographyH4$paramet2 = TypographyH4.parameters) === null || _TypographyH4$paramet2 === void 0 || (_TypographyH4$paramet2 = _TypographyH4$paramet2.docs) === null || _TypographyH4$paramet2 === void 0 ? void 0 : _TypographyH4$paramet2.source)
  })
});
TypographyBody.parameters = _objectSpread(_objectSpread({}, TypographyBody.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographyBody$param = TypographyBody.parameters) === null || _TypographyBody$param === void 0 ? void 0 : _TypographyBody$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographyBody$param2 = TypographyBody.parameters) === null || _TypographyBody$param2 === void 0 || (_TypographyBody$param2 = _TypographyBody$param2.docs) === null || _TypographyBody$param2 === void 0 ? void 0 : _TypographyBody$param2.source)
  })
});
TypographyBodyBold.parameters = _objectSpread(_objectSpread({}, TypographyBodyBold.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographyBodyBold$p = TypographyBodyBold.parameters) === null || _TypographyBodyBold$p === void 0 ? void 0 : _TypographyBodyBold$p.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographyBodyBold$p2 = TypographyBodyBold.parameters) === null || _TypographyBodyBold$p2 === void 0 || (_TypographyBodyBold$p2 = _TypographyBodyBold$p2.docs) === null || _TypographyBodyBold$p2 === void 0 ? void 0 : _TypographyBodyBold$p2.source)
  })
});
TypographySubText.parameters = _objectSpread(_objectSpread({}, TypographySubText.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographySubText$pa = TypographySubText.parameters) === null || _TypographySubText$pa === void 0 ? void 0 : _TypographySubText$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographySubText$pa2 = TypographySubText.parameters) === null || _TypographySubText$pa2 === void 0 || (_TypographySubText$pa2 = _TypographySubText$pa2.docs) === null || _TypographySubText$pa2 === void 0 ? void 0 : _TypographySubText$pa2.source)
  })
});
TypographyCode.parameters = _objectSpread(_objectSpread({}, TypographyCode.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_TypographyCode$param = TypographyCode.parameters) === null || _TypographyCode$param === void 0 ? void 0 : _TypographyCode$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => <TypographyComponent {...args}>content</TypographyComponent>"
    }, (_TypographyCode$param2 = TypographyCode.parameters) === null || _TypographyCode$param2 === void 0 || (_TypographyCode$param2 = _TypographyCode$param2.docs) === null || _TypographyCode$param2 === void 0 ? void 0 : _TypographyCode$param2.source)
  })
});
var __namedExportsOrder = ["Typography", "TypographyH2", "TypographyH3", "TypographyH4", "TypographyBody", "TypographyBodyBold", "TypographySubText", "TypographyCode"];

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

/***/ "./src/hooks/useSpacing.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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