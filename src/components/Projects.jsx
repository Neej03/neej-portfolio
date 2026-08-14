import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, ExternalLink, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects({ onCursorEnter, onCursorLeave }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const otherProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF1E1E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3"
        >
          <Sparkles className="w-4 h-4" /> CRAFTED PORTFOLIO WORK
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-16"
        >
          Selected <span className="text-[#FF1E1E]">Projects.</span>
        </motion.h2>

        {/* FEATURED PROJECTS SHOWCASE (Alternating Horizontal Layout) */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 md:p-12 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/50 transition-all duration-500 shadow-2xl group`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => onCursorEnter('project', 'EXPLORE')}
                  onMouseLeave={onCursorLeave}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                </div>

                {/* Information Section */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6 text-left`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#FF1E1E] uppercase tracking-widest">
                      PROJECT 0{index + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-heading font-extrabold text-2xl sm:text-4xl text-white hover:text-[#FF1E1E] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#171717] text-white text-xs font-mono border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      onMouseEnter={() => onCursorEnter('hover')}
                      onMouseLeave={onCursorLeave}
                      className="px-6 py-3 rounded-full bg-[#FF1E1E] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#FF2B2B] transition-colors flex items-center gap-2 shadow-lg shadow-[#FF1E1E]/30"
                    >
                      <Eye className="w-4 h-4" /> View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => onCursorEnter('hover')}
                      onMouseLeave={onCursorLeave}
                      className="p-3 rounded-full bg-[#171717] text-white hover:bg-white/20 transition-colors border border-white/20"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* OTHER SELECTED PROJECTS GRID */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF1E1E]" /> More Crafted Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                  onCursorEnter={onCursorEnter}
                  onCursorLeave={onCursorLeave}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCursorEnter={onCursorEnter}
        onCursorLeave={onCursorLeave}
      />
    </section>
  );
}
