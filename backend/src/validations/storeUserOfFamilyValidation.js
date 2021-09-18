import { body } from 'express-validator';
import helpers from '../helpers';

export default [
  body('user').isMongoId(),
  body('role').isMongoId(),
  helpers.sendIfThereAreErrors
];
