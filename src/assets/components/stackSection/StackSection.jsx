import CardFormation from "../formation-card/CardFormation";
import openclassroomLogo from "../../images/openclassrooms_logo.png";
import styles from "../formation-card/CardFormation.module.scss";
import { FaCss3, FaPaintBrush, FaHtml5, FaReact, FaServer, FaNodeJs, FaDatabase, FaTools, FaGithub } from "react-icons/fa";
import stackStyles from "../stackSection/StackSection.module.scss";

function StackSection() {
    return (
        <section>
            <h2 className={stackStyles.centerContent}>Formation et stack technologique</h2>
            <div className={stackStyles.contenair}>
                <div className={stackStyles.centerContent}>
                    <h3>Formation</h3>
                    <CardFormation layout="side" title={"Développeur Web"} subtitle={"OpenClasroom"} date={"avril - octobre 2025"}>
                        <img className={styles.logo} src={openclassroomLogo} alt="Logo du centre de formation Open Classroom" />
                    </CardFormation>
                </div>
                <div className={stackStyles.centerContent}>
                    <h3>Stack technologique</h3>
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

                        <div className={styles.tech}>
                            <FaCss3 className={styles.icons} />
                            <span>CSS</span>
                        </div>

                        <div className={styles.tech}>
                            <FaReact className={styles.icons} />
                            <span>REACT</span>
                        </div>
                    </CardFormation>

                    <CardFormation
                        layout="stack"
                        title={
                            <>
                                <FaServer className={styles.paintBrush} />
                                Backend
                            </>
                        }
                    >
                        <div className={styles.tech}>
                            <FaNodeJs className={styles.icons} />
                            <span>NODE + EXPRESS</span>
                        </div>

                        <div className={styles.tech}>
                            <FaDatabase className={styles.icons} />
                            <span>MONGODB</span>
                        </div>
                    </CardFormation>

                    <CardFormation
                        layout="stack"
                        title={
                            <>
                                <FaTools className={styles.paintBrush} />
                                Tools
                            </>
                        }
                    >
                        <div className={styles.tech}>
                            <FaGithub className={styles.icons} />
                            <span>Github</span>
                        </div>

                        <div className={styles.tech}>
                            <FaGithub className={styles.icons} />
                            <span>MONGODB</span>
                        </div>
                    </CardFormation>
                </div>
            </div>
        </section>
    );
}

export default StackSection;
