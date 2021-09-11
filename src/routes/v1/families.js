import express from 'express';
import * as familyController from '../../controllers/familyController';
import storeAndUpdateValidation from '../../validations/familyStoreAndUpdateValidation';

const router = express.Router();

//TODO: Permissions

router.get('/', familyController.index);
router.post('/', storeAndUpdateValidation, familyController.store);
router.get('/:familyId', familyController.show);
router.put('/:familyId', storeAndUpdateValidation, familyController.update);
router.delete('/:familyId', familyController.update);

module.exports = router;
