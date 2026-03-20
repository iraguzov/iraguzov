"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { locale } = useI18n();

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.skills.title, locale)}
          subtitle={t(sectionHeadings.skills.subtitle, locale)}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-xl p-6 hover:border-indigo-500/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">
                  {t(category.name, locale)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm text-[var(--text-secondary)] bg-[var(--surface-light)] rounded-lg border border-[var(--border)] hover:text-indigo-400 hover:border-indigo-500/30 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
