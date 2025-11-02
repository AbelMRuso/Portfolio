import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../navBurguer/NavBurguer.module.scss";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function NavBurguer({ onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);
    const iconRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    /* verifica la talla de pantalla para ocultar el menú */
    const [isDesktop, setisDesktop] = useState(window.innerWidth > 912);

    useEffect(() => {
        const handleResize = () => setisDesktop(window.innerWidth > 912);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Bloquear scroll al abrir el menú
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden"; // importante
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        if (iconRef.current) {
            const rotation = isOpen ? 180 : 0;

            // animación de rotación suave
            gsap.to(iconRef.current, {
                rotation: rotation,
                duration: 0.4,
                ease: "power4.inOut",
            });
        }
    }, [isOpen]);

    return (
        <>
            <button className={`${styles.navButton} ${isDesktop ? styles.hidden : ""}`} onClick={toggleMenu}>
                <span ref={iconRef} className={styles.iconWrapper}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </span>
            </button>
            <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
                <ul className={styles.sectionListe}>
                    <li onClick={() => onNavigate("home")}>INTRO</li>
                    <li onClick={() => onNavigate("about")}>À PROPOS</li>
                    <li onClick={() => onNavigate("stack")}>STACK</li>
                    <li onClick={() => onNavigate("projects")}>PROJETS</li>
                    <li onClick={() => onNavigate("contact")}>CONTACT</li>
                </ul>
            </nav>
        </>
    );
}

export default NavBurguer;
