import User from "../models/user";
import createError from 'http-errors'
import {ignoreRoot} from "nodemon/lib/config/defaults";
const { body, validationResult } = require('express-validator');



/**
 * Get all users
 */
exports.index = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
}

/**
 * Save user
 */
exports.store = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.json({ghj:45});
        await new User(req.body).save();
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
        if (!user) throw createError(204, 'User not found');
        res.json(user);
    } catch (err) {
        next(err);
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

