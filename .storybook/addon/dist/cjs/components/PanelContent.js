"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestDataButton = exports.PanelContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
var _helpers = require("../utils/helpers");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var RequestDataButton = (0, _theming.styled)(_components.Button)({
  marginTop: "1rem"
});
exports.RequestDataButton = RequestDataButton;
var PropertyValueInput = _theming.styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-radius: 4px;\n  border-color: #eee;\n  border-style: solid;\n  padding: 5px;\n  font-family: monospace;\n"])));
var PropertyValueLabel = _theming.styled.label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"])));
var shouldBeColorPicker = ["colorFocus", "colorPrimary", "colorSecondary", "colorTertiary", "buttonFillTextColor", "buttonFillHoverBackgroundColor", "buttonOutlineHoverTextColor", "inputBackgroundColor", "modalShadowColor", "modalBackgroundColor", "modalHeaderBackgroundColor", "skeletonBackgroundColor", "skeletonAnimationColorRgb", "snackbarTextColor", "snackbarInfoBackgroundColor", "snackbarSuccessBackgroundColor", "snackbarErrorBackgroundColor", "dataGridRowBackgroundColor", "dataGridRowHoverBackgroundColor", "tabActiveBorderColor", "tabsBackgroundColor", "tablistBorderColor", "tabTextColor", "default", "success", "error", "disabled", "greyedOut", "lightGreyBorder", "warning", "light", "grey"];
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
    console.log(propertiesState);
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
        }, /*#__PURE__*/_react["default"].createElement(PropertyValueLabel, null, key), shouldBeColorPicker.includes(key) ? /*#__PURE__*/_react["default"].createElement(_components.ColorControl, {
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