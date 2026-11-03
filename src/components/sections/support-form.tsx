"use client";

import { useActionState } from "react";
import { ChevronsUpDown, LoaderCircle } from "lucide-react";
import { submitSupportRequest } from "@/app/contact/support/actions";
import { Field, Honeypot, fieldClass } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { supportTopics } from "@/config/contact";
import type { SupportFormState } from "@/lib/validations/support";

const initialState: SupportFormState = { status: "idle" };

export function SupportForm() {
  const [state, formAction, isPending] = useActionState(
    submitSupportRequest,
    initialState,
  );
  const errors = state.fieldErrors ?? {};
  const values = state.values;

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
      >
        <h2 className="text-xl font-medium">Request received</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Thanks for letting us know. We&apos;ll reply to you by email.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      <h2 className="text-lg font-medium">Tell us how we can help</h2>

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

      <Field id="email" label="Email" error={errors.email}>
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

      <Field id="topic" label="What do you need help with?" error={errors.topic}>
        <div className="relative">
          <select
            id="topic"
            name="topic"
            defaultValue={values?.topic || supportTopics[0]}
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? "topic-error" : undefined}
            className={`${fieldClass} appearance-none pr-10`}
          >
            {supportTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <ChevronsUpDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </Field>

      <Field
        id="message"
        label="Describe the problem or question"
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What happened, and what did you expect to happen?"
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

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 w-fit rounded-full bg-foreground px-6 text-base font-medium text-background hover:bg-foreground/90"
      >
        {isPending && (
          <LoaderCircle className="size-4 animate-spin" aria-hidden />
        )}
        {isPending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}