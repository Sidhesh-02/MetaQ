'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const services = [
  {
    category: 'Shopify & Web',
    active: true,
    items: [
      {
        title: 'Development & Maintenance',
        description:
          'Ongoing support to keep your Shopify store or website fast, secure, and always updated.',
      },
      {
        title: 'Theme Development',
        description:
          'Custom Shopify themes designed to match your brand and optimized for performance.',
      },
      {
        title: 'Custom Portfolio Websites',
        description:
          'Beautiful, unique portfolios crafted to showcase your work and attract new opportunities.',
      },
      {
        title: 'Custom Web App Development',
        description:
          'Tailored web applications built to streamline workflows and deliver seamless user experiences.',
      },
    ],
  },
  {
    category: 'Marketing',
    active: false,
    items: [
      {
        title: 'Social Media Creatives & Management',
        description:
          'Eye-catching content and consistent social presence to grow and engage your audience.',
      },
      {
        title: 'Meta Ads Campaigns',
        description:
          'Performance-driven ad campaigns on Facebook and Instagram to maximize ROI.',
      },
      {
        title: 'WhatsApp API Solutions',
        description:
          'Automated messaging, customer support, and marketing through WhatsApp Business API.',
      },
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    services.find((s) => s.active)?.category || services[0].category
  );

  const activeService = services.find((s) => s.category === activeCategory);

  return (
    <section className="relative py-28 px-6 md:px-16 w-full overflow-hidden bg-black text-white">
      {/* Subtle linear gradient background (dark only) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(58,0,94,0.4)] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16">
        {/* Left column: Categories */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-sm uppercase tracking-wider text-zinc-400 mb-4">
            Our Services
          </h2>
          {services.map((service, idx) => (
            <h3
              key={idx}
              onClick={() => {
                setActiveCategory(service.category);
                setOpenIndex(null);
              }}
              className={`text-3xl md:text-5xl font-semibold transition cursor-pointer ${
                activeCategory === service.category
                  ? 'text-white'
                  : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {service.category}
            </h3>
          ))}
        </div>

        {/* Right column: Expandable items */}
        <div className="flex flex-col divide-y divide-zinc-800">
          {activeService?.items.map((item, idx) => (
            <div key={idx} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex text-left justify-between items-center w-full text-2xl font-light text-zinc-200 hover:text-white transition"
              >
                {item.title}
                <Plus
                  size={20}
                  className={`transition-transform ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}
                />
              </button>

              {/* Description reveal */}
              <div
                className={`mt-3 text-sm md:text-base text-zinc-400 leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
