"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _users = _interopRequireDefault(require("./v1/users"));

var _families = _interopRequireDefault(require("./v1/families"));

var _roles = _interopRequireDefault(require("./v1/roles"));

var _familiesUsers = _interopRequireDefault(require("./v1/familiesUsers"));

//Bind familyId param
var bindFamilyId = function bindFamilyId(req, res, next) {
  req.familyId = req.params.familyId;
  next();
};

module.exports = function (app) {
  app.use('/api/v1/users', _users["default"]);
  app.use('/api/v1/families', _families["default"]);
  app.use('/api/v1/roles', _roles["default"]);
  app.use('/api/v1/families/:familyId/users', bindFamilyId, _familiesUsers["default"]);
};