import { ContactButton } from "../../components/common/ContactButton/ContactButton";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.eyebrow}>FRONTEND DEVELOPER / SEUNGJUN SONG</p>
      <h1>
        배운 것을 직접
        <br />
        <em>사용할 수 있는 화면</em>으로 만듭니다.
      </h1>
      <p className={styles.description}>
        현대오토에버 모빌리티 스쿨 웹/앱 과정에서 React와 TypeScript를
        학습하며, 문제를 작은 단위로 나누고 사용자에게 명확한 경험으로
        연결하는 프론트엔드 개발자를 목표로 합니다.
      </p>
      <div className={styles.details}>
        <p>
          <strong>과정</strong> 현대오토에버 모빌리티 스쿨 웹/앱
        </p>
        <p>
          <strong>프로젝트</strong> 개인 포트폴리오 웹사이트
        </p>
      </div>
      <ContactButton />
    </section>
  );
}
