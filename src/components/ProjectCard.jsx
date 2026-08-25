import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, onClick, onCursorEnter, onCursorLeave }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/80 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#FF1E1E]/10"
    >
      {/* Image Preview Container with Glass Overlay */}
      <div 
        className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
        onClick={() => onClick(project)}
        onMouseEnter={() => onCursorEnter('project', 'VIEW')}
        onMouseLeave={onCursorLeave}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-85" />
        
        {/* Category Badge & Live Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#FF1E1E]/40 text-[#FF2B2B] text-[10px] font-mono font-bold uppercase tracking-widest">
            {project.category}
          </span>
          {project.liveUrl && project.liveUrl !== "https://github.com/Neej03" && (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live App
            </span>
          )}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 
              onClick={() => onClick(project)}
              className="font-heading font-extrabold text-xl text-white group-hover:text-[#FF1E1E] transition-colors cursor-pointer line-clamp-1"
            >
              {project.title}
            </h3>
            <button 
              onClick={() => onClick(project)}
              className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0"
              aria-label="View Details"
            >
              <ArrowUpRight className="w-5 h-5 group-hover:text-[#FF1E1E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 min-h-[36px]">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badge Row */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#171717] text-gray-300 text-[10px] font-mono border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-[#171717] text-gray-400 text-[10px] font-mono">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Quick Action Buttons Row */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/10">
          <button
            onClick={() => onClick(project)}
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
            className="flex-1 py-2 px-3 rounded-xl bg-[#171717] hover:bg-[#FF1E1E] text-white font-heading font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#FF1E1E]"
          >
            <Eye className="w-3.5 h-3.5" /> Details
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="flex-1 py-2 px-3 rounded-xl bg-[#FF1E1E]/10 hover:bg-[#FF1E1E] text-[#FF2B2B] hover:text-white font-heading font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#FF1E1E]/30"
              title="Open Live Vercel App"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="p-2 rounded-xl bg-[#171717] hover:bg-white/20 text-white transition-colors border border-white/10 shrink-0"
              aria-label="GitHub Repository"
              title="View Source Code"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
