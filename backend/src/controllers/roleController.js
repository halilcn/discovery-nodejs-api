import Role from '../models/role';
import createError from 'http-errors';
import FamilyUser from '../models/familyUser';

/**
 * Get all roles
 */
exports.index = async (req, res, next) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    next(err);
  }
};

/**
 * Save role
 */
exports.store = async (req, res, next) => {
  try {
    await new Role(req.body).save();
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

/**
 * Show role
 */
exports.show = async (req, res, next) => {
  try {
    const role = await Role.findById(req.params.roleId);
    if (!role) return next(new createError(204, 'Role not found'));
    res.json(role);
  } catch (err) {
    next(err);
  }
};

/**
 * Update role
 */
exports.update = async (req, res, next) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.roleId, req.body);
    if (!role) return next(new createError(404, 'Role not found'));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete role
 */
exports.destroy = async (req, res, next) => {
  try {
    const { roleId } = req.params;
    const isActiveRole = await FamilyUser.exists({ role: roleId });
    if (isActiveRole) return next(new createError(409, 'This role is actively '));
    const role = await Role.findByIdAndDelete(roleId);
    if (!role) return next(new createError(404, 'Role not found'));
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
