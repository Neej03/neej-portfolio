import React, { useEffect, useState, useRef } from 'react';

export default function GlobalClickAudio() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  // Initialize Web Audio API Context
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play Futuristic Click Sound Blip via Web Audio API
  const playClickSound = (freq = 800, type = 'sine') => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Audio context silenced or blocked by browser policy
    }
  };

  // Optional Voice TTS for clickable buttons/links
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.25;
      utterance.pitch = 1.1;
      utterance.volume = 0.6;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  };

  // Listen for toggle events from Navbar or anywhere else
  useEffect(() => {
    const handleToggleEvent = () => {
      setSoundEnabled((prev) => {
        const nextState = !prev;
        if (nextState) {
          playClickSound(900, 'sine');
          speakText('Sound On');
        }
        window.dispatchEvent(
          new CustomEvent('sound-state-changed', { detail: { soundEnabled: nextState } })
        );
        return nextState;
      });
    };

    window.addEventListener('toggle-sound', handleToggleEvent);
    return () => window.removeEventListener('toggle-sound', handleToggleEvent);
  }, []);

  // Broadcast initial sound state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('sound-state-changed', { detail: { soundEnabled } })
      );
    }, 0);
    return () => clearTimeout(timer);
  }, [soundEnabled]);

  // Global click listener
  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (!soundEnabled) return;

      // Find if clicked element or parent is interactive
      const target = e.target;
      const interactiveEl = target.closest('button, a, input, select, textarea, [role="button"], [onClick]');

      if (interactiveEl) {
        // High pitch futuristic sound for interactive elements
        playClickSound(1000, 'triangle');

        // Extract clean text label if available
        const label =
          interactiveEl.getAttribute('aria-label') ||
          interactiveEl.getAttribute('title') ||
          interactiveEl.innerText ||
          interactiveEl.value;

        if (label && label.trim().length > 0 && label.trim().length < 25) {
          const cleanText = label.trim().replace(/[^a-zA-Z0-9\s]/g, '');
          if (cleanText) {
            speakText(cleanText);
          }
        }
      } else {
        // Subtle ambient click sound for general canvas/document clicks
        playClickSound(600, 'sine');
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [soundEnabled]);

  // Non-rendering audio controller (UI button rendered in Navbar header)
  return null;
}
