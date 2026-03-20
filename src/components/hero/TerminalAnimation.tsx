"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: "~$", text: "pytest --alluredir=allure-results -n 4", delay: 0 },
  { prompt: "", text: "collecting ... 247 items collected", delay: 1200, color: "text-zinc-500" },
  { prompt: "", text: "✓ test_auth.py::test_login_flow PASSED (1.2s)", delay: 1800, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_api.py::test_rest_endpoints PASSED (0.8s)", delay: 2200, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_checkout.py::test_payment_flow PASSED (2.1s)", delay: 2600, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_mobile.py::test_ios_playback PASSED (1.5s)", delay: 3000, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_perf.py::test_load_under_2s PASSED (0.9s)", delay: 3400, color: "text-emerald-400" },
  { prompt: "", text: "", delay: 3800 },
  { prompt: "", text: "  247 passed, 0 failed in 42.3s", delay: 4000, color: "text-emerald-400 font-semibold" },
  { prompt: "", text: "  Coverage: 94.2% | Flaky: 0%", delay: 4400, color: "text-indigo-400" },
  { prompt: "~$", text: "echo 'All tests passed ✨'", delay: 5000 },
  { prompt: "", text: "All tests passed ✨", delay: 5500, color: "text-amber-300" },
];

export function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((line, i) => {
      const timer = setTimeout(() => setVisibleLines(i + 1), line.delay);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-white">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-100 bg-zinc-50">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs text-zinc-400">terminal — pytest</span>
      </div>

      {/* Terminal content — stays dark */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[320px] bg-zinc-950">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2"
          >
            {line.prompt && (
              <span className="text-indigo-400 select-none">{line.prompt}</span>
            )}
            <span className={line.color || "text-zinc-300"}>{line.text}</span>
          </motion.div>
        ))}
        <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse ml-1" />
      </div>
    </div>
  );
}
