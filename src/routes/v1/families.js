import express from "express";
import familyController from "../../controllers/familyController";

var router = express.Router();

router.get('/', familyController.index);
router.get('/', familyController.store);

module.exports = router;
