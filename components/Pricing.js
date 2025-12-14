'use client';

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-indigo-400 dark:text-indigo-300 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="relative dark:border-gray-700 py-24 px-6 md:px-16 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 overflow-hidden">
    
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-zinc-400 mb-4">
            Our Pricing
          </h2>
          <p className="mt-2 text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Choose the right plan
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            Simple, transparent pricing to fit every stage of your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Custom Website / Portfolio",
              price: "$29",
              desc: "Perfect for professionals who want a unique online presence.",
              features: [
                "Responsive, SEO-Optimized",
                "Up to 5 Page Navigation",
                "With - Contact Form, Whatsapp",
                "Basic Performance & Analytics",
                "15-day support after delivery"
              ],
              highlight: false,
            },
            {
              name: "Shopify Basic Plan",
              price: "$59",
              desc: "Best for growing ecommerce",
              features: [
                "Up to 100 products",
                "Shopify setup (theme + customizations)",
                "Payment & shipping integration",
                "Email support",
                "15-day support after delivery",
              ],
              highlight: true,
            },
            {
              name: "Shopify Advanced Plan",
              price: "$99",
              desc: "For large-scale operations.",
              features: [
                "Unlimited products",
                "Advanced analytics",
                "Dedicated support",
                "Marketing automation",
                "Custom integrations",
              ],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`group relative rounded-2xl p-8 border backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] ${
                plan.highlight
                  ? "border-indigo-500/50 shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)] bg-white/70 dark:bg-zinc-900/60"
                  : "border-zinc-200/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-900/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
              )}
              <h3
                className={`text-sm font-semibold mb-4 ${
                  plan.highlight
                    ? "text-indigo-500 dark:text-indigo-300"
                    : "text-indigo-400 dark:text-indigo-300"
                }`}
              >
                {plan.name}
              </h3>
              <p className="flex items-baseline gap-x-2 mb-4">
                <span
                  className={`text-5xl font-bold ${
                    plan.highlight
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-900 dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-base text-zinc-600 dark:text-zinc-400">
                  /month
                </span>
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">{plan.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-x-3">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 block rounded-md px-4 py-2 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90"
                    : "bg-gray-200 text-black hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
