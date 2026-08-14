import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X, Film } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PlayReelModal({ isOpen, onClose, onCursorEnter, onCursorLeave }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration && isFinite(videoRef.current.duration)) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && videoRef.current.duration && isFinite(videoRef.current.duration)) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * videoRef.current.duration;
      if (isFinite(newTime) && newTime >= 0) {
        videoRef.current.currentTime = newTime;
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-[#121212] border border-[#FF1E1E]/40 shadow-2xl shadow-[#FF1E1E]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#050505]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FF1E1E]/20 text-[#FF1E1E]">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {portfolioData.personal.name} — Showreel
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">Creative Developer Reel 2026</p>
                </div>
              </div>

              <button
                onClick={onClose}
                onMouseEnter={() => onCursorEnter('hover')}
                onMouseLeave={onCursorLeave}
                className="p-2.5 rounded-full bg-[#171717] hover:bg-[#FF1E1E] text-white transition-colors"
                aria-label="Close reel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
              <video
                ref={videoRef}
                src={portfolioData.personal.reelVideoUrl}
                poster={portfolioData.personal.reelPosterUrl}
                autoPlay
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover"
              />

              {/* Controls Bar Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent flex flex-col gap-4 opacity-100 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer overflow-hidden transition-all"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#FF2B2B] to-[#FF1E1E] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="p-3 rounded-full bg-[#FF1E1E] hover:scale-110 transition-transform text-white shadow-lg shadow-[#FF1E1E]/40"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>

                  <span className="text-xs font-mono text-gray-400">
                    High Quality 1080p — Interactive Demo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
