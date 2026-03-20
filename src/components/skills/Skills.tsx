"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { locale } = useI18n();

  return (
    <section id="skills" className="relative py-32 px-6 bg-zinc-50/60">
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
              className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {t(category.name, locale)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm text-zinc-600 bg-zinc-100 rounded-lg border border-zinc-200 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
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
