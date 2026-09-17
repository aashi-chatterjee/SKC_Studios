import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior',
    location: '',
    approximateArea: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residential Interior',
      location: '',
      approximateArea: '',
      timeline: '',
      message: '',
    });
  };

  return (
    <div className="pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-36 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Large Statement with Generous Whitespace */}
      <div className="mb-16 sm:mb-24 lg:mb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-tech text-xs tracking-[0.22em] text-[#66625B] uppercase block mb-4 sm:mb-6">
            Inquiries / Commissions
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1A1A18] font-light tracking-tight leading-[1.05] mb-6">
            Let's talk about the space.
          </h1>
          <p className="font-sans-clean text-sm sm:text-base text-[#504D47] leading-relaxed max-w-xl">
            We welcome conversations for private homes, workspace environments, and sensitive renovations worldwide.
          </p>
        </motion.div>
      </div>

      {/* 2. Grid: Form & Studio Coordinates with Significant Negative Space */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Form Component */}
        <div className="lg:col-span-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="py-16 sm:py-20 px-6 sm:px-12 bg-[#F2EFE9] space-y-6 text-center max-w-xl"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#1A1A18] text-[#F8F7F4] flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1A1A18] font-light">
                Inquiry Received
              </h2>
              <p className="text-sm text-[#504D47] font-sans-clean leading-relaxed max-w-md mx-auto">
                Thank you for considering the studio. We review every brief carefully and will respond within two business days.
              </p>
              <button
                onClick={handleReset}
                className="font-tech text-xs uppercase tracking-widest text-[#1A1A18] border-b border-[#1A1A18] pb-1 pt-4 cursor-pointer min-h-[44px] inline-flex items-center"
              >
                Send Another Note
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 font-sans-clean max-w-2xl">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="janedoe@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 12345 06789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-project-type" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                    Project Type *
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors cursor-pointer min-h-[44px]"
                  >
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Complete Home Architecture">Complete Home Architecture</option>
                    <option value="Commercial / Studio Workplace">Commercial / Studio Workplace</option>
                    <option value="Sensitive Renovation">Sensitive Renovation</option>
                    <option value="Space Planning & Feasibility">Space Planning & Feasibility</option>
                    <option value="Design Consultation">Design Consultation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Location & Approximate Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-2">
                  <label htmlFor="contact-location" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                    Location *
                  </label>
                  <input
                    id="contact-location"
                    required
                    type="text"
                    placeholder="Kolkata, Mumbai, or City"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-area" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                    Approximate Area
                  </label>
                  <input
                    id="contact-area"
                    type="text"
                    placeholder="e.g. 280 m²"
                    value={formData.approximateArea}
                    onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              {/* Row 4: Timeline (Optional) */}
              <div className="space-y-2">
                <label htmlFor="contact-timeline" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                  Anticipated Timeline (Optional)
                </label>
                <input
                  id="contact-timeline"
                  type="text"
                  placeholder="e.g. Q3 2026 or Initial Planning Phase"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 sm:py-3.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                />
              </div>

              {/* Row 5: Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                  About the Space & Requirements *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell us about the property, current condition, structural intentions, and everyday routines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1A18]/20 py-3 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-4 bg-[#1A1A18] text-[#F8F7F4] px-8 py-4 font-tech text-xs uppercase tracking-[0.2em] hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px] w-full sm:w-auto"
                >
                  <span>Begin the Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Restrained Studio Details */}
        <div className="lg:col-span-4 space-y-8 sm:space-y-12 lg:pt-2">
          {/* Coordinates */}
          <div className="space-y-3 sm:space-y-4">
            <span className="font-tech text-xs uppercase tracking-[0.22em] text-[#66625B] block">
              Studio Coordinates
            </span>
            <div className="space-y-2 font-sans-clean text-sm text-[#1A1A18]">
              <p>
                <a href="mailto:inquiries@skcstudios.com" className="hover:opacity-75 transition-opacity underline-offset-4 focus-visible:underline">
                  skcstudios@gmail.com
                </a>
              </p>
              <p className="font-tech text-xs text-[#504D47]">+91 90518 51051</p>
            </div>
          </div>

          {/* Locations */}
          {/* <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-[#1A1A18]/8">
            <span className="font-tech text-xs uppercase tracking-[0.22em] text-[#66625B] block">
              Offices
            </span>
            <div className="space-y-4 font-sans-clean text-xs text-[#504D47] leading-relaxed">
              <div>
                <p className="font-medium text-[#1A1A18]">Zurich</p>
                <p>Seefeldstrasse 42</p>
                <p>8008 Zürich, Switzerland</p>
              </div>
              <div>
                <p className="font-medium text-[#1A1A18]">Copenhagen</p>
                <p>Bredgade 19</p>
                <p>1260 København, Denmark</p>
              </div>
            </div>
          </div> */}

          {/* Channels */}
          <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-[#1A1A18]/8">
            <span className="font-tech text-xs uppercase tracking-[0.22em] text-[#66625B] block">
              Channels
            </span>
            <div className="flex flex-col space-y-2 font-tech text-xs text-[#1A1A18]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 transition-opacity py-1 inline-block"
              >
                Instagram / @skc.studios
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 transition-opacity py-1 inline-block"
              >
                LinkedIn / SKC STUDIOS
              </a>
            </div>
          </div>

          {/* Quiet Note */}
          <div className="pt-6 sm:pt-8 border-t border-[#1A1A18]/8 font-sans-clean text-xs text-[#66625B] leading-relaxed">
            We operate with a deliberately small studio roster, taking on a selective number of private commissions each season to maintain direct principal involvement.
          </div>
        </div>
      </div>
    </div>
  );
};
