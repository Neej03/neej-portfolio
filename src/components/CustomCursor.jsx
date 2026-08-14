import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorState, cursorText }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile/touch devices
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isHovered = cursorState === 'hover';
  const isProject = cursorState === 'project';
  const isView = cursorState === 'view';

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference bg-white"
        animate={{
          x: position.x - (isHovered || isProject || isView ? 24 : 6),
          y: position.y - (isHovered || isProject || isView ? 24 : 6),
          width: isProject || isView ? 72 : isHovered ? 48 : 12,
          height: isProject || isView ? 72 : isHovered ? 48 : 12,
          opacity: 0.9,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.3
        }}
      >
        {(isProject || isView) && (
          <div className="w-full h-full flex items-center justify-center text-[10px] font-extrabold uppercase tracking-widest text-black">
            {cursorText || (isProject ? 'VIEW' : 'EXPLORE')}
          </div>
        )}
      </motion.div>

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-[#FF1E1E]/60"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: 40,
          height: 40,
          scale: isHovered ? 1.4 : isProject || isView ? 0 : 1,
          opacity: isHovered ? 0.8 : 0.4
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 20
        }}
      />
    </>
  );
}
