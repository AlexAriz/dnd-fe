import en from "Locales/en.json";
import es from "Locales/es.json";
import type { Languages } from "Types/language";

export const LANGUAGES: Readonly<Record<string, Languages>> = {
  EN: "en",
  ES: "es",
};

export const LOCALES: Readonly<Record<Languages, unknown>> = {
  en,
  es,
};
