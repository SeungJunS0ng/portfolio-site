import styles from "./AdminPasswordModal.module.css";

type AdminPasswordModalProps = {
  title: string;
  description: string;
  confirmLabel: string;
  isPending?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function AdminPasswordModal({
  title,
  description,
  confirmLabel,
  isPending = false,
  onClose,
  onConfirm,
}: AdminPasswordModalProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onConfirm();
  }

  return (
    <div className={styles.backdrop} role="presentation">
      <form className={styles.modal} onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <p>{description}</p>
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
