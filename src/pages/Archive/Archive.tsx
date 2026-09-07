import { Link } from "react-router-dom";
import { useArchivePosts } from "../../hooks/useArchivePosts";
import styles from "./Archive.module.css";
import { ArchiveCard } from "./components/ArchiveCard/ArchiveCard";
import { useState } from "react";
import type { ArchiveStatus } from "../../types";

export function Archive() {
  const [status, setStatus] = useState<ArchiveStatus | null>(null);
  const { data: posts, isPending, isError } = useArchivePosts(status);

  function handleFilterClick(nextStatus: ArchiveStatus) {
    setStatus((currentStatus) =>
      currentStatus === nextStatus ? null : nextStatus,
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className="section-label">06 / ARCHIVE</p>
        <h1>Archive</h1>

        <div
          className={styles.filters}
          role="group"
          aria-label="해결 상태 필터"
        >
          <button
            type="button"
            className={`${styles.filterButton} ${status === "resolved" ? styles.selected : ""}`}
            aria-pressed={status === "resolved"}
            onClick={() => handleFilterClick("resolved")}
          >
            해결완료
          </button>
          <button
            type="button"
            className={`${styles.filterButton} ${status === "unresolved" ? styles.selected : ""}`}
            aria-pressed={status === "unresolved"}
            onClick={() => handleFilterClick("unresolved")}
          >
            미해결
          </button>
        </div>

        {isPending && <p>불러오는 중입니다.</p>}

        {isError && (
          <p role="alert">
            글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
          </p>
        )}

        {!isPending && !isError && (
          <>
            {posts?.length === 0 ? (
              <p>
                {status === null
                  ? "등록된 글이 없습니다."
                  : "선택한 상태의 글이 없습니다."}
              </p>
            ) : (
              <ul className={styles.list}>
                {posts?.map((post) => (
                  <li key={post.id}>
                    <ArchiveCard
                      post={post}
                      onStatusClick={handleFilterClick}
                    />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <Link to="/">홈으로 돌아가기</Link>
      </section>
    </main>
  );
}
