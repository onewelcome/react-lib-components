"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorators = exports.globalTypes = void 0;

var _withBaseStyling = require("../withBaseStyling");

/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators#gatsby-focus-wrapper
 */
var globalTypes = {
  baseStyling: {}
};
exports.globalTypes = globalTypes;
var decorators = [_withBaseStyling.withBaseStyling];
exports.decorators = decorators;