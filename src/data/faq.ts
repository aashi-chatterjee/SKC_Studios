export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01',
    number: '01',
    question: 'What types of interior projects do you undertake?',
    answer:
      'We undertake private residential homes, full apartment reorganizations, sensitive heritage restorations, and discerning workspace environments. Our practice prioritizes commissions where spatial proportion, structural awareness, and tactile material authenticity take precedence over surface decoration.',
    category: 'Scope',
  },
  {
    id: 'faq-02',
    number: '02',
    question: 'Do you provide complete interior design services?',
    answer:
      'Yes. We offer end-to-end turnkey architectural interior services—spanning feasibility studies, spatial reconfiguration, daylight choreography, custom millwork engineering, material procurement, and rigorous on-site construction administration.',
    category: 'Services',
  },
  {
    id: 'faq-03',
    number: '03',
    question: 'How does the design process work?',
    answer:
      'Our workflow is structured into four disciplined stages: 01 Discovery & Spatial Audit (understanding load-bearing constraints and light paths), 02 Schematic Design (spatial layouts and material palettes), 03 Technical Documentation (millwork details, joinery, and MEP coordination), and 04 Site Administration (supervision through handover).',
    category: 'Process',
  },
  {
    id: 'faq-04',
    number: '04',
    question: 'Do you handle renovation and execution?',
    answer:
      'Yes. Renovation is at the core of our practice. We collaborate closely with vetted structural engineers, master carpenters, and specialized contractors, conducting scheduled site audits and milestone reviews to ensure design intent is executed without compromise.',
    category: 'Execution',
  },
  {
    id: 'faq-05',
    number: '05',
    question: 'Can I choose only specific rooms?',
    answer:
      'While we prefer complete residential briefs to guarantee spatial cohesion from room to room, we selectively undertake focused commissions—such as full kitchen-dining reconfigurations, primary living spaces, or master suites—provided the brief requires high architectural rigor.',
    category: 'Scope',
  },
  {
    id: 'faq-06',
    number: '06',
    question: 'How long does an interior design project take?',
    answer:
      'A typical residential commission requires between 4 and 9 months from initial conceptual briefing to final completion. The exact timeline is governed by the scale of structural alterations, bespoke fabrication lead times, and municipal approval requirements.',
    category: 'Timeline',
  },
  {
    id: 'faq-07',
    number: '07',
    question: 'How is the project cost calculated?',
    answer:
      'Our project fees and execution estimates are computed transparently based on overall square footage, structural interventions, room complexity, and the level of custom joinery selected. We do not use arbitrary markups; our interactive calculator above provides an indicative range for preliminary budgeting.',
    category: 'Cost',
  },
  {
    id: 'faq-08',
    number: '08',
    question: 'Can I request a customized package?',
    answer:
      'Every project is inherently bespoke. While our standard tiers provide a transparent framework for initial planning, we formulate tailored project scopes and fee structures to address specific architectural complexities, custom furniture prototyping, or historic preservation requirements.',
    category: 'Customization',
  },
  {
    id: 'faq-09',
    number: '09',
    question: 'Do you provide site visits or consultations?',
    answer:
      'Yes. Prior to entering into an agreement, we conduct an on-site spatial audit to inspect structural columns, plumbing chases, ceiling heights, and solar orientation. For international commissions, initial consultations can be held via high-definition digital walk-throughs with verified floor plans.',
    category: 'Consultation',
  },
  {
    id: 'faq-10',
    number: '10',
    question: 'How do I get started?',
    answer:
      'You can use our interactive Price Calculator to explore an indicative estimate, or submit your project details directly via our contact form. Sharing floor plans, site photographs, and your anticipated timeline allows us to prepare a considered initial spatial response.',
    category: 'Onboarding',
  },
];
