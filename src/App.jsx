import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VoicePortfolio from './components/VoicePortfolio';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import GitHubSection from './components/GitHubSection';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import PortfolioAssistant from './components/PortfolioAssistant';
import PlayReelModal from './components/PlayReelModal';
import GlobalClickAudio from './components/GlobalClickAudio';
import Footer from './components/Footer';

export default function App() {
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [reelModalOpen, setReelModalOpen] = useState(false);

  const handleCursorEnter = (state = 'hover', text = '') => {
    setCursorState(state);
    setCursorText(text);
  };

  const handleCursorLeave = () => {
    setCursorState('default');
    setCursorText('');
  };

  return (
    <div className="relative bg-[#050505] text-[#F4F4F4] min-h-screen selection:bg-[#FF1E1E] selection:text-white overflow-hidden">
      {/* Interactive Particle Mesh Backdrop */}
      <ParticleBackground />

      {/* Custom Desktop Cursor */}
      <CustomCursor cursorState={cursorState} cursorText={cursorText} />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Glass Navbar */}
      <Navbar onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Full-Screen Crimson Hero Section */}
      <Hero
        onOpenReel={() => setReelModalOpen(true)}
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />

      {/* Audio Portfolio Synthesizer Player */}
      <VoicePortfolio onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* About Section */}
      <About onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Skills & Tech Stack Section */}
      <Skills onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Projects Showcase & Detail Modals */}
      <Projects onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Experience Journey Timeline */}
      <ExperienceTimeline onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Dedicated GitHub Section */}
      <GitHubSection onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Resume Section */}
      <ResumeSection onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Contact Section */}
      <Contact onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Neej AI Floating Assistant */}
      <PortfolioAssistant onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />

      {/* Play Reel Video Modal */}
      <PlayReelModal
        isOpen={reelModalOpen}
        onClose={() => setReelModalOpen(false)}
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />

      {/* Global Interactive Click Sound & Voice Feedback */}
      <GlobalClickAudio />

      {/* Footer */}
      <Footer onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />
    </div>
  );
}
