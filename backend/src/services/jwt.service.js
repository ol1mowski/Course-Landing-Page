import jwt from 'jsonwebtoken';
import env from '../config/environment.js';

export class JwtService {
  generateToken(payload) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: '24h'
    });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, env.JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}

export const jwtService = new JwtService(); 