"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9100],{

/***/ "./stories/hooks/useRepeater.stories.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Repeater": function() { return /* binding */ Repeater; },
  "__namedExportsOrder": function() { return /* binding */ __namedExportsOrder; },
  "default": function() { return /* binding */ useRepeater_stories; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx + 1 modules
var InputWrapper = __webpack_require__("./src/components/Form/Wrapper/InputWrapper/InputWrapper.tsx");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/hooks/useRepeater.ts
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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



var useRepeater = function useRepeater(_ref) {
  var componentToRepeat = _ref.componentToRepeat;
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    repeatedComponents = _useState2[0],
    setRepeatedComponents = _useState2[1];
  (0,react.useEffect)(function () {
    repeat();
  }, []);
  var repeat = function repeat() {
    var clonedComponent = /*#__PURE__*/react.cloneElement(componentToRepeat, {
      key: (0,helper/* generateID */.y)(20)
    });
    setRepeatedComponents(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [clonedComponent]);
    });
  };
  var remove = function remove(componentToRemove) {
    var newRepeatedComponents = repeatedComponents.filter(function (component) {
      return component !== componentToRemove;
    });
    setRepeatedComponents(newRepeatedComponents);
  };
  return {
    repeatedComponents: repeatedComponents,
    repeat: repeat,
    remove: remove
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
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ./stories/hooks/useRepeater.mdx



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
}
/* harmony default export */ var hooks_useRepeater = (MDXContent);

;// CONCATENATED MODULE: ./stories/hooks/useRepeater.stories.tsx
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var _Repeater$parameters, _Repeater$parameters2, _Repeater$parameters3;
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
function useRepeater_stories_slicedToArray(arr, i) {
  return useRepeater_stories_arrayWithHoles(arr) || useRepeater_stories_iterableToArrayLimit(arr, i) || useRepeater_stories_unsupportedIterableToArray(arr, i) || useRepeater_stories_nonIterableRest();
}
function useRepeater_stories_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useRepeater_stories_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useRepeater_stories_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useRepeater_stories_arrayLikeToArray(o, minLen);
}
function useRepeater_stories_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function useRepeater_stories_iterableToArrayLimit(arr, i) {
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
function useRepeater_stories_arrayWithHoles(arr) {
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









var meta = {
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
/* harmony default export */ var useRepeater_stories = (meta);
var ComponentToRepeat = function ComponentToRepeat(_ref) {
  var onChange = _ref.onChange,
    identifier = _ref.identifier;
  var _useState = (0,react.useState)({
      errorMessage: "random error",
      error: false,
      value: "",
      identifier: identifier
    }),
    _useState2 = useRepeater_stories_slicedToArray(_useState, 2),
    inputState = _useState2[0],
    setInputState = _useState2[1];
  (0,react.useEffect)(function () {
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
    onChange: function onChange(event) {
      setInputState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          value: event.target.value
        });
      });
    }
  });
};
var Template = function Template() {
  var _useState3 = (0,react.useState)([]),
    _useState4 = useRepeater_stories_slicedToArray(_useState3, 1),
    tags = _useState4[0];
  var onChangeHandler = function onChangeHandler(state) {
    console.warn(state);
    console.warn("executing on change handler");
  };
  var _useRepeater = useRepeater({
      componentToRepeat: /*#__PURE__*/react.createElement(ComponentToRepeat, {
        onChange: onChangeHandler
      })
    }),
    repeatedComponents = _useRepeater.repeatedComponents,
    repeat = _useRepeater.repeat,
    remove = _useRepeater.remove;
  (0,react.useEffect)(function () {}, [repeatedComponents]);
  (0,react.useEffect)(function () {
    console.warn(tags);
  }, [tags]);
  return /*#__PURE__*/react.createElement("div", null, repeatedComponents.map(function (component, index) {
    return /*#__PURE__*/react.createElement("div", {
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
        marginTop: "10px",
        marginLeft: "8px"
      }
    }, /*#__PURE__*/react.createElement(IconButton/* IconButton */.h, {
      title: "Remove repeated component",
      onClick: function onClick() {
        return remove(component);
      }
    }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      icon: Icon/* Icons.Trash */.P.Trash
    }))));
  }), /*#__PURE__*/react.createElement(Button/* Button */.z, {
    onClick: repeat
  }, "Add tag!"));
};
var Repeater = Template.bind({});
Repeater.args = {};
Repeater.parameters = _objectSpread(_objectSpread({}, Repeater.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Repeater$parameters = Repeater.parameters) === null || _Repeater$parameters === void 0 ? void 0 : _Repeater$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  const [tags] = useState([]);\n  const onChangeHandler = state => {\n    console.warn(state);\n    console.warn(\"executing on change handler\");\n  };\n  const {\n    repeatedComponents,\n    repeat,\n    remove\n  } = useRepeater<RepeatedComponentProps>({\n    componentToRepeat: <ComponentToRepeat onChange={onChangeHandler} />\n  });\n  useEffect(() => {}, [repeatedComponents]);\n  useEffect(() => {\n    console.warn(tags);\n  }, [tags]);\n  return <div>\n      {repeatedComponents.map((component, index) => <div style={{\n      display: \"flex\",\n      width: \"100%\",\n      marginBottom: \"16px\"\n    }} key={component.key}>\n          <div style={{\n        flexGrow: \"1\"\n      }}>\n            {React.cloneElement(component, {\n          identifier: generateID()\n        })}\n          </div>\n          {index !== 0 && <div style={{\n        marginTop: \"10px\",\n        marginLeft: \"8px\"\n      }}>\n              <IconButton title=\"Remove repeated component\" onClick={() => remove(component)}>\n                <Icon icon={Icons.Trash} />\n              </IconButton>\n            </div>}\n        </div>)}\n      <Button onClick={repeat}>Add tag!</Button>\n    </div>;\n}"
    }, (_Repeater$parameters2 = Repeater.parameters) === null || _Repeater$parameters2 === void 0 ? void 0 : (_Repeater$parameters3 = _Repeater$parameters2.docs) === null || _Repeater$parameters3 === void 0 ? void 0 : _Repeater$parameters3.source)
  })
});
var __namedExportsOrder = ["Repeater"];

/***/ })

}]);