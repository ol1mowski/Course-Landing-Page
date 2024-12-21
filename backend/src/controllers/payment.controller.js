import { paymentService } from '../services/payment.service.js';
import crypto from 'crypto';

export class PaymentController {
  async processPayment(req, res) {
    try {
      const { email, firstName, lastName } = req.body;
      
      const paymentToken = crypto.randomBytes(32).toString('hex');

      const result = await paymentService.processPayment({ 
        email, 
        firstName, 
        lastName 
      });
    

      const response = {
        success: true,
        data: {
          email: result.email,
          paymentToken: paymentToken 
        }
      };

      res.status(201).json(response);
    } catch (error) {
      console.error('Payment controller error:', error);
      
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          success: false,
          error: 'Błąd walidacji danych'
        });
      }

      if (error.message === 'User already exists') {
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