"use client";

import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="bg-[#0B0D12] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-white/80">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            How ERS Works
          </h1>
          <p className="text-white/50">
            Get your errands done in minutes — without the stress.
          </p>
        </div>

        {/* Intro */}
        <p className="mb-12 leading-relaxed">
          ERS makes it simple to get real-world tasks done quickly and reliably.
          From start to finish, everything is designed for speed, transparency,
          and control.
        </p>

        {/* Steps */}
        <div className="space-y-12">

          {/* Step 1 */}
          <div className="p-6 bg-[#111217] border border-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. Create your errand
            </h2>
            <p className="text-white/70">
              Describe what you need done, add locations, and include any
              instructions. It takes less than a minute.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-[#111217] border border-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. Get matched instantly
            </h2>
            <p className="text-white/70">
              Verified runners nearby receive your request and accept within
              seconds.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-[#111217] border border-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. Track in real time
            </h2>
            <p className="text-white/70">
              Follow your errand live with updates, so you always know what’s
              happening.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-[#111217] border border-white/5 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              4. Confirm and pay
            </h2>
            <p className="text-white/70">
              Once completed, confirm the task and pay securely — only after the
              job is done.
            </p>
          </div>

        </div>

        {/* Trust Layer */}
        <div className="mt-16 p-6 bg-[#111217] border border-white/5 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-3">
            Built for reliability
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Verified runners only</li>
            <li>Real-time tracking for full visibility</li>
            <li>Secure payment system</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ready to try it?
          </h2>
          <p className="text-white/50 mb-6">
            Create your first errand and see how fast it works.
          </p>

          <Link
            href="/"
            className="
              inline-block bg-[#1ED760] text-black
              px-8 py-4 rounded-md font-semibold
              hover:bg-[#17c253] transition
            "
          >
            Get started
          </Link>
        </div>

      </div>
    </main>
  );
}