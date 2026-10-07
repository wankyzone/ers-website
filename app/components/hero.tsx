import { ArrowRight, CheckCircle2, MapPin, Package, ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f7f3] text-[#101512]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(25,201,99,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(16,21,18,0.08),_transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-20">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#187e46]">Built for Lagos</p>

          <h1 className="max-w-xl font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] text-[#101512] sm:text-6xl lg:text-[76px]">
            Need it done?
            <br />
            <span className="text-[#0b7f3e]">Send an ERS Runner.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#4c5752] sm:text-lg">
            From groceries and pickups to pharmacy runs and everyday tasks, ERS helps you get real-world errands handled without the usual friction.
          </p>

          <div className="mt-8 max-w-xl rounded-[26px] border border-[#dfeae1] bg-white p-3 shadow-[0_22px_60px_rgba(16,21,18,0.08)]">
            <div className="flex items-start gap-3 rounded-[18px] border border-[#edf3ef] bg-[#f7faf7] p-3 sm:p-4">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f8ee] text-[#0d8d46]">
                <MapPin size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6a7a71]">What do you need done in Lagos?</p>
                <p className="mt-2 text-base font-semibold text-[#101512] sm:text-lg">Groceries, pharmacy, packages, and quick errands</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Groceries', 'Pickups', 'Pharmacy', 'Packages'].map((item) => (
                <span key={item} className="rounded-full border border-[#dfeae1] bg-[#f4f7f4] px-3 py-1.5 text-xs font-semibold text-[#2b3a32]">{item}</span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-[18px] bg-[#101512] p-2 text-white shadow-[0_18px_30px_rgba(16,21,18,0.22)]">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Sparkles size={15} className="text-[#66e38f]" />
                <span>Ready when you are</span>
              </div>
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-[#19c963] px-4 py-2.5 text-sm font-bold text-[#07110b] transition hover:bg-[#15b559]">
                Get started <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#4d5852]">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0d8d46]" /> Verified runners</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0d8d46]" /> Live tracking</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0d8d46]" /> Secure payments</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#19c963]/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[#101512]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-[#dfeae1] bg-[#0d1712] p-4 shadow-[0_30px_90px_rgba(10,15,12,0.22)] sm:p-6">
            <div className="absolute inset-0 opacity-30" style={{
              background: "radial-gradient(circle at 25% 20%, rgba(25,201,99,0.18), transparent 18%), linear-gradient(140deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
            }} />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Live errand</p>
                <p className="mt-2 text-xl font-bold text-white">Lekki → Victoria Island</p>
              </div>
              <span className="rounded-full bg-[#19c963]/15 px-3 py-1.5 text-[11px] font-bold text-[#7be2a0]">In progress</span>
            </div>

            <div className="relative mt-8 rounded-[24px] border border-white/10 bg-[#0f1d16]/80 p-4 backdrop-blur-sm">
              <svg className="h-52 w-full" viewBox="0 0 520 220" fill="none" aria-label="Illustrated Lagos route">
                <path d="M26 154C88 118 120 72 188 88C244 101 284 182 360 166C405 156 441 116 493 62" stroke="#2d4d3d" strokeWidth="20" strokeLinecap="round"/>
                <path d="M26 154C88 118 120 72 188 88C244 101 284 182 360 166C405 156 441 116 493 62" stroke="#19c963" strokeWidth="4" strokeLinecap="round" strokeDasharray="9 12"/>
                <circle cx="26" cy="154" r="9" fill="#19c963"/>
                <circle cx="493" cy="62" r="11" fill="#fff"/>
                <circle cx="493" cy="62" r="5" fill="#19c963"/>
              </svg>
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { icon: ShoppingBag, label: "Groceries", value: "Picked up" },
                { icon: Package, label: "Package", value: "On the way" },
                { icon: Sparkles, label: "Runner", value: "Verified" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-[18px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <Icon size={18} className="text-[#66e38f]" />
                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-[20px] border border-white/10 bg-white/8 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-[11px] text-white/60">
                <span>Runner dispatched</span>
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
