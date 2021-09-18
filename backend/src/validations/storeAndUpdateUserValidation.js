import { body } from 'express-validator';
import helpers from '../helpers';

export default [
  body('name').isString(),
  body('surname').isString(),
  body('age').isNumeric(),
  body('gender').isString(),
  helpers.sendIfThereAreErrors
];
