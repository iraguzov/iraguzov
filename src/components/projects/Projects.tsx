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

              <div className="flex gap-3">
                <Button
                  as="a"
                  href={project.github}
                  size="sm"
                  variant="bordered"
                  className="border-[var(--border)] text-[var(--text-secondary)] hover:text-white hover:border-indigo-500/50"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t(ui.code, locale)}
                </Button>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
