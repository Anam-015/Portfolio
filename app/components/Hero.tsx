'use client';

import React from 'react';
import { ArrowDown, Sparkles, BookOpen, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Centered Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-700/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtle decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#261045]/70 border border-[#d8b4fe]/30 text-xs md:text-sm text-[#e9d5ff] mb-8 shadow-[0_0_15px_rgba(216,180,254,0.15)] hover:border-[#d8b4fe]/60 transition-colors">
          <BookOpen size={14} className="text-[#d8b4fe]" />
          <span>Literature Enthusiast</span>
          <span className="text-[#d8b4fe]/40">•</span>
          <Terminal size={14} className="text-white" />
          <span>Tech Explorer</span>
        </div>

        {/* Name in large text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hello, I&apos;m{' '}
          <span className="bg-gradient-to-r from-white via-[#e9d5ff] to-[#c084fc] bg-clip-text text-transparent drop-shadow-sm">
            Anam Nayab
          </span>
        </h1>

        {/* Intro */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#d8b4fe]/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          A first year engineering student who is juggling to balance between love for literature and tech.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Button 1: View my work */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9333ea] to-[#c084fc] text-white font-semibold text-base shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_6px_28px_rgba(216,180,254,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>View my work</span>
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Button 2: Contact me */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1e0d38]/80 hover:bg-[#2c1352] text-[#f3e8ff] hover:text-white font-semibold text-base border border-[#d8b4fe]/30 hover:border-[#d8b4fe]/70 shadow-[0_4px_15px_rgba(10,2,22,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Contact me</span>
            <Sparkles size={16} className="text-[#d8b4fe]" />
          </a>
        </div>
      </div>
    </section>
  );
}
