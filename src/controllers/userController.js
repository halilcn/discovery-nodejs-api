import User from "../models/user";
import createError from 'http-errors'

/**
 * Get all users
 */
exports.index = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        next(err);
    }
}

/**
 * Save user
 */
exports.store = async (req, res, next) => {
    try {
        await new User(req.body).save()
        res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}

/**
 * Get user
 */
exports.show = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        //next(error); ??
    }
}

/**
 * Update user
 */
exports.update = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.params.userId, req.body);
        res.sendStatus(200);
    } catch (err) {
        //next(error); ??
    }
}

/**
 * Delete user
 */
exports.destroy = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.sendStatus(200);
    } catch (err) {
        //next(error); ??
    }
}

