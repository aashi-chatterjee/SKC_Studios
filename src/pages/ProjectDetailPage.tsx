import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjectBySlug, getNextProject } from '../data/projects';
import { NotFoundPage } from './NotFoundPage';
import { setPageSEO } from '../utils/seo';

interface ProjectDetailPageProps {
  slug: string;
  onNavigateBack: () => void;
  onNavigateProject: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigateBack,
  onNavigateProject,
}) => {
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    if (project) {
      setPageSEO({
        title: `${project.title} — SKC STUDIOS`,
        description:
          project.shortDescription ||
          `${project.title} architectural interior commission in ${project.location}.`,
        canonicalPath: `/work/${project.slug}`,
        image: project.heroImage || project.image,
        type: 'article',
      });
    }
  }, [slug, project]);

  if (!project) {
    return (
      <NotFoundPage
        onNavigateHome={onNavigateBack}
        onNavigateWork={onNavigateBack}
      />
    );
  }

  const handleNextProjectKeyDown = (e: React.KeyboardEvent, nextSlug: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onNavigateProject(nextSlug);
    }
  };

  return (
    <div className="pt-24 sm:pt-36 pb-24 sm:pb-36">
      {/* 1. Back Navigation & Project Title + Metadata */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-8 sm:mb-16">
        <button
          onClick={onNavigateBack}
          className="group inline-flex items-center gap-2.5 font-tech text-xs uppercase tracking-[0.18em] text-[#66625B] hover:text-[#1A1A18] mb-8 sm:mb-12 transition-colors cursor-pointer min-h-[44px] py-2 focus-visible:outline-none"
          aria-label="Back to selected works"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Work</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#1A1A18]/8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-tech text-xs text-[#66625B] uppercase tracking-[0.22em] block mb-3">
              {project.number} / Selected Works
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light leading-[1.05] tracking-tight">
              {project.title.toUpperCase()}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 gap-y-3 font-tech text-xs text-[#66625B] uppercase tracking-wider"
          >
            <div>
              <span className="text-[#66625B] block text-[10px] mb-0.5">Project Type</span>
              <span className="text-[#1A1A18]">{project.category}</span>
            </div>
            <div>
              <span className="text-[#66625B] block text-[10px] mb-0.5">Location</span>
              <span className="text-[#1A1A18]">{project.location}</span>
            </div>
            <div>
              <span className="text-[#66625B] block text-[10px] mb-0.5">Year</span>
              <span className="text-[#1A1A18]">{project.year}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Large Hero Image */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 sm:mb-28 lg:mb-36">
        <motion.div
          initial={{ opacity: 0, clipPath: prefersReducedMotion ? 'none' : 'inset(4% 0% 4% 0%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden bg-[#ECE8E1]"
        >
          <img
            src={project.heroImage || project.image}
            alt={`${project.title} Primary View`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.98]"
          />
        </motion.div>
      </div>

      {/* 3. Full-width / Large Project Imagery */}
      {project.galleryImages && project.galleryImages[0] && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 sm:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full aspect-[16/10] sm:aspect-[2.2/1] overflow-hidden bg-[#ECE8E1]"
          >
            <img
              src={project.galleryImages[0].url}
              alt={`${project.title} Architectural View`}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      )}

      {/* 4. Secondary Image Compositions */}
      {project.secondaryComposition && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 sm:mb-28 lg:mb-36">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-7"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#ECE8E1]">
                <img
                  src={project.secondaryComposition.image1}
                  alt={`${project.title} Composition A`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-5 md:pt-16"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#ECE8E1]">
                <img
                  src={project.secondaryComposition.image2}
                  alt={`${project.title} Composition B`}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 500px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* 5. Short Project Description */}
      {project.shortDescription && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 sm:mb-28 lg:mb-36">
          <div className="max-w-3xl ml-auto">
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1A1A18] font-light leading-[1.3] tracking-tight"
            >
              {project.shortDescription}
            </motion.p>
          </div>
        </div>
      )}

      {/* 6. Additional Gallery Images */}
      {project.galleryImages && project.galleryImages.length > 1 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 sm:space-y-24 lg:space-y-32 mb-24 sm:mb-36 lg:mb-48">
          {project.galleryImages.slice(1).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`overflow-hidden bg-[#ECE8E1] ${
                img.aspect === 'wide'
                  ? 'aspect-[16/9] sm:aspect-[2.35/1] w-full'
                  : img.aspect === 'portrait'
                  ? 'aspect-[4/5] sm:aspect-[3/4] max-w-2xl mx-auto'
                  : 'aspect-[16/10] w-full'
              }`}
            >
              <img
                src={img.url}
                alt={`${project.title} Gallery View ${i + 1}`}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* 7. NEXT PROJECT Invitation */}
      {nextProject && (
        <section className="border-t border-[#1A1A18]/10 pt-20 sm:pt-32 lg:pt-40 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center">
            <span className="font-tech text-xs uppercase tracking-[0.26em] text-[#66625B] block mb-8 sm:mb-10">
              NEXT PROJECT
            </span>

            <div
              tabIndex={0}
              role="button"
              aria-label={`View next project: ${nextProject.title}`}
              onKeyDown={(e) => handleNextProjectKeyDown(e, nextProject.slug)}
              onClick={() => onNavigateProject(nextProject.slug)}
              className="group cursor-pointer max-w-4xl w-full space-y-6 sm:space-y-8 focus-visible:outline-none"
            >
              <div
                data-cursor-project="true"
                data-cursor-label="NEXT"
                className="relative aspect-[16/10] sm:aspect-[21/9] overflow-hidden bg-[#ECE8E1]"
              >
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.018]"
                />
              </div>

              <div className="inline-flex items-center gap-3 sm:gap-4 text-center">
                <h3 className="font-editorial text-2xl sm:text-5xl lg:text-6xl text-[#1A1A18] font-light tracking-tight group-hover:text-[#5A5752] transition-colors duration-500">
                  {nextProject.title.toUpperCase()}
                </h3>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#1A1A18] transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>

              <p className="font-tech text-xs text-[#66625B] uppercase tracking-wider">
                {nextProject.category} · {nextProject.location} · {nextProject.year}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
