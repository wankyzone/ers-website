"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="ERS home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#19c963] font-display text-lg font-extrabold text-white">
            E
          </span>
          <span className="font-display text-xl font-extrabold tracking-[-0.04em] text-[#101512]">ERS</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#4e5a53] md:flex">
          <Link href="/how-it-works" className="transition hover:text-[#101512]">How it works</Link>
          <Link href="/for-runners" className="transition hover:text-[#101512]">For Runners</Link>
          <Link href="/safety" className="transition hover:text-[#101512]">Safety</Link>
          <Link href="/about" className="transition hover:text-[#101512]">About</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#get-started" className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-[#101512] transition hover:bg-black/5 sm:inline-flex">
            Sign in
          </a>
          <a href="#get-started" className="hidden rounded-full bg-[#101512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#26322b] sm:inline-flex">
            Get started
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-black/10 p-2 text-[#101512] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium text-[#4e5a53]">
            <Link href="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
            <Link href="/for-runners" onClick={() => setOpen(false)}>For Runners</Link>
            <Link href="/safety" onClick={() => setOpen(false)}>Safety</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <a href="#get-started" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#101512] px-5 py-3 text-center font-semibold text-white">
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
