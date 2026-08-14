import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, Rocket, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onCursorEnter, onCursorLeave }) {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF1E1E]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1E1E] mb-4"
        >
          <Sparkles className="w-4 h-4" /> ABOUT ME
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-8"
        >
          A little <span className="text-[#FF1E1E]">about me.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-lg leading-relaxed font-normal"
          >
            <p>
              I am <strong className="text-white font-semibold">Neej Butani</strong>, a Full Stack Developer driven by the art of turning code into seamless, high-performance digital experiences.
            </p>
            <p>
              With deep expertise across <strong className="text-[#FF1E1E]">React, Node.js, JavaScript (ES6+), C++</strong>, and modern CSS architecture, I bridge the gap between creative visual frontends and resilient backend systems.
            </p>
            <p>
              Whether I'm engineering AI platforms, crafting responsive user interfaces with Tailwind CSS, or optimizing algorithms in C++, my focus is always on speed, clarity, and precision.
            </p>

            {/* Core Values / Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/50 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-[#FF1E1E]/15 text-[#FF1E1E] mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-1">Clean Architecture</h4>
                <p className="text-xs text-gray-400">Modular component design & scalable backend patterns.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF1E1E]/50 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-[#FF1E1E]/15 text-[#FF1E1E] mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mb-1">High Performance</h4>
                <p className="text-xs text-gray-400">Sub-second load speeds & zero layout shift UI design.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Genuine Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={idx}
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="p-6 rounded-3xl bg-[#121212] border border-[#FF1E1E]/20 hover:border-[#FF1E1E] transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <span className="block font-heading font-extrabold text-4xl sm:text-5xl text-[#FF1E1E] group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </span>
                <h3 className="font-heading font-bold text-sm text-white mt-2 mb-1">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-gray-400 leading-normal">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
