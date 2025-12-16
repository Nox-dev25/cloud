"use client";

import FeatureSection from "../../components/ui/stack-feature-section";
import { motion } from "framer-motion";
const badgeVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function Integration() {

  return(
    <section>
        <motion.div
            className="w-full flex justify-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={badgeVariants}
          >
            <p className="inline-block border border-gray-500 text-gray-400 uppercase text-xs md:text-sm px-3 py-1 rounded-full tracking-wide">
              Integration
            </p>
          </motion.div>
          <FeatureSection />
    </section>
    
  );
  
}