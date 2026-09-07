import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <p className="section-label">01 / ABOUT</p>
        <h1 className={styles.sectionTitle}>송승준</h1>
        <p className={styles.introduction}>
          안정적인 데이터 흐름과 효율적인 API 설계를 고민하는 백엔드 개발자입니다.
          Spring Boot와 JPA를 기반으로 도메인 API를 구현하고, 문제 상황에서는
          저장·캐시·메시지·배포 상태를 나누어 원인을 찾습니다.
        </p>
        <dl className={styles.profileDetails}>
          <div>
            <dt>학력</dt>
            <dd>
              00대학교 <span>컴퓨터공학과</span>
            </dd>
          </div>
          <div>
            <dt>자격사항</dt>
            <dd>정보처리기사 · SQLD</dd>
          </div>
        </dl>
      </div>
      <aside className={styles.profile} aria-label="프로필 이미지 영역">
        <span>PROFILE IMAGE</span>
        <p>사진 추가 예정</p>
      </aside>
    </section>
  );
}
