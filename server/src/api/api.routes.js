import { Router } from 'express';
import authRoute from './auth/auth.route.js';
import userRoute from './users/user.route.js';
import postRoute from './posts/post.route.js';

const router = Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/posts', postRoute);

export default router;
