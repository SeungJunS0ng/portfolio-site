import styles from "./ContactButton.module.css";

export function ContactButton() {
  return (
    <a className={styles.button} href="mailto:seungjun@example.com">
      연락하기 <span aria-hidden="true">↗</span>
    </a>
  );
}
