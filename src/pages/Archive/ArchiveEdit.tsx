import { Link, useNavigate, useParams } from "react-router-dom";
import { useArchiveAction } from "../../hooks/useArchiveAction";
import { useArchivePost } from "../../hooks/useArchivePost";
import { ArchiveForm } from "./components/ArchiveForm/ArchiveForm";
import styles from "./Archive.module.css";

export function ArchiveEdit() {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: post, isPending, isError } = useArchivePost(id);
  const action = useArchiveAction();

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <Link to={`/archive/${id}`}>상세로 돌아가기</Link>
        <h1>글 수정</h1>
        {isPending && <p>불러오는 중입니다.</p>}
        {isError || !post ? <p role="alert">글을 불러오지 못했습니다.</p> : (
          <ArchiveForm
            initialPost={post}
            submitLabel="수정 저장"
            isPending={action.isPending}
            errorMessage={action.isError ? "수정하지 못했습니다. 관리자 비밀번호를 확인해주세요." : undefined}
            onSubmit={(input, password) => action.mutate(
              { action: "updatePost", id, input, password },
              { onSuccess: () => navigate(`/archive/${id}`) },
            )}
          />
        )}
      </section>
    </main>
  );
}
