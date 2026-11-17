'use client';

import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#130722]/80 border-b border-[#d8b4fe]/15 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Name Logo on Left */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight text-[#f3e8ff] hover:text-[#d8b4fe] transition-colors"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#7e22ce] text-[#130722] text-sm shadow-[0_0_15px_rgba(216,180,254,0.4)] group-hover:scale-105 transition-transform">
            🌿
          </span>
          <span className="bg-gradient-to-r from-white via-[#f3e8ff] to-[#d8b4fe] bg-clip-text text-transparent">
            Anam Nayab
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-[#e9d5ff]/80 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#d8b4fe] after:to-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-[#e9d5ff]/80 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#d8b4fe] after:to-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[#e9d5ff]/80 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#d8b4fe] after:to-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
          >
            Contact
          </a>
          
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#c084fc] text-white shadow-[0_0_15px_rgba(192,132,252,0.35)] hover:shadow-[0_0_22px_rgba(216,180,254,0.6)] hover:scale-105 transition-all duration-200"
          >
            Say Hello ✨
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#d8b4fe] hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#160829] border-b border-[#d8b4fe]/20 space-y-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#e9d5ff] hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#e9d5ff] hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#e9d5ff] hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
