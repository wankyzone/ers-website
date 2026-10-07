"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b120e] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image src="/ers-logo.png" alt="ERS logo" width={180} height={48} className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Errand Runners System
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">
              On-demand errands in Lagos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">Product</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
              <Link href="/how-it-works" className="transition hover:text-white">How it works</Link>
              <Link href="/" className="transition hover:text-white">For Clients</Link>
              <Link href="/for-runners" className="transition hover:text-white">For Runners</Link>
              <Link href="/safety" className="transition hover:text-white">Safety</Link>
              <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">Company</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
              <Link href="/about" className="transition hover:text-white">About ERS</Link>
              <Link href="/blog" className="transition hover:text-white">ERS Updates</Link>
              <Link href="/careers" className="transition hover:text-white">Careers</Link>
              <Link href="/press" className="transition hover:text-white">Press</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">Ecosystem</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
              <span>Wanky Technologies</span>
              <span>Wanky Cloud</span>
              <span>Wanky</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">Legal</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
              <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="transition hover:text-white">Terms of Service</Link>
              <Link href="/cookie-policy" className="transition hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ERS — Errand Runners System.</p>
          <p>Built for Lagos.</p>
        </div>
      </div>
    </footer>
  );
}
