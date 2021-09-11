import FamilyUser from '../models/familyUser';
import createError from 'http-errors';

/**
 * Get all users of family
 */
exports.index = async (req, res, next) => {
  try {
    const familyUser = await FamilyUser
      .find({}) //TODO: Find ? *console.log(req.familyId);
      .populate('user', 'name')
      .populate('family', 'name');
    res.json(familyUser);
  } catch (err) {
    next(err);
  }
};

/**
 * Save user of family
 */
exports.store = async (req, res, next) => {
  try {
    await new FamilyUser({ ...req.body, family: req.familyId }).save();
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

/**
 *Get user of family
 */
exports.show = (req, res, next) => {
  try {
    res.send('ok');
  } catch (err) {
    next(err);
  }
};
