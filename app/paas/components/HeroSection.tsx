"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientDots } from "../../components/ui/gradient-dots";
import ClientLogos from "../../components/Clients";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { ShaderAnimation } from "@/app/components/ui/shader-animation";

export default function HeroSection() {
  return (
    <section className="relative w-full  bg-black overflow-hidden pt-52 pb-0">

      {/* ⭐ 1. SHADER BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ShaderAnimation />
      </div>

      {/* ⭐ 2. GRAYSCALE OVERLAY */}
      <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none 
                      bg-black/60 backdrop-blur-[1px] 
                      mix-blend-normal 
                      grayscale">
      </div>

      {/* ⭐ 3. CONTENT ABOVE EVERYTHING */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mb-20">

        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl font-semibold mb-10 
          bg-gradient-to-r from-white to-gray-400 
          bg-clip-text text-transparent">
          Sign Up And Deploy Your
          <span className="block mt-6">Application For Free</span>
        </h1>

        {/* Email input + button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full sm:flex-1 px-4 py-3 rounded-full bg-black/70 border border-gray-700 text-white placeholder-gray-400"
          />
          <button className="inline-block px-7 py-3 bg-black/70 text-white font-medium rounded-full 
            shadow-[0_0_12px_rgba(192,192,192,0.6)]
            hover:shadow-[0_0_24px_rgba(192,192,192,1)]
            text-lg">
            Sign up
          </button>
        </div>

      </div>

      {/* ⭐ Dashboard */}
      <div className="-mt-80 relative z-10">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative w-full max-w-[1200px] mx-auto">
            <Image
              src="/dashboard.png"
              alt="Dashboard preview"
              width={1200}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* ⭐ Clients */}
      <div className="-mt-72 relative z-10">
        <ClientLogos transparent />
      </div>
    </section>
  );
}
