import type { InitOptions } from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/lang/en";
import ja from "@/lang/ja";

const detector = new LanguageDetector(null, {
  order: ["navigator", "localStorage"],
});

const option: InitOptions = {
  resources: {
    en: en,
    ja: ja,
  },
};

i18next.use(detector).use(initReactI18next).init(option);
