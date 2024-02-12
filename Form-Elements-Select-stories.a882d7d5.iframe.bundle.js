(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[1057],{

/***/ "./stories/Form/Elements/Select.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Select: () => (/* binding */ Select_stories_Select),
  SelectWithAddNew: () => (/* binding */ SelectWithAddNew),
  SelectWithAddNewAndSearch: () => (/* binding */ SelectWithAddNewAndSearch),
  SelectWithSearchOptions: () => (/* binding */ SelectWithSearchOptions),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Select_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx
var Select = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.tsx");
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Option.tsx
var Option = __webpack_require__("./src/components/Form/Select/SingleSelect/Option.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Select.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    strong: "strong",
    a: "a",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " use the native HTML ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select"
      }), " element under the hood. Because of the design, we had to opt for a different variant. However, it still works as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select"
      }), " is intended to work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This also means that not all native ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select"
      }), " HTML attributes are available. However, we support ", (0,jsx_runtime.jsx)(_components.code, {
        children: "multiple"
      }), " attribute in ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "?path=/docs/components-inputs-raw-multiselect--docs",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MultiSelect"
        }), " component"]
      }), " component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Other than that, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component works as you would expect. It requires you to specify options by providing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Option"
      }), " components that accept a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " prop. This ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " prop will be passed to the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component. Whenever you click on an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Option"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " event will be fired on the parent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We automatically display a search ' Input ' field when you have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component with 10 or more options. You don't need to do anything about this. In order to change the placeholder, you can use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "searchPlaceholder"
      }), " prop on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An example of how a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component can be built using state looks as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "const ExampleComponent = () => {\n  const [selectValue, setSelectValue] = useState(\"\");\n  const [hasError, setHasError] = useState(false);\n\n  return (\n    <Select\n      name=\"Example select element\"\n      onChange={event => setSelectValue(event.target.value)}\n      value={selectValue}\n      error={hasError}\n    >\n      <Option value=\"option1\">Option 1</Option>\n      <Option value=\"option2\">Option 2</Option>\n      <Option value=\"option3\">Option 3</Option>\n      <Option value=\"option4\">Option 4</Option>\n      <Option value=\"option5\">Option 5</Option>\n    </Select>\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " method: if we click an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Option"
      }), " we receive the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "event"
      }), " object as a parameter in our function, which has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target"
      }), " prop, which has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " prop. This ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " corresponds to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " prop on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Option"
      }), " component that was clicked. You can see this if you go to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/story/stories-form-elements-select--select",
        children: "the Canvas tab"
      }), " and then click the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Actions"
      }), " tab next to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Controls"
      }), ". If you do not see this, press the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " key on your keyboard. Then while on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Actions"
      }), " tab, select an option from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Canvas"
      }), " and you'll see that the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " function was fired. The very first object (index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), ") is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "event"
      }), " object we send you. The second object we give you is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "React instance"
      }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Option"
      }), " component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See below an example of a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component. It is controlled by Storybook, and selecting a value will not do anything. However, you can change the value by selecting it in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#props",
        children: "Props table"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Select_stories_Select
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
/* harmony default export */ const Elements_Select = (MDXContent);

// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/Form/Elements/Select.stories.tsx
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








