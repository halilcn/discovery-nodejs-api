"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _familyUser = _interopRequireDefault(require("../models/familyUser"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Get all users of family
 */
exports.index = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var usersOfFamily;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _familyUser["default"].find({
              family: req.familyId
            }).populate('user', 'name').populate('role', 'name');

          case 3:
            usersOfFamily = _context.sent;
            res.json(usersOfFamily);
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
 * Save user of family
 */


exports.store = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var isStoredUserOfFamily;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _familyUser["default"].exists({
              user: req.body.user,
              family: req.familyId
            });

          case 3:
            isStoredUserOfFamily = _context2.sent;

            if (!isStoredUserOfFamily) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", next((0, _httpErrors["default"])(409, 'This user already stored in the family')));

          case 6:
            _context2.next = 8;
            return new _familyUser["default"](_objectSpread(_objectSpread({}, req.body), {}, {
              family: req.familyId
            })).save();

          case 8:
            res.sendStatus(201);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 *Get user of family
 */


exports.show = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var userOfFamily;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _familyUser["default"].find({
              family: req.familyId,
              user: req.params.userId
            }).populate('user', 'name').populate('role', 'name');

          case 3:
            userOfFamily = _context3.sent;

            if (userOfFamily) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", next(new _httpErrors["default"](204, 'User of family not found')));

          case 6:
            res.send(userOfFamily);
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
 * Update user of family
 */


exports.update = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var userOfFamily;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _familyUser["default"].findOneAndUpdate({
              family: req.familyId,
              user: req.params.userId
            }, {
              role: req.body.role
            });

          case 3:
            userOfFamily = _context4.sent;

            if (userOfFamily) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", next((0, _httpErrors["default"])(404, 'User of family not found')));

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
 * Delete user of family
 */


exports.destroy = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var userOfFamily;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _familyUser["default"].findOneAndDelete({
              family: req.familyId,
              user: req.params.userId
            });

          case 3:
            userOfFamily = _context5.sent;

            if (userOfFamily) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", next((0, _httpErrors["default"])(404, 'User of family not found')));

          case 6:
            res.sendStatus(200);
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();