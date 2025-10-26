import React from 'react';
import { Zap, GitBranch, Shield, Cog } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'One-click deploy',
    desc: 'From GitHub repo to live environment in seconds with smart defaults and previews.'
  },
  {
    icon: GitBranch,
    title: 'No YAML, no pipelines',
    desc: 'We infer frameworks, build commands, and envs automatically. Zero pipeline files to maintain.'
  },
  {
    icon: Cog,
    title: 'Auto tasks',
    desc: 'Tests, lint, accessibility, and image optimization run in parallel for each push.'
  },
  {
    icon: Shield,
    title: 'Secure & compliant',
    desc: 'Ephemeral tokens, least-privilege checks, and isolated build sandboxes by default.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,rgba(2,6,23,0)_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">DevOps without the ops</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Opinionated automation for modern web stacks. Keep coding — we handle the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-white/10 rounded-xl bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition">
              <div className="h-11 w-11 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-white/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
        <div id="how" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { n: '1', t: 'Connect GitHub', d: 'Authorize and pick a repository. We scan to detect your framework and commands.' },
            { n: '2', t: 'Auto build & preview', d: 'Every push gets isolated builds, logs, and shareable preview URLs.' },
            { n: '3', t: 'Promote to prod', d: 'Approve to ship. Rollbacks and env versioning are built-in.' }
          ].map((s) => (
            <div key={s.n} className="border border-white/10 rounded-xl p-6 bg-white/5">
              <span className="text-cyan-300 text-sm font-mono">Step {s.n}</span>
              <h4 className="mt-2 font-semibold">{s.t}</h4>
              <p className="text-sm text-white/70 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
