import Footer from "./assets/components/footer/Footer";
import Header from "./assets/components/header/Header";
import Hero from "./assets/components/hero/Hero";
import ProjectSection from "./assets/components/projectSection/ProjectSection";
import StackSection from "./assets/components/stackSection/StackSection";

function App() {
    return (
        <>
            <Header />
            <Hero></Hero>
            <StackSection />
            <ProjectSection />
            <Footer />
        </>
    );
}

export default App;
