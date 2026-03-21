"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { projects, sectionHeadings, ui, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Projects() {
  const { locale } = useI18n();

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.08}
        duration={4}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "fill-purple-500/20 stroke-purple-500/20"
        )}
      />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.projects.title, locale)}
          subtitle={t(sectionHeadings.projects.subtitle, locale)}
        />

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-6",
                "shadow-[0px_1px_1px_rgba(0,0,0,0.03)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all",
                project.featured && "md:col-span-1"
              )}
            >
              {project.featured && (
                <BorderBeam size={150} duration={12} colorFrom="#a855f7" colorTo="#3b82f6" />
              )}

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 group-hover:bg-black/[.02] transition-colors" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-medium text-blue-600 mb-2">
                        {t(ui.featured, locale)}
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {t(project.title, locale)}
                    </h3>
                  </div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 hover:text-blue-600 hover:border-blue-200 transition-all flex-shrink-0"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {t(project.description, locale)}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium text-neutral-400 bg-neutral-50 border border-neutral-100 rounded"
                    >
                      {tech}
                    </span>
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
