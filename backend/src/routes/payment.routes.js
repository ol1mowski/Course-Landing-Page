import { Router } from 'express';
import { paymentController } from '../controllers/payment.controller.js';
import { validatePaymentData } from '../middleware/validation.middleware.js';

const router = Router();

router.post(
  '/process',
  validatePaymentData,
  paymentController.processPayment
);

export default router; 