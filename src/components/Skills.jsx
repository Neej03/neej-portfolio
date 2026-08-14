import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Server, Terminal, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills({ onCursorEnter, onCursorLeave }) {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categories = [
    { name: 'Frontend', icon: Code2 },
    { name: 'Backend', icon: Server },
    { name: 'Programming', icon: Terminal },
    { name: 'Database', icon: Database },
    { name: 'Tools', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF1E1E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-3"
            >
              <Sparkles className="w-4 h-4" /> TECHNICAL PROFICIENCY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight"
            >
              Skills & <span className="text-[#FF1E1E]">Tech Stack.</span>
            </motion.h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#121212] p-1.5 rounded-2xl border border-white/10 w-fit">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  onMouseEnter={() => onCursorEnter('hover')}
                  onMouseLeave={onCursorLeave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-heading text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#FF1E1E] text-white shadow-lg shadow-[#FF1E1E]/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {portfolioData.skills[activeCategory]?.map((skill, idx) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="p-6 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                {/* Top Subtle Crimson Accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF1E1E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#171717] border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF1E1E] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-[#FF1E1E] group-hover:text-white" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#FF1E1E] transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white mb-2 group-hover:text-[#FF1E1E] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Visualizer Meter */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#FF2B2B] to-[#FF1E1E]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
