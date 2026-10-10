const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  el: () => import("./dictionaries/el.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale === "en" || locale === "el";

export const getDictionary = async (locale: Locale) => dictionaries[locale]();