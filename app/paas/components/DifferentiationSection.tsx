"use client";

import { motion } from "framer-motion";

export default function DifferentiationSection() {
  // Motion variants
  const badgeVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="w-full bg-black text-white py-32  relative">
      {/* ⭐ Centered Small Badge at the Top */}
      <motion.div
        className="w-full flex justify-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={badgeVariants}
      >
        <p className="inline-block border border-gray-500 text-gray-400 uppercase text-xs md:text-sm px-3 py-1 rounded-full tracking-wide">
          Differentiation
        </p>
      </motion.div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariants}
        >
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6 bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text">
  Why Cantech Cloud <br /> Stands Out
</h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Cantech Cloud delivers cloud compute solutions that combine speed, flexibility,
            and robust security. Our platform is designed to keep your operations running
            smoothly, letting your business scale efficiently while maintaining top-notch reliability.
          </p>
        </motion.div>

        {/* RIGHT GRID OF CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariants}
        >
          {/* Card 1 */}
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">99.99%</h3>
            <p className="text-gray-300 text-m">
              Guaranteed uptime — keeping your applications available around the clock
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">45%</h3>
            <p className="text-gray-300 text-m">
              Lower operational costs through smart resource management
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">60%</h3>
            <p className="text-gray-300 text-m">
              Quicker deployment cycles compared to traditional IT setups
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">100%</h3>
            <p className="text-gray-300 text-m">
              Elastic scalability — instantly expand or contract based on your needs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
