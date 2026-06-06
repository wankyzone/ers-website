"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("ers_cookie_consent");
  });

  const updateConsent = (value: "accepted" | "declined") => {
    localStorage.setItem("ers_cookie_consent", value);

    // ✅ Trigger analytics sync (same-tab fix)
    window.dispatchEvent(new Event("storage"));

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4">
      <div className="
        max-w-6xl mx-auto
        bg-[#111217] border border-white/10
        rounded-xl shadow-lg
        p-4 sm:p-5
        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4
      ">

        {/* Text */}
        <p className="text-sm text-white/70 leading-relaxed">
          We use cookies to improve your experience, analyze usage, and keep ERS secure.{" "}
          <Link href="/cookie-policy" className="underline text-white">
            Learn more
          </Link>
        </p>

        {/* Actions */}
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={() => updateConsent("declined")}
            className="
              flex-1 sm:flex-none
              px-4 py-2
              border border-white/20
              text-white/80 text-sm
              rounded-md
              hover:bg-white/5
              transition
            "
          >
            Decline
          </button>

          <button
            onClick={() => updateConsent("accepted")}
            className="
              flex-1 sm:flex-none
              px-4 py-2
              bg-[#1ED760] text-black
              text-sm font-semibold
              rounded-md
              hover:bg-[#17c253]
              transition
            "
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}