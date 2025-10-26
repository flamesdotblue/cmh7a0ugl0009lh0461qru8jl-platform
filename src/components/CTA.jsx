import React from 'react';
import { Github, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-neutral-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">Connect your repo. We’ll do the rest.</h3>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Bring your Vite, Next.js, Astro, SvelteKit, Remix, or plain HTML repo. Automatic detection, builds, and deployments.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-white/90 transition"
          >
            <Github className="h-5 w-5" />
            Connect with GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium hover:bg-white/10 transition"
          >
            <Rocket className="h-5 w-5" />
            Launch Demo
          </a>
        </div>
        <p className="text-xs text-white/50 mt-4">No credit card required • Cancel anytime • OSS friendly</p>
      </div>
    </section>
  );
}
