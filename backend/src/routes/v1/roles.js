import express from 'express';
import * as roleController from '../../controllers/roleController';
import roleStoreAndUpdateValidation from '../../validations/storeAndUpdateRoleValidation';

const router = express.Router();

router.get('/', roleController.index);
router.post('/', roleStoreAndUpdateValidation, roleController.store);
router.get('/:roleId', roleController.show);
router.put('/:roleId', roleStoreAndUpdateValidation, roleController.update);
router.delete('/:roleId', roleController.destroy);

module.exports = router;
