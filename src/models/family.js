import mongoose from 'mongoose';

const Family = mongoose.Schema({
    name: {
      type: String,
      uppercase: true,
      required: true
    }
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('Family', Family);
