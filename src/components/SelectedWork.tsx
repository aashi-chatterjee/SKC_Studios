import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ArrowRight } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (slug: string) => void;
  onViewAllWork?: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject, onViewAllWork }) => {
  const prefersReducedMotion = useReducedMotion();
  const p1 = PROJECTS[0];
  const p2 = PROJECTS[1];
  const p3 = PROJECTS[2];
  const p4 = PROJECTS[3];

  const handleKeyDown = (e: React.KeyboardEvent, slug: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectProject(slug);
    }
  };

  return (
    <section id="work" className="py-20 sm:py-32 lg:py-44 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 pb-6 sm:pb-8 border-b border-[#1A1A18]/8 gap-4">
        <div>
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-2">
            02 / Lookbook
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] font-light">
            What We Can Do
          </h2>
        </div>
        {onViewAllWork && (
          <button
            onClick={onViewAllWork}
            className="group inline-flex items-center gap-2 text-xs font-tech uppercase tracking-widest text-[#1A1A18] border-b border-[#1A1A18] pb-1 hover:opacity-75 transition-opacity mt-2 md:mt-0 cursor-pointer min-h-[44px] items-center"
          >
            <span>View Full Archive</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        )}
      </div>

      <div className="space-y-20 sm:space-y-36 lg:space-y-48">
        {/* Project 01 — Large Horizontal Image */}
        {p1 && (
          <div
            tabIndex={0}
            role="button"
            aria-label={`View project ${p1.title}`}
            onKeyDown={(e) => handleKeyDown(e, p1.slug)}
            onClick={() => onSelectProject(p1.slug)}
            className="group cursor-pointer focus-visible:outline-none"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: prefersReducedMotion ? 'none' : 'inset(4% 0% 4% 0%)',
                }}
                whileInView={{
                  opacity: 1,
                  clipPath: 'inset(0% 0% 0% 0%)',
                }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                data-cursor-project="true"
                data-cursor-label="EXPLORE"
                className="relative w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden bg-[#ECE8E1]"
              >
                <img
                  src={p1.image}
                  alt={`${p1.title} interior design in ${p1.location}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                />
              </motion.div>

              {/* Minimal Project Metadata */}
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-2 gap-2"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-tech text-xs text-[#66625B]">{p1.number}</span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal group-hover:text-[#5A5752] transition-colors duration-500">
                    {p1.title.toUpperCase()}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-tech text-xs text-[#66625B] uppercase tracking-wider">
                  <span>{p1.category}</span>
                  <span>·</span>
                  <span>{p1.location}</span>
                  <span>·</span>
                  <span>{p1.year}</span>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Project 02 — Offset Portrait with Generous Whitespace */}
        {p2 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-5 md:col-start-2 space-y-4 sm:space-y-6 order-2 md:order-1">
              <span className="font-tech text-xs text-[#66625B] tracking-widest block uppercase">
                {p2.number} / Architectural Interior
              </span>
              <h3
                onClick={() => onSelectProject(p2.slug)}
                className="font-editorial text-3xl sm:text-4xl text-[#1A1A18] font-normal cursor-pointer hover:text-[#5A5752] transition-colors duration-500"
              >
                {p2.title.toUpperCase()}
              </h3>
              <p className="font-sans-clean text-sm text-[#504D47] leading-relaxed max-w-sm">
                {p2.materials}
              </p>
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => onSelectProject(p2.slug)}
                  className="font-tech text-xs uppercase tracking-widest text-[#1A1A18] border-b border-[#1A1A18] pb-1 hover:opacity-75 transition-opacity cursor-pointer min-h-[44px] flex items-center"
                >
                  View Project →
                </button>
              </div>
            </div>

            <div
              tabIndex={0}
              role="button"
              aria-label={`View project ${p2.title}`}
              onKeyDown={(e) => handleKeyDown(e, p2.slug)}
              onClick={() => onSelectProject(p2.slug)}
              className="md:col-span-6 group cursor-pointer focus-visible:outline-none order-1 md:order-2"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: prefersReducedMotion ? 'none' : 'inset(4% 0% 4% 0%)',
                }}
                whileInView={{
                  opacity: 1,
                  clipPath: 'inset(0% 0% 0% 0%)',
                }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                data-cursor-project="true"
                data-cursor-label="EXPLORE"
                className="relative aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto md:mx-0 overflow-hidden bg-[#ECE8E1]"
              >
                <img
                  src={p2.image}
                  alt={`${p2.title} residential space in ${p2.location}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                />
              </motion.div>
            </div>
          </div>
        )}

        {/* Project 03 — Full-width Horizontal Composition */}
        {p3 && (
          <div
            tabIndex={0}
            role="button"
            aria-label={`View project ${p3.title}`}
            onKeyDown={(e) => handleKeyDown(e, p3.slug)}
            onClick={() => onSelectProject(p3.slug)}
            className="group cursor-pointer focus-visible:outline-none"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: prefersReducedMotion ? 'none' : 'inset(4% 0% 4% 0%)',
                }}
                whileInView={{
                  opacity: 1,
                  clipPath: 'inset(0% 0% 0% 0%)',
                }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                data-cursor-project="true"
                data-cursor-label="EXPLORE"
                className="relative w-full aspect-[16/10] sm:aspect-[2.35/1] overflow-hidden bg-[#ECE8E1]"
              >
                <img
                  src={p3.image}
                  alt={`${p3.title} alpine residence in ${p3.location}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-2 gap-2"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-tech text-xs text-[#66625B]">{p3.number}</span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal group-hover:text-[#5A5752] transition-colors duration-500">
                    {p3.title.toUpperCase()}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-tech text-xs text-[#66625B] uppercase tracking-wider">
                  <span>{p3.category}</span>
                  <span>·</span>
                  <span>{p3.location}</span>
                  <span>·</span>
                  <span>{p3.year}</span>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Project 04 — Asymmetric Duo Layout */}
        {p4 && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div
                tabIndex={0}
                role="button"
                aria-label={`View project ${p4.title}`}
                onKeyDown={(e) => handleKeyDown(e, p4.slug)}
                onClick={() => onSelectProject(p4.slug)}
                className="md:col-span-7 group cursor-pointer space-y-3 sm:space-y-4 focus-visible:outline-none"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    clipPath: prefersReducedMotion ? 'none' : 'inset(4% 0% 4% 0%)',
                  }}
                  whileInView={{
                    opacity: 1,
                    clipPath: 'inset(0% 0% 0% 0%)',
                  }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor-project="true"
                  data-cursor-label="EXPLORE"
                  className="aspect-[4/3] overflow-hidden bg-[#ECE8E1]"
                >
                  <img
                    src={p4.image}
                    alt={`${p4.title} coastal villa in ${p4.location}`}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                  />
                </motion.div>
                <div className="flex items-baseline gap-4">
                  <span className="font-tech text-xs text-[#66625B]">{p4.number}</span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal group-hover:text-[#5A5752] transition-colors duration-500">
                    {p4.title.toUpperCase()}
                  </h3>
                </div>
              </div>

              {p4.secondaryComposition && (
                <div
                  tabIndex={0}
                  role="button"
                  aria-label={`View detail of ${p4.title}`}
                  onKeyDown={(e) => handleKeyDown(e, p4.slug)}
                  onClick={() => onSelectProject(p4.slug)}
                  className="md:col-span-5 group cursor-pointer md:pb-12 space-y-3 sm:space-y-4 focus-visible:outline-none"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      clipPath: prefersReducedMotion ? 'none' : 'inset(4% 0% 4% 0%)',
                    }}
                    whileInView={{
                      opacity: 1,
                      clipPath: 'inset(0% 0% 0% 0%)',
                    }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor-project="true"
                    data-cursor-label="EXPLORE"
                    className="aspect-[4/5] overflow-hidden bg-[#ECE8E1]"
                  >
                    <img
                      src={p4.secondaryComposition.image1}
                      alt={`${p4.title} detail perspective showing stone and timber`}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 500px"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                    />
                  </motion.div>
                  <div className="flex items-center justify-between text-xs text-[#66625B] font-tech uppercase tracking-wider">
                    <span>{p4.category}</span>
                    <span>{p4.location} · {p4.year}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
