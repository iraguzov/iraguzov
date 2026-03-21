"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { skills, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function SkillCard({ name, icon }: { name: string; icon?: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-neutral-200/60 bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.03)] hover:shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:border-neutral-300 transition-all cursor-default">
      {icon && <span className="text-base">{icon}</span>}
      <span className="text-sm font-medium text-neutral-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function Skills() {
  const { locale } = useI18n();

  // Split skills into two rows for marquee
  const allSkills = skills.categories.flatMap((cat) =>
    cat.items.map((s) => ({ name: s.name, icon: cat.icon }))
  );
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section id="skills" className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Animated grid bg */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "fill-blue-500/20 stroke-blue-500/20"
        )}
      />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.skills.title, locale)}
          subtitle={t(sectionHeadings.skills.subtitle, locale)}
        />

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skills.categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-5 shadow-[0px_1px_1px_rgba(0,0,0,0.03)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all"
            >
              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 group-hover:bg-black/[.02] transition-colors" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-lg">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {t(category.name, locale)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-100 rounded-md hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee ticker */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <Marquee pauseOnHover className="[--duration:30s] mb-3">
            {row1.map((s, i) => (
              <SkillCard key={i} name={s.name} icon={s.icon} />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:35s]">
            {row2.map((s, i) => (
              <SkillCard key={i} name={s.name} icon={s.icon} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
