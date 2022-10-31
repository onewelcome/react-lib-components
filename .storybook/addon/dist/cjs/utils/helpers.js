"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectKeyToCSSProperty = exports.CSSPropertyToObjectKey = void 0;

var CSSPropertyToObjectKey = function CSSPropertyToObjectKey(CSSProperty) {
  var matchesKeyValue = CSSProperty.match(/--(.+)(?=:):?(.+)?/);
  var matchesKeyOnly = CSSProperty.match(/var\(--(.+)\)/);
  var objectKeyValue = {
    key: null,
    value: null
  };

  var generateObjectKey = function generateObjectKey(CSSPropertyString) {
    return CSSPropertyString.replace(/-(.+?)/g, function (_v, a) {
      if (a) {
        return a.toUpperCase();
      }
    });
  };

  if (!matchesKeyValue && matchesKeyOnly && matchesKeyOnly[1]) {
    var objectKey = generateObjectKey(matchesKeyOnly[1]);
    objectKeyValue.key = objectKey;
  }

  if (matchesKeyValue && matchesKeyValue[1]) {
    var _objectKey = generateObjectKey(matchesKeyValue[1]);

    objectKeyValue.key = _objectKey;
  }

  if (matchesKeyValue && matchesKeyValue[2]) {
    objectKeyValue.value = matchesKeyValue[2];
  }

  if (objectKeyValue.key === null && objectKeyValue.value === null) {
    console.error("Could not properly parse CSS Property ".concat(CSSProperty, " to an Object Key"));
  }

  return objectKeyValue;
};

exports.CSSPropertyToObjectKey = CSSPropertyToObjectKey;

var ObjectKeyToCSSProperty = function ObjectKeyToCSSProperty(_ref) {
  var key = _ref.key,
      value = _ref.value;
  var formattedPropertyName = key.replace(/([A-Z])/g, function (val) {
    return "-".concat(val.toLowerCase());
  });
  return "--".concat(formattedPropertyName, ": ").concat(value);
};

exports.ObjectKeyToCSSProperty = ObjectKeyToCSSProperty;