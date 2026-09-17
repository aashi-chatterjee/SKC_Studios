import React from 'react';
import { motion } from 'motion/react';

export const Intro: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 lg:py-48 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Section Label */}
        <div className="lg:col-span-3">
          <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase block">
            01 / Orientation
          </span>
          <span className="font-sans-clean text-xs text-[#5A5752] mt-2 block">
            Studio Thesis
          </span>
        </div>

        {/* Core Statement & Paragraph */}
        <div className="lg:col-span-9 space-y-12 lg:space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] font-light leading-[1.15] tracking-tight max-w-3xl"
          >
            Good spaces don't simply look right. <br className="hidden sm:inline" />
            <span className="italic font-normal">They work right.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-6 border-t border-[#1A1A18]/8 max-w-3xl">
            <p className="text-[#4A4742] text-base leading-relaxed font-sans-clean">
              We approach interior architecture through the lens of structural discipline and everyday choreography.
              Before color, textiles, or decorative finishes are considered, we analyze proportion, volume, daylight, and physical movement.
            </p>
            <p className="text-[#5A5752] text-base leading-relaxed font-sans-clean">
              Every partition wall, threshold, and built-in element is engineered to serve a practical life while evoking a lasting sense of calm. Beautiful spaces, thoughtfully resolved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
