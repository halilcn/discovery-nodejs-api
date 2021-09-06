import {body, validationResult} from "express-validator";

export default [
    body('name').isString(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        next();
    }
];