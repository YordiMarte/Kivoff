import type { ReactNode } from "react";

export const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-red-400/60";

export function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px]">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}