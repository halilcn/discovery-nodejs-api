import Family from "../models/family";
import createError from 'http-errors'

/**
 * Get all families
 */
exports.index = async (req, res, next) => {
    try {
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
}

/**
 * Get family
 */
exports.show = async (req, res, next) => {
    try {
        const family = await Family.findById(req.params.familyId);
        if (!family) next(new createError(204, 'Family not found'));
        res.json(family);
    } catch (err) {
        next(err);
    }
}

/**
 * Update family
 */
exports.update = async (req, res, next) => {
    try {
        //TODO: Permissions

        const family = await Family.findByIdAndUpdate(req.params.familyId, req.body);
        if (!family) next(new createError(404, 'Family not found'));
        next(createError(404, 'Family not found')); //problem !
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

/**
 * Delete family
 */
exports.destroy = async (req, res, next) => {
    try {
        const family = Family.findByIdAndDelete(req.params.familyId);
        if (!family) next(new createError(404, 'Family not found')); //problem !
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}
