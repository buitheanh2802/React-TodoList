import i18n from 'i18next';
import ReactI18n, { initReactI18next } from 'react-i18next';
import translationVI from './../../locales/vi/translation';

i18n
    .use(initReactI18next)
    .init({
        lng: 'vi',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        },
        resources: {
            vi: {
                translation: translationVI
            }
        }
    });

export default i18n;