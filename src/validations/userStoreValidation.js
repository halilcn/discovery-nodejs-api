const {body, validationResult} = require('express-validator');

return [
    body('test').isEmail()
];

export default () => {
    return [
        body('test').isEmail()
    ];
}
