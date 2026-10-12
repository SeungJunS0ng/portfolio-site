import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "fleaflea",
    title: "FleaFlea",
    badge: "Backend",
    description:
      "친구·지인과 물건을 판매·나눔·대여·교환하는 팀 프로젝트입니다. 물건을 도감에 등록하고, 초대 링크로 사람들을 모아 플리마켓을 열 수 있습니다.",
    period: "2026. 09 — 현재",
    role: "도감·마켓·채팅 개발 · 동시성 검증 · AWS 배포",
    stack: ["Java", "Spring Boot", "JPA", "QueryDSL", "PostgreSQL", "Redis", "WebSocket", "k6", "AWS"],
    link: "https://github.com/hyundai-autoever-team3/fleaflea-backend",
    demo: "https://fleaflea.app",
    study: "https://github.com/hyundai-autoever-team3/fleaflea-backend/wiki",
    highlights: [
      "도감·마켓 API와 WebSocket 기반 1:1 채팅 구현",
      "마켓 변경 작업에 Redis 분산 락을 적용해 동시 수정 시 변경 유실 방지",
      "Redis Pub/Sub로 서로 다른 서버에 연결된 사용자에게 채팅 이벤트 전달",
      "별도 GCP 서버에서 k6 테스트로 데이터 정합성·응답 지연·처리량 비교",
    ],
    result:
      "동일 마켓 동시 수정 100쌍 테스트에서 변경 유실이 76건에서 0건으로 감소했습니다. 초당 100요청 조건의 p95 응답 시간은 약 75ms에서 124ms로 증가해, 정합성을 확보하는 데 드는 대기 비용도 확인했습니다.",
    ongoing: "GCP·Cloud Storage 이전 및 Blue/Green 배포 구성",
  },
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
