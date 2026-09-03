import type { NavigationItem } from "../../../types";
import styles from "./Navigation.module.css";

type NavigationProps = {
  items: NavigationItem[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export function Navigation({ items, activeId, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="주요 메뉴">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={activeId === item.id ? styles.active : ""}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
