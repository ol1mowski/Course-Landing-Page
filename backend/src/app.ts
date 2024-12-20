import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import env from './config/environment';
import logger from './utils/logger';
import paymentRoutes from './routes/payment.routes';

import { connectDB } from './config/database';

import { errorHandler, notFound } from './middleware/error.middleware';

const app = express();

app.use(helmet());
app.use(cors({
  origin: env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());

app.use('/api/payments', paymentRoutes);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    
    app.listen(env.PORT, () => {
      logger.info(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();

export default app; 