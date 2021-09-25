"use strict";

/**
 * Set dotenv for env
 */
require('dotenv').config();

exports.APP = {
  ENVIRONMENT: process.env.APP_ENVIRONMENT || 'production'
};
exports.DATABASE = {
  MONGO_CONNECTION: process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/api'
};