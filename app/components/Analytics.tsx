"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

type Consent = "accepted" | "declined" | null;

export default function Analytics() {
  // ✅ Lazy initialization (no useEffect needed)
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === "undefined") return null;

    const value = localStorage.getItem("ers_cookie_consent");
    return value === "accepted" || value === "declined"
      ? value
      : null;
  });

  // ✅ Only listen for external changes
  useEffect(() => {
    const handleStorage = () => {
      const value = localStorage.getItem("ers_cookie_consent");

      setConsent(
        value === "accepted" || value === "declined"
          ? value
          : null
      );
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  if (consent !== "accepted") return null;

  return <GoogleAnalytics gaId="G-X8KBSSB2ZH" />;
}