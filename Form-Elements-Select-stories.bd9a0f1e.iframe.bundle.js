(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2],{

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
// EXTERNAL MODULE: ./src/components/Form/Select/SingleSelect/Select.tsx + 2 modules
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
    h2: "h2",
    h3: "h3",
    ol: "ol",
    li: "li",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.hE, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.Pd, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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
      id: "features",
      children: "Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "search-feature",
      children: "Search feature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Search"
      }), " feature will be automatically turned on when more than 10 elements are on the list. Developers can turn off this feature regardless of that limit by setting: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search: { enabled: false },"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Also, the threshold can be adjusted by setting: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search: { renderThreshold: 5 },"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To force search, set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search: { renderThreshold: 0, enabled: true },"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-new-feature",
      children: "Add new feature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Add new"
      }), " feature allows the user to define new options. The API is flexible, letting devs take control of how to ask for new elements to be added."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The feature can be turned on by providing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addNew"
      }), " property on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " component. The value of the provided property should contain at least the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " property and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onAddNew(value)"
      }), " callback."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Add new"
      }), " button needs to be styled or changed, the additional property ", (0,jsx_runtime.jsx)(_components.code, {
        children: "btnProps"
      }), " can be passed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visibility",
      children: "Visibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Add new"
      }), " is hidden when the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addNew"
      }), " property is provided. A few factors influence the visibility of this component:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Button is visible when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Search"
        }), " feature is disabled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Button is visible when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Search"
        }), " feature is enabled, but only when the provided search query exists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Button is visible when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alwaysEnabled"
        }), " flag is turned on. This flag should be used when you need to get more data for an added option than only value (displaying popup)."]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.gG, {
        of: Select_stories_Select
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      story: dist/* PRIMARY_STORY */.h1
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
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
  }, (_, index) => /*#__PURE__*/react.createElement(Option/* Option */.c, {
    key: "option".concat(index + 1),
    value: "option".concat(index + 1)
  }, "Option ".concat(index + 1)));
};
const meta = {
  title: "components/Inputs/Raw/Select",
  component: Select/* Select */.l,
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
  return /*#__PURE__*/react.createElement(Select/* Select */.l, args);
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
SelectWithSearchOptions.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref => {
  let {
    canvasElement
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.ux)(canvasElement);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.Q4.click(select);
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
SelectWithAddNewAndSearch.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref2 => {
  let {
    canvasElement
  } = _ref2;
  const canvas = (0,testing_library_dist/* within */.ux)(canvasElement);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.Q4.click(select);
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
SelectWithAddNew.play = (0,conditionalPlay/* conditionalPlay */.h)(async _ref3 => {
  let {
    canvasElement
  } = _ref3;
  const canvas = (0,testing_library_dist/* within */.ux)(canvasElement);
  await (0,testing_library_dist/* waitFor */.fm)(() => (0,jest_dist/* expect */.E)(canvas.getByRole("button", {
    expanded: false
  })).toBeInTheDocument());
  const select = await canvas.getByRole("button", {
    expanded: false
  });
  await testing_library_dist/* userEvent */.Q4.click(select);
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
  h: () => (/* binding */ conditionalPlay)
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
/* harmony export */   c: () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Form/Select/SingleSelect/Select.module.scss");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util/helper.tsx");
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
    id,
    children,
    className,
    isSelected = false,
    disableDefaultSelectedStyle,
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
  const defaultOptionId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_util_helper__WEBPACK_IMPORTED_MODULE_2__/* .generateID */ .ni)(20));
  const optionId = id !== null && id !== void 0 ? id : defaultOptionId.current;
  let innerOptionRef = ref || /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  const additionalClasses = [];
  className && additionalClasses.push(className);
  isSelected && !disableDefaultSelectedStyle && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["selected-option"]);
  disabled && additionalClasses.push(_Select_module_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A["disabled"]);
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
    id: optionId,
    ref: innerOptionRef,
    "data-value": value,
    className: additionalClasses.join(" "),
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
    Option.__docgenInfo = { "description": "", "displayName": "Option", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "hasFocus": { "defaultValue": null, "description": "", "name": "hasFocus", "required": false, "type": { "name": "boolean" } }, "isSelected": { "defaultValue": { value: "false" }, "description": "", "name": "isSelected", "required": false, "type": { "name": "boolean" } }, "childIndex": { "defaultValue": null, "description": "", "name": "childIndex", "required": false, "type": { "name": "number" } }, "shouldClick": { "defaultValue": null, "description": "", "name": "shouldClick", "required": false, "type": { "name": "boolean" } }, "onFocusChange": { "defaultValue": null, "description": "", "name": "onFocusChange", "required": false, "type": { "name": "((childIndex: number) => void)" } }, "disableDefaultSelectedStyle": { "defaultValue": null, "description": "", "name": "disableDefaultSelectedStyle", "required": false, "type": { "name": "boolean" } }, "selectOpened": { "defaultValue": null, "description": "", "name": "selectOpened", "required": false, "type": { "name": "boolean" } }, "isSearching": { "defaultValue": null, "description": "", "name": "isSearching", "required": false, "type": { "name": "boolean" } }, "onOptionSelect": { "defaultValue": null, "description": "", "name": "onOptionSelect", "required": false, "type": { "name": "((ref: RefObject<HTMLLIElement>) => void)" } }, "isAddBtnFocused": { "defaultValue": null, "description": "", "name": "isAddBtnFocused", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/SingleSelect/Option.tsx#Option"] = { docgenInfo: Option.__docgenInfo, name: "Option", path: "src/components/Form/Select/SingleSelect/Option.tsx#Option" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/util/helper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: () => (/* binding */ getValueByPath),
/* harmony export */   Eo: () => (/* binding */ isJsonString),
/* harmony export */   GK: () => (/* binding */ areArraysDifferent),
/* harmony export */   J9: () => (/* binding */ filterProps),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   ir: () => (/* binding */ remToPx),
/* harmony export */   ni: () => (/* binding */ generateID)
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
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
try {
    // @ts-ignore
    escapeRegExp.displayName = "escapeRegExp";
    // @ts-ignore
    escapeRegExp.__docgenInfo = { "description": "", "displayName": "escapeRegExp", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/util/helper.tsx#escapeRegExp"] = { docgenInfo: escapeRegExp.__docgenInfo, name: "escapeRegExp", path: "src/util/helper.tsx#escapeRegExp" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);