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

  async logout(req, res) {
    try {
      const { refreshToken } = req.body;
      
      // Możemy dodać blacklistę tokenów w Redis/DB
      // Na razie prosta implementacja
      res.status(200).json({
        success: true,
        message: 'Wylogowano pomyślnie'
      });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({
        success: false,
        error: 'Wystąpił błąd podczas wylogowywania'
      });
    }
  }

  async getProfile(req, res) {
    try {
      const student = await Student.findById(req.user.id);
      
      if (!student) {
        return res.status(404).json({
          success: false,
          error: 'Użytkownik nie istnieje'
        });
      }

      res.status(200).json({
        success: true,
        data: {
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          phone: student.phone || '',
          company: student.company || '',
          nip: student.nip || ''
        }
      });
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(500).json({
        success: false,
        error: 'Błąd podczas pobierania profilu'
      });
    }
  }

  async updateProfile(req, res) {
    try {
      const updates = req.body;
      const student = await Student.findById(req.user.id);

      if (!student) {
        return res.status(404).json({
          success: false,
          error: 'Użytkownik nie istnieje'
        });
      }

      // Aktualizuj tylko dozwolone pola
      const allowedUpdates = ['firstName', 'lastName', 'phone', 'company', 'nip'];
      allowedUpdates.forEach(field => {
        if (updates[field] !== undefined) {
          student[field] = updates[field];
        }
      });

      await student.save();

      res.status(200).json({
        success: true,
        data: {
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          phone: student.phone || '',
          company: student.company || '',
          nip: student.nip || ''
        }
      });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({
        success: false,
        error: 'Błąd podczas aktualizacji profilu'
      });
    }
  }
}

export const authController = new AuthController(); 