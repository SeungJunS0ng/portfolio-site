import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    period: "2026. 09 — 현재",
    role: "FleaFlea — 친구·지인 기반 물품 거래 서비스",
    company: "Backend Developer",
    description:
      "도감·마켓·채팅 API와 WebSocket 기반 1:1 채팅을 개발했습니다. Redis 분산 락으로 동시 수정 시 변경 유실을 방지하고, Pub/Sub로 서버 간 채팅 이벤트를 전달했습니다. 외부 k6 테스트로 데이터 정합성과 응답 시간을 함께 검증했습니다.",
    projectId: "fleaflea",
  },
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
];
