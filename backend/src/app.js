import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import env from './config/environment.js';
import paymentRoutes from './routes/payment.routes.js';
import authRoutes from './routes/auth.routes.js';
import commentRoutes from './routes/comment.routes.js';
import { connectDB } from './config/database.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.VERCEL_ENV === 'production' 
    ? 'https://karierawit.vercel.app' 
    : 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

app.use('/api/payments', paymentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

app.use(notFound);
app.use(errorHandler);

if (process.env.VERCEL_ENV !== 'production') {
  try {
    await connectDB();
    
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

export default app; 