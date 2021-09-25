"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _helpers = _interopRequireDefault(require("../helpers"));

var _default = [(0, _expressValidator.body)('name').isString(), (0, _expressValidator.body)('surname').isString(), (0, _expressValidator.body)('age').isNumeric(), (0, _expressValidator.body)('gender').isString(), _helpers["default"].sendIfThereAreErrors];
exports["default"] = _default;