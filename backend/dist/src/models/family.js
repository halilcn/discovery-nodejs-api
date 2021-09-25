"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Family = _mongoose["default"].Schema({
  name: {
    type: String,
    uppercase: true,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

module.exports = _mongoose["default"].model('Family', Family);