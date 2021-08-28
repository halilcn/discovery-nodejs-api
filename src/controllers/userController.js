import User from "../models/user";
import {json} from "express";

/**
 * Get all users
 */
exports.index = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        //next(error); ??
    }
}

/**
 * Save user
 */
exports.store = async (req, res, next) => {
    try {
        await new User(req.body).save()
        res.sendStatus(201);  //??
    } catch (err) {
        //next(error); ??
    }
}

/**
 * Get user
 */
exports.show = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.params.userId});
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
        res.sendStatus(200);

       // await User.findOneAndUpdate({_id: req.params.userId}, req.params);
        res.sendStatus(200);
    } catch (err) {
        //next(error); ??
    }
}

