import { User } from '../models/user.model';
import { generateSecurePassword } from './password.service';
import logger from '../utils/logger';

export class PaymentService {
  async processPayment(email: string) {
    try {
      const password = generateSecurePassword();
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const user = new User({
        email,
        password,
      });

      await user.save();
      logger.info(`New user created: ${email}`);

      return { email, password };
    } catch (error) {
      logger.error('Payment processing error:', error);
      throw error;
    }
  }
}

export const paymentService = new PaymentService(); 