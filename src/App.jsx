import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <section id="security" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Security you can trust</h2>
                <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
                  We use end‑to‑end encryption, tokenization, and continuous monitoring to keep your
                  data safe. Our platform is compliant with PCI DSS and undergoes regular audits.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• PCI DSS Level 1</li>
                  <li>• 3D Secure 2.0</li>
                  <li>• Advanced fraud detection</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10 p-10">
                <div className="text-6xl">🔐</div>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  Your payments and personal data are protected with layered, bank‑grade security.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
      </main>

      <footer className="relative border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} FlowPay. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#security" className="hover:underline">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
