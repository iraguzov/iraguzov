"use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, sectionHeadings, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { locale } = useI18n();

  return (
    <section id="projects" className="relative py-32 px-6 bg-zinc-50/60">
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
              className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
            >
              {project.featured && (
                <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full px-3 py-0.5 mb-3">
                  {t(ui.featured, locale)}
                </span>
              )}

              <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {t(project.title, locale)}
              </h3>

              <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
                {t(project.description, locale)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
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

              {project.link && project.link !== "#" && (
                <Button
                  as="a"
                  href={project.link}
                  size="sm"
                  color="primary"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
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
