import AboutSection from "../components/about-section/AboutSection";
import { Helmet } from "react-helmet";

function About() {
    return (
        <>
            <Helmet>
                <title>À propos | Abel MR Dev</title>
                <meta
                    name="description"
                    content="Découvrez le parcours et les valeurs d'Abel Martínez Ruso, développeur web passionné par le code propre et les projets créatifs."
                />
            </Helmet>
            <AboutSection />;
        </>
    );
}

export default About;
