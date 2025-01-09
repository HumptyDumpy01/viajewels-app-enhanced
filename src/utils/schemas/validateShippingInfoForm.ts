import { z } from 'zod';

export const validateShippingInfoForm = z.object({
  firstName: z.string().min(1, `Please fill in first name field.`).max(150, `First name must be less than 150 characters`),
  lastName: z.string().min(1, `Please fill in last name field.`).max(150, `Last name must be less than 150 characters`),
  address: z.string().min(1, `Please fill in the address field.`).max(300, `Address must be less than 300 characters`),
  apartment: z.string().max(300, `Apartment must be less than 300 characters`).optional(),
  city: z.string().min(1, `City field is empty!`).max(300, `City must be less than 300 characters`),
  country: z.string().min(1).max(300, `Country must be less than 300 characters`),
  state: z.string().min(1, `State field is empty!`).max(300, `State must be less than 300 characters`),
  zipCode: z.number().int().min(1000, `Zip code must be greater than 1000`),
  email: z.string().email(`Invalid email address!`).max(300, `Email must be less than 150 characters`),
  phone: z.string().min(1, `Phone number field is empty!`).max(20, `Phone number must be less than 20 characters`)
});
