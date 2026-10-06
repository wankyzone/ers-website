import { ArrowUpRight, Clock3, MapPin, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Save time",
    description: "Hand off the physical work so you can keep your attention on what matters.",
    icon: Clock3,
  },
  {
    title: "Stay in control",
    description: "Know what is happening with your errand instead of wondering where it stands.",
    icon: MapPin,
  },
  {
    title: "Build trust",
    description: "ERS is designed around verification, accountability and a structured completion flow.",
    icon: ShieldCheck,
  },
];

export default function Solution() {
  return (
    <section className="py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1ED760]">
              Why ERS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Less running around. More getting things done.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
            ERS turns an ordinary errand into a visible, structured process — from creating the request to confirming completion.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/[0.08] bg-[#0b100d] p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1ED760]/10 text-[#1ED760]">
                <Icon size={20} />
              </div>
              <h3 className="mt-7 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                ERS
                <ArrowUpRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}