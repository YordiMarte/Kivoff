import { z } from "zod";
import { supportTopics } from "@/config/contact";
import type { FormState } from "@/lib/validations/form-state";

export const supportSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "That name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "That email is too long."),
  topic: z.enum(supportTopics, {
    message: "Please select what you need help with.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (at least 10 characters).")
    .max(2000, "Please keep it under 2,000 characters."),
});

export type SupportField = keyof z.infer<typeof supportSchema>;
export type SupportFormState = FormState<SupportField>;