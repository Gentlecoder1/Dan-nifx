// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Target, LineChart, Clock, TrendingUp } from "lucide-react";

const strategyPoints = [
  {
    icon: Target,
    title: "Multi-Timeframe Analysis",
    description: "I analyze the market starting from the Weekly timeframe to determine strong levels, use the Daily for trend direction, refine zones on H4/H1, and take entries on M30 using structure alignment and candlestick confirmation.",
    tags: ["Technical Analysis", "Trend Following"]
  },
  {
    icon: LineChart,
    title: "Price Action Strategy",
    description: "Focus on pure price movements, support/resistance levels, and candlestick patterns for clean, indicator-free trading decisions.",
    tags: ["Price Action", "Chart Patterns"]
  },
  {
    icon: Clock,
    title: "Session Trading",
    description: "Capitalizing on volatility during London and New York sessions with strategic position management and optimal timing.",
    tags: ["Session Strategy", "Volatility"]
  },
  {
    icon: TrendingUp,
    title: "Risk:Reward Optimization",
    description: "Minimum 1:2 risk-reward ratio on all trades with strict stop-loss placement and scaled profit-taking strategies.",
    tags: ["Risk Management", "Position Sizing"]
  }
];

const Strategy = () => {
  return (
    <section id="strategy" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trading <span className="text-[#ffd700]">Strategy</span>
          </h2>
          <p className="text-gray-300 text-lg">
            A systematic approach combining technical analysis, risk management, 
            and years of market experience to consistently identify profitable opportunities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {strategyPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-8 bg-card/80 backdrop-blur-sm border border-[#ffd700]/30 hover:border-[#ffd700] rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_#ffd700]/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#d4c881] to-[#ffd700] group-hover:shadow-[0_0_40px_#ffd700]/40 w-fit transition-all duration-300">
                      <Icon color="black" size={35} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-[#8b9dc3] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <div 
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-800 rounded-xl text-[12px] font-semibold py-1 px-3"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-xl">
            <p className="text-center text-[#8b9dc3] italic">
              <span className="text-[#ffd700] font-semibold">Note:</span> All strategies are continuously 
              refined based on market conditions and backtested results. Past performance does not 
              guarantee future results. Trading involves risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
