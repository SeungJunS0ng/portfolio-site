import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <p className="section-label">05 / CONTACT</p>

      <h2>새로운 기회와 협업을 기다립니다.</h2>
      <p className={styles.description}>
        프로젝트와 개발에 관한 제안을 기다리고 있어요. 편한 방법으로
        연락해주세요.
      </p>
      <Link to="/archive" className={styles.archiveLink}>
        <strong>Archive</strong>
        <span>개발 기록 보러가기</span>
        <span aria-hidden="true">↗</span>
      </Link>

      <div className={styles.cards}>
        <a
          className={styles.card}
          href="https://github.com/SeungJunS0ng"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </span>
          <span className={styles.label}>GitHub</span>
          <strong className={styles.value}>github.com/SeungJunS0ng</strong>
          <span className={styles.caption}>프로젝트와 코드를 확인해보세요</span>
        </a>

        <a className={styles.card} href="tel:01062410923">
          <span className={styles.icon} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
          <span className={styles.label}>Phone</span>
          <strong className={styles.value}>010-6241-0923</strong>
          <span className={styles.caption}>편하게 전화나 문자 남겨주세요</span>
        </a>

        <a className={styles.card} href="mailto:john091122@naver.com">
          <span className={styles.icon} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </span>
          <span className={styles.label}>Email</span>
          <strong className={styles.value}>john091122@naver.com</strong>
          <span className={styles.caption}>확인 후 빠르게 답변드릴게요</span>
        </a>
      </div>

      <p className={styles.message}>언제든 편하게 연락주세요 :)</p>
    </section>
  );
}
