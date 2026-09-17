export interface BHKOption {
  id: string;
  label: string;
  sublabel: string;
  multiplier: number;
  typicalSqFt: number;
}

export interface AreaRangeOption {
  id: string;
  label: string;
  minSqFt: number;
  maxSqFt: number;
  baseCost: number;
}

export interface RoomOption {
  id: string;
  label: string;
  category: 'primary' | 'secondary' | 'utility';
  baseCost: number;
}

export interface PackageTier {
  id: 'essential' | 'standard' | 'premium';
  name: string;
  tagline: string;
  description: string;
  multiplier: number;
  deliverables: string[];
}

export interface CalculatorSelections {
  bhkId: string;
  areaRangeId: string;
  exactSqFt?: number | null;
  roomIds: string[];
  packageId: 'essential' | 'standard' | 'premium';
  location?: string;
  timeline?: string;
}

export interface EstimateResult {
  minCost: number;
  maxCost: number;
  formattedRange: string;
  bhkLabel: string;
  areaLabel: string;
  roomsCount: number;
  packageName: string;
  currencySymbol: string;
}

/**
 * Centralized Pricing Configuration
 * Easily update rates, multipliers, packages, and options below.
 */
export const pricingConfig = {
  currency: {
    symbol: '₹',
    code: 'INR',
    unitLabel: 'Lakhs',
  },

  disclaimer:
    'These figures are indicative estimates only. Final pricing may vary based on design requirements, materials, site conditions and scope of work.',

  bhkOptions: [
    { id: '1bhk', label: '1 BHK', sublabel: 'Single Bedroom Apartment', multiplier: 0.85, typicalSqFt: 650 },
    { id: '2bhk', label: '2 BHK', sublabel: 'Two Bedroom Residence', multiplier: 1.0, typicalSqFt: 1050 },
    { id: '3bhk', label: '3 BHK', sublabel: 'Three Bedroom Residence', multiplier: 1.25, typicalSqFt: 1600 },
    { id: '4bhk', label: '4 BHK', sublabel: 'Spacious Multi-Room Flat', multiplier: 1.55, typicalSqFt: 2200 },
    { id: '5bhk', label: '5+ BHK', sublabel: 'Penthouse / Duplex / Villa', multiplier: 1.9, typicalSqFt: 3200 },
  ] as BHKOption[],

  areaRanges: [
    { id: 'under-800', label: 'Under 800 sq ft', minSqFt: 500, maxSqFt: 800, baseCost: 180000 },
    { id: '800-1200', label: '800–1,200 sq ft', minSqFt: 800, maxSqFt: 1200, baseCost: 260000 },
    { id: '1200-1800', label: '1,200–1,800 sq ft', minSqFt: 1200, maxSqFt: 1800, baseCost: 380000 },
    { id: '1800-2500', label: '1,800–2,500 sq ft', minSqFt: 1800, maxSqFt: 2500, baseCost: 520000 },
    { id: '2500-plus', label: '2,500+ sq ft', minSqFt: 2500, maxSqFt: 4200, baseCost: 720000 },
  ] as AreaRangeOption[],

  rooms: [
    { id: 'livingRoom', label: 'Living Room', category: 'primary', baseCost: 75000 },
    { id: 'diningArea', label: 'Dining Area', category: 'primary', baseCost: 45000 },
    { id: 'kitchen', label: 'Kitchen', category: 'primary', baseCost: 110000 },
    { id: 'masterBedroom', label: 'Master Bedroom', category: 'primary', baseCost: 85000 },
    { id: 'bedroom', label: 'Bedroom', category: 'secondary', baseCost: 65000 },
    { id: 'bathroom', label: 'Bathroom', category: 'secondary', baseCost: 40000 },
    { id: 'balcony', label: 'Balcony', category: 'secondary', baseCost: 25000 },
    { id: 'study', label: 'Study / Office', category: 'secondary', baseCost: 50000 },
    { id: 'other', label: 'Other Spaces', category: 'utility', baseCost: 35000 },
  ] as RoomOption[],

  packages: {
    essential: {
      id: 'essential',
      name: 'Essential',
      tagline: 'For focused design requirements.',
      description:
        'Ideal for clients seeking structural clarity, efficient spatial planning, core material recommendations, and essential millwork guidelines.',
      multiplier: 1.0,
      deliverables: [
        '2D architectural layouts & circulation planning',
        'Finishes and material schedule (timber, stone, palette)',
        'Key elevation drawings for primary living spaces',
        'Basic millwork & joinery guidance',
      ],
    },
    standard: {
      id: 'standard',
      name: 'Standard',
      tagline: 'For a more complete interior design experience.',
      description:
        'Our most selected scope: complete 3D spatial modeling, bespoke joinery detailing, lighting choreography, and material procurement guidance.',
      multiplier: 1.35,
      deliverables: [
        'Detailed 3D spatial modeling & lighting design',
        'Custom architectural millwork & joinery drawings',
        'Comprehensive finishes, sanitary & hardware schedule',
        'Periodic site reviews & contractor coordination',
      ],
    },
    premium: {
      id: 'premium',
      name: 'Premium',
      tagline: 'For a comprehensive design and detailing experience.',
      description:
        'Turnkey architectural interior choreography, monolithic natural materials, custom furniture prototyping, and dedicated site administration.',
      multiplier: 1.75,
      deliverables: [
        'Turnkey architectural interior documentation',
        'Bespoke furniture prototyping & artisan detailing',
        'Daylight choreography, acoustic & MEP integration',
        'Dedicated site supervision through final handover',
      ],
    },
  } as Record<'essential' | 'standard' | 'premium', PackageTier>,

  timelineOptions: [
    { id: 'immediate', label: 'Within 1 Month' },
    { id: '1-3-months', label: '1–3 Months' },
    { id: '3-6-months', label: '3–6 Months' },
    { id: 'flexible', label: 'Flexible / Planning Ahead' },
  ],
};

