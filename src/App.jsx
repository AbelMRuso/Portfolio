import Home from "./assets/pages/Home";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();

    return (
        <>
            <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            <Home />
        </>
    );
}

export default App;
