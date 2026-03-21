"use client";

import { personalInfo } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="section-divider mb-8" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">IR</span>
          </div>
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
