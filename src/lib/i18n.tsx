"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "ru" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (ru: string, en: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "ru",
  setLocale: () => {},
  t: (ru) => ru,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  const t = useCallback(
    (ru: string, en: string) => (locale === "ru" ? ru : en),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
