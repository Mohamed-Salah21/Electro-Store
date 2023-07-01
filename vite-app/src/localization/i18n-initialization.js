import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";
import translationAR from "./ar.json";
function i18nextInit() {
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
    lng: "ar",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18nextInit;
