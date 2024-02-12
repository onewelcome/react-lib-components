(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9100],{

/***/ "./stories/hooks/useRepeater.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Repeater: () => (/* binding */ Repeater),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ useRepeater_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/hooks/useRepeater.ts
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



const useRepeater = _ref => {
  let {
    componentToRepeat
  } = _ref;
  const [repeatedComponents, setRepeatedComponents] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    repeat();
  }, []);
  const repeat = () => {
    const clonedComponent = /*#__PURE__*/react.cloneElement(componentToRepeat, {
      key: (0,helper/* generateID */.y)(20)
    });
    setRepeatedComponents(prevState => [...prevState, clonedComponent]);
  };
  const remove = componentToRemove => {
    const newRepeatedComponents = repeatedComponents.filter(component => component !== componentToRemove);
    setRepeatedComponents(newRepeatedComponents);
  };
  return {
    repeatedComponents,
    repeat,
    remove
  };
};
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__("./src/components/Button/Button.tsx");
// EXTERNAL MODULE: ./src/components/Button/IconButton.tsx + 1 modules
var IconButton = __webpack_require__("./src/components/Button/IconButton.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/hooks/useRepeater.mdx



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    strong: "strong",
    ul: "ul",
    li: "li",
    h2: "h2",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useRepeater"
      }), " hook is written to help duplicate one or a set of component(s). It can be helpful if a user can enter one or multiple entries of the same set of fields. If you plan to use this within a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "form"
      }), ", then first check if the Form Management Library you're using (", (0,jsx_runtime.jsx)(_components.code, {
        children: "formik"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "React Final Forms"
      }), ") has its own implementation of a repeater!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A practical example of this would be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tags"
      }), ", for example. Keywords that could be searched by a user to find the thing they're looking for."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useRepeater"
      }), " hook only requires you to pass the React Component you want to repeat. This has to be a react component and has to be passed in its component form ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " as a reference (meaning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Componentname />"
      }), " and not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Componentname"
      }), "). An advantage of this, is that you can immediately pass props to that component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useRepeater"
      }), " returns are three values:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "repeat"
        }), " function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "remove"
        }), " function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "repeatedComponents"
        }), " array of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JSX.Element"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "repeat",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "repeat()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The repeat function does what its name suggests, create another instance of your component. You can, for example, create your own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), " component, which has an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onClick"
      }), " listener that executes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeat()"
      }), " whenever it's clicked on. This will add another\ninstance of the component you want to repeat inside the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      }), " array."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "removecomponent-jsxelement",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "remove(component: JSX.Element)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The remove function also does what its name suggests, remove a component from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      }), " array. It needs its first parameter to be a reference to the component you want to remove. If you map over the components inside the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      }), " array,\nyou can create a delete button and pass the reference to that component inside the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remove()"
      }), " function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "repeatedcomponents",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As mentioned before the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      }), " variable is an array which contains all of the repeated components which you can loop through, by means of your choice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Repeater
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ComponentToRepeat"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JSX",
        children: "\nexport interface RepeatedComponentProps {\n  onChange?: (state: { [key: string]: unknown }) => void;\n  identifier?: string;\n}\n\nconst ComponentToRepeat = ({ onChange, identifier }: RepeatedComponentProps) => {\n  const [inputState, setInputState] = useState({\n    errorMessage: 'random error',\n    error: false,\n    value: '',\n    identifier: identifier,\n  });\n\n  useEffect(() => {\n    onChange(inputState);\n  }, [inputState]);\n\n  return (\n    <InputWrapper\n      helperText=\"Enter a tag\"\n      name={`input_${inputState.identifier}`}\n      errorMessage={inputState.errorMessage}\n      type=\"text\"\n      error={inputState.error}\n      value={inputState.value}\n      label=\"Enter tag name\"\n      onChange={(event) => {\n        setInputState((prevState) => ({ ...prevState, value: event.target.value }));\n      }}\n    />\n  );\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As you can see in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ComponentToRepeat"
      }), " example above, we simply define an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " function that we execute whenever the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inputState"
      }), " changes. We also pass an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "identifier"
      }), " to the component so we can give the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InputWrapper"
      }), " inside a unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " attribute (which will also be added as an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you see the code example above the code snippet (click ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Show code"
      }), " in the lower right corner), you see that the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " statement contains a loop in which we ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " over the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      }), " array that we get back from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useRepeater"
      }), " hook. Then, in order to add a unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "identifier"
      }), " prop, we simply use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "React.cloneElement"
      }), " to clone the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "component"
      }), " we loop over and add an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "identifier"
      }), " prop with a unique value that we generate with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generateID"
      }), " function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now, whenever an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InputWrapper"
      }), " component fires its ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " event, we get back that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inputState"
      }), " that contains this ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UID"
      }), " and it's corresponding state. Make sure that the first element inside of your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " function has a unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key"
      }), " property! If you loop over the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repeatedComponents"
      }), " array, then each component has a unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key"
      }), " prop that you can use."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const hooks_useRepeater = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
