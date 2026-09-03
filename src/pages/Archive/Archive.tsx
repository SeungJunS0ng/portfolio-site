import styles from "./Archive.module.css";

const logs = [
  "컴포넌트 경계를 먼저 정하면 CSS가 단순해진다.",
  "사용자의 한 번의 클릭을 줄이는 것이 가장 좋은 최적화다.",
  "작은 실험을 빠르게 배포하고 관찰한다.",
];
export function Archive() {
  return (
    <section id="archive" className="section">
      <p className="section-label">05 / ARCHIVE</p>
      <h2>
        만들면서 배운 것들을
        <br />
        짧게 기록합니다.
      </h2>
      <div className={styles.list}>
        {logs.map((log, index) => (
          <p key={log}>
            <span>0{index + 1}</span>
            {log}
          </p>
        ))}
      </div>
    </section>
  );
}
