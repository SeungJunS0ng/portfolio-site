import styles from "./ContactButton.module.css";

type ContactButtonProps = { floating?: boolean };

export function ContactButton({ floating = false }: ContactButtonProps) {
  return (
    <a
      className={`${styles.button} ${floating ? styles.floating : ""}`}
      href="mailto:john091122@naver.com"
    >
      연락하기 <span aria-hidden="true">↗</span>
    </a>
  );
}
