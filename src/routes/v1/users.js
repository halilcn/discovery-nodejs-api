import express from "express";
import * as userController from "../../controllers/userController";
import userStoreValidation from "../../validations/userStoreValidation"

const router = express.Router();

//router.use(() => {}); // General middleware

router.get('/', userController.index);
router.post('/', userStoreValidation, userController.store);
router.get('/:userId', userController.show);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.destroy);

module.exports = router;
