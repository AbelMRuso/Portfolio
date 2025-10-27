import ProjectCard from "../project-card/ProjectCard";
import styles from "../projectSection/ProjectSection.module.scss";
import projects from "../../data/data.json";
import Modal from "../modal/Modal";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <section ref={sectionRef} className={styles.sectionContenair}>
            <h2 className={styles.title}>Projets</h2>

            <div ref={innerRef} className={styles.projectsContenair}>
                {projects.map((project, index) => (
                    <div key={project.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.rowReverse : styles.rowNormal}`}>
                        <div className={styles.dateContent}>
                            <span className={styles.date}>{project.date}</span>
                        </div>

                        {/* Tarjeta */}
                        <ProjectCard
                            mainImg={project.mainImg}
                            alt={`Page d'accuel du site ${project.titre}`}
                            overlayColor={project.overlayColor}
                            thumbnails={project.thumbnails}
                            description={project.description}
                            technologies={project.technologies}
                            date={project.date}
                            onOpenModal={() => setSelectedProject(project)}
                        />
                    </div>
                ))}
            </div>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject || {}} />
        </section>
    );
}

export default ProjectSection;
