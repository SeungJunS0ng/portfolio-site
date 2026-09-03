import { ContactButton } from "../../components/common/ContactButton/ContactButton";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.eyebrow}>FRONTEND DEVELOPER / SEUNGJUN SONG</p>
      <h1>
        사람의 움직임을
        <br />
        <em>더 나은 화면</em>으로 만듭니다.
      </h1>
      <p className={styles.description}>
        복잡한 문제를 차분하게 정리하고, 오래 쓰고 싶은 경험을 설계하는
        프론트엔드 개발자입니다.
      </p>
      <ContactButton />
    </section>
  );
}
