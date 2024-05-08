(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4772],{

/***/ "./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ DocsRenderer)
/* harmony export */ });
/* unused harmony export defaultComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");




var defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .CodeOrSourceMdx */ .XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .AnchorMdx */ .zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .HeadersMdx */ .Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments);this.state={hasError:!1};}static getDerivedStateFromError(){return {hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err);}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .Docs */ .kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 8109).then(__webpack_require__.bind(__webpack_require__, "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__/* .renderElement */ .d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve());})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__/* .unmountElement */ .H)(element);};}};




/***/ }),

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
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

/***/ "./stories/hooks/usePosition.stories.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  __page: () => (/* binding */ __page),
  "default": () => (/* binding */ usePosition_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs
var chunk_HLWAVYOI = __webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-docs/dist/index.mjs



// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./stories/hooks/usePosition.stories.mdx








function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    ul: "ul",
    li: "li",
    code: "code",
    a: "a",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "Hooks/usePosition",
      parameters: {
        viewMode: "docs",
        previewTabs: {
          canvas: {
            hidden: true
          }
        }
      }
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h1, {
      id: "useposition",
      children: "usePosition"
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
      children: "This hook places items somewhere on the viewport relative to a certain element. To use this hook, you will need to check the following:"
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need to have a React ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), " with the relative element."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["You need to have a React ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), " with the element to be positioned."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["You might want to use ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "React.Portal"
        }), " to move the element to be positioned to the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "document.body"
        }), " because the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "transform"
        }), " property of a parent in the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "DOM"
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: ["can mess up ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
            children: "position: fixed"
          })]
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make sure the element to be positioned has ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "position: fixed"
        }), " css property."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pass the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "top"
        }), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "right"
        }), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "bottom"
        }), " and ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "left"
        }), " values as the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "top"
        }), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "right"
        }), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "bottom"
        }), " and ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "left"
        }), " properties as ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "style"
        }), " on the element to be positioned."]
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
        href: "#examples",
        children: "See the example for practical application"
      })
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
      children: ["If all of these conditions are met, you can use the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
        children: "usePosition"
      }), " hook by importing it from the component library and executing it."]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
      children: "Below you will find all of the args of the hook."
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Prop name"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Type"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Default"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Description"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "relativeElement"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "Ref<HTMLElement>"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "undefined"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
          children: ["The relative element that is grabbed by placing a ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
            children: "ref"
          }), " prop on an element in your JSX, storing it in a ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
            children: "React.useRef"
          }), " hook."]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "elementToBePositioned"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "Ref<HTMLElement>"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "undefined"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
          children: ["The element to be positioned relatively by placing a ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
            children: "ref"
          }), " prop on an element in your JSX, storing it in a ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
            children: "React.useRef"
          }), " hook."]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "placement"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{ ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  horizontal: 'start' | 'center' | 'end', ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  vertical: 'top' | 'center' | 'bottom'", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " }"]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{ ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  horizontal: 'start',", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  vertical: 'top'", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "}"]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Where you want to place the element to be positioned in relation to the relative element."
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "transformOrigin"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{ ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  horizontal: 'start' | 'center' | 'end', ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  vertical: 'top' | 'center' | 'bottom'", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " }"]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{ ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  horizontal: 'start',", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  vertical: 'top'", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "}"]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "The position you want to place the element to be positioned from."
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "offset"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{ ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  top: number, ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  right: number", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  bottom: number", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  left: number", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "}"]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{ ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  top: 0, ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  right: 0", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  bottom: 0", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "  left: 0", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "}"]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "What offset you want to create, and from which direction (in pixels)."
        })]
      })]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h1, {
      id: "return-values",
      children: "Return values"
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
        children: "usePosition"
      }), " hook takes 5 arguments, and gives back 5 variables ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "you can extract using destructuring assignment"
      }), "."]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Return value"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Type"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Default"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "Description"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "top"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "number"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "The top value in px"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "right"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "number"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "The right value in px"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "bottom"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "number"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "The bottom value in px"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "left"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "number"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "The left value in px"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "calculatePosition"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
            children: "function"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: "undefined"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
            children: ["Execute this function when you want to calculate the position using the arguments passed in\nthe ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
              children: "usePosition"
            }), " hook"]
          })
        })]
      })]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can play around with the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
        children: "usePosition"
      }), " API ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
        href: "/story/components-navigation-contextmenu--context-menu",
        children: "in the ContextMenu story"
      }), ". An example component of the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
        children: "usePosition"
      }), " hook can be found below:"]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import React, {(useEffect, useRef)} from \"react\"; import {\n  (Icon, IconButton, Icons, usePosition)\n} from \"@onewelcome/react-lib-components\";\n\nconst ExampleComponent = () => {\n  const relativeElement = useRef(null);\n  const elToBePositioned = useRef(null);\n\n  const { top, right, bottom, left, calculatePosition } = usePosition({\n      relativeElement: relativeElement,\n      elementToBePositioned: elToBePositioned,\n      placement: { horizontal: \"right\", vertical: \"bottom\" },\n      transformOrigin: { horizontal: \"left\", vertical: \"top\" },\n      offset: { top: 0, right: 0, bottom: 0, left: 0 },\n  });\n\n  useEffect(() => {\n      if (relativeElement.current && elToBePositioned.current) {\n          calculatePosition();\n      }\n  }, [relativeElement, elToBePositioned]);\n\n  return (\n      <div>\n          <IconButton\n              onClick={calculatePosition}\n              color=\"tertiary\"\n              ref={relativeElement}\n              title=\"Open the popup\">\n              <Icon icon={Icons.Bell} />\n          </IconButton>\n          <div\n              ref={elToBePositioned}\n              style={{\n                  position: \"fixed\",\n                  top: top,\n                  right: right,\n                  bottom: bottom,\n                  left: left,\n                  backgroundColor: \"var(--color-secondary)\",\n                  padding: \"0.5rem\",\n                  fontSize: \"1rem\",\n              }}>\n              This is the thing we are going to be positioning\n          </div>\n      </div>\n  );\n};\n\nexport default ExampleComponent;\n"
      })
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the above example we create a component with the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
        children: "usePosition"
      }), " hook."]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["First, we declare the two ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), "s."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["Then, we execute the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "usePosition"
        }), " hook, pass the correct config object and extract the values it returns."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["Then, we execute a ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), " to immediately calculate the position of the element to be positioned as soon as the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "useRef"
        }), "s are filled."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["Then, we return the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "JSX"
        }), " with the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "IconButton"
        }), " as ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "relativeElement"
        }), " and the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "div"
        }), " below it as ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "elementToBePositioned"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make sure to pass ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "position: fixed"
        }), " and the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "top"
        }), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "right"
        }), ", ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "bottom"
        }), " and ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "left"
        }), " values you receive from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "usePosition"
        }), " to the ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "elementToBePositioned"
        }), "."]
      }), "\n"]
    }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
      children: "All done, this should work now."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
/* ========= */
const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: 'Hooks/usePosition',
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: {
        hidden: true
      }
    }
  },
  tags: ['stories-mdx'],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const usePosition_stories = (componentMeta);;const __namedExportsOrder = ["__page"];

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

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);