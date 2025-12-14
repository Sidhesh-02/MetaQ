'use client';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/deadbeat-graph.png',
  '/deadbeat-graph.png',
  '/deadbeat-graph.png',
  '/deadbeat-graph.png',
];

export default function WorkPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="relative py-20 w-full min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Elegant radial gradients */}
      <div className="absolute top-10 left-1/3 w-[40rem] h-[40rem] rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] rounded-full bg-indigo-400/10 blur-3xl" />

      {/* Subtle noise overlay for depth */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* Section Header */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Shopify Growth Results
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
          Real data. Real brands. Real growth — powered by our ecommerce expertise.
        </p>
      </section>

      {/* Gradient Divider */}
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-12" />

      {/* Image Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md overflow-hidden cursor-pointer transition transform hover:-translate-y-1 hover:shadow-2xl"
            onClick={() => setSelected(src)}
          >
            {/* Card Title */}
            <div className="relative px-4 py-2 border-b border-zinc-100 dark:border-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 backdrop-blur-sm">
              Case Study {i + 1}
            </div>

            {/* Image */}
            <div className="relative w-full h-72">
              <Image
                src={src}
                alt={`Graph ${i + 1}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Modal / Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[95%] max-w-5xl h-[85%] bg-white dark:bg-zinc-950 rounded-3xl p-4 shadow-xl">
            <Image
              src={selected}
              alt="Selected Graph"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
