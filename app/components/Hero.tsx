"use client";
import ClientLogos from "./Clients";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center 
        text-center px-4 sm:px-6 md:px-10 lg:px-20 
        -translate-y-4 md:-translate-y-10"
      >

        {/* HERO TITLE */}
        <h1
            className="font-sora cn-h1 font-medium opacity-0 animate-zoom-in
            leading-tight md:leading-[3.5rem] lg:leading-[4rem]
            -translate-y-10 text-[clamp(1.8rem,5vw,4rem)]"
          >
          <span className="block from-white via-gray-300">
            Power Your Future With Scalable
          </span>
          <span className="block mt-3 md:mt-5 from-white via-gray-300">
            Cloud Solution
          </span>
        </h1>

        {/* FEATURES LIST */}
        <ul
  className="
    grid grid-cols-3 gap-y-4 gap-x-2
    sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-6 md:gap-10
    text-gray-200 font-medium opacity-0 animate-zoom-in-delay
    mt-6 sm:mt-10 md:mt-14 lg:mt-20
    text-base sm:text-lg md:text-xl
  "
>
  {/* ROW 1 LEFT */}
  <li className="font-sora col-span-1 text-center sm:text-left">
    Fast Deployment
  </li>

  {/* ROW 1 DOT */}
  <li className="font-sora col-span-1 flex justify-center text-gray-400 text-2xl md:text-4xl">
    &bull;
  </li>

  {/* ROW 1 RIGHT */}
  <li className="font-sora col-span-1 text-center sm:text-left">
    Scalable Infrastructure
  </li>

  {/* ROW 2 LEFT */}
  <li className="font-sora col-span-1 text-center sm:text-left">
    99.99% Uptime
  </li>

  {/* ROW 2 DOT */}
  <li className="font-sora col-span-1 flex justify-center text-gray-400 text-2xl md:text-4xl">
    &bull;
  </li>

  {/* ROW 2 RIGHT */}
  <li className="font-sora col-span-1 text-center sm:text-left">
    Secure & Reliable
  </li>
</ul>

        {/* CTA BUTTON */}
        <a
          href="#"
          className="mt-6 sm:mt-8 md:mt-10 inline-block
          bg-gradient-to-b from-[#4E8AFF] to-[#2C64F7]
          text-white 
          font-medium
          rounded-2xl 
          px-6 py-4
          flex items-center gap-2
          shadow-[0_4px_12px_rgba(46,108,255,0.4)]
          hover:shadow-[0_6px_16px_rgba(46,108,255,0.55)]
          transition-all
          whitespace-nowrap"
        >
          Get Started
        </a>
      </div>

      {/* CLIENT LOGOS */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 w-full z-20 animate-zoom-in">
        <ClientLogos transparent />
      </div>
    </section>
  );
}
