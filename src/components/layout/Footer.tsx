"use client";

import { personalInfo } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
          Next.js & HeroUI.
        </p>
        <div className="flex gap-4">
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-indigo-400 transition-colors capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
