import express from 'express';
import * as familyController from '../../controllers/familyController';
import storeAndUpdateValidation from '../../validations/storeAndUpdateFamilyValidation';

const router = express.Router();

//TODO: Family's permissions for CRUD

router.get('/', familyController.index);
router.post('/', storeAndUpdateValidation, familyController.store);
router.get('/:familyId', familyController.show);
router.put('/:familyId', storeAndUpdateValidation, familyController.update);
router.delete('/:familyId', familyController.destroy);

module.exports = router;
