export interface StatItem {
  value: string;
  label: string;
  desc: string;
  iconName: 'download' | 'zap' | 'boxes' | 'bot' | 'shield' | 'check-circle';
}

export interface AstroPillar {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  metricBadge: string;
}

export type ScreenshotCategory = 'all' | 'ai' | 'genui' | 'cockpit' | 'features' | 'widgets';

export interface ScreenshotItem {
  id: string;
  title: string;
  category: ScreenshotCategory;
  image: string;
  tag: string;
  description: string;
  techSpecs: string[];
}

export interface SubProjectItem {
  name: string;
  category: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface CareerItem {
  period: string;
  role: string;
  company: string;
  project?: string;
  type: string;
  summary: string;
  achievements: string[];
  subProjects?: SubProjectItem[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isKey?: boolean;
  }[];
}

export interface AstroFeature {
  id: string;
  number: string;
  iconName: string;
  title: string;
  tag: string;
  naturalDescription: string;
  badge?: string;
}
