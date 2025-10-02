import Hero from "./assets/components/hero/Hero";
import CardFormation from "./assets/components/formation-card/CardFormation";
import openclassroomLogo from "../src/assets/images/openclassrooms_logo.png";
import styles from "../src/assets/components/formation-card/CardFormation.module.scss";

function App() {
    return (
        <>
            <Hero></Hero>
            <CardFormation layout="side" title={"Développeur Web"} subtitle={"OpenClasroom"} date={"avril - octobre 2025"}>
                <img className={styles.logo} src={openclassroomLogo} alt="Logo du centre de formation Open Classroom" />
            </CardFormation>
        </>
    );
}

export default App;
