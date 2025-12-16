"use client";

import Cards from './Cards';
import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

import TopFadeGradient from "./TopFadeGradient";

interface FeatureCardProps {
  iconSrc?: string; // optional if not used
  title: string;
  description: string;
}

// Motion variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function TwoCardSection() {
  return (
    <section className="relative w-full pt-20 pb-40">
      <TopFadeGradient />
      {/* Section Intro */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="inline-block border border-gray-500 text-gray-500 uppercase text-sm px-3 py-1 mb-3 rounded-full mb-2 tracking-wide"
          variants={fadeUp}
        >
          Services
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-medium text-white mb-2 bg-clip-text text-transparent mb-2"
          variants={fadeUp}
        >
          Select the service that best fits your needs
        </motion.h2>

        <motion.p
          className="text-4xl md:text-xl text-gray-400 max-w-4xl mx-auto"
          variants={fadeUp}
        >
          Choose from our range of services to get started quickly and easily
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <Cards
            imageSrc="/card1.png"
            title="PaaS"
            description="Quick access to pre-configured cloud environments"
            button="Access Service"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Cards
            imageSrc="/card2.png"
            title="Cloud Compute"
            description="Full control over computing resources for advanced workloads"
            button="Access Service"
          />
        </motion.div>
      </motion.div>

      {/* Glowing Divider */}
<motion.div
  className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"
  variants={fadeUp}
/>


    </section>
  );
}
