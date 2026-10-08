import Link from "next/link";
import WaitlistForm from "../components/waitlist-form";

export const metadata = {
  title: "Join the ERS Waitlist",
  description:
    "Be among the first to use ERS in Lagos. Join the early-access waitlist.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101512] text-white">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(25,201,99,0.16),transparent_38%)]"
        />

        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <Link href="/" aria-label="ERS home" className="text-xl font-black tracking-[-0.04em]">
            ERS<span className="text-[#19c963]">.</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/75 transition hover:border-white/20 hover:text-white"
          >
            Back to ERS
          </Link>
        </header>

        <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-4xl items-center px-5 py-16 text-center sm:px-8 sm:py-24">
          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#66e38f] sm:text-sm">
              Early access · Lagos
            </p>

            <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-black tracking-[-0.055em] sm:text-7xl">
              Be first in line for ERS.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Join the waitlist for ERS and get early access when we launch.
              One place for errands that need to get done.
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
              <WaitlistForm />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-xs leading-5 text-white/35">
              By joining, you agree to receive launch and early-access updates from ERS.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
