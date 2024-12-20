import { paymentService } from '../services/payment.service.js';

export class PaymentController {
  async processPayment(req, res) {
    try {
      const { email, firstName, lastName } = req.body;

      const result = await paymentService.processPayment({ 
        email, 
        firstName, 
        lastName 
      });
      
      console.log(`Payment processed successfully for: ${email}`);
      
      res.status(201).json({
        success: true,
        data: result
      });
    } catch (error) {
      console.error('Payment controller error:', error);
      
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