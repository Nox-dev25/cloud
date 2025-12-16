"use client";

import { motion, Variants, easeOut } from "framer-motion";
import Cards from "./Cards2";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
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

export default function ServicesSection() {
  return (
   <section className="w-full flex flex-col gap-[1px]">

      {/* Section Intro */}
            <motion.div
              className="max-w-6xl mx-auto text-center mb-16"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                className="inline-block border border-gray-500 text-gray-500 uppercase text-sm px-3 py-1 rounded-full mb-2 tracking-wide"
                variants={fadeUp}
              >
                Features
              </motion.p>
      
              <motion.h2
                className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2"
                variants={fadeUp}
              >
                Cloud Platform For Developer
              </motion.h2>
      
              <motion.p
                className="text-4xl md:text-xl text-gray-400 max-w-4xl mx-auto"
                variants={fadeUp}
              >
                Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service. Choose the required runtimes and install different software stacks just in a few clicks.
              </motion.p>
            </motion.div>
      {/* Top Section */}
     <motion.div
  className="max-w-6xl mx-auto flex flex-col gap-10"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>

  {/* Top Row (2 Cards) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <motion.div variants={fadeUp}>
      <Cards
        imageSrc="/card1.png"
        title="Automate repetitive tasks"
        description="We help you streamline internal operations by automating manual workflows"
        
      />
    </motion.div>

    <motion.div variants={fadeUp}>
      <Cards
        imageSrc="/card2.png"
        title="Automated Workflows"
        description="Boost efficiency with intelligent workflows that automate multi-step processes"
        
      />
    </motion.div>
  </div>

  {/* Bottom Row (3 Cards) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    <motion.div variants={fadeUp}>
      <Cards
        imageSrc="/card1.png"
        title="Real-Time Intelligence"
        description="Make smarter decisions with real-time data insights"
        
      />
    </motion.div>

    <motion.div variants={fadeUp}>
      <Cards
        imageSrc="/card2.png"
        title="Custom AI Agent Development"
        description="We develop custom AI agents that integrate seamlessly with your tools"
        
      />
    </motion.div>

    <motion.div variants={fadeUp}>
      <Cards
        imageSrc="/card1.png"
        title="AI Strategy Consulting"
        description="Get expert guidance to implement AI solutions that drive business growth"
        
      />
    </motion.div>
  </div>

</motion.div>


    </section>
  );
}
