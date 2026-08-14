import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowDownRight, Sparkles, Send, Eye, Code, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import HeroCharacter from './HeroCharacter';
import HeroParticleCanvas from './HeroParticleCanvas';

export default function Hero({ onOpenReel, onCursorEnter, onCursorLeave }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 flex items-center justify-center bg-[#050505] overflow-hidden border-b border-white/10"
    >
      {/* Interactive Multi-Color Canvas Particles */}
      <HeroParticleCanvas />

      {/* Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Multi-Color Ambient Glow Spots behind Text & Portrait */}
      <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-[#FF1E1E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/6 w-[400px] h-[400px] bg-[#00F0FF]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-[#A855F7]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Rotating Background Orbital Light Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/10 animate-spin-slow pointer-events-none border-dashed" />

      {/* Floating Ambient Code Glyphs */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-8 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212]/80 backdrop-blur-md border border-[#00F0FF]/40 text-[11px] font-mono text-[#00F0FF] pointer-events-none shadow-xl"
      >
        <Code className="w-3.5 h-3.5" /> &lt;React.js /&gt;
      </motion.div>

      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-16 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212]/80 backdrop-blur-md border border-[#FF1E1E]/40 text-[11px] font-mono text-gray-200 pointer-events-none shadow-xl"
      >
        <Terminal className="w-3.5 h-3.5 text-[#FF1E1E]" /> C++ Algorithms
      </motion.div>

      <motion.div
        animate={{ y: [-10, 14, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-36 right-12 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212]/80 backdrop-blur-md border border-[#A855F7]/40 text-[11px] font-mono text-[#A855F7] pointer-events-none shadow-xl"
      >
        <Cpu className="w-3.5 h-3.5" /> AI & Cloud
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          {/* Top Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212]/90 backdrop-blur-md border border-[#FF1E1E]/40 w-fit shadow-2xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E1E] animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              HELLO, I'M NEEJ BUTANI
            </span>
          </motion.div>

          {/* Editorial Main Title & Dynamic Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading text-white leading-[1.05] tracking-tight">
              I'm a{' '}
              <span className="block h-[1.25em] relative overflow-hidden text-white drop-shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0 underline decoration-[#FF1E1E] underline-offset-8 text-gradient-red"
                  >
                    {portfolioData.personal.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl leading-relaxed"
          >
            {portfolioData.personal.tagline}
          </motion.p>

          {/* CTA Buttons & Play Reel Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* View Work Button */}
            <button
              onClick={() => handleScrollTo('#projects')}
              onMouseEnter={() => onCursorEnter('project')}
              onMouseLeave={onCursorLeave}
              className="px-8 py-4 rounded-full bg-[#FF1E1E] text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#050505] transition-all duration-300 shadow-2xl flex items-center gap-2 group border border-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-[#FF1E1E]/30"
            >
              <Eye className="w-4 h-4 text-white group-hover:text-[#050505] transition-colors" />
              View My Work
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Contact Me Button */}
            <button
              onClick={() => handleScrollTo('#contact')}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="px-8 py-4 rounded-full bg-[#121212] hover:bg-white/15 text-white font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 border border-white/20 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#FF1E1E]" />
              Contact Me
            </button>

            {/* Floating Circular Play Reel Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenReel}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="relative ml-auto sm:ml-0 flex items-center gap-3 px-5 py-3 rounded-full bg-[#171717] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-2xl border border-[#FF1E1E]/50 cursor-pointer group hover:border-[#FF1E1E]"
            >
              <div className="w-7 h-7 rounded-full bg-[#FF1E1E] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span className="flex items-center gap-1">
                PLAY REEL <Sparkles className="w-3 h-3 text-[#FF1E1E]" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side Stylized Character */}
        <div className="lg:col-span-5 flex justify-center">
          <HeroCharacter onCursorEnter={onCursorEnter} onCursorLeave={onCursorLeave} />
        </div>
      </div>

      {/* Bottom Scroll Cue Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to explore</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#FF1E1E] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
