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
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  image?: string;
};

export type NavigationItem = {
  id: string;
  label: string;
};
