"use client";
import { motion, Variants, easeOut } from "framer-motion";
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

export default function Footer() {
  return (
   <footer className="w-full bg-black text-gray-300 py-12">
  <div className="max-w-7xl mx-auto px-6">


        {/* Logo on top */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">Cantech Cloud</h2>
          {/* If you have an actual logo image: */}
          {/* <Image src="/logo.svg" width={120} height={40} alt="logo" /> */}
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white ">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">eKYC Verification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acceptable Usage Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SLA</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white ">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white ">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Solution</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white ">
              Support
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">@plainsupport</a></li>
            </ul>
          </div>

        </div>
        <motion.div
  className="w-full h-px my-12 bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"
  variants={fadeUp}
/>


      {/* Bottom Text */}
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} CantechCloud. All rights reserved.
    </div>
      </div>
    </footer>
  );
}
