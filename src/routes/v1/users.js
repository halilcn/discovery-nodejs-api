import express from 'express';
import * as userController from '../../controllers/userController';
import storeAndUpdateValidation from '../../validations/userStoreAndUpdateValidation';

const router = express.Router();

router.get('/', userController.index);
router.post('/', storeAndUpdateValidation, userController.store);
router.get('/:userId', userController.show);
router.put('/:userId', storeAndUpdateValidation, userController.update);
router.delete('/:userId', userController.destroy);

module.exports = router;
