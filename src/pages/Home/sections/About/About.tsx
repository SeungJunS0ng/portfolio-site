import { ContactButton } from "../../../../components/common/ContactButton/ContactButton";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.eyebrow}>BACKEND DEVELOPER / SEUNGJUN SONG</p>
      <h1>
        데이터 흐름을 설계하고
        <br />
        <em>검증 가능한 서비스</em>를 만듭니다.
      </h1>
      <p className={styles.description}>
        Spring Boot와 JPA를 기반으로 도메인 API를 구현하고, 실시간 메시지와
        캐시, 운영 환경을 직접 다룹니다. 데이터가 보이지 않을 때는 저장·캐시·
        메시지·배포 상태를 분리해 원인을 좁혀갑니다.
      </p>
      <ContactButton />
    </section>
  );
}
