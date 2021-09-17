import mongoose from 'mongoose';
import config from './config';

//Connect Mongoose
try {
  mongoose.connect(config.DATABASE.MONGO_CONNECTION);
} catch (err) {
  console.log('Mongoose error:' + err);
}

module.exports = { mongoose };
