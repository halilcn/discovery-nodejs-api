"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _express = _interopRequireDefault(require("express"));

module.exports = function (app) {
  app.use((0, _morgan["default"])('dev'));
  app.use(_express["default"].json());
  app.use(_express["default"].urlencoded({
    extended: false
  }));
  app.use((0, _cookieParser["default"])());
  app.use((0, _helmet["default"])());
};