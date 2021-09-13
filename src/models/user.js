import mongoose from 'mongoose';
import consts from '../consts';

const User = mongoose.Schema({
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
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
    gender: {
      type: String,
      required: true,
      enum: consts.USER_GENDER_ENUM
    }
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('User', User);
