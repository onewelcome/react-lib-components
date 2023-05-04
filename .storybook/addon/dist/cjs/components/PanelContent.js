"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
var _helpers = require("../utils/helpers");
var _templateObject, _templateObject2;
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PropertyValueInput = _theming.styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-radius: 4px;\n  border-color: #eee;\n  border-style: solid;\n  padding: 5px;\n  font-family: monospace;\n"])));
var PropertyValueLabel = _theming.styled.label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"])));
function useDebounce(value, delay) {
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    debouncedValue = _useState2[0],
    setDebouncedValue = _useState2[1];
  (0, _react.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
var PanelContent = function PanelContent(_ref) {
  var properties = _ref.properties,
    propertyChanged = _ref.propertyChanged;
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    propertiesState = _useState4[0],
    setPropertiesState = _useState4[1];
  var debouncedPropertyState = useDebounce(propertiesState, 200);
  (0, _react.useEffect)(function () {
    propertyChanged(propertiesState);
  }, [debouncedPropertyState]);
  (0, _react.useEffect)(function () {
    if (properties && !propertiesState) {
      setPropertiesState(properties);
    }
  }, [properties]);
  (0, _react.useEffect)(function () {
    renderContent();
  }, [propertiesState]);

  /**
   * It could be that CSS properties refer to other existing CSS properties. In that case we want to parse those colors so the color pickers show the correct color and not var(--color-primary) for example
   * colorFocus by default refers to var(--color-primary) so we parse that here.
   */
  var parseValue = function parseValue(value) {
    if (/var\(--.+\)/.test(value)) {
      var _cssPropertyToObjectK = (0, _helpers.cssPropertyToObjectKey)(value),
        key = _cssPropertyToObjectK.key;
      return parseValue(propertiesState[key]);
    }
    return value;
  };
  var startsWithColorPrefix = function startsWithColorPrefix(value) {
    var prefixes = ["#", "rgb", "hsla"];
    return prefixes.some(function (prefix) {
      return value.startsWith(prefix);
    });
  };
  var isColor = function isColor(value) {
    if (startsWithColorPrefix(value)) {
      return true;
    }
    if (/var\(--.+\)/.test(value)) {
      return (0, _helpers.cssPropertyToObjectKey)(value) !== null;
    }
    return false;
  };
  var handlePropertyChange = function handlePropertyChange(propertyName, propertyValue) {
    return setPropertiesState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, propertyName, propertyValue));
    });
  };
  var renderContent = function renderContent() {
    if (propertiesState && Object.entries(propertiesState)) {
      return Object.entries(propertiesState).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: key
        }, /*#__PURE__*/_react["default"].createElement("td", null, key), /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            textAlign: "left"
          }
        }, /*#__PURE__*/_react["default"].createElement(PropertyValueLabel, null, key), isColor(value) ? /*#__PURE__*/_react["default"].createElement(_components.ColorControl, {
          name: key,
          onChange: function onChange(value) {
            handlePropertyChange(key, value);
          },
          value: parseValue(propertiesState[key])
        }) : /*#__PURE__*/_react["default"].createElement(PropertyValueInput, {
          onChange: function onChange(e) {
            return handlePropertyChange(key, e.target.value);
          },
          type: "text",
          value: parseValue(value)
        })));
      });
    }
    return null;
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Table, {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Property name"), /*#__PURE__*/_react["default"].createElement("th", null, "Property value"))), /*#__PURE__*/_react["default"].createElement("tbody", null, renderContent()));
};
exports.PanelContent = PanelContent;