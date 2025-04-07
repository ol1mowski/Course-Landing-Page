import jwt from 'jsonwebtoken';
import env from '../config/environment.js';

export class JwtService {
  generateToken(payload, remember = false) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: remember ? '30d' : '24h'
    });
  }

  generateRefreshToken(payload) {
    return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
      expiresIn: '30d'
    });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, env.JWT_SECRET);
    } catch (error) {
      return null;
    }
  }

  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, env.JWT_REFRESH_SECRET);
    } catch (error) {
      return null;
    }
  }
}

export const jwtService = new JwtService(); 