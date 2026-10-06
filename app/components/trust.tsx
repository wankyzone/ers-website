import { LockKeyhole, MapPin, ShieldCheck, WalletCards } from "lucide-react";

const trustPoints = [
  {
    title: "Runner verification",
    description: "ERS includes a verification process designed to establish runner identity and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "In-app communication",
    description: "Clients and runners can communicate through the ERS experience instead of relying on scattered channels.",
    icon: LockKeyhole,
  },
  {
    title: "Real-time visibility",
    description: "Track an active errand and understand its progress while it is being completed.",
    icon: MapPin,
  },
  {
    title: "Structured payments",
    description: "ERS is designed around verified payments, escrow and completion confirmation.",
    icon: WalletCards,
  },
];

export default function Trust() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080a09] py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1ED760]">
            Trust & safety
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Built around visibility, accountability and control.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/55">
            The goal is simple: make a real-world errand feel as structured and visible as the digital products you already trust.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/[0.08] bg-[#0b100d] p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1ED760]/10 text-[#1ED760]">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/35">
          <span>Verified runners</span>
          <span>Secure payment flow</span>
          <span>Real-time tracking</span>
          <span>Completion confirmation</span>
        </div>
      </div>
    </section>
  );
}