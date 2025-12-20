import { LucideIcon } from 'lucide-react';

export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  seoTitle: string;
  seoDescription: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  stars: number;
}