import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ArchitecturalCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState('VIEW');
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering over an element with data-cursor-project
      const target = (e.target instanceof Element) ? e.target.closest('[data-cursor-project]') : null;
      if (target) {
        setVisible(true);
        const customLabel = target.getAttribute('data-cursor-label');
        setLabel(customLabel || 'VIEW');
      } else {
        setVisible(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isFinePointer || prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      animate={{
        x: position.x + 14,
        y: position.y + 14,
      }}
      transition={{
        duration: 0.06,
        ease: 'linear',
      }}
    >
      <div className="bg-[#1A1A18]/90 backdrop-blur-sm text-[#F8F7F4] font-tech text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <span>{label}</span>
        <ArrowUpRight className="w-2.5 h-2.5 opacity-80" />
      </div>
    </motion.div>
  );
};
