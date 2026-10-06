import { ArrowDownRight, ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(30,215,96,0.12),transparent_32%)]" />
      <div className="absolute right-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full border border-[#1ED760]/10" />
      <div className="absolute right-[-7rem] top-44 h-[18rem] w-[18rem] rounded-full border border-[#1ED760]/10" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:pb-32 lg:pt-28">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1ED760]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1ED760]" />
            Built for Lagos
          </p>

          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-[82px]">
            Your errands.
            <br />
            <span className="text-[#1ED760]">Handled.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            ERS connects you with verified runners who can handle the real-world tasks
            you do not have time to do — while you stay in control.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ED760] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#18c955]"
            >
              Get started
              <ArrowRight size={17} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
            >
              See how it works
              <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
            <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#1ED760]" /> Verified runners</span>
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#1ED760]" /> Real-time tracking</span>
            <span className="flex items-center gap-2">Secure payments</span>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b100d]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute left-8 top-8 text-xs uppercase tracking-[0.2em] text-white/35">Lagos / ERS</div>

          <div className="absolute left-[17%] top-[25%] h-3 w-3 rounded-full bg-[#1ED760] shadow-[0_0_30px_rgba(30,215,96,0.7)]" />
          <div className="absolute right-[18%] top-[43%] h-3 w-3 rounded-full border-2 border-[#1ED760] bg-[#0b100d]" />
          <div className="absolute left-[24%] top-[48%] h-[2px] w-[56%] rotate-[13deg] bg-gradient-to-r from-[#1ED760] via-[#1ED760]/50 to-transparent" />

          <div className="absolute left-7 right-7 bottom-7 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/40">LIVE ERRAND</p>
                <p className="mt-1 font-semibold">Pickup → Delivery</p>
              </div>
              <span className="rounded-full bg-[#1ED760]/10 px-3 py-1 text-xs font-semibold text-[#1ED760]">
                In progress
              </span>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-[#1ED760]" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-white/35">
              <span>Runner dispatched</span>
              <span>68%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}