import { Link, useNavigate } from "react-router-dom";
import { useArchiveAction } from "../../hooks/useArchiveAction";
import { ArchiveForm } from "./components/ArchiveForm/ArchiveForm";
import styles from "./Archive.module.css";

export function ArchiveWrite() {
  const navigate = useNavigate();
  const action = useArchiveAction();

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <Link className={styles.backLink} to="/archive">목록으로</Link>
        <h1>새 글 작성</h1>
        <ArchiveForm
          submitLabel="저장"
          isPending={action.isPending}
          errorMessage={action.isError ? "저장하지 못했습니다. 관리자 비밀번호를 확인해주세요." : undefined}
          onSubmit={(input, password) =>
            action.mutate(
              { action: "createPost", input, password },
              { onSuccess: (post) => navigate(`/archive/${(post as { id: string }).id}`) },
            )
          }
        />
      </section>
    </main>
  );
}