const generateOptions = count => {
  return Array.from({
    length: count
  }, (_, index) => /*#__PURE__*/react.createElement(Option/* Option */.W, {
    key: "option".concat(index + 1),
    value: "option".concat(index + 1)
  }, "Option ".concat(index + 1)));
};
const meta = {
  title: "components/Inputs/Raw/Select",
  component: Select/* Select */.P,
  parameters: {
    docs: {
      page: Elements_Select
    }
  },
  argTypes: {
    labeledBy: {
      table: {
        disable: true
      },
      control: false
    },
    describedBy: {
      table: {
        disable: true
      },
      control: false
    },
    className: {
      table: {
        disable: true
      },
      control: false
    },
    value: {
      options: generateOptions(11),
      control: "select"
    },
    disabled: {
      control: "boolean"
    },
    success: {
      control: "boolean"
    }
  }
};
/* harmony default export */ const Select_stories = (meta);
const Template = args => {
  return /*#__PURE__*/react.createElement(Select/* Select */.P, args);
};
const Select_stories_Select = Template.bind({});
Select_stories_Select.args = {
  name: "Example select",
  children: generateOptions(6)
};
const SelectWithSearchOptions = Template.bind({});
SelectWithSearchOptions.args = {
  children: generateOptions(11)
};
SelectWithSearchOptions.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.mV.click(select);
});
const SelectWithAddNewAndSearch = Template.bind({});
SelectWithAddNewAndSearch.args = {
  name: "Example select",
  addNew: {
    label: "Create new",
    onAddNew: () => alert("YO!")
  },
  children: generateOptions(11)
};
SelectWithAddNewAndSearch.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref2 => {
  let {
    canvasElement
  } = _ref2;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.mV.click(select);
});
const SelectWithAddNew = Template.bind({});
SelectWithAddNew.args = {
  name: "Example select",
  addNew: {
    label: "Create new",
    onAddNew: () => alert("YO!")
  },
  children: generateOptions(3)
};
SelectWithAddNew.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref3 => {
  let {
    canvasElement
  } = _ref3;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.mV.click(select);
});
Select_stories_Select.parameters = {
  ...Select_stories_Select.parameters,
  docs: {
    ...Select_stories_Select.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <SelectComponent {...args}></SelectComponent>;\n}",
      ...Select_stories_Select.parameters?.docs?.source
    }
  }
};
SelectWithSearchOptions.parameters = {
  ...SelectWithSearchOptions.parameters,
  docs: {
    ...SelectWithSearchOptions.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <SelectComponent {...args}></SelectComponent>;\n}",
      ...SelectWithSearchOptions.parameters?.docs?.source
    }
  }
};
SelectWithAddNewAndSearch.parameters = {
  ...SelectWithAddNewAndSearch.parameters,
  docs: {
    ...SelectWithAddNewAndSearch.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <SelectComponent {...args}></SelectComponent>;\n}",
      ...SelectWithAddNewAndSearch.parameters?.docs?.source
    }
  }
};
SelectWithAddNew.parameters = {
  ...SelectWithAddNew.parameters,
  docs: {
    ...SelectWithAddNew.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <SelectComponent {...args}></SelectComponent>;\n}",
      ...SelectWithAddNew.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Select","SelectWithSearchOptions","SelectWithAddNewAndSearch","SelectWithAddNew"];

/***/ }),

/***/ "./.storybook/conditionalPlay.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ conditionalPlay)
});

;// CONCATENATED MODULE: ./node_modules/chromatic/isChromatic.mjs
/* eslint-env browser */

function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
}

;// CONCATENATED MODULE: ./.storybook/conditionalPlay.ts
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


const conditionalPlay = playFunction => {
  const isDevMode = "production" === "development";
  if (isChromatic() || isDevMode) {
    return playFunction;
  }
};

/***/ }),

/***/ "./src/components/Form/Select/SingleSelect/Option.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
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



