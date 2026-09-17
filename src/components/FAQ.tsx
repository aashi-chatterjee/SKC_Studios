import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS, FAQItem } from '../data/faq';

interface FAQProps {
  onStartProject?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onStartProject }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-28 sm:py-36 lg:py-44 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A18]/8"
      aria-labelledby="faq-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
        <div>
          <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase block mb-3">
            05 / Inquiries & Clarity
          </span>
          <h2
            id="faq-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] font-light"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-sm text-[#7A7670] font-sans-clean max-w-sm mt-4 md:mt-0 leading-relaxed">
          Essential clarity on our spatial approach, project phases, fee calculations, and commission parameters.
        </p>
      </div>

      {/* Accordion List */}
      <div className="border-t border-[#1A1A18]/15" role="region" aria-label="FAQ Accordion">
        {FAQ_ITEMS.map((item: FAQItem) => {
          const isOpen = openId === item.id;
          const contentId = `faq-content-${item.id}`;
          const buttonId = `faq-button-${item.id}`;

          return (
            <div
              key={item.id}
              className="border-b border-[#1A1A18]/10 group transition-colors duration-200"
            >
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleFAQ(item.id)}
                className="w-full py-7 sm:py-9 flex items-start sm:items-center justify-between text-left cursor-pointer transition-colors duration-200 outline-none focus-visible:bg-[#F2EFE9]/60"
              >
                <div className="flex items-baseline gap-5 sm:gap-10 pr-4">
                  <span className="font-tech text-xs sm:text-sm text-[#8A8780] group-hover:text-[#1A1A18] transition-colors shrink-0">
                    {item.number}
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#1A1A18] font-normal leading-snug group-hover:translate-x-1 transition-transform duration-200">
                    {item.question}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                  <div
                    className="w-8 h-8 rounded-full border border-[#1A1A18]/12 flex items-center justify-center text-[#1A1A18] group-hover:border-[#1A1A18]/40 transition-colors"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: prefersReducedMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: prefersReducedMotion ? 0.01 : 0.25, delay: prefersReducedMotion ? 0 : 0.05 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: prefersReducedMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: prefersReducedMotion ? 0.01 : 0.15 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-9 sm:pl-16 pb-8 sm:pb-10 max-w-3xl">
                      <p className="font-sans-clean text-sm sm:text-base text-[#504D47] leading-relaxed">
                        {item.answer}
                      </p>
                      {item.id === 'faq-10' && onStartProject && (
                        <div className="mt-4 pt-2">
                          <button
                            type="button"
                            onClick={() => onStartProject()}
                            className="font-tech text-xs uppercase tracking-widest text-[#1A1A18] border-b border-[#1A1A18] pb-0.5 hover:border-[#8A8780] transition-colors cursor-pointer"
                          >
                            Initiate an inquiry →
                          </button>
                        </div>
                      )}
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
