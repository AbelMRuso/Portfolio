import styles from "./ProjectCard.module.scss";
import data from "../../data/data.json";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function ProjectCard({ mainImg, title, overlayColor, onOpenModal }) {
    return (
        <article className={styles.card} style={{ "--overlay-color": overlayColor }}>
            <img src={mainImg} alt={title} />
            <div className={styles.overlay}></div>
        </article>
    );
}

export default ProjectCard;
