import { useState } from 'react';
import { CreditCard, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-white shadow-lg shadow-sky-500/30">
              <CreditCard size={18} />
            </span>
            <span className="font-semibold text-lg tracking-tight">FlowPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow hover:opacity-90 transition"
            >
              Get the App
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-black/5 dark:border-white/10">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow"
              >
                Get the App
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
