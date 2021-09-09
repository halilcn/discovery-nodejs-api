import Role from '../models/role';
import createError from 'http-errors';
import User from "../models/user";

//TODO: request ?

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
}

/**
 * Save role
 */
exports.store = async (req, res, next) => {
    try {
        await new Role(req.params).save();
        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}

/**
 * Show role
 */
exports.show = async (req, res, next) => {
    try {
        const role = await Role.findById(req.params.roleId);
        if (!role) next(new createError(204, 'Role not found')); //problem !
        res.json(role);
    } catch (err) {
        next(err);
    }
}

/**
 * Update role
 */
exports.update = async (req, res, next) => {
    try {
        const role = await Role.findByIdAndUpdate(req.params.roleId, req.body);
        if (!role) next(new createError(404, 'Role not found')); //problem !
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

/**
 * Delete role
 */
exports.destroy = async (req, res, next) => {
    try {
        //TODO: eğer familyUser tabloda bu role id si kullanıyorsa silme uyarı ver !
        const role = await Role.findByIdAndDelete(req.params.roleId);
        if (!role) next(new createError(404, 'Role not found'));
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}
