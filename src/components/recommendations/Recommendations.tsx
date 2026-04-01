"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recommendations, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Recommendations() {
  const { locale } = useI18n();

  return (
    <section id="recommendations" className="relative py-16 md:py-24 px-4 md:px-6">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.recommendations.title, locale)}
          subtitle={t(sectionHeadings.recommendations.subtitle, locale)}
        />

        <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.03)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="relative z-10">
                {/* Quote icon */}
                <svg className="w-8 h-8 text-blue-100 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>

                <p className="text-sm text-neutral-500 leading-relaxed mb-4 italic">
                  {t(rec.text, locale)}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                    {rec.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {locale === "ru" ? rec.name : rec.nameEn}
                    </p>
                    {rec.company && (
                      <p className="text-xs text-neutral-400">
                        {t(rec.role, locale)} @ {rec.company}
                      </p>
                    )}
                    {!rec.company && (
                      <p className="text-xs text-neutral-400">
                        {t(rec.role, locale)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
