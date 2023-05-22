import { Router } from 'express';
import $ from '../api-catch.decorator.js';
import userValidator from './user.validator.js';
import userController from './user.controller.js';
import userMiddleware from './user.middleware.js';
import validationService from '../../services/validation.service.js';

const router = Router();

router.get('/:userId',
  userMiddleware,
  validationService(userValidator.getUser),
  $(userController.getOne)
);

export default router;
