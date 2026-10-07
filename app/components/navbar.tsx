"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#dfeae1] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="ERS home">
          <Image
            src="/ers-logo.png"
            alt="ERS logo"
            width={180}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#47554d] md:flex">
          <Link href="/how-it-works" className="transition hover:text-[#101512]">How it works</Link>
          <Link href="/for-runners" className="transition hover:text-[#101512]">For Runners</Link>
          <Link href="/safety" className="transition hover:text-[#101512]">Safety</Link>
          <Link href="/about" className="transition hover:text-[#101512]">About</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#get-started" className="hidden rounded-full border border-[#dfeae1] px-4 py-2.5 text-sm font-semibold text-[#101512] transition hover:bg-[#f3f7f3] sm:inline-flex">
            Sign in
          </a>
          <a href="#get-started" className="hidden rounded-full bg-[#101512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f2a24] sm:inline-flex">
            Get started
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-[#dfeae1] p-2 text-[#101512] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#eaece8] bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium text-[#47554d]">
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
