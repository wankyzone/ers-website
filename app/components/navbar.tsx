"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false); // ✅ close mobile menu on click
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0D12]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#1ED760] rounded-md flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>

          <span className="text-white font-semibold text-sm tracking-tight">
            ERS
          </span>

          <span className="text-gray-500 text-xs hidden sm:block">
            Errand Runners
          </span>
        </Link>

        {/* CENTER: Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/how-it-works" className="hover:text-white transition">
            How it works
          </Link>
          <Link href="/for-runners" className="hover:text-white transition">
            For Runners
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* CTA */}
          <a
            href="#hero"
            className="
              hidden sm:inline-block
              px-5 py-2 rounded-lg font-medium
              bg-[#1ED760] text-black
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(30,215,96,0.25)]
            "
          >
            Get started
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-white/10"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-sm text-gray-400 border-t border-white/10">

          <Link href="/how-it-works" onClick={handleNavClick} className="block hover:text-white">
            How it works
          </Link>

          <Link href="/for-runners" onClick={handleNavClick} className="block hover:text-white">
            For Runners
          </Link>

          <Link href="/pricing" onClick={handleNavClick} className="block hover:text-white">
            Pricing
          </Link>

          <a
            href="#hero"
            onClick={handleNavClick}
            className="
              block text-center
              mt-2 px-4 py-3
              rounded-lg bg-[#1ED760]
              text-black font-medium
            "
          >
            Get started
          </a>

        </div>
      )}
    </nav>
  );
}