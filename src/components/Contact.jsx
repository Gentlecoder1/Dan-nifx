import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link2 } from "lucide-react";
  
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-[#131621] relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[#ffd700]">Connect</span>
          </h2>
          <p className="md:text-xl text-[#787c83] text-lg max-w-2xl mx-auto">
            Interested in discussing trading strategies or potential collaboration? Let's connect.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 bg-[#0b0b0b]/50 rounded-2xl border border-black/20 shadow-xl shadow-gray-800 h-full">
                <Link2 size={55} color="#ffd700" />
                <h3 className="text-2xl font-bold mb-2">My linkTree</h3>
                <p className="text-[#787c83] text-lg mb-4 font-semibold">
                  Reach out directly for inquiries or consultation requests.
                </p>
                <a
                  href="https://linktr.ee/Dan_nifx" target="_blank"
                  className="text-[#ffd700] font-semibold text-lg hover:text-[#ffd700]/80 transition-colors"
                >
                  https://linktr.ee/Dan_nifx
                </a>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 bg-[#0b0b0b]/50 rounded-2xl border border-black/20 shadow-xl shadow-gray-800 h-full">
                <div className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message</h3>
                <p className="text-[#787c83] text-lg mb-4 font-semibold">
                  Send a message.
                </p>
                <p className="text-[#ffd700] font-semibold text-lg">Response Time: &lt;24h</p>
              </div>
            </motion.div> */}
          </div>
          
        </div>
      </div>
    </section>
  )
}
export default Contact