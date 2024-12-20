import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import logger from '../utils/logger';

const paymentSchema = z.object({
  email: z.string().email('Invalid email format'),
  firstName: z.string().min(2, 'First name is too short'),
  lastName: z.string().min(2, 'Last name is too short'),
  terms: z.boolean().refine(val => val === true, 'Terms must be accepted'),
});

export const validatePaymentData = (req: Request, res: Response, next: NextFunction) => {
  try {
    paymentSchema.parse(req.body);
    next();
  } catch (error) {
    logger.error('Validation error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
    }
    next(error);
  }
}; 