import { Project } from '../types';

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85';

export const PROJECTS: Project[] = [
  {
    id: 'project-01',
    slug: 'traditional',
    number: '01',
    title: 'Traditional',
    category: 'Commercial',
    location: 'India',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1646889996072-95aef025218e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroImage: 'https://images.unsplash.com/photo-1646889996072-95aef025218e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    layoutOnArchive: 'large-horizontal',
    materials: 'Cast in-situ concrete, smoked white oak, brushed steel',
    dimensions: '340 m²',
    shortDescription: 'Monolithic concrete volumes oriented to maximize northern daylight and Baltic horizons. Built-in joinery creates uninterrupted planes of Danish white oak.',
    secondaryComposition: {
      image1: 'https://images.unsplash.com/photo-1787407704371-0fa31d744c47?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      image2: 'https://images.unsplash.com/photo-1699173563113-278562aeb619?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1582641547274-2770615179ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1774301063167-66623449a95c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'project-02',
    slug: 'minimalistic',
    number: '02',
    title: 'Minimalistic',
    category: 'Workplace/Residential',
    location: 'India',
    year: '2024',
    image: 'https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroImage: 'https://images.unsplash.com/photo-1700474568247-2bf81611b293?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    layoutOnArchive: 'portrait-offset',
    materials: 'Jura limestone, structural black steel, linen',
    dimensions: '195 m²',
    shortDescription: 'A contemplative studio workplace shaped around heavy limestone plinths and slender blackened steel apertures, filtering morning light from Lake Zurich.',
    secondaryComposition: {
      image1: 'https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      image2: 'https://plus.unsplash.com/premium_photo-1676525800265-008a39b0e722?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        aspect: 'standard',
      },
    ],
  },
  {
    id: 'project-03',
    slug: 'contemporary',
    number: '03',
    title: 'Contemporary',
    category: 'Residential/Workplace',
    location: 'Kolkata',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=85',
    layoutOnArchive: 'full-width',
    materials: 'Porous terracotta, honed basalt, teak joinery, lime plaster',
    dimensions: '480 m²',
    shortDescription: 'Thermal mass and rhythmic courtyard ventilation form the core of this multi-generational residence, pairing traditional Bengali cross-breezes with disciplined geometry.',
    secondaryComposition: {
      image1: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      image2: 'https://images.unsplash.com/photo-1634822929331-ee4dc2c97fc4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85',
        aspect: 'wide',
      },
    ],
  },
  {
    id: 'project-04',
    slug: 'modern',
    number: '04',
    title: 'The Modern Gallery',
    category: 'Commercial',
    location: 'India',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1662454420647-3d20ddcdb8f8?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
    layoutOnArchive: 'duo-composition',
    materials: 'Micro-cement, blackened ash, bronze fittings',
    dimensions: '280 m²',
    shortDescription: 'An adaptive reuse gallery featuring monolithic plinths that define visual hierarchy without permanently partitioning the historic warehouse volume.',
    secondaryComposition: {
      image1: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      image2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    },
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85',
        aspect: 'standard',
      },
    ],
  },
  {
    id: 'project-05',
    slug: 'scandanavian',
    number: '05',
    title: 'SCANDANAVIAN',
    category: 'Residential/Workplace',
    location: 'India',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=85',
    layoutOnArchive: 'centered-horizontal',
    materials: 'Hinoki cypress, washi paper screens, river gravel',
    dimensions: '160 m²',
    shortDescription: 'A private garden sanctuary where exterior and interior dissolve through sliding timber screens and modulated floor levels.',
    secondaryComposition: {
      image1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      image2: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
    },
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
        aspect: 'wide',
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  return PROJECTS[nextIndex];
};

export const SERVICES = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Architectural Interiors',
    description:
      'Holistic spatial concept, spatial volume calibration, partition adjustments, and turn-key interior design for residential and boutique workplace environments.',
    deliverables: [
      'Spatial layout & volumetric planning',
      'Architectural lighting & ceiling plans',
      'Bespoke interior architectural details',
      'Material specification & finishes schedule',
    ],
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Bespoke Millwork & Joinery',
    description:
      'Engineering custom fitted furniture, pocketing architectural walls, library systems, kitchens, and monolithic bathroom vanity plinths tailored to millimetric tolerances.',
    deliverables: [
      'Detailed millwork fabrication drawings',
      'Material sourcing (solid timbers, stones, metals)',
      'Hardware specification & concealed mechanisms',
      'Artisan and contractor site coordination',
    ],
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Spatial Planning & Feasibility',
    description:
      'Evaluating existing structural envelopes, daylit axes, and circulation flow before construction or structural alterations begin.',
    deliverables: [
      'As-built space assessment',
      'Circulation flow & partition options',
      'Solar orientation & daylight optimization',
      'Pre-purchase architectural advisory',
    ],
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Site Execution & Coordination',
    description:
      'Rigorous supervision of architectural joiners, stone masons, and specialty craftspeople to protect the integrity of the design through to turn-key handover.',
    deliverables: [
      'Contractor drawing reviews',
      'Periodic on-site milestone inspections',
      'Material mock-up and sample reviews',
      'Defects audit & final spatial styling',
    ],
  },
];

