"use client";

import { useActionState } from "react";
import { ChevronsUpDown, LoaderCircle } from "lucide-react";
import { Field, Honeypot, fieldClass } from "@/components/forms/form-field";
import { submitSalesInquiry } from "@/app/contact/sales/actions";
import { Button } from "@/components/ui/button";
import { companySizes, contactConfig } from "@/config/contact";
import type { SalesFormState } from "@/lib/validations/sales";

const initialState: SalesFormState = { status: "idle" };

export function SalesForm() {
  const [state, formAction, isPending] = useActionState(
    submitSalesInquiry,
    initialState,
  );
  const errors = state.fieldErrors ?? {};
  const values = state.values;

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
        <h2 className="text-xl font-medium">Message sent</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you by email.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      <h2 className="text-lg font-medium">Tell us how we can help</h2>

      {/* Honeypot */}
      <Honeypot />


      <Field id="name" label="Full name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          defaultValue={values?.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="email" label="Work email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          defaultValue={values?.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="companySize" label="Company size" error={errors.companySize}>
        <div className="relative">
          <select
            id="companySize"
            name="companySize"
            defaultValue={values?.companySize || companySizes[0]}
            aria-invalid={Boolean(errors.companySize)}
            aria-describedby={errors.companySize ? "companySize-error" : undefined}
            className={`${fieldClass} appearance-none pr-10`}
          >
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <ChevronsUpDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </Field>

      <Field id="message" label="Tell us about your project" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="I'd like to build a tool for my team that..."
          defaultValue={values?.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-400">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button
          type="submit"
          disabled={isPending}
          className="h-12 rounded-full bg-foreground px-6 text-base font-medium text-background hover:bg-foreground/90"
        >
          {isPending && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
          {isPending ? "Sending..." : "Send message"}
        </Button>

        <p className="text-sm text-muted-foreground">
          You can also email us at{" "}
          <a
            href={`mailto:${contactConfig.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {contactConfig.email}
          </a>
        </p>
      </div>
    </form>
  );
}