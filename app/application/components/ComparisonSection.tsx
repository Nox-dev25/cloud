"use client";

import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const bars = [
  { title: "AWS", height: 300 }, 
  { title: "Cantech Cloud", height: 450, highlighted: true }, 
  { title: "Google Cloud", height: 300 },
];

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      {/* Section Intro */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="inline-block border border-gray-500 text-gray-500 uppercase text-sm px-3 py-1 rounded-full mb-2 tracking-wide"
          variants={fadeUp}
        >
          comparison
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-gray-200 mb-2"
          variants={fadeUp}
        >
          Compare Us
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto"
          variants={fadeUp}
        >
          Choose the plan that fits your business. See what’s included and pick the right features for your team
        </motion.p>
      </motion.div>

      {/* BIG Bars */}
      <motion.div
        className="flex justify-center items-end gap-16 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div
  className={`
    w-40 md:w-60 rounded-t-3xl transition-all duration-500
    border border-white/10
    bg-[linear-gradient(135deg,#0d0d0d,#050505)]
    shadow-[0_0_10px_rgba(0,0,0,0.5)]
    ${bar.highlighted ? "shadow-[0_0_25px_rgba(255,255,255,0.4)] border-white/40 scale-[1.05]" : ""}
  `}
  style={{ height: `${bar.height}px` }}
/>

            <h3 className="text-gray-200 font-semibold mt-6 text-2xl">
              {bar.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
