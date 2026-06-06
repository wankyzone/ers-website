"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Lock,
  Camera,
  Headphones,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

function Counter({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, decimals]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const features = [
  {
    title: "Only verified runners",
    desc: "Every runner is identity-verified and reviewed before completing a single errand.",
    icon: ShieldCheck,
  },
  {
    title: "Secure payments",
    desc: "Your money is protected with escrow. You only pay after the job is done.",
    icon: Lock,
  },
  {
    title: "Live tracking",
    desc: "Know exactly where your errand is at every moment — no guessing.",
    icon: Camera,
  },
  {
    title: "Community accountability",
    desc: "Ratings and reviews ensure only top performers stay active.",
    icon: Star,
  },
  {
    title: "24/7 support",
    desc: "Real humans ready to help anytime you need assistance.",
    icon: Headphones,
  },
  {
    title: "Top runner badges",
    desc: "High-performing runners earn verified status you can trust.",
    icon: BadgeCheck,
  },
];

export default function Trust() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1ED760]/5 via-transparent to-[#1ED760]/5" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Heading */}
        <p className="text-xs tracking-widest text-[#1ED760] mb-4">
          TRUST & SAFETY
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Built to be reliable
        </h2>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Every layer of ERS is designed to keep your errands safe, transparent, and predictable.
        </p>

        {/* STATS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div>
            <p className="text-3xl font-bold text-[#1ED760]">
              <Counter target={100} suffix="%" />
            </p>
            <p className="text-white/50 text-sm mt-2">
              runners verified before first job
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#1ED760]">
              <Counter target={4.9} decimals={1} />★
            </p>
            <p className="text-white/50 text-sm mt-2">
              average runner rating
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#1ED760]">
              ₦<Counter target={0} />
            </p>
            <p className="text-white/50 text-sm mt-2">
              lost to disputes
            </p>
          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-[#111217]
                  border border-white/10
                  rounded-2xl p-6 text-left
                  hover:border-white/20
                  hover:-translate-y-1
                  transition
                "
              >
                <Icon className="w-6 h-6 text-[#1ED760] mb-4" />

                <h3 className="text-sm font-semibold text-white">
                  {f.title}
                </h3>

                <p className="text-sm text-white/60 mt-2">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* TRUST BADGES */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-white/40 text-sm">

          <span className="border border-white/10 px-4 py-2 rounded-lg">
            Paystack Secured
          </span>

          <span className="border border-white/10 px-4 py-2 rounded-lg">
            NDPR Compliant
          </span>

          <span className="border border-white/10 px-4 py-2 rounded-lg">
            End-to-end encryption
          </span>

        </div>

        {/* CTA (CRITICAL ADD) */}
        <div className="mt-20">
          <a
            href="#hero"
            className="
              inline-block
              bg-[#1ED760] text-black
              px-8 py-4 rounded-md
              font-semibold
              hover:bg-[#17c253]
              transition
            "
          >
            Try ERS risk-free
          </a>
        </div>

      </div>
    </section>
  );
}