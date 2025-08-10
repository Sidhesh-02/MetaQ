'use client';

import Image from 'next/image';

export default function ContactCTA() {
  return (
    <section className="relative w-full py-28 px-6 bg-zinc-900 text-white text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556139930-c23fa4a4f934?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          fill
          className="object-cover object-center opacity-25"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Let’s Build Something Extraordinary.
        </h2>
        <p className="text-lg text-zinc-300 mb-10">
          Collaborate with us to turn your vision into a bold digital experience.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
