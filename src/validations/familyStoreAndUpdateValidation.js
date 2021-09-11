import { body, validationResult } from 'express-validator';
import helpers from '../helpers';
import Family from '../models/family';

export default [
  body('name').isString().custom(async (value, { req }) => {await helpers.uniqueValidation(Family, { name: req.body.name });}),
  helpers.sendIfThereAreErrors
];
