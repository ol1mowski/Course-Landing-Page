import { z } from 'zod';
import { jwtService } from '../services/jwt.service.js';

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export const validateLoginData = (req, res, next) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'Nieprawidłowe dane logowania'
    });
  }
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Brak autoryzacji'
      });
    }

    const decoded = jwtService.verifyToken(token);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        error: 'Nieprawidłowy token'
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: 'Błąd autoryzacji'
    });
  }
}; 