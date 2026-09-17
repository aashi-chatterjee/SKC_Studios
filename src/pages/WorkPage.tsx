import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PROJECTS } from '../data/projects';

interface WorkPageProps {
  onSelectProject: (slug: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject }) => {
  const prefersReducedMotion = useReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent, slug: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectProject(slug);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-36 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-16 sm:mb-24 lg:mb-32 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-4">
            Archive / 2022—2026
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light tracking-tight leading-[1.05] mb-6">
            Spaces we love.
          </h1>
          <p className="font-sans-clean text-sm sm:text-base text-[#504D47] leading-relaxed max-w-xl">
            A curated visual archive of residential, workplace, and contemplative environments we can create.
          </p>
        </motion.div>
      </div>

      {/* Unconventional Editorial Gallery */}
      <div className="space-y-20 sm:space-y-36 lg:space-y-48">
        {PROJECTS.map((project, idx) => {
          const isLargeHorizontal = project.layoutOnArchive === 'large-horizontal';
          const isPortraitOffset = project.layoutOnArchive === 'portrait-offset';
          const isFullWidth = project.layoutOnArchive === 'full-width';
          const isDuo = project.layoutOnArchive === 'duo-composition';

          if (isLargeHorizontal) {
            return (
              <article
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View project ${project.title}`}
                onKeyDown={(e) => handleKeyDown(e, project.slug)}
                onClick={() => onSelectProject(project.slug)}
                className="group cursor-pointer space-y-4 sm:space-y-8 focus-visible:outline-none"
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
                  data-cursor-label="VIEW"
                  className="relative w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden bg-[#ECE8E1]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} in ${project.location}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
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
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-1 gap-2 sm:gap-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-tech text-xs text-[#66625B]">{project.number}</span>
                    <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1A1A18] font-normal tracking-tight group-hover:text-[#5A5752] transition-colors duration-500">
                      {project.title.toUpperCase()}
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-tech text-xs text-[#66625B] uppercase tracking-wider">
                    <span>{project.category}</span>
                    <span className="text-[#BFBBB4]">·</span>
                    <span>{project.location}</span>
                    <span className="text-[#BFBBB4]">·</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              </article>
            );
          }

          if (isPortraitOffset) {
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-4 lg:col-start-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <span className="font-tech text-xs text-[#66625B] tracking-widest block uppercase">
                    {project.number}
                  </span>
                  <h2
                    onClick={() => onSelectProject(project.slug)}
                    className="font-editorial text-3xl sm:text-5xl text-[#1A1A18] font-normal cursor-pointer tracking-tight hover:text-[#5A5752] transition-colors duration-500"
                  >
                    {project.title.toUpperCase()}
                  </h2>

                  <div className="space-y-1 font-tech text-xs text-[#66625B] uppercase tracking-wider pt-4 border-t border-[#1A1A18]/8">
                    <p>{project.category}</p>
                    <p>{project.location}</p>
                    <p>{project.year}</p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProject(project.slug)}
                      className="font-tech text-xs uppercase tracking-[0.18em] text-[#1A1A18] border-b border-[#1A1A18] pb-1 hover:opacity-70 transition-opacity cursor-pointer min-h-[44px] flex items-center"
                    >
                      View Design →
                    </button>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  role="button"
                  aria-label={`View project ${project.title}`}
                  onKeyDown={(e) => handleKeyDown(e, project.slug)}
                  onClick={() => onSelectProject(project.slug)}
                  className="lg:col-span-6 lg:col-start-7 group cursor-pointer focus-visible:outline-none order-1 lg:order-2"
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
                    data-cursor-label="VIEW"
                    className="aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden bg-[#ECE8E1]"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} architectural space in ${project.location}`}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                    />
                  </motion.div>
                </div>
              </article>
            );
          }

          if (isFullWidth) {
            return (
              <article
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View project ${project.title}`}
                onKeyDown={(e) => handleKeyDown(e, project.slug)}
                onClick={() => onSelectProject(project.slug)}
                className="group cursor-pointer space-y-4 sm:space-y-8 focus-visible:outline-none"
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
                  data-cursor-label="VIEW"
                  className="relative w-full aspect-[16/10] sm:aspect-[2.35/1] overflow-hidden bg-[#ECE8E1]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} panoramic architectural interior`}
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
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-1 gap-2 sm:gap-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-tech text-xs text-[#66625B]">{project.number}</span>
                    <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1A1A18] font-normal tracking-tight group-hover:text-[#5A5752] transition-colors duration-500">
                      {project.title.toUpperCase()}
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-tech text-xs text-[#66625B] uppercase tracking-wider">
                    <span>{project.category}</span>
                    <span className="text-[#BFBBB4]">·</span>
                    <span>{project.location}</span>
                    <span className="text-[#BFBBB4]">·</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              </article>
            );
          }

          if (isDuo) {
            return (
              <article
                key={project.id}
                className="space-y-6 sm:space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label={`View project ${project.title}`}
                    onKeyDown={(e) => handleKeyDown(e, project.slug)}
                    onClick={() => onSelectProject(project.slug)}
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
                      data-cursor-label="VIEW"
                      className="aspect-[4/3] overflow-hidden bg-[#ECE8E1]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} space composition`}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                      />
                    </motion.div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-tech text-xs text-[#66625B]">{project.number}</span>
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal tracking-tight group-hover:text-[#5A5752] transition-colors duration-500">
                        {project.title.toUpperCase()}
                      </h2>
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    role="button"
                    aria-label={`View detail of ${project.title}`}
                    onKeyDown={(e) => handleKeyDown(e, project.slug)}
                    onClick={() => onSelectProject(project.slug)}
                    className="md:col-span-5 group cursor-pointer space-y-3 sm:space-y-4 focus-visible:outline-none"
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
                      data-cursor-label="VIEW"
                      className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#ECE8E1]"
                    >
                      <img
                        src={project.secondaryComposition?.image1 || project.image}
                        alt={`${project.title} material and light detail`}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 500px"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                      />
                    </motion.div>
                    <div className="font-tech text-xs text-[#66625B] uppercase tracking-wider">
                      <span>{project.category} · {project.location} · {project.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // Centered horizontal composition
          return (
            <article
              key={project.id}
              tabIndex={0}
              role="button"
              aria-label={`View project ${project.title}`}
              onKeyDown={(e) => handleKeyDown(e, project.slug)}
              onClick={() => onSelectProject(project.slug)}
              className="group cursor-pointer max-w-5xl mx-auto space-y-4 sm:space-y-8 focus-visible:outline-none"
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
                data-cursor-label="VIEW"
                className="relative w-full aspect-[16/10] overflow-hidden bg-[#ECE8E1]"
              >
                <img
                  src={project.image}
                  alt={`${project.title} interior design in ${project.location}`}
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
                className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-1 gap-2 sm:gap-4"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-tech text-xs text-[#66625B]">{project.number}</span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal group-hover:text-[#5A5752] transition-colors duration-500">
                    {project.title}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-tech text-xs text-[#66625B] uppercase tracking-wider">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span>{project.location}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
              </motion.div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
