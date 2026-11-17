'use client';

import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#d8b4fe]/15 bg-[#0b0417] py-10 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-sm text-[#d8b4fe]/80 font-medium">
            &copy; 2026 <span className="text-white font-semibold">Anam Nayab</span>. All rights reserved.
          </p>
          <p className="text-xs text-[#d8b4fe]/50 mt-1">
            Built with Next.js, TypeScript &amp; Tailwind CSS 🌿
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e0a35] border border-[#d8b4fe]/25 text-xs text-[#e9d5ff] hover:text-white hover:border-[#d8b4fe]/60 hover:bg-[#2b104a] transition-all"
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
