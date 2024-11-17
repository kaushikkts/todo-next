import { z } from "zod";

export const todoSchema = z.object({
  title: z.string({ message: "Please enter a title" }),
  content: z.string({ message: "Please enter a description of the todo" }),
  startDate: z.string({ message: "Please enter a start date" }).optional(),
  endDate: z.string().optional(),
});
