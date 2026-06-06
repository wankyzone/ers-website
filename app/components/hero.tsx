"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const suggestions = [
  "Buy groceries from Shoprite",
  "Deliver a package to Lekki",
  "Pick up food from KFC",
  "Get medication from a pharmacy",
];

export default function Hero({
  task,
  setTask,
}: {
  task: string;
  setTask: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Auto-focus when task is set from Categories
  useEffect(() => {
    if (task) inputRef.current?.focus();
  }, [task]);

  const handleSubmit = useCallback(async () => {
    const trimmed = task.trim();
    if (!trimmed || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/errands", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: trimmed }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message ?? `Server error (${res.status})`);
      }

      // Success
      setStatus("success");
      setTask("");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Try again.";
      setErrorMsg(message);
      setStatus("error");
    }
  }, [task, status, setTask]);

  // Enter submits
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit]
  );

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <section
      id="hero"
      className="relative pt-24 pb-32 px-5 sm:px-8"
      aria-label="Find a runner"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-[72px] font-bold leading-[1.05] tracking-tight mb-6">
          Stop losing hours to{" "}
          <span className="text-[#1ED760]">errand running.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light mb-12 max-w-xl mx-auto">
          Verified runners across Lagos. Real-time tracking. Delivered in minutes, not hours. Join 2,400+ happy users.
        </p>

        {/* Input */}
        <div className="mb-6">
          <div
            className={`
              relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3
              bg-[#111217] border rounded-lg transition-all duration-200
              ${
                status === "error"
                  ? "border-red-500/50"
                  : isSuccess
                  ? "border-[#1ED760]/50"
                  : "border-white/10"
              }
            `}
          >
            <input
              ref={inputRef}
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              onKeyDown={handleKeyDown}
              placeholder="What do you need done?"
              disabled={isLoading || isSuccess}
              aria-label="Describe your errand"
              aria-describedby={status === "error" ? "hero-error" : undefined}
              className="
                flex-1 bg-transparent px-5 py-4 text-white text-base
                placeholder:text-white/30
                outline-none disabled:opacity-50
              "
            />

            <button
              onClick={handleSubmit}
              disabled={isLoading || isSuccess || !task.trim()}
              className="
                flex items-center justify-center gap-2 shrink-0
                bg-[#1ED760] text-black
                px-8 py-4 m-1 rounded-md
                text-base font-bold tracking-wide
                hover:bg-[#17c253]
                active:scale-[0.99]
                disabled:opacity-40 disabled:cursor-not-allowed
                transition-all duration-150
              "
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="hidden sm:inline">Matching…</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Request sent</span>
                </>
              ) : (
                <>
                  <span>Get started</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => setTask(s)}
                className="
                  text-xs px-3 py-1
                  bg-white/5 border border-white/10
                  rounded-full
                  hover:bg-white/10
                  transition
                "
              >
                {s}
              </button>
            ))}
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="mt-3 flex flex-col items-center gap-2">
              <p id="hero-error" className="text-red-400 text-sm font-medium">
                {errorMsg}
              </p>
              <button
                onClick={handleSubmit}
                className="text-xs underline text-white/60 hover:text-white"
              >
                Try again
              </button>
            </div>
          )}

          {/* Success */}
          {isSuccess && (
            <p className="text-[#1ED760] text-sm mt-3 font-medium">
              ✓ Got it. A runner will reach out within 5 minutes.
            </p>
          )}
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-white/40 mb-12">
          No upfront cost. See available runners in 30 seconds.
        </p>

        {/* Trust */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
          <div>
            <div className="text-2xl font-bold font-display text-white mb-1">
              4.9★
            </div>
            <div className="text-xs text-white/40">from 2,100+ reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white mb-1">
              12 min
            </div>
            <div className="text-xs text-white/40">average match time</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-display text-white mb-1">
              100%
            </div>
            <div className="text-xs text-white/40">verified runners</div>
          </div>
        </div>
      </div>
    </section>
  );
}