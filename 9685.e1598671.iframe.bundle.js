"use strict";
(self["webpackChunk_onewelcome_react_lib_components"] = self["webpackChunk_onewelcome_react_lib_components"] || []).push([[9685],{

/***/ "./src/components/Form/Select/Select.tsx":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: function() { return /* binding */ Select; }
});

// EXTERNAL MODULE: ./src/components/Form/Select/Select.module.scss
var Select_module = __webpack_require__("./src/components/Form/Select/Select.module.scss");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/Form/Input/Input.tsx + 1 modules
var Input = __webpack_require__("./src/components/Form/Input/Input.tsx");
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
// EXTERNAL MODULE: ./src/hooks/useBodyClick.ts
var useBodyClick = __webpack_require__("./src/hooks/useBodyClick.ts");
// EXTERNAL MODULE: ./src/readyclasses.module.scss
var readyclasses_module = __webpack_require__("./src/readyclasses.module.scss");
// EXTERNAL MODULE: ./src/util/helper.tsx
var helper = __webpack_require__("./src/util/helper.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/SelectService.ts
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
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


var useArrowNavigation = function useArrowNavigation(_ref) {
  var expanded = _ref.expanded,
    setExpanded = _ref.setExpanded,
    isSearching = _ref.isSearching,
    setIsSearching = _ref.setIsSearching,
    setFocusedSelectItem = _ref.setFocusedSelectItem,
    onOptionChangeHandler = _ref.onOptionChangeHandler,
    childrenCount = _ref.childrenCount,
    setShouldClick = _ref.setShouldClick,
    searchInputRef = _ref.searchInputRef,
    renderSearchCondition = _ref.renderSearchCondition;
  var onArrowNavigation = function onArrowNavigation(event) {
    var codesToPreventDefault = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space", "Escape", "End", "Home"];
    var codesToPreventDefaultWhenSearching = ["ArrowDown", "ArrowUp", "Enter", "Escape", "MetaLeft", "MetaRight"];

    /** If the select is expanded, we also want to control the Tab key */
    if (expanded) {
      codesToPreventDefault.push("Tab");
    }

    /** We will handle the way certain key strokes affect the Select, unless we're searching */
    if (codesToPreventDefault.includes(event.code) && !event.metaKey && !isSearching) {
      event.preventDefault();
    }
    if (isSearching && codesToPreventDefaultWhenSearching.includes(event.code)) {
      event.preventDefault();
    }
    if (isSearching) {
      switch (event.code) {
        case "ArrowDown":
        case "Enter":
          setIsSearching(false);
          setFocusedSelectItem(0);
          return;
        case "ArrowUp":
          setIsSearching(false);
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "Escape":
        case "Tab":
          setIsSearching(false);
          setExpanded(false);
      }
    } else {
      switch (event.code) {
        case "ArrowDown":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          setFocusedSelectItem(function (prevState) {
            return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
          });
          return;
        case "ArrowUp":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(childrenCount - 1);
            return;
          }
          setFocusedSelectItem(function (prevState) {
            return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
          });
          return;
        case "Space":
          if (!expanded) {
            setExpanded(true);
            setFocusedSelectItem(0);
            return;
          }
          onOptionChangeHandler(event.target);
          setShouldClick(true);
          setExpanded(false);
          return;
        case "Enter":
        case "Home":
          setFocusedSelectItem(0);
          return;
        case "Tab":
          if (childrenCount >= renderSearchCondition && expanded) {
            var _searchInputRef$curre;
            setIsSearching(true);
            (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 || _searchInputRef$curre.focus();
            return;
          }
          setExpanded(false);
          return;
        case "Escape":
          if (expanded) {
            setExpanded(false);
          }
          return;
        case "End":
          setFocusedSelectItem(childrenCount - 1);
          return;
        case "ArrowLeft":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(0);
          }
          return;
        case "ArrowRight":
          if (event.metaKey && expanded) {
            event.preventDefault();
            setFocusedSelectItem(childrenCount - 1);
          }
          return;
      }
    }
  };
  return {
    onArrowNavigation: onArrowNavigation
  };
};
var useSelectPositionList = function useSelectPositionList(_ref2) {
  var expanded = _ref2.expanded,
    optionListReference = _ref2.optionListReference,
    containerReference = _ref2.containerReference;
  var _useState = (0,react.useState)("none"),
    _useState2 = _slicedToArray(_useState, 2),
    optionsListMaxHeight = _useState2[0],
    setOptionsListMaxHeight = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    opacity = _useState4[0],
    setOpacity = _useState4[1]; // We set opacity because other wise if we calculate the max height you see the list full height for a split second and then it shortens.
  var _useState5 = (0,react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    listPosition = _useState6[0],
    setListPosition = _useState6[1];
  (0,react.useEffect)(function () {
    rePositionList();
  }, [expanded]);
  var rePositionList = function rePositionList() {
    if (!expanded || !optionListReference.current || !containerReference.current) {
      return;
    }

    // Check whether there is more space above or below the select
    // Check space between the bottom of select and top of viewport
    var spaceOnTopOfSelect = containerReference.current.getBoundingClientRect().bottom;

    // Check space between the top of the select and bottom of viewport
    var spaceOnBottomOfSelect = window.innerHeight - containerReference.current.getBoundingClientRect().top;

    // Set position as if there's more space on the bottom
    var position = {
      top: "2.75rem",
      bottom: "initial"
    };

    // Set the position of the select
    if (spaceOnTopOfSelect > spaceOnBottomOfSelect) {
      position = {
        top: "initial",
        bottom: "2.75rem"
      };
    }
    setListPosition(position);

    // Calculate the potential max height of the options list
    calculateOptionListMaxHeight(position);
  };
  var calculateOptionListMaxHeight = function calculateOptionListMaxHeight(position) {
    var _optionListReference$;
    // Calculate max height if there's more space below the select
    var listHeight = (_optionListReference$ = optionListReference.current) === null || _optionListReference$ === void 0 ? void 0 : _optionListReference$.getBoundingClientRect().height;
    var transformOrigin = position.top !== "initial" ? "top" : "bottom";
    if (!containerReference.current) {
      console.error("The containerReference is empty for some reason in the SelectService.ts for the Select component in react-lib-components. We are trying to calculate the option list max height on expand");
      return;
    }
    var availableSpace = transformOrigin === "top" ? window.innerHeight - containerReference.current.getBoundingClientRect()[transformOrigin] - 16 : containerReference.current.getBoundingClientRect()[transformOrigin] - 16;
    if (listHeight && availableSpace < listHeight) {
      setOptionsListMaxHeight("".concat(availableSpace, "px"));
      setOpacity(100);
      return;
    }
    setOptionsListMaxHeight("none");
    setOpacity(100);
  };
  return {
    optionsListMaxHeight: optionsListMaxHeight,
    opacity: opacity,
    setOpacity: setOpacity,
    listPosition: listPosition,
    setListPosition: setListPosition
  };
};
// EXTERNAL MODULE: ./src/hooks/useDetermineStatusIcon.tsx
var useDetermineStatusIcon = __webpack_require__("./src/hooks/useDetermineStatusIcon.tsx");
;// CONCATENATED MODULE: ./src/components/Form/Select/Select.tsx
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["children", "name", "disabled", "labeledBy", "placeholder", "describedBy", "searchPlaceholder", "searchInputProps", "selectButtonProps", "className", "error", "success", "value", "clearLabel", "noResultsLabel", "onChange"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
function Select_slicedToArray(arr, i) {
  return Select_arrayWithHoles(arr) || Select_iterableToArrayLimit(arr, i) || Select_unsupportedIterableToArray(arr, i) || Select_nonIterableRest();
}
function Select_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Select_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Select_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Select_arrayLikeToArray(o, minLen);
}
function Select_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function Select_iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function Select_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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










/** Amount of items to be rendered before a search input is rendered */
var renderSearchCondition = 10;
var SelectComponent = function SelectComponent(_ref, ref) {
  var children = _ref.children,
    name = _ref.name,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    labeledBy = _ref.labeledBy,
    placeholder = _ref.placeholder,
    describedBy = _ref.describedBy,
    _ref$searchPlaceholde = _ref.searchPlaceholder,
    searchPlaceholder = _ref$searchPlaceholde === void 0 ? "Search item" : _ref$searchPlaceholde,
    searchInputProps = _ref.searchInputProps,
    selectButtonProps = _ref.selectButtonProps,
    className = _ref.className,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$success = _ref.success,
    success = _ref$success === void 0 ? false : _ref$success,
    value = _ref.value,
    _ref$clearLabel = _ref.clearLabel,
    clearLabel = _ref$clearLabel === void 0 ? "Clear selection" : _ref$clearLabel,
    _ref$noResultsLabel = _ref.noResultsLabel,
    noResultsLabel = _ref$noResultsLabel === void 0 ? "No results found" : _ref$noResultsLabel,
    onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,react.useState)(false),
    _useState2 = Select_slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = Select_slicedToArray(_useState3, 2),
    filter = _useState4[0],
    setFilter = _useState4[1];
  var _useState5 = (0,react.useState)(""),
    _useState6 = Select_slicedToArray(_useState5, 2),
    display = _useState6[0],
    setDisplay = _useState6[1];
  var containerReference = (0,react.useRef)(null);
  var optionListReference = (0,react.useRef)(null);
  var _useState7 = (0,react.useState)(false),
    _useState8 = Select_slicedToArray(_useState7, 2),
    isSearching = _useState8[0],
    setIsSearching = _useState8[1];
  var _useState9 = (0,react.useState)(-1),
    _useState10 = Select_slicedToArray(_useState9, 2),
    focusedSelectItem = _useState10[0],
    setFocusedSelectItem = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = Select_slicedToArray(_useState11, 2),
    shouldClick = _useState12[0],
    setShouldClick = _useState12[1]; /** We need this, because whenever we use the arrow keys to select the select item, and we focus the currently selected item it fires the "click" listener in Option component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  var _useState13 = (0,react.useState)(false),
    _useState14 = Select_slicedToArray(_useState13, 2),
    shouldFocusButtonAfterClose = _useState14[0],
    setShouldFocusButtonAfterClose = _useState14[1];
  var nativeSelect = ref || /*#__PURE__*/(0,react.createRef)();
  var searchInputRef = (0,react.useRef)(null);
  var onOptionChangeHandler = function onOptionChangeHandler(optionElement) {
    if (nativeSelect.current && optionElement) {
      nativeSelect.current.value = optionElement.getAttribute("data-value");
      nativeSelect.current.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    }
    setExpanded(false);
  };
  var customSelectButtonRef = (0,react.useRef)(null);
  var _useArrowNavigation = useArrowNavigation({
      expanded: expanded,
      setExpanded: setExpanded,
      isSearching: isSearching,
      setIsSearching: setIsSearching,
      setFocusedSelectItem: setFocusedSelectItem,
      onOptionChangeHandler: onOptionChangeHandler,
      childrenCount: react.Children.count(children),
      setShouldClick: setShouldClick,
      searchInputRef: searchInputRef,
      renderSearchCondition: renderSearchCondition
    }),
    onArrowNavigation = _useArrowNavigation.onArrowNavigation;
  var _useSelectPositionLis = useSelectPositionList({
      expanded: expanded,
      optionListReference: optionListReference,
      containerReference: containerReference
    }),
    listPosition = _useSelectPositionLis.listPosition,
    opacity = _useSelectPositionLis.opacity,
    optionsListMaxHeight = _useSelectPositionLis.optionsListMaxHeight,
    setListPosition = _useSelectPositionLis.setListPosition,
    setOpacity = _useSelectPositionLis.setOpacity;
  var syncDisplayValue = function syncDisplayValue(val) {
    react.Children.forEach(children, function (child) {
      if (child.props.value === val) {
        setDisplay(child.props.children);
      }
    });
  };

  /**
   * @description We have to modify the children (Option component) to have a additional props that allows us to keep track of which one is selected and focused at all times and if a filter is active.
   * The `children` prop can be either a single object (1 child) or an array of multiple children.
   */
  var renderOptions = function renderOptions() {
    if (isSearching || filter !== "") {
      var filteredChildren = react.Children.toArray(children).filter(function (child) {
        return child.props.children.toLowerCase().match(filter.toLowerCase()) !== null;
      });
      var internalChildren = _internalRenderChildren(filteredChildren);
      if (internalChildren.length === 0) {
        return /*#__PURE__*/react.createElement("li", {
          className: Select_module/* default */.Z["no-results"]
        }, noResultsLabel);
      }
      return _internalRenderChildren(filteredChildren);
    }
    return _internalRenderChildren(children);
    function _internalRenderChildren(internalChildren) {
      return react.Children.map(internalChildren, function (child, index) {
        return /*#__PURE__*/react.cloneElement(child, {
          onFocusChange: function onFocusChange(childIndex) {
            setFocusedSelectItem(childIndex);
          },
          onOptionSelect: function onOptionSelect(optionRef) {
            onOptionChangeHandler(optionRef.current);
            setShouldClick(false);
          },
          isSelected: child.props.value === value,
          isSearching: isSearching,
          selectOpened: expanded,
          childIndex: index,
          hasFocus: focusedSelectItem === index,
          shouldClick: shouldClick
        });
      });
    }
  };
  var shouldRenderSearch = expanded && Array.isArray(children) && children.length > renderSearchCondition;
  var renderSearch = function renderSearch() {
    var _searchInputProps$wra;
    return /*#__PURE__*/react.createElement(Input/* Input */.I, _extends({}, searchInputProps, {
      ref: searchInputRef,
      onFocus: function onFocus() {
        return setIsSearching(true);
      },
      onBlur: function onBlur() {
        return setIsSearching(false);
      },
      onChange: filterResults,
      className: Select_module/* default */.Z["select-search"],
      wrapperProps: {
        className: searchInputProps === null || searchInputProps === void 0 || (_searchInputProps$wra = searchInputProps.wrapperProps) === null || _searchInputProps$wra === void 0 ? void 0 : _searchInputProps$wra.className
      },
      style: {
        display: expanded ? "block" : "none"
      },
      type: "text",
      name: "search-option",
      placeholder: searchPlaceholder
    }));
  };
  var renderChevronIcon = function renderChevronIcon() {
    return expanded ? /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: Select_module/* default */.Z["chevron-icon"],
      icon: Icon/* Icons */.P.ChevronUp
    }) : /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
      className: Select_module/* default */.Z["chevron-icon"],
      icon: Icon/* Icons */.P.ChevronDown
    });
  };
  var filterResults = function filterResults(event) {
    setFilter(event.currentTarget.value);
  };
  var icon = (0,useDetermineStatusIcon/* useDetermineStatusIcon */.U)({
    success: success,
    error: error
  });
  var nativeOnChangeHandler = function nativeOnChangeHandler(event) {
    onChange === null || onChange === void 0 || onChange(event);
  };
  (0,react.useEffect)(function () {
    if (expanded) {
      setFocusedSelectItem(0);
      setShouldFocusButtonAfterClose(true);
    }
    if (!expanded && customSelectButtonRef.current && shouldFocusButtonAfterClose) {
      customSelectButtonRef.current.focus();
      setShouldFocusButtonAfterClose(false);
    }
  }, [expanded, customSelectButtonRef.current, shouldFocusButtonAfterClose]);
  (0,react.useEffect)(function () {
    syncDisplayValue(value);
  }, [value]);
  (0,useBodyClick/* useBodyClick */.S)(function (event) {
    return !event.target.closest(".custom-select") && expanded;
  }, function () {
    setExpanded(false);
    setListPosition({
      top: 0,
      bottom: "initial"
    });
    setOpacity(0);
  }, expanded);
  var resetSearchState = function resetSearchState() {
    setFilter("");
    setIsSearching(false);
    setFocusedSelectItem(-1);
  };
  (0,react.useEffect)(function () {
    (searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset) && resetSearchState();
  }, [searchInputProps === null || searchInputProps === void 0 ? void 0 : searchInputProps.reset]);
  var additionalClasses = [];
  expanded && additionalClasses.push(Select_module/* default */.Z.expanded);
  error && additionalClasses.push(Select_module/* default */.Z.error);
  disabled && additionalClasses.push(Select_module/* default */.Z.disabled);
  className && additionalClasses.push(className);
  success && additionalClasses.push(Select_module/* default */.Z.success);

  /** The native select is purely for external form libraries. We use it to emit an onChange with native select event object so they know exactly what's happening. */
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("select", _extends({}, (0,helper/* filterProps */.L6)(rest, /^data-/, false), {
    tabIndex: -1,
    "aria-hidden": "true",
    ref: nativeSelect,
    name: name,
    onChange: nativeOnChangeHandler,
    className: readyclasses_module/* default */.Z["sr-only"]
  }), /*#__PURE__*/react.createElement("option", {
    value: ""
  }), react.Children.map(children, function (child) {
    return /*#__PURE__*/react.createElement("option", {
      value: child.props.value
    });
  })), /*#__PURE__*/react.createElement("div", _extends({}, (0,helper/* filterProps */.L6)(rest, /^data-/), {
    ref: containerReference,
    onKeyDown: onArrowNavigation,
    className: "custom-select ".concat(Select_module/* default */.Z.select, " ").concat(additionalClasses.join(" "), " ").concat(className !== null && className !== void 0 ? className : "")
  }), Array.isArray(children) && children.length > renderSearchCondition && renderSearch(), /*#__PURE__*/react.createElement("button", _extends({}, selectButtonProps, {
    onClick: function onClick() {
      setExpanded(!expanded);
    },
    ref: customSelectButtonRef,
    type: "button",
    name: name,
    className: "".concat(Select_module/* default */.Z["custom-select"], " ").concat(additionalClasses.join(" "), " "),
    style: {
      display: shouldRenderSearch ? "none" : "initial"
    },
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-invalid": error,
    "aria-expanded": expanded,
    "aria-haspopup": "listbox",
    "aria-labelledby": labeledBy,
    "aria-describedby": describedBy
  }), /*#__PURE__*/react.createElement("div", {
    "data-display": true,
    className: Select_module/* default */.Z["selected"]
  }, !value && placeholder && /*#__PURE__*/react.createElement("span", {
    className: Select_module/* default */.Z["placeholder"]
  }, placeholder), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/react.createElement("span", {
    "data-display-inner": true
  }, display)), /*#__PURE__*/react.createElement("div", {
    className: Select_module/* default */.Z["status"]
  }, icon || renderChevronIcon())), /*#__PURE__*/react.createElement("div", {
    ref: optionListReference,
    className: "list-wrapper ".concat(Select_module/* default */.Z["list-wrapper"]),
    style: _objectSpread({
      display: expanded ? "block" : "none",
      opacity: opacity,
      maxHeight: optionsListMaxHeight,
      pointerEvents: expanded ? "auto" : "none"
    }, listPosition)
  }, /*#__PURE__*/react.createElement("ul", {
    role: "listbox"
  }, renderOptions()))));
};
var Select = /*#__PURE__*/react.forwardRef(SelectComponent);
try {
    // @ts-ignore
    Select.displayName = "Select";
    // @ts-ignore
    Select.__docgenInfo = { "description": "", "displayName": "Select", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "((event: ChangeEvent<HTMLSelectElement>, child?: ReactElement<any, string | JSXElementConstructor<any>>) => void)" } }, "error": { "defaultValue": { value: "false" }, "description": "", "name": "error", "required": false, "type": { "name": "boolean" } }, "success": { "defaultValue": { value: "false" }, "description": "", "name": "success", "required": false, "type": { "name": "boolean" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "labeledBy": { "defaultValue": null, "description": "", "name": "labeledBy", "required": false, "type": { "name": "string" } }, "describedBy": { "defaultValue": null, "description": "", "name": "describedBy", "required": false, "type": { "name": "string" } }, "searchPlaceholder": { "defaultValue": { value: "Search item" }, "description": "", "name": "searchPlaceholder", "required": false, "type": { "name": "string" } }, "searchInputProps": { "defaultValue": null, "description": "", "name": "searchInputProps", "required": false, "type": { "name": "(Partial<Props> & { reset?: boolean; })" } }, "selectButtonProps": { "defaultValue": null, "description": "", "name": "selectButtonProps", "required": false, "type": { "name": "(Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\"> & { ...; })" } }, "clearLabel": { "defaultValue": { value: "Clear selection" }, "description": "", "name": "clearLabel", "required": false, "type": { "name": "string" } }, "noResultsLabel": { "defaultValue": { value: "No results found" }, "description": "", "name": "noResultsLabel", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Form/Select/Select.tsx#Select"] = { docgenInfo: Select.__docgenInfo, name: "Select", path: "src/components/Form/Select/Select.tsx#Select" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "./src/hooks/useBodyClick.ts":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ useBodyClick; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
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


var useBodyClick = function useBodyClick(checkFunction, callbackFunction, dependingStateVariable) {
  function bodyClickListener(event) {
    if (checkFunction(event)) {
      callbackFunction();
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("click", bodyClickListener);
    return function () {
      window.removeEventListener("click", bodyClickListener);
    };
  }, [dependingStateVariable]);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/Select.module.scss":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n *//*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Select-module__sr-only--abXQI{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.Select-module__hidden--Leydu{display:none}.Select-module__slide-in--Ekvcd{animation:Select-module__slide-in--Ekvcd .5s forwards}@media(prefers-reduced-motion: reduce){.Select-module__slide-in--Ekvcd{animation-duration:.1ms}}.Select-module__slide-out--VbE95{animation:Select-module__slide-out--VbE95 .5s forwards}@media(prefers-reduced-motion: reduce){.Select-module__slide-out--VbE95{animation-duration:.1ms}}@keyframes Select-module__slide-in--Ekvcd{0%{transform:translateY(100vh)}100%{transform:translateY(0%)}}@keyframes Select-module__slide-out--VbE95{0%{transform:translateY(0%)}100%{transform:translateY(100vh)}}/*!\n * Copyright 2022 OneWelcome B.V.\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.Select-module__select--CZdwK{position:relative;box-sizing:border-box;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out;border:0;border-radius:var(--input-border-radius);background-color:var(--input-background-color);font-size:var(--form-control-font-size)}@media(prefers-reduced-motion: reduce){.Select-module__select--CZdwK{transition-duration:.1ms}}.Select-module__select--CZdwK [data-display]{color:var(--color-default);font-family:var(--font-family)}.Select-module__select--CZdwK.Select-module__expanded--EvnX4 .Select-module__list-wrapper--pkehP{background:var(--light)}.Select-module__select--CZdwK:not(.Select-module__expanded--EvnX4) button:focus:not(.Select-module__error--fejv9){border:var(--input-border-width-focus) solid var(--color-focus);padding:0 calc(.5rem - var(--input-border-width-focus))}.Select-module__select--CZdwK:hover:not(.Select-module__disabled--pDJzp):not(.Select-module__expanded--EvnX4):not(.Select-module__error--fejv9) button:not(:focus){border-color:var(--default);border-width:var(--input-border-width);background-color:var(--color-blue-grey25)}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL{position:relative;width:100%;min-height:calc(2.625rem - 2*var(--input-border-width));padding:0 calc(.5rem - var(--input-border-width));background-color:rgba(0,0,0,0);border-color:var(--color-blue-grey500);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);font-size:var(--form-control-font-size);cursor:pointer;transition-property:all;transition-duration:.2s;transition-timing-function:ease-in-out}@media(prefers-reduced-motion: reduce){.Select-module__select--CZdwK .Select-module__custom-select--GkyRL{transition-duration:.1ms}}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL:focus{outline:0}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL.Select-module__error--fejv9{border-color:var(--error);color:var(--error)}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL.Select-module__error--fejv9:focus{border-width:var(--input-border-width-focus)}.Select-module__select--CZdwK .Select-module__custom-select--GkyRL.Select-module__disabled--pDJzp{border-color:var(--color-disabled)}.Select-module__select--CZdwK .Select-module__list-wrapper--pkehP{border-color:var(--light-grey-border);border-style:var(--input-border-style);border-width:var(--input-border-width);border-radius:var(--input-border-radius);box-shadow:0px 4px 5px 0px rgba(1,5,50,.2);box-shadow:0px 3px 14px 0px rgba(1,5,50,.1215686275);box-shadow:0px 8px 10px 0px rgba(1,5,50,.1411764706);position:absolute;z-index:11;top:44px;left:0;width:100%;overflow:auto}.Select-module__select--CZdwK ul{box-sizing:border-box;padding:.25rem 0;width:100%;margin:0;list-style:none;background-color:var(--light);border-radius:var(--input-border-radius);color:var(--default);text-align:left;max-height:21.25rem}.Select-module__select--CZdwK ul li{padding:.5rem .75rem;font-size:var(--form-control-font-size);margin:0;position:relative;line-height:var(--default-line-height);cursor:pointer}.Select-module__select--CZdwK ul li:after{content:\"\";position:absolute;top:0;left:0;background-color:rgba(0,0,0,0);width:100%;height:100%;opacity:.05}.Select-module__select--CZdwK ul li:focus{outline:var(--input-border-width-focus) solid var(--color-primary300);outline-offset:-var(--input-border-width-focus)}.Select-module__select--CZdwK ul li:hover:after,.Select-module__select--CZdwK ul li:active:after{background-color:var(--color-primary)}.Select-module__select--CZdwK ul li:active:after{opacity:.1}.Select-module__select--CZdwK ul li.Select-module__disabled--pDJzp{color:var(--greyed-out);background-color:var(--disabled);pointer-events:none}.Select-module__selected-option--LDP9M{color:var(--color-primary)}.Select-module__selected-option--LDP9M:before{content:\"\";position:absolute;top:0;left:0;height:100%;border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-left:.25rem solid var(--color-primary)}.Select-module__selected--fvhOw{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none}.Select-module__status--GdPab{position:absolute;top:50%;right:.8125rem;transform:translateY(-50%);display:flex;align-items:center}.Select-module__status--GdPab [data-icon-status=success]{color:var(--success);font-size:1.25rem}.Select-module__status--GdPab [data-icon-status=error]{color:var(--error);font-size:1.25rem}.Select-module__status--GdPab .Select-module__chevron-icon--gWEuH{color:var(--default);font-size:.625rem}.Select-module__status--GdPab *+*{margin-left:1.25rem}.Select-module__placeholder--fc5ns{color:var(--greyed-out)}.Select-module__select-search--rOF8b{position:relative;width:100%;box-sizing:border-box;border-bottom-left-radius:0;border-bottom-right-radius:0}.Select-module__disabled--pDJzp{cursor:not-allowed;color:var(--greyed-out);background-color:var(--color-blue-grey25)}.Select-module__disabled--pDJzp>*{pointer-events:none}@media only screen and (min-width: 30em){.Select-module__select--CZdwK .Select-module__custom-select--GkyRL{padding:0 calc(.5rem - var(--input-border-width))}.Select-module__select--CZdwK:not(.Select-module__expanded--EvnX4) button:focus:not(.Select-module__error--fejv9){padding:0 calc(.5rem - var(--input-border-width-focus))}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sr-only": "Select-module__sr-only--abXQI",
	"hidden": "Select-module__hidden--Leydu",
	"slide-in": "Select-module__slide-in--Ekvcd",
	"slide-out": "Select-module__slide-out--VbE95",
	"select": "Select-module__select--CZdwK",
	"expanded": "Select-module__expanded--EvnX4",
	"list-wrapper": "Select-module__list-wrapper--pkehP",
	"error": "Select-module__error--fejv9",
	"disabled": "Select-module__disabled--pDJzp",
	"custom-select": "Select-module__custom-select--GkyRL",
	"selected-option": "Select-module__selected-option--LDP9M",
	"selected": "Select-module__selected--fvhOw",
	"status": "Select-module__status--GdPab",
	"chevron-icon": "Select-module__chevron-icon--gWEuH",
	"placeholder": "Select-module__placeholder--fc5ns",
	"select-search": "Select-module__select-search--rOF8b"
};
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Form/Select/Select.module.scss":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/Select/Select.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__.Z = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_sass_loader_dist_cjs_js_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);