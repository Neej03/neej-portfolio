import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Code2, Award, Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline({ onCursorEnter, onCursorLeave }) {
  return (
    <section id="journey" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF1E1E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3"
        >
          <Sparkles className="w-4 h-4" /> CAREER & MILESTONES
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-16"
        >
          My <span className="text-[#FF1E1E]">Journey.</span>
        </motion.h2>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Central Drawing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF1E1E] via-[#FF2B2B] to-[#D90000] opacity-40 -translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon Circle */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-[#121212] border-2 border-[#FF1E1E] flex items-center justify-center text-[#FF1E1E] z-10 shadow-lg shadow-[#FF1E1E]/40">
                    <Calendar className="w-4 h-4" />
                  </div>

                  {/* Content Card Box */}
                  <div
                    onMouseEnter={() => onCursorEnter('hover')}
                    onMouseLeave={onCursorLeave}
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="p-6 md:p-8 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/60 transition-all duration-300 shadow-xl group">
                      {/* Year Badge */}
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#FF1E1E]/15 text-[#FF2B2B] text-xs font-mono font-bold uppercase tracking-wider border border-[#FF1E1E]/30 mb-3">
                        {item.year}
                      </span>

                      <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white group-hover:text-[#FF1E1E] transition-colors mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-gray-400 mb-4">
                        {item.institution}
                      </p>

                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Tag list */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-[#171717] text-gray-400 text-[11px] font-mono border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
