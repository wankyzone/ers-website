"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("ers_cookie_consent");
  });

  const acceptCookies = () => {
    localStorage.setItem("ers_cookie_consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("ers_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          We use cookies to improve your experience. By using ERS, you agree
          to our{" "}
          <a href="/cookie-policy" className="underline">
            Cookie Policy
          </a>.
        </p>

        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 border border-white text-sm"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-white text-black text-sm font-medium"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}