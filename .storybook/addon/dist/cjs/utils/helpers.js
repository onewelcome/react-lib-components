"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectKeyToCSSProperty = exports.cssPropertyToObjectKey = void 0;
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

var cssPropertyToObjectKey = function cssPropertyToObjectKey(CSSProperty) {
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
exports.cssPropertyToObjectKey = cssPropertyToObjectKey;
var objectKeyToCSSProperty = function objectKeyToCSSProperty(_ref) {
  var key = _ref.key,
    value = _ref.value;
  var formattedPropertyName = key.replace(/([A-Z])/g, function (val) {
    return "-".concat(val.toLowerCase());
  });
  return "--".concat(formattedPropertyName, ": ").concat(value);
};
exports.objectKeyToCSSProperty = objectKeyToCSSProperty;