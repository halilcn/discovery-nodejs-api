import Family from '../models/family';
import FamilyUser from '../models/familyUser';
import createError from 'http-errors';

/**
 * Get all families
 */
exports.index = async (req, res, next) => {
  try {
    //Todo: Get family's users
    const families = await Family.find();
    res.json(families);
  } catch (err) {
    next(err);
  }
};

/**
 * Save family
 */
exports.store = async (req, res, next) => {
  try {
    await new Family(req.body).save();
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

/**
 * Get family
 */
exports.show = async (req, res, next) => {
  try {
    const { familyId } = req.params;
    const family = await Family.findById(familyId);
    const users = await FamilyUser.find({ family: familyId });
    if (!family) return next(new createError(204, 'Family not found'));
    res.json({ family, users });
  } catch (err) {
    next(err);
  }
};

/**
 * Update family
 */
exports.update = async (req, res, next) => {
  try {
    const family = await Family.findByIdAndUpdate(req.params.familyId, req.body);
    if (!family) return next(new createError(404, 'Family not found'));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete family
 */
exports.destroy = async (req, res, next) => {
  try {
    const { familyId } = req.params;
    const family = await Family.findByIdAndDelete(familyId);
    if (!family) return next(new createError(404, 'Family not found'));
    await FamilyUser.deleteMany({ family: familyId });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
