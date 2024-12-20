import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('3000'),
  MONGODB_URI: z.string(),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
});

const env = envSchema.parse(process.env);

export default env; 