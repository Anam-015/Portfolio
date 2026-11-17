'use client';

import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden">
      {/* Decorative top-right leaf glow effect on hover */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#c084fc]/15 rounded-full blur-xl group-hover:bg-[#d8b4fe]/25 transition-all duration-300 pointer-events-none" />

      <div>
        {/* Card Header with subtle icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl">🍃</span>
          <span className="text-xs uppercase tracking-wider text-[#d8b4fe]/70 font-semibold">
            Featured Project
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d8b4fe] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#e9d5ff]/80 leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-xs rounded-md bg-[#250f40]/90 border border-[#d8b4fe]/20 text-[#e9d5ff] font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* View on GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#f3e8ff] hover:text-[#d8b4fe] group-hover:translate-x-1 transition-all duration-200"
        >
          {/* GitHub Icon SVG */}
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>View on GitHub</span>
          <ExternalLink size={14} className="opacity-70 group-hover:opacity-100" />
        </a>
      </div>
    </div>
  );
}
