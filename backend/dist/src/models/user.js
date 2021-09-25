"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _consts = _interopRequireDefault(require("../consts"));

var User = _mongoose["default"].Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  surname: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    "enum": _consts["default"].USER_GENDER_ENUM
  }
}, {
  timestamps: true
});

module.exports = _mongoose["default"].model('User', User);