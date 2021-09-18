import express from 'express';
import * as familyUserController from '../../controllers/familyUserController';
import storeUserOfFamilyValidation from '../../validations/storeUserOfFamilyValidation';
import updateUserOfFamilyValidation from '../../validations/updateUserOfFamilyValidation';

let router = express.Router();

router.get('/', familyUserController.index);
router.post('/', storeUserOfFamilyValidation, familyUserController.store);
router.get('/:userId', familyUserController.show);
router.put('/:userId', updateUserOfFamilyValidation, familyUserController.update);
router.delete('/:userId', familyUserController.destroy);

module.exports = router;
