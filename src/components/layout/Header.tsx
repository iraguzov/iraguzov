"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems, personalInfo, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useI18n();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      setAtTop(scrollYProgress.get() < 0.02);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      {/* Floating nav — appears on scroll up */}
      <AnimatePresence mode="wait">
        {!atTop && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed top-4 inset-x-0 mx-auto z-50",
              "flex max-w-fit items-center justify-center gap-1",
              "rounded-full bg-white/80 backdrop-blur-lg",
              "border border-black/[0.08]",
              "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
              "py-1 sm:py-2 pl-3 sm:pl-8 pr-1 sm:pr-2"
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[9px] sm:text-sm text-neutral-600 hover:text-neutral-900 px-1 sm:px-3 py-0.5 sm:py-1.5 transition-colors"
              >
                {t(item.label, locale)}
              </a>
            ))}
            <button
              onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
              className="text-[8px] sm:text-xs font-medium text-neutral-500 hover:text-neutral-900 px-1 sm:px-2.5 py-0.5 sm:py-1 transition-colors"
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-200 text-[9px] sm:text-sm font-medium text-black px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full relative overflow-hidden"
            >
              <span>{t(ui.resume, locale)}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static header — visible at top */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 z-40 py-5"
      >
        <nav className="mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white font-bold text-sm">IR</span>
            </div>
            <span className="font-semibold text-[var(--text-primary)] tracking-tight hidden sm:block">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {t(item.label, locale)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
              className="text-xs font-medium text-neutral-400 hover:text-neutral-900 px-2.5 py-1 border border-neutral-200 rounded-full transition-colors"
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              {t(ui.resume, locale)}
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
              className="text-xs font-medium text-neutral-400 px-2 py-1 border border-neutral-200 rounded-full"
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span className={`block w-4 h-[1.5px] bg-neutral-700 transition-all origin-center ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
                <span className={`block w-4 h-[1.5px] bg-neutral-700 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-4 h-[1.5px] bg-neutral-700 transition-all origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-100 bg-white mt-3"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-all text-sm"
                  >
                    {t(item.label, locale)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
