import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Shield,
  Clock,
  Target,
  BarChart3,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Technical Analysis",
    description:
      "Advanced chart patterns, price action and context to find high probability trades.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Strict position sizing, stop placement and capital preservation rules.",
  },
  {
    icon: Clock,
    title: "Market Timing",
    description: "Focus on high-volume sessions and multi-timeframe alignment.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Clear entries with structure alignment and candle confirmation.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Detailed trade journaling and metrics for continuous improvement.",
  },
  {
    icon: Brain,
    title: "Psychology",
    description: "Discipline and emotional control to stick to the plan.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span
              className="px-3 py-1 rounded-full text-[#ffd700] font-semibold"
              style={{ background: "rgba(255,215,0,0.06)", boxShadow: "0 0 40px hsl(142 76% 36% / 0.3)" }}
            >
              About
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
            Forex Trading Excellence
          </h2>
          <p className="text-gray-300 text-lg">
            Combining market-structure based analysis, confluence, and strict risk
            management to produce consistent trading performance across timeframes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#0b0b0b]/50 border border-black/20"
                style={{ boxShadow: "0 8px 32px hsl(0 0% 0% / 0.4)" }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(255,215,0,0.06)", boxShadow: "0 0 40px hsl(142 76% 36% / 0.3)" }}>
                  <Icon className="w-6 h-6 text-[#ffd700]" />
                </div>
                <h3 className="text-lg font-semibold text-[#ffd700] mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
