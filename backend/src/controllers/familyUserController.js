import FamilyUser from '../models/familyUser';
import createError from 'http-errors';

/**
 * Get all users of family
 */
exports.index = async (req, res, next) => {
  try {
    const usersOfFamily = await FamilyUser
      .find({ family: req.familyId })
      .populate('user', 'name')
      .populate('role', 'name');
    res.json(usersOfFamily);
  } catch (err) {
    next(err);
  }
};

/**
 * Save user of family
 */
exports.store = async (req, res, next) => {
  try {
    const isStoredUserOfFamily = await FamilyUser.exists({
      user: req.body.user,
      family: req.familyId
    });
    if (isStoredUserOfFamily) return next(createError(409, 'This user already stored in the family'));
    await new FamilyUser({ ...req.body, family: req.familyId }).save();
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

/**
 *Get user of family
 */
exports.show = async (req, res, next) => {
  try {
    const userOfFamily = await FamilyUser
      .find({
        family: req.familyId,
        user: req.params.userId
      })
      .populate('user', 'name')
      .populate('role', 'name');
    if (!userOfFamily) return next(new createError(204, 'User of family not found'));
    res.send(userOfFamily);
  } catch (err) {
    next(err);
  }
};

/**
 * Update user of family
 */
exports.update = async (req, res, next) => {
  try {
    const userOfFamily = await FamilyUser.findOneAndUpdate(
      {
        family: req.familyId,
        user: req.params.userId
      },
      {
        role: req.body.role
      });
    if (!userOfFamily) return next(createError(404, 'User of family not found'));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete user of family
 */
exports.destroy = async (req, res, next) => {
  try {
    const userOfFamily = await FamilyUser.findOneAndDelete({
      family: req.familyId,
      user: req.params.userId
    });
    if (!userOfFamily) return next(createError(404, 'User of family not found'));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
