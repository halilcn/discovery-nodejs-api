import Family from "../models/family";

exports.index = async (req, res, next) => {
    res.sendStatus(200);
};

exports.store = async (req, res, next) => {
    try {
        await new Family(req.body).save();
        res.sendStatus(201);
    } catch (err) {
        //next(error); ??
    }
}
