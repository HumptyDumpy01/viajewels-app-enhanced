import { z } from 'zod';

export const validateContactSupportForm = z.object({
  email: z.string().email(`Please enter a valid email address`),
  phone: z.string().min(10, `Please enter a valid phone number`)
});
