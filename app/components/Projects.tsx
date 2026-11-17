'use client';

import React from 'react';
import { Sparkles, FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    title: 'Literary Echoes & Quotes Analyzer',
    description:
      'A text processing application that parses classic literature excerpts, analyzes vocabulary patterns, and stores inspirational quotes with categorized sentiment ratings.',
    tech: ['Python', 'SQL', 'HTML', 'CSS'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Classic Book Nook Library',
    description:
      'A responsive web catalog for literature lovers to browse book summaries, track reading streaks, and filter works by genre and historical literary era.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Student Study & Task Registry',
    description:
      'A structured database tool created to help first-year engineering students organize coursework deadlines, track study logs, and generate SQL query reports.',
    tech: ['Python', 'SQL'],
    githubUrl: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#d8b4fe] mb-2">
            <FolderGit2 size={14} />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white via-[#d8b4fe] to-transparent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#d8b4fe]/80 text-sm sm:text-base max-w-lg mx-auto">
            A blend of engineering experiments and literature-inspired creations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
