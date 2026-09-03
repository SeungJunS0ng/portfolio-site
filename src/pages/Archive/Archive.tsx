import { useState, type FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Archive.module.css";

type ArchivePost = {
  id: number;
  status: "open" | "closed";
  date: string;
  title: string;
  contentMd: string;
};
type Filter = "all" | ArchivePost["status"];

const initialPosts: ArchivePost[] = [
  {
    id: 1,
    status: "closed",
    date: "2026. 09. 03",
    title: "스크롤 네비게이션에서 헤더 높이만큼 위치를 보정했다.",
    contentMd:
      "고정 헤더가 섹션 제목을 가리지 않도록 스크롤 위치에서 헤더 높이를 뺐다. 현재 섹션 표시는 `IntersectionObserver`로 분리해 메뉴와 화면 상태가 함께 바뀌도록 했다.",
  },
  {
    id: 2,
    status: "closed",
    date: "2026. 09. 02",
    title: "문제 해결 기록을 Markdown 문자열로 저장할 수 있게 구성했다.",
    contentMd:
      "본문과 선택 입력한 코드를 하나의 Markdown으로 조합한다. 저장된 데이터는 `ReactMarkdown`과 GFM 플러그인으로 렌더링해, 글과 코드 블록을 같은 흐름에서 읽을 수 있다.",
  },
  {
    id: 3,
    status: "open",
    date: "2026. 09. 02",
    title: "Archive 게시글을 Supabase에 연결할 데이터 구조를 정리 중이다.",
    contentMd:
      "게시글은 `content_md`, `status`, `created_at`을 중심으로 저장한다. 현재는 UI와 상태 흐름을 먼저 검증하고, 환경 변수 설정 후 Supabase 연동을 진행한다.",
  },
];

export function Archive() {
  const [posts, setPosts] = useState(initialPosts);
  const [filter, setFilter] = useState<Filter>("all");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("tsx");
  const visiblePosts =
    filter === "all" ? posts : posts.filter((post) => post.status === filter);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content.trim()) return;
    const codeBlock = code.trim()
      ? `\n\n\`\`\`${codeLanguage}\n${code}\n\`\`\``
      : "";
    setPosts([
      {
        id: Date.now(),
        status: "open",
        date: new Date().toLocaleDateString("ko-KR"),
        title: content.split("\n")[0],
        contentMd: `${content}${codeBlock}`,
      },
      ...posts,
    ]);
    setContent("");
    setCode("");
  };

  return (
    <section id="archive" className="section">
      <p className="section-label">05 / ARCHIVE</p>
      <h2>
        만들면서 배운 것들을
        <br />
        짧게 기록합니다.
      </h2>
      <div className={styles.toolbar} role="group" aria-label="아카이브 필터">
        {(["all", "open", "closed"] as Filter[]).map((option) => (
          <button
            key={option}
            className={filter === option ? styles.selected : ""}
            onClick={() => setFilter(option)}
          >
            {option === "all"
              ? "전체"
              : option === "open"
                ? "미해결"
                : "해결완료"}
          </button>
        ))}
      </div>
      <div className={styles.list}>
        {visiblePosts.map((post) => (
          <article className={styles.post} key={post.id}>
            <div className={styles.postHeader}>
              <span
                className={
                  post.status === "closed" ? styles.closed : styles.open
                }
              >
                {post.status === "closed" ? "해결완료" : "미해결"}
              </span>
              <time>{post.date}</time>
            </div>
            <h3>{post.title}</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.contentMd}
            </ReactMarkdown>
          </article>
        ))}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>문제 해결 기록하기</h3>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="본문을 입력하세요"
          required
        />
        <div className={styles.codeRow}>
          <select
            value={codeLanguage}
            onChange={(event) => setCodeLanguage(event.target.value)}
            aria-label="코드 언어"
          >
            <option value="tsx">TSX</option>
            <option value="css">CSS</option>
            <option value="ts">TypeScript</option>
          </select>
          <textarea
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="코드 (선택)"
            aria-label="코드"
          />
        </div>
        <button className={styles.save} type="submit">
          저장
        </button>
      </form>
    </section>
  );
}
