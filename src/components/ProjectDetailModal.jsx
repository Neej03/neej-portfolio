import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectDetailModal({ project, onClose, onCursorEnter, onCursorLeave }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl bg-[#121212] border border-[#FF1E1E]/40 rounded-3xl overflow-hidden shadow-2xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-[#050505] border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FF1E1E]/20 text-[#FF2B2B] text-xs font-mono font-bold uppercase tracking-wider border border-[#FF1E1E]/40">
                {project.category}
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="p-2.5 rounded-full bg-[#171717] hover:bg-[#FF1E1E] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Banner Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
          </div>

          {/* Modal Content Body */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Overview
              </h4>
              <p className="text-lg text-gray-200 font-normal leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/10">
                <h5 className="font-heading font-bold text-white text-base mb-2 text-red-400">
                  The Problem
                </h5>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#050505] border border-[#FF1E1E]/30">
                <h5 className="font-heading font-bold text-white text-base mb-2 text-[#FF2B2B]">
                  The Solution
                </h5>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF1E1E] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-[#171717] text-white text-xs font-mono border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="px-6 py-3 rounded-full bg-[#FF1E1E] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#FF2B2B] transition-colors flex items-center gap-2 shadow-lg shadow-[#FF1E1E]/30"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="px-6 py-3 rounded-full bg-[#171717] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Repository
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
