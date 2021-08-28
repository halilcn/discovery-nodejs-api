import express from "express";
import userController from "../../controllers/userController";

var router = express.Router();

//router.use(() => {}); // General middleware

router.get('/', userController.index);
router.get('/:userId', userController.show);
router.put('/:userId', userController.update);
router.post('/', userController.store);

module.exports = router;
