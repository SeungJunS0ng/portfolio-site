import type { NavigationItem } from "../../../types";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

type HeaderProps = {
  items: NavigationItem[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export function Header({ items, activeId, onNavigate }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#about">
        Portfolio<span>.</span>
      </a>
      <Navigation items={items} activeId={activeId} onNavigate={onNavigate} />
    </header>
  );
}