/**
 * Format a number into Indian Lakhs / Crores string
 * e.g. 240000 -> "2.4L", 3100000 -> "31.0L"
 */
export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr.replace(/\.00$/, '')} Cr`;
  }
  const lakhs = (amount / 100000).toFixed(1);
  return `₹${lakhs.replace(/\.0$/, '')}L`;
}

/**
 * Centralized calculation function
 * Formula:
 * 1. Base Area Cost (from selected area range or customized sq ft)
 * 2. + Sum of selected room costs
 * 3. * BHK Multiplier
 * 4. * Package Multiplier
 * Returns indicative range (min: -12%, max: +12%)
 */
export function calculateProjectEstimate(selections: CalculatorSelections): EstimateResult {
  const bhk =
    pricingConfig.bhkOptions.find((b) => b.id === selections.bhkId) ||
    pricingConfig.bhkOptions[1];

  let areaCost = 260000;
  let areaLabel = '800–1,200 sq ft';

  if (selections.exactSqFt && selections.exactSqFt > 100) {
    // Exact sqft specified: base rate approx ₹240/sq ft scaled
    areaCost = Math.round(selections.exactSqFt * 250);
    areaLabel = `${selections.exactSqFt.toLocaleString()} sq ft`;
  } else {
    const range =
      pricingConfig.areaRanges.find((r) => r.id === selections.areaRangeId) ||
      pricingConfig.areaRanges[1];
    areaCost = range.baseCost;
    areaLabel = range.label;
  }

  // Calculate sum of selected rooms
  const roomsCost = selections.roomIds.reduce((sum, roomId) => {
    const room = pricingConfig.rooms.find((r) => r.id === roomId);
    return sum + (room ? room.baseCost : 0);
  }, 0);

  const packageTier =
    pricingConfig.packages[selections.packageId] || pricingConfig.packages.standard;

  // Primary calculated midpoint
  const baseSubtotal = areaCost + roomsCost;
  const adjustedTotal = baseSubtotal * bhk.multiplier * packageTier.multiplier;

  // Realistic indicative range (±12%)
  const minCost = Math.round((adjustedTotal * 0.88) / 10000) * 10000;
  const maxCost = Math.round((adjustedTotal * 1.14) / 10000) * 10000;

  const formattedMin = formatIndianCurrency(minCost);
  const formattedMax = formatIndianCurrency(maxCost);

  return {
    minCost,
    maxCost,
    formattedRange: `${formattedMin} – ${formattedMax}`,
    bhkLabel: bhk.label,
    areaLabel,
    roomsCount: selections.roomIds.length,
    packageName: `${packageTier.name} Package`,
    currencySymbol: pricingConfig.currency.symbol,
  };
}
