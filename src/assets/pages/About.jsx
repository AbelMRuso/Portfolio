import AboutSection from "../components/about-section/AboutSection";
import { Helmet } from "react-helmet";
import styles from "../pages/About.module.scss";

function About() {
    return (
        <>
            <Helmet>
                <title>À propos | Abel MR Dev</title>
                <meta
                    name="description"
                    content="Découvrez le parcours d'Abel Martínez Ruso, développeur Full Stack passionné par React, alliant rigueur, curiosité et projets web innovants, de la pédagogie au code."
                />
            </Helmet>
            <div className={styles.contenair}>
                <AboutSection />
            </div>
        </>
    );
}

export default About;
