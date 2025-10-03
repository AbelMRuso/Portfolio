import styles from "./ProjectCard.module.scss";
import { FaSearch } from "react-icons/fa";

function ProjectCard({ mainImg, thumbnails, description, technologies, date }) {
    return (
        <>
            <article className={styles.card}>
                <img className={styles.mainImg} src={mainImg} alt="" />
                <div className={styles.cardContent}>
                    <div className={styles.thumbnails}>
                        <div>
                            <img className={styles.testImg} src={thumbnails} alt="" />
                            <div>
                                <FaSearch className={styles.search} />
                            </div>
                        </div>
                    </div>

                    <p className={styles.text}>{description}</p>
                    <div className={styles.tagContenair}>
                        <span className={styles.tag}>{technologies}</span>
                    </div>
                    <div className={styles.infoContenair}>
                        <p>{date}</p>
                        <a>+ d'Info</a>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ProjectCard;
