'use client';

import {
  Brush,
  Code,
  Rocket,
} from 'lucide-react';

const services = [
  {
    title: 'Design & Branding',
    description: 'We create visuals that spark emotion from logos to full brand systems.',
    icon: <Brush size={36} />,
  },
  {
    title: 'Development',
    description: 'Scalable websites and apps using modern tech that grows with your business.',
    icon: <Code size={36} />,
  },
  {
    title: 'Marketing & Ads',
    description: 'Result-driven campaigns on Meta, Google, and beyond to drive growth.',
    icon: <Rocket size={36} />,
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-16 py-24 bg-gradient-to-br from-amber-50 to-rose-50 dark:bg-none dark:bg-zinc-900
 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight">
          Our Expertise
        </h2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-16 leading-relaxed max-w-2xl mx-auto">
          Everything you need to build and scale your brand — in one place.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-8 transition-transform hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
