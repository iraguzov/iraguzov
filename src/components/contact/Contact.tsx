"use client";

import { motion } from "framer-motion";
import { Button, Input, Textarea } from "@heroui/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/siteData";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Interested in working together? Let's connect"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your team.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-indigo-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {personalInfo.email}
              </a>

              <a
                href={personalInfo.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-indigo-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                Telegram
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-indigo-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              label="Name"
              variant="bordered"
              classNames={{
                inputWrapper: "border-[var(--border)] hover:border-indigo-500/50 bg-transparent",
                label: "text-[var(--text-secondary)]",
              }}
            />
            <Input
              label="Email"
              type="email"
              variant="bordered"
              classNames={{
                inputWrapper: "border-[var(--border)] hover:border-indigo-500/50 bg-transparent",
                label: "text-[var(--text-secondary)]",
              }}
            />
            <Textarea
              label="Message"
              variant="bordered"
              minRows={4}
              classNames={{
                inputWrapper: "border-[var(--border)] hover:border-indigo-500/50 bg-transparent",
                label: "text-[var(--text-secondary)]",
              }}
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full bg-indigo-600 hover:bg-indigo-500 font-semibold"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
