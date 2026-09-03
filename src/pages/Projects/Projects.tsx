import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">04 / PROJECTS</p>
      <h2>
        아이디어를 실제 화면으로
        <br />
        옮긴 기록입니다.
      </h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
