import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.3)_45%,rgba(2,6,23,0.7)_100%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Self-hosted or cloud • Zero YAML • GitHub native
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Auto DevOps, zero config. One click from repo to live.
        </h1>
        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
          Build, test, and deploy web apps without pipelines or .yml files. Connect your GitHub repository and ship in seconds.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 font-medium text-neutral-950 hover:opacity-95 transition shadow-lg shadow-cyan-500/30"
          >
            <Rocket className="h-5 w-5" />
            Get Started Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
