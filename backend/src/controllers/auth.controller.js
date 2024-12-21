import { Student } from '../models/user.model.js';
import bcrypt from 'bcrypt';

export class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const student = await Student.findOne({ email });

      if (!student) {
        return res.status(401).json({
          success: false,
          error: 'Nieprawidłowy email lub hasło'
        });
      }

      const isPasswordValid = await student.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          error: 'Nieprawidłowy email lub hasło'
        });
      }

      // Aktualizacja ostatniego logowania
      student.lastLoginAt = new Date();
      await student.save();

      res.status(200).json({
        success: true,
        data: {
          id: student._id,
          email: student.email,
          firstName: student.firstName,
          lastName: student.lastName
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        error: 'Wystąpił błąd podczas logowania'
      });
    }
  }
}

export const authController = new AuthController(); 