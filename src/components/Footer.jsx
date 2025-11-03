import { motion } from "framer-motion";
// import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* <TrendingUp className="w-8 h-8 text-primary" /> */}
            <span className="text-2xl font-bold">
              <span className="text-primary">Forex</span>
              <span className="text-foreground">Trader</span>
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Professional forex trading with proven strategies and consistent results.
          </p>
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ForexTrader. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Trading forex involves substantial risk. Past performance is not indicative of future results.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
