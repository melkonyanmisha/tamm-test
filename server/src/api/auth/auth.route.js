import { Router } from 'express';
import $ from '../api-catch.decorator.js';
import authController from './auth.controller.js';
import authValidator from './auth.validator.js';
import validationService from '../../services/validation.service.js';

const router = Router();

router.post('/registration',
  validationService(authValidator.registration),
  $(authController.registration)
);

router.post('/login',
  validationService(authValidator.login),
  $(authController.login)
);

router.post('/logout', $(authController.logout));

router.get('/verify/:activationCode',
  validationService(authValidator.verify),
  $(authController.verify)
);

router.get('/refresh', $(authController.refresh));

export default router;
