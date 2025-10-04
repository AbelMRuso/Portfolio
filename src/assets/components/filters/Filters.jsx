import styles from "../filters/Filters.module.scss";

function Filters({ setFilter }) {
    return (
        <>
            <div className={styles.contenair}>
                <h3>Filtres</h3>
                <div className={styles.buttonsContenair}>
                    <button onClick={() => setFilter("all")}>Tous</button>
                    <button onClick={() => setFilter("front")}>Front</button>
                    <button onClick={() => setFilter("back")}>Back</button>
                </div>
            </div>
        </>
    );
}

export default Filters;
