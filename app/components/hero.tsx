import { ArrowRight, CheckCircle2, MapPin, Package, ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#19c963] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white/80">Built for Lagos</p>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
            Need it done?
            <br />
            <span className="text-[#092a16]">Send an ERS Runner.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Groceries, pickups, pharmacy runs, packages and the everyday tasks you do not have time to handle yourself.
          </p>

          <div className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-2 shadow-[0_18px_60px_rgba(0,0,0,0.14)] sm:flex-row">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 text-[#657168]">
              <MapPin size={19} className="shrink-0 text-[#19a957]" />
              <span className="truncate text-sm sm:text-base">What do you need done in Lagos?</span>
            </div>
            <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#101512] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#26322b]">
              Get started <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/80">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} /> Verified runners</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} /> Live tracking</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} /> Secure payments</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[#0c8f47]/20 blur-3xl" />

          <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-[#0c1c13] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:p-7">
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
              backgroundSize: "44px 44px"
            }} />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Live errand</p>
                <p className="mt-1 text-lg font-bold">Lekki → Victoria Island</p>
              </div>
              <span className="rounded-full bg-[#19c963]/15 px-3 py-1.5 text-xs font-bold text-[#66e38f]">In progress</span>
            </div>

            <svg className="relative mt-8 h-64 w-full" viewBox="0 0 520 260" fill="none" aria-label="Illustrated Lagos route">
              <path d="M42 204 C120 170 122 88 218 106 C292 120 302 204 390 172 C436 156 456 102 480 54" stroke="#214f35" strokeWidth="18" strokeLinecap="round" />
              <path d="M42 204 C120 170 122 88 218 106 C292 120 302 204 390 172 C436 156 456 102 480 54" stroke="#19c963" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 10" />
              <circle cx="42" cy="204" r="12" fill="#19c963" />
              <circle cx="480" cy="54" r="12" fill="#fff" />
              <circle cx="480" cy="54" r="5" fill="#19c963" />
            </svg>

            <div className="relative grid gap-3 sm:grid-cols-3">
              {[
                { icon: ShoppingBag, label: "Groceries", value: "Picked up" },
                { icon: Package, label: "Package", value: "On the way" },
                { icon: Sparkles, label: "Runner", value: "Verified" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <Icon size={18} className="text-[#19c963]" />
                  <p className="mt-4 text-xs text-white/45">{label}</p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl sm:left-7 sm:right-7">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-white/50">Runner dispatched</span>
                <span className="font-bold text-[#66e38f]">68%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-[#19c963]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
