import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.name}>송승준</p>
        <p className={styles.eyebrow}>BACKEND DEVELOPER</p>
        <h1>
          데이터의 흐름을 설계해
          <br />
          <em>안정적으로 동작하는 서비스</em>를 만듭니다.
        </h1>
        <p className={styles.description}>
          도메인 API를 중심으로 데이터가 저장·조회·전달되는 과정을 설계합니다.
          문제가 생기면 캐시·메시지·배포 상태를 나누어 살피며, 원인을 끝까지
          추적합니다.
        </p>
        <div className={styles.focus}>
          <p className={styles.focusTitle}>FOCUS</p>
          <ul>
            <li>
              <strong>DOMAIN API</strong>
              <span>도메인에 맞는 API 구조를 설계합니다.</span>
            </li>
            <li>
              <strong>DATA FLOW</strong>
              <span>저장부터 전달까지 데이터 흐름을 관리합니다.</span>
            </li>
            <li>
              <strong>TROUBLESHOOTING</strong>
              <span>상태를 분리해 문제 원인을 추적합니다.</span>
            </li>
          </ul>
        </div>
      </div>
      <aside className={styles.profile} aria-label="프로필 이미지 영역">
        <span>PROFILE IMAGE</span>
        <p>사진 추가 예정</p>
      </aside>
    </section>
  );
}
