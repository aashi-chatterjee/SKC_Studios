import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, RotateCcw, Send, Sparkles } from 'lucide-react';
import {
  pricingConfig,
  calculateProjectEstimate,
  CalculatorSelections,
  EstimateResult,
} from '../data/pricingConfig';

interface PriceCalculatorProps {
  onStartProject?: (prefillNotes?: string) => void;
}

const STEPS = [
  { id: 1, label: 'Home', number: '01' },
  { id: 2, label: 'Size', number: '02' },
  { id: 3, label: 'Spaces', number: '03' },
  { id: 4, label: 'Package', number: '04' },
  { id: 5, label: 'Details', number: '05' },
];

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onStartProject }) => {
  const prefersReducedMotion = useReducedMotion();

  // Multi-step state: 1 to 5, step 6 is Result Screen
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form selections with architectural defaults
  const [selections, setSelections] = useState<CalculatorSelections>({
    bhkId: '2bhk',
    areaRangeId: '1200-1800',
    exactSqFt: null,
    roomIds: ['livingRoom', 'diningArea', 'kitchen', 'masterBedroom'],
    packageId: 'standard',
    location: '',
    timeline: '1-3-months',
  });

  // Lead capture state
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Exact area text input buffer
  const [exactAreaInput, setExactAreaInput] = useState<string>('');

  // Calculate live estimate based on current selections
  const estimate: EstimateResult = useMemo(() => {
    return calculateProjectEstimate(selections);
  }, [selections]);

  // Handlers for step updates
  const handleBHKSelect = (bhkId: string) => {
    setSelections((prev) => ({ ...prev, bhkId }));
  };

  const handleAreaRangeSelect = (areaRangeId: string) => {
    setExactAreaInput('');
    setSelections((prev) => ({ ...prev, areaRangeId, exactSqFt: null }));
  };

  const handleExactAreaChange = (val: string) => {
    setExactAreaInput(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setSelections((prev) => ({ ...prev, exactSqFt: parsed }));
    } else {
      setSelections((prev) => ({ ...prev, exactSqFt: null }));
    }
  };

  const handleRoomToggle = (roomId: string) => {
    setSelections((prev) => {
      const exists = prev.roomIds.includes(roomId);
      const updated = exists
        ? prev.roomIds.filter((id) => id !== roomId)
        : [...prev.roomIds, roomId];
      // Keep at least 1 room selected
      return {
        ...prev,
        roomIds: updated.length > 0 ? updated : [roomId],
      };
    });
  };

  const handlePackageSelect = (packageId: 'essential' | 'standard' | 'premium') => {
    setSelections((prev) => ({ ...prev, packageId }));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleModifySelections = () => {
    setCurrentStep(1);
    setLeadSubmitted(false);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;
    setLeadSubmitted(true);
  };

  const handleDiscussProjectClick = () => {
    const summary = `Estimated Project: ${estimate.formattedRange} (${estimate.bhkLabel}, ${estimate.areaLabel}, ${estimate.roomsCount} spaces, ${estimate.packageName}).`;
    if (onStartProject) {
      onStartProject(summary);
    }
  };

  return (
    <section
      id="price-calculator"
      className="py-28 sm:py-36 lg:py-44 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A18]/8"
      aria-labelledby="calculator-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
        <div>
          <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase block mb-3">
            04 / Project Estimation
          </span>
          <h2
            id="calculator-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] font-light"
          >
            Estimated Project Cost
          </h2>
        </div>
        <p className="text-sm text-[#7A7670] font-sans-clean max-w-sm mt-4 md:mt-0 leading-relaxed">
          Interactive pricing exploration designed to provide a transparent, indicative baseline for your architectural interior commission.
        </p>
      </div>

      {/* Calculator Frame */}
      <div className="bg-[#F4F1EA] border border-[#1A1A18]/12 p-6 sm:p-10 lg:p-14 transition-all">
        {/* Subtle Architectural Step Progress Indicator */}
        {currentStep <= 5 && (
          <div className="mb-10 sm:mb-12 pb-6 border-b border-[#1A1A18]/10">
            <div className="flex items-center justify-between overflow-x-auto pb-2 scrollbar-none gap-4">
              {STEPS.map((step) => {
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className="flex items-center gap-2.5 group cursor-pointer text-left shrink-0 transition-opacity"
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-tech text-[10px] transition-colors ${
                        isActive
                          ? 'bg-[#1A1A18] text-[#F8F7F4]'
                          : isCompleted
                          ? 'bg-[#1A1A18]/20 text-[#1A1A18]'
                          : 'border border-[#1A1A18]/20 text-[#7A7670]'
                      }`}
                    >
                      {isCompleted ? '✓' : step.number}
                    </span>
                    <span
                      className={`font-tech text-xs tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'text-[#1A1A18] font-semibold'
                          : isCompleted
                          ? 'text-[#4A4742]'
                          : 'text-[#8A8780]'
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic Multi-Step Body */}
        <AnimatePresence mode="wait">
          {/* STEP 1: BHK TYPE */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="font-tech text-xs tracking-[0.2em] text-[#8A8780] uppercase">
                  Step 01 of 05
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
                  What type of home do you have?
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-[#66625B]">
                  Select the spatial volume or configuration of your property.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {pricingConfig.bhkOptions.map((option) => {
                  const isSelected = selections.bhkId === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleBHKSelect(option.id)}
                      className={`p-5 text-left border cursor-pointer transition-all duration-200 min-h-[44px] flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1A1A18] text-[#F8F7F4] border-[#1A1A18] shadow-sm'
                          : 'bg-[#F8F7F4] text-[#1A1A18] border-[#1A1A18]/15 hover:border-[#1A1A18]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-3">
                        <span className="font-editorial text-2xl sm:text-3xl font-light">
                          {option.label}
                        </span>
                        <div
                          className={`w-3.5 h-3.5 rounded-full border transition-colors ${
                            isSelected
                              ? 'border-[#F8F7F4] bg-[#F8F7F4]'
                              : 'border-[#1A1A18]/30'
                          }`}
                        />
                      </div>
                      <span
                        className={`font-sans-clean text-[11px] leading-tight ${
                          isSelected ? 'text-[#ECE8E1]' : 'text-[#7A7670]'
                        }`}
                      >
                        {option.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-[#1A1A18]/10 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="group inline-flex items-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-7 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Continue to Area</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: AREA SIZE */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="font-tech text-xs tracking-[0.2em] text-[#8A8780] uppercase">
                  Step 02 of 05
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
                  How large is the space?
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-[#66625B]">
                  Select an estimated square footage bracket, or enter your exact carpet area.
                </p>
              </div>

              {/* Area Range Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {pricingConfig.areaRanges.map((range) => {
                  const isSelected =
                    !selections.exactSqFt && selections.areaRangeId === range.id;
                  return (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => handleAreaRangeSelect(range.id)}
                      className={`p-5 text-left border cursor-pointer transition-all duration-200 min-h-[44px] flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#1A1A18] text-[#F8F7F4] border-[#1A1A18]'
                          : 'bg-[#F8F7F4] text-[#1A1A18] border-[#1A1A18]/15 hover:border-[#1A1A18]/40'
                      }`}
                    >
                      <div>
                        <span className="font-tech text-sm sm:text-base font-semibold block mb-0.5">
                          {range.label}
                        </span>
                        <span
                          className={`font-sans-clean text-xs ${
                            isSelected ? 'text-[#ECE8E1]' : 'text-[#7A7670]'
                          }`}
                        >
                          Approx. {range.minSqFt} – {range.maxSqFt} sq ft
                        </span>
                      </div>
                      <div
                        className={`w-3.5 h-3.5 rounded-full border transition-colors shrink-0 ml-3 ${
                          isSelected
                            ? 'border-[#F8F7F4] bg-[#F8F7F4]'
                            : 'border-[#1A1A18]/30'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Optional Exact Area Field */}
              <div className="p-5 bg-[#F8F7F4] border border-[#1A1A18]/15 max-w-md">
                <label
                  htmlFor="exact-sqft-input"
                  className="font-tech text-xs uppercase tracking-wider text-[#66625B] block mb-2"
                >
                  Or enter exact area (sq ft):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="exact-sqft-input"
                    type="number"
                    min="200"
                    max="15000"
                    placeholder="e.g. 1450"
                    value={exactAreaInput}
                    onChange={(e) => handleExactAreaChange(e.target.value)}
                    className="w-full bg-transparent border border-[#1A1A18]/20 px-3.5 py-2.5 font-tech text-sm text-[#1A1A18] placeholder-[#A09D96] focus:border-[#1A1A18] focus:outline-none"
                  />
                  <span className="font-tech text-xs text-[#7A7670] uppercase shrink-0">
                    sq ft
                  </span>
                </div>
                {selections.exactSqFt && (
                  <p className="font-sans-clean text-xs text-[#1A1A18] mt-2 font-medium">
                    Custom area active: {selections.exactSqFt.toLocaleString()} sq ft
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-[#1A1A18]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.18em] text-[#66625B] hover:text-[#1A1A18] transition-colors cursor-pointer py-3"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="group inline-flex items-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-7 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Continue to Spaces</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SPACES SELECTION */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div className="space-y-2">
                  <span className="font-tech text-xs tracking-[0.2em] text-[#8A8780] uppercase">
                    Step 03 of 05
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
                    Which spaces would you like to design?
                  </h3>
                  <p className="font-sans-clean text-xs sm:text-sm text-[#66625B]">
                    Select all rooms requiring architectural intervention, joinery, or furnishing.
                  </p>
                </div>
                <span className="font-tech text-xs tracking-wider uppercase text-[#1A1A18] bg-[#F8F7F4] border border-[#1A1A18]/15 px-3 py-1.5 self-start sm:self-auto shrink-0">
                  {selections.roomIds.length} {selections.roomIds.length === 1 ? 'Space' : 'Spaces'} Selected
                </span>
              </div>

              {/* Multi-Select Rooms Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
                {pricingConfig.rooms.map((room) => {
                  const isChecked = selections.roomIds.includes(room.id);
                  return (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => handleRoomToggle(room.id)}
                      className={`p-4 sm:p-5 text-left border cursor-pointer transition-all duration-200 min-h-[44px] flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#1A1A18] text-[#F8F7F4] border-[#1A1A18]'
                          : 'bg-[#F8F7F4] text-[#1A1A18] border-[#1A1A18]/15 hover:border-[#1A1A18]/40'
                      }`}
                    >
                      <span className="font-sans-clean text-xs sm:text-sm font-medium">
                        {room.label}
                      </span>
                      <div
                        className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors shrink-0 ml-2 ${
                          isChecked
                            ? 'border-[#F8F7F4] bg-[#F8F7F4] text-[#1A1A18]'
                            : 'border-[#1A1A18]/30'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[2.5]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-[#1A1A18]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.18em] text-[#66625B] hover:text-[#1A1A18] transition-colors cursor-pointer py-3"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="group inline-flex items-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-7 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Continue to Package</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: PACKAGE TIER */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="font-tech text-xs tracking-[0.2em] text-[#8A8780] uppercase">
                  Step 04 of 05
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
                  What level of design are you looking for?
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-[#66625B]">
                  Choose the depth of architectural involvement and detailing required.
                </p>
              </div>

              {/* 3 Package Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {(['essential', 'standard', 'premium'] as const).map((tierKey) => {
                  const pkg = pricingConfig.packages[tierKey];
                  const isSelected = selections.packageId === tierKey;

                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => handlePackageSelect(tierKey)}
                      className={`p-6 sm:p-7 text-left border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1A1A18] text-[#F8F7F4] border-[#1A1A18] shadow-md'
                          : 'bg-[#F8F7F4] text-[#1A1A18] border-[#1A1A18]/15 hover:border-[#1A1A18]/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-tech text-xs tracking-[0.2em] uppercase">
                            {pkg.name}
                          </span>
                          <div
                            className={`w-3.5 h-3.5 rounded-full border transition-colors ${
                              isSelected
                                ? 'border-[#F8F7F4] bg-[#F8F7F4]'
                                : 'border-[#1A1A18]/30'
                            }`}
                          />
                        </div>

                        <p
                          className={`font-editorial text-lg italic mb-4 ${
                            isSelected ? 'text-[#ECE8E1]' : 'text-[#504D47]'
                          }`}
                        >
                          {pkg.tagline}
                        </p>

                        <p
                          className={`font-sans-clean text-xs leading-relaxed mb-6 ${
                            isSelected ? 'text-[#D0CCC5]' : 'text-[#66625B]'
                          }`}
                        >
                          {pkg.description}
                        </p>

                        <div className="space-y-2 pt-4 border-t border-current/10">
                          {pkg.deliverables.map((d, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs">
                              <span className="shrink-0 mt-0.5 opacity-70">•</span>
                              <span className="font-sans-clean opacity-90 leading-tight">
                                {d}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-current/10">
                        <span className="font-tech text-[10px] uppercase tracking-widest opacity-80">
                          {tierKey === 'essential'
                            ? 'Baseline Scope'
                            : tierKey === 'standard'
                            ? 'Comprehensive Scope'
                            : 'Full Turnkey Scope'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-[#1A1A18]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.18em] text-[#66625B] hover:text-[#1A1A18] transition-colors cursor-pointer py-3"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="group inline-flex items-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-7 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: OPTIONAL PROJECT DETAILS */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="font-tech text-xs tracking-[0.2em] text-[#8A8780] uppercase">
                  Step 05 of 05
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
                  Optional Project Details
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-[#66625B]">
                  Contextual notes help refine our spatial and logistics framework.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                {/* Location */}
                <div className="space-y-2">
                  <label
                    htmlFor="calc-location"
                    className="font-tech text-xs uppercase tracking-wider text-[#66625B] block"
                  >
                    Project Location / City
                  </label>
                  <input
                    id="calc-location"
                    type="text"
                    placeholder="e.g. Zurich, Copenhagen, Mumbai, Berlin..."
                    value={selections.location}
                    onChange={(e) =>
                      setSelections((prev) => ({ ...prev, location: e.target.value }))
                    }
                    className="w-full bg-[#F8F7F4] border border-[#1A1A18]/20 px-4 py-3 font-sans-clean text-sm text-[#1A1A18] placeholder-[#A09D96] focus:border-[#1A1A18] focus:outline-none"
                  />
                </div>

                {/* Expected Timeline */}
                <div className="space-y-2">
                  <label
                    htmlFor="calc-timeline"
                    className="font-tech text-xs uppercase tracking-wider text-[#66625B] block"
                  >
                    Expected Timeline
                  </label>
                  <select
                    id="calc-timeline"
                    value={selections.timeline}
                    onChange={(e) =>
                      setSelections((prev) => ({ ...prev, timeline: e.target.value }))
                    }
                    className="w-full bg-[#F8F7F4] border border-[#1A1A18]/20 px-4 py-3 font-sans-clean text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none cursor-pointer"
                  >
                    {pricingConfig.timelineOptions.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1A1A18]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.18em] text-[#66625B] hover:text-[#1A1A18] transition-colors cursor-pointer py-3"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="group inline-flex items-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-8 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>View Estimated Cost</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 6: RESULT SCREEN */}
          {currentStep === 6 && (
            <motion.div
              key="step-result"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              {/* Primary Estimated Range */}
              <div className="p-8 sm:p-12 bg-[#F8F7F4] border border-[#1A1A18]/15 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A18]/10 pb-6">
                  <div>
                    <span className="font-tech text-xs tracking-[0.25em] text-[#8A8780] uppercase block mb-1">
                      Your Estimated Project
                    </span>
                    <h3 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light tracking-tight">
                      {estimate.formattedRange}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={handleModifySelections}
                    className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-[#66625B] hover:text-[#1A1A18] border border-[#1A1A18]/20 px-4 py-2.5 transition-colors cursor-pointer self-start sm:self-auto min-h-[40px]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Modify Estimate</span>
                  </button>
                </div>

                {/* Configuration Breakdown Badges */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] bg-[#ECE8E1] px-3 py-1.5 border border-[#1A1A18]/10">
                    {estimate.bhkLabel}
                  </span>
                  <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] bg-[#ECE8E1] px-3 py-1.5 border border-[#1A1A18]/10">
                    {estimate.areaLabel}
                  </span>
                  <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] bg-[#ECE8E1] px-3 py-1.5 border border-[#1A1A18]/10">
                    {estimate.roomsCount} {estimate.roomsCount === 1 ? 'Space' : 'Spaces'}
                  </span>
                  <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] bg-[#ECE8E1] px-3 py-1.5 border border-[#1A1A18]/10">
                    {estimate.packageName}
                  </span>
                  {selections.location && (
                    <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] bg-[#ECE8E1] px-3 py-1.5 border border-[#1A1A18]/10">
                      Location: {selections.location}
                    </span>
                  )}
                </div>

                {/* Required Disclaimer */}
                <p className="font-sans-clean text-xs text-[#66625B] leading-relaxed pt-2">
                  {pricingConfig.disclaimer}
                </p>

                {/* Primary Action Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleDiscussProjectClick}
                    className="group inline-flex items-center justify-center gap-3 font-tech text-xs uppercase tracking-[0.2em] bg-[#1A1A18] text-[#F8F7F4] px-8 py-4 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px] w-full sm:w-auto"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Optional Lead Capture Form */}
              <div className="p-6 sm:p-8 bg-[#ECE8E1]/60 border border-[#1A1A18]/10 max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#8A8780]" />
                  <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] font-semibold">
                    Want a more accurate estimate?
                  </span>
                </div>
                <p className="font-sans-clean text-xs text-[#504D47] mb-6 leading-relaxed">
                  Share your contact coordinates. We will review your selections against structural feasibility and email a personalized breakdown.
                </p>

                {leadSubmitted ? (
                  <div className="p-4 bg-[#F8F7F4] border border-[#1A1A18]/15 flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#1A1A18] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-tech text-xs uppercase tracking-wider text-[#1A1A18] font-semibold block mb-1">
                        Estimate Summary Dispatched
                      </span>
                      <p className="font-sans-clean text-xs text-[#504D47]">
                        Thank you, {leadForm.name}. A spatial summary has been noted. Our team will review your parameters and follow up at {leadForm.email}.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label
                          htmlFor="calc-lead-name"
                          className="font-tech text-[10px] uppercase tracking-wider text-[#66625B] block mb-1"
                        >
                          Name *
                        </label>
                        <input
                          id="calc-lead-name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={leadForm.name}
                          onChange={(e) =>
                            setLeadForm((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="w-full bg-[#F8F7F4] border border-[#1A1A18]/20 px-3 py-2 font-sans-clean text-xs text-[#1A1A18] placeholder-[#A09D96] focus:border-[#1A1A18] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="calc-lead-email"
                          className="font-tech text-[10px] uppercase tracking-wider text-[#66625B] block mb-1"
                        >
                          Email *
                        </label>
                        <input
                          id="calc-lead-email"
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={leadForm.email}
                          onChange={(e) =>
                            setLeadForm((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className="w-full bg-[#F8F7F4] border border-[#1A1A18]/20 px-3 py-2 font-sans-clean text-xs text-[#1A1A18] placeholder-[#A09D96] focus:border-[#1A1A18] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="calc-lead-phone"
                          className="font-tech text-[10px] uppercase tracking-wider text-[#66625B] block mb-1"
                        >
                          Phone (Optional)
                        </label>
                        <input
                          id="calc-lead-phone"
                          type="tel"
                          placeholder="+41 / +45 / +91..."
                          value={leadForm.phone}
                          onChange={(e) =>
                            setLeadForm((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full bg-[#F8F7F4] border border-[#1A1A18]/20 px-3 py-2 font-sans-clean text-xs text-[#1A1A18] placeholder-[#A09D96] focus:border-[#1A1A18] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-[0.18em] bg-[#1A1A18] text-[#F8F7F4] px-6 py-3 hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send My Estimate</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
