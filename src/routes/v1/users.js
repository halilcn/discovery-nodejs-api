import express from "express";
import userController from "../../controllers/userController";

var router = express.Router();

//router.use(() => {}); // General middleware

/**
 * Get all users
 */
router.get('/', userController.index);
router.post('/', userController.store);

module.exports = router;
