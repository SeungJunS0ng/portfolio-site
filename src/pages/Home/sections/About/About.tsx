import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>ABOUT ME</h1>
        <p className={styles.introduction}>
          안정적인 데이터 흐름과 효율적인 API 설계를 고민하는 백엔드 개발자
          <strong> 송승준</strong>입니다.
        </p>
        <dl className={styles.profileDetails}>
          <div>
            <dt>학력</dt>
            <dd>00대학교</dd>
          </div>
          <div>
            <dt>자격사항</dt>
            <dd>정보처리기사 · SQLD</dd>
          </div>
          <div className={styles.contactDetails}>
            <dt>Phone &amp; Email &amp; GitHub</dt>
            <dd>
              <a href="tel:01012345678">☎ 010-1234-5678</a>
              <a href="mailto:john091122@naver.com">✉ john091122@naver.com</a>
              <a href="https://github.com/SeungJunS0ng" target="_blank" rel="noreferrer">
                GitHub github.com/SeungJunS0ng
              </a>
            </dd>
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
