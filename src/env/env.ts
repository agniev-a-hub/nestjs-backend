import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number(),
  POSTGRES_HOST: z.coerce.string(),
  POSTGRES_USER: z.coerce.string(),
  POSTGRES_DB: z.coerce.string(),
  POSTGRES_PASSWORD: z.coerce.string(),
  POSTGRES_PORT: z.coerce.number(),
});

export type Env = z.infer<typeof envSchema>;
