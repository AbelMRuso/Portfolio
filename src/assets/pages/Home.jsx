import Hero from "../components/hero/Hero";
import StackSection from "../components/stackSection/StackSection";
import ProjectSection from "../components/projectSection/ProjectSection";
import styles from "../pages/Home.module.scss";

function Home() {
    return (
        <main className={styles.contenair}>
            <Hero></Hero>
            <StackSection />
            <ProjectSection />
        </main>
    );
}

export default Home;
