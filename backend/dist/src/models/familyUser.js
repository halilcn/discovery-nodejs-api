"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var FamilyUser = _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  family: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Family',
    required: true
  },
  role: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  }
}, {
  timestamps: true
});

module.exports = _mongoose["default"].model('FamilyUser', FamilyUser);