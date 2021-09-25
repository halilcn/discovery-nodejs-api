"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./bootstrap");

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

// Requirements before app starts
var app = (0, _express["default"])(); //Import middlewaresResponse family with users

require('./middlewares')(app); //Import routes


require('./routes')(app); // catch 404 and forward to error handler


app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.APP_ENVIRONMENT === 'development' ? err : {};
  console.log(err);
  res.status(err.status || 500);
  res.send(process.env.APP_ENVIRONMENT === 'development' ? {
    stack: err.stack,
    message: err.message
  } : {
    message: err.message
  });
});
module.exports = app;