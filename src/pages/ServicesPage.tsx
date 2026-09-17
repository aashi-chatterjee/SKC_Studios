import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { PriceCalculator } from '../components/PriceCalculator';
import { FAQ } from '../components/FAQ';

interface ServicesPageProps {
  onStartProject: () => void;
}

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  summary: string;
  scope: string[];
  focus: string;
}

const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'interior-design',
    number: '01',
    title: 'INTERIOR DESIGN',
    summary:
      'Complete interior architecture from concept generation through turn-key site completion. We calibrate light, volume, custom joinery, and tactile surfaces to produce spaces of enduring composure.',
    scope: [
      'Comprehensive Concept Schemes',
      'Architectural Finishes & Joinery Drawings',
      'Integrated Sanitaryware & Hardware Schedules',
      'Craftsman & Subcontractor Procurement',
      'On-Site Execution Quality Control',
    ],
    focus: 'Holistic residential and boutique commercial transformations.',
  },
  {
    id: 'space-planning',
    number: '02',
    title: 'SPACE PLANNING',
    summary:
      'Rigorous spatial choreography grounded in engineering awareness. We eliminate dead zones, align sightlines with natural daylight paths, and orchestrate intuitive circulation without arbitrary walls.',
    scope: [
      'Structural Partition Feasibility',
      'Choreographed Movement & Flow Analysis',
      'Sightline & Solar Aspect Mapping',
      'Built-in Storage & Concealed Services Integration',
      'Acoustic Zoning & Volumetric Balance',
    ],
    focus: 'Floor plate rationalization and layout optimization.',
  },
  {
    id: 'residential-interiors',
    number: '03',
    title: 'RESIDENTIAL INTERIORS',
    summary:
      'Private residences designed for practical family routines and serene withdrawal. Spaces characterized by honest materials, integrated storage, and calm architectural presence.',
    scope: [
      'Private Home Architecture & Fit-out',
      'Custom Kitchen & Bath Choreography',
      'Bespoke Built-In Cabinetry & Millwork',
      'Natural Textile, Lighting & Palette Curation',
      'Turn-Key Furniture & Fixture Commissioning',
    ],
    focus: 'Apartments, private villas, and countryside homes.',
  },
  {
    id: 'commercial-interiors',
    number: '04',
    title: 'COMMERCIAL INTERIORS',
    summary:
      'Focused environments for architecture studios, galleries, executive workplaces, and select hospitality spaces where spatial efficiency meets tactile refinement.',
    scope: [
      'Commercial Workplace Architecture',
      'Gallery & Cultural Exhibition Enclosures',
      'High-Traffic Surface Durability Specification',
      'Acoustics & Ergonomic Workstation Planning',
      'Brand Identity Spatial Manifestation',
    ],
    focus: 'Studios, boutiques, galleries, and executive suites.',
  },
  {
    id: 'renovation',
    number: '05',
    title: 'RENOVATION',
    summary:
      'Sensitive architectural adaptations of existing and historic properties. We uncover structural bones, replace failing MEP infrastructures, and introduce contemporary clarity without erasing character.',
    scope: [
      'Substrate & Structural Health Evaluation',
      'Thermal & MEP Modernization Coordination',
      'Load-Bearing Opening Enlargements',
      'Historic Substrate & Masonry Preservation',
      'Contemporary Architectural Insertions',
    ],
    focus: 'Historic buildings, loft conversions, and heritage homes.',
  },
  {
    id: 'consultation',
    number: '06',
    title: 'CONSULTATION',
    summary:
      'Focused advisory sessions for clients, property buyers, or development partners seeking structural feasibility insights, spatial potential audits, and material guidance prior to acquisition or build.',
    scope: [
      'Pre-Purchase Property Spatial Audits',
      'Structural Feasibility & Partition Assessment',
      'Contractor Drawings Technical Review',
      'Natural Material & Finish Advice',
      'Direct Principal Strategic Session',
    ],
    focus: 'Independent architectural critique and spatial feasibility.',
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onStartProject }) => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(DETAILED_SERVICES[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <div className="pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-36 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Header */}
      <div className="mb-16 sm:mb-24 lg:mb-32 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-4">
            Services / Capabilities
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light tracking-tight leading-[1.05] mb-6">
            Disciplined capabilities.
          </h1>
          <p className="font-sans-clean text-sm sm:text-base text-[#504D47] leading-relaxed max-w-xl">
            From early structural feasibility and spatial choreography to bespoke joinery and on-site delivery.
          </p>
        </motion.div>
      </div>

      {/* 2. Large Typographic Rows */}
      <div className="border-t border-[#1A1A18]/15">
        {DETAILED_SERVICES.map((service) => {
          const isOpen = openServiceId === service.id;
          const panelId = `service-panel-${service.id}`;
          const buttonId = `service-button-${service.id}`;

          return (
            <div
              key={service.id}
              className="border-b border-[#1A1A18]/10 group transition-colors duration-300"
            >
              <button
                id={buttonId}
                aria-controls={panelId}
                onClick={() => toggleService(service.id)}
                className="w-full py-8 sm:py-12 lg:py-14 flex items-center justify-between text-left cursor-pointer transition-all focus-visible:outline-none min-h-[44px]"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-4 sm:gap-14">
                  <span className="font-tech text-xs sm:text-sm text-[#66625B] group-hover:text-[#1A1A18] transition-colors">
                    {service.number}
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-[#1A1A18] font-light tracking-tight md:group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h2>
                </div>

                <div className="flex items-center gap-4 text-[#66625B] group-hover:text-[#1A1A18] transition-colors">
                  <span className="hidden sm:inline font-tech text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {isOpen ? 'Close' : 'View Scope'}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-[#1A1A18]/15 flex items-center justify-center group-hover:border-[#1A1A18]/40">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Reveal on Hover / Click */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden pb-10 sm:pb-12 pt-2"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start pt-4 border-t border-[#1A1A18]/6">
                      <div className="md:col-span-3">
                        <span className="font-tech text-xs uppercase tracking-widest text-[#66625B] block mb-1">
                          Core Focus
                        </span>
                        <p className="font-sans-clean text-xs text-[#504D47] leading-relaxed">
                          {service.focus}
                        </p>
                      </div>

                      <div className="md:col-span-5">
                        <span className="font-tech text-xs uppercase tracking-widest text-[#66625B] block mb-2">
                          Approach
                        </span>
                        <p className="font-sans-clean text-sm sm:text-base text-[#3A3834] leading-relaxed">
                          {service.summary}
                        </p>
                      </div>

                      <div className="md:col-span-4">
                        <span className="font-tech text-xs uppercase tracking-widest text-[#66625B] block mb-2">
                          Key Deliverables
                        </span>
                        <ul className="space-y-2 font-sans-clean text-xs text-[#504D47]">
                          {service.scope.map((item) => (
                            <li key={item} className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#1A1A18] rounded-full inline-block shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Interactive Price Estimator */}
      <PriceCalculator onStartProject={onStartProject} />

      {/* FAQ Section */}
      <FAQ onStartProject={() => onStartProject()} />

      {/* 3. Inquiry Callout */}
      <div className="mt-20 sm:mt-32 lg:mt-40 p-6 sm:p-10 lg:p-14 bg-[#F2EFE9] flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-2 max-w-lg">
          <span className="font-tech text-xs uppercase tracking-widest text-[#66625B]">
            Bespoke Commissions
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
            Have a project with unique structural or spatial requirements?
          </h3>
          <p className="font-sans-clean text-xs sm:text-sm text-[#504D47]">
            We frequently collaborate on hybrid briefs bridging architectural alterations and interior design.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onStartProject()}
          className="group inline-flex items-center justify-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-7 py-4 hover:bg-[#33312E] transition-colors cursor-pointer shrink-0 min-h-[44px]"
        >
          <span>Initiate a Commission</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
