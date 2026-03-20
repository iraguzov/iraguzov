"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo, ui, t } from "@/data/siteData";
import { useI18n, type Locale } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight group">
          <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
            &lt;
          </span>
          <span className="text-white">{personalInfo.name.split(" ")[0]}</span>
          <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
            /&gt;
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors relative group"
              >
                {t(item.label, locale)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumeUrl}
              className="px-4 py-2 text-sm border border-indigo-500/50 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all"
            >
              {t(ui.resume, locale)}
            </a>
          </li>
          {/* Language switcher */}
          <li>
            <button
              onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
              className="px-3 py-1.5 text-xs font-medium border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-white hover:border-indigo-500/50 transition-all uppercase tracking-wider"
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
            className="px-2 py-1 text-xs font-medium border border-[var(--border)] rounded-lg text-[var(--text-secondary)] uppercase"
          >
            {locale === "ru" ? "EN" : "RU"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {t(item.label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
