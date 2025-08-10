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
    <section className="relative bg-white dark:bg-zinc-950 py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading + Arrows */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Work We’re Proud Of
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Shopify builds and redesigns that elevate brands.
            </p>
          </div>
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
                className="group block rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-800 
                           bg-white dark:bg-zinc-900 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* Image with better clarity & shape */}
                <div className="relative w-full h-72 overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 text-left">
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
