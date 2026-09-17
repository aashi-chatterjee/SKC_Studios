import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/projects';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Editorial Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase mb-3 block">
            2022–2026
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#1A1A18] font-normal leading-[1.08] tracking-tight">
            Where function finds form.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-sm md:text-right"
        >
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#504D47] font-normal font-sans-clean">
            Interior environments shaped by function, material, and the way people live.
          </p>
        </motion.div>
      </div>

      {/* Hero Visual Moment — Priority LCP Image with strict aspect ratio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/10] max-h-[660px] overflow-hidden bg-[#ECE8E1]"
      >
        <img
          src={HERO_IMAGE}
          alt="Refined architectural interior with natural timber, stone, and proportioned daylight"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Minimal architectural frame indicator */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-tech text-[10px] tracking-[0.2em] text-[#F8F7F4]/95 uppercase bg-[#1A1A18]/60 backdrop-blur-md px-3 py-1.5 rounded-none">
          Ref. 01 — Spatial Resolution
        </div>
      </motion.div>

      {/* Subtle bottom action / metadata */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#1A1A18]/8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-tech text-xs text-[#66625B] tracking-wider uppercase">
          <span>Kolkata</span>
          <span>·</span>
          <span>India</span>
          <span>·</span>
          <span>Available Worldwide</span>
        </div>

        <button
          onClick={onExploreWork}
          className="group inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-[#1A1A18] hover:text-[#504D47] transition-colors cursor-pointer min-h-[44px] py-2"
        >
          <span>Explore the Work</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
      </div>
    </section>
  );
};
