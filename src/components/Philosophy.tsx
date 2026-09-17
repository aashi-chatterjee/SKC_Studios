import React from 'react';
import { motion } from 'motion/react';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      label: 'Spatial Planning',
      description: 'Understanding load paths and structural limits allows spaces to be cleared of unnecessary partitions, framing unencumbered sightlines and natural flow.',
    },
    {
      label: 'Functionality',
      description: 'Ergonomics and daily routines are treated as design constraints. Storage, movement radii, and daylight angles are solved with mathematical rigor.',
    },
    {
      label: 'Material Choices',
      description: 'We prioritize honest, enduring substances—stone, solid timber, raw linen, lime plaster, and steel—chosen for how they age, wear, and anchor space.',
    },
    {
      label: 'Construction Awareness',
      description: 'A background in civil engineering bridges design and building site reality. We speak the builder’s technical language, avoiding compromises during execution.',
    },
    {
      label: 'Problem Solving',
      description: 'Complex floor plates and mechanical constraints become architectural opportunities for integrated joinery and bespoke structural resolutions.',
    },
  ];

  return (
    <section id="studio" className="py-28 sm:py-36 lg:py-48 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A18]/8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Heading & Core Statement */}
        <div className="lg:col-span-5 space-y-8">
          <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase block">
            02 / Philosophy
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1A1A18] font-light leading-[1.12]"
          >
            "From structure to surface, every decision has a reason."
          </motion.h2>

          <p className="text-base text-[#5A5752] font-sans-clean leading-relaxed pt-4 border-t border-[#1A1A18]/8">
            The studio was founded on a simple conviction: an interior is not a decorative veneer applied after the fact, but an architectural system where structure, light, and everyday human movement coexist in quiet harmony.
          </p>
        </div>

        {/* Right Column: Engineering-Informed Foundations */}
        <div className="lg:col-span-7 space-y-10 lg:pt-14">
          <div className="divide-y divide-[#1A1A18]/8">
            {principles.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
              >
                <div className="sm:col-span-5">
                  <span className="text-sm font-medium tracking-[0.08em] uppercase text-[#1A1A18] font-sans-clean">
                    {item.label}
                  </span>
                </div>
                <div className="sm:col-span-7">
                  <p className="text-sm text-[#5A5752] font-sans-clean leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
