import { Link } from "react-router-dom";
import { useArchivePosts } from "../../hooks/useArchivePosts";
import { useUpdateArchivePostStatus } from "../../hooks/useUpdateArchivePostStatus";
import styles from "./Archive.module.css";
import { ArchiveCard } from "./components/ArchiveCard/ArchiveCard";
import { useState } from "react";
import type { ArchiveStatus } from "../../types";
import { AdminPasswordModal } from "./components/AdminPasswordModal/AdminPasswordModal";

export function Archive() {
  const [status, setStatus] = useState<ArchiveStatus | null>(null);
  const { data: posts, isPending, isError } = useArchivePosts(status);
  const updateStatus = useUpdateArchivePostStatus();
  const [statusTarget, setStatusTarget] = useState<{
    id: string;
    status: ArchiveStatus;
  } | null>(null);

  function handleFilterClick(nextStatus: ArchiveStatus) {
    setStatus((currentStatus) =>
      currentStatus === nextStatus ? null : nextStatus,
    );
  }

  function handleStatusToggle(postId: string, currentStatus: ArchiveStatus) {
    setStatusTarget({ id: postId, status: currentStatus });
  }

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className="section-label">06 / ARCHIVE</p>
        <div className={styles.titleRow}>
          <h1>Archive</h1>
          <Link className={styles.writeLink} to="/archive/new">새 글 작성</Link>
        </div>

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

        {updateStatus.isError && (
          <p role="alert">상태를 변경하지 못했습니다. 다시 시도해주세요.</p>
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
                      isStatusUpdating={updateStatus.isPending}
                      onStatusToggle={handleStatusToggle}
                    />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <Link to="/">홈으로 돌아가기</Link>
      </section>
      {statusTarget && (
        <AdminPasswordModal
          title={statusTarget.status === "resolved" ? "미해결로 변경할까요?" : "해결완료로 처리할까요?"}
          description="관리자 비밀번호를 확인한 뒤 상태를 변경합니다."
          confirmLabel="저장"
          isPending={updateStatus.isPending}
          onClose={() => setStatusTarget(null)}
          onConfirm={(password) =>
            updateStatus.mutate(
              {
                id: statusTarget.id,
                status: statusTarget.status === "resolved" ? "unresolved" : "resolved",
                password,
              },
              { onSuccess: () => setStatusTarget(null) },
            )
          }
        />
      )}
    </main>
  );
}
