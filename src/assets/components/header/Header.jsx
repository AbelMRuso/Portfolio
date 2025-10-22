import styles from "../header/Header.module.scss";
import { useEffect, useState } from "react";

function Header() {
    const baseText = "Faisons d’une idée quelque chose de ";
    const rotatingWords = ["tangible", "innovant", "captivant", "réel"];

    const [displayedText, setDisplayedText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);

    // Typewriter de la parte fija con delay inicial de 2 segundos
    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText(baseText.slice(0, index + 1));
                index++;
                if (index === baseText.length) clearInterval(interval);
            }, 80);
        }, 1500); // delay inicial de 2 segundos

        return () => clearTimeout(timeout);
    }, [baseText]);

    // Rotación de la última palabra, solo después de que la parte fija termine
    useEffect(() => {
        if (displayedText === baseText) {
            const rotateInterval = setInterval(() => {
                setWordIndex((prev) => {
                    if (prev < rotatingWords.length - 1) {
                        return prev + 1;
                    } else {
                        clearInterval(rotateInterval);
                        return prev;
                    }
                });
            }, 2000); // cambia cada 2s

            return () => clearInterval(rotateInterval);
        }
    }, [displayedText, baseText, rotatingWords]);

    return (
        <header className={styles.headerBanner}>
            <div className={styles.overlay}>
                <h1>Abel Martínez Ruso</h1>
                <h2 className={styles.subtitle}>Développeur full stack</h2>
                <p className={styles.typeWriter}>
                    {displayedText}
                    {displayedText === baseText && <span className={styles.rotatingWord}>{rotatingWords[wordIndex]}</span>}
                </p>
            </div>
        </header>
    );
}

export default Header;
