"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080c09] px-5 pb-8 pt-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#19c963] font-display text-lg font-extrabold text-white">E</span>
              <span className="font-display text-xl font-extrabold">ERS</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              On-demand errands in Lagos. One platform for the real-world tasks that still need doing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Product</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/45">
              <Link href="/how-it-works" className="hover:text-white">How it works</Link>
              <Link href="/for-runners" className="hover:text-white">For Runners</Link>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/safety" className="hover:text-white">Safety</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Company</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/45">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <Link href="/careers" className="hover:text-white">Careers</Link>
              <Link href="/press" className="hover:text-white">Press</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Legal</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/45">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ERS — Errand Runners System.</p>
          <p>Built for Lagos.</p>
        </div>
      </div>
    </footer>
  );
}
