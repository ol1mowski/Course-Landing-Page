import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { validateLoginData, verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/login', validateLoginData, authController.login);
router.get('/verify', verifyToken, authController.verifySession);
router.post('/logout', verifyToken, authController.logout);
router.post('/refresh', authController.refreshToken);
router.get('/me', verifyToken, authController.getProfile);
router.patch('/profile', verifyToken, authController.updateProfile);

export default router; 