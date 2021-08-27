import User from "../models/user";
import {json} from "express";

exports.index = async (req, res, next) => {

    try {
        User.find().then(res2 => {
            res.json(res2);
        })

    } catch (err) {
        //next(error); ??
    }
}

exports.store = async (req, res, next) => {
    try {
        const user = new User(req.body)
        await user.save();

        res.sendStatus(201);  //??
    } catch (err) {
        //next(error); ??
    }
}

