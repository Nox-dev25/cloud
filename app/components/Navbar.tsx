"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-4 sm:px-6 md:px-8">
      <div
        className={`
          mx-auto
          bg-transparent
          backdrop-blur-xl
          border border-white/20
          rounded-full
          shadow-lg
          px-6 md:px-8
          h-[75px]
          flex items-center
          transition-all duration-300 ease-out
          ${scrolled ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl" : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"}
        `}
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        {/* LEFT LOGO */}
        <div className="flex-1 flex items-center gap-2">
          <img src="https://cloudpeak-astro.vercel.app/_astro/logo.afsN31bw_rxodi.svg" alt="Cantech Cloud Logo" className="h-10 w-auto"/>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 font-medium text-white/80 whitespace-nowrap">
          <li><Link href="#" className="hover:text-white transition font-sora font-normal">Application</Link></li>
          <li><Link href="#" className="hover:text-white transition font-sora font-normal">Database</Link></li>
          <li><Link href="#" className="hover:text-white transition font-sora font-normal">Storage</Link></li>
          <li><Link href="#" className="hover:text-white transition font-sora font-normal">Pricing</Link></li>
        </ul>

        {/* RIGHT CTA - DESKTOP */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="#"
            className="
              bg-transparent
              text-white 
              font-medium 
              rounded-full 
              px-6 py-2 
              flex items-center gap-2 
              hover:[text-shadow:0_0_10px_rgba(255,255,255,1)]
              transition 
              whitespace-nowrap
            "
          >
            Get Started →
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      {open && (
        <div className="md:hidden mt-3 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-lg
                        transition-all duration-300">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li><Link href="#" className="hover:text-gray-300">Application</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Database</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Storage</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Pricing</Link></li>
          </ul>

          <Link
            href="#"
            className="
              mt-6 block text-center
              bg-black/70 
              rounded-full 
              py-3 
              font-medium 
              shadow-[0_0_12px_rgba(192,192,192,0.6)]
              hover:shadow-[0_0_24px_rgba(192,192,192,1)]
            "
          >
            Get Started →
          </Link>
        </div>
      )}
    </nav>
  );
}
