'use client';

import { SparklesText } from "@/components/magicui/sparkles-text"; 

export default function About() {
  return (
    <section className="relative overflow-hidden py-28 px-6 md:px-16 bg-white dark:bg-black transition-colors duration-500">
      {/* Radial Gradient Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),rgba(79,70,229,0.05),transparent)] rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        <p className="text-sm uppercase text-gray-500 dark:text-gray-400 tracking-wide">
          About Us
        </p>

        {/* Animated Premium Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
          We’re More{" "}
          <SparklesText
            className={"text-xs"}
            text="More"
            colors={{ first: "#7C3AED", second: "#4F46E5" }}
          />{" "}
          Than Just a Team
        </h2>

        {/* Subtext */}
        <p className="text-lg font-light text-zinc-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          At MetaQ, we bring your vision to life, we built to help you grow smart and scale fast, whether you’re starting fresh or expanding an existing brand.
        </p>

        {/* CTA */}
        <a className="cursor-pointer mt-6 px-8 py-3 rounded-full border border-gray-300 text-zinc-900 bg-white hover:bg-purple-50 dark:bg-black dark:text-white dark:border-gray-700 dark:hover:bg-zinc-900 transition font-medium">
          Connect →
        </a>
      </div>
    </section>
  );
}
