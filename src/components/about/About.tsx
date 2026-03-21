"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BorderBeam } from "@/components/ui/border-beam";
import { aboutText, sectionHeadings, t } from "@/data/siteData";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { locale } = useI18n();

  return (
    <section id="about" className="relative py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={t(sectionHeadings.about.title, locale)}
          subtitle={t(sectionHeadings.about.subtitle, locale)}
        />

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-5"
          >
            {aboutText.paragraphs.map((p, i) => (
              <p key={i} className="text-neutral-500 leading-[1.8] text-[15px]">
                {t(p, locale)}
              </p>
            ))}
          </motion.div>

          {/* Stats — bento cards with border beam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {aboutText.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-5 text-center shadow-[0px_1px_1px_rgba(0,0,0,0.03),0px_4px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-shadow"
              >
                {i === 0 && <BorderBeam size={120} duration={10} colorFrom="#3b82f6" colorTo="#06b6d4" />}
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                  {t(stat.label, locale)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
