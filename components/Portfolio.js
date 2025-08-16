'use client';

import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRef } from "react";

const projects = [
  {
    title: 'FourOFive',
    link: 'https://fourofive.com/',
    description: 'Minimal and classy storefront for modern lifestyle gear.',
    image: '/fourofive.jpg',
  },
  {
    title: 'House of SAT',
    link: 'https://houseofsat.com/',
    description: 'Luxury fashion store with branding and theme development.',
    image: '/sat.jpg',
  },
  {
    title: 'Sneakfly',
    link: 'https://sneakflyy.in/',
    description: 'Streetwear Shopify store for exclusive sneaker drops.',
    image: '/sneakfly.jpg',
  },
  {
    title: 'Deadbeat',
    link: 'https://deadbeat.in/',
    description: 'Bold eCommerce store design for an alt fashion label.',
    image: '/deadbeat.jpg',
  },
];

export default function Portfolio() {
  const splideRef = useRef(null);

  return (
    <section className="relative dark:border-gray-700 py-24 px-6 md:px-16 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading + Arrows stacked */}
        <div className="flex flex-col items-center gap-6 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Work We’re{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Proud Of
            </span>
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => splideRef.current?.go('<')}
              className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => splideRef.current?.go('>')}
              className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Splide
          ref={splideRef}
          options={{
            perPage: 3,
            gap: '2rem',
            arrows: false,
            pagination: false,
            drag: true,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {projects.map((project, index) => (
            <SplideSlide key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-72 overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={index === 0}
                  />
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
