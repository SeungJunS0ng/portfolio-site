import { useState } from "react";
import styles from "./CommentForm.module.css";

type CommentFormProps = {
  isPending?: boolean;
  errorMessage?: string;
  onSubmit: (authorName: string, content: string, codeLanguage: string, code: string, password: string) => void;
};

export function CommentForm({
  isPending = false,
  errorMessage,
  onSubmit,
}: CommentFormProps) {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("text");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(authorName.trim() || "익명", content.trim(), codeLanguage, code, password);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <input value={authorName} onChange={(event) => setAuthorName(event.target.value)} placeholder="이름 (선택)" maxLength={30} />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="수정·삭제용 비밀번호" required />
      </div>
      <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="답변을 작성해주세요." rows={4} required maxLength={5000} />
      <div className={styles.codeFields}>
        <label>
          코드 언어
          <select value={codeLanguage} onChange={(event) => setCodeLanguage(event.target.value)}>
            <option value="text">선택 안 함</option>
            <option value="java">Java</option>
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="sql">SQL</option>
            <option value="bash">Bash</option>
          </select>
        </label>
        <label>
          코드 <span>(선택)</span>
          <textarea className={styles.code} value={code} onChange={(event) => setCode(event.target.value)} placeholder="코드가 있으면 입력해주세요." rows={8} maxLength={50000} />
        </label>
      </div>
      {errorMessage && <p role="alert">{errorMessage}</p>}
      <button type="submit" disabled={isPending}>{isPending ? "저장 중..." : "답변 저장"}</button>
    </form>
  );
}
