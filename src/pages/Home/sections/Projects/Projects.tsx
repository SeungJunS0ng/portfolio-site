import { projects } from "../../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">04 / PROJECTS</p>
      <h2>
        문제를 데이터와 운영 흐름으로
        <br />
        분해한 프로젝트입니다.
      </h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
