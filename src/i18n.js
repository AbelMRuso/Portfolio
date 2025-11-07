import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonFR from "./translate/fr/common.json";
import projectsFR from "./translate/fr/projects.json";
import commonES from "./translate/es/common.json";
import projectsES from "./translate/es/projects.json";

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            common: commonFR,
            projects: projectsFR,
        },
        es: {
            common: commonES,
            projects: projectsES,
        },
    },
    lng: "es", // idioma inicial
    fallbackLng: "es", // fallback
    ns: ["common", "projects"],
    defaultNS: "common",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
