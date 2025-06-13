// index.js - Ուղղված i18n կարգավորում
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'hy',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        backend: {
            // Ուղղված path - պետք է {{lng}} պարունակի լեզվի կոդը
            loadPath: '/locales/{{lng}}/{{lng}}.json'
        },
        // Հնարավոր լեզուների ցանկ
        supportedLngs: ['hy', 'en', 'ru'],
        // Լեզու հայտնաբերման կարգավորումներ
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage']
        }
    });

export default i18n;