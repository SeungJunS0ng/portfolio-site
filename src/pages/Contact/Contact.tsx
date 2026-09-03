import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className="section-label">06 / CONTACT</p>
      <h2>
        좋은 문제를 함께
        <br />
        <span>풀어보고 싶습니다.</span>
      </h2>
      <a className={styles.email} href="mailto:seungjun@example.com">
        seungjun@example.com ↗
      </a>
      <div className={styles.links}>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
