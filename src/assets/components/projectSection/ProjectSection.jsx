import ProjectCard from "../project-card/ProjectCard";
import styles from "../projectSection/ProjectSection.module.scss";
import projects from "../../data/data.json";
import Modal from "../modal/Modal";
import { useState, forwardRef } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";

const ProjectSection = forwardRef(({ setIsModalOpen }, ref) => {
    const { t } = useTranslation();

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <section ref={ref} className={styles.sectionContenair} data-section="projects">
            <div className={styles.titleContenair}>
                <h2 className={styles.title}>{t("projects.title")}</h2>
                <span className={styles.separateur}></span>
            </div>
            <div className={styles.projectsContenair}>
                {projects.map((project) => {
                    const projectKey = `project${project.id}`;

                    return (
                        <ProjectCard
                            key={project.id}
                            mainImg={project.mainImg}
                            title={project.title}
                            alt={t(`projects:${projectKey}.title`)}
                            overlayColor={project.overlayColor}
                            description={t(`projects:${projectKey}.description`)}
                            date={t(`projects:${projectKey}.date`)}
                            onOpenModal={() => openModal(project)}
                        />
                    );
                })}
            </div>
            {ReactDOM.createPortal(
                <Modal isOpen={!!selectedProject} onClose={() => closeModal(null)} project={selectedProject || {}} />,
                document.body // se renderiza directamente en el body
            )}{" "}
        </section>
    );
});

export default ProjectSection;
