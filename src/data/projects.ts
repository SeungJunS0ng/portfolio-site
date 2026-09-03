import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "mobility-webapp",
    title: "Mobility WebApp",
    badge: "DevCamp",
    description: "이동 경험을 더 직관적으로 만드는 반응형 웹 서비스입니다.",
    period: "2024",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "CSS"],
    link: "https://github.com/",
    demo: "https://github.com/",
    highlights: ["반응형 화면 설계", "재사용 가능한 컴포넌트 구성"],
  },
  {
    id: "portfolio-archive",
    title: "Portfolio Archive",
    description:
      "작업 과정과 문제 해결의 맥락을 한곳에 기록하는 아카이브입니다.",
    period: "2023 — 2024",
    role: "Frontend Developer",
    stack: ["Vite", "React", "Design System"],
    link: "https://github.com/",
    demo: "https://github.com/",
    highlights: ["Markdown 기반 기록", "읽기 쉬운 정보 구조"],
  },
];
