import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Developer Portfolio",
    badge: "1차 프로젝트",
    description:
      "소개부터 문제 해결 기록까지, 개발 과정과 역량을 한 화면의 흐름으로 전달하는 반응형 포트폴리오입니다.",
    period: "2026. 09. 02 — 09. 09",
    role: "기획 · 디자인 · 프론트엔드 개발",
    stack: ["React", "TypeScript", "CSS Modules", "Vercel"],
    link: "https://github.com/",
    demo: "https://github.com/",
    highlights: [
      "IntersectionObserver 기반 현재 섹션 네비게이션",
      "데이터와 UI를 분리한 재사용 가능한 컴포넌트 구조",
      "데스크톱과 모바일 화면을 고려한 반응형 레이아웃",
    ],
  },
  {
    id: "problem-solving-archive",
    title: "Problem Solving Archive",
    badge: "차별화 기능",
    description:
      "문제의 원인, 해결 과정, 코드를 Markdown으로 기록하고 상태별로 다시 찾아볼 수 있는 아카이브입니다.",
    period: "2026. 09",
    role: "기능 기획 · 상태 관리 · UI 구현",
    stack: ["React", "TypeScript", "React Markdown", "Supabase"],
    link: "https://github.com/",
    demo: "https://github.com/",
    highlights: [
      "본문과 코드 블록을 Markdown 문자열로 조합",
      "미해결·해결완료 상태에 따른 조건부 렌더링",
      "Supabase 저장 구조를 고려한 게시글 데이터 모델링",
    ],
  },
];
