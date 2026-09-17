import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface StudioPageProps {
  onStartProject: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onStartProject }) => {
  const prefersReducedMotion = useReducedMotion();

  const principles = [
    {
      title: 'FUNCTION',
      subtitle: 'Every space should serve a purpose.',
      description:
        'Circulation, storage, and natural habits are established before any surface is selected. When a floor plan operates without friction, a quiet comfort emerges naturally.',
    },
    {
      title: 'PROPORTION',
      subtitle: 'Balance determines how a room feels.',
      description:
        'Volume, ceiling height, and aperture sizing dictate the emotional gravity of an interior. We calibrate geometric scale so every room feels both sheltering and expansive.',
    },
    {
      title: 'MATERIAL',
      subtitle: 'Materials should be beautiful and appropriate.',
      description:
        'Honest tactile substances—quarried stone, solid timber, textured lime plaster, unlacquered metals—chosen for their structural authenticity and the way they age gracefully over decades.',
    },
    {
      title: 'LIGHT',
      subtitle: 'Light is part of the architecture.',
      description:
        'Daylight tracks the passage of time across honest planes. We carve deep reveals and calibrated thresholds so natural illumination defines depth, shadow, and architectural calm.',
    },
    {
      title: 'DETAIL',
      subtitle: 'Small decisions shape the whole.',
      description:
        'Flush shadow gaps, concealed joinery tolerances, and aligned grout lines reflect structural discipline. The quietest elements are often the most demanding to build.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-36 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Studio Statement */}
      <div className="mb-16 sm:mb-24 lg:mb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-4 sm:mb-6">
            Studio / Philosophy
          </span>
          <h1 className="font-editorial text-3xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light tracking-tight leading-[1.08] mb-6 sm:mb-8">
            An engineer's understanding of structure. <br className="hidden sm:inline" />
            <span className="italic font-normal">A designer's eye for atmosphere.</span>
          </h1>
        </motion.div>
      </div>

      {/* 2. Large Architectural Visual Moment */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden bg-[#ECE8E1] mb-20 sm:mb-32 lg:mb-40"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
          alt="Studio atmosphere with honest materiality and architectural light"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.98]"
        />
        <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 font-tech text-[10px] tracking-[0.18em] text-[#F8F7F4]/90 uppercase bg-[#1A1A18]/50 backdrop-blur-md px-3 py-1.5">
          Material & Structural Harmony
        </div>
      </motion.div>

      {/* 3. The Professional Transition Narrative */}
      <section className="mb-20 sm:mb-32 lg:mb-40 border-b border-[#1A1A18]/8 pb-16 sm:pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-3">
              The Background
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-[#1A1A18] font-normal leading-tight">
              Rooted in building physics. Expressed through quiet interiors.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 sm:space-y-8 font-sans-clean text-[#4A4742] text-sm sm:text-base leading-relaxed max-w-2xl">
            <p>
              Before establishing the studio, our principal practiced as a civil engineer, calculating load distribution, reinforced concrete behavior, and the structural skeletons of complex buildings. That technical foundation naturally shifted how we evaluate an interior space.
            </p>
            <p>
              To us, an interior is not decorative styling draped over an existing shell. It is an interdependent architectural system where load paths, mechanical tolerances, acoustics, daylight reflection, and everyday human movement inform every line drawn.
            </p>
            <p>
              This engineering discipline brings five decisive qualities to every project:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-[#1A1A18]/8 font-tech text-xs uppercase tracking-wider text-[#1A1A18]">
              <div className="space-y-1">
                <span className="text-[#66625B] block text-[10px]">01</span>
                <span>Spatial Understanding</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#66625B] block text-[10px]">02</span>
                <span>Construction Awareness</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#66625B] block text-[10px]">03</span>
                <span>Functional Planning</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#66625B] block text-[10px]">04</span>
                <span>Material Understanding</span>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <span className="text-[#66625B] block text-[10px]">05</span>
                <span>Practical Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Second Visual Composition — Asymmetrical Whitespace */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 sm:mb-32 lg:mb-40">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6 aspect-[4/5] overflow-hidden bg-[#ECE8E1]"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
            alt="Interior joinery and tactile materiality"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="md:col-span-5 md:col-start-8 space-y-4 sm:space-y-6">
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block">
            Construction Clarity
          </span>
          <h3 className="font-editorial text-2xl sm:text-4xl text-[#1A1A18] font-light leading-snug">
            "When you understand how things are built, you design with restraint."
          </h3>
          <p className="font-sans-clean text-sm text-[#504D47] leading-relaxed">
            By speaking the structural engineer's and artisan contractor's native language, we resolve complex site challenges early, ensuring the finished environment preserves its pure spatial intention.
          </p>
        </div>
      </div>

      {/* 5. Design Approach — Editorial Principles */}
      <section className="mb-20 sm:mb-32 lg:mb-40">
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-3">
            Approach / Foundations
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#1A1A18] font-light">
            Design Principles
          </h2>
        </div>

        <div className="border-t border-[#1A1A18]/12 divide-y divide-[#1A1A18]/8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : index * 0.05 }}
              className="py-8 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline"
            >
              <div className="lg:col-span-4 space-y-1 sm:space-y-2">
                <span className="font-tech text-xs text-[#66625B] block">0{index + 1}</span>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#1A1A18] font-normal tracking-wide">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-8 space-y-2 sm:space-y-3">
                <p className="font-sans-clean text-sm sm:text-base font-medium text-[#1A1A18]">
                  {item.subtitle}
                </p>
                <p className="font-sans-clean text-sm sm:text-base text-[#504D47] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Closing Action */}
      <div className="pt-12 sm:pt-20 border-t border-[#1A1A18]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-tech text-xs uppercase tracking-widest text-[#66625B] block mb-1">
            Collaboration
          </span>
          <p className="font-editorial text-xl sm:text-2xl text-[#1A1A18]">
            Inquiries for residences, workspaces, and renovations.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onStartProject()}
          className="font-tech text-xs uppercase tracking-[0.2em] text-[#1A1A18] border-b border-[#1A1A18] pb-1 hover:opacity-70 transition-opacity cursor-pointer min-h-[44px] flex items-center"
        >
          Begin a Conversation →
        </button>
      </div>
    </div>
  );
};
