"use client";

import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";
import HowItWorks from "./components/how-it-works";
import Solution from "./components/solution"; // "Why ERS"
import Trust from "./components/trust";
import Testimonials from "./components/testimonials"; // ✅ ADD THIS
import CTA from "./components/cta";
import Footer from "./components/footer";

/**
 * Task state shared between Hero + Categories
 */
export default function Page() {
  const [task, setTask] = useState("");

  return (
    <main className="bg-[#0B0D12] text-white overflow-x-hidden">
      <Navbar />

      {/* PRIMARY CONVERSION ENTRY */}
      <Hero task={task} setTask={setTask} />

      {/* CLARITY */}
      <HowItWorks />

      {/* USE CASES */}
      <Categories setTask={setTask} />

      {/* DIFFERENTIATION */}
      <Solution />

      {/* TRUST */}
      <Trust />

      {/* 🔥 SOCIAL PROOF (CRITICAL ADDITION) */}
      <Testimonials />

      {/* FINAL CONVERSION PUSH */}
      <CTA />

      <Footer />
    </main>
  );
}