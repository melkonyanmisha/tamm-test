import { Router } from 'express';
import $ from '../api-catch.decorator.js';
import postValidator from './post.validator.js';
import postController from './post.controller.js';
import  userMiddleware from '../users/user.middleware.js';
import validationService from '../../services/validation.service.js';

const router = Router();

router.post('/',
  userMiddleware,
  validationService(postValidator.createPost),
  $(postController.createPost)
);

router.put('/:postId',
  userMiddleware,
  validationService(postValidator.updatePost),
  $(postController.updatePost)
);

router.get('/',
  userMiddleware,
  $(postController.getAllPosts)
);

router.delete('/:postId',
  userMiddleware,
  validationService(postValidator.deletePost),
  $(postController.deletePost)
);

router.get('/:postId',
    userMiddleware,
    validationService(postValidator.getPost),
    $(postController.getPost)
);

export default router;
