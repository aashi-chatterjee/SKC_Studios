export interface PageSEO {
  title: string;
  description: string;
  image?: string;
  canonicalPath: string;
  type?: 'website' | 'article';
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85';
const STUDIO_NAME = 'SKC STUDIOS';

export function setPageSEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  canonicalPath,
  type = 'website',
}: PageSEO): void {
  if (typeof document === 'undefined') return;

  // 1. Page Title
  document.title = title;

  // 2. Canonical URL
  let origin = 'https://skcstudios.com';
  try {
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      origin = window.location.origin;
    }
  } catch {
    origin = 'https://skcstudios.com';
  }
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${origin}${cleanPath === '/' ? '' : cleanPath}`;

  // Helper to update or create <meta> elements
  const updateMeta = (selector: string, attr: string, value: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, value);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper to update or create <link> elements
  const updateLink = (rel: string, href: string) => {
    let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  };

  // Standard Meta
  updateMeta('meta[name="description"]', 'name', 'description', description);
  updateLink('canonical', canonicalUrl);

  // Open Graph
  updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
  updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
  updateMeta('meta[property="og:type"]', 'property', 'og:type', type);
  updateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  updateMeta('meta[property="og:image"]', 'property', 'og:image', image);
  updateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', STUDIO_NAME);

  // Twitter Card
  updateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  updateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
}
