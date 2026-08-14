import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onCursorEnter, onCursorLeave }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white py-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Brand info */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF1E1E] flex items-center justify-center font-extrabold text-white text-base">
              N
            </div>
            <span className="font-heading font-extrabold text-xl text-white">
              {portfolioData.personal.name}
            </span>
          </div>
          <p className="text-xs text-gray-400 font-mono">
            Building digital experiences that make an impact.
          </p>
        </div>

        {/* Center Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
            className="p-3 rounded-full bg-[#121212] hover:bg-[#FF1E1E] text-gray-300 hover:text-white transition-all border border-white/10"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
            className="p-3 rounded-full bg-[#121212] hover:bg-[#FF1E1E] text-gray-300 hover:text-white transition-all border border-white/10"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
            className="p-3 rounded-full bg-[#121212] hover:bg-[#FF1E1E] text-gray-300 hover:text-white transition-all border border-white/10"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Right Scroll Back to Top Button */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400 font-mono">
            © 2026 Neej Butani. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
            className="p-3 rounded-full bg-[#171717] hover:bg-[#FF1E1E] text-white transition-colors border border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
