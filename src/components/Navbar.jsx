import React from 'react';
import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20" />
          <span className="text-lg font-semibold tracking-tight">AutoDevOps One-Click</span>
        </a>
        <nav className="flex items-center gap-3">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
          <a href="#how" className="text-sm text-white/80 hover:text-white transition">How it works</a>
          <a
            href="https://github.com/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-white/90 transition"
          >
            <Github className="h-4 w-4" />
            Connect GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
