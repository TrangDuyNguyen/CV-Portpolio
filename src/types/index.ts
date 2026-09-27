export interface StatItem {
  value: string;
  label: string;
  desc: string;
  iconName: 'download' | 'shield' | 'check-circle' | 'zap';
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

export interface ScreenshotItem {
  id: string;
  title: string;
  category: 'all' | 'ai' | 'genui' | 'features' | 'widgets';
  image: string;
  tag: string;
  description: string;
  techSpecs: string[];
}

export interface CareerItem {
  period: string;
  role: string;
  company: string;
  project?: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    isKey?: boolean;
  }[];
}
