"use client";

import { motion } from "framer-motion";
/* eslint-disable @next/next/no-img-element */
import { personalInfo, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";
import { TerminalAnimation } from "./TerminalAnimation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Hero() {
  const { locale } = useI18n();

  return (
    <HeroHighlight containerClassName="min-h-screen px-4 md:px-0">
      {/* Desktop: Background photo — centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none z-0 hidden md:flex items-center justify-center"
      >
        <div className="relative">
          <img
            src="/hero-bg.png"
            alt=""
            className="object-contain w-auto"
            style={{ height: "80vh" }}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none" style={{ background: "linear-gradient(to top, white 0%, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0) 100%)" }} />
        </div>
      </motion.div>

      {/* Mobile layout: title on top, photo center, rest below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 md:hidden w-full flex flex-col items-center text-center overflow-hidden"
      >
        {/* Name — above photo */}
        <h1 className="text-3xl font-bold leading-[1.15] tracking-tight mb-2 mt-20">
          <span className="text-[var(--text-primary)]">
            {locale === "ru" ? "Привет, я" : "Hi, I'm"}
          </span>
          <br />
          <Highlight className="from-blue-200 to-purple-200">
            {locale === "ru" ? personalInfo.nameRu : personalInfo.name}
          </Highlight>
        </h1>

        {/* Photo with badge overlay */}
        <div className="relative -mt-10">
          {/* Badge — positioned at head level */}
          <div className="absolute top-[22%] right-[20%] z-20">
            <div className="animate-[tag-float-up_3.4s_ease-in-out_infinite]">
              <div
                className="flex items-center gap-2 rounded-full border px-3 py-1.5"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: "rgba(209, 213, 219, 0.7)",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                  color: "rgb(55, 65, 81)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span className="whitespace-nowrap text-xs font-medium">
                  {t(ui.available, locale)}
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="/hero-bg.png"
              alt=""
              className="object-contain w-[150vw] max-w-none mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{ background: "linear-gradient(to top, white 0%, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.4) 55%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0) 100%)" }} />
          </div>
        </div>

        {/* Rest — below photo */}
        <p className="text-sm text-neutral-500 mb-1 font-medium">
          {t(personalInfo.title, locale)}
        </p>

        <p className="text-neutral-400 text-xs mb-5 leading-relaxed max-w-xs">
          {t(personalInfo.tagline, locale)}
        </p>

        <div className="flex flex-wrap gap-2 items-center justify-center">
          <ShimmerButton
            className="text-xs font-medium px-4 py-2"
            shimmerColor="#ffffff"
            background="rgba(0, 0, 0, 0.9)"
            onClick={() => {
              window.open(personalInfo.social.telegram, "_blank");
            }}
          >
            {t(ui.getInTouch, locale)}
          </ShimmerButton>
          <a
            href="#projects"
            className="inline-flex items-center px-3.5 py-2 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-full"
          >
            {t(ui.viewProjects, locale)}
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-2 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-full"
          >
            {t(ui.resume, locale)}
          </a>
        </div>

        <div className="flex items-center gap-2 mt-4">
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-all"
              aria-label={platform}
            >
              <SocialIcon platform={platform} size={14} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Desktop layout: text left + terminal right */}
      <div className="relative z-10 hidden md:grid md:grid-cols-2 gap-12 items-center w-full max-w-[1300px] mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 animate-[tag-float-up_3.4s_ease-in-out_infinite]"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderColor: "rgba(209, 213, 219, 0.7)",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                color: "rgb(55, 65, 81)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
              <span className="whitespace-nowrap text-sm font-medium">
                {t(ui.available, locale)}
              </span>
            </div>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-3">
            <span className="text-[var(--text-primary)]">
              {locale === "ru" ? "Привет, я" : "Hi, I'm"}
            </span>
            <br />
            <Highlight className="from-blue-200 to-purple-200">
              {locale === "ru" ? personalInfo.nameRu : personalInfo.name}
            </Highlight>
          </h1>

          <p className="text-xl text-neutral-500 mb-1.5 font-medium">
            {t(personalInfo.title, locale)}
          </p>

          <p className="text-neutral-400 text-base mb-6 max-w-md leading-relaxed">
            {t(personalInfo.tagline, locale)}
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <ShimmerButton
              className="text-sm font-medium"
              shimmerColor="#ffffff"
              background="rgba(0, 0, 0, 0.9)"
              onClick={() => {
                window.open(personalInfo.social.telegram, "_blank");
              }}
            >
              {t(ui.getInTouch, locale)}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </ShimmerButton>
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-neutral-600 border border-neutral-200 rounded-full hover:bg-neutral-50 hover:text-neutral-900 transition-all"
            >
              {t(ui.viewProjects, locale)}
            </a>
          </div>

          <div className="flex items-center gap-3 mt-5">
            {Object.entries(personalInfo.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-all"
                aria-label={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pl-24"
        >
          <TerminalAnimation />
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}

function SocialIcon({ platform, size = 16 }: { platform: string; size?: number }) {
  const cls = `w-[${size}px] h-[${size}px]`;
  const s = { width: size, height: size };
  switch (platform) {
    case "github":
      return (<svg style={s} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>);
    case "linkedin":
      return (<svg style={s} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
    case "telegram":
      return (<svg style={s} fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>);
    default:
      return null;
  }
}
