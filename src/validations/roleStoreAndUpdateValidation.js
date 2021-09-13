import { body } from 'express-validator';
import helpers from '../helpers';
import Role from '../models/role';

export default [
  body('name').isString().custom(async (val, { req }) => {await helpers.uniqueValidation(Role, { name: req.body.name });}),
  helpers.sendIfThereAreErrors
];
