"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleJoin = async () => {
    if (!email || status === "loading") return;
    setStatus("loading"); setError("");
    try {
      const referralCode = new URLSearchParams(window.location.search).get("ref");
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, referralCode }),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        const serverMessage =
          payload?.details || payload?.error || "Something went wrong. Try again.";

        throw new Error(
          process.env.NODE_ENV !== "production"
            ? serverMessage
            : "Something went wrong. Please try again."
        );
      }

      const { data } = payload;
      setReferralLink(`${window.location.origin}?ref=${data.referral_code}`);
      setEmail(""); setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <section id="get-started" className="bg-[#101512] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#66e38f]">Get early access</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
          Your next errand can be the easy one.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
          Join the ERS waitlist and be among the first people to use ERS in Lagos.
        </p>

        <div className="mx-auto mt-9 flex max-w-2xl flex-col gap-2 rounded-[24px] bg-white p-2 shadow-[0_20px_40px_rgba(0,0,0,0.16)] sm:flex-row">
          <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
            <Mail size={19} className="shrink-0 text-[#19a957]" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleJoin(); }}
              placeholder="Enter your email"
              disabled={status === "loading" || status === "success"}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-[#101512] outline-none placeholder:text-[#87918a]"
            />
          </div>
          <button
            onClick={handleJoin}
            disabled={!email || status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#19c963] px-6 py-3.5 text-sm font-bold text-[#07110b] transition hover:bg-[#16b95a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Joining..." : status === "success" ? "Joined ✓" : "Join ERS"}
            {status !== "loading" && status !== "success" && <ArrowRight size={16} />}
          </button>
        </div>

        {status === "error" && <p className="mt-4 text-sm text-red-300">{error}</p>}
        {referralLink && (
          <div className="mx-auto mt-6 max-w-2xl rounded-[20px] border border-white/10 bg-white/5 p-4 text-left">
            <p className="text-xs uppercase tracking-wider text-white/40">Your referral link</p>
            <p className="mt-2 break-all text-sm text-[#66e38f]">{referralLink}</p>
          </div>
        )}
      </div>
    </section>
  );
}
