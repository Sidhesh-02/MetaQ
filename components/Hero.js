export default function Hero() {
  return (
    <section className="relative md:pt-20 flex items-center justify-center min-h-screen w-full px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,60,200,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(58,0,94,0.4)_0%,transparent_70%)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
            Building Digital Stores <br className="hidden sm:block" /> That Drive Growth
          </h1>
        </div>

        {/* Subtext + Button */}
        <div className="max-w-lg">
          <p className="text-base sm:text-lg text-zinc-700 dark:text-gray-300 mb-6">
            We craft, optimize, and scale brands with tailored design,
            development and market strategies that fuels longterm success.
          </p>
          <button className="cursor-pointer px-6 py-3 rounded-full border border-gray-300 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition font-medium">
            Discover Services →
          </button>
        </div>
      </div>
    </section>
  );
}
