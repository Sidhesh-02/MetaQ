import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-[100vh] w-full px-6 transition-opacity duration-1000 ease-in-out overflow-hidden"
    >
      {/* Top-left neon blob */}
      <div className="absolute -top-24 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] 
        bg-cyan-400/60 shadow-[0_0_80px_40px_rgba(34,211,238,0.4)] opacity-40 
        dark:bg-cyan-300/30 dark:shadow-[0_0_120px_60px_rgba(103,232,249,0.6)]" />

      {/* Bottom-right neon blob */}
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] 
        bg-green-400/60 shadow-[0_0_80px_40px_rgba(74,222,128,0.4)] opacity-40 
        dark:bg-green-300/30 dark:shadow-[0_0_120px_60px_rgba(134,239,172,0.6)]" />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-2xl pt-20">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white mb-6">
          Scaling Ideas Into Brands
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-8">
          We help businesses grow through design, development & marketing.
        </p>
        <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
