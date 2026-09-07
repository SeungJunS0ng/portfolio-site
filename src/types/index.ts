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
  isPlaceholder?: boolean;
};

export type Certification = {
  name: string;
  organization: string;
  acquiredAt: string;
  isPlaceholder?: boolean;
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

export type ArchiveStatus = "resolved" | "unresolved";

export type ArchivePost = {
  id: string;
  title: string;
  content: string;
  code_language: string;
  code: string;
  tags: string[];
  status: ArchiveStatus;
  created_at: string;
  updated_at?: string;
};

export type ArchiveComment = {
  id: string;
  post_id: string;
  author_name: string;
  content: string;
  created_at: string;
  updated_at?: string;
};

export type ArchivePostInput = Pick<
  ArchivePost,
  "title" | "content" | "code_language" | "code" | "tags"
>;
