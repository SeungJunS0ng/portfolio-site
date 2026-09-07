import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useArchiveAction } from "../../hooks/useArchiveAction";
import { useArchiveComments } from "../../hooks/useArchiveComments";
import { useArchivePost } from "../../hooks/useArchivePost";
import type { ArchiveStatus } from "../../types";
import { AdminPasswordModal } from "./components/AdminPasswordModal/AdminPasswordModal";
import { CommentForm } from "./components/CommentForm/CommentForm";
import styles from "./ArchiveDetail.module.css";

type AdminAction = "status" | "delete";

export function ArchiveDetail() {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: post, isPending, isError } = useArchivePost(id);
  const { data: comments = [], isPending: isCommentsPending } = useArchiveComments(id);
  const action = useArchiveAction();
  const [adminAction, setAdminAction] = useState<AdminAction | null>(null);

  function handleAdminAction() {
    if (!post || !adminAction) return;
    const password = window.prompt("관리자 비밀번호를 입력하세요.");
    if (!password) return;
    if (adminAction === "delete") {
      action.mutate({ action: "deletePost", id: post.id, password }, { onSuccess: () => navigate("/archive") });
      return;
    }
    const status: ArchiveStatus = post.status === "resolved" ? "unresolved" : "resolved";
    action.mutate({ action: "updateStatus", id: post.id, status, password }, { onSuccess: () => setAdminAction(null) });
  }

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <Link className={styles.back} to="/archive">목록으로 돌아가기</Link>
        {!id ? <p>잘못된 접근입니다.</p> : isPending ? <p>불러오는 중입니다.</p> : isError ? <p role="alert">글을 불러오지 못했습니다.</p> : !post ? <p>존재하지 않거나 삭제된 글입니다.</p> : (
          <>
            <article className={styles.post}>
              <div className={styles.postHeader}>
                <div>
                  <p className={styles.status}>{post.status === "resolved" ? "해결완료" : "미해결"}</p>
                  <h1>{post.title}</h1>
                </div>
                <div className={styles.actions}>
                  <Link to={`/archive/${post.id}/edit`}>수정</Link>
                  <button type="button" onClick={() => setAdminAction("status")}>상태 변경</button>
                  <button type="button" onClick={() => setAdminAction("delete")}>삭제</button>
                </div>
              </div>
              <div className={styles.markdown}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
              </div>
              {post.code && <section className={styles.codeSection}><p>{post.code_language}</p><pre><code>{post.code}</code></pre></section>}
              <footer className={styles.footer}>
                <ul>{post.tags.map((tag) => <li key={tag}>#{tag}</li>)}</ul>
                <time dateTime={post.created_at}>작성일 {new Date(post.created_at).toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", timeZone: "Asia/Seoul" })}</time>
              </footer>
            </article>
            <section className={styles.comments}>
              <h2>답변 {comments.length}</h2>
              <CommentForm
                isPending={action.isPending}
                errorMessage={action.isError ? "답변을 저장하지 못했습니다." : undefined}
                onSubmit={(authorName, content, password) => action.mutate({ action: "createComment", postId: post.id, authorName, content, password })}
              />
              {isCommentsPending ? <p>답변을 불러오는 중입니다.</p> : <ul className={styles.commentList}>{comments.map((comment) => <li key={comment.id}><strong>{comment.author_name}</strong><p>{comment.content}</p><time dateTime={comment.created_at}>{new Date(comment.created_at).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" })}</time></li>)}</ul>}
            </section>
          </>
        )}
      </section>
      {post && adminAction && <AdminPasswordModal
        title={adminAction === "delete" ? "글을 삭제할까요?" : post.status === "resolved" ? "미해결 처리하시겠습니까?" : "해결완료 처리하시겠습니까?"}
        description={adminAction === "delete" ? "삭제한 글과 답변은 되돌릴 수 없습니다." : post.status === "resolved" ? "언제든 다시 해결완료로 변경할 수 있습니다." : "언제든 다시 미해결로 변경할 수 있습니다."}
        confirmLabel={adminAction === "delete" ? "삭제" : "저장"}
        isPending={action.isPending}
        onClose={() => setAdminAction(null)}
        onConfirm={handleAdminAction}
      />}
    </main>
  );
}
