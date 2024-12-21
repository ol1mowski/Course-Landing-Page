import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { validateLoginData } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/login', validateLoginData, authController.login);

export default router; 