const OptionComponent = (_ref, ref) => {
  let {
    children,
    className,
    isSelected = false,
    shouldClick,
    hasFocus,
    selectOpened,
    isSearching,
    childIndex,
    onOptionSelect,
    onFocusChange,
    disabled,
    value,
    isAddBtnFocused,
    ...rest
  } = _ref;
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching && !isAddBtnFocused) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);
  const onSelectHandler = () => onOptionSelect === null || onOptionSelect === void 0 ? void 0 : onOptionSelect(innerOptionRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({}, rest, {
    ref: innerOptionRef,
    "data-value": value,
    className: "".concat(isSelected ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z["selected-option"] : "", " ").concat(disabled ? _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.disabled : "", " ").concat(className !== null && className !== void 0 ? className : ""),
    onClick: onSelectHandler,
    onKeyDown: event => {
      if (event.code === "Enter") {
        event.stopPropagation();
        event.preventDefault();
        onSelectHandler();
      }
    },
    "aria-selected": isSelected,
    role: "option",
    tabIndex: disabled ? -1 : 0
  }), children);
};
const Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(OptionComponent);
try {
    // @ts-ignore
    Option.displayName = "Option";
    // @ts-ignore
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/components/Form/Select/SingleSelect/Select.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _hooks_useBodyClick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/hooks/useBodyClick.ts");
/* harmony import */ var _hooks_useDetermineStatusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
/* harmony import */ var _readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/readyclasses.module.scss");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/util/helper.tsx");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Icon/Icon.tsx");
/* harmony import */ var _SelectService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Form/Select/SelectService.ts");
/* harmony import */ var _useAddNewBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Form/Select/useAddNewBtn.tsx");
/* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Form/Select/useSearch.tsx");
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











const SelectComponent = (_ref, ref) => {
  let {
    children,
    name,
    disabled = false,
    labeledBy,
    placeholder,
    describedBy,
    searchPlaceholder = "Search item",
    searchInputProps,
    selectButtonProps,
    className,
    error = false,
    success = false,
    value,
    clearLabel = "Clear selection",
    noResultsLabel = "No results found",
    onChange,
    addNew,
    search,
    ...rest
  } = _ref;
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const containerReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const optionListReference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [focusedSelectItem, setFocusedSelectItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const [shouldClick, setShouldClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [shouldFocusButtonAfterClose, setShouldFocusButtonAfterClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const optionsCount = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children);
  const {
    filter,
    isSearching,
    renderSearch,
    searchInputRef,
    setIsSearching,
    searchThreshold,
    searchVisible
  } = (0,_useSearch__WEBPACK_IMPORTED_MODULE_3__/* .useSearch */ .R)({
    expanded,
    search,
    searchInputClassName: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["select-search"],
    optionsCount,
    setFocusedSelectItem,
    searchInputProps,
    searchPlaceholder
  });
  const {
    addBtnRef,
    addNewBtnOptionsContainerClassName,
    renderAddNew
  } = (0,_useAddNewBtn__WEBPACK_IMPORTED_MODULE_4__/* .useAddNewBtn */ .Z)({
    addNew,
    filter
  });
  const nativeSelect = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  const onOptionChangeHandler = optionElement => {
    if (nativeSelect.current && optionElement) {
      nativeSelect.current.value = optionElement.getAttribute("data-value");
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    setExpanded(false);
  };
  const customSelectButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    onArrowNavigation
  } = (0,_SelectService__WEBPACK_IMPORTED_MODULE_5__/* .useArrowNavigation */ .r)({
    expanded,
    setExpanded,
    isSearching,
    setIsSearching,
    setFocusedSelectItem,
    onOptionChangeHandler,
    childrenCount: optionsCount,
    setShouldClick,
    searchInputRef,
    addBtnRef,
    renderThreshold: searchThreshold
  });
  const {
    listPosition,
    opacity,
    optionsListMaxHeight,
    setListPosition,
    setOpacity
  } = (0,_SelectService__WEBPACK_IMPORTED_MODULE_5__/* .useSelectPositionList */ .i)({
    expanded,
    optionListReference,
    containerReference,
    addBtnRef
  });
  const syncDisplayValue = val => {
    react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, child => {
      if (child.props.value === val) {
        setDisplay(child.props.children);
      }
    });
  };

  /**
   * @description We have to modify the children (Option component) to have an additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  const renderOptions = () => {
    if (isSearching || filter !== "") {
      const filteredChildren = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).filter(child => child.props.children.toLowerCase().match(filter.toLowerCase()) !== null);
      const internalChildren = _internalRenderChildren(filteredChildren);
      if (internalChildren.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
          className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["no-results"]
        }, noResultsLabel);
      }
      return _internalRenderChildren(filteredChildren);
    }
    return _internalRenderChildren(children);
    function _internalRenderChildren(internalChildren) {
      return react__WEBPACK_IMPORTED_MODULE_1__.Children.map(internalChildren, (child, index) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, {
          onFocusChange: childIndex => {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: optionRef => {
            onOptionChangeHandler(optionRef.current);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick,
          isAddBtnFocused: addBtnRef.current === document.activeElement
        });
      });
    }
  };
  const renderChevronIcon = () => {
    return expanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J, {
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["chevron-icon"],
      icon: _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icons */ .P.ChevronUp
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J, {
      className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["chevron-icon"],
      icon: _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icons */ .P.ChevronDown
    });
  };
  const icon = (0,_hooks_useDetermineStatusIcon__WEBPACK_IMPORTED_MODULE_7__/* .useDetermineStatusIcon */ .U)({
    success,
    error
  });
  const nativeOnChangeHandler = event => {
    onChange === null || onChange === void 0 || onChange(event);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (expanded) {
      setFocusedSelectItem(0);
      setShouldFocusButtonAfterClose(true);
    }
    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      customSelectButtonRef.current.focus();
      setShouldFocusButtonAfterClose(false);
    }
  }, [expanded, customSelectButtonRef.current, shouldFocusButtonAfterClose]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    syncDisplayValue(value);
  }, [value]);
  (0,_hooks_useBodyClick__WEBPACK_IMPORTED_MODULE_8__/* .useBodyClick */ .S)(event => !event.target.closest(".custom-select") && expanded, () => {
    setExpanded(false);
    setListPosition({
      top: 0,
      bottom: "initial"
    });
    setOpacity(0);
  }, expanded);
  const additionalClasses = [];
  expanded && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.expanded);
  error && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error);
  disabled && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", _extends({}, (0,_util_helper__WEBPACK_IMPORTED_MODULE_9__/* .filterProps */ .L6)(rest, /^data-/, false), {
    tabIndex: -1,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: _readyclasses_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z["sr-only"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: ""
  }), react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: child.props.value
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", _extends({}, (0,_util_helper__WEBPACK_IMPORTED_MODULE_9__/* .filterProps */ .L6)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.select, " ").concat(additionalClasses.join(" "), " ").concat(className !== null && className !== void 0 ? className : "")
  }), searchVisible && renderSearch(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", _extends({}, selectButtonProps, {
    onClick: () => {
      setExpanded(!expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: expanded && searchVisible ? "none" : "initial"
    },
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-invalid": error,
    "aria-expanded": expanded,
    "aria-haspopup": "listbox",
    "aria-labelledby": labeledBy,
    "aria-describedby": describedBy
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "data-display": true,
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["selected"]
  }, !value && placeholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    "data-display-inner": true
  }, display)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(_Select_module_scss__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z["list-wrapper"]),
    style: {
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight.wrapper,
      pointerEvents: expanded ? "auto" : "none",
      ...listPosition
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: addNewBtnOptionsContainerClassName,
    role: "listbox",
    style: {
      maxHeight: optionsListMaxHeight.list
    }
  }, renderOptions()), renderAddNew())));
};
const Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(SelectComponent);
try {
    // @ts-ignore
    Select.displayName = "Select";
    // @ts-ignore
    Select.__docgenInfo = { "description": "", "displayName": "Select", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "search": { "defaultValue": null, "description": "", "name": "search", "required": false, "type": { "name": "SearchProps" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "searchPlaceholder": { "defaultValue": { value: "Search item" }, "description": "@deprecated", "name": "searchPlaceholder", "required": false, "type": { "name": "string" } }, "searchInputProps": { "defaultValue": null, "description": "@deprecated", "name": "searchInputProps", "required": false, "type": { "name": "(Partial<Props> & { reset?: boolean; })" } }, "selectButtonProps": { "defaultValue": null, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; })" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } }, "addNew": { "defaultValue": null, "description": "", "name": "addNew", "required": false, "type": { "name": "AddNewProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Select.tsx#Select"] = { docgenInfo: Select.__docgenInfo, name: "Select", path: "src/components/Form/Select/SingleSelect/Select.tsx#Select" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L6: () => (/* binding */ filterProps),
/* harmony export */   MU: () => (/* binding */ getValueByPath),
/* harmony export */   Pb: () => (/* binding */ isJsonString),
/* harmony export */   R3: () => (/* binding */ areArraysDifferent),
/* harmony export */   cv: () => (/* binding */ remToPx),
/* harmony export */   y: () => (/* binding */ generateID)
/* harmony export */ });
/* unused harmony exports debounce, throttle, isEqual, deepMerge */
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

const generateID = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  let stringToWeaveIn = arguments.length > 1 ? arguments[1] : undefined;
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter = typeof stringToWeaveIn === "string" && (stringToWeaveIn === null || stringToWeaveIn === void 0 ? void 0 : stringToWeaveIn[i]) !== undefined && !/\s/.test(stringToWeaveIn[i]) ? stringToWeaveIn[i] : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }
  return id.slice(0, length);
};
const filterProps = function (props, regexPattern) {
  let returnFiltered = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (returnFiltered) {
    return Object.keys(props).reduce((acc, key) => {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  } else {
    return Object.entries(props).filter(_ref => {
      let [key] = _ref;
      return !regexPattern.test(key);
    }).reduce((prevObj, currKeyValPair) => ({
      ...prevObj,
      [currKeyValPair[0]]: currKeyValPair[1]
    }), {});
  }
};
const debounce = (fn, delay) => {
  let timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
const throttle = (fn, delay) => {
  let lastTime = 0;
  return function () {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};
const isEqual = (x, y) => {
  const typesCoincide = x && y && typeof x === "object" && typeof y === "object";
  return typesCoincide ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => isEqual(x[key], y[key])) : x === y;
};
const areArraysDifferent = (arr1, arr2, key) => {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    const firstFilteredArray = arr1.filter(arr1Item => arr2.some(arr2Item => !isEqual(arr1Item[key], arr2Item[key])));
    const secondFilteredArray = arr2.filter(arr2Item => arr1.some(arr1Item => !isEqual(arr1Item[key], arr2Item[key])));
    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};
const getValueByPath = (obj, path) => {
  return path.split(".").reduce((res, prop) => {
    return res[prop];
  }, obj);
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
const remToPx = rem => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
const deepMerge = (obj1, obj2) => {
  if (!obj2) return obj1;
  let result = {
    ...obj1
  };
  for (let key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null && Object.prototype.hasOwnProperty.call(obj1, key) && !Array.isArray(obj2[key])) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};
try {
    // @ts-ignore
    filterProps.displayName = "filterProps";
    // @ts-ignore
    filterProps.__docgenInfo = { "description": "", "displayName": "filterProps", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#filterProps"] = { docgenInfo: filterProps.__docgenInfo, name: "filterProps", path: "src/util/helper.tsx#filterProps" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    remToPx.displayName = "remToPx";
    // @ts-ignore
    remToPx.__docgenInfo = { "description": "Source: https://stackoverflow.com/a/42769683/5084110", "displayName": "remToPx", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#remToPx"] = { docgenInfo: remToPx.__docgenInfo, name: "remToPx", path: "src/util/helper.tsx#remToPx" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    isJsonString.displayName = "isJsonString";
    // @ts-ignore
    isJsonString.__docgenInfo = { "description": "", "displayName": "isJsonString", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#isJsonString"] = { docgenInfo: isJsonString.__docgenInfo, name: "isJsonString", path: "src/util/helper.tsx#isJsonString" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);