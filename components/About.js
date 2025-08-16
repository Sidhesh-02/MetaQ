'use client';

import Image from "next/image";

export default function About() {
  return (
    <section className="relative dark:border-gray-700 overflow-hidden py-24 px-6 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      {/* Background Accent */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-400/5" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-400/5" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Image with floating effect */}
        <div className="relative w-full max-w-lg group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 blur-2xl opacity-30 group-hover:opacity-40 transition duration-500" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/brand.jpg"
              alt="About MetaQ"
              width={600}
              height={800}
              className="object-cover transform group-hover:scale-105 transition duration-700"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white">
            We’re <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">More</span> Than Just a Team
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            At MetaQ, we bring your vision to life — from concept and design to development and growth. 
            Our process is designed to help you grow smart and scale fast.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Whether you’re starting fresh or scaling an existing brand, we partner with you every step of the way — not just as vendors, but as collaborators.
          </p>
          <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
