import { z } from 'zod';

export const validateLoginForm = z.object({
  login: z.string().min(1, `Fill in the login field.`).max(255, `Login is too long.`),
  password: z.string().min(1, `Fill in the password field.`)
});
