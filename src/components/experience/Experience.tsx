"use client";

import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/siteData";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in quality engineering"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

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
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 -translate-x-1.5 rounded-full bg-indigo-500 glow z-10 mt-8" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-6 md:ml-0 md:w-1/2 glass rounded-xl p-6 hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-2 text-sm text-indigo-400 mb-2">
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  {exp.company}
                </p>
                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="text-indigo-400 mt-0.5">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Chip
                      key={t}
                      size="sm"
                      variant="flat"
                      classNames={{
                        base: "bg-indigo-500/10 border border-indigo-500/20",
                        content: "text-indigo-300 text-xs",
                      }}
                    >
                      {t}
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
