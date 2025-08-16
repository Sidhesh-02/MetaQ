'use client';

import { Brush, Code, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Design & Branding',
    description:
      'We create visuals that spark emotion, from memorable logos to cohesive brand systems.',
    icon: Brush,
  },
  {
    title: 'Development',
    description:
      'Scalable websites and apps built with modern tech that grows alongside your business.',
    icon: Code,
  },
  {
    title: 'Marketing & Ads',
    description:
      'Result-driven campaigns on Meta, Google, and beyond to fuel measurable growth.',
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section className="relative py-28 px-6 md:px-16 w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-400/10 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-400/10 blur-[140px] rounded-full" />

      {/* Radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text">
            Expertise
          </span>
        </h2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-20 leading-relaxed max-w-2xl mx-auto">
          Everything you need to <span className="font-semibold text-indigo-500 dark:text-indigo-400">build</span> and{" "}
          <span className="font-semibold text-purple-500 dark:text-purple-400">scale</span> your brand — all in one place.
        </p>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center rounded-2xl p-10 
              bg-gradient-to-b from-white/80 to-white/60 dark:from-zinc-900/80 dark:to-zinc-900/60 
              backdrop-blur-xl border border-white/20 dark:border-zinc-800/40 
              shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
             

              <div className="relative z-10 flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full 
                bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 
                text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
