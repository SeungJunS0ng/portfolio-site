import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "monitoring-dashboard",
    title: "산업 장비 통합 모니터링 대시보드",
    badge: "Backend",
    description:
      "산업 장비의 metadata와 telemetry를 수집해 실시간 상태와 센서 데이터를 대시보드에 반영하는 서비스입니다.",
    period: "2026. 03 — 2026. 06",
    role: "Spring Boot 도메인 API · MQTT 수신 · AWS 배포",
    stack: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Redis", "MQTT"],
    link: "https://github.com/SeungJunS0ng/DashBoard/tree/develop",
    highlights: [
      "장비·센서·대시보드·위젯 CRUD 및 검색 API 구현",
      "metadata upsert와 telemetry 이력 저장을 분리한 메시지 처리",
      "Redis 최신 snapshot 캐싱과 WebSocket 실시간 이벤트 전달",
    ],
  },
  {
    id: "battery-insight",
    title: "Battery Insight",
    badge: "Android",
    description:
      "디바이스 배터리 데이터를 수집하고 AI 분석 서버의 SOH 결과를 시각화하는 Android 기반 IoT 서비스입니다.",
    period: "2026. 03 — 2026. 06",
    role: "데이터 수집 · MQTT/HTTP 통신 · UI 상태 관리",
    stack: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "AWS IoT MQTT"],
    link: "https://github.com/SeungJunS0ng",
    highlights: [
      "BatteryManager 기반 battery telemetry payload 생성",
      "MQTT 실시간 전송과 HTTP 조회 fallback 구성",
      "Room migration과 백그라운드 수집 종료 문제 해결",
    ],
  },
];
