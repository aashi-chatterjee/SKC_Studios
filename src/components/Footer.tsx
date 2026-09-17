import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
  onNavigateHome: () => void;
  onNavigateWork: () => void;
  onNavigateStudio: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onNavigateHome,
  onNavigateWork,
  onNavigateStudio,
  onNavigateServices,
  onNavigateContact,
}) => {
  return (
    <footer className="border-t border-[#1A1A18]/10 bg-[#F8F7F4] py-16 sm:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Studio Name & Tagline */}
          <div className="md:col-span-4 space-y-3">
            <button
              onClick={onNavigateHome}
              className="font-editorial text-2xl text-[#1A1A18] tracking-tight font-normal block text-left"
            >
              SKC STUDIOS
            </button>
            <p className="font-sans-clean text-xs text-[#7A7670] leading-relaxed max-w-xs">
              Architectural interior design studio rooted in space, proportion, and structural clarity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-tech text-[11px] uppercase tracking-widest text-[#8A8780] block mb-4">
              Navigation
            </span>
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={onNavigateWork}
                className="text-left text-xs font-sans-clean text-[#4A4742] hover:text-[#1A1A18] transition-colors cursor-pointer"
              >
                Work
              </button>
              <button
                onClick={onNavigateStudio}
                className="text-left text-xs font-sans-clean text-[#4A4742] hover:text-[#1A1A18] transition-colors cursor-pointer"
              >
                Studio
              </button>
              <button
                onClick={onNavigateServices}
                className="text-left text-xs font-sans-clean text-[#4A4742] hover:text-[#1A1A18] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={onNavigateContact}
                className="text-left text-xs font-sans-clean text-[#4A4742] hover:text-[#1A1A18] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Studio Locations */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-tech text-[11px] uppercase tracking-widest text-[#8A8780] block mb-4">
              Locations
            </span>
            <div className="space-y-4 text-xs font-sans-clean text-[#4A4742]">
              <div>
                <p className="font-medium text-[#1A1A18]">Kolkata</p>
                <p className="text-[#7A7670]">West Bengal, India</p>
              </div>
              {/* <div>
                <p className="font-medium text-[#1A1A18]">Copenhagen</p>
                <p className="text-[#7A7670]">Bredgade 19, 1260</p>
              </div> */}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-tech text-[11px] uppercase tracking-widest text-[#8A8780] block mb-4">
              Inquiries
            </span>
            <div className="flex flex-col space-y-2 text-xs font-tech text-[#4A4742]">
              <a
                href="mailto:inquiries@skcstudios.com"
                className="hover:text-[#1A1A18] transition-colors"
              >
                inquiries@skcstudios.com
              </a>
              <span className="text-[#7A7670]">+91 90518 51051</span>
              <button
                onClick={onOpenContact}
                className="text-left uppercase tracking-wider text-[#1A1A18] border-b border-[#1A1A18] pb-0.5 pt-2 hover:opacity-75 transition-opacity inline-block w-fit cursor-pointer"
              >
                Start a Brief →
              </button>
            </div>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-12 border-t border-[#1A1A18]/8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8780] font-tech gap-4">
          <p>© {new Date().getFullYear()} SKC STUDIOS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#1A1A18] transition-colors">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#1A1A18] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
