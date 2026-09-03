import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 SeungJun Song. All rights reserved.</span>
      <span>Built with React, TypeScript, and CSS Modules.</span>
    </footer>
  );
}
