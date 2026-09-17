import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface NavigationProps {
  onOpenContact: () => void;
  currentView: 'home' | 'work' | 'project' | 'studio' | 'services' | 'contact' | '404';
  onNavigateHome: () => void;
  onNavigateWork: () => void;
  onNavigateStudio: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenContact,
  currentView,
  onNavigateHome,
  onNavigateWork,
  onNavigateStudio,
  onNavigateServices,
  onNavigateContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (target: 'home' | 'work' | 'studio' | 'services' | 'contact') => {
    setMobileMenuOpen(false);
    if (target === 'home') return onNavigateHome();
    if (target === 'work') return onNavigateWork();
    if (target === 'studio') return onNavigateStudio();
    if (target === 'services') return onNavigateServices();
    if (target === 'contact') return onNavigateContact();
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    onOpenContact();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F8F7F4]/95 backdrop-blur-md py-4 sm:py-5 border-b border-[#1A1A18]/6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]'
            : 'bg-transparent py-6 sm:py-8 lg:py-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Studio Wordmark */}
          <button
            onClick={onNavigateHome}
            className="text-left group cursor-pointer focus-visible:outline-none"
            aria-label="SKC STUDIOS Home"
          >
            <span className="font-editorial text-2xl lg:text-[1.7rem] tracking-tight text-[#1A1A18] font-normal block leading-none">
              SKC STUDIOS
            </span>
            <span className="font-tech text-[10px] tracking-[0.22em] text-[#66625B] uppercase mt-1 block">
              Architectural Interiors
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8 lg:space-x-12"
          >
            <button
              onClick={() => handleNavClick('work')}
              className={`text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 cursor-pointer min-h-[44px] flex items-center ${
                currentView === 'work' || currentView === 'project'
                  ? 'text-[#1A1A18] border-b border-[#1A1A18] pb-0.5'
                  : 'text-[#504D47] hover:text-[#1A1A18]'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick('studio')}
              className={`text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 cursor-pointer min-h-[44px] flex items-center ${
                currentView === 'studio'
                  ? 'text-[#1A1A18] border-b border-[#1A1A18] pb-0.5'
                  : 'text-[#504D47] hover:text-[#1A1A18]'
              }`}
            >
              Studio
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 cursor-pointer min-h-[44px] flex items-center ${
                currentView === 'services'
                  ? 'text-[#1A1A18] border-b border-[#1A1A18] pb-0.5'
                  : 'text-[#504D47] hover:text-[#1A1A18]'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 cursor-pointer min-h-[44px] flex items-center ${
                currentView === 'contact'
                  ? 'text-[#1A1A18] border-b border-[#1A1A18] pb-0.5'
                  : 'text-[#504D47] hover:text-[#1A1A18]'
              }`}
            >
              Contact
            </button>

            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.14em] uppercase text-[#1A1A18] pl-6 py-2 border-l border-[#1A1A18]/15 hover:opacity-75 transition-all cursor-pointer min-h-[44px]"
            >
              <span>Inquire</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </nav>

          {/* Mobile Menu Toggle Button (44px min tap target) */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#1A1A18] cursor-pointer rounded-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#F8F7F4] flex flex-col justify-between pt-24 pb-12 px-6 sm:px-10 md:hidden overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-[#1A1A18]/8">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left font-editorial text-xl text-[#1A1A18]"
              >
                SKC STUDIOS
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 text-[#1A1A18] cursor-pointer -mr-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Main Navigation Items: Work, Studio, Services, Contact */}
            <nav
              aria-label="Mobile Navigation Links"
              className="flex flex-col py-8 space-y-4 my-auto"
            >
              <button
                onClick={() => handleNavClick('work')}
                className="group flex items-center justify-between py-3 min-h-[52px] text-left border-b border-[#1A1A18]/6 cursor-pointer"
              >
                <span className="font-editorial text-3xl sm:text-4xl text-[#1A1A18] font-light group-hover:text-[#5A5752] transition-colors">
                  Work
                </span>
                <span className="font-tech text-xs tracking-widest text-[#8A8780] uppercase">
                  01
                </span>
              </button>

              <button
                onClick={() => handleNavClick('studio')}
                className="group flex items-center justify-between py-3 min-h-[52px] text-left border-b border-[#1A1A18]/6 cursor-pointer"
              >
                <span className="font-editorial text-3xl sm:text-4xl text-[#1A1A18] font-light group-hover:text-[#5A5752] transition-colors">
                  Studio
                </span>
                <span className="font-tech text-xs tracking-widest text-[#8A8780] uppercase">
                  02
                </span>
              </button>

              <button
                onClick={() => handleNavClick('services')}
                className="group flex items-center justify-between py-3 min-h-[52px] text-left border-b border-[#1A1A18]/6 cursor-pointer"
              >
                <span className="font-editorial text-3xl sm:text-4xl text-[#1A1A18] font-light group-hover:text-[#5A5752] transition-colors">
                  Services
                </span>
                <span className="font-tech text-xs tracking-widest text-[#8A8780] uppercase">
                  03
                </span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="group flex items-center justify-between py-3 min-h-[52px] text-left border-b border-[#1A1A18]/6 cursor-pointer"
              >
                <span className="font-editorial text-3xl sm:text-4xl text-[#1A1A18] font-light group-hover:text-[#5A5752] transition-colors">
                  Contact
                </span>
                <span className="font-tech text-xs tracking-widest text-[#8A8780] uppercase">
                  04
                </span>
              </button>
            </nav>

            {/* Mobile Footer CTA: Start a Project → */}
            <div className="pt-6 border-t border-[#1A1A18]/10 space-y-6">
              <button
                onClick={handleStartProject}
                className="w-full min-h-[50px] py-4 bg-[#1A1A18] text-[#F8F7F4] text-xs font-tech uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:bg-[#33312E] transition-colors cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-between text-[11px] font-tech text-[#66625B] uppercase tracking-wider">
                <span>Zurich · Copenhagen</span>
                <a
                  href="mailto:inquiries@skcstudios.com"
                  className="hover:text-[#1A1A18] transition-colors"
                >
                  inquiries@skcstudios.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
