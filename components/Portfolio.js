'use client';

const projects = [
    {
      "title": "Rigwell",
      "description": "Provider of premium kitchen sinks, modular wardrobe fittings, faucets, mirrors, and soap dispensers.",
      "category": "Home & Living"
    },
    {
      "title": "House of Sat",
      "description": "Manufacturer and fashion brand creating unique and contemporary clothing collections.",
      "category": "Clothing & Apparel"
    },
    {
      "title": "Four or Five",
      "description": "Retail apparel brand offering trendy and casual fashion pieces.",
      "category": "Retail & Fashion"
    },
    {
      "title": "Deadbeat",
      "description": "Streetwear-inspired apparel brand bringing bold and edgy styles.",
      "category": "Retail & Fashion"
    },
    {
      "title": "Sneakflyy",
      "description": "Urban fashion and sneaker-inspired apparel brand with a modern street style.",
      "category": "Retail & Fashion"
    }
];

export default function Portfolio() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          <span className="">
            Featured Work
          </span>
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-4xl mx-auto mb-16">
          A collection of brands and creative projects we’ve proudly built and collaborated with.
        </p>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800 text-left">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-purple-500/10 via-violet-500/5 to-purple-500/10 blur-2xl rounded-xl" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10 px-8">
                <div>
                  <h3 className="text-3xl font-light tracking-tight text-zinc-800 dark:text-zinc-100 transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent">
                    {p.title}
                  </h3>
                  {p.category && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      {p.category}
                    </p>
                  )}
                  {p.description && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-sm">
                      {p.description}
                    </p>
                  )}
                </div>
                <span className="mt-4 md:mt-0 text-sm text-zinc-500 dark:text-zinc-400 transition-all duration-700 opacity-100 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
