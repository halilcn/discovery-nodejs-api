//Set dotenv
require('dotenv').config()

import mongoose from 'mongoose'
import config from '../src/config'

//Connect Mongoose
mongoose.connect(config.DATABASE.MONGO_CONNECTION);

module.exports = {mongoose}


