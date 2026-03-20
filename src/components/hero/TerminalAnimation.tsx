"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: "~$", text: "playwright test --reporter=allure", delay: 0 },
  {
    prompt: "",
    text: "Running 247 tests using 4 workers",
    delay: 1200,
    color: "text-zinc-400",
  },
  {
    prompt: "",
    text: "✓ [chromium] auth.spec.ts — Login flow (1.2s)",
    delay: 1800,
    color: "text-green-400",
  },
  {
    prompt: "",
    text: "✓ [chromium] api.spec.ts — REST endpoints (0.8s)",
    delay: 2200,
    color: "text-green-400",
  },
  {
    prompt: "",
    text: "✓ [firefox] checkout.spec.ts — Payment (2.1s)",
    delay: 2600,
    color: "text-green-400",
  },
  {
    prompt: "",
    text: "✓ [webkit] dashboard.spec.ts — Analytics (1.5s)",
    delay: 3000,
    color: "text-green-400",
  },
  {
    prompt: "",
    text: "✓ [chromium] perf.spec.ts — Load time < 2s (0.9s)",
    delay: 3400,
    color: "text-green-400",
  },
  { prompt: "", text: "", delay: 3800 },
  {
    prompt: "",
    text: "  247 passed (42s)",
    delay: 4000,
    color: "text-green-400 font-semibold",
  },
  {
    prompt: "",
    text: "  Coverage: 94.2% | Flaky: 0%",
    delay: 4400,
    color: "text-indigo-400",
  },
  { prompt: "~$", text: "echo 'All tests passed ✨'", delay: 5000 },
  {
    prompt: "",
    text: "All tests passed ✨",
    delay: 5500,
    color: "text-yellow-300",
  },
];

export function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    lines.forEach((line, i) => {
      const timer = setTimeout(() => {
        setVisibleLines(i + 1);
      }, line.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="glass rounded-xl overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-zinc-500">
          terminal — playwright
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[320px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2"
          >
            {line.prompt && (
              <span className="text-indigo-400 select-none">
                {line.prompt}
              </span>
            )}
            <span className={line.color || "text-zinc-200"}>{line.text}</span>
          </motion.div>
        ))}

        {/* Blinking cursor */}
        <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse ml-1" />
      </div>
    </div>
  );
}
