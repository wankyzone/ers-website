"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050706]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ERS home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1ED760] text-sm font-black text-black">
            E
          </span>
          <span className="font-display text-base font-bold tracking-tight">ERS</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <Link href="/how-it-works" className="transition hover:text-white">How it works</Link>
          <Link href="/for-runners" className="transition hover:text-white">For Runners</Link>
          <Link href="/safety" className="transition hover:text-white">Safety</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="hidden rounded-full bg-[#1ED760] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#18c955] sm:inline-flex"
          >
            Get started
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.07] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/70">
            <Link href="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
            <Link href="/for-runners" onClick={() => setOpen(false)}>For Runners</Link>
            <Link href="/safety" onClick={() => setOpen(false)}>Safety</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#1ED760] px-5 py-3 text-center font-semibold text-black"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}