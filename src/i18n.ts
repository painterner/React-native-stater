import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18_CONFIG } from "./config";
import { noop } from "lodash";

i18n.use(initReactI18next).init(I18_CONFIG).then(noop);

export interface Lang {
  code: string;
}

/**
 * local lang key
 */
export const LOCAL_LANG_KEY = "LOCAL_LANG_KEY";

export default i18n;

/**
 * get i18T instance
 */
export function getI18nT() {
  return i18n.t.bind(i18n);
}

/**
 * set lang
 * @param langCode the lang code
 */
export function setI18nLang(langCode: string) {
  i18n.changeLanguage(langCode).then(noop).catch(noop);
}

/**
 * global translator
 */
export const globalT = getI18nT();
export const globalTExist = i18n.exists.bind(i18n);
