import styles from "./ArchiveCard.module.css";
import type { ArchivePostSummary, ArchiveStatus } from "../../../../types";
import { Link } from "react-router-dom";
type ArchiveCardProps = {
  post: ArchivePostSummary;
  isStatusUpdating: boolean;
  onStatusToggle: (postId: string, status: ArchiveStatus) => void;
};

export function ArchiveCard({
  post,
  isStatusUpdating,
  onStatusToggle,
}: ArchiveCardProps) {
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
          <h2 className={styles.title}>
            <Link to={`/archive/${post.id}`}>{post.title}</Link>
          </h2>
          <p className={styles.commentCount}>답변 {post.comment_count ?? 0}</p>
        </div>

        <p className={styles.preview}>
          {post.excerpt}{" "}
          <Link className={styles.moreLink} to={`/archive/${post.id}`}>
            ... 더보기
          </Link>
        </p>

        <div className={styles.footer}>
          <ul className={styles.tags}>
            {post.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        className={`${styles.statusButton} ${isResolved ? styles.resolved : ""}`}
        aria-label={`${isResolved ? "미해결" : "해결완료"} 상태로 변경`}
        disabled={isStatusUpdating}
        onClick={() => onStatusToggle(post.id, post.status)}
      >
        <span className={styles.statusIcon} aria-hidden="true">
          ✓
        </span>
        <span>{isResolved ? "해결완료" : "미해결"}</span>
      </button>
      <time className={styles.createdAt} dateTime={post.created_at}>
        작성일 {createdAt}
      </time>
    </article>
  );
}
