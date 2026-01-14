import { LucideIcon } from 'lucide-react';

export interface Chapters {
  id: string;
  name: string;
  description: string;
  icon: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  color: string;
}

export interface Project {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  className: string;
  type: string;
}