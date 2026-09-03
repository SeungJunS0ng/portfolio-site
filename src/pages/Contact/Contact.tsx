import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className="section-label">05 / CONTACT</p>
      <h2>
        함께 해결할 문제를
        <br />
        <span>기다리고 있습니다.</span>
      </h2>
      <a className={styles.email} href="mailto:john091122@naver.com">
        john091122@naver.com ↗
      </a>
      <div className={styles.links}>
        <a href="https://github.com/SeungJunS0ng" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="tel:01062410923">010-6241-0923</a>
      </div>
    </section>
  );
}
