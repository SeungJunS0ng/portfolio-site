import { useState } from "react";
import type { ArchivePost, ArchivePostInput } from "../../../../types";
import styles from "./ArchiveForm.module.css";

type ArchiveFormProps = {
  initialPost?: ArchivePost;
  submitLabel: string;
  isPending?: boolean;
  errorMessage?: string;
  onSubmit: (input: ArchivePostInput, password: string) => void;
};

export function ArchiveForm({
  initialPost,
  submitLabel,
  isPending = false,
  errorMessage,
  onSubmit,
}: ArchiveFormProps) {
  const [title, setTitle] = useState(initialPost?.title ?? "");
  const [content, setContent] = useState(initialPost?.content ?? "");
  const [codeLanguage, setCodeLanguage] = useState(
    initialPost?.code_language ?? "text",
  );
  const [code, setCode] = useState(initialPost?.code ?? "");
  const [tags, setTags] = useState(initialPost?.tags.join(", ") ?? "");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(
      {
        title: title.trim(),
        content: content.trim(),
        code_language: codeLanguage,
        code,
        tags: tags
          .split(",")
          .map((tag) => tag.trim().replace(/^#/, ""))
          .filter(Boolean),
      },
      password,
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        제목
        <input value={title} onChange={(event) => setTitle(event.target.value)} required maxLength={100} />
      </label>
      <label>
        본문
        <textarea value={content} onChange={(event) => setContent(event.target.value)} required rows={10} maxLength={20000} />
      </label>
      <label>
        코드 언어
        <select value={codeLanguage} onChange={(event) => setCodeLanguage(event.target.value)}>
          <option value="text">선택 안 함</option>
          <option value="java">Java</option>
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="sql">SQL</option>
          <option value="bash">Bash</option>
        </select>
      </label>
      <label>
        코드
        <textarea className={styles.code} value={code} onChange={(event) => setCode(event.target.value)} rows={10} maxLength={50000} />
      </label>
      <label>
        태그
        <input value={tags} onChange={(event) => setTags(event.target.value)} placeholder="Spring Boot, Redis, 캐시" />
      </label>
      <label>
        관리자 비밀번호
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </label>
      {errorMessage && <p className={styles.error} role="alert">{errorMessage}</p>}
      <button type="submit" className={styles.submit} disabled={isPending}>
        {isPending ? "저장 중..." : submitLabel}
      </button>
    </form>
  );
}
