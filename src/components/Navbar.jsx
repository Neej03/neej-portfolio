import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onCursorEnter, onCursorLeave }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSoundState = (e) => {
      if (e.detail && typeof e.detail.soundEnabled === 'boolean') {
        setSoundEnabled(e.detail.soundEnabled);
      }
    };
    window.addEventListener('sound-state-changed', handleSoundState);
    return () => window.removeEventListener('sound-state-changed', handleSoundState);
  }, []);

  const handleToggleSound = (e) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('toggle-sound'));
  };

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#050505]/85 backdrop-blur-md border-b border-[#FF1E1E]/20 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
            onMouseEnter={() => onCursorEnter('hover')}
            onMouseLeave={onCursorLeave}
          >
            <img
              src="/assets/n_logo.jpg"
              alt="N Logo"
              className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-[#FF1E1E]/20 group-hover:scale-105 transition-transform border border-amber-500/40"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-white tracking-tight flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-[#FF1E1E] animate-ping" />
              </span>
              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest -mt-1">
                Creative Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121212]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="px-4 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-[#FF1E1E]/15 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Action Buttons (Voice & Sound Pill + Hire Me) */}
          <div className="flex items-center gap-3">
            {/* Top Header Voice & Sound Button */}
            <button
              onClick={handleToggleSound}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border transition-all duration-300 shadow-lg ${
                soundEnabled
                  ? 'bg-[#121212] border-[#FF1E1E]/60 text-white hover:bg-[#FF1E1E] shadow-[#FF1E1E]/20'
                  : 'bg-[#121212]/70 border-white/20 text-gray-400 hover:text-white'
              }`}
              title={soundEnabled ? 'Mute Click Voice Audio' : 'Enable Click Voice Audio'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#FF1E1E] group-hover:text-white animate-pulse" />
                  <span className="hidden sm:inline">VOICE & SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-gray-400" />
                  <span className="hidden sm:inline">SOUND MUTED</span>
                </>
              )}
            </button>

            {/* Desktop Hire Me CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF1E1E] text-white font-heading font-semibold text-xs uppercase tracking-wider overflow-hidden group shadow-lg shadow-[#FF1E1E]/25 hover:shadow-[#FF1E1E]/50 transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Hire Me
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF2B2B] to-[#D90000] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2.5 rounded-full bg-[#171717] text-white border border-[#FF1E1E]/30 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF1E1E]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Animated Fullscreen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#050505] flex flex-col justify-between p-8 pt-28 lg:hidden border-b border-[#FF1E1E]/30"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-heading font-extrabold text-3xl text-white hover:text-[#FF1E1E] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full py-4 rounded-full bg-[#FF1E1E] text-white text-center font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF1E1E]/30"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
