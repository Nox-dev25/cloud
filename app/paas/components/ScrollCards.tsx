"use client";

import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import {
  Zap,
  Sparkles,
  Target,
  Layers,
  Gauge,
  Shield,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface CardData {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
}

const badgeVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const cardsData: CardData[] = [
  { id: 1, icon: Zap, title: "Lightning Fast", description: "Experience unprecedented speed with our optimized architecture. Built for performance from the ground up.", stats: "99.9% uptime" },
  { id: 2, icon: Sparkles, title: "Beautiful Design", description: "Clean interface with delightful animations and perfect spacing.", stats: "100+ components" },
  { id: 3, icon: Target, title: "Precision Control", description: "Fine-tuned systems give you complete command effortlessly.", stats: "Sub-ms latency" },
  { id: 4, icon: Layers, title: "Layered Architecture", description: "Scalable, clean, modern structure built for long-term use.", stats: "Enterprise ready" },
  { id: 5, icon: Gauge, title: "Real-time Analytics", description: "Live insights and dashboards to make faster decisions.", stats: "Live dashboards" },
  { id: 6, icon: Shield, title: "Enterprise Security", description: "Your data stays protected with best-in-class encryption.", stats: "SOC 2 certified" },
];

export default function ScrollCards() {
  const [isSticky, setIsSticky] = useState(true);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsSticky(false); // Stop sticky
        } else {
          setIsSticky(true); // Resume sticky when scrolling back up
        }
      },
      { threshold: 0.5 }
    );

    if (endRef.current) observer.observe(endRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="scroll-cards" className="relative bg-black py-20">
      <div className="max-w-5xl mx-auto relative">

        {/* ⭐ Sticky / Not Sticky header */}
        <div
          className={`z-10 bg-black pt-4 pb-2 ${
            isSticky ? "sticky top-0" : "static"
          }`}
        >
          <motion.div
            className="w-full flex justify-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={badgeVariants}
          >
            <p className="inline-block border border-gray-500 text-gray-400 uppercase text-xs md:text-sm px-3 py-1 rounded-full tracking-wide">
              Feature
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl lg:text-6xl font-medium bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text mb-6">
                Cloud Platform For Developers
              </h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto">
                Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Cards */}
        <div className="relative -mt-36">
          {cardsData.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Sentinel to detect the end */}
        <div ref={endRef} className="h-10"></div>

      </div>
    </section>
  );
}
