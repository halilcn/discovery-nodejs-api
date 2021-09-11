import { validationResult } from 'express-validator';

const helpers = {};

/**
 * Custom unique validation of express-validator
 */
helpers.uniqueValidation = async (model, filters) => {
  const res = await model.findOne(filters);
  if (res !== null) throw new Error(`${Object.keys(filters).toString()} params must be unique.`);
  return true;
};

/**
 * Required to submit errors in validations
 */
helpers.sendIfThereAreErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  next();
};

export default helpers;
