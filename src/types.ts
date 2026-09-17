export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  heroImage?: string;
  shortDescription?: string;
  secondaryComposition?: {
    image1: string;
    image2: string;
  };
  galleryImages?: {
    url: string;
    aspect: 'wide' | 'portrait' | 'standard';
  }[];
  layoutOnArchive: 'large-horizontal' | 'portrait-offset' | 'full-width' | 'duo-composition' | 'centered-horizontal';
  materials?: string;
  dimensions?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
