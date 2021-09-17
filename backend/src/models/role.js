import mongoose from 'mongoose';

const Role = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    }
  });

module.exports = mongoose.model('Role', Role);
