import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full px-6 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      {/* Top-left neon blob */}
      <div
        className="absolute -top-32 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]
        bg-cyan-400/40 dark:bg-cyan-300/20"
      />

      {/* Bottom-right neon blob */}
      <div
        className="absolute -bottom-32 -right-40 w-[450px] h-[450px] rounded-full blur-[110px]
        bg-green-400/40 dark:bg-green-300/20"
      />

      {/* Decorative radial highlight in center */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)]
        dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"
      />

      {/* Bottom gradient fade for transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-zinc-900 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-3xl pt-0 md:pt-20">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white mb-6">
          Scaling Ideas Into Brands
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
          We help businesses grow through design, development, and marketing 
          turning your vision into a brand people remember.
        </p>
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
