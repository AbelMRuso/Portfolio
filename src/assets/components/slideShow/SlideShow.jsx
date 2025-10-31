import { useState } from "react";
import styles from "../slideShow/slideShow.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SlideShow({ pictures }) {
    const [showImage, setshowImage] = useState(0);

    return (
        <div className={styles.carrousel}>
            <div className={styles.imageWrapper}>
                {pictures.map((pic, index) => (
                    <img key={index} src={pic} alt="" className={`${styles.carrouselImg} ${index === showImage ? styles.active : ""}`} />
                ))}{" "}
            </div>
            {pictures.length > 1 && (
                <>
                    <p className={styles.hidden}>
                        {showImage + 1}/{pictures.length}
                    </p>

                    <button onClick={() => setshowImage((showImage - 1 + pictures.length) % pictures.length)} className={styles.buttonLeft}>
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={() => {
                            if (showImage >= pictures.length - 1) {
                                setshowImage(0);
                            } else {
                                setshowImage(showImage + 1);
                            }
                        }}
                        className={styles.buttonRight}
                    >
                        <FaArrowRight />
                    </button>
                </>
            )}
        </div>
    );
}

export default SlideShow;
