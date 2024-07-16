import { Router } from 'express';
import { controller } from '../controllers/controller.users.js';
import { validate } from '../validators/validate.users.js';
import { getErrorValidator } from '../middlewares/error.validator.js';

const router = Router();

router
  .route('/api/users')
  .get(controller().all)
  .post(validate, getErrorValidator, controller().create);

export default router;
