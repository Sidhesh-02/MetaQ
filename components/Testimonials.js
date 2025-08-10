'use client';

import { Marquee } from "@/components/magicui/marquee";

const testimonials = [
  {
    name: 'Karan',
    title: 'Founder, Cop Your Drip',
    quote:
      'Working with MetaQ was a game changer…',
  },
  {
    name: 'Dixit',
    title: 'Founder, SAT Clothing',
    quote: 'Incredible results and seamless experience…',
  },
  {
    name: 'Subh',
    title: 'Founder, Sneakfly',
    quote: 'Professional, reliable, full of ideas…',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 dark:text-white mb-8 tracking-tight">
          What Our Clients Say
        </h2>
        <Marquee className="gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[320px] flex-shrink-0 rounded-2xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 p-6 text-left"
            >
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">{t.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{t.title}</p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed line-clamp-6">
                {t.quote}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
