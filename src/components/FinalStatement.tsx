import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalStatementProps {
  onStartConversation: () => void;
}

export const FinalStatement: React.FC<FinalStatementProps> = ({ onStartConversation }) => {
  return (
    <section id="contact" className="py-36 sm:py-48 lg:py-60 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A18]/8">
      <div className="flex flex-col items-center text-center space-y-10 max-w-3xl mx-auto">
        <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase">
          Inquiries & Commissions
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-editorial text-4xl sm:text-5xl lg:text-7xl text-[#1A1A18] font-light leading-[1.08] tracking-tight"
        >
          Let's make space for better living.
        </motion.h2>

        <p className="text-[#5A5752] text-sm sm:text-base font-sans-clean max-w-lg leading-relaxed">
          We welcome inquiries for private residences, bespoke renovations, and architectural workspace commissions worldwide.
        </p>

        <motion.button
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          onClick={onStartConversation}
          className="group inline-flex items-center gap-3 font-tech text-xs tracking-[0.2em] uppercase text-[#1A1A18] border-b border-[#1A1A18] pb-2 pt-4 hover:border-[#8A8780] transition-colors cursor-pointer"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};
