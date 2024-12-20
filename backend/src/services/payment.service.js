import { Student } from '../models/user.model.js';
import { generateSecurePassword } from './password.service.js';
import mongoose from 'mongoose';

export class PaymentService {
  async processPayment({ email, firstName, lastName }) {
    try {
      const password = generateSecurePassword();
      
      const existingUser = await mongoose.connection.db
        .collection('Students')
        .findOne({ email });

      if (existingUser) {
        throw new Error('User already exists');
      }

      const user = new Student({
        email,
        password,
        firstName,
        lastName,
        isActive: true
      });

      await user.save();
      console.log(`\nNowy student dodany: ${email}, name: ${firstName} ${lastName}`);

      return {
        email,
        password,
      };
    } catch (error) {
      console.error('Payment processing error:', error);
      throw error;
    }
  }
}

export const paymentService = new PaymentService(); 