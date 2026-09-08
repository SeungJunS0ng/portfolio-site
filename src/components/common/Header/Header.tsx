import type { NavigationItem } from "../../../types";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

type HeaderProps = {
  items: NavigationItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  onNavigateIntent?: (id: string) => void;
};

export function Header({
  items,
  activeId,
  onNavigate,
  onNavigateIntent,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <img src="/favicon.svg" alt="" className={styles.logoIcon} />
        Portfolio<span>.</span>
      </a>
      <Navigation
        items={items}
        activeId={activeId}
        onNavigate={onNavigate}
        onNavigateIntent={onNavigateIntent}
      />
    </header>
  );
}
