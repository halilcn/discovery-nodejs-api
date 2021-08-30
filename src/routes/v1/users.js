import express from "express";
import userController from "../../controllers/userController";
import userStoreValidation from "../../validations/userStoreValidation"

const {body, validationResult} = require('express-validator');

var router = express.Router();

console.log(userStoreValidation());

//router.use(() => {}); // General middleware

router.get('/', userController.index);
router.post('/', [body('test').isEmail()], userController.store);
router.get('/:userId', userController.show);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.destroy);

module.exports = router;
