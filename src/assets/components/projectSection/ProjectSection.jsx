import ProjectCard from "../project-card/ProjectCard";
import styles from "../projectSection/ProjectSection.module.scss";
import projects from "../../data/data.json";

function ProjectSection() {
    return (
        <section>
            <h2 className={styles.title}>Projets</h2>
            <div className={styles.projectsContenair}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        mainImg={project.mainImg}
                        thumbnails={project.thumbnails}
                        description={project.description}
                        technologies={project.technologies}
                        date={project.date}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;
