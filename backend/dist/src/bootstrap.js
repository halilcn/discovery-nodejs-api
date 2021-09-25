"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

//Connect Mongoose
try {
  _mongoose["default"].connect(_config["default"].DATABASE.MONGO_CONNECTION);
} catch (err) {
  console.log('Mongoose error:' + err);
}

module.exports = {
  mongoose: _mongoose["default"]
};