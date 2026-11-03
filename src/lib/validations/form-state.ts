import type { ZodError } from "zod";

export type FormState<TField extends string> = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<TField, string>>;
  values?: Record<TField, string>;
};

export function getFieldErrors<TField extends string>(error: ZodError) {
  const fieldErrors: Partial<Record<TField, string>> = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as TField | undefined;
    if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
  }
  return fieldErrors;
}