"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ComparisonSection2() {   // ← NEW NAME
  return (
    <section className="w-full py-20 bg-black">
      {/* Section Heading */}
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
          Choose the plan that fits your business. See what’s included and pick
          the right features for your team.
        </motion.p>
      </motion.div>

      {/* Comparison Cards */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Card – Landio */}
        <motion.div
  variants={fadeUp}
  className="
    relative rounded-2xl p-10 bg-[rgba(255,255,255,0.03)]
    border border-white/20 backdrop-blur-lg shadow-xl
  "
>
  {/* Glow Border Layer */}
  <div className="
      absolute inset-0 rounded-2xl -z-10 
      bg-gradient-to-r from-white/20 to-white/5 
      blur-xl opacity-60
    "
  ></div>

  <h3 className="text-2xl font-semibold text-gray-200 mb-8 flex items-center gap-2">
    Cantech Cloud
  </h3>

  <ul className="space-y-5 text-gray-300">
    {[
      'Fast setup with ready AI workflows',
      'Built to grow and adapt with you',
      'Real-time, AI-powered analytics',
      'Automates tasks, reducing overhead',
      'Expert support + AI guidance',
    ].map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <Check className="w-5 h-5 text-gray-200 mt-1" />
        {item}
      </li>
    ))}
  </ul>
</motion.div>


        {/* Right Card – Others */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-10 bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-lg shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-2">
            Others
          </h3>

          <ul className="space-y-5 text-gray-500">
            {[
              "Slower execution and manual setup",
              "Requires manual updates as you scale",
              "Limited or delayed reporting",
              "Higher labor costs, less automation",
              "Generic support or none at all",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-600 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
