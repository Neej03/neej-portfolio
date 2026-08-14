import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Sparkles, User, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroCharacter({ onCursorEnter, onCursorLeave }) {
  // Mode toggle: 'real' (actual uploaded photo) vs 'artwork' (cyber editorial art)
  const [photoMode, setPhotoMode] = useState('real');

  const photoSources = {
    real: '/assets/neej_real_photo.jpg',
    artwork: '/assets/neej_styled_art.jpg'
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex flex-col justify-center items-center">
      {/* Ambient Crimson Background Glows */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF1E1E]/50 via-[#D90000]/30 to-transparent rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute w-80 h-80 bg-[#FF2B2B]/35 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Mode Switcher Pill above Portrait */}
      <div className="relative z-20 mb-4 inline-flex items-center gap-1 p-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#FF1E1E]/40 shadow-xl">
        <button
          onClick={() => setPhotoMode('real')}
          onMouseEnter={() => onCursorEnter('hover')}
          onMouseLeave={onCursorLeave}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
            photoMode === 'real'
              ? 'bg-[#FF1E1E] text-white shadow-md shadow-[#FF1E1E]/40'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <User className="w-3.5 h-3.5" /> Real Photo
        </button>

        <button
          onClick={() => setPhotoMode('artwork')}
          onMouseEnter={() => onCursorEnter('hover')}
          onMouseLeave={onCursorLeave}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
            photoMode === 'artwork'
              ? 'bg-[#FF1E1E] text-white shadow-md shadow-[#FF1E1E]/40'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Palette className="w-3.5 h-3.5" /> Cyber Art
        </button>
      </div>

      {/* Main Stylized Portrait Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full aspect-square max-w-[480px] lg:max-w-[540px] rounded-3xl overflow-hidden shadow-2xl shadow-[#FF1E1E]/40 border-2 border-[#FF1E1E]/50 group"
        onMouseEnter={() => onCursorEnter('explore')}
        onMouseLeave={onCursorLeave}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={photoMode}
            src={photoSources[photoMode]}
            alt="Neej Butani — Developer Portrait"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </AnimatePresence>

        {/* Soft Radial Vignette Overlay for Seamless Hero Background Blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E1E]/20 via-transparent to-[#050505]/40 pointer-events-none" />

        {/* Bottom Badge Tag */}
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-[#FF1E1E]/40 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FF1E1E] animate-ping" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Identity</p>
              <p className="text-sm font-heading font-extrabold text-white flex items-center gap-1.5">
                Neej Butani <Sparkles className="w-3.5 h-3.5 text-[#FF1E1E]" />
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#FF1E1E]/20 text-[#FF2B2B] text-[11px] font-mono font-semibold uppercase tracking-wider border border-[#FF1E1E]/40">
            {photoMode === 'real' ? 'Original Photo' : 'Cyber Editorial'}
          </div>
        </div>
      </motion.div>

      {/* Floating Interactive Tech Badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 -left-4 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#FF1E1E]/40 shadow-xl"
      >
        <div className="p-1.5 rounded-lg bg-[#FF1E1E]/20 text-[#FF2B2B]">
          <Code2 className="w-4 h-4" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono text-gray-400 uppercase">Core Stack</p>
          <p className="text-xs font-heading font-bold text-white">React & Node.js</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-12 -right-4 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#FF1E1E]/40 shadow-xl"
      >
        <div className="p-1.5 rounded-lg bg-[#FF1E1E]/20 text-[#FF2B2B]">
          <Terminal className="w-4 h-4" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono text-gray-400 uppercase">Algorithms</p>
          <p className="text-xs font-heading font-bold text-white">C++ Mastery</p>
        </div>
      </motion.div>
    </div>
  );
}
