"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Role = _mongoose["default"].Schema({
  name: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = _mongoose["default"].model('Role', Role);