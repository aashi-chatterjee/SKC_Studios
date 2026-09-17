import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { SelectedWork } from './components/SelectedWork';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { PriceCalculator } from './components/PriceCalculator';
import { FAQ } from './components/FAQ';
import { FinalStatement } from './components/FinalStatement';
import { Footer } from './components/Footer';
import { ContactDrawer } from './components/ContactDrawer';
import { ArchitecturalCursor } from './components/ArchitecturalCursor';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { StudioPage } from './pages/StudioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { setPageSEO } from './utils/seo';
import { getProjectBySlug, HERO_IMAGE, PROJECTS } from './data/projects';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'work' | 'project' | 'studio' | 'services' | 'contact' | '404'>('home');
  const [activeProjectSlug, setActiveProjectSlug] = useState<string>('');
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState<string>('');
  const prefersReducedMotion = useReducedMotion();

  const handleOpenEstimateInquiry = (prefill?: unknown) => {
    if (typeof prefill === 'string' && prefill.trim().length > 0) {
      setContactPrefill(prefill);
    } else {
      setContactPrefill('');
    }
    setContactOpen(true);
  };

  // Sync URL path and hash state for clean browser back/forward and direct links
  useEffect(() => {
    const handlePopState = () => {
      let path = '/';
      let hash = '';
      try {
        path = window.location.pathname;
        hash = window.location.hash;
      } catch {
        path = '/';
        hash = '';
      }

      // Extract raw route from path or hash fallback
      let raw = path;
      if ((raw === '' || raw === '/') && hash.startsWith('#/')) {
        raw = hash.replace('#', '');
      }

      // Normalize trailing slashes
      if (raw.length > 1 && raw.endsWith('/')) {
        raw = raw.slice(0, -1);
      }

      if (raw === '' || raw === '/') {
        setCurrentView('home');
        return;
      }

      if (raw === '/work') {
        setCurrentView('work');
        return;
      }

      if (raw.startsWith('/work/')) {
        const slug = raw.replace('/work/', '');
        const project = getProjectBySlug(slug);
        if (project) {
          setActiveProjectSlug(slug);
          setCurrentView('project');
        } else {
          setCurrentView('404');
        }
        return;
      }

      if (raw === '/studio') {
        setCurrentView('studio');
        return;
      }

      if (raw === '/services') {
        setCurrentView('services');
        return;
      }

      if (raw === '/contact') {
        setCurrentView('contact');
        return;
      }

      // Unmatched route -> 404
      setCurrentView('404');
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize dynamic Page SEO and Open Graph tags across views
  useEffect(() => {
    switch (currentView) {
      case 'home':
        setPageSEO({
          title: 'SKC STUDIOS — Architectural Interiors & Spatial Design',
          description:
            'An architectural interior design practice rooted in space, proportion, and structural clarity. Contemplative private residences, workplace environments, and bespoke millwork.',
          canonicalPath: '/',
          image: HERO_IMAGE,
        });
        break;

      case 'work':
        setPageSEO({
          title: 'Selected Works — SKC STUDIOS',
          description:
            'An archive of architectural interior commissions across Copenhagen, Zurich, Kolkata, Berlin, and Kyoto. Concrete, timber, limestone, and proportioned natural daylight.',
          canonicalPath: '/work',
          image: PROJECTS[0]?.heroImage || PROJECTS[0]?.image || HERO_IMAGE,
        });
        break;

      case 'project': {
        const project = getProjectBySlug(activeProjectSlug);
        if (project) {
          setPageSEO({
            title: `${project.title} — SKC STUDIOS`,
            description:
              project.shortDescription ||
              `${project.title} architectural interior commission in ${project.location}.`,
            canonicalPath: `/work/${project.slug}`,
            image: project.heroImage || project.image,
            type: 'article',
          });
        } else {
          setPageSEO({
            title: 'Space Not Found — SKC STUDIOS',
            description:
              "Looks like we've entered the wrong space. The requested architectural room or project document cannot be found in our archive.",
            canonicalPath: '/404',
          });
        }
        break;
      }

      case 'studio':
        setPageSEO({
          title: 'Studio & Philosophy — SKC STUDIOS',
          description:
            'The architectural perspective of SKC STUDIOS. Bridging structural engineering discipline with warm tactile minimalism, monolithic materials, and spatial choreography.',
          canonicalPath: '/studio',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85',
        });
        break;

      case 'services':
        setPageSEO({
          title: 'Services & Capabilities — SKC STUDIOS',
          description:
            'Comprehensive interior architectural scope from spatial planning and bespoke millwork engineering to on-site coordination and turn-key delivery.',
          canonicalPath: '/services',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
        });
        break;

      case 'contact':
        setPageSEO({
          title: 'Inquiries & Commissions — SKC STUDIOS',
          description:
            'Initiate a residential interior, architectural renovation, or bespoke commission with SKC STUDIOS. Offices in Zurich and Copenhagen.',
          canonicalPath: '/contact',
          image: HERO_IMAGE,
        });
        break;

      case '404':
        setPageSEO({
          title: 'Space Not Found — SKC STUDIOS',
          description:
            "Looks like we've entered the wrong space. The requested architectural room or document does not exist in our archive.",
          canonicalPath: '/404',
          image: HERO_IMAGE,
        });
        break;
    }
  }, [currentView, activeProjectSlug]);

  const navigateToHome = () => {
    setCurrentView('home');
    try {
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Graceful fallback if restricted in iframe
    }
  };

  const navigateToWork = () => {
    setCurrentView('work');
    try {
      window.history.pushState(null, '', '/work');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Graceful fallback if restricted in iframe
    }
  };

  const navigateToStudio = () => {
    setCurrentView('studio');
    try {
      window.history.pushState(null, '', '/studio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Graceful fallback if restricted in iframe
    }
  };

  const navigateToServices = () => {
    setCurrentView('services');
    try {
      window.history.pushState(null, '', '/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Graceful fallback if restricted in iframe
    }
  };

  const navigateToContact = () => {
    setCurrentView('contact');
    try {
      window.history.pushState(null, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Graceful fallback if restricted in iframe
    }
  };

  const navigateToProject = (slug: string) => {
    const project = getProjectBySlug(slug);
    if (project) {
      setActiveProjectSlug(slug);
      setCurrentView('project');
      try {
        window.history.pushState(null, '', `/work/${slug}`);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      } catch {
        // Graceful fallback if restricted in iframe
      }
    } else {
      setCurrentView('404');
      try {
        window.history.pushState(null, '', `/work/${slug}`);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      } catch {
        // Graceful fallback if restricted in iframe
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A18] flex flex-col selection:bg-[#1A1A18] selection:text-[#F8F7F4]">
      {/* Skip to Content for Keyboard & Screen Reader Users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navigation
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateWork={navigateToWork}
        onNavigateStudio={navigateToStudio}
        onNavigateServices={navigateToServices}
        onNavigateContact={navigateToContact}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Route Views with Quiet Page Transitions */}
      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView === 'project' ? `project-${activeProjectSlug}` : currentView}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {currentView === 'home' && (
              <>
                <Hero onExploreWork={navigateToWork} />
                <Intro />
                <SelectedWork
                  onSelectProject={navigateToProject}
                  onViewAllWork={navigateToWork}
                />
                <Philosophy />
                <Services />
                <PriceCalculator onStartProject={handleOpenEstimateInquiry} />
                <FAQ onStartProject={() => handleOpenEstimateInquiry()} />
                <FinalStatement onStartConversation={navigateToContact} />
              </>
            )}

            {currentView === 'work' && (
              <WorkPage onSelectProject={navigateToProject} />
            )}

            {currentView === 'project' && (
              <ProjectDetailPage
                slug={activeProjectSlug}
                onNavigateBack={navigateToWork}
                onNavigateProject={navigateToProject}
              />
            )}

            {currentView === 'studio' && (
              <StudioPage onStartProject={navigateToContact} />
            )}

            {currentView === 'services' && (
              <ServicesPage onStartProject={() => handleOpenEstimateInquiry()} />
            )}

            {currentView === 'contact' && (
              <ContactPage />
            )}

            {currentView === '404' && (
              <NotFoundPage
                onNavigateHome={navigateToHome}
                onNavigateWork={navigateToWork}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onNavigateHome={navigateToHome}
        onNavigateWork={navigateToWork}
        onNavigateStudio={navigateToStudio}
        onNavigateServices={navigateToServices}
        onNavigateContact={navigateToContact}
      />

      {/* Project Inquiry Drawer */}
      <ContactDrawer
        isOpen={contactOpen}
        onClose={() => {
          setContactOpen(false);
          setContactPrefill('');
        }}
        initialMessage={contactPrefill}
      />

      {/* Subtle Architectural Cursor (Desktop Fine Pointer Only) */}
      <ArchitecturalCursor />
    </div>
  );
}
