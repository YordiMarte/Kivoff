import { z } from "zod";
import { companySizes } from "@/config/contact";

export const salesSchema = z.object({
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
  companySize: z.enum(companySizes, {
    message: "Please select a company size.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (at least 10 characters).")
    .max(2000, "Please keep it under 2,000 characters."),
});

export type SalesField = keyof z.infer<typeof salesSchema>;

export type SalesFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<SalesField, string>>;
  values?: Record<SalesField, string>;
};