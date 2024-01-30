"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[2724],{

/***/ "./stories/Tooltip/Tooltip.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tooltip: () => (/* binding */ Tooltip_stories_Tooltip),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Tooltip_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__("./src/components/Tooltip/Tooltip.tsx");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
;// CONCATENATED MODULE: ./stories/Tooltip/Tooltip.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    a: "a",
    strong: "strong",
    h2: "h2",
    h1: "h1",
    pre: "pre"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Title */.Dx, {}), "\n", (0,jsx_runtime.jsx)(dist/* Subtitle */.QE, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tooltip"
      }), " component is used to give the end user information related to an element on the page. For instance, it might be used to give information about an input field in a form. It uses the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/hooks-useposition--page",
        children: "usePosition hook"
      }), " under the hood.\nIn order to place the tooltip according to how you would like, you can use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " props. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "where"
      }), " the tooltip should be placed. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " prop defines ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "how"
      }), " the tooltip should be placed. For instance, if you set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location=\"top\""
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position=\"center\""
      }), ", the tooltip will be placed above the element, and centered horizontally. If you set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location=\"top\""
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position=\"left\""
      }), ", the tooltip will be placed above the element, and aligned to the left of the element. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop can be one of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bottom"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "left"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "right"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " prop can be one of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "center"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start"
      }), " position is the top or left side of the element, depending on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end"
      }), " position is the bottom or right side of the element, depending on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "location"
      }), " prop. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "center"
      }), " position is the center of the element."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can define a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " prop which displays text, followed by an ", (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
        icon: Icon/* Icons */.P.InfoCircle
      }), " icon. The contents in between the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Tooltip></Tooltip>"
      }), " tags becomes the content of the popup that appears when you hover over the icon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tooltip-properties",
      children: "Tooltip properties"
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            children: "Property"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Type"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Default"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Description"
          }), (0,jsx_runtime.jsx)("th", {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)("tbody", {
        children: [(0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "label"
          }), (0,jsx_runtime.jsx)("td", {
            children: "ReactNode"
          }), (0,jsx_runtime.jsx)("td", {}), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "The text that will be displayed next to the <Icon icon={Icons.InfoCircle} /> icon."
            })
          }), (0,jsx_runtime.jsx)("td", {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "title"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {}), (0,jsx_runtime.jsx)("td", {
            children: "The title that will be displayed in the tooltip popup."
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "children"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {}), (0,jsx_runtime.jsx)("td", {
            children: "The content that will be displayed in the tooltip popup."
          }), (0,jsx_runtime.jsx)("td", {
            children: "yes"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "location"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {
            children: "top"
          }), (0,jsx_runtime.jsxs)("td", {
            children: ["The location of the tooltip popup. Can be one of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "top"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bottom"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "left"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "right"
            }), "."]
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        }), (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: "position"
          }), (0,jsx_runtime.jsx)("td", {
            children: "string"
          }), (0,jsx_runtime.jsx)("td", {
            children: "center"
          }), (0,jsx_runtime.jsxs)("td", {
            children: ["The position of the tooltip popup. Can be one of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "start"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "center"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "end"
            }), "."]
          }), (0,jsx_runtime.jsx)("td", {
            children: "no"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from \"react\";\nimport Tooltip from \"@onewelcome/react-lib-components\";\n\nconst Example = () => (\n  <Tooltip title=\"Example tooltip\" label=\"This is a tooltip\" location=\"top\" position=\"center\">\n    This is the content that will be displayed when you hover over the icon.\n  </Tooltip>\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Xz, {
      children: (0,jsx_runtime.jsx)(dist/* Story */.oG, {
        of: Tooltip_stories_Tooltip
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
/* harmony default export */ const Tooltip_Tooltip = (MDXContent);

// EXTERNAL MODULE: ./node_modules/@storybook/testing-library/dist/index.mjs + 89 modules
var testing_library_dist = __webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/jest/dist/index.mjs + 13 modules
var jest_dist = __webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");
// EXTERNAL MODULE: ./stories/utils/useStoryCentring.ts
var useStoryCentring = __webpack_require__("./stories/utils/useStoryCentring.ts");
// EXTERNAL MODULE: ./.storybook/conditionalPlay.ts + 1 modules
var conditionalPlay = __webpack_require__("./.storybook/conditionalPlay.ts");
;// CONCATENATED MODULE: ./stories/Tooltip/Tooltip.stories.tsx
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
  title: "components/Data Display/Tooltip",
  component: Tooltip/* Tooltip */.u,
  parameters: {
    docs: {
      page: Tooltip_Tooltip
    },
    chromatic: {
      delay: 300
    }
  }
};
/* harmony default export */ const Tooltip_stories = (meta);
const Template = args => {
  (0,useStoryCentring/* useStoryCentring */.g)();
  return /*#__PURE__*/react.createElement(Tooltip/* Tooltip */.u, args);
};
const Tooltip_stories_Tooltip = Template.bind({});
Tooltip_stories_Tooltip.play = (0,conditionalPlay/* conditionalPlay */.B)(async _ref => {
  var _await$canvas$findByT;
  let {
    canvasElement
  } = _ref;
  const canvas = (0,testing_library_dist/* within */.uh)(canvasElement);
  await (0,testing_library_dist/* waitFor */.X_)(() => (0,jest_dist/* expect */.l)(canvas.queryByText("Example label")).not.toBeNull());
  const infoIcon = (_await$canvas$findByT = (await canvas.findByText("Example label")).closest("div")) === null || _await$canvas$findByT === void 0 ? void 0 : _await$canvas$findByT.querySelector("[data-icon]");
  await (0,jest_dist/* expect */.l)(infoIcon).not.toBeNull();
  await testing_library_dist/* userEvent */.mV.hover(infoIcon);
});
Tooltip_stories_Tooltip.args = {
  title: "Tooltip title.",
  children: "Write the tooltip content here.",
  label: "Example label",
  location: "right",
  position: "center"
};
Tooltip_stories_Tooltip.parameters = {
  ...Tooltip_stories_Tooltip.parameters,
  docs: {
    ...Tooltip_stories_Tooltip.parameters?.docs,
    source: {
      originalSource: "args => {\n  useStoryCentring();\n  return <TooltipComponent {...args} />;\n}",
      ...Tooltip_stories_Tooltip.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Tooltip"];

/***/ }),

/***/ "./src/hooks/usePosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Sl: () => (/* binding */ horizontal),
  Ki: () => (/* binding */ usePosition),
  KR: () => (/* binding */ vertical)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// CONCATENATED MODULE: ./src/hooks/useDebouncedCallback.tsx
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


const useDebouncedCallback = (callback, delay, dependencies) => {
  const timeout = react.useRef();
  const comboDeps = dependencies ? [callback, delay, ...dependencies] : [callback, delay];
  return react.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeout.current != null) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, comboDeps);
};
;// CONCATENATED MODULE: ./src/hooks/usePosition.ts
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



let horizontal = /*#__PURE__*/function (horizontal) {
  horizontal["LEFT"] = "left";
  horizontal["CENTER"] = "center";
  horizontal["CENTER_H"] = "centerh";
  horizontal["RIGHT"] = "right";
  return horizontal;
}({});
let vertical = /*#__PURE__*/function (vertical) {
  vertical["TOP"] = "top";
  vertical["CENTER"] = "center";
  vertical["CENTER_V"] = "centerv";
  vertical["BOTTOM"] = "bottom";
  return vertical;
}({});
const defaultConfigObject = {
  relativeElement: undefined,
  elementToBePositioned: undefined,
  transformOrigin: {
    horizontal: "left",
    vertical: "top"
  },
  placement: {
    horizontal: "left",
    vertical: "top"
  },
  offset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  debounceAmount: 20
};

/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain*/
const usePosition = function () {
  var _configObject$debounc;
  let providedConfigObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfigObject;
  const configObject = {
    ...defaultConfigObject,
    ...providedConfigObject
  };
  const [initialCalculationDone, setInitialCalculationDone] = (0,react.useState)(false);
  if (configObject.transformOrigin === undefined) {
    configObject.transformOrigin = defaultConfigObject.transformOrigin;
  }
  if (configObject.placement === undefined) {
    configObject.placement = defaultConfigObject.placement;
  }
  if (configObject.offset === undefined) {
    configObject.offset = defaultConfigObject.offset;
  }
  const [position, setPosition] = (0,react.useState)({
    left: 0,
    top: 0,
    right: "initial",
    bottom: "initial"
  });
  const _fixPossibleViewportOverflow = (value, transformOrigin, requestedReturnValue, elDimensions) => {
    let returnValue = value;
    if (transformOrigin[requestedReturnValue] === "left" && returnValue < 0 || transformOrigin[requestedReturnValue] === "top" && returnValue < 0 || transformOrigin[requestedReturnValue] === "center" && returnValue < 0 || transformOrigin[requestedReturnValue] === "bottom" && returnValue < 0) {
      returnValue = 0;
    }
    if (transformOrigin[requestedReturnValue] === "left" && returnValue > window.innerWidth - elDimensions.width || transformOrigin[requestedReturnValue] === "center" && requestedReturnValue === "horizontal" && returnValue > window.innerWidth - elDimensions.width) {
      returnValue = window.innerWidth - elDimensions.width;
    }
    if (transformOrigin[requestedReturnValue] === "top" && returnValue > window.innerHeight - elDimensions.height || transformOrigin[requestedReturnValue] === "center" && requestedReturnValue === "vertical" && returnValue > window.innerHeight - elDimensions.height) {
      returnValue = window.innerHeight - elDimensions.height;
    }
    if (transformOrigin[requestedReturnValue] === "right" && returnValue > window.innerWidth - elDimensions.width) {
      returnValue = window.innerWidth - elDimensions.width;
    }
    if (transformOrigin[requestedReturnValue] === "bottom" && returnValue > window.innerHeight - elDimensions.height) {
      returnValue = window.innerHeight - elDimensions.height;
    }
    return returnValue;
  };
  const _applyOffsetToPlacementValue = (value, requestedReturnValue, transformOrigin) => {
    var _configObject$offset, _configObject$offset2, _configObject$offset7, _configObject$offset8;
    let returnValue = value;
    if (requestedReturnValue === "horizontal" && ((_configObject$offset = configObject.offset) === null || _configObject$offset === void 0 ? void 0 : _configObject$offset.left) !== 0 || requestedReturnValue === "horizontal" && ((_configObject$offset2 = configObject.offset) === null || _configObject$offset2 === void 0 ? void 0 : _configObject$offset2.right) !== 0) {
      if (transformOrigin[requestedReturnValue] === "left" || transformOrigin[requestedReturnValue] === "center") {
        var _configObject$offset3, _configObject$offset4;
        returnValue += (_configObject$offset3 = configObject.offset) === null || _configObject$offset3 === void 0 ? void 0 : _configObject$offset3.left;
        returnValue -= (_configObject$offset4 = configObject.offset) === null || _configObject$offset4 === void 0 ? void 0 : _configObject$offset4.right;
      }
      if (transformOrigin[requestedReturnValue] === "right") {
        var _configObject$offset5, _configObject$offset6;
        returnValue -= (_configObject$offset5 = configObject.offset) === null || _configObject$offset5 === void 0 ? void 0 : _configObject$offset5.left;
        returnValue += (_configObject$offset6 = configObject.offset) === null || _configObject$offset6 === void 0 ? void 0 : _configObject$offset6.right;
      }
    }
    if (requestedReturnValue === "vertical" && ((_configObject$offset7 = configObject.offset) === null || _configObject$offset7 === void 0 ? void 0 : _configObject$offset7.top) !== 0 || requestedReturnValue === "vertical" && ((_configObject$offset8 = configObject.offset) === null || _configObject$offset8 === void 0 ? void 0 : _configObject$offset8.bottom) !== 0) {
      if (transformOrigin[requestedReturnValue] === "top" || transformOrigin[requestedReturnValue] === "center") {
        var _configObject$offset9, _configObject$offset10;
        returnValue += (_configObject$offset9 = configObject.offset) === null || _configObject$offset9 === void 0 ? void 0 : _configObject$offset9.top;
        returnValue -= (_configObject$offset10 = configObject.offset) === null || _configObject$offset10 === void 0 ? void 0 : _configObject$offset10.bottom;
      }
      if (transformOrigin[requestedReturnValue] === "bottom") {
        var _configObject$offset11, _configObject$offset12;
        returnValue -= (_configObject$offset11 = configObject.offset) === null || _configObject$offset11 === void 0 ? void 0 : _configObject$offset11.top;
        returnValue += (_configObject$offset12 = configObject.offset) === null || _configObject$offset12 === void 0 ? void 0 : _configObject$offset12.bottom;
      }
    }
    return returnValue;
  };
  const _calculateInitialPlacementValue = (transformOrigin, requestedReturnValue, relEl, placementOriginDefinition, elDimensions) => {
    let value = 0;
    if (transformOrigin[requestedReturnValue] === "left" || transformOrigin[requestedReturnValue] === "top") {
      value = relEl[placementOriginDefinition];
    } else if (transformOrigin[requestedReturnValue] === "center") {
      value = relEl[placementOriginDefinition] - elDimensions[requestedReturnValue === "horizontal" ? "width" : "height"] / 2;
    } else if (transformOrigin[requestedReturnValue] === "right" || transformOrigin[requestedReturnValue] === "bottom") {
      value = window[requestedReturnValue === "horizontal" ? "innerWidth" : "innerHeight"] - relEl[placementOriginDefinition];
    }
    return value;
  };

  /**
   *
   * @param requestedReturnValue whether the requested return value is for the horizontal or vertical axis
   * @returns either the horizontally centered placement definition (centerh) or the vertically centered one (centerv)
   */
  const _determineCenteredPlacementOrigin = requestedReturnValue => {
    if (requestedReturnValue === "horizontal") {
      return "centerh";
    } else if (requestedReturnValue === "vertical") {
      return "centerv";
    }
    throw new Error("the requested return value isn't \"vertical\" or \"horizontal\" ".concat(requestedReturnValue, " was given."));
  };
  const _calculatePlacementValue = (transformOrigin, placement, requestedReturnValue, relEl, elDimensions) => {
    const placementOriginDefinition = placement === "center" ? _determineCenteredPlacementOrigin(requestedReturnValue) : placement;
    const value = _calculateInitialPlacementValue(transformOrigin, requestedReturnValue, relEl, placementOriginDefinition, elDimensions);
    const valueWithOffset = _applyOffsetToPlacementValue(value, requestedReturnValue, transformOrigin);
    const valueCorrectionForViewportOverflow = _fixPossibleViewportOverflow(valueWithOffset, transformOrigin, requestedReturnValue, elDimensions);
    return valueCorrectionForViewportOverflow;
  };
  const _calculatePlacement = (relEl, elDimensions, axis) => {
    var _configObject$transfo, _configObject$transfo2;
    const placementValue = _calculatePlacementValue(configObject.transformOrigin, configObject.placement[axis], axis, relEl, elDimensions);
    let direction = "left";
    let oppositeDirection = "right";
    if (axis === "horizontal" && ((_configObject$transfo = configObject.transformOrigin) === null || _configObject$transfo === void 0 ? void 0 : _configObject$transfo.horizontal) === "right") {
      direction = "right";
      oppositeDirection = "left";
    } else if (axis === "horizontal") {
      direction = "left";
      oppositeDirection = "right";
    }
    if (axis === "vertical" && ((_configObject$transfo2 = configObject.transformOrigin) === null || _configObject$transfo2 === void 0 ? void 0 : _configObject$transfo2.vertical) === "bottom") {
      direction = "bottom";
      oppositeDirection = "top";
    } else if (axis === "vertical") {
      direction = "top";
      oppositeDirection = "bottom";
    }
    setPosition(prevState => ({
      ...prevState,
      [direction]: placementValue,
      [oppositeDirection]: "initial"
    }));
  };
  const calculatePosition = useDebouncedCallback(() => {
    var _configObject$relativ, _configObject$element;
    if (!((_configObject$relativ = configObject.relativeElement) !== null && _configObject$relativ !== void 0 && _configObject$relativ.current) || !((_configObject$element = configObject.elementToBePositioned) !== null && _configObject$element !== void 0 && _configObject$element.current)) return;
    const relativeElRect = configObject.relativeElement.current.getBoundingClientRect();
    const elementToBePositionedDimensions = {
      height: configObject.elementToBePositioned.current.offsetHeight,
      width: configObject.elementToBePositioned.current.offsetWidth
    };

    /** We want to add a center (horizontal and vertical) property to the DOMRect object. Since it's a special object we can't modify so we clone it and add it. */
    const clonedRelEl = {
      top: relativeElRect.top,
      right: relativeElRect.right,
      bottom: relativeElRect.bottom,
      center: 0,
      centerv: relativeElRect.top + relativeElRect.height / 2,
      centerh: relativeElRect.left + relativeElRect.width / 2,
      left: relativeElRect.left,
      width: relativeElRect.width,
      height: relativeElRect.height,
      x: relativeElRect.x,
      y: relativeElRect.y
    };
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "horizontal");
    _calculatePlacement(clonedRelEl, elementToBePositionedDimensions, "vertical");
    if (!initialCalculationDone) {
      setInitialCalculationDone(true);
    }
  }, (_configObject$debounc = configObject.debounceAmount) !== null && _configObject$debounc !== void 0 ? _configObject$debounc : 20);
  return {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    calculatePosition,
    initialCalculationDone
  };
};

/***/ })

}]);