;// CONCATENATED MODULE: ./stories/hooks/useRepeater.stories.tsx
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












const meta = {
  title: "Hooks/useRepeater",
  parameters: {
    docs: {
      page: hooks_useRepeater
    },
    controls: {
      hideNoControlsWarning: true
    }
  }
};
/* harmony default export */ const useRepeater_stories = (meta);
const ComponentToRepeat = _ref => {
  let {
    onChange,
    identifier
  } = _ref;
  const [inputState, setInputState] = (0,react.useState)({
    errorMessage: "random error",
    error: false,
    value: "",
    identifier: identifier
  });
  (0,react.useEffect)(() => {
    onChange && onChange(inputState);
  }, [inputState]);
  return /*#__PURE__*/react.createElement(InputWrapper/* InputWrapper */.S, {
    helperText: "Enter a tag",
    name: "input_".concat(inputState.identifier),
    errorMessage: inputState.errorMessage,
    type: "text",
    error: inputState.error,
    value: inputState.value,
    label: "Enter tag name",
    onChange: event => {
      setInputState(prevState => ({
        ...prevState,
        value: event.target.value
      }));
    }
  });
};
const Template = () => {
  const [tags] = (0,react.useState)([]);
  const onChangeHandler = state => {
    console.warn(state);
    console.warn("executing on change handler");
  };
  const {
    repeatedComponents,
    repeat,
    remove
  } = useRepeater({
    componentToRepeat: /*#__PURE__*/react.createElement(ComponentToRepeat, {
      onChange: onChangeHandler
    })
  });
  (0,react.useEffect)(() => {}, [repeatedComponents]);
  (0,react.useEffect)(() => {
    console.warn(tags);
  }, [tags]);
  return /*#__PURE__*/react.createElement("div", null, repeatedComponents.map((component, index) => /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      marginBottom: "16px"
    },
    key: component.key
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      flexGrow: "1"
    }
  }, /*#__PURE__*/react.cloneElement(component, {
    identifier: (0,helper/* generateID */.y)()
  })), index !== 0 && /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: "25px",
      marginLeft: "8px"
    }
  }, /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
    title: "Remove repeated component",
    onClick: () => remove(component)
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    icon: Icon/* Icons */.P.Trash
  }))))), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: repeat
  }, "Add tag!"));
};
const Repeater = Template.bind({});
Repeater.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref2 => {
  let {
    canvasElement
  } = _ref2;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  const addTagButton = await canvas.findByText("Add tag!");
  await testing_library_dist/* userEvent */.mV.click(addTagButton);
  await testing_library_dist/* userEvent */.mV.click(addTagButton);
  const input = await canvas.findAllByLabelText("Enter tag name");
  (0,jest_dist/* expect */.l)(input).toHaveLength(3);
  await testing_library_dist/* userEvent */.mV.tab();
});
Repeater.args = {};
Repeater.parameters = {
  ...Repeater.parameters,
  docs: {
    ...Repeater.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [tags] = useState([]);\n  const onChangeHandler = state => {\n    console.warn(state);\n    console.warn(\"executing on change handler\");\n  };\n  const {\n    repeatedComponents,\n    repeat,\n    remove\n  } = useRepeater<RepeatedComponentProps>({\n    componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />\n  });\n  useEffect(() => {}, [repeatedComponents]);\n  useEffect(() => {\n    console.warn(tags);\n  }, [tags]);\n  return <div>\n      {repeatedComponents.map((component, index) => <div style={{\n      display: \"flex\",\n      width: \"100%\",\n      marginBottom: \"16px\"\n    }} key={component.key}>\n          <div style={{\n        flexGrow: \"1\"\n      }}>\n            {React.cloneElement(component, {\n          identifier: generateID()\n        })}\n          </div>\n          {index !== 0 && <div style={{\n        marginTop: \"25px\",\n        marginLeft: \"8px\"\n      }}>\n              <IconButton title=\"Remove repeated component\" onClick={() => remove(component)}>\n                <Icon icon={Icons.Trash} />\n              </IconButton>\n            </div>}\n        </div>)}\n      <Button onClick={repeat}>Add tag!</Button>\n    </div>;\n}",
      ...Repeater.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Repeater"];

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

/***/ "./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ InputWrapper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss
var InputWrapper_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(InputWrapper_module/* default */.Z, options);




       /* harmony default export */ const InputWrapper_InputWrapper_module = (InputWrapper_module/* default */.Z && InputWrapper_module/* default */.Z.locals ? InputWrapper_module/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Form/Wrapper/Wrapper/Wrapper.tsx + 3 modules
var Wrapper = __webpack_require__("./src/components/Form/Wrapper/Wrapper/Wrapper.tsx");
// EXTERNAL MODULE: ./src/hooks/useWrapper.ts
var useWrapper = __webpack_require__("./src/hooks/useWrapper.ts");
;// CONCATENATED MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx
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






const InputWrapperComponent = (_ref, ref) => {
  var _inputProps$wrapperPr, _inputProps$wrapperPr2, _helperProps$classNam, _inputProps$className;
  let {
    type,
    name,
    inputProps,
    helperText,
    helperProps,
    value,
    className,
    error,
    success,
    onChange,
    onBlur,
    onFocus,
    disabled,
    ...rest
  } = _ref;
  const {
    errorId,
    hasFocus,
    setHasFocus,
    helperId,
    labelId
  } = (0,useWrapper/* useWrapper */.s)();
  const {
    prefix,
    suffix
  } = inputProps !== null && inputProps !== void 0 ? inputProps : {};
  const input = (0,react.useRef)(null);
  const labelClasses = [InputWrapper_InputWrapper_module["input-label"]];
  hasFocus && labelClasses.push(InputWrapper_InputWrapper_module["focus"]);
  const inputWrapperClasses = [];
  (inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr = inputProps.wrapperProps) === null || _inputProps$wrapperPr === void 0 ? void 0 : _inputProps$wrapperPr.className) && inputWrapperClasses.push(inputProps === null || inputProps === void 0 || (_inputProps$wrapperPr2 = inputProps.wrapperProps) === null || _inputProps$wrapperPr2 === void 0 ? void 0 : _inputProps$wrapperPr2.className);
  disabled && inputWrapperClasses.push(InputWrapper_InputWrapper_module["disabled"]);
  return /*#__PURE__*/react.createElement(Wrapper/* Wrapper */.i, _extends({}, rest, {
    ref: ref,
    name: name,
    className: "".concat(InputWrapper_InputWrapper_module["input-wrapper"], " ").concat(className !== null && className !== void 0 ? className : ""),
    labelProps: {
      id: labelId,
      className: labelClasses.join(" ")
    },
    errorId: errorId,
    error: error,
    helperId: helperId,
    helperText: helperText,
    helperProps: {
      ...helperProps,
      className: "".concat(InputWrapper_InputWrapper_module["input-wrapper-helper"], " ").concat((_helperProps$classNam = helperProps === null || helperProps === void 0 ? void 0 : helperProps.className) !== null && _helperProps$classNam !== void 0 ? _helperProps$classNam : "", " ")
    },
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, inputProps, {
    prefix: prefix,
    suffix: suffix,
    wrapperProps: {
      className: inputWrapperClasses.join(" ")
    },
    ref: (inputProps === null || inputProps === void 0 ? void 0 : inputProps.ref) || input,
    "aria-labelledby": labelId,
    "aria-describedby": error ? errorId : helperId,
    onChange: onChange,
    onFocus: e => {
      onFocus === null || onFocus === void 0 || onFocus(e);
      setHasFocus(true);
    },
    onBlur: e => {
      onBlur === null || onBlur === void 0 || onBlur(e);
      setHasFocus(false);
    },
    className: "\n         ".concat((_inputProps$className = inputProps === null || inputProps === void 0 ? void 0 : inputProps.className) !== null && _inputProps$className !== void 0 ? _inputProps$className : ""),
    name: name,
    success: success,
    error: error,
    id: name,
    value: value,
    type: type
  })));
};
const InputWrapper = /*#__PURE__*/react.forwardRef(InputWrapperComponent);
try {
    // @ts-ignore
    InputWrapper.displayName = "InputWrapper";
    // @ts-ignore
    InputWrapper.__docgenInfo = { "description": "", "displayName": "InputWrapper", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<HTMLInputElement, Element>) => void)" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLInputElement>) => void)" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"number\"" }, { "value": "\"search\"" }, { "value": "\"time\"" }, { "value": "\"text\"" }, { "value": "\"hidden\"" }, { "value": "\"tel\"" }, { "value": "\"url\"" }, { "value": "\"email\"" }, { "value": "\"date\"" }, { "value": "\"file\"" }, { "value": "\"password\"" }, { "value": "\"datetime-local\"" }] } }, "success": { "defaultValue": null, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "errorMessage": { "defaultValue": null, "description": "", "name": "errorMessage", "required": false, "type": { "name": "string" } }, "helperText": { "defaultValue": null, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "helperProps": { "defaultValue": null, "description": "", "name": "helperProps", "required": false, "type": { "name": "Props" } }, "required": { "defaultValue": null, "description": "", "name": "required", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "inputProps": { "defaultValue": null, "description": "", "name": "inputProps", "required": false, "type": { "name": "PartialInputProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper"] = { docgenInfo: InputWrapper.__docgenInfo, name: "InputWrapper", path: "src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx#InputWrapper" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Wrapper/InputWrapper/InputWrapper.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
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
 *//*!
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
 *//*!
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
 */.InputWrapper-module__sr-only--_BGLV{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.InputWrapper-module__hidden--j7j0R{display:none}.InputWrapper-module__slide-in--PMOZy{animation:InputWrapper-module__slide-in--PMOZy .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-in--PMOZy{animation-duration:.1ms}}.InputWrapper-module__slide-out--ghrlP{animation:InputWrapper-module__slide-out--ghrlP .5s forwards}@media(prefers-reduced-motion: reduce){.InputWrapper-module__slide-out--ghrlP{animation-duration:.1ms}}@keyframes InputWrapper-module__slide-in--PMOZy{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes InputWrapper-module__slide-out--ghrlP{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}input.InputWrapper-module__floating-label--aGgwG{padding-top:1rem}.InputWrapper-module__input-wrapper-helper--GKzdc{margin-top:.14rem}.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;transform:translateY(0px);font-size:1.125rem;display:flex;align-items:center;justify-content:center}@media(prefers-reduced-motion: reduce){.InputWrapper-module__input-wrapper--x9INE [data-icon]:before{transition-duration:.1ms}}.InputWrapper-module__input-wrapper--x9INE [data-prefix],.InputWrapper-module__input-wrapper--x9INE [data-suffix]{font-size:var(--form-control-font-size)}.InputWrapper-module__input-wrapper--x9INE [data-prefix]+input{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE [data-suffix]{padding-left:1.25rem}.InputWrapper-module__input-wrapper--x9INE input+[data-suffix]{padding-left:.5rem}.InputWrapper-module__input-wrapper--x9INE .InputWrapper-module__disabled--TE5Ui{background-color:var(--disabled);cursor:not-allowed;color:var(--greyed-out)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": `InputWrapper-module__sr-only--_BGLV`,
	"hidden": `InputWrapper-module__hidden--j7j0R`,
	"slide-in": `InputWrapper-module__slide-in--PMOZy`,
	"slide-out": `InputWrapper-module__slide-out--ghrlP`,
	"floating-label": `InputWrapper-module__floating-label--aGgwG`,
	"input-wrapper-helper": `InputWrapper-module__input-wrapper-helper--GKzdc`,
	"input-wrapper": `InputWrapper-module__input-wrapper--x9INE`,
	"disabled": `InputWrapper-module__disabled--TE5Ui`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "?4f7e":
/***/ (() => {

/* (ignored) */

/***/ })

}]);