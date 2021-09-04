import mongoose from "mongoose";

const User = mongoose.Schema({
        name: {
            type: String,
            lowercase: true,
            trim: true,
            required: true,
        },
        surname: {
            type: String,
            lowercase: true,
            trim: true,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        families: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Family'
        }]
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', User);
