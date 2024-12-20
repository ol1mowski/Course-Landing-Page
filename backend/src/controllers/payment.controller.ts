import { Request, Response } from 'express';
import { paymentService } from '../services/payment.service';
import logger from '../utils/logger';

export class PaymentController {
  async processPayment(req: Request, res: Response) {
    try {
      const { email } = req.body;

      const result = await paymentService.processPayment(email);
      
      logger.info(`Payment processed successfully for: ${email}`);
      
      res.status(201).json({
        success: true,
        data: {
          email: result.email,
          password: result.password,
        },
      });
    } catch (error) {
      logger.error('Payment controller error:', error);
      
      if (error instanceof Error && error.message === 'User already exists') {
        return res.status(409).json({
          success: false,
          error: 'User already exists',
        });
      }

      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
}

export const paymentController = new PaymentController(); 