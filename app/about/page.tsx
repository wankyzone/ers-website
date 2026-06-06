export default function AboutPage() {
  return (
    <main className="bg-[#0B0D12] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* HERO */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We’re building the operating system for getting things done in Africa.
          </h1>

          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            ERS (Errand Runners System) turns real-world tasks into an on-demand service —
            giving people back time in one of the most time-constrained cities in the world.
          </p>
        </div>

        {/* WHY NOW */}
        <div className="mb-20">
          <h2 className="text-sm tracking-widest text-[#1ED760] mb-4">
            WHY NOW
          </h2>

          <p className="text-white/70 leading-relaxed">
            Lagos is one of the fastest-growing cities globally — but its infrastructure hasn’t kept up.
            Traffic, queues, and inefficiencies cost people hours every day.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            At the same time, smartphone adoption, digital payments, and location services have reached
            a tipping point. The conditions now exist for a new layer of infrastructure:
            on-demand, real-world task execution.
          </p>
        </div>

        {/* WHAT WE DO */}
        <div className="mb-20">
          <h2 className="text-sm tracking-widest text-[#1ED760] mb-4">
            WHAT WE’RE BUILDING
          </h2>

          <p className="text-white/70 leading-relaxed">
            ERS connects clients with verified runners who execute errands in real time —
            from deliveries and pickups to time-consuming everyday tasks.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            But this is just the beginning. Over time, ERS becomes the infrastructure layer
            that powers how services move in cities — logistics, errands, and on-demand work,
            all unified into one system.
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <div>
            <h2 className="text-sm tracking-widest text-[#1ED760] mb-4">
              MISSION
            </h2>
            <p className="text-white/70 leading-relaxed">
              Eliminate everyday friction by making real-world tasks instantly accessible.
            </p>
          </div>

          <div>
            <h2 className="text-sm tracking-widest text-[#1ED760] mb-4">
              VISION
            </h2>
            <p className="text-white/70 leading-relaxed">
              Build the default infrastructure for on-demand services across Africa.
            </p>
          </div>

        </div>

        {/* EDGE */}
        <div className="mb-20">
          <h2 className="text-sm tracking-widest text-[#1ED760] mb-4">
            OUR EDGE
          </h2>

          <ul className="space-y-4 text-white/70">
            <li>• Built specifically for Lagos — not adapted from other markets</li>
            <li>• Real-time tracking and transparency at every step</li>
            <li>• Verified runners with accountability systems</li>
            <li>• Designed for speed, not bureaucracy</li>
          </ul>
        </div>

        {/* FUTURE */}
        <div className="mb-20">
          <h2 className="text-sm tracking-widest text-[#1ED760] mb-4">
            WHERE THIS GOES
          </h2>

          <p className="text-white/70 leading-relaxed">
            Today, ERS helps you run errands.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            Tomorrow, it powers how cities operate — enabling faster movement of goods,
            services, and people’s time.
          </p>
        </div>

        {/* CLOSING */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-white/50 text-sm">
            We’re not just building a product. We’re building infrastructure.
          </p>
        </div>

      </div>
    </main>
  );
}