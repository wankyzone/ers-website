"use client";

import { useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

type Consent = "accepted" | "declined" | null;

export default function Analytics() {
  const [consent] = useState<Consent>(() => {
    if (typeof window === "undefined") return null;

    const value = localStorage.getItem("ers_cookie_consent");

    if (value === "accepted" || value === "declined") {
      return value;
    }

    return null;
  });

  if (consent !== "accepted") return null;

  return <GoogleAnalytics gaId="G-X8KBSSB2ZH" />;
}