import en from "../locales/en.json";
import es from "../locales/es.json";
import type { Languages } from "../types/language";

export const LANGUAGES: Readonly<Record<string, Languages>> = {
  EN: "en",
  ES: "es",
};

export const LOCALES: Readonly<Record<Languages, unknown>> = {
  en,
  es,
};
