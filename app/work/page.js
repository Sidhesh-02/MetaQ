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
    <main className="relative py-20 w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 overflow-hidden">

      {/* Neon blobs */}
      <div className="absolute -top-32 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] bg-cyan-400/30 dark:bg-cyan-300/10" />
      <div className="absolute -bottom-32 -right-40 w-[450px] h-[450px] rounded-full blur-[110px] bg-green-400/30 dark:bg-green-300/10" />

      {/* Faint background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-10 opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Shopify Results Gallery
        </h1>
        <p className="mt-4 text-lg bg-gradient-to-r from-cyan-500 via-green-500 to-purple-500 bg-clip-text text-transparent font-medium">
          Proven growth. Real data. Beautiful results.
        </p>
      </section>

      {/* Separator */}
      <div className="relative max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-green-400/40 mb-12" />

      {/* Image Gallery */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="group relative rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
            onClick={() => setSelected(src)}
          >
            {/* Gradient border ring effect */}
            {/* <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500 blur-sm" /> */}

            {/* Title */}
            <div className="relative px-4 py-2 border-b border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-600 dark:text-zinc-300 bg-gradient-to-r from-white/80 to-transparent dark:from-zinc-900/80 backdrop-blur-sm">
              Graph {i + 1}
            </div>

            {/* Image */}
            <div className="relative w-full h-72">
              <Image
                src={src}
                alt={`Graph ${i + 1}`}
                fill
                className="object-contain p-3 relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Modal / Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[95%] max-w-5xl h-[85%] bg-white dark:bg-zinc-900 rounded-2xl p-4">
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
              className="absolute top-4 right-4 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-zinc-900 to-transparent pointer-events-none" />
    </main>
  );
}
