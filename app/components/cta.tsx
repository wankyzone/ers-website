"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleJoin = async () => {
    if (!email || status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const referralCode = urlParams.get("ref");

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, referralCode }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Try again.");
      }

      const { data } = await res.json();

      const link = `${window.location.origin}?ref=${data.referral_code}`;
      setReferralLink(link);
      setEmail("");
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
      setStatus("error");
    }
  };

  return (
    <section className="py-28 text-center px-6">

      {/* Headline */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Skip the queue. Invite friends.
      </h2>

      <p className="text-white/50 mb-8">
        Join early and get priority access.
      </p>

      {/* Input */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleJoin();
          }}
          placeholder="Enter your email"
          disabled={status === "loading" || status === "success"}
          className="
            flex-1 px-4 py-3
            bg-[#111217]
            border border-white/10
            rounded-md
            text-white
            placeholder:text-white/30
            outline-none
            disabled:opacity-50
          "
        />

        <button
          onClick={handleJoin}
          disabled={!email || status === "loading"}
          className="
            px-6 py-3
            bg-[#1ED760] text-black
            rounded-md font-semibold
            hover:bg-[#17c253]
            disabled:opacity-40 disabled:cursor-not-allowed
            transition
          "
        >
          {status === "loading"
            ? "Joining..."
            : status === "success"
            ? "Joined ✓"
            : "Join"}
        </button>

      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-red-400 mt-4 text-sm">
          {error}
        </p>
      )}

      {/* Success */}
      {referralLink && (
        <div className="mt-8 p-5 bg-[#111217] border border-white/5 rounded-lg max-w-xl mx-auto">
          <p className="text-sm text-white/50 mb-2">
            Your referral link
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-[#1ED760] break-all text-sm">
              {referralLink}
            </p>

            <button
              onClick={() => {
                navigator.clipboard.writeText(referralLink);
              }}
              className="
                px-3 py-1 text-xs
                border border-white/20
                rounded
                hover:bg-white/5
              "
            >
              Copy
            </button>
          </div>
        </div>
      )}

    </section>
  );
}