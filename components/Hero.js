import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,60,200,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(58,0,94,0.4)_0%,transparent_70%)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start justify-between w-full max-w-7xl mx-auto text-center md:text-left">
        
        {/* Left Side - Main Heading */}
        <div className="max-w-2xl">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 uppercase">
            Shopify Experts
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
            Building Digital Stores <br className="hidden sm:block" /> That Drive Growth
          </h1>
        </div>

        {/* Right Side - Subtext & Button */}
        <div className="mt-8 md:mt-0 md:ml-12 max-w-lg">
          <p className="text-base sm:text-lg text-zinc-700 dark:text-gray-300 mb-6">
            We craft, optimize, and scale Shopify brands with tailored design 
            and development strategies that fuel long-term success.
          </p>
          <button className="px-6 py-3 rounded-full border border-gray-300 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition font-medium">
            Discover Services →
          </button>
        </div>
      </div>
    </section>
  );
}
