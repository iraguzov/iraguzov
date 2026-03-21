"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { locale } = useI18n();

  return (
    <section id="experience" className="relative py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.experience.title, locale)}
          subtitle={t(sectionHeadings.experience.subtitle, locale)}
        />

        <div className="relative">
          {/* Timeline line — center on desktop, left on mobile */}
          <div className="absolute left-[11px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-400/40 via-neutral-200 to-transparent" />

          <div className="space-y-6 md:space-y-10">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative group pl-10 md:pl-0 md:flex md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot — left on mobile, center on desktop */}
                  <div className="absolute left-[5px] md:left-1/2 md:-translate-x-1/2 top-[22px] w-[13px] h-[13px] rounded-full border-2 border-blue-500 bg-white z-10 group-hover:bg-blue-500 transition-colors" />

                  {/* Spacer — half width */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card — half width */}
                  <div className="md:w-1/2">
                    <div className="rounded-xl border border-neutral-200/60 bg-white p-5 shadow-[0px_1px_1px_rgba(0,0,0,0.03)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all relative">
                      <div className="pointer-events-none absolute inset-0 rounded-xl group-hover:bg-black/[.015] transition-colors" />

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-neutral-50 border border-neutral-100 text-[11px] font-medium text-neutral-500">
                          {t(exp.period, locale)}
                        </span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-xs font-medium text-neutral-400">
                          {exp.company}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-neutral-900 mb-2">
                        {t(exp.role, locale)}
                      </h3>

                      <p className="text-sm text-neutral-400 mb-3 leading-relaxed">
                        {t(exp.description, locale)}
                      </p>

                      <ul className="space-y-1.5 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-neutral-500">
                            <svg className="w-3 h-3 text-blue-500 mt-[3px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                            {t(h, locale)}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-medium text-neutral-400 bg-neutral-50 border border-neutral-100 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
