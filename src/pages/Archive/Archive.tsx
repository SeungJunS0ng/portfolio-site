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
    date: "2026. 08. 24",
    title: "컴포넌트 경계를 먼저 정하면 CSS가 단순해진다.",
    contentMd:
      "문제를 화면 단위가 아니라 **책임 단위**로 나누면 스타일의 영향 범위도 줄어든다.",
  },
  {
    id: 2,
    status: "open",
    date: "2026. 08. 12",
    title: "사용자의 한 번의 클릭을 줄이는 것이 가장 좋은 최적화다.",
    contentMd:
      "작은 실험을 빠르게 배포하고 관찰한다.\n\n- 흐름을 기록한다\n- 한 가지씩 바꾼다",
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
