'use client';

import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 md:px-16 py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/brand.jpg"
            alt="About"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-zinc-900 dark:text-white mb-6">
            We’re More Than Just a Team
          </h2>
          <div className="space-y-5 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              At MetaQ, we bring your vision to life from design to
              development to growth. Our process is intentionally crafted to help
              you grow smart and scale fast.
            </p>
            <p>
              Whether you’re building from scratch or scaling what already exists,
              we work like partners not vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
