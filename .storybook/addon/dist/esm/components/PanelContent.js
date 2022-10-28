var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { useEffect, useState } from "react";
import { styled } from "@storybook/theming";
import { Button, Table, ColorControl } from "@storybook/components";
export var RequestDataButton = styled(Button)({
  marginTop: "1rem"
});
var PropertyValueInput = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-radius: 4px;\n  border-color: #eee;\n  border-style: solid;\n  padding: 5px;\n  font-family: monospace;\n"])));
var PropertyValueLabel = styled.label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n"])));
var shouldBeColorPicker = ["colorFocus", "colorPrimary", "colorSecondary", "colorTertiary", "buttonFillTextColor", "buttonFillBackgroundColor", "buttonOutlineHoverTextColor", "inputBackgroundColor", "modalShadowColor", "modalBackgroundColor", "modalHeaderBackgroundColor", "snackbarTextColor", "snackbarInfoBackgroundColor", "snackbarSuccessBackgroundColor", "snackbarErrorBackgroundColor", "dataGridRowBackgroundColor", "dataGridRowHoverBackgroundColor", "tabsBackgroundColor", "tablistBorderColor", "tabTextColor", "default", "success", "error", "disabled", "greyedOut", "lightGreyBorder", "warning", "light", "grey"];
/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */

export var PanelContent = function PanelContent(_ref) {
  var properties = _ref.properties,
      propertyChanged = _ref.propertyChanged;

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      propertiesState = _useState2[0],
      setPropertiesState = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  useEffect(function () {
    if (properties && !propertiesState) {
      setPropertiesState(properties);
    }
  }, [properties]);
  useEffect(function () {
    renderContent();
  }, [propertiesState]);

  var handlePropertyChange = function handlePropertyChange(propertyName, propertyValue) {
    setPropertiesState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, propertyName, propertyValue));
    });
  };

  var renderContent = function renderContent() {
    var rows = [];

    if (propertiesState) {
      var _loop = function _loop(property) {
        rows.push( /*#__PURE__*/React.createElement("tr", {
          key: property
        }, /*#__PURE__*/React.createElement("td", null, property), /*#__PURE__*/React.createElement("td", {
          style: {
            textAlign: "left"
          }
        }, /*#__PURE__*/React.createElement(PropertyValueLabel, null, property), shouldBeColorPicker.includes(property) ? /*#__PURE__*/React.createElement(ColorControl, {
          name: property,
          onChange: function onChange(value) {
            return handlePropertyChange(property, value);
          },
          onBlur: function onBlur(e) {
            propertyChanged(propertiesState);
          },
          value: propertiesState[property]
        }) : /*#__PURE__*/React.createElement(PropertyValueInput, {
          onChange: function onChange(e) {
            return handlePropertyChange(property, e.target.value);
          },
          onBlur: function onBlur(e) {
            propertyChanged(propertiesState);
          },
          type: "text",
          value: propertiesState[property]
        }))));
      };

      for (var property in propertiesState) {
        _loop(property);
      }
    }

    setRows(rows);
  };

  return /*#__PURE__*/React.createElement(Table, {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Property name"), /*#__PURE__*/React.createElement("th", null, "Property value"))), /*#__PURE__*/React.createElement("tbody", null, rows));
};