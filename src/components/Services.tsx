import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SERVICES } from '../data/projects';
import { Plus, Minus } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="services" className="py-28 sm:py-36 lg:py-48 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A18]/8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
        <div>
          <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase block mb-3">
            03 / Capabilities
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] font-light">
            Studio Services
          </h2>
        </div>
        <p className="text-sm text-[#7A7670] font-sans-clean max-w-sm mt-4 md:mt-0 leading-relaxed">
          From spatial feasibility and structural planning through bespoke detailing and site execution.
        </p>
      </div>

      {/* Typographic List */}
      <div className="border-t border-[#1A1A18]/15">
        {SERVICES.map((service, index) => {
          const isOpen = activeService === service.id;

          return (
            <div
              key={service.id}
              className="border-b border-[#1A1A18]/10 group transition-colors duration-300"
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full py-8 sm:py-10 flex items-center justify-between text-left cursor-pointer transition-all"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-tech text-xs sm:text-sm text-[#8A8780] group-hover:text-[#1A1A18] transition-colors">
                    {service.number}
                  </span>
                  <span className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1A1A18] font-normal group-hover:translate-x-1.5 transition-transform duration-300">
                    {service.title}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[#8A8780] group-hover:text-[#1A1A18] transition-colors">
                  <span className="hidden sm:inline font-tech text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {isOpen ? 'Close' : 'Details'}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#1A1A18]/10 flex items-center justify-center group-hover:border-[#1A1A18]/30">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Typographic Detail */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-start overflow-hidden"
                  >
                    <div className="md:col-span-3">
                      <span className="font-tech text-xs uppercase tracking-widest text-[#8A8780]">
                        Scope & Approach
                      </span>
                    </div>

                    <div className="md:col-span-5">
                      <p className="text-[#5A5752] text-sm leading-relaxed font-sans-clean">
                        {service.description}
                      </p>
                    </div>

                    <div className="md:col-span-4">
                      <span className="font-tech text-[11px] uppercase tracking-wider text-[#8A8780] block mb-2">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((d) => (
                          <li key={d} className="text-xs text-[#4A4742] font-sans-clean flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#8A8780] rounded-full inline-block" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
