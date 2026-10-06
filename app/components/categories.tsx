"use client";

import {
  ShoppingCart,
  Package,
  Pill,
  Box,
  Zap,
  Coffee,
} from "lucide-react";

const categories = [
  ["Groceries", "ShoppingCart", "Buy groceries or household items"],
  ["Pickups", "Package", "Collect an item and bring it to you"],
  ["Pharmacy", "Pill", "Pick up an item from a pharmacy"],
  ["Packages", "Box", "Move a package across Lagos"],
  ["Quick errands", "Zap", "Handle a task nearby"],
  ["Food & drinks", "Coffee", "Pick up food or drinks"],
] as const;

const icons = { ShoppingCart, Package, Pill, Box, Zap, Coffee };

export default function Categories() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080a09] py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1ED760]">
            Real-world tasks
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            One platform for the things that still need doing.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/55">
            From pickups to local purchases, ERS is built around the everyday errands that take time to handle yourself.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
          {categories.map(([title, iconName, description]) => {
            const Icon = icons[iconName as keyof typeof icons];

            return (
              <div
                key={title}
                className="bg-[#0b100d] p-6 transition hover:bg-[#0e130f] sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1ED760]/10 text-[#1ED760]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-base font-semibold">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/45">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}