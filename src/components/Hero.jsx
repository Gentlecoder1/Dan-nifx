import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Shield } from "lucide-react";
import heroImage from "../assets/hero-forex.jpg";
import CountUp from "react-countup";
// import { button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 23, 42, 0.85), rgba(16, 23, 42, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffd700]/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/20 mb-6">
              <TrendingUp className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm font-medium text-[#ffd700]">Professional Forex Trader</span>
            </div>
          </motion.div>

            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f0f4f8] via-[#ffd700] to-[#ffd700] bg-clip-text text-transparent"
          >
            Hello, I'm <span className="text-[#ffd700]">Dan_nifx</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#f0f4f8]"
          >
            Trend-Following Forex Trader
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-[#f0f4f8]"
          >
            Mastering the markets through structure, confluence, and discipline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="flex py-3 px-4 gap-3 items-center justify-center text-sm font-semibold rounded-xl bg-[#ffd700] hover:bg-[#ffd700]/90 text-black" style={{ boxShadow: '0 0 40px hsl(142 76% 36% / 0.3)' }}>
              <BarChart3 className="w-5 h-5 mr-2" />
              <span>View Strategies</span>
            </button>
            <button className="flex py-3 px-6 gap-3 items-center justify-center text-sm font-semibold rounded-xl border border-[#ffd700]/30 hover:bg-[#ffd700]/10">
              <Shield className="w-5 h-5 mr-2" />
              <span>Learn More</span>
            </button>
          </motion.div>


          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { 
                value: (
                  <>
                    {<CountUp end={8} duration={7.5} />}+
                  </>
                ), 
                label: "Years Experience" 
              },
              { 
                value: (
                  <>
                    {<CountUp end={92} duration={5.5} />}%
                  </>
                ), 
                label: "Win Rate" 
              },
              { 
                value: (
                  <>
                    ${<CountUp end={2} duration={8.5} />}M+
                  </>
                ), 
                label: "Trading Volume" 
              },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-[#0b0b0b]/50 backdrop-blur-sm border border-[#ffd700]/20 shadow-[0_8px_32px_#000000]/40">
                <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2">{stat.value}</div>
                <div className="text-[#f0f4f8]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
