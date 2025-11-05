import { CreditCard, Globe, RefreshCw, Shield, Smartphone, Wallet } from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="text-sky-500" size={20} />,
    title: 'One‑tap checkout',
    desc: 'Frictionless payments with saved cards and biometrics.',
  },
  {
    icon: <Shield className="text-emerald-500" size={20} />,
    title: 'Bank‑grade security',
    desc: 'Tokenization, 3D Secure, and real‑time fraud protection.',
  },
  {
    icon: <Globe className="text-indigo-500" size={20} />,
    title: 'Global by default',
    desc: 'Multi‑currency, local rails, and instant FX at fair rates.',
  },
  {
    icon: <Smartphone className="text-fuchsia-500" size={20} />,
    title: 'Modern wallet',
    desc: 'Virtual and physical cards with granular controls.',
  },
  {
    icon: <Wallet className="text-amber-500" size={20} />,
    title: 'Payouts & invoices',
    desc: 'Automated payouts, smart invoices, and reconciliation.',
  },
  {
    icon: <RefreshCw className="text-rose-500" size={20} />,
    title: 'Subscriptions',
    desc: 'Retry logic, dunning, proration, and analytics baked‑in.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for modern fintech</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Everything you need to launch delightful payment experiences with confidence.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-lg hover:shadow-sky-500/10 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
