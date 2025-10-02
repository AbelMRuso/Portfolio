import Hero from "./assets/components/hero/Hero";
import CardFormation from "./assets/components/formation-card/CardFormation";
import openclassroomLogo from "../src/assets/images/openclassrooms_logo.png";
import styles from "../src/assets/components/formation-card/CardFormation.module.scss";
import { FaPaintBrush } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

function App() {
    return (
        <>
            <Hero></Hero>
            <CardFormation layout="side" title={"Développeur Web"} subtitle={"OpenClasroom"} date={"avril - octobre 2025"}>
                <img className={styles.logo} src={openclassroomLogo} alt="Logo du centre de formation Open Classroom" />
            </CardFormation>
            <CardFormation
                layout="stack"
                title={
                    <>
                        <FaPaintBrush className={styles.paintBrush} />
                        Frontend
                    </>
                }
            >
                <div className={styles.tech}>
                    <FaHtml5 className={styles.icons} />
                    <span>HTML</span>
                </div>

                <FaHtml5 className={styles.icons} />
                <FaHtml5 className={styles.icons} />
            </CardFormation>
        </>
    );
}

export default App;
