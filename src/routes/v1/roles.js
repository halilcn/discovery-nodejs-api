import express from "express";
import * as roleController from '../../controllers/roleController';

const router = express.Router();

router.get('/', roleController.index);
router.post('/', roleController.store);
router.get('/:roleId', roleController.show);
router.put('/:roleId', roleController.update);
router.delete('/:roleId', roleController.destroy);

module.exports = router;
