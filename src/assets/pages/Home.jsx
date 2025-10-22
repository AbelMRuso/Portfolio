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
                    content="Portfolio d'Abel Martínez Ruso, développeur Full Stack spécialisé en React, créant des applications web modernes, performantes et accessibles."
                />
            </Helmet>
            <main className={styles.contenair}>
                <StackSection />
                <ProjectSection />
            </main>
        </>
    );
}

export default Home;
