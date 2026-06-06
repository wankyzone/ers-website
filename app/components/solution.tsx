"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, MapPin } from "lucide-react";

const features = [
  {
    title: "Post an errand in seconds",
    desc: "Tell us what you need done and get matched instantly. No calls, no waiting, no back and forth.",
    highlight: "< 2 min to match a runner",
    icon: Zap,
    color: "text-[#1ED760]",
    border: "from-[#1ED760]",
  },
  {
    title: "Trusted, verified runners",
    desc: "Every runner is vetted, rated, and accountable. You always know who’s handling your task.",
    highlight: "100% verified & rated",
    icon: ShieldCheck,
    color: "text-blue-400",
    border: "from-blue-400",
  },
  {
    title: "Track everything live",
    desc: "See exactly where your errand is at every moment. Full transparency from pickup to delivery.",
    highlight: "Live GPS tracking",
    icon: MapPin,
    color: "text-yellow-400",
    border: "from-yellow-400",
  },
];

export default function Solution() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1ED760]/5 via-transparent to-[#1ED760]/5" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#1ED760] mb-4">
          WHY ERS
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          A faster way to get things{" "}
          <span className="text-[#1ED760]">done</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Built for speed, trust, and real-world reliability in Lagos.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  relative bg-[#111217]
                  border border-white/10
                  rounded-2xl p-6 text-left
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:shadow-[0_0_40px_rgba(30,215,96,0.08)]
                  transition-all duration-300
                "
              >

                {/* Accent line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${f.border} to-transparent`} />

                {/* Icon */}
                <div className="
                  w-12 h-12 rounded-xl
                  bg-white/5
                  flex items-center justify-center
                  mb-4
                  group-hover:scale-110 transition
                ">
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 mt-3 leading-relaxed">
                  {f.desc}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 my-5" />

                {/* Highlight */}
                <p className={`text-sm font-semibold ${f.color}`}>
                  {f.highlight}
                </p>

              </motion.div>
            );
          })}

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
            Post your first errand
          </a>
        </div>

      </div>
    </section>
  );
}