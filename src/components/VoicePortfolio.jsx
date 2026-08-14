import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Square, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function VoicePortfolio({ onCursorEnter, onCursorLeave }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSupported(false);
    }
  }, []);

  const handleSpeak = () => {
    if (!supported) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }

    window.speechSynthesis.cancel(); // Reset active audio

    const utterance = new SpeechSynthesisUtterance(portfolioData.voiceSummary);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Try finding a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
    );
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!supported) return null;

  return (
    <div className="w-full bg-[#050505]/90 backdrop-blur-md border-y border-white/10 py-4 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Audio Label & Equalizer */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/20 text-[#FF1E1E] flex items-center justify-center border border-[#FF1E1E]/40">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF1E1E] flex items-center gap-1.5 font-bold">
              AUDIO EXPERIENCE <Sparkles className="w-3 h-3" />
            </span>
            <p className="text-sm font-heading font-bold text-white">
              Listen to Neej's Portfolio Summary
            </p>
          </div>
        </div>

        {/* Animated Equalizer Waveform */}
        {isSpeaking && !isPaused && (
          <div className="flex items-end gap-1 h-6 px-3 py-1 bg-[#050505] rounded-full border border-[#FF1E1E]/30">
            {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.3].map((heightScale, i) => (
              <motion.div
                key={i}
                animate={{ height: ['40%', '100%', '30%'] }}
                transition={{
                  duration: 0.6 + i * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="w-1 bg-[#FF1E1E] rounded-full"
              />
            ))}
          </div>
        )}

        {/* Audio Control Buttons */}
        <div className="flex items-center gap-3">
          {!isSpeaking || isPaused ? (
            <button
              onClick={handleSpeak}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF1E1E] hover:bg-[#FF2B2B] text-white text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#FF1E1E]/30"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              {isPaused ? 'Resume' : 'Listen to Portfolio'}
            </button>
          ) : (
            <button
              onClick={handlePause}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all border border-white/20"
            >
              <Pause className="w-4 h-4 fill-current" />
              Pause
            </button>
          )}

          {isSpeaking && (
            <button
              onClick={handleStop}
              onMouseEnter={() => onCursorEnter('hover')}
              onMouseLeave={onCursorLeave}
              className="p-2.5 rounded-full bg-[#171717] hover:bg-red-900/50 text-gray-300 hover:text-white transition-colors border border-white/10"
              aria-label="Stop audio"
            >
              <Square className="w-4 h-4 fill-current" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
