import StackSection from "../components/stackSection/StackSection";
import ProjectSection from "../components/projectSection/ProjectSection";
import styles from "../pages/Home.module.scss";
import { Helmet } from "react-helmet";
import AboutSection from "../components/about-section/AboutSection";
import NavSection from "../components/navSection/NavSection";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useState, useRef, useEffect } from "react";

function Home() {
    const [activeSection, setActiveSection] = useState("home");

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const stackRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        stack: stackRef,
        projects: projectsRef,
        contact: contactRef,
    };

    const scrollToSection = (section) => {
        sectionRefs[section]?.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const options = {
            root: null, // observa el viewport
            rootMargin: "0px",
            threshold: 0.5, // cuando el 50% de la sección está visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.dataset.section);
                }
            });
        }, options);

        // Observa cada sección usando el ref y un atributo "data-section"
        const sections = [homeRef, aboutRef, stackRef, projectsRef, contactRef];
        sections.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        // Cleanup
        return () => {
            sections.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Accueil | Abel MR Dev</title>
                <meta
                    name="description"
                    content="Portfolio d'Abel Martínez Ruso, développeur Full Stack spécialisé en React, créant des applications web modernes, performantes et accessibles."
                />
            </Helmet>
            <header>
                <Header ref={homeRef} />
                <NavSection activeSection={activeSection} onNavigate={scrollToSection} />
            </header>

            <main className={styles.contenair}>
                <AboutSection ref={aboutRef} />
                <StackSection ref={stackRef} />
                <ProjectSection ref={projectsRef} />
            </main>
            <Footer ref={contactRef} />
        </>
    );
}

export default Home;
