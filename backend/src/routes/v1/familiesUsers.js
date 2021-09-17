import express from 'express';
import * as familyUserController from '../../controllers/familyUserController';

let router = express.Router();

//Todo: Request ?

router.get('/', familyUserController.index);
router.post('/', familyUserController.store);
router.get('/:userId', familyUserController.show);
router.put('/:userId', familyUserController.update);
router.delete('/:userId', familyUserController.destroy);

module.exports = router;
