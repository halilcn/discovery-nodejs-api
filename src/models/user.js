import mongoose from "mongoose";

const User = mongoose.Schema({
        name: {
            type: String,
            lowercase: true,
            trim: true
        },
        surname: {
            type: String,
            lowercase: true,
            trim: true
        },
        age: Number
        /*,
        age:{
            type:Integer
        }*/
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', User);
