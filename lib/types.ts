import { LucideIcon } from 'lucide-react';

export interface Chapters {
  id: string;
  name: string;
  description: string;
  icon: string;
  instagram: string;
  facebook: string
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}
