"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[8735],{

/***/ "./node_modules/@storybook/react-dom-shim/dist/react-18.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderElement: () => (/* binding */ renderElement),
/* harmony export */   unmountElement: () => (/* binding */ unmountElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/client.js");



var nodes=new Map;function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var WithCallback=({callback,children})=>{let once=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>{once.current!==callback&&(once.current=callback,callback());},[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return {promise:new Promise((res,rej)=>{resolve=res,reject=rej;}),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(getIsReactActEnvironment()){root.render(node);return}let{promise,resolve}=Promise.withResolvers();return root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithCallback,{callback:resolve},node)),promise},unmountElement=(el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el));},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=react_dom_client__WEBPACK_IMPORTED_MODULE_1__/* .createRoot */ .H(el,rootOptions),nodes.set(el,root)),root};




/***/ }),

/***/ "./node_modules/react-dom/client.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__("./node_modules/react-dom/index.js");
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ })

}]);