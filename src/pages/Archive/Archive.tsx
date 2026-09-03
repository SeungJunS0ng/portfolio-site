import { Link } from "react-router-dom";
import styles from "./Archive.module.css";

export function Archive() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className="section-label">06 / ARCHIVE</p>
        <h1>Archive는 준비 중입니다.</h1>
        <p>문제 해결 기록 기능은 이후 별도 페이지로 구현합니다.</p>
        <Link to="/">홈으로 돌아가기</Link>
      </section>
    </main>
  );
}
