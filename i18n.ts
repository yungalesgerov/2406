import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { i18n as nextI18NextConfig } from "./next-i18next.config";
i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(HttpBackend)
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        ...nextI18NextConfig,
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
