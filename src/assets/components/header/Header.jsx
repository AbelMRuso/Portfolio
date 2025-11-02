import styles from "../header/Header.module.scss";
import { useEffect, useState } from "react";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
    const [text, setText] = useState("");

    const fullText = "Transformons ensemble une idée en réalité ";
    const highlightWords = ["idée", "réalité"];

    //renderiza el texto estilo typewriting con un delay
    useEffect(() => {
        let index = 0;
        let interval;

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setText(fullText.slice(0, index + 1));
                index++;

                if (index === fullText.length) {
                    clearInterval(interval); // detener cuando termina el texto
                }
            }, 80);
        }, 1600);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []); // hace que se ejecute una sola vez al montar el componente

    // Función para renderizar el texto con palabras resaltadas
    const renderHighlightedText = () => {
        const words = text.split(" "); // separar en palabras
        return words.map((word, i) => {
            // Comprobar si la palabra debe resaltarse
            const cleanWord = word.replace(/[^a-zA-ZÀ-ÿ]/g, ""); // quitar signos de puntuación
            if (highlightWords.includes(cleanWord)) {
                return (
                    <span key={i} className={styles.highlight}>
                        {word}{" "}
                    </span>
                );
            } else {
                return word + " ";
            }
        });
    };

    return (
        <div ref={ref} className={styles.headerBanner} data-section="home">
            <div className={styles.overlay}>
                <h1>Abel Martínez Ruso</h1>
                <h2 className={styles.subtitle}>Développeur full stack</h2>
                <p className={styles.typeWriter}>{renderHighlightedText()}</p>
            </div>
        </div>
    );
});

export default Header;
