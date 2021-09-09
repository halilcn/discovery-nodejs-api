// Requirements before app starts
import './bootstrap'

import createError from 'http-errors'
import express from 'express'

var app = express()

//Import middlewares
require('../src/middlewares')(app)

//Import routes
require('../src/routes')(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = process.env.APP_ENVIRONMENT === 'development' ? err : {}

  console.log(err)

  res.status(err.status || 500)
  res.send(
    process.env.APP_ENVIRONMENT === 'development'
      ? { stack: err.stack, message: err.message }
      : { message: err.message }
  )
})

module.exports = app
