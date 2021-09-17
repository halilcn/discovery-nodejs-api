import express from 'express';
import * as familyUserController from '../../controllers/familyUserController';

let router = express.Router();

router.get('/', familyUserController.index);
router.post('/', familyUserController.store);
router.get('/:userId', familyUserController.show);

module.exports = router;
