import styles from "./ProjectCard.module.scss";
import { useTranslation } from "react-i18next";

function ProjectCard({ mainImg, title, description, overlayColor, date, onOpenModal }) {
    const { t } = useTranslation();
    return (
        <article onClick={onOpenModal} className={styles.card} style={{ "--overlay-color": overlayColor }}>
            <img src={mainImg} alt={title} />
            <div className={styles.content}>
                <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    <p>{description}</p>
                </div>
                <div className={styles.bottomContent}>
                    <p>{date}</p>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
