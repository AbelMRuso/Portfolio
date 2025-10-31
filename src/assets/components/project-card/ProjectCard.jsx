import styles from "./ProjectCard.module.scss";

function ProjectCard({ mainImg, title, description, overlayColor, onOpenModal }) {
    return (
        <article className={styles.card} style={{ "--overlay-color": overlayColor }}>
            <img src={mainImg} alt={title} />
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>{description}</p>
                    </div>

                    <button onClick={onOpenModal}>Détails</button>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
