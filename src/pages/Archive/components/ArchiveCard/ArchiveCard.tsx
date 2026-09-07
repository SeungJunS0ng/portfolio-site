import styles from "./ArchiveCard.module.css";
type ArchiveCardProps = {
  post: {
    id: string;
    title: string;
    content: string;
    tags: string[];
    status: string;
    created_at: string;
  };
};

export function ArchiveCard({ post }: ArchiveCardProps) {
  const isResolved = post.status === "resolved";

  const createdAt = new Date(post.created_at).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Seoul",
  });

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{post.title}</h2>
        <span
          className={`${styles.status} ${isResolved ? styles.resolved : ""}`}
        >
          {isResolved ? "해결완료" : "미해결"}
        </span>
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
    </article>
  );
}
