import { FaTimes } from "react-icons/fa";
import styles from "../modal/Modal.module.scss";
import SlideShow from "../slideShow/SlideShow";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Modal({ isOpen, onClose, project }) {
    const { t } = useTranslation(["common", "projects"]);
    const modalContext = t(project.contexte);
    const modalObjectives = t(project.objectifs);

    // Bloquear scroll de fondo
    useEffect(() => {
        const html = document.documentElement;

        if (isOpen) {
            document.body.style.overflow = "hidden";
            html.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            html.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            html.style.overflow = "auto";
        };
    }, [isOpen]);
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
                <div className={styles.content}>
                    <p>
                        <strong>{t("modal.context")} :</strong> {modalContext}
                    </p>
                    <p>
                        <strong>{t("modal.objectives")} :</strong> {modalObjectives}
                    </p>

                    <p>
                        <strong>{t("modal.code")} </strong>
                        <a target="_blank" className={styles.lien} href={project.resultat}>
                            {t("modal.link")}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
