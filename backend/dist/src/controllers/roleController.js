"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _role = _interopRequireDefault(require("../models/role"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _familyUser = _interopRequireDefault(require("../models/familyUser"));

/**
 * Get all roles
 */
exports.index = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var roles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _role["default"].find();

          case 3:
            roles = _context.sent;
            res.json(roles);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Save role
 */


exports.store = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return new _role["default"](req.body).save();

          case 3:
            res.sendStatus(201);
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Show role
 */


exports.show = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var role;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _role["default"].findById(req.params.roleId);

          case 3:
            role = _context3.sent;

            if (role) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", next(new _httpErrors["default"](204, 'Role not found')));

          case 6:
            res.json(role);
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Update role
 */


exports.update = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var role;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _role["default"].findByIdAndUpdate(req.params.roleId, req.body);

          case 3:
            role = _context4.sent;

            if (role) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", next(new _httpErrors["default"](404, 'Role not found')));

          case 6:
            res.sendStatus(200);
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Delete role
 */


exports.destroy = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var roleId, isActiveRole, role;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            roleId = req.params.roleId;
            _context5.next = 4;
            return _familyUser["default"].exists({
              role: roleId
            });

          case 4:
            isActiveRole = _context5.sent;

            if (!isActiveRole) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", next(new _httpErrors["default"](409, 'This role is actively ')));

          case 7:
            _context5.next = 9;
            return _role["default"].findByIdAndDelete(roleId);

          case 9:
            role = _context5.sent;

            if (role) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return", next(new _httpErrors["default"](404, 'Role not found')));

          case 12:
            res.sendStatus(200);
            _context5.next = 18;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 15]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();