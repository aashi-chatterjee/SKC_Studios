import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  initialMessage,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential Interior',
    location: '',
    timeline: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen && typeof initialMessage === 'string' && initialMessage.trim().length > 0) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [isOpen, initialMessage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      projectType: 'Residential Interior',
      location: '',
      timeline: '',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A18]/60 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-screen max-w-lg bg-[#F8F7F4] shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 sm:p-10 border-b border-[#1A1A18]/10 flex items-center justify-between">
              <div>
                <span className="font-tech text-xs uppercase tracking-widest text-[#66625B] block mb-1">
                  Commission Inquiries
                </span>
                <h3 id="drawer-title" className="font-editorial text-2xl sm:text-3xl text-[#1A1A18] font-normal">
                  Start a Project
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-11 h-11 flex items-center justify-center text-[#504D47] hover:text-[#1A1A18] transition-colors cursor-pointer rounded-full hover:bg-[#1A1A18]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A18]"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1">
              {submitted ? (
                <div className="py-16 space-y-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#1A1A18] text-[#F8F7F4] flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-editorial text-2xl sm:text-3xl text-[#1A1A18]">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-[#504D47] font-sans-clean max-w-xs mx-auto leading-relaxed">
                    Thank you. We review all architectural proposals carefully and will respond within two business days.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 font-tech text-xs uppercase tracking-widest text-[#1A1A18] border-b border-[#1A1A18] pb-1 cursor-pointer min-h-[44px] inline-flex items-center"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 font-sans-clean">
                  <div className="space-y-2">
                    <label htmlFor="drawer-name" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                      Your Name *
                    </label>
                    <input
                      id="drawer-name"
                      required
                      type="text"
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1A1A18]/20 py-2.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="drawer-email" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                      Email Address *
                    </label>
                    <input
                      id="drawer-email"
                      required
                      type="email"
                      placeholder="e.g. janedoe@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1A1A18]/20 py-2.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="drawer-type" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                      Scope of Work *
                    </label>
                    <select
                      id="drawer-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1A1A18]/20 py-2.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors cursor-pointer min-h-[44px]"
                    >
                      <option value="Residential Interior">Residential Interior</option>
                      <option value="Complete Home Architecture">Complete Home Architecture</option>
                      <option value="Workplace / Atelier">Workplace / Atelier</option>
                      <option value="Sensitive Renovation">Sensitive Renovation</option>
                      <option value="Spatial Consultation">Spatial Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="drawer-location" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                        Location
                      </label>
                      <input
                        id="drawer-location"
                        type="text"
                        placeholder="Mumbai, India"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-transparent border-b border-[#1A1A18]/20 py-2.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="drawer-area" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                        Approx. Area (m²)
                      </label>
                      <input
                        id="drawer-area"
                        type="text"
                        placeholder="e.g. 240 m²"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-transparent border-b border-[#1A1A18]/20 py-2.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="drawer-notes" className="font-tech text-xs uppercase tracking-wider text-[#66625B] block">
                      Project Notes
                    </label>
                    <textarea
                      id="drawer-notes"
                      rows={3}
                      placeholder="Tell us about the property, structural intentions, and spatial aspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1A1A18]/20 py-2.5 text-sm text-[#1A1A18] focus:border-[#1A1A18] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group w-full py-4 bg-[#1A1A18] text-[#F8F7F4] flex items-center justify-center gap-3 font-tech text-xs uppercase tracking-[0.2em] hover:bg-[#33312E] transition-colors cursor-pointer min-h-[44px]"
                    >
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Studio Coordinates */}
            <div className="p-6 sm:p-10 border-t border-[#1A1A18]/10 bg-[#F4F2EE] font-tech text-xs text-[#66625B] space-y-1">
              <p className="text-[#1A1A18] font-medium uppercase tracking-wider">Direct Studio Line</p>
              <p>inquiries@skcstudios.com</p>
              <p>Kolkata · India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
