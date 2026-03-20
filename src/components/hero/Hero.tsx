"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Image from "next/image";
import { personalInfo, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";
import { TerminalAnimation } from "./TerminalAnimation";

export function Hero() {
  const { locale } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 grid-pattern">
      {/* Background photo — centered, behind all content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <Image
          src="/hero-bg.png"
          alt=""
          width={466}
          height={900}
          className="object-contain max-h-[90vh]"
          priority
          aria-hidden="true"
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t(ui.available, locale)}
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {locale === "ru" ? "Привет, я " : "Hi, I'm "}
            <span className="gradient-text">
              {locale === "ru" ? personalInfo.nameRu : personalInfo.name}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-2">
            {t(personalInfo.title, locale)}
          </p>

          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg">
            {t(personalInfo.tagline, locale)}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              as="a"
              href="#contact"
              color="primary"
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 font-semibold glow"
            >
              {t(ui.getInTouch, locale)}
            </Button>
            <Button
              as="a"
              href="#projects"
              variant="bordered"
              size="lg"
              className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
            >
              {t(ui.viewProjects, locale)}
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-8">
            {Object.entries(personalInfo.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all"
                aria-label={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Terminal animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TerminalAnimation />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "github":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "telegram":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      );
    default:
      return null;
  }
}
