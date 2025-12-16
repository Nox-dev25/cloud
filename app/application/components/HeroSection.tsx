"use client";
import HomePage from "./hero-bg";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden pt-40 pb-40 min-h-[100vh]">
      <div className="absolute inset-0 z-0 h-full">
        <HomePage />
      </div>

      <div className="relative z-10 text-center px-4 pt-10"> 
  <h1
    className="text-5xl md:text-7xl font-semibold mb-10 
    bg-gradient-to-r from-white to-gray-700 
    bg-clip-text text-transparent">
    Deploy Cloud Apps With
    <span className="block mt-6"> Confidence and Scale</span>
  </h1>

  {/* <p className="text-lg md:text-2xl text-gray-500 mb-10">
    One platform for all your cloud applications. Simple, secure, and infinitely scalable
  </p> */}

  <div className="flex flex-wrap justify-center gap-10 text-gray-300 text-xl">
  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>

  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>

  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>

  <span className="flex items-center gap-2">
    • <span>Enterprise Security</span>
  </span>
</div>


<div className="mt-24 flex justify-center gap-6">
  <button
    className="w-40 h-14 rounded-lg bg-black border border-white/20 text-white text-lg 
               transition shadow-none 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] 
               hover:text-white hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
    Explore More
  </button>

  <button
    className="w-40 h-14 rounded-lg bg-black border border-white/20 text-white text-lg 
               transition shadow-none 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] 
               hover:text-white hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
    Get Started
  </button>
</div>

</div>

    </section>
  );
}
