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

              <div className="space-y-4">
                {category.items.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[var(--text-secondary)]">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--surface-light)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + skillIdx * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
