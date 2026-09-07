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
                <svg className={styles.githubIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                github.com/SeungJunS0ng
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
