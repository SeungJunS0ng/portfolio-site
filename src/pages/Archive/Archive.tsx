import { Link } from "react-router-dom";
import { useArchivePosts } from "../../hooks/useArchivePosts";
import styles from "./Archive.module.css";

export function Archive() {
  const { data: posts, isPending, isError } = useArchivePosts();

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className="section-label">06 / ARCHIVE</p>
        <h1>Archive</h1>

        {isPending && <p>불러오는 중입니다.</p>}

        {isError && (
          <p role="alert">
            글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
          </p>
        )}

        {!isPending && !isError && (
          <>
            {posts?.length === 0 ? (
              <p>등록된 글이 없습니다.</p>
            ) : (
              <ul>
                {posts?.map((post) => (
                  <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
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
