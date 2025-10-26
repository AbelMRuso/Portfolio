import { FaTimes } from "react-icons/fa";
import styles from "../modal/Modal.module.scss";
import SlideShow from "../slideShow/SlideShow";

function Modal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <FaTimes />
                </button>
                <div>
                    <SlideShow pictures={project.thumbnails} />
                </div>

                <p>
                    <strong>Contexte :</strong> {project.contexte}
                </p>
                <p>
                    <strong>Objectifs :</strong> {project.objectifs}
                </p>

                <p>
                    <strong>Code du projet: </strong>
                    <a target="_blank" className={styles.lien} href={project.resultat}>
                        Lien vers le repository GitHub
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Modal;
