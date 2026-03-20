"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

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
        scrolled ? "glass py-3 shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight group">
          <span className="text-indigo-600 group-hover:text-indigo-500 transition-colors">
            &lt;
          </span>
          <span className="text-zinc-900">{personalInfo.name.split(" ")[0]}</span>
          <span className="text-indigo-600 group-hover:text-indigo-500 transition-colors">
            /&gt;
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-[var(--text-secondary)] hover:text-zinc-900 transition-colors relative group"
              >
                {t(item.label, locale)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              {t(ui.resume, locale)}
            </a>
          </li>
          <li>
            <button
              onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
              className="px-3 py-1.5 text-xs font-medium border border-zinc-300 rounded-full text-zinc-500 hover:text-zinc-900 hover:border-indigo-400 transition-all uppercase tracking-wider"
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
            className="px-2 py-1 text-xs font-medium border border-zinc-300 rounded-full text-zinc-500 uppercase"
          >
            {locale === "ru" ? "EN" : "RU"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-zinc-700 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-zinc-700 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-zinc-700 transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-zinc-200"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
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
