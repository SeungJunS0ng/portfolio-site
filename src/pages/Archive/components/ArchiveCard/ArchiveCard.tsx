import styles from "./ArchiveCard.module.css";
import type { ArchiveStatus } from "../../../../types";
type ArchiveCardProps = {
  post: {
    id: string;
    title: string;
    content: string;
    tags: string[];
    status: ArchiveStatus;
    created_at: string;
  };
  onStatusClick: (status: ArchiveStatus) => void;
};

export function ArchiveCard({ post, onStatusClick }: ArchiveCardProps) {
  const isResolved = post.status === "resolved";

  const createdAt = new Date(post.created_at).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Seoul",
  });

  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>{post.title}</h2>
        </div>

        <p className={styles.preview}>{post.content}</p>

        <div className={styles.footer}>
          <ul className={styles.tags}>
            {post.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>

          <time dateTime={post.created_at}>작성일 {createdAt}</time>
        </div>
      </div>
      <button
        type="button"
        className={`${styles.statusButton} ${isResolved ? styles.resolved : ""}`}
        aria-label={`${isResolved ? "해결완료" : "미해결"} 상태 필터 적용`}
        onClick={() => onStatusClick(post.status)}
      >
        <span className={styles.statusIcon} aria-hidden="true">
          ✓
        </span>
        <span>{isResolved ? "해결완료" : "미해결"}</span>
      </button>
    </article>
  );
}
