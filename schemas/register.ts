import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string({ message: "First name is required" }),
    lastName: z.string({ message: "Last name is required" }),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    phone: z.string().length(10, { message: "Phone number must be 10 digits" }),
    address: z.object({
      line1: z.string({ message: "Address is required" }),
      line2: z.string().optional(),
      city: z.string({ message: "City is required" }),
      state: z
        .string({ message: "State is required" })
        .length(2, { message: "State must be 2 characters" }),
      zip: z.string().length(6, { message: "Zip code must be 6 digits" }),
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
    return {};
  });
