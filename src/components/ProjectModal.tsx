import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A18]/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#F8F7F4] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-[#1A1A18]/10 bg-[#F8F7F4]">
            <div className="flex items-baseline gap-4">
              <span className="font-tech text-xs text-[#8A8780]">{project.number}</span>
              <span className="font-editorial text-xl sm:text-2xl text-[#1A1A18] font-normal">
                {project.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#5A5752] hover:text-[#1A1A18] transition-colors cursor-pointer"
              aria-label="Close project view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
            {/* Main Project Image */}
            <div className="w-full bg-[#EAE6DF] overflow-hidden aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Architectural Data Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#1A1A18]/8 font-sans-clean">
              <div>
                <span className="font-tech text-[10px] uppercase tracking-widest text-[#8A8780] block mb-1">
                  Category
                </span>
                <span className="text-xs sm:text-sm text-[#1A1A18] font-medium">
                  {project.category}
                </span>
              </div>
              <div>
                <span className="font-tech text-[10px] uppercase tracking-widest text-[#8A8780] block mb-1">
                  Location & Year
                </span>
                <span className="text-xs sm:text-sm text-[#1A1A18] font-medium">
                  {project.location}, {project.year}
                </span>
              </div>
              <div>
                <span className="font-tech text-[10px] uppercase tracking-widest text-[#8A8780] block mb-1">
                  Floor Area
                </span>
                <span className="text-xs sm:text-sm text-[#1A1A18] font-medium">
                  {project.dimensions || 'Private Residence'}
                </span>
              </div>
              <div>
                <span className="font-tech text-[10px] uppercase tracking-widest text-[#8A8780] block mb-1">
                  Primary Materiality
                </span>
                <span className="text-xs sm:text-sm text-[#1A1A18] font-medium">
                  {project.materials || 'Stone, Timber, Steel'}
                </span>
              </div>
            </div>

            {/* Companion Image if present */}
            {project.secondaryImage && (
              <div className="space-y-4">
                <span className="font-tech text-[10px] uppercase tracking-widest text-[#8A8780] block">
                  Detail Vignette
                </span>
                <div className="w-full bg-[#EAE6DF] overflow-hidden aspect-[16/9]">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} detail`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
