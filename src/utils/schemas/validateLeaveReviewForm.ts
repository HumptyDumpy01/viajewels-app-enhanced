import { z } from 'zod';

export const validateLeaveReviewForm = z.object({
  rating: z.number().int().min(1, `Error! Rating should not be less than 1`).max(5, `Rating should not be more than 5`),
  email: z.string().email(`Error! Please provide a valid email!`).max(200, `Email should not be more than 150 characters`),
  initials: z.string().min(2, `Error! Initials should be at least 2 characters long!`).max(300, `Initials should not be more than 150 characters`),
  review: z.string().min(10, `Error! Review should be at from 10 to 800 characters long!`).max(800)
});
