import Hero from "../components/hero/Hero";
import StackSection from "../components/stackSection/StackSection";
import ProjectSection from "../components/projectSection/ProjectSection";
import styles from "../pages/Home.module.scss";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>Accueil | Abel MR Dev</title>
                <meta
                    name="description"
                    content="Bienvenue sur le portfolio d'Abel Martínez Ruso, développeur web passionné par la création de sites modernes, accessibles et performants."
                />
            </Helmet>
            <main className={styles.contenair}>
                <Hero></Hero>
                <StackSection />
                <ProjectSection />
            </main>
        </>
    );
}

export default Home;
