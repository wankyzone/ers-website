"use client";

export default function BlogPage() {
  const posts = [
    {
      title: "Building ERS in Lagos",
      desc: "What it really takes to build a real-world logistics platform in one of Africa’s busiest cities.",
      date: "June 2026",
    },
    {
      title: "Why errands are broken",
      desc: "The hidden inefficiencies in everyday task execution — and how we’re fixing them.",
      date: "June 2026",
    },
    {
      title: "The ERS journey",
      desc: "From idea to execution: how ERS is being built step by step.",
      date: "June 2026",
    },
  ];

  return (
    <main className="bg-[#0B0D12] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* HERO */}
        <div className="mb-16">
          <p className="text-xs tracking-widest text-[#1ED760] mb-4">
            BLOG
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building ERS in public
          </h1>

          <p className="text-white/60 max-w-2xl text-lg">
            Insights, lessons, and behind-the-scenes of building a real-world
            errand infrastructure across Lagos.
          </p>
        </div>

        {/* POSTS */}
        <div className="grid gap-6">

          {posts.map((post, i) => (
            <div
              key={i}
              className="
                bg-[#111217]
                border border-white/10
                rounded-xl p-6
                hover:border-white/20
                hover:-translate-y-1
                transition-all duration-300
                cursor-pointer
              "
            >
              <div className="flex justify-between items-center mb-3 text-xs text-white/40">
                <span>{post.date}</span>
                <span className="text-[#1ED760]">Coming soon</span>
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {post.title}
              </h2>

              <p className="text-white/60 text-sm">
                {post.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Follow the journey
          </h2>

          <p className="text-white/60 mb-6">
            We’re building ERS in public — follow along as we scale.
          </p>

          <a
            href="#"
            className="
              inline-block
              bg-[#1ED760] text-black
              px-8 py-4 rounded-md
              font-semibold
              hover:bg-[#17c253]
              transition
            "
          >
            Subscribe for updates
          </a>

        </div>

      </div>
    </main>
  );
}