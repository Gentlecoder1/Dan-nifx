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

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Forex Trading <span className="text-[#ffd700]">Excellence</span>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-xl bg-[#0b0b0b]/50 border border-black/20 shadow-xl shadow-gray-800 transition-colors group hover:border-[#ffd700]/20"
              >
                <div className="bg-[#ffd700]/10 p-4 w-fit rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ffd700]/20">
                  <Icon color="#ffd700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#787c83] text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto p-8 rounded-xl border border-[#ffd700]/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Trading Philosophy</h3>
          <p className="text-[#787c83] text-lg text-center leading-relaxed">
            Success in forex trading requires more than just technical knowledge. It demands discipline, emotional control, 
            and a systematic approach to risk management. Every trade is carefully planned with clear entry and exit criteria, 
            ensuring that capital preservation remains the top priority while pursuing consistent growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
