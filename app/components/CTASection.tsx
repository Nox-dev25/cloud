"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";


export default function CTASection() {
  // Box animation
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  // Zoom-in animation for text and button
  const zoomInVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  return (
    <motion.section
      className="relative w-full py-20 flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Box appears first */}
      <motion.div
  className="relative w-[95%] md:w-[90%] rounded-[32px] pb-20 pt-16 px-6 text-center overflow-hidden"
  variants={boxVariants}
>

  {/* Background Image */}
  <Image
    src="/cta-img.jpg"
    alt="bg"
    fill
    className="object-cover z-[1]"
  />
 <div className="absolute inset-0 bg-black/70 z-[2]" />

        {/* Top Shadow Fade */}
        <div
          className="absolute top-0 left-0 w-full h-40 pointer-events-none z-[3]"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.4), transparent)",
          }}
        />
<div className="relative z-[3]">
        {/* Title */}
        <motion.h1
          variants={zoomInVariants}
          className="text-[2.2rem] md:text-[3.5rem] lg:text-[3.5rem] font-bold leading-[3rem] md:leading-[4rem]"
        >
          <span className="block bg-gradient-to-b from-white via-gray-300 to-black-50 bg-clip-text text-transparent">
            Need Some
          </span>
          <span className="block mt-5 bg-gradient-to-b from-white via-gray-300 to-black-50 bg-clip-text text-transparent">
            Professional Help?
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={zoomInVariants}
          className="text-neutral-300 mt-6 text-lg max-w-4xl mx-auto"
        >
          Contact our Customer Service representative to provide you with the best
          custom made solutions on the market, no matter whether you're a small
          business or large enterprise.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#"
          variants={zoomInVariants}
          className="mt-8 md:mt-10 inline-block px-7 py-3 bg-black/70 text-white font-medium rounded-full shadow-[0_0_12px_rgba(192,192,192,0.6)] hover:shadow-[0_0_24px_rgba(192,192,192,1)] transition-all text-lg"
        >
          Let's Talk
        </motion.a>
</div>
        {/* Bottom Shadow Fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-[3]"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 100%, rgba(255,255,255,0.4), transparent)",
          }}
        />
        
      </motion.div>
    </motion.section>
  );
}
