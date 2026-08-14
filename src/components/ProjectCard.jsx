import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, onClick, onCursorEnter, onCursorLeave }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
      onMouseEnter={() => onCursorEnter('project', 'VIEW')}
      onMouseLeave={onCursorLeave}
      className="group relative rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E] transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl"
    >
      {/* Image Preview Container with Zoom Effect */}
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
        
        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#FF1E1E]/40 text-[#FF2B2B] text-[10px] font-mono uppercase tracking-widest">
          {project.category}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FF1E1E] transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF1E1E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badge Row */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#171717] text-gray-300 text-[10px] font-mono border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
