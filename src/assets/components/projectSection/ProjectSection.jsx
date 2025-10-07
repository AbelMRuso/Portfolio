import ProjectCard from "../project-card/ProjectCard";
import styles from "../projectSection/ProjectSection.module.scss";
import projects from "../../data/data.json";
import Filters from "../filters/filters";
import Modal from "../modal/Modal";
import { useState } from "react";

function ProjectSection() {
    //filtrado//
    const [filter, setFilter] = useState("all");

    const filteredProjects = projects.filter((project) => (filter === "all" ? true : project.categories.includes(filter)));

    //modal//
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className={styles.sectionContenair}>
            <h2 className={styles.title}>Projets</h2>
            <div>
                <Filters setFilter={setFilter} />
            </div>
            <div className={styles.projectsContenair}>
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        mainImg={project.mainImg}
                        thumbnails={project.thumbnails}
                        description={project.description}
                        technologies={project.technologies}
                        date={project.date}
                        onOpenModal={() => setSelectedProject(project)}
                    />
                ))}
            </div>
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject || {}} />
        </section>
    );
}

export default ProjectSection;
