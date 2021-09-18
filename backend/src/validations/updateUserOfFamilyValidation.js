import { body } from 'express-validator';
import helpers from '../helpers';

export default [
  body('role').isMongoId(),
  helpers.sendIfThereAreErrors
];
