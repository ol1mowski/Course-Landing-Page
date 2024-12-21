import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import env from './config/environment.js';
import paymentRoutes from './routes/payment.routes.js';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './config/database.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();

app.use(helmet());
app.use(cors({
  origin: env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());

app.use('/api/payments', paymentRoutes);
app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();

export default app; 