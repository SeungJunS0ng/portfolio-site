import { useState } from "react";
import styles from "./AdminPasswordModal.module.css";

type AdminPasswordModalProps = {
  title: string;
  description: string;
  confirmLabel: string;
  isPending?: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
};

export function AdminPasswordModal({
  title,
  description,
  confirmLabel,
  isPending = false,
  onClose,
  onConfirm,
}: AdminPasswordModalProps) {
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onConfirm(password);
  }

  return (
    <div className={styles.backdrop} role="presentation">
      <form className={styles.modal} onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <p>{description}</p>
        <label>
          관리자 비밀번호
          <input
            autoFocus
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <div className={styles.actions}>
          <button type="button" onClick={onClose} disabled={isPending}>
            취소
          </button>
          <button type="submit" disabled={isPending}>
            {isPending ? "처리 중..." : confirmLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
