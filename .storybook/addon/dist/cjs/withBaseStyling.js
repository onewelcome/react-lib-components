"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBaseStyling = void 0;

var _addons = require("@storybook/addons");

var _helpers = require("./utils/helpers");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var withBaseStyling = function withBaseStyling(StoryFn, context) {
  var _useGlobals = (0, _addons.useGlobals)(),
      _useGlobals2 = _slicedToArray(_useGlobals, 2),
      baseStyling = _useGlobals2[0].baseStyling,
      updateGlobals = _useGlobals2[1];

  var waitForMs = 1; // See README.md technical explanation for why a timeout is necessary.

  (0, _addons.useEffect)(function () {
    setTimeout(function () {
      var _context$canvasElemen;

      var htmlElement = (_context$canvasElemen = context.canvasElement) === null || _context$canvasElemen === void 0 ? void 0 : _context$canvasElemen.closest("html");

      if (htmlElement) {
        var stylesObject = parseStylesToObject(htmlElement.getAttribute("style"));
        updateGlobals({
          baseStyling: stylesObject
        });
      }
    }, waitForMs);
  }, [window.location.search]);
  (0, _addons.useEffect)(function () {
    updateCSSPropertiesOnHTMLElement(baseStyling);
  }, [baseStyling]);

  var parseStylesToObject = function parseStylesToObject(styleString) {
    var propertiesArray = styleString.split(";");
    var propertiesObject = {};

    if (propertiesArray.length) {
      propertiesArray.forEach(function (property) {
        if (property) {
          var _cssPropertyToObjectK = (0, _helpers.cssPropertyToObjectKey)(property),
              key = _cssPropertyToObjectK.key,
              value = _cssPropertyToObjectK.value;

          propertiesObject[key] = value;
        }
      });
    }

    return propertiesObject;
  };

  var updateCSSPropertiesOnHTMLElement = function updateCSSPropertiesOnHTMLElement(stylingObject) {
    var styleString = "";

    for (var property in stylingObject) {
      var CSSPropertyString = (0, _helpers.objectKeyToCSSProperty)({
        key: property,
        value: stylingObject[property]
      });
      styleString += CSSPropertyString;
    }

    window.sessionStorage.setItem("basestyling", JSON.stringify(stylingObject));
    var updatedStyling = new Event("updated-styling");
    window.dispatchEvent(updatedStyling);
  };

  return StoryFn();
};

exports.withBaseStyling = withBaseStyling;