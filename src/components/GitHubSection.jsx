import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function GitHubSection({ onCursorEnter, onCursorLeave }) {
  const { githubStats } = portfolioData;

  return (
    <section id="github" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF1E1E]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3"
            >
              <Sparkles className="w-4 h-4" /> OPEN SOURCE & CODE REPOSITORIES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight"
            >
              Code. Build. <span className="text-[#FF1E1E]">Repeat.</span>
            </motion.h2>
          </div>

          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
            className="px-6 py-3.5 rounded-full bg-[#171717] hover:bg-[#FF1E1E] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/20 flex items-center gap-2 shadow-xl shrink-0"
          >
            <GithubIcon className="w-4 h-4" /> Explore My GitHub →
          </a>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {githubStats.repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="p-6 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E] transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#171717] text-[#FF1E1E] border border-white/5">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#FF1E1E] transition-colors" />
                </div>

                <h3 className="font-mono font-bold text-base text-white group-hover:text-[#FF1E1E] transition-colors mb-2 truncate">
                  {repo.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-4 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E1E]" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                    <Star className="w-3.5 h-3.5 fill-current" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-gray-200 transition-colors">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
