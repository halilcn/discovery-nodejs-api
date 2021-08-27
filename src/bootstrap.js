import mongoose from 'mongoose'

//Set dotenv
require('dotenv').config()

//Connect Mongoose
mongoose.connect(process.env.MONGO_CONNECTION);

module.exports = {mongoose}
