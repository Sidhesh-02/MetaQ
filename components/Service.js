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
    <section className="px-6 md:px-16 py-24 bg-gradient-to-br from-amber-50 to-rose-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
          Our Expertise
        </h2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-16 leading-relaxed max-w-2xl mx-auto">
          Everything you need to build and scale your brand — all in one place.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center border border-transparent bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/40"
            >
              {/* Icon Container */}
              <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
