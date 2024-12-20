import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('Error:', error);

  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
};

export const notFound = (req: Request, res: Response) => {
  logger.warn(`Not found: ${req.originalUrl}`);
  
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
}; 