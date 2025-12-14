"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Partner() {
  const logos = [
    { src: "/shopify.svg", alt: "Shopify", width: 145, height: 60 },
    { src: "/metaads.svg", alt: "Meta Ads", width: 110, height: 70 },
    { src: "/aisensy.png", alt: "AiSensy", width: 145, height: 65 },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Radial blobs for depth */}
      <div className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
          Partnered with the Best
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300">
          Trusted Partnerships with Top Ecommerce Platforms
        </p>

        {/* ✅ Mobile: Splide Slider */}
        <div className="mt-16 block md:hidden">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              gap: "1.5rem",
              arrows: false,
              pagination: false,
              autoplay: true,
              interval: 5000,
              pauseOnHover: false,
              drag: true,
            }}
          >
            {logos.map((logo, idx) => (
              <SplideSlide key={idx}>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain invert brightness-0"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* ✅ Desktop: Grid */}
        <div className="mt-16 hidden md:grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-10">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain invert brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
