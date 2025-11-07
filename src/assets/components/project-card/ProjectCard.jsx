import styles from "./ProjectCard.module.scss";
import { useTranslation } from "react-i18next";

function ProjectCard({ mainImg, title, description, overlayColor, onOpenModal }) {
    const { t } = useTranslation();
    return (
        <article className={styles.card} style={{ "--overlay-color": overlayColor }}>
            <img src={mainImg} alt={title} />
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>{description}</p>
                    </div>

                    <button onClick={onOpenModal}>{t("projects.button")}</button>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
