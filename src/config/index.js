//Set dotenv
require('dotenv').config() // ://

exports.DATABASE = {
    MONGO_CONNECTION: process.env.MONGO_CONNECTION || "mongodb://localhost:27017/api"
}



