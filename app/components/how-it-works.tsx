import { CheckCircle2, ClipboardEdit, UserCheck } from "lucide-react";

const steps = [
  { number: "01", title: "Tell us what you need", desc: "Describe the errand, where it needs to happen, and where the result should go.", icon: ClipboardEdit },
  { number: "02", title: "A runner handles it", desc: "A verified runner accepts the errand and gets to work.", icon: UserCheck },
  { number: "03", title: "Track it to completion", desc: "Stay updated while your runner completes the task and confirm when it is done.", icon: CheckCircle2 },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0e9f4c]">Simple process</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] text-[#101512] sm:text-5xl">
            From “I need this done” to done.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(({ number, title, desc, icon: Icon }) => (
            <article key={number} className="rounded-3xl border border-black/8 bg-[#f5f7f4] p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#19a957]">{number}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#19c963] text-white">
                  <Icon size={20} />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#101512]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#66716a]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
