"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

const lines = [
  { prompt: "~$", text: "pytest --alluredir=allure-results -n 4", delay: 0 },
  { prompt: "", text: "collecting ... 247 items collected", delay: 1200, color: "text-slate-500" },
  { prompt: "", text: "✓ test_auth.py::test_login_flow PASSED (1.2s)", delay: 1800, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_api.py::test_rest_endpoints PASSED (0.8s)", delay: 2200, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_checkout.py::test_payment_flow PASSED (2.1s)", delay: 2600, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_mobile.py::test_ios_playback PASSED (1.5s)", delay: 3000, color: "text-emerald-400" },
  { prompt: "", text: "✓ test_perf.py::test_load_under_2s PASSED (0.9s)", delay: 3400, color: "text-emerald-400" },
  { prompt: "", text: "", delay: 3800 },
  { prompt: "", text: "  247 passed, 0 failed in 42.3s", delay: 4000, color: "text-emerald-400 font-medium" },
  { prompt: "", text: "  Coverage: 94.2% | Flaky: 0%", delay: 4400, color: "text-blue-400" },
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
    <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-neutral-200/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] opacity-90">
      <BorderBeam size={250} duration={12} delay={0} colorFrom="#3b82f6" colorTo="#a855f7" />

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-100 bg-neutral-50/80">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[11px] text-neutral-400 font-mono">terminal — pytest</span>
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[300px] bg-[#0f172a]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-2"
          >
            {line.prompt && (
              <span className="text-blue-400 select-none">{line.prompt}</span>
            )}
            <span className={line.color || "text-slate-300"}>{line.text}</span>
          </motion.div>
        ))}
        <span className="inline-block w-[7px] h-4 bg-blue-400 animate-pulse ml-1 rounded-sm" />
      </div>
    </div>
  );
}
