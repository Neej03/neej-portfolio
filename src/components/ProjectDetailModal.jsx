import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectDetailModal({ project, onClose, onCursorEnter, onCursorLeave }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-xl flex justify-center items-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#FF1E1E]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Header — Always Pinned to Top */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-5 md:p-6 bg-[#050505] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#FF1E1E]/20 text-[#FF2B2B] text-xs font-mono font-bold uppercase tracking-wider border border-[#FF1E1E]/40">
                {project.category}
              </span>
              <h3 className="font-heading font-extrabold text-lg md:text-xl text-white truncate max-w-xs md:max-w-md">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="p-2.5 rounded-full bg-[#171717] hover:bg-[#FF1E1E] text-white transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 no-scrollbar">
            {/* Project Banner Image */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-2 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-4 h-4" /> Overview
              </h4>
              <p className="text-base md:text-lg text-gray-200 font-normal leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/10">
                <h5 className="font-heading font-bold text-white text-base mb-2 text-red-400">
                  The Problem
                </h5>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#050505] border border-[#FF1E1E]/30">
                <h5 className="font-heading font-bold text-white text-base mb-2 text-[#FF2B2B]">
                  The Solution
                </h5>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3 font-bold">
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
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 font-bold">
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
