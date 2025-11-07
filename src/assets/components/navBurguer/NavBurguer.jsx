import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../navBurguer/NavBurguer.module.scss";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

function NavBurguer({ onNavigate, isModalOpen }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const iconRef = useRef(null);
    const navRef = useRef(null);
    const listItemRefs = useRef([]);
    listItemRefs.current = [];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (section, index) => {
        const li = listItemRefs.current[index];
        const underline = li.querySelector("span");
        // Animación del subrayado
        gsap.to(underline, { width: "100%", duration: 0.2, ease: "power2.out" });

        // Esperamos a que termine la animación y cerramos el menú
        setTimeout(() => {
            onNavigate(section);
            setIsOpen(false);
            // reseteamos la barra para la próxima apertura
            gsap.set(underline, { width: 0 });
        }, 200); // duración = la misma que la animación
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Ref para animar cada li
    const addToRefs = (el) => {
        if (el && !listItemRefs.current.includes(el)) {
            listItemRefs.current.push(el);
        }
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

    useEffect(() => {
        if (isOpen) {
            const tl = gsap.timeline();
            tl.fromTo(navRef.current, { opacity: 0 }, { opacity: 0.9, duration: 0.3 });
            tl.from(
                listItemRefs.current,
                { y: 20, opacity: 0, stagger: 0.2, duration: 0.4, ease: "power2.out" },
                "-=0.1" // empieza un poquito antes de terminar el fade del nav
            );
        } else {
            // Animación de cierre
            gsap.to(navRef.current, { opacity: 0, duration: 0.2 });
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            setActiveIndex(null); // Reset al cerrar menú
        }
    }, [isOpen]);

    return (
        <>
            {!isModalOpen && (
                <button className={`${styles.navButton} ${isDesktop ? styles.hidden : ""}`} onClick={toggleMenu}>
                    <span ref={iconRef} className={styles.iconWrapper}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </span>
                </button>
            )}
            <nav ref={navRef} className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
                <ul className={styles.sectionListe}>
                    {["home", "about", "stack", "projects", "contact"].map((section, i) => (
                        <li key={section} ref={addToRefs} onClick={() => handleClick(section, i)} className={activeIndex === i ? styles.active : ""}>
                            {t(`navBurguer.${section}`).toUpperCase()}

                            <span className={styles.underline}></span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default NavBurguer;
