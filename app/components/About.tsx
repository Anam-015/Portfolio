'use client';

import React from 'react';
import { Sparkles, Code2, Database, Palette, FileCode2 } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: FileCode2, color: 'text-purple-300' },
  { name: 'CSS', icon: Palette, color: 'text-purple-200' },
  { name: 'Python', icon: Code2, color: 'text-purple-300' },
  { name: 'SQL', icon: Database, color: 'text-purple-200' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#d8b4fe] mb-2">
            <Sparkles size={14} />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white via-[#d8b4fe] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle lavender leaf accent background in corner */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-6 text-[#f3e8ff]/90 text-base sm:text-lg leading-relaxed">
            <p>
              Hi there! I am <span className="font-semibold text-white">Anam Nayab</span>, a first-year engineering student on an exciting journey where logic meets imagination. I spend my days navigating code and my evenings immersed in literature.
            </p>
            <p>
              Whether it&apos;s crafting clean markup, writing Python scripts to automate thoughts, querying databases with SQL, or exploring classic prose, I believe the analytical mindset of an engineer and the storytelling spirit of literature complement each other beautifully.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-12 pt-8 border-t border-[#d8b4fe]/15">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-[#d8b4fe]">🌿</span>
              <span>My Technical Skills</span>
            </h3>

            {/* Small Tags/Chips */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#230f3d]/80 border border-[#d8b4fe]/25 text-[#f3e8ff] hover:text-white hover:border-[#d8b4fe]/70 hover:bg-[#321356] hover:scale-105 hover:shadow-[0_4px_16px_rgba(216,180,254,0.25)] transition-all duration-200 cursor-default"
                  >
                    <IconComponent size={16} className={skill.color} />
                    <span className="text-sm font-medium tracking-wide">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
