import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateWork: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateWork,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-7xl mx-auto py-24 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        {/* Architectural coordinate marker */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="font-tech text-xs tracking-[0.25em] text-[#66625B] uppercase">
            404 / Void
          </span>
          <span className="w-8 h-[1px] bg-[#1A1A18]/20" />
          <span className="font-tech text-xs tracking-[0.2em] text-[#66625B] uppercase hidden sm:inline">
            Unmapped Coordinates
          </span>
        </div>

        {/* Primary headline matching requested prompt direction */}
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light tracking-tight leading-[1.05] mb-6">
          Looks like we’ve entered the wrong space.
        </h1>

        {/* Quiet, architectural explanation */}
        <p className="font-sans-clean text-sm sm:text-base text-[#504D47] leading-relaxed max-w-lg mb-10 sm:mb-12">
          The room, project document, or spatial layout you are looking for does not exist in our studio archive. It may have been relocated or removed.
        </p>

        {/* Clear, intentional navigation options */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 border-t border-[#1A1A18]/10">
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center justify-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-7 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px] w-full sm:w-auto"
          >
            <span>Return Home</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onNavigateWork}
            className="group inline-flex items-center justify-center gap-2 font-tech text-xs uppercase tracking-[0.18em] text-[#1A1A18] px-5 py-4 border border-[#1A1A18]/15 hover:border-[#1A1A18]/40 transition-colors cursor-pointer min-h-[44px] w-full sm:w-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Explore Selected Work</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
