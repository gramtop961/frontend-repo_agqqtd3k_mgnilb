import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Live payments, worldwide
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              The modern way to pay online
            </h1>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
              FlowPay makes payments instant, secure, and borderless. Send and receive money with
              glass-morphic style across the globe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 text-sm font-semibold shadow hover:opacity-90 transition"
              >
                Get Started <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/80 dark:hover:bg-neutral-900/80 transition"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="inline-flex items-center gap-2"><Shield size={16} /> Bank‑grade security</div>
              <div className="inline-flex items-center gap-2"><Zap size={16} /> Instant transfers</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-neutral-950 dark:via-neutral-950/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
