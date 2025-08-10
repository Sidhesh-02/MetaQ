'use client';

import { Marquee } from "@/components/magicui/marquee";

const testimonials = [
  {
    name: 'Karan',
    title: 'Founder, Cop Your Drip',
    quote: 'Working with MetaQ was a game changer. They understood our vision and delivered beyond expectations!',
  },
  {
    name: 'Dixit',
    title: 'Founder, SAT Clothing',
    quote: 'Incredible results and a seamless experience. Communication was flawless from start to finish.',
  },
  {
    name: 'Subh',
    title: 'Founder, Sneakfly',
    quote: 'Professional, reliable, and full of ideas. They brought our brand to life in a way we couldn’t have imagined.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 dark:text-white mb-14 tracking-tight">
          What Our Clients Say
        </h2>

        <Marquee className="gap-10" pauseOnHover>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[320px] flex-shrink-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-6 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-lg mb-4">
                {t.name.charAt(0)}
              </div>

              {/* Name & Title */}
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">{t.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{t.title}</p>

              {/* Quote */}
              <p className="italic text-zinc-800 dark:text-zinc-300 leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
