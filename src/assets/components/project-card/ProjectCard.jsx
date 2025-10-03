import styles from "./ProjectCard.module.scss";
import imageTest from "../../images/image_test.png";

function ProjectCard() {
    return (
        <>
            <h2>Hola mundo</h2>
            <article className={styles.card}>
                <img className={styles.mainImg} src={imageTest} alt="" />
                <div className={styles.cardContent}>
                    <div className={styles.thumbnails}>
                        <img className={styles.testImg} src="" alt="" />
                        <img className={styles.testImg} src="" alt="" />
                        <img className={styles.testImg} src="" alt="" />
                    </div>
                    <p className={styles.text}>Site web de photographie complet avec paneau de bord admin, login, et formulaires</p>
                    <div className={styles.tagContenair}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>Node</span>
                    </div>
                    <div className={styles.infoContenair}>
                        <p>Avril 2025</p>
                        <a>+ d'Info</a>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ProjectCard;
