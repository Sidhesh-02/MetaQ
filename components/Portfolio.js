"use client";

import { SparklesText } from "@/components/magicui/sparkles-text";

const projects = [
  {
    title: "The Beauty Room",
    description:"Premium curated beauty brand for skincare, makeup, and everyday essentials designed to make you look good and feel confident.",
    category: "Skincare & Cosmetics",
  },
  {
    title:"Kusoo Organics",
    description:"Natural and organic perfume brand focused on creating unique, long-lasting scents using high-quality ingredients.",
    category: "Fragrance & Beauty",
  },
  {
    title: "FourOFive",
    description:"Retail apparel brand offering trendy and casual fashion pieces.",
    category: "Retail & Fashion",
  },
  {
    title: "Rigwell",
    description:"Provider of premium kitchen sinks, modular wardrobe fittings, faucets, mirrors, and soap dispensers.",
    category: "Home & Living",
  },
  {
    title: "House of Sat",
    description:"Manufacturer and fashion brand creating unique and contemporary clothing collections.",
    category: "Clothing & Apparel",
  },
  
  {
    title: "Deadbeat",
    description:"Streetwear-inspired apparel brand bringing bold and edgy styles.",
    category: "Retail & Fashion",
  },
  {
    title: "Sneakflyy",
    description:"Urban fashion and sneaker-inspired apparel brand with a modern street style.",
    category: "Retail & Fashion",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-18 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* HEADER */}
        <header className="text-center mb-8 ">
          <span className="block text-[14px] uppercase tracking-[0.4em] text-zinc-400 mb-6">
            Selected Work
          </span>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 leading-[0.95]">
            Built with
            <br />
            <SparklesText
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              className="text-4xl md:text-6xl !leading-[0.95]"
            >
              intention
            </SparklesText>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-md sm:max-w-xl mx-auto text-base sm:text-lg text-zinc-500 leading-relaxed">
            A restrained collection of brand work shaped through proportion,
            detail, and long-term thinking.
          </p>
        </header>

        <div className="divide-y divide-zinc-200 text-left">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-10 relative overflow-hidden cursor-pointer mb-4"
            >
              <div className="absolute inset-0 opacity-100 transition duration-700 bg-gradient-to-r from-purple-500/10 via-violet-500/5 to-purple-500/10 blur-2xl rounded-xl" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10 px-8">
                <div>
                  <h3 className="text-3xl font-light tracking-tight transition-colors duration-500 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                    {p.title}
                  </h3>
                  {p.category && (
                    <p className="text-sm text-zinc-500  mt-1">{p.category}</p>
                  )}
                  {p.description && (
                    <p className="text-sm text-zinc-600  mt-2 max-w-sm">
                      {p.description}
                    </p>
                  )}
                </div>
                <span className="mt-4 md:mt-0 text-sm  transition-all duration-700 opacity-100 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
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
