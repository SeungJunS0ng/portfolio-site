import { useState } from "react";
import styles from "./CommentForm.module.css";

type CommentFormProps = {
  isPending?: boolean;
  errorMessage?: string;
  onSubmit: (authorName: string, content: string, password: string) => void;
};

export function CommentForm({
  isPending = false,
  errorMessage,
  onSubmit,
}: CommentFormProps) {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(authorName.trim() || "익명", content.trim(), password);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <input value={authorName} onChange={(event) => setAuthorName(event.target.value)} placeholder="이름 (선택)" maxLength={30} />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="수정·삭제용 비밀번호" required />
      </div>
      <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="답변을 작성해주세요." rows={4} required maxLength={5000} />
      {errorMessage && <p role="alert">{errorMessage}</p>}
      <button type="submit" disabled={isPending}>{isPending ? "저장 중..." : "답변 저장"}</button>
    </form>
  );
}
