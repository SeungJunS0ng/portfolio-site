import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <p className="section-label">01 / ABOUT</p>
        <h1 className={styles.sectionTitle}>ABOUT ME</h1>
        <div className={styles.introduction}>
          <p className={styles.introLead}>
            문제를 구조화하고, 안정적으로 동작하는 서비스를 만듭니다.
          </p>
          <p className={styles.introDescription}>
            Spring Boot와 JPA를 기반으로 데이터 흐름을 설계하는 백엔드 개발자
            <strong> 송승준</strong>입니다.
          </p>
        </div>
        <dl className={styles.profileDetails}>
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
