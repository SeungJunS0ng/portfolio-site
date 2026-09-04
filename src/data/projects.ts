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
  {
    id: "team-todo-api-example",
    title: "Team Todo API",
    badge: "예시 / Backend",
    description:
      "팀 단위 할 일 관리 기능을 제공하는 REST API 서비스 예시입니다.",
    period: "2025. 00 — 00",
    role: "API 설계 · 인증 인가 · 데이터 모델링",
    stack: ["Java", "Spring Boot", "JPA", "MySQL"],
    link: "https://github.com/example/team-todo-api",
    highlights: [
      "회원·팀·할 일 도메인별 CRUD API 설계",
      "JWT 기반 인증과 역할별 접근 권한 처리",
      "페이지네이션을 적용한 할 일 목록 조회",
    ],
  },
  {
    id: "reservation-service-example",
    title: "Reservation Service",
    badge: "예시 / Backend",
    description:
      "예약 가능 시간을 조회하고 예약 상태를 관리하는 서비스 예시입니다.",
    period: "2025. 00 — 00",
    role: "동시성 처리 · 예약 API 구현",
    stack: ["Java", "Spring Boot", "Redis", "PostgreSQL"],
    link: "https://github.com/example/reservation-service",
    highlights: [
      "날짜별 예약 가능 시간 조회 API 구성",
      "중복 예약을 방지하기 위한 락 처리 적용",
      "Redis를 활용한 자주 조회되는 일정 캐싱",
    ],
  },
  {
    id: "community-api-example",
    title: "Community API",
    badge: "예시 / Backend",
    description:
      "게시글과 댓글을 작성하고 검색할 수 있는 커뮤니티 API 예시입니다.",
    period: "2024. 00 — 00",
    role: "도메인 설계 · 검색 API · 테스트 작성",
    stack: ["Java", "Spring Boot", "JPA", "JUnit"],
    link: "https://github.com/example/community-api",
    highlights: [
      "게시글·댓글·좋아요 도메인 관계 설계",
      "조건별 게시글 검색과 정렬 기능 구현",
      "서비스 계층 단위 테스트로 주요 흐름 검증",
    ],
  },
];
