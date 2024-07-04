(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[5726],{

/***/ "./node_modules/@storybook/addon-docs/dist/DocsRenderer-K4EAMTCU.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DocsRenderer: () => (/* reexport */ DocsRenderer)
});

// UNUSED EXPORTS: defaultComponents

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/react-dom-shim/dist/react-18.mjs
var react_18 = __webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 17 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs




var defaultComponents={code:dist/* CodeOrSourceMdx */.XA,a:dist/* AnchorMdx */.zE,...dist/* HeadersMdx */.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments);this.state={hasError:!1};}static getDerivedStateFromError(){return {hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err);}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist/* Docs */.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 1294).then(__webpack_require__.bind(__webpack_require__, "./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,react_18/* renderElement */.d)(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve());})},this.unmount=element=>{(0,react_18/* unmountElement */.H)(element);};}};



// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/chunk-GN5PWX3D.mjs
var chunk_GN5PWX3D = __webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-GN5PWX3D.mjs");
;// CONCATENATED MODULE: ./node_modules/@storybook/addon-docs/dist/DocsRenderer-K4EAMTCU.mjs




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