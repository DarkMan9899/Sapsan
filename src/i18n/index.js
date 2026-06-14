import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'hy',          // ✅ ՄԻՇՏ հայերեն
        lng: 'hy',                  // ✅ initial language
        supportedLngs: ['hy', 'en', 'ru'],
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{lng}}.json',
        },
        detection: {
            order: ['localStorage', 'querystring', 'cookie', 'htmlTag'],
            caches: ['localStorage'],
        },
    });

export default i18n;
