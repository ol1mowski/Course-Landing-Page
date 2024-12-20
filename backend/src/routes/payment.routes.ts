import { Router } from 'express';
import { paymentController } from '../controllers/payment.controller';
import { validatePaymentData } from '../middleware/validation.middleware';

const router = Router();

router.post(
  '/process',
  validatePaymentData,
  paymentController.processPayment
);

export default router; 