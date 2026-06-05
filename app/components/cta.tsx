"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [referralLink, setReferralLink] = useState("");

  const handleJoin = async () => {
    if (!email) return;

    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get("ref");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email, referralCode }),
    });

    const { data } = await res.json();

    const link = `${window.location.origin}?ref=${data.referral_code}`;
    setReferralLink(link);
    setEmail("");
  };

  return (
    <section className="py-28 text-center">

      <h2 className="text-4xl font-bold">
        Skip the queue. Invite friends.
      </h2>

      <div className="mt-6 flex justify-center gap-4">

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="px-4 py-3 bg-[#111217] border border-white/10 rounded"
        />

        <button
          onClick={handleJoin}
          className="px-6 py-3 bg-[#1ED760] text-black rounded"
        >
          Join
        </button>

      </div>

      {referralLink && (
        <div className="mt-6">
          <p className="text-sm text-gray-400">
            Your referral link:
          </p>
          <p className="text-green-400">{referralLink}</p>
        </div>
      )}

    </section>
  );
}