import { z } from 'zod';

export const validateNewsletterForm = z.object({
  email: z.string().email(`Invalid email address provided!`)
});
