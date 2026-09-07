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
    <article>
      <div>
        <h2>{post.title}</h2>
        <span>{isResolved ? "해결완료" : "미해결"}</span>
      </div>

      <p>{post.content}</p>

      <div>
        <ul>
          {post.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>

        <time dateTime={post.created_at}>작성일 {createdAt}</time>
      </div>
    </article>
  );
}
