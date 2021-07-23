export const API_BASE = 'http://localhost:3000'

export const KEYS = {
    profile: 'profile'
}

/**
 * i18next config
 * follow ../locales/my.json write new translation file and import here
 * https://react.i18next.com/getting-started
 */
 export const I18_CONFIG = {
    resources: {
      en: require("../assets/locales/en.json"),
      th: require("../assets/locales/th.json"),
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  };