"use client";
import { useEffect, useState } from "react";

export default function LovedBy() {
  const words = ["Co-founders", "Product managers", "UX designers", "Marketers"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24  dark:border-gray-700">
      <div className="max-w-3xl mx-auto text-center text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white leading-snug">
        <div className="text-3xl md:text-5xl font-extrabold"> Loved by 10+ professionals from{" "} </div>
        <span className="relative inline-block h-[1.2em] overflow-hidden min-w-[10ch] sm:min-w-[14ch] align-middle">
          <span
            className="block transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${index * 1.2}em)` }}
          >
            {words.map((w, i) => (
              <span
                key={i}
                className="block h-[1.2em] leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500"
              >
                {w}
              </span>
            ))}
          </span>
        </span>
      </div>
    </section>
  );
}
