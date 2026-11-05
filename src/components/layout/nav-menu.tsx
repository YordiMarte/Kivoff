"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  navigation,
  type MenuItem,
  type NavDropdownItem,
} from "@/config/navigation";
import { cn } from "@/lib/utils";

const itemClass =
  "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground";

function MenuEntry({
  item,
  onNavigate,
}: {
  item: MenuItem;
  onNavigate: () => void;
}) {
  const content = (
    <>
      <span className="flex items-center gap-2 text-sm font-medium">
        {item.label}
        {item.badge && (
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-normal text-muted-foreground">
            {item.badge}
          </span>
        )}
      </span>
      {item.description && (
        <span className="mt-1 block text-sm leading-snug text-muted-foreground">
          {item.description}
        </span>
      )}
    </>
  );

  if (!item.href) {
    return (
      <span
        aria-disabled="true"
        className="block cursor-not-allowed rounded-xl px-4 py-3 opacity-50"
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none"
    >
      {content}
    </Link>
  );
}

function Dropdown({ item }: { item: NavDropdownItem }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const panelId = useId();

  const close = () => setOpen(false);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    closeTimer.current = setTimeout(close, 120);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={(event) => event.pointerType === "mouse" && openNow()}
      onPointerLeave={(event) => event.pointerType === "mouse" && closeSoon()}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          close();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={(event) => {
          if (event.detail === 0) setOpen((value) => !value);
          else setOpen(true);
        }}
        className={cn(itemClass, open && "bg-white/[0.08] text-foreground")}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3 transition duration-150",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="grid grid-cols-[1.5fr_1fr] rounded-2xl border border-white/10 bg-[#0c0d0e]/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
          <div>
            {item.menu.featured.map((entry) => (
              <MenuEntry key={entry.label} item={entry} onNavigate={close} />
            ))}
          </div>
          <div className="border-l border-white/10 pl-2">
            {item.menu.secondary.map((entry) => (
              <MenuEntry key={entry.label} item={entry} onNavigate={close} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export function NavMenu() {
  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navigation.map((item) =>
          "menu" in item ? (
            <Dropdown key={item.label} item={item} />
          ) : (
            <li key={item.label}>
              <Link href={item.href} className={itemClass}>
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}