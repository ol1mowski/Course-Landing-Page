import { Student } from '../models/user.model.js';
import { jwtService } from '../services/jwt.service.js';

export class AuthController {
  async login(req, res) {
    try {
      const { email, password, rememberMe } = req.body;

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

      student.lastLoginAt = new Date();
      await student.save();

      const token = jwtService.generateToken({
        id: student._id,
        email: student.email,
      }, rememberMe);

      const refreshToken = jwtService.generateRefreshToken({
        id: student._id,
        email: student.email,
      });

      res.status(200).json({
        success: true,
        data: {
          id: student._id,
          email: student.email,
          firstName: student.firstName,
          lastName: student.lastName,
          token,
          refreshToken
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

  async verifySession(req, res) {
    try {
      const student = await Student.findById(req.user.id);
      
      if (!student) {
        return res.status(401).json({
          success: false,
          error: 'Użytkownik nie istnieje'
        });
      }

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
      console.error('Session verification error:', error);
      res.status(500).json({
        success: false,
        error: 'Błąd weryfikacji sesji'
      });
    }
  }

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      
      if (!refreshToken) {
        return res.status(400).json({
          success: false,
          error: 'Brak tokenu odświeżania'
        });
      }

      const decoded = jwtService.verifyRefreshToken(refreshToken);
      if (!decoded) {
        return res.status(401).json({
          success: false,
          error: 'Nieprawidłowy token odświeżania'
        });
      }

      const student = await Student.findById(decoded.id);
      if (!student) {
        return res.status(401).json({
          success: false,
          error: 'Użytkownik nie istnieje'
        });
      }

      const newToken = jwtService.generateToken({
        id: student._id,
        email: student.email,
      });

      res.status(200).json({
        success: true,
        data: {
          token: newToken
        }
      });
    } catch (error) {
      console.error('Token refresh error:', error);
      res.status(500).json({
        success: false,
        error: 'Błąd odświeżania tokenu'
      });
    }
  }
}

export const authController = new AuthController(); 