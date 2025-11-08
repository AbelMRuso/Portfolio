import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonFR from "./translate/fr/common.json";
import projectsFR from "./translate/fr/projects.json";
import commonES from "./translate/es/common.json";
import projectsES from "./translate/es/projects.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
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
        fallbackLng: "es",
        lowerCaseLng: true,
        ns: ["common", "projects"],
        defaultNS: "common",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n;
