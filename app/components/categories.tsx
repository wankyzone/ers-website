"use client";

import { ShoppingCart, Package, Pill, Box, Zap, Coffee } from "lucide-react";

const categories = [
  ["Groceries", ShoppingCart, "Everyday shopping and household items"],
  ["Pickups", Package, "Collect something and bring it to you"],
  ["Pharmacy", Pill, "Pick up pharmacy essentials"],
  ["Packages", Box, "Move a package across Lagos"],
  ["Quick errands", Zap, "Handle a task while you stay focused"],
  ["Food & drinks", Coffee, "Pick up food or drinks for you"],
] as const;

export default function Categories() {
  return (
    <section className="bg-[#f5f7f4] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e9f4c]">What can ERS handle?</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] text-[#101512] sm:text-5xl">
              The little things. The urgent things. The things you simply do not have time for.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#66716a]">One runner, one errand at a time — structured from request to completion.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(([title, Icon, description]) => (
            <div key={title} className="group rounded-[24px] bg-white p-5 shadow-[0_12px_25px_rgba(16,21,18,0.03)] ring-1 ring-[#e8efe9] transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f8ea] text-[#0e9f4c] transition group-hover:bg-[#19c963] group-hover:text-white">
                <Icon size={21} />
              </div>
              <h3 className="mt-5 text-sm font-bold text-[#101512]">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#7a847d]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
