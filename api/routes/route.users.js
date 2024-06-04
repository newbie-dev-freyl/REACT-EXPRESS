import express from 'express';
import controlUsers from '../controllers/contoller.users.js';

const router = express.Router();

import { checkInput } from '../validators/check.inputUsersRegistration.js';
import { validateInput } from '../middlewares/errors.input.js';

router.get('/api/users', controlUsers.all);
router.post('/api/users', checkInput, validateInput, controlUsers.create);

export default router;
