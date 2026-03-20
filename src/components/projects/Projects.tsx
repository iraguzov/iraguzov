"use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, sectionHeadings, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { locale } = useI18n();

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.projects.title, locale)}
          subtitle={t(sectionHeadings.projects.subtitle, locale)}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-indigo-500/20 transition-all group"
            >
              {project.featured && (
                <span className="inline-block text-xs text-indigo-400 border border-indigo-500/30 rounded-full px-2 py-0.5 mb-3">
                  {t(ui.featured, locale)}
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {t(project.title, locale)}
              </h3>

              <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                {t(project.description, locale)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Chip
                    key={tech}
                    size="sm"
                    variant="flat"
                    classNames={{
                      base: "bg-indigo-500/10 border border-indigo-500/20",
                      content: "text-indigo-300 text-xs",
                    }}
                  >
                    {tech}
                  </Chip>
                ))}
              </div>

              {project.link && project.link !== "#" && (
                <Button
                  as="a"
                  href={project.link}
                  size="sm"
                  color="primary"
                  className="bg-indigo-600 hover:bg-indigo-500"
                >
                  {t(ui.liveDemo, locale)}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
