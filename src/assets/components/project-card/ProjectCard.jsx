import styles from "./ProjectCard.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function ProjectCard({ mainImg, thumbnails, description, technologies, date }) {
    const [selectedImg, setSelectedImg] = useState(mainImg);

    return (
        <article className={styles.card}>
            {/* Imagen principal */}
            <img className={styles.mainImg} src={selectedImg} alt="Project main" />

            <div className={styles.cardContent}>
                {/* Miniaturas */}
                <div className={styles.thumbnails}>
                    {thumbnails.map((thumb, index) => (
                        <div key={index} className={styles.thumbnailWrapper} onClick={() => setSelectedImg(thumb)}>
                            <img className={styles.testImg} src={thumb} alt={`thumb-${index}`} />
                            <div className={styles.overlay}>
                                <FaSearch className={styles.search} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Descripción */}
                <p className={styles.text}>{description}</p>

                {/* Tecnologías */}
                <div className={styles.tagContenair}>
                    {technologies.map((tech, index) => (
                        <span key={index} className={styles.tag}>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Información extra */}
                <div className={styles.infoContenair}>
                    <p>{date}</p>
                    <a href="#">+ d'Info</a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
