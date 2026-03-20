"use client";

import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { locale } = useI18n();

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.experience.title, locale)}
          subtitle={t(sectionHeadings.experience.subtitle, locale)}
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 via-violet-400 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-2 rounded-full bg-white border-[3px] border-indigo-500 shadow-md z-10 mt-7" />
              <div className="hidden md:block md:w-1/2" />

              <div className="ml-6 md:ml-0 md:w-1/2 bg-white rounded-2xl p-6 border border-zinc-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mb-3">
                  {t(exp.period, locale)}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">
                  {t(exp.role, locale)}
                </h3>
                <p className="text-zinc-500 text-sm mb-4 font-medium">
                  {exp.company}
                </p>
                <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                  {t(exp.description, locale)}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="text-indigo-500 mt-0.5">▹</span>
                      {t(h, locale)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Chip
                      key={tech}
                      size="sm"
                      variant="flat"
                      classNames={{
                        base: "bg-zinc-100 border border-zinc-200",
                        content: "text-zinc-600 text-xs font-medium",
                      }}
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
