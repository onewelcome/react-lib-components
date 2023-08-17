"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[4379],{

/***/ "./node_modules/@storybook/addon-docs/dist/DocsRenderer-3PUGWF3O.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocsRenderer: function() { return /* reexport safe */ _chunk_S4VUQJ4A_mjs__WEBPACK_IMPORTED_MODULE_0__.r; }
/* harmony export */ });
/* harmony import */ var _chunk_S4VUQJ4A_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");



/***/ }),

/***/ "./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ DocsRenderer; }
/* harmony export */ });
/* unused harmony export defaultComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");




var defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .CodeOrSourceMdx */ .bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .AnchorMdx */ .Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .HeadersMdx */ .lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments);this.state={hasError:!1};}static getDerivedStateFromError(){return {hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err);}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__/* .Docs */ .WI;return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 9433).then(__webpack_require__.bind(__webpack_require__, "./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__/* .renderElement */ .l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve());})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__/* .unmountElement */ .K)(element);};}};




/***/ })

}]);