"use client";

import { useCallback, useEffect, useState } from "react";

type NavItem = { label: string; href: string; active?: boolean };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-transform duration-300"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed inset-y-0 right-0 z-40 flex w-[280px] max-w-[85vw] flex-col bg-surface/95 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1 px-6 pt-24 pb-8">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={close}
              className={`rounded-lg px-4 py-3 text-[17px] font-semibold transition-colors ${
                item.active
                  ? "bg-brand/10 text-brand"
                  : "text-foreground hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-white/10 px-6 py-6">
          <button className="flex h-11 w-full items-center justify-center rounded-lg bg-accent font-semibold text-white transition-opacity hover:opacity-90">
            Sign Up
          </button>
          <button className="flex h-11 w-full items-center justify-center rounded-lg border border-brand font-semibold text-white transition-colors hover:bg-brand/10">
            Log in
          </button>
        </div>
      </nav>
    </>
  );
}
