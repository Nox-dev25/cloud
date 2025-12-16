"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Sparkles, Target, Layers, Gauge, Shield } from "lucide-react"; // example icons

const cardStyle = `
  relative
  rounded-xl
  bg-[linear-gradient(135deg,#0d0d0d,#050505)]
  border border-white/10
  shadow-[0_0_10px_rgba(0,0,0,0.5)]
  backdrop-blur-xs
  overflow-hidden
  transition-all duration-300
  hover:scale-[1.02]
  hover:border-white/20
  hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
  p-6
  flex flex-col
  gap-4
`;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
}

function FeatureCard({ icon, title, description, imageSrc, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(cardStyle, className, "relative")}
    >
      {/* Background image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-xl z-0 filter grayscale"
        />
      )}
      
      {/* Overlay for readability */}
      {imageSrc && <div className="absolute inset-0 bg-black/50 rounded-xl z-10"></div>}

      {/* Content on top of image */}
      <div className="relative z-20 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="text-white">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export default function FeatureSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 md:px-8 -mt-24", className)}>
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="inline-block border border-gray-500 text-gray-500 uppercase text-sm px-3 py-1 rounded-full mb-2 tracking-wide">
          Features
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4">
          Cloud Platform For Developers
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
          Deploy your application instantly on our fully redundant, high performance and scalable Cloud Platform-as-a-Service.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-3 md:grid-rows-3 auto-rows-[minmax(180px,auto)]">
        <FeatureCard
          icon={<Zap size={24} />}
          title="Fast Deployment"
          description="Deploy your apps instantly with zero downtime."
          imageSrc="/feature-img.jpg" // replace with your image path
          className="md:col-span-1 md:row-span-3 min-h-[400px]"
        />
        <FeatureCard
          icon={<Sparkles size={24} />}
          title="High Performance"
          description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
          className="min-h-[200px]"
        />
        <FeatureCard
          icon={<Target size={24} />}
          title="Scalable"
          description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
          className="min-h-[200px]"
        />
        <FeatureCard
          icon={<Layers size={24} />}
          title="Multi-Layer Security"
          description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
          className="min-h-[200px]"
        />
        <FeatureCard
          icon={<Gauge size={24} />}
          title="Monitoring"
          description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
          className="min-h-[200px]"
        />
        <FeatureCard
          icon={<Shield size={24} />}
          title="Reliability"
          description="Cantech Cloud dashboard provides intuitive application topology wizard, deployment manager, access to log and config files, team collaboration functionality and integration with CI/CD tools"
          className="md:col-span-2 min-h-[250px]"
        />
      </div>
    </section>
  );
}
