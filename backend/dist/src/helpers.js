"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _expressValidator = require("express-validator");

var helpers = {};
/**
 * Custom unique validation of express-validator
 */

helpers.uniqueValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(model, filters) {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return model.findOne(filters);

          case 2:
            res = _context.sent;

            if (!(res !== null)) {
              _context.next = 5;
              break;
            }

            throw new Error("".concat(Object.keys(filters).toString(), " params must be unique."));

          case 5:
            return _context.abrupt("return", true);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Required to submit errors in validations
 */


helpers.sendIfThereAreErrors = function (req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) return res.status(422).json({
    errors: errors.array()
  });
  next();
};

var _default = helpers;
exports["default"] = _default;