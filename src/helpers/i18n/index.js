import i18n from 'i18next';
import ReactI18n, { initReactI18next } from 'react-i18next';

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
                translation: {
                    hello : 'hello reactjs'
                }
            }
        }
    });

export default i18n;