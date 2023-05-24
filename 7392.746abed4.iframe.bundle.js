"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[7392],{

/***/ "./src/components/Form/FileUpload/FileItem/FileItem.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": function() { return /* binding */ FILE_ACTION; },
  "j": function() { return /* binding */ FileItem; }
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.modules.scss
var FileItem_modules = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.modules.scss");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.modules.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FileItem_modules/* default */.Z, options);




       /* harmony default export */ var FileItem_FileItem_modules = (FileItem_modules/* default */.Z && FileItem_modules/* default.locals */.Z.locals ? FileItem_modules/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Typography/Typography.tsx + 1 modules
var Typography = __webpack_require__("./src/components/Typography/Typography.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/components/ProgressBar/ProgressBar.tsx + 1 modules
var ProgressBar = __webpack_require__("./src/components/ProgressBar/ProgressBar.tsx");
;// CONCATENATED MODULE: ./src/components/Form/FileUpload/FileItem/FileItem.tsx
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






var FILE_ACTION = /*#__PURE__*/function (FILE_ACTION) {
  FILE_ACTION["DELETE"] = "delete";
  FILE_ACTION["REMOVE"] = "remove";
  FILE_ACTION["ABORT"] = "abort";
  FILE_ACTION["RETRY"] = "retry";
  return FILE_ACTION;
}({});
var FileItemComponent = function FileItemComponent(_ref, ref) {
  var name = _ref.name,
    status = _ref.status,
    error = _ref.error,
    progress = _ref.progress,
    onRequestedFileAction = _ref.onRequestedFileAction;
  var determineIcons = function determineIcons(status) {
    switch (status) {
      case "completed":
        return {
          fileIcon: Icon/* Icons.FileOutline */.P.FileOutline,
          actionIcon: {
            type: Icon/* Icons.Trash */.P.Trash,
            action: FILE_ACTION.DELETE
          }
        };
      case "error":
        return {
          fileIcon: Icon/* Icons.InfoCircle */.P.InfoCircle,
          actionIcon: {
            type: Icon/* Icons.Times */.P.Times,
            action: FILE_ACTION.REMOVE
          }
        };
      case "uploading":
        return {
          fileIcon: Icon/* Icons.FileUpload */.P.FileUpload,
          actionIcon: {
            type: Icon/* Icons.Times */.P.Times,
            action: FILE_ACTION.ABORT
          }
        };
      case "retry":
        return {
          fileIcon: Icon/* Icons.InfoCircle */.P.InfoCircle,
          actionIcon: {
            type: Icon/* Icons.Refresh */.P.Refresh,
            action: FILE_ACTION.RETRY
          }
        };
      case "readonly":
      default:
        return {
          fileIcon: Icon/* Icons.FileOutline */.P.FileOutline
        };
    }
  };
  var icons = determineIcons(status);
  var getFriendlyNameAndExtension = function getFriendlyNameAndExtension(name) {
    var index = name.indexOf(".");
    return {
      friendlyName: name.slice(0, index),
      extension: name.slice(index + 1)
    };
  };
  var _getFriendlyNameAndEx = getFriendlyNameAndExtension(name),
    friendlyName = _getFriendlyNameAndEx.friendlyName,
    extension = _getFriendlyNameAndEx.extension;
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: FileItem_FileItem_modules["file-item-wrapper"],
    "aria-label": "".concat(name, "-wrapper")
  }, /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "body",
    title: name,
    className: "".concat(FileItem_FileItem_modules["file-name"], " ").concat(status ? FileItem_FileItem_modules[status] : "")
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: icons.fileIcon,
    className: FileItem_FileItem_modules["file-icon"]
  }), /*#__PURE__*/react.createElement("span", {
    className: FileItem_FileItem_modules["friendly-name"]
  }, friendlyName), ".", /*#__PURE__*/react.createElement("span", null, extension), icons.actionIcon && /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    title: icons.actionIcon.action,
    icon: icons.actionIcon.type,
    className: FileItem_FileItem_modules["action-icon"],
    onClick: function onClick() {
      return icons.actionIcon && onRequestedFileAction && onRequestedFileAction(icons.actionIcon.action, name);
    }
  })), error && /*#__PURE__*/react.createElement(Typography/* Typography */.Z, {
    variant: "sub-text",
    className: "".concat(FileItem_FileItem_modules["file-subtitle"], " ").concat(status ? FileItem_FileItem_modules[status] : "")
  }, error), status === "uploading" ? /*#__PURE__*/react.createElement(ProgressBar/* ProgressBar */.k, {
    className: FileItem_FileItem_modules["progress-bar"],
    placeholderText: "",
    completed: progress
  }) : "");
};
var FileItem = /*#__PURE__*/react.forwardRef(FileItemComponent);
try {
    // @ts-ignore
    FileItem.displayName = "FileItem";
    // @ts-ignore
    FileItem.__docgenInfo = { "description": "", "displayName": "FileItem", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "progress": { "defaultValue": null, "description": "", "name": "progress", "required": false, "type": { "name": "number" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": false, "type": { "name": "enum", "value": [{ "value": "\"error\"" }, { "value": "\"completed\"" }, { "value": "\"uploading\"" }, { "value": "\"readonly\"" }, { "value": "\"retry\"" }] } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "string" } }, "onRequestedFileAction": { "defaultValue": null, "description": "", "name": "onRequestedFileAction", "required": false, "type": { "name": "((action: FILE_ACTION, name: string) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/FileUpload/FileItem/FileItem.tsx#FileItem"] = { docgenInfo: FileItem.__docgenInfo, name: "FileItem", path: "src/components/Form/FileUpload/FileItem/FileItem.tsx#FileItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/FileUpload/FileItem/FileItem.modules.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FileItem-modules__sr-only--O1Dgl{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.FileItem-modules__hidden--QB9Vz{display:none}.FileItem-modules__slide-in--FW0wO{animation:FileItem-modules__slide-in--FW0wO .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-modules__slide-in--FW0wO{animation-duration:.1ms}}.FileItem-modules__slide-out--VglXR{animation:FileItem-modules__slide-out--VglXR .5s forwards}@media(prefers-reduced-motion: reduce){.FileItem-modules__slide-out--VglXR{animation-duration:.1ms}}@keyframes FileItem-modules__slide-in--FW0wO{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes FileItem-modules__slide-out--VglXR{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.FileItem-modules__w-6--UP1vy{width:6%}.FileItem-modules__w-7--kWJMM{width:7%}.FileItem-modules__w-8--VVXZT{width:8%}.FileItem-modules__w-9--Nrvix{width:9%}.FileItem-modules__w-10--y0WI1{width:10%}.FileItem-modules__w-11--mporU{width:11%}.FileItem-modules__w-12--GWGeq{width:12%}.FileItem-modules__w-13--JYrln{width:13%}.FileItem-modules__w-14--V6N4u{width:14%}.FileItem-modules__w-15--wfXVn{width:15%}.FileItem-modules__w-16--Fkf0G{width:16%}.FileItem-modules__w-17--QHX2Z{width:17%}.FileItem-modules__w-18--yFXAc{width:18%}.FileItem-modules__w-19--kmn7W{width:19%}.FileItem-modules__w-20--j7mRv{width:20%}.FileItem-modules__w-21--XUc7C{width:21%}.FileItem-modules__w-22--omRTI{width:22%}.FileItem-modules__w-23--X84Lm{width:23%}.FileItem-modules__w-24--ZbTnM{width:24%}.FileItem-modules__w-25--hy70E{width:25%}.FileItem-modules__w-26--ZU11F{width:26%}.FileItem-modules__w-27--fLRtr{width:27%}.FileItem-modules__w-28--M5wo0{width:28%}.FileItem-modules__w-29--H7voX{width:29%}.FileItem-modules__w-30--UG4fj{width:30%}.FileItem-modules__w-31--V3m2e{width:31%}.FileItem-modules__w-32--poJ7q{width:32%}.FileItem-modules__w-33--X3LSa{width:33%}.FileItem-modules__w-34--zDEw_{width:34%}.FileItem-modules__w-35--gon0j{width:35%}.FileItem-modules__w-36--IY3ZX{width:36%}.FileItem-modules__w-37--OVv2y{width:37%}.FileItem-modules__w-38--x9DQl{width:38%}.FileItem-modules__w-39--hgFmc{width:39%}.FileItem-modules__w-40--O15d2{width:40%}.FileItem-modules__w-41--DHurX{width:41%}.FileItem-modules__w-42--E_wrC{width:42%}.FileItem-modules__w-43--pkSce{width:43%}.FileItem-modules__w-44--UhYZx{width:44%}.FileItem-modules__w-45--fFryO{width:45%}.FileItem-modules__w-46--wylAm{width:46%}.FileItem-modules__w-47--RyEtf{width:47%}.FileItem-modules__w-48--hLb7n{width:48%}.FileItem-modules__w-49--ypCN9{width:49%}.FileItem-modules__w-50--U8Nmd{width:50%}.FileItem-modules__w-51--cShEn{width:51%}.FileItem-modules__w-52--A5MQI{width:52%}.FileItem-modules__w-53--cvkPh{width:53%}.FileItem-modules__w-54--HC7Sb{width:54%}.FileItem-modules__w-55--QugYM{width:55%}.FileItem-modules__w-56--VLObJ{width:56%}.FileItem-modules__w-57--znCv3{width:57%}.FileItem-modules__w-58--dREG9{width:58%}.FileItem-modules__w-59--ZTzvy{width:59%}.FileItem-modules__w-60--jrf41{width:60%}.FileItem-modules__w-61--lO3ZL{width:61%}.FileItem-modules__w-62--Gdw53{width:62%}.FileItem-modules__w-63--iG1jv{width:63%}.FileItem-modules__w-64--YgqB_{width:64%}.FileItem-modules__w-65--uPZNz{width:65%}.FileItem-modules__w-66--mWbRD{width:66%}.FileItem-modules__w-67--naDOz{width:67%}.FileItem-modules__w-68--m0xJF{width:68%}.FileItem-modules__w-69--VGi5t{width:69%}.FileItem-modules__w-70--W5x2J{width:70%}.FileItem-modules__w-71--UbK4I{width:71%}.FileItem-modules__w-72--p6_Q7{width:72%}.FileItem-modules__w-73--mGpba{width:73%}.FileItem-modules__w-74--n7qhM{width:74%}.FileItem-modules__w-75--_6fS1{width:75%}.FileItem-modules__w-76--LOyFM{width:76%}.FileItem-modules__w-77--ExhI5{width:77%}.FileItem-modules__w-78--Xvqhv{width:78%}.FileItem-modules__w-79--fYmq9{width:79%}.FileItem-modules__w-80--MLHKc{width:80%}.FileItem-modules__w-81--wNZ0X{width:81%}.FileItem-modules__w-82--oiZw0{width:82%}.FileItem-modules__w-83--ooLgW{width:83%}.FileItem-modules__w-84--NK8jE{width:84%}.FileItem-modules__w-85--LZvs5{width:85%}.FileItem-modules__w-86--e48uR{width:86%}.FileItem-modules__w-87--TVInn{width:87%}.FileItem-modules__w-88--595uL{width:88%}.FileItem-modules__w-89--Ug7Qh{width:89%}.FileItem-modules__w-90--p7TM9{width:90%}.FileItem-modules__w-91--N4vRn{width:91%}.FileItem-modules__w-92--wfmB_{width:92%}.FileItem-modules__w-93--UxCjd{width:93%}.FileItem-modules__w-94--Bh4RK{width:94%}.FileItem-modules__w-95--Qg6Oz{width:95%}.FileItem-modules__w-96--TLM0F{width:96%}.FileItem-modules__w-97--wdsLG{width:97%}.FileItem-modules__w-98--ogEG7{width:98%}.FileItem-modules__w-99--vAn5K{width:99%}.FileItem-modules__w-100--fLHTy{width:100%}.FileItem-modules__w-101--aXhvy{width:101%}.FileItem-modules__w-102--DczHA{width:102%}.FileItem-modules__w-103--D2Wh7{width:103%}.FileItem-modules__w-104--bzOLk{width:104%}.FileItem-modules__w-105--bPUnF{width:105%}.FileItem-modules__file-item-wrapper--VFQe3{padding:.5rem 1.25rem;border-radius:var(--input-border-radius);background-color:var(--input-background-color);transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.FileItem-modules__file-item-wrapper--VFQe3{transition-duration:.1ms}}.FileItem-modules__file-item-wrapper--VFQe3 [class*=icon]{font-size:1.25rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__progress-bar--Oqnj0{background-color:var(--color-black10)}.FileItem-modules__file-item-wrapper--VFQe3 span[class*=bar--]{border-radius:var(--input-border-radius);height:1rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-name--DDN1v{margin:0;display:flex;align-items:center}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-name--DDN1v .FileItem-modules__friendly-name--Sdhg8{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__action-icon--FlRKH{margin-left:auto;color:var(--color-primary);cursor:pointer;padding-left:1.25rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-icon--ItS59{margin-right:.5rem}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__file-subtitle--to11y,.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__progress-bar--Oqnj0{display:block;margin:.3125rem 1.75rem;padding:0}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__error--_vK3r,.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__retry--_p7UI{color:var(--error)}.FileItem-modules__file-item-wrapper--VFQe3 .FileItem-modules__readonly--pfCYa{color:var(--greyed-out)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "FileItem-modules__sr-only--O1Dgl",
	"hidden": "FileItem-modules__hidden--QB9Vz",
	"slide-in": "FileItem-modules__slide-in--FW0wO",
	"slide-out": "FileItem-modules__slide-out--VglXR",
	"w-6": "FileItem-modules__w-6--UP1vy",
	"w-7": "FileItem-modules__w-7--kWJMM",
	"w-8": "FileItem-modules__w-8--VVXZT",
	"w-9": "FileItem-modules__w-9--Nrvix",
	"w-10": "FileItem-modules__w-10--y0WI1",
	"w-11": "FileItem-modules__w-11--mporU",
	"w-12": "FileItem-modules__w-12--GWGeq",
	"w-13": "FileItem-modules__w-13--JYrln",
	"w-14": "FileItem-modules__w-14--V6N4u",
	"w-15": "FileItem-modules__w-15--wfXVn",
	"w-16": "FileItem-modules__w-16--Fkf0G",
	"w-17": "FileItem-modules__w-17--QHX2Z",
	"w-18": "FileItem-modules__w-18--yFXAc",
	"w-19": "FileItem-modules__w-19--kmn7W",
	"w-20": "FileItem-modules__w-20--j7mRv",
	"w-21": "FileItem-modules__w-21--XUc7C",
	"w-22": "FileItem-modules__w-22--omRTI",
	"w-23": "FileItem-modules__w-23--X84Lm",
	"w-24": "FileItem-modules__w-24--ZbTnM",
	"w-25": "FileItem-modules__w-25--hy70E",
	"w-26": "FileItem-modules__w-26--ZU11F",
	"w-27": "FileItem-modules__w-27--fLRtr",
	"w-28": "FileItem-modules__w-28--M5wo0",
	"w-29": "FileItem-modules__w-29--H7voX",
	"w-30": "FileItem-modules__w-30--UG4fj",
	"w-31": "FileItem-modules__w-31--V3m2e",
	"w-32": "FileItem-modules__w-32--poJ7q",
	"w-33": "FileItem-modules__w-33--X3LSa",
	"w-34": "FileItem-modules__w-34--zDEw_",
	"w-35": "FileItem-modules__w-35--gon0j",
	"w-36": "FileItem-modules__w-36--IY3ZX",
	"w-37": "FileItem-modules__w-37--OVv2y",
	"w-38": "FileItem-modules__w-38--x9DQl",
	"w-39": "FileItem-modules__w-39--hgFmc",
	"w-40": "FileItem-modules__w-40--O15d2",
	"w-41": "FileItem-modules__w-41--DHurX",
	"w-42": "FileItem-modules__w-42--E_wrC",
	"w-43": "FileItem-modules__w-43--pkSce",
	"w-44": "FileItem-modules__w-44--UhYZx",
	"w-45": "FileItem-modules__w-45--fFryO",
	"w-46": "FileItem-modules__w-46--wylAm",
	"w-47": "FileItem-modules__w-47--RyEtf",
	"w-48": "FileItem-modules__w-48--hLb7n",
	"w-49": "FileItem-modules__w-49--ypCN9",
	"w-50": "FileItem-modules__w-50--U8Nmd",
	"w-51": "FileItem-modules__w-51--cShEn",
	"w-52": "FileItem-modules__w-52--A5MQI",
	"w-53": "FileItem-modules__w-53--cvkPh",
	"w-54": "FileItem-modules__w-54--HC7Sb",
	"w-55": "FileItem-modules__w-55--QugYM",
	"w-56": "FileItem-modules__w-56--VLObJ",
	"w-57": "FileItem-modules__w-57--znCv3",
	"w-58": "FileItem-modules__w-58--dREG9",
	"w-59": "FileItem-modules__w-59--ZTzvy",
	"w-60": "FileItem-modules__w-60--jrf41",
	"w-61": "FileItem-modules__w-61--lO3ZL",
	"w-62": "FileItem-modules__w-62--Gdw53",
	"w-63": "FileItem-modules__w-63--iG1jv",
	"w-64": "FileItem-modules__w-64--YgqB_",
	"w-65": "FileItem-modules__w-65--uPZNz",
	"w-66": "FileItem-modules__w-66--mWbRD",
	"w-67": "FileItem-modules__w-67--naDOz",
	"w-68": "FileItem-modules__w-68--m0xJF",
	"w-69": "FileItem-modules__w-69--VGi5t",
	"w-70": "FileItem-modules__w-70--W5x2J",
	"w-71": "FileItem-modules__w-71--UbK4I",
	"w-72": "FileItem-modules__w-72--p6_Q7",
	"w-73": "FileItem-modules__w-73--mGpba",
	"w-74": "FileItem-modules__w-74--n7qhM",
	"w-75": "FileItem-modules__w-75--_6fS1",
	"w-76": "FileItem-modules__w-76--LOyFM",
	"w-77": "FileItem-modules__w-77--ExhI5",
	"w-78": "FileItem-modules__w-78--Xvqhv",
	"w-79": "FileItem-modules__w-79--fYmq9",
	"w-80": "FileItem-modules__w-80--MLHKc",
	"w-81": "FileItem-modules__w-81--wNZ0X",
	"w-82": "FileItem-modules__w-82--oiZw0",
	"w-83": "FileItem-modules__w-83--ooLgW",
	"w-84": "FileItem-modules__w-84--NK8jE",
	"w-85": "FileItem-modules__w-85--LZvs5",
	"w-86": "FileItem-modules__w-86--e48uR",
	"w-87": "FileItem-modules__w-87--TVInn",
	"w-88": "FileItem-modules__w-88--595uL",
	"w-89": "FileItem-modules__w-89--Ug7Qh",
	"w-90": "FileItem-modules__w-90--p7TM9",
	"w-91": "FileItem-modules__w-91--N4vRn",
	"w-92": "FileItem-modules__w-92--wfmB_",
	"w-93": "FileItem-modules__w-93--UxCjd",
	"w-94": "FileItem-modules__w-94--Bh4RK",
	"w-95": "FileItem-modules__w-95--Qg6Oz",
	"w-96": "FileItem-modules__w-96--TLM0F",
	"w-97": "FileItem-modules__w-97--wdsLG",
	"w-98": "FileItem-modules__w-98--ogEG7",
	"w-99": "FileItem-modules__w-99--vAn5K",
	"w-100": "FileItem-modules__w-100--fLHTy",
	"w-101": "FileItem-modules__w-101--aXhvy",
	"w-102": "FileItem-modules__w-102--DczHA",
	"w-103": "FileItem-modules__w-103--D2Wh7",
	"w-104": "FileItem-modules__w-104--bzOLk",
	"w-105": "FileItem-modules__w-105--bPUnF",
	"file-item-wrapper": "FileItem-modules__file-item-wrapper--VFQe3",
	"progress-bar": "FileItem-modules__progress-bar--Oqnj0",
	"file-name": "FileItem-modules__file-name--DDN1v",
	"friendly-name": "FileItem-modules__friendly-name--Sdhg8",
	"action-icon": "FileItem-modules__action-icon--FlRKH",
	"file-icon": "FileItem-modules__file-icon--ItS59",
	"file-subtitle": "FileItem-modules__file-subtitle--to11y",
	"error": "FileItem-modules__error--_vK3r",
	"retry": "FileItem-modules__retry--_p7UI",
	"readonly": "FileItem-modules__readonly--pfCYa"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ (function(module) {



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

/***/ })

}]);