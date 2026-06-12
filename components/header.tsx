"use client";

import { useState } from "react";
import { navigation } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl">
      <nav
        className="page-shell flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="focus-ring rounded-md font-display text-lg font-bold tracking-tight text-white"
          aria-label="Hasan Khaldieh, back to top"
        >
          HK<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-current transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/[0.07] bg-ink-950/95 transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="page-shell flex flex-col py-3">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-2 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
