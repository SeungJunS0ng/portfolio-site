import styles from "./About.module.css";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <p className="section-label">01 / ABOUT</p>
        <h1 className={styles.sectionTitle}>ABOUT ME</h1>
        <div className={styles.introduction}>
          <p className={styles.introLead}>
            안녕하세요, 백엔드 개발자 송승준입니다.
          </p>
          <p className={styles.introDescription}>
            Spring Boot와 JPA를 기반으로 데이터 흐름을 설계하고,<br></br>
            <strong> 서비스가 안정적으로 운영되는 방식</strong>을 고민하고
            공부하고 있습니다.
          </p>
        </div>
        <dl className={styles.profileDetails}>
          <div>
            <dt>학력</dt>
            <dd>00대학교 · 컴퓨터공학과</dd>
          </div>
          <div>
            <dt>자격사항</dt>
            <dd>정보처리기사 · SQLD</dd>
          </div>
          <div className={styles.contactDetails}>
            <dt>Phone &amp; Email &amp; GitHub</dt>
            <dd>
              <a href="tel:01062410923">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" />
                </svg>
                010-6241-0923
              </a>
              <a href="mailto:john091122@naver.com">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
                john091122@naver.com
              </a>
              <a href="https://github.com/SeungJunS0ng" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                github.com/SeungJunS0ng
              </a>
            </dd>
          </div>
        </dl>
        <aside className={styles.bootcamp} aria-label="현대오토에버 부트캠프 참여 정보">
          <div className={styles.bootcampTop}>
            <img src="/images/hyundai-autoever.png" alt="Hyundai AutoEver" />
          </div>
          <p className={styles.bootcampLabel}>HYUNDAI AUTOEVER</p>
          <h3>부트캠프 참여 중</h3>
          <time dateTime="2026-07-06/2026-12-28">
            2026. 07. 06 — 2026. 12. 28
          </time>
        </aside>
      </div>
      <div className={styles.profileColumn}>
        <aside className={styles.profile} aria-label="프로필 이미지 영역">
          <img src="/images/profile-cat.jpg" alt="나무 아래에 있는 고양이" decoding="async" />
        </aside>
        <Link to="/archive" className={styles.archiveLink}>
          Archive · 개발 기록 보러가기 <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
