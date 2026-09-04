import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    period: "2026. 03 — 06",
    role: "산업 장비 통합 모니터링 대시보드",
    company: "Backend Developer",
    description:
      "실시간 telemetry 수집부터 저장, 캐시, WebSocket 전달, AWS 배포까지 데이터 흐름을 설계했습니다.",
    projectId: "monitoring-dashboard",
  },
  {
    period: "2026. 03 — 06",
    role: "Battery Insight - 배터리 SOH 진단 앱",
    company: "Android Developer",
    description:
      "디바이스 데이터를 수집하고 MQTT와 HTTP를 통해 분석 결과를 전달·조회하는 흐름을 구현했습니다.",
    projectId: "battery-insight",
  },
  {
    period: "2025. 00 — 00",
    role: "백엔드 개발 스터디",
    company: "팀 프로젝트 · 예시 데이터",
    description:
      "REST API 설계와 데이터베이스 모델링을 함께 학습하며, 코드 리뷰를 통해 구현 방식을 개선했습니다.",
    isPlaceholder: true,
  },
  {
    period: "2024. 00 — 00",
    role: "교내 해커톤",
    company: "Backend Developer · 예시 데이터",
    description:
      "제한된 시간 안에 팀원과 기능 우선순위를 정하고, 서비스 API와 데이터 저장 기능을 구현했습니다.",
    isPlaceholder: true,
  },
];
