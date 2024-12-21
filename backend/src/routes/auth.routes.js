import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { validateLoginData, verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/login', validateLoginData, authController.login);
router.get('/verify', verifyToken, authController.verifySession);
router.post('/refresh', authController.refreshToken);

export default router; 