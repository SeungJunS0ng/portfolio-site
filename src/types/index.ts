export type Skill = {
  name: string;
  category: string;
  level: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  projectId?: string;
};

export type Project = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  period: string;
  role: string;
  stack: string[];
  link: string;
  demo?: string;
  highlights: string[];
  image?: string;
};

export type NavigationItem = {
  id: string;
  label: string;
};
