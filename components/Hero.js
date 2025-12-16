import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-20 flex items-center justify-center min-h-screen w-full px-6 overflow-hidden bg-white transition-colors duration-500">
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,60,200,0.15)_0%,transparent_70%)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <div className="max-w-2xl mb-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-zinc-900">
            Building Brands <br className="hidden sm:block" /> That Drive Growth
          </h1>
        </div>

        {/* Subtext */}
        <p className="max-w-lg sm:max-w-xl mx-auto mb-10 text-base sm:text-lg text-zinc-500 leading-relaxed">
          We design, build, and scale brands through thoughtful strategy and execution.
        </p>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Results in their words
          </p>

          <div className="flex items-center justify-center gap-4 opacity-70">
            {/* Shopify */}
            <a href="https://www.shopify.com/partners/directory/partner/sneakerstreet">
              <div className="flex items-center justify-center p-4 rounded-xl border border-zinc-300 bg-white">
                <Image
                  src="/shopify.svg"
                  alt="Shopify"
                  width={110}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Trustpilot */}
            <a href="https://www.trustpilot.com/review/metaq.in">
              <div className="flex items-center justify-center p-4 rounded-xl border border-zinc-300 bg-white">
                <Image
                  src="/trustpilot.svg"
                  alt="Trustpilot"
                  width={90}
                  height={36}
                  className="object-contain translate-y-[1px]"
                />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
