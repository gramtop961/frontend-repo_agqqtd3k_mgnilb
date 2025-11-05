import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'For testing and personal use',
    features: ['No monthly fees', 'Up to 100 transactions/mo', 'Basic support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    tagline: 'For growing projects and startups',
    features: ['All Starter features', 'Unlimited transactions', 'Priority support', 'Advanced analytics'],
    highlight: true,
  },
  {
    name: 'Business',
    price: 'Custom',
    tagline: 'For scale and compliance needs',
    features: ['Volume discounts', 'Dedicated manager', 'SLA & compliance', 'Custom integrations'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 transition ${
                t.highlight
                  ? 'border-sky-400/40 shadow-lg shadow-sky-500/20'
                  : 'border-black/5 dark:border-white/10'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 px-3 py-1 text-xs font-semibold text-white shadow">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t.tagline}</p>
              <div className="mt-5 text-4xl font-extrabold tracking-tight">{t.price}<span className="text-base font-medium text-neutral-500 dark:text-neutral-400">/mo</span></div>

              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                  t.highlight
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'border border-neutral-300 dark:border-neutral-700'
                }`}
              >
                {t.highlight ? 'Choose Pro' